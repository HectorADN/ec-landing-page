import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router";

export const CustomHeader = () => {

  const [isOpen, setIsOpen ] = useState(false);

  return ( 
    <nav className="bg-black/70">
      <div className="h-12 items-center flex justify-center">

        {/* Logo */}
        {/* <div className="text-white font-bold px-2">EC-Comercial</div> */}

        {/* Buttons desktop */}
        <div className="hidden md:block">
          <Link to="/" className="text-white px-4 hover:text-orange-400  duration-300">Inicio</Link>
          <Link to="category/all" className="text-white px-4 hover:text-orange-400  duration-300">Productos</Link>
          <Link to="information" className="text-white px-4 hover:text-orange-400  duration-300">Informaciones</Link>
          <Link to="about-us" className="text-white px-4 hover:text-orange-400  duration-300">Nosotros</Link>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden px-4 text-3xl text-white"
          ><CiMenuBurger />
        </button>    
      </div>

        {/* Buttons mobile */}
        <div className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden space-y-6 pb-3 bg-black/50 pt-10`}>
          <Link to="/" className="text-white px-4 block hover:text-orange-400  duration-300">Inicio</Link>
          <Link to="category/all" className="text-white px-4 block hover:text-orange-400  duration-300">Productos</Link>
          <Link to="information" className="text-white px-4 block hover:text-orange-400  duration-300">Informaciones</Link>
          <Link to="about-us" className="text-white px-4 block hover:text-orange-400  duration-300">Nosotros</Link>
        </div>  
    </nav>
  );
};
