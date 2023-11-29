import testimonial from "/public/mock-imges/mock-imges/icons/testimonial.svg"
import testimonil2 from "/public/mock-imges/mock-imges/icons/testimonial2.svg"
import testimonil3 from "/public/mock-imges/mock-imges/icons/testimonial3.svg"

export const Testimonial = () => {
  return <div>
    <div className="flex">
      <img src={testimonial} alt="" />
      <div>
          <h2>Skylar George</h2>
          <p>Managing Director, Lovgency Company</p> <br />
           <h3>“You'll want to use a format that's viewable for your <br /> potential leads and aligns closely with their values. To <br /> give you an idea of how testimonials can be portrayed, <br /> below are the different testimonial types that you can use <br /> to show off your customers' stories”</h3>
           <div className="flex">
            <img src={testimonil2} alt="" />
            <img src={testimonil3} alt="" />

           </div>
      </div>

    </div>
  </div>;
};
