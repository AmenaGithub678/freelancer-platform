import React from 'react';
import errorImg from '../assets/Error.png'

const Contact = () => {
    return (
        <div>
           <div className="card bg-gray-500 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={errorImg}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  
  </div>
</div> 
        </div>
    );
};

export default Contact;