import { FaHandHolding, FaStar } from "react-icons/fa"
import { FaCircleCheck } from "react-icons/fa6"

const About = () => {
  return (
    <>
      <div id="about" className="container-fluid bg-black text-white pt-4 pb-4 mb-3 text-center">
          <h3>Our Services & Benefits</h3>
          <p className="w-100 m-auto">
              To make renting easy and hassle-free, we provide
              a variety of services and advantages.
              We have you covered with a variety of vehicles and flexible rental terms.
          </p>
          <div className="pt-5 d-flex justify-content-between gap-3 align-items-center">
              <div>
                  <div className="p-3"><FaStar className=" fs-1" /></div>
                  <div>
                      <h5>Premium Quality</h5>
                      <p>
                          We offer a wide range of high-quality vehicles
                          to choose from, including luxury cars, SUVs, vans, and more
                      </p>
                  </div>
              </div>
              <div>
                  <div className="p-3"><FaHandHolding className=" fs-1"/></div>
                  <div>
                      <h5>Affordable Prices</h5>
                      <p>
                          Our rental rates are highly competitive and affordable 
                          allowing our customers to enjoy their trips without 
                          breaking the bank.
                      </p>
                  </div>
              </div>
              <div>
                  <div className="p-3"><FaCircleCheck className=" fs-1"/></div>
                  <div>
                      <h5>Convenient Online Booking</h5>
                      <p>
                         With our easy-to-use online booking system,
                         customers can quickly and conveniently reserve their rental car 
                         from anywhere, anytime.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default About