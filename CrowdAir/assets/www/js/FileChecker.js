	var strVarUserID="";
	var strNextPage="";
	function onFileSystemSuccess(fileSystem) 
        { 
        	//create the directory file
        	dataDir = fileSystem.root.getDirectory("AQIData", {create: true, exclusive: false}, gotUserFolderEntry, fail);
        }
        
    	//create the folder
    	function gotUserFolderEntry(fileEntry) 
        { 
        	//create the directory file
		alert();
        	dataDirFolder = fileEntry.getDirectory(strVarUserID, {create: false, exclusive: false}, gotFileEntry, fail);
        }
        
        //create the result file
    	function gotFileEntry(fileEntry) 
    	{
		window.location.href=strNextPage;
    	}
        
	function fail(error) 
    	{
        	alert("This Username is not correct!!");
		return;
    	}
        