import { type SchemaTypeDefinition } from 'sanity'
import topPicks from './topPicks'
import sale from './sale'
import ourBlog from './ourBlog';
import heroProducts from './heroProducts';
import herosec from './herosec';
import products from './products';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    topPicks,
    sale,
    ourBlog,
    heroProducts,
    herosec,
     products,
    
    ],
};
