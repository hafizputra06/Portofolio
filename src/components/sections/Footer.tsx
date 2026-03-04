export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} <strong>Hafiz Rahadian Putra</strong>. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Built with Passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
