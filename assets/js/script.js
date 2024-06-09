fetch(
  // TODO: Add query parameters to the URL such that the number of issues returned is limited to 10.
  // TODO: Add a `sort` parameter to sort the issues by `createdAt` in descending order.
  // Hint: use & to join multiple query parameters. Use `=` to join key and value.
  'https://api.github.com/users/Hnin-Nu-Hlaing/repos?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
// Parameter explanation.
// The per_page parameter will limit the results base per page.
// The state parameter represents the current state of the issue. It can be open, closed, or all.
// Sort will order the results based on the parameter given, the date created, updated, or comments.
// Direction will determine the order of the sort.
