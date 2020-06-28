<template>
  <v-toolbar-items>
    <v-spacer v-if="center"/>
    <v-btn 
      text 
      href="https://www.linkedin.com/in/jose-alfredo-rivera-turcios/"
      rel="noreferrer"
      target="_blank"
      title="Connect with me on Linked In"
    >
      <v-icon sizee="25" class="mdi mdi-linkedin"></v-icon>
    </v-btn>
    <v-btn 
      text 
      href="https://github.com/j-Riv"
      rel="noreferrer"
      target="_blank"
      title="Follow me on GitHub"
    >
      <v-icon soze="25" class="mdi mdi-github"></v-icon>
    </v-btn>
    <v-btn 
      text 
      href="https://stackoverflow.com/story/j-riv"
      rel="noreferrer"
      target="_blank"
      title="Follow me on Stack Overflow"
      >
        <v-icon size="25" class="mdi mdi-stack-overflow"></v-icon>
      </v-btn>
      <v-spacer v-if="center"/>
  </v-toolbar-items>
</template>

<script>
export default {
  name: 'SocialNav',
  props: ['center']
}
</script>