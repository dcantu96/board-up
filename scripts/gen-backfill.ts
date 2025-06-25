import fs from "fs";
import path from "path";

const MIGRATIONS_DIR = path.join(__dirname, "../prisma/migrations");
const BACKFILLS_DIR = path.join(__dirname, "./backfills");

async function main() {
  const migrations = fs.readdirSync(MIGRATIONS_DIR).sort();
  const latestMigration = migrations[migrations.length - 1];
  const migrationName = latestMigration;
  const backfillFilename = `${migrationName}.ts`;
  const backfillPath = path.join(BACKFILLS_DIR, backfillFilename);

  if (fs.existsSync(backfillPath)) {
    console.log(`❌ Backfill script already exists: ${backfillFilename}`);
    return;
  }

  const template = `import { PrismaClient } from '@prisma/client'

export default async function (prisma: PrismaClient) {
  // TODO: Write backfill logic for "${migrationName}"
  // Example:
  // await prisma.user.updateMany({ data: { someField: 'defaultValue' } })
}
`;

  fs.writeFileSync(backfillPath, template);
  console.log(`✅ Created backfill script: ${backfillFilename}`);
}

main();
