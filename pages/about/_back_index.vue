<template>

    <div>

        <h1>{{ pageTitle }}</h1>

        <span style="display:none;">{{pageContent}}</span>
        <VueMarkdown>{{ pageContent }}</VueMarkdown>

    </div>

</template>

<script>

    import gql from 'graphql-tag';

    import VueMarkdown from 'vue-markdown';


    const allEvents = gql`
        query allEvents {
          allEvents(orderBy: date_ASC) {
            id
            title
            date
            location
            image{
              url
            }
          }
        }
      `;

    export default{

        components:{

            VueMarkdown

        },

        data: () => ({

            loading: 0

        }),


        apollo: {

          $loadingKey: 'loading',

          allEvents: {

            query: allEvents

          }

         },


      head () {

        return {

          title: this.pageTitle,

          meta: [

            { hid: 'description', name: 'description', content: 'My custom description' }

          ]

        }

      },

      // GET ASYNC DATA FROM STORY BLOK
      asyncData(context){

        return context.app.$storyapi
            .get('cdn/stories/about', {

                // will get only DRAFT blog posts; set to PUBLISHED when build the app
                version: 'draft',

            }).then( res => {

                return {

                    pageTitle: res.data.story.content.title,
                    pageContent: res.data.story.content.content

                }

            })

      }

    }

</script>


