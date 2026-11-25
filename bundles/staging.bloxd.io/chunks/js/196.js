export const id = 196;
export const ids = [196];
export const modules = {
  34444: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      ALL_DEV_TOOLS: () => Xu,
      coreDevTools: () => fu,
      devTools: () => qu
    });
    var su = ju(680),
      Uu = ju(1353),
      Zu = ju(34448);
    const Xu = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function lu() {
      const {
        noaDevTools: uu
      } = await ju.e(242).then((() => ju(41290)));
      return uu
    }
    const qu = new class {
        constructor() {
          this.loadHost = lu, this.tools = Xu
        }
        setHost(uu) {
          this.tools = null === uu ? Xu : uu.tools, this.loadHost = null === uu ? lu : async () => uu
        }
        supports(uu) {
          return this.tools.has(uu)
        }
        async downloadScene(uu, Eu) {
          const ju = await this.loadHost();
          await ju.downloadScene(uu, Eu)
        }
        async setAmbientLightIntensity(uu) {
          const Eu = await this.loadHost();
          await Eu.setAmbientLightIntensity(uu)
        }
        async capturePhoto(uu, Eu, ju) {
          return (await this.loadHost()).capturePhoto(uu, Eu, ju)
        }
      },
      fu = {
        tools: Zu.e,
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
    su.y && qu.setHost(fu), (0, Uu.w)((() => {
      qu.setHost(fu)
    }))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);