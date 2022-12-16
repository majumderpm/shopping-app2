import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import useFetchApi from "../hooks/useFetchApi";

const Productdetails = () => {
  const { id } = useParams();


  const [item, setItem] = useState([]);

  //    
  // ===================== ****** 1st stape ****
  // const getItem = async () => {
  //   const res = await fetch(`https://resale-backend.vercel.app/products/${id}`);
  // console.log(res);
  // const data = await res.json();
  // console.log(data)
  // return data;
  // setItem(await res.json());
  // }

  useEffect(() => {
    const getItem = async () => {
      const data = await fetch(`https://resale-backend.vercel.app/products/${id}`).then(res => {
        return res.json();
      });
      setItem(data);
    }
    getItem();
  }, [id]);


  return (
    <>
      <h1>{item.title}</h1>
    </>
  );
};

export default Productdetails;