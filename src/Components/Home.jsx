import { Button, Form, Image, InputGroup } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Home = () => {
  return (
    <div id="home" className="container-fluid bg-black text-white position-relative">
        <div className="container p-2 mb-3 text-center">
          <h3>
            Discover the world on wheels with our car rental service.
          </h3>
        </div>
        <div className="container p-2 mb-3 text-center">
          <Image src="https://img.freepik.com/premium-photo/black-luxury-car-wallpaper-car-background_862994-4699.jpg" fluid rounded/>
        </div>
        <div className="home-filter bg-light text-black p-2 rounded">
          <div>
            <label>Pick-up Location</label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search a location"
                aria-label="Location"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div>
            <label>Pick-up date</label>            
            <InputGroup className="mb-3">
              <DatePicker
                selected={new Date()}  
                placeholderText="Select a date"
                dateFormat="dd/MM/yyyy" 
                className="form-control"
              />
            </InputGroup>
          </div>
          <div>
            <label>Drop-off Location</label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search a location"
                aria-label="Location"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div>
            <label>Drop-off date</label>            
            <InputGroup className="mb-3">
              <DatePicker
                selected={new Date()}  
                placeholderText="Select a date"
                dateFormat="dd/MM/yyyy" 
                className="form-control"
              />
            </InputGroup>
          </div>
          <div>
            <Button variant="dark">Find a vehicle</Button>
          </div>
        </div>

    </div>
  )
}

export default Home