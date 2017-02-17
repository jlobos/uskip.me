import test from 'ava'
import short from './index'

test('short', async t => {
  t.is(
    await short({ key: '9AoAAA', url: 'https://www.google.cl' }),
    'http://uskip.me/AdcDAA'
  )
})
