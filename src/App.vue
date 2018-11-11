<template>
<div class="layout">
  <Layout>
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div class="layout-nav">

        </div>
      </Menu>
    </Header>
    <Layout :style="{padding: '0 50px'}">
      <Breadcrumb :style="{margin: '16px 0'}">
        <BreadcrumbItem>系统</BreadcrumbItem>
        <BreadcrumbItem>所有Job</BreadcrumbItem>
        <BreadcrumbItem>AddBatchCallJob</BreadcrumbItem>
      </Breadcrumb>
      <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
        <Layout>
          <Sider hide-trigger :style="{background: '#fff'}">
            <Menu active-name="2" width="auto">
              <MenuGroup title="Job 管理">
                <MenuItem name="1">
                <Icon type="ios-football" /> 概览
                </MenuItem>
                <MenuItem name="2">
                <Icon type="ios-timer-outline" /> 所有 Job
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="设置">
                <MenuItem name="3">
                <Icon type="logo-reddit" /> 用户管理
                </MenuItem>
              </MenuGroup>
            </Menu>
          </Sider>
          <Content :style="{padding: '0px 24px', minHeight: '280px', background: '#fff'}">

            <Row :gutter="30" style="margin-bottom:10px;">
              <Col span="6">
                <Input placeholder="名称" clearable />
              </Col>
              <Col span="6">
                <Input placeholder="服务器 IP" clearable />
              </Col>
              <Button type="primary">查找</Button>
            </Row>

            <Table border size="small" :data="tableData3" :columns="tableColumns3"></Table>
            <Page :total="100" style="margin-top: 10px;" show-sizer />
          </Content>
        </Layout>
      </Content>
    </Layout>
    <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
  </Layout>

  <BackTop></BackTop>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [{
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
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
        title: "Date",
        key: "date",
        sortable: true
      });

      columns.push({
        title: "Name",
        key: "name"
      });

      columns.push({
        title: "Age",
        key: "age",
        sortable: true
      });

      columns.push({
        title: "Address",
        key: "address"
      });

      return columns;
    }
  }
};
</script>

<style scoped>
.layout {
  position: relative;
  overflow: hidden;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}

.layout-footer-center {
  text-align: center;
}
</style>

