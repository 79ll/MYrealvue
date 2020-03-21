<template>
	<router-link :to="{path:'/view',query:{que:tag}}" tag="div">
		<img :src="img1" />
		<div>{{money}}</div>
		<div>{{name}}</div>
	</router-link>	
	</div>
</template>

<script>
	export default{
		name:'shangpingrow',
		props:{
			all
		
		},
		data(){
			return {
				img1:this.all.img,
				money: this.all.money,
				tag:this.all.tag,
				name:this.all.name
				
			}
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
