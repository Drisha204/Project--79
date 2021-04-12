your_order_array=[];

function submit()
{
    var name_1 = document.getElementById("your_order_1").value;
    var name_2 = document.getElementById("your_order_2").value;
    var name_3 = document.getElementById("your_order_3").value;
    var name_4 = document.getElementById("your_order_4").value;
    var name_5 = document.getElementById("your_order_5").value;
    var name_6 = document.getElementById("your_order_6").value;
    var name_7 = document.getElementById("your_order_7").value;
    var name_8 = document.getElementById("your_order_8").value;
    var name_9 = document.getElementById("your_order_9").value;
    var name_10 = document.getElementById("your_order_10").value;
    
    your_order_array.push(name_1);
    your_order_array.push(name_2);
    your_order_array.push(name_3);
    your_order_array.push(name_4);
    your_order_array.push(name_5);
    your_order_array.push(name_6);
    your_order_array.push(name_7);
    your_order_array.push(name_8);
    your_order_array.push(name_9);
    your_order_array.push(name_10);

 

    
 console.log(your_order_array);
 document.getElementById("display_name").innerHTML = your_order_array;
        document.getElementById("submit_button").style.display = "none";
        document.getElementById("sort_button").style.display = "inline-block";  
}
function sorting()
{
	your_order_array.sort();
    console.log(your_order_array);
	document.getElementById("display_name").innerHTML = your_order_array;
}

