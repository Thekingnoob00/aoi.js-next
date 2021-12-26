import axios from "axios";
import {PACKAGE} from "../../package.json";
import {AoiClient} from "../core/AoiClient";

export default async function (client: AoiClient) {
    /**
     * To fetch the API version current and version installed.
     */
    try {
        const res = await axios.get("https://api.leref.ga/package/version");

        if (PACKAGE.version !== res.data.version) {

            console.warn(
                "\x1b[31maoi.js warning: \u001b[33mv" +
                res.data.version +
                " is available to install.\u001b[0m",
            )
        }
    } catch {
    }
}
