import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAddBookComponent } from './components/post-add-book/post-add-book.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { AppModule } from './app/app.module';

export const routes: Routes = [
    {path:'books',component: PostAddBookComponent},
    {path:"",component:GetAllBooksComponent},
    {path:'books/:id',component: GetAllBooksComponent},
    {path:'books/:id',component: UpdateBookComponent},
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

