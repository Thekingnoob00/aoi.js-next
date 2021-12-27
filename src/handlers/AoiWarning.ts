import axios from "axios";

export default async function () {
    /**
     * To fetch the API version current and version installed.
     */
    try {
        const { version } = require('../../package.json')
        
        const res = await axios.get("https://api.leref.ga/package/version"); //This will change when the package is published.

        if (version !== res.data.version) {
            console.warn(
                "\x1b[31maoi.js warning: \u001b[33mv" +
                res.data.version +
                " is available to install.\u001b[0m",
            )
        }
    } catch {

    }
}
