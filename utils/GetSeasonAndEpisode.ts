function GetSeasonAndEpisode(data: string) {
  const season = data[2]
  const episode = data[4] + data[5]
  return {season, episode}
}

export default GetSeasonAndEpisode