/* 
Create a Restaurant class which have menu has its property that can hold all the food available in the Restaurant class.
// Create a method to display all the food available in the menu property
// Create a method to add new food item to the menu property
// Create a method to update availability key of a existing food details in the menu
// Create a method to delete a food item from the menu property

menu:{
 "chicken biriyani":{name:"Chicken biriyani", cuisine:"South Asia", type:"non veg", available:true}
}
*/

class Restaurant {
    menu={
        "chicken biriyani":{name:"Chicken biriyani", cuisine:"South Asia", type:"non veg", available:true}
       }

      
       displayMenu() {
        console.log(this.menu);
      }

    
        addItem(name, cuisine, type, available) {
            this.menu[name] = { name, cuisine, type, available };
        }

    
    updateAvail(name, avail) {
        if (this.menu[name]) {
          this.menu[name].available = avail;
        } else {
          console.log(`Food item not found`);
        }
      }

      
      deleteItem(name){
        if(this.menu[name]){
            delete this.menu[name]
      }
    }

}

const obj = new Restaurant()
//  obj.displayMenu()
obj.addItem('Chicken Noodles','Chinese','non veg',false)
obj.addItem('Veg Fried Rice','Chinese','veg',true)
obj.updateAvail('Chicken Noodles',true)
// obj.displayMenu()
// obj.deleteItem('Chicken Noodles')
// console.log(`
//     ---------------------------------
//     After deleting the item
//     ---------------------------------`);
obj.displayMenu()
