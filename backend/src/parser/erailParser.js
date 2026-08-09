const erailParser = async (page) => {
    return page.locator("table.SpotTrain tr").evaluateAll((rows) => {
        const cleanText = (cell) =>
            cell?.textContent
                ?.replace(/\s+/g, " ")
                .trim() || "";

        const stations = [];

        for (const row of rows) {
            const cells = row.querySelectorAll("td");

            /*
             * ----------------------------------------
             * CURRENT TRAIN POSITION
             * ----------------------------------------
             *
             * The current row looks like:
             *
             * <tr>
             *     <td></td>
             *     <td>...</td>
             *     <td></td>
             *     <td colspan="3">
             *         Departed from UDHNA JN(UDN) at 19:40 09-Aug
             *         <br>
             *         Surat 4km
             *     </td>
             * </tr>
             *
             * Do NOT depend on #divtrainimg.
             * Detect the row using the colspan=3 status cell.
             */

            const statusCell = row.querySelector('td[colspan="3"]');
            const statusText = cleanText(statusCell);

            const isCurrentRow =
                statusCell &&
                /(?:Departed from|Arrived at|Approaching)/i.test(statusText);

            if (isCurrentRow) {
                const match = statusText.match(
                    /(?:Departed from|Arrived at|Approaching)\s+(.+?)\(([^)]+)\)/
                );

                const station = match?.[1]?.trim() || "";
                const stationCode = match?.[2]?.trim() || "";

                stations.push({
                    station,
                    stationCode,
                    current: true,
                    status: statusText
                });

                continue;
            }

            /*
             * ----------------------------------------
             * NORMAL STATION ROW
             * ----------------------------------------
             *
             * Arr | Delay | spacer | Station | Delay | Dep
             */

            if (cells.length < 6) {
                continue;
            }

            const arrival = cleanText(cells[0]);
            const arrivalDelay = cleanText(cells[1]);
            const station = cleanText(cells[3]);
            const departureDelay = cleanText(cells[4]);
            const departure = cleanText(cells[5]);

            if (!station) {
                continue;
            }

            stations.push({
                arrival,
                arrivalDelay,
                station,
                departureDelay,
                departure,
                current: false
            });
        }

        return stations;
    });
};

export default erailParser;