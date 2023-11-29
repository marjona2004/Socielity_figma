import financial from "/public/mock-imges/mock-imges/icons/financial.svg"
import outsour from "/public/mock-imges/mock-imges/icons/outsorcing.svg"
import ikiga from "/public/mock-imges/mock-imges/icons/ikigai.svg"
// import alchemy from "/public/mock-imges/mock-imges/"
import social from "/public/mock-imges/mock-imges/icons/social.svg"
import leadership from "/public/mock-imges/mock-imges/icons/leaderShip.svg"
import Bridging from "/public/mock-imges/mock-imges/icons/bridging.svg"
import planet from "/public/mock-imges/mock-imges/icons/planet.svg"

export const Socielity = () => {
  return <div className="mb-[120px]">
      <h3 className="text-center text-black font-bold text-xl">Why Socielity</h3>
      <p className="text-center mt-[28px] mb-[50px] font-normal text-[#666]"> Welcome to CommuniTrader.com, the private on-line marketplace where you are able to exchange goods <br />
         and services, cash-free, in one place, 24/7, with a select group of individuals, organizations, and <br />
          businesses that you know and trust.
      </p>
      <div className="grid grid-rows-2 grid-cols-4 gap-8">
        <div className="text-center w-[270px] h-[267px]  shadow-md pt-[40px]">
           <img src={financial} alt="" className="ml-[90px] mb-[30px]"/>
           <h2>Financial Security</h2>
           <p>you want to keep more of your <br /> hard-earned cash in your wallet. </p>
        </div>
        <div className="text-center w-[270px] h-[267px]  shadow-md pt-[40px]">
           <img src={outsour} alt="" className="ml-[90px] mb-[30px]"/>
           <h2>Financial Security</h2>
           <p>you want to keep more of your <br /> hard-earned cash in your wallet. </p>
        </div>
        <div className="text-center w-[270px] h-[267px]  shadow-md pt-[40px]">
           <img src={ikiga} alt="" className="ml-[90px] mb-[30px]"/>
           <h2>Financial Security</h2>
           <p>you want to keep more of your <br /> hard-earned cash in your wallet. </p>
        </div>
        <div className="text-center w-[270px] h-[267px]  shadow-md pt-[40px]">
           <img src={financial} alt="" className="ml-[90px] mb-[30px]"/>
           <h2>Financial Security</h2>
           <p>you want to keep more of your <br /> hard-earned cash in your wallet. </p>
        </div>
        <div className="text-center w-[270px] h-[267px]  shadow-md pt-[40px]">
           <img src={social} alt="" className="ml-[90px] mb-[30px]"/>
           <h2>Financial Security</h2>
           <p>you want to keep more of your <br /> hard-earned cash in your wallet. </p>
        </div>
        <div className="text-center w-[270px] h-[267px]  shadow-md pt-[40px]">
           <img src={leadership} alt="" className="ml-[90px] mb-[30px]"/>
           <h2>Financial Security</h2>
           <p>you want to keep more of your <br /> hard-earned cash in your wallet. </p>
        </div>
        <div className="text-center w-[270px] h-[267px]  shadow-md pt-[40px]">
           <img src={Bridging} alt="" className="ml-[90px] mb-[30px]"/>
           <h2>Financial Security</h2>
           <p>you want to keep more of your <br /> hard-earned cash in your wallet. </p>
        </div>
        <div className="text-center w-[270px] h-[267px]  shadow-md pt-[40px]">
           <img src={planet} alt="" className="ml-[90px] mb-[30px]"/>
           <h2>Financial Security</h2>
           <p>you want to keep more of your <br /> hard-earned cash in your wallet. </p>
        </div>

      </div>
  </div>;
};
