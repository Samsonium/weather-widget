<script lang="ts">
  import {SelectLanguage} from '@/features/selectLanguage'
  import {SearchCity} from '@/features/searchCity'
  import {colors, gradientColor, tempUnit} from '@/shared/lib'
  import {Button, Icon} from '@/shared/ui'
  import Logo from './Logo.svelte'
  import {changeTempUnit} from '../model/changeTempUnit'
  import {changeColors} from '../model/changeColors'
</script>

<header class="header">
  <Logo />

  <div class="header__block-settings">
    <SearchCity />

    <Button onclick={changeTempUnit} color={$gradientColor}>
      {#snippet icon()}
        {@const name = $tempUnit === '°C' ? 'celsius' : 'fahrenheit'}
        <Icon {name} />
      {/snippet}
    </Button>

    <Button onclick={changeColors}>
      {#snippet icon()}
        {@const name =
          $gradientColor === colors.GRADIENT_VIOLET ? 'night' : 'day'}
        <Icon {name} />
      {/snippet}
    </Button>

    <SelectLanguage />
  </div>
</header>

<style lang="sass">
  .header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 15px 10px 10px
    margin-bottom: 20px
    border-style: solid
    border-width: 0.2px
    border-color: var(--light-gray)
    border-top: none
    border-radius: 0 0 30px 30px
    &__block-settings
      display: flex
      align-items: center
      gap: 35px

  @media (max-width: 1000px)
    .header__block-settings
      width: 110px
      flex-wrap: wrap
      justify-content: space-between
      gap: 10px

  @media (max-width: 450px)
    .header__block-settings
      width: 90px
</style>
