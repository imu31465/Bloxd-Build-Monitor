export const id = 172;
export const ids = [172];
export const modules = {
  8135: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      ALL_DEV_TOOLS: () => hF,
      coreDevTools: () => PF,
      devTools: () => dF
    });
    var CF = SF(234),
      AF = SF(1153),
      uF = SF(8144);
    const hF = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function bW() {
      const {
        noaDevTools: FF
      } = await SF.e(210).then((() => SF(38924)));
      return FF
    }
    const dF = new class {
        constructor() {
          this.loadHost = bW, this.tools = hF
        }
        setHost(FF) {
          this.tools = null === FF ? hF : FF.tools, this.loadHost = null === FF ? bW : async () => FF
        }
        supports(FF) {
          return this.tools.has(FF)
        }
        async downloadScene(FF, WF) {
          const SF = await this.loadHost();
          await SF.downloadScene(FF, WF)
        }
        async setAmbientLightIntensity(FF) {
          const WF = await this.loadHost();
          await WF.setAmbientLightIntensity(FF)
        }
      },
      PF = {
        tools: uF.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    CF.h && dF.setHost(PF), (0, AF.g)((() => {
      dF.setHost(PF)
    }))
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);