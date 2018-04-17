<template>
    <el-container class='newadvert' style='flex:1;display:flex'>
        <el-aside style=' background:#F5F5F5;height:100%;width:144px;border-right:1px solid #ccc'>
            <div class="plan" v-on:click="$router.push('/index/newadvert/plan')">
                <h5>建立广告计划</h5>
                <span>建立计划</span>
            </div>
            <div class="unit" v-on:click="$router.push('/index/newadvert/unit')">
                <h5>广告单元</h5>
                <span>基本信息</span>
                <span>定向</span>
                <span>广告位</span>
                <span>出价</span>
            </div>
            <div class="creativity" v-on:click="$router.push('/index/newadvert/creativity')">
                <h5>广告创意</h5>
                <span>落地页  </span>
                <span>上传创意 </span>
            </div>
        </el-aside>
        <el-main style='flex:1'>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
export default {
        name:'newadvert'
}
</script>

<style lang='less' scoped>

.plan,.unit,.creativity{
      margin-top: 20px;
      h5{
          text-indent: 1em
      }
      span{
          display: block;
          text-align: center;
          margin-top: 5px;
          font-size: 12px;;
      }
  }
.plan{
     margin-top: 40px;;
 }
</style>
