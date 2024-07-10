import PropTypes from 'prop-types';
import { Button, Image } from 'react-bootstrap';
import { FaSearchengin, FaUsers } from 'react-icons/fa';
import { FaCodeFork } from 'react-icons/fa6';
import { MdOutlineSevereCold } from 'react-icons/md';
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
      {cars.map((car)=>(
        <div key={car.id} className="container d-flex flex-wrap">
          <div>
           <Image src={car.image} className='car-image' fluid rounded/>
           <div>
            <h5>{car.make} {car.model}</h5>
            <div className="border-bottom pb-4">
              <span><FaUsers /> {car.seater} Passengers</span>
              <span><FaCodeFork /> {car.transmission}</span>
              <span><MdOutlineSevereCold /> {car.features[0]}</span>
              <span><FaSearchengin /> {car.features[1]}</span>
            </div>
            <div>
              <div>
                <span>Price</span>
                <span><b>UGx. {car.price} </b>/day</span>
              </div>
              <div>
              <Button variant="dark">Find a vehicle</Button>
              </div>
            </div>
           </div>
          </div>
        </div>
      ))}
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