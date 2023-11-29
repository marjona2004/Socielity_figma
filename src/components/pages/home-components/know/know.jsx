import know1 from "/public/mock-imges/mock-imges/know1.png"
import know2 from "/public/mock-imges/mock-imges/know2.png"

export const Know = () => {
  return <div className="mb-[150px] ">
     <h1 className="text-center font-bold text-2xl" >They love us! Do you know why?</h1>
     <p className="text-center my-[40px]">The following videos are currently in production.  In the meantime, please use our Help Center.</p>
     <div className="flex gap-[20px] ">
        <img src={know1} alt="" className="rounded-2xl" />
        <img src={know2} alt="" className="rounded-2xl" />
     </div>
  </div>;
};
