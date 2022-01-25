<template>
  <div class="dashboard-container">
    <div style="display: flex; height: 200px">
      <div
        style="
          width: 30%;
          margin-right: 20px;
          height: 200px;
          background-color: #efefef;
        "
      >
        <div id="container" style="width: 100%; height: inherit" />
      </div>
      <div style="flex: 1; background-color: aqua"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EChartsOption } from "echarts/types/dist/echarts";
import * as echarts from "echarts";

@Component
export default class Dashboard extends Vue {
  private init(): void {
    const mychart = echarts.init(document.getElementById("container"));
    let option: EChartsOption = {
      title: {
        text: "Referer of a Website",
        subtext: "Fake Data",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
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
    console.log(this, "this....");
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
