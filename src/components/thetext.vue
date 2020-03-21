<template>
	<div id="background" ref="text" >
		<div></div>
		<div class="text" @mouseout="htmldisplay(1)" @mouseover="htmladd(1)">
		<div class="text-row">
		<span>男装:</span>
		<router-link :to="{path:'/view',query:{que:'男装夏装'}}" > 夏装</router-link>
		<router-link :to="{path:'/view',query:{que:'男装冬装'}}" > 冬装</router-link>
		<router-link :to="{path:'/view',query:{que:'男装衬衣'}}" > 衬衣</router-link>
		<router-link  :to="{path:'/view',query:{que:'男装裤子'}}"> 裤子</router-link>
		<router-link  :to="{path:'/view',query:{que:'男装其他'}}"> 其他</router-link>
		</div>
		<div class="text-row">
		<span>女装:</span>
		<router-link :to="{path:'/view',query:{que:'女装夏装'}}" > 夏装</router-link>
		<router-link :to="{path:'/view',query:{que:'女装冬装'}}" > 冬装</router-link>
		<router-link :to="{path:'/view',query:{que:'女装衬衣'}}" > 衬衣</router-link>
		<router-link  :to="{path:'/view',query:{que:'女装裙子'}}"> 裤子</router-link>
		<router-link  :to="{path:'/view',query:{que:'女装其他'}}"> 其他</router-link>
		</div>
		<div class="text-row">
		<span>鞋子:</span>
		<router-link :to="{path:'/view',query:{que:'运动鞋'}}" > 运动鞋</router-link>
		<router-link :to="{path:'/view',query:{que:'高跟鞋'}}" > 高跟鞋</router-link>
		<router-link :to="{path:'/view',query:{que:'拖鞋'}}" > 拖鞋</router-link>
		<router-link  :to="{path:'/view',query:{que:'凉鞋'}}"> 凉鞋</router-link>
		<router-link  :to="{path:'/view',query:{que:'布鞋'}}"> 布鞋</router-link>
		<router-link  :to="{path:'/view',query:{que:'棉鞋'}}"> 棉鞋</router-link>
		</div>
		<div class="text-row">
		<span>其他:</span>
		<router-link :to="{path:'/view',query:{que:'围巾'}}" > 围巾</router-link>
		<router-link :to="{path:'/view',query:{que:'袜子'}}" > 袜子</router-link>
		<router-link :to="{path:'/view',query:{que:'内裤'}}" > 内裤</router-link>
		<router-link  :to="{path:'/view',query:{que:'手套'}}"> 手套</router-link>
		<router-link  :to="{path:'/view',query:{que:'帽子'}}"> 帽子</router-link>
		</div>
		<div class="text-row">
		<span>童装:</span>
		<router-link :to="{path:'/view',query:{que:'童装夏装'}}" > 夏装</router-link>
		<router-link :to="{path:'/view',query:{que:'童装冬装'}}" > 冬装</router-link>
		<router-link :to="{path:'/view',query:{que:'童装衬衣'}}" > 衬衣</router-link>
		<router-link :to="{path:'/view',query:{que:'童装裙子'}}" > 裤子</router-link>
		<router-link  :to="{path:'/view',query:{que:'童装其他'}}"> 其他</router-link>
		</div>
		</div>
		
		<div class="text" ref="text"  @mouseout="htmldisplay(2)" @mouseover="htmladd(2)">
		<div class="text-row">
		<span>手机通讯:</span>
		<router-link :to="{path:'/view',query:{que:'手机'}}" > 手机</router-link>
		<router-link :to="{path:'/view',query:{que:'游戏手机'}}" > 游戏手机</router-link>
		<router-link :to="{path:'/view',query:{que:'老人手机'}}" > 老人手机</router-link>
		<router-link  :to="{path:'/view',query:{que:'对讲机'}}"> 对讲机</router-link>
		<router-link  :to="{path:'/view',query:{que:'手机其他'}}"> 其他</router-link>
		</div>
		<div class="text-row">
		<span> 通讯配件:</span>
		<router-link :to="{path:'/view',query:{que:'手机壳'}}" > 手机壳</router-link>
		<router-link :to="{path:'/view',query:{que:'手机膜'}}" > 手机膜</router-link>
		<router-link :to="{path:'/view',query:{que:'电池'}}" > 电池</router-link>
		<router-link  :to="{path:'/view',query:{que:'充电器'}}"> 充电器</router-link>
		<router-link :to="{path:'/view',query:{que:'手机耳机'}}" > 手机耳机</router-link>
		<router-link :to="{path:'/view',query:{que:'数据线'}}" > 数据线</router-link>
		<router-link :to="{path:'/view',query:{que:'手机支架'}}" > 手机支架</router-link>
		<router-link  :to="{path:'/view',query:{que:'充电器'}}"> 充电器</router-link>
		<router-link  :to="{path:'/view',query:{que:'配件其他'}}"> 其他</router-link>
		</div>
		<div class="text-row">
		<span>相机:</span>
		<router-link :to="{path:'/view',query:{que:'数码相机'}}" > 数码相机</router-link>
		<router-link :to="{path:'/view',query:{que:'微单相机'}}" > 微单相机</router-link>
		<router-link :to="{path:'/view',query:{que:'单反相机'}}" > 单反相机</router-link>
		<router-link :to="{path:'/view',query:{que:'拍立得'}}" > 拍立得</router-link>
		<router-link :to="{path:'/view',query:{que:'运动相机'}}" > 运动相机</router-link>
		<router-link :to="{path:'/view',query:{que:'摄像机'}}" > 摄像机</router-link>
		</div>
		<div class="text-row">
		<span>相机配件:</span>
		<router-link :to="{path:'/view',query:{que:'镜头'}}" > 镜头</router-link>
		<router-link :to="{path:'/view',query:{que:'数码相框'}}" > 数码相框</router-link>
		<router-link :to="{path:'/view',query:{que:'三脚架'}}" > 三脚架</router-link>
		<router-link :to="{path:'/view',query:{que:'存储器'}}" > 存储器</router-link>
		<router-link :to="{path:'/view',query:{que:'滤镜'}}" > 滤镜</router-link>
		</div>
		<div class="text-row">
		<span>家用电器:</span>
		<router-link :to="{path:'/view',query:{que:'冰箱'}}" > 冰箱</router-link>
		<router-link :to="{path:'/view',query:{que:'电视'}}" > 电视</router-link>
		<router-link :to="{path:'/view',query:{que:'洗衣机'}}" > 洗衣机</router-link>
		<router-link :to="{path:'/view',query:{que:'空调'}}" > 空调</router-link>
		<router-link :to="{path:'/view',query:{que:'电饭煲'}}" > 电饭煲</router-link>
		<router-link :to="{path:'/view',query:{que:'高压锅'}}" > 高压锅</router-link>
		</div>
		</div>
		
		<div class="text"   @mouseout="htmldisplay(3)" @mouseover="htmladd(3)">
		<div class="text-row">
		<span>房间用具:</span>
		<router-link :to="{path:'/view',query:{que:'餐桌'}}" > 餐桌</router-link>
		<router-link :to="{path:'/view',query:{que:'椅子'}}" >椅子</router-link>
		<router-link :to="{path:'/view',query:{que:'电脑桌'}}" > 电脑桌</router-link>
		<router-link  :to="{path:'/view',query:{que:'书桌'}}"> 书桌</router-link>
		<router-link  :to="{path:'/view',query:{que:'沙发'}}"> 沙发</router-link>
		<router-link  :to="{path:'/view',query:{que:'衣柜'}}"> 衣柜</router-link>
		<router-link  :to="{path:'/view',query:{que:'电视柜'}}"> 电视柜</router-link>
		<router-link  :to="{path:'/view',query:{que:'房间其他'}}"> 其他</router-link>
		</div>
		<div class="text-row">
		<span> 厨房用具:</span>
		<!-- 水具酒具烹饪锅具炒锅碗碟套装厨房配件刀剪菜板锅具套装茶具咖啡具保温杯厨房置物架 -->
		<router-link :to="{path:'/view',query:{que:'水具酒具'}}" > 水具酒具</router-link>
		<router-link :to="{path:'/view',query:{que:'烹饪锅具'}}" > 烹饪锅具</router-link>
		<router-link :to="{path:'/view',query:{que:'炒锅'}}" > 炒锅</router-link>
		<router-link  :to="{path:'/view',query:{que:'碗碟套装'}}"> 碗碟套装</router-link>
		<router-link :to="{path:'/view',query:{que:'厨房配件'}}" > 厨房配件</router-link>
		<router-link :to="{path:'/view',query:{que:'刀剪菜板'}}" > 刀剪菜板</router-link>
		<router-link :to="{path:'/view',query:{que:'锅具套装'}}" > 锅具套装</router-link>
		<router-link  :to="{path:'/view',query:{que:'茶具咖啡具'}}"> 茶具咖啡具</router-link>
		<router-link  :to="{path:'/view',query:{que:'厨房置物架'}}"> 厨房置物架</router-link>
		<router-link  :to="{path:'/view',query:{que:'炉灶'}}"> 炉灶</router-link>
		</div>
		<div class="text-row">
		<span>:床具</span>
		<router-link :to="{path:'/view',query:{que:'单人床'}}" > 单人床</router-link>
		<router-link :to="{path:'/view',query:{que:'双人床'}}" > 双人床</router-link>
		<router-link :to="{path:'/view',query:{que:'枕头'}}" > 枕头</router-link>
		<router-link :to="{path:'/view',query:{que:'被子'}}" > 被子</router-link>
		<router-link :to="{path:'/view',query:{que:'床前柜'}}" > 床前柜</router-link>
		</div>
		</div>
		
		<div class="text"  @mouseout="htmldisplay(4)" @mouseover="htmladd(4)">
		<div class="text-row">
		<span>海鲜水产:</span>
		<router-link :to="{path:'/view',query:{que:'鱼类'}}" > 鱼类</router-link>
		<router-link :to="{path:'/view',query:{que:'虾类'}}" >虾类</router-link>
		<router-link :to="{path:'/view',query:{que:'蟹类'}}" > 蟹类</router-link>
		<router-link  :to="{path:'/view',query:{que:'贝类'}}"> 贝类</router-link>
		<router-link  :to="{path:'/view',query:{que:'海参'}}"> 海参</router-link>
		<router-link  :to="{path:'/view',query:{que:'鱿鱼章鱼'}}"> 鱿鱼章鱼</router-link>
		<router-link  :to="{path:'/view',query:{que:'活鲜三文鱼'}}"> 活鲜三文鱼</router-link>
		<router-link  :to="{path:'/view',query:{que:'大闸蟹'}}"> 大闸蟹</router-link>
		<router-link  :to="{path:'/view',query:{que:'小龙虾'}}"> 小龙虾</router-link>
		<router-link  :to="{path:'/view',query:{que:'海鲜加工品'}}"> 海鲜加工品</router-link>
		<router-link  :to="{path:'/view',query:{que:'海产干品'}}"> 海产干品</router-link>
		</div>
		<div class="text-row">
		<span> 新鲜水果:</span>
