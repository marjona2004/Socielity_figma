import Button from "../../../common/button/Button";
import youtube from "/public/imgs/youTube.svg"
export const Hero = () => {
  return <div className="mb-[100px]">
       <h1 className="text-center text-black font-bold text-4xl ">Your Private Online Marketplace <br /> Where <span className="text-blue-600 ">Socielities </span> That Comprise Your <br /> Personal <span className="text-blue-600  "> World</span></h1> 
       <p className="text-center font-normal py-[38px] text-[#666]">Your private online marketplace where you can trade goods and services with family, friends, neighbors, classmates, <br /> co-workers, and members of the many other communities that comprise your personal world.</p>
       <div className="ml-[490px] mb-[34px]">
       <Button>Explore More</Button>
      </div>
      <div className="flex  text-center justify-center gap-[10px]">
      <img src={youtube} alt="" />
      <p className="font-normal border-b-3-red border-b-4 text-[#666]" >Let's have a look</p>
      </div>
      
  </div>;
};
