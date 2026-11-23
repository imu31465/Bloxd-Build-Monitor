export const id = 194;
export const ids = [194];
export const modules = {
  34040: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      ALL_DEV_TOOLS: () => nC,
      coreDevTools: () => qC,
      devTools: () => oC
    });
    var QC = ZC(615),
      wC = ZC(1257),
      bC = ZC(34046);
    const nC = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function fC() {
      const {
        noaDevTools: CC
      } = await ZC.e(236).then((() => ZC(40899)));
      return CC
    }
    const oC = new class {
        constructor() {
          this.loadHost = fC, this.tools = nC
        }
        setHost(CC) {
          this.tools = null === CC ? nC : CC.tools, this.loadHost = null === CC ? fC : async () => CC
        }
        supports(CC) {
          return this.tools.has(CC)
        }
        async downloadScene(CC, zC) {
          const ZC = await this.loadHost();
          await ZC.downloadScene(CC, zC)
        }
        async setAmbientLightIntensity(CC) {
          const zC = await this.loadHost();
          await zC.setAmbientLightIntensity(CC)
        }
        async capturePhoto(CC, zC, ZC) {
          return (await this.loadHost()).capturePhoto(CC, zC, ZC)
        }
      },
      qC = {
        tools: bC.c,
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
    QC.z && oC.setHost(qC), (0, wC.y)((() => {
      oC.setHost(qC)
    }))
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);