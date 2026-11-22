export const id = 196;
export const ids = [196];
export const modules = {
  33664: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      ALL_DEV_TOOLS: () => bk,
      coreDevTools: () => mk,
      devTools: () => Pk
    });
    var Dk = ik(610),
      fk = ik(1284),
      Sk = ik(33673);
    const bk = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function rk() {
      const {
        noaDevTools: kk
      } = await ik.e(234).then((() => ik(40655)));
      return kk
    }
    const Pk = new class {
        constructor() {
          this.loadHost = rk, this.tools = bk
        }
        setHost(kk) {
          this.tools = null === kk ? bk : kk.tools, this.loadHost = null === kk ? rk : async () => kk
        }
        supports(kk) {
          return this.tools.has(kk)
        }
        async downloadScene(kk, ek) {
          const ik = await this.loadHost();
          await ik.downloadScene(kk, ek)
        }
        async setAmbientLightIntensity(kk) {
          const ek = await this.loadHost();
          await ek.setAmbientLightIntensity(kk)
        }
      },
      mk = {
        tools: Sk.c,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Dk.s && Pk.setHost(mk), (0, fk.s)((() => {
      Pk.setHost(mk)
    }))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);