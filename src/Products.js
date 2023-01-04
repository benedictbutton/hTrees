import React, { useMemo } from "react";
import { toDataFrame } from "@grafana/data";
import ProductsTable from "./ProductsTable";
import useFetch from "./util/useFetch";

const Products = () => {
  const [{ data, isLoading }] = useFetch("https://dummyjson.com/products");

  const frameData = useMemo(() => {
    if (data) return toDataFrame(data?.products);
  }, [data]);

  return (
    <>
      {isLoading && <h1>Loading</h1>}
      {!isLoading && (
        <div
          className="panel-container"
          style={{ width: "auto", height: "unset" }}
        >
          <ProductsTable
            width={300}
            height={700}
            columnMinWidth={100}
            enablePagination
            showTypeIcons
            resizable
            data={frameData}
          />
        </div>
      )}
    </>
  );
};

export default Products;
