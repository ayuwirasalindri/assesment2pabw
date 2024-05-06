$(document).ready(function(){
    $.ajax({
        url: 'get_karyawan.php',
        type: 'GET',
        dataType: 'json',
        success: function(response){
            var table = "<table><tr><th>ID</th><th>Nama</th><th>Alamat</th><th>No. Telp</th><th>Jabatan</th><th>Aksi</th></tr>";
            for(var i=0; i<response.length; i++){
                table += "<tr>";
                table += "<td>" + response[i].id_karyawan + "</td>";
                table += "<td>" + response[i].nama_karyawan + "</td>";
                table += "<td>" + response[i].alamat_karyawan + "</td>";
                table += "<td>" + response[i].no_telp_karyawan + "</td>";
                table += "<td>" + response[i].jabatan + "</td>";
                table += "<td><button onclick='hapusKaryawan(" + response[i].id_karyawan + ")'>Hapus</button></td>";
                table += "</tr>";
            }
            table += "</table>";
            $("#tabel-karyawan").html(table);
        },
        error: function(xhr, status, error){
            console.error(status + ": " + error);
        }
    });
});

function hapusKaryawan(id){
    $.ajax({
        url: 'hapus_karyawan.php?id=' + id,
        type: 'GET',
        success: function(response){
            // Menampilkan pesan sukses atau gagal
            alert(response);
            // Menghapus baris tabel setelah penghapusan berhasil
            $("#" + id).remove();
        },
        error: function(xhr, status, error){
            console.error(status + ": " + error);
        }
    });
}
