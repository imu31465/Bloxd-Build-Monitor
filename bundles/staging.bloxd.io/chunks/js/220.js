export const id = 220;
export const ids = [220];
export const modules = {
  35029: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      ALL_DEV_TOOLS: () => ZR,
      coreDevTools: () => fR,
      devTools: () => iR
    });
    var yR = GR(709),
      tR = GR(1397),
      uR = GR(35031);
    const ZR = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function qR() {
      const {
        noaDevTools: RR
      } = await GR.e(269).then((() => GR(42590)));
      return RR
    }
    const iR = new class {
        constructor() {
          this.loadHost = qR, this.tools = ZR
        }
        setHost(RR) {
          this.tools = null === RR ? ZR : RR.tools, this.loadHost = null === RR ? qR : async () => RR
        }
        supports(RR) {
          return this.tools.has(RR)
        }
        async downloadScene(RR, JR) {
          const GR = await this.loadHost();
          await GR.downloadScene(RR, JR)
        }
        async setAmbientLightIntensity(RR) {
          const JR = await this.loadHost();
          await JR.setAmbientLightIntensity(RR)
        }
        async capturePhoto(RR, JR, GR) {
          return (await this.loadHost()).capturePhoto(RR, JR, GR)
        }
      },
      fR = {
        tools: uR.e,
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
    yR.G && iR.setHost(fR), (0, tR.E)((() => {
      iR.setHost(fR)
    }))
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);