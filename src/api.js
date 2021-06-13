const dataUrl = new URL('http://www.filltext.com/');
const searchParams = {
  rows: 32,
  id: '{number|1000}',
  firstName: '{firstName}',
  lastName: '{lastName}',
  email: '{email}',
  phone: '{phone|(xxx)xxx-xx-xx}',
  address: '{addressObject}&description={lorem|32}',
};

/**
 * Получение данных с сервера
 * @param {'small'|'big'} searchType  - Тип набора данных
 * @return {Promise<{}>} - Данные
 * */
export async function getData(searchType = 'small') {
  const params =
    searchType === 'small'
      ? searchParams
      : { ...searchParams, rows: 1000, delay: 3 };
  dataUrl.search = new URLSearchParams(params).toString();
  try {
    const res = await fetch(dataUrl, { method: 'GET', mode: 'no-cors' });
    return res.json();
  } catch (e) {
    throw e;
  }
}
