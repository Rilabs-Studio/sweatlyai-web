import type { Lang } from "./i18n";
import { CONTACT_EMAIL, PRIVACY_UPDATED } from "./config";

/* Structured, bilingual privacy policy. Content reflects the app's actual
   data practices per its docs: local-first & serverless, on-device Apple
   Foundation Models, sync via the user's own private iCloud (CloudKit),
   HealthKit read/write, GPS routes, Bluetooth HR, and optional import-only
   Strava. There is no SweatlyAI backend, no accounts, and no tracking. */

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Section = { id: string; title: string; blocks: Block[] };

export type PrivacyDoc = {
  title: string;
  updatedLabel: string;
  updated: string;
  backHome: string;
  intro: Block[];
  sections: Section[];
};

const en: PrivacyDoc = {
  title: "Privacy Policy",
  updatedLabel: "Last updated",
  updated: PRIVACY_UPDATED.en,
  backHome: "Back to home",
  intro: [
    {
      type: "p",
      text: "SweatlyAI is built privacy-first. It is a local-first, serverless app: your workouts, health data, location, and profile live on your device and sync only through your own private iCloud. There is no SweatlyAI server, no account to create, and no advertising or tracking. This policy explains what data the app accesses, why, and the choices you have.",
    },
    {
      type: "p",
      text: "In short: we do not collect your data on our own servers, because we do not operate any. All processing, including AI, happens on your device or within the Apple ecosystem you already trust.",
    },
  ],
  sections: [
    {
      id: "information-we-access",
      title: "1. Information the app accesses",
      blocks: [
        {
          type: "p",
          text: "SweatlyAI accesses the following categories of data, always with your permission and only to provide the app's features. This data stays on your device and your private iCloud unless noted otherwise.",
        },
        {
          type: "ul",
          items: [
            "Profile information you provide: your preferred sports, fitness level, training days, and session duration, plus optional details such as birth year, weight, resting heart rate, and maximum heart rate. This powers your training programs and heart-rate zones.",
            "Health and fitness data (Apple Health / HealthKit): with your permission, the app reads workouts, workout routes, heart rate, active energy, distance, resting heart rate, and heart-rate variability to track your progress and personalize training. Workouts you record with the app are written back to Apple Health so they appear there.",
            "Location data: with your permission, your location is used to record GPS routes for runs, rides, hikes, and open-water swims. Background location lets recording continue while your screen is off during a workout. Routes are stored on your device and in your private iCloud.",
            "Bluetooth: with your permission, the app connects to Bluetooth heart-rate monitors (such as chest straps) to display your heart rate during workouts tracked from your iPhone.",
            "AI processing: training programs and workout feedback are generated on-device using Apple Foundation Models (Apple Intelligence) where available, or expert-designed templates and rule-based feedback otherwise. Your data is not sent to any server for AI processing.",
          ],
        },
      ],
    },
    {
      id: "strava",
      title: "2. Strava (optional)",
      blocks: [
        {
          type: "p",
          text: "If you choose to connect Strava, SweatlyAI imports your activities into your local history. This integration is import-only — your workouts are never uploaded to Strava, and no Strava data is written to Apple Health.",
        },
        {
          type: "ul",
          items: [
            "The app requests read-only access (the activity:read_all scope) via Strava's official OAuth sign-in.",
            "Imported details may include activity name, sport type, dates, duration, distance, elevation, heart rate, cadence, speed, and route map data.",
            "Your Strava access tokens are stored securely in the device Keychain and are never shared with us.",
            "You can disconnect Strava at any time from the profile screen, which removes the stored tokens.",
          ],
        },
        {
          type: "p",
          text: "Your use of Strava is also governed by Strava's own privacy policy.",
        },
      ],
    },
    {
      id: "storage-and-sync",
      title: "3. How your data is stored and synced",
      blocks: [
        {
          type: "ul",
          items: [
            "All of your data is stored on your device and synced across your own Apple devices through your private iCloud account (Apple CloudKit private database).",
            "SweatlyAI does not operate any backend server and never receives a copy of your personal data.",
            "The only public data the app reads is a read-only monthly challenge catalog — it contains no personal information about you.",
            "Progress such as streaks, goals, and challenge completion is recomputed from your own activities on your device, not stored on any server.",
          ],
        },
      ],
    },
    {
      id: "what-we-dont-do",
      title: "4. What we do not do",
      blocks: [
        {
          type: "ul",
          items: [
            "We do not require an account or sign-up.",
            "We do not run analytics, tracking, or advertising SDKs.",
            "We do not sell, rent, or share your personal data with data brokers or advertisers.",
            "We do not send your health, location, or workout data to any SweatlyAI server — there is none.",
          ],
        },
      ],
    },
    {
      id: "sharing",
      title: "5. Data sharing",
      blocks: [
        {
          type: "p",
          text: "Because there is no SweatlyAI server, we do not receive or share your data. Data only moves within services you control and have authorized:",
        },
        {
          type: "ul",
          items: [
            "Apple: Apple Health, iCloud, and CloudKit store and sync your data under Apple's privacy protections and your iCloud settings.",
            "Strava: only if you connect it, and only as a one-way import into the app.",
          ],
        },
      ],
    },
    {
      id: "your-choices",
      title: "6. Your controls and choices",
      blocks: [
        {
          type: "ul",
          items: [
            "You control every permission (Health, Location, Bluetooth) and can change or revoke it anytime in the iOS Settings app.",
            "Health permissions are requested only when first relevant, not during onboarding.",
            "You can disconnect Strava at any time from within the app.",
            "You can turn off iCloud sync for SweatlyAI in iOS Settings.",
          ],
        },
      ],
    },
    {
      id: "retention-and-deletion",
      title: "7. Data retention and deletion",
      blocks: [
        {
          type: "ul",
          items: [
            "Your data remains on your device and in your iCloud for as long as you keep the app installed and iCloud sync enabled.",
            "Deleting the app removes its on-device data. To remove synced data, delete the app's data from your iCloud storage in iOS Settings.",
            "Workouts deleted in Apple Health that were owned by Health are also removed from the app on the next sync.",
            "Manage or delete your Apple Health and iCloud data at any time through the Apple Health app and iOS Settings.",
          ],
        },
      ],
    },
    {
      id: "security",
      title: "8. Security",
      blocks: [
        {
          type: "p",
          text: "Your data benefits from the security of the Apple platform: on-device storage, your private iCloud, and the device Keychain for sensitive tokens. Because we never receive your data, there is no central database of user information to breach.",
        },
      ],
    },
    {
      id: "children",
      title: "9. Children's privacy",
      blocks: [
        {
          type: "p",
          text: "SweatlyAI is not directed to children under 13, and we do not knowingly collect data from children. Because the app has no server and collects no data centrally, any information stays on the user's own device and iCloud.",
        },
      ],
    },
    {
      id: "changes",
      title: "10. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We may update this policy as the app evolves. Material changes will be reflected here with a new effective date. Your continued use of the app after an update means you accept the revised policy.",
        },
      ],
    },
    {
      id: "contact",
      title: "11. Contact us",
      blocks: [
        {
          type: "p",
          text: `If you have questions about this policy or your privacy, contact us at ${CONTACT_EMAIL}.`,
        },
      ],
    },
  ],
};

