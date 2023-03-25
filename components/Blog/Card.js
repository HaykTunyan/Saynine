import Image from "next/image";
import Link from "next/link";
import { DateTime } from "luxon";
import Spacing from "../Spacing";
import CalendarIcon from "../Icons/calendar";

const COVER = "/images/mock.jpg";

const classes = {
  root: "shadow-base bg-light rounded-bl-2xl rounded-tr-2xl overflow-hidden max-w-full w-349",
  header: "w-full h-244px relative",
  cover: "rounded-bl-xl object-cover object-center",
  comments:
    "absolute bottom-0 right-0 w-10 h-10 bg-light z-10 rounded-tl-xl flex justify-center items-center",
  commentsIcon: "w-8 h-5",
  title:
    "text-2xl font-semibold line-clamp-2 hover:underline cursor-pointer h-16",
  body: "w-full flex",
  avatar: "w-10 h-10 flex-shrink-0 relative",
  infoWrapper: "flex-1 w-full overflow-hidden",
  author: "truncate w-full text-sm font-semibold",
  metaWrapper: "flex overflow-hidden items-center",
  position: "flex-1 truncate text-xs text-gray font-medium",
  dateWrapper: "flex items-center flex-shrink-0 ",
  calendarIcon: "h-5 w-5 fill-current text-primary",
};

export default function Card(data) {
  console.log("data", data);
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Image src={data?.cover} layout="fill" className={classes.cover} />
        {/* <div className={classes.comments}>
          <BoxIcon className={classes.commentsIcon} />
          <span className="text-sm absolute">{data.comments}</span>
        </div> */}
      </div>
      <div className="p-5">
        <Link href={`/articles/${data?.slug?.[0] || data.id}`}>
          <h1 className={classes.title}>{data.title}</h1>
        </Link>
        <Spacing className="pt-5" />
        <div className={classes.body}>
          <div className={classes.avatar}>
            <Image
              src={data.avatar}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-full"
            />
          </div>
          <Spacing className="pl-1" />
          <div className={classes.infoWrapper}>
            <h2 className={classes.author}>{data.author}</h2>
            <div className={classes.metaWrapper}>
              <p className={classes.position}>{data.position}</p>
              <Spacing className="pl-2" />
              <div className={classes.dateWrapper}>
                <CalendarIcon className={classes.calendarIcon} />
                <Spacing className="pl-1" />
                {DateTime.fromISO(data.date).toFormat("dd/LL/yyyy")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
