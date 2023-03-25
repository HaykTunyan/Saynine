import ArticleLayout from "../../components/Article/Layout";
import { getImageFullPath } from "../blog";

export default function Article(props) {
  const article = props.data;
  const data = {
    id: article._id,
    position: article.author.about,
    cover: getImageFullPath(article.cover),
    title: article.title,
    date: article.created,
    author: article.author.firstName + " " + article.author.lastName,
    avatar: getImageFullPath(article.author.image),
    content: article.text,
    meta: article.meta,
    noFollow: article.noFollow,
  };

  return <ArticleLayout data={data} />;
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`${process.env.ROOT_API}/articles/${id}`);
  const data = await res.json();
  return { props: data };
}
