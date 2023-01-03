import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      basic: string
      lighter: string
      gray: string
      mobileNav: string
      bannerTitle: string
      bannerContent: string
    }
    text: {
      basic: string
      point: string
    }
  }
}
