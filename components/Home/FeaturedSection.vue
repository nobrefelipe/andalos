<template>


  <div style="float:left; width: 100%;">


    <section custom-properties-parallax class="explore stack-block">

      <div class="wrapper">

        <h2 class="has-horizontal-line">FEATURED</h2>

      </div>

    </section>




  </div>


</template>

<script>

import { directive as customPropertiesParallaxDirective } from 'vue-custom-properties-parallax';

export default {

  directives: {
    'custom-properties-parallax': customPropertiesParallaxDirective
  },



}

</script>

<style scoped lang="scss">

  .featured-posts{

    position: relative;


    &:before,
    &:after{

      position: absolute;

      content: "EXPLORE";

      color: rgba(0,0,0,0.05);

      font-weight: 700;

      font-size: 15vw

    }

    &:before{

      left: 0;



      --multiplier: 0.05;

      --translate: calc(-65% + (var(--scroll-amount) * var(--multiplier) * 1px));

      transform: translate3D(var(--translate), 0, 0);

    }

    &:after{

      right: 0;

      top: 300px;


      --multiplier: 0.05;

      --translate: calc(45% + (var(--scroll-amount) * var(--multiplier) * 1px));

      transform: translate3D(var(--translate), 0, 0);

    }


    h2{

      font-size: 60px;

      text-align: center;

      margin-bottom: 250px;

      @media all and(max-width: 500px) {

        margin-bottom: 0;

        font-size: 40px;

      }

    }

  }


  .featured-item{

    float: left;

    width: 100%;

    margin: 0 0 100px 0;

    display: grid;

    grid-template-columns: minmax(375px, 1fr) minmax(375px, 1.4fr);

    grid-template-areas:  "item-media item-content";

    grid-template-rows: auto-fill;

    grid-auto-flow: dense;

    grid-gap: 60px;


    @media all and(max-width: 500px) {

      grid-gap: 20px;

      grid-template-columns: 1fr;

      grid-template-areas:  "item-media"
                            "item-content";

    }


    img{width: 100%}


    &-cover{

      width: 100%;

      height: 100%;

      grid-area : item-media;

    }


    &-content{

      width: 100%;

      display: flex;

      align-items: center;

      grid-area : item-content;

      @media all and(max-width: 500px) {

        padding: 0 20px;

      }

    }


    &.reverse{

      grid-template-areas:  "item-content item-media";

      .featured-item-content{

        // align the content to the left, be near to the image
        justify-content: flex-end;

        padding-left: 20px;

      }


      @media all and(max-width: 500px) {

        grid-template-areas:  "item-media"
                              "item-content";

      }

    }


    &.boxed{


      .featured-item-cover{


        padding:0;

        width: 45%;

        //max-width: calc(1400px );

      }

      .featured-item-content{

        padding:0 10% 0 0;

        width: 50%;




      }


    }


    .boxed-parallax{

      position: relative;

      overflow: hidden;

      img{

        width: 100%;

        height: 100%;

        object-fit: cover;

        object-position: 50% 50%;

        --multiplier: 0.0002;

        --scale: calc(1 + var(--scroll-amount) * var(--multiplier) * 1);

        transform: scale(var(--scale));
      }

    }


    &.grid{

      display: grid;

      grid-template-columns: minmax(300px, 1fr) minmax(300px, 2fr);

      grid-template-rows: 400px 100px 400px;

      grid-auto-flow: dense;

      grid-gap: 60px;

      grid-template-areas:  "item-1-content  item-1-media "
                            "item-2-media    item-1-media "
                            "item-2-media    item-2-content ";


      .featured-item-content{

        width: 100%;

        height: 100%;

        &.content1{ grid-area : item-1-content; }
        &.content2{ grid-area : item-2-content; }

      }

      .featured-item-cover{

        width: 100%;

        padding: 0;

        margin: 0;

        img{

          width: 100%;

          height: 100%;

          object-fit: cover;

          object-position: 50% 50%;

        }

        &.cover1{ grid-area : item-1-media; }
        &.cover2{ grid-area : item-2-media; }

      }


      @media all and (max-width: 500px) {

        grid-gap: 0;

        grid-template-rows: auto;

        grid-template-columns: minmax(300px, 1fr);

        grid-template-areas:  "item-1-media"
                              "item-1-content "
                              "item-2-media "
                              "item-2-content";

        .featured-item-content{padding: 20px}


      }

    }

  }


</style>
