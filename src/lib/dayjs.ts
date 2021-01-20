import dayjs from "dayjs"
import dayjsPluginTimezone from "dayjs/plugin/timezone"
import dayjsPluginUtc from "dayjs/plugin/utc"

dayjs.extend(dayjsPluginTimezone)
dayjs.extend(dayjsPluginUtc)

export const getNowDateTime: () => string = () => {
    const now = dayjs().tz("Asia/Seoul")
    return now.toISOString()
}