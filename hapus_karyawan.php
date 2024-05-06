<?php
include 'koneksi.php';

// Ambil ID karyawan dari URL
$id = $_GET['id'];

// Query untuk menghapus data karyawan
$sql = "DELETE FROM karyawan WHERE id_karyawan=?";

// Persiapkan statement
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);

// Jalankan statement
if ($stmt->execute()) {
    echo "Data karyawan berhasil dihapus";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Tutup statement dan koneksi
$stmt->close();
$conn->close();
?>
