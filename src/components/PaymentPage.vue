<template>
  <div class="payment-page">
    <div class="payment-page__sidebar">
      <div class="payment-page__sidebar__logo">
        <img src="/static/Logo.png" alt="">
      </div>
      <div class="payment-page__sidebar__links-block">
        <router-link v-for="link in links" :to="link.to"
                     class="payment-page__sidebar__links-block__item"
                     :class="{'payment-page__sidebar__links-block__item_active': link.active}">
          {{link.label}}
        </router-link>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
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
      try {
        this.links.find(link => link.to === this.$route.path).active = true
      } catch (error) {

      }
    }
  }
</script>

<style lang="scss">
  .payment-page {
    width: 700px;
    margin: 0 auto;
    border: 1px solid white;

    &:after {
      content: '';
      display: block;
      clear: both;
    }

    &__sidebar {
      float: left;
      width: 40%;

      &__logo {
        padding: 60px 0;
        text-align: center;
        img {
          width: 100px;
        }
      }

      &__links-block {
        background: #191C24;
        padding: 30px 0;

        &__item {
          padding: 12px 30px;
          color: white;
          display: block;
          text-decoration: none;
          &:hover {
            background: #1F2229;
          }
          &_active {
            background: #2A2D37;

          }
        }
      }

    }
  }

  .logo {
    margin: 60px;
  }

  /*менюшечка*/

  .navMenu {
    max-width: 320px;
    background: #191C24;
  }

  .navMenu ul {
    list-style-type: none;
    padding-left: 33px;
    padding-top: 40px;
    margin: 0;
  }

  .navMenu li {
    font-family: Open-Sans, serif;
    font-size: 15px;
    padding: 15px 0;
    color: white;
  }

  /*формочка*/
</style>