<!-- 海鲜水产
		鱼类虾类蟹类贝类海参鱿鱼/章鱼活鲜三文鱼大闸蟹小龙虾海鲜加工品海产干货 -->


		<router-link :to="{path:'/view',query:{que:'苹果'}}" > 苹果</router-link>
		<router-link :to="{path:'/view',query:{que:'橘子'}}" > 橘子</router-link>
		<router-link :to="{path:'/view',query:{que:'奇异果'}}" > 奇异果</router-link>
		<router-link  :to="{path:'/view',query:{que:'猕猴桃'}}"> 猕猴桃</router-link>
		<router-link :to="{path:'/view',query:{que:'火龙果'}}" > 火龙果</router-link>
		<router-link :to="{path:'/view',query:{que:'榴莲'}}" > 榴莲</router-link>
		<router-link :to="{path:'/view',query:{que:'芒果'}}" > 芒果</router-link>
		<router-link  :to="{path:'/view',query:{que:'椰子'}}"> 椰子</router-link>
		<router-link  :to="{path:'/view',query:{que:'车厘子'}}"> 车厘子</router-link>
		<router-link  :to="{path:'/view',query:{que:'百花果'}}"> 百花果</router-link>
		<router-link  :to="{path:'/view',query:{que:'柚子'}}"> 柚子</router-link>
		<router-link  :to="{path:'/view',query:{que:'本土水果'}}"> 本土水果</router-link>
		<router-link  :to="{path:'/view',query:{que:'进口水果'}}"> 进口水果</router-link>
		</div>
		<div class="text-row">
		<span>:蔬菜蛋类</span>
		<router-link :to="{path:'/view',query:{que:'蛋品'}}" > 蛋品</router-link>
		<router-link :to="{path:'/view',query:{que:'叶菜类'}}" > 叶菜类</router-link>
		<router-link :to="{path:'/view',query:{que:'根茎类'}}" > 根茎类</router-link>
		<router-link :to="{path:'/view',query:{que:'葱姜蒜椒'}}" > 葱姜蒜椒</router-link>
		<router-link :to="{path:'/view',query:{que:'茄果瓜类'}}" > 茄果瓜类</router-link>
		<router-link :to="{path:'/view',query:{que:'半加工蔬菜'}}" > 半加工蔬菜</router-link>
		<router-link :to="{path:'/view',query:{que:'半加工豆制品'}}" > 半加工豆制品</router-link>
		<router-link :to="{path:'/view',query:{que:'玉米山药地瓜红薯'}}" > 玉米山药地瓜红薯</router-link>
		</div>
		<!--
		精选肉类
		猪肉牛肉羊肉鸡肉鸭肉冷鲜肉特色肉类内脏类冷藏熟食牛排牛腩鸡翅
		海鲜水产
		鱼类虾类蟹类贝类海参鱿鱼/章鱼活鲜三文鱼大闸蟹小龙虾海鲜加工品海产干货
		冷饮冻食
		水饺/馄饨汤圆/元宵面点烘焙半成品奶酪/黄油方便速食火锅丸串冰淇淋冷藏饮料低温奶
		中外名酒
		白酒葡萄酒洋酒啤酒黄酒/养生酒收藏酒/陈年老酒
		进口食品
		牛奶饼干蛋糕糖/巧克力零食水饮料咖啡粉冲调品油方便食品米面调味
		休闲食品
		中华老字号营养零食休闲零食膨化食品坚果炒货肉干/熟食蜜饯果干糖果/巧克力饼干蛋糕月饼
		地方特产
		北京上海新疆陕西湖南云南山东江西宿迁成都内蒙古广西
		茗茶
		铁观音普洱龙井绿茶红茶乌龙茶茉莉花茶花草茶花果茶黑茶白茶养生茶其他茶
		饮料冲调
		饮料牛奶酸奶饮用水咖啡/奶茶蜂蜜/蜂产品冲饮谷物成人奶粉
		粮油调味  -->
		<div class="text-row">
		<span>:精选肉类</span>
		<router-link :to="{path:'/view',query:{que:'猪牛羊'}}" >猪牛羊</router-link>
		<router-link :to="{path:'/view',query:{que:'鸡鸭鹅'}}" > 鸡鸭鹅</router-link>
		<router-link :to="{path:'/view',query:{que:'冷鲜肉'}}" > 冷鲜肉</router-link>
		<router-link :to="{path:'/view',query:{que:'特色肉类'}}" > 特色肉类</router-link>
		<router-link :to="{path:'/view',query:{que:'内脏类'}}" > 内脏类</router-link>
		<router-link :to="{path:'/view',query:{que:'冷藏熟食'}}" > 冷藏熟食</router-link>
		<router-link :to="{path:'/view',query:{que:'牛排牛腩'}}" > 牛排牛腩</router-link>
		<router-link :to="{path:'/view',query:{que:'鸡翅'}}" > 鸡翅</router-link>
		</div>
		</div>
		
		
	</div>	
</template>

<script>
	export default{
		name:'thetext',
		data(){
			return{
					text:''
			};
			},
			mounted(){
				this.text=this.$refs.text.children;
			},
		methods:{
			htmldisplay(n){
			this.text[n].style.display='none';
			},
			htmladd(n){
			this.text[n].style.display='block';
			}
			}
		
	}
</script>

<style>
.text{
	display: none;
	width: 40rem;
	box-shadow: 10px 10px 5px #888888;
	padding: 3.125rem;
}	
.text-row *{
	padding: 10px;
	
}
</style>
