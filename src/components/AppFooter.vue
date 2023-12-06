<template>
  <footer class="footer">
    <div class="container">
      <div class="row gap-y align-items-center">

        <div class="col-12 col-lg-3">
          <a href="index.html">
            <img src="static/images/logo.png" alt="logo" style="height:50px">
          </a>
        </div>

        <div class="col-12 col-lg-6 text-center text-lg-left">
          <div class="nav nav-bold nav-uppercase nav-trim justify-content-center justify-content-lg-start">
            <a class="nav-link" href="#about" style="color: gray;">ABOUT</a>
            <a class="nav-link" href="#services" style="color: gray;">SERVICES</a>
            <a class="nav-link" href="#extension" style="color: gray;">E-EXTENSION</a>
            <a class="nav-link" href="3contact" style="color: gray;">CONTACT</a>
          </div>
        </div>

        <div class="col-12 col-lg-3 text-center text-lg-right">
          <div class="social">
            <a class="social-linkedin" href="#" style="color: gray; margin-right: 10px;">
              <i class="mdi mdi-linkedin"></i>
            </a>
            <a class="social-twitter" href="#" style="color: gray; margin-right: 10px;">
              <i class="mdi mdi-twitter"></i>
            </a>
            <a class="social-instagram" href="#" style="color: gray; margin-right: 10px;">
              <i class="mdi mdi-instagram"></i>
            </a>
          </div>
        </div>

      

      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style>
.nav-link:hover {
  color: lightblue;
}

.footer {
  background-color: #f9f9f9;
  padding: 30px 0;
}

.footer .container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer .row {
  flex-direction: column;
}

.footer .col-lg-3, .footer .col-lg-6 {
  margin-bottom: 20px;
}

.footer .col-lg-3 {
  text-align: center;
}

.footer .col-lg-6 {
  text-align: center;
}

.footer .social {
  margin-top: 10px;
}

@media (min-width: 992px) {
  .footer .row {
    flex-direction: row;
    align-items: flex-start;
  }

  .footer .col-lg-3, .footer .col-lg-6 {
    margin-bottom: 0;
  }

  .footer .col-lg-3.text-right {
    text-align: right;
    margin-bottom: 20px;
  }

  .footer .col-lg-6.text-left {
    text-align: left;
  }
}
</style>