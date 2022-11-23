const searchFun = () =>{
    const searchbox = document.getElementById("myInput").value.toUpperCase();
    const listitems = document.getElementById("all_list")
    const list = document.querySelectorAll(".list")
    const lname = listitems.getElementsByTagName("b")

    for(var i=0; i<lname.length; i++){
        let match = list[i].getElementsByTagName('b')[0]; /*[0]*/

        if(match){
            let textvlaue = match.textContent || match.innerHTML;
            
            if (textvlaue.toUpperCase().indexOf(searchbox) > -1){

                list[i].style.display ="";
            }else{
                    list[i].style.display ="none";
            }
        }

    }
}