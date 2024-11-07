import path from 'path'
import url from 'url'
import fs from 'fs-extra'
import { renderMdx } from './mdx.js'
import autocorrect from 'autocorrect-node'

const projectRoot = path.dirname(path.dirname(url.fileURLToPath(import.meta.url)));
const DIST = 'dist'
const DOCS = 'docs'

const distPath = path.join(projectRoot, DIST, DOCS)
const docsPath = path.join(projectRoot, DOCS)

fs.ensureDirSync(distPath)

const list = [] as string[]

const files = fs.readdirSync(docsPath)
for (const file of files) {
  let content = fs.readFileSync(path.join(docsPath, file)).toString()
  content = handleDeleteLine(content)
  fs.writeFileSync(path.join(distPath, file.replace('.md', '.json')), renderMdx(autocorrect.formatFor(content, 'markdown')))
  list.push(file.replace('.md', ''))
}

fs.writeFileSync(path.join(distPath, 'list.json'), JSON.stringify(list))

function handleDeleteLine(md: string): string {
  if (!md.includes("~~")) return md;

  return md.replace(/~~(.*?)~~/g, (match, text) => "<del>" + text + "</del>");
}