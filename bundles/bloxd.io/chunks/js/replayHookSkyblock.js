export const id = 49;
export const ids = [49];
export const modules = {
  38286: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      SkyblockEntityFacing: () => bk,
      needsSkyblockEntityFacing: () => Xk
    });
    var Rk = Bk(597),
      tk = Bk(4002),
      ak = Bk(38290);

    function Xk(kk, Fk) {
      if (kk.metaInfo === Rk.d || "Iron Guardian" === kk.type || "Gold Guardian" === kk.type) return !0;
      if ("Pig" === kk.type) return "sitting" === kk.pose;
      if ("Person" !== kk.meshKind || void 0 === kk.meshOpts) return !1;
      let Bk = null === Fk || void 0 === Fk ? void 0 : Fk.get(kk.meshOpts);
      if (void 0 === Bk) {
        var ak, Xk;
        const Rk = (0, tk.h)(kk);
        Bk = !1, "pig_napoleon" === (null === Rk || void 0 === Rk || null === (ak = Rk.opts.textures) || void 0 === ak ? void 0 : ak.head) ? Bk = !0 : "npc_pig_head" === (null === Rk || void 0 === Rk || null === (Xk = Rk.opts.textures) || void 0 === Xk ? void 0 : Xk.head) && (Bk = "sitting" === Rk.opts.pose || "sitting"), Fk && (Fk.size >= 256 && Fk.clear(), Fk.set(kk.meshOpts, Bk))
      }
      return "sitting" === Bk ? "sitting" === kk.pose : Bk
    }(0, ak.d)("skyblock", ((kk, Fk) => {
      Fk.setFacingTolerance(Xk(kk) ? 0 : null)
    }));
    class bk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = kk, this.alsoVisit = Fk, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = kk => {
          var Fk;
          const Bk = this.api.getEntityInfo(kk);
          Bk && (Xk(Bk, this.meshFacingCache) && (this.api.setFacingTolerance(kk, 0), this.nextFacing.add(kk)), null === (Fk = this.alsoVisit) || void 0 === Fk || Fk.call(this, kk, Bk))
        }
      }
      yJ() {
        const {
          api: kk
        } = this, Fk = this.nextFacing;
        kk.forEachEntity(this.visit);
        for (const Bk of this.facing) Fk.has(Bk) || kk.setFacingTolerance(Bk, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Fk
      }
      dispose() {
        for (const kk of this.facing) this.api.setFacingTolerance(kk, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);