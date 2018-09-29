<template>
  <div class="payment-form">
    <div class="payment-form__label">
      ИНФОРМАЦИЯ ПО ОПЛАТЕ
    </div>

    <div class="payment-form__info">
      <div class="row">
        <div class="col-md-6">
          <div class="payment-form__info__label">
            Номер счёта:
          </div>
        </div>
        <div class="col-md-6">
          <div class="payment-form__info__value">
            758123094812934
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="payment-form__info__label">
            Сумма платежа:
          </div>
        </div>
        <div class="col-md-6">
          <div class="payment-form__info__value">
            1000 руб.
          </div>
        </div>
      </div>
    </div>

    <div class="payment-form__item">
      <div class="payment-form__label">
        НОМЕР КАРТЫ
      </div>
      <div class="row">
        <div class="col-md-3" v-for="(part, index) in cardParts">
          <input class="payment-form__input payment-form__input_card-number"
                 @keydown="onCardInputChange(index)"
                 @keydown.backspace="onCardInputBackspace(index)"
                 v-model="part.value" :key="index"
                 maxlength="4"
                 :class="part.className"
                 ref="cardPartsInput">
        </div>
      </div>
    </div>


    <div class="payment-form__item">
      <div class="payment-form__label">
        ДЕРЖАТЕЛЬ КАРТЫ
      </div>
      <input class="payment-form__input" :class="holderClassName" @keydown="validateHolder" v-model="holder">
    </div>

    <div class="payment-form__item">
      <div class="row">
        <div class="col-md-6">
          <div class="payment-form__label">
            СРОК ДЕЙСТВИЯ
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="payment-form__input_select-wrapper">

                <select class="payment-form__input payment-form__input_select" v-model="month">
                  <option :key="month" :value="month" v-for="month in months">{{month}}</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="payment-form__input_select-wrapper">
                <select class="payment-form__input payment-form__input_select" v-model="year">
                  <option :key="year" :value="year" v-for="year in years">{{year}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 offset-md-3">
          <div class="payment-form__label">
            CVC
          </div>
          <input class="payment-form__input" style="text-align: center" :class="CVCClassName" v-model="CVC"
                 @keydown="validateCVC" maxlength="3">
        </div>
      </div>

      <div class="payment-form__item">
        <button class="payment-form__button" @click="submit">ОПЛАТИТЬ</button>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data: () => ({
      cardParts: [],
      holder: '',
      month: '1',
      year: '',
      CVC: '',
      months: [],
      years: [],
      holderClassName: '',
      CVCClassName: '',
      haveError: false
    }),
    created() {
      for (let i = 0; i < 4; i++) {
        this.cardParts.push({
          value: '',
          className: ''
        })
      }

      for (let i = 1; i <= 12; i++) {
        this.months.push(`${i}`)
      }

      let currentYear = new Date().getFullYear();
      this.year = `${currentYear}`;
      for (let i = currentYear; i <= currentYear + 5; i++) {
        this.years.push(`${i}`)
      }
    },
    methods: {
      onCardInputChange(index) {
        setTimeout(() => {
          this.validateCardNumber(index);
          let value = this.cardParts[index].value;
          if (value.length < 4 || index === 3) return;
          this.$refs['cardPartsInput'][index + 1].focus()
        })
      },
      onCardInputBackspace(index) {
        setTimeout(() => {
          this.validateCardNumber(index);
          let value = this.cardParts[index].value;
          if (value.length || index === 0) return;
          this.$refs['cardPartsInput'][index - 1].focus()
        })
      },
      validateCardNumber(index) {
        let part = this.cardParts[index];

        let pattern = /^\d+$/;

        if (pattern.test(part.value) && part.value.length === 4) {
          part.className = 'payment-form__input_success'
        } else {
          part.className = 'payment-form__input_error'
          this.haveError = true
        }
      },
      validateHolder() {
        setTimeout(() => {
          let pattern = /^[a-zA-Z]/

          if (pattern.test(this.holder) && this.holder.length >= 4) {
            this.holderClassName = 'payment-form__input_success'
          } else {
            this.holderClassName = 'payment-form__input_error'
            this.haveError = true
          }
        })
      },
      validateCVC() {
        setTimeout(() => {
          let pattern = /^\d+$/;

          if (pattern.test(this.CVC) && this.CVC.length === 3) {
            this.CVCClassName = 'payment-form__input_success'
          } else {
            this.CVCClassName = 'payment-form__input_error'
            this.haveError = true
          }
        })
      },
      submit() {
        this.haveError = false
        this.cardParts.forEach((part, index) => {
          this.validateCardNumber(index)
        })
        this.validateCVC()
        this.validateHolder()
        console.log(this.haveError)
        if(this.haveError){
          alert('Заполните необходимые поля')
        } else {
          alert('Форма заполнена')
        }
      }
    }
  }
</script>

<style lang="scss">
  .payment-form {
    &__label {
      color: #1F2229;
      font-size: 13px;
      margin-bottom: 10px;
      font-weight: bold;

    }

    &__input {
      color: #959595;
      padding: 10px 14px;
      border-radius: 3px;
      width: 100%;
      background-color: #F0F0F0;
      border: 1px solid transparent;
      outline: 0;
      font-size: 14px;

      &_error {
        border-color: red !important;
      }

      &_success {
        border-color: #4cd421 !important;
      }

      &_card-number {
        text-align: center;
      }

      &_select {
        height: 37px;
        appearance: textfield;
        padding-left: 10px;
        cursor: pointer;

        &-wrapper {
          width: 100%;
          position: relative;

          &::after {
            position: absolute;
            right: 8px;
            top: 0;
            bottom: 4px;
            margin: auto 0;
            width: 9px;
            height: 9px;
            border-left: 2px solid #959595;
            border-bottom: 2px solid #959595;
            transform: rotate(-45deg);
            display: block;
            content: ' ';
          }

        }
      }
    }

    &__item {
      margin: 22px 0;
    }

    &__info {
      font-size: 14px;

      &__label {
        color: #676666;
      }

      &__value {
        color: #1F2229;
      }
    }

    &__button {
      font-size: 14px;
      width: 100%;
      padding: 12px;
      color: white;
      background: #005C9C;
      border-radius: 3px;
      outline: 0;
      border: 0;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

  }

</style>
