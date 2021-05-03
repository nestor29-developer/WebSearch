# Web Search
The app uses APIs from http://jsonplaceholder.typicode.com/ to populate the UI. Search functionality is to filter the posts fetched from API.
Autocomplete is enabled for the search input using the datalist technique. Furthermore, pagination is enabled on the site to improve the visibility of all the posts fetched from the API. 
The site has the following features:

- Pagination
- Responsive Design
- Autocomplete for Posts
- View the individual Article via read all
- Editing of body and title of posts saving them in cache

## Setup
In the project directory, you must run:

```sh
npm install
npm run dev
```

## Testing

```sh
npm test
```

## Optional if require to reload the bundle.js
npm run webpack -- --mode production --watch
