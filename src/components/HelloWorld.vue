<template>
  <button 
    @click="color = !color"
    class="button" :class="color ? 'red' : 'blue'">
    hola
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import Worker from "worker-loader!./worker.ts";

export default defineComponent({
  props:{
    msg : String,
  },

  data(){
    
    return {
      color: false as boolean
    }
  },

  computed:{
    ...mapState([
      'message',
    ]),
    ...mapGetters({
      example: 'alertery/example'
    })
  },
  methods:{
    ...mapActions(
      [
        'modifyMessage'
      ]
    ),
    closeModal(){
      alert(this.example)
    },
    fib(n : number) : number{
      if( n < 2 ){
        return n
      }
      return this.fib(n - 1) + this.fib(n - 2)
    }
  },
  mounted(){
      const worker = new Worker()
      worker.onmessage = function (e) {
        console.log(`En vue: ${e.data}`)
      }
      worker.postMessage(35)        // Descomenta esto para ver como se el hilo secundario hace cosas bellas.

      // console.log(this.fib(35))  // Descomenta esto para ver como se peta el thread principal
  },

  watch:{
    msg(){
      this.closeModal()
    }
  }
})
</script>

<style>
.button {
  padding: 10px;
  color: #ffffff;
}

.red {
  background-color: #ff0000;
}

.blue {
  background-color: #0000ff;
}
</style>
