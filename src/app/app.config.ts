import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { BookReducer } from "./books/book.reducer";
import { BookEffects } from "./books/book.effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ book: BookReducer }),
    provideEffects([BookEffects]),
    provideStoreDevtools(),
  ],
};
