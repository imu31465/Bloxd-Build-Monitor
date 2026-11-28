export const id = 221;
export const ids = [220, 221];
export const modules = {
  35426: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    const Wd = new Set(["chunkBorders"])
  },
  35422: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      ALL_DEV_TOOLS: () => Xd,
      coreDevTools: () => vd,
      devTools: () => hd
    });
    var Wd = md(732),
      Fd = md(1361),
      Rd = md(35426);
    const Xd = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Kd() {
      const {
        noaDevTools: dd
      } = await md.e(270).then((() => md(43004)));
      return dd
    }
    const hd = new class {
        constructor() {
          this.loadHost = Kd, this.tools = Xd
        }
        setHost(dd) {
          this.tools = null === dd ? Xd : dd.tools, this.loadHost = null === dd ? Kd : async () => dd
        }
        supports(dd) {
          return this.tools.has(dd)
        }
        async downloadScene(dd, Od) {
          const md = await this.loadHost();
          await md.downloadScene(dd, Od)
        }
        async setAmbientLightIntensity(dd) {
          const Od = await this.loadHost();
          await Od.setAmbientLightIntensity(dd)
        }
        async capturePhoto(dd, Od, md) {
          return (await this.loadHost()).capturePhoto(dd, Od, md)
        }
        async snapshotNextFrame() {
          return (await this.loadHost()).snapshotNextFrame()
        }
      },
      vd = {
        tools: Rd.b,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        },
        capturePhoto: async () => {
          throw new Error("No game is drawing yet")
        },
        snapshotNextFrame: async () => {
          throw new Error("No game is drawing yet")
        }
      };
    Wd.G && hd.setHost(vd), (0, Fd.K)((() => {
      hd.setHost(vd)
    }))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);