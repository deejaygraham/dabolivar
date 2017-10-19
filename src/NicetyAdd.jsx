// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addNicety } from './redux/actionCreators';
import Header from './Header';
import DefaultInput from './styles/Forms';
import DefaultButton from './styles/Buttons';
import commaDeSeparate from './utils/commaSeparated';
import Loader from './Loader';

const Wrapper = styled.div`width: 100%;`;

const Content = styled.section`
  margin-top: 60px;
  &.content--flexi {
    display: flex;
    flex-wrap: wrap;
  }
`;

const AddForm = styled.form`
  &.content--form {
    width: 100%;
    @media all and (min-width: 720px) {
      width: 60%;
    }
    @media all and (min-width: 1200px) {
      width: 40%;
    }
  }
`;

const Feedback = styled.p`
  padding: 10px;
  background: rgba(239, 241, 243, 0.5);
  margin-top: 20px;
  opacity: 1;
  transition: all 0.2s ease-in-out;
  height: auto;
  &.is-hidden {
    opacity: 0;
    visibility: none;
    height: 0;
  }
`;

class NicetyAdd extends Component {
  state = {
    title: '',
    link: '',
    tags: '',
    supersecretword: '',
    isLoading: false,
    feedback: {
      message: '',
      exists: false
    }
  };

  props: {
    db: any,
    addNicety: Function
  };

  handleAdd(e) {
    e.preventDefault();
    this.setState({ isLoading: true, feedback: { message: '', exists: false } });
    this.props.db
      .collection('niceties')
      .add({
        title: this.state.title,
        link: this.state.link,
        tags: commaDeSeparate(this.state.tags),
        supersecretword: this.state.supersecretword,
        timeStamp: Date.now()
      })
      .then(() => {
        this.props.addNicety({
          title: this.state.title,
          link: this.state.link,
          tags: commaDeSeparate(this.state.tags),
          timeStamp: Date.now()
        });
        this.setState({
          isLoading: false,
          feedback: { message: 'Success! Nicety added.', exists: true },
          title: '',
          link: '',
          tags: ''
        });
      })
      .catch(error => {
        console.log('Firebase Error', error);
        this.setState({
          isLoading: false,
          feedback: {
            message: 'Oops, something bad happened. Are you sure you added a title and the SupersecretPassword?',
            exists: true
          }
        });
        this.setState({ isLoading: false });
      });
  }

  handleInputChange(type, value) {
    this.setState({ [type]: value });
  }

  render() {
    let loader;
    if (this.state.isLoading) {
      loader = <Loader />;
    } else {
      loader = '';
    }
    return (
      <Wrapper>
        <Header selectedLink={'add'} />
        <Content>
          <h3>Are you me?</h3>
          <h3>Did I tell you my SupersecretPassword?</h3>
          <p>If so, then add your nicety below ⬇</p>
        </Content>
        <Content className="content--flexi">
          <AddForm
            className="content--form"
            onSubmit={e => {
              this.handleAdd(e);
            }}
          >
            <DefaultInput
              placeholder="Title *required"
              type="text"
              onChange={e => {
                this.handleInputChange('title', e.target.value);
              }}
              value={this.state.title}
            />
            <DefaultInput
              placeholder="Link"
              type="text"
              onChange={e => {
                this.handleInputChange('link', e.target.value);
              }}
              value={this.state.link}
            />
            <DefaultInput
              placeholder="Tags (Comma Separated)"
              type="text"
              onChange={e => {
                this.handleInputChange('tags', e.target.value);
              }}
              value={this.state.tags}
            />
            <DefaultInput
              placeholder="SuperSecretPassword *required"
              type="password"
              onChange={e => {
                this.handleInputChange('supersecretword', e.target.value);
              }}
              value={this.state.supersecretword}
            />
            <Feedback className={!this.state.feedback.exists ? 'is-hidden' : ''}>
              {this.state.feedback.message}
            </Feedback>
            <DefaultButton className="button--submit" type="submit">
              Add to the list
            </DefaultButton>
          </AddForm>
          {loader}
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Function) => ({
  addNicety(nicety) {
    dispatch(addNicety(nicety));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NicetyAdd);
