import Head from "next/head";
import BlogLayout from "../../components/Blog/Layout";
import { useRouter } from "next/router";
import { useEffect, Fragment } from "react";

export const getImageFullPath = (pathname) => {
  return process.env.ROOT_API + "/api/assets/" + pathname;
};

const LIMIT = 10;

export default function Blog(props) {
  const total = props.data.count;
  const data = props.data.docs;
  const router = useRouter();
  const currentPage = router?.query?.page;
  const path = router.asPath;

  const articles = data?.map((item) => ({
    id: item._id,
    position: item.author.about,
    cover: getImageFullPath(item.cover),
    title: item.title,
    date: item.created,
    author: item.author.firstName + " " + item.author.lastName,
    avatar: getImageFullPath(item.author.image),
    slug: item.slug,
  }));

  useEffect(() => {
    // FIX TO SAVE QUERY PARAMS AFTER RELOAD
    if (!currentPage) {
      router.replace({ search: "page=1" });
    }
  }, [path, currentPage, router]);

  const onPageChange = (page) => {
    router.replace({ search: `page=${page}` });
  };

  return (
    <div className="p-4">
      <Head>
        <title>Blog</title>
      </Head>
      <main className="min-h-screen">
        {currentPage ? (
          <BlogLayout
            key={currentPage}
            page={currentPage}
            onPageChange={onPageChange}
            mainData={articles[0]}
            data={articles}
            total={total}
            limit={LIMIT}
          />
        ) : null}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.page;
  const res = await fetch(
    `${process.env.ROOT_API}/articles?page=${page}&sort=-created&limit=${LIMIT}`
  );

  const data = await res.json();
  return { props: data };
}
