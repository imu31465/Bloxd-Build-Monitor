export const id = 220;
export const ids = [220];
export const modules = {
  35335: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      ALL_DEV_TOOLS: () => jr,
      coreDevTools: () => Er,
      devTools: () => fr
    });
    var Zr = Qr(712),
      Wr = Qr(1364),
      ar = Qr(35337);
    const jr = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Ir() {
      const {
        noaDevTools: rr
      } = await Qr.e(270).then((() => Qr(42923)));
      return rr
    }
    const fr = new class {
        constructor() {
          this.loadHost = Ir, this.tools = jr
        }
        setHost(rr) {
          this.tools = null === rr ? jr : rr.tools, this.loadHost = null === rr ? Ir : async () => rr
        }
        supports(rr) {
          return this.tools.has(rr)
        }
        async downloadScene(rr, Sr) {
          const Qr = await this.loadHost();
          await Qr.downloadScene(rr, Sr)
        }
        async setAmbientLightIntensity(rr) {
          const Sr = await this.loadHost();
          await Sr.setAmbientLightIntensity(rr)
        }
        async capturePhoto(rr, Sr, Qr) {
          return (await this.loadHost()).capturePhoto(rr, Sr, Qr)
        }
        async snapshotNextFrame() {
          return (await this.loadHost()).snapshotNextFrame()
        }
      },
      Er = {
        tools: ar.e,
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
    Zr.I && fr.setHost(Er), (0, Wr.M)((() => {
      fr.setHost(Er)
    }))
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);