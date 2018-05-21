<template>

    <article v-if="Post">

        <h1>{{Post.title}}</h1>
        <img :src="Post.featuredImage.url">
        <span v-html="Post.content"></span>

    </article>

</template>

<script>

    import gql from 'graphql-tag';
    const Post = gql`
        query post($slug: String!) {
          Post(slug: $slug) {
             id
            title
            content
            excerpt
            createdAt
            featuredImage{
              url
            }
          }
        }
      `;

    export default{


        computed:{

            slug(){

                return this.$route.params.slug

            }

        },


        apollo: {

          Post: {

            query: Post,

            /*
             => prefetch:true will not work as the query depends on route params
                If you are returning a variables object in the prefetch option, make sure it matches the result of the variable option [in this case the slug]
                If they do not match, the query's data property will not be populated while rendering the template server-side.
            */
            prefetch: ({ route }) => ({ slug: route.params.slug }),

            variables () {

              return { slug: this.slug }

            }

          }

         },

        // LETS UPDATE THE META TAGS
        head() {

            return {

                title: (this.Post ? `${this.Post.title}` : 'Loading')

            }

        }


    }
</script>

<style scoped lang="scss">

    .post-preview{

        float:left;

        width: 30%;

        margin: 20px;

        display: flex;

        flex-flow: column;

        background: #dedede;

        padding: 10px;


        img{

            width: 100%;
            height: 250px;
            object-fit: cover;
            object-position: 50% 50%;

        }


    }

</style>