export const id = 59;
export const ids = [59];
export const modules = {
  39559: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      SkyblockEntityFacing: () => tH,
      needsSkyblockEntityFacing: () => hH
    });
    var AH = LH(614),
      rH = LH(4617),
      SH = LH(39568);

    function hH(HH, BH) {
      if (HH.metaInfo === AH.e || "Iron Guardian" === HH.type || "Gold Guardian" === HH.type) return !0;
      if ("Pig" === HH.type) return "sitting" === HH.pose;
      if ("Person" !== HH.meshKind || void 0 === HH.meshOpts) return !1;
      let LH = null === BH || void 0 === BH ? void 0 : BH.get(HH.meshOpts);
      if (void 0 === LH) {
        var SH, hH;
        const AH = (0, rH.i)(HH);
        LH = !1, "pig_napoleon" === (null === AH || void 0 === AH || null === (SH = AH.opts.textures) || void 0 === SH ? void 0 : SH.head) ? LH = !0 : "npc_pig_head" === (null === AH || void 0 === AH || null === (hH = AH.opts.textures) || void 0 === hH ? void 0 : hH.head) && (LH = "sitting" === AH.opts.pose || "sitting"), BH && (BH.size >= 256 && BH.clear(), BH.set(HH.meshOpts, LH))
      }
      return "sitting" === LH ? "sitting" === HH.pose : LH
    }(0, SH.c)("skyblock", ((HH, BH) => {
      BH.setFacingTolerance(hH(HH) ? 0 : null)
    }));
    class tH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = HH, this.alsoVisit = BH, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = HH => {
          var BH;
          const LH = this.api.getEntityInfo(HH);
          LH && (hH(LH, this.meshFacingCache) && (this.api.setFacingTolerance(HH, 0), this.nextFacing.add(HH)), null === (BH = this.alsoVisit) || void 0 === BH || BH.call(this, HH, LH))
        }
      }
      IX() {
        const {
          api: HH
        } = this, BH = this.nextFacing;
        HH.forEachEntity(this.visit);
        for (const LH of this.facing) BH.has(LH) || HH.setFacingTolerance(LH, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = BH
      }
      dispose() {
        for (const HH of this.facing) this.api.setFacingTolerance(HH, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);