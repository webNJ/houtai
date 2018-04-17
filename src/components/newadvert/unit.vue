<template>
    <div>
        <el-row>
            <span style='font-size:32px;'>广告单元</span>
        </el-row>
        <el-row style='margin:20px'>
              <h3>基本信息</h3>
              <el-form size='mini' :span=6  label-width="100px" >
                <el-form-item label="单元名称" >
                    <el-input :span=12 placeholder='请设置广告名称'></el-input>
                </el-form-item>
                <el-form-item label="投放周期" >
                    <el-input :span=12 placeholder='请设置广告名称'></el-input>
                </el-form-item>
                </el-form>
        </el-row>
        <h3>定向</h3>
        <el-row style='margin:20px;line-height:40px;'>
             <span>性别：</span><el-button size='mini'>不限</el-button><el-button size='mini'>男</el-button><el-button size='mini'>女</el-button><br>
        </el-row>
        <el-row style='margin:20px;line-height:40px;'>
             <span>性别：</span><el-button size='mini'>不限</el-button><el-button size='mini'>男</el-button><el-button size='mini'>女</el-button><br>
             <span>年龄：</span><el-button size='mini'>不限</el-button><el-button size='mini'>指定年龄段</el-button><br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-button size='mini'>〈6</el-button><el-button size='mini'>6-12</el-button><el-button size='mini'>〉12</el-button>
        </el-row>
        <el-row  style='margin:20px;line-height:40px;'>
            <span>地域</span><el-button size='mini'>不限</el-button><el-button size='mini'>指定城市</el-button><br>
                  &nbsp;&nbsp;<el-transfer v-model="value1" :data="data" style='margin-left:30px;'></el-transfer>
        </el-row>
         <el-row  style='margin:20px;line-height:40px;'>
            <span>年级</span><el-button size='mini'>不限</el-button><el-button size='mini'>指定年级</el-button><br>
                  &nbsp;&nbsp;<el-transfer v-model="value1" :data="data" style='margin-left:30px;'></el-transfer>
        </el-row> 
        <h3>广告位</h3>
        <el-row>
            <el-table
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                label="日期"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip>
                </el-table-column>
            </el-table>
        </el-row>
       <h3 style='margin:20px'>出价</h3>
       <el-row>
           <span>出价方式：</span><el-button size='mini'>CPC</el-button><el-button size='mini'>CPM</el-button>
           <el-form size='mini' :span=6  label-width="100px" style='margin-top:20px;'>
                <el-form-item label="出价" >
                    <el-input :span=12></el-input>
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
  name: "unit",
  data() {
    const generateData = () => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value1: [1, 4],
      tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
    }
  },
   methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
}
</script>

<style scoped>
.bg-purple {
  margin-top: 10px;
  height: 76px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
}
</style>
