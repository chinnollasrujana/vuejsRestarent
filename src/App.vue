<template>
  <Header></Header>
  <div class="wrapper">
    <!-- <HelloWorld msg="You did it!" /> -->

    <main>
      <RouterView  :foodData="foodItems"/>
    </main>
  </div>
  <Footer></Footer>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";


export default {
  name: 'App',
  components: {
    Header,
    RouterView,
    Footer,
  },
  data() {
    return {
      appTitle: 'Indian Restarent',
      appSubTitle: 'Indian Food',
      foodItems: [],
      error: null,
    };
  },
  methods: {
    async fetchFoodItemsList() {
      try {
      
       const response = await fetch('http://127.0.0.1:3000/fooditems');
       
       
        if (!response.ok) {
          throw new Error('API response was not ok');
        }

        const data = await response.json();
        return data;
        //return data[0]['news'];
      } catch (error) {
        console.error('Error fetching Food Items:', error.message);
        this.error = 'Error fetching data. Please try again later.';
        return [];
      } finally {
        this.loading = false;
      }
    },
  },
  async created() {
    this.foodItems = await this.fetchFoodItemsList();

    console.log(this.foodItems);
  },
};
</script>

<style>
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
  margin-top: 0px;
}

#app div {
  margin-top: 0px;
  font-weight: bold;
  color: black;
}

.error {
  color: #f00;
}
</style>