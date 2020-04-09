import React from "react";
import { connect } from "react-redux";

import { fetchSeries, setPage } from "./serieActions";
import Page from "../shared/page/Page";
import PageListItem from "../shared/page/page-list-item.model";
import Serie from "./serie.model";

function Series({ results, limit, total, fetchSeries, page, setPage, loading }: any) {

  let newResults: PageListItem[] = [];
  results.map((item: Serie): void => {
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
      fetchData={fetchSeries} 
      setPage={setPage} 
      page={page}>
    </Page>
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
