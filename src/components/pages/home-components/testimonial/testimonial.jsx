import skaylar from "/public/mock-imges/mock-imges/skylar_img.svg"
import skaylar2 from "/public/mock-imges/mock-imges/skaylar_img_two.svg"
import skylar_round from "/public/mock-imges/mock-imges/icons/skylar_round.svg"
import skylar_icon_two from "/public/mock-imges/mock-imges/icons/skylar_icon_two.svg"

export const Testimonial = () => {
  return <div>
    <div className="flex gap-[150px] mb-[100px]">
      <div className="relative">
      <img src={skaylar} alt="" className="w-[300px"/>
      <img src={skylar_round} alt="" className="absolute top-[40px]  left-[420px]"/>
      <img src={skylar_icon_two} alt="" className="absolute  top-[260px] left-[70px]"/>
      </div>
     
    
    
      <div className="pt-[10px]  ">
          <h2 className="font-bold text-xl">Skylar George</h2>
          <p className="mt-[10px]">Managing Director, Lovgency Company</p> <br />
           <h3 className="font-bold text-sm">“You'll want to use a format that's viewable for your <br /> potential leads and aligns closely with their values. To <br /> give you an idea of how testimonials can be portrayed, <br /> below are the different testimonial types that you can use <br /> to show off your customers' stories”</h3>
           <div className="flex">
            <img src={skaylar2} alt="" className="mt-[30px]"/>

           </div>
      </div>

    </div>
  </div>;
};
