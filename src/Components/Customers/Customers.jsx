import React from "react";
import './Customers.css';

function Customers(){
   
return ( 

<div className="px-5 py-5 customer-container" id="featured-3" style={{width: '100%'}}>
    <h2 className="pb-2 text-center customer-heading">Happy Customers</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 custom-body">
      <div className="feature col ">
        <img className="border-circle" width="55em" height="55em" src="https://preview.colorlib.com/theme/hepta/images/person_1.jpg.webp" alt="..."/>
        <p className="customer-para1">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
        <p className="customer-para2">— Clare Gupta</p>
      </div>
      <div className="feature col">
        <img className="border-circle" width="55em" height="55em" src="https://preview.colorlib.com/theme/hepta/images/person_2.jpg.webp" alt="..."/>
        <p className="customer-para1">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
        <p className="customer-para2">— Rogie Slater</p>
      </div>
      <div className="feature col">
        <img className="border-circle" width="55em" height="55em" src="https://preview.colorlib.com/theme/hepta/images/person_3.jpg.webp" alt="..."/>
        <p className="customer-para1">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
        <p className="customer-para2">— John Doe</p>
      </div>
    </div>
  </div>        
);
};
export default Customers;