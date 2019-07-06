function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var inputValue = document.getElementById('message');
    var inputName = document.getElementById('Name');
    var button = document.getElementById('submit');
 
    function handleSubmit(evt) {
        var info=
        {
            "name":"",
            "value":""
        };
        info.name = inputName.value;
        info.value = inputValue.value;
        if (info.value != "") {
            if(info.name == "")
            {
                info.name = "Unnamed";
            }
            socket.emit("send message", info);
        }
    }
    button.onclick = handleSubmit;
    function handleMessage(info) {
        var p = document.createElement('p');
        p.innerText ="(" + info.name + ") "+info.value;
        chatDiv.appendChild(p);
        inputValue.value = "";
}

socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;   