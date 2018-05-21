<template>

    <section  v-css-parallax.center  class="stack-block travel-expands-the-mind">

      <div class="wrapper">


        <cta-block class="reverse half-half">

          <div slot="media">

            <img class="is-half is-mobile__full" src="https://images.unsplash.com/photo-1506349548872-e96212963180?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9abc394cf9a1fc882a89d8b49e778b79&auto=format&fit=crop&w=2100&q=80">

          </div>

          <div slot="content">

            <h2 class="has-horizontal-line">
              Travel expands the<br>
              mind rarely.
            </h2>

            <p>
              People are wanting to fly to international destinations for vacations but planning a holiday getawayca easily tirn into a stressful venture when matter of costs comes up. <br>
              However, airfare can be very ecpensive. Air fare by itself can kill the exitement. And when people already factor in
            </p>

            <a href="#" class="button outlined arrow">

              Learn More

            </a>

          </div>

        </cta-block>


      </div>

    </section>

</template>

<script>

export default {

  name: 'TravelExpandsTheMind'

}

</script>

<style scoped lang="scss">

  // LETS SCALE UP THE ENTIRE BLOCK AS USER SCROLLS
  .travel-expands-the-mind{

    --multiplier: 0.0001;

    --scale: calc(1 + var(--scroll-amount) * var(--multiplier) * 1);

    transform: scale(var(--scale));


  }//travel-expands-the-mind

</style>

