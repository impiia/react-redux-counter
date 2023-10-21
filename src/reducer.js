// определяем типы действий
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const DOUBLE = "DOUBLE";

// определяем начальное состояние
const initialState = {
  count: 0
};

// определяем редьюсер
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DOUBLE:
      return {
          ...state,
          count: state.count * 2
      };
    case INCREMENT:
      // возвращаем новый объект с увеличенным значением count
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      // возвращаем новый объект с уменьшенным значением count
      return {
        ...state,
        count: state.count - 1
      };
    default:
      // возвращаем текущее состояние без изменений
      return state;
  }
};

// экспортируем редьюсер
export default reducer;
