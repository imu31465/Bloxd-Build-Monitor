export const id = 186;
export const ids = [186];
export const modules = {
  8978: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      ALL_DEV_TOOLS: () => DQ,
      coreDevTools: () => mQ,
      devTools: () => vQ
    });
    var LQ = wQ(634),
      qQ = wQ(1314),
      oQ = wQ(8986);
    const DQ = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function kQ() {
      const {
        noaDevTools: QQ
      } = await wQ.e(231).then((() => wQ(40475)));
      return QQ
    }
    const vQ = new class {
        constructor() {
          this.loadHost = kQ, this.tools = DQ
        }
        setHost(QQ) {
          this.tools = null === QQ ? DQ : QQ.tools, this.loadHost = null === QQ ? kQ : async () => QQ
        }
        supports(QQ) {
          return this.tools.has(QQ)
        }
        async downloadScene(QQ, FQ) {
          const wQ = await this.loadHost();
          await wQ.downloadScene(QQ, FQ)
        }
        async setAmbientLightIntensity(QQ) {
          const FQ = await this.loadHost();
          await FQ.setAmbientLightIntensity(QQ)
        }
      },
      mQ = {
        tools: oQ.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    LQ.s && vQ.setHost(mQ), (0, qQ.x)((() => {
      vQ.setHost(mQ)
    }))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);