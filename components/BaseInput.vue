<template>
  <Form :validation-schema="schema">
    <label> {{`${name}`}} </label>
    <div style="margin-left:30px margin-right:30px">
      <Field :as="as" :name="name" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
      </Field>
      <ErrorMessage style="color: black" :name="name"></ErrorMessage>
    </div>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  props: {
    // schema:{
    //    type:schema,
    //    default:schema,
    // },
    name: {
      type: String,
      default: "",
      required: true,
    },
    as: {
      type: String,
      default: "",
      required: true,
    },
     modelValue: {
      type: [String, Number],
      default: ''
    }
  },

  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
      FirstName: yup.string().required().min(3).max(20),
      LastName: yup.string().required().min(3).max(20),
    });
    return {
      schema,
    };
  },
};
</script>
