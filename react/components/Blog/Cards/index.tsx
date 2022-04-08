import { createClient } from "contentful";
import RecipeCard from "./RecipeCard";

export async function getStaticProps() {
  const client = createClient({
    space: "g6t519g8npzy",
    accessToken: "JMxsFS4i4PNnVPkGxNlwcf4m_vlsd87vvTSOzwlqRRc",
  });

  const response = await client.getEntries({
    content_type: "receitas",
  });

  return {
    props: {
      recipes: response.items,
    },
  };
}

export default function Cards({recipes}) {
  console.log("🚀 ~ file: index.js ~ line 23 ~ Recipes ~ recipes", recipes);
  return (
    <>
    <div className="recipe-list">
      {recipes.map((response) => (
        <RecipeCard key={response.sys.id} recipe={response} />
      ))}
    </div>
    </>
  )
}

Cards.schema = {
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
