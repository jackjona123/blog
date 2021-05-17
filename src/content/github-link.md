---
layout: post
title: How This Blog Was Made
image: img/callum-shaw-555357-unsplash.jpg
author: [Ghost]
date: 2019-03-10T10:00:00.000Z
tags:
  - Source
excerpt: Information On How This Blog Was Made.
---

## How

This website was built with HTML, Markdown, JavaScript (TypeScript), CSS, GraphQL on the static-site generator Gatsby. Then deployed on Vercel.

## Why

I could have went with a traditional Wordpress or Wix blog, but I choose to use Gatsby because of the speed and security benefits that come with it. On top of Gatsby I used a Gatsby Starter (template) that resembled the Ghost Casper default theme becuase I really liked the Ghost platform but I didn't want host the website with Ghost, and didn't want to deal with self-hosting Ghost on a VPS (virtual private server). My solutions was to use Gatsby as a static site generater with a Ghost Casper starter then deploy that to Vercel through Github. This is good because whenever a change is made to the Github Repository, the website on Vercel we be rebuilt with the new changes and deployed automatically. 

## Benefits

**The benefits of my approach are:**

- The amazing speed & performance of using Gatsby
- The security that comes with a static site,
- Not having to worry about hosting
- Automatic deployment when changes are made with no intervention on my part
- Website is built on React which is the framework that I am the most comfortable and experience with
- Website is opensource
- Gatsby is opensource and has amazing documentation
- Ability to third-party tools with SaaS solutions and API support (API hooks) in the future if required
- Gatsby plugins
- Use React components
- Easily use Markdown for conent
- Small website size

## Disadvantages

**The disadvantages of my approach are:**

- It is a static site as opposed to most blogs which are dyanimic sites.
- Editing and the addition of content can be difficult for individuals who are new to using Gatsby
- Build times will get longer as more and more content is added leading to possibly more costs in the deployment stage
- Can't edit website through a web browser

### __Source__

Find the source of this blog on GitHub - [jackjona123/jackblog](https://github.com/jackjona123/jackblog)

```bash
 https://github.com/jackjona123/jackblosg --depth=1
```


