import {Store} from 'pullstate';
import ProductData from '../utils/product';

const productStore = new Store<ProductData>({
  barcode_id: '',
  ean: '',
  name: '',
  image_link: '',
  user_id: '',
});
export default productStore;
