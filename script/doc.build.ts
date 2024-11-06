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


const files = fs.readdirSync(docsPath)
for (const file of files) {
  const content = fs.readFileSync(path.join(docsPath, file)).toString()
  fs.writeFileSync(path.join(distPath, file.replace('.md', '.json')), renderMdx(autocorrect.formatFor(content, 'markdown')))
}