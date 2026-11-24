export const id = 196;
export const ids = [196];
export const modules = {
  34306: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      ALL_DEV_TOOLS: () => Sp,
      coreDevTools: () => Yp,
      devTools: () => Lp
    });
    var Op = cp(657),
      op = cp(1317),
      Ip = cp(34310);
    const Sp = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function xp() {
      const {
        noaDevTools: pp
      } = await cp.e(242).then((() => cp(41280)));
      return pp
    }
    const Lp = new class {
        constructor() {
          this.loadHost = xp, this.tools = Sp
        }
        setHost(pp) {
          this.tools = null === pp ? Sp : pp.tools, this.loadHost = null === pp ? xp : async () => pp
        }
        supports(pp) {
          return this.tools.has(pp)
        }
        async downloadScene(pp, ip) {
          const cp = await this.loadHost();
          await cp.downloadScene(pp, ip)
        }
        async setAmbientLightIntensity(pp) {
          const ip = await this.loadHost();
          await ip.setAmbientLightIntensity(pp)
        }
        async capturePhoto(pp, ip, cp) {
          return (await this.loadHost()).capturePhoto(pp, ip, cp)
        }
      },
      Yp = {
        tools: Ip.d,
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
    Op.z && Lp.setHost(Yp), (0, op.y)((() => {
      Lp.setHost(Yp)
    }))
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);