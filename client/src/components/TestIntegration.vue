<template>
  <div class="hello">
    <h1>{{ msg }}</h1>


    <p v-for="rec in records" :key="rec.pk"> Name {{ rec.name }} <br/> Meta: {{ rec.meta}} </p>

    <div class="buttons">
      <button @click="this.addData()">Add Data</button>
      <button @click="this.testGetData()" style="margin-left: 2rem">Get Data</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'TestIntegration',
  props: {
    msg: String
  },
  data() {
    return {
      records: []
    }
  },
  mounted() {
    this.testGetData();
  },
  methods: {

    testGetData() {
      axios.get('/api/test')
          .then((res) => {
            const data = res.data
            this.records = data
          })
    },

    addData() {
      axios.post('/api/create', {
            name: "Carbon",
            meta: "meta data"
          }
      ).then(() => {

      }).catch(err => {
        console.log(err.message)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.buttons {
  display: flex;
  justify-content: center;
}
</style>
