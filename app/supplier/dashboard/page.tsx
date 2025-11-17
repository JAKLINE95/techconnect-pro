'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const supplierData = {
  name: "ООО 'ТехноСофт Решения'",
  email: "contact@technosoft.ru", 
  plan: "Бизнес",
  totalProducts: 8,
  monthlyViews: 1247,
  revenue: "124,800 ₽"
};

const demoProducts = [
  {
    id: 1,
    name: "CRM система ProSales",
    views: 347,
    price: "от 1 490 ₽/мес",
    aiConsultations: 67,
    successfulPayments: 8,
    leadsToManager: 4,
    inCart: 23,
    revenue: "89,600 ₽",
    rating: 4.8,
    reviews: 24
  },
  {
    id: 2, 
    name: "Мобильное приложение для CRM",
    views: 289,
    price: "от 790 ₽/мес",
    aiConsultations: 45,
    successfulPayments: 5,
    leadsToManager: 3,
    inCart: 18,
    revenue: "15,800 ₽",
    rating: 4.5,
    reviews: 18
  },
  {
    id: 3,
    name: "Аналитика продаж Advanced",
    views: 156,
    price: "от 2 990 ₽/мес",
    aiConsultations: 32,
    successfulPayments: 3,
    leadsToManager: 2,
    inCart: 9,
    revenue: "17,940 ₽",
    rating: 4.9,
    reviews: 12
  }
];

// Компонент звезд рейтинга
const RatingStars = ({ rating, reviews }: { rating: number; reviews: number }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex text-yellow-400">
        {'★'.repeat(Math.floor(rating))}
        {'☆'.repeat(5 - Math.floor(rating))}
      </div>
      <span className="text-sm font-medium text-gray-900">{rating}</span>
      <span className="text-sm text-gray-500">({reviews})</span>
    </div>
  );
};

