<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/static/images/logo.png" alt="Company Logo">
    </div>
    <input type="checkbox" id="menu-toggle" class="menu-toggle">
    <label for="menu-toggle" class="menu-toggle-label"></label>
    <ul class="nav-links">
      <li><a @click="scrollToSection('home')">HOME</a></li>
      <li><a @click="scrollToSection('about')">ABOUT</a></li>
      <li><a @click="scrollToSection('services')">SERVICES</a></li>
      <li><a @click="scrollToSection('extension')">E-EXTENSION SERVICES</a></li>
      <li><a @click="scrollToSection('contact')">CONTACT US</a></li>
      <li><a @click="scrollToSection('team')">TEAM</a></li>
    </ul>
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

.menu-toggle {
  display: none;
}

.menu-toggle-label {
  display: none;
  width: 30px;
  height: 30px;
  background-color: #333333;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 2;
}

.menu-toggle-label:before,
.menu-toggle-label:after {
  content: '';
  position: absolute;
  background-color: #ffffff;
  width: 18px;
  height: 2px;
  top: calc(50% - 4px);
  left: 50%;
  transform: translate(-50%, 0);
}

.menu-toggle-label:before {
  transform: translate(-50%, -6px);
}

.menu-toggle-label:after {
  transform: translate(-50%, 6px);
}

.nav-links {
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
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


/* Media Query for Small Screens */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    background-color: white;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .nav-links li {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .menu-toggle-label {
    display: block;
  }

  .menu-toggle:checked ~ .nav-links {
    display: flex;
  }
}
</style>
