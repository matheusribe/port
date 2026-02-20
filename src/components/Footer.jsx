export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 dark:border-slate-700 py-6 mt-auto">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {year} Matheus Costa Ribeiro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
