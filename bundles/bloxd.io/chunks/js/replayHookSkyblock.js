export const id = 50;
export const ids = [50];
export const modules = {
  38255: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      SkyblockEntityFacing: () => Lb,
      needsSkyblockEntityFacing: () => Ub
    });
    var Bb = hb(580),
      Ob = hb(4013),
      Gb = hb(38264);

    function Ub(bb, ub) {
      if (bb.metaInfo === Bb.b || "Iron Guardian" === bb.type || "Gold Guardian" === bb.type) return !0;
      if ("Pig" === bb.type) return "sitting" === bb.pose;
      if ("Person" !== bb.meshKind || void 0 === bb.meshOpts) return !1;
      let hb = null === ub || void 0 === ub ? void 0 : ub.get(bb.meshOpts);
      if (void 0 === hb) {
        var Gb, Ub;
        const Bb = (0, Ob.g)(bb);
        hb = !1, "pig_napoleon" === (null === Bb || void 0 === Bb || null === (Gb = Bb.opts.textures) || void 0 === Gb ? void 0 : Gb.head) ? hb = !0 : "npc_pig_head" === (null === Bb || void 0 === Bb || null === (Ub = Bb.opts.textures) || void 0 === Ub ? void 0 : Ub.head) && (hb = "sitting" === Bb.opts.pose || "sitting"), ub && (ub.size >= 256 && ub.clear(), ub.set(bb.meshOpts, hb))
      }
      return "sitting" === hb ? "sitting" === bb.pose : hb
    }(0, Gb.d)("skyblock", ((bb, ub) => {
      ub.setFacingTolerance(Ub(bb) ? 0 : null)
    }));
    class Lb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = bb, this.alsoVisit = ub, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = bb => {
          var ub;
          const hb = this.api.getEntityInfo(bb);
          hb && (Ub(hb, this.meshFacingCache) && (this.api.setFacingTolerance(bb, 0), this.nextFacing.add(bb)), null === (ub = this.alsoVisit) || void 0 === ub || ub.call(this, bb, hb))
        }
      }
      gH() {
        const {
          api: bb
        } = this, ub = this.nextFacing;
        bb.forEachEntity(this.visit);
        for (const hb of this.facing) ub.has(hb) || bb.setFacingTolerance(hb, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = ub
      }
      dispose() {
        for (const bb of this.facing) this.api.setFacingTolerance(bb, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);