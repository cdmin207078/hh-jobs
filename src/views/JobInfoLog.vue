<template>
  <div style="min-height: 300px;">
    <Row style="margin:10px 0px;">

        <Col span="6">
        <DatePicker type="daterange" :options="options2" placeholder="Select date"></DatePicker>
        </Col>

        <Col span="6">
        <CheckboxGroup v-model="fruit">
          <Checkbox label="日志"></Checkbox>
          <Checkbox label="警告"></Checkbox>
          <Checkbox label="错误"></Checkbox>
          <Checkbox label="致命"></Checkbox>
        </CheckboxGroup>
        </Col>

        <Col span="6">
        <Button type="primary">查 找</Button>
        </Col>
      </Row>

      <Table size="small" :data="tableData3" :columns="tableColumns3"></Table>
      <Page :total="100" style="margin-top: 10px;" show-sizer/>
  </div>
</template>

<script>
export default {
  computed: {
    tableColumns3() {
      let columns = [];

      columns.push({
        title: "时间",
        key: "name"
      });

      columns.push({
        title: "结果",
        key: "desc"
      });

      columns.push({
        title: "服务地址",
        key: "desc"
      });


      columns.push({
        title: "返回值",
        key: "status",
        width: 150,
        render: (h, params) => {
          const row = params.row;
          const color = row.status === 1 ? "success" : "error";
          const text = row.status === 1 ? "working" : "stop";

          return h(
            "Tag", {
              props: {
                type: "dot",
                color: color
              }
            },
            text
          );
        }
      });

      return columns;
    }
  }
}
</script>
