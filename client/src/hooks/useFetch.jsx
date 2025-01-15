import axios from "axios";
import { useEffect, useState } from "react";
import i18n from "../i18n";

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
      const { data, errors } = response.data;
      if (errors) {
        setError(true);
        throw new Error(errors.message);
      }
      setData(data);
    } catch (err) {
      setError(true);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true)
    setTimeout(demo,2000);
  }, [i18n.language]);

  return { data, error, loading };
};
