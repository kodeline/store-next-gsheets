

function Navbar() {
  return (
    <nav className="flex justify-between my-4 p-4 md:flex md:delil-antara md:item-center  border-gray-200">
  {/* Logo */}
  <div className=" text-2xl font-bold">KODEV</div>

  {/* Menu Hamburguesa */}
  <div className="md:hidden">
    <button className="">
      <svg
        className = "h-6 w-6 filler"
        xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
      >
       <h1>|||</h1>
      </svg>
    </button>
  </div>

  {/* Navigation links */ }
  <div className="hidden md:flex space-x-5 font-semibold text-lg">
    <a href="#" className="hover:text-blue-600">Inicio</a>
    <a href="#" className="hover:text-blue-600">Productos </a>
    <a href="#" className="hover:text-blue-600">Ofertas</a>
  </div>
</nav>
  )
}

export default Navbar;