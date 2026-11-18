export const id = 176;
export const ids = [176];
export const modules = {
  8345: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      ALL_DEV_TOOLS: () => Zy,
      coreDevTools: () => oy,
      devTools: () => Py
    });
    var Uy = Wy(562),
      hy = Wy(1156),
      fy = Wy(8350);
    const Zy = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function cb() {
      const {
        noaDevTools: yb
      } = await Wy.e(217).then((() => Wy(39551)));
      return yb
    }
    const Py = new class {
        constructor() {
          this.loadHost = cb, this.tools = Zy
        }
        setHost(yb) {
          this.tools = null === yb ? Zy : yb.tools, this.loadHost = null === yb ? cb : async () => yb
        }
        supports(yb) {
          return this.tools.has(yb)
        }
        async downloadScene(yb, bb) {
          const Wy = await this.loadHost();
          await Wy.downloadScene(yb, bb)
        }
        async setAmbientLightIntensity(yb) {
          const bb = await this.loadHost();
          await bb.setAmbientLightIntensity(yb)
        }
      },
      oy = {
        tools: fy.b,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Uy.q && Py.setHost(oy), (0, hy.p)((() => {
      Py.setHost(oy)
    }))
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);