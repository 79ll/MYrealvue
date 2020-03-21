<template>
	<div id="lunbo">
	<el-carousel indicator-position="outside">
	    <el-carousel-item v-for="item in picturelist" :key="item">
	   <img :src="'/img/'+item" />
	    </el-carousel-item>
	  </el-carousel>
	</div>
	
</template>

<script>

	import  Velocity from 'velocity-animate'
 export default{
		name :'lunbo',
		data(){
			return {
				index : 0,
				picturelist : ['下載.jpg','f255d5008585c7be1b28aad08d3272fe.jpg','u=1452084672,2791892417&fm=26&gp=0.jpg','下載 (1).jpg','下載 (2).jpg','下載.jpg','f255d5008585c7be1b28aad08d3272fe.jpg']
					};
				},
		
	}
</script>

<style scoped>
	
</style>
