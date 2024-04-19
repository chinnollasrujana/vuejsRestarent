



<template>
  <Header></Header>
  <div class="wrapper">
    <!-- <HelloWorld msg="You did it!" /> -->

    <main>
      <RouterView  :foodData="foodFeedItems"/>
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
      yourName: 'PK',
      foodFeedItems: [],
      currentYear: new Date().getFullYear(),
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchNewsFeed() {
      try {
        const response = await fetch('https://priyatham.onrender.com/api');
       // const response = await fetch('http://127.0.0.1:3000/fooditems');
        console.log()
       
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data[0]['news'];
      } catch (error) {
        console.error('Error fetching news feed:', error.message);
        this.error = 'Error fetching data. Please try again later.';
        return [];
      } finally {
        this.loading = false;
      }
    },
  },
  async created() {
    this.foodFeedItems = await this.fetchNewsFeed();

    console.log(this.foodFeedItems);
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
  margin-top: 20px;
}

#app div {
  margin-top: 10px;
  font-weight: bold;
  color: black;
}

.loading {
  color: #00f;
}

.error {
  color: #f00;
}
</style>