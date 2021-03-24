var rowvalue=0;

function createrow() {
    // var row = document.getElementById("createrow");
    var table = document.createElement("table");
    var tr = document.createElement("tr")

    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);

    var register_name = document.getElementById("name").value;

    var register_email = document.getElementById("email").value;

    var register_password = document.getElementById("phone").value;

    var creation_row = document.getElementById("createrow");

    creation_row.appendChild(table);

    var child1 = tr.childNodes[0].innerHTML = register_name;

    var child2 = tr.childNodes[1].innerHTML = register_email;

    var child3 = tr.childNodes[2].innerHTML = register_password;

    var child5 = tr.childNodes[3].innerHTML = '<button type="button" class="btn btn-danger" onclick="deleterow(this)">Delete</button>';



    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("createrow").style.display = "block";
}