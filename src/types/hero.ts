import { ReactNode } from "react"

export type HeroConfig = {
    jumbotron?: HeroBtn,
    title: ReactNode,
    subTitle?: string
  }
  
  export type HeroBtn = {
    link: string,
    text: string
  }