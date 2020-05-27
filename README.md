<img src="https://cdn.dribbble.com/users/232783/screenshots/5897974/ecommerce-page-faster-shopping-experience-dribbble-cover.gif" alt= "shopping-cart-rocket" width="31%"/> ![Costco](https://media.giphy.com/media/A7Jsc3LEcsDCg/giphy.gif) 

![Instacart-Costco](https://media.giphy.com/media/MF1XrtS1F0YrC21R3K/giphy.gif)

# Instacart-Costco

## Credits

SEI Team
- Juan Delgado [GitHub](https://www.github.com/JohnJoseph2019)
- Bianca Biagioni [GitHub](https://www.github.com/BiaCode9)
- Stefon Simmons [GitHub](https://www.github.com/StefonSimmons)
- Joshua Aponte [GitHub](https://www.github.com/Oruma1to)
- Abraham Tavarez [GitHub](https://www.github.com/AbeTavarez)

UX Team
- Caitlin Chen
- Lucas Zambelli
- Matt Zlotnick

### Description
A team effort to recreate the Instacart desktop and mobile application. Instacart is a grocery delivery and pick-up service. The team consists of 5 software engineers and 3 user experience (UX) designers.

The developers and designers of this recreation are in no way affiliated with Instacart or the product development teams of its partnered grocery stores.

- Please see the deployed site here: http://instacart-costco.surge.sh/

### Wireframes

>Desktop, mobile views of the Instacart-Costco app
>(via zeplin.io)

- https://scene.zeplin.io/project/5ea22f37e2fb2753ed7b8eb5

### MVP
- Build a functional server and database with an authentication feature 
- CRUD functionality on the homepage of a signed-in administrator
  - The ability to create, read, update and delete items on the database from the client/admin view
- 2 working categorical carousels to display all respective products on the homepage
- Search functionality of any product stored on our database from the homepage
- Content (JSX/HTML) and styling (CSS) resembling the wireframes provided to us by our UX collaborators. 
- Accessible "sign-up", "sign-in", and "homepage/storefront"
- Build an API and offer it for external viewing

### Post MVP

- customer and shopper functionality and views
  - shopping cart, items list, special instructions, preferences
- GPS functionality
- Animation for when an item is added for checkout that displays total quanity of items on the product selected and shopping cart icon.
- Add more products
- Write quality documentation for our API
- create more API endpoints


### Our API

> API consumed for 'Instacart', including API snippet.

| Deployed | Website                        | Query                                             |
| :---: | :----------------------------: | :------------------------------------------------:|
| API | ____https://instacart-costco.herokuapp.com/api/____     | ___/products___ |
| website | ____http://instacart-costco.surge.sh/____     | ___-___ |


API SNIPPET

```
{
  "_id": "5ebd6515fee18b5a6362384c",
  "name": "Kirkland Signature Mini Chocolate Chip Cookies",
  "brand": "Kirkland",
  "department": "Bakery & Desserts",
  "category": "Cookies",
  "imageURL": "https://d2d8wwwkmhfcva.cloudfront.net/600x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_33cf258a-1b53-43fd-9cbb-052a5175edb7.jpeg",
  "price": 4.89,
  "size": "60ct",
  "quantity": 19,
  "__v": 0,
  "createdAt": "2020-05-14T15:34:45.480Z",
  "updatedAt": "2020-05-14T15:34:45.480Z"
}
```




