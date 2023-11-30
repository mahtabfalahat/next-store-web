export const Footer: React.FC = () => {
  return (
    <footer className="dark:border-base-content dark:border-opacity-5 ">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200 bg-white border-gray-200 dark:bg-gray-900 shadow-md">
        <p className="text-center text-gray-400">© {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};
