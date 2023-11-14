import Link from "next/link";
import {
  CurrentWeatherResponse,
  getCurrentWeather,
} from "@/utils/getCurrentWeather";
import RevalidateButton from "@/components/RevalidateButton";
import { getTime } from "@/utils/getTime";
import WeatherCard from "@/components/WeatherCard";

export default async function Home() {
  const seoul = await getCurrentWeather("seoul");
  const time = await getTime(seoul.location.tz_id);
  const newyork = await getCurrentWeather("NYC");
  const lundon = await getCurrentWeather("lundon");

  return (
    <>
      <h1>날씨 앱</h1>
      <h3>{time.dateTime}</h3>
      <ul className="list-none px-0 py-4 flex flex-col gap-y-4">
        <WeatherLi path={"seoul"} title={"서울"} weatherObj={seoul} />
        <WeatherLi path={"NYC"} title={"뉴옥"} weatherObj={newyork} />
        <WeatherLi path={"lundon"} title={"런던"} weatherObj={lundon} />
      </ul>
      <RevalidateButton tag="time" />
    </>
  );
}

type WeatherLiProps = {
  path: string;
  title: string;
  weatherObj: CurrentWeatherResponse;
};

const WeatherLi = ({ path, title, weatherObj }: WeatherLiProps) => (
  <li className="text-sm">
    <Link href={`/${path}?name=${title}`}>
      <div className="flex justify-between px-1 items-center">
        <h1 className="text-sm">{title}</h1>&rarr;
      </div>
      <WeatherCard
        icon={weatherObj.current.condition.icon}
        weather={weatherObj.current.condition.text}
        temp_c={weatherObj.current.temp_c}
        humidity={weatherObj.current.humidity}
        wind_kph={weatherObj.current.wind_kph}
      />
    </Link>
  </li>
);
