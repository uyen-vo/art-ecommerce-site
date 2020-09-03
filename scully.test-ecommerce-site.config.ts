import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "test-ecommerce-site",
  outDir: './dist/static',
  routes: {
    '/products/:productId': {
        type: 'json',
        productId: {
            url: 'http://localhost:4200/assets/products.json',
            property: 'id'
        }
    }
  }
};