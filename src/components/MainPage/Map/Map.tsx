import style from "./styles.module.css";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
const Maps = () => {
    const mapCenter = [47.235332, 39.754646]; //
    const zoomLevel = 16;
    return(
        <YMaps>
            <div className={style.map}>
                <Map
                    defaultState={{
                        center: mapCenter,
                        zoom: zoomLevel,
                    }}
                    width="100%"
                    height="30rem"
                >
                    {/* Пример добавления метки */}
                    <Placemark geometry={mapCenter} />
                </Map>
            </div>
        </YMaps>

    )
}
export default Maps;
