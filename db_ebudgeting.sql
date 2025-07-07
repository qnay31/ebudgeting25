-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Jul 2025 pada 06.29
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;

--
-- Database: `2023_ebudgeting`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `akun_pengurus`
--

CREATE TABLE `akun_pengurus` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(100) NOT NULL,
    `nama` varchar(100) NOT NULL,
    `username` varchar(100) NOT NULL,
    `password` varchar(256) NOT NULL,
    `profil` varchar(200) NOT NULL,
    `posisi` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data untuk tabel `akun_pengurus`
--

INSERT INTO
    `akun_pengurus` (
        `id`,
        `id_pengurus`,
        `nama`,
        `username`,
        `password`,
        `profil`,
        `posisi`
    )
VALUES (
        1,
        'manager_facebook',
        'Facebook II',
        'facebook_2',
        '$2y$10$1Xsqtyw79xIEqPvy2jHjg.2F3QPVWP1Ppbp/M.U6ZMrd6hizAXChW',
        'profil.png',
        'Leader Media Sosial'
    ),
    (
        2,
        'manager_facebook',
        'Tim Santunan',
        'facebook_depok',
        '$2y$10$1Xsqtyw79xIEqPvy2jHjg.2F3QPVWP1Ppbp/M.U6ZMrd6hizAXChW',
        'profil.png',
        'Leader Media Sosial'
    ),
    (
        3,
        'manager_facebook',
        'Tim Pembangunan',
        'facebook_3',
        '$2y$10$1Xsqtyw79xIEqPvy2jHjg.2F3QPVWP1Ppbp/M.U6ZMrd6hizAXChW',
        'profil.png',
        'Leader Media Sosial'
    ),
    (
        4,
        'management_keuangan',
        'Sahila Ilpah',
        'management_keuangan',
        '$2y$10$xf9OC7SPCgPn4FDDqsP6/.c5H/7RzmK.BiJdhM8eOGERZP1YHLZ96',
        'profil.png',
        'Management Keuangan'
    ),
    (
        5,
        'ketua_yayasan',
        'Riki Subagja',
        'riki1011',
        '$2y$10$qdAhtVahQOaW7P41Bwk.L.E/kgvAjyur9adeW9juohVZ8FNsPPwYy',
        '1672741532.png',
        'Ketua Yayasan'
    ),
    (
        6,
        'manager_facebook',
        'Tim Sembako',
        'facebook_4',
        '$2y$10$1Xsqtyw79xIEqPvy2jHjg.2F3QPVWP1Ppbp/M.U6ZMrd6hizAXChW',
        'profil.png',
        'Leader Media Sosial'
    ),
    (
        7,
        'manager_facebook',
        'Instagram I',
        'instagram_user',
        '$2y$10$PZP/dNmPpn1CJGMzjzkWAeezKIxeW0QFU8a4AWIUyTkweOOqSO3Jq',
        'profil.png',
        'Leader Media Sosial'
    ),
    (
        8,
        'manager_facebook',
        'Instagram II',
        'instagram_user_2',
        '$2y$10$23pCw2pzle/0oyxwUjIy2.XqjG6shUGBAFbOT4cYUF7LIfnZf43im',
        '1687230080.png',
        'Leader Media Sosial'
    ),
    (
        9,
        'admin_web',
        'M Rizky Amin',
        'admin_web',
        '$2y$10$1Xsqtyw79xIEqPvy2jHjg.2F3QPVWP1Ppbp/M.U6ZMrd6hizAXChW',
        'profil.png',
        'Admin Website'
    ),
    (
        10,
        'manager_facebook',
        'Instagram III',
        'instagram_iii',
        '$2y$10$1Xsqtyw79xIEqPvy2jHjg.2F3QPVWP1Ppbp/M.U6ZMrd6hizAXChW',
        'profil.png',
        'Leader Media Sosial'
    ),
    (
        11,
        'kepala_pengajuan',
        'Pimpi Ayu Nuraini',
        'kepala_pengajuan',
        '$2y$10$GyObTR09hSw5KVUoNuK4z.Mp/rtMtfsg2mT0uM50tJjcpc/HYd/nu',
        'profil.png',
        'Kepala Pengajuan'
    ),
    (
        12,
        'kepala_income',
        'Pimpi Ayu Nuraini',
        'kepala_income',
        '$2y$10$xf9OC7SPCgPn4FDDqsP6/.c5H/7RzmK.BiJdhM8eOGERZP1YHLZ96',
        'profil.png',
        'Kepala Income'
    ),
    (
        13,
        'facebook',
        'Akun Cadangan',
        'cadangan',
        '$2y$10$1ecQ4/jPW2ySC.ZAeynBN.d4NolGYW3dRiHcU4qzHzABdEX6NRht.',
        'profil.png',
        '-'
    ),
    (
        14,
        'sosial',
        'Akun Tidak Terpakai',
        'cadangan',
        '$2y$10$1ecQ4/jPW2ySC.ZAeynBN.d4NolGYW3dRiHcU4qzHzABdEX6NRht.',
        'profil.png',
        'Admin Media Sosial'
    );

