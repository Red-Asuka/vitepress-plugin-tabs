import fs from 'node:fs'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  hooks: {
    'mkdist:done': () => {
      fs.copyFileSync('./src/style.css', './dist/style.css')
    },
  },
})
