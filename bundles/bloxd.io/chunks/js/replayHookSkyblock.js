export const id = 52;
export const ids = [52];
export const modules = {
  38860: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      SkyblockEntityFacing: () => dt,
      needsSkyblockEntityFacing: () => mt
    });
    var Ot = Vt(707),
      qt = Vt(4339),
      Dt = Vt(38869);

    function mt(tt, et) {
      if (tt.metaInfo === Ot.d || "Iron Guardian" === tt.type || "Gold Guardian" === tt.type) return !0;
      if ("Pig" === tt.type) return "sitting" === tt.pose;
      if ("Person" !== tt.meshKind || void 0 === tt.meshOpts) return !1;
      let Vt = null === et || void 0 === et ? void 0 : et.get(tt.meshOpts);
      if (void 0 === Vt) {
        var Dt, mt;
        const Ot = (0, qt.h)(tt);
        Vt = !1, "pig_napoleon" === (null === Ot || void 0 === Ot || null === (Dt = Ot.opts.textures) || void 0 === Dt ? void 0 : Dt.head) ? Vt = !0 : "npc_pig_head" === (null === Ot || void 0 === Ot || null === (mt = Ot.opts.textures) || void 0 === mt ? void 0 : mt.head) && (Vt = "sitting" === Ot.opts.pose || "sitting"), et && (et.size >= 256 && et.clear(), et.set(tt.meshOpts, Vt))
      }
      return "sitting" === Vt ? "sitting" === tt.pose : Vt
    }(0, Dt.e)("skyblock", ((tt, et) => {
      et.setFacingTolerance(mt(tt) ? 0 : null)
    }));
    class dt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = tt, this.alsoVisit = et, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = tt => {
          var et;
          const Vt = this.api.getEntityInfo(tt);
          Vt && (mt(Vt, this.meshFacingCache) && (this.api.setFacingTolerance(tt, 0), this.nextFacing.add(tt)), null === (et = this.alsoVisit) || void 0 === et || et.call(this, tt, Vt))
        }
      }
      BQ() {
        const {
          api: tt
        } = this, et = this.nextFacing;
        tt.forEachEntity(this.visit);
        for (const Vt of this.facing) et.has(Vt) || tt.setFacingTolerance(Vt, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = et
      }
      dispose() {
        for (const tt of this.facing) this.api.setFacingTolerance(tt, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);