export const id = 172;
export const ids = [172];
export const modules = {
  8068: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      ALL_DEV_TOOLS: () => AW,
      coreDevTools: () => NW,
      devTools: () => yR
    });
    var wW = MW(253),
      CW = MW(1126),
      zR = MW(8076);
    const AW = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function bR() {
      const {
        noaDevTools: WW
      } = await MW.e(210).then((() => MW(38552)));
      return WW
    }
    const yR = new class {
        constructor() {
          this.loadHost = bR, this.tools = AW
        }
        setHost(WW) {
          this.tools = null === WW ? AW : WW.tools, this.loadHost = null === WW ? bR : async () => WW
        }
        supports(WW) {
          return this.tools.has(WW)
        }
        async downloadScene(WW, RW) {
          const MW = await this.loadHost();
          await MW.downloadScene(WW, RW)
        }
        async setAmbientLightIntensity(WW) {
          const RW = await this.loadHost();
          await RW.setAmbientLightIntensity(WW)
        }
      },
      NW = {
        tools: zR.b,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    wW.q && yR.setHost(NW), (0, CW.k)((() => {
      yR.setHost(NW)
    }))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);