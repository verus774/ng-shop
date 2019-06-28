import {LocalStorageService} from './local-storage.service';

describe('LocalStorageService', () => {
  const localStorageService = new LocalStorageService();
  const testKey = 'testKey';
  const testValue = 'testValue';

  beforeEach(() => {
    localStorageService.removeItem(testKey);
  });

  it('should create LocalStorageService', () => {
    expect(localStorageService).toBeTruthy();
  });

  it('should set and get value', () => {
    localStorageService.setItem(testKey, testValue);
    const valueFromStorage = localStorageService.getItem(testKey);
    expect(valueFromStorage).toBe(testValue);
  });

  it('should remove value', () => {
    localStorageService.setItem(testKey, testValue);
    localStorageService.removeItem(testKey);

    const valueFromStorage = localStorageService.getItem(testKey);

    expect(valueFromStorage).toBeNull();
  });

});
