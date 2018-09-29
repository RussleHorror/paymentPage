<template>

  <div class="payment-page">

    <h1 class="payment-page__title">
      Заголовок страницы
    </h1>
    <div class="payment-page__sub-text">
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
  }
</script>

<style lang="scss">
  .payment-page {

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

  }
</style>
