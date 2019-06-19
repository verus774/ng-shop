# Features
* product list
* product cart
* cart
  * total quantity
  * total sum
  * change product quantity
  * remove product
* colorize directive

## Task 3
* services
  * LocalStorageService
  * ConfigOptionsService
  * ConstantsService
  * GeneratorService
* select directive
* clear cart button
* ability to set product quantity from product card

## Task 4
* use built-in pipes in ProductComponent
* use OrderByPipe in CartListComponent

## Task 5
* products list (`/products-list`)
* product details (`/product/:productID`)
  * secondary router-outlet for product reviews
* cart (`/cart`)
* make order from cart (`/order`)
* AdminModule (lazy loading, canActivateGuard)
  * `/admin`
  * `/admin/products`
  * `/admin/product/add`
  * `/admin/product/edit:productID + resolve guard`
  * `/admin/orders`

## Task 6
* get products from json-server
* use HttpClient in ProductsService (Promise/Observable)
* add `core/interceptors/TimingInterceptor`
* add `core/services/AppSettingsService` (usage example in `layout/components/AboutComponent`)
