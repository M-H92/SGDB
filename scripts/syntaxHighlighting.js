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
    case "AND":
    case "AS":
    case "AS":
    case "ASC":
    case "BEGIN":
    case "BEGIN":
    case "BY":
    case "CASCADE":
    case "CAST":
    case "COLUMN":
    case "CONSTRAINT":
    case "CREATE":
    case "CREATE":
    case "CREATE":
    case "CROSS":
    case "DATABASE":
    case "DECLARE":
    case "DECLARE":
    case "DELETE":
    case "DESC":
    case "DISTINCT":
    case "DROP":
    case "END":
    case "END":
    case "FOREIGN":
    case "FROM":
    case "FULL":
    case "FUNCTION":
    case "GROUP":
    case "IF":
    case "IN":
    case "INNER":
    case "INSERT":
    case "INTO":
    case "JOIN":
    case "KEY":
    case "LANGUAGE":
    case "LEFT":
    case "LIMIT":
    case "LIMIT":
    case "NOT":
    case "NULL":
    case "NUMERIC":
    case "ON":
    case "OR":
    case "ORDER":
    case "ORDER":
    case "OUTER":
    case "PLPGSQL":
    case "PRIMARY":
    case "PROCEDURE":
    case "REFERENCES":
    case "REPLACE":
    case "RIGHT":
    case "SELECT":
    case "SELECT":
    case "SET":
    case "TABLE":
    case "UNION":
    case "UPDATE":
    case "USE":
    case "VALUES":
    case "VIEW":
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
