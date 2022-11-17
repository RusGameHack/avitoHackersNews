function NormalDate({time}) {
    const unix_timestamp = time;
    const date = new Date(unix_timestamp * 1000);
    const day = (date.getDay() < 10) ? ("0" + date.getDay()): date.getDay();
    const month = (date.getMonth() < 10) ? ("0" + date.getMonth()) : date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = (date.getMinutes() < 10) ? ("0" + date.getMinutes()) : date.getMinutes();
    const seconds = (date.getSeconds() < 10) ? ("0" + date.getSeconds()) : date.getSeconds();
    const formattedTime = `${day}.${month}.${year}  ${hours}:${minutes}:${seconds}`;
    return (
      formattedTime
    );
}
export default NormalDate;

