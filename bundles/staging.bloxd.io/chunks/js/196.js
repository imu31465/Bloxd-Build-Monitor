export const id = 196;
export const ids = [196];
export const modules = {
  34362: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      ALL_DEV_TOOLS: () => yG,
      coreDevTools: () => YG,
      devTools: () => UG
    });
    var wG = ZG(631),
      SG = ZG(1260),
      LG = ZG(34368);
    const yG = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function kG() {
      const {
        noaDevTools: GG
      } = await ZG.e(242).then((() => ZG(41454)));
      return GG
    }
    const UG = new class {
        constructor() {
          this.loadHost = kG, this.tools = yG
        }
        setHost(GG) {
          this.tools = null === GG ? yG : GG.tools, this.loadHost = null === GG ? kG : async () => GG
        }
        supports(GG) {
          return this.tools.has(GG)
        }
        async downloadScene(GG, bG) {
          const ZG = await this.loadHost();
          await ZG.downloadScene(GG, bG)
        }
        async setAmbientLightIntensity(GG) {
          const bG = await this.loadHost();
          await bG.setAmbientLightIntensity(GG)
        }
        async capturePhoto(GG, bG, ZG) {
          return (await this.loadHost()).capturePhoto(GG, bG, ZG)
        }
      },
      YG = {
        tools: LG.b,
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
    wG.B && UG.setHost(YG), (0, SG.u)((() => {
      UG.setHost(YG)
    }))
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);