-- --------------------------------------------------------

--
-- Struktur dari tabel `asal_sekolah`
--

CREATE TABLE `asal_sekolah` (
    `id` int(11) NOT NULL,
    `nama_sekolah` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1 COLLATE = latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_akun`
--

CREATE TABLE `data_akun` (
    `id` int(11) NOT NULL,
    `id_pengurus` text NOT NULL,
    `nomor_id` text NOT NULL,
    `pemegang` text NOT NULL,
    `nama_akun` text NOT NULL,
    `posisi` text NOT NULL,
    `team` text NOT NULL,
    `kategori` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_anggaran_lain`
--

CREATE TABLE `data_anggaran_lain` (
    `id` int(11) NOT NULL,
    `bulan` varchar(100) NOT NULL,
    `tahun` varchar(100) NOT NULL,
    `anggaran_global` varchar(100) NOT NULL,
    `terpakai_global` varchar(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_anggaran_lain`
--

INSERT INTO
    `data_anggaran_lain` (
        `id`,
        `bulan`,
        `tahun`,
        `anggaran_global`,
        `terpakai_global`
    )
VALUES (1, 'Januari', '2025', '', ''),
    (2, 'Februari', '2025', '', ''),
    (3, 'Maret', '2025', '', ''),
    (4, 'April', '2025', '', ''),
    (5, 'Mei', '2025', '', ''),
    (6, 'Juni', '2025', '', ''),
    (7, 'Juli', '2025', '', ''),
    (8, 'Agustus', '2025', '', ''),
    (
        9,
        'September',
        '2025',
        '',
        ''
    ),
    (10, 'Oktober', '2025', '', ''),
    (
        11,
        'November',
        '2025',
        '',
        ''
    ),
    (
        12,
        'Desember',
        '2025',
        '',
        ''
    );

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_aset_yayasan`
--

CREATE TABLE `data_aset_yayasan` (
    `id` int(11) NOT NULL,
    `bulan` varchar(100) NOT NULL,
    `tahun` varchar(100) NOT NULL,
    `anggaran_pembangunan` varchar(100) NOT NULL,
    `terpakai_pembangunan` varchar(100) NOT NULL,
    `anggaran_pembelian` varchar(100) NOT NULL,
    `terpakai_pembelian` varchar(100) NOT NULL,
    `anggaran_global` varchar(100) NOT NULL,
    `terpakai_global` varchar(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_aset_yayasan`
--

INSERT INTO
    `data_aset_yayasan` (
        `id`,
        `bulan`,
        `tahun`,
        `anggaran_pembangunan`,
        `terpakai_pembangunan`,
        `anggaran_pembelian`,
        `terpakai_pembelian`,
        `anggaran_global`,
        `terpakai_global`
    )
VALUES (
        1,
        'Januari',
        '2025',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        2,
        'Februari',
        '2025',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        3,
        'Maret',
        '2025',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        4,
        'April',
        '2025',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        5,
        'Mei',
        '2025',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        6,
        'Juni',
        '2025',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        7,
        'Juli',
        '2025',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        8,
        'Agustus',
        '2025',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        9,
        'September',
        '2025',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        10,
        'Oktober',
        '2025',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        11,
        'November',
        '2025',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        12,
        'Desember',
        '2025',
        '',
        '',
        '',
        '',
        '',
        ''
    );

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_gaji_karyawan`
--

CREATE TABLE `data_gaji_karyawan` (
    `id` int(11) NOT NULL,
    `bulan` varchar(100) NOT NULL,
    `tahun` varchar(100) NOT NULL,
    `anggaran_global` varchar(100) NOT NULL,
    `terpakai_global` varchar(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_gaji_karyawan`
--

INSERT INTO
    `data_gaji_karyawan` (
        `id`,
        `bulan`,
        `tahun`,
        `anggaran_global`,
        `terpakai_global`
    )
VALUES (1, 'Januari', '2025', '', ''),
    (2, 'Februari', '2025', '', ''),
    (3, 'Maret', '2025', '', ''),
    (4, 'April', '2025', '', ''),
    (5, 'Mei', '2025', '', ''),
    (6, 'Juni', '2025', '', ''),
    (7, 'Juli', '2025', '', ''),
    (8, 'Agustus', '2025', '', ''),
    (
        9,
        'September',
        '2025',
        '',
        ''
    ),
    (10, 'Oktober', '2025', '', ''),
    (
        11,
        'November',
        '2025',
        '',
        ''
    ),
    (
        12,
        'Desember',
        '2025',
        '',
        ''
    );

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_income`
--

CREATE TABLE `data_income` (
    `id` int(11) NOT NULL,
    `bulan` varchar(100) NOT NULL,
    `tahun` varchar(100) NOT NULL,
    `income_I` text NOT NULL,
    `income_II` text NOT NULL,
    `income_III` text NOT NULL,
    `income_IV` text NOT NULL,
    `income_V` text NOT NULL,
    `income_VI` text NOT NULL,
    `income_VII` text NOT NULL,
    `income_VIII` text NOT NULL,
    `income_IX` text NOT NULL,
    `income_tanpaResi` varchar(100) NOT NULL,
    `income_global` varchar(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_income`
--

INSERT INTO
    `data_income` (
        `id`,
        `bulan`,
        `tahun`,
        `income_I`,
        `income_II`,
        `income_III`,
        `income_IV`,
        `income_V`,
        `income_VI`,
        `income_VII`,
        `income_VIII`,
        `income_IX`,
        `income_tanpaResi`,
        `income_global`
    )
VALUES (
        1,
        'Januari',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        2,
        'Februari',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        3,
        'Maret',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        4,
        'April',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        5,
        'Mei',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        6,
        'Juni',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        7,
        'Juli',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        8,
        'Agustus',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        9,
        'September',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        10,
        'Oktober',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        11,
        'November',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        12,
        'Desember',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    );

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_jasa`
--

CREATE TABLE `data_jasa` (
    `id` int(11) NOT NULL,
    `bulan` varchar(100) NOT NULL,
    `tahun` varchar(100) NOT NULL,
    `anggaran_global` varchar(100) NOT NULL,
    `terpakai_global` varchar(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_jasa`
--

INSERT INTO
    `data_jasa` (
        `id`,
        `bulan`,
        `tahun`,
        `anggaran_global`,
        `terpakai_global`
    )
VALUES (1, 'Januari', '2025', '', ''),
    (2, 'Februari', '2025', '', ''),
    (3, 'Maret', '2025', '', ''),
    (4, 'April', '2025', '', ''),
    (5, 'Mei', '2025', '', ''),
    (6, 'Juni', '2025', '', ''),
    (7, 'Juli', '2025', '', ''),
    (8, 'Agustus', '2025', '', ''),
    (
        9,
        'September',
        '2025',
        '',
        ''
    ),
    (10, 'Oktober', '2025', '', ''),
    (
        11,
        'November',
        '2025',
        '',
        ''
    ),
    (
        12,
        'Desember',
        '2025',
        '',
        ''
    );

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_logistik`
--

CREATE TABLE `data_logistik` (
    `id` int(11) NOT NULL,
    `bulan` varchar(100) NOT NULL,
    `tahun` varchar(100) NOT NULL,
    `anggaran_global` varchar(100) NOT NULL,
    `terpakai_global` varchar(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_logistik`
--

INSERT INTO
    `data_logistik` (
        `id`,
        `bulan`,
        `tahun`,
        `anggaran_global`,
        `terpakai_global`
    )
VALUES (1, 'Januari', '2025', '', ''),
    (2, 'Februari', '2025', '', ''),
    (3, 'Maret', '2025', '', ''),
    (4, 'April', '2025', '', ''),
    (5, 'Mei', '2025', '', ''),
    (6, 'Juni', '2025', '', ''),
    (7, 'Juli', '2025', '', ''),
    (8, 'Agustus', '2025', '', ''),
    (
        9,
        'September',
        '2025',
        '',
        ''
    ),
    (10, 'Oktober', '2025', '', ''),
    (
        11,
        'November',
        '2025',
        '',
        ''
    ),
    (
        12,
        'Desember',
        '2025',
        '',
        ''
    );

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_maintenance`
--

CREATE TABLE `data_maintenance` (
    `id` int(11) NOT NULL,
    `bulan` varchar(100) NOT NULL,
    `tahun` varchar(100) NOT NULL,
    `anggaran_global` varchar(100) NOT NULL,
    `terpakai_global` varchar(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_maintenance`
--

INSERT INTO
    `data_maintenance` (
        `id`,
        `bulan`,
        `tahun`,
        `anggaran_global`,
        `terpakai_global`
    )
VALUES (1, 'Januari', '2025', '', ''),
    (2, 'Februari', '2025', '', ''),
    (3, 'Maret', '2025', '', ''),
    (4, 'April', '2025', '', ''),
    (5, 'Mei', '2025', '', ''),
    (6, 'Juni', '2025', '', ''),
    (7, 'Juli', '2025', '', ''),
    (8, 'Agustus', '2025', '', ''),
    (
        9,
        'September',
        '2025',
        '',
        ''
    ),
    (10, 'Oktober', '2025', '', ''),
    (
        11,
        'November',
        '2025',
        '',
        ''
    ),
    (
        12,
        'Desember',
        '2025',
        '',
        ''
    );

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_operasional_yayasan`
--

CREATE TABLE `data_operasional_yayasan` (
    `id` int(11) NOT NULL,
    `bulan` varchar(100) NOT NULL,
    `tahun` varchar(100) NOT NULL,
    `anggaran_global` varchar(100) NOT NULL,
    `terpakai_global` varchar(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_operasional_yayasan`
--

INSERT INTO
    `data_operasional_yayasan` (
        `id`,
        `bulan`,
        `tahun`,
        `anggaran_global`,
        `terpakai_global`
    )
VALUES (1, 'Januari', '2025', '', ''),
    (2, 'Februari', '2025', '', ''),
    (3, 'Maret', '2025', '', ''),
    (4, 'April', '2025', '', ''),
    (5, 'Mei', '2025', '', ''),
    (6, 'Juni', '2025', '', ''),
    (7, 'Juli', '2025', '', ''),
    (8, 'Agustus', '2025', '', ''),
    (
        9,
        'September',
        '2025',
        '',
        ''
    ),
    (10, 'Oktober', '2025', '', ''),
    (
        11,
        'November',
        '2025',
        '',
        ''
    ),
    (
        12,
        'Desember',
        '2025',
        '',
        ''
    );

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_paudqu`
--

CREATE TABLE `data_paudqu` (
    `id` int(11) NOT NULL,
    `bulan` varchar(100) NOT NULL,
    `tahun` varchar(100) NOT NULL,
    `anggaran_global` varchar(100) NOT NULL,
    `terpakai_global` varchar(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_paudqu`
--

INSERT INTO
    `data_paudqu` (
        `id`,
        `bulan`,
        `tahun`,
        `anggaran_global`,
        `terpakai_global`
    )
VALUES (1, 'Januari', '2025', '', ''),
    (2, 'Februari', '2025', '', ''),
    (3, 'Maret', '2025', '', ''),
    (4, 'April', '2025', '', ''),
    (5, 'Mei', '2025', '', ''),
    (6, 'Juni', '2025', '', ''),
    (7, 'Juli', '2025', '', ''),
    (8, 'Agustus', '2025', '', ''),
    (
        9,
        'September',
        '2025',
        '',
        ''
    ),
    (10, 'Oktober', '2025', '', ''),
    (
        11,
        'November',
        '2025',
        '',
        ''
    ),
    (
        12,
        'Desember',
        '2025',
        '',
        ''
    );

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_program`
--

CREATE TABLE `data_program` (
    `id` int(11) NOT NULL,
    `bulan` varchar(100) NOT NULL,
    `tahun` varchar(100) NOT NULL,
    `anggaran_pendidikan` varchar(100) NOT NULL,
    `terpakai_pendidikan` varchar(100) NOT NULL,
    `anggaran_kesehatan` varchar(100) NOT NULL,
    `terpakai_kesehatan` varchar(100) NOT NULL,
    `anggaran_asrama_yatim` text NOT NULL,
    `terpakai_asrama_yatim` text NOT NULL,
    `anggaran_santunanBulanan` text NOT NULL,
    `terpakai_santunanBulanan` text NOT NULL,
    `anggaran_binaan` text NOT NULL,
    `terpakai_binaan` text NOT NULL,
    `anggaran_luar_binaan` text NOT NULL,
    `terpakai_luar_binaan` text NOT NULL,
    `anggaran_global` varchar(100) NOT NULL,
    `terpakai_global` varchar(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_program`
--

INSERT INTO
    `data_program` (
        `id`,
        `bulan`,
        `tahun`,
        `anggaran_pendidikan`,
        `terpakai_pendidikan`,
        `anggaran_kesehatan`,
        `terpakai_kesehatan`,
        `anggaran_asrama_yatim`,
        `terpakai_asrama_yatim`,
        `anggaran_santunanBulanan`,
        `terpakai_santunanBulanan`,
        `anggaran_binaan`,
        `terpakai_binaan`,
        `anggaran_luar_binaan`,
        `terpakai_luar_binaan`,
        `anggaran_global`,
        `terpakai_global`
    )
VALUES (
        1,
        'Januari',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        2,
        'Februari',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        3,
        'Maret',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        4,
        'April',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        5,
        'Mei',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        6,
        'Juni',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        7,
        'Juli',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        8,
        'Agustus',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        9,
        'September',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        10,
        'Oktober',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        11,
        'November',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ),
    (
        12,
        'Desember',
        '2025',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    );

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_uang_makan`
--

CREATE TABLE `data_uang_makan` (
    `id` int(11) NOT NULL,
    `bulan` varchar(100) NOT NULL,
    `tahun` varchar(100) NOT NULL,
    `anggaran_global` varchar(100) NOT NULL,
    `terpakai_global` varchar(100) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data untuk tabel `data_uang_makan`
--

INSERT INTO
    `data_uang_makan` (
        `id`,
        `bulan`,
        `tahun`,
        `anggaran_global`,
        `terpakai_global`
    )
VALUES (1, 'Januari', '2025', '', ''),
    (2, 'Februari', '2025', '', ''),
    (3, 'Maret', '2025', '', ''),
    (4, 'April', '2025', '', ''),
    (5, 'Mei', '2025', '', ''),
    (6, 'Juni', '2025', '', ''),
    (7, 'Juli', '2025', '', ''),
    (8, 'Agustus', '2025', '', ''),
    (
        9,
        'September',
        '2025',
        '',
        ''
    ),
    (10, 'Oktober', '2025', '', ''),
    (
        11,
        'November',
        '2025',
        '',
        ''
    ),
    (
        12,
        'Desember',
        '2025',
        '',
        ''
    );

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri_anggaran_lain`
--

CREATE TABLE `galeri_anggaran_lain` (
    `id` int(11) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `program` varchar(200) NOT NULL,
    `nama` varchar(200) NOT NULL,
    `dokumentasi` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri_aset_yayasan`
--

CREATE TABLE `galeri_aset_yayasan` (
    `id` int(11) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `program` varchar(200) NOT NULL,
    `nama` varchar(200) NOT NULL,
    `dokumentasi` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri_gaji_karyawan`
--

CREATE TABLE `galeri_gaji_karyawan` (
    `id` int(11) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `program` varchar(200) NOT NULL,
    `nama` varchar(200) NOT NULL,
    `dokumentasi` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri_jasa`
--

CREATE TABLE `galeri_jasa` (
    `id` int(11) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `program` varchar(200) NOT NULL,
    `nama` varchar(200) NOT NULL,
    `dokumentasi` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri_logistik`
--

CREATE TABLE `galeri_logistik` (
    `id` int(11) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `program` varchar(200) NOT NULL,
    `nama` varchar(200) NOT NULL,
    `dokumentasi` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri_maintenance`
--

CREATE TABLE `galeri_maintenance` (
    `id` int(11) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `program` varchar(200) NOT NULL,
    `nama` varchar(200) NOT NULL,
    `dokumentasi` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri_operasional_yayasan`
--

CREATE TABLE `galeri_operasional_yayasan` (
    `id` int(11) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `program` varchar(200) NOT NULL,
    `nama` varchar(200) NOT NULL,
    `dokumentasi` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri_paudqu`
--

CREATE TABLE `galeri_paudqu` (
    `id` int(11) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `program` varchar(200) NOT NULL,
    `nama` varchar(200) NOT NULL,
    `dokumentasi` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri_pemasukan`
--

CREATE TABLE `galeri_pemasukan` (
    `id` int(11) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `program` varchar(200) NOT NULL,
    `nama` varchar(200) NOT NULL,
    `dokumentasi` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri_program`
--

CREATE TABLE `galeri_program` (
    `id` int(11) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `program` varchar(200) NOT NULL,
    `nama` varchar(200) NOT NULL,
    `dokumentasi` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri_uang_makan`
--

CREATE TABLE `galeri_uang_makan` (
    `id` int(11) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `program` varchar(200) NOT NULL,
    `nama` varchar(200) NOT NULL,
    `dokumentasi` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `income_global`
--

CREATE TABLE `income_global` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `kategori` varchar(255) NOT NULL,
    `posisi` varchar(200) NOT NULL,
    `gedung` varchar(200) NOT NULL,
    `tgl_pemasukan` date NOT NULL,
    `income` varchar(250) NOT NULL,
    `status` varchar(30) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_anggaran_lain`
--

CREATE TABLE `input_anggaran_lain` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `posisi` varchar(200) NOT NULL,
    `kategori` varchar(250) NOT NULL,
    `tgl_dibuat` date NOT NULL,
    `deskripsi` text NOT NULL,
    `dana_anggaran` varchar(200) NOT NULL,
    `tgl_laporan` date DEFAULT NULL,
    `pemakaian` varchar(200) NOT NULL,
    `dana_terpakai` varchar(200) NOT NULL,
    `status` varchar(20) NOT NULL,
    `laporan` varchar(100) NOT NULL,
    `dokumen` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_aset_yayasan`
--

CREATE TABLE `input_aset_yayasan` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `posisi` varchar(200) NOT NULL,
    `kategori` varchar(255) NOT NULL,
    `jenis` varchar(255) NOT NULL,
    `tgl_dibuat` date NOT NULL,
    `deskripsi` text NOT NULL,
    `qty_anggaran` varchar(200) NOT NULL,
    `dana_anggaran` varchar(250) NOT NULL,
    `tgl_laporan` date DEFAULT NULL,
    `pemakaian` text NOT NULL,
    `qty_pembelian` varchar(100) NOT NULL,
    `dana_terpakai` varchar(250) NOT NULL,
    `status` varchar(30) NOT NULL,
    `laporan` varchar(100) NOT NULL,
    `dokumen` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_gaji_karyawan`
--

CREATE TABLE `input_gaji_karyawan` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `posisi` varchar(200) NOT NULL,
    `kategori` varchar(250) NOT NULL,
    `tgl_dibuat` date NOT NULL,
    `deskripsi` text NOT NULL,
    `dana_anggaran` varchar(200) NOT NULL,
    `tgl_laporan` date DEFAULT NULL,
    `pemakaian` text NOT NULL,
    `dana_terpakai` varchar(200) NOT NULL,
    `status` varchar(20) NOT NULL,
    `laporan` varchar(100) NOT NULL,
    `dokumen` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_incometanparesi`
--

CREATE TABLE `input_incometanparesi` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `kategori` varchar(255) NOT NULL,
    `posisi` varchar(200) NOT NULL,
    `tgl_pemasukan` date NOT NULL,
    `income` varchar(250) NOT NULL,
    `status` varchar(30) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_income_media`
--

CREATE TABLE `input_income_media` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(100) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `pemegang` varchar(100) NOT NULL,
    `nama_akun` varchar(100) NOT NULL,
    `nama_donatur` varchar(100) NOT NULL,
    `tanggal_tf` date NOT NULL,
    `jam_tf` time NOT NULL,
    `bank` varchar(100) NOT NULL,
    `jumlah_tf` varchar(100) NOT NULL,
    `status` varchar(100) NOT NULL,
    `team` varchar(100) NOT NULL,
    `kategori` text NOT NULL,
    `resi` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_jasa`
--

CREATE TABLE `input_jasa` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `posisi` varchar(200) NOT NULL,
    `kategori` varchar(250) NOT NULL,
    `tgl_dibuat` date NOT NULL,
    `deskripsi` text NOT NULL,
    `dana_anggaran` varchar(200) NOT NULL,
    `tgl_laporan` date DEFAULT NULL,
    `pemakaian` varchar(200) NOT NULL,
    `dana_terpakai` varchar(200) NOT NULL,
    `status` varchar(20) NOT NULL,
    `laporan` varchar(100) NOT NULL,
    `dokumen` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_laporan_media`
--

CREATE TABLE `input_laporan_media` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(100) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `pemegang` varchar(100) NOT NULL,
    `nama_akun` varchar(100) NOT NULL,
    `tgl_laporan` date NOT NULL,
    `total_teman` text NOT NULL,
    `total_add` text NOT NULL,
    `teman_baru` text NOT NULL,
    `teman_hapus` varchar(100) NOT NULL,
    `total_pengikut` varchar(100) NOT NULL,
    `total_mengikuti` varchar(100) NOT NULL,
    `pengikut_baru` varchar(100) NOT NULL,
    `mengikuti_baru` varchar(100) NOT NULL,
    `hapus_pengikut` varchar(100) NOT NULL,
    `hapus_mengikuti` varchar(100) NOT NULL,
    `totalSerangan` varchar(100) NOT NULL,
    `donatur` varchar(100) NOT NULL,
    `respon` varchar(100) NOT NULL,
    `tidak_respon` varchar(100) NOT NULL,
    `total_income` varchar(100) NOT NULL,
    `team` varchar(100) NOT NULL,
    `kategori` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_logistik`
--

CREATE TABLE `input_logistik` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `posisi` varchar(200) NOT NULL,
    `logistik` varchar(250) NOT NULL,
    `tgl_pengajuan` date NOT NULL,
    `deskripsi` text NOT NULL,
    `dana_anggaran` varchar(200) NOT NULL,
    `tgl_pemakaian` date DEFAULT NULL,
    `deskripsi_pemakaian` varchar(200) NOT NULL,
    `dana_terpakai` varchar(200) NOT NULL,
    `status` varchar(20) NOT NULL,
    `laporan` varchar(100) NOT NULL,
    `dokumen` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_maintenance`
--

CREATE TABLE `input_maintenance` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `posisi` varchar(100) NOT NULL,
    `kategori` varchar(250) NOT NULL,
    `tgl_dibuat` date NOT NULL,
    `deskripsi` text NOT NULL,
    `dana_anggaran` varchar(200) NOT NULL,
    `tgl_laporan` date DEFAULT NULL,
    `pemakaian` varchar(200) NOT NULL,
    `dana_terpakai` varchar(200) NOT NULL,
    `status` varchar(20) NOT NULL,
    `laporan` varchar(100) NOT NULL,
    `dokumen` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_operasional_yayasan`
--

CREATE TABLE `input_operasional_yayasan` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `posisi` varchar(200) NOT NULL,
    `kategori` varchar(255) NOT NULL,
    `tgl_dibuat` date NOT NULL,
    `deskripsi` text NOT NULL,
    `dana_anggaran` varchar(250) NOT NULL,
    `tgl_laporan` date DEFAULT NULL,
    `pemakaian` text NOT NULL,
    `dana_terpakai` varchar(250) NOT NULL,
    `status` varchar(30) NOT NULL,
    `laporan` varchar(100) NOT NULL,
    `dokumen` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_paudqu`
--

CREATE TABLE `input_paudqu` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `posisi` varchar(200) NOT NULL,
    `program` varchar(250) NOT NULL,
    `tgl_pengajuan` date NOT NULL,
    `deskripsi` text NOT NULL,
    `dana_anggaran` varchar(200) NOT NULL,
    `tgl_pemakaian` date DEFAULT NULL,
    `deskripsi_pemakaian` varchar(200) NOT NULL,
    `dana_terpakai` varchar(200) NOT NULL,
    `status` varchar(20) NOT NULL,
    `laporan` varchar(100) NOT NULL,
    `dokumen` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_program`
--

CREATE TABLE `input_program` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `posisi` varchar(200) NOT NULL,
    `program` varchar(250) NOT NULL,
    `kategori` varchar(200) NOT NULL,
    `tgl_pengajuan` date NOT NULL,
    `deskripsi` text NOT NULL,
    `dana_anggaran` varchar(200) NOT NULL,
    `tgl_pemakaian` date DEFAULT NULL,
    `deskripsi_pemakaian` varchar(200) NOT NULL,
    `dana_terpakai` varchar(200) NOT NULL,
    `status` varchar(20) NOT NULL,
    `laporan` varchar(100) NOT NULL,
    `dokumen` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `input_uang_makan`
--

CREATE TABLE `input_uang_makan` (
    `id` int(11) NOT NULL,
    `id_pengurus` varchar(200) NOT NULL,
    `posisi` varchar(200) NOT NULL,
    `kategori` varchar(250) NOT NULL,
    `tgl_dibuat` date NOT NULL,
    `deskripsi` text NOT NULL,
    `dana_anggaran` varchar(200) NOT NULL,
    `tgl_laporan` date DEFAULT NULL,
    `pemakaian` varchar(200) NOT NULL,
    `dana_terpakai` varchar(200) NOT NULL,
    `status` varchar(20) NOT NULL,
    `laporan` varchar(100) NOT NULL,
    `dokumen` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `kritiksaran`
--

CREATE TABLE `kritiksaran` (
    `id` int(11) NOT NULL,
    `nomor_id` varchar(100) NOT NULL,
    `nama` text NOT NULL,
    `tgl_saran` datetime NOT NULL,
    `saran` text NOT NULL,
    `balasan` text NOT NULL,
    `tgl_balasan` datetime NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `log_aktivity`
--

CREATE TABLE `log_aktivity` (
    `id` int(11) NOT NULL,
    `nama` varchar(100) NOT NULL,
    `posisi` varchar(100) NOT NULL,
    `ip` varchar(100) NOT NULL,
    `tanggal` datetime NOT NULL,
    `aktivitas` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `akun_pengurus`
--
ALTER TABLE `akun_pengurus` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `asal_sekolah`
--
ALTER TABLE `asal_sekolah` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_akun`
--
ALTER TABLE `data_akun` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_anggaran_lain`
--
ALTER TABLE `data_anggaran_lain` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_aset_yayasan`
--
ALTER TABLE `data_aset_yayasan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_gaji_karyawan`
--
ALTER TABLE `data_gaji_karyawan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_income`
--
ALTER TABLE `data_income` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_jasa`
--
ALTER TABLE `data_jasa` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_logistik`
--
ALTER TABLE `data_logistik` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_maintenance`
--
ALTER TABLE `data_maintenance` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_operasional_yayasan`
--
ALTER TABLE `data_operasional_yayasan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_paudqu`
--
ALTER TABLE `data_paudqu` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_program`
--
ALTER TABLE `data_program` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `data_uang_makan`
--
ALTER TABLE `data_uang_makan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `galeri_anggaran_lain`
--
ALTER TABLE `galeri_anggaran_lain` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `galeri_aset_yayasan`
--
ALTER TABLE `galeri_aset_yayasan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `galeri_gaji_karyawan`
--
ALTER TABLE `galeri_gaji_karyawan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `galeri_jasa`
--
ALTER TABLE `galeri_jasa` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `galeri_logistik`
--
ALTER TABLE `galeri_logistik` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `galeri_maintenance`
--
ALTER TABLE `galeri_maintenance` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `galeri_operasional_yayasan`
--
ALTER TABLE `galeri_operasional_yayasan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `galeri_paudqu`
--
ALTER TABLE `galeri_paudqu` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `galeri_pemasukan`
--
ALTER TABLE `galeri_pemasukan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `galeri_program`
--
ALTER TABLE `galeri_program` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `galeri_uang_makan`
--
ALTER TABLE `galeri_uang_makan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `income_global`
--
ALTER TABLE `income_global` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_anggaran_lain`
--
ALTER TABLE `input_anggaran_lain` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_aset_yayasan`
--
ALTER TABLE `input_aset_yayasan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_gaji_karyawan`
--
ALTER TABLE `input_gaji_karyawan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_incometanparesi`
--
ALTER TABLE `input_incometanparesi` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_income_media`
--
ALTER TABLE `input_income_media` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_jasa`
--
ALTER TABLE `input_jasa` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_laporan_media`
--
ALTER TABLE `input_laporan_media` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_logistik`
--
ALTER TABLE `input_logistik` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_maintenance`
--
ALTER TABLE `input_maintenance` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_operasional_yayasan`
--
ALTER TABLE `input_operasional_yayasan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_paudqu`
--
ALTER TABLE `input_paudqu` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_program`
--
ALTER TABLE `input_program` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `input_uang_makan`
--
ALTER TABLE `input_uang_makan` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kritiksaran`
--
ALTER TABLE `kritiksaran` ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `log_aktivity`
--
ALTER TABLE `log_aktivity` ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `akun_pengurus`
--
ALTER TABLE `akun_pengurus`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 15;

--
-- AUTO_INCREMENT untuk tabel `asal_sekolah`
--
ALTER TABLE `asal_sekolah`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `data_akun`
--
ALTER TABLE `data_akun`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `data_anggaran_lain`
--
ALTER TABLE `data_anggaran_lain`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 13;

--
-- AUTO_INCREMENT untuk tabel `data_aset_yayasan`
--
ALTER TABLE `data_aset_yayasan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 13;

--
-- AUTO_INCREMENT untuk tabel `data_gaji_karyawan`
--
ALTER TABLE `data_gaji_karyawan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 13;

--
-- AUTO_INCREMENT untuk tabel `data_income`
--
ALTER TABLE `data_income`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 13;

--
-- AUTO_INCREMENT untuk tabel `data_jasa`
--
ALTER TABLE `data_jasa`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 13;

--
-- AUTO_INCREMENT untuk tabel `data_logistik`
--
ALTER TABLE `data_logistik`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 13;

--
-- AUTO_INCREMENT untuk tabel `data_maintenance`
--
ALTER TABLE `data_maintenance`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 13;

--
-- AUTO_INCREMENT untuk tabel `data_operasional_yayasan`
--
ALTER TABLE `data_operasional_yayasan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 13;

--
-- AUTO_INCREMENT untuk tabel `data_paudqu`
--
ALTER TABLE `data_paudqu`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 13;

--
-- AUTO_INCREMENT untuk tabel `data_program`
--
ALTER TABLE `data_program`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 13;

--
-- AUTO_INCREMENT untuk tabel `data_uang_makan`
--
ALTER TABLE `data_uang_makan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 13;

--
-- AUTO_INCREMENT untuk tabel `galeri_anggaran_lain`
--
ALTER TABLE `galeri_anggaran_lain`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `galeri_aset_yayasan`
--
ALTER TABLE `galeri_aset_yayasan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `galeri_gaji_karyawan`
--
ALTER TABLE `galeri_gaji_karyawan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `galeri_jasa`
--
ALTER TABLE `galeri_jasa`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `galeri_logistik`
--
ALTER TABLE `galeri_logistik`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `galeri_maintenance`
--
ALTER TABLE `galeri_maintenance`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `galeri_operasional_yayasan`
--
ALTER TABLE `galeri_operasional_yayasan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `galeri_paudqu`
--
ALTER TABLE `galeri_paudqu`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `galeri_pemasukan`
--
ALTER TABLE `galeri_pemasukan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `galeri_program`
--
ALTER TABLE `galeri_program`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `galeri_uang_makan`
--
ALTER TABLE `galeri_uang_makan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `income_global`
--
ALTER TABLE `income_global`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_anggaran_lain`
--
ALTER TABLE `input_anggaran_lain`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_aset_yayasan`
--
ALTER TABLE `input_aset_yayasan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_gaji_karyawan`
--
ALTER TABLE `input_gaji_karyawan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_incometanparesi`
--
ALTER TABLE `input_incometanparesi`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_income_media`
--
ALTER TABLE `input_income_media`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_jasa`
--
ALTER TABLE `input_jasa`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_laporan_media`
--
ALTER TABLE `input_laporan_media`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_logistik`
--
ALTER TABLE `input_logistik`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_maintenance`
--
ALTER TABLE `input_maintenance`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_operasional_yayasan`
--
ALTER TABLE `input_operasional_yayasan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_paudqu`
--
ALTER TABLE `input_paudqu`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_program`
--
ALTER TABLE `input_program`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `input_uang_makan`
--
ALTER TABLE `input_uang_makan`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `kritiksaran`
--
ALTER TABLE `kritiksaran`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `log_aktivity`
--
ALTER TABLE `log_aktivity`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 3;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;