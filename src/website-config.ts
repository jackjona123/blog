export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Jack Jona\'s Blog',
  description: 'The Official Blog For Jack Jona',
  coverImage: 'img/blog-cover.png',
  logo: 'img/logo.png',
  lang: 'en',
  siteUrl: 'http://localhost:8000',
  instagram: 'https://www.instagram.com/jackjona123/',
  twitter: 'https://twitter.com/jackjona123',
  github: 'https://github.com/jackjona123',
  showSubscribe: true,
  mailchimpAction: 'https://protonmail.us1.list-manage.com/subscribe/post?u=e52fd31b4b26cc754c9ca4496&amp;id=33995af06a',
  mailchimpName: 'e52fd31b4b26cc754c9ca4496',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: '<meta name="google-site-verification" content="Slepw1npDrHd8TWxwe-FSFzLIz-WlnR5Tt278fBw_wo" />',
  footer: '| Built With: ❤️ ',
};

export default config;

