import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  execAsync
} from "./chunk-BNXET5O2.js";
import {
  diag
} from "./chunk-5EBH3E27.js";
import "./chunk-6DU2HRTW.js";

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-darwin.js
async function getMachineId() {
  try {
    const result = await execAsync('ioreg -rd1 -c "IOPlatformExpertDevice"');
    const idLine = result.stdout.split("\n").find((line) => line.includes("IOPlatformUUID"));
    if (!idLine) {
      return void 0;
    }
    const parts = idLine.split('" = "');
    if (parts.length === 2) {
      return parts[1].slice(0, -1);
    }
  } catch (e) {
    diag.debug(`error reading machine id: ${e}`);
  }
  return void 0;
}
export {
  getMachineId
};
//# sourceMappingURL=getMachineId-darwin-DAVDHWDM.js.map
