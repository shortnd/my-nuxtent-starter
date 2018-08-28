module.exports = {
  content: {
    permalink: ':slug',
    page: '/_content',
    generate: [ // for static build
      'get',
      'getAll'
    ],
    isPost: false
  },
  // This is the example for multiple content types
  /**
   * content: [
   *  [
   *    'site_info', {
   *      permalink: '/site_info/:slug',
   *      page: 'site_info/_slug',//Needs to have a page but keep it blank to keep it from rendering
   *      isPost: false,
   *      generate: [
   *         // for static build
   *        'get',
   *        'getAll'
   *      ]
   *    }
   *  ],
   *  [
   *    'projects',
   *    {
   *      permalink: '/projects/:slug',
   *      page: 'projects/_slug',
   *      isPost: false,
   *      generate: [
   *        // for static build
   *        'get',
   *        'getAll'
   *      ]
   *    }
   *  ]
   * ]
   */
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000'
  }
}
