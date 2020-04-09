import React from "react";
import { connect } from "react-redux";

import { fetchComics, setPage } from "./comicActions";
import Page from "../shared/page/Page";
import Comic from "./comic.model";
import PageListItem from "../shared/page/page-list-item.model";

function Comics({ results, limit, total, fetchComics, page, setPage, loading }: any) {

  let newResults: PageListItem[] = [];
  results.map((item: Comic): void => {
    newResults.push({
      title: item.title,
      imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`
    });
  });
  results = newResults;

  return (
    <Page 
      results={results}
      limit={limit}
      total={total}
      fetchData={fetchComics} 
      setPage={setPage} 
      page={page}>
    </Page>
  );
}

const mapStateToProps = (state: any) => {
  state = state.comics;
  return {
    results: state.results,
    total: state.total,
    limit: state.limit,
    page: state.page,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchComics: (page: any) => dispatch(fetchComics(page)),
    setPage: (val: any) => dispatch(setPage(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comics);
