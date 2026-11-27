export const id = 60;
export const ids = [60];
export const modules = {
  39880: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      SkyblockEntityFacing: () => qR,
      needsSkyblockEntityFacing: () => ZR
    });
    var yR = GR(671),
      tR = GR(3017),
      uR = GR(39889);

    function ZR(RR, JR) {
      if (RR.metaInfo === yR.e || "Iron Guardian" === RR.type || "Gold Guardian" === RR.type) return !0;
      if ("Pig" === RR.type) return "sitting" === RR.pose;
      if ("Person" !== RR.meshKind || void 0 === RR.meshOpts) return !1;
      let GR = null === JR || void 0 === JR ? void 0 : JR.get(RR.meshOpts);
      if (void 0 === GR) {
        var uR, ZR;
        const yR = (0, tR.g)(RR);
        GR = !1, "pig_napoleon" === (null === yR || void 0 === yR || null === (uR = yR.opts.textures) || void 0 === uR ? void 0 : uR.head) ? GR = !0 : "npc_pig_head" === (null === yR || void 0 === yR || null === (ZR = yR.opts.textures) || void 0 === ZR ? void 0 : ZR.head) && (GR = "sitting" === yR.opts.pose || "sitting"), JR && (JR.size >= 256 && JR.clear(), JR.set(RR.meshOpts, GR))
      }
      return "sitting" === GR ? "sitting" === RR.pose : GR
    }(0, uR.e)("skyblock", ((RR, JR) => {
      JR.setFacingTolerance(ZR(RR) ? 0 : null)
    }));
    class qR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = RR, this.alsoVisit = JR, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = RR => {
          var JR;
          const GR = this.api.getEntityInfo(RR);
          GR && (ZR(GR, this.meshFacingCache) && (this.api.setFacingTolerance(RR, 0), this.nextFacing.add(RR)), null === (JR = this.alsoVisit) || void 0 === JR || JR.call(this, RR, GR))
        }
      }
      gK() {
        const {
          api: RR
        } = this, JR = this.nextFacing;
        RR.forEachEntity(this.visit);
        for (const GR of this.facing) JR.has(GR) || RR.setFacingTolerance(GR, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = JR
      }
      dispose() {
        for (const RR of this.facing) this.api.setFacingTolerance(RR, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);