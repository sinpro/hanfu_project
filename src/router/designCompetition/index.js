export default [
    { //设计大赛
      path: '/designCompetition',
      name: 'DesignCompetition',
      component:
        resolve =>
          require.ensure(
            [],
            () => resolve(require('views/designCompetition')),
          ),
      meta: {
        title: '设计大赛',
        keepAlive: false,
        requireAuth: true,
        roles: ['admin', 'editor'],
      }
    }
  ]