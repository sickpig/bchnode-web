<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
}
body {
  margin:0;
  padding:0;
  background-color: #343a40 !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212529;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  a.m-2 {
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
}
main {
  flex-grow: 1;
}
header, main, footer {
  flex-shrink: 0;
}
header {
  height: 295px;
  background-color: #343A40;
}
#nav {
  padding: 45px 100px 0 0;
  float:right;
  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    padding: 0 14px;
    &.router-link-exact-active {
      color: #B4B6B8;
    }
  }
}
.header-logo {
  height: 70px;
}
.card-up {
  top: -100px;
}
.card-down {
  bottom: -100px;
}
</style>
