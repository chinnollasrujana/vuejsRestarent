<template>
   
    <!-- ==== Intro Section Start ==== -->
    <div class="intro-section" id="home">
      <div class="bg-img"></div>
      <div class="intro-content">
        <h1>Web Developer</h1>
        <h6>from Kenya</h6>
        <p class="tagline">
          <span class="change-container">
            <span class="changing">get what you want</span>
            <span class="changing">how you want it</span>
            <span class="changing">when you want it</span>
          </span>
        </p>
        <!-- social media -->
      </div>
    </div>	
   
 </template>
 <script>
 export default{
    name: 'MenuHome'
 }

 </script>
 
 <style>
 
 
 .intro-section .intro-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
 }
 
 .intro-section .intro-content h1 {
  color: #b1d4e0;
  font-size: 5rem;
  letter-spacing: -1px;
  text-transform: uppercase;
  margin-top: 80px;
 }
 
 .intro-section .intro-content h6{
  margin-top: 5px;
  color: #b1d4e0;
  font-size: 2.5rem;
  font-weight: 300;
 }
 
 .intro-section .intro-content p {
  margin-top: 40px;
  color: #b1d4e0;
 }
 
 .intro-content .tagline {
  margin-top:80px;
 }
 
 .intro-section .intro-content .tagline .change-container{
  position: relative;
  display: inline-block;
  width: 560px;
  margin-bottom: 55px;
  margin-top: 30px;
 }
 
 .intro-section .intro-content .changing {
  position: absolute;
  overflow: hidden;
  width: 100%;
  left:0;
  bottom:0;
  height:0;
  opacity:0;
  color: #b1d4e0;
  text-transform: uppercase;
  word-spacing: 5px;
  text-align: center;
  font-size: 2.5rem;
 }
 
 .changing:nth-child(1) {
  animation: revealNextWord 6s cubic-bezier(0.57, 1.52, 0.9, 1.08) 1.5s infinite;
 }
 
 .changing:nth-child(2) {
  animation: revealNextWord 6s cubic-bezier(0.57, 1.52, 0.9, 1.08) 3s infinite;
 }
 
 .changing:nth-child(3) {
  animation: revealNextWord 6s cubic-bezier(0.57, 1.52, 0.9, 1.08) 4.5s infinite;
 }
 
 @keyframes revealNextWord {
  0% { 
    opacity: 0.3; 
    height: 0.0; 
  }
  10% { 
    opacity: 1; 
    height:1.2em; 
  }
  20% { 
    opacity: 1; 
    height:1.2em; 
  }
  28% { 
    opacity: 0; 
    height:2em; 
  }
  
 }
 
 .intro-section .intro-content .header-btn a{
  text-decoration: none;
  font-size: 1.5rem;
  color: #3498db;
  /* background-color: #b1d4e0; */
  padding: 15px;
  border-radius: 5px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
 }
 
 .intro-section .intro-content .header-btn a:before{
  position: absolute;
  content: ""; 
  top: 0px;
  height: 100%;
  left: -25%;
  width: 0%;
  background-color: #3498db;
  transform: skew(50deg);
  transition-duration: 1s;
  z-index: 1;
 }
 
 .intro-section .intro-content .header-btn a:hover{
  color: #b1d4e0;
 }
 
 .intro-section .intro-content .header-btn a:hover:before{
  width: 170%;
 
 }
 
 .intro-section .intro-content .header-btn a span{
  position: relative;
  z-index: 9;
 }
 
 /* Large Mobile :480px. */
 
 @media only screen and (max-width: 767px) {
 
  .intro-section .intro-content h1 {
    font-size: 2.8rem;
  }
 
  .intro-section .intro-content h6 {
    font-size: 1.4rem;
  }
 
  .intro-section .intro-content .changing {
    font-size: 1.5rem;
  }
 
  .intro-section .intro-content .header-btn a{
    font-size: 1.25rem;
  }
 
 }
 
 
 /* small mobile :320px. */
 
 @media only screen and (max-width: 479px) {
 
  .intro-inner .intro-content h1 {
    font-size: 2rem;
    letter-spacing: 1px;
  }
 
  .intro-inner .intro-content p {
    margin-top: 10px;
  }
 
 }
    
    </style>