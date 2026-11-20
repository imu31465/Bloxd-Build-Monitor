export const id = 186;
export const ids = [186];
export const modules = {
  9160: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      ALL_DEV_TOOLS: () => mq,
      coreDevTools: () => cq,
      devTools: () => Aq
    });
    var Yq = gq(611),
      lq = gq(1283),
      Oq = gq(9167);
    const mq = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function xq() {
      const {
        noaDevTools: qq
      } = await gq.e(231).then((() => gq(40806)));
      return qq
    }
    const Aq = new class {
        constructor() {
          this.loadHost = xq, this.tools = mq
        }
        setHost(qq) {
          this.tools = null === qq ? mq : qq.tools, this.loadHost = null === qq ? xq : async () => qq
        }
        supports(qq) {
          return this.tools.has(qq)
        }
        async downloadScene(qq, Eq) {
          const gq = await this.loadHost();
          await gq.downloadScene(qq, Eq)
        }
        async setAmbientLightIntensity(qq) {
          const Eq = await this.loadHost();
          await Eq.setAmbientLightIntensity(qq)
        }
      },
      cq = {
        tools: Oq.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Yq.v && Aq.setHost(cq), (0, lq.w)((() => {
      Aq.setHost(cq)
    }))
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);