import Button from "../../../common/button/Button";

export const Subscribe = () => {
  return <div className="my-[200px]">
    <h2 className="text-center font-bold text-2xl">Subscribe to  get the latest news about us</h2>
    <p className="text-center text-[#666] my-[24px]">Socielity offers insured and non-insured individuals access to affordable, convenient, and personalized care <br /> for urgent and ongoing medical conditions.</p>

    <div className="flex  gap-[100px] justify-around rounded-2xl border-2 border-spacing-4 w-[770px] h-[80px] ml-[200px]  bg-slate-300 ">
      <input type="text" placeholder="Enter your email address " className="text-[#666] outline-none h-[40px] mt-[20px]  bg-slate-300  text-2xl text-white"/>
      <div className="mt-[15px]" >
      <Button>Subscribe </Button>
      </div>
       
    </div>
  </div>;
};
