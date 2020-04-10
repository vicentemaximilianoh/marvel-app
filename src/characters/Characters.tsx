import React from "react";
import { connect } from "react-redux";

import { fetchCharacters, setPage } from "./characterActions";
import MvlPage from "../shared/mvl-page/MvlPage";
import PageListItem from "../shared/mvl-page/page-list-item.model";
import Character from "./character.model";

function Characters({ results, limit, total, fetchCharacters, page, setPage, loading }: any) {

  let newResults: PageListItem[] = results.map((item: Character): PageListItem => {
    return {
      title: item.name,
      imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`
    };
  });

  return (
    <MvlPage 
      results={newResults}
      limit={limit}
      total={total}
      fetchData={fetchCharacters} 
      setPage={setPage} 
      page={page}>
    </MvlPage>
  );
}

const mapStateToProps = (state: any) => {
  state = state.characters;
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
    fetchCharacters: (page: any) => dispatch(fetchCharacters(page)),
    setPage: (val: any) => dispatch(setPage(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
