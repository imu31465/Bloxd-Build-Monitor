export const id = 196;
export const ids = [196];
export const modules = {
  34255: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      ALL_DEV_TOOLS: () => mt,
      coreDevTools: () => Ht,
      devTools: () => jt
    });
    var Ot = Vt(725),
      qt = Vt(1397),
      Dt = Vt(34263);
    const mt = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function dt() {
      const {
        noaDevTools: tt
      } = await Vt.e(242).then((() => Vt(41267)));
      return tt
    }
    const jt = new class {
        constructor() {
          this.loadHost = dt, this.tools = mt
        }
        setHost(tt) {
          this.tools = null === tt ? mt : tt.tools, this.loadHost = null === tt ? dt : async () => tt
        }
        supports(tt) {
          return this.tools.has(tt)
        }
        async downloadScene(tt, et) {
          const Vt = await this.loadHost();
          await Vt.downloadScene(tt, et)
        }
        async setAmbientLightIntensity(tt) {
          const et = await this.loadHost();
          await et.setAmbientLightIntensity(tt)
        }
        async capturePhoto(tt, et, Vt) {
          return (await this.loadHost()).capturePhoto(tt, et, Vt)
        }
      },
      Ht = {
        tools: Dt.d,
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
    Ot.K && jt.setHost(Ht), (0, qt.x)((() => {
      jt.setHost(Ht)
    }))
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);