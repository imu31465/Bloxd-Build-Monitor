export const id = 220;
export const ids = [220];
export const modules = {
  35114: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      ALL_DEV_TOOLS: () => PW,
      coreDevTools: () => wW,
      devTools: () => cW
    });
    var mW = OW(671),
      EW = OW(1301),
      NW = OW(35116);
    const PW = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function LW() {
      const {
        noaDevTools: WW
      } = await OW.e(269).then((() => OW(42543)));
      return WW
    }
    const cW = new class {
        constructor() {
          this.loadHost = LW, this.tools = PW
        }
        setHost(WW) {
          this.tools = null === WW ? PW : WW.tools, this.loadHost = null === WW ? LW : async () => WW
        }
        supports(WW) {
          return this.tools.has(WW)
        }
        async downloadScene(WW, iW) {
          const OW = await this.loadHost();
          await OW.downloadScene(WW, iW)
        }
        async setAmbientLightIntensity(WW) {
          const iW = await this.loadHost();
          await iW.setAmbientLightIntensity(WW)
        }
        async capturePhoto(WW, iW, OW) {
          return (await this.loadHost()).capturePhoto(WW, iW, OW)
        }
      },
      wW = {
        tools: NW.e,
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
    mW.K && cW.setHost(wW), (0, EW.s)((() => {
      cW.setHost(wW)
    }))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);