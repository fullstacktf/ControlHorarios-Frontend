<template>
  <div>
    <FormInputPassword label="Actual Password" placeholder="Actual Password" id="ActualPassword" v-on:fieldValue="passwordActualReceived"/>
    <FormInputPassword label="New Password" placeholder="New Password" id="ChangePassword" v-on:fieldValue="passwordReceived"/>
    <FormInputPassword label="Repeat New Password" placeholder="Repeat Password" id="ChangePasswordRepeat" v-on:fieldValue="repeatedPasswordReceived"/>
    <div>{{ Error }}</div>
    <FormButton value="Change password" @isClicked="changePassword"/>
  </div>
</template>

<script>
import FormInputPassword from '@/components/Forms/FormInputPassword/FormInputPassword'
import FormButton from '@/components/Forms/FormButton/FormButton'
import { updatePassword } from '@/domain/services/employeeServices'
import Vue from 'vue'

export default {
  name: 'EmployeeSettingsChangePassword',
  components: {
    FormButton,
    FormInputPassword
  },
  data () {
    return {
      actualPassword: '',
      newPassword: '',
      readyToSend: false,
      Error: ''
    }
  },
  methods: {
    passwordActualReceived (field) {
      this.actualPassword = field
    },
    passwordReceived (field) {
      this.newPassword = field
    },
    repeatedPasswordReceived (field) {
      if (this.newPassword === field) {
        this.readyToSend = true
        this.Error = ''
      } else {
        this.readyToSend = false
        this.Error = 'Not equal passwords'
      }
    },
    changePassword () {
      if (this.readyToSend) {
        updatePassword(localStorage.getItem('UserID'), this.newPassword)
          .then(() => { Vue.$toast.open('Successfully updated password!') })
          .catch(() => {
            Vue.$toast.open({
              message: 'Failed to update password',
              type: 'error'
            })
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
