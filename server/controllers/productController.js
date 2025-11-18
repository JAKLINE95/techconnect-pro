import { products, productMetrics } from '../models/Product.js';

// Получить все продукты (без метрик)
export const getProducts = (req, res) => {
  const productsWithoutMetrics = products.map(({ 
    id, name, description, category, targetAudience, 
    pricingModel, price, keyFeatures, aiPrompt, vendorId, 
    status, createdAt 
  }) => ({
    id, name, description, category, targetAudience,
    pricingModel, price, keyFeatures, aiPrompt, vendorId,
    status, createdAt
  }));
  
  res.json(productsWithoutMetrics);
};

// Получить продукт по ID + его метрики
export const getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const metrics = productMetrics.find(m => m.productId === req.params.id);
  
  res.json({
    ...product,
    metrics: metrics || null
  });
};

// Создать новый продукт
export const createProduct = (req, res) => {
  const newProduct = {
    id: (products.length + 1).toString(),
    ...req.body,
    createdAt: new Date()
  };
  
  products.push(newProduct);
  res.status(201).json(newProduct);
};
