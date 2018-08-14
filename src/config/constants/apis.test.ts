import { Ioc } from 'qzx-ioc';
import { ApisConstant } from './apis';
test('getUrl', () => {
    let apis: ApisConstant = Ioc<ApisConstant>(ApisConstant);
    expect(apis.getUrl('qianzhixiang', true, 'haha')).toBe('haha/qianzhixiang');
    expect(apis.getUrl('qianzhixiang', false, 'haha')).toBe('qianzhixiang');
    expect(apis.getUrl('qianzhixiang', true, '/asd/haha')).toBe('/asd/haha/qianzhixiang');
    expect(apis.getUrl('qianzhixiang', true, 'asd/haha')).toBe('asd/haha/qianzhixiang');
});