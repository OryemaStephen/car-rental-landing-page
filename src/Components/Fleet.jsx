import PropTypes from 'prop-types';
import { Button, Image } from 'react-bootstrap';
import {  FaArrowRight, FaSearchengin, FaUsers } from 'react-icons/fa';
import {  FaCodeFork } from 'react-icons/fa6';
import Operation from './Operation';
const Fleet = ({cars}) => {
  return (
    <div id="fleet" className="container-fluid bg-light text-black">
      <div className="car-brand-container container d-flex justify-content-between align-items-center gap-4">
        <Image src="src\assets\honda-svgrepo-com.svg" className="car-brand"/>
        <Image src="src\assets\acura-svgrepo-com.svg" className="car-brand"/>
        <Image src="src\assets\jaguar-svgrepo-com.svg" className="car-brand"/>
        <Image src="src\assets\nissan-svgrepo-com.svg" className="car-brand"/>
        <Image src="src\assets\volvo-alt-svgrepo-com.svg" className="car-brand"/>
      </div>

      <div className="container pt-4 pb-4 mb-3 text-center">
        <h3>Popular Car Rental Deals</h3>
        <p>
          Ranging from elegant sedans to powerful sports cars, 
          all carefully selected to provide our customers with the ultimate driving experience.
        </p>
      </div>
      <div  className="car-list container-fluid d-flex justify-content-between flex-wrap gap-2 align-items-start">
      {cars.map((car) => (        
          <div key={car.id} className="car-details">
            <div className="fleet-image-container">
              <Image src={car.image} className="car-image rounded-top-3" />
            </div>
            <div className="car-info">
              <h5>{car.make} {car.model}</h5>
              <div className="car-specs border-bottom pb-3">
                <span><FaUsers /> {car.seater} Passengers</span>
                <span><FaCodeFork /> {car.transmission}</span>
                <span><FaSearchengin /> {car.features[1]}</span>
              </div>
              <div className="car-price-info pt-3">
                <div className="car-price pb-2 d-flex justify-content-between">
                  <span>Price</span>
                  <span><b>UGx. {car.price} </b>/day</span>
                </div>
                <div className="car-action d-flex justify-content-center">
                  <Button variant="dark" className="w-75 rounded-4" onClick={()=>alert("Working on it")}>Rent Now <FaArrowRight /> </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Operation />
    </div>
  )
}

Fleet.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      mileage: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      fuelType: PropTypes.string.isRequired,
      transmission: PropTypes.string.isRequired,
      engine: PropTypes.string.isRequired,
      horsepower: PropTypes.number.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      owners: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Fleet