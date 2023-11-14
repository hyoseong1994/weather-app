import Image from "next/image";

type Props = {
  icon: string;
  weather: string;
  temp_c: number;
  humidity: number;
  wind_kph: number;
};

export default function WeatherCard({
  icon,
  weather,
  temp_c,
  humidity,
  wind_kph,
}: Props) {
  return (
    <div className="w-full border-2 rounded-lg flex justify-between items-center">
      <Image width={48} height={48} src={"https:" + icon} alt={"weath icon"} />
      <div className="w-32 flex flex-col text-xs">
        <span>날씨 : {weather}</span>
        <span>온도 :{temp_c}</span>
        <span>습도 :{humidity}</span>
        <span>풍속(km) :{wind_kph}</span>
      </div>
    </div>
  );
}
