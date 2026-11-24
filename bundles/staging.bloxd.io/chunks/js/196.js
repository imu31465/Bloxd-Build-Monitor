export const id = 196;
export const ids = [196];
export const modules = {
  34152: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      ALL_DEV_TOOLS: () => gT,
      coreDevTools: () => kT,
      devTools: () => HT
    });
    var WT = mT(681),
      zT = mT(1398),
      MT = mT(34156);
    const gT = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function nT() {
      const {
        noaDevTools: TT
      } = await mT.e(242).then((() => mT(41207)));
      return TT
    }
    const HT = new class {
        constructor() {
          this.loadHost = nT, this.tools = gT
        }
        setHost(TT) {
          this.tools = null === TT ? gT : TT.tools, this.loadHost = null === TT ? nT : async () => TT
        }
        supports(TT) {
          return this.tools.has(TT)
        }
        async downloadScene(TT, UT) {
          const mT = await this.loadHost();
          await mT.downloadScene(TT, UT)
        }
        async setAmbientLightIntensity(TT) {
          const UT = await this.loadHost();
          await UT.setAmbientLightIntensity(TT)
        }
        async capturePhoto(TT, UT, mT) {
          return (await this.loadHost()).capturePhoto(TT, UT, mT)
        }
      },
      kT = {
        tools: MT.e,
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
    WT.B && HT.setHost(kT), (0, zT.q)((() => {
      HT.setHost(kT)
    }))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);