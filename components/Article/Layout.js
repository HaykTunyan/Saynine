import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { DateTime } from "luxon";
import CalendarFilledIcon from "../Icons/calendar";
import Spacing from "../Spacing";

const classes = {
  title: "text-3xl font-bold",
  avatar: "w-10 h-10 flex-shrink-0 relative",
  infoWrapper: "flex-1 flex items-center w-full overflow-hidden",
  author: "truncate w-full text-md font-medium flex-1",
  metaWrapper: "flex overflow-hidden items-center",
  iconWrapper: "flex items-center flex-shrink-0 text-sm font-medium",
  icon: "h-5 w-5 fill-current text-primary",
};

export default function ArticleLayout({ data }) {
  return (
    <div className="w-740px px-4 max-w-full mx-auto">
      <Head>
        <title>{data.meta?.title}</title>
        <meta name="description" content={data.meta?.description} />
        <meta name="robots" content={data.noFollow ? "noindex" : "all"} />
      </Head>
      <div className="w-full relative flex md:h-450px h-64">
        <Image
          src={data.cover}
          className="rounded-br-3xl w-full h-full"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Spacing className="pt-10" />
      <Link href="/blog" className="font-semibold cursor-pointer">
        <span className="cursor-pointer flex items-center">
          &#x3c;&nbsp; All articles
        </span>
      </Link>
      <Spacing className="pt-7" />
      <h1 className={classes.title}>{data.title} </h1>
      <Spacing className="pt-6" />
      <div className="flex">
        <div className={classes.avatar}>
          <Image
            src={data.avatar}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-full"
          />
        </div>
        <Spacing className="pl-2" />
        <div className={classes.infoWrapper}>
          <h2 className={classes.author}>{data.author}</h2>
          <div className={classes.metaWrapper}>
            <Spacing className="pl-2" />
            <div className={classes.iconWrapper}>
              <CalendarFilledIcon className={classes.icon} />
              <Spacing className="pl-2" />
              {DateTime.fromISO(data.date).toFormat("dd/LL/yyyy")}
            </div>
            <Spacing className="pl-7" />
            {/* CHECK TO IMPLEMENT */}
            {/* <div className={classes.iconWrapper}>
              <TimeIcon className={classes.icon} />
              <Spacing className="pl-2" />
              {data.time}
            </div> */}
          </div>
        </div>
      </div>
      <Spacing className="pt-5" />
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />

      {/* AUTHOR CARD */}
      <Spacing className="pt-14" />
      <h2 className="text-2xl font-medium">About the author</h2>
      <Spacing className="pt-4" />
      <div className="w-655px max-w-full p-5 rounded-3xl shadow-base flex">
        <div className="w-128px h-128px relative flex-shrink-0">
          <Image
            src={data.avatar}
            className="w-full h-full rounded-full object-cover object-center"
            layout="fill"
          />
        </div>
        <Spacing className="pl-2 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">{data.author}</h3>
          <Spacing className="pt-2" />
          <p className="text-gray text-sm line-clamp-4">{data.position}</p>
        </div>
      </div>
      <Spacing className="pt-14" />
    </div>
  );
}
