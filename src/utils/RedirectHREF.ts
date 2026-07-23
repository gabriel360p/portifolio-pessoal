export function redirectHREF(url: string | undefined, blank: boolean) {

    if (blank) window.open(url, '_blank')
    else window.open(url, '_blank')
}