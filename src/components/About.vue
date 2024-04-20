<template>
  <div class="about">
   


 <div class='container'>
  <div class="item">
   
    <div class="about_text">
      <h1>About us</h1>
      <p> We warmly welcome you as our guest to Indian Restaurant Flavours. Whether you are familiar with Indian cuisine, or a first-timer, our team take great care to ensure each dish suits the guest perfectly, and our chefs are happy to adjust dishes to personal taste. Our list of food is chosen with care to complement the flavours of Indian cuisine. For special occasions, we are happy to prepare a specific menu in consultation with our customers, and we always welcome groups and parties
 </p>
    <img src="../assets/images/logo2.png" />
    </div>
   
 
  </div>
  <div class="item">
    <div class="address_sec">
    <h1>Contacts</h1>
   <p>Phone:
 (XXX)-XXX-XXXX</p> 

<p>Email:
support@indianrestaurant.com</p>
   </div>
   <div class="address_sec">
    <h1>Address</h1>
    <p>34749 Grand River Avenue, Farmington, Bostan - XXXX</p>
   </div>
 
   <div class="address_sec">
    <h1>Hours</h1>
    <ul class="hours_list">
      <li><span class="daysList">Monday</span> - Closed</li>
      <li><span class="daysList">Tuesday</span> - 11:30 AM - 02:30 PM 05:00 PM - 10:00 PM</li>
      <li><span class="daysList">Wednesday</span> - 11:30 AM - 02:30 PM  05:00 PM - 10:00 PM</li>
      <li><span class="daysList">Thursday</span> - 11:30 AM - 02:30 PM 05:00 PM - 10:00 PM</li>
      <li><span class="daysList">Friday</span> - 11:30 AM - 02:30 PM 05:00 PM - 10:00 PM</li>
      <li><span class="daysList">Saturday</span> - 12:00 PM - 03:00 PM 05:00 PM - 10:00 PM</li>
      <li><span class="daysList">Sunday</span> - 12:00 PM - 03:00 PM 05:00 PM - 09:00 PM</li>
    </ul>
    </div>
 </div>
  </div>
  
</div>

</template>
<script>
export default {
  name: "Header"
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
  
    display: block;
    align-items: center;
    margin: 20px;
  }
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 50%;
  grid-gap: 2rem;
  padding: 2rem;
}

.item {
  
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #000;
  font-family: sans-serif;
  border-radius: 8px;
  margin: 10px;
}
.about_text{
  display: block;
  
}
.item h1{
  text-align: left;
  
}
.daysList{
  font-size: 16px;
  font-weight: 800;
  
}
.hours_list{
  text-decoration: none;
}
.address_sec{
  margin: 30px;
}
</style>
