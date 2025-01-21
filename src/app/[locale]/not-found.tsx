'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split('/')[1]; // Get current locale from URL

  return (
    <main className="flex-grow flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
            {t('not_found.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            {t('not_found.description')}
          </p>
        </div>
        
        <Link 
          href={`/${locale}`}
          className="inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 transform hover:scale-105"
        >
          {t('not_found.back_home')}
        </Link>
      </div>
    </main>
  );
}
