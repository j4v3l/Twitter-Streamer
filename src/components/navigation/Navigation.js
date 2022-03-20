function Navigation({ name, children }) {
  return (
    <div>
      <nav className="flex items-center justify-between max-w-3xl p-4 mx-auto">
        <button className="inline-flex items-center font-medium px-3 py-2 text-gray-500 text-sm justify-center  bg-gray-100 rounded-lg">
          {name}
        </button>
        <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">
          {children}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
