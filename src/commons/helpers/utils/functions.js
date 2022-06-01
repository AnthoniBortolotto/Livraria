export function treatTitle(title) {
  let treatedTitle = title;
  if (treatedTitle.length > 40) {
    treatedTitle = treatedTitle.substring(0, 40);
    treatedTitle += "...";
  }
  return treatedTitle;
}
