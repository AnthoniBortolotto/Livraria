export function treatTitle(title, width) {
  let treatedTitle = title;
  if (treatedTitle.length > 40) {
    treatedTitle = treatedTitle.substring(0, 40);
    treatedTitle += "...";
  }
  return treatedTitle;
}

export function treatAuthor(author, width) {
  return author;
  let treatedAuthor = author;
  if (treatedAuthor.length > 20) {
    treatedAuthor = treatedAuthor.substring(0, 20);
    treatedAuthor += "...";
  }
  return treatedAuthor;
}

export function scrollTo(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
}