// Pop Up Alert
// alert('Hello P.A Web!');

// Pop Up Prompt
// var nama = prompt('Masukkan Nama Anda : ');
// alert(nama);

// Pop Up Confirm
// var confirmNama = confirm('Apakah Anda Yakin ? ');
// if(confirmNama === true){
	// alert('User telah menekan tombol OK!');
// }else {
	// alert('User telah menekan tombol Cancel!');
// }

// Program Sederhana
alert('Hai P.A Web');

var kondisiLoop = true;

while(kondisiLoop){
	var nameInput = prompt('Masukkan Nama Anda : ');
	alert(`Nama Anda Adalah : ${nameInput}`);
	kondisiLoop = confirm('Ingin Menginput Nama Lagi ?');
}

alert('Terima Kasih Karena Telah Mencoba Produk Applikasi Sederhana Kami!');