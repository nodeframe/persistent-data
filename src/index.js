import BSON from 'bson'
import fs from 'fs'
import deepmerge from 'deepmerge'
const bson = new BSON()

const defaultPath = __dirname+'/./data.bson'

export default class Data {

  constructor(data,path=defaultPath){
    this.defaultData = data
    this.path = path
  }

  merge(data,options={}){
    this.load()
    const newData = deepmerge(this.data,data,options)
    fs.writeFileSync(this.path,bson.serialize(newData))
    return newData
  }

  load(){
    if(!fs.existsSync(this.path)){
      return this.save()
    }else{
      return this.data = bson.deserialize(fs.readFileSync(this.path))
    }
  }

  save(data){
    const newData = data||this.defaultData
    fs.writeFileSync(this.path,bson.serialize(newData))
    return newData
  }

  remove(){
    fs.unlink(this.path)
  }
}
