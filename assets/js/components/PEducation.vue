<template>
<div>
    <b-card-group deck>
		<b-card bg-variant="transparent" style="border: none;" text-variant="dark" header="Masters in Autonomous Systems" class="text-center">
		   <ul>
			<li> <b-img-lazy v-b-popover.hover.top="'MSc. Autonomous Systems'" title="EIT Digital Master School" class="edIcon" src="static/images/eit.png"></b-img-lazy> </li>
			<li> <b-img-lazy v-b-popover.hover.top="'MSc. ICT Innovation'" title="KTH Royal Institute of technology" class="edIcon" src="static/images/kth.png"></b-img-lazy> </li>
			<li> <b-img-lazy v-b-popover.hover.top="'MSc. Internet of Things(IOT) '" title="EURECOM France" class="edIcon" src="static/images/eur.png"></b-img-lazy> </li>
		   </ul>
		   <b-card-text class="aboutText">
				{{ mastersIntr }}
		   </b-card-text>
		</b-card>
		<b-card bg-variant="transparent" style="border: none;" text-variant="dark" header="Bachelors in Electronics and Communications Engineering" class="text-center">
		   <b-img-lazy v-b-popover.hover.top="'B.Tech. Electronics and Communications Engineering'" title="Jaypee Institute of Information Technology" class="edIcon" src="static/images/jiit.png"></b-img-lazy>
		   <b-card-text class="aboutText">
				{{ bachelorsIntr }}
		   </b-card-text>
		</b-card>
	  </b-card-group>
</div>
</template>
<script>
    export default {
        data () {
            return {
                 mastersIntr: ' EIT Digital Masters Program : 2018-2019 KTH Royal Institute of Technology, 2019-2020 EURECOM',
                 bachelorsIntr: ' Bachelors in Electronics and Communications Engineering with focus on Wireless Communications. From 2011-2015.',
            }
        }
    }
</script>
<style scoped>
</style>