const common = `
  --require-module ts-node/register
  --require tests/e2e/src/**/*.ts
  --format json:tests/e2e/reports/report.json 
  --format message:tests/e2e/reports/report.ndjson
  --format html:tests/e2e/reports/report.html
  --format summary 
  --format progress-bar 
  --format @cucumber/pretty-formatter
  --format-options ${JSON.stringify({ snippetInterface: 'async-await' })}
  --publish-quiet
  `;

const getWorldParams = () => {
  const params = {
    foo: 'bar',
  };

  return `--world-parameters ${JSON.stringify({ params })}`;
};

module.exports = {
  default: `${common} ${getWorldParams()}`,
};
