# Hospital Management Frontends

This workspace contains two frontend apps:

- `doctor-next` -> Doctor portal (Next.js + React)
- `patient-angular` -> Patient portal (Angular)

Both apps use a common role-based entry flow (Doctor or Patient) and do not use a traditional signup/signin page.

## Prerequisites

- Node.js `>= 20` (project tested with Node `22.x`)
- npm `>= 10`

Check your versions:

```bash
node --version
npm --version
```

## 1) Install dependencies

Run these commands from the workspace root:

```bash
cd doctor-next
npm install

cd ../patient-angular
npm install
```

## 2) Run both apps in development

Open two terminals.

Terminal 1 (Doctor - Next.js):

```bash
cd doctor-next
npm run dev
```

Terminal 2 (Patient - Angular):

```bash
cd patient-angular
npm run dev
```

Expected URLs:

- Doctor app: `http://localhost:3000`
- Patient app: `http://localhost:4200`

## 3) Verify role-based flow

1. Open either app URL.
2. Select a role on the landing page.
3. Confirm you are redirected to the correct dashboard.
4. Use `Switch role` or common links to return and choose again.

Role is stored in browser local storage using key:

- `hospital-portal-role`

If routing looks stuck on a previous role, clear local storage for that site and retry.

## 4) Production build checks

Doctor app build:

```bash
cd doctor-next
npm run build
```

Patient app build (PowerShell):

```powershell
cd patient-angular
$env:CI='1'; npm run build
```

Patient app build (bash):

```bash
cd patient-angular
CI=1 npm run build
```

## 5) Common issues and fixes

- Port already in use:
	- Stop the process using that port, then restart `npm run dev`.
- Angular dev server target errors:
	- Ensure `npm run dev` is executed inside `patient-angular`.
- Next.js module/type warnings after fresh clone:
	- Run `npm install` again in `doctor-next`, then rerun `npm run dev`.

## Project structure

```text
Hospitalmanagement/
|- doctor-next/
|- patient-angular/
|- Project Driven - Report (3).docx
|- README.md
```
