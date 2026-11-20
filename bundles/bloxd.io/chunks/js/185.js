export const id = 185;
export const ids = [185];
export const modules = {
  8880: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      ALL_DEV_TOOLS: () => PU,
      coreDevTools: () => KU,
      devTools: () => qU
    });
    var tU = gU(603),
      pU = gU(1293),
      EU = gU(8887);
    const PU = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function TU() {
      const {
        noaDevTools: UU
      } = await gU.e(230).then((() => gU(40455)));
      return UU
    }
    const qU = new class {
        constructor() {
          this.loadHost = TU, this.tools = PU
        }
        setHost(UU) {
          this.tools = null === UU ? PU : UU.tools, this.loadHost = null === UU ? TU : async () => UU
        }
        supports(UU) {
          return this.tools.has(UU)
        }
        async downloadScene(UU, RU) {
          const gU = await this.loadHost();
          await gU.downloadScene(UU, RU)
        }
        async setAmbientLightIntensity(UU) {
          const RU = await this.loadHost();
          await RU.setAmbientLightIntensity(UU)
        }
      },
      KU = {
        tools: EU.b,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    tU.u && qU.setHost(KU), (0, pU.x)((() => {
      qU.setHost(KU)
    }))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);