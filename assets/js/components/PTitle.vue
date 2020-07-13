<template>
<div>
    <b-card class="jumbo" bg-variant="transparent" text-variant="dark">
		<b-card-title class="cardTitle">Prateek Mathur</b-card-title>
		<b-card-sub-title class="cardSubTitle">Master of Science in Autonomous systems</b-card-sub-title>
		<b-img class="photo" rounded="circle" src="static/images/photo.jpg">	
		</b-img>
		</b-card>
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
.jumbo{
	font-family: 'Farsan';	
	top: 5px;
    border: none;
}

.cardTitle{
	font-family: 'Farsan';font-size: 8vw;
	
}

.cardSubTitle{
	font-family: 'Farsan';font-size: 2vw;
	
}

.photo{
	position: absolute;
	top: 10%;
	right: 10%;
	width: 15%;
	height: auto;
	border-radius: 10%;
}

</style>