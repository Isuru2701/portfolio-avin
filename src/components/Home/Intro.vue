<template>
    <section class="scene-intro" id="intro">
        <div class="static-container">
            <h1 class="title">
                <span class="iuri">Avin</span>
                <span class="func">.here()</span>
            </h1>

            <div class="std">
                <p class="-purple">I am Avin</p>
                <p class="-gray">
                    He/Him | Sri Lankan | Tech Nerd | Programmer (sorta).<br />
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Intro',
    mounted() {
        var Tawk_API = Tawk_API || {},
            Tawk_LoadStart = new Date();
        var s1 = document.createElement('script'),
            s0 = document.getElementsByTagName('script')[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/620fb2571ffac05b1d7a90be/1fs6l1anu';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    }
}
</script>