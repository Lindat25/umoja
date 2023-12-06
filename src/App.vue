
<template>
  <div id="app">
    <NavBar :scrollToSection="scrollToSection" />
    <router-view></router-view>
    <div class="landing-page">
      
      <div id="home" class="home-section" style="background-image: url('/static/images/s.jpg'); background-repeat: no-repeat; background-size: cover;">
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <div class="services-hero-content">
                <p class="platform-paragraph"><i class="mdi mdi-minus"></i><i class="mdi mdi-minus"></i><i class="mdi mdi-minus" style="padding-right: 30px;"></i>WELCOME TO </p>
                <h1 class="heading">UMOJALANDS</h1>
                <p class="platform-paragraph">A platform for:</p>
                <ul>
                  <li>Data-driven lending</li>
                  <li>Insurance</li>
                  <li>Market linkage</li>
                </ul>
                <p>Providing support for rural smallholder farmers.</p>

                <div class="action-btn mt-4">
                  <a href="#services" class="btn solid-btn hero">SERVICES</a>
                  <div class="btn-stroke"></div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
     
      <div id="about" class="about-section" style="display: flex; justify-content: center; align-items: center;">
        <v-container class="text-center" style="margin-left: 30px; margin-right: 30px;">
          <h1 class="text-center fw-semibold mb-4 team-heading">
            <span class="text-uppercase">Who We Are</span>
          </h1>
          <v-row class="about-us">
            <v-col cols="12" md="6">
              <div class="text">
                <h1 class="mb-3">UMOJALANDS SYSTEM</h1>
                <hr>
                <v-spacer></v-spacer>
                <p class="aligned-paragraph" style="padding-bottom: 20px; padding-top: 20px; margin-right: 50px;" >
                  Modern agriculture is filled with big data that is rarely used. Combining predictive analytics and precision agriculture, the system converts field data into actionable insights. Umojalands is all about finding valuable patterns during the loan application processes and helping risk officers make better and more precise decisions without leaving the office. At Umojalands, we offer 3 digital services to improve food security in Zimbabwe and southern Africa, through land utilization, access to finance for smallholder farmers, and advisory services on precision farming.
                </p>
                <div class="action-btn mt-4">
                  <a href="#services" class="btn solid-btn hero">SERVICES</a>
                  <div class="btn-stroke"></div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="image">
                <img src="/static/images/about.jpg" alt="About Us Image" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
     
      <div id="services" class="services-section">
        <div class="container">
        <header class="section-header">
          <h2 class="display-3">What We Do</h2>
          <hr>
        </header>
      <div class="row gap-y">
        <div class="col-md-4 card p-5 shadow-2">
            <p><i class="icon-lightbulb lead-7 text-success"></i></p>
            <h5 class="fw-500 my-4">e-Extension Service</h5>
            <p >Crop intelligence solution using big data to generate data-driven insights on: Soil composition & quality,  Crop suitability,  and Crop health diagnosis. Get a smart guide for optimal decision making via SMS.</p>
        
        </div>
        <div class="col-md-4 card p-5 shadow-2">
          
            <p><i class="icon-wallet lead-7 text-success"></i></p>
            <h5 class="fw-500 my-4">MANAGE SOIL NUTRIENTS</h5>
            <p class="mb-0">Create intelligent fertility maps to plan precision flight by drones to fix nutrient defects.
            </p>
          
        </div>
        <div class="col-md-4 card p-5 shadow-2">
          
            <p><i class="icon-gears lead-7 text-success"></i></p>
            <h5 class="fw-500 my-4">CROP HEALTH ALERT</h5>
            <p class="mb-0">Farmer gets near real-time SMS alert or phone call on crop health in their local language.
            </p>
          
        </div>
        <div class="col-md-4 card p-5 shadow-2">
          
            <p><i class="icon-dial lead-7 text-success"></i></p>
            <h5 class="fw-500 my-4">MITIGATE PEST ATTACK</h5>
            <p class="mb-0">An IoT rig that collects pest population data, generates early warning, and provides pesticide advice.</p>
         
        </div>
        <div class="col-md-4 card p-5 shadow-3">
          
            <p><i class="icon-gears lead-7 text-success"></i></p>
            <h5 class="fw-500 my-4">CROP YIELD PREDICTION</h5>
            <p class="mb-0">Get a data-driven, personalized risk report for a farm/crop; especially useful for investors.</p>
         
        </div>
      
      </div>
    


    <v-container>
      <h4 class="text-center mb-4" style="padding-top: 60px; ">
        <v-icon class="mdi mdi-star mr-2"></v-icon>
        <span class="text-uppercase pt-30" >SIMPLIFYING AND BOOSTING AGRICULTURAL FINANCE GROWTH</span>
      </h4>
      <v-row class="features-icon-wrapper">
    <v-col cols="12" md="4">
      <div class="features-icon-box">
        <div class="features-icon">
          <img src="/static/images/loan.jpg" alt="laptop charging" />
        </div>
        <h5 class="mb-2">LOAN MANAGEMENT</h5>
        <p class="features-icon-description">
          AUTOMATED LOAN MANAGEMENT
        </p>
      </div>
    </v-col>
    <v-col cols="12" md="4">
      <div class="features-icon-box">
        <div class="features-icon">
          <img src="/static/images/credit.jpg" alt="transition up" />
        </div>
        <h5 class="mb-2">CREDIT SCORE</h5>
        <p class="features-icon-description">
          CREDIT SCORING WITH AI
        </p>
      </div>
    </v-col>
    <v-col cols="12" md="4">
      <div class="features-icon-box">
        <div class="features-icon">
          <img src="/static/images/crop.jpg" alt="edit" />
        </div>
        <h5 class="mb-2">CROP AREAS</h5>
        <p class="features-icon-description">
          MONITORING CROP AREAS
        </p>
      </div>
    </v-col>
  </v-row>
  <v-row class="features-icon-wrapper">
    <v-col cols="12" md="4">
      <div class="features-icon-box">
        <div class="features-icon">
          <img src="/static/images/hist.jpg" alt="edit" />
        </div>
        <h5 class="mb-2">FIELD DATA</h5>
        <p class="features-icon-description">
          FULL HISTORICAL FIELD DATA
        </p>
      </div>
    </v-col>
    <v-col cols="12" md="4">
      <div class="features-icon-box">
        <div class="features-icon">
          <img src="/static/images/dis.jpg" alt="edit" />
        </div>
        <h5 class="mb-2">DISEASE PREDICTION</h5>
        <p class="features-icon-description">
          PLANT DISEASE PREDICTIONS
        </p>
      </div>
    </v-col>
    <v-col cols="12" md="4">
      <div class="features-icon-box">
        <div class="features-icon">
          <img src="/static/images/neural.jpg" alt="edit" />
        </div>
        <h5 class="mb-2">SCORING</h5>
        <p class="features-icon-description">
          NEURAL NETWORKS IN SCORING
        </p>
      </div>
    </v-col>
  </v-row>
    </v-container>
  </div>
  </div>

  
  
  <div id="extension" class="extension-section" style="display: flex; justify-content: center; align-items: center;">
    <div class="container">
    <v-container class="text-center" style="margin-left: 30px; margin-right: 30px;">
    <v-row align="center">
      <v-col cols="12" md="7" class="mx-auto">
        <header class="section-header">
          <h2 class="display-3" style="padding-top: 80px;">E-Extension Services</h2>
          <hr>
        </header>
        <p class="lead-2 aligned-paragraph">
          Once subscribed, farmers get "near" real-time, data-driven, and personalized farming advice via SMS, voice call, in-app notification, or in-person.
          We use satellite technology to monitor soil nutrients and crop health remotely, then provide essential advice and recommendations to the farmers. This is a game-changer for most rural smallholder farmers and communities where there is weak or non-existent government-run agricultural extension service. Our advice is vital for improving farming practices and increasing yield for a fraction of the costs.
          Once you've captured your farm coordinates, we can:
        </p>
        <ul class="ordered-list">
          <li class="list-item">Analyze your farm's soil fertility and calculate your fertilizer requirement for a good harvest.</li>
          <li class="list-item">Send you weekly updates on crop health till harvest.</li>
          <li class="list-item">Suggest the best time to harvest based on current and previous seasons' data.</li>
          <li class="list-item">Provide recommendations on farm inputs that fit your environment, among others.</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</div>
