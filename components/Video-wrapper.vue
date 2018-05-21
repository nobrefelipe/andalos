/*
    VIDEO WRAPPER COMPONENTS
    Should be used for all videos embedded in the website
    will go full width when the Play Button is hit, then load the video
*/

<template>

    <section class="video-wrapper">

        <img :src="cover" ref="cover">

        <button @click="onPlayClick" class="play-button white"></button>

        <button @click="onCloseClick" class="close-button white"></button>

        <div :id="setId"></div>

    </section>

</template>

<script>

    const YTPlayer = require('yt-player');

    export default{

        name: "VideoWrapper",

        props: [

            "cover",

            "videolink"
        ],

        data(){

            return{

                elementId: '',

                player: null

            }
        },

        computed:{

            setId(){
                return this.elementId
            },

            videoId(){
                return this.youtube_parser(this.videolink)
            }

        },

        methods:{



            onCloseClick(el){

                const PARENT = el.target.parentNode;

                PARENT.classList.remove('activated');

                // PAUSE VIDEO
                this.player.pause()

            },


            onPlayClick(el){

                const PARENT = el.target.parentNode;

                PARENT.classList.add('activated');


                // IF PLAYER IS DEFINED, LETS JUST PLAY THE VIDEO AGAIN
                if(this.player){

                     this.player.play();

                }else{

                     // OTHERWISE LETs SET IT, INIT THE API NAD PLAY THE VIDEO
                     this.player = new YTPlayer("#" + this.elementId);
                     this.player.load(this.videoId, [true]); // @parameter [autoplay]

                }



            },

            // GET URL VIDEO ID FROM URL
            youtube_parser(url){

                var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;

                var match = url.match(regExp);

                return (match&&match[7].length==11)? match[7] : false;

            },




        },

        mounted(){

            // SET A RANDOM ID TO THE IFRAME WRAPPER
            let randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            this.elementId = randLetter + Date.now();

        }

    }

</script>

<style scoped lang="scss">

    
</style>