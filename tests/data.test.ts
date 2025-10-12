import { getLocalData } from '../lib/data';
import fs from 'fs/promises';
import path from 'path';

// Mock fs.readFile to avoid actual file system operations
jest.mock('fs/promises', () => ({
  readFile: jest.fn(),
}));

describe('getLocalData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should throw an error if the file does not exist', async () => {
    const fileName = 'non-existent-file.json';
    const errorMessage = 'File not found';

    // Configure the mock to simulate a file not found error
    (fs.readFile as jest.Mock).mockRejectedValue(new Error(errorMessage));

    // Expect the function to throw an error
    await expect(getLocalData(fileName)).rejects.toThrow(errorMessage);
  });
});
