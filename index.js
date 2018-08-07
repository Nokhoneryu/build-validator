// Every 50 min check for failed builds
// 50 min = 3000000ms
setInterval(function(){ttsFailBuild();}, 600000)

function ttsFailBuild() {
  $.ajax({
    'url' : 'http://gestoss-dev-ci.c.ptin.corppt.com/job/sigo_trunk_build+package+publish/api/json?pretty=true',
    'type' : 'GET',
	'crossDomain' : 'true',
    'success' : function(data) {
      if (data) {
		  console.log(data.lastUnsuccessfulBuild.number + 1);
		  console.log(data.nextBuildNumber);
		  var buildNumber = data.lastUnsuccessfulBuild.number;
		  //if((data.lastUnsuccessfulBuild.number + 1) == data.nextBuildNumber) {
		  if(true) {
			  $.ajax({
				'url' : 'http://gestoss-dev-ci.c.ptin.corppt.com/job/sigo_trunk_build+package+publish/' + buildNumber + '/api/json?pretty=true',
				'type' : 'GET',
				'crossDomain' : 'true',
				'success' : function(data) {
				  if (data) {			
					  var fullName = data.changeSets[0].items[0].author.fullName;
					  var msg = new SpeechSynthesisUtterance(fullName);
					  window.speechSynthesis.speak(msg);	
					  msg.onend = function(event) {
						document.getElementById('burro').play();
					  }
				  }
				}
			  });
		  }
      }
    }
  });
};