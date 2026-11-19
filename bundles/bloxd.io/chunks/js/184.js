export const id = 184;
export const ids = [184];
export const modules = {
  8647: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      ALL_DEV_TOOLS: () => WT,
      coreDevTools: () => FT,
      devTools: () => BT
    });
    var iT = IT(637),
      zT = IT(1266),
      kT = IT(8649);
    const WT = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function XT() {
      const {
        noaDevTools: TT
      } = await IT.e(226).then((() => IT(39852)));
      return TT
    }
    const BT = new class {
        constructor() {
          this.loadHost = XT, this.tools = WT
        }
        setHost(TT) {
          this.tools = null === TT ? WT : TT.tools, this.loadHost = null === TT ? XT : async () => TT
        }
        supports(TT) {
          return this.tools.has(TT)
        }
        async downloadScene(TT, oT) {
          const IT = await this.loadHost();
          await IT.downloadScene(TT, oT)
        }
        async setAmbientLightIntensity(TT) {
          const oT = await this.loadHost();
          await oT.setAmbientLightIntensity(TT)
        }
      },
      FT = {
        tools: kT.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    iT.u && BT.setHost(FT), (0, zT.r)((() => {
      BT.setHost(FT)
    }))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);