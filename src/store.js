// импортируем функцию configureStore из @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

// импортируем наш редьюсер
import reducer from "./reducer";

// создаем хранилище с помощью функции configureStore и передаем ей наш редьюсер
const store = configureStore({ reducer });

// экспортируем хранилище
export default store;
