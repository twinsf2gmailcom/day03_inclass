const baseurl= 'http://www.omdbapi.com';
const apikey = process.env.REACT_APP_OMDB_API_KEY;

export const getMoviesBySearchTerm = async (searchTerm) => {
  try {
      //console.log(searchTerm);
      let response = await fetch(`${baseurl}/?apikey=${apikey}&s=${searchTerm}`);
      let omdires  = await response.json();
      const search = omdires.Search;
      //console.log(888,search);
      return search;
    } catch(error) {
      console.log("ERROR:", error)
    }
}

export const getMovieDetailsById = async (movieID) => {
    try {
        let response = await fetch(`${baseurl}/?apikey=${apikey}&i=${movieID}`);
        let omdires = await response.json();
        const search = omdires;
        return search;
    } catch(error) {
        console.log("ERROR:", error)
      }
}
