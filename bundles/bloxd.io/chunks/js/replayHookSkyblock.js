export const id = 50;
export const ids = [50];
export const modules = {
  38486: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      SkyblockEntityFacing: () => yT,
      needsSkyblockEntityFacing: () => OT
    });
    var lT = cT(608),
      MT = cT(4235),
      KT = cT(38489);

    function OT(TT, kT) {
      if (TT.metaInfo === lT.c || "Iron Guardian" === TT.type || "Gold Guardian" === TT.type) return !0;
      if ("Pig" === TT.type) return "sitting" === TT.pose;
      if ("Person" !== TT.meshKind || void 0 === TT.meshOpts) return !1;
      let cT = null === kT || void 0 === kT ? void 0 : kT.get(TT.meshOpts);
      if (void 0 === cT) {
        var KT, OT;
        const lT = (0, MT.g)(TT);
        cT = !1, "pig_napoleon" === (null === lT || void 0 === lT || null === (KT = lT.opts.textures) || void 0 === KT ? void 0 : KT.head) ? cT = !0 : "npc_pig_head" === (null === lT || void 0 === lT || null === (OT = lT.opts.textures) || void 0 === OT ? void 0 : OT.head) && (cT = "sitting" === lT.opts.pose || "sitting"), kT && (kT.size >= 256 && kT.clear(), kT.set(TT.meshOpts, cT))
      }
      return "sitting" === cT ? "sitting" === TT.pose : cT
    }(0, KT.h)("skyblock", ((TT, kT) => {
      kT.setFacingTolerance(OT(TT) ? 0 : null)
    }));
    class yT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = TT, this.alsoVisit = kT, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = TT => {
          var kT;
          const cT = this.api.getEntityInfo(TT);
          cT && (OT(cT, this.meshFacingCache) && (this.api.setFacingTolerance(TT, 0), this.nextFacing.add(TT)), null === (kT = this.alsoVisit) || void 0 === kT || kT.call(this, TT, cT))
        }
      }
      UA() {
        const {
          api: TT
        } = this, kT = this.nextFacing;
        TT.forEachEntity(this.visit);
        for (const cT of this.facing) kT.has(cT) || TT.setFacingTolerance(cT, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = kT
      }
      dispose() {
        for (const TT of this.facing) this.api.setFacingTolerance(TT, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);