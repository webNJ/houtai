<template>
    <div>
        <el-row style='margin:20px'>
            <span style='font-size:32px;'>广告创意</span>
        </el-row>
        <el-row style='margin:20px'>
              <h3>落地页</h3>
              <el-form size='mini' :span=6  label-width="100px" >
                <el-form-item label="着陆页地址" >
                    <el-input :span=12 placeholder='请设置广告名称'></el-input>
                </el-form-item>
                </el-form>
        </el-row>
       <el-row style='margin:20px'>
            <span style='font-size:32px;'>上传创意</span>
        </el-row>
        <el-row style='margin:20px'>
            <span>创意1</span>
            <span>创意2</span>
        </el-row>
        <el-row style='margin:20px'>
            <div id="clickpush">
                <span>640*240像素</span>
              <el-button type="text" @click="open">点击上传</el-button>
            </div>
        </el-row>
          <el-row style='margin:20px'>
              <el-button style='margin-top:20px;width:166px;height:52px'>下一步</el-button>
              <el-button style='margin-top:20px;width:166px;height:52px'>保存</el-button>
          </el-row>
       
    </div>
</template>

<script>
export default {
    name:'creativity',
    data(){
        return{
            data:null
        }
    },
       methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
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
#clickpush{
    width: 180px;
    height: 180px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
</style>
