import axios from "axios";
import { useEffect, useState } from "react";

export const getData = (query, variables = {}) => {
  const URL = "http://localhost:1337/graphql";

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const demo = async () => {
    try {
      setData(null);
      setError(false);
      setLoading(true);
      const response = await axios.post(URL, {
        query,
        variables,
      });
      const { data, error } = response;
      if (error) {
        setError(true);
        throw new Error(error.message);
      }
      setData(data.data);
    } catch (err) {
      setError(true);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    demo();
  }, []);

  return { data, error, loading };
};

// export const getData = (path, id = "") => {
//   const URL = "http://localhost:1337";
//   const [data, setData] = useState(id ? null : []);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const demo = async () => {
//     try {
//       setData(null);
//       setError(false);
//       setLoading(true);
//       const response = await axios.get(`${URL}/api/${path}/${id}?populate=*`);
//       const { data, error } = response;
//       if (error) {
//         setError(true);
//         throw new Error(error.message);
//       }
//       setData(data.data);
//     } catch (err) {
//       setError(true)
//       console.log(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     demo();
//   }, []);

//   return { data, error, loading };
// };
