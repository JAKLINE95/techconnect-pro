'use client';

import { useState } from 'react';

// Данные для демо-поставщика
const supplierData = {
  name: "ООО 'ТехноСофт Решения'",
  email: "contact@technosoft.ru", 
  plan: "Бизнес",
  rating: 4.9,
  totalProducts: 8,
  activeProducts: 8,
  monthlyViews: 1247,
  leadsReceived: 45,
  revenue: "124,800 ₽"
};

const demoProducts = [
  {
    id: 1,
    name: "CRM система ProSales",
    status: "active",
    views: 347,
    leads: 12,
    rating: 4.8,
    price: "от 1 490 ₽/мес"
  },
  {
    id: 2, 
    name: "Мобильное приложение для CRM",
    status: "active",
    views: 289,
    leads: 8,
    rating: 4.6,
    price: "от 790 ₽/мес"
  },
  {
    id: 3,
    name: "Аналитика продаж Advanced",
    status: "active", 
    views: 156,
    leads: 5,
    rating: 4.7,
    price: "от 2 990 ₽/мес"
  }
];

export default function SupplierDashboard() {
  const [products, setProducts] = useState(demoProducts);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

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
        {/* Приветствие и статистика */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Добро пожаловать, {supplierData.name}!
          </h1>
          <p className="text-gray-600">Это демо-версия личного кабинета поставщика</p>
        </div>

        {/* Карточки статистики */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl font-bold text-gray-900">{supplierData.totalProducts}</div>
            <div className="text-gray-600">Всего продуктов</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl font-bold text-green-600">{supplierData.monthlyViews}</div>
            <div className="text-gray-600">Просмотров за месяц</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl font-bold text-blue-600">{supplierData.leadsReceived}</div>
            <div className="text-gray-600">Получено лидов</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-2xl font-bold text-purple-600">{supplierData.revenue}</div>
            <div className="text-gray-600">Оборот</div>
          </div>
        </div>

        {/* Заголовок и кнопка добавления */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Мои продукты</h2>
          <button 
            onClick={() => setIsAddProductOpen(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            + Добавить продукт
          </button>
        </div>

        {/* Таблица продуктов */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Продукт</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Статус</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Просмотры</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Лиды</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Рейтинг</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-600">{product.price}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Активен
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{product.views}</td>
                  <td className="px-6 py-4 text-blue-600 font-medium">{product.leads}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-900">{product.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Редактировать
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Блок "Как это работает" для демо */}
        <div className="bg-blue-50 rounded-xl p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Как работает кабинет поставщика:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Добавляйте неограниченное количество продуктов</li>
            <li>• Получайте квалифицированные лиды от AI-консультанта</li>
            <li>• Отслеживайте статистику просмотров и конверсий</li>
            <li>• Управляйте заявками в реальном времени</li>
          </ul>
        </div>
      </main>

      {/* Модальное окно добавления продукта (демо) */}
      {isAddProductOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Добавление нового продукта</h3>
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Например: CRM система для малого бизнеса"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Описание</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Опишите ключевые возможности продукта..."
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Категория</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option>Маркетинг и продажи</option>
                      <option>Финансы и бухгалтерия</option>
                      <option>Управление персоналом</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Цена</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="от 1 490 ₽/мес"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={() => setIsAddProductOpen(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Отмена
                </button>
                <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
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