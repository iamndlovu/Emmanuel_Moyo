

class Book {
  constructor(title, language, hash, summary, links, tags) {
    this.title = title.toUpperCase();
    this.hash = hash;
    this.language = language.toLowerCase();
    this.summary = summary;
    this.links = [...links];
    this.tags = [...tags];
    this.DOMEl = this.build();
    this.parentEl = document.querySelector(`#${this.language}`);
    this.picEl = document.createElement('img');
    this.picEl.src = `img\/books\/${this.hash}`;
    this.picEl.title = `${this.title}`;
    this.picEl.alt = `${this.title}`;
    this.picEl.addEventListener('click', () => this.mountBook(this));
  }

  build() {
    const book = document.createElement('div'),
          bookTitle = `<section class=\"book-title\"><i/><h3>${this.title}</h3></section>`,
          bookSummary = `<article class=\"summary\">${this.summary}</article>`,
          bookCover = `<i class=\"book-cover-img\"><img src=\"img\/books\/${this.hash}\" title=\"${this.title}\" alt=\"${this.title} cover photo\"></i>`,
          bookLinks = document.createElement('section'),
          bookTags = document.createElement('section'),
          cancelBtn = document.createElement('div');

    this.links.forEach(link => {
      const {href, classList} = link;
      const linkEl = `<a href=\"${href}\"  class=\"book-link btn btn-info\"><i class=\"${classList}\"></a>`;
      bookLinks.innerHTML += linkEl;
    });

    this.tags.forEach(tag => {
      const tagEl = `<div class=\"tag bagde badge-warning\">${tag}</div>`;
      bookTags.innerHTML += tagEl;
    });

    bookTags.className = 'book-tags';
    bookLinks.className = 'book-links';
    cancelBtn.className = 'close btn btn-danger';
    cancelBtn.textContent = 'X';
    cancelBtn.addEventListener('click', () => this.unmountBook(this));

    book.innerHTML += bookTitle;
    book.appendChild(bookTags);
    book.innerHTML += bookCover + bookSummary;
    book.appendChild(bookLinks);
    book.appendChild(cancelBtn);
    book.className = 'book';
    return book;
  }

  mountPic() {
    this.parentEl.appendChild(this.picEl);
    console.log(`mounted cover ${this.title}`);
  }

  unmountPic(){
    this.parentEl.removeChild(this.picEl);
    console.log(`unmounted cover ${this.title}`);
  }

  mountBook(book) {
    elements.forEach(element => document.body.removeChild(element));
    document.body.appendChild(book.DOMEl);
    console.log(`mounted book ${book.title}`);
  }

  unmountBook(book) {
    elements.forEach(element => document.body.appendChild(element));
    document.body.removeChild(book.DOMEl);
    console.log(`unmounted book ${book.title}`);
  }
}