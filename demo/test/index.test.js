
/*import {isNum} from '../main/main.js'

describe('测试webpack+babel集成到Karma中', function(){
  it('isNum() should work fine.',function(){
    expect(isNum(1)).toBe(true);
    expect(isNum('1')).toBe(false);
  })
});*/
/*describe('main.js:', function() {
  it('isNum() should work fine.', function() {
    expect(isNum(1)).toBe(true)
    expect(isNum('1')).toBe(false)
  })
})*/

import mainjs from '../main/main';
describe('测试webpack+babel集成到Karma中', () => {
  it('mainjs.isNum() should work fine.', () => {
    expect(isNum(1)).toBe(true);
    expect(isNum('1')).toBe(false);
  });
});
/*describe('main.js: ', function() {
  it('isNum() should work fine.', function() {
    expect(isNum(1)).toBe(true)
    expect(isNum('1')).toBe(false)
  })
})*/


