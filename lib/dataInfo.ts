export interface SkuLevelData {
  skuName: string;
  availability: {
    sales: string;
    prevSales?: string;
    changeSales?: number | null;

    outOfStock: string;
    prevStock?: string;
    changeStock?: number | null;

    totalInventory: string;
    prevInv?: string;
    changeInv?: number | null;
  };
  visibility: {
    averageRank: string;
    prevAvgRank?: string;
    changeAvgRank?: number | null;

    estTraffic: string;
    prevEstTraffic?: string;
    changeEstTraffic?: number | null;

    estImpressions: string;
    prevEstImpressions?: string;
    changeEstImpressions?: number | null;
  };
}

export const skuLevelDataList: SkuLevelData[] = [
  {
    skuName: "Protein Bar 100g",
    availability: {
      sales: "₹93,132.12",
      outOfStock: "1.68%",
      totalInventory: "931.9",
    },
    visibility: {
      averageRank: "3.2",
      estTraffic: "12,303",
      estImpressions: "25,005",
    },
  },
  {
    skuName: "Choco Bar 100g",
    availability: {
      sales: "₹8,526.32",
      prevSales: "₹7,012.72",
      changeSales: 2.4,

      outOfStock: "6.79%",
      prevStock: "3.28%",
      changeStock: 2.4,

      totalInventory: "679",
      prevInv: "328",
      changeInv: null,
    },
    visibility: {
      averageRank: "7",
      prevAvgRank: "4",
      changeAvgRank: 2.4,

      estTraffic: "3005",
      prevEstTraffic: "2960",
      changeEstTraffic: 2.4,

      estImpressions: "4231",
      prevEstImpressions: "3657",
      changeEstImpressions: 2.4,
    },
  },
  {
    skuName: "SKU 3",
    availability: {
      sales: "₹9313",
      outOfStock: "1.68%",
      totalInventory: "931.9",
    },
    visibility: {
      averageRank: "11",
      estTraffic: "1931.9",
      estImpressions: "931.9",
    },
  },
  {
    skuName: "SKU 4",
    availability: {
      sales: "₹0",
      outOfStock: "0",
      totalInventory: "0",
    },
    visibility: {
      averageRank: "0",
      estTraffic: "0",
      estImpressions: "0",
    },
  },
];
