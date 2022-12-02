export function GetComponentList() {
  const url = "https://graphql.contentful.com/content/v1/spaces/y7i3m03654m2/";
  const method = "POST";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_KEY}`,
  };
  const query = `{
        componentCollection {
          items {
            id
            name
            description
            thumbnail {
              description
              fileName
              url
            }
          }
        }
    }`;

  return fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((res) => res.data.componentCollection.items);
}
