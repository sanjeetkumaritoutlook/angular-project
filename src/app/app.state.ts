//ng generate interface app.state
//globally accessible state
//by convention, its in root directory,within app folder
import { Book } from "./models/book";
export interface AppState {
    readonly book: Book[];  //immutable array of books
}

