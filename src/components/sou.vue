<template>
	<div id="input">
	<input type="text" v-model="qurey" />
	<router-link :to="{path:'/view',query:{que:qurey}}" id="button" tag="div" ></router-link>
	<div>{{qurey}}</div>
	</div>
</template>

<script>
	export default{
		name:'myinput',
		data(){
			return{
			qurey:''
			}
		}
	}
	
</script>

<style>
	#input input{
		height: 30px;
		width: 35rem;
	}
	#button{
		height:34.8px;
		width:34.8px;
		background-image: url(../../public/搜索.png);
		background-size:cover;
		background-color: #ffaa00;
		cursor:pointer
			}
	
</style>
