import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  execAsync
} from "./chunk-BNXET5O2.js";
import {
  diag
} from "./chunk-5EBH3E27.js";
import "./chunk-6DU2HRTW.js";

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-bsd.js
import { promises as fs } from "fs";
async function getMachineId() {
  try {
    const result = await fs.readFile("/etc/hostid", { encoding: "utf8" });
    return result.trim();
  } catch (e) {
    diag.debug(`error reading machine id: ${e}`);
  }
  try {
    const result = await execAsync("kenv -q smbios.system.uuid");
    return result.stdout.trim();
  } catch (e) {
    diag.debug(`error reading machine id: ${e}`);
  }
  return void 0;
}
export {
  getMachineId
};
//# sourceMappingURL=getMachineId-bsd-RBOBJLYF.js.map
