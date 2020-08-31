<template>
  <div>
    <Login/>
  </div>
</template>
<script>
import Login from './components/Login'
import axios from 'axios'
export default {
  components: {Login},
  mounted () {
    axios.get('http://test/mock').then(
      (resp) => {
        window.localStorage.setItem('eleToken', resp.data.token)
        console.log(resp.data)
      }
    )
  }
}
</script>

<style>

</style>
