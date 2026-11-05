# API Xəritəsi (Endpoints)

| Method | URL | Nə edir | Kim | Uğur | Xətalar |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GET | /barbers | Bərbərlərin/ustaların siyahısı | hər kəs | 200 | — |
| POST | /barbers | Yeni bərbər profili yaradır | ADMIN | 201 | 400, 401, 403 |
| GET | /barbers/:id | Bir bərbərin ətraflı məlumatı | hər kəs | 200 | 404 |
| PATCH | /barbers/:id | Bərbər məlumatını yeniləyir | bərbərin özü, ADMIN | 200 | 400, 401, 403, 404 |
| DELETE | /barbers/:id | Bərbər profilini silir | ADMIN | 204 | 401, 403, 404 |
| POST | /barbers/:id/appointments | Konkret saat üçün rezerv yazılır | CLIENT | 201 | 400, 401, 404, 409 |
| GET | /me/appointments | Daxil olmuş istifadəçinin öz rezervasiyaları | daxil olmuş istifadəçi | 200 | 401 |
| DELETE | /appointments/:id | Rezervasiyanı ləğv edir | rezervin sahibi, ADMIN | 204 | 401, 403, 404 |