</div>




    <div id="contact" class="contact-section" style="background-color: rgb(217, 217, 221);">
      <header class="header bg-gray">
      <div class="container">
        <header class="section-header">
          <h2 class="display-3">Contact Us</h2>
          <hr>
        </header>

        <div class="row gap-y text-center">

          <div class="col-lg-4">
            <div class="card border p-5">
              <h5 class="mb-4 aligned-paragraph">Business/Enquiries</h5>
              <p class="small-1 aligned-paragraph">Want to know more about us, or work with us?</p>
              <a class="aligned-paragraph" href="#">https://umojalands.co.zw</a>
            </div>
          </div>


          <div class="col-lg-4">
            <div class="card border p-5">
              <p class="small-1 aligned-paragraph">67 Kwame Nkrumah | Harare </p>
              <p class="small-1 aligned-paragraph">Email: info@umojalands.com</p>
              <p class="small-1 aligned-paragraph">Phone:+263719906436</p>
            </div>
          </div>
        </div>

      </div>
      </header>
    </div>

      

      <div id="team" class="team-section" style="background-color: #f2f2f2;">
        <section id="landingTeam" class="section-py landing-team">
          <div class="container bg-icon-right">
            <header class="section-header">
          <h2 class="display-3" >Meet The Team</h2>
          <hr>
        </header>
            <div class="row gy-5 mt-2">
              <div class="col-lg-3 col-sm-6" v-for="member in teamMembers" :key="member.id">
                <div :class="['card', member.cardClass, 'mt-3 mt-lg-0', 'shadow-none']">
                  <div :class="['bg-label', member.labelClass, 'position-relative', 'team-image-box']">
                    <img :src="member.imageSrc" :alt="member.name" />
                  </div>
                  <div class="card-body text-center">
                    <h5 class="card-title fw-semibold mb-1">{{ member.name }}</h5>
                    <p class="card-text">{{ member.role }}</p>
                    <div class="text-center team-media-icons">
                      <a href="javascript:void(0);" class="text-heading" target="_blank" v-for="social in member.socialMedia" :key="social.iconClass">
                        <i :class="['tf-icons', social.iconClass, 'me-2']" style="color: grey;"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

  



 
