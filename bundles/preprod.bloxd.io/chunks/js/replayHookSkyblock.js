export const id = 59;
export const ids = [59];
export const modules = {
  39338: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      SkyblockEntityFacing: () => jB,
      needsSkyblockEntityFacing: () => oB
    });
    var YB = GB(635),
      DB = GB(4642),
      QB = GB(39342);

    function oB(BB, OB) {
      if (BB.metaInfo === YB.c || "Iron Guardian" === BB.type || "Gold Guardian" === BB.type) return !0;
      if ("Pig" === BB.type) return "sitting" === BB.pose;
      if ("Person" !== BB.meshKind || void 0 === BB.meshOpts) return !1;
      let GB = null === OB || void 0 === OB ? void 0 : OB.get(BB.meshOpts);
      if (void 0 === GB) {
        var QB, oB;
        const YB = (0, DB.i)(BB);
        GB = !1, "pig_napoleon" === (null === YB || void 0 === YB || null === (QB = YB.opts.textures) || void 0 === QB ? void 0 : QB.head) ? GB = !0 : "npc_pig_head" === (null === YB || void 0 === YB || null === (oB = YB.opts.textures) || void 0 === oB ? void 0 : oB.head) && (GB = "sitting" === YB.opts.pose || "sitting"), OB && (OB.size >= 256 && OB.clear(), OB.set(BB.meshOpts, GB))
      }
      return "sitting" === GB ? "sitting" === BB.pose : GB
    }(0, QB.f)("skyblock", ((BB, OB) => {
      OB.setFacingTolerance(oB(BB) ? 0 : null)
    }));
    class jB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = BB, this.alsoVisit = OB, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = BB => {
          var OB;
          const GB = this.api.getEntityInfo(BB);
          GB && (oB(GB, this.meshFacingCache) && (this.api.setFacingTolerance(BB, 0), this.nextFacing.add(BB)), null === (OB = this.alsoVisit) || void 0 === OB || OB.call(this, BB, GB))
        }
      }
      kP() {
        const {
          api: BB
        } = this, OB = this.nextFacing;
        BB.forEachEntity(this.visit);
        for (const GB of this.facing) OB.has(GB) || BB.setFacingTolerance(GB, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = OB
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