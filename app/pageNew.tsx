"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const searchHandle = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    response = await response.json();
    setData(response);
    console.log("response", response);
  };
  return (
    <>
      <h1 className="mt-7 text-5xl">E-Commerce App - Data</h1>
      <button
        className="border-2 border-black px-4 py-1 mt-5"
        onClick={searchHandle}
      >
        Search
      </button>
      <table className="mt-5 border-2 border-black">
        <tr className="mt-5 border-2 border-black">
          <th>Image</th>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
        </tr>
        {data.map((item, i) => {
          return (
            <tr key={i} className="mt-5 border-2 border-black">
              <td className="mt-5 border-2 border-black">
                <Image src={item.image} alt="" />
              </td>
              <td className="mt-5 border-2 border-black">{item.id}</td>
              <td className="mt-5 border-2 border-black">{item.title}</td>
              <td className="mt-5 border-2 border-black">{item.price}</td>
              <td className="mt-5 border-2 border-black">{item.description}</td>
              <td className="mt-5 border-2 border-black">{item.category}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
