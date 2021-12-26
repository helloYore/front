<template>
  <div class="app-container">
    <!-- 表格 -->
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50" />
      <el-table-column prop="borrowAmount" label="借款额度" />
      <el-table-column prop="integralStart" label="积分区间开始" />
      <el-table-column prop="integralEnd" label="积分区间结束" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- 跳转 -->
          <router-link
            :to="'/core/integral-grade/edit/' + scope.row.id"
            style="margin-right: 5px"
          >
            <el-button type="primary" size="mini" icon="el-icon-edit">
              修改
            </el-button>
          </router-link>

          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="removeById(scope.row.id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//引入api模块
import integralGradeApi from '@/api/core/integral-grade'

export default {
  data() {
    return {
      list: [], //积分等级列表
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      integralGradeApi.list().then((response) => {
        this.list = response.data.list
      })
    },

    removeById(id) {
      // debugger
      //上面的debugger写了的话可以在页面上进行debug调试。跟idea中一样
      //调试的时候使用，看id是否传过来了，便与调试
      console.log('id', id)

      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          return integralGradeApi.removeById(id)
        })
        .then((response) => {
          //main.js中已经通过import element这种模块化的方式引入了，所以可以直接this.$message这种方式使用
          //直接element官网粘贴就行
          this.$message({
            message: response.message,
            type: 'success',
          })
          //刷新当前列表页
          this.fetchData()
        })
        .catch((error) => {
          console.log('catch的error', error)
          //两种情况会导致取消，一种是点击取消，一种是因为出错了 我们希望第二种情况不要再弹出来了
          if (error === 'cancel') {
            this.$message({
              type: 'info',
              message: '已取消删除',
            })
          }
        })
    },
  },
}
</script>

<style scoped></style>
