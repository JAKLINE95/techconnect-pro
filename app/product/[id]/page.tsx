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

const reviewsData = [
  {
    id: 1,
    name: "Анна Петрова",
    company: "ООО 'Вектор'",
    rating: 5,
    date: "15.11.2024",
    excerpt: "Внедрили CRM за 2 дня! Отличная техподдержка, помогли настроить все процессы. Автоматизация сэкономила нам 20 часов в неделю.",
    fullReview: "Мы искали CRM-систему несколько месяцев и остановились на ProSales. Внедрение заняло всего 2 дня - техподдержка работала практически круглосуточно. Особенно хочу отметить удобство мобильного приложения - менеджеры могут работать из anywhere. За первый месяц автоматизировали 80% рутинных задач, что сэкономило примерно 20 рабочих часов в неделю. Рекомендую!"
  },
  {
    id: 2,
    name: "Иван Сидоров",
    company: "ИП Сидоров",
    rating: 4,
    date: "10.11.2024",
    excerpt: "Хорошее соотношение цены и качества. Интеграция с Telegram очень упростила коммуникацию.",
    fullReview: "Как индивидуальный предприниматель, я долго искал недорогое, но функциональное решение. ProSales полностью оправдал ожидания. Особенно порадовала интеграция с Telegram - все уведомления приходят сразу в мессенджер, не нужно постоянно заходить в систему. Из минусов - иногда подвисает при большом количестве одновременных операций, но техподдержка всегда помогает решить вопросы."
  },
  {
    id: 3,
    name: "Мария Козлова",
    company: "Студия дизайна 'АртВзгляд'",
    rating: 5,
    date: "05.11.2024",
    excerpt: "Отличная аналитика! Теперь видим все метрики продаж в реальном времени.",
    fullReview: "Мы дизайн-студия, и раньше вели учет в таблицах. ProSales полностью изменил наш подход к продажам. Аналитика в реальном времени позволяет сразу видеть эффективность каждого менеджера, воронку продаж и конверсию. Внедрили SCOR-метрики - теперь точно понимаем, где теряем клиентов. За 2 месяца увеличили конверсию на 15%!"
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    company: "ООО 'ТехноПрофи'",
    rating: 4,
    date: "01.11.2024",
    excerpt: "Удобный интерфейс, сотрудники быстро освоили. Email-рассылки работают стабильно.",
    fullReview: "Внедряли систему для отдела продаж из 8 человек. Интерфейс интуитивно понятный - обучение заняло всего 1 день. Очень довольны функционалом email-рассылок: шаблоны легко настраиваются, статистика открытий и переходов помогает оптимизировать контент. Единственное, хотелось бы больше готовых интеграций с другими сервисами."
  },
  {
    id: 5,
    name: "Елена Смирнова",
    company: "Центр обучения 'Профи'",
    rating: 5,
    date: "28.10.2024",
    excerpt: "Автоворонки просто супер! Автоматизировали весь процесс ведения клиентов.",
    fullReview: "Работаем в сфере образования, у нас длинный цикл продаж. Автоворонки в ProSales позволили автоматизировать все этапы: от первого контакта до закрытия сделки. Настроили триггерные письма, напоминания менеджерам, автоматические задачи. Клиенты больше не теряются, каждый получает своевременную коммуникацию. Результат: на 30% больше закрытых сделок за месяц!"
  }
];

