import LargeCard from "./LargeCard";
import Card from "./Card";
import Pagination from "rc-pagination";
import Spacing from "../Spacing";

export default function BlogLayout({
  mainData,
  data,
  page,
  onPageChange,
  total,
  limit,
}) {
  return (
    <div className="w-1110px max-w-full mx-auto">
      <Spacing className="pt-10" />
      <div className="mx-auto flex justify-center">
        {mainData ? <LargeCard data={mainData} /> : null}
      </div>
      <Spacing className="pt-14" />
      <h1 className="text-4xl text-center font-semibold">
        Find the Article <br /> Which Interests You The Most
      </h1>
      <Spacing className="pt-10" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 w-full">
        {data?.map((item, key) => (
          <Card key={key} {...item} />
        ))}
      </div>
      <Spacing className="pt-7" />
      <div className="flex justify-end">
        <Pagination
          total={total}
          pageSize={limit}
          showLessItems={true}
          onChange={onPageChange}
          current={Number(page)}
        />
      </div>
      <Spacing className="pt-14" />
    </div>
  );
}
