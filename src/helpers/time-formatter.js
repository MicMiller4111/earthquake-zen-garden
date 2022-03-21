export function formatTime(unixTimeStamp) {
    var date = new Date(unixTimeStamp);
    return date.toLocaleString('default', { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'});
}