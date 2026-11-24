export const id = 194;
export const ids = [194];
export const modules = {
  34113: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      ALL_DEV_TOOLS: () => xS,
      coreDevTools: () => uS,
      devTools: () => qS
    });
    var tS = gS(699),
      bS = gS(1378),
      XS = gS(34117);
    const xS = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function NS() {
      const {
        noaDevTools: SS
      } = await gS.e(236).then((() => gS(41082)));
      return SS
    }
    const qS = new class {
        constructor() {
          this.loadHost = NS, this.tools = xS
        }
        setHost(SS) {
          this.tools = null === SS ? xS : SS.tools, this.loadHost = null === SS ? NS : async () => SS
        }
        supports(SS) {
          return this.tools.has(SS)
        }
        async downloadScene(SS, HS) {
          const gS = await this.loadHost();
          await gS.downloadScene(SS, HS)
        }
        async setAmbientLightIntensity(SS) {
          const HS = await this.loadHost();
          await HS.setAmbientLightIntensity(SS)
        }
        async capturePhoto(SS, HS, gS) {
          return (await this.loadHost()).capturePhoto(SS, HS, gS)
        }
      },
      uS = {
        tools: XS.b,
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
    tS.A && qS.setHost(uS), (0, bS.w)((() => {
      qS.setHost(uS)
    }))
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);