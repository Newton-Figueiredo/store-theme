import React from 'react'
import { Helmet } from 'vtex.render-runtime'

export default function MetaTags({ description, keywords, pageTitle }) {
  //console.log("teste app", description, keywords, pageTitle)
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    </>
  )
}

MetaTags.schema = {
  title: 'SEO',
  description: 'Links for Main Menu',
  type: 'object',
  properties: {
    pageTitle: {
      type: 'string',
      title: 'tag title content',
      default: null,
    },
    description: {
      type: 'string',
      title: 'tag description content',
      default: null,
    },
    keywords: {
      type: 'string',
      title: 'tag keywords content',
      default: null,
    },

  },
}
