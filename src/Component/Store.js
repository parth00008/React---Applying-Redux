import { configureStore} from "@reduxjs/toolkit";
import Crudslice from "./Crudslice";

export const Store = configureStore({
    reducer:{crud:Crudslice}
})