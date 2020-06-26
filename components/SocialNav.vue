<template>
  <v-toolbar-items>
    <v-btn 
      text 
      href="https://www.linkedin.com/in/jose-alfredo-rivera-turcios/"
      rel="noreferrer"
      target="_blank"
      title="Connect with me on Linked In"
    >
      <i class="mdi mdi-linkedin"></i>
    </v-btn>
    <v-btn 
      text 
      href="https://github.com/j-Riv"
      rel="noreferrer"
      target="_blank"
      title="Follow me on GitHub"
    >
      <i class="mdi mdi-github"></i>
    </v-btn>
    <v-btn 
      text 
      href="https://stackoverflow.com/story/j-riv"
      rel="noreferrer"
      target="_blank"
      title="Follow me on Stack Overflow"
      >
        <i class="mdi mdi-stack-overflow"></i>
      </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  name: 'SocialNav'
}
</script>