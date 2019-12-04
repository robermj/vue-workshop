<template>
  <div class="forms">
    <h1>Forms</h1>
    <div class="row">
      <div class="col-sm-6">
        <form>
          <!-- INPUTS AND TEXTAREA -->
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="text" id="email" class="form-control" v-model="user.email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy="user.password" />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" class="form-control" v-model.number="user.age" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <br />
            <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
            <textarea id="message" rows="5" class="form-control" v-model="message"></textarea>
          </div>
          <!-- CHECKBOX -->
          <div class="form-group">
            <label for="sendmail">
              <input
              type="checkbox"
              id="sendmail"
              value="SendMail"
              v-model="mailOptions" /> Send Mail
            </label>
            <label for="sendInfomail">
              <input type="checkbox" id="sendInfomail" value="SendInfoMail" v-model="mailOptions" />
              Send Infomail
            </label>
          </div>
          <!-- RADIO BUTTONS -->
          <div class="form-group">
            <label for="male">
              <input type="radio" id="male" value="Male" v-model="user.gender" /> Male
            </label>
            <label for="female">
              <input type="radio" id="female" value="Female" v-model="user.gender" /> Female
            </label>
            <label for="other">
              <input type="radio" id="other" value="Other" v-model="user.gender" /> Other
            </label>
            <!-- SELECT -->
            <div class="from-group">
              <label for="priority">Priority</label>
              <select id="priority" class="form-control" v-model="priority">
                <option v-for="(option, i) in priorities" :key="i">{{ option }}</option>
              </select>
            </div>
            <br />
            <br />
            <div class="form-group">
              <button class="btn btn-primary" @click.prevent.stop="sendData">Submit!</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-sm-4">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ user.email }}</p>
            <p>Password: {{ user.password }}</p>
            <p>Age: {{ user.age }}</p>
            <p style="white-space: pre">Message: {{ message }}</p>
            <p>
              <strong>Send Mail?</strong>
            </p>
            <ul>
              <li v-for="(option, i) in mailOptions" :key="i">{{ option }}</li>
            </ul>
            <p>Gender: {{ user.gender }}</p>
            <p>Priority: {{ priority }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        age: 0,
        gender: '',
      },
      message: 'Change this text...',
      mailOptions: [],
      priorities: ['Normal', 'Urgent', 'Critical'],
      priority: 'Normal',
      isFormSubmitted: false,
    };
  },
  methods: {
    sendData() {
      this.isFormSubmitted = true;
    },
  },
};
</script>

<style scoped>
.forms {
  margin-bottom: 5rem;
}
</style>
