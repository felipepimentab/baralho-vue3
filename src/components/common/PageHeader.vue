<template>
  <header class="header">
    <SvgComponent
      icon="Baralho"
      class="header__icon"
    />
    <h1 class="header__title">
      Baralho
    </h1>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/breakpoints';
@import '../../assets/scss/colors';
@import '../../assets/scss/container';
@import '../../assets/scss/fonts';
@import '../../assets/scss/normalize';
@import '../../assets/scss/variables';
.header {
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem;
  background-color: $main-dark;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  &__icon {
    height: 2rem;
    width: 2rem;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>