import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-add-book',
  standalone: true,
  imports: [],
  templateUrl: './post-add-book.component.html',
  styleUrl: './post-add-book.component.css'
})
export class PostAddBookComponent {
  postaddbook: any;
    constructor(private bookService:BookService, 
      private fb:FormBuilder) { }

      ngOnInit(){ 
        this.postaddbook= this.fb.group({
          id:[null,[Validators.required]],
          title:[null,[Validators.required]],
          author:[null,[Validators.required]]
        })
      }
    }
}
