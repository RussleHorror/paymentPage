<template>

  <div class="payment-page">

    <h1 class="payment-page__content__title">
      Заголовок страницы
    </h1>
    <div class="payment-page__content__sub-text">
      Давно выяснено, что при оценке дизайна и
      композиции читаемый текст мешает
    </div>
    <payment-form></payment-form>

  </div>

</template>

<script>
  import PaymentForm from '@/components/PaymentForm'

  export default {
    components: {PaymentForm},
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
    width: 100%;
    /*background: #191C24;*/

    &:after {
      content: '';
      display: block;
      clear: both;
    }

    &__title {
      font-size: 28px;
      font-weight: bold;
      color: black;
      margin-bottom: 7px;
    }

    &__sub-text {
      color: #676666;
      font-size: 13px;
      margin-bottom: 22px;
    }

    &__sidebar {
      float: left;
      width: 40%;

      &__logo {
        padding: 60px 0;
        text-align: center;
        background: black;

        img {
          width: 100px;
        }
      }

      &__links-block {
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

    &__content {
      width: 60%;
      background: white;
      padding: 50px 0 0;
      float: left;

      &-wrapper {
        padding: 0 30px;
      }

      &__title {
        font-size: 28px;
        font-weight: bold;
        color: black;
        margin-bottom: 7px;
      }

      &__sub-text {
        color: #676666;
        font-size: 13px;
        margin-bottom: 22px;
      }
    }

  }
</style>
