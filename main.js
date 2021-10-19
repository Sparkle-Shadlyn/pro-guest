var names_of_people = [];
    var GuestName = document.getElementById("EnterName")
function submit()
{names_of_people.push(GuestName);
    var GuestName = document.getElementById("display_names").value;
console.log(names_of_people)
var length_of_the_array = names_of_people.length;
console.log(length_of_the_array)
	console.log(GuestName);    
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(length_of_name);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
   }



function show()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	
}


function sorting()
	{
		document.getElementById("srch").inneeHTML = "Name found"+found+"Time/s"
		console.log("Found Name"+found+"Time/s")
		var i= names_of_people.join("<br>");
		console.log(names_of_people);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
