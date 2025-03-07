// TODO: make these a mapping from out to object instead of standalone structs
export const ADDRESS_LIMIT = {
  REQUEST: 100,
  RESPONSE: 1000,
};
export const UTXO_LIMIT = {
  REQUEST: 100,
  RESPONSE: 1000,
};
export const ASSET_LIMIT = {
  REQUEST: 1000,
  RESPONSE: 1000,
};

export const CREDENTIAL_LIMIT = {
  REQUEST: 50,
  RESPONSE: 50,
};

export const BLOCK_LIMIT = {
  OFFSET: 21600, // k parameter
};

export const DEX_PRICE_LIMIT = {
  REQUEST_ADDRESSES: 100,
  REQUEST_ASSET_PAIRS: 100,
  RESPONSE: 1000,
};
