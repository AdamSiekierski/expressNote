# expressNote
Project  made for learning REST API's. Made with Express.js and MySQL database. 
### Run
- Install all dependencies
```
yarn
```
- Run server
```
yarn serve
```
### API routes
- Get all notes from database 
```http request
GET http://localhost:3333/api/notes
```
- Get a note by ID
```http request
GET http://localhost:3333/api/notes/:id
```
- Search for notes in database
```http request
GET http://localhost:3333/api/search?title=title&content=content
```
- Add a new note to database
```http request
POST http://localhost:3333/api/add, in request body pass title and content
```
