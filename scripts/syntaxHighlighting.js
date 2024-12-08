function applyColor(word) {
  if (word[0] == "'") {
    if (word[word.length - 1] == "'")
      return '<span class="string">' + word + "</span>";
    else {
      let tickIndex = 1;
      while (tickIndex < word.length && word[tickIndex] != "'") tickIndex++;
      tickIndex++;
      return (
        '<span class="string">' +
        word.slice(0, tickIndex) +
        "</span>" +
        word.slice(tickIndex)
      );
    }
  }

  let testword = word;
  if (word[0] == "\n") testword.slice(1);

  switch (testword) {
    case "ADD":
    case "ALTER":
    case "CASCADE":
    case "COLUMN":
    case "CONSTRAINT":
    case "CREATE":
    case "CROSS":
    case "DELETE":
    case "DISTINCT":
    case "DROP":
    case "FOREIGN":
    case "FULL":
    case "INNER":
    case "INTO":
    case "JOIN":
    case "KEY":
    case "LEFT":
    case "LIMIT":
    case "NOT":
    case "NULL":
    case "ON":
    case "OUTER":
    case "ORDER":
    case "PRIMARY":
    case "REFERENCES":
    case "RIGHT":
    case "SET":
    case "TABLE":
    case "USE":
    case "UNION":
    case "DATABASE":
    case "INSERT":
    case "UPDATE":
    case "VALUES":
    case "VIEW":
    case "AND":
    case "AS":
    case "ASC":
    case "BY":
    case "CAST":
    case "CREATE":
    case "DESC":
    case "FROM":
    case "GROUP":
    case "IN":
    case "LIMIT":
    case "NUMERIC":
    case "OR":
    case "ORDER":
    case "SELECT":
    case "WHERE":
      return '<span class="key-word">' + word + "</span>";
    default:
      return word;
  }
}

function colorationSyntaxique() {
  let codeBlocks = document.getElementsByClassName("code-snippet block sql");
  for (let i = 0; i < codeBlocks.length; i++) {
    let content = codeBlocks[i].innerHTML;
    let contentWordByWord = content.split(" ");
    for (let y = 0; y < contentWordByWord.length; y++) {
      contentWordByWord[y] = applyColor(contentWordByWord[y]);
    }
    codeBlocks[i].innerHTML = contentWordByWord.join(" ");
  }
}

colorationSyntaxique();