export default function ProductPage() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
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
        {/* Хлебные крошки */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-blue-600">Главная</a>
          <span>›</span>
          <a href="#" className="hover:text-blue-600">{productData.category}</a>
          <span>›</span>
          <span className="text-gray-900">{productData.name}</span>
        </nav>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Левая колонка - Видео и действия (шире) */}
          <div className="xl:col-span-3 space-y-6">
            {/* Видео блок - шире */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Видео-презентация</h3>
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-2 rounded-lg transition-all ${
                    isFavorite 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-100 text-gray-400 hover:text-red-500'
                  }`}
                >
                  <svg className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Горизонтальный layout видео - шире */}
              <div className="flex gap-6">
                {/* Миниатюры слева */}
                <div className="flex flex-col gap-3 w-40">
                  {videoPreviews.map((video) => (
                    <button
                      key={video.id}
                      onClick={() => setSelectedVideo(video.id)}
                      className={`p-3 rounded-lg text-left transition-all ${
                        selectedVideo === video.id 
                          ? 'bg-blue-50 border border-blue-200' 
                          : 'bg-gray-50 border border-transparent hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 bg-white rounded flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">{video.title}</div>
                          <div className="text-xs text-gray-500">{video.duration}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Основное видео - шире */}
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-lg font-semibold text-gray-800">{videoPreviews.find(v => v.id === selectedVideo)?.title}</p>
                      <p className="text-sm text-gray-500 mt-1">Длительность: {videoPreviews.find(v => v.id === selectedVideo)?.duration}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопки действий */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <button 
                  onClick={() => setIsAIChatOpen(true)}
                  className="bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>AI Консультация</span>
                </button>
                
                <button className="bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>В корзину</span>
                </button>
                
                <button 
                  onClick={() => router.push(`/product/${productData.id}/demo-request`)}
                  className="bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Демо-доступ</span>
                </button>
              </div>

              {/* Блок отзывов с горизонтальным скроллом */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Отзывы клиентов</h3>
                  <span className="text-sm text-gray-500">{reviewsData.length} отзывов</span>
                </div>

                <div className="flex space-x-4 overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide">
                  {reviewsData.map((review) => (
                    <div
                      key={review.id}
                      onClick={() => setSelectedReview(review)}
                      className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-semibold text-gray-900">{review.name}</div>
                          <div className="text-sm text-gray-500">{review.company}</div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex text-yellow-400">
                            {'★'.repeat(review.rating)}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 line-clamp-3">{review.excerpt}</p>
                      <div className="mt-3 text-sm text-blue-600 font-medium">
                        Читать полностью →
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Здесь будут похожие товары */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Похожие товары</h3>
              <p className="text-center text-gray-500 py-8">
                Здесь будут карточки похожих товаров
              </p>
            </div>
          </div>

          {/* Правая колонка - Информация о продукте со скроллингом */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {productData.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{productData.rating}</span>
                    <span className="text-gray-500">({productData.reviews})</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {productData.fullDescription}
              </p>

              <div className="text-2xl font-bold text-gray-900 mb-6 border-t pt-6">
                {productData.price}
              </div>

              {/* Ключевые возможности - под описанием продукта */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ключевые возможности</h3>
                <div className="space-y-2">
                  {productData.features.map((feature, index) => (
                    <div key={index} className="text-gray-700">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Технические детали - под ключевыми возможностями */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Технические детали</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">Интеграции: </span>
                    <span className="text-gray-600">{productData.integrations.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Техподдержка: </span>
                    <span className="text-gray-600">{productData.support}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Внедрение: </span>
                    <span className="text-gray-600">{productData.implementation}</span>
                  </div>
                </div>
              </div>

              {/* Поставщик - просто текст без акцента */}
              <div className="pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600">Поставщик</div>
                <div className="text-gray-900">{productData.vendor}</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* AI Chat Modal */}
      {isAIChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl border shadow-lg">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Консультация с AI-менеджером</h3>
              <button 
                onClick={() => setIsAIChatOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-gray-600">
                  AI-консультант скоро будет доступен<br/>
                  Сейчас мы работаем над этой функцией
                </p>
              </div>
            </div>
            <div className="p-6 border-t">
              <button 
                onClick={() => setIsAIChatOpen(false)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Понятно
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Review Detail Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl border shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
              <h3 className="text-xl font-semibold text-gray-900">Отзыв клиента</h3>
              <button 
                onClick={() => setSelectedReview(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-lg font-semibold text-gray-900">{selectedReview.name}</div>
                  <div className="text-sm text-gray-500">{selectedReview.company}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(selectedReview.rating)}
                  </div>
                  <span className="text-sm text-gray-500">{selectedReview.date}</span>
                </div>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedReview.fullReview}
                </p>
              </div>
            </div>
            <div className="p-6 border-t">
              <button 
                onClick={() => setSelectedReview(null)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}