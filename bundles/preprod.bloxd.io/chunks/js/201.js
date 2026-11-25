export const id = 201;
export const ids = [201];
export const modules = {
  34393: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      ALL_DEV_TOOLS: () => zQ,
      coreDevTools: () => PQ,
      devTools: () => FQ
    });
    var wQ = XQ(691),
      qQ = XQ(1345),
      TQ = XQ(34399);
    const zQ = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function sQ() {
      const {
        noaDevTools: QQ
      } = await XQ.e(246).then((() => XQ(41280)));
      return QQ
    }
    const FQ = new class {
        constructor() {
          this.loadHost = sQ, this.tools = zQ
        }
        setHost(QQ) {
          this.tools = null === QQ ? zQ : QQ.tools, this.loadHost = null === QQ ? sQ : async () => QQ
        }
        supports(QQ) {
          return this.tools.has(QQ)
        }
        async downloadScene(QQ, WQ) {
          const XQ = await this.loadHost();
          await XQ.downloadScene(QQ, WQ)
        }
        async setAmbientLightIntensity(QQ) {
          const WQ = await this.loadHost();
          await WQ.setAmbientLightIntensity(QQ)
        }
        async capturePhoto(QQ, WQ, XQ) {
          return (await this.loadHost()).capturePhoto(QQ, WQ, XQ)
        }
      },
      PQ = {
        tools: TQ.d,
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
    wQ.x && FQ.setHost(PQ), (0, qQ.t)((() => {
      FQ.setHost(PQ)
    }))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);