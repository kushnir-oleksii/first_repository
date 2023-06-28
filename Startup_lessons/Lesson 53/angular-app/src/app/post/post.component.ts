import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [`
  .post-body{
    max-width: 420px;
    background-color: #1d4343;
    padding: 20px;
    margin: 0 auto;
}
.post-title{
    text-align: center;
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 20px;
    background-color: #de9337;
    padding: 5px 0;
}
.post-text{
    border: dashed 1px #fff;
    padding: 10px;
    color: #f0f8ff ;
    font-size: 18px;
    letter-spacing: 1.5px;
}

  `]
})
export class PostComponent {
  title = 'High-Performance Computing';
  text = ' High-performance computing (HPC) is the ability to process data and perform complex calculations at high speeds. HPC is one of the most essential tools fueling the advancement of computational science.';
}

