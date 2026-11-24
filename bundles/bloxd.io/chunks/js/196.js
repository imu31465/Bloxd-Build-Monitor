export const id = 196;
export const ids = [196];
export const modules = {
  34126: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      ALL_DEV_TOOLS: () => IB,
      coreDevTools: () => UB,
      devTools: () => uB
    });
    var QB = zB(690),
      nB = zB(1325),
      dB = zB(34132);
    const IB = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function NB() {
      const {
        noaDevTools: BB
      } = await zB.e(242).then((() => zB(41159)));
      return BB
    }
    const uB = new class {
        constructor() {
          this.loadHost = NB, this.tools = IB
        }
        setHost(BB) {
          this.tools = null === BB ? IB : BB.tools, this.loadHost = null === BB ? NB : async () => BB
        }
        supports(BB) {
          return this.tools.has(BB)
        }
        async downloadScene(BB, jB) {
          const zB = await this.loadHost();
          await zB.downloadScene(BB, jB)
        }
        async setAmbientLightIntensity(BB) {
          const jB = await this.loadHost();
          await jB.setAmbientLightIntensity(BB)
        }
        async capturePhoto(BB, jB, zB) {
          return (await this.loadHost()).capturePhoto(BB, jB, zB)
        }
      },
      UB = {
        tools: dB.d,
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
    QB.E && uB.setHost(UB), (0, nB.A)((() => {
      uB.setHost(UB)
    }))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);