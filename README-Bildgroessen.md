# Einheitliches Bildgrößen-System für Biohof Eickmanns Website

## Übersicht der verfügbaren Bildgrößen

### 1. **Logo** (`.logo`)
- **Verwendung**: Header-Logo
- **Größe**: 140px Höhe, automatische Breite
- **Beispiel**: `<img src="bilder/logo.jpg" alt="Logo" class="logo">`

### 2. **Portrait** (`.bild-portrait`)
- **Verwendung**: Personenfotos (Marlene, Ludwig, Ronja)
- **Größe**: 160px × 200px
- **Beispiel**: `<img src="bilder/marlene.jpg" alt="Marlene" class="bild-portrait">`

### 3. **Klein** (`.bild-klein`)
- **Verwendung**: Kleine Detailbilder
- **Größe**: 200px × 150px
- **Beispiel**: `<img src="bilder/detail.jpg" alt="Detail" class="bild-klein">`

### 4. **Mittel** (`.bild-mittel`)
- **Verwendung**: Standard-Inhaltsbilder, Arbeitsfotos
- **Größe**: 300px × 200px
- **Beispiel**: `<img src="bilder/arbeit.jpg" alt="Arbeitsgang" class="bild-mittel">`

### 5. **Groß** (`.bild-gross`)
- **Verwendung**: Hervorgehobene Einzelbilder
- **Größe**: 100% Breite, max. 600px, 400px Höhe
- **Beispiel**: `<img src="bilder/highlight.jpg" alt="Hauptbild" class="bild-gross">`

### 6. **Vollbreite** (`.bild-vollbreite`)
- **Verwendung**: Panorama-Aufnahmen, Hofansichten
- **Größe**: 100% Breite, automatische Höhe (max. 500px)
- **Beispiel**: `<img src="bilder/hofv2.jpg" alt="Hof" class="bild-vollbreite">`

## Container für Bilderreihen

### **Einheitliche Bilderreihe** (`.bilderreihe-einheitlich`)
- **Verwendung**: Mehrere Bilder nebeneinander
- **Layout**: Flexbox mit 2em Abstand
- **Beispiel**:
```html
<div class="bilderreihe-einheitlich">
  <img src="bild1.jpg" alt="Bild 1" class="bild-mittel">
  <img src="bild2.jpg" alt="Bild 2" class="bild-mittel">
  <img src="bild3.jpg" alt="Bild 3" class="bild-mittel">
</div>
```

## Automatische Features

- **Hover-Effekte**: Alle Bilder vergrößern sich leicht beim Überfahren
- **Responsive Design**: Auf Mobilgeräten werden die Bilder automatisch kleiner
- **Einheitliches Styling**: Alle Bilder haben abgerundete Ecken und Schatten
- **object-fit: cover**: Bilder werden immer passend beschnitten, ohne zu verzerren

## Umstellung bestehender Bilder

### Vorher (veraltet):
```html
<img src="bild.jpg" style="width: 100%;">
<img src="bild.jpg" class="portrait">
<div class="kleinbilder-reihe">...
```

### Nachher (empfohlen):
```html
<img src="bild.jpg" class="bild-vollbreite">
<img src="bild.jpg" class="bild-portrait">  
<div class="bilderreihe-einheitlich">...
```

## Responsive Verhalten

- **Desktop**: Vollgrößen wie definiert
- **Mobil (< 600px)**: 
  - `bild-klein`: 150×120px
  - `bild-mittel`: 250×170px  
  - `bild-gross`: reduzierte Höhe (300px)
  - `bild-portrait`: 140×180px

Dieses System sorgt für:
✅ Einheitliche Optik
✅ Bessere Performance (feste Größen)
✅ Einfache Wartung
✅ Responsives Design 