/**
 * Copyright 2024 Circle Internet Group, Inc.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import _ from "lodash";
import logger, { logAndExit } from "./logger.js";

// Helper function to get option value or environment variable
export const getOptionValue = (options: any, optionName: string, envVarName: string) => {
  const val = options[optionName] || process.env[envVarName] || null;

  if (!val) {
    logAndExit(`No ${optionName} command line arg or ${envVarName} env var provided.`);
  }

  logger.info(`${optionName} provided: ${val}`);
  return val;
};

export const equalsIgnoreCase = (str1: string, str2: string) => {
  return _.isEqual(str1.toLowerCase(), str2.toLowerCase());
};

export const maxBigInt = (a: bigint, b: bigint) : bigint => {
  return (a > b) ? a : b;
};

export const isAlchemyBundler = (bundlerUrl: string | undefined): boolean => !!bundlerUrl && bundlerUrl.includes('alchemy');
