<template>
<div>
		<b-card-title class="projTitle">
			{{ pubTitle }}
		</b-card-title>
			<b-card-text class="aboutText">
				{{ pubDesc }}
			</b-card-text>
			<b-card-text class="aboutText">
				Available <b-link href="https://www.degruyter.com/view/j/joc.ahead-of-print/joc-2017-0196/joc-2017-0196.xml"> here </b-link>
			</b-card-text>
		</b-card>	
</div>
</template>
<script>
    export default {
        data () {
            return {
            pubTitle: 'Companding Schemes for Reducing PAPR in OFDM System: A Review',
            pubDesc: 'Abstract - High PAPR poses a large hindrance to high data rate Orthogonal Frequency Division Multiplexing (OFDM) signals. A companding transform converts the Probability distribution function (PDF) of the transmitted OFDM signal in a way which reduces the Peak-to-average power-ratio (PAPR). In this paper, we have performed the study of companding techniques and analyzes the PAPR and BER performances of these schemes. Here, we have considered μ-law companding, exponential companding, trapezoidal companding (TC) and trigonal companding for comparison. In this paper, we have demonstrated that μ-law companding, exponential companding and trigonal companding schemes have no adaptability in designing the companding function, and along these lines an exchange off between BER performance and PAPR reduction ability is unrealistic to accomplish. However, TC scheme has two parameters (a and b) to design the companding function and hence a trade-off between PAPR reduction capability and BER performance is possible to achieve. BER performance and PAPR reduction capabilities of the scheme under consideration are evaluated and compared through computer simulations. We have also presented an approach to obtain the minimum BER and PAPR of TC and found out the values of design parameters (a and b) for which TC scheme has minimum BER and PAPR.',
            pubLink: 'https://www.degruyter.com/view/j/joc.ahead-of-print/joc-2017-0196/joc-2017-0196.xml?rskey=IeOcOY&result=2',
            };
        }
    }
</script>
<style scoped>
</style>