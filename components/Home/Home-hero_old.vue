<template>


  <section  v-css-parallax class="home-hero full-width">

      <div class="wrapper">

        <div class="call-to-action">

          <h2>Airport Hotels<br>The Right Way To..</h2>

          <a href="#" class="button outlined arrow">

            Learn More

          </a>


          <button class="play-button"></button>

        </div>

      </div>

    </section>


</template>

<script>

export default {

  name: 'HomeHero'

}

</script>

<style scoped lang="scss">

  .home-hero{

    background-image: url("http://res.cloudinary.com/studio-nomade/image/upload/v1499284211/singapore-catedral.jpg");

    padding-top: 200px;

    /*display: grid;*/

    /*grid-template-columns: 1fr minmax(300px, 800px)  minmax(100px, 1fr)  1fr;*/

    /*grid-template-rows: 140px repeat(3, 1fr);*/


    --multiplier: 0;


    .call-to-action{

      float: left;

      position: relative;

      padding: 70px 60px;

      background: #fff;

      border-left: 6px solid #ffce00;

      width: 100%;

      max-width: 800px;

      margin-top: -80px;

      --multiplier: 0.08;

      --translate: calc(var(--scroll-amount) * var(--multiplier) * 1px);

      transform: translateY(var(--translate));


      h2{

        font-size: 60px;

        line-height: 75px;


        @media all and(max-width: 1024px) {

          font-size: 40px;

          line-height: 55px;

        }

      }


      @media all and (max-width: 667px) {

        padding: 30px;

        margin-top: 0;

      }


    }


    .play-button{

      bottom: 10%;

      right: -10%;

    }


    @media all and(max-width: 768px) {

      height: 70vh;


    }

    @media all and (max-width: 667px) {

      padding-top: 80px;

      height: 100vh;


      .play-button{

        bottom: -55%;

        right: 50%;

        transform: translateX(50%);

      }

    }



  }//home-hero


</style>
