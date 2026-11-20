export const id = 49;
export const ids = [49];
export const modules = {
  38245: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      SkyblockEntityFacing: () => Ub,
      needsSkyblockEntityFacing: () => Tb
    });
    var kb = sb(624),
      Wb = sb(4023),
      ab = sb(38253);

    function Tb(bb, cb) {
      if (bb.metaInfo === kb.b || "Iron Guardian" === bb.type || "Gold Guardian" === bb.type) return !0;
      if ("Pig" === bb.type) return "sitting" === bb.pose;
      if ("Person" !== bb.meshKind || void 0 === bb.meshOpts) return !1;
      let sb = null === cb || void 0 === cb ? void 0 : cb.get(bb.meshOpts);
      if (void 0 === sb) {
        var ab, Tb;
        const kb = (0, Wb.h)(bb);
        sb = !1, "pig_napoleon" === (null === kb || void 0 === kb || null === (ab = kb.opts.textures) || void 0 === ab ? void 0 : ab.head) ? sb = !0 : "npc_pig_head" === (null === kb || void 0 === kb || null === (Tb = kb.opts.textures) || void 0 === Tb ? void 0 : Tb.head) && (sb = "sitting" === kb.opts.pose || "sitting"), cb && (cb.size >= 256 && cb.clear(), cb.set(bb.meshOpts, sb))
      }
      return "sitting" === sb ? "sitting" === bb.pose : sb
    }(0, ab.g)("skyblock", ((bb, cb) => {
      cb.setFacingTolerance(Tb(bb) ? 0 : null)
    }));
    class Ub {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = bb, this.alsoVisit = cb, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = bb => {
          var cb;
          const sb = this.api.getEntityInfo(bb);
          sb && (Tb(sb, this.meshFacingCache) && (this.api.setFacingTolerance(bb, 0), this.nextFacing.add(bb)), null === (cb = this.alsoVisit) || void 0 === cb || cb.call(this, bb, sb))
        }
      }
      aX() {
        const {
          api: bb
        } = this, cb = this.nextFacing;
        bb.forEachEntity(this.visit);
        for (const sb of this.facing) cb.has(sb) || bb.setFacingTolerance(sb, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = cb
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