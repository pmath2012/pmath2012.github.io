<template>
<div>
        <b-card bg-variant="transparent" border-variant="light" text-variant="dark" title="" sub-title="" class="projectDesc">
		 <b-carousel id="slides" v-model="slide" :interval="4000" controls indicators class="paintings" @sliding-start="onSlideStart" @sliding-end="onSlideEnd" >	
			<b-carousel-slide v-for="item in paintings" v-bind:key="item"
				:img-src="item">
			</b-carousel-slide>
		 </b-carousel>
		 </b-card>
</div>
</template>
<script>
    export default {
        data () {
            return {
            paintings: ['static/images/p1.PNG','static/images/p2.PNG','static/images/p3.PNG','static/images/p4.PNG','static/images/p5.PNG','static/images/p6.PNG','static/images/p7.PNG','static/images/p8.PNG','static/images/p9.PNG','static/images/p10.PNG','static/images/p11.PNG','static/images/p12.PNG','static/images/p13.PNG','static/images/p14.PNG']
            };
        }
    }
</script>
<style scoped>
</style>