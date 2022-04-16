import * as fromConfig from './config.actions';

describe('configConfigs', () => {
  it('should return an action', () => {
    expect(fromConfig.configConfigs().type).toBe('[Config] Config Configs');
  });
});
