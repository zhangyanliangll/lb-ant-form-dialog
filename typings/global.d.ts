/* eslint-disable @typescript-eslint/consistent-type-imports */

declare module 'vue' {
  export interface GlobalComponents {
    LbAntFormDialog: typeof import('../packages/form-dialog/index.vue').default;
  }
}

export {};
