/* eslint-disable jsx-a11y/alt-text */
import { Image } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { ImageGenerationForm } from '@/components/ImageGenerationForm';

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col bg-white transition-colors duration-200 dark:bg-zinc-900">
      <header className="mt-2 flex items-center justify-between rounded-2xl bg-zinc-100 p-4 shadow-md dark:bg-zinc-800">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-primary p-1">
            <Image className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Fal.ai Example</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="flex flex-grow flex-col items-center justify-center p-8">
        <h2 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-white">Image Generation with Fal.ai</h2>
        <ImageGenerationForm />
      </main>

      <footer className="mb-2 rounded-2xl bg-zinc-100 p-4 text-center text-sm text-zinc-600 shadow-md dark:bg-zinc-800 dark:text-zinc-400">
        © 2024 Fal.ai Example. All rights reserved.
      </footer>
    </div>
  );
}
