<template>

  <!--
      GRID SLIDESHOW
      Uses csss custom properties to create a slideshow based on grid blocks
      We just update the --current custom property and the css will make the its part
  -->

  <section>

    <div class="wrapper" style="padding:0;">

      <div class="grid-slideshow">

        <!-- CONTROLS-->
        <span class="controls prev">

           <button @click="prevSlide" :class="[(current >= 0) ? 'disabled' : '' ]"></button>

        </span>

        <span class="controls next">

           <button @click="nextSlide"  :class="[(current <= -2) ? 'disabled' : '' ]"></button>

        </span>

        <!-- SLIDE TITLE-->
        <div class="slide-title">

         <div class="slideshow-item-wrapper">

           <h2 class="font-cardo has-horizontal-line">Featured Slideshow Content Title Here</h2>

           <h2 class="font-cardo has-horizontal-line">Featured Slideshow Content Title Here 2</h2>

           <h2 class="font-cardo has-horizontal-line">Featured Slideshow Content Title Here 3</h2>

         </div>

        </div>

        <!-- SLIDE CONTENT-->
        <div class="slide-content">

          <div class="slideshow-item-wrapper">

            <p>
              Para criar o plugin, o mesmo deve expor um método install que por sua vez recebe dois argumentos, o primeiro é o construtor do Vue e o segundo são as opções
            </p>

            <p>
              Para criar o plugin, o mesmo deve expor um método install que por sua vez recebe dois argumentos, o primeiro é o construtor do Vue e o segundo são as opções
            </p>

            <p>
              Para criar o plugin, o mesmo deve expor um método install que por sua vez recebe dois argumentos, o primeiro é o construtor do Vue e o segundo são as opções
            </p>

          </div>

        </div>

        <!-- MAIN IMAGE -->
        <picture class="main-image">

          <div class="slideshow-item-wrapper">

            <img src="http://res.cloudinary.com/studio-nomade/image/upload/v1499284202/chinatown-gate.jpg">

            <img src="http://res.cloudinary.com/studio-nomade/image/upload/v1499293251/vietnamese-faces-series-7.jpg">

            <img src="http://res.cloudinary.com/studio-nomade/image/upload/v1499284211/singapore-catedral.jpg">


          </div>

        </picture>

        <!-- SECONDARY IMAGE -->
        <picture class="secondary-image">

          <div class="slideshow-item-wrapper">

            <img src="http://res.cloudinary.com/studio-nomade/image/upload/v1499284211/singapore-catedral.jpg">

            <img src="http://res.cloudinary.com/studio-nomade/image/upload/v1499284202/chinatown-gate.jpg">

            <img src="http://res.cloudinary.com/studio-nomade/image/upload/v1499293251/vietnamese-faces-series-7.jpg">

          </div>

        </picture>

        <!-- SLIDE MEDIA -->
        <div class="slide-media">

          <VideoWrapper cover="http://res.cloudinary.com/studio-nomade/image/upload/v1499284422/sunset-bangkok.jpg" videolink="https://www.youtube.com/watch?v=M6F5Jkl7_hY"/>

        </div>

        <!-- READ MORE + KEEP SCROLLING-->
        <div class="scroll">

          <a href="#" class="button outlined arrow">

            Learn More

          </a>

          <img src="/img/scroll.png">

        </div>


      </div>

    </div>

  </section>


</template>

<script>

import VideoWrapper from "@/components/Video-wrapper";

export default {

  name: 'HomeHero',

  components:{ VideoWrapper },

  data(){

    return{

      current: 0

    }

  },


  computed:{

    currentSlide(){

      return this.current;

    }

  },

  methods:{

    updateCurrentSlide(el){

      const PARENT = el.target.closest('.grid-slideshow');

      PARENT.style.setProperty("--current", this.currentSlide );

    },


    nextSlide(el){


      if(this.current > -2){

        this.current--;

        this.updateCurrentSlide(el);

      }


      if(this.current == -2){

        el.target.classList.add('disabled');

      }

    },


    prevSlide(el){

      if(this.current < 0){

        this.current++;

         this.updateCurrentSlide(el);

      }

      if(this.current == 0){

        el.target.classList.add('disabled');

      }

    },

  }

}

</script>

