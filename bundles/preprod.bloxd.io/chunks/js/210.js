export const id = 210;
export const ids = [210];
export const modules = {
  34748: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      ALL_DEV_TOOLS: () => AU,
      coreDevTools: () => DU,
      devTools: () => oU
    });
    var cU = zU(687),
      yU = zU(1322),
      QU = zU(34754);
    const AU = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function FU() {
      const {
        noaDevTools: UU
      } = await zU.e(256).then((() => zU(42167)));
      return UU
    }
    const oU = new class {
        constructor() {
          this.loadHost = FU, this.tools = AU
        }
        setHost(UU) {
          this.tools = null === UU ? AU : UU.tools, this.loadHost = null === UU ? FU : async () => UU
        }
        supports(UU) {
          return this.tools.has(UU)
        }
        async downloadScene(UU, XU) {
          const zU = await this.loadHost();
          await zU.downloadScene(UU, XU)
        }
        async setAmbientLightIntensity(UU) {
          const XU = await this.loadHost();
          await XU.setAmbientLightIntensity(UU)
        }
        async capturePhoto(UU, XU, zU) {
          return (await this.loadHost()).capturePhoto(UU, XU, zU)
        }
      },
      DU = {
        tools: QU.b,
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
    cU.H && oU.setHost(DU), (0, yU.w)((() => {
      oU.setHost(DU)
    }))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);