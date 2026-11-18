export const id = 176;
export const ids = [176];
export const modules = {
  8476: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      ALL_DEV_TOOLS: () => XJ,
      coreDevTools: () => jJ,
      devTools: () => qJ
    });
    var FJ = ZJ(547),
      UJ = ZJ(1192),
      eJ = ZJ(8482);
    const XJ = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function AJ() {
      const {
        noaDevTools: JJ
      } = await ZJ.e(218).then((() => ZJ(39848)));
      return JJ
    }
    const qJ = new class {
        constructor() {
          this.loadHost = AJ, this.tools = XJ
        }
        setHost(JJ) {
          this.tools = null === JJ ? XJ : JJ.tools, this.loadHost = null === JJ ? AJ : async () => JJ
        }
        supports(JJ) {
          return this.tools.has(JJ)
        }
        async downloadScene(JJ, cJ) {
          const ZJ = await this.loadHost();
          await ZJ.downloadScene(JJ, cJ)
        }
        async setAmbientLightIntensity(JJ) {
          const cJ = await this.loadHost();
          await cJ.setAmbientLightIntensity(JJ)
        }
      },
      jJ = {
        tools: eJ.c,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    FJ.r && qJ.setHost(jJ), (0, UJ.s)((() => {
      qJ.setHost(jJ)
    }))
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);