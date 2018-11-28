<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      
      <Divider orientation="left">基础配置</Divider>

      <FormItem label="名称" prop="name">
        <Input v-model="formValidate.name" placeholder="任务名称"></Input>
      </FormItem>
      <FormItem label="服务地址" prop="name">
        <Input v-model="formValidate.server" placeholder="服务地址"></Input>
      </FormItem>

      <FormItem label="身份Token" prop="name">
        <Input v-model="formValidate.token" placeholder="身份Token"></Input>
      </FormItem>

      <FormItem label="Cron" prop="cron">
        <Input v-model="formValidate.cron" placeholder="Cron 表达式"></Input>
      </FormItem>
      <FormItem label="描述" prop="desc">
        <Input
          v-model="formValidate.desc"
          type="textarea"
          :autosize="{minRows: 2,maxRows: 5}"
          placeholder="描述信息"
        ></Input>
      </FormItem>

      <Divider orientation="left" style="margin-top: 30px;">报警配置</Divider>

      <FormItem label="警报级别" prop="interest">
        <CheckboxGroup v-model="formValidate.interest">
          <Checkbox label="日志"></Checkbox>
          <Checkbox label="警告"></Checkbox>
          <Checkbox label="错误"></Checkbox>
          <Checkbox label="致命"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="邮箱" prop="email">
        <Input placeholder="接受报警邮件邮箱地址, 多个使用分号(;) 分隔"></Input>
      </FormItem>
      <FormItem label="手机" prop="phone">
        <Input placeholder="接受报警短信手机号码, 多个使用分号(;) 分隔"></Input>
      </FormItem>

      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        name: [{
          required: true,
          message: 'The name cannot be empty',
          trigger: 'blur'
        }],
        mail: [{
            required: true,
            message: 'Mailbox cannot be empty',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Incorrect email format',
            trigger: 'blur'
          }
        ],
        city: [{
          required: true,
          message: 'Please select the city',
          trigger: 'change'
        }],
        gender: [{
          required: true,
          message: 'Please select gender',
          trigger: 'change'
        }],
        interest: [{
            required: true,
            type: 'array',
            min: 1,
            message: 'Choose at least one hobby',
            trigger: 'change'
          },
          {
            type: 'array',
            max: 2,
            message: 'Choose two hobbies at best',
            trigger: 'change'
          }
        ],
        date: [{
          required: true,
          type: 'date',
          message: 'Please select the date',
          trigger: 'change'
        }],
        time: [{
          required: true,
          type: 'string',
          message: 'Please select time',
          trigger: 'change'
        }],
        desc: [{
            required: true,
            message: 'Please enter a personal introduction',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 20,
            message: 'Introduce no less than 20 words',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>

<style lang="less">
.job-desc {
  font-size: 13px;
  color: #515a6e;
  font-weight: normal;
}
</style>