import Image from "next/image";

const searchHandle = async () => {
  let response = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 },
  });
  response = await response.json();
  console.log("response", response);
  return response;
};

export default async function Home() {
  let data = await searchHandle();
  return (
    <>
      <h1 className="mt-7 text-5xl">E-Commerce App - Data</h1>

      <h1 className="text-4xl my-6">Products</h1>
      {data.length ? (
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
                  <img src={item.image} width={100} alt="" />
                </td>
                <td className="mt-5 border-2 border-black">{item.id}</td>
                <td className="mt-5 border-2 border-black">
                  {item.title.slice(1, 30)}
                </td>
                <td className="mt-5 border-2 border-black">{item.price}</td>
                <td className="mt-5 border-2 border-black">
                  {item.description.slice(1, 70)}
                </td>
                <td className="mt-5 border-2 border-black">{item.category}</td>
              </tr>
            );
          })}
        </table>
      ) : (
        (
          <h1 className="loder-container">
            <span className="loader"></span>
          </h1>
        ) && <h1 className="mt-5">No Data Found</h1>
      )}
    </>
  );
}
