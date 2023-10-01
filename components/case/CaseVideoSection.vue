<script setup lang="ts">
  import { toRefs } from 'vue'

  interface IProps {
    videos: {
      before: string
      after: string
    }
  }
  const props = defineProps<IProps>()
  const { videos } = toRefs(props)
</script>

<template>
  <section class="case-hero">
    <div class="container">
      <article>
        <h2>Видео ДО</h2>
        <video :src="videos.before" controls></video>
      </article>

      <article>
        <h2>Видео ПОСЛЕ</h2>
        <video :src="videos.after" controls></video>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  article {
    margin-bottom: 50px;
  }
  video {
    max-width: 100%;
    display: block;
    margin-top: 20px;
  }
</style>
