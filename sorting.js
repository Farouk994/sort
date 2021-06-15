function sortedCategoriesForInsert(inputJson) {
  const categoryList = JSON.parse(inputJson);
  categoryList.sort((a, b) => {
    if (!a.parent_id) {
      return -1;
    }
    if (!b.parent_id) {
      return 1;
    }
    if (a.parent_id === b.id) {
      return 1;
    }
    if (b.id === a.parent_id) {
      return -1;
    }
  });
  const properJsonOutput = JSON.stringify(categoryList);
  return properJsonOutput;
}
