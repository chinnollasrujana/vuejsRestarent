<template>
  <div class="main">
    <div class="menu-feed">
      <h1 class="menu_cate_titel">Non Veg Appetizers</h1>
      <ul class="cards">
        <li class="cards_item" v-for="item in foodData" :key="item.id">
          <div class="card">
            <div class="card_image">
              <img :src="'../src/assets/images/menuimages/'+item.image_name">
            </div>
            <div class="card_content">
              <h2 class="card_title">{{ item.name }}</h2>
              <p class="card_text">{{ item.description }}</p>
              
              <div class="price_section">
                <p>{{ item.category_name }}</p>
                <h3>${{ item.price }}</h3>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    foodData: Array,
  },
};
</script>

<style>
.main {
  max-width: 1200px;
  margin: 20px auto;
  margin-top: 50px !important; 
  
}
h1 {
  font-size: 24px;
  font-weight: 400;
  text-align: left;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 3%;
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
.card_image img{
  width: 340px;
  height: 300px !important;
}
.card_content {
  padding: 1rem;
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
.menu_cate_titel {
  margin-left: 5%;
}
.price_section{
  display: block;
  text-align: center;
}


</style>
