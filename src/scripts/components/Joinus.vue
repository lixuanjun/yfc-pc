<template>
	<div class="join-content">
		<!-- 招募加盟商bannner -->
		<img style="width: 100%;" src="../../images/joinus_img/joinbanner.png" >
		<!-- 招募加盟商内容 -->
		<div class="main_join">
			<div>
				<i></i>
				<p>合作模式</p>
			</div>
			<ul>
				<li>
					<h6>个体运营商</h6>
					<p>由独立个体形成的以“盈利”为目的的个人运营商，主要解决小区、社区内的电动车充电需求和安全问题。届时小区将成为智能充电网点，为智能充电的大数据平台建设提供“点”的基础。</p>
				</li>
				<li>
					<h6>团体运营商</h6>
					<p>适合于物业公司、团队、企业等。团体运营商致力于建设小区、社区、街道等多个便民充电场所，通过团队、企业的多方运作，可以让更多的“网点”汇集起来，形成“智能充电区域网络”，服务当地民众。</p>
				</li>
				<li>
					<h6>城市独家运营商</h6>
					<p>适合于略有实力的企业、公司，以城市为区域形成的独家运营、推广代理商。通过连接城市内的“智能充电区域网点”，将城市打造成“充电网点智慧城市”，为全国充电网点的大数据统计提供帮助。</p>
				</li>
				<li>
					<h6>品牌战略运营商</h6>
					<p>与云充电子深入合作的品牌化运营商，同时享受提供定制化标准服务。主要通过对云充电子产品的专利使用、市场开发、渠道拓展和售后服务等的包装宣传来提升云充电子智能充电的品牌影响力和市场认知度，加速实现智慧城市建设。</p>
				</li>
			</ul>
		</div>
		<!-- 联系我们 -->
		<div class="contactus_wrap">
			<div class="contactus">
				<el-form :model="contactusForm" ref="contactusForm" :rules="contactusRules" label-width="100px" status-icon>
					<el-form-item label="姓名" prop="yourName">
			    		<el-input v-model="contactusForm.yourName"></el-input>
				    </el-form-item>
				    <el-form-item label="手机号码" prop="mobileNumber">
			    		<el-input v-model="contactusForm.mobileNumber"></el-input>
				    </el-form-item>
				    <el-form-item label="城市" prop="yourCity">
			    		<el-input v-model="contactusForm.yourCity"></el-input>
				    </el-form-item>
				    <el-form-item label="咨询事由" prop="consult">
				    	<el-input type="textarea" v-model="contactusForm.consult"></el-input>
				    </el-form-item>
				    <el-form-item>
				    	<el-button type="primary" @click="submitForm('contactusForm')">立即提交</el-button>
				    </el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import myAxios from '../utils/axios.js';//引入工具文件夹封装的axios
	export default{
		data(){
			var checkName=(rule, value, callback) => {
				//console.log(value);
				//console.log(callback)
				//console.log(value.length)
				if(!value){
					return callback(new Error('姓名不能为空'));
				}else{
					callback()//提交
				}

			}
			var checkMobile=(rule, value, callback) => {
				//console.log(rule, value, callback)
				//console.log(value.length)
				if(!/^1\d{10}$/.test(value)){
					return callback(new Error('请输入11位手机号码'));
				}else{
					callback()//提交
				}

			}
			var checkCity=(rule, value, callback) => {
				if(!value){
					return callback(new Error('城市不能为空'));
				}else{
					callback()//提交
				}

			}
			var checkConsult=(rule, value, callback) => {
				//console.log(rule, value, callback)
				if(!value){
					return callback(new Error('请输入咨询事由'));
				}else{
					callback()//提交
				}
			}
			return{
				contactusForm:{
					yourName:'',
					mobileNumber:'',
					yourCity:'',
					consult:'',
				},
				contactusRules: {
					yourName:[
						{ validator: checkName,required:true, trigger: 'blur' },
					],
					mobileNumber:[
						{ validator: checkMobile, required:true,trigger: 'blur' },
					],
					yourCity:[
						{ validator: checkCity,required:true, trigger: 'blur' },
					],
					consult:[
						{ validator: checkConsult, required:true,trigger: 'blur' }
					]
					

				}
			}
		},
		methods:{
			submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            //console.log("开始提交");
		            let _that=this;
		            var _yourName=_that.contactusForm.yourName;
		            var _mobileNumber=_that.contactusForm.mobileNumber;
		            var _yourCity=_that.contactusForm.yourCity;
		            var _consult=_that.contactusForm.consult;
		            console.log(_yourName,_mobileNumber,_yourCity,_consult)

					axios.get('/Mobile/Contact', {//接口前面要加上api（proxy在main.js里面判断了，开发环境加/api,生产环境为空），
					    params: {
					      'Name':_yourName,'Phone':_mobileNumber,'Address':_yourCity,'Contents':_consult
					    }
					  })
					  .then(function (res) {
					    console.log(res);
					    console.log(res.data);
					    if(res.data.indexOf('成功')!=-1){//成功了
					    	_that.$message({
								message: '提交成功',
     							type: 'success'
							});
							_that.contactusForm.yourName='';
							_that.contactusForm.mobileNumber='';
							_that.contactusForm.yourCity='';
							_that.contactusForm.consult='';
					    }else{
					    	_that.$message({
								message: '提交失败',
     							type: 'error'
							});
					    }
					  })
					  .catch(function (error) {
					    console.log(error);
					  });


		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		    },
		}

	}
</script>
<style>
	
</style>