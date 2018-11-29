<template>
  <div>
    <Row :gutter="30" style="margin-bottom:10px;">
      <Col span="6">
        <Input placeholder="姓名 \ 账号 \ 邮箱 \ 电话" clearable/>
      </Col>
      <Col span="6">
        <Button type="primary">查 找</Button>
      </Col>
    </Row>

    <Table size="small" :data="tableData3" :columns="tableColumns3"></Table>
    <Page :total="100" style="margin-top: 10px;" show-sizer/>

    <Modal v-model="modal1" title="账户信息编辑" :mask-closable="false" @on-ok="ok" @on-cancel="cancel">
      <Form :model="formRight" label-position="right" :label-width="100">
        <FormItem label="用户姓名">
          <Input v-model="formRight.name"></Input>
        </FormItem>
        <FormItem label="登录账号">
          <Input v-model="formRight.account"></Input>
        </FormItem>
        <FormItem label="密码">
          <Input v-model="formRight.pwd"></Input>
        </FormItem>
        <FormItem label="确认密码">
          <Input v-model="formRight.repwd"></Input>
        </FormItem>
        <FormItem label="电子邮箱">
          <Input v-model="formRight.email"></Input>
        </FormItem>
        <FormItem label="手机号码">
          <Input v-model="formRight.phone"></Input>
        </FormItem>
        <FormItem label="是否启用">
          <i-switch v-model="formRight.enable">
            <span slot="open">是</span>
            <span slot="close">否</span>
          </i-switch>
        </FormItem>
        <FormItem label="备注" prop="desc">
          <Input
            v-model="formRight.desc"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="备注信息"
          ></Input>
        </FormItem>
      </Form>
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
          name: "张小凡",
          account: "zhangxiaofan",
          email: "zxf@qq.com",
          phone: "13022939942",
          status: 1
        },
        {
          id: 2,
          name: "卢云",
          account: "luyun",
          email: "luluyun@qq.com",
          phone: "14788893847",
          status: 0
        },
        {
          id: 3,
          name: "张小凡",
          account: "zhangxiaofan",
          email: "zxf@qq.com",
          phone: "13022939942",
          status: 1
        }
      ],
      formRight: {
        name: "",
        account: "",
        pwd: "",
        repwd: "",
        email: "",
        phone: "",
        enable: true,
        desc: ""
      }
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
        title: "用户姓名",
        key: "name"
      });

      columns.push({
        title: "登录账号",
        key: "account"
      });

      columns.push({
        title: "电子邮箱",
        key: "email"
      });

      columns.push({
        title: "手机号码",
        key: "phone"
      });

      columns.push({
        title: "状态",
        key: "status",
        render: (h, params) => {
          const row = params.row;
          const color = row.status === 1 ? "primary" : "default";
          const text = row.status === 1 ? "启用" : "停用";

          return h(
            "Tag",
            {
              props: {
                color: color
              },
              style: {
                cursor: "default"
              }
            },
            text
          );
        }
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
