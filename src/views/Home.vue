<template>
  <div id="home">
    <Header />
    <section class="bg-dark">
      <div class="container">
        <div class="row pb-3">
          <div class="col">
            <div class="bchn-logo">
              <img alt="Bitcoin Cash Node Logo" src="@/assets/images/bchn-logo-white.svg">
            </div>
          </div>
        </div>
      </div>
    </section>
    <DownloadSection />
    <section class="bg-light">
      <div class="container">
        <!-- intro -->
        <div class="row justify-content-center">
          <div class="col-11 col-lg-7">
            <h4 class="pb-4">Bitcoin Cash Node initiative</h4>
            <p class="lead">The primary goal of the Bitcoin Cash Node initiative is to provide a <u>safe</u> and <u>professional</u> node implementation that will <u>neutrally</u> follow the longest Bitcoin Cash chain without contributing to the risk of a chain split.</p>
            <a class="" href="https://read.cash/@freetrader/bitcoin-cash-node-003b2381" target="_blank">Read the annoucement</a>
          </div>
        </div>
        <!-- /intro -->
        <!-- social -->
        <div class="row justify-content-center">
          <div class="col-11 col-lg-7">
            <h4 class="pt-5 pb-2">Get in touch</h4>
            <div class="row text-center">
              <!-- slack -->
              <div class="col-6 col-md-3">
                <a href="#">
                  <img class="social-media-svg slack" src="@/assets/images/slack.svg" alt="placeholder">
                  <p>Slack</p>
                </a>
              </div>
              <!-- /slack -->
              <!-- twitter -->
              <div class="col-6 col-md-3">
                <a href="#">
                  <img class="social-media-svg twitter" src="@/assets/images/twitter.svg" alt="placeholder">
                  <p>Twitter</p>
                </a>
              </div>
              <!-- /twitter -->
              <!-- telegram -->
              <div class="col-6 col-md-3">
                <a href="#">
                  <img class="social-media-svg telegram" src="@/assets/images/telegram.svg" alt="placeholder">
                  <p>Telegram</p>
                </a>
              </div>
              <!-- /telegram -->
              <!-- gitlab -->
              <div class="col-6 col-md-3">
                <a href="#">
                  <img class="social-media-svg gitlab" src="@/assets/images/gitlab.svg" alt="placeholder">
                  <p>Gitlab</p>
                </a>
              </div>
              <!-- /gitlab -->
            </div>
          </div>
        </div>
        <!-- /social -->
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import DownloadSection from './components/DownloadSection';

export default {
  name: 'Home',
    components: {
      Header,
      Footer,
      DownloadSection
  }
}
</script>

<style lang="scss">
.bchn-logo {
  float: left;
  width: 311px;
  height: 103px;
  margin-left: 64px;
  margin-bottom: 106px;
  svg, img {
    width:100%;
  }
}
#home {
  .header-logo {
    display: none;
  }
  .btn {
    .shadow {
      -webkit-box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.15) !important;
      box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
  }
  .header-links {
    transform: translateY(16px);
  }
}
.os-icon {
  width: 12px;
  height: 15px;
  svg {
    width: 12px;
  }
}
a:hover {
  svg {
    transition: fill 0.15s ease-in-out;
    fill: white;
  }
}
.social-media-svg {
  width:60px;
}
.social-media-svg.slack {
  padding:14px;
}
.social-media-svg.telegram {
  padding: 8px;
}
.social-media-svg.gitlab {
  padding: 10px;
}
</style>
