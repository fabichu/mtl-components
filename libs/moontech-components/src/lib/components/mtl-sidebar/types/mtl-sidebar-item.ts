export interface MtlSidebarItem {
  title: string
  children?: MtlSidebarItemChild[]
}

export interface MtlSidebarItemChild {
  text: string
  path: string
}