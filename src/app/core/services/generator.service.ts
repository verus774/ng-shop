import {InjectionToken} from '@angular/core';

export const RandomString5 = new InjectionToken<string>('RandomString5');

function GenerateNFactory(n: number = 1) {
  return (): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;

    return Array(n)
      .fill(null)
      .map(() => chars[Math.floor(Math.random() * charsLength)])
      .join('');
  };
}

export const GeneratorService = {
  provide: RandomString5,
  useFactory: GenerateNFactory(5)
};
