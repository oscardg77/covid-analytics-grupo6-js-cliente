const hostName = 'http://https://covid-analytics-grupo6-api-laravel.test';
// Login / Logout
async function login(data = {}) {
  return await apiCall('POST', hostName + '/api/login', null, data);
};

async function logout() {
  return await apiCall('POST', hostName + '/api/logout',  null);
};

// Regions
async function listadoSumEntries() {
  return await apiCall('GET', hostName + '/api/entries', null, null);
};

async function crearRegions( data = {}) {
  return await apiCall('POST', hostName + '/api/regions', data);
};

async function getNumRegionsHoy() {
  return await apiCall('POST', hostName + '/api/numeroRegionsHoy',  null);
};

// Countries
async function listadoCountries() {
  return await apiCall('GET', hostName + '/api/listadoCountries',  null);
};

async function crearCountries(data={}) {
  return await apiCall('POST', hostName + '/api/crearCountries',  data);
};

async function marcarCountries( data, countriesId) {
  return await apiCall('PUT', hostName + '/api/marcarCountries/' + countriesId, data);
};

async function borrarCountries( countriesId) {
  return await apiCall('DELETE', hostName + '/api/borrar/' + countriesId, null);
};

// Entries
async function listadoEntries() {
  return await apiCall('GET', hostName + '/api/Entries',  null);
};

async function crearEntries( data={}) {
  return await apiCall('POST', hostName + '/api/crearEntries', token, data);
};

async function marcarEntries( data={}, entriesId) {
  return await apiCall('PUT', hostName + '/api/marcarEntries/' + entriesId, data);
};

async function borrarEntries( EntriesId) {
  return await apiCall('DELETE', hostName + '/api/borrarEntries/' + entriesId,  null);
};
// Datas
async function listadoDatas() {
  return await apiCall('GET', hostName + '/api/listadoDatas', null);
};

const apiCall = async (method, url) => {
  let config = {
    method: method,
    url: url,
  }


  const response = await axios(config);

  return response.data;
}

export {
  listadoSumEntries
}