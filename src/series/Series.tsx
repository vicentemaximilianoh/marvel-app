import React from "react";
import { connect } from "react-redux";

import { fetchSeries, setPage } from "./serieActions";
import MvlPage from "../shared/mvl-page/MvlPage";
import PageListItem from "../shared/mvl-page/page-list-item.model";
import Serie from "./serie.model";

function Series({ results, limit, total, fetchSeries, page, setPage, loading }: any) {

  let newResults: PageListItem[] = results.map((item: Serie): PageListItem => {
    return {
      title: item.title,
      imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`
    };
  });

  return (
    <MvlPage
      results={newResults}
      limit={limit}
      total={total}
      fetchData={fetchSeries} 
      setPage={setPage} 
      page={page}>
    </MvlPage>
  );
}

const mapStateToProps = (state: any) => {
  state = state.series;
  return {
    results: state.results,
    limit: state.limit,
    total: state.total,
    page: state.page,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchSeries: (page: any) => dispatch(fetchSeries(page)),
    setPage: (val: any) => dispatch(setPage(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Series);
