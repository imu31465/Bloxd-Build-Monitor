export const id = 50;
export const ids = [50];
export const modules = {
  38780: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      SkyblockEntityFacing: () => Zd,
      needsSkyblockEntityFacing: () => Pd
    });
    var pd = kd(605),
      Nd = kd(4090),
      Wd = kd(38785);

    function Pd(dd, Jd) {
      if (dd.metaInfo === pd.c || "Iron Guardian" === dd.type || "Gold Guardian" === dd.type) return !0;
      if ("Pig" === dd.type) return "sitting" === dd.pose;
      if ("Person" !== dd.meshKind || void 0 === dd.meshOpts) return !1;
      let kd = null === Jd || void 0 === Jd ? void 0 : Jd.get(dd.meshOpts);
      if (void 0 === kd) {
        var Wd, Pd;
        const pd = (0, Nd.h)(dd);
        kd = !1, "pig_napoleon" === (null === pd || void 0 === pd || null === (Wd = pd.opts.textures) || void 0 === Wd ? void 0 : Wd.head) ? kd = !0 : "npc_pig_head" === (null === pd || void 0 === pd || null === (Pd = pd.opts.textures) || void 0 === Pd ? void 0 : Pd.head) && (kd = "sitting" === pd.opts.pose || "sitting"), Jd && (Jd.size >= 256 && Jd.clear(), Jd.set(dd.meshOpts, kd))
      }
      return "sitting" === kd ? "sitting" === dd.pose : kd
    }(0, Wd.i)("skyblock", ((dd, Jd) => {
      Jd.setFacingTolerance(Pd(dd) ? 0 : null)
    }));
    class Zd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = dd, this.alsoVisit = Jd, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = dd => {
          var Jd;
          const kd = this.api.getEntityInfo(dd);
          kd && (Pd(kd, this.meshFacingCache) && (this.api.setFacingTolerance(dd, 0), this.nextFacing.add(dd)), null === (Jd = this.alsoVisit) || void 0 === Jd || Jd.call(this, dd, kd))
        }
      }
      Do() {
        const {
          api: dd
        } = this, Jd = this.nextFacing;
        dd.forEachEntity(this.visit);
        for (const kd of this.facing) Jd.has(kd) || dd.setFacingTolerance(kd, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Jd
      }
      dispose() {
        for (const dd of this.facing) this.api.setFacingTolerance(dd, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);