export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    "primary",
    "systematic",
    "universal",
    "digital",
    "multilingual",
    "fancy",
    "glamorous",
    "oldest",
    "international",
    "online",
    "old-fashioned",
    "classical",
    "public",
    "memorial",
    "geological",
    "scientific",
    "miscellaneous",
    "pictorial",
    "cathedral",
    "unclassified",
    "imoerial",
    "portable",
    "educational",
    "artistic",
    "triumph",
    "periodical",
    "panoramic",
    "mysterious",
    "private",
    "obnoxious",
    "antique",
    "electronic",
    "new",
    "local",
    "national",
    "state"
  ];

  const nouns = [
    "center",
    "room",
    "biblio",
    "collection",
    "material",
    "people",
    "archive",
    "collective",
    "world",
    "county",
    "union",
    "capital",
    "keeping",
    "study",
    "hoard",
    "library",
    "store",
    "club",
    "books",
    "space",
    "copies",
    "display",
    "record",
    "mania",
    "series",
    "section",
    "volume",
    "browsing",
    "data"
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
