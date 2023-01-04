import React, { useMemo } from "react";
import Products from "./Products";
import { useTable } from "react-table";
// import { columns } from "./util/buildColumns";
import useFetch from "./util/useFetch";
import Table from "./Table";
import Rating from "./Rating";

// import { createColumnHelper } from "react-table";

// const columnHelper = createColumnHelper();

// Make some columns!

const ReactTable = () => {
  const columns = useMemo(
    () => [
      {
        accessor: "id",
        id: "id",
        cell: (info) => info.getValue(),
        Header: "ID",
        width: 80,
        // footer: props => props.column.id,
      },
      {
        accessor: (row) => row.title,
        id: "title",
        cell: (info) => info.getValue(),
        Header: "Title",
        // footer: props => props.column.id,
      },
      {
        accessor: (row) => row.description,
        id: "description",
        cell: (info) => info.getValue(),
        Header: "Description",
        width: 250,
        // footer: props => props.column.id,
      },
      {
        accessor: (row) => `${"$" + parseFloat(row.price).toFixed(2)}`,
        id: "price",
        cell: (info) => info.getValue(),
        Header: "Price",
        // footer: props => props.column.id,
      },
      {
        accessor: (row) => row.discountPercentage + "%",
        id: "discount",
        cell: (info) => info.getValue(),
        Header: "Discount",
        // footer: props => props.column.id,
      },
      {
        accessor: (row) => row.rating,
        id: "Rating",
        Cell: (row) => <Rating row={row} />,
        Header: "Rating",
        minWidth: "200px",
        // footer: props => props.column.id,
      },
      {
        accessor: (row) => row.stock,
        id: "Stock",
        cell: (info) => info.getValue(),
        Header: "Stock",
        width: 90,
        // footer: props => props.column.id,
      },
      {
        accessor: (row) => row.brand,
        id: "Brand",
        cell: (info) => info.getValue(),
        Header: "Brand",
        width: 125,
        // footer: props => props.column.id,
      },
      {
        accessor: (row) => row.category,
        id: "Category",
        cell: (info) => info.getValue(),
        Header: "Category",
        // footer: props => props.column.id,
      },
      {
        accessor: (row) => row.thumbnail,
        id: "Thumbnail",
        Cell: (row) => (
          <img
            src={row.row.original.thumbnail}
            alt={row.row}
            width="50px"
            height="50px"
          />
        ),
        Header: "Thumbnail",
        // footer: props => props.column.id,
      },
    ],
    []
  );

  const [{ data, isLoading }] = useFetch("https://dummyjson.com/products");

  console.log(data);

  return <>{data && <Table columns={columns} data={data?.products} />}</>;
};

export default ReactTable;
