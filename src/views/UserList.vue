<template>
  <div>
    <Row :gutter="30" style="margin-bottom:10px;">
      <Col span="6">
        <Input placeholder="名称 \ 邮箱" clearable/>
      </Col>
      <Col span="6">
        <Button type="primary">查 找</Button>
      </Col>
    </Row>

    <Table size="small" :data="tableData3" :columns="tableColumns3"></Table>
    <Page :total="100" style="margin-top: 10px;" show-sizer/>

    <Modal v-model="modal1" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal1: false,
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
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    }
  },
  computed: {
    tableColumns3() {
      let columns = [];

      columns.push({
        title: "用户名",
        key: "name"
      });

      columns.push({
        title: "邮箱",
        key: "email"
      });

      columns.push({
        title: "创建时间",
        key: "createtime"
      });

      columns.push({
        title: "操作",
        key: "action",
        width: 150,
        align: "center",
        render: (h, params) => {
          return h("div", [
            h(
              "Button",
              {
                props: {
                  type: "primary",
                  size: "small"
                },
                on: {
                  click: () => {
                    this.modal1 = true;
                  }
                }
              },
              "编辑"
            )
          ]);
        }
      });

      return columns;
    }
  }
};
</script>
