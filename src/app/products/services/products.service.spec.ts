import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';

import {ProductsService} from './products.service';
import {ProductModel} from '../models/product.model';
import {CategoryModel} from '../models/category.model';


const mockGetProductsResponse: ProductModel[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'some product description',
    category: CategoryModel.ebooks,
    price: 100,
    isAvailable: true,
    updated: '2018-10-20T09:05:05.035Z',
    tags: ['tag1', 'tag2', 'tag3']
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'some product description',
    category: CategoryModel.laptops,
    price: 200,
    isAvailable: true,
    updated: '2018-10-13T09:05:05.035',
    tags: ['tag1', 'tag2', 'tag3']
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'some product description',
    category: CategoryModel.mobile,
    price: 500,
    isAvailable: false,
    updated: '2018-06-30T09:05:05.035Z',
    tags: ['tag1', 'tag2', 'tag3']
  }
];
const productsUrl = 'http://localhost:3000/products';

describe('ProductsService', () => {
  let mockHttp: HttpTestingController;
  let productsService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });

    mockHttp = TestBed.get(HttpTestingController);
    productsService = TestBed.get(ProductsService);
  });

  afterEach(() => mockHttp.verify());

  it('should get products', () => {
    productsService.getProducts().subscribe((products: ProductModel[]) => {
      expect(products).toEqual(mockGetProductsResponse);
    });

    const mockRequest: TestRequest = mockHttp.expectOne(productsUrl);
    mockRequest.flush(mockGetProductsResponse);
  });

});
