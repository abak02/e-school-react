import React from 'react';
import './CourseCard.css';
const CoursesCard = (props) => {
    
    const {title,createdBy,description,dos,enrolled,price,rating}=props.data;
    const buttonStyle = {
        border: "none",
        borderRadius: "33px",
        padding: "8px 28px 8px 28px",
        background: "#21B573",
        color: "white",
      };
    return (
        
            <div className="container">
                <div className="row box">
                <div className="">
                    <p>{title}</p>
                    <p className=''> <small>Created By : {createdBy}</small></p>
                    <p className='text-muted'><small>{description}</small></p>
                    <p className='fw-bold'>${price}   <strike className='text-muted ms-3'>   ${price*2}</strike></p>
                    <button onClick={()=>props.handleClick(props.data)} style={buttonStyle} className='mb-2'>Buy Now</button>
                </div>
                </div> 
                
            </div>
                
           
        
    );
};

export default CoursesCard;