export const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

export const formatDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [year, month, day].map(formatNumber).join('-');
};

/**
 * 存储localStorage
 */
export const setLocalStorage = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getLocalStorage = name => {
  if (!name) return;
  return localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeLocalStorage = name => {
  if (!name) return;
  localStorage.removeItem(name);
};

export const remTopx = value => {
  let fontSize = getComputedStyle(document.documentElement)['font-size'];
  console.log(
    '当前根元素font-size:px -> :',
    parseInt(fontSize),
    '转化后font-size:',
    (parseInt(fontSize) * value) / 100
  );
  return (parseInt(fontSize) * value) / 100;
};
