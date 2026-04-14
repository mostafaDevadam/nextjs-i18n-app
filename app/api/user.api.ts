import axios from "axios";
import { proxyFetch } from "../proxy";
import { getLocale } from "next-intl/server";
import { callApi } from "./callApi";

export const fetchData = async () => {
    const locale = await getLocale();


    /*const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await res.json();
    console.log("data", data);*/
    // proxyFetch("todos/1");
    /*  const response = await axios({
          baseURL: `https://jsonplaceholder.typicode.com/todos/1`,
          headers: {
              "Content-Type": "application/json",
              //"Authorization": `Bearer ${token}` || ""
              //"Authorization": `${token}` || "",
              'Accept-Language': locale, // Pass locale to backend
          },
          method: "GET",
         // data: body,
      },)
  
      console.log(response.data)*/


   /*const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/videos/all`, {
        headers: {
          "Content-Type": "application/json", 
        },
        adapter: 'fetch', // This tells Axios to use the native fetch API
        fetchOptions: {
            next: { revalidate: 60 }, // Now you can use Next.js caching options!
            cache: 'force-cache',
            
        }
    });

    console.log("response", response.data);
    return response.data*/

    /*const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/videos/all/public`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        next: { revalidate: 60 },
        cache: 'force-cache',
    });
    const data = await res.json();
    console.log("data", data);
    return data*/

    const res = await callApi("videos/all/public", "GET");
    console.log("res", res);
    return res

}