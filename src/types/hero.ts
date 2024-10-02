import { ReactNode } from "react"

export type HeroConfig = {
    jumbotron?: HeroBtn,
    title: ReactNode,
    subTitle?: ReactNode
  }
  
  export type HeroBtn = {
    link: string,
    text: string
  }