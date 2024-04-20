<template>
  <div class="main">
    <div class="filters">
      <ul class="cards">
        <li
          class="cards_item"
          v-for="(category, index) in categories"
          :key="index"
          @click="filterFoodItems(category)"
        >
          <div class="card">
            <div class="card_image">
              <img :src="'../src/assets/images/menuimages/'+category.image_url">
            </div>
            <div class="card_content">
              <h2 class="card_title">{{ category.category_name }}</h2>
            </div>
          </div>
        </li>
      </ul>
      
    </div>

  
      <div class="menu-feed">
      <h1 class="menu_cate_titel">All Menu</h1>
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
  data() {
    return {
      selectedCategory: null,
      categories: [
        {
          id: 1,
          category_name: "Non Veg",
          image_url: "Pepper_Chicken-Dry.jpeg",
        },
        {
          id: 2,
          category_name: "Veg",
          image_url: "chana_masala.jpg",
        },
        {
          id: 3,
          category_name: "Biryani",
          image_url: "shrimp_biryani.jpg",
        },
        {
          id: 4,
          category_name: "Appetizers",
          image_url: "Samosa-apts.png",
        }
      ],
    }
  }
}
</script>

<style>
.main {
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
.filters .cards{
  cursor: pointer;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 20%;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 20% !important;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 25% !important;
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
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  flex: 0 32%;
  height: 100px;
  margin-bottom: 2%; /* (100-32*3)/2 */
}
.filter-button {
  text-transform: uppercase;
  margin: 0 6px;
  cursor: pointer;
  font-family: monospace;
  font-size: 1.2rem;
  background: rgb(14, 209, 85);
  padding: 10px;
  color: #fff;
  border-radius: 5%;
}

.show-all-button {
  background: rgb(5, 91, 15);
}
</style>
