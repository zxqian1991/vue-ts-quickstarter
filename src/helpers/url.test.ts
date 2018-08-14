import { Ioc } from 'qzx-ioc';
import { PathHelper } from './url';
test('joinurl', () => {
    let path = Ioc<PathHelper>(PathHelper);
    expect(path.joinPath('/a/as/', '//path2', '/asdasd')).toBe('/a/as/path2/asdasd');
    expect(path.joinPath('/a/as/', '/path2', '/asdasd')).toBe('/a/as/path2/asdasd');
    expect(path.joinPath('/a/as/', '/path2', 'asdasd')).toBe('/a/as/path2/asdasd');
})
test('extname', () => {
    let path = Ioc<PathHelper>(PathHelper);
    expect(path.extname('/asd/as/das/d/asd/asd.sdddss')).toBe('.sdddss');
    expect(path.extname('asd.sdddss')).toBe('.sdddss');
    expect(path.extname('asd/asd.sdddss')).toBe('.sdddss');
})
test('basename', () => {
    let path = Ioc<PathHelper>(PathHelper);
    expect(path.basename('/asd/as/das/d/asd/asd.sdddss')).toBe('asd');
    expect(path.basename('asssd.sdddss')).toBe('asssd');
    expect(path.basename('asd/a大萨达sd.sdddss')).toBe('a大萨达sd');
})
test('dirname', () => {
    let path = Ioc<PathHelper>(PathHelper);
    expect(path.dirname('/a/v/d/f/t/ashd.sdddss')).toBe('/a/v/d/f/t');
    expect(path.dirname('asssd.sdddss')).toBe('');
    expect(path.dirname('asd/a大萨达sd.sdddss')).toBe('asd');
})