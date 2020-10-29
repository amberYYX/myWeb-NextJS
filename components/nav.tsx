
export default function Nav(){
  return(
    <nav>
       {/* <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div> */}
        <ul className="flex">
  <li className="mr-6">
    <a className="text-blue-500 hover:text-blue-800" href="/">Home</a>
  </li>

  <li className="mr-6">
    <a className="text-blue-500 hover:text-blue-800" href="/projects">Projects</a>
  </li>
  
  <li className="mr-6">
    <a className="text-blue-500 hover:text-blue-800" href="/contact">Contact</a>
  </li>

  <li className="mr-6">
    <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
  </li>
</ul>
    </nav>
  );
}