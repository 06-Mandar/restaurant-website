
const AllFood = {
    Italian: [
      { id: 1, foodName: "Margherita Pizza", price: 8.97, url: "food_image/italian/italian1.jpg", count: 0},
      { id: 2, foodName: "Lasagna", price: 7.14, url: "food_image/italian/italian2.jpg", count: 0},
      { id: 3, foodName: "Spaghetti Carbonara", price: 10.96, url: "food_image/italian/italian3.jpg", count: 0},
      { id: 4, foodName: "Risotto", price: 11.99, url: "food_image/italian/italian4.jpg", count: 0},
      { id: 5, foodName: "Tiramisu", price: 6.99, url: "food_image/italian/italian5.jpg", count: 0},
      { id: 6, foodName: "Pesto Pasta", price: 9.99, url: "food_image/italian/italian6.jpeg", count: 0},
      { id: 7, foodName: "Bruschetta", price: 5.99, url: "food_image/italian/italian7.jpg", count: 0},
      { id: 8, foodName: "Ravioli", price: 11.49, url: "food_image/italian/italian8.jpeg", count: 0},
      { id: 9, foodName: "Caprese Salad", price: 7.99, url: "food_image/italian/italian9.jpg", count: 0},
      { id: 10, foodName: "Focaccia", price: 4.99, url: "food_image/italian/italian10.jpeg", count: 0}
    ],
  
    Chinese: [
      { id: 11, foodName: "Kung Pao Chicken", price: 10.99, url: "food_image/chinese/chinese1.jpg", count: 0},
      { id: 12, foodName: "Sweet and Sour Pork", price: 9.99, url: "food_image/chinese/chinese2.jpg", count: 0},
      { id: 13, foodName: "Fried Rice", price: 7.99, url: "food_image/chinese/chinese3.jpeg", count: 0},
      { id: 14, foodName: "Spring Rolls", price: 5.99, url: "food_image/chinese/chinese4.jpg", count: 0},
      { id: 15, foodName: "Dumplings", price: 8.49, url: "food_image/chinese/chinese5.jpeg", count: 0},
      { id: 16, foodName: "Hot and Sour Soup", price: 6.99, url: "food_image/chinese/chinese6.jpg", count: 0}
    ],
  
    Mexican: [
      { id: 17, foodName: "Tacos", price: 8.99, url: "food_image/mexican/mexican1.jpg", count: 0},
      { id: 18, foodName: "Burritos", price: 9.99, url: "food_image/mexican/mexican2.jpg", count: 0},
      { id: 19, foodName: "Quesadillas", price: 7.99, url: "food_image/mexican/mexican3.jpg", count: 0},
      { id: 20, foodName: "Guacamole", price: 5.49, url: "food_image/mexican/mexican4.jpg", count: 0},
      { id: 21, foodName: "Churros", price: 4.99, url: "food_image/mexican/mexican5.jpg", count: 0},
      { id: 22, foodName: "Enchiladas", price: 10.49, url: "food_image/mexican/mexican6.jpg", count: 0}
    ],
  
    Indian: [
      { id: 23, foodName: "Butter Chicken", price: 12.99, url: "food_image/indian/indian1.jpg", count: 0},
      { id: 24, foodName: "Paneer Tikka", price: 10.49, url: "food_image/indian/indian2.jpeg", count: 0},
      { id: 25, foodName: "Biryani", price: 11.99, url: "food_image/indian/indian3.jpg", count: 0},
      { id: 26, foodName: "Samosa", price: 4.99, url: "food_image/indian/indian4.jpg", count: 0},
      { id: 27, foodName: "Chole Bhature", price: 9.49, url: "food_image/indian/indian5.jpg", count: 0},
      { id: 28, foodName: "Dal Makhani", price: 8.99, url: "food_image/indian/indian6.jpg", count: 0},
      { id: 29, foodName: "Masala Dosa", price: 7.99, url: "food_image/indian/indian7.jpg", count: 0},
      { id: 30, foodName: "Rogan Josh", price: 13.49, url: "food_image/indian/indian8.jpg", count: 0},
      { id: 31, foodName: "Pav Bhaji", price: 6.99, url: "food_image/indian/indian9.jpg", count: 0},
      { id: 32, foodName: "Aloo Gobi", price: 8.49, url: "food_image/indian/indian10.jpg", count: 0},
      { id: 33, foodName: "Tandoori Chicken", price: 11.49, url: "food_image/indian/indian11.jpg", count: 0},
      { id: 34, foodName: "Gulab Jamun", price: 5.99, url: "food_image/indian/indian12.jpg", count: 0}
    ],
  
    Japanese: [
      { id: 35, foodName: "Sushi", price: 14.99, url: "food_image/japanese/japanese1.jpeg", count: 0},
      { id: 36, foodName: "Ramen", price: 12.99, url: "food_image/japanese/japanese2.jpg", count: 0},
      { id: 37, foodName: "Tempura", price: 10.99, url: "food_image/japanese/japanese3.jpg", count: 0},
      { id: 38, foodName: "Teriyaki Chicken", price: 11.49, url: "food_image/japanese/japanese4.jpg", count: 0},
      { id: 39, foodName: "Udon", price: 9.99, url: "food_image/japanese/japanese5.jpg", count: 0},
      { id: 40, foodName: "Miso Soup", price: 4.99, url: "food_image/japanese/japanese6.jpeg", count: 0},
      { id: 41, foodName: "Sashimi", price: 15.99, url: "food_image/japanese/japanese7.jpg", count: 0},
      { id: 42, foodName: "Onigiri", price: 5.49, url: "food_image/japanese/japanese8.jpg", count: 0}
    ],
  
    Thai: [
      { id: 43, foodName: "Pad Thai", price: 11.99, url: "food_image/thai/thai1.jpg", count: 0},
      { id: 44, foodName: "Green Curry", price: 10.99, url: "food_image/thai/thai2.jpg", count: 0},
      { id: 45, foodName: "Tom Yum Soup", price: 8.99, url: "food_image/thai/thai3.jpg", count: 0},
      { id: 46, foodName: "Red Curry", price: 10.49, url: "food_image/thai/thai4.jpg", count: 0},
      { id: 47, foodName: "Massaman Curry", price: 12.49, url: "food_image/thai/thai5.jpg", count: 0},
      { id: 48, foodName: "Som Tum", price: 9.99, url: "food_image/thai/thai6.jpg", count: 0},
      { id: 49, foodName: "Mango Sticky Rice", price: 6.49, url: "food_image/thai/thai7.jpg", count: 0},
      { id: 50, foodName: "Thai Fried Rice", price: 8.49, url: "food_image/thai/thai8.jpeg", count: 0},
      { id: 51, foodName: "Panang Curry", price: 11.49, url: "food_image/thai/thai9.jpeg", count: 0},
      { id: 52, foodName: "Thai Iced Tea", price: 3.99, url: "food_image/thai/thai10.jpg", count: 0}
    ],
  
    French: [
      { id: 53, foodName: "Croissant", price: 2.99, url: "food_image/french/french1.jpeg", count: 0},
      { id: 54, foodName: "Coq au Vin", price: 15.99, url: "food_image/french/french2.jpeg", count: 0},
      { id: 55, foodName: "Ratatouille", price: 10.49, url: "food_image/french/french3.jpeg", count: 0},
      { id: 56, foodName: "Bouillabaisse", price: 18.99, url: "food_image/french/french4.jpg", count: 0},
      { id: 57, foodName: "Quiche Lorraine", price: 8.99, url: "food_image/french/french5.jpg", count: 0},
      { id: 58, foodName: "Crepes", price: 5.49, url: "food_image/french/french6.jpg", count: 0},
      { id: 59, foodName: "Boeuf Bourguignon", price: 16.99, url: "food_image/french/french7.jpg", count: 0},
      { id: 60, foodName: "Cassoulet", price: 14.99, url: "food_image/french/french8.jpg", count: 0},
      { id: 61, foodName: "Soufflé", price: 6.99, url: "food_image/french/french9.jpeg", count: 0},
      { id: 62, foodName: "Tarte Tatin", price: 7.99, url: "food_image/french/french10.jpg", count: 0},
      { id: 63, foodName: "Escargots", price: 12.49, url: "food_image/french/french11.jpeg", count: 0},
      { id: 64, foodName: "Duck à l'Orange", price: 17.99, url: "food_image/french/french12.jpg", count: 0},
      { id: 65, foodName: "Salade Niçoise", price: 11.49, url: "food_image/french/french13.jpeg", count: 0},
      { id: 66, foodName: "Pain au Chocolat", price: 3.49, url: "food_image/french/french14.jpg", count: 0}
    ],
  
    Greek: [
      { id: 67, foodName: "Moussaka", price: 11.99, url: "food_image/greek/greek1.jpeg", count: 0},
      { id: 68, foodName: "Souvlaki", price: 9.99, url: "food_image/greek/greek2.jpeg", count: 0},
      { id: 69, foodName: "Tzatziki", price: 4.99, url: "food_image/greek/greek3.jpeg", count: 0},
      { id: 70, foodName: "Spanakopita", price: 7.49, url: "food_image/greek/greek4.jpeg", count: 0},
      { id: 71, foodName: "Greek Salad", price: 6.99, url: "food_image/greek/greek5.jpg", count: 0},
      { id: 72, foodName: "Baklava", price: 5.99, url: "food_image/greek/greek6.jpg", count: 0}
    ],
  
    American: [
      { id: 73, foodName: "Cheeseburger", price: 8.99, url: "food_image/american/american1.jpg", count: 0},
      { id: 74, foodName: "Fried Chicken", price: 9.49, url: "food_image/american/american2.jpeg", count: 0},
      { id: 75, foodName: "Apple Pie", price: 4.99, url: "food_image/american/american3.jpg", count: 0},
      { id: 76, foodName: "Hot Dog", price: 3.99, url: "food_image/american/american4.jpg", count: 0},
      { id: 77, foodName: "Buffalo Wings", price: 7.99, url: "food_image/american/american5.jpg", count: 0},
      { id: 78, foodName: "Mac and Cheese", price: 6.49, url: "food_image/american/american6.jpg", count: 0},
      { id: 79, foodName: "Pancakes", price: 5.49, url: "food_image/american/american7.jpg", count: 0},
      { id: 80, foodName: "BBQ Ribs", price: 12.99, url: "food_image/american/american8.jpeg", count: 0}
    ],
  
    "Middle Eastern": [
      { id: 81, foodName: "Hummus", price: 4.99, url: "food_image/middle_eastern/me1.jpg", count: 0},
      { id: 82, foodName: "Falafel", price: 6.99, url: "food_image/middle_eastern/me2.jpg", count: 0},
      { id: 83, foodName: "Shawarma", price: 9.49, url: "food_image/middle_eastern/me3.jpg", count: 0},
      { id: 84, foodName: "Baba Ganoush", price: 5.99, url: "food_image/middle_eastern/me4.jpg", count: 0},
      { id: 85, foodName: "Tabbouleh", price: 7.49, url: "food_image/middle_eastern/me5.jpg", count: 0},
      { id: 86, foodName: "Kofta", price: 8.99, url: "food_image/middle_eastern/me6.jpg", count: 0},
      { id: 87, foodName: "Baklava", price: 4.49, url: "food_image/middle_eastern/me7.jpg", count: 0},
      { id: 88, foodName: "Kebabs", price: 11.49, url: "food_image/middle_eastern/me8.jpg", count: 0},
      { id: 89, foodName: "Dolma", price: 6.49, url: "food_image/middle_eastern/me9.jpg", count: 0}
    ],
  
    Spanish: [
      { id: 90, foodName: "Paella", price: 13.99, url: "food_image/spanish/spanish1.jpg", count: 0},
      { id: 91, foodName: "Tapas", price: 10.99, url: "food_image/spanish/spanish2.jpg", count: 0},
      { id: 92, foodName: "Churros", price: 5.49, url: "food_image/spanish/spanish3.jpg", count: 0},
      { id: 93, foodName: "Gazpacho", price: 6.99, url: "food_image/spanish/spanish4.jpeg", count: 0},
      { id: 94, foodName: "Tortilla Española", price: 7.99, url: "food_image/spanish/spanish5.jpeg", count: 0},
      { id: 95, foodName: "Patatas Bravas", price: 4.99, url: "food_image/spanish/spanish6.jpg", count: 0},
      { id: 96, foodName: "Crema Catalana", price: 6.49, url: "food_image/spanish/spanish7.jpeg", count: 0}
    ]
  };
  
  export default AllFood;
  