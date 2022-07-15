<template>
<lo-op :schema="formSchema"></lo-op>
</template>
<script>

import * as Yup from 'yup';
import LoOp from '~~/components/LoOp.vue';
export default {
  components: {
  
    LoOp,
  },
  data: () => {
    const formSchema = {
      fields: [
        {
          label: 'Your Name',
          name: 'name',
          as: 'input',
          rules: Yup.string().required(),
        },
        {
          label: 'Your Email',
          name: 'email',
          as: 'input',
          rules: Yup.string().email().required(),
        },
        {
          label: 'Your Password',
          name: 'password',
          as: 'input',
          type: 'password',
          rules: Yup.string().min(6).required(),
        },
      ],
    };
    return {
      formSchema,
    };
  },
};
</script>