const url = 'https://www.googleapis.com/youtube/v3/search';
import API_KEY from './config_vars';

angular.module('scribeApp.services', [])
.factory('API', function($http) {
  var queryYoutube = function(searchString) {
    return $http
      .get(url, {
        params: {
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
/*
  var addVideo = function(video) {
    return $http({
      method: 'POST',
      url: '/api/video',
      data: video
    })
    .then(function(resp) {
      return resp;
      console.log(resp)
    })
    .catch(function(err) {
      console.log(err);
      return(err)
    })
  }
  return {
    queryYoutube: queryYoutube,
    addVideo: addVideo,
  }
*/
})
