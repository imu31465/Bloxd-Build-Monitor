export const id = 176;
export const ids = [176];
export const modules = {
  8520: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      ALL_DEV_TOOLS: () => lB,
      coreDevTools: () => gB,
      devTools: () => YB
    });
    var VB = dB(586),
      yB = dB(1185),
      pB = dB(8527);
    const lB = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function JB() {
      const {
        noaDevTools: BB
      } = await dB.e(218).then((() => dB(39796)));
      return BB
    }
    const YB = new class {
        constructor() {
          this.loadHost = JB, this.tools = lB
        }
        setHost(BB) {
          this.tools = null === BB ? lB : BB.tools, this.loadHost = null === BB ? JB : async () => BB
        }
        supports(BB) {
          return this.tools.has(BB)
        }
        async downloadScene(BB, TB) {
          const dB = await this.loadHost();
          await dB.downloadScene(BB, TB)
        }
        async setAmbientLightIntensity(BB) {
          const TB = await this.loadHost();
          await TB.setAmbientLightIntensity(BB)
        }
      },
      gB = {
        tools: pB.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    VB.p && YB.setHost(gB), (0, yB.r)((() => {
      YB.setHost(gB)
    }))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);