<script>
	//add by Yang 11 05 2014
	var userid=localStorage.getItem("00."+"UserID");//get UserID
	localStorage.clear(); //clean the memory
	localStorage.setItem("UserID",userid);
	function OptionChoice(objName, actType) {
		localStorage.setItem(actType, objName.value);
	}
	
	function onFileSystemSuccess(fileSystem) 
        { 
        	//create the directory file
        	dataDir = fileSystem.root.getDirectory("AQIData", {create: true, exclusive: false}, gotUserFolderEntry, fail);
        }
        
    	//create the folder
    	function gotUserFolderEntry(fileEntry) 
        { 
        	//create the directory file
        	dataDirFolder = fileEntry.getDirectory(localStorage.getItem("UserID"), {create: true, exclusive: false}, gotFileEntry, fail);
        }
        
        //create the result file
    	function gotFileEntry(fileEntry) 
    	{
    		//alert("gotFileEntry");
    		fileEntry.getFile("CommentOnApp.txt", {create: true, exclusive: false},gotFileWriteEntry, fail);
    	}
        
        // create the writer --- it used for writing file
		function gotFileWriteEntry(fileEntry) 
    	{
        	fileEntry.createWriter(gotFileWriter, fail);
    	}
		//error display
		function fail(error) 
    	{
        	console.log(error.code);
    	}
    	
	//get UserId and write files.
    	function gotFileWriter(writer) 
    	{
	       var xmlText="";
	       if(writer.length==0)
	       {
           	  xmlText="<?xml version='1.0' encoding='utf-8'?>";
           }
		   xmlText+="<UserFeedBack>";
		   //Get Comment
		   var strComment=document.getElementById("txtComment").value;
           localStorage.setItem("Comment", strComment);
           for (var key in localStorage)
            {
                //var xmlText = new StringBuffer();
                var storageKey = key;
                xmlText=xmlText.concat("", "<" + storageKey + ">"); //start
                xmlText=xmlText.concat("", localStorage.getItem(storageKey)); //value
                xmlText=xmlText.concat("", "</" + storageKey + ">"); //end
            }
            
            xmlText +="</UserFeedBack>"
	        writer.write(xmlText);
	        alert("Thanks for your feedback!");
	        window.location.href="index.html";
        }
        
        function saveFeedback()
        {
        	document.addEventListener("deviceready", onFileSys, false);
        }
        
        function onFileSys()
        {
        	var strComment=document.getElementById("txtComment").value;
			if (strComment=="")
			{
				alert("please write something in comment!");
				return ;
			}
			else
			{
        	 	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
        	}
        }
	
	// link of the buttons
	function funForward(pageLocation)
	{
		window.location.href=pageLocation;
	}
</script>