import fs from 'fs'
import path from 'path'

//path.join(__dirname , 'certificates' ,'archivo.tex') 
//fs.readFileSync
export const optionsHttps = {
  key:  fs.readFileSync(path.join(__dirname , 'certificates' , 'private.key')),
  cert: fs.readFileSync(path.join(__dirname , 'certificates' , 'certificate.crt')), 
  ca:   fs.readFileSync(path.join(__dirname , 'certificates' , 'ca_bundle.crt'))  
};