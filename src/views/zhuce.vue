<template>

	<div id="zhucebackground">
		<title>注册</title>
	<div id="zhucebacktext">
		
	<h1>注册</h1>
	<span>*账号:</span>
	<input type="text" v-model.trim="zhanghao" @focusout="yanzheng()"/>
	<span>{{YesNo}}</span>
	<span>*密码:</span>
	<input type="password" v-model="mima" @focusout="Isnull()" @change="isSame()"/>
	<span>{{isnull}}</span>
	<span>*确认密码:</span>
	<input type="password" v-model="nextmami" @change="isSame()"/>
	<div @click="zhuce()" ref="click" :id="isReady">注册</div>
	<span>{{state}}</span>
	
	</div>
	</div>
	
</template>

<script>
	export default{
		name:'zhuce',
		data(){
			return{
				zhanghao:'',
				mima:'',
				nextmami:'',
				YesNo:'',
				state:'',
				isnull:''
			}
		},
		computed:{
			isReady:function(){
				if(this.YesNo=='√'&&this.mima!=''&&this.mima==this.nextmami)
				return 'isready';
				else
				return 'noready';	
			}
		},
		methods:{
			yanzheng(){
				this.$axios({
					methods:'get',
					url:'/zhuce',
					params:{
						type:'yanzheng',
						username:this.zhanghao,
					},
					
				}).then((data)=>{
					this.YesNo=data.data;
					
				}).catch((error)=>{
					console.log(error);
				})
					},
			Isnull(){
						if(this.mima=='')
						isnull="密码为空"
						else
						this.isnull='';
					},
			isSame(){
				if(this.mima!=this.nextmami)
				{
					this.state="密码和确认密码不相同"
				}
				else
				this.state='';
			}	,	
			zhuce(){
			if(this.isReady=='isready')	{
			this.$axios({
				methods:'get',
				url:'/zhuce',
				params:{
					type:'zhuce',
					username:this.zhanghao,
					pass: this.mima
				},
				
			}).then((data)=>{
				this.state=data.data;
				
			}).catch((error)=>{
				console.log(error);
			})
			
										}	
			}	
	}
		
		
	}
</script>

<style>
	#isready{
		padding: 10px;
		color: #F0F8FF;
		background-color: #FFAA00;
		width: 19.366312rem;
		position: absolute;
		bottom: -5.325rem;
		left: -3.25rem;
		 border-radius: 25px;
	}
	#noready{
		padding: 10px;
		color:#888888;
		background-color:#c6bcb4;
		width: 19.366312rem;
		position: absolute;
		bottom: -5.325rem;
		left: -3.25rem;
		 border-radius: 25px;
	}
	#zhucebackground{
		width: 30%;
		background:rgba(0,0,0,0.5);
		height: 70%;
		position: absolute;
	box-shadow: 10px 10px 5px #888888;
	position: absolute;
	left: 30.5rem;
	top: 15rem;
	}
	#zhucebacktext *{
		display: block;
		padding: 0.625rem;
	}
	#zhucebacktext
	{position: absolute;
			left: 5.5rem;
			
		 	
	}
</style>
