
export default {
  //날짜 포맷
  dateFormat : (dateNum: any) => {
    const date = new Date(dateNum*1000);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hour = ('0' + date.getHours()).slice(-2);
    const min = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    let result = '';
    if (dateNum !== 0) {
      result = year + '-' + month + '-' + day + '  ' + hour + ':' + min;
    }
    return result;
  },

  dateFormatHM : (dateNum: any) => {
    const date = new Date(dateNum*1000);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hour = ('0' + date.getHours()).slice(-2);
    const min = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    let result = '';
    if (dateNum !== 0) {
      result = hour + ':' + min;
    }
    return result;
  },
}