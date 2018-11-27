<template>
  <div>
    <Row :gutter="30" style="margin-bottom:10px;">
      <Col span="6">
      <Input placeholder="名称" clearable />
      </Col>
      <Col span="6">
      <Input placeholder="服务器 IP" clearable />
      </Col>
      <Col span="6">
      <Button type="primary">查 找</Button>
      </Col>
    </Row>
    
    <Table size="small" :data="tableData3" :columns="tableColumns3"></Table>
    <Page :total="100" style="margin-top: 10px;" show-sizer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          id: 1,
          name: "AddBatchCallJob",
          desc: "批次信息上传, 添加 call",
          server: "192.168.20.72",
          cron: "0/5 * * * * ?",
          status: 1
        },
        {
          id: 11,
          name: "AddBatchCallJob",
          desc: "批次信息上传, 添加 call",
          server: "192.168.20.73",
          cron: "0/5 * * * * ?",
          status: 1
        },
        {
          id: 12,
          name: "AddBatchCallJob",
          desc: "批次信息上传, 添加 call",
          server: "192.168.20.74",
          cron: "0/5 * * * * ?",
          status: 0
        },
        {
          id: 2,
          name: "DownloadJob",
          desc: "下载, 批次语音 & 批次通话记录 下载打包",
          server: "192.168.20.70",
          cron: "0/5 * * * * ?",
          status: 1
        },
        {
          id: 3,
          name: "CancelCallJob",
          desc: "取消呼叫",
          server: "192.168.20.72",
          cron: "0/5 * * * * ? ",
          status: 0
        },
        {
          id: 4,
          name: "AddBatchCallJob",
          desc: "批次信息上传, 添加 call",
          server: "192.168.20.72",
          cron: "0/5 * * * * ?  ",
          status: 0
        },
        {
          id: 5,
          name: "DailyStatisReportJob",
          desc: "每日报表统计",
          server: "181.138.20.72",
          cron: "0 0 1 * * ?",
          status: 1
        },
        {
          id: 6,
          name: "OpenApiCallBackErrorsJob",
          desc: "呼叫结果, 客户接口返回 - 回调错误, 重试",
          server: "192.168.20.72",
          cron: "0/5 * * * * ? ",
          status: 0
        },
        {
          id: 7,
          name: "OpenApiCallBackJob",
          desc: "呼叫结果, 客户接口返回",
          server: "192.168.20.72",
          cron: "0/5 * * * * ? ",
          status: 0
        },
        {
          id: 8,
          name: "SyncBatch2CallJob",
          desc: "呼叫数据, 同步到外呼系统",
          server: "192.168.20.72",
          cron: "0/5 * * * * ?",
          status: 0
        },
        {
          id: 9,
          name: "SyncCDRJob",
          desc: "CDR 结果回调",
          server: "192.168.20.72",
          cron: "0/5 * * * * ?",
          status: 1
        },
        {
          id: 10,
          name: "SyncNLPJob",
          desc: "NLP 通话内容结果回调",
          server: "192.168.20.72",
          cron: "0/5 * * * * ?",
          status: 1
        },
        {
          id: 11,
          name: "InitCacheDataJob",
          desc: "每日系统缓存清理, 预热",
          server: "192.168.20.72",
          cron: "0/5 * * * * ?  ",
          status: 1
        }
      ]
    };
  },
  computed: {
    tableColumns3() {
      let columns = [];

      columns.push({
        type: "selection",
        width: 50,
        align: "center"
      });

      columns.push({
        title: "名称",
        key: "name"
      });

      columns.push({
        title: "描述",
        key: "desc"
      });

      columns.push({
        title: "运行状态",
        key: "status",
        width: 150,
        render: (h, params) => {
          const row = params.row;
          const color = row.status === 1 ? "success" : "error";
          const text = row.status === 1 ? "working" : "stop";

          return h(
            "Tag",
            {
              props: {
                type: "dot",
                color: color
              }
            },
            text
          );
        }
      });

      columns.push({
        title: "Cron",
        width: 100,
        key: "cron",
        sortable: true
      });

      columns.push({
        width: 120,
        title: "服务器",
        key: "server"
      });

      columns.push({
        title: "操作",
        key: "action",
        width: 150,
        align: "center",
        render: (h, params) => {
          return h("div", [
            h("ButtonGroup", [
              h("Button", {
                props: {
                  size: "small",
                  icon: "md-pause"
                },
                on: {
                  click: () => {
                    this.$Message.success("暂停任务");
                    // this.remove(params.index);
                  }
                }
              }),
              h("Button", {
                props: {
                  size: "small",
                  icon: "ios-pulse"
                },
                on: {
                  click: () => {
                    this.$Message.success("查看任务执行日志");
                    // this.remove(params.index);
                  }
                }
              }),
              h("Button", {
                props: {
                  size: "small",
                  icon: "md-options"
                  // to: '/jobinfo'
                },
                on: {
                  click: () => {
                    this.$Message.success("编辑设置");
                    // this.remove(params.index);
                    this.$router.push({
                      // name: "jobinfo",
                      path: "/jobs/" + params.row.id
                      // params: { id: params.row.age }
                    });

                    console.log(this.$router);
                    console.log(params.row.age);
                  }
                }
              })
            ])
          ]);
        }
      });

      return columns;
    }
  }
};
</script>
