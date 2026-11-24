export const id = 196;
export const ids = [196];
export const modules = {
  34060: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      ALL_DEV_TOOLS: () => GB,
      coreDevTools: () => cB,
      devTools: () => kB
    });
    var TB = ZB(684),
      JB = ZB(1362),
      oB = ZB(34066);
    const GB = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function vB() {
      const {
        noaDevTools: BB
      } = await ZB.e(242).then((() => ZB(41093)));
      return BB
    }
    const kB = new class {
        constructor() {
          this.loadHost = vB, this.tools = GB
        }
        setHost(BB) {
          this.tools = null === BB ? GB : BB.tools, this.loadHost = null === BB ? vB : async () => BB
        }
        supports(BB) {
          return this.tools.has(BB)
        }
        async downloadScene(BB, IB) {
          const ZB = await this.loadHost();
          await ZB.downloadScene(BB, IB)
        }
        async setAmbientLightIntensity(BB) {
          const IB = await this.loadHost();
          await IB.setAmbientLightIntensity(BB)
        }
        async capturePhoto(BB, IB, ZB) {
          return (await this.loadHost()).capturePhoto(BB, IB, ZB)
        }
      },
      cB = {
        tools: oB.d,
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
    TB.B && kB.setHost(cB), (0, JB.w)((() => {
      kB.setHost(cB)
    }))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);