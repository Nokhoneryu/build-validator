//$('#caburro').click(

function bang() {
  console.log("Jenkins call");
	
  $.ajax({
    'url' : 'http://gestoss-dev-ci.c.ptin.corppt.com/job/sigo_trunk_build+package+publish/api/json?pretty=true',
    'type' : 'GET',
	'crossDomain' : 'true',
  //Any post-data/get-data parameters
  //This is optional
  //  'data' : {
  //    'paramater1' : 'value',
  //    'parameter2' : 'another value'
  //  },
    'success' : function(data) {
      if (data) {
        console.log(data.lastCompletedBuild.number);

        $("#number").text(data.lastCompletedBuild.number);
        $("#url").attr("href", data.lastCompletedBuild.url);
        $("#modules").text(data.description);

        // $.each(data, function( index, value ) {
        //   alert( index + ": " + value );

        // });

      }
    }
  });
};