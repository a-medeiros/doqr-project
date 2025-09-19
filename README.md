# DoQR Project

Employee management system built with Next.js.

## Clone the Repository

```bash
git clone https://github.com/a-medeiros/doqr-project.git
cd doqr-project
```

## How to Run

1. Create a `.env` file in the root directory (copy from `.env.example` if it exists):
```bash
cp .env.example .env
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser.

## How to Run Tests

1. run
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/ npm run dev
```

2. Start the mock API server:
```bash
npm run mock:api
```

3. Run tests
```bash
npx cypress open
```

Or run tests in headless mode:
```bash
npx cypress run
```
