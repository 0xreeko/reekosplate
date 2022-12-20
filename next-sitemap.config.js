module.exports = {
    siteUrl: process.env.SITE_URL || 'https://example.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            // examples of routes to avoid
            // {userAgent: '*', disallow: '/wozethanksyou'},
            // {userAgent: '*', disallow: '/tokenroute'}
        ]
    },
    exclude: ['/wozethanksyou', '/tokenroute'] // examples of routes to exclude
  }