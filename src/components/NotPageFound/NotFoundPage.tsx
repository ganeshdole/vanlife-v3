import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';




export default function NotFoundPage() {
    return (
      <>
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className='text-5xl'>¯\_(ツ)_/¯</p>
            <p className="text-base font-semibold text-gray-800">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button>
              <Link
               to="/"
              >
                Go back home
              </Link>
              </Button>
              <Link to="about" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }
  
