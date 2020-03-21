<template>
  <div class="home">
<el-row >
	<el-col :span="2"><div></div></el-col>
	<el-col :span="16">
	<lunbo></lunbo>
	</el-col>
	<el-col :span="6"><denglu></denglu></el-col>

</el-row>
	
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import lunbo from '../components/lunbo.vue'
import denglu from '../components/denglu.vue'
export default {
  name: 'home',
  components: {
  denglu,
 lunbo
  }
}
</script>
<style scoped>
	.class{
		
		height :100%
	}
	div{
		min-height: 1px;
	}
</style>

