<template>
  <el-container id="container">
  <el-aside  class='aside'  width= '240px'>
      <el-col class='dropdown'>
      <h1>智能投放系统</h1>
      <el-menu 
          background-color= '#022050'
          box-shadow= '0 2px 4px 0 rgba(0,0,0,0.08)'
          font-size= '14px'
          text-color= '#FFFFFF'
          router
          active-background='linear-gradient(-90deg, #095DE1 0%, #081A6C 94%)'>
          <el-menu-item index="/index/newadvert">
            <i class="el-icon-plus"></i>
             <span>新建广告</span>
          </el-menu-item>
          <el-menu-item index="/index/home">
            <i class="el-icon-menu"></i>
             <span>首页概览</span>
          </el-menu-item>
      <el-submenu index="/index/advertmanage">
        <template slot="title">
          <i class="el-icon-printer"></i>
          <span>广告管理</span>
        </template>
            <el-menu-item  index="/index/advertmanage/plan">
              <span>广告计划</span>
            </el-menu-item>
              <el-menu-item index="/index/advertmanage/unit">
              <span>广告单元</span>
            </el-menu-item>
              <el-menu-item index="/index/advertmanage/creativity">
              <span>广告创意</span>
            </el-menu-item>
        
      </el-submenu> 
      <el-menu-item index="/index/workbox">
            <i class="el-icon-setting"></i>
             <span>工具箱</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-aside>
  <el-container>
    <el-header class='header' style="text-align:right">
          <el-row style='margin-top:10px;margin-right:10px'>
          <el-dropdown>
            <span class="el-dropdown-link">
              <span>{{this.$store.state.managename}}</span><br>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          </el-row>
    </el-header>
    <el-main id='main'><router-view/></el-main>
  </el-container>
</el-container>

</template>

<script >
export default {
  name: "hello",
  data() {
    return {};
  },
  created(){
    this.$store.commit('setmanagename','webCattle')
  }
};
</script>

<style >
#container{
  position: absolute;
  top:0;
  bottom: 0;
  width: 100%;
  margin: auto;
  /* background-color: #eee; */
}

  .header{
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
  }

  .dropdown h1{
   font-family: MicrosoftYaHei-Bold;
   height: 65px;
   line-height: 65px;
   text-align: center;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 2px;
  }
  .aside{
    width: 240px;
    background: #022050;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
  }
  #main{
   display: flex
  }
</style>
