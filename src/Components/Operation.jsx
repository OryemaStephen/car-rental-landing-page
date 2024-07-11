import {  Image } from "react-bootstrap"
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
        <div className="container-fluid working">
            <div className="working-detail" >
                <div>
                    <div className=" bg-dark-subtle "><FaSearch /></div>
                    <div>
                        <h5>Browse and Select</h5>
                        <p>
                            Choose from our wide range of premium cars,
                            select the pickup and return dates and locations 
                            that suit you best.
                        </p>
                    </div>
                </div>

                <div>
                    <div className=" bg-dark-subtle "><FaCalendar /></div>
                    <div>
                        <h5>Book and Confirm</h5>
                        <p>
                            Book your desired car with just a few clicks and receive an 
                            instant confirmation via email or SMS.
                        </p>
                    </div>
                </div>

                <div>
                    <div className=" bg-dark-subtle "><FaSmile /></div>
                    <div>
                        <h5>Enjoy your ride</h5>
                        <p>
                            Pick up your car at the designated location and enjoy your pre,ium driving 
                            experience with our top-quality service.
                        </p>
                    </div>
                </div>

            </div>
            <div className="working-image">
                <Image src="https://bmw.scene7.com/is/image/BMW/iX?wid=3000&hei=3000" className=" working-img " />
            </div>
        </div>
    </>
  )
}

export default Operation