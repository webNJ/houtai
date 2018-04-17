<template>
    <div>
        <el-row>
            <span style='font-size:32px;'>建立广告计划</span>
        </el-row>
        <el-row :gutter="20" type='flex' class='card'>
                <el-col :span="8"><div class="grid-content bg-purple">已有计划</div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">新建计划</div></el-col>
        </el-row>
        <el-row style='margin:20px'>
            <span>推广目标：</span><el-button>网页</el-button><el-button>ios应用</el-button><el-button>Android应用</el-button>
        </el-row>
        <el-row style='margin:20px'>
                <el-form size='mini' :span=6  label-width="100px" >
                <el-form-item label="计划名称" >
                    <el-input :span=12 placeholder='请设置广告名称'></el-input>
                </el-form-item>
                <el-form-item label="每日限额" >
                    <el-input :span=12 placeholder='请设置广告名称'></el-input>
                </el-form-item>
             </el-form>       
          </el-row><hr/>
          <el-row>
              <el-button style='margin-top:20px;width:166px;height:52px'>下一步</el-button>
              <el-button style='margin-top:20px;width:166px;height:52px'>保存</el-button>
          </el-row>
       
    </div>
</template>

<script>
export default {
    name:'plan',
    data(){
        return{
            data:null
        }
    }
}
</script>

<style scoped>
.bg-purple{
    margin-top: 10px;;
    height: 76px;
    background: #FFFFFF;
    border: 1px solid #E8E8E8
}

</style>
