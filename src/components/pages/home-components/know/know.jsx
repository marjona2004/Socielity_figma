import know1 from "/public/mock-imges/mock-imges/know1.png"
import know2 from "/public/mock-imges/mock-imges/know2.png"
import muzik from "/public/mock-imges/mock-imges/icons/muzik_icon.svg"
import muzik_icon_child from  "/public/mock-imges/mock-imges/icons/muzik_icon_child.svg"
import know_img_2 from "/public/mock-imges/mock-imges/know_img_2.svg"
export const Know = () => {
  return <div className="mb-[150px] ">
     <h1 className="text-center font-bold text-2xl" >They love us! Do you know why?</h1>
     <p className="text-center my-[40px]">The following videos are currently in production.  In the meantime, please use our Help Center.</p>
     <div className="flex gap-[20px] ">
      <div className="relative ">
      <img src={know1} alt="" className="rounded-3xl" />
      <img src={know_img_2} alt=""  className="absolute top-0 left-0"/>
      <img src={muzik} alt="" className="absolute top-[100px] left-[230px]" />
      <img src={muzik_icon_child} alt="" className="absolute top-[130px] left-[270px]" />

      <p className="absolute top-[200px] left-[30px] text-white font-bold text-2xl">What is <br /> Sociality? <br /><br /> Sociality</p>
      </div>
       <div className="relative">
       <img src={know2} alt="" className="rounded-3xl" />
       <img src={know_img_2} alt=""  className="absolute top-0 left-0"/>
       <img src={muzik} alt="" className="absolute top-[100px] left-[230px]" />
      <img src={muzik_icon_child} alt="" className="absolute top-[130px] left-[270px]" />
       <p className="absolute top-[200px] left-[30px] text-white font-bold text-2xl">Customer <br /> Testimonials <br /><br />Sociality</p>
       </div>
       
     </div>
  </div>;
};
