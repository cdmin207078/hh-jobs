<template>
  <div>
    <h1>
      DownloadJob
      <span class="job-desc">- 下载, 批次语音 & 批次通话记录 下载打包</span>
    </h1>

    <Menu mode="horizontal" :theme="theme1">
      <MenuItem name="1" to="option"><span>基本信息</span></MenuItem>
      <MenuItem name="2" to="log">执行日志</MenuItem>
    </Menu>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

