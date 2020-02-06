import { fetchCountries } from './api';
import search from './search';

fetchCountries();

document.getElementById('countriesSearch').addEventListener('input', search);
