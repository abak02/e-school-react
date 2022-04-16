import React from "react";
import Banner from "../Banner/Banner";
import Cart from "../Cart/Cart";
import CoursesCard from "../CoursesCard/CoursesCard";
import { useEffect, useState } from "react";
import mydata from "../../Data/data.json";
import './Shop.css'
const Shop = () => {
  const coursedata = mydata;
  const [course, setCourse] = useState(coursedata);
  const [cart, setCart] = useState([]);
  const handleClick = (course) => {
    console.log("clicked", course);
    const newCourse = [...cart, course];
    setCart(newCourse);
  };
  return (
    
    <div>
        <Banner></Banner>
        <div className="shop-container">
      
      <div className="course-container">
        <h1 className="text-center fw-bold fs-3 m-4">Online Courses</h1>
        {course.Sheet1.map((cd) => (
          <CoursesCard
            handleClick={handleClick}
            key={cd.title}
            data={cd}
          ></CoursesCard>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
    </div>
  );
};

export default Shop;
