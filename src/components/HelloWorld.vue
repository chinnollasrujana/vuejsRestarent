<template>
   <div class="main">
 
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="../assets/images/menuimages/chiken-menchurya.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">Chicken 555</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="../assets/images/menuimages/checken_65.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">Checken 65</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="../assets/images/menuimages/Pepper_Chicken-Dry.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">Pepper Chicken Dry</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="../assets/images/menuimages/Curry-Leaf_Chicken.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">Curry Leaf Chicken</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="../assets/images/menuimages/Chilli-Shrimp.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">Chilli Shrimp</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="../assets/images/menuimages/menuimages.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">Chilli Chicken</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="../assets/images/menuimages/chiken-menchurya.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">Chicken 555</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="../assets/images/menuimages/checken_65.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">Checken 65</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="../assets/images/menuimages/Pepper_Chicken-Dry.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">Pepper Chicken Dry</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="../assets/images/menuimages/Curry-Leaf_Chicken.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">Curry Leaf Chicken</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="../assets/images/menuimages/Chilli-Shrimp.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">Chilli Shrimp</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="../assets/images/menuimages/menuimages.jpeg"></div>
        <div class="card_content">
          <h2 class="card_title">Chilli Chicken</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn">View</button>
        </div>
      </div>
    </li>
  </ul>
</div>

</template>
<script>
export default{
   name: 'Header'
}


</script>

<style>


.main{

  max-width: 1200px;
  margin: 20px auto;
}

h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  /* background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%); */
}

.card_title {
  color: #000;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card_text {
  color: #000;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;    
  font-weight: 400;
}

   </style>