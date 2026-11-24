export const id = 52;
export const ids = [52];
export const modules = {
  38681: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      SkyblockEntityFacing: () => vB,
      needsSkyblockEntityFacing: () => GB
    });
    var TB = ZB(663),
      JB = ZB(4416),
      oB = ZB(38685);

    function GB(BB, IB) {
      if (BB.metaInfo === TB.d || "Iron Guardian" === BB.type || "Gold Guardian" === BB.type) return !0;
      if ("Pig" === BB.type) return "sitting" === BB.pose;
      if ("Person" !== BB.meshKind || void 0 === BB.meshOpts) return !1;
      let ZB = null === IB || void 0 === IB ? void 0 : IB.get(BB.meshOpts);
      if (void 0 === ZB) {
        var oB, GB;
        const TB = (0, JB.h)(BB);
        ZB = !1, "pig_napoleon" === (null === TB || void 0 === TB || null === (oB = TB.opts.textures) || void 0 === oB ? void 0 : oB.head) ? ZB = !0 : "npc_pig_head" === (null === TB || void 0 === TB || null === (GB = TB.opts.textures) || void 0 === GB ? void 0 : GB.head) && (ZB = "sitting" === TB.opts.pose || "sitting"), IB && (IB.size >= 256 && IB.clear(), IB.set(BB.meshOpts, ZB))
      }
      return "sitting" === ZB ? "sitting" === BB.pose : ZB
    }(0, oB.g)("skyblock", ((BB, IB) => {
      IB.setFacingTolerance(GB(BB) ? 0 : null)
    }));
    class vB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = BB, this.alsoVisit = IB, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = BB => {
          var IB;
          const ZB = this.api.getEntityInfo(BB);
          ZB && (GB(ZB, this.meshFacingCache) && (this.api.setFacingTolerance(BB, 0), this.nextFacing.add(BB)), null === (IB = this.alsoVisit) || void 0 === IB || IB.call(this, BB, ZB))
        }
      }
      Iz() {
        const {
          api: BB
        } = this, IB = this.nextFacing;
        BB.forEachEntity(this.visit);
        for (const ZB of this.facing) IB.has(ZB) || BB.setFacingTolerance(ZB, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = IB
      }
      dispose() {
        for (const BB of this.facing) this.api.setFacingTolerance(BB, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);