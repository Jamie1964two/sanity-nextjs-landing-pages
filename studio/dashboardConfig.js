export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63593d55b6fd05005fba8bd5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-u2b79npj',
                  apiId: '87548d26-2547-42ca-9b74-bc80d7507a26'
                },
                {
                  buildHookId: '63593d55dd322d00852ab496',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-19wkrwd1',
                  apiId: '7f3c4c36-93ad-44fe-b040-fde3ea821dd3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jamie1964two/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-19wkrwd1.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
