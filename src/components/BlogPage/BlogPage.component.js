import PageHeader from "../PageHeader/PageHeader.component";

function BlogPage() {
  const handleOnSearch = (query) => {
    console.log(`Searched for ${query}`);
  };

  return (
    <section>
      <PageHeader title="Blog Posts" onSearch={handleOnSearch} />
    </section>
  );
}

export default BlogPage;
