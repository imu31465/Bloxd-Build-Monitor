export const id = 52;
export const ids = [52];
export const modules = {
  38764: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      SkyblockEntityFacing: () => nT,
      needsSkyblockEntityFacing: () => gT
    });
    var WT = mT(649),
      zT = mT(4328),
      MT = mT(38770);

    function gT(TT, UT) {
      if (TT.metaInfo === WT.c || "Iron Guardian" === TT.type || "Gold Guardian" === TT.type) return !0;
      if ("Pig" === TT.type) return "sitting" === TT.pose;
      if ("Person" !== TT.meshKind || void 0 === TT.meshOpts) return !1;
      let mT = null === UT || void 0 === UT ? void 0 : UT.get(TT.meshOpts);
      if (void 0 === mT) {
        var MT, gT;
        const WT = (0, zT.g)(TT);
        mT = !1, "pig_napoleon" === (null === WT || void 0 === WT || null === (MT = WT.opts.textures) || void 0 === MT ? void 0 : MT.head) ? mT = !0 : "npc_pig_head" === (null === WT || void 0 === WT || null === (gT = WT.opts.textures) || void 0 === gT ? void 0 : gT.head) && (mT = "sitting" === WT.opts.pose || "sitting"), UT && (UT.size >= 256 && UT.clear(), UT.set(TT.meshOpts, mT))
      }
      return "sitting" === mT ? "sitting" === TT.pose : mT
    }(0, MT.d)("skyblock", ((TT, UT) => {
      UT.setFacingTolerance(gT(TT) ? 0 : null)
    }));
    class nT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = TT, this.alsoVisit = UT, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = TT => {
          var UT;
          const mT = this.api.getEntityInfo(TT);
          mT && (gT(mT, this.meshFacingCache) && (this.api.setFacingTolerance(TT, 0), this.nextFacing.add(TT)), null === (UT = this.alsoVisit) || void 0 === UT || UT.call(this, TT, mT))
        }
      }
      Cl() {
        const {
          api: TT
        } = this, UT = this.nextFacing;
        TT.forEachEntity(this.visit);
        for (const mT of this.facing) UT.has(mT) || TT.setFacingTolerance(mT, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = UT
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