export const id = 58;
export const ids = [58];
export const modules = {
  39676: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      SkyblockEntityFacing: () => PM,
      needsSkyblockEntityFacing: () => aM
    });
    var OM = iM(620),
      SM = iM(4577),
      jM = iM(39678);

    function aM(MM, rM) {
      if (MM.metaInfo === OM.c || "Iron Guardian" === MM.type || "Gold Guardian" === MM.type) return !0;
      if ("Pig" === MM.type) return "sitting" === MM.pose;
      if ("Person" !== MM.meshKind || void 0 === MM.meshOpts) return !1;
      let iM = null === rM || void 0 === rM ? void 0 : rM.get(MM.meshOpts);
      if (void 0 === iM) {
        var jM, aM;
        const OM = (0, SM.g)(MM);
        iM = !1, "pig_napoleon" === (null === OM || void 0 === OM || null === (jM = OM.opts.textures) || void 0 === jM ? void 0 : jM.head) ? iM = !0 : "npc_pig_head" === (null === OM || void 0 === OM || null === (aM = OM.opts.textures) || void 0 === aM ? void 0 : aM.head) && (iM = "sitting" === OM.opts.pose || "sitting"), rM && (rM.size >= 256 && rM.clear(), rM.set(MM.meshOpts, iM))
      }
      return "sitting" === iM ? "sitting" === MM.pose : iM
    }(0, jM.g)("skyblock", ((MM, rM) => {
      rM.setFacingTolerance(aM(MM) ? 0 : null)
    }));
    class PM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = MM, this.alsoVisit = rM, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = MM => {
          var rM;
          const iM = this.api.getEntityInfo(MM);
          iM && (aM(iM, this.meshFacingCache) && (this.api.setFacingTolerance(MM, 0), this.nextFacing.add(MM)), null === (rM = this.alsoVisit) || void 0 === rM || rM.call(this, MM, iM))
        }
      }
      bL() {
        const {
          api: MM
        } = this, rM = this.nextFacing;
        MM.forEachEntity(this.visit);
        for (const iM of this.facing) rM.has(iM) || MM.setFacingTolerance(iM, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = rM
      }
      dispose() {
        for (const MM of this.facing) this.api.setFacingTolerance(MM, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);