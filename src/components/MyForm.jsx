import { useState } from 'react';

const Dfault_value_of_Form = {
    firstname: "",
    secondname: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
  };
function MyForm (){
    const [form, setform] = useState(Dfault_value_of_Form);
    console.log("latest Form", form);
    console.log("latest Form", form.secondname);
  
    function onchangeHandeler(event, key) {
      setform((oldvalue) => {
        return {
          ...oldvalue,
          [key]: event.target.value,
        };
      });
    }
    return (
      <>
        <h1>from</h1>
  
        <form>
          <label htmlfor="firstname">Firstname*</label>
          <input
            onChange={(event) => {
              onchangeHandeler(event, "firstname");
            }}
            type="text"
            id="firstname"
          />
          <br />
          <br />
          <label htmlfor="secondname">Secondname*</label>
          <input
            onChange={(event) => {
              onchangeHandeler(event, "secondname");
            }}
            type="text"
            id="secondname"
          />
          <br />
          <br />
          <label htmlfor="email">Email*</label>
          <input
            onChange={(event) => {
              onchangeHandeler(event, "email");
            }}
            type="email"
            id="email"
          />
          <br />
          <br />
          <label htmlfor="phone">Phone</label>
          <input
            onChange={(event) => {
              onchangeHandeler(event, "phone");
            }}
            type="number"
            id="Phone"
          />
          <br />
          <br />
          <label htmlfor="gender">Gender</label>
          <select id="gender">
            <option value={0}>Chose option below</option>
            <option value={1}> Male</option>
            <option value={2}> Female </option>
            <option value={3}> Dont want to share</option>
          </select>
          <br />
          <br />
          <label htmlfor="dob">DOB</label>
          <input
            onChange={(event) => {
              onchangeHandeler(event, "dob");
            }}
            type="date"
            id="dob"
          />
          <br />
          <br />
          <submit type="submit" value={"Submit Button"} />
        </form>
      </>
    );
}

export default MyForm;



