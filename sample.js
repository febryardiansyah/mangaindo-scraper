//import package
const { Manga, Chapter } = require("./src/index");

/**
 * Get ALl Manga that return 20 manga as default
 * use @params page to get other page manga list
 * use @params limit set manga length (default 20)
 * @type number
 */
Manga.getManga()
  .then((manga) => console.log(manga))
  .catch((err) => console.log(err));
Manga.getManga(1, 1)
  .then((manga) => console.log(manga))
  .catch((err) => console.log(err));

/**
 * Get detail of manga
 * @params endpoint is required, you have to pass it
 * @type string
 */
Manga.detailManga("apotheosis-indonesia")
  .then((manga) => console.log(manga))
  .catch((err) => console.log(err));

/**
 * Get Chapter
 * @params endpoint is required, you have to pass it
 */
Chapter.getChapter("apotheosis-chapter-608/")
  .then((chapter) => {
    console.log(chapter);
  })
  .catch((err) => console.log(err));
