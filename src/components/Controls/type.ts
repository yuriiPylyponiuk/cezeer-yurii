export interface ControlsPropsType {
  id: number
  userAction: (id: number, count: number) => void
  cartCount?: number
  title?: string
  type?: 'cart'
  changeStateCount?: (id: number, count: number) => void
}
