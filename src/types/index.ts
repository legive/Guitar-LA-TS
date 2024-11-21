
export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};
 //Hereda Guitarra y le agrego cantidad
export type CartItem = Guitar &{
  
  quantity:number
}; 

//Hereda algunos elementos de Guitarra y le agrego cantidad
/* export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
  quantity:number
} */

//Hereda y omite algunos elementos de Guitarra y le agrego cantidad
/* export type CartItem = Omit<Guitar, 'id' | 'name' | 'price'> & {
  quantity:number
}
   */
  





//Hereda Guitarra  como interface y le agrego cantidad
// export interface CartItem extends Guitar{
  
//   quantity:number
// };

export type GuitarID=Guitar['id']

