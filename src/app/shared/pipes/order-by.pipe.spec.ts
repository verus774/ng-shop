import {OrderByPipe} from './order-by.pipe';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  const test = [
    {name: 'aaa', price: 100},
    {name: 'ccc', price: 300},
    {name: 'bbb', price: 500},
  ];

  it('should create OrderByPipe', () => {
    expect(pipe).toBeTruthy();
  });

  describe('OrderByPipe - desc order', () => {

    it('should sort array by number prop', () => {

      const expected = [
        {name: 'bbb', price: 500},
        {name: 'ccc', price: 300},
        {name: 'aaa', price: 100},
      ];

      expect(pipe.transform(test, 'price')).toEqual(expected);
    });

    it('should sort array by string prop', () => {

      const expected = [
        {name: 'ccc', price: 300},
        {name: 'bbb', price: 500},
        {name: 'aaa', price: 100},
      ];

      expect(pipe.transform(test, 'name')).toEqual(expected);
    });
  });

  describe('OrderByPipe - asc order', () => {

    it('should sort array by number prop', () => {

      const expected = [
        {name: 'aaa', price: 100},
        {name: 'ccc', price: 300},
        {name: 'bbb', price: 500},
      ];

      expect(pipe.transform(test, 'price', false)).toEqual(expected);
    });

    it('should sort array by string prop', () => {

      const expected = [
        {name: 'aaa', price: 100},
        {name: 'bbb', price: 500},
        {name: 'ccc', price: 300},
      ];

      expect(pipe.transform(test, 'name', false)).toEqual(expected);
    });
  });

});
