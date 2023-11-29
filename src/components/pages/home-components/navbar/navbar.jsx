import Button from "../../../common/button/Button";

export const Navbar = () => {
  return <div className="flex justify-between text-center   pt-[24px] pb-[127px] " >
       <div className="text-blue-700 text-4xl font-bold">
       Socielity
       </div>
       <ul className="flex gap-[30px] text-base pt-2 font-semibold">
        <li><a href="#">Socielity</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Platfrom</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Login</a></li>
       </ul>
        <Button>Explore More</Button>
  </div>;
};
