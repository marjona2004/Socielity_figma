import message from "/public/mock-imges/mock-imges/icons/message.svg"
import phone from "/public/mock-imges/mock-imges/icons/phone_icon.svg"
import locat from "/public/mock-imges/mock-imges/icons/locate.svg"
import facebook from "/public/mock-imges/mock-imges/icons/facebook.svg"
import footer_in from "/public/mock-imges/mock-imges/icons/footer_in_icon.svg"
import twitter from "/public/mock-imges/mock-imges/icons/twitter.svg"
import g_icon from "/public/mock-imges/mock-imges/icons/G_icon.svg"
import camera_icon from "/public/mock-imges/mock-imges/icons/camera_icon.svg"




export const Footer = () => {
  return  <div className=' bg-blue-500 py-[50px] px-[30px]'>

  <div className='flex justify-between'>
        
       <div>
       <div className="text-white text-4xl font-bold"> Socielity</div>  <br /><br />
       <p className="text-white text-base">
       Your private online marketplace where <br />
        you can trade goods and services with <br />
         family, friends, neighbors, classmates,<br />
          co-workers, and members of the many <br />
           other Socielities that comprise your <br />
            personal world.
       </p>
  
      </div>
         <div>
         <div className="text-white text-4xl font-bold"> Company</div>  <br /><br />
          <p className='text-white text-base'> 
          Help Center <br /><br />
            About <br /><br />
            Press<br /><br />
            Bolog <br /><br />
            Careers <br /><br />
            FAQs
          </p>
        </div>
        <div>
        <div className="text-white text-4xl font-bold"> Sociality</div>  <br /><br />
          <p className='text-white text-normal text-base'>
          User  Agreement<br /> <br />
          Privacy Policy <br /> <br />
          Sociality Guidelines <br /><br />
          Sociality Guidelines<br /><br />
          Sociality Guidelines
          </p>
        </div>
        <div>
        <div className="text-white text-4xl font-bold"> Contact us</div>  <br /><br />
          <div className="flex gap-[20px]">
            <img src={message} alt="" />
            <p className="text-white">contact@example.com</p>
          </div>
          <div className="flex gap-[20px] my-[10px] ">
            <img src={phone} alt="" />
            <p className="text-white">+152 534-468-854</p>

          </div>
          <div className="flex gap-[20px]">
            <img src={locat} alt="" />
            <p className="text-white">View on Google map</p>
            
          </div>
          <div className="flex gap-[40px] mt-[30px]">
            <img src={facebook} alt="" className="w-[40px]"/>
            <img src={footer_in} alt=""className="w-[40px]" />
            <img src={twitter} alt="" className="w-[40px]"/>
            <img src={g_icon} alt="" className="w-[40px]"/>
            <img src={camera_icon} alt="" className="w-[40px]"/>
        </div>
        </div>
      
       
  </div>
  
  
</div>
};
