<template>
  <div class="menu">
    <h1>Daftar Menu</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/makanan">Makanan</router-link>
      <router-link to="/minuman">Minuman</router-link>
      <router-link to="/snack">Snack</router-link>
    </nav>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: flex-start;
}
.menu{
  background-color: salmon;
  width: 30%;
  padding: 20px;
  margin-right: 50px;
}
nav {
  padding: 30px;
}

ul {
  list-style: none;
}
nav a {
  font-weight: bold;
  color: #ffffff;
  display: block;
  margin-bottom: 20px;
  font-size: 22px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ffffff;
  text-decoration: underline;
}
</style>
