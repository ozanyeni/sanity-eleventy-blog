export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '62b0547d10168b163ea043cf',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-vau2dorg',
                  apiId: 'c582d975-a406-4010-8109-ef9be36d961d'
                },
                {
                  buildHookId: '62b0547ee6a1801628dab107',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-41jtstqb',
                  apiId: '3287eae3-18a5-4547-abe9-d4fd80024b82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ozanyeni/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-41jtstqb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
