<template>
<div>
<b-card
		class="text-center"
		bg-variant="transparent"
		style="border: none;"
		>

          <b-card-text class="aboutText">
		  {{ intro }} 
		  </b-card-text>
		  <b-card-text class="aboutText">
		  {{ interestsLine }}
		  </b-card-text>
	  </b-card>
</div>
</template>
<script>
    export default {
        data () {
            return {
                intro: 'I am an engineer in the making currently enrolled in the EIT digital master school programme MSc. in Autonomous Systems. I have completed the first year of my masters at KTH Royal Institute of technology in Sweden and currently pursuing my final year of studies at EURECOM in France with specialization in Sensing Communicating and processing Big Data in Autonomous Systems.',
                interestsLine : 'I am an intern at École normale supérieure starting from March 2020 to September 2020 where I work on building a Software as a Service for EEG analysis in patients at risk for Iso-Electric supressions during general anaesthesia. I am interested in furthering my academic career in form of a Phd. I have worked as a Software Engineer for 3 years in the field of ICT services.',
               
            };
        }
    };
</script>
<style scoped>
</style>