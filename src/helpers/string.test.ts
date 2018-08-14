import { Ioc } from 'qzx-ioc';
import { StringHelper } from './string';
test('首字母大写测试', () => {
    let str_helper = Ioc<StringHelper>(StringHelper);
    expect(str_helper.capital('qianzhixiang')).toBe('Qianzhixiang');
})