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

// Parse the env file
import "dotenv/config";

import { signHash } from "./signHash.js";
import { tokenTransfer } from "./tokenTransfer.js";
import { logAndExit } from "./utils/index.js";

// Get command-line arguments
const args: string[] = process.argv.slice(2);

const scenario: string = args[0];

// Use a switch statement for scenarios
(async () => {
  switch (scenario) {
    case "token-transfer":
      await tokenTransfer(args.slice(1));
      break;
    case "sign-hash":
      await signHash(args.slice(1));
      break;
    default:
      logAndExit(`Unrecognized scenario: ${scenario}`);
  }
  process.exit(0);
})();
