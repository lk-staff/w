export enum LayoutsEnum {
  default = 'default',
  empty = 'empty',
  error = 'error',
}

export const LayoutToFileMap: Record<LayoutsEnum, string> = {
  default: 'DefaultLayout.vue',
  empty: 'EmptyLayout.vue',
  error: 'ErrorLayout.vue',
};
