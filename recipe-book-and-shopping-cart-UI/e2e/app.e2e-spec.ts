import { RecipeBookAndShoppingCartUIPage } from './app.po';

describe('recipe-book-and-shopping-cart-ui App', function() {
  let page: RecipeBookAndShoppingCartUIPage;

  beforeEach(() => {
    page = new RecipeBookAndShoppingCartUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
