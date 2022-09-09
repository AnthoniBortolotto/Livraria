import react from "react";
import axios from "axios";
import Book from "../../../commons/components/pages/Book";
import { domain } from "../../../commons/helpers/utils/global";
import { useState, useEffect } from "react";
import { joinedBooks } from "../../../commons/helpers/utils/functions";

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  const books = await joinedBooks();
  const paths = [];

  books.map(({ img, author, genre, rating, title, isbn }, i) => {
    if (isbn && isbn != null) {
      paths.push({
        params: {
          book: `${isbn}`,
        },
      });
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let bookData = {};
  const itemList = [];

  bookData = await axios.get(
    `http://localhost:3001/livros/get/isbn/${params.book}`
  );
  bookData = await bookData.data[0];
  return {
    props: {
      livroBook: bookData === undefined ? null : bookData,
      carrousselItens: params.book === undefined ? null : params.book,
    },
  };
};

export default function PageBook({ livroBook, carrousselItens }) {
  const [carousel, setCarousel] = useState([
    {
      author: "Michael Schellhammer",
      bookformat: "Paperback",
      desc: "In the summer of 1779, British General Sir Henry Clinton launched one last attempt to gain control of the Hudson River, the most strategically important waterway during the American Revolution. The campaign involved all of George Washington's main Continental Army and most of the forces around New York City under Clinton's command, but ended without a major battle. Still, the summer saw plenty of action. American cavalry sparred with their British counterparts in eastern New York; thousands of militiamen resisted brutal British raids along the Connecticut coast, and Washington stunned the British with daring night bayonet attacks on the fortified posts of Stony Point and Paulus Hook. In the first thorough discussion of what some historians call \"the forgotten war,\" this study details the strategy, tactics, officers, soldiers, and spies that shaped this critical campaign, which helped set the stage for America's final victory in the Revolution.",
      genre:
        "History,Military,Military History,American Revolution,American Revolutionary War",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348787322l/13785030.jpg",
      isbn: "786468076",
      isbn13: "9780790000000",
      link: "https://goodreads.com/book/show/13785030-george-washington-and-the-final-british-campaign-for-the-hudson-river-1",
      pages: 226,
      rating: "4.67",
      reviews: 1,
      title:
        "George Washington and the Final British Campaign for the Hudson River, 1779",
      totalratings: 3,
      id: 60200,
    },
    {
      author: "Louisa Ellen Stein,Kristina Busse,Colin   Harvey",
      bookformat: "Paperback",
      desc: "The critically-acclaimed BBC television series ,Sherlock, (2010- ) re-envisions Sir Arthur Conan Doyle's detective for the digital age, joining participants in the active traditions of Sherlockians/Holmesians and fans from other communities, including science fiction, media, and anime. This collection explores the cultural intersections and fan traditions that converge in ,Sherlock, and its fandoms. Essays focus on the industrial and cultural contexts of ,Sherlock,'s release, on the text of ,Sherlock, as adaptation and transformative work, and on ,Sherlock,'s critical and popular reception. The volume's multiple perspectives examine Sherlock Holmes as an international transmedia figure with continued cultural impact, offering insight into not only the BBC series itself, but also into its literary source, and with it, the international resonance of the Victorian detective and his sidekick. Instructors considering this book for use in a course may request an examination copy here.",
      genre: "Nonfiction,Pop Culture,Fandom",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1340742618l/13785038.jpg",
      isbn: "786468181",
      isbn13: "9780790000000",
      link: "https://goodreads.com/book/show/13785038-sherlock-and-transmedia-fandom",
      pages: 241,
      rating: "3.55",
      reviews: 8,
      title: "Sherlock and Transmedia Fandom: Essays on the BBC Series",
      totalratings: 44,
      id: 60201,
    },
    {
      author: "Evan Torner,William J. White",
      bookformat: "Paperback",
      desc: "This collection of all-new essays approaches the topic of immersion as a product of social and media relations. Examining the premises and aesthetics of live-action and tabletop role-playing games, reality television, social media apps and first-person shooters, the essays take both game rules and the media discourse that games produce as serious objects of study. Scholars of social psychology, sociology, role-playing theory, game studies, and television studies all examine games and game-like environments like reality shows as interdependent sites of social friction and power negotiation. The ten essays articulate the importance of game rules in analyses of media products, and demonstrate methods that allow game rules to be seen in action during the process of play.",
      genre:
        "Sports and Games,Games,Nonfiction,Games,Role Playing Games,Games,Gaming",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348828844l/13785045.jpg",
      isbn: "786468343",
      isbn13: "9780790000000",
      link: "https://goodreads.com/book/show/13785045-immersive-gameplay",
      pages: 222,
      rating: "3.8",
      reviews: 0,
      title:
        "Immersive Gameplay: Essays on Participatory Media and Role-Playing",
      totalratings: 10,
      id: 60202,
    },
    {
      author: "Flint F. Johnson",
      bookformat: "Paperback",
      desc: "There are three archetypal and widespread Arthurian stories--the abduction of Guinevere, the Holy Grail, and Tristan. Through the author's painstaking research of the literature and comparative literature of the stories, and by studying the history, laws, and archaeology of the post-Roman period, a new methodology was found for approaching sources. This led to strong reasons for making a number of groundbreaking conclusions. Arthurian literature is a potential wealth of information on Arthur's Britain. More importantly, the nature of the holy grail has been in the grail literature and related materials all along.",
      genre: "Nonfiction,Mythology,Arthurian",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348889602l/13785057.jpg",
      isbn: "786468580",
      isbn13: "9780790000000",
      link: "https://goodreads.com/book/show/13785057-origins-of-arthurian-romances",
      pages: 227,
      rating: "2.33",
      reviews: 5,
      title:
        "Origins of Arthurian Romances: Early Sources for the Legends of Tristan, the Grail and the Abduction of the Queen",
      totalratings: 3,
      id: 60203,
    },
    {
      author: "Lewis Pulsipher",
      bookformat: "Paperback",
      desc: 'Many aspiring game designers have crippling misconceptions about the process involved in creating a game from scratch, believing a "big idea" is all that is needed to get started. But game design requires action as well as thought, and proper training and practice to do so skillfully. In this indispensible guide, a published commercial game designer and longtime teacher offers practical instruction in the art of video and tabletop game design. The topics explored include the varying types of games, vital preliminaries of making a game, the nuts and bolts of devising a game, creating a prototype, testing, designing levels, technical aspects, and assessing nature of the audience. With practice challenges, a list of resources for further exploration, and a glossary of industry terms, this manual is essential for the nascent game designer and offers food for thought for even the most experienced professional.',
      genre: "Games,Game Design,Nonfiction",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355925746l/13785117.jpg",
      isbn: "786469528",
      isbn13: "9780790000000",
      link: "https://goodreads.com/book/show/13785117-game-design",
      pages: 268,
      rating: "3.61",
      reviews: 3,
      title:
        "Game Design: How to Create Video and Tabletop Games, Start to Finish",
      totalratings: 36,
      id: 60204,
    },
    {
      author: "Anna Franklin,Andrea Neff",
      bookformat: "Paperback",
      desc: "Celebrate Midsummer-A Day of Warmth and Light, ,A Night of Fairy Folk and Magic ,Midsummer is one of the most ancient, widespread, and joyful Pagan festivals. The sun rises to the height of its power on the summer solstice, and Midsummer Eve is filled with fairy mischief and magic. Anna Franklin reveals the origins and customs of this enchanting holiday with: ,-Myths and lore: The gods and goddesses of Midsummer, rolling wheels, the Midsummer tree, circle dancing, and torchlight processions ,-Midsummer magic and divination: Fairy contact, spells, empowering magical tools with solstice sun energy, Midsummer Eve pillow divination ,-Traditional summertime treats: Elderflower Fritters, Gooseberry Fool, Coamhain Soup, Strawberry Wine, Heather Ale, Clary Sage Tea ,-Seasonal rituals: Rite of the Oak King and the Holly King, Cornish Flower Ritual, Witch Rite for Midsummer Day, Drawing Down the Sun ,-Midsummer herb craft: Gathering and drying herbs for magical oils, incenses, inks, and teas; herb recipes, from Amun Ra to Sun Goddess Oil ,- ,First Runner Up for the 2003 Coaltion of Visionary Resources (COVR) Award for Best Non-fiction Book ",
      genre:
        "Religion,Paganism,Witchcraft,Religion,Wicca,Spirituality,Religion,Nonfiction,Spirituality,New Age,Reference,Occult,Occult,Magick",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387669498l/137860.jpg",
      isbn: "738700525",
      isbn13: "9780740000000",
      link: "https://goodreads.com/book/show/137860.Midsummer",
      pages: 225,
      rating: "3.93",
      reviews: 6,
      title: "Midsummer: Magical Celebrations of the Summer Solstice",
      totalratings: 357,
      id: 60205,
    },
    {
      author: "Janice Brooks",
      bookformat: "Hardcover",
      desc: null,
      genre: null,
      img: null,
      isbn: "525664386",
      isbn13: "9780530000000",
      link: "https://goodreads.com/book/show/15201952-kings-and-queens",
      pages: 0,
      rating: "3",
      reviews: 0,
      title: "Kings and Queens: The Plantagenets of England",
      totalratings: 1,
      id: 71596,
    },
    {
      author: "Ben M. Baglio,Paul   Howard",
      bookformat: "Paperback",
      desc: "Mandy and James are excited to take part in a national fundraiser for animals. But how can they help? James has a great idea -- hold a gathering of pet rabbits. Owners can pay to join the group! But will there be enough members to make it a bunny bonanza?",
      genre: "Animals,Childrens,Fiction",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389152422l/1378660.jpg",
      isbn: "439230241",
      isbn13: "9780440000000",
      link: "https://goodreads.com/book/show/1378660.Bunny_Bonanza",
      pages: 128,
      rating: "3.77",
      reviews: 5,
      title: "Bunny Bonanza",
      totalratings: 60,
      id: 60209,
    },
    {
      author: "Kazik (Simha Rotem),Simha Rotem,Barbara Harshav",
      bookformat: "Paperback",
      desc: "\"In the first three days [of the Warsaw Ghetto uprising], the Germans didn't take a single Jew out of the buildings. After their attempts to penetrate the Ghetto had failed, they decided to spare themselves casualties by destroying it from outside with cannon and aerial bombings. A few days later the Ghetto was totally destroyed. . . . The 'streets' were nothing but rows of smoldering ruins. It was hard to cross them without stepping on charred bodies.\"â€”Kazik, When the Nazis decided to liquidate the Warsaw Ghetto in 1943, five hundred young Jewish fighters within the Ghetto rose up to defy them. With no weapons, no influence, and no experience in warfare, they managed to resist the Germans for almost a month. In the end, when the battle was lost, the surviving Jews were led out of the ruins through the sewers by a nineteen-year-old fighter known as Kazik. As head courier of the Jewish Fighting Organization (ZOB), which had planned and executed the uprising, Kazik spent the rest of the war helping to care for the several thousand Jews who still remained in Warsaw. This bookâ€”an extraordinary story of courage and perseveranceâ€”is Kazik's wartime memoir., In stark, spare detail, Kazik reports on the efforts to prepare for the defense of the Warsaw Ghetto, the calamitous battle with the Germans, and the rescue of the few Jews who were still alive after the Ghetto was destroyed. He describes how he assumed a false Aryan identity in order to pass through the city as he collected money and found hiding places for the survivors. Constantly on guard, fearful of informers, his life always in danger, he nevertheless plotted resourcefully to aid his fellow Jews. He tells how he joined the Poles during their ill-fated uprising against the Nazis in Warsaw in 1944, had further brushes with death assisting the Polish underground, and returned to Warsaw to watch its liberation by the Russian army., Suspenseful, moving, and remarkably heroic, Kazik's memoir is only the second source to be published on the Warsaw Ghetto Uprising. It will help demolish the image of Jews as submissive victims in the Holocaust.",
      genre:
        "World War II,Holocaust,Nonfiction,History,Autobiography,Memoir,Biography,War,World War II,History,European History,War,Judaism,Judaica",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348052434l/1378686.jpg",
      isbn: "300093764",
      isbn13: "9780300000000",
      link: "https://goodreads.com/book/show/1378686.Memoirs_of_a_Warsaw_Ghetto_Fighter",
      pages: 196,
      rating: "3.74",
      reviews: 18,
      title: "Memoirs of a Warsaw Ghetto Fighter",
      totalratings: 111,
      id: 60210,
    },
    {
      author: "WÅ‚odzimierz Borodziej,Barbara Harshav",
      bookformat: "Hardcover",
      desc: "The Warsaw Uprising of 1944, dramatically tells the largely unknown story of the Warsaw resistance movement during World War II. Desperate to free themselves from German military oppression but also hoping to show the advancing Soviets that they could not impose easy rule upon the citizens of Warsaw, the Poles launched an almost hopeless attack against the Germans on August 1, 1944.,Â Â Â Â Wlodzimierz Borodziej presents an evenhanded account of what is commonly considered the darkest chapter in Polish history during World War II. In only sixty-three days, the Germans razed Warsaw to the ground and 200,000 people, mostly civilians, lost their lives. The resultâ€”a heroic and historically pivotal turning pointâ€”meant that the Poles would lose both their capital and an entire generation. This concise account of the traumaâ€”little known to English-speaking readersâ€”will appeal to anyone interested in the history of World War II in general and is a must-read for students of Polish history in particular.",
      genre:
        "History,Cultural,Poland,Nonfiction,European Literature,Polish Literature,War,World War II",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328870687l/1378688.jpg",
      isbn: "299207307",
      isbn13: "9780300000000",
      link: "https://goodreads.com/book/show/1378688.The_Warsaw_Uprising_of_1944",
      pages: 196,
      rating: "3.88",
      reviews: 1,
      title: "The Warsaw Uprising of 1944",
      totalratings: 8,
      id: 60211,
    },
    {
      author: "Yayoi Ogawa",
      bookformat: "Paperback",
      desc: "Momo is at a crossroads. Sumire is heading to see Hasumi in Hong Kong again and is too preoccupied to notice him. Then his sister tells him that their parents are getting divorced and complains that Momo is not being of any help at all. Will Momo take matters into his own hands and decide to grow up once and for all?",
      genre:
        "Sequential Art,Manga,Romance,Manga,Josei,Sequential Art,Graphic Novels,Sequential Art,Comics,Fiction,Manga,Manga Romance,Drama,Comics Manga,Adult",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388961415l/13786.jpg",
      isbn: "1598161997",
      isbn13: "9781600000000",
      link: "https://goodreads.com/book/show/13786.Tramps_Like_Us_Volume_12",
      pages: 179,
      rating: "4.36",
      reviews: 14,
      title: "Tramps Like Us, Volume 12",
      totalratings: 633,
      id: 60212,
    },
    {
      author: "Dulce ChacÃ³n",
      bookformat: "Paperback",
      desc: "Dulce ChacÃ³n indaga en la memoria de un hombre que se resiste a la verdades a medias, y que con su familia sera testigo y protagonista de una historia que discurre paralela entre amos y sirvientes. Cielos de barro arranca con la intriga de un asesinato, que sera el hilo conductor de una narracion cargada de odios y de verguenzas, de opresiones y de sumisiones, pero tambien de pasion, de amor y de entrega. Como telon de fondo, el horror de la guerra y la posguerra, y una saga de vencedores y vencidos, para los que no todos los cielos son iguales.",
      genre: "Fiction",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1371045717l/1378736.jpg",
      isbn: "8408039628",
      isbn13: "9788410000000",
      link: "https://goodreads.com/book/show/1378736.Cielos_de_barro",
      pages: 304,
      rating: "3.92",
      reviews: 20,
      title: "Cielos de barro",
      totalratings: 218,
      id: 60213,
    },
    {
      author: "Jess Loren,Edward Swiderski",
      bookformat: "Paperback",
      desc: 'The complete guide to profiting from Pinterest! , Pinterest is today s hottest new social media platform and it s "perfect "for businesses with small marketing budgets. Capitalize on Pinterest today, and you ll build a devoted fan base that keeps you pinned at the top driving more sales, revenue, and profits for years to come! Two top social marketing experts show you exactly how to make Pinterest work for your company. They concisely explain how Pinterest works, how businesses are using it, and how to get started the right way fast! Case studies and specific techniques help you choose the best approach for "your "business and industry from crafts to hardware, and wedding planning to restaurants. Want free advertising and powerful viral marketing? Get it now, with "Pinterest for Business"! , LEARN HOW TO: , Make the right first moves after you ve signed up for Pinterest Master Pinterest s unique lingo and tools: pins, boards, following, repinning, and more Quickly set up your branded Pinterest business page Weave a visual statement that attracts users and convinces them to insert their own stories Understand Pinterest s demographics, pinpoint your targets, and captivate your audience Use Pinterest to show and tell, and leverage the powerful psychology of images Create a word-of-mouth Pinterest network that goes viral Win by pinning within Pinterest s most important categories Reach the power behind the pins Stand out on a crowded pinboard Use infographics to communicate more information and encourage more repinning Replace costly conventional advertising with inexpensive Pinterest campaigns Supercharge your Twitter and Facebook marketing by integrating Pinterest Understand Pinterest s etiquette and avoid its pitfalls"',
      genre: "Business,Nonfiction,Social Science,Social Media",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372047478l/13787426.jpg",
      isbn: "789749920",
      isbn13: "9780790000000",
      link: "https://goodreads.com/book/show/13787426-pinterest-for-business",
      pages: 224,
      rating: "2.64",
      reviews: 6,
      title:
        "Pinterest for Business: How to Pin Your Company to the Top of the Hottest Social Media Network",
      totalratings: 14,
      id: 60214,
    },
    {
      author: "George D. Rodger",
      bookformat: null,
      desc: "multilingual vegan phrase book, concentrating on foods,languages cover 95% of the world's population, including pictures, maps of the world's areas,third edition",
      genre: "Food and Drink,Vegan,Food and Drink,Vegetarian,Reference",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1183102289l/1378778._SX318_.jpg",
      isbn: "907337201",
      isbn13: "9780910000000",
      link: "https://goodreads.com/book/show/1378778.Vegan_Passport",
      pages: 0,
      rating: "4.61",
      reviews: 2,
      title: "Vegan Passport",
      totalratings: 23,
      id: 60215,
    },
    {
      author: "Mary Carroll Nelson,Miguel Ruiz",
      bookformat: "Paperback",
      desc: "A comprehensive guide to the foundations of Toltec wisdom, ,Beyond Fear, is essential reading for fans of Don Miguel Ruizâ€™s New York Times bestselling book, The Four Agreements, which has sold over 8 million copies and has been translated into 46 languages worldwide. Providing instruction in the basic elements of the Toltec spiritual practice, this collection of ceremonies, wisdom, and prophecies empowers readers to shed their fears, judgments, and guiltâ€”an essential step before practicing the Four Agreements.Â ",
      genre:
        "Spirituality,Self Help,Nonfiction,Philosophy,Self Help,Personal Development,Inspirational,Psychology",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372173461l/137881.jpg",
      isbn: "1571780386",
      isbn13: "9781570000000",
      link: "https://goodreads.com/book/show/137881.Beyond_Fear",
      pages: 224,
      rating: "4.12",
      reviews: 41,
      title:
        "Beyond Fear: A Toltec Guide to Freedom and Joy: The Teachings of Don Miguel Ruiz",
      totalratings: 1221,
      id: 60216,
    },
    {
      author: "Joseph R. Matthews",
      bookformat: "Paperback",
      desc: "Written for library managers, this volume explains and clarifies the practice of assessment at academic institutions. Armed with this information, the library manager will be better prepared to assess library services in the context of the library's impact on student learning outcomes and research productivity.",
      genre: "Nonfiction,Library Science,Librarianship,Science,Library Science",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348329424l/1379003.jpg",
      isbn: "1591585317",
      isbn13: "9781590000000",
      link: "https://goodreads.com/book/show/1379003.Library_Assessment_in_Higher_Education",
      pages: 146,
      rating: "3.55",
      reviews: 2,
      title: "Library Assessment in Higher Education",
      totalratings: 20,
      id: 60275,
    },
    {
      author: "Howard Sankey",
      bookformat: "Hardcover",
      desc: "Causation and Laws of Nature, is a collection of articles which represents current research on the metaphysics of causation and laws of nature, mostly by authors working in or active in the Australasian region. The book provides an overview of current work on the theory of causation, including counterfactual, singularist, nomological and causal process approaches. It also covers work on the nature of laws of nature, with special emphasis on the scientific essentialist theory that laws of nature are, at base, the fundamental dispositions or capacities of natural kinds of things. Because the book represents a good cross-section of authors currently working on these themes in the Australasian region, it conveys something of the interest and excitement of an active philosophical debate between advocates of several different research programmes in the area.",
      genre: null,
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348976344l/13788350.jpg",
      isbn: "792359143",
      isbn13: "9780790000000",
      link: "https://goodreads.com/book/show/13788350-causation-and-laws-of-nature",
      pages: 359,
      rating: "0",
      reviews: 0,
      title: "Causation and Laws of Nature",
      totalratings: 0,
      id: 60217,
    },
    {
      author: "Miguel Ruiz,Janet Mills",
      bookformat: "Paperback",
      desc: "In THE VOICE OF KNOWLEDGE, Miguel Ruiz reminds us of a profound and simple truth: The only way to end our emotional suffering and restore our joy I living is to stop believing in lies - mainly about ourselves. Based on ancient Toltec wisdom, this breakthrough book shows us how to recover our faith in the truth and return to our own common sense.,Ruiz changes the way we perceive ourselves, and the way we perceive other people. Then he opens the door to a reality that we once perceived when we were one and two years old - a reality of truth, love, and joy.",
      genre:
        "Spirituality,Self Help,Nonfiction,Philosophy,Self Help,Personal Development,Inspirational,Spirituality,New Age,Psychology,Audiobook,Health",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328698799l/137883.jpg",
      isbn: "1878424548",
      isbn13: "9781880000000",
      link: "https://goodreads.com/book/show/137883.The_Voice_of_Knowledge",
      pages: 234,
      rating: "4.14",
      reviews: 302,
      title: "The Voice of Knowledge: A Practical Guide to Inner Peace",
      totalratings: 7248,
      id: 60218,
    },
    {
      author: "G. Schirmer Inc.,Johann Sebastian Bach",
      bookformat: "Paperback",
      desc: "(Piano Collection). A fascinating anthology of the great solo piano versions of J.S. Bach's most beloved works. 26 transcriptions by celebrated pianist/composers including Brahms, Liszt, Busoni, Rachmaninoff and others.",
      genre: null,
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348792896l/13788689.jpg",
      isbn: "793568102",
      isbn13: "9780790000000",
      link: "https://goodreads.com/book/show/13788689-collected-transcriptions",
      pages: 228,
      rating: "5",
      reviews: 0,
      title:
        "Collected Transcriptions: Schirmer Library of Classics Volume 2044 Piano Solo",
      totalratings: 1,
      id: 60219,
    },
    {
      author: "Rick Tomaska,Q. David Bowers",
      bookformat: "Paperback",
      desc: "A Guide Book of Franklin & Kennedy Half Dollars is the 15th entry in Whitman's bestselling Bowers Series of numismatic reference books. Franklin & Keenedy half dollars are affordable favorites for collectors. Lavishly illustrated in full color, this book features high-resolution enlargements for important overdates and other varieties. Mintages, specifications, market values in multiple grades (including Full Bell Lines for Franklin halves), inside information on set registries, and buying tips add to the book's importance as a standard reference. The new updated and revised 2nd Edition will deepen your appreciation and make you a smarter buyer and collector of these popular U.S. coins.",
      genre: "Money,Numismatics",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387711439l/13788891.jpg",
      isbn: "794836666",
      isbn13: "9780790000000",
      link: "https://goodreads.com/book/show/13788891-a-guide-book-of-franklin-and-kennedy-half-dollars",
      pages: 278,
      rating: "4.5",
      reviews: 0,
      title: "A Guide Book of Franklin and Kennedy Half Dollars",
      totalratings: 2,
      id: 60220,
    },
  ]);
  // useEffect(() => {
  //   console.log(livroBook);
  // }, []);
  return <Book livro={livroBook} carroussel={carousel} />;
}
