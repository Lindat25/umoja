<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="static/images/logo.png" alt="Logo">
        </div>
        <div class="footer-description ">
          <p>At Umojalands, we offer three digital services to<br> improve food security in Zimbabwe and southern Africa:</p>
          <ul>
            <li>Land utilization</li>
            <li>Access to finance for smallholder farmers</li>
            <li>Advisory services on precision farming</li>
          </ul>
          <p>Modern agriculture is filled with big data that is rarely used. <br>Our system combines predictive analytics and precision<br> agriculture to convert field data into actionable insights.</p>
        </div>

          <div class="footer-social">
            <h4>Follow Us On</h4>
            <div class="social-icons">
              <a href="#"><i class="mdi mdi-facebook"></i></a>
              <a href="#"><i class="mdi mdi-pinterest"></i></a>
              <a href="#"><i class="mdi mdi-twitter"></i></a>
              <a href="#"><i class="mdi mdi-linkedin"></i></a>
            </div>
          </div>
      </div>
      <div class="footer-content">
        <h4>QUICK LINKS</h4>
        <div class="footer-links">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#extension">E-extension Services</a></li>
         
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Contact Information</h4>
          <p>67 Kwame Nkrumah | Harare</p>
          <p>Email: info@umojalands.com</p>
          <p>Phone:+263719906436</p>
        </div>

        <div class="footer-newsletter">
          <h4>Subscribe to Newsletter</h4>
          <form>
            <input type="email" placeholder="Enter your email">
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    <!--<div class="footer-social">
      <h4>Follow Us On</h4>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-pinterest"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
    <div class="footer-newsletter">
      <h4>Subscribe to Newsletter</h4>
      <form>
        <input type="email" placeholder="Enter your email">
        <button type="submit">Subscribe</button>
      </form>
    </div>-->
    <div class="footer-bottom">
      <p>&copy; 2023 Umojalands. All rights reserved.</p>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: rgb(55, 55, 81);
  padding: 50px 0;
  color: #fff;
  text-align: center;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.footer-content {
  width: 45%; 
 
}

.footer-logo img {
  width: 150px;
  height: auto;
  padding-bottom: 20px;
}

.footer-description p {
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 24px;
}

.footer-description ul {
  list-style: disc;
  padding-left: 200px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-position: inside;
  margin-bottom: 20px;
}

.footer-description li {
  font-size: 14px;
  line-height: 24px;
  
}



.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #aaa;
}

.footer-content h4 {
  margin-bottom: 20px;
  font-size: 18px;
  color: #9bb3ad;
  text-transform: uppercase;
}


.footer-newsletter h4 {
  margin-bottom: 20px;
  font-size: 18px;
  color: #9bb3ad;
  text-transform: uppercase;
}

.footer-social h4 {
  margin-bottom: 20px;
  font-size: 18px;
  color: #9bb3ad;
  text-transform: uppercase;
}

.footer-contact p {
  font-size: 14px;
  line-height: 24px;
  
}
.footer-contact{
  margin-bottom: 40px;
}

.footer-bottom {
  font-size: 12px;
  color: #aaa;
}

.footer-social {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.social-icons a {
  color: #fff;
  font-size: 20px;
  margin: 0 5px;
}

.footer-newsletter {
  width: 100%;
  text-align: center;
}

.footer-newsletter h4 {
  margin-bottom: 20px;
  font-size: 18px;
}

.footer-newsletter form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-newsletter input[type="email"] {
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  margin-right: 10px;
}

.footer-newsletter button {
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: #555;
  color: #fff;
  cursor: pointer;
}

.footer-newsletter button:hover {
  background-color: #333;
}
</style>