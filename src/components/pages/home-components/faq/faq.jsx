import faq_img from "/public/mock-imges/mock-imges/icons/faq_img.svg"
export const Faq = () => {
  return <div className="mb-[100px] ">
       <h2 className="text-center font-bold text-2xl">Frequently Asked Questions</h2>
       <p className="text-center font-normal text-[#666] my-[50px] ">In order to acquire the goods and services that will satisfy the various needs that you have in your life, you have six concentric <br /> circles or realms to explore.  Beginning in the center and radiating outwards, these realms are: </p>


       <div className="grid grid-rows-4 grid-cols-2 gap-8">
        <div className="rounded flex border-2 border-[#CACACA] justify-between px-[20px] w-[500px] h-[70px] border-spacing-2 ">
            <p className="pt-[15px] text-[#666] text-xl"> +General</p>
            <img src={faq_img} alt="" className="w-[20px]"/>
        </div>
        <div className="rounded flex border-2 border-[#CACACA] justify-between px-[20px] w-[500px] h-[70px] border-spacing-2 ">
            <p className="pt-[15px] text-[#666] text-xl"> + Registration</p>
            <img src={faq_img} alt="" className="w-[20px]"/>
        </div>
        <div className="rounded flex border-2 border-[#CACACA] justify-between px-[20px] w-[500px] h-[70px] border-spacing-2 ">
            <p className="pt-[15px] text-[#666] text-xl">+ Trade Partners</p>
            <img src={faq_img} alt="" className="w-[20px]"/>
        </div>
        <div className="rounded flex border-2 border-[#CACACA] justify-between px-[20px] w-[500px] h-[70px] border-spacing-2 ">
            <p className="pt-[15px] text-[#666] text-xl">+ My Showcase</p>
            <img src={faq_img} alt="" className="w-[20px]"/>
        </div>
        <div className="rounded flex border-2 border-[#CACACA] justify-between px-[20px] w-[500px] h-[70px] border-spacing-2 ">
            <p className="pt-[15px] text-[#666] text-xl">+ All Showcase</p>
            <img src={faq_img} alt="" className="w-[20px]"/>
        </div>
        <div className="rounded flex border-2 border-[#CACACA] justify-between px-[20px] w-[500px] h-[70px] border-spacing-2 ">
            <p className="pt-[15px] text-[#666] text-xl">+ My Account</p>
            <img src={faq_img} alt="" className="w-[20px]"/>
        </div>
        <div className="rounded flex border-2 border-[#CACACA] justify-between px-[20px] w-[500px] h-[70px] border-spacing-2 ">
            <p className="pt-[15px] text-[#666] text-xl">+ Help</p>
            <img src={faq_img} alt="" className="w-[20px]"/>
        </div>
        <div className="rounded flex border-2 border-[#CACACA] justify-between px-[20px] w-[500px] h-[70px] border-spacing-2 ">
            <p className="pt-[15px] text-[#666] text-xl">+ Support</p>
            <img src={faq_img} alt="" className="w-[20px]"/>
        </div>


       </div>
       
  </div>;
};
