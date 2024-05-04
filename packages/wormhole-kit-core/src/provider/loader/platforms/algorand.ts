import * as _algorand from '@wormhole-foundation/sdk-algorand';

import type { IPlatformDefinition } from '../../types';

/** Platform and protocol definitions for Algorand */
const algorand: IPlatformDefinition<'Algorand'> = {
  Address: _algorand.AlgorandAddress,
  Platform: _algorand.AlgorandPlatform,
  protocolLoaders: {
    core: () => import('@wormhole-foundation/sdk-algorand-core'),
    tokenbridge: () => import('@wormhole-foundation/sdk-algorand-tokenbridge'),
  },
  getChain: (n, c) =>
    new _algorand.AlgorandChain(c, new _algorand.AlgorandPlatform(n)),
};

export default algorand;