<template>
  <div class='creativity' >
    <el-row style="padding:10px 0">
        <span>12345</span><span class='spn-unit'>单元</span>
      </el-row>
      <el-row style="padding:10px 0">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >所有广告计划</el-breadcrumb-item>   
        <!-- :to="{ path: '/' }"   -->
        <el-breadcrumb-item>DD-广告测试团队-20171102-4</el-breadcrumb-item>
        <el-breadcrumb-item>12345</el-breadcrumb-item>
      </el-breadcrumb>
      </el-row>
      <el-row style="padding:10px 0;font-size:12px;border:1px solid #eeeeee" type='flex' justify="space-around">
          <span>单元：20171102</span>
           <span>投放周期2017/5/1--2017/5/3</span>
           <span>定向：男，小学，10-16岁北京，天津，上海，武汉，贵州，宁夏</span>
           <span>出价方式：CPC</span>
           <span>出价：1.5元<i class="el-icon-edit" style="color:blue"></i></span>
           <span style='color:blue'>全部</span>
      </el-row>
      <el-row style="padding:20px 0;border-bottom:2px solid #eeeeee">
        <i class="el-icon-picture" style="color:blue"></i><span>广告创意</span>
      </el-row>
      <el-row>
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item label="创意id">
          <el-select v-model="formInline.ider" placeholder="请选择">
            <el-option label="1" value="shanghai"></el-option>
            <el-option label="2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
       </el-form>
      </el-row>
      <el-row>
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        
        <el-form-item>
          <el-button type="primary">+新建创意</el-button>
    
          <el-select v-model="formInline.data" placeholder="请选择">
            <el-option label="单独修改" value="1"></el-option>
            <el-option label="批量修改" value="2"></el-option>
          </el-select>
    
        </el-form-item>
       </el-form>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'creativity',
  data () {
    return {
       formInline: {
          ider: '',
          region: '',
          data:''
        }
    }
  },
   methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style scoped>
.creativity{
  background-color: #ffffff;
}
  .spn-unit{
  background: #6759D6;
border-radius: 100px;
font-size: 12px;
color: #ffffff
  }
</style>
