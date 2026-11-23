export const id = 194;
export const ids = [194];
export const modules = {
  34044: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      ALL_DEV_TOOLS: () => yk,
      coreDevTools: () => qk,
      devTools: () => ak
    });
    var Xk = Ik(646),
      Tk = Ik(1276),
      ik = Ik(34048);
    const yk = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function lk() {
      const {
        noaDevTools: kk
      } = await Ik.e(236).then((() => Ik(41079)));
      return kk
    }
    const ak = new class {
        constructor() {
          this.loadHost = lk, this.tools = yk
        }
        setHost(kk) {
          this.tools = null === kk ? yk : kk.tools, this.loadHost = null === kk ? lk : async () => kk
        }
        supports(kk) {
          return this.tools.has(kk)
        }
        async downloadScene(kk, Fk) {
          const Ik = await this.loadHost();
          await Ik.downloadScene(kk, Fk)
        }
        async setAmbientLightIntensity(kk) {
          const Fk = await this.loadHost();
          await Fk.setAmbientLightIntensity(kk)
        }
        async capturePhoto(kk, Fk, Ik) {
          return (await this.loadHost()).capturePhoto(kk, Fk, Ik)
        }
      },
      qk = {
        tools: ik.c,
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
    Xk.x && ak.setHost(qk), (0, Tk.B)((() => {
      ak.setHost(qk)
    }))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);