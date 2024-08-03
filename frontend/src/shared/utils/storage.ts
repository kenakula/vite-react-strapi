export const StorageKeys = {
  JWT_TOKEN: 'jwt-token',
};

export type TStorageKeys = keyof typeof StorageKeys;

export class Storage {
  public static write(key: TStorageKeys, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static clear(key: TStorageKeys): void {
    localStorage.removeItem(key);
  }

  public static read<T>(key: TStorageKeys): T | null {
    const value = localStorage.getItem(key);

    if (!value) return null;

    try {
      return JSON.parse(value);
    } catch (error) {
      console.error('Failed to parse storage item value: ', error);

      return null;
    }
  }
}
