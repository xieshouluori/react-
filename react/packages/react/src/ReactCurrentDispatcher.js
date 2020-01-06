/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type {Dispatcher} from 'react-reconciler/src/ReactFiberHooks';

/**
 * 跟踪当前 dispatcher。
 */
const ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  // current 属性是一个 Dispatcher 类型的对象
  current: (null: null | Dispatcher),
};

export default ReactCurrentDispatcher;
