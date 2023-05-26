[![Netlify Status](https://api.netlify.com/api/v1/badges/1b647281-eb5a-45f7-8f47-c9972219b742/deploy-status)](https://app.netlify.com/sites/givtrackr/deploys)
# GivTrackr
![GivTrackr Home Page](https://github.com/mateitudose/givtrackr/assets/37705192/6ad08af3-04bd-44f1-b126-9126bf59dd50)

## Descriere
GivTrackr este o aplicație web care își propune să transparentizeze donațiile către ONG-uri, pentru a căpăta încrederea potențialilor donatori. Utilizatorii pot vedea în timp real cum sunt folosiți banii donați, iar ONG-urile pot să își gestioneze mai ușor donațiile.

De asemenea, GivTrackr scapă ONG-urile de grija de a-și face propriul site web, deoarece fiecare ONG are o pagină dedicată pe GivTrackr, pentru potențialii donatori.

## Tehnologii utilizate
- React
- Next JS - metaframework React
- Next UI - librărie de componente
- Supabase - autentificare securizată cu email si parolă, baza de date (PostgreSQL), stocare fișiere în bucket-uri
- CSS - stilizarea componentelor și a layout-ului
- Nordigen - serviciu de agregare a conturilor bancare

## Cum rulez proiectul?
1. Clonează proiectul
2. Instalează dependințele: `yarn install`
3. Rulează proiectul: `yarn run dev`
4. Defineste variabilele de mediu într-un fișier `.env.local`:
   1. `NEXT_PUBLIC_SUPABASE_URL` - URL-ul bazei de date
   2. `NEXT_PUBLIC_SUPABASE_ANON_KEY` - cheia anonimă a bazei de date
   3. `NORDIGEN_SECRET_ID` - client id-ul pentru Nordigen
   4. `NORDIGEN_SECRET_KEY` - client secret-ul pentru Nordigen
4. Deschide [http://localhost:3000](http://localhost:3000) în browser

## Resurse utilizate
- Fotografiile de pe site sunt preluate de pe site-urile ONG-urilor:
  - https://salvaticopiii.ro/
  - https://kolakariola.ro/
  - Asociația pentru Protecția Animalelor "Hope" (Facebook)
- Partea de verificare a sesiunii de autentificare a fost inspirată de pe [https://supabase.com/docs/guides/auth/auth-helpers/nextjs](https://supabase.com/docs/guides/auth/auth-helpers/nextjs), însă a fost modificată substanțial pentru a se potrivi cu configurația site-ului GivTrackr
  
