import { useEffect, useState } from "react";
const accessToken =
  "JMxsFS4i4PNnVPkGxNlwcf4m_vlsd87vvTSOzwlqRRc";
const spaceId = "g6t519g8npzy";
const query = `
{
  receitasCollection {
    total
    items {
      titulo
      slug
      thumbnail {
        url
      }
      ingredientes
    }
  }
}
`;




export default function Cards() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          query
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        setData(response.data.receitasCollection.items);
      })
      .catch(error => {
        console.log(error)
      });

  }, []);

  console.log("data", data);
  return (
    <>
      <div className="recipe-list">
        {data == null ? (
          <>
            <span>Loading...</span>
          </>
        ) : (
          <>
            <span>{data[0].titulo}</span>
          </>
        )}
      </div>
    </>
  )
}

