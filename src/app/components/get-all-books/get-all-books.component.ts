import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-get-all-books',
  standalone: true,
  imports: [],
  templateUrl: './get-all-books.component.html',
  styleUrl: './get-all-books.component.css'
})
export class GetAllBooksComponent {
allbooks: [] | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit(){
    this.getAllBook();
  }
   getAllBook(){
    this.bookService.getAllBook().subscribe((res)=>
    { console.log(res);
      this.allbooks= res;
    })
   }
}

