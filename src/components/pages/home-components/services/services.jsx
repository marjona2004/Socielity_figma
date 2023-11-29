import Button from "../../../common/button/Button";
import services1 from "/public/mock-imges/mock-imges/services.png";
import services2 from "/public/mock-imges/mock-imges/services2.png";
import services3 from "/public/mock-imges/mock-imges/services3.png";
export const Services = () => {
  return <div >
    <div className="flex gap-[120px] mb-[126px]">
      <div>
         <img src={services1} alt="" className="w-[515px] h-[423px]" />
      </div>
      <div className="pt-[100px]">
          <h2 className="text-2xl text-black font-bold">You want to strengthen more of communities <br /> <br /> or groups you are associated with.</h2>
          <p className="py-[30px] font-normal text-[#666]">A simple definition is that leadership is the art of motivating a group of <br />
           people to act towards achieving a common goal. In a business setting, this <br /> can mean directing workers and colleagues with a strategy to meet the <br /> company's needs.</p>
           <Button>Explore More</Button>
      </div>
    </div>
    <div className="flex gap-[120px] mb-[126px]">
    <div className="pt-[100px]">
          <h2 className="text-2xl text-black font-bold">You want to strengthen more of communities <br /> <br /> or groups you are associated with.</h2>
          <p className="py-[30px] font-normal text-[#666]">A simple definition is that leadership is the art of motivating a group of <br />
           people to act towards achieving a common goal. In a business setting, this <br /> can mean directing workers and colleagues with a strategy to meet the <br /> company's needs.</p>
           <Button>Explore More</Button>
      </div>
      <div>
         <img src={services2} alt="" className="w-[515px] h-[423px]" />
      </div>
     
    </div>
    <div className="flex gap-[120px] mb-[126px]">
      <div>
         <img src={services3} alt="" className="w-[515px] h-[423px]"/>
      </div>
      <div className="pt-[100px]">
          <h2 className="text-2xl text-black font-bold">You want to strengthen more of communities <br /> <br /> or groups you are associated with.</h2>
          <p className="py-[30px] font-normal text-[#666]">A simple definition is that leadership is the art of motivating a group of <br />
           people to act towards achieving a common goal. In a business setting, this <br /> can mean directing workers and colleagues with a strategy to meet the <br /> company's needs.</p>
           <Button>Explore More</Button>
      </div>
    </div>

  </div>;
};
