<template>
  <div id="app">
    <div class="wrapper">

      <div class="sidebar">
        <div class="sidebar__logo">
          <img src="/static/Logo.png" alt="">
        </div>
        <div class="sidebar__links-block">
          <router-link v-for="link in links" :to="link.to"
                       class="sidebar__links-block__item"
                       :class="{'payment-page__sidebar__links-block__item_active': link.active}">
            {{link.label}}
          </router-link>
        </div>
      </div>

      <div class="content">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data: () => ({
      links: [
        {
          label: 'Первая ссылка',
          to: '/page1'
        },
        {
          label: 'Вторая ссылка (активная)',
          to: '/'
        },
        {
          label: 'Третья ссылка',
          to: '/page3'
        },
        {
          label: 'Четвертая ссылка',
          to: '/page4'
        },
      ]
    }),
    created() {
      this.checkRoute();
      this.$router.afterEach(() => {
        this.checkRoute()
      })
    },
    methods: {
      checkRoute() {
        try {
          this.links.forEach(link => link.active = false);
          this.links.find(link => link.to === this.$route.path).active = true
        } catch (error) {

        }
      }
    }

  }

</script>

<style lang="scss" src="@/assets/styles/index.scss"></style>
