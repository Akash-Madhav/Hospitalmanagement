# Hospital Management Frontends

This workspace contains two separate frontend apps:

- `doctor-next/` - Next.js app for the doctor portal
- `patient-angular/` - Angular app for the patient portal

Both apps use the same role-based landing page pattern instead of a username/password signin flow. A role choice is stored in local storage and used to route into the matching dashboard.

## Doctor portal

```bash
cd doctor-next
npm install
npm run dev
```

## Patient portal

```bash
cd patient-angular
npm install
npm run start
```

## Build checks

```bash
cd doctor-next
npm run build

cd patient-angular
CI=1 npm run build
```
