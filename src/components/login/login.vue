<template>
  <div>
       <el-row type='flex' justify='center' style='margin-top:150px'>
           <el-form :span=12 :model="userdata" status-icon ref="users" label-width="100px" >
                <el-form-item label="管理员" prop='username' :rules="user">
                    <el-input v-model="userdata.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop='password' :rules="pass">
                    <el-input type="password" v-model="userdata.password" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="login">提交</el-button>
                </el-form-item>
         </el-form>
       </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import {login} from '../../utils/request'
export default {
    name:'login',
     data() {
      return {
        userdata: {
          username: 'webCattle',
          password: ''
        },
        user:[{ required: true, message: '用户名不能为空'}],
        pass:[{required:true,message:'密码不能为空'}]
      };
    },
     methods:{
        login(){
            let that=this
            this.$refs.users.validate((valid,b)=>{
                if(valid){
                    login(that.userdata).then(res=>{
                         if(res.success==1){
                             this.$store.commit('setmanagename',res.username)
                             localStorage.setItem('token',res.token)
                              this.$notify.success({
                                    title:'登录成功',
                                    message:'验证成功，即将进入主页面'
                            })
                            setTimeout(() => {
                                this.$router.push('/index/home')
                            }, 1000);
                            
                         }else{
                            this.$notify.error({
                            title:'错误',
                            message:'用户名或密码输入错误，请重新输入'
                    })
                         }
                     })
                }else{
                    this.$notify.error({
                        title:'用户名或密码错误',
                        message:'用户名或密码不能为空'
                    })
                }
            })
        }
    }
}
</script>

<style>

</style>
