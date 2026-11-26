export const id = 214;
export const ids = [214];
export const modules = {
  34668: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      ALL_DEV_TOOLS: () => oB,
      coreDevTools: () => JB,
      devTools: () => yB
    });
    var YB = GB(662),
      DB = GB(1299),
      QB = GB(34675);
    const oB = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function jB() {
      const {
        noaDevTools: BB
      } = await GB.e(264).then((() => GB(42066)));
      return BB
    }
    const yB = new class {
        constructor() {
          this.loadHost = jB, this.tools = oB
        }
        setHost(BB) {
          this.tools = null === BB ? oB : BB.tools, this.loadHost = null === BB ? jB : async () => BB
        }
        supports(BB) {
          return this.tools.has(BB)
        }
        async downloadScene(BB, OB) {
          const GB = await this.loadHost();
          await GB.downloadScene(BB, OB)
        }
        async setAmbientLightIntensity(BB) {
          const OB = await this.loadHost();
          await OB.setAmbientLightIntensity(BB)
        }
        async capturePhoto(BB, OB, GB) {
          return (await this.loadHost()).capturePhoto(BB, OB, GB)
        }
      },
      JB = {
        tools: QB.c,
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
    YB.D && yB.setHost(JB), (0, DB.y)((() => {
      yB.setHost(JB)
    }))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);