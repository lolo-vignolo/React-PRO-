export type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'decreaseBy'; payload: { value: number } }
  | { type: 'reset' };

export const doIncreseAction = (value: number): CounterAction => ({
  type: 'increaseBy',
  payload: { value },
});

export const doDecreaseAction = (value: number): CounterAction => ({
  type: 'decreaseBy',
  payload: { value },
});

export const doResetAction = (): CounterAction => ({
  type: 'reset',
});
