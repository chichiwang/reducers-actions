import NAME from './const/counter';

export default {
  increment: () => ({ type: NAME.INCREMENT_COUNTER }),
  decrement: () => ({ type: NAME.DECREMENT_COUNTER }),
};