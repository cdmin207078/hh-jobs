<template>
  <div>
    <h1>{{ msg }}</h1>

    <Row :gutter="16">
      <Col span="8">
        <Card dis-hover>
          <p slot="title">任务数量</p>
          <i-circle :percent="80">
            <span class="demo-Circle-inner" style="font-size:24px">80%</span>
          </i-circle>
        </Card>
      </Col>
      <Col span="8">
        <Card dis-hover>
          <p slot="title">调用次数</p>
          <i-circle :percent="35" stroke-color="#ff5500">
            <span class="demo-Circle-inner">
              <Icon type="ios-close" size="50" style="color:#ff5500"></Icon>
            </span>
          </i-circle>
        </Card>
      </Col>

      <Col span="8">
        <Card dis-hover>
          <p slot="title">警报</p>

          <i-circle :percent="100" stroke-color="#5cb85c" style="margin-left: 30px;">
            <Icon type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
          </i-circle>
        </Card>
      </Col>
    </Row>

    <Row style="margin-top:10px;">
      <Card dis-hover>
        <p slot="title">调度报表</p>
        <p>has a chart.</p>
        <p>has a chart.</p>
        <p>has a chart.</p>
        <p>has a chart.</p>
        <p>has a chart.</p>
        <p>has a chart.</p>
        <p>has a chart.</p>
        <p>has a chart.</p>
        <p>has a chart.</p>
        <p>has a chart.</p>
        <p>has a chart.</p>
        <p>has a chart.</p>
        <p>has a chart.</p>
      </Card>
    </Row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
