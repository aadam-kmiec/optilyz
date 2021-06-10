import { useState, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";

import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";
import ResultsList from "../components/ResultsList";
import Pagination from "../components/Pagination";

const MovieSearch = () => {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);
  const page = useRef(1);
  const methods = useForm();

  const { watch } = methods;
  const values = watch();

  const searchMovie = async () => {
    setLoading(true);
    const res = await (
      await fetch(
        `https://www.omdbapi.com/?s=${values.search}&apikey=${process.env.REACT_APP_API_KEY}&page=${page.current}`
      )
    ).json();

    setResults(res);
    setTimeout(() => setLoading(false), 400);
  };

  const handlePageChange = (newPage) => {
    page.current = newPage;
    searchMovie();
  };

  return (
    <Layout>
      <FormProvider {...methods}>
        <SearchForm onSearch={searchMovie} results={results?.Search} />
      </FormProvider>

      <ResultsList results={results?.Search} loading={loading} />

      {results?.Search && (
        <Pagination
          results={results}
          onChange={handlePageChange}
          resultsPerPage={10}
          page={page.current}
        />
      )}
    </Layout>
  );
};

export default MovieSearch;
