export const id = 220;
export const ids = [220];
export const modules = {
  34920: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      ALL_DEV_TOOLS: () => aM,
      coreDevTools: () => QM,
      devTools: () => nM
    });
    var OM = iM(656),
      SM = iM(1327),
      jM = iM(34926);
    const aM = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function PM() {
      const {
        noaDevTools: MM
      } = await iM.e(260).then((() => iM(42174)));
      return MM
    }
    const nM = new class {
        constructor() {
          this.loadHost = PM, this.tools = aM
        }
        setHost(MM) {
          this.tools = null === MM ? aM : MM.tools, this.loadHost = null === MM ? PM : async () => MM
        }
        supports(MM) {
          return this.tools.has(MM)
        }
        async downloadScene(MM, rM) {
          const iM = await this.loadHost();
          await iM.downloadScene(MM, rM)
        }
        async setAmbientLightIntensity(MM) {
          const rM = await this.loadHost();
          await rM.setAmbientLightIntensity(MM)
        }
        async capturePhoto(MM, rM, iM) {
          return (await this.loadHost()).capturePhoto(MM, rM, iM)
        }
      },
      QM = {
        tools: jM.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        },
        capturePhoto: async () => {
          throw new Error("No game is drawing yet")
        }
      };
    OM.H && nM.setHost(QM), (0, SM.A)((() => {
      nM.setHost(QM)
    }))
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);