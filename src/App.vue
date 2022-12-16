<template>
  <div id="app" class="container-fluid">
    <div class="site-info">
      <h1>Hotel Room Reservation System</h1>
    </div>

    <nav>
      <router-link class="btn btn-primary" :to="{ name: 'filter' }"> Main Page </router-link>
    </nav>
    <br/>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
label {
  padding: 0 10px 0 10px;
}

li {
  list-style-type: none;
}

.container {
  padding: 3%;
  background-color: lightgray;
  border-radius: 15px;
  border: 1px solid gray;
}
</style>
