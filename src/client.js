/* eslint-disable no-unused-vars */
import sanityClient from '@sanity/client'

const client = sanityClient ({
    projectId: 'your-project-id',
    dataset: 'production',
    apiVersion: '2021-03-25', // use a UTC date string
    token: '', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
  })
export default sanityClient({
    projectId: "fnxomvv6",
    dataset: "production"
})