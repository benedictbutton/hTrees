import {
  DataFrame,
  FieldType,
  GrafanaTheme2,
  MutableDataFrame,
  FieldConfig,
} from "@grafana/data";
import { TableCellDisplayMode } from "@grafana/schema";
import { applyFieldOverrides } from "@grafana/data";
import { merge } from "lodash";
import { ThresholdsConfig, ThresholdsMode } from "@grafana/data";

function prepData(data: DataFrame[], theme: GrafanaTheme2) {
  return applyFieldOverrides({
    data: data,
    fieldConfig: {
      overrides: [],
      defaults: {},
    },
    theme,
    replaceVariables: (value: string) => value,
  });
}

const defaultThresholds: ThresholdsConfig = {
  steps: [
    {
      color: "yellow",
      value: -Infinity,
    },
    {
      color: "green",
      value: 50,
    },
  ],
  mode: ThresholdsMode.Absolute,
};

const buildData = (
  tableData: DataFrame[],
  theme: GrafanaTheme2,
  config: Record<string, FieldConfig>
): DataFrame => {
  const data = new MutableDataFrame({
    fields: [
      {
        name: "ID",
        type: FieldType.number,
        values: [],
        config: {
          decimals: 0,
          custom: {
            align: "center",
            width: 80,
          },
        },
      },
      {
        name: "Title",
        type: FieldType.string,
        values: [],
        config: {
          custom: {
            align: "center",
            width: 200,
          },
        },
      },
      {
        name: "Description",
        type: FieldType.string,
        values: [],
        config: {
          custom: {
            align: "center",
            width: 250,
          },
        },
      },
      {
        name: "Price",
        type: FieldType.number,
        values: [],
        config: {
          unit: "currencyUSD",
          decimals: 2,
          custom: {
            align: "center",
            width: 125,
          },
        },
      },
      {
        name: "Discount",
        type: FieldType.number,
        values: [],
        config: {
          unit: "percent",
          min: 0,
          max: 100,
          decimals: 2,
          custom: {
            align: "center",
            width: 100,
          },
        },
      },
      {
        name: "Rating",
        type: FieldType.number,
        values: [],
        config: {
          min: 0,
          max: 5,
          decimals: 2,
          custom: {
            align: "center",
            width: 150,
            displayMode: TableCellDisplayMode.GradientGauge,
            // displayValue: React,
          },
          thresholds: defaultThresholds,
        },
      },
      {
        name: "Stock",
        type: FieldType.number,
        values: [],
        config: {
          decimals: 0,
          custom: {
            align: "center",
            width: 80,
          },
        },
      },
      {
        name: "Brand",
        type: FieldType.string,
        values: [],
      },
      {
        name: "Category",
        type: FieldType.string,
        values: [],
      },
      {
        name: "Thumbnail",
        type: FieldType.string,
        values: [],
        config: {
          custom: {
            align: "center",
            width: 150,
            displayMode: TableCellDisplayMode.Image,
          },
        },
      },
      {
        name: "Images",
        type: FieldType.other,
        values: [],
        config: {
          custom: {
            align: "center",
            width: 150,
            displayMode: TableCellDisplayMode.JSONView,
            displayValue: Array,
          },
        },
      },
    ],
  });

  for (const field of data.fields) {
    field.config = merge(field.config, config[field.name]);
  }

  tableData?.source.map((obj) =>
    data.appendRow([
      obj.id,
      obj.title,
      obj.description,
      obj.price,
      obj.discountPercentage,
      obj.rating,
      obj.stock,
      obj.brand,
      obj.category,
      obj.thumbnail,
      obj.images,
    ])
  );

  return prepData([data], theme)[0];
};

export default buildData;
