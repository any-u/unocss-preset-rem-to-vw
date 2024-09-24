# unocss-preset-rem-to-vw
  Convert all rem to vw in utils

[![NPM version](https://img.shields.io/badge/npm-0.0.0_beta.1-brightgreen)](https://github.com/any-u/unocss-preset-rem-to-vw)


## Install
```bash
npm install @any-u/unocss-preset-rem-to-vw -D
```

## Usage

### Options
```ts
export interface RemToVwOptions {
  /**
   * 1rem = n px
   * @default 16
   */
  baseFontSize?: number

  /**
   * CSS 像素（逻辑像素）
   * @default  375
   */
  viewportWidth?: number
  /**
   * 精度
   * @default 5
   */
  unitPrecision?: number
}
```

### Config
```ts
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import presetRemToVw from "@any-u/unocss-preset-rem-to-vw"

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetRemToVw()
      ],
    }),
  ],
})
```
