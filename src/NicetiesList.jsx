// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getNicetiesData } from './redux/actionCreators';
import Nicety from './Nicety';
import Loader from './Loader';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 60px;
  list-style: none;
`;

class NicetiesList extends Component {
  componentDidMount() {
    if (this.props.niceties.length === 0) {
      this.props.getNiceties(this.props.db);
    }
  }
  props: {
    niceties: Array<NicetyType>,
    getNiceties: Function,
    nicetiesSearchTerm: string,
    db: any
  };

  render() {
    let utilSpace;
    if (this.props.niceties.length > 0) {
      utilSpace = this.props.niceties
        .filter(
          (nicety: NicetyType) =>
            nicety.title.toUpperCase().indexOf(this.props.nicetiesSearchTerm.toUpperCase()) >= 0 ||
            nicety.tags.includes(this.props.nicetiesSearchTerm)
        )
        .reverse()
        .map((nicety: NicetyType, index: number) =>
          <Nicety key={nicety.title} nicety={nicety} position={this.props.niceties.length - index} />
        );
    } else {
      utilSpace = <Loader />;
    }
    return (
      <Wrapper>
        {utilSpace}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  const nicetiesData = state.nicetiesData ? state.nicetiesData : [];
  const nicetiesSearch = state.nicetiesSearchTerm ? state.nicetiesSearchTerm : '';
  return {
    niceties: nicetiesData,
    nicetiesSearchTerm: nicetiesSearch
  };
};

const mapDispatchToProps = (dispatch: Function) => ({
  getNiceties(firebaseDb) {
    dispatch(getNicetiesData(firebaseDb));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NicetiesList);
