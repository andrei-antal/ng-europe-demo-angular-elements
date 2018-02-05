<template>
  <div>
    <h1>Some vue app, with some vue stuff in it...</h1>
    <h3>
      My awesome rating is
      <span id="rating"> {{parseInt(rating, 10) + 1}}</span>
    </h3>
    <hr>
    <my-rating 
      v-bind:rating="rating" 
      v-on:ratingChange="setRating"
    ></my-rating>
    <hr>
    <button v-on:click="setMaxRating">Give max rating</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return { rating: 0 };
  },
  methods: {
    setMaxRating() {
      this.rating = 4;
    },
    setRating(data) {
      this.rating = data.detail;
    },
  },
};
</script>
