// Example: Portfolio Item Schema
const portfolioItem = {
  name: 'project',
  type: 'document',
  title: 'Portfolio Project',
  fields: [
    { name: 'title', type: 'string', title: 'Project Title' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'image', type: 'image', title: 'Project Image' },
  ]
}

export const schemaTypes = [portfolioItem]