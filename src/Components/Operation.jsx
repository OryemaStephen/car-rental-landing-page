import { Image } from "react-bootstrap"
import { FaCalendar, FaSearch, FaSmile } from "react-icons/fa"

const Operation = () => {
  return (
    <>
        <div className="container pt-4 pb-4 mb-3 text-center">
            <h3>How it works</h3>
            <p>
                Renting a luxury car has never been easier. 
                Our streamlined process makes it simple for 
                you to book and confirm your vehicle of choice online.
            </p>
        </div>
        <div>
            <div>
                <div>
                    <div className=" bg-dark-subtle rounded-3 "><FaSearch /></div>
                    <div>
                        <h6>Browse and Select</h6>
                        <p>
                            Choose from our wide range of premium cars,
                            select the pickup and return dates and locations 
                            that suit you best.
                        </p>
                    </div>
                </div>

                <div>
                    <div className=" bg-dark-subtle rounded-3 "><FaCalendar /></div>
                    <div>
                        <h6>Book and Confirm</h6>
                        <p>
                            Book your desired car with just a few clicks and receive an 
                            instant confirmation via email or SMS.
                        </p>
                    </div>
                </div>

                <div>
                    <div className=" bg-dark-subtle rounded-3 "><FaSmile /></div>
                    <div>
                        <h6>Enjoy your ride</h6>
                        <p>
                            Pick up your car at the designated location and enjoy your pre,ium driving 
                            experience with our top-quality service.
                        </p>
                    </div>
                </div>

            </div>
            <div className="bg-dark rounded-4">
                <Image src="https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2021-BMW-3-Series-hero.png" />
            </div>
        </div>
    </>
  )
}

export default Operation