export const id = 175;
export const ids = [175];
export const modules = {
  8120: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      ALL_DEV_TOOLS: () => uc,
      coreDevTools: () => Pc,
      devTools: () => Mc
    });
    var Vc = nc(263),
      Ic = nc(1152),
      rB = nc(8122);
    const uc = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function sc() {
      const {
        noaDevTools: cB
      } = await nc.e(215).then((() => nc(39049)));
      return cB
    }
    const Mc = new class {
        constructor() {
          this.loadHost = sc, this.tools = uc
        }
        setHost(cB) {
          this.tools = null === cB ? uc : cB.tools, this.loadHost = null === cB ? sc : async () => cB
        }
        supports(cB) {
          return this.tools.has(cB)
        }
        async downloadScene(cB, Bc) {
          const nc = await this.loadHost();
          await nc.downloadScene(cB, Bc)
        }
        async setAmbientLightIntensity(cB) {
          const Bc = await this.loadHost();
          await Bc.setAmbientLightIntensity(cB)
        }
      },
      Pc = {
        tools: rB.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Vc.l && Mc.setHost(Pc), (0, Ic.i)((() => {
      Mc.setHost(Pc)
    }))
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);