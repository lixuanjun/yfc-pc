<template>
	<div class="aboutus-content">
		<!-- aboutbanner -->
		<img style="width: 100%;" src="../../images/aboutus_img/aboutbanner.png" >
		<!-- 公司简介 -->
		<div class="company_profile_wrap">
			<div class="company_profile">
				<img src="../../images/aboutus_img/company_profile_header.png">
				<p>长沙云充电子有限公司是电瓶车共享充电服务商。公司本着“诚信服务客户，品质追求卓越”的理念，推行ISO9001质量管理，开展ISO14000环境管理体系，以严<br/>谨的科学管理、现金的生产工艺来开发客户所需的产品。公司现拥有高素质管理人才和一流的开发及生产队伍，拥有先进的自动化生产和检验设备，为广大客户提供品<br/>质卓越的产品。我们以“一流的产品质量，一流的服务质量，最实惠的价格，全面满足顾客需求”为经营理念。多年来，公司不断开发，研制产品，公司现有自助设备面<br/>的产品严格按照销售国家的安全标准生产和检验，产品已通过多项国际认证。</p>
			</div>
		</div>
		<!-- 公司理念 -->
		<div class="company_idea_wrap">
			<div class="company_idea">
				<img src="../../images/aboutus_img/company_idea_header.png">
				<ul>
					<li>
						<img src="../../images/aboutus_img/target.png">
						<h6>目标</h6>
						<span></span>
						<p>引领行业发展</p>
					</li>
					<li>
						<img src="../../images/aboutus_img/purpose.png">
						<h6>宗旨</h6>
						<span></span>
						<p>用户至上<br/>本品让世界没有维修工</p>
					</li>
					<li>
						<img src="../../images/aboutus_img/culture.png">
						<h6>文化</h6>
						<span></span>
						<p>做实、最强、做大、做好、做长</p>
					</li>
					<li>
						<img src="../../images/aboutus_img/idea.png">
						<h6>理念</h6>
						<span></span>
						<p>以品质求生存<br/>以服务求发展</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="mymap">
			<div id="ycmap">
				
			</div>
		</div>
	</div>
</template>
<script>
	import AMap from 'AMap'
	export default{
		data(){ 
			return{

			}
		},
		mounted:function(){
			//console.log("啊啊啊")
			var map= new AMap.Map('ycmap',{
				resizeEnable:true,
				zoom:13,
				center:[113.130875,28.230017]
			});
			var marker = new AMap.Marker({
				icon :icon ,
				position: [113.130875,28.230017],
				offset : new AMap.Pixel(-12,-12),
				title: "长沙云充电子",//鼠标滑过显示
				content:"",
				map: map
			});
			var icon = new AMap.Icon({
		        image : 'http://vdata.amap.com/icons/b18/1/2.png',//24px*24px
		        size : new AMap.Size(24,24)
			});
		}
		
	}
	
</script>
<style>
	
</style>