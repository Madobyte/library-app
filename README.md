# Library App
**by M. Bambalan**

**Technologies used:**
- Figma
- HTML5
- CSS3
  - Mobile Responsive Layout
  - Flex and Grid Layout
  - Animations and Transitions
  - FontAwesome
-Sass
  - Variables
  - Nesting
- Vanilla Javascript
  - Javascript modules
  - localStorage
  - CRUD

## Dev's Reflection
I realize that making this app will prove my **basic CRUD abilities**.
- **Create** - when adding the book
- **Read** - when displaying the book in cards
- **Update** - when editing the information of the card
- **Delete** - when removing the card entirely



## Checklist
- [x] Create a Beautiful GUI.
  - [x] Display a warning and a picture when no books are found.
  - [x] Add mobile responsiveness.
- [x] Add book using the `addBookBtn`.
  - [x] Use constructors and prototypes.
- [x] Adding book will `push` an entry to `myLibrary` array.
  - [ ] ~~Or submit into a JSON file.~~
  - [x] Or use HTML localStorage.
- [x] Adding books will display book 'cards' on `appBody`.
 - [x] Format book. Add proper capitalizations.
- [ ] Add a read or wish list status of the book.
- [x] Add the abilitiy to edit book card.
- [x] Add delete button to delete book.
  - [ ] Delete bin functionality.
  - [ ] Empty localStorage feature.
- [x] Add sorting method.
- [ ] Add a light and dark version of the app.

## Commits
**02/10/2021 - Initial Commit**
At the first day of development, I created most of the GUI in material design. I used FontAwesome and FlatIcon to up the looks and design.

The app's functionality is not yet accomplished. But I will continue to develop the app.

I started learning `Figma` for design mockups! See [mockup](https://www.figma.com/file/QM0sQxWJoXgchjIWP25ANi/Library-App?node-id=0%3A1).

**02/11/2021**
Added `handleInputChange` and `handleSubmit`.

~~Added `addBtn`. This works and pushes the input data to `myLibrary` array.~~

Used `localStorage` to store data. I anticipated the problem of not using unique keys when setting items to the `localStorage`. If I had gone with using the length of the localStorage for indexing, problems will surely arise when deleting an entry.

Added `removeBtn` and `editBtn`. `removeBtn` removes the card in the `#app-body` and removes the entry in the `localStorage`.

**02/12/2021**
Added edit functionality. Basic CRUD functionality was achieved!

Fixed some animations.

**02/13/2021**
Added sort functionality.

Added a proper capitalization when adding books.

Fixed some sorting bugs.

**This Project is part of The Odin Project Curriculum**