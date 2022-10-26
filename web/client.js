import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'r1r06k4w',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-01-31',
})

export default client
