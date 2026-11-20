export const id = 49;
export const ids = [49];
export const modules = {
  37953: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      SkyblockEntityFacing: () => Yb,
      needsSkyblockEntityFacing: () => Eb
    });
    var Ab = Ub(583),
      Mb = Ub(3959),
      Tb = Ub(37955);

    function Eb(bb, ab) {
      if (bb.metaInfo === Ab.b || "Iron Guardian" === bb.type || "Gold Guardian" === bb.type) return !0;
      if ("Pig" === bb.type) return "sitting" === bb.pose;
      if ("Person" !== bb.meshKind || void 0 === bb.meshOpts) return !1;
      let Ub = null === ab || void 0 === ab ? void 0 : ab.get(bb.meshOpts);
      if (void 0 === Ub) {
        var Tb, Eb;
        const Ab = (0, Mb.h)(bb);
        Ub = !1, "pig_napoleon" === (null === Ab || void 0 === Ab || null === (Tb = Ab.opts.textures) || void 0 === Tb ? void 0 : Tb.head) ? Ub = !0 : "npc_pig_head" === (null === Ab || void 0 === Ab || null === (Eb = Ab.opts.textures) || void 0 === Eb ? void 0 : Eb.head) && (Ub = "sitting" === Ab.opts.pose || "sitting"), ab && (ab.size >= 256 && ab.clear(), ab.set(bb.meshOpts, Ub))
      }
      return "sitting" === Ub ? "sitting" === bb.pose : Ub
    }(0, Tb.h)("skyblock", ((bb, ab) => {
      ab.setFacingTolerance(Eb(bb) ? 0 : null)
    }));
    class Yb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = bb, this.alsoVisit = ab, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = bb => {
          var ab;
          const Ub = this.api.getEntityInfo(bb);
          Ub && (Eb(Ub, this.meshFacingCache) && (this.api.setFacingTolerance(bb, 0), this.nextFacing.add(bb)), null === (ab = this.alsoVisit) || void 0 === ab || ab.call(this, bb, Ub))
        }
      }
      qL() {
        const {
          api: bb
        } = this, ab = this.nextFacing;
        bb.forEachEntity(this.visit);
        for (const Ub of this.facing) ab.has(Ub) || bb.setFacingTolerance(Ub, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = ab
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