export const id = 194;
export const ids = [194];
export const modules = {
  34163: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      ALL_DEV_TOOLS: () => xm,
      coreDevTools: () => im,
      devTools: () => Dm
    });
    var hm = fm(675),
      Am = fm(1296),
      am = fm(34168);
    const xm = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function wm() {
      const {
        noaDevTools: mm
      } = await fm.e(236).then((() => fm(41124)));
      return mm
    }
    const Dm = new class {
        constructor() {
          this.loadHost = wm, this.tools = xm
        }
        setHost(mm) {
          this.tools = null === mm ? xm : mm.tools, this.loadHost = null === mm ? wm : async () => mm
        }
        supports(mm) {
          return this.tools.has(mm)
        }
        async downloadScene(mm, Tm) {
          const fm = await this.loadHost();
          await fm.downloadScene(mm, Tm)
        }
        async setAmbientLightIntensity(mm) {
          const Tm = await this.loadHost();
          await Tm.setAmbientLightIntensity(mm)
        }
        async capturePhoto(mm, Tm, fm) {
          return (await this.loadHost()).capturePhoto(mm, Tm, fm)
        }
      },
      im = {
        tools: am.b,
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
    hm.A && Dm.setHost(im), (0, Am.p)((() => {
      Dm.setHost(im)
    }))
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);