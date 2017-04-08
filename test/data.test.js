import fs from 'fs'
import expect from 'expect'
import BSON from 'bson'
const bson = new BSON()
import Data from '../src'

describe('Data',()=>{
  const PATH = __dirname+'/./data.bson'
  let data

  beforeEach(()=>{
    data = new Data({a:"a",b:"b"},PATH)
  })

  afterEach(() => {
    data.remove()
  })

  it('should be able to save',function(){
    const doc = {c:"c"}
    data.save(doc)
    expect(doc).toEqual(bson.deserialize(fs.readFileSync(PATH)))
  })

  it('should be able to merge',function(){
    const doc0 = {a:"a",b:"b"}
    const doc1 = {c:"c"}
    data.save(doc0)
    data.merge(doc1)
    expect({a:"a",b:"b",c:"c"}).toEqual(bson.deserialize(fs.readFileSync(PATH)))
  })

  it('should be able to load',function(){
    expect(data.load()).toEqual({a:"a",b:"b"})
  })

})