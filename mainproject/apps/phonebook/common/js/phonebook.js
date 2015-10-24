/*
* Licensed Materials - Property of IBM
* 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

function wlCommonInit(){

	}
function log()
{
	var id=document.getElementById("pass").value;
	var invocation ={
			 adapter:'loginadapter',
			 procedure:'procedure1',
			 parameters:[id]
	 };
	 
	  var options = 
		  {
			  onSuccess:successlog,
			  onFailure:faillog
		  };
	  WL.Client.invokeProcedure(invocation, options);
	  
	  return false;

	}
function successlog(result)
{
	var  key = result.invocationResult.resultSet[0].password;
	if(id=key)
		{
		alert("logged In");
		window.location.hash="homepage";
	    }
	else 
		{
		alert("wrong password!!TRY AGAIN");
		}
	
}
function faillog()
{
alert("failed in logging in");	
}




function insert()
{
	var name = document.getElementById("name").value;
	var contact = document.getElementById("no.").value;
	
	
 var invocation ={
		 adapter:'addcontact',
		 procedure:'procedure1',
		 parameters:[name,contact]
 };
 
  var options = 
	  {
		  onSuccess:success,
		  onFailure:fail
	  };
  WL.Client.invokeProcedure(invocation, options);
  
  return false;

}
	function success()
	{
		alert("successful");
		if("name"==name)
			{
			document.getElementById("name").innerHTML="Already saved!";
			}
		document.getElementById("name").value="";
		document.getElementById("no.").value="";
		
	}
	function fail()
	{
		alert("Try again");
	}
	
	function show()
	{

		var m = document.getElementById("searching").value;
		var invocation ={
				 adapter:'searchcontact',
				 procedure:'procedure1',
				 parameters:[m]
	};
		 var options = 
		  {
			  onSuccess:success1,
			  onFailure:fail
		  };
	  WL.Client.invokeProcedure(invocation, options);
	  
	  return false;

	}
		
			
		
		function success1(result)
	{
		var data = result.invocationResult.resultSet[0].contact;
		document.getElementById("showing").value=data;
		alert("next search");
		document.getElementById("searching").value="";
		document.getElementById("showing").value="";
	};
	
	function view()
	{
		
		var invocation ={
				 adapter:'viewcontact',
				 procedure:'procedure1',
				 parameters:[]
	};
		 var options = 
		  {
			  onSuccess:success2,
			  onFailure:fail
		  };
	  WL.Client.invokeProcedure(invocation, options);
	  
	  return false;

	}
		
			
		
		function success2(result)
	{
		
		var i=0;
		$(".temp2").remove();
		while(i<result.invocationResult.resultSet.length){
		var data=result.invocationResult.resultSet[i].name;
		var data1=result.invocationResult.resultSet[i].contact;
		$("#test2").append("<li class='temp2'> " + data + "<br>" + data1 + "</li>");
		
		i+=1;
		}
		$("#test2").listview('refresh');
				
	}
		
		
		function clear1()
		{
			
			document.getElementById("test2").innerHTML=" ";
			return false;
		}
		function delt()
		{
		
			var x = $("#test").val();
			var invocation ={
					 adapter:'deletecontact',
					 procedure:'procedure1',
					 parameters:[x]
		};
			 var options = 
			  {
				  onSuccess:success5,
				  onFailure:fail
			  };
		  WL.Client.invokeProcedure(invocation, options);
		  
		  return false;

		}
			
				
			
			function success5()
		{
			
			alert("done");
			document.getElementById("test").value="";
		}
	
			function fail()
			{
				alert("failed");
			}
	
	
			
			