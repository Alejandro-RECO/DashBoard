// Icons
import {
  RiHome3Line,
  RiFileCopyLine,
  RiWalletLine,
  RiPieChartLine,
  RiMore2Fill,
  RiCloseFill
} from "react-icons/ri";
import { useState } from "react";
const Sidebar = () => {
  const [showMenu, setMenu] = useState(false)


  return (
    <>
      <div className={`
        bg-primary-900 
        h-full 
        fixed 
        lg:static 
        w-[80%] 
        md:w-[45%] 
        lg:w-full  
        transition-all 
        duration-300
        z-50 
        ${ showMenu ? "left-0" : "-left-full"}`}>
        {/* Profile */}
        <div className="flex flex-col text-center items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src="https://unavatar.io/karolaylocarno"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
          />
          <h1 className="text-xl text-white font-bold">Karolay Locarno</h1>
          <p className="bg-primary-100 py-2 px-5   rounded-full text-white text-xs ">
            Pro level
          </p>
        </div>
        {/* Nav  */}
        <div className="bg-primary-300 py-10 px-2 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-20">
          <nav className="flex flex-col gap-8">
            <a
              href="#"
              className="flex items-center gap-4 text-white py-1 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiHome3Line />
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-1 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiFileCopyLine />
              Projects
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-1 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiWalletLine />
              Invoices
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-1 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiPieChartLine />
              Reports
            </a>
          </nav>
          <div className="bg-primary-900/50 text-white px-4 py-3 m-4 rounded-xl ">
            <p className="text-gray-400">Having troubles?</p>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>
      {/* Button mobile */}
      <button 
        onClick={()=> setMenu(!showMenu)}
        className=" 
        lg:hidden 
        fixed 
        right-4 
        bottom-4 
        text-2xl 
        bg-primary-900 
        p-2 rounded-full 
        text-white
        z-50
        ">
        {showMenu ? <RiCloseFill/>: <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;