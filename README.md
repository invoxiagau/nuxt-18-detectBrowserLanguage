## Setup

Install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the Docker image

```bash
chmod +x ./cloud-build
. cloud-build
```

Locally preview image, default on port 3000

```bash
chmod +x cloud-run
. cloud-run
```
