import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      basic: string
      lighter: string
      gray: string
      mobileNav: string
    }
    text: {
      basic: string
      point: string
    }
  }
}
