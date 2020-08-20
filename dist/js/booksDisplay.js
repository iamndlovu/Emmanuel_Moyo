const categoryTitle = document.querySelectorAll('.category-title'),
      dropdownIcon = document.querySelectorAll('.dropdown-icon');

dropdownIcon.forEach(icon => {icon.addEventListener('click', toggleBooks)});
categoryTitle.forEach(title => title.addEventListener('click', toggleBooks));

//show or hide books
function toggleBooks(e) {
  const target = e.target;
  let language;

  //get language whose books we want to toggle
  if ((target.classList.contains('category-title')) || (target.classList.contains('dropdown-icon'))) {
    language = target.parentElement.id;

  } else if (target.classList.contains('dropdown-line')) {
    language = target.parentElement.parentElement.id;
  } else {
    return;
  }

  //select container and dropdown icon to toggle
  const booksContainer = document.querySelector(`#${language.toLowerCase()}`),
        icon = document.querySelector(`#${language} .dropdown-icon`);
  //toggle dropdown icon and container
  if (booksContainer.classList.contains('show')) {
    booksContainer.classList.remove('show');
    icon.classList.remove('show');

    setTimeout(() => {
      if (booksContainer.id == 'ndebele') ndebeleBooks.forEach(book => book.unmountPic());
     else if (booksContainer.id == 'english') englishBooks.forEach(book => book.unmountPic());
    }, 50);
    //emahlukanandlela.unmount();
  } else {
    booksContainer.classList.add('show');
    icon.classList.add('show');

    setTimeout(() => {
      if (booksContainer.id == 'ndebele') ndebeleBooks.forEach(book => book.mountPic());
     else if (booksContainer.id == 'english') englishBooks.forEach(book => book.mountPic());
    }, 400);
    //emahlukanandlela.mount();
  }
}