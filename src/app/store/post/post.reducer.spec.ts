import { postReducer, initialState } from './post.reducer';

describe('Post Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = postReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
