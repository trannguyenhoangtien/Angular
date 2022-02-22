import { Component, OnInit } from '@angular/core';
import { PostApiService } from '../Services/post-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(private httpServerService: PostApiService) {}

  ngOnInit(): void {
    // this.httpServerService.getUsers(5).subscribe((data) => {
    //   console.log('data', data);
    // });

    const payload = { body: 'test', postId: 1 };
    this.httpServerService.postComments(payload).subscribe((data) => {
      console.log('post comment', data);
    });
  }
}
