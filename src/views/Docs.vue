<template>
  <div id="docs">
    <Header />
    <section class="bg-light">
      <div class="container pb-5 pt-5">
        <!-- intro -->
        <div class="row justify-content-center">
          <div class="col-11 col-lg-7">
            <h4 class="pb-4">Docs</h4>
            <p class="lead">The primary goal of the Bitcoin Cash Node initiative is to provide a <u>safe</u> and <u>professional</u> node implementation that will <u>neutrally</u> follow the longest Bitcoin Cash chain without contributing to the risk of a chain split.</p>
            <a class="" href="https://read.cash/@freetrader/bitcoin-cash-node-003b2381" target="_blank">Read the annoucement</a>
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