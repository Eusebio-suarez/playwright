# Playwright - Guía de Instalación y Configuración
---

# Paso 1: Instalar Playwright

Ejecuta el siguiente comando:

```bash
npm init playwright@latest
```

Durante la instalación aparecerán varias preguntas.

## ¿Dónde guardar las pruebas?

```
Where to put your end-to-end tests?
```

Respuesta recomendada:

```
tests
```

Aquí se almacenarán todos los archivos de prueba.

---

## ¿Agregar GitHub Actions?

```
Add a GitHub Actions workflow?
```

Si únicamente deseas aprender Playwright, puedes responder:

```
No
```

Si tu proyecto utilizará integración continua (CI/CD), puedes responder:

```
Yes
```

---

## ¿Instalar los navegadores?
```
Install Playwright browsers?
> No
```

---

## Paso 2. Instalar únicamente Chromium

Una vez finalizada la instalación, ejecuta:

```bash
npx playwright install chromium
```
---

# Estructura del proyecto

Una vez finalizada la instalación, tendrás una estructura similar a la siguiente:

```text
playwright-demo/
│
├── tests/
│   └── example.spec.ts
│
├── node_modules/
│
├── playwright.config.ts
│
├── package.json
│
└── package-lock.json
```

## ¿Qué hace cada archivo?

### tests/

Contiene todas las pruebas automatizadas.

Ejemplo:

```
tests/
    login.spec.ts
    carrito.spec.ts
```

---

### playwright.config.ts

Es el archivo principal de configuración de Playwright.

Desde aquí puedes configurar:

- Navegadores
- URL base
- Tiempo máximo de espera
- Capturas de pantalla
- Videos
- Reportes
- Ejecución en paralelo

---

### package.json

Contiene:

- Nombre del proyecto.
- Dependencias.
- Scripts para ejecutar Playwright.

---

### node_modules/

Contiene todas las librerías instaladas mediante npm.

No debe modificarse manualmente.

---

# Paso 3: Ejecutar las pruebas

## Ejecutar todas las pruebas

```bash
npx playwright test
```

---

## Ejecutar mostrando el navegador

```bash
npx playwright test --headed
```

Este modo es útil para observar cómo Playwright interactúa con la aplicación.

---

## Abrir la interfaz gráfica

```bash
npx playwright test --ui
```

Permite ejecutar las pruebas desde una interfaz visual.

---


# Instalación completada

Si al ejecutar:

```bash

npx playwright test --project=chromium

```

obtienes una salida similar a:

```text
Running 1 test

✓ tests/example.spec.ts

1 passed
```

significa que Playwright se ha instalado y configurado correctamente, y ya puedes comenzar a crear tus propias pruebas automatizadas.

---

# Comandos más utilizados

| Comando | Descripción |
|----------|-------------|
| `npm init playwright@latest` | Instala y configura Playwright. |
| `npx playwright test` | Ejecuta todas las pruebas. |
| `npx playwright test tests/login.spec.ts` | Ejecuta una prueba específica. |
| `npx playwright test --headed` | Ejecuta las pruebas mostrando el navegador. |
| `npx playwright test --ui` | Abre la interfaz gráfica de Playwright. |
| `npx playwright install` | Instala o reinstala los navegadores. |
| `npx playwright codegen` | Genera código automáticamente mientras interactúas con una página web. |

---