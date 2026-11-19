export const id = 185;
export const ids = [185];
export const modules = {
  8886: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      ALL_DEV_TOOLS: () => lz,
      coreDevTools: () => Hz,
      devTools: () => tz
    });
    var Ez = bz(606),
      nz = bz(1273),
      iz = bz(8889);
    const lz = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Mz() {
      const {
        noaDevTools: zz
      } = await bz.e(230).then((() => bz(40259)));
      return zz
    }
    const tz = new class {
        constructor() {
          this.loadHost = Mz, this.tools = lz
        }
        setHost(zz) {
          this.tools = null === zz ? lz : zz.tools, this.loadHost = null === zz ? Mz : async () => zz
        }
        supports(zz) {
          return this.tools.has(zz)
        }
        async downloadScene(zz, uz) {
          const bz = await this.loadHost();
          await bz.downloadScene(zz, uz)
        }
        async setAmbientLightIntensity(zz) {
          const uz = await this.loadHost();
          await uz.setAmbientLightIntensity(zz)
        }
      },
      Hz = {
        tools: iz.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Ez.x && tz.setHost(Hz), (0, nz.s)((() => {
      tz.setHost(Hz)
    }))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);