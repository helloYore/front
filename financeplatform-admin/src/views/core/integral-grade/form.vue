<template>
  <div class="app-container">
    <!-- 输入表单 -->
    <el-form label-width="120px">
      <el-form-item label="借款额度">
        <el-input-number v-model="integralGrade.borrowAmount" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间开始">
        <el-input-number v-model="integralGrade.integralStart" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间结束">
        <el-input-number v-model="integralGrade.integralEnd" :min="0" />
      </el-form-item>
      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate()"
        >
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//引入api模块
import integralGradeApi from '@/api/core/integral-grade'

export default {
  data() {
    return {
      integralGrade: {}, //积分等级对象
    }
  },
  created() {
    //当路由中id属性存在时候，就是回显表单，需要调用回显数据的接口
    if (this.$route.params.id) {
      //获取id的方式是通过前端vue插件查看layout发现的路径
      this.fetchById(this.$route.params.id)
    }
  },
  methods: {
    //根据id获取数据，做回显使用
    fetchById(id) {
      integralGradeApi.getById(id).then((response) => {
        this.integralGrade = response.data.record
      })
    },

    //保存或更新
    saveOrUpdate() {
      //禁用保存按钮 防止表单重复提交
      this.saveBtnDisabled = true

      if (!this.integralGrade.id) {
        //调用新增
        this.saveData()
      } else {
        this.updateData()
      }

      //调用更新
    },

    saveData() {
      integralGradeApi.save(this.integralGrade).then((response) => {
        // this.$message({
        //   type: 'success',
        //   message: response.message
        // })
        this.$message.success(response.message)
        //把路由改到哪，就用@router.push()方法
        this.$router.push('/core/integral-grade/list')
      })
    },

    updateData() {
      integralGradeApi.updateById(this.integralGrade).then((response) => {
        this.$message.success(response.message)
        this.$router.push('/core/integral-grade/list')
      })
    },
  },
}
</script>
