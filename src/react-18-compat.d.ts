// Type compatibility fixes for React 18 with older libraries
/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'react-bootstrap' {
  import type * as React from 'react'

  export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    fluid?: boolean | 'sm' | 'md' | 'lg' | 'xl'
    children?: React.ReactNode
  }

  export interface RowProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
  }

  export interface ColProps extends React.HTMLAttributes<HTMLElement> {
    xs?: number | 'auto' | boolean
    sm?: number | 'auto' | boolean
    md?: number | 'auto' | boolean
    lg?: number | 'auto' | boolean
    xl?: number | 'auto' | boolean
    children?: React.ReactNode
  }

  export interface CarouselProps extends React.HTMLAttributes<HTMLElement> {
    activeIndex?: number
    controls?: boolean
    indicators?: boolean
    interval?: number | null
    keyboard?: boolean
    onSelect?: (eventKey: number, event: any) => void
    onSlide?: (eventKey: number, direction: 'left' | 'right') => void
    onSlid?: (eventKey: number, direction: 'left' | 'right') => void
    pause?: 'hover' | false
    slide?: boolean
    touch?: boolean
    wrap?: boolean
    children?: React.ReactNode
  }

  export interface CarouselItemProps extends React.HTMLAttributes<HTMLElement> {
    interval?: number
    children?: React.ReactNode
  }

  export interface CarouselCaptionProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
  }

  export const Container: React.FC<ContainerProps>
  export const Row: React.FC<RowProps>
  export const Col: React.FC<ColProps>

  export const Carousel: React.FC<CarouselProps> & {
    Item: React.FC<CarouselItemProps>
    Caption: React.FC<CarouselCaptionProps>
  }

  export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    bg?: string
    variant?: 'light' | 'dark'
    expand?: boolean | 'sm' | 'md' | 'lg' | 'xl'
    fixed?: 'top' | 'bottom'
    sticky?: 'top' | 'bottom'
    collapseOnSelect?: boolean
    children?: React.ReactNode
  }

  export interface NavProps extends React.HTMLAttributes<HTMLElement> {
    activeKey?: string
    onSelect?: (eventKey: string | null, e: React.SyntheticEvent<any>) => void
    children?: React.ReactNode
  }

  export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    bg?: string
    text?: string
    border?: string
    body?: boolean
    children?: React.ReactNode
  }

  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string
    size?: 'sm' | 'lg'
    active?: boolean
    disabled?: boolean
    children?: React.ReactNode
  }

  export const Navbar: React.FC<NavbarProps> & {
    Brand: React.FC<any>
    Toggle: React.FC<any>
    Collapse: React.FC<any>
  }

  export const Nav: React.FC<NavProps> & {
    Link: React.FC<any>
    Item: React.FC<any>
  }

  export const Card: React.FC<CardProps> & {
    Body: React.FC<any>
    Title: React.FC<any>
    Text: React.FC<any>
    Img: React.FC<any>
  }

  export const Button: React.FC<ButtonProps>
}

declare module 'react-redux' {
  import type * as React from 'react'
  import type { Store } from 'redux'

  export interface ProviderProps<A = any> {
    store: Store<A>
    children?: React.ReactNode
  }

  export const Provider: React.FC<ProviderProps>

  export function useDispatch<TDispatch = any>(): TDispatch
  export function useSelector<TState = any, TSelected = any>(
    selector: (state: TState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean,
  ): TSelected

  export type TypedUseSelectorHook<TState> = <TSelected>(
    selector: (state: TState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean,
  ) => TSelected
}
