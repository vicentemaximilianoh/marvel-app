import React from "react";
import { connect } from "react-redux";

import { fetchCharacters, setPage } from "./characterActions";
import MvlPage from "../shared/components/mvl-page/MvlPage";
import PageListItem from "../shared/components/mvl-page/page-list-item.model";
import Character from "./character.model";
import { hideModal, showModal } from "../shared/components/modal/modalActions";

function Characters({ results, limit, total, fetchCharacters, page, setPage, openModal, closeModal }: any) {

  let newResults: PageListItem[] = results.map((item: Character): PageListItem => {
    return {
      ...item,
      title: item.name,
      imgSrc: `${item.thumbnail.path}.${item.thumbnail.extension}`
    };
  });

  const onCloseModal = () => {
    closeModal();
    debugger
  }

  const headerModal = (<div>header</div>);
  const bodyModal = (<div>body</div>);
  const footerModal = (<div>footer</div>);

  const onClickItem = (item: any) => {
    console.log(item);
    
    openModal({
      title: 'test',
      onClose: onCloseModal,
      header: headerModal,
      body: bodyModal,
      footer: footerModal
    })
  }

  return (
    <MvlPage 
      title="Characters"
      results={newResults}
      limit={limit}
      total={total}
      fetchData={fetchCharacters} 
      setPage={setPage}
      onClickItem={onClickItem}
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
    setPage: (val: any) => dispatch(setPage(val)),
    openModal: (payload: any) => dispatch(showModal(payload)),
    closeModal: () => dispatch(hideModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
