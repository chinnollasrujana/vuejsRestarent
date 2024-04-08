<script>
export default{
    name: 'Header'
}


</script>
<template>
   <header>
		<nav class="navigation shadow">

			<!-- Logo -->
			<div class="logo">
        <RouterLink to="/"><img src="../assets/images/logo2.png" /></RouterLink>
				
			</div>
			
			<!-- Navigation -->
			<ul class="menu-list">
        
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/menu">Menu</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
			</ul>

			<div class="humbarger">
				<div class="bar"></div>
				<div class="bar2 bar"></div>
				<div class="bar"></div>
			</div>
		</nav>
    
    <!-- ==== Intro Section Start ==== -->
	
	</header>
</template>


<style>
*{
  margin: 0;
  padding: 0;
	box-sizing: border-box;
}

html,body{
  min-width: 100%;
  overflow-x: hidden;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
}

header .navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 12vh;
  min-width: 100%;
  z-index: 10;
  background: #fff;
}
.logo img{
    width: 180px;
    height: 90px;
}
header .navigation .logo{
  margin-left: 20px;
}

header .navigation .logo h1{
  color: #b1d4e0;
  font-size: 30px;
  line-height: 38px;
}

header .navigation .menu-list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  margin: auto 30px auto 0;
}

header .navigation .humbarger {
  margin-right: 20px;
  display: none;
 }
 
header .navigation .humbarger .bar{
  width: 30px;
  height: 2px;
  margin: 7px;
  background: #b1d4e0;
 }

header .navigation .menu-list li a {
  color: #000;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 1s ease, border 1s ease;
  text-decoration: none;
}

.shadow {
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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

/* ====================
  Responsive Section
=======================*/

/* Tablet desktop :768px. */

@media only screen and (min-width: 768px) and (max-width: 991px) {
  header .navigation .menu-list {
    width: 60%;
  }

  header .navigation .menu-list li a{
    font-size: 1rem;
  }

}

/* Large Mobile :480px. */

@media only screen and (max-width: 767px) {

  header .navigation .menu-list {
    position: absolute;
    top: 12vh;
    min-width: 100%;
    background: rgba(15, 20, 35, 0.99);
    text-align: center;
    display: none;
  }

  header .navigation .menu-list li {
    display: block;
  }

  header .navigation .menu-list li a {
    display: block;
    padding: 20px;
    transition: color 1s ease, padding 1s ease, background-color 1s ease;

  }

  header .navigation .menu-list li a:hover{
    color: #b1d4e0;
    padding-left: 30px;
    background: rgba(177, 212, 224, 0.2);
  }


  header .navigation .humbarger{
    display: block;
  }

}
    
</style>