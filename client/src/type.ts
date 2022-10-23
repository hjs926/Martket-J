export interface Product {
  categorys: number;
  createdAt: string;
  description: string;
  images: string[];
  price: number;
  sold: number;
  title: string;
  updatedAt: string;
  views: number;
  _id: string;
  quantity: number;
}

export interface GetProduct {
  postSize: number;
  productInfo: Product[];
  success: boolean;
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
export interface userInfo {
  email: string;
  isAdmin: boolean;
  isAuth: boolean;
  name: string;
  role: number;
  _id: string;
}

export interface boardItem {
  name: string;
  content: string;
  createdAt: string;
  postId: string;
  title: string;
  updatedAt: string;
  _id: string;
}
export interface GetBoardItem {
  next: {
    page: number;
    limit: number;
  };
  previous: {
    page: number;
    limit: number;
  };
  results: boardItem[];
  totalIndex: number;
}
