<template>
	<transition :name="slidename">
	       <div class="right2" v-show="isshow">
	                
							  
	         </div>
	  </transition>
</template>

<script>

</script>

<style>
	.slide-left-enter {
	    transform: translateX(-100%);
	}
	
	.slide-left-enter-active {
	    transition: transform .2s;
	}
	
	.slide-left-enter-to {
	    transform: translateX(0);
	}
	
	.slide-left-leave {
	    transform: translateX(0);
	}
	
	.slide-left-leave-active {
	    transition: transform .5s
	}
	
	.slide-left-leave-to {
	    transform: translateX(-100%);
	}
	
	
	
	.slide-right-enter {
	    transform: translateX(100%);
	}
	
	.slide-right-enter-active {
	    transition: transform .2s;
	}
	
	.slide-right-enter-to {
	    transform: translateX(0);
	}
	
	.slide-right-leave {
	    transform: translateX(0);
	}
	
	.slide-right-leave-active {
	    transition: transform .5s;
	}
	
	.slide-right-leave-to {
	    transform: translateX(100%);
	}
</style>
