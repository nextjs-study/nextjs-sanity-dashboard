import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'NextJS Study Sanity',

  projectId: 'w1gi9n44',
  dataset: 'stage',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
