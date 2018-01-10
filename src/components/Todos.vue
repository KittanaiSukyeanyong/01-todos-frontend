<template>
  <div>
    <div v-for="(todo, index) in todos" :key="todo.title">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="change_COMPLETE({index, completed:$event})">
          <strike v-if="todo.completed"> {{ todo.title }} </strike>
        <div v-else>{{ todo.title }}</div>
        </b-checkbox>
      </b-field>
      <a @click="deleteTodo(index)" class="delete is-pulled-right"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    ...mapActions(['deleteTodo', 'change_COMPLETE'])
  }
}
</script>
