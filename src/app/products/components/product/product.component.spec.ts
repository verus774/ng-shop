import {DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from '@angular/common';

import {ProductComponent} from './product.component';
import {ProductModel} from '../../models/product.model';
import {CategoryModel} from '../../models/category.model';
import {IProductQuantity} from '../../models/iproduct-quantity.model';

registerLocaleData(localeRu);

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  let buyDe: DebugElement;
  let nameEl: HTMLElement;

  const testProduct: ProductModel = {
    id: 1,
    name: 'Product 1',
    description: 'some product description',
    category: CategoryModel.ebooks,
    price: 100,
    isAvailable: true,
    updated: '2018-10-20T09:05:05.035Z',
    tags: ['tag1', 'tag2', 'tag3']
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent]
    });

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    component.product = testProduct;
    fixture.detectChanges();

    nameEl = fixture.debugElement.query(By.css('.product p:nth-child(2)')).nativeElement;
    buyDe = fixture.debugElement.query(By.css('.buy-btn'));
  });

  it('should create a component instance', () => {
    expect(component).toBeDefined();
  });

  it('should display product name', () => {
    expect(nameEl.textContent).toContain(testProduct.name);
  });

  it('should raise buy event when clicked', () => {
    const expectedProduct: IProductQuantity = {
      product: testProduct,
      quantity: 1,
    };
    let selectedProduct: IProductQuantity;

    component.buyProduct.subscribe((product: IProductQuantity) => (selectedProduct = product));
    buyDe.triggerEventHandler('click', null);

    expect(selectedProduct).toEqual(expectedProduct);
  });

});
