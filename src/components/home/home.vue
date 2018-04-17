<template>
    <div class='home-container'>
            <el-row :gutter="20">
                <el-col :span="8"><div class="grid-content bg-purple">现金账户</div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">今日消耗</div></el-col>
            </el-row>
             <el-main style="background:#fff;margin-top:20px;">
                <el-header class='home-header'>
                    <el-col :span=6>整体情况</el-col>
                    <el-col :span=18 style='text-align:right'>
                        <div>
                        <!-- <span>近7天</span>
                        <span>近30天</span> -->
                        <el-date-picker
                        v-model="start"
                        format='yyyy/MM'
                        type="month">
                        </el-date-picker>

                        <el-date-picker
                        v-model="end"
                        disabledDate=""
                         format='yyyy/MM'
                        type="month">
                        </el-date-picker>
                        
                        </div>
                        
                    </el-col>
                </el-header>
                <el-row :gutter="12" style='margin-top:20px'>
                    <el-col :span="6">
                        <el-card shadow="hover">
                        曝光量
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover">
                        点击量
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover">
                        点击量
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover">
                        点击量
                        </el-card>
                    </el-col>
                </el-row>
                <el-row style="heigth:300px">
                    <div ref="canvans" style="height:300px"></div>
                </el-row>
            </el-main>
     </div>
</template>

<script>
import Echarts from 'echarts'
export default {
    name:'home',
    data(){
        return{
            days:null,
            options:{
                xAxis: {
                    type: 'category',
                    data:[]
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data:[],
                    type: 'line'
                }]
            },
            myChart:null,
            start:'',
            end:''
        }
    },
  methods:{
      getxAxisData(start,end){
            let res=[];
           let startnum=start.getFullYear()*12+start.getMonth()*1+1
            let endnum=end.getFullYear()*12+end.getMonth()*1+1
           for(var i=startnum;i<=endnum;i++){
                res.push(`${Math.floor(i/12)}/${i%12==0?12:i%12}`)
            }
            this.$http.post('/getechartsdata',{len:res.length}).then(response=>{
                 this.myChart.setOption({
                    xAxis: {
                        data:res
                    },
                    series: [{
                        // 根据名字对应到相应的系列
                        type:'line',
                        data: response
                    }]
                })
         })
      },
      setdefineDate(){
        this.end=new Date()
        this.start=new Date()
        this.start.setMonth( this.start.getMonth()-6)
        this.getxAxisData(this.start,this.end)
      }
  },
  watch:{
      start:function(){
        this.getxAxisData(this.start,this.end)
      },
      end:function(){
        this.getxAxisData(this.start,this.end)
      }
  },
   created(){
        this.setdefineDate()
    },
    mounted(){
      this.myChart = Echarts.init(this.$refs.canvans)
      this.myChart.setOption(this.options)
    }
}
</script>

<style scoped>
.home-container{
    flex: 1
}
    .grid-content{
        background: #FFFFFF;
        border-radius: 2px;
        height: 111px;
    }
    .home-header{
        border-bottom: 1px solid #cccccc
    }
     .home-header span{
         margin-right: 10px;
     }
</style>
