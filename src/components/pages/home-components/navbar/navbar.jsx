import Button from "../../../common/button/Button";

export const Navbar = () => {
  return <div className="flex justify-between text-center   pt-[24px] pb-[127px] h-[10px]  " >
       <div className="text-blue-700 text-4xl font-bold ">
       Socielity
       </div>
       <ul className="flex gap-[30px] text-base pt-2 font-semibold ">
        <li><a href="#" className=" hover:text-red-600  hover:border-b-4">Socielity</a></li>
        <li><a href="#" className=" hover:text-red-600 hover:border-b-4">Resources</a></li>
        <li><a href="#" className=" hover:text-red-600 hover:border-b-4">Platfrom</a></li>
        <li><a href="#" className=" hover:text-red-600 hover:border-b-4">Support</a></li>
        <li><a href="#" className=" hover:text-red-600 hover:border-b-4" >Login</a></li>
       </ul>
        <Button>Explore More</Button>
  </div>;
};
