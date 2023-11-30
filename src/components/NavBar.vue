<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/static/images/logo.png" alt="Company Logo">
    </div>
    <ul class="nav-links">
      <li><a @click="scrollToSection('home')">HOME</a></li>
      <li><a @click="scrollToSection('about')">ABOUT</a></li>
      <li><a @click="scrollToSection('services')">SERVICES</a></li>
      <li><a @click="scrollToSection('extension')">E-EXTENSION SERVICES</a></li>
      <li><a @click="scrollToSection('contact')">CONTACT US</a></li>
      <li><a @click="scrollToSection('team')">TEAM</a></li>
    </ul>
    <div class="auth-buttons">
      <button class="btn-sign-in">SIGN IN</button>
      <router-link class="btn-register" to="/register">REGISTER</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['scrollToSection'],
};
</script>

<style>
.navbar {
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
background-color: white;
position: fixed;
top: 0;
left: 0;
width: 100%; 
}

.logo img {
  height: 100px;
}

.nav-links {
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-top: 0px;
}

.nav-links li {
  margin-right: 30px;
}

.nav-links a {
  text-decoration: none;
  color: #333333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #00ff4c;
}

.auth-buttons {
  display: flex;
  align-items: center;
}

.btn-sign-in,
.btn-register {
  margin-left: 10px;
  padding: 8px 16px;
  border: none;
  background-color: #00ff08;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-sign-in:hover,
.btn-register:hover {
  background-color: #00b32d;
}
</style>