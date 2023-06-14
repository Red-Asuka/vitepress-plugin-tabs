import type MarkdownIt from 'markdown-it'
import tabs from './tabs'
import tab from './tab'

function tabsPlugin(md: MarkdownIt, opts: any = {}) {
  const defaultOptions = { dedupeIds: false }
  const options = Object.assign({}, defaultOptions, opts)

  tabs(md, options)
  tab(md, options)
}

export default tabsPlugin
