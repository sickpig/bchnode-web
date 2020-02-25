<template>
  <div>
    <section class="bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-11 col-lg-8 card border-0 card-down">
            <div class="card-body">
              <h3 class="text-center pt-2">Donate</h3>
              <div class="row">
                <div class="col-md-8 mt-3">
                  <p>
                    3-of-5 multisignature address held by team members. It is used for general funding of BCH Node operations, including personnel, equipment and contracting.
                  </p>
                  <p>
                    At the next fundraising effort, any funds unused will also contribute to fulfilling that campaign.
                  </p>
                </div>
                <div class="col-md-4 text-center">
                  <a href="bitcoincash:prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk">
                    <img class="rounded border" src="@/assets/images/qr-donation.png" alt="QR code" width="160" height="160">
                  </a>
                </div>
              </div>
              <p class="text-truncate text-center pt-4">
                <a href="bitcoincash:prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk">bitcoincash:prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="bg-dark">
      <div class="container">
        <div class="row text-white footer-links">
          <router-link class="btn btn-link text-white" to="/docs">Docs</router-link>
          <router-link class="btn btn-link text-white" to="https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node" target="_blank">Source</router-link>
          <router-link class="btn btn-link text-white" to="/download">Download</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
footer {
  height: 200px;
  padding: 20px;
  background-color: #343A40;
  color: #fff;
  .footer-links {
    text-align: center;
    margin-top: 120px;
    display: block;
    margin-bottom: 0 !important;
  }
}
</style>