export const id = 185;
export const ids = [185];
export const modules = {
  8882: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      ALL_DEV_TOOLS: () => gv,
      coreDevTools: () => Nv,
      devTools: () => dv
    });
    var hv = Pv(635),
      Sv = Pv(1285),
      ev = Pv(8888);
    const gv = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function pv() {
      const {
        noaDevTools: vv
      } = await Pv.e(231).then((() => Pv(40363)));
      return vv
    }
    const dv = new class {
        constructor() {
          this.loadHost = pv, this.tools = gv
        }
        setHost(vv) {
          this.tools = null === vv ? gv : vv.tools, this.loadHost = null === vv ? pv : async () => vv
        }
        supports(vv) {
          return this.tools.has(vv)
        }
        async downloadScene(vv, zv) {
          const Pv = await this.loadHost();
          await Pv.downloadScene(vv, zv)
        }
        async setAmbientLightIntensity(vv) {
          const zv = await this.loadHost();
          await zv.setAmbientLightIntensity(vv)
        }
      },
      Nv = {
        tools: ev.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    hv.r && dv.setHost(Nv), (0, Sv.z)((() => {
      dv.setHost(Nv)
    }))
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);