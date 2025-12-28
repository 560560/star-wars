/* eslint-disable @typescript-eslint/no-explicit-any */
// Type overrides для react-router-dom v5 совместимости с React 18
// Проблема: react-router v5 использует старую версию @types/react в своих типах
declare module 'react-router-dom' {
  import type * as React from 'react'

  export interface RouteComponentProps<
    Params extends { [K in keyof Params]?: string } = Record<string, never>,
    C extends React.StaticContext = React.StaticContext,
    S = unknown,
  > {
    history: History<S>
    location: Location<S>
    match: match<Params>
    staticContext?: C
  }

  export interface RouteProps {
    location?: Location
    component?:
      | React.ComponentType<RouteComponentProps<any>>
      | React.ComponentType<any>
    render?: (props: RouteComponentProps<any>) => React.ReactNode
    children?:
      | ((props: RouteComponentProps<any>) => React.ReactNode)
      | React.ReactNode
    path?: string | readonly string[]
    exact?: boolean
    sensitive?: boolean
    strict?: boolean
  }

  export const Route: React.ComponentType<RouteProps>

  export interface SwitchProps {
    children?: React.ReactNode
    location?: Location
  }

  export const Switch: React.ComponentType<SwitchProps>

  export interface NavLinkProps<
    S = unknown,
  > extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string | LocationDescriptor<S>
    exact?: boolean
    strict?: boolean
    activeClassName?: string
    activeStyle?: React.CSSProperties
    isActive?: (match: match<any> | null, location: Location<S>) => boolean
    location?: Location<S>
    replace?: boolean
    innerRef?: React.Ref<HTMLAnchorElement>
  }

  export const NavLink: React.ComponentType<NavLinkProps>

  export interface LinkProps<
    S = unknown,
  > extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string | LocationDescriptor<S>
    replace?: boolean
    innerRef?: React.Ref<HTMLAnchorElement>
  }

  export const Link: React.ComponentType<LinkProps>

  export interface BrowserRouterProps {
    basename?: string
    children?: React.ReactNode
    forceRefresh?: boolean
    getUserConfirmation?: (
      message: string,
      callback: (ok: boolean) => void,
    ) => void
    keyLength?: number
  }

  export const BrowserRouter: React.ComponentType<BrowserRouterProps>

  export function withRouter<P extends RouteComponentProps>(
    component: React.ComponentType<P>,
  ): React.ComponentType<Omit<P, keyof RouteComponentProps>>

  export * from 'react-router'
}
