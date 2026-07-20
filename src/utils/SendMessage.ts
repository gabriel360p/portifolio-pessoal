
export function sendMessage(message:string){
    const urlWhatsappBase:string="https://wa.me/"
    const telephone:number=5584994686598
    const messageText:string=`?text=${encodeURIComponent(message)}`;
    const url:string= `${urlWhatsappBase+telephone+messageText}` 
    window.open(url,'_blank')
}