import { Image } from "react-bootstrap"

const Contact = () => {
  return (
    <>
      <div id="contact" className="container-fluid bg-light text-black pt-4 pb-4 mb-3 text-center">
          <h3>What Our Customers Say About Us</h3>
          <p className="w-100 m-auto">
              Here are some comments from our customers, be one of them.
          </p>   
          <div className="comments">
            <div className="comment align-content-start ">
                <div className="profile d-flex justify-content-start align-items-center pb-2">
                    <Image className="avatar" src="./src/assets/profile.svg" />
                    <div>
                        <span className="name">Clifford</span><br />
                        <span className="verifier">CapeTown, South Africa</span>
                    </div>
                </div>
                <q>
                  I had an incredible experience renting from Rent Cras! 
                  The process was seamless, the car was in pristine condition, 
                  and the customer service was top-notch..
                </q>
            </div>
            <div className="comment">
                <div className="profile d-flex justify-content-start align-items-center pb-2">
                    <Image className="avatar" src="./src/assets/profile.svg" />
                    <div>
                        <span className="name">Daniel </span><br />
                        <span className="verifier">Nairobi, Kenya</span>
                    </div>
                </div>
                <q>
                  I was really impressed with the level of service I received
                  from this car rental company. The process was smooth and easy, and the car
                  I rented was in excellent condition..
                </q>
            </div>
            <div className="comment">
                <div className="profile d-flex justify-content-start align-items-center pb-2">
                    <Image className="avatar" src="./src/assets/profile.svg" />
                    <div>
                        <span className="name">Peter</span><br />
                        <span className="verifier">Kampala, Uganda</span>
                    </div>
                </div>
                <q>
                  Rent Cars truly stands out. From their convenient online booking system to their 
                  prompt pickup and drop-off service, everything was convenient and stress-free.
                </q>
            </div>
          </div> 
      </div>
    </>
  )
}

export default Contact