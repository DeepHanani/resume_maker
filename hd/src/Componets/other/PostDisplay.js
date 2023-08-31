import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { getData } from '../action/PostAction';
import { useNavigate } from 'react-router-dom';
import './PostDisplay.css'

export default function PostDisplay() {

    const[input , setInput] = useState([]);

    console.log(input,"kkkkk")

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handalchange = (e)=>{
       e.preventDefault()
                setInput({...input ,[e.target.name] :e.target.value});
               
    }

    const onsubmit = (e)=>{
        e.preventDefault()
      dispatch(getData(input))
      
      if(input == ""){
        alert("filed reqired")
      }else{
      navigate("/getdetails");
      }
    }


  return (
    <div className='main_Container'>
    <div id='main'>

    <div className='sign'>
                    <h2>Resume Maker</h2>
                </div>


    <div className='form'>
           <input type='text' placeholder='firstname' onChange={handalchange} name = "firstname" className='input_filed'/><br></br>
           <input type='text' placeholder='lastname' onChange={handalchange} name = "lastname" className='input_filed'/><br></br>
           <input type='email' placeholder='email' onChange={handalchange} name = "email" className='input_filed'/><br></br>
           <input type= 'number' placeholder='mobile number' onChange={handalchange} name = "mobilenumber" className='input_filed'/><br></br>
           <textarea typeof='text' placeholder='Education detail' onChange={handalchange} name = "Educationdetail" className='input_filed'></textarea><br></br>
           <input type= 'text' placeholder='position' onChange={handalchange} name = "position" className='input_filed'/><br></br>
           

           <input type='text' placeholder='ADD skill 1' name = "skill1"   onChange={handalchange} className='input_filed'/><br></br>
           <input type='text' placeholder='ADD skill 2' name = "skill2"   onChange={handalchange} className='input_filed'/><br></br>
           <input type='text' placeholder='ADD skill 3' name = "skill3"   onChange={handalchange} className='input_filed'/><br></br>
           <input type='text' placeholder='ADD skill 4' name = "skill4"   onChange={handalchange} className='input_filed'/><br></br>
           <input type='text' placeholder='ADD skill 5' name = "skill5"   onChange={handalchange} className='input_filed'/><br></br><br></br>

           <input type='text' placeholder='ADD language 1' name = "language1"   onChange={handalchange} className='input_filed'/><br></br>
           <input type='text' placeholder='ADD language 2' name = "language2"   onChange={handalchange} className='input_filed'/><br></br>
           <input type='text' placeholder='ADD language 5' name = "language3"   onChange={handalchange} className='input_filed'/><br></br><br></br>

           <textarea typeof='text' placeholder='About your self' onChange={handalchange} name = "Aboutself" className='input_filed'></textarea><br></br><br></br>

           <input type='text' placeholder='work experience start - end year' name = "workexperience"   onChange={handalchange} className='input_filed'/><br></br><br></br>

           <textarea typeof='text' placeholder='About your position' onChange={handalchange} name = "Aboutposition" className='input_filed'></textarea><br></br><br></br>

           <input type='text' placeholder='ADD project name 1' name = "project1"   onChange={handalchange} className='input_filed'/><br></br>
           <input type='text' placeholder='ADD project name 2' name = "project2"   onChange={handalchange} className='input_filed'/><br></br>
           <input type='text' placeholder='ADD project name 5' name = "project3"   onChange={handalchange} className='input_filed'/><br></br><br></br>

           <input type='text' placeholder='Reference name' name = "Reference"   onChange={handalchange} className='input_filed'/><br></br><br></br>
           

           <select  id="pet-select"  onChange={handalchange} name = "state" className='select'>
           <option value="">--Please choose state--</option>
           <option value="gujrat">gujrat</option>
           <option value="bihar">bihar</option>
           <option value="up">utar pradesh</option>
           <option value="maharastra">maharastra</option>
           <option value="rajasthan">rajasthan</option>
           <option value="kerala">kerala</option>
         </select>

         <select  id="pet-select"  onChange={handalchange} name = "city" className='select'>
           <option value="">--Please choose city--</option>
           <option value="ahmedabad">ahmedabad</option>
           <option value="vadodra">vadodra</option>
           <option value="surat">surat</option>
           <option value="gandhinagar">gandhinagar</option>
           <option value="anand">anand</option>
           <option value="pune">pune</option>
         </select>
           <input type='submit' onClick={onsubmit}  className='btn-primary'/>


          
           

    </div>

    </div>
      
    </div>
  )
}
