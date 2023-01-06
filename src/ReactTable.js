import React, { useMemo } from "react";
import Table from "./Table";
import useFetch from "./util/useFetch";
import { buildColumns } from "./util/buildColumns";

const ReactTable = () => {
  const columns = useMemo(() => buildColumns(), []);

  const [{ data, isLoading }] = useFetch("https://dummyjson.com/products");

  return <>{data && <Table columns={columns} data={data?.products} />}</>;
};

export default ReactTable;
