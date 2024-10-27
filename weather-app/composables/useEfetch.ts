const useEfetch = () => {
  const changeTown = ref<string>("toronto");
  const apiKey: string = "2f175185a889999c217c9571f523a159";
  // const data = ref(null);

  interface WeatherData {
    // Add relevant properties based on the API response
    main?: {
      temp: number;
      humidity: number;
    };
    name?: string;
    weather?: { description: string; icon: string }[];
  }

  const { data } = useFetch<WeatherData>(
    () =>
      `https://api.openweathermap.org/data/2.5/weather?q=${changeTown.value}&units=metric&appid=${apiKey}`
  );
  const updateTown = (newTown: string) => {
    const formateTwon = newTown.trim().split(" ").join("+");
    changeTown.value = formateTwon;
  };
  return {
    data,
    updateTown,
  };
};

export default useEfetch;
