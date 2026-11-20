export const id = 185;
export const ids = [185];
export const modules = {
  8723: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      ALL_DEV_TOOLS: () => Oz,
      coreDevTools: () => Uz,
      devTools: () => vz
    });
    var Fz = sz(601),
      Wz = sz(1279),
      Xz = sz(8732);
    const Oz = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function oz() {
      const {
        noaDevTools: zz
      } = await sz.e(230).then((() => sz(40160)));
      return zz
    }
    const vz = new class {
        constructor() {
          this.loadHost = oz, this.tools = Oz
        }
        setHost(zz) {
          this.tools = null === zz ? Oz : zz.tools, this.loadHost = null === zz ? oz : async () => zz
        }
        supports(zz) {
          return this.tools.has(zz)
        }
        async downloadScene(zz, tz) {
          const sz = await this.loadHost();
          await sz.downloadScene(zz, tz)
        }
        async setAmbientLightIntensity(zz) {
          const tz = await this.loadHost();
          await tz.setAmbientLightIntensity(zz)
        }
      },
      Uz = {
        tools: Xz.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Fz.p && vz.setHost(Uz), (0, Wz.t)((() => {
      vz.setHost(Uz)
    }))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);