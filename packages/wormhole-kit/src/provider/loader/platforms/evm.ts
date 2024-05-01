import * as _evm from '@wormhole-foundation/sdk-evm';

import type { IPlatformDefinition } from '../../types';

/** Platform and protocol definitions for Evm */
const evm: IPlatformDefinition<'Evm'> = {
  Address: _evm.EvmAddress,
  Platform: _evm.EvmPlatform,
  protocolLoaders: {
    core: () => import('@wormhole-foundation/sdk-evm-core'),
    tokenbridge: () => import('@wormhole-foundation/sdk-evm-tokenbridge'),
    portico: () => import('@wormhole-foundation/sdk-evm-portico'),
    cctp: () => import('@wormhole-foundation/sdk-evm-cctp'),
  },
  getChain: (n, c) => new _evm.EvmChain(c, new _evm.EvmPlatform(n)),
};

export default evm;
