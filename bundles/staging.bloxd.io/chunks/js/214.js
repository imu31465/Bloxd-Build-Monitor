export const id = 214;
export const ids = [214];
export const modules = {
  34856: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      ALL_DEV_TOOLS: () => hH,
      coreDevTools: () => CH,
      devTools: () => zH
    });
    var AH = LH(642),
      rH = LH(1253),
      SH = LH(34861);
    const hH = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function tH() {
      const {
        noaDevTools: HH
      } = await LH.e(264).then((() => LH(42369)));
      return HH
    }
    const zH = new class {
        constructor() {
          this.loadHost = tH, this.tools = hH
        }
        setHost(HH) {
          this.tools = null === HH ? hH : HH.tools, this.loadHost = null === HH ? tH : async () => HH
        }
        supports(HH) {
          return this.tools.has(HH)
        }
        async downloadScene(HH, BH) {
          const LH = await this.loadHost();
          await LH.downloadScene(HH, BH)
        }
        async setAmbientLightIntensity(HH) {
          const BH = await this.loadHost();
          await BH.setAmbientLightIntensity(HH)
        }
        async capturePhoto(HH, BH, LH) {
          return (await this.loadHost()).capturePhoto(HH, BH, LH)
        }
      },
      CH = {
        tools: SH.c,
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
    AH.K && zH.setHost(CH), (0, rH.C)((() => {
      zH.setHost(CH)
    }))
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);