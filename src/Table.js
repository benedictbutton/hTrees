import React from "react";
import {
  totalColumnsWidth,
  getTableProps, // table props from react-table
  getTableBodyProps, // table body props from react-table
  headerGroups, // headerGroups, if your table has groupings
  rows, // rows for the table based on the data passed
  prepareRow,
  useTable,
  useBlockLayout,
} from "react-table";
import { useStyles2, useTheme2 } from "@grafana/ui";
import { getTableStyles } from "@grafana/ui/dist/esm/components/Table/styles";

// import { getTableStyles } from "@grafana/ui";

const Table = ({ columns, data: productData }) => {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 20,
      width: 150,
      maxWidth: 500,
    }),
    []
  );

  const tableStyles = useStyles2(getTableStyles);

  console.log(tableStyles);

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow,
  } = useTable(
    {
      data: productData,
      columns,
      defaultColumn,
    },
    useBlockLayout
  );

  console.log("rows: ", rows);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className={tableStyles.row}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
// className={tableStyles.row}
