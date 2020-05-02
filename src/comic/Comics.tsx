import React from "react";
import { connect } from "react-redux";

import { fetchComics, setPage } from "./comicActions";
import MvlPage from "../shared/mvl-page/MvlPage";
import Comic from "./comic.model";
import PageListItem from "../shared/mvl-page/page-list-item.model";

function Comics({ results, limit, total, fetchComics, page, setPage, loading }: any) {

  let newResults: PageListItem[] = results.map((item: Comic): PageListItem => {
    return {
      title: item.title,
      imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`
    };
  });

  return (
    <MvlPage 
      title="Comics"
      results={newResults}
      limit={limit}
      total={total}
      fetchData={fetchComics} 
      setPage={setPage} 
      page={page}>
    </MvlPage>
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
