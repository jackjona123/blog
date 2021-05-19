# Jack Jona's Blog

Link to my blog: https://blog.jackjona.live

This is a static blog generator and starter gatsby repo. A version of [Casper](https://github.com/TryGhost/Casper) v3 themefrom [Ghost](https://ghost.org/), built on the Gatsby Starter [Gatsby-Casper](https://github.com/scttcper/gatsby-casper), for [GatsbyJS](https://www.gatsbyjs.org/) using [TypeScript](https://www.typescriptlang.org/).

## Getting Started

Clone this repo.

```
git clone https://github.com/jackjona123/jackblog.git --depth=1
```

Remove .git folder and setup a new one

```
rm -rf .git && git init
```

Edit website-config.ts with your website settings.
Either disable subscribe or setup a mailchimp list and add the form action and hidden field input name.

Now push to whatever repo you want!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jackjona123/jackblog)

## How to configure Google Analytics

Edit `gatsby-config.js` and add your tracking ID

```javascript
{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // Here goes your tracking ID
      trackingId: 'UA-XXXX-Y',
      // Puts tracking script in the head instead of the body
      head: true,
      // IP anonymization for GDPR compliance
      anonymize: true,
      // Disable analytics for users with `Do Not Track` enabled
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ['/preview/**'],
      // Specifies what percentage of users should be tracked
      sampleRate: 100,
      // Determines how often site speed tracking beacons will be sent
      siteSpeedSampleRate: 10,
    },
},
```

## How to edit your site title and description

Edit `gatsby-config.js` section `siteMetadata`

```javascript
 siteMetadata: {
    title: 'My awesome site name',
    description: 'This is a description for my site',
    siteUrl: 'https://mysite.com', // full path to blog - no ending slash
  },
```

## How to adjust pagination

In `gatsby-node.js`, edit the `postsPerPage` constant. The default value is
six posts per page.
