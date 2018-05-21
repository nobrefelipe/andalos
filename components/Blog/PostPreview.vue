<template>

    <div  class="post-block" :class="postPreviewLayout">

        <div  class="post-block-cover">

            <!-- FEATURED IMAGE -->
            <div
                v-if="postMainMedia == 'ShowFeaturedImage'"
                v-custom-properties-parallax
                class="boxed-parallax" style="overflow: hidden" >

                    <img :src="thumbnail" style="max-width:500px">

            </div>


            <!-- FEATURED VIDEO -->
            <VideoWrapper
                v-if="postMainMedia == 'ShowFeaturedVideo'"
                :cover="thumbnail"
                :videolink="videoURL"/>

            <!-- TILE -->
            <h2 v-if="postMainMedia == 'ShowTitle'">{{ title }}</h2>

        </div>

        <div class="post-block-content">

           <div>

               <!-- SHOW THE TITLE ONLY WHEN WE DONT WANT TO DISPLAY IT AS FEATURED MEDIA -->
               <h2 v-if="postMainMedia != 'ShowTitle'">{{ title }}</h2>

               <span v-html="excerpt" style="max-width: 450px"></span>

               <nuxt-link
                    :to="'blog/' + slug"
                    class="button arrow"
                    :class="buttonStyle">

                        Learn More

               </nuxt-link>

           </div>

        </div>

    </div>

</template>

<script>

    import { directive as customPropertiesParallaxDirective } from 'vue-custom-properties-parallax';

    import VideoWrapper from "@/components/Video-wrapper";

    export default{

        directives: {
          'custom-properties-parallax': customPropertiesParallaxDirective
        },

        components: { VideoWrapper },

        props:["title", "excerpt", "thumbnail", "slug", "videoURL", "postMainMedia", "buttonStyle", "postPreviewLayout"]

    }
</script>
