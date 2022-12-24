import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      basic: string
      lighter: string
    }
    text: {
      basic: string
      point: string
    }
  }
}
