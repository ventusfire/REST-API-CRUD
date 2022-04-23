import {v2 as cloudinary} from 'cloudinary'
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET
} from '../config.js'

cloudinary.config({ 
  cloud_name: 'dudrqmp1i', 
  api_key: '658121667728546', 
  api_secret: 'lnwDts2SdL3zelF4owXaZHTlCtw',
  secure: true
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'replit'
  })
}

export async function deleteImage(publicId) {
  return await cloudinary.uploader.destroy(publicId)
}