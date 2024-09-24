import { definePreset } from '@unocss/core'

const remRE = /(-?[.\d]+)rem/g

export interface RemToVwOptions {
  /**
   * 1rem = n px
   * @default 16
   */
  baseFontSize?: number

  /**
   * CSS 像素（逻辑像素）
   */
  viewportWidth?: number
  /**
   * 精度
   */
  unitPrecision?: number
}

/**
 * convert rem to vw
 */
export const presetRemToVw = definePreset((options: RemToVwOptions = {}) => {
  const {
    baseFontSize = 16,
    viewportWidth = 375,
    unitPrecision = 5
  } = options

  return {
    name: 'unocss-preset-rem-to-vw',
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1]
        if (typeof value === 'string' && remRE.test(value))
          i[1] = value.replace(remRE, (_, p1) => `${(100 / viewportWidth * p1 * baseFontSize).toFixed(unitPrecision)}vw`)
      })
    },
  }
})

export default presetRemToVw