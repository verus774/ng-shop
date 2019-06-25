export class OrderFormModel {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phones: string[],
    public address?: string,
  ) {
  }
}
