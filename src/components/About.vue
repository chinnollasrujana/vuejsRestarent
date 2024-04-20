<template>
  <div class="about">
    <div class="main">
      <div class="about_text">
        <h1>About us</h1>
        <p>
          We warmly welcome you as our guest to Indian Restaurant Flavours.
          Whether you are familiar with Indian cuisine, or a first-timer, our
          team take great care to ensure each dish suits the guest perfectly,
          and our chefs are happy to adjust dishes to personal taste. Our list
          of food is chosen with care to complement the flavours of Indian
          cuisine. For special occasions, we are happy to prepare a specific
          menu in consultation with our customers, and we always welcome groups
          and parties
        </p>
      </div>

      <div class="address_sec">
        <h1>Contacts</h1>
        <p>Phone: (XXX)-XXX-XXXX</p>
        <p>Email: support@indianrestaurant.com</p>
      </div>
      <div class="address_sec">
        <h1>Address</h1>
        <p>34749 Grand River Avenue, Farmington, Bostan - XXXX</p>
      </div>

      <div class="work_hours">
        <h1>Hours</h1>
        <ul class="hours_list">
          <li><span class="daysList">Monday</span> - Closed</li>
          <li>
            <span class="daysList">Tuesday</span> - 11:30 AM - 02:30 PM 05:00 PM
            - 10:00 PM
          </li>
          <li>
            <span class="daysList">Wednesday</span> - 11:30 AM - 02:30 PM 05:00
            PM - 10:00 PM
          </li>
          <li>
            <span class="daysList">Thursday</span> - 11:30 AM - 02:30 PM 05:00
            PM - 10:00 PM
          </li>
          <li>
            <span class="daysList">Friday</span> - 11:30 AM - 02:30 PM 05:00 PM
            - 10:00 PM
          </li>
          <li>
            <span class="daysList">Saturday</span> - 12:00 PM - 03:00 PM 05:00
            PM - 10:00 PM
          </li>
          <li>
            <span class="daysList">Sunday</span> - 12:00 PM - 03:00 PM 05:00 PM
            - 09:00 PM
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style>
.about {
  text-align: left !important;
  font-weight: 200 !important;
}
.about_text,
.hours_list,
.address_sec,
.work_hours{
  font-weight: 200 !important;
  padding: 10px;
}
</style>
