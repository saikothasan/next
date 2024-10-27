import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import https from 'https';

let data = [];

const fetchCSV = () => {
  https.get('https://raw.githubusercontent.com/venelinkochev/bin-list-data/refs/heads/master/bin-list-data.csv', (response) => {
    response.pipe(csv())
      .on('data', (row) => {
        data.push(row);
      });
  });
};

fetchCSV();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const bin = searchParams.get('bin');
  const result = data.find(item => item.BIN === bin);
  return NextResponse.json(result || { message: 'BIN not found' });
}
