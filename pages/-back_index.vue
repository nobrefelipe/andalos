<template>
  <section class="container">

      <PostPreview
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :excerpt="post.previewText"
        :thumbnail="post.thumbnailUrl"/>

  </section>
</template>

<script>

import PostPreview from "@/components/Blog/PostPreview";

export default {

  components: {PostPreview},

  // GET ASYNC DATA FROM STORY BLOK
  asyncData(context){

    return context.app.$storyapi
        .get('cdn/stories', {

            // will get only DRAFT blog posts; set to PUBLISHED when build the app
            version: 'draft',

            // will get everything under the blog content
            starts_with: 'blog/'

        }).then( res => {

        return {

            posts: res.data.stories.map( item => {

                return {

                   id: item.slug,
                   title: item.content.title,
                   previewText: item.content.excerpt,
                   thumbnailUrl: item.content.thumbnail

                }

            })

        }

    })

  }


}
</script>


