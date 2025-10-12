import fs from 'fs/promises';
import path from 'path';

export async function getLocalData<T>(fileName: string): Promise<T> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', fileName);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data as T;
  } catch (error) {
    console.error(`Error reading or parsing data file ${fileName}:`, error);
    // Depending on the use case, you might want to return a default value
    // or re-throw the error. For this case, we'll return an empty array
    // to prevent the build from crashing on non-existent or malformed data.
    throw error;
  }
}