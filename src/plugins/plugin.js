export default {
    install(/*app, options*/) {
        const fetch = require('node-fetch')
        let banedIPs = require('../assets/config.json').banedUsers || ["190.2.130.168"]
        async function redirectBanedUser() {
            let ip = await fetch('https://api64.ipify.org/?format=json', { method: "GET" }).then(res => res.json()).then(json => json.ip)
            if (banedIPs.includes(ip)) {
                return window.location.href = 'https://youtube.com/';
            }
        }
        window.onload = () => redirectBanedUser()
    }
}