import React from "react";
import axios from "axios";
import useSWR from "swr";
import axiosAuth from "../Libs/axios"

const useData = () => {

  const { data: categories } = useSWR("/api/categories", () =>
    axiosAuth.get("/api/categories").then((response) => response.data.data)
  );
  const { data: produits } = useSWR("/api/produits", () =>
  axiosAuth.get("/api/produits").then((response) => response.data.data)
);

    return {
      categories,
      produits
    };
};

export default useData;

export async function loadProduits() {

  const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produits`);

  return response;
}


export async function loadCommandes() {

    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/commandes`);

    return response

}