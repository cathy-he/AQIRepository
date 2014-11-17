
function VariableIndexInit() //init the indexing number
{
	localStorage.setItem("IndexingPageNum", 0);
	localStorage.setItem("IndexingItemNum",0);
}

function GetVariableIndexNewPage(varObj) // indexing when new page is loading
{
	var IndexingPageNum = localStorage.getItem("IndexingPageNum");
	IndexingPageNum++;
	localStorage.setItem("IndexingPageNum", IndexingPageNum);
	localStorage.setItem("IndexingItemNum",0);
	var indexNumber=localStorage.getItem("IndexingPageNum").toString()+localStorage.getItem("IndexingItemNum").toString()
	//alert(indexNumber+"."+varObj);
	return indexNumber+"."+varObj;
}

function  GetVariableIndexNewItem(varObj) //indexing when go to new options/item
{
	var IndexingItemNum = localStorage.getItem("IndexingItemNum");
	IndexingItemNum ++;
	localStorage.setItem("IndexingItemNum",IndexingItemNum);
        var indexNumber=localStorage.getItem("IndexingPageNum").toString()+localStorage.getItem("IndexingItemNum").toString()
	return indexNumber+"."+varObj;
}

function GetVariableIndexName(VarIndex)  //return node name.
{
	var arrayIndex=VarIndex.split(".");
	return arrayIndex[1];
}

var startNumber=0;
function CreatePageIndex(PageNum,VarName)
{
	return "Page"+PageNum+(startNumber++)+"."+VarName;
	
}