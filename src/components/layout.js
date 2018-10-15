import 'normalize.css'
import './layout.css'
import './fonts.css'
import './text.css'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'A playful avatar generator for the modern age.',
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:site',
              content: '@draftbit',
            },
            {
              name: 'twitter:title',
              content: 'Personas by Draftbit',
            },
            {
              name: 'twitter:image',
              content: '/web-preview-1x1.png',
            },
            {
              name: 'twitter:description',
              content: 'A playful avatar generator for the modern age.',
            },
            {
              name: 'keywords',
              content: 'Avatar, Avatar Generator, Personas, Draftbit, Avatars',
            },
            { property: 'og:image', content: '/web-preview.png' },
            { property: 'og:title', content: 'Personas by Draftbit' },
            { property: 'og:url', content: 'https://personas.draftbit.com' },
            {
              property: 'og:description',
              content: 'A playful avatar generator for the modern age.',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
