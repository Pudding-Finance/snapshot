<template>
  <span class="d-inline-block v-align-middle line-height-0">
    <UiAvatar :imgsrc="url" :address="spaceAddress" :size="size" />
  </span>
</template>

<script>
import { formatBytes32String } from '@ethersproject/strings';

export default {
  props: ['space', 'size', 'symbolIndex'],
  data() {
    return {
      error: false,
      url: 'https://exchange.puddingswap.finance/images/coins/0xbE8D16084841875a1f398E6C3eC00bBfcbFa571b.png'
    };
  },
  computed: {
    spaceAddress() {
      if (this.space) return formatBytes32String(this.space.slice(0, 24));
      return '';
    }
  }
};
</script>
