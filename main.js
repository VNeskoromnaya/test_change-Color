function select(sender) {
    // console.log(sender);
    // debugger;
    if (!sender.classList.contains('selected')) {
        sender.classList.add('selected');
    } else {
        sender.classList.remove('selected');
    }
}