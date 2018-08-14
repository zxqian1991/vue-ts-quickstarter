import { MergeHelper } from './merge';
import { Ioc } from 'qzx-ioc';
test('深复制', () => {
    let merge = Ioc<MergeHelper>(MergeHelper);
    expect(JSON.stringify(merge.mergeDeep({
        objects: [
            {
                a: 10,
                b: 100,
                c: {
                    d: 10,
                    a: 34
                }
            }, {
                a: 23,
                b: 45,
                c: {
                    s: 23
                }
            }
        ]
    }))).toBe(JSON.stringify(
        {
            a: 23,
            b: 45,
            c: {
                d: 10,
                a: 34,
                s: 23
            }
        }
    ))
})