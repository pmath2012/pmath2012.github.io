<template>
<div>
		<b-card bg-variant="transparent" style="border: none;" text-variant="dark" title="" sub-title="" class="projectDesc">
		<b-card-title class="projTitle">
			{{ brainVessTitle }}
		</b-card-title>
		
		<b-card-sub-title class="projSubTitle">
			{{ brainVessSubt }}
		</b-card-sub-title>
			<b-card-text>
				{{ brainvesseldescr }}
			</b-card-text>
			<b-img-lazy center width="600vw" height="auto" src="static/images/brain.png"></b-img-lazy>
		</b-card>
		<b-card bg-variant="transparent" style="border: none;" text-variant="dark" title="" sub-title="" class="projectDesc">
		<b-card-title class="projTitle">
			{{ bussDevVentTitle }}
		</b-card-title>
		
		<b-card-sub-title class="projSubTitle">
			{{ bussDevVentSubTitle }}
		</b-card-sub-title>
			<b-card-text>
				{{ bussDevVentDesc }}
			</b-card-text>
		 <b-carousel id="slides" v-model="slide" :interval="4000" controls indicators class="projCar" @sliding-start="onSlideStart" @sliding-end="onSlideEnd" >
				<b-carousel-slide 
					caption="Workout And Peers"
					img-src="static/images/wap.png"
					>
				</b-carousel-slide>
				<b-carousel-slide
					img-src="static/images/schedule.png"				
					>
				</b-carousel-slide>
				<b-carousel-slide
					img-src="static/images/find.png"				
					>
				</b-carousel-slide>
				<b-carousel-slide
					img-src="static/images/profile1.png"				
					>
				</b-carousel-slide>
				<b-carousel-slide
					img-src="static/images/achievements.png"				
					>
				</b-carousel-slide>
				<b-carousel-slide
					img-src="static/images/edit.png"				
					>
				</b-carousel-slide>
				<b-carousel-slide
					img-src="static/images/explore.png"				
					>
				</b-carousel-slide>
			</b-carousel>
		</b-card>
		<b-card bg-variant="transparent" style="border: none;" text-variant="dark" title="" sub-title="" class="projectDesc">
		<b-card-title class="projTitle">
			{{ patRecTitle }}
		</b-card-title>
		
		<b-card-sub-title class="projSubTitle">
			{{ patRecSubt }}
		</b-card-sub-title>
			<b-card-text>
				{{ patRecDesc }}
			</b-card-text>
		</b-card>		
		<b-card bg-variant="transparent" style="border: none;" text-variant="dark" title="" sub-title="" class="projectDesc">
		<b-card-title class="projTitle">
			{{ aiTitle }}
		</b-card-title>
		
		<b-card-sub-title class="projSubTitle">
			{{ aiSubt }}
		</b-card-sub-title>
			<b-card-text>
				{{ aiDesc }}
			</b-card-text>
		<center> <iframe style="float:center;" width="560" height="315" src="https://www.youtube.com/embed/Q2IPY-O5TFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </center>
		</b-card>	
</div>
</template>
<script>
    export default {
        data () {
            return {
            		 
		  brainvesseldescr: 'Brain Vessels are tortuous structures and it is very difficult to use traditional techniques for semantic segmentation in brain images. In this project we explore several techniques that aim at segmenting small objects in large datasets. We used PyTorch, Tensorflow and Keras for different stages of our development process and used Colab for development environment. We were able to achieve an average dice score of 0.782',
		  brainVessTitle: 'Segmenting Blood Vessels in Brain Images',
		  brainVessSubt: 'Oct-2020 to Feb-2020',
		  bussDevVentTitle: 'Business Development Venture',
		  bussDevVentSubTitle: 'Jan-2019 to Jun-2019',
		  bussDevVentDesc: 'As part of my Innovation and Entreprenuership course at KTH Royal Institute of technology, I was a part of a team that developed a business venture. We went through all phases from idea screening, prototyping, testing, developing and deploying the application for android. I took the responsibility of setting up the backend infrastructure using REST requests and Java Hibernate linked with a PostgreSQL Database. I was also responsible for coding the frontend functionality.',
		  patRecTitle: 'Hand Written Greek Letter Recoginition using Hidden Markov Models',
		  patRecSubt: 'Apr-2019 to Jun-2019',
		  patRecDesc: 'Created a hand written greek letter classifier using Hidden Markov Models. I created the training dataset myself by drawing the characters using Matlab. I created my own feature extraction algorithm  by finding gradients along the strokes of the drawn digits. The Forward and Backward algorithm skeleton was provided but needed to be modified.',
		  aiDesc: 'Created a multi agent simulation of a festival/carnival based on the Belief Desire Intention model inspired from the seven deadly sins. Agents have different roles, from medics, to policemen, and normal festival goers. The simulation is done using the Gama Platform',
		  aiTitle: 'Multi-Agent festival model',
		  aiSubt: 'Nov-2018 to Dec-2018',
          
            };
        }
    }
</script>
<style scoped>
</style>