<template>
  <span :class="state.class" v-text="state.name" class="State text-normal" />
</template>

<script>
export default {
  props: {
    proposal: Object
  },
  computed: {
    state() {
      const ts = (Date.now() / 1e3).toFixed();
      const { start, end } = this.proposal;
      if (ts > end)
        return { name: this.$t('proposals.states.closed'), class: 'bg-purple' };
      if (ts > start)
        return { name: this.$t('proposals.states.active'), class: 'bg-green' };
      return { name: this.$t('proposals.states.pending') };
    }
  }
};
</script>
