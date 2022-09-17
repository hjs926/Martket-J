export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  quantity: number;
  amount: number;
}

export interface Product2 {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  quantity: number;
  amount: number;
}


export interface UploadProduct {
  id: string;
  images: string[];
  sold: number;
  views: number;
  writer: string;
  title: string;
  description: string;
  createdate: string;
  updatedate: string;
}

export interface CartPage {
  cartItems: Product[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

export interface SubmitLogin {
  userId: string;
  userPassword: string;
}
export interface SubmitSignup {
  userId: string;
  userPassword: string;
  userName: string;
}
