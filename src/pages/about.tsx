import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>
                  
                </h5>
                <p>
                  Hey! I'm Jack Jona :)
                </p>
                <p>
                  I am an optimist, patient, honest, and an individual who loves to innovate and develop new software and applications for the world. 
                  Loves everything from the Raspberry Pi zero to powerful (not to mention loud) servers and everything in between. 
                  I enjoy building computers, taking them apart, experimenting and understanding what makes them tick.
                 I love to learn new things and explore, and I always enjoy a good challenge. 
                 I have made and continue to make mistakes but I continue to learn from them and grow as a person.
                </p>
                <p>
                  <center>
                  <br></br>
                  <strong><h1>You Can Reach Me At:</h1></strong>
                  <br></br>
                  <h6>On Twitter:</h6> <a href="https://twitter.com/jackjona123">@jackjona123</a>
                  <br></br>
                  <h6>On Instagram:</h6> <a href="https://www.instagram.com/jackjona123/">@jackjona123</a>
                  <br></br>
                  <h6>On Github:</h6> <a href="https://github.com/jackjona123">jackjona123</a>
                  </center>
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
