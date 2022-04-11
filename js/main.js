function send(){
    var arr = document.getElementsByTagName('input');
    console.log(arr);
    var name = arr[0].value;
    var phoneNumber = arr[1].value;
    var gmail = arr[2].value;
    var mess = arr[3],value;
    if(name == "" || phoneNumber == "" || gmail == "" || mess == ""){
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }
    // if(isNaN(phoneNumber)){
    //     alert("Số điện thoại không hợp lệ");
    //     return;
    // }
}
