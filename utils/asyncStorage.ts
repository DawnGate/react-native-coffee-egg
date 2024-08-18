import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeASData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
    throw new Error("Store data fail");
  }
};

export const storeObjectASData = async (key: string, value: Object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
    throw new Error("Store data fail");
  }
};

export const getASDataByKey = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (e) {
    console.error(e);
    throw new Error("Get data fail");
  }
};

export const getObjectASDataByKey = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error(e);
    throw new Error("Get data fail");
  }
};

export const deleteASDataByKey = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e);
    throw new Error("Delete data fail");
  }
};
