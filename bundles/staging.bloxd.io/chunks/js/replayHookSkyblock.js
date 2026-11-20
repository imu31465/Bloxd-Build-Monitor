export const id = 49;
export const ids = [49];
export const modules = {
  38190: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      SkyblockEntityFacing: () => TU,
      needsSkyblockEntityFacing: () => PU
    });
    var tU = gU(572),
      pU = gU(3937),
      EU = gU(38198);

    function PU(UU, RU) {
      if (UU.metaInfo === tU.c || "Iron Guardian" === UU.type || "Gold Guardian" === UU.type) return !0;
      if ("Pig" === UU.type) return "sitting" === UU.pose;
      if ("Person" !== UU.meshKind || void 0 === UU.meshOpts) return !1;
      let gU = null === RU || void 0 === RU ? void 0 : RU.get(UU.meshOpts);
      if (void 0 === gU) {
        var EU, PU;
        const tU = (0, pU.j)(UU);
        gU = !1, "pig_napoleon" === (null === tU || void 0 === tU || null === (EU = tU.opts.textures) || void 0 === EU ? void 0 : EU.head) ? gU = !0 : "npc_pig_head" === (null === tU || void 0 === tU || null === (PU = tU.opts.textures) || void 0 === PU ? void 0 : PU.head) && (gU = "sitting" === tU.opts.pose || "sitting"), RU && (RU.size >= 256 && RU.clear(), RU.set(UU.meshOpts, gU))
      }
      return "sitting" === gU ? "sitting" === UU.pose : gU
    }(0, EU.d)("skyblock", ((UU, RU) => {
      RU.setFacingTolerance(PU(UU) ? 0 : null)
    }));
    class TU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = UU, this.alsoVisit = RU, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = UU => {
          var RU;
          const gU = this.api.getEntityInfo(UU);
          gU && (PU(gU, this.meshFacingCache) && (this.api.setFacingTolerance(UU, 0), this.nextFacing.add(UU)), null === (RU = this.alsoVisit) || void 0 === RU || RU.call(this, UU, gU))
        }
      }
      HG() {
        const {
          api: UU
        } = this, RU = this.nextFacing;
        UU.forEachEntity(this.visit);
        for (const gU of this.facing) RU.has(gU) || UU.setFacingTolerance(gU, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = RU
      }
      dispose() {
        for (const UU of this.facing) this.api.setFacingTolerance(UU, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);