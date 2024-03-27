<?php
session_start(); // Mulai sesi

// Hapus data sesi yang ingin dihapus
unset($_SESSION['username']);
unset($_SESSION['profile_picture']);

// Hentikan sesi
session_destroy();

// Redirect ke halaman index.php setelah logout
header("Location: index.php");
exit();
