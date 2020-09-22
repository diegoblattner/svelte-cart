import { writable, derived } from 'svelte/store';

enum SupportedCurrencies {
  EUR = 'EUR',
}

const currency = writable<SupportedCurrencies>(SupportedCurrencies.EUR);

export const moneyFormat = derived(currency, (currencyCode) => (
  new Intl.NumberFormat([...navigator.languages], {
    style: 'currency',
    currency: currencyCode,
  }).format
));
