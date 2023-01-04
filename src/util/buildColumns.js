import { createColumnHelper } from "react-table";

const columnHelper = createColumnHelper();

// Make some columns!
export const columns = [
  columnHelper.accessor((row) => row.id, {
    id: "id",
    cell: (info) => info.getValue(),
    header: () => <span>ID</span>,
    // footer: props => props.column.id,
  }),
  columnHelper.accessor((row) => row.title, {
    id: "title",
    cell: (info) => info.getValue(),
    header: () => <span>Title</span>,
    // footer: props => props.column.id,
  }),
  columnHelper.accessor((row) => row.description, {
    id: "description",
    cell: (info) => info.getValue(),
    header: () => <span>Description</span>,
    // footer: props => props.column.id,
  }),
  columnHelper.accessor((row) => `${"$" + parseFloat(row.price).toFixed(2)}`, {
    id: "price",
    cell: (info) => info.getValue(),
    header: () => <span>Price</span>,
    // footer: props => props.column.id,
  }),
  columnHelper.accessor((row) => row.discountPercentage + "%", {
    id: "discount",
    cell: (info) => info.getValue(),
    header: () => <span>Discount</span>,
    // footer: props => props.column.id,
  }),
  columnHelper.accessor((row) => row.rating, {
    id: "rating",
    cell: (info) => info.getValue(),
    header: () => <span>Rating</span>,
    // footer: props => props.column.id,
  }),
  columnHelper.accessor((row) => row.stock, {
    id: "stock",
    cell: (info) => info.getValue(),
    header: () => <span>Stock</span>,
    // footer: props => props.column.id,
  }),
  columnHelper.accessor((row) => row.brand, {
    id: "brand",
    cell: (info) => info.getValue(),
    header: () => <span>Brand</span>,
    // footer: props => props.column.id,
  }),
  columnHelper.accessor((row) => row.category, {
    id: "category",
    cell: (info) => info.getValue(),
    header: () => <span>Category</span>,
    // footer: props => props.column.id,
  }),
  columnHelper.accessor((row) => row.thumbnail, {
    id: "thumbnail",
    cell: (info) => info.getValue(),
    header: () => <span>Thumbnail</span>,
    // footer: props => props.column.id,
  }),
];
