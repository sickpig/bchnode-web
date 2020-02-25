<template>
  <nav class="navbar navbar-dark bg-dark pt-4">
    <div class="container">
      <router-link to="/">
        <img class="header-logo" alt="Bitcoin Cash Node Logo" src="@/assets/images/bchn-logo-white.svg">
      </router-link>
      <div class="header-links">
        <router-link class="btn btn-link text-white" to="/docs">Docs</router-link>
        <a class="btn btn-link text-white" href="https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node" target="_blank">Source</a>
        <router-link class="btn btn-link text-white" to="/download">Download</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding-bottom: 24px;
}
</style>