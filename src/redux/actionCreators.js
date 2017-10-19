// @flow

import { SET_NICETY_SEARCH_TERM, ADD_NICETIES_DATA, ADD_NICETY } from './actions';

export const setNicetiesSearchTerm = (nicetySearchTerm: string) => ({
  type: SET_NICETY_SEARCH_TERM,
  payload: nicetySearchTerm
});

export const addNicetiesData = (nicetiesData: Array<NicetyType>) => ({
  type: ADD_NICETIES_DATA,
  payload: nicetiesData
});

export const addNicety = (nicety: NicetyType) => ({
  type: ADD_NICETY,
  payload: nicety
});

export const getNicetiesData = (db: any) => (dispatch: Function) => {
  db
    .collection('niceties')
    .orderBy('timeStamp', 'asc')
    .get()
    .then(querySnapshot => {
      const niceties = querySnapshot.docs.map(x => ({
        title: x.data().title,
        link: x.data().link,
        tags: x.data().tags,
        timeStamp: x.data().timeStamp
      }));
      dispatch(addNicetiesData(niceties));
    })
    .catch(error => {
      console.log('firebase error', error);
    });
};
