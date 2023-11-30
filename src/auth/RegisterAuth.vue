<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
        
        <label for="surname">Surname:</label>
        <input type="text" id="surname" v-model="surname" required>
        
        <label for="nationalId">National ID:</label>
        <input type="text" id="nationalId" v-model="nationalId" required>
        
        <label for="gender">Gender:</label>
        <select id="gender" v-model="gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" v-model="dob" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        
        <label for="mobile">Mobile:</label>
        <input type="tel" id="mobile" v-model="mobile" required>
        
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="phone">
        
        <label for="backgroundImage">Background Picture:</label>
        <input type="file" id="backgroundImage" @change="onFileChange">
        
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        surname: '',
        nationalId: '',
        gender: '',
        dob: '',
        email: '',
        mobile: '',
        phone: '',
        backgroundImage: null
      };
    },
    methods: {
      submitForm() {
        // Perform form submission logic here
        // You can access the form data using this.name, this.surname, etc.
      },
      onFileChange(event) {
        // Handle file change event here
        // You can access the selected file using event.target.files[0]
        this.backgroundImage = event.target.files[0];
      }
    }
  };
  </script>