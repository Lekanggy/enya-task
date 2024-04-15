export function truncateData (data:any){
 if(typeof(data) === 'string' && data.length > 20){
    const truncatedText = data.substring(0, 20) + '...';
    return truncatedText  
 }

 return data
}