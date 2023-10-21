// импортируем функцию createStore из Redux
import { createStore } from "redux";

// импортируем наш редьюсер
import reducer from "./reducer";

// создаем хранилище с помощью редьюсера
const store = createStore(reducer);

// экспортируем хранилище
export default store;
