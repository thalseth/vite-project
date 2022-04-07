// import Alert from "@/components/Alert/Alert.vue";
import {foo} from "@/mixins";
import Alert from "@/components/Alert/Alert.vue";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  component: Alert,
};

export const Example = () => ({
  components: { Alert },
  setup() {
    return {
      foo
    }
  },
  template: "<Alert variant='info'>{{foo}}</Alert>",
});
