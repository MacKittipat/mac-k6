import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';

export const options = {
  vus: 100,
  duration: '1s',
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}

export function handleSummary(data) {
  return {
    'stdout': textSummary(data),
    "summary.html": htmlReport(data),
  };
}