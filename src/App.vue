<script setup lang="ts">
import { Button, LoadingText, createResource } from 'frappe-ui'

let todos = createResource({
  type: 'list',
  doctype: 'ToDo',
  fields: ['name', 'description'],
  cache: 'ToDos',
  auto: true
})
</script>

<template>
  <LoadingText v-if="todos.loading" />
  <ul v-else>
    <li v-for="todo in todos.data" :key="todo.name">
      {{ todo.description }}
    </li>
  </ul>
  <Button
    :variant="'outline'"
    theme="gray"
    size="sm"
    label="Button"
    :loading="false"
    :loadingText="null"
    :disabled="false"
    :link="null"
    >Add ToDo
  </Button>
</template>
