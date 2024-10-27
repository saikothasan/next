import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

let data = [];

fs.createReadStream(path.join(process.cwd(), 'data', 'bins.csv'))
  .pipe(csv())
  .on('data', (row) => {
    data.push(row);
  });

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const bin = searchParams.get('bin');
  const result = data.find(item => item.bin === bin);
  return NextResponse.json(result || { message: 'BIN not found' });
}
