# MangaIndo-Scraper
Just a simple mangaindo scraper, no more

<p align="center">
<img alt="GitHub" src="https://img.shields.io/github/license/febryardiansyah/mangaindo-scraper"> 
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/febryardiansyah/mangaindo-scraper">
</p>

```bash
npm i mangaindo-scraper
```

## Example
1. Code
```javascript
const { Manga } = require("mangaindo-scraper");

Manga.getManga(1,1)
  .then((manga) => console.log(manga))
  .catch((err) => console.log(err));
```

2. Response
```json
{
    page: 1,
    total: 20,
    manga_list: [
        {
            title: "Peerless Soul",
            thumb: "https://i0.wp.com/komiku.co.id/wp-content/uploads/Manhua-Peerless-Soul.jpg?resize=450,235&quality=60",
            type: "Manhua",
            updated_on: "28 menit lalu Berwarna",
            endpoint: "peerless-soul/",
            chapter: "Chapter 146"
            },
        ]
}
```

for more example, you can check [here]("https://github.com/febryardiansyah/mangaindo-scraper/blob/master/sample.js")