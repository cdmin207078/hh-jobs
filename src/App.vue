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
            <Menu active-name="1" width="auto">
              <MenuGroup title="Job 管理">
                <MenuItem name="1" to="/dashboard">
                <Icon type="ios-football" /> 概览
                </MenuItem>
                <MenuItem name="2" to="/jobs">
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
          <Content :style="{padding: '0px 24px', minHeight: '380px', background: '#fff'}">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
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
export default {};
</script>

<style scoped>
.layout {
  position: relative;
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