// Компонент выпадающих метрик
const MetricsDropdown = ({ product, isOpen, onToggle, onClose }: { 
  product: any; 
  isOpen: boolean; 
  onToggle: () => void;
  onClose: () => void;
}) => {
  // Расчет метрик
  const metrics = {
    conversionRate: ((product.successfulPayments / product.views) * 100).toFixed(1),
    aiEfficiency: ((product.successfulPayments / product.aiConsultations) * 100).toFixed(1),
    averageOrder: Math.round(parseInt(product.revenue.replace(/\D/g, '')) / product.successfulPayments),
    engagement: ((product.inCart / product.views) * 100).toFixed(1),
    leadConversion: product.leadsToManager > 0 ? 
      ((product.successfulPayments / product.leadsToManager) * 100).toFixed(1) : '0.0'
  };

  // Закрытие при клике вне попапа
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.metrics-dropdown')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div className="relative metrics-dropdown">
      <button
        onClick={onToggle}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
      >
        Аналитика
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md border shadow-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
              <h4 className="font-semibold text-gray-900">Аналитика эффективности</h4>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {/* Конверсия просмотров */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Конверсия просмотров</div>
                    <div className="text-xs text-gray-500">общая эффективность</div>
                  </div>
                  <div className={`text-lg font-bold ${
                    parseFloat(metrics.conversionRate) > 3 ? 'text-green-600' : 
                    parseFloat(metrics.conversionRate) > 1 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {metrics.conversionRate}%
                  </div>
                </div>

                {/* Эффективность AI */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Эффективность AI</div>
                    <div className="text-xs text-gray-500">консультации → сделки</div>
                  </div>
                  <div className={`text-lg font-bold ${
                    parseFloat(metrics.aiEfficiency) > 20 ? 'text-green-600' : 
                    parseFloat(metrics.aiEfficiency) > 10 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {metrics.aiEfficiency}%
                  </div>
                </div>

                {/* Средний чек */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Средний чек</div>
                    <div className="text-xs text-gray-500">ценность клиента</div>
                  </div>
                  <div className="text-lg font-bold text-purple-600">
                    {metrics.averageOrder.toLocaleString()} ₽
                  </div>
                </div>

                {/* Вовлеченность */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Вовлеченность</div>
                    <div className="text-xs text-gray-500">просмотры → корзина</div>
                  </div>
                  <div className={`text-lg font-bold ${
                    parseFloat(metrics.engagement) > 15 ? 'text-green-600' : 
                    parseFloat(metrics.engagement) > 8 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {metrics.engagement}%
                  </div>
                </div>

                {/* Конверсия лидов */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Конверсия лидов</div>
                    <div className="text-xs text-gray-500">лиды → сделки</div>
                  </div>
                  <div className={`text-lg font-bold ${
                    parseFloat(metrics.leadConversion) > 70 ? 'text-green-600' : 
                    parseFloat(metrics.leadConversion) > 50 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {metrics.leadConversion}%
                  </div>
                </div>
              </div>

              {/* Легенда качества */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Высокая</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Средняя</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Низкая</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function SupplierDashboard() {
  const [products, setProducts] = useState(demoProducts);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [openMetricsId, setOpenMetricsId] = useState<number | null>(null);
  const router = useRouter();

  const goToProductPage = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  const handleMetricsToggle = (productId: number) => {
    setOpenMetricsId(openMetricsId === productId ? null : productId);
  };

  const handleMetricsClose = () => {
    setOpenMetricsId(null);
  };

  // Закрытие аналитики при открытии модального окна
  useEffect(() => {
    if (isAddProductOpen) {
      setOpenMetricsId(null);
    }
  }, [isAddProductOpen]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">TechConnect Pro</div>
          <nav className="flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-blue-600">Главная</a>
            <a href="/supplier/dashboard" className="text-blue-600 font-semibold">Мой кабинет</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Выйти</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Приветствие */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {supplierData.name}
          </h1>
          <p className="text-gray-600">Панель управления продажами</p>
        </div>

        {/* Сводка */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-2xl font-bold text-gray-900">{supplierData.totalProducts}</div>
            <div className="text-gray-600">Продуктов</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-gray-600">AI консультаций</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-2xl font-bold text-green-600">22</div>
            <div className="text-gray-600">Успешных сделок</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-2xl font-bold text-gray-900">{supplierData.revenue}</div>
            <div className="text-gray-600">Выручка</div>
          </div>
        </div>

        {/* Заголовок таблицы */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Продукты</h2>
          <button 
            onClick={() => setIsAddProductOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            + Добавить продукт
          </button>
        </div>

        {/* Таблица с рейтингом и аналитикой */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Продукт</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Рейтинг</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Просмотры</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">AI консультации</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">В корзине</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Сделки</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Выручка</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Аналитика</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => goToProductPage(product.id)}
                      className="text-left font-medium text-blue-600 hover:text-blue-800 hover:underline block mb-1"
                    >
                      {product.name}
                    </button>
                    <div className="text-sm text-gray-600">{product.price}</div>
                  </td>
                  <td className="px-6 py-4">
                    <RatingStars rating={product.rating} reviews={product.reviews} />
                  </td>
                  <td className="px-6 py-4 text-gray-900">{product.views}</td>
                  <td className="px-6 py-4 text-blue-600 font-medium">{product.aiConsultations}</td>
                  <td className="px-6 py-4 text-gray-900">{product.inCart}</td>
                  <td className="px-6 py-4 text-green-600 font-medium">{product.successfulPayments}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{product.revenue}</td>
                  <td className="px-6 py-4">
                    <MetricsDropdown 
                      product={product}
                      isOpen={openMetricsId === product.id}
                      onToggle={() => handleMetricsToggle(product.id)}
                      onClose={handleMetricsClose}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Пояснение */}
        <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Метрики продукта</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>• <span className="text-yellow-600 font-medium">Рейтинг</span> - оценка пользователей</div>
            <div>• <span className="text-blue-600 font-medium">AI консультации</span> - диалоги с AI-консультантом</div>
            <div>• <span className="text-gray-900 font-medium">В корзине</span> - добавления в корзину</div>
            <div>• <span className="text-green-600 font-medium">Сделки</span> - успешные продажи</div>
            <div>• Кликните на <span className="font-medium">"Аналитика"</span> для детальных метрик</div>
            <div>• Кликните на продукт для редактирования</div>
          </div>
        </div>
      </main>

      {/* Модальное окно добавления продукта */}
      {isAddProductOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl border shadow-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
              <h3 className="text-xl font-semibold text-gray-900">Добавление продукта</h3>
              <button 
                onClick={() => setIsAddProductOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Название продукта</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="CRM система для малого бизнеса"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Категория</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Маркетинг и продажи</option>
                      <option>Финансы и бухгалтерия</option>
                      <option>Управление персоналом</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Цена</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="от 1 490 ₽/мес"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={() => setIsAddProductOpen(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors border"
                >
                  Отмена
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Добавить продукт
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}