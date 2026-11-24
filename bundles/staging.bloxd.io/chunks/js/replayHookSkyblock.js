export const id = 52;
export const ids = [52];
export const modules = {
  38742: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      SkyblockEntityFacing: () => NB,
      needsSkyblockEntityFacing: () => IB
    });
    var QB = zB(652),
      nB = zB(4334),
      dB = zB(38748);

    function IB(BB, jB) {
      if (BB.metaInfo === QB.c || "Iron Guardian" === BB.type || "Gold Guardian" === BB.type) return !0;
      if ("Pig" === BB.type) return "sitting" === BB.pose;
      if ("Person" !== BB.meshKind || void 0 === BB.meshOpts) return !1;
      let zB = null === jB || void 0 === jB ? void 0 : jB.get(BB.meshOpts);
      if (void 0 === zB) {
        var dB, IB;
        const QB = (0, nB.g)(BB);
        zB = !1, "pig_napoleon" === (null === QB || void 0 === QB || null === (dB = QB.opts.textures) || void 0 === dB ? void 0 : dB.head) ? zB = !0 : "npc_pig_head" === (null === QB || void 0 === QB || null === (IB = QB.opts.textures) || void 0 === IB ? void 0 : IB.head) && (zB = "sitting" === QB.opts.pose || "sitting"), jB && (jB.size >= 256 && jB.clear(), jB.set(BB.meshOpts, zB))
      }
      return "sitting" === zB ? "sitting" === BB.pose : zB
    }(0, dB.h)("skyblock", ((BB, jB) => {
      jB.setFacingTolerance(IB(BB) ? 0 : null)
    }));
    class NB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = BB, this.alsoVisit = jB, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = BB => {
          var jB;
          const zB = this.api.getEntityInfo(BB);
          zB && (IB(zB, this.meshFacingCache) && (this.api.setFacingTolerance(BB, 0), this.nextFacing.add(BB)), null === (jB = this.alsoVisit) || void 0 === jB || jB.call(this, BB, zB))
        }
      }
      vp() {
        const {
          api: BB
        } = this, jB = this.nextFacing;
        BB.forEachEntity(this.visit);
        for (const zB of this.facing) jB.has(zB) || BB.setFacingTolerance(zB, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = jB
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