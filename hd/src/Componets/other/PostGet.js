import React from 'react'
import { useSelector } from 'react-redux'
import './PostGet.css'

export default function PostGet() {

    const post = useSelector(y=>y)
    console.log(post,"ggg")
  return (
    <div className='dispaly'>
    {
        post.data.map((value)=>{
                 return(
                    <div className='mainDisplay'>

                    <div className='child'>
                    <div className='child-1'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8a2MUfdySK0SpBsRoLJ7GvrRP0mMIkixcw&usqp=CAU'/>
                    </div>
                    <div className='child-2'>
        
                    <div className='position'>
                    <h2>{value.position}</h2>
                 
                    <h2>{value.firstname} {value.lastname}</h2>
                    
                    </div>
                 
                    </div>
                       
                    </div>


                    <div className='containt'>

                    <div className='containt-1'>
                 <div className='personal-1'>
                    <div><p> +91{value.mobilenumber}</p></div>
                    <div><p>{value.email}</p></div>
                    <div><p>{value.city}</p></div> 
                    <div><p>{value.state}</p></div>
                 </div>

                 <div className='personal-2'>
                   <div><h3>Skills : -</h3></div>
                    <div><ul><li>{value.skill1}</li></ul></div>
                    <div><ul><li>{value.skill2}</li></ul></div>
                    <div><ul><li>{value.skill3}</li></ul></div> 
                    <div><ul><li>{value.skill4}</li></ul></div>
                    <div><ul><li>{value.skill5}</li></ul></div>
                 </div>

                 <div className='personal-3'>
                   <div><h3>Language : -</h3></div>
                    <div><ul><li>{value.language1}</li></ul></div>
                    <div><ul><li>{value.language2}</li></ul></div>
                    <div><ul><li>{value.language3}</li></ul></div> 
                    
                 </div>


                    </div>

                    <div className='containt-2'>

                     <div className='experience-1'>
                       <div><h3>About Me : -</h3></div>
                        <div><p>{value.Aboutself}</p></div>
                     
                     </div>
  
                     <div className='experience-2'>
                       <div><h3>Work experience :-</h3></div>
                       <div><p>({value.workexperience})</p></div>
                       <div><h3>About Position : -</h3></div>
                       <div><p>{value.Aboutposition}</p></div>
                     </div>


                     <div className='experience-3'>
                   <div><h3>Projects : -</h3></div>
                    <div><ul><li>{value.project1}</li></ul></div>
                    <div><ul><li>{value.project2}</li></ul></div>
                    <div><ul><li>{value.project3}</li></ul></div> 
                    
                 </div>


                 <div className='experience-4'>
                 <div><h3>Reference name : -</h3></div>
                 <div><p>{value.Reference}</p></div>
                 </div>



                    </div>

                    </div>

                    
                    </div>
                 )
        })
    }
         
    </div>
  )
}
