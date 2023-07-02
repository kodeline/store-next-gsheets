import axios from "axios";
import { Product } from "./types";
import Papa from "papaparse";

const URL: string = `https://docs.google.com/spreadsheets/d/e/2PACX-1vRyDB72WiSIF5buVIZqFUmgd7uknOpuwoG0oDV99Yfmy08Rb-QNkpGtjTNUZS5vZPY_JUzfLtGHEHps/pub?output=csv`;  

export default {
  list: async (): Promise<Product[]> => {
    return axios.get(URL, { responseType: "blob" })
      .then(response => {
        return new Promise<Product[]>((resolve, reject) => {
          Papa.parse(response.data, {
            header: true,
            complete: (results) => resolve(results.data as Product[]),
            error: (error) => reject(error.message),
           
          });
        })
      });
  },
};