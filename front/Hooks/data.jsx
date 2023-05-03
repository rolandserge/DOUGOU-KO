import React from "react";
import axios from "../Libs/axios";
import useSWR from "swr";

const useData = () => {
  const { data: produits } = useSWR("/api/produits", () =>
    axios.get("/api/produits").then((response) => response.data.data)
  );

  const { data: categories } = useSWR("/api/categories", () =>
    axios.get("/api/categories").then((response) => response.data.data)
  );

  return {
    produits,
    categories,
  };
};
export default useData;

export async function loadProduits() {
  const response = await axios.get("http://127.0.0.1/api/produits");

  return response;
}

export async function detailProduit(id) {
  const response = await axios.get(`http://127.0.0.1/api/detail-produit/${id}`);

  return response;
}
