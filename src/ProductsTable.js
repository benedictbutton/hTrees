import React from "react";
import { Table, useTheme2 } from "@grafana/ui";
import buildData from "./util/buildData";

const ProductsTable = (args) => {
  const theme = useTheme2();

  const data = buildData(args?.data, theme, {});

  return <Table {...args} data={data} />;
};

export default ProductsTable;
