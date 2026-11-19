export const id = 185;
export const ids = [185];
export const modules = {
  8925: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      ALL_DEV_TOOLS: () => fD,
      coreDevTools: () => wD,
      devTools: () => QD
    });
    var ID = cD(646),
      pD = cD(1294),
      iD = cD(8934);
    const fD = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function bD() {
      const {
        noaDevTools: DD
      } = await cD.e(230).then((() => cD(40148)));
      return DD
    }
    const QD = new class {
        constructor() {
          this.loadHost = bD, this.tools = fD
        }
        setHost(DD) {
          this.tools = null === DD ? fD : DD.tools, this.loadHost = null === DD ? bD : async () => DD
        }
        supports(DD) {
          return this.tools.has(DD)
        }
        async downloadScene(DD, CD) {
          const cD = await this.loadHost();
          await cD.downloadScene(DD, CD)
        }
        async setAmbientLightIntensity(DD) {
          const CD = await this.loadHost();
          await CD.setAmbientLightIntensity(DD)
        }
      },
      wD = {
        tools: iD.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    ID.q && QD.setHost(wD), (0, pD.s)((() => {
      QD.setHost(wD)
    }))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);