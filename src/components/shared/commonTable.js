"use client";
import React from "react";
import { Table } from "antd";

//  ----------- Pagination ----------
const defaultPagination = {
  pageSize: 6,
  itemRender: (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <div className=" w-auto py-[8px] px-3 h-[36px] border-solid border-[1px] border-[gainsboro] rounded-[9px] flex items-center justify-center">
          Prevoius
        </div>
      );
    }
    if (type === "next") {
      return (
        <div className=" w-auto py-[8px] px-3 h-[36px] border-solid border-[1px] border-[gainsboro] rounded-[9px] flex items-center justify-center">
          Next
        </div>
      );
    }
    return originalElement;
  },
  showSizeChanger: false,
};

//  ----------- Main Comp ----------

const CommonTable = ({
  dataSource,
  columns,
  scrollX = "1000px",
  pagination = defaultPagination,
  tableWraperClass = "",
}) => {
  return (
    <>
      <div className="overflow-x-auto ">
        <Table
          dataSource={dataSource}
          scroll={{ x: scrollX }}
          columns={columns}
          pagination={pagination}
          className={`custom-ant-table ${tableWraperClass}`}
        />
      </div>
    </>
  );
};

export default CommonTable;
