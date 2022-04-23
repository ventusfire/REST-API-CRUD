import mongoose from 'mongoose'
import {MONGODB_URI} from '../config.js'

export async function connectToBD() {
  try{
    await mongoose.connect(MONGODB_URI);
    console.log('mongoDB is connected')
  } catch(err){
    console.error(err)
  }
}
