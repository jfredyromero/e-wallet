import { TransactionOriginPipe } from './transaction-origin.pipe';

describe('TransactionOriginPipe', () => {
  it('create an instance', () => {
    const pipe = new TransactionOriginPipe();
    expect(pipe).toBeTruthy();
  });
});
