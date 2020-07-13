<template>
<div>
    <b-card-group  deck>
			<b-card bg-variant="transparent" style="border: none;" text-variant="dark" header="Machine Learning Applications" class="text-center">
				<b-card-text class="aboutText">{{ machineLearningIntr }} </b-card-text>
			</b-card>
			<b-card bg-variant="transparent" style="border: none;" text-variant="dark" header="Communication Systems" class="text-center">
				<b-card-text class="aboutText">{{ commSysIntr }}</b-card-text>
			</b-card>
			<b-card bg-variant="transparent" style="border: none;" text-variant="dark" header="Deep Learning in Image processing" class="text-center">
				<b-card-text class="aboutText">{{ imProcIntr }}</b-card-text>
			</b-card>
		</b-card-group>
</div>
</template>
<script>
    export default {
        data () {
            return {
            machineLearningIntr: ' I find machine learning a fascinating topic and have followed several courses in ML. I have also taken several projects ranging from basic applications of linear regression, SVM to complex neural networks. I am interested in exploring the impact of machine learning in areas such as computer vision and communication systems',
            commSysIntr: ' I have a keen interest in communication systems especially wireless systems. I have taken several courses regarding wireless standards in Intelligent Transport Systems and Mobile communication systems. I have also authored an academic paper proposing techniques to improve OFDM performance',
            imProcIntr: ' The field of image processing is very interesting to me. With its direct application in autonomous driving and medical imaging. I have followed a semester project in brain vessel segmentation which used a 2D U-Net architecture',
            }
        }
    }
</script>
<style scoped>
</style>