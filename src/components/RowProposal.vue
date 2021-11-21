<template>
  <router-link
    class="px-4 py-3 d-block text-gray"
    :to="{ name: 'proposal', params: { key: space.key, id: i } }"
  >
    <div>
      <State :proposal="proposal" class="d-inline-block mr-2 mb-2" />
      <h3
        v-text="_shorten(proposal.title, 'name')"
        class="d-inline-block mb-1"
      />
    </div>
    <div>
      <span v-text="`#${i.slice(0, 7)}`" />
      {{ $tc('createdBy', [_shorten(proposal.author)]) }}
      <Badges :address="proposal.author" :members="space.members" />
      {{
        $tc(period, [
          _ms(proposal.start),
          _ms(proposal.end)
        ])
      }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    space: Object,
    proposal: Object,
    verified: Array,
    i: String
  },
  computed: {
    isVerified() {
      return (
        Array.isArray(this.verified) &&
        this.verified.length > 0 &&
        this.verified.includes(this.proposal.author)
      );
    },
    period() {
      const ts = (Date.now() / 1e3).toFixed();
      const { start, end } = this.proposal;
      if (ts > end) return 'endedAgo';
      if (ts > start) return 'endIn';
      return 'startIn';
    }
  }
};
</script>