<AppFooter/>

    </div>
  </div>
</template>

<script>
import '@/../assets/css/bootstrap.css';
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: 'App',
  components: {
    NavBar, AppFooter
  },
  data() {
    return {
      overlay:true,


      
      teamMembers: [

      {
          id: 1,
        name: 'VIRGINIA SIBANDA',
        role: 'Head of Umoja Advisory',
        cardClass: 'card-hover-border-info',
          labelClass: 'bg-label-info',
          imageSrc: '/static/images/user.png',
          socialMedia: [
            { iconClass: 'mdi mdi-facebook mdi-24px' },
            { iconClass: 'mdi mdi-twitter mdi-24px' },
            { iconClass: 'mdi mdi-linkedin mdi-24px' }
          ]
      },
        {
          id: 2,
          name: 'TAFADZWA GAVI',
          role: 'Co-Founder and Executive Director',
          
          cardClass: 'card-hover-border-primary',
          labelClass: 'bg-label-primary',
          imageSrc: '/static/images/user.png',
          socialMedia: [
            { iconClass: 'mdi mdi-facebook mdi-24px' },
            { iconClass: 'mdi mdi-twitter mdi-24px' },
            { iconClass: 'mdi mdi-linkedin mdi-24px' }
          ]
        },
        {
          id: 3,
          name: 'NAVISON MASUNDA',
        role: 'Chief Finance Officer',
        
          cardClass: 'card-hover-border-danger',
          labelClass: 'bg-label-danger',
          imageSrc: '/static/images/user.png',
          socialMedia: [
            { iconClass: 'mdi mdi-facebook mdi-24px' },
            { iconClass: 'mdi mdi-twitter mdi-24px' },
            { iconClass: 'mdi mdi-linkedin mdi-24px' }
          ]
        },
        {
          id: 4,
          name: 'KUMBIRAI CHIMUKUPETE',
        role: 'Co-Founder and Chief Operating Officer',
          cardClass: 'card-hover-border-success',
          labelClass: 'bg-label-success',
          imageSrc: '/static/images/user.png',
          socialMedia: [
            { iconClass: 'mdi mdi-facebook mdi-24px' },
            { iconClass: 'mdi mdi-twitter mdi-24px' },
            { iconClass: 'mdi mdi-linkedin mdi-24px' }
          ]
        },
        {
          id: 5,
          name: 'GLADYS KANYONGO',
        role: 'DAgriculture and Rural Finance Advisory',
          cardClass: 'card-hover-border-info',
          labelClass: 'bg-label-info',
          imageSrc: '/static/images/user.png',
          socialMedia: [
            { iconClass: 'mdi mdi-facebook mdi-24px' },
            { iconClass: 'mdi mdi-twitter mdi-24px' },
            { iconClass: 'mdi mdi-linkedin mdi-24px' }
          ]
        },

      ]
    };
  },

  methods: {
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const navBarHeight = document.querySelector('nav').offsetHeight;
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset - navBarHeight,
        behavior: 'smooth'
      });
    }
  },


}

};
</script>

