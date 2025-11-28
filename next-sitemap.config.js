/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://jetsetbc.com',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/admin/*'],
}
