export const id = 221;
export const ids = [220, 221];
export const modules = {
  35221: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    const eb = new Set(["chunkBorders"])
  },
  35213: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      ALL_DEV_TOOLS: () => Vb,
      coreDevTools: () => Lb,
      devTools: () => lb
    });
    var eb = Mb(698),
      Hb = Mb(1391),
      pb = Mb(35221);
    const Vb = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function gb() {
      const {
        noaDevTools: bb
      } = await Mb.e(270).then((() => Mb(42733)));
      return bb
    }
    const lb = new class {
        constructor() {
          this.loadHost = gb, this.tools = Vb
        }
        setHost(bb) {
          this.tools = null === bb ? Vb : bb.tools, this.loadHost = null === bb ? gb : async () => bb
        }
        supports(bb) {
          return this.tools.has(bb)
        }
        async downloadScene(bb, wb) {
          const Mb = await this.loadHost();
          await Mb.downloadScene(bb, wb)
        }
        async setAmbientLightIntensity(bb) {
          const wb = await this.loadHost();
          await wb.setAmbientLightIntensity(bb)
        }
        async capturePhoto(bb, wb, Mb) {
          return (await this.loadHost()).capturePhoto(bb, wb, Mb)
        }
        async snapshotNextFrame() {
          return (await this.loadHost()).snapshotNextFrame()
        }
      },
      Lb = {
        tools: pb.b,
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
    eb.I && lb.setHost(Lb), (0, Hb.F)((() => {
      lb.setHost(Lb)
    }))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);