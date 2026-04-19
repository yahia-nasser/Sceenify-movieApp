"use server";
export default async function getRecommendations(id: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key={44b9119ee754beaaa4bd7276b7be5bd2}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGI5MTE5ZWU3NTRiZWFhYTRiZDcyNzZiN2JlNWJkMiIsIm5iZiI6MTc3MzQyMjU3MC42MTY5OTk5LCJzdWIiOiI2OWI0NDdlYTllOTM2NGIwZmY2YWJmOGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xZksj-UWO6FS7SIW8motoJsbPqP_EoSMkCFMt-Ip530`,
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
