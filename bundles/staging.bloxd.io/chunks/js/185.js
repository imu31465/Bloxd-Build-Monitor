export const id = 185;
export const ids = [185];
export const modules = {
  9233: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      ALL_DEV_TOOLS: () => OT,
      coreDevTools: () => xT,
      devTools: () => fT
    });
    var lT = cT(636),
      MT = cT(1303),
      KT = cT(9242);
    const OT = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function yT() {
      const {
        noaDevTools: TT
      } = await cT.e(231).then((() => cT(40684)));
      return TT
    }
    const fT = new class {
        constructor() {
          this.loadHost = yT, this.tools = OT
        }
        setHost(TT) {
          this.tools = null === TT ? OT : TT.tools, this.loadHost = null === TT ? yT : async () => TT
        }
        supports(TT) {
          return this.tools.has(TT)
        }
        async downloadScene(TT, kT) {
          const cT = await this.loadHost();
          await cT.downloadScene(TT, kT)
        }
        async setAmbientLightIntensity(TT) {
          const kT = await this.loadHost();
          await kT.setAmbientLightIntensity(TT)
        }
      },
      xT = {
        tools: KT.c,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    lT.x && fT.setHost(xT), (0, MT.w)((() => {
      fT.setHost(xT)
    }))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);