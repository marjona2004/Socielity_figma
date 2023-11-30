import gold2 from "/public/mock-imges/mock-imges/gold.png"
import crowd from "/public/mock-imges/mock-imges/crowd.png"
import market1 from "/public/mock-imges/mock-imges/market.png"
import market2 from "/public/mock-imges/mock-imges/marketComm.png"
import reward from "/public/mock-imges/mock-imges/rewardGateway.png"
import goldMedalist from "/public/mock-imges/mock-imges/goldMedalist.png"






export const Platform = () => {
  return <div className="my-[120px]">
        <h2 className="text-center text-2xl font-bold"> Award Winning Engagement Platform</h2>
        <p className="text-center mt-[24px] mb-[52px] text-[#666]">the private on-line marketplace where you are able to exchange goods and services, cash-free, in one place, 24/7, with a <br /> select group of individuals, organizations, and businesses that you know and trust.</p>


        <div className="flex gap-[30px]">
        <div className="text-center w-[350px] h-[267px]  shadow-md pt-[10px]">
           <img src={gold2} alt="" className="w-[161px] h-[104px] mx-[10px]"/>
           <h2 className="py-[10px]  text-blue-600 text-2xl">Award 2021</h2>
           <p className="text-center text-[#666]"> Winning Engagement <br /> Platform that you <br /> know and trust </p>
        </div>
        <div className="text-center w-[350px] h-[267px]  shadow-md pt-[10px]">
           <img src={crowd} alt="" className="w-[161px] h-[104px] mx-[10px]"/>
           <h2 className="py-[10px]  text-blue-600 text-2xl">Award 2021</h2>
           <p className="text-center text-[#666]"> Winning Engagement <br /> Platform that you <br /> know and trust </p>
        </div>
        <div className="text-center w-[350px] h-[267px]  shadow-md pt-[10px]">
           <img src={market1} alt="" className="w-[161px] h-[104px] mx-[10px]"/>
           <h2 className="py-[10px]  text-blue-600 text-2xl">Award 2021</h2>
           <p className="text-center text-[#666]"> Winning Engagement <br /> Platform that you <br /> know and trust </p>
        </div>
        <div className="text-center w-[350px] h-[267px]  shadow-md pt-[10px]">
           <img src={market2} alt="" className="w-[161px] h-[104px] mx-[10px]"/>
           <h2 className="py-[10px]  text-blue-600 text-2xl">Award 2021</h2>
           <p className="text-center text-[#666]"> Winning Engagement <br /> Platform that you <br /> know and trust </p>
        </div>
        <div className="text-center w-[350px] h-[267px]  shadow-md pt-[10px]">
           <img src={reward} alt="" className="w-[161px] h-[104px] mx-[10px]"/>
           <h2 className="py-[10px]  text-blue-600 text-2xl">Award 2021</h2>
           <p className="text-center text-[#666]"> Winning Engagement <br /> Platform that you <br /> know and trust </p>
        </div>
        <div className="text-center w-[350px] h-[267px]  shadow-md pt-[10px]">
           <img src={goldMedalist} alt="" className="w-[161px] h-[104px] mx-[10px]"/>
           <h2 className="py-[10px]  text-blue-600 text-2xl">Award 2021</h2>
           <p className="text-center text-[#666]"> Winning Engagement <br /> Platform that you <br /> know and trust </p>
        </div>
        </div>
      <div className="flex gap-[10px] justify-center mt-[30px]">
         <div className="rounded-full bg-slate-400 w-[20px] h-[20px]"></div>
         <div className="rounded-full bg-blue-600 w-[20px] h-[20px]"></div>
         <div className="rounded-full bg-slate-400 w-[20px] h-[20px]"></div>
      </div>
  </div>;
};
