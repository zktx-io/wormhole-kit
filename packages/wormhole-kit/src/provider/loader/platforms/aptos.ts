import * as _aptos from '@wormhole-foundation/sdk-aptos';

import type { IPlatformDefinition } from '../../types';

/** Platform and protocol definitions for Aptos */
const aptos: IPlatformDefinition<'Aptos'> = {
  Address: _aptos.AptosAddress,
  Platform: _aptos.AptosPlatform,
  protocolLoaders: {
    core: () => import('@wormhole-foundation/sdk-aptos-core'),
    tokenbridge: () => import('@wormhole-foundation/sdk-aptos-tokenbridge'),
  },
  getChain: (n, c) => new _aptos.AptosChain(c, new _aptos.AptosPlatform(n)),
};

export default aptos;
