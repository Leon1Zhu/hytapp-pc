import aesjs from 'aes-js';
const key = [ 2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
const encryption = (value) => {
  //  将文本转换为字节
  const textBytes = aesjs.utils.utf8.toBytes(value);

  //  计数器是可选的，如果省略则从1开始
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  const encryptedBytes = aesCtr.encrypt(textBytes);

  //  要打印或存储二进制数据，您可以将其转换为十六进制
  const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
  return encryptedHex;
}

const decrypt = (encryptedHex) => {
  //  准备解密十六进制字符串时，将其转换回字节
  const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
  //  计数器操作模式保持内部状态，所以
  //  解密新实例必须实例化。
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);

  //  将我们的字节转换回文本
  const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
  return decryptedText;
}

export default {
  encryption,
  decrypt
}
