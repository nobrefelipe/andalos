<template>


    <section v-css-parallax class="stack-block home-categories">

      <div class="wrapper">

        <h2 class="parallaxed has-horizontal-line">
          Traveling is difficult, <br>
          and writers tend to want to stay at <br>
          home and do their work.
        </h2>


        <section v-css-parallax>

          <div class="block-item">

            <img src="http://res.cloudinary.com/studio-nomade/image/upload/v1499293250/to-the-infinite.jpg">

            <h6 class="has-horizontal-line dark">Vietnam Travel Guide</h6>

          </div>

          <div class="block-item">

            <img src="http://res.cloudinary.com/studio-nomade/image/upload/v1499284202/chinatown-gate.jpg">

            <h6 class="has-horizontal-line dark">China Markets</h6>

          </div>

          <div class="block-item">

            <img src="http://res.cloudinary.com/studio-nomade/image/upload/v1499284201/bangkok-from-below-series-3.jpg">

            <h6 class="has-horizontal-line dark">Bangkok Hidden Experiences</h6>

          </div>

        </section>

      </div>

    </section>


</template>

<script>

export default {

  name: 'HomeCategories'

}

</script>

<style scoped lang="scss">



  .home-categories{

    position: relative;

    float: left;

    width: 100vw;


    // YELLOW SQUARE
    &:before{

      position: absolute;

      top: 40%;

      right: 20%;

      content: "";

      width: 10vw;

      height: 15vw;

      border: 5px solid #ffce00;

      z-index:-1;

      --multiplier: -0.2;

      --translate: calc(var(--scroll-amount) * var(--multiplier) * 1px);

      transform: translate3D(0, var(--translate), 0);

      @media all and (max-width: 667px) {top:25%;}

    }

    &:after{

      position: absolute;

      top: 30%;

      left: 3%;

      content: "";

      width: 120px;

      height: 200px;

      border: 2px solid #ffce00;

      z-index:-1;

      --multiplier: 0.2;

      --translate: calc(var(--scroll-amount) * var(--multiplier) * 1px);

      transform: translate3D(0, var(--translate), 0);

      @media all and (max-width: 667px) {display: none}

    }


    .parallaxed{

      --multiplier: 0.08;

    }


    section{

      margin-top: 300px;

      float: left;

      width: 100%;

      display: grid;


      grid-template-columns: repeat(3, minmax(200px, 1fr));


      grid-gap: 50px 12vw;


      .block-item{

        --multiplier: 0.2;

        --opacity: calc(calc(var(--scroll-amount) * 0.0007));

        opacity: var(--opacity);


        &:nth-of-type(2){

          margin-top: -60px;

          img{border:4px solid #ffce00;}

        }

        &:nth-of-type(3){

          /*--multiplier: 0.1;*/

          /*--translate: calc(var(--scroll-amount) * var(--multiplier) * 1px);*/
          /*transform: translateY(var(--translate));*/

        }

      }//.block-item


      @media all and (max-width: 824px) {

        grid-gap: 50px 2vw;

      }//max-width: 824px

      @media all and (max-width: 667px) {

        grid-gap: 0;

        margin-top: 150px;

        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

      }//max-width: 768px


    }//section

  }//home-categories



</style>
