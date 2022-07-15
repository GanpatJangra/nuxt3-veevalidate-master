<template>
  <Form>
    <div class="space-y-5 pb-5 bg-gray-300 "
      v-for="{ as, name, label, children, ...attrs } in schema.fields"
      :key="name"
    >
      <label :for="name">{{ label }}</label>
      <Field :as="as" :id="name" :name="name" v-bind="attrs">
        <template v-if="children && children.length">
          <component v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <ErrorMessage :name="name" />
    </div>
    <button class="bg-blue-400 px-3 mt-5 rounded-xl py-2">Submit</button>
  </Form>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'DynamicForm',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },

};
</script>