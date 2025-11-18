import express from 'express';
import cors from 'cors';
import productRoutes from './routes/products.js';

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Подключаем роуты
app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
