import React from 'react'
import "./Home.css"
import ram from "../assets/you.jpeg"
export const Home = () => {
return(
  <div className='boss'>
       <div className='hero'>
<img src={ram} alt="the" />
<h1>  <span>FineWay Furniture Store</span>, Located in Chennai.</h1>
<p>We select your High quality Furniture that fit for your budget and Don't be Afraid to buy a products</p>
<div className="hero-action">
<button className='btn btn-info m-2'>Contact with us</button>
</div>
</div>

  </div>
)
}