<?php
include 'koneksi.php';

// Query untuk mengambil data karyawan
$sql = "SELECT id_karyawan, nama_karyawan, alamat_karyawan, no_telp_karyawan, jabatan FROM karyawan";
$result = $conn->query($sql);

// Buat array untuk menyimpan data karyawan
$data = array();

// Jika query berhasil dieksekusi
if ($result) {
    // Jika ada hasil, tambahkan data ke array
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
    // Keluarkan data dalam format JSON
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    // Jika terjadi kesalahan saat menjalankan query
    echo json_encode(array("message" => "Gagal mengambil data karyawan."));
}

// Tutup koneksi
$conn->close();
?>
