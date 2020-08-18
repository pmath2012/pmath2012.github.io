<template>
<div>
<b-card-group deck>
			<b-card bg-variant="transparent" style="border: none; display: flex;" text-variant="dark" header="Programming Languages" class="text-center">
			<ul>
                <li> <b-img-lazy id='python-img' class="skIcon" src="static/images/python.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="java-img" class="skIcon" src="static/images/java.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="erlang-img" class="skIcon" src="static/images/erlang.png"></b-img-lazy> </li>
			</ul>
			</b-card>
			<b-card bg-variant="transparent" style="border: none;" text-variant="dark" header="Development Tools" class="text-center">
			<ul>
				<li> <b-img-lazy id="matlab-img" class="skIcon" src="static/images/matlab.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="eclipse-img" class="skIcon" src="static/images/eclipse.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="gama-img" class="skIcon" src="static/images/gama.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="pycharm-img" class="skIcon" src="static/images/pycharm.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="git-img" class="skIcon" src="static/images/git.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="docker" class="skIcon" src="static/images/docker.png"></b-img-lazy> </li>
			</ul>
			</b-card>
			<b-card bg-variant="transparent" style="border: none;" text-variant="dark" header="ML and Deep Learning tools" class="text-center">
			<ul>
				<li> <b-img-lazy id="sk-img" class="skIcon" src="static/images/scikitlearn.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="co-img" class="skIcon" src="static/images/colab.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="torch-img" class="skIcon" src="static/images/pytorch.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="tf-img" class="skIcon" src="static/images/tensorflow.png"></b-img-lazy> </li>
			</ul>
			</b-card>
	        <b-card bg-variant="transparent" style="border: none;" text-variant="dark" header="Web-Development" class="text-center">
			<ul>
				<li> <b-img-lazy id="html-img" class="skIcon" src="static/images/html.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="js-img" class="skIcon" src="static/images/javascript.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="vue-img" class="skIcon" src="static/images/vue.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="django-img" class="skIcon" src="static/images/django.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="drf-img" class="skIcon" src="static/images/drf.png"></b-img-lazy> </li>
			</ul>
			</b-card>
			<b-card bg-variant="transparent" style="border: none;" text-variant="dark" header="Other tools" class="text-center">
			<ul>
				<li> <b-img-lazy id="k8s-img" class="skIcon" src="static/images/kubernetes.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="latex" class="skIcon" src="static/images/latex.png"></b-img-lazy></li>
				<li> <b-img-lazy id="inkscape" class="skIcon" src="static/images/inkscape.png"></b-img-lazy></li>
				<li> <b-img-lazy id="ps-img" class="skIcon" src="static/images/photoshop.png"></b-img-lazy> </li>
				<li> <b-img-lazy id="postgres-img" class="skIcon" src="static/images/postgre.png"></b-img-lazy> </li>
			</ul>
			</b-card>
		</b-card-group>
		<b-popover target="python-img" triggers="hover" placement="top">
			<template v-slot:title>Python</template>
			I have worked in several python projects both academic and professional.
			<br>Skill Level:
			<b-form-rating
					color="green"
					value="4.5"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="java-img" triggers="hover" placement="top">
			<template v-slot:title>Java</template>
			I have done several projects in java both academic and professional. I am an Oracle Certified Java SE 8 Programmer
			<br>Skill Level:
			<b-form-rating
					color="indigo"
					value="4.5"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="erlang-img" triggers="hover" placement="top">
			<template v-slot:title>Erlang</template>
			I used Erlang professionally for a project. I worked in the project for 2 years
			<br>Skill Level:
			<b-form-rating
					color="red"
					value="4"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="matlab-img" triggers="hover" placement="top">
			<template v-slot:title>Matlab</template>
			I have used Matlab for several academic projects in Signal processing, wireless communications and computer vision
			<br>Skill Level:
			<b-form-rating
					color="green"
					value="3.5"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="eclipse-img" triggers="hover" placement="top">
			<template v-slot:title>Eclipse</template>
			I have used eclipse as the Development Environment for my projects in Java
			<br>Skill Level:
			<b-form-rating
					color="indigo"
					value="3.5"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="gama-img" triggers="hover" placement="top">
			<template v-slot:title>Gama</template>
			I have used Gama platform for my Artificial Intelligence and Intelligent Agent course
			<br>Skill Level:
			<b-form-rating
					color="red"
					value="3"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="pycharm-img" triggers="hover" placement="top">
			<template v-slot:title>Pycharm</template>
			I have used pycharm for development of several python projects
			<br>Skill Level:
			<b-form-rating
					color="blue"
					value="3.5"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="git-img" triggers="hover" placement="top">
			<template v-slot:title>Git</template>
			I used git in my academic projects as well as professional ones
			<br>Skill Level:
			<b-form-rating
					color="purple"
					value="4.9"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="sk-img" triggers="hover" placement="top">
			<template v-slot:title>SciKit Learn</template>
			I have used Sci-kit Learn for several machine learning projects
			<br>Skill Level:
			<b-form-rating
					color="green"
					value="3.5"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="co-img" triggers="hover" placement="top">
			<template v-slot:title>Google Colab</template>
			I have used the google Colab platform extensively for project work
			<br>Skill Level:
			<b-form-rating
					color="indigo"
					value="3.5"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="torch-img" triggers="hover" placement="top">
			<template v-slot:title>PyTorch</template>
			I have used pytorch for my semester project for Brain Vessel Segmentation
			<br>Skill Level:
			<b-form-rating
					color="red"
					value="2"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="tf-img" triggers="hover" placement="top">
			<template v-slot:title>Tensorflow</template>
			I have used TensorFlow for my semester project for Brain Vessel Segmentation
			<br>Skill Level:
			<b-form-rating
					color="blue"
					value="2"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="html-img" triggers="hover" placement="top">
			<template v-slot:title>HTML5</template>
			I have used HTML5 for several academic and professional projects as well as this website
			<br>Skill Level:
			<b-form-rating
					color="green"
					value="4.5"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="js-img" triggers="hover" placement="top">
			<template v-slot:title>Javascript</template>
			I have used Javascript for several academic and professional projects as well as this website
			<br>Skill Level:
			<b-form-rating
					color="indigo"
					value="4.5"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="vue-img" triggers="hover" placement="top">
			<template v-slot:title>Vue.JS</template>
			I have used Vue for both academic and professional projects. As well as this website
			<br>Skill Level:
			<b-form-rating
					color="red"
					value="4.5"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="django-img" triggers="hover" placement="top">
			<template v-slot:title>Django</template>
			I have used Django web framework to develop a SaaS during my master thesis.
			<br>Skill Level:
			<b-form-rating
					color="orange"
					value="4"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="drf-img" triggers="hover" placement="top">
			<template v-slot:title>Django REST Framework</template>
			I have used Django REST Framework for API design for an SaaS during my master thesis.
			<br>Skill Level:
			<b-form-rating
					color="purple"
					value="4"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="postgres-img" triggers="hover" placement="top">
			<template v-slot:title>Postgres SQL</template>
			I have used postgresql extensively professionally
			<br>Skill Level:
			<b-form-rating
					color="indigo"
					value="4.5"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="ps-img" triggers="hover" placement="top">
			<template v-slot:title>Photoshop</template>
			I have used photoshop a lot for simple editing and design
			<br>Skill Level:
			<b-form-rating
					color="blue"
					value="3"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="k8s-img" triggers="hover" placement="top">
			<template v-slot:title>Kubernetes</template>
			I have used Kubernetes as the deployment platform for a SaaS developed in my master thesis
			<br>Skill Level:
			<b-form-rating
					color="green"
					value="3"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="latex" triggers="hover" placement="top">
			<template v-slot:title>Latex</template>
			I have written several reports as well as my master thesis using Latex.
			<br>Skill Level:
			<b-form-rating
					color="aqua"
					value="4"
					readonly
			></b-form-rating>
		</b-popover>
	    <b-popover target="docker" triggers="hover" placement="top">
			<template v-slot:title>Docker</template>
			I have used docker and docker-compose to build by SaaS for my Master thesis.
			<br>Skill Level:
			<b-form-rating
					color="aqua"
					value="4"
					readonly
			></b-form-rating>
		</b-popover>
	     <b-popover target="inkscape" triggers="hover" placement="top">
			<template v-slot:title>Inkscape</template>
			I have used inkscape for desiging figures in my Master Thesis.
			<br>Skill Level:
			<b-form-rating
					color="taupe"
					value="4"
					readonly
			></b-form-rating>
		</b-popover>
</div>
</template>
<script>
    export default {
        data () {
            return ;
        }
    }
</script>
<style scoped>
</style>
