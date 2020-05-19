//This is for my selected option
export const departments = [
 { value: 'Meat & Seafood', label: 'Meat & Seafood', name: "department" },
 { value: 'Produce', label: 'Produce', name: "department" },
 { value: 'Deli', label: 'Deli', name: "department" },
 { value: 'Bakery & Dessert', label: 'Bakery & Dessert', name: "department" }
];

export const checker = (value) => {
 let category;
 switch (value) {
  case 'Meat & Seafood':
   category = [
    { value: 'Prime Beef', label: 'Prime Beef', name: "category" },
    { value: 'Pork & Lamb', label: 'Pork & Lamb', name: "category" },
    { value: 'Seafood', label: 'Seafood', name: "category" },
    { value: 'Poultry', label: 'Poultry', name: "category" },
    { value: 'Meat', label: 'Meat' },
   ]
   break;
  case 'Produce':
   category = [
    { value: 'Fruit & Vegetable Trays', label: 'Fruit & Vegetable Trays', name: "category" },
    { value: 'Fruit', label: 'Fruit', name: "category" },
    { value: 'Vegetables', label: 'Vegetables', name: "category" },
    { value: 'Salad Mix', label: 'Salad Mix', name: "category" },
   ]
   break;
  case 'Deli':
   category = [
    { value: 'Meat & Cheese Trays', label: 'Meat & Cheese Trays', name: "category" },
    { value: 'Prepared Meals', label: 'Prepared Meals', name: "category" },
    { value: 'Prepared Soups & Salad', label: 'Prepared Soups & Salad', name: "category" },
    { value: 'Dips & Spreads', label: 'Dips & Spreads', name: "category" },
   ]
   break;
  case 'Bakery & Dessert':
   category = [
    { value: 'Bread', label: 'Bread', name: "category" },
    { value: 'Buns & Rolls', label: 'Buns & Rolls', name: "category" },
    { value: 'Cookies', label: 'Cookies', name: "category" },
    { value: 'Pies & Cakes', label: 'Pies & Cakes', name: "category" }
   ]
  default:
   break;
 }
 return category
}