<template>

    <div>

        <h1></h1>


        <VueMarkdown></VueMarkdown>

    </div>

</template>

<script>

    import gql from 'graphql-tag';

    import VueMarkdown from 'vue-markdown';




    export default{

        components:{

            VueMarkdown

        },



      head () {

        return {

          title: this.pageTitle,

          meta: [

            { hid: 'description', name: 'description', content: 'My custom description' }

          ]

        }

      }

    }

</script>


