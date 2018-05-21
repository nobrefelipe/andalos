/*
  GRID GALLERY
  Used to create a gallery in a grid style
  Default layout can be overridden by passing a Custom Layout Prop [TODO]
*/

<template>

  <div class="stack-block">

    <div class="is-flexy is-center">

      <h2 class="has-horizontal-line">PHOTOGRAPHY</h2>

    </div>

    <div class="stack-block grid-gallery">

      <div v-for="(item, i) in content" v-if="item.img"  :key="i" class="grid-gallery-item">

        <img  :src="item.img">

      </div>



      <div v-for="(item, i) in content" v-if="item.html" :key="i" class="grid-gallery-item copy">

        <span v-html="item.html" style="max-width: 500px; float:left;"></span>

      </div>

    </div>

  </div>

</template>


<script>

//import MediumLightbox from '@/assets/js/medium-lightbox.js';


export default {

  name: 'GridGallery',

  props: ['content'],

  mounted(){

    //MediumLightbox('div.zoom-effect');

  }

}

</script>

<style scoped lang="scss">


  .grid-gallery{

    padding-top: 40px;

    display: grid;

    grid-template-columns: repeat(4, minmax(200px, 1fr));

    grid-template-rows: 200px 400px ;

    grid-auto-flow: dense;

    grid-gap: 20px;

    grid-template-areas:  "a     b     b     c"
                          "a     b     b     d"
                          ".     e     copy  copy";


    @media all and (max-width: 900px){

      grid-gap: 10px;

      grid-template-columns: repeat(3, minmax(200px, 1fr));

      grid-template-areas:  "a     b     b "
                            "a     b     b  "
                            "e     c     d "
                            "e     copy  copy";

    }

    @media all and (max-width: 600px){

      grid-gap: 5px;

      grid-template-columns: repeat(2, minmax(200px, 1fr));

      grid-template-areas:  "d     d"
                            "a     b"
                            "copy  copy "
                            "c     e";


    }


    &-item{

      &:nth-of-type(1){

        grid-area : a;

        transform: translateY(10%);

      }

      &:nth-of-type(2){

        grid-area : b;

      }

      &:nth-of-type(3){

        grid-area : c;

      }

      &:nth-of-type(4){

        grid-area : e;

      }

      &:nth-of-type(5){

        grid-area : d;


      }

      &:nth-of-type(6){

        grid-area : copy;


      }


      &.copy{

        padding: 30px;

        p{

          line-height: 30px;

        }

      }


      @media all and (max-width: 900px){
        transform: none !important;
      }
    }


    img{

      width: 100%;

      height: 100%;

      object-fit: cover;

      object-position: 50% 50%;

    }


  }

</style>
