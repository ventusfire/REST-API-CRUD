import app from './app.js'
import {connectToBD} from './utils/mongoose.js'


async function main(){
await connectToBD()
app.listen(2200)
console.log('server is runing on port 2200')

}
main()