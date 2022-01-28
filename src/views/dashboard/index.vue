<template>
  <div class="dashboard-container">
    <div style="display: flex; justify-content: space-around; margin: 20px 0">
      <el-card
        class="box-card"
        v-for="item in 4"
        :key="item"
        style="width: 23%"
      >
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
    </div>
    <div style="display: flex; height: 200px">
      <div
        style="
          width: 30%;
          margin-right: 20px;
          height: 200px;
          background-color: #efefef;
        "
      >
        <div id="pieChart" style="width: 100%; height: inherit" />
      </div>
      <div style="flex: 1; background-color: aqua"></div>
    </div>
    <div style="margin-top: 30px">
      <div id="lineChart" style="width: inherit; height: 400px"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EChartsOption } from "echarts/types/dist/echarts";
import * as echarts from "echarts";

@Component({
  name: "Dashboard",
})
export default class Dashboard extends Vue {
  private init(): void {
    this.drawPieContainer();
    this.drawLineChart();
  }

  /**
   * @method 画 数据折现图
   * */
  private drawLineChart() {
    const myChart = echarts.init(document.getElementById("lineChart"));
    let option = {
      title: {
        text: "Stacked Area Chart",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
      ],
    };
    option && myChart.setOption(option);
  }

  /**
   * @method 画数据饼图
   * @private
   */
  private drawPieContainer(): void {
    const mychart = echarts.init(document.getElementById("pieChart"));
    let option: EChartsOption = {
      title: {
        text: "",
        subtext: "",
        left: "left",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        right: "right",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "Vue" },
            { value: 735, name: "Typescript" },
            { value: 580, name: "CSS" },
            { value: 484, name: "JAVASCRIPT" },
            { value: 300, name: "HTML" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    option && mychart.setOption(option);
  }

  public mounted() {
    this.init();
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
  height: 100%;
}
</style>
