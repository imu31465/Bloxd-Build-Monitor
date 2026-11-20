export const id = 186;
export const ids = [186];
export const modules = {
  8972: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      ALL_DEV_TOOLS: () => Ub,
      coreDevTools: () => Sb,
      devTools: () => Yb
    });
    var Bb = hb(599),
      Ob = hb(1193),
      Gb = hb(8975);
    const Ub = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Lb() {
      const {
        noaDevTools: bb
      } = await hb.e(231).then((() => hb(40506)));
      return bb
    }
    const Yb = new class {
        constructor() {
          this.loadHost = Lb, this.tools = Ub
        }
        setHost(bb) {
          this.tools = null === bb ? Ub : bb.tools, this.loadHost = null === bb ? Lb : async () => bb
        }
        supports(bb) {
          return this.tools.has(bb)
        }
        async downloadScene(bb, ub) {
          const hb = await this.loadHost();
          await hb.downloadScene(bb, ub)
        }
        async setAmbientLightIntensity(bb) {
          const ub = await this.loadHost();
          await ub.setAmbientLightIntensity(bb)
        }
      },
      Sb = {
        tools: Gb.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Bb.o && Yb.setHost(Sb), (0, Ob.v)((() => {
      Yb.setHost(Sb)
    }))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);