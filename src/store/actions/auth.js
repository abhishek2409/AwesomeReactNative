import * as actions from './actionTypes';

export const tryAuth = (authData)=> {
  return {
    type:actions.TRY_AUTH,
    authData
  }
}
