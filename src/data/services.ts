export interface ServiceItem {
  name: string;
  category: "laptop" | "calculator" | "servicii-it";
  description?: string;
}

export const servicesData: ServiceItem[] = [
  // Reparații Laptop
  { name: "Reparații / Înlocuire Plăci de Bază", category: "laptop", description: "Diagnoză și lipire chipuri, înlocuire condensatori, rezolvare scurtcircuite pe placa de bază laptop." },
  { name: "Reparații Chipuri Video", category: "laptop", description: "Reballing și reflow profesional pentru chipuri video AMD/NVIDIA dezlipite." },
  { name: "Înlocuire Display Laptop", category: "laptop", description: "Înlocuire ecran spart, cu pixeli morți sau fără iluminare. Montaj rapid în magazin." },
  { name: "Curățare De Praf / Mentenanță", category: "laptop", description: "Curățare completă a sistemului de răcire, prevenirea supraîncălzirii și a opririlor bruște." },
  { name: "Înlocuire Pastă Termică", category: "laptop", description: "Aplicare pastă termoconductoare de înaltă calitate (Arctic MX-4/MX-6) pentru reducerea temperaturilor." },
  { name: "Înlocuire Thermal Pads", category: "laptop", description: "Înlocuire paduri termice uzate pe memorii și VRM pentru stabilitate termică maximă." },
  { name: "Reparații / Înlocuire Balamale Display", category: "laptop", description: "Repararea sau înlocuirea balamalelor rupte sau blocate care pot distruge carcasa." },
  { name: "Reparații / Înlocuire Cablu Video / LVDS", category: "laptop", description: "Remedierea problemelor de pâlpâire a ecranului sau lipsă semnal la mișcarea capacului." },
  { name: "Înlocuire Tastatură", category: "laptop", description: "Schimbare tastatură defectă, taste lipsă sau vărsat lichide pe ea." },
  { name: "Reparații / Înlocuire Mufă de Alimentare", category: "laptop", description: "Remedierea contactului imperfect la mufa de încărcare (DC Jack) a laptopului." },
  { name: "Înlocuire SSD/HDD", category: "laptop", description: "Montare SSD rapid (SATA sau M.2 NVMe) pentru pornire în câteva secunde." },
  { name: "Reparații / Înlocuire Unitate Optică DVDRW", category: "laptop", description: "Înlocuire unitate optică sau montare adaptor Caddy pentru al doilea SSD/HDD." },
  { name: "Înlocuire Baterie / Acumulator", category: "laptop", description: "Schimbare baterie uzată care nu mai ține curent sau este umflată." },
  { name: "Înlocuire Placă WiFi", category: "laptop", description: "Upgrade placă de rețea wireless pentru viteze mai mari și stabilitate la conexiune." },
  { name: "Reparații / Înlocuire Porturi Audio / Video", category: "laptop", description: "Înlocuire jack căști, port HDMI sau VGA defect de pe placa de bază." },
  { name: "Reparații / Înlocuire Porturi USB", category: "laptop", description: "Remedierea porturilor USB deteriorate sau nefuncționale prin microsudură." },
  { name: "Reparații / Înlocuire Sistem Răcire", category: "laptop", description: "Înlocuirea heatsink-ului (radiatorului) din cupru îndoit sau fisurat." },
  { name: "Reparații / Înlocuire Cooler Ventilator", category: "laptop", description: "Schimbare ventilator zgomotos sau gripat care nu mai răcește corespunzător." },
  { name: "Rescriere BIOS", category: "laptop", description: "Programare cip BIOS pe programator extern în caz de update eșuat sau parolă uitată." },
  { name: "Reparații / Înlocuire Carcasă Spartă", category: "laptop", description: "Înlocuirea elementelor de carcasă crăpate sau rupte (palmrest, capac display, bottom cover)." },
  { name: "Reconstrucție Elemente Lipsă", category: "laptop", description: "Reconstrucție prinderi de șuruburi din plastic și metal folosind rășini speciale." },
  { name: "Deparolare Windows", category: "laptop", description: "Recuperarea accesului sau resetarea parolei de utilizator Windows pierdută." },
  { name: "Upgrade Memorie RAM", category: "laptop", description: "Instalare module RAM suplimentare pentru multitasking fără întreruperi." },
  { name: "Upgrade HDD / SSD", category: "laptop", description: "Upgrade spațiu de stocare de la hard disk tradițional la SSD ultra-rapid." },

  // Reparații Calculatoare
  { name: "Reparații / Înlocuire Plăci de Bază", category: "calculator", description: "Schimbare condensatori umflați, diagnosticare cip de rețea/sunet sau înlocuire completă placă de bază desktop." },
  { name: "Reparații / Înlocuire Plăci Video", category: "calculator", description: "Curățare, schimbare pastă/paduri sau înlocuire placă video defectă." },
  { name: "Curățare De Praf / Mentenanță", category: "calculator", description: "Suflare praf cu compresor, management cabluri și curățare ventilatoare carcasă." },
  { name: "Înlocuire Pastă Termică", category: "calculator", description: "Curățare pastă veche arsă de pe CPU și GPU și aplicare pastă premium." },
  { name: "Înlocuire Procesor", category: "calculator", description: "Instalare procesor nou (Intel/AMD), upgrade socket sau remediere pini îndoiți." },
  { name: "Reparații / Înlocuire Cooler Ventilator", category: "calculator", description: "Înlocuire cooler stoc sau montare cooler performant de tip turn / răcire lichidă (AIO)." },
  { name: "Îmbunătățire Sistem Răcire Air Flow", category: "calculator", description: "Configurare flux de aer corect în carcasă prin adăugarea de ventilatoare adiționale." },
  { name: "Înlocuire Sursă Alimentare", category: "calculator", description: "Instalare sursă de alimentare certificată (80+) eficientă pentru stabilitatea componentelor." },
  { name: "Înlocuire SSD/HDD", category: "calculator", description: "Upgrade stocare desktop, clonare sistem de operare pe noul mediu rapid." },
  { name: "Înlocuire Unitate Optică DVDRW", category: "calculator", description: "Înlocuire unitate citire/scriere CD/DVD pe interfață SATA." },
  { name: "Înlocuire Placă Rețea sau Wifi", category: "calculator", description: "Montare placă adițională PCI-Express Gigabit Ethernet sau placă Wi-Fi de mare viteză cu antene." },
  { name: "Înlocuire Placă de sunet", category: "calculator", description: "Instalare placă de sunet dedicată internă sau externă pe USB pentru fidelitate audio sporită." },
  { name: "Înlocuire Memorie RAM", category: "calculator", description: "Diagnosticare erori RAM (MemTest) și înlocuire/adugare module noi DDR4/DDR5." },
  { name: "Configurare BIOS", category: "calculator", description: "Optimizare setări BIOS, configurare profil XMP pentru memorii, activare UEFI/Secure Boot pentru Windows 11." },
  { name: "Upgrade / Rescriere BIOS", category: "calculator", description: "Update de firmware BIOS pentru compatibilitate cu noi procesoare sau stabilitate sistem." },
  { name: "Deparolare Windows", category: "calculator", description: "Resetare parolă cont utilizator local Windows pe calculatoare desktop." },
  { name: "Upgrade Placă De Bază", category: "calculator", description: "Upgrade platformă completă, adaptare la carcasă existentă." },
  { name: "Upgrade Procesor", category: "calculator", description: "Trecerea la o generație mai performantă de procesor compatibilă cu placa de bază." },
  { name: "Upgrade Memorie RAM", category: "calculator", description: "Dublarea memoriei pentru rulare optimă în jocuri sau editare foto/video." },
  { name: "Upgrade Placă Video", category: "calculator", description: "Înlocuire GPU cu model de generație nouă pentru fps-uri stabile în jocuri recente." },
  { name: "Upgrade HDD / SSD", category: "calculator", description: "Adăugare mediu de stocare NVMe M.2 pe placa de bază." },
  { name: "Upgrade Sistem Răcire", category: "calculator", description: "Instalare coolere silențioase de mari dimensiuni sau kit-uri custom water cooling." },
  { name: "Upgrade Carcasă", category: "calculator", description: "Mutarea componentelor existente într-o carcasă modernă cu panou din sticlă și airflow optimizat." },
  { name: "Upgrade Calculator Complet", category: "calculator", description: "Recondiționare generală: înlocuire componente cheie pentru a readuce calculatorul la zi." },

  // Servicii IT & Soluționare Probleme
  { name: "Instalare Windows", category: "servicii-it", description: "Instalare profesională Windows 10 sau 11 cu licența clientului, configurare completă." },
  { name: "Instalare Mac OS X", category: "servicii-it", description: "Instalare/Reinstalare sistem de operare pe iMac, MacBook Pro, MacBook Air (Big Sur, Monterey, Ventura, Sonoma)." },
  { name: "Reparare Windows / Mac OS X", category: "servicii-it", description: "Rezolvare erori sistem, ecrane albastre/gri, probleme la pornire (bootloop) fără pierderea datelor." },
  { name: "Curățare De Praf", category: "servicii-it", description: "Mentenanță preventivă completă PC/Laptop (curățare fizică, înlocuire consumabile termice)." },
  { name: "Schimbare Pastă Termică", category: "servicii-it", description: "Îndepărtarea pastei uscate și aplicarea pastei noi pe procesor și placa video." },
  { name: "Devirusare", category: "servicii-it", description: "Identificare și eliminare virusi, spyware, adware, troieni, reinstalare protecție antivirus activă." },
  { name: "Optimizare Calculator / Laptop", category: "servicii-it", description: "Dezactivare programe inutile la startup, curățare regiștri și fișiere temporare pentru pornire rapidă." },
  { name: "Update Drivere", category: "servicii-it", description: "Instalarea ultimelor drivere oficiale stabile pentru componentele hardware (placă video, chipset, Wi-Fi)." },
  { name: "Recuperare date șterse", category: "servicii-it", description: "Recuperare poze, documente importante de pe stick-uri USB, carduri de memorie sau hard disk-uri defecte logic." },
  { name: "Configurare BIOS", category: "servicii-it", description: "Setare parametri optimi, controlul turației ventilatoarelor pentru silențiozitate." },
  { name: "Update BIOS", category: "servicii-it", description: "Instalarea celei mai recente versiuni oficiale de BIOS/UEFI." },
  { name: "Diagnoză Calculator / Laptop", category: "servicii-it", description: "Testare amănunțită cu echipamente hardware pentru identificarea exactă a piesei defecte." },
  { name: "Testare Componente", category: "servicii-it", description: "Stress-test sub sarcină maximă pentru a depista instabilități la temperaturi ridicate." },
  { name: "Asamblare Calculator", category: "servicii-it", description: "Asamblare profesională a calculatorului din piese alese de tine, wire-management impecabil." },
  { name: "Configurare Calculator", category: "servicii-it", description: "Instalare Windows, drivere, programe de bază, gata de utilizare." },
  { name: "Consultanță Achiziție Calculator", category: "servicii-it", description: "Ajutor în alegerea componentelor ideale raport calitate-preț în funcție de buget și destinație (gaming/office/editare)." },
  { name: "Consultanță Achiziție Laptop", category: "servicii-it", description: "Recomandări personalizate pentru cumpărarea unui laptop fiabil și potrivit cerințelor tale." }
];

export const badgeGuides = [
  { text: "Merge Greu – Rezolvăm", type: "slow" },
  { text: "Dă Erori – Rezolvăm", type: "errors" },
  { text: "Se Blochează – Rezolvăm", type: "freeze" },
  { text: "Nu Merg Jocurile – Rezolvăm", type: "gaming" },
  { text: "Ecrane Albastre – Rezolvăm", type: "bsod" },
  { text: "Să fie mai rapid – Rezolvăm", type: "speedup" }
];
