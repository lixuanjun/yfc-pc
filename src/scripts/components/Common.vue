<template>
	<div class="wrap">
		<!-- 顶部的咨询热线 -->
		<div class="yfc-header">
			<ul>
				<li>咨询热线：</li>
				<li>|</li>
				<li><i class="el-icon-phone"></i>0731-85311200</li>
			</ul>
		</div>
		<!-- nav部分 -->
		<div class="nav">
			<div class="logo">
				<img src="../../images/index_img/logo.png" >
			</div>
			<div class="nav-content">
				<el-menu mode="horizontal" default-active="1"  active-text-color="#78a8ed"><!-- 导航菜单 -->
					<el-menu-item index="1"><router-link to="/index">首页</router-link></el-menu-item>
					<el-menu-item index="2"><router-link to="/product">产品介绍</router-link></el-menu-item>
					<el-menu-item index="3"><router-link to="/aboutus">关于我们</router-link></el-menu-item>
					<el-menu-item index="4"><router-link to="/joinus">招募加盟商</router-link></el-menu-item>
				</el-menu>
			</div>
		</div>
		<!-- router对应的内容 -->
		<div class="router-content">
			 <router-view></router-view>
		</div>
		

		<!-- footer -->
		<div class="footer">
			<div class="footer-content">
				<ul>
					<li>扫一扫立即关注<br/>云充电子官方微信</li>
					<li><img src="../../images/index_img/footer_yfc.jpg"></li>
					<li></li>
					<li><i class="el-icon-phone"></i>0731-85311200</li>
				</ul>
				<p>云充电子智能充电系统拥有免投币、支持手机操作及刷卡充电的优势，是一款适合小区投资加盟的新型充电站</p>
			</div>
		</div>

	</div>
</template>
<script>
	
</script>
<style>
	
</style>