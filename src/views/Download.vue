<template>
  <div id="docs">
    <Header />
      <section class="bg-light">
        <div class="container pb-5 pt-5">
          <!-- intro -->
          <div class="row justify-content-center">
            <div class="col-11 col-lg-7">
              <h4 class="pb-4">Downloads</h4>
              <p class="lead">Download Links...</p>
            </div>
          </div>
        </div>
      </section> 
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'Docs',
    components: {
      Header,
      Footer
  }
}
</script>