/// <reference types="vite/client" />

/**
 * declare告诉编译器知道Window是啥类型，并且和全局的Window类型自动合并
 */

export declare global {
  interface Window {
    rawWindow: any; //全局变量名
    microApp: any; //全局变量名
  }
}
