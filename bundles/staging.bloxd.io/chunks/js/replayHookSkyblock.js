export const id = 52;
export const ids = [52];
export const modules = {
  39066: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      SkyblockEntityFacing: () => kG,
      needsSkyblockEntityFacing: () => yG
    });
    var wG = ZG(595),
      SG = ZG(4255),
      LG = ZG(39068);

    function yG(GG, bG) {
      if (GG.metaInfo === wG.b || "Iron Guardian" === GG.type || "Gold Guardian" === GG.type) return !0;
      if ("Pig" === GG.type) return "sitting" === GG.pose;
      if ("Person" !== GG.meshKind || void 0 === GG.meshOpts) return !1;
      let ZG = null === bG || void 0 === bG ? void 0 : bG.get(GG.meshOpts);
      if (void 0 === ZG) {
        var LG, yG;
        const wG = (0, SG.e)(GG);
        ZG = !1, "pig_napoleon" === (null === wG || void 0 === wG || null === (LG = wG.opts.textures) || void 0 === LG ? void 0 : LG.head) ? ZG = !0 : "npc_pig_head" === (null === wG || void 0 === wG || null === (yG = wG.opts.textures) || void 0 === yG ? void 0 : yG.head) && (ZG = "sitting" === wG.opts.pose || "sitting"), bG && (bG.size >= 256 && bG.clear(), bG.set(GG.meshOpts, ZG))
      }
      return "sitting" === ZG ? "sitting" === GG.pose : ZG
    }(0, LG.h)("skyblock", ((GG, bG) => {
      bG.setFacingTolerance(yG(GG) ? 0 : null)
    }));
    class kG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = GG, this.alsoVisit = bG, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = GG => {
          var bG;
          const ZG = this.api.getEntityInfo(GG);
          ZG && (yG(ZG, this.meshFacingCache) && (this.api.setFacingTolerance(GG, 0), this.nextFacing.add(GG)), null === (bG = this.alsoVisit) || void 0 === bG || bG.call(this, GG, ZG))
        }
      }
      Tp() {
        const {
          api: GG
        } = this, bG = this.nextFacing;
        GG.forEachEntity(this.visit);
        for (const ZG of this.facing) bG.has(ZG) || GG.setFacingTolerance(ZG, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = bG
      }
      dispose() {
        for (const GG of this.facing) this.api.setFacingTolerance(GG, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);