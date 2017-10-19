// @flow

export type NicetyType = {
  title: string,
  link: string,
  tags: Array<string>,
  timeStamp: number
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare type ActionType = 'SET_NICETY_SEARCH_TERM' | 'ADD_NICETIES_DATA';

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action = ActionT<'SET_NICETY_SEARCH_TERM', string> | ActionT<'ADD_NICETIES_DATA', Array<Nicety>>;
