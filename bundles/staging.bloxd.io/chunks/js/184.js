export const id = 184;
export const ids = [184];
export const modules = {
  8643: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      ALL_DEV_TOOLS: () => RY,
      coreDevTools: () => aY,
      devTools: () => gY
    });
    var FY = DY(649),
      AY = DY(1298),
      IY = DY(8647);
    const RY = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function OY() {
      const {
        noaDevTools: YY
      } = await DY.e(226).then((() => DY(40158)));
      return YY
    }
    const gY = new class {
        constructor() {
          this.loadHost = OY, this.tools = RY
        }
        setHost(YY) {
          this.tools = null === YY ? RY : YY.tools, this.loadHost = null === YY ? OY : async () => YY
        }
        supports(YY) {
          return this.tools.has(YY)
        }
        async downloadScene(YY, rY) {
          const DY = await this.loadHost();
          await DY.downloadScene(YY, rY)
        }
        async setAmbientLightIntensity(YY) {
          const rY = await this.loadHost();
          await rY.setAmbientLightIntensity(YY)
        }
      },
      aY = {
        tools: IY.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    FY.r && gY.setHost(aY), (0, AY.w)((() => {
      gY.setHost(aY)
    }))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);