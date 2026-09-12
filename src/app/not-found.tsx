export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream-50 px-6 text-center text-ink-950">
      <div>
        <p className="eyebrow text-ink-500">404</p>
        <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-ink-600">The page you requested does not exist.</p>
      </div>
    </main>
  );
}
