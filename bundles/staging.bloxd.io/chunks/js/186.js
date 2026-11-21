export const id = 186;
export const ids = [186];
export const modules = {
  9117: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      ALL_DEV_TOOLS: () => Pd,
      coreDevTools: () => Cd,
      devTools: () => gd
    });
    var pd = kd(626),
      Nd = kd(1320),
      Wd = kd(9125);
    const Pd = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Zd() {
      const {
        noaDevTools: dd
      } = await kd.e(231).then((() => kd(41062)));
      return dd
    }
    const gd = new class {
        constructor() {
          this.loadHost = Zd, this.tools = Pd
        }
        setHost(dd) {
          this.tools = null === dd ? Pd : dd.tools, this.loadHost = null === dd ? Zd : async () => dd
        }
        supports(dd) {
          return this.tools.has(dd)
        }
        async downloadScene(dd, Jd) {
          const kd = await this.loadHost();
          await kd.downloadScene(dd, Jd)
        }
        async setAmbientLightIntensity(dd) {
          const Jd = await this.loadHost();
          await Jd.setAmbientLightIntensity(dd)
        }
      },
      Cd = {
        tools: Wd.b,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    pd.x && gd.setHost(Cd), (0, Nd.r)((() => {
      gd.setHost(Cd)
    }))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);