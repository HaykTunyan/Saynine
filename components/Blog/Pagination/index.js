import React from "react";
import RcPagination from "rc-pagination";

export default function Pagination(props) {
  return (
    <div className="pagination-root">
      <RcPagination showTitle={false} {...props} />
    </div>
  );
}
