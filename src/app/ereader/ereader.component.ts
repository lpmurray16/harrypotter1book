import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-ereader',
  templateUrl: './ereader.component.html',
  styleUrls: ['./ereader.component.scss']
})
export class EReaderComponent implements OnInit {
  pages = [
    { imgUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/68d0af62838965.5a9dd3fcbb106.png', title: 'Harry Potter and the Sorcerer\'s Stone', pageText: 'By JK Rowling', isTitlePage: true },
    { imgUrl: 'assets/img2.jpg', title: 'Page 2 Title', pageText: 'Page 2 Content' },
    { imgUrl: 'assets/img3.jpg', title: 'Page 3 Title', pageText: 'Page 3 Content' }
  ];
  currentPage = 0;

  ngOnInit(): void {
    this.showPage(this.currentPage);
  }

  showPage(pageIndex: number): void {
    this.currentPage = pageIndex;
  }

  nextPage(): void {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage++;
      this.showPage(this.currentPage);
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.showPage(this.currentPage);
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.nextPage();
    } else if (event.key === 'ArrowLeft') {
      this.previousPage();
    }
  }

  startX = 0;
  endX = 0;

  @HostListener('touchstart', ['$event'])
  handleTouchStart(event: TouchEvent): void {
    this.startX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  handleTouchEnd(event: TouchEvent): void {
    this.endX = event.changedTouches[0].clientX;
    if (this.startX > this.endX + 50) {
      this.nextPage();
    } else if (this.startX < this.endX - 50) {
      this.previousPage();
    }
  }
}
