import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="#" className="flex items-center space-x-2" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">SehatScan</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              AI-powered health risk assessment platform combining advanced image processing and machine learning to
              transform healthcare data into actionable insights.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                <GithubIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                <LinkedinIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Customers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Brand
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" prefetch={false}>
                  Report a vulnerability
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          <div className="flex justify-between">
            <p>© 2024 SehatScan. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-700 dark:hover:text-gray-300" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-700 dark:hover:text-gray-300" prefetch={false}>
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-gray-700 dark:hover:text-gray-300" prefetch={false}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.3.8-2.8.8c-1.5 0-2.8-.8-2.8-.8s.2 2.1.2 3.4c0 1.3-1.5 4.4-4.4 4.4s-4.4-3.1-4.4-4.4c0-1.3.2-3.4.2-3.4s-1.3.8-2.8.8c-1.5 0-2.8-.8-2.8-.8s1.7-3 3.3-4.4C.7 6.1 0 4 0 4s2.1 1.3 3.3 1.3c1.2 0 3.3-1.3 3.3-1.3s1.3 1.3 3.3 1.3c2 0 3.3-1.3 3.3-1.3s.7 2.1 2 3.4c1.3-1.1 2.8-2.6 2.8-2.6z" />
    </svg>
  );
}
