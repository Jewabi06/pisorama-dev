import { keywords } from "./keywords.js";

function extractAmount(text) {
  const amount = text.match(/[\d,]+\.?\d*/);

  if (!amount) {
    return null;
  }

  return amount[0].replace(/,/g, "");
}

function extractDate(text) {
  const lower = text.toLowerCase();
  const date = new Date();

  const dateKeywords = [
    "today",
    "yesterday"
  ];

  let matchedKeyword = null;

  for (const keyword of dateKeywords) {
    if (lower.includes(keyword)) {
      matchedKeyword = keyword;
      break;
    }
  }

  if (matchedKeyword === "yesterday") {
    date.setDate(date.getDate() - 1);
  }

  if (matchedKeyword === "today") {
    date.setDate(date.getDate());
  }

  return {
    date: date.toISOString().split("T")[0],
    keyword: matchedKeyword
  };
}

function matchCategory(text) {
  const lower = text.toLowerCase();

  for (const category in keywords) {
    for (const keyword of keywords[category]) {
      if (lower.includes(keyword)) {
        return category;
      }
    }
  }

  return "Others";
}

function buildNote(text, amount, dateKeyword) {
  let note = text;

  if (amount) {
    note = note.replace(amount, "");
  }

  note = note.replace(/₱|php|pesos|peso|piso/gi, "");

  if (dateKeyword) {
    note = note.replace(new RegExp(dateKeyword, "gi"), "");
  }

  return note.replace(/\s+/g, " ").trim();
}

export function parseExpenseInput(text) {
  const amount = extractAmount(text);
  const { date, keyword } = extractDate(text);
  const category = matchCategory(text);
  const note = buildNote(text, amount, keyword);
  return { amount, category, date, note };
}