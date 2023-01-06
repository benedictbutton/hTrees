import Rating from "../Rating";

export const buildColumns = () => {
  return [
    {
      accessor: "id",
      id: "id",
      cell: (info) => info.getValue(),
      Header: "ID",
      width: 80,
    },
    {
      accessor: (row) => row.title,
      id: "title",
      cell: (info) => info.getValue(),
      Header: "Title",
    },
    {
      accessor: (row) => row.description,
      id: "description",
      cell: (info) => info.getValue(),
      Header: "Description",
      width: 250,
    },
    {
      accessor: (row) => `${"$" + parseFloat(row.price).toFixed(2)}`,
      id: "price",
      cell: (info) => info.getValue(),
      Header: "Price",
    },
    {
      accessor: (row) => row.discountPercentage + "%",
      id: "discount",
      cell: (info) => info.getValue(),
      Header: "Discount",
    },
    {
      accessor: (row) => row.rating,
      id: "Rating",
      Cell: (row) => <Rating row={row} />,
      Header: "Rating",
      minWidth: "200px",
    },
    {
      accessor: (row) => row.stock,
      id: "Stock",
      cell: (info) => info.getValue(),
      Header: "Stock",
      width: 90,
    },
    {
      accessor: (row) => row.brand,
      id: "Brand",
      cell: (info) => info.getValue(),
      Header: "Brand",
      width: 125,
    },
    {
      accessor: (row) => row.category,
      id: "Category",
      cell: (info) => info.getValue(),
      Header: "Category",
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
    },
    {
      accessor: (row) => row.images,
      id: "Images",
      Cell: (row) =>
        row.row.original.images.map((image) => (
          <img src={image} alt="" width="35px" height="35px" />
        )),
      Header: "Images",
      width: 250,
    },
  ];
};
