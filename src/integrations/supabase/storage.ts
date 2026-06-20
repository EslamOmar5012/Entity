import { supabase } from './client';

export async function uploadImage(
  bucketName: string,
  filePath: string,
  file: File
): Promise<string | null> {
  if (!supabase) return null;

  const { error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true,
    });

  if (error) {
    console.error('Error uploading image to Supabase storage:', error);
    return null;
  }

  // Retrieve public URL
  const { data } = supabase.storage
    .from(bucketName)
    .getPublicUrl(filePath);

  return data.publicUrl;
}
export async function getPublicImageUrl(bucketName: string, filePath: string): Promise<string | null> {
  if (!supabase) return null;
  const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
  return data.publicUrl;
}
