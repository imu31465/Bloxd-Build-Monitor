export const id = 194;
export const ids = [194];
export const modules = {
  34095: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      ALL_DEV_TOOLS: () => rD,
      coreDevTools: () => gD,
      devTools: () => cD
    });
    var pD = wD(638),
      sD = wD(1309),
      KD = wD(34103);
    const rD = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function LD() {
      const {
        noaDevTools: DD
      } = await wD.e(236).then((() => wD(40984)));
      return DD
    }
    const cD = new class {
        constructor() {
          this.loadHost = LD, this.tools = rD
        }
        setHost(DD) {
          this.tools = null === DD ? rD : DD.tools, this.loadHost = null === DD ? LD : async () => DD
        }
        supports(DD) {
          return this.tools.has(DD)
        }
        async downloadScene(DD, zD) {
          const wD = await this.loadHost();
          await wD.downloadScene(DD, zD)
        }
        async setAmbientLightIntensity(DD) {
          const zD = await this.loadHost();
          await zD.setAmbientLightIntensity(DD)
        }
        async capturePhoto(DD, zD, wD) {
          return (await this.loadHost()).capturePhoto(DD, zD, wD)
        }
      },
      gD = {
        tools: KD.e,
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
    pD.v && cD.setHost(gD), (0, sD.v)((() => {
      cD.setHost(gD)
    }))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);