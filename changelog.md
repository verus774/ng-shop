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

## Task 7
* add `@ngrx` for orders (usage in `admin/ManageOrdersComponent`)
* add `@ngrx`, `@ngrx/entity`, `@ngrx/router-store` for products (usage in `admin/ManageProductsComponent`)

## Task 8
* add `orders/ProcessOrderComponent` with reactive form
* use builtin validators
* add custom `emailMatcher` validator (`orders/validators`)
* add/remove `phone` input field
* add validation messages
* get `eamil` validation messages from component class

## Task 9
* add integrated unit tests for `ProductComponent`, `ProductListComponent`, `ColorizeDirective`
* add integrated unit tests for `ProductsService`
* add isolated unit tests for `LocalStorageService`
* add isolated unit tests for `OrderByPipe`
* add shallow unit tests for `AppComponent`
* add npm command for generating test coverage
