'use client';

import { useState } from 'react';

const productData = {
  id: 1,
  name: "CRM система ProSales",
  description: "Автоматизация продаж и ведение клиентской базы",
  fullDescription: "Полнофункциональная CRM-система для управления продажами, ведения клиентской базы и автоматизации бизнес-процессов. Подходит для малого и среднего бизнеса. Внедряется за 3 дня, техническая поддержка 24/7.",
  category: "Маркетинг и продажи",
  vendor: "ООО 'ТехноСофт Решения'",
  vendorRating: 4.9,
  price: "от 1 490 ₽/мес",
  rating: 4.8,
  reviews: 124,
  features: [
    "Ведение клиентской базы",
    "Автоматизация воронки продаж", 
    "Интеграция с телефонией и почтой",
    "Мобильное приложение",
    "Аналитика и отчеты в реальном времени",
    "Email-рассылки и автоворонки",
    "SCOR-метрики для отдела продаж"
  ],
  integrations: ["1С", "Битрикс24", "Telegram", "Email", "API"],
  support: "24/7 чат и телефон",
  trial: "14 дней бесплатно",
  implementation: "3-5 рабочих дней"
};

export default function ProductPage() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">TechConnect Pro</div>
          <nav className="flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-blue-600">Главная</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Поиск</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Профиль</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Корзина</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-blue-600">Главная</a>
          <span>›</span>
          <a href="#" className="hover:text-blue-600">{productData.category}</a>
          <span>›</span>
          <span className="text-gray-900">{productData.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Видео-презентация</h3>
              <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-lg mb-2">🎬</div>
                  <p>Видео-презентация решения</p>
                  <p className="text-sm">(будет доступно после запуска)</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={() => setIsAIChatOpen(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Консультация с AI-менеджером
              </button>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Добавить в корзину
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors border border-gray-300">
                Добавить в избранное
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-sm text-gray-600">Поставщик</div>
                  <div className="font-semibold text-gray-900">{productData.vendor}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Рейтинг поставщика</div>
                  <div className="font-semibold text-green-600">{productData.vendorRating}/5.0</div>
                </div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  {productData.name}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {productData.rating} ({productData.reviews})
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {productData.fullDescription}
              </p>

              <div className="text-xl font-bold text-gray-900 mb-6 border-t pt-4">
                {productData.price}
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Ключевые возможности:</h3>
                <ul className="space-y-2">
                  {productData.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <span className="text-green-500 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Технические детали</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Интеграции:</span>
                  <div className="text-gray-600 mt-1">{productData.integrations.join(', ')}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Техподдержка:</span>
                  <div className="text-gray-600 mt-1">{productData.support}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Тестовый период:</span>
                  <div className="text-gray-600 mt-1">{productData.trial}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Внедрение:</span>
                  <div className="text-gray-600 mt-1">{productData.implementation}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isAIChatOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Консультация с AI-менеджером</h3>
                <button 
                  onClick={() => setIsAIChatOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-600 text-center">
                  AI-консультант скоро будет доступен<br/>
                  Сейчас мы работаем над этой функцией
                </p>
              </div>
              <button 
                onClick={() => setIsAIChatOpen(false)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Понятно
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}