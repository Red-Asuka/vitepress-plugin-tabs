import container from 'markdown-it-container'
import type Token from 'markdown-it/lib/token'
import type MarkdownIt from 'markdown-it'
import { tabAttributes } from './util'

export default (md: MarkdownIt, options: any) => {
  md.use(container, 'tab', {
    render: (tokens: Token[], idx: number) => {
      const token = tokens[idx]
      const attributes = tabAttributes(token.info, options)

      if (token.nesting === 1)
        return `<tab ${attributes}>\n`

      else
        return '</tab>\n'
    },
  })
}
