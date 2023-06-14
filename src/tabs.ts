import container from 'markdown-it-container'
import type Token from 'markdown-it/lib/token'
import type MarkdownIt from 'markdown-it'
import { defaultTabsAttributes, tabsAttributes } from './util'

export default (md: MarkdownIt, options: { tabsAttributes: any }) => {
  md.use(container, 'tabs', {
    render: (tokens: Token[], idx: number) => {
      const token = tokens[idx]
      const defaultAttributes = defaultTabsAttributes(options.tabsAttributes)
      const attributes = tabsAttributes (token.info)

      if (token.nesting === 1)
        return `<tabs ${defaultAttributes} ${attributes}>\n`

      else
        return '</tabs>\n'
    },
  })
}
