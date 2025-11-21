'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
  implementation: "3-5 рабочих дней"
};

const videoPreviews = [
  {
    id: 1,
    title: "Обзор интерфейса",
    duration: "2:15"
  },
  {
    id: 2, 
    title: "Работа с клиентами",
    duration: "3:45"
  },
  {
    id: 3,
    title: "Аналитика и отчеты",
    duration: "4:20"
  },
  {
    id: 4,
    title: "Мобильное приложение",
    duration: "2:50"
  }
];

export default function ProductPage() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-5 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-slate-800">TechConnect Pro</div>
          <nav className="flex space-x-6">
            <a href="/" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">Главная</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">Поиск</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">Профиль</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">Корзина</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-5 py-6">
        <nav className="flex items-center space-x-1 text-xs text-slate-500 mb-6">
          <a href="/" className="hover:text-blue-600 transition-colors">Главная</a>
          <span>›</span>
          <a href="#" className="hover:text-blue-600 transition-colors">{productData.category}</a>
          <span>›</span>
          <span className="text-slate-800 font-medium">{productData.name}</span>
        </nav>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
          {/* Left Column - Video & Actions */}
          <div className="xl:col-span-2 space-y-5">
            {/* Video Presentation */}
            <div className="bg-white rounded-lg border border-slate-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Видео-презентация</h3>
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-1.5 rounded transition-all duration-200 ${
                    isFavorite 
                      ? 'bg-red-500 text-white' 
                      : 'bg-slate-100 text-slate-400 hover:text-red-400 hover:bg-red-50'
                  }`}
                >
                  <svg className="w-4 h-4" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              {/* Main Video */}
              <div className="bg-slate-100 rounded-lg aspect-video flex items-center justify-center mb-4">
                <div className="text-center text-slate-600">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-base font-semibold text-slate-800">{videoPreviews.find(v => v.id === selectedVideo)?.title}</p>
                  <p className="text-xs mt-1 text-slate-500">{videoPreviews.find(v => v.id === selectedVideo)?.duration}</p>
                </div>
              </div>

              {/* Video Thumbnails */}
              <div className="grid grid-cols-4 gap-2 mb-5">
                {videoPreviews.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setSelectedVideo(video.id)}
                    className={`group relative rounded p-2 text-center transition-all duration-200 ${
                      selectedVideo === video.id 
                        ? 'bg-blue-50 border border-blue-200' 
                        : 'bg-slate-50 border border-transparent hover:border-slate-300'
                    }`}
                  >
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center mx-auto mb-1 shadow-xs">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    </div>
                    <div className="text-[10px] font-medium text-slate-800 truncate">{video.title}</div>
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button 
                  onClick={() => setIsAIChatOpen(true)}
                  className="bg-blue-600 text-white py-3 px-3 rounded font-semibold hover:bg-blue-700 transition-all duration-200 text-sm flex items-center justify-center space-x-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>AI</span>
                </button>
                
                <button className="bg-blue-600 text-white py-3 px-3 rounded font-semibold hover:bg-blue-700 transition-all duration-200 text-sm flex items-center justify-center space-x-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Купить</span>
                </button>
                
                <button 
                  onClick={() => router.push(`/product/${productData.id}/demo-request`)}
                  className="bg-blue-600 text-white py-3 px-3 rounded font-semibold hover:bg-blue-700 transition-all duration-200 text-sm flex items-center justify-center space-x-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Демо</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-5">
            {/* Product Header */}
            <div className="bg-white rounded-lg border border-slate-200 p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-xs font-medium text-slate-500 mb-0.5">Поставщик</div>
                  <div className="text-base font-semibold text-slate-900">{productData.vendor}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-medium text-slate-500 mb-0.5">Рейтинг поставщика</div>
                  <div className="text-base font-semibold text-green-600">{productData.vendorRating}/5.0</div>
                </div>
              </div>

              {/* Product Title & Rating */}
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-xl font-bold text-slate-900 leading-tight pr-2">
                  {productData.name}
                </h1>
                <div className="flex items-center space-x-1.5 bg-slate-50 px-2 py-1 rounded border border-slate-200 flex-shrink-0">
                  <div className="flex text-yellow-400 text-xs">
                    {'★'.repeat(5)}
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold text-slate-900">{productData.rating}</span>
                    <span className="text-slate-500"> ({productData.reviews})</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                {productData.fullDescription}
              </p>

              <div className="text-lg font-bold text-slate-900 mb-4 border-t border-slate-200 pt-4">
                {productData.price}
              </div>

              {/* Key Features */}
              <div className="mb-5">
                <h3 className="text-base font-semibold text-slate-900 mb-3">Ключевые возможности</h3>
                <div className="space-y-2">
                  {productData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 rounded bg-slate-50 border border-slate-200">
                      <div className="w-4 h-4 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                        <svg className="w-2 h-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Details */}
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-3">Технические детали</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                    <span className="text-sm font-medium text-slate-700">Интеграции</span>
                    <span className="text-sm text-slate-600">{productData.integrations.join(', ')}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                    <span className="text-sm font-medium text-slate-700">Поддержка</span>
                    <span className="text-sm text-slate-600">{productData.support}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-sm font-medium text-slate-700">Внедрение</span>
                    <span className="text-sm text-slate-600">{productData.implementation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Chat Modal */}
        {isAIChatOpen && (
          <div className="fixed inset-0 bg-slate-900/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-md border border-slate-200">
              <div className="flex justify-between items-center p-5 border-b border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">AI Консультация</h3>
                <button 
                  onClick={() => setIsAIChatOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-100 rounded"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-5">
                <div className="bg-slate-50 rounded p-4 text-center border border-slate-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-slate-700 text-sm font-medium">
                    AI-консультант в разработке
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    Скоро будет доступен
                  </p>
                </div>
              </div>
              <div className="p-5 border-t border-slate-200">
                <button 
                  onClick={() => setIsAIChatOpen(false)}
                  className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition-all duration-200 text-sm"
                >
                  Понятно
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}