export const id = 214;
export const ids = [214];
export const modules = {
  34751: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      ALL_DEV_TOOLS: () => Ke,
      coreDevTools: () => Je,
      devTools: () => Fe
    });
    var ye = He(645),
      be = He(1260),
      Me = He(34754);
    const Ke = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Ue() {
      const {
        noaDevTools: ee
      } = await He.e(264).then((() => He(42142)));
      return ee
    }
    const Fe = new class {
        constructor() {
          this.loadHost = Ue, this.tools = Ke
        }
        setHost(ee) {
          this.tools = null === ee ? Ke : ee.tools, this.loadHost = null === ee ? Ue : async () => ee
        }
        supports(ee) {
          return this.tools.has(ee)
        }
        async downloadScene(ee, ie) {
          const He = await this.loadHost();
          await He.downloadScene(ee, ie)
        }
        async setAmbientLightIntensity(ee) {
          const ie = await this.loadHost();
          await ie.setAmbientLightIntensity(ee)
        }
        async capturePhoto(ee, ie, He) {
          return (await this.loadHost()).capturePhoto(ee, ie, He)
        }
      },
      Je = {
        tools: Me.d,
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
    ye.I && Fe.setHost(Je), (0, be.s)((() => {
      Fe.setHost(Je)
    }))
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);