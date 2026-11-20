export const id = 185;
export const ids = [185];
export const modules = {
  8794: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      ALL_DEV_TOOLS: () => Eb,
      coreDevTools: () => eb,
      devTools: () => Bb
    });
    var Ab = Ub(603),
      Mb = Ub(1227),
      Tb = Ub(8797);
    const Eb = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Yb() {
      const {
        noaDevTools: bb
      } = await Ub.e(230).then((() => Ub(40174)));
      return bb
    }
    const Bb = new class {
        constructor() {
          this.loadHost = Yb, this.tools = Eb
        }
        setHost(bb) {
          this.tools = null === bb ? Eb : bb.tools, this.loadHost = null === bb ? Yb : async () => bb
        }
        supports(bb) {
          return this.tools.has(bb)
        }
        async downloadScene(bb, ab) {
          const Ub = await this.loadHost();
          await Ub.downloadScene(bb, ab)
        }
        async setAmbientLightIntensity(bb) {
          const ab = await this.loadHost();
          await ab.setAmbientLightIntensity(bb)
        }
      },
      eb = {
        tools: Tb.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Ab.o && Bb.setHost(eb), (0, Mb.p)((() => {
      Bb.setHost(eb)
    }))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);