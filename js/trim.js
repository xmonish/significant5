
 
//-------------Trim String-------------------------------
function fnTrim(str)
{
	var rtnString="";
	if(str!="" && str!=null)
	rtnString = fnLTrim(fnRTrim(str));
	return rtnString;
}
 
function fnRTrim(str)
{
	var rtnString=str;
	if(str!="" && str!=null)
	{
		for(var intCount=str.length-1;intCount>0;intCount--)
		{
			if(str.substr(intCount,1)==" ")
			{
				rtnString = str.substr(0,intCount);
			}
			else
			{break;}
		}
	}
	return rtnString;
}
 
function fnLTrim(str)
{
	var rtnString=str;
	if(str!="" && str!=null)
	{
		for(var intCount=0;intCount<str.length;intCount++)
		{
			if(str.substr(intCount,1)==" ")
			{
				rtnString = str.substr(intCount+1,str.length-(intCount+1));
			}
			else
			{break;}
		}
	}
	return rtnString;
}
