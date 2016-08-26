
import test from 'ava'
import Uskip from '../lib/index'

const uskip = new Uskip('9AoAAA')

test.cb('short', t => {
  uskip.short('https://www.google.cl', (e, r) => {
    t.falsy(e)
    t.is(typeof r, 'string')
    t.end()
  })
})
