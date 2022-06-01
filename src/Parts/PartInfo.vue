<template>
    <div>
        <h1>{{part.title}}</h1>
        <div>
            {{part.description}}
        </div>
    </div>
</template>

<script>
import parts from '../Data/parts';

export default {
  name: 'PartInfo',
  computed: {
    part() {
      const { partType, id } = this.$route.params;
      // eslint-disable-next-line arrow-parens
      return parts[partType].find(part => part.id === +id);
    },
  },
};
</script>