<style scoped>
.services-section {
 
  padding-top: 30px;
  padding-bottom: 30px;
}

.features-icon-wrapper {
  padding-top: 30px;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.action-btn .btn {
        border-radius: 30px;
        background-color: rgb(3, 49, 14);
        color: white;
        padding: 12px 24px;
        transition: background-color 0.3s ease;
    }

    .action-btn .btn:hover {
        background-color: white;
        color: rgb(37, 244, 75);
    }



.platform-paragraph {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

.landing-page {
  scroll-behavior: smooth;
  padding-top: 70px;

}

.extension-section

 {
  height: 80vh;
}

.contact-section{
  height: 70vh;
}

.home-section{
  height: 130vh;
}

.team-section{
  height: 150vh;
}

.portfolio-section{
  height: 70vh;
}

.solutions-section{
  height: 200;
}
.services-section{
  height: 200vh;
}

/* Media Queries for Responsive Heights */
@media (max-width: 1000px) {
  .extension-section {
    height: 300vh;
  }

  .contact-section {
    height: 100vh;
  }

  .home-section {
    height: 100vh;
  }


@media (max-width: 1000px) {
  .extension-section {
    height: 200vh;
  }

  .contact-section {
    height: 100vh;
  }

  .home-section {
    height: 80vh;
  }

  .team-section {
    height: 320vh;
  }


  .services-section {
    height: 430vh;
  }

  .heading {
    font-size: 30px;
  }
}

@media (min-width: 600px) {
  .heading {
    font-size: 50px;
  }
}

.home-section {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
}


.team-image-box {
  position: relative;
  overflow: hidden;
  height: 200px; 
}

.team-image-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(252, 254, 254, 0.5); 
  z-index: 1;
}

.team-image-box img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  z-index: 2;
}

.team-heading {
  padding-top: 20px; 
}

.about-section {
  background-color: #bdcbcf; 
  padding-top: 50px;
  padding-bottom: 50px;
  height: 110vh; 
}

.about-us {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}


.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.text {
  text-align: center;
}

.image img {
  max-width: 100%;
}


ul {
    list-style: none;
  }




.services-hero-content {
  text-align: left;
  color: #fff;
  padding-left: 20px; 
  margin-left: 100px;
}

.services-hero-content h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.services-hero-content p {
  font-size: 18px;
}

  .services-hero-content {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 20px;
  }

  .services-hero-content h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .services-hero-content p {
    font-size: 18px;
  }

.hero-title {
  margin-top: 0;
  padding-bottom: 5opx;
}

#home {
  background-color: #7d798a;
}


  .features-icon img {
    max-width: 100%; 
    height: auto; 
  }

  .container {
    padding: 30px; 
  }



.features-icon-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .features-icon-box {
    flex-basis: 23%;
    text-align: center;
    margin-bottom: 20px;
  }

  .features-icon-box .features-icon {
    margin-bottom: 10px;
  }

  .features-icon-box img {
    width: 100%;
    height: 200px;
  }

 


.text-container h4{
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.ordered-list {
  list-style: disc;
  padding-left: 40px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-position: inside;
  
}

.list-item {
  margin-bottom: 10px;
  text-indent: -5px;

}

.aligned-paragraph {
  text-align: justify;
}

.divider {
  border-top: 1px solid #000;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.custom-btn {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}
.custom-btn:hover {
  background-color: darkgreen;
}

.custom-btn a {
  color: rgb(219, 205, 205);
}

.custom-btn:hover a {
  color: rgb(46, 176, 111);
}
  



</style>