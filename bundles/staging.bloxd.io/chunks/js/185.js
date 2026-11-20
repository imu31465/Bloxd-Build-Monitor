export const id = 185;
export const ids = [185];
export const modules = {
  8819: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      ALL_DEV_TOOLS: () => Tb,
      coreDevTools: () => Hb,
      devTools: () => Ib
    });
    var kb = sb(649),
      Wb = sb(1291),
      ab = sb(8827);
    const Tb = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Ub() {
      const {
        noaDevTools: bb
      } = await sb.e(230).then((() => sb(40495)));
      return bb
    }
    const Ib = new class {
        constructor() {
          this.loadHost = Ub, this.tools = Tb
        }
        setHost(bb) {
          this.tools = null === bb ? Tb : bb.tools, this.loadHost = null === bb ? Ub : async () => bb
        }
        supports(bb) {
          return this.tools.has(bb)
        }
        async downloadScene(bb, cb) {
          const sb = await this.loadHost();
          await sb.downloadScene(bb, cb)
        }
        async setAmbientLightIntensity(bb) {
          const cb = await this.loadHost();
          await cb.setAmbientLightIntensity(bb)
        }
      },
      Hb = {
        tools: ab.c,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    kb.s && Ib.setHost(Hb), (0, Wb.o)((() => {
      Ib.setHost(Hb)
    }))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);