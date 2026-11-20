export const id = 185;
export const ids = [185];
export const modules = {
  8891: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      ALL_DEV_TOOLS: () => Xk,
      coreDevTools: () => dk,
      devTools: () => wk
    });
    var Rk = Bk(624),
      tk = Bk(1245),
      ak = Bk(8894);
    const Xk = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function bk() {
      const {
        noaDevTools: kk
      } = await Bk.e(230).then((() => Bk(40492)));
      return kk
    }
    const wk = new class {
        constructor() {
          this.loadHost = bk, this.tools = Xk
        }
        setHost(kk) {
          this.tools = null === kk ? Xk : kk.tools, this.loadHost = null === kk ? bk : async () => kk
        }
        supports(kk) {
          return this.tools.has(kk)
        }
        async downloadScene(kk, Fk) {
          const Bk = await this.loadHost();
          await Bk.downloadScene(kk, Fk)
        }
        async setAmbientLightIntensity(kk) {
          const Fk = await this.loadHost();
          await Fk.setAmbientLightIntensity(kk)
        }
      },
      dk = {
        tools: ak.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Rk.p && wk.setHost(dk), (0, tk.o)((() => {
      wk.setHost(dk)
    }))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);