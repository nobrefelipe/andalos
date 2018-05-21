<template>
    <header id="header">

        <div class="wrapper">

            <a class="logo">
                <svg width="98px" height="26px" viewBox="0 0 98 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="logo">
                            <text id="logo-txt" font-family="AvenirNext-Regular, Avenir Next" font-size="18" font-weight="normal" fill="#000000" fill-opacity="0.709295743">
                                <tspan x="34" y="24">andalos</tspan>
                            </text>
                            <path d="M28.6662497,24.833 L17.6470342,4.31186696 C16.7683715,11.0192156 5.11052054,24.833 5.11052054,24.833 L0,24.833 C0,24.833 9.26236932,21.6388648 17.2474678,0 L31.3008004,24.833 L28.6662497,24.833 Z M17.9661123,24.833 L17.9661123,8.94329117 C12.3769746,21.3197866 7.82555943,24.833 7.82555943,24.833 L17.9661123,24.833 Z" id="logo-icon" stroke="#D5AC00" stroke-width="0.5" fill="#FFCE00" fill-rule="nonzero" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </g>
                </svg>
            </a>

            <nav id="nav">

                <a>Destinations</a>
                <a>Top 50 Adventures</a>
                <a>Galleries</a>
                <a>Who We Are</a>

            </nav>

            <nav class="social">

                <a href="#"> <i class="fab fa-facebook-f"></i></a>
                <a href="#"> <i class="fab fa-instagram"></i></a>
                <a href="#"> <i class="fab fa-youtube"></i></a>

            </nav>

        </div>


    </header>
</template>

<style scoped lang=scss>

    .main-header{

        position: fixed;
        left:0;
        top:0;
        width:100%;
        background-color: #022d30;


        .main-nav{

            width: 100%;

            display: flex;

            justify-content: center;

            a{

                color: #fff;

                padding: 20px;

                text-decoration: none;

                &.nuxt-link-exact-active{

                    color: #06c4d1;

                }

            }

        }

    }

</style>