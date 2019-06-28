import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {Store} from '@ngrx/store';
import {of} from 'rxjs';

import {CategoryModel} from '../../models/category.model';
import {ProductsService} from '../../services/products.service';
import {ProductListComponent} from './product-list.component';
import {LocalStorageService} from '../../../core/services/local-storage.service';
import {StoreStub} from '../../../testing-helpers/store-stub';
import {ProductComponent} from '..';


const testProducts = [
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

const productsServiceStub: Partial<ProductsService> = {
  getProducts() {
    return of(testProducts);
  }
};

@Component({selector: 'app-product', template: ''})
class ProductStubComponent {
}

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let productsService: ProductsService;
  let fixture: ComponentFixture<ProductListComponent>;
  let productEls: DebugElement[];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ProductListComponent, ProductComponent],
      providers: [
        LocalStorageService,
        {provide: ProductsService, useValue: productsServiceStub},
        {provide: Store, useClass: StoreStub},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(ProductListComponent);

    productsService = fixture.debugElement.injector.get(ProductsService);
    component = fixture.componentInstance;

    fixture.detectChanges();

    productEls = fixture.debugElement.queryAll(By.css('app-product'));
  });

  it('should show products', async () => {
    await fixture.whenStable();
    expect(productEls.length).toEqual(3);
  });

});