const id: PrivacyDoc = {
  title: "Kebijakan Privasi",
  updatedLabel: "Terakhir diperbarui",
  updated: PRIVACY_UPDATED.id,
  backHome: "Kembali ke beranda",
  intro: [
    {
      type: "p",
      text: "SweatlyAI dibangun dengan mengutamakan privasi. Ini adalah aplikasi local-first dan tanpa server: olahraga, data kesehatan, lokasi, dan profilmu tersimpan di perangkatmu dan hanya disinkronkan melalui iCloud pribadimu sendiri. Tidak ada server SweatlyAI, tidak ada akun yang perlu dibuat, dan tidak ada iklan atau pelacakan. Kebijakan ini menjelaskan data apa yang diakses aplikasi, alasannya, dan pilihan yang kamu miliki.",
    },
    {
      type: "p",
      text: "Singkatnya: kami tidak mengumpulkan datamu di server kami sendiri, karena kami tidak mengoperasikan server apa pun. Semua pemrosesan, termasuk AI, terjadi di perangkatmu atau di dalam ekosistem Apple yang sudah kamu percaya.",
    },
  ],
  sections: [
    {
      id: "informasi-yang-diakses",
      title: "1. Informasi yang diakses aplikasi",
      blocks: [
        {
          type: "p",
          text: "SweatlyAI mengakses kategori data berikut, selalu dengan izinmu dan hanya untuk menjalankan fitur aplikasi. Data ini tetap berada di perangkatmu dan iCloud pribadimu kecuali disebutkan lain.",
        },
        {
          type: "ul",
          items: [
            "Informasi profil yang kamu berikan: olahraga favorit, tingkat kebugaran, hari latihan, dan durasi sesi, serta detail opsional seperti tahun lahir, berat badan, detak jantung istirahat, dan detak jantung maksimum. Data ini menjadi dasar program latihan dan zona detak jantungmu.",
            "Data kesehatan & kebugaran (Apple Health / HealthKit): dengan izinmu, aplikasi membaca olahraga, rute olahraga, detak jantung, energi aktif, jarak, detak jantung istirahat, dan variabilitas detak jantung untuk melacak progres dan mempersonalisasi latihan. Olahraga yang kamu rekam dengan aplikasi ditulis kembali ke Apple Health agar muncul di sana.",
            "Data lokasi: dengan izinmu, lokasimu digunakan untuk merekam rute GPS saat lari, bersepeda, hiking, dan renang perairan terbuka. Lokasi latar belakang memungkinkan perekaman terus berjalan saat layar mati selama olahraga. Rute disimpan di perangkatmu dan di iCloud pribadimu.",
            "Bluetooth: dengan izinmu, aplikasi terhubung ke monitor detak jantung Bluetooth (seperti chest strap) untuk menampilkan detak jantungmu selama olahraga yang dilacak dari iPhone.",
            "Pemrosesan AI: program latihan dan feedback olahraga dibuat di perangkat menggunakan Apple Foundation Models (Apple Intelligence) jika tersedia, atau template rancangan ahli dan feedback berbasis aturan bila tidak. Datamu tidak dikirim ke server mana pun untuk pemrosesan AI.",
          ],
        },
      ],
    },
    {
      id: "strava",
      title: "2. Strava (opsional)",
      blocks: [
        {
          type: "p",
          text: "Jika kamu memilih menghubungkan Strava, SweatlyAI mengimpor aktivitasmu ke riwayat lokal. Integrasi ini hanya untuk impor — olahragamu tidak pernah diunggah ke Strava, dan tidak ada data Strava yang ditulis ke Apple Health.",
        },
        {
          type: "ul",
          items: [
            "Aplikasi meminta akses baca-saja (scope activity:read_all) melalui login OAuth resmi Strava.",
            "Detail yang diimpor dapat mencakup nama aktivitas, jenis olahraga, tanggal, durasi, jarak, elevasi, detak jantung, kadensi, kecepatan, dan data peta rute.",
            "Token akses Strava-mu disimpan dengan aman di Keychain perangkat dan tidak pernah dibagikan kepada kami.",
            "Kamu bisa memutuskan Strava kapan saja dari layar profil, yang akan menghapus token yang tersimpan.",
          ],
        },
        {
          type: "p",
          text: "Penggunaan Strava olehmu juga tunduk pada kebijakan privasi Strava sendiri.",
        },
      ],
    },
    {
      id: "penyimpanan-sinkronisasi",
      title: "3. Cara data disimpan dan disinkronkan",
      blocks: [
        {
          type: "ul",
          items: [
            "Semua datamu disimpan di perangkatmu dan disinkronkan antar perangkat Apple milikmu melalui akun iCloud pribadimu (Apple CloudKit private database).",
            "SweatlyAI tidak mengoperasikan server backend apa pun dan tidak pernah menerima salinan data pribadimu.",
            "Satu-satunya data publik yang dibaca aplikasi adalah katalog tantangan bulanan yang bersifat baca-saja — tidak berisi informasi pribadi tentangmu.",
            "Progres seperti streak, target, dan penyelesaian tantangan dihitung ulang dari aktivitasmu sendiri di perangkatmu, bukan disimpan di server mana pun.",
          ],
        },
      ],
    },
    {
      id: "yang-tidak-kami-lakukan",
      title: "4. Yang tidak kami lakukan",
      blocks: [
        {
          type: "ul",
          items: [
            "Kami tidak mewajibkan akun atau pendaftaran.",
            "Kami tidak menjalankan SDK analitik, pelacakan, atau iklan.",
            "Kami tidak menjual, menyewakan, atau membagikan data pribadimu kepada broker data atau pengiklan.",
            "Kami tidak mengirim data kesehatan, lokasi, atau olahragamu ke server SweatlyAI mana pun — karena tidak ada.",
          ],
        },
      ],
    },
    {
      id: "pembagian-data",
      title: "5. Pembagian data",
      blocks: [
        {
          type: "p",
          text: "Karena tidak ada server SweatlyAI, kami tidak menerima atau membagikan datamu. Data hanya bergerak di dalam layanan yang kamu kendalikan dan sudah kamu izinkan:",
        },
        {
          type: "ul",
          items: [
            "Apple: Apple Health, iCloud, dan CloudKit menyimpan dan menyinkronkan datamu di bawah perlindungan privasi Apple dan pengaturan iCloud-mu.",
            "Strava: hanya jika kamu menghubungkannya, dan hanya sebagai impor satu arah ke dalam aplikasi.",
          ],
        },
      ],
    },
    {
      id: "pilihanmu",
      title: "6. Kontrol dan pilihanmu",
      blocks: [
        {
          type: "ul",
          items: [
            "Kamu mengendalikan setiap izin (Kesehatan, Lokasi, Bluetooth) dan bisa mengubah atau mencabutnya kapan saja di aplikasi Pengaturan iOS.",
            "Izin Kesehatan hanya diminta saat pertama kali relevan, bukan saat onboarding.",
            "Kamu bisa memutuskan Strava kapan saja dari dalam aplikasi.",
            "Kamu bisa mematikan sinkronisasi iCloud untuk SweatlyAI di Pengaturan iOS.",
          ],
        },
      ],
    },
    {
      id: "retensi-penghapusan",
      title: "7. Retensi dan penghapusan data",
      blocks: [
        {
          type: "ul",
          items: [
            "Datamu tetap berada di perangkatmu dan di iCloud selama kamu memasang aplikasi dan mengaktifkan sinkronisasi iCloud.",
            "Menghapus aplikasi akan menghapus data di perangkat. Untuk menghapus data yang tersinkron, hapus data aplikasi dari penyimpanan iCloud-mu di Pengaturan iOS.",
            "Olahraga yang dihapus di Apple Health yang dimiliki oleh Health juga dihapus dari aplikasi pada sinkronisasi berikutnya.",
            "Kelola atau hapus data Apple Health dan iCloud-mu kapan saja melalui aplikasi Apple Health dan Pengaturan iOS.",
          ],
        },
      ],
    },
    {
      id: "keamanan",
      title: "8. Keamanan",
      blocks: [
        {
          type: "p",
          text: "Datamu terlindungi oleh keamanan platform Apple: penyimpanan di perangkat, iCloud pribadimu, dan Keychain perangkat untuk token sensitif. Karena kami tidak pernah menerima datamu, tidak ada basis data pusat informasi pengguna yang bisa dibobol.",
        },
      ],
    },
    {
      id: "anak-anak",
      title: "9. Privasi anak",
      blocks: [
        {
          type: "p",
          text: "SweatlyAI tidak ditujukan untuk anak di bawah 13 tahun, dan kami tidak dengan sengaja mengumpulkan data dari anak-anak. Karena aplikasi tidak memiliki server dan tidak mengumpulkan data secara terpusat, informasi apa pun tetap berada di perangkat dan iCloud pengguna sendiri.",
        },
      ],
    },
    {
      id: "perubahan",
      title: "10. Perubahan kebijakan ini",
      blocks: [
        {
          type: "p",
          text: "Kami dapat memperbarui kebijakan ini seiring perkembangan aplikasi. Perubahan penting akan tercermin di sini dengan tanggal berlaku yang baru. Melanjutkan penggunaan aplikasi setelah pembaruan berarti kamu menyetujui kebijakan yang telah direvisi.",
        },
      ],
    },
    {
      id: "kontak",
      title: "11. Hubungi kami",
      blocks: [
        {
          type: "p",
          text: `Jika ada pertanyaan tentang kebijakan ini atau privasimu, hubungi kami di ${CONTACT_EMAIL}.`,
        },
      ],
    },
  ],
};

export const privacyDoc: Record<Lang, PrivacyDoc> = { en, id };
