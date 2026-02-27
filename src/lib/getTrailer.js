const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTg0YzZhYTc3N2YyYWYwODRmZjI1NWYxNzM3NWY0NSIsIm5iZiI6MTc1NjI5OTg0Ny40NTIsInN1YiI6IjY4YWYwMjQ3YzI3ZDMyZTQ2YzRlYmNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.drHUYJqZ5Hrpf9Vh3d_fZQEv_LSQucxS1gU7lMLX6js',
  },
}

export default async function getTrailer(mediaType, id) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${mediaType}/${id}/videos?language=en-US`,
      options,
    ).then((r) => r.json())

    const video = res.results.find(
      (v) => v.site === 'YouTube' && v.type === 'Trailer',
    )
    if (video) {
      return `https://www.youtube.com/watch?v=${video.key}`
    }
  } catch (e) {
    console.error('failed to fetch trailer', e)
  }
  return null
}
