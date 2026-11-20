export const id = 185;
export const ids = [185];
export const modules = {
  8946: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      ALL_DEV_TOOLS: () => mu,
      coreDevTools: () => Xu,
      devTools: () => Nu
    });
    var Eu = yu(624),
      Ku = yu(1257),
      Qu = yu(8949);
    const mu = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Ju() {
      const {
        noaDevTools: uu
      } = await yu.e(230).then((() => yu(40636)));
      return uu
    }
    const Nu = new class {
        constructor() {
          this.loadHost = Ju, this.tools = mu
        }
        setHost(uu) {
          this.tools = null === uu ? mu : uu.tools, this.loadHost = null === uu ? Ju : async () => uu
        }
        supports(uu) {
          return this.tools.has(uu)
        }
        async downloadScene(uu, Ru) {
          const yu = await this.loadHost();
          await yu.downloadScene(uu, Ru)
        }
        async setAmbientLightIntensity(uu) {
          const Ru = await this.loadHost();
          await Ru.setAmbientLightIntensity(uu)
        }
      },
      Xu = {
        tools: Qu.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Eu.q && Nu.setHost(Xu), (0, Ku.t)((() => {
      Nu.setHost(Xu)
    }))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);