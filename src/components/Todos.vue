<template>
  <div>
    <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'all' ">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="change_COMPLETE({index, completed:$event})">
          <strike v-if="todo.completed"> {{ todo.title }} </strike>
        <div v-else>{{ todo.title }}</div>
        </b-checkbox>
      </b-field>
      <a @click="deleteTodo(index)" class="delete is-pulled-right"></a>
      <div class="is-clearfix"></div>
  </div>

    <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'active' ">
      <div v-if="todo.completed === false">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="change_COMPLETE({index, completed:$event})" :value="todo.completed">
          <strike v-if="todo.completed"> {{ todo.title }} </strike>
        <div v-else>{{ todo.title }}</div>
        </b-checkbox>
      </b-field>
      <a @click="deleteTodo(index)" class="delete is-pulled-right"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>

    <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'completed' ">
      <div v-if="todo.completed === true">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="change_COMPLETE({index, completed:$event})" :value="todo.completed">
          <strike v-if="todo.completed"> {{ todo.title }} </strike>
        <div v-else>{{ todo.title }}</div>
        </b-checkbox>
      </b-field>
      <a @click="deleteTodo(index)" class="delete is-pulled-right"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['todos', 'visibility'])
  },
  methods: {
    ...mapActions(['deleteTodo', 'change_COMPLETE'])
  }
}
</script>
