import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090a0c] px-4 text-center text-zinc-100">
      <div className="max-w-md space-y-6 rounded-lg border border-white/10 bg-[#111216] p-6">
        <div>
          <h1 className="text-7xl font-semibold tracking-normal text-emerald-300">404</h1>
          <h2 className="mt-4 text-2xl font-semibold tracking-normal text-white">Page not found</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <Button asChild className="bg-emerald-300 text-zinc-950 hover:bg-emerald-200">
          <Link href="/" className="flex items-center">
            <Home className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
