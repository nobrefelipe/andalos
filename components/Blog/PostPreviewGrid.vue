<template>

    <div  class="post-block grid">

        <div class="post-block-content content1">

            <div>

                <h3>Victory Day</h3>

                <p style="max-width:500px">
                    Victory Day marks the end of the four-year Khmer Rouge regime overseen by Pol Pot; a dark period in Cambodia’s history when up to three million people were killed. Many were forced to work in labour camps, often dying from exhaustion, starvation or execution.
                </p>

                <a href="#" class="button outlined arrow">Read More</a>

            </div>

        </div>

        <div  class="post-block-cover cover1">

            <img src="http://res.cloudinary.com/studio-nomade/image/upload/v1499284420/vietnamese-faces-series-3.jpg">

        </div>

        <div class="post-block-content content2">

            <div>

                <h3>Hoi An Lantern Festival</h3>

                <p style="max-width:500px">
                    Along with tailored clothes and beautiful yellow-hued buildings, the quaint port town of Hoi An is known for beautiful lantern displays in the evening.
                </p>

                <a href="#" class="button Outlined arrow">Read More</a>

            </div>

        </div>

        <div  class="post-block-cover cover2">

            <img src="http://res.cloudinary.com/studio-nomade/image/upload/v1499284210/sinos.jpg">

        </div>

    </div>

</template>

<script>

    export default{

        props:["title", "excerpt", "thumbnail", "slug", "videoURL", "postMainMedia", "buttonStyle", "postPreviewLayout"]

    }

</script>