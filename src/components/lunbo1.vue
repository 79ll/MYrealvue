<template>
	<div id="lunbo">
		<div id="prc" ref="prc"><img v-for="(item,i) in picturelist" :src="'/img/'+item" :key='i' /></div>
	<div id="left" class="button" @click="clickleft()">&lt;</div>
	<div id="right" class="button" @click="clickright()">&gt;</div>
	<ul>
		<li >
			<a  href="javascript:void(0)" @click="changlist(0)" ></a>
			
		</li>
		<li >
			<a  href="javascript:void(0)" @click="changlist(-1)" ></a>
		</li>
		<li >
			<a  href="javascript:void(0)" @click="changlist(-2)" ></a>
		</li>
		<li >
			<a  href="javascript:void(0)" @click="changlist(-3)" ></a>
		</li>
		<li >
			<a  href="javascript:void(0)" @click="changlist(-4)" ></a>
		</li>
		
		
	</ul>
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
				computed:{
					picture(){
						return this.picturelist[this.index];	
					}
				
				},
		methods:{
			clickleft(){
			if(this.index===1)
			{this.index=-4
			console.log("in")
			let max=this.index*60-60+'rem'
			this.$refs.prc.style.left=max;
			}	
			this.index++
			let tomax=this.index*60-60+'rem'
			this.$TweenMax.to('#prc',0.15,{left:tomax})
			
			},
			clickright(){
			if(this.index===-5)
			{this.index=0
			console.log("in")
			let max=this.index*60-60+'rem'
			this.$refs.prc.style.left=max;
			}
				
			this.index--
			console.log(this.index)
			let tomax=this.index*60-60+'rem'
			this.$TweenMax.to('#prc',.15,{left:tomax})
			
			
			},
			changlist(index){
				this.index=index
				let tomax=this.index*60-60+'rem'
				this.$TweenMax.to('#prc',0.15,{left:tomax})
			}
			
		}
	}
</script>

<style scoped>
	#lunbo{
		width: 60rem;
		height:30rem;
		
			overflow: hidden;
	}
	#prc{
		width: 420rem;
		height: 30rem;
		left: -60rem;
	overflow: hidden;
	position: relative;
	}
	img{
		width: 60rem;
		height: 30rem;
		float: left;
	}
	.button{
		position: absolute;
		z-index: 200;
		font-size: 4.25rem;
		background-color: #5e5e5e;
		opacity: 0.7;
	}
	.button:hover{
		background-color: #C6BCB4;
		opacity: 0.6;
	}
	#left{
		left: 0;
		top: 12.875rem;
		
	}
	#right{
		left: 57.603125rem;
		top: 12.875rem;
	}
	a{	display: block;
	 border-width:2px;
	border-style: solid;
		border-color: #00dda2;
		background-color: white;
		padding: 6px;
	
		border-radius: 6.25rem;
	}
	a:hover{
		transform: scale(1.2,1.2);
		border-color: #55aaff;
	}
	li{
	list-style: none;
	float: left;
		padding: 0.625rem;
	}
	ul{	left: 24.375rem;
	top: 25rem;
		position: absolute;
	}
</style>
