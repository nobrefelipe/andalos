<template>

    <section class="home">

       <homeHero/>

<!-- NON FEATURED POSTS -->
       <div
           v-for="post in allPosts"
           v-if="!post.isFeatured && !post.displayGrid"
           :key="post.id"
           class="stack-block" >

               <div class="wrapper">

                   <PostPreview
                       :slug="post.slug"
                       :title="post.title"
                       :excerpt="post.excerpt"
                       :buttonStyle="post.buttonStyle"
                       :postPreviewLayout="post.postPreviewLayout"
                       :postMainMedia="post.postMainMedia"
                       :videoURL="post.videoURL"
                       :thumbnail="post.featuredImage"/>

               </div>

       </div>
<!-- END: NON FEATURED POSTS -->


<!-- FEATURED POSTS -->
        <section custom-properties-parallax class="featured-posts stack-block">

            <div class="wrapper">

                <h2 class="has-horizontal-line">FEATURED</h2>

            </div>

        </section>

        <div
            v-for="post in allIntinerarios"
            v-if="!post.displayGrid"
            :key="post.id"
            class="stack-block" >

                <PostPreview
                    :slug="post.slug"
                    :title="post.title"
                    :excerpt="post.excerpt"
                    :buttonStyle="post.buttonStyle"
                    :postPreviewLayout="post.postPreviewLayout"
                    :postMainMedia="post.postMainMedia"
                    :videoURL="post.videoURL"
                    :thumbnail="post.featuredImage"/>

        </div>
<!-- END: FEATURED POSTS -->


<!-- POST PREVIEW GRID -->
        <div class="wrapper no-gap-mobile">

            <PostPreviewGrid />

        </div>
<!-- END: POST PREVIEW GRID -->


    </section>

</template>

<script>

import gql from 'graphql-tag';
import HomeHero from '@/components/Home/Home-hero.vue'
import PostPreview from "@/components/Blog/PostPreview";
import PostPreviewGrid from "@/components/Blog/PostPreviewGrid";

const allPosts = gql`
    query allPosts {
        allPosts(orderBy: createdAt_DESC, first: 2) {
            id
            title
            slug
            excerpt
            videoURL
            createdAt
            isFeatured
            displayGrid
            postPreviewLayout
            postMainMedia
            buttonStyle
            featuredImage
        }
    }
`;


const allIntinerarios = gql`
    query allIntinerarios {
        allIntinerarios(orderBy: createdAt_DESC, first: 2) {
            id
            title
            slug
            excerpt
            videoURL
            featuredImage
            videoURL
            postPreviewLayout
            buttonStyle
            postMainMedia
        }
    }
`;

const allFeaturedPostsGrid = gql`
    query allPosts {
        allPosts(filter: {
            AND:[{
              displayGrid: true
            }]
          }, orderBy: createdAt_DESC, first: 2) {
            id
            title
            slug
            excerpt
            buttonStyle
            featuredImage
        }
    }
`;


export default {

    components: { HomeHero, PostPreview, PostPreviewGrid},

    apollo: {

        $loadingKey: 'loading',

        allPosts: {

            prefetch: true,

            query: allPosts

        },


        allIntinerarios: {

            prefetch: true,

            query: allIntinerarios

        }

    },



}
</script>


