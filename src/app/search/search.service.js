import API_KEY from '../../utils/config_vars.js';

class SearchService {
  constructor($http) {
    this.$http = $http;
  }

  queryYoutube(searchString) {
    console.log('working!');
    var url = 'https://www.googleapis.com/youtube/v3/search';
    return this.$http
    .get(url, {
      params:  {
        key: API_KEY,
        part: 'snippet',
        maxResults: 20,
        videoCategoryId: '27',
        q: searchString,
        relevanceLanguage: 'en',
        type: 'video',
        videoEmbeddable: true
      },
    })
    .then(function(data) {
        console.log(data);
        return data;
    })
    .catch(function(err) {
      console.log('Error getting youtube results: ', err);
    })
  }
}

export default SearchService;
