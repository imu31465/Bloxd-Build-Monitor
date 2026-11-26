export const id = 220;
export const ids = [220];
export const modules = {
  35189: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      ALL_DEV_TOOLS: () => yV,
      coreDevTools: () => nV,
      devTools: () => QV
    });
    var JV = xV(686),
      YV = xV(1348),
      UV = xV(35197);
    const yV = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function pV() {
      const {
        noaDevTools: VV
      } = await xV.e(260).then((() => xV(42389)));
      return VV
    }
    const QV = new class {
        constructor() {
          this.loadHost = pV, this.tools = yV
        }
        setHost(VV) {
          this.tools = null === VV ? yV : VV.tools, this.loadHost = null === VV ? pV : async () => VV
        }
        supports(VV) {
          return this.tools.has(VV)
        }
        async downloadScene(VV, eV) {
          const xV = await this.loadHost();
          await xV.downloadScene(VV, eV)
        }
        async setAmbientLightIntensity(VV) {
          const eV = await this.loadHost();
          await eV.setAmbientLightIntensity(VV)
        }
        async capturePhoto(VV, eV, xV) {
          return (await this.loadHost()).capturePhoto(VV, eV, xV)
        }
      },
      nV = {
        tools: UV.e,
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
    JV.I && QV.setHost(nV), (0, YV.C)((() => {
      QV.setHost(nV)
    }))
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);