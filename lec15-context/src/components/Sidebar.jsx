
const Sidebar = () => {

  return (
    <aside className="sidebar w-64 bg-gray-200 dark:bg-gray-800 p-4">
      <nav>
        <ul>
          <li><a href="/" className="text-gray-800 dark:text-gray-300 hover:underline">Home</a></li>
          <li><a href="/about" className="text-gray-800 dark:text-gray-300 hover:underline">About</a></li>
          <li><a href="/contact" className="text-gray-800 dark:text-gray-300 hover:underline">Contact</a></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
