import React, { useState, useEffect} from "react";
import './formstyles.css'

function Form ({totalData, setTotalData}) {
    const defaultData = {
        petname: '',
        pettype: '',
        breed: '',
        ownername: '',
        emailid: '',
        phone: ''  
    }
    const [formData, setFormData] = useState(defaultData);
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
    })
    };
    useEffect(() => {
        console.log(totalData)
    }, [totalData]);
    const handlesubmit = (event) =>{
        event.preventDefault();
        setTotalData((totalData) => [...totalData,formData]);
        setFormData(defaultData);
        console.log(totalData);
    };
    return(
        <form onSubmit={handlesubmit} className="form-container">
            <div>
                <label>PET NAME</label>
                <input 
                type = "text"
                name = "petname"
                value = {formData.petname}
                onChange={handleInputChange}
                />
            </div>
            <div>
            <label>PET TYPE</label>
            <select
                name="pettype"
                value={formData.pettype}
                onChange={handleInputChange}
                required // Optional: make this field required
            >
                <option value="">Select a type</option> {/* Default option */}
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Reptile">Reptile</option>
                <option value="Other">Other</option>
            </select>
            </div>
            <div>
                <label>BREED</label>
                <input 
                type = "text"
                name = "breed"
                value = {formData.breed}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label>YOUR NAME</label>
                <input 
                type = "text"
                name = "ownername"
                value = {formData.ownername}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label>EMAIL ID</label>
                <input 
                type = "email"
                name = "emailid"
                value = {formData.emailid}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label>PHONE</label>
                <input 
                type = "text"
                name = "phone"
                value = {formData.phone}
                onChange={handleInputChange}
                />
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Form