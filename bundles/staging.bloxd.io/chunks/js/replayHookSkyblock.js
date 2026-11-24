export const id = 52;
export const ids = [52];
export const modules = {
  38864: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      SkyblockEntityFacing: () => xp,
      needsSkyblockEntityFacing: () => Sp
    });
    var Op = cp(636),
      op = cp(4341),
      Ip = cp(38866);

    function Sp(pp, ip) {
      if (pp.metaInfo === Op.d || "Iron Guardian" === pp.type || "Gold Guardian" === pp.type) return !0;
      if ("Pig" === pp.type) return "sitting" === pp.pose;
      if ("Person" !== pp.meshKind || void 0 === pp.meshOpts) return !1;
      let cp = null === ip || void 0 === ip ? void 0 : ip.get(pp.meshOpts);
      if (void 0 === cp) {
        var Ip, Sp;
        const Op = (0, op.h)(pp);
        cp = !1, "pig_napoleon" === (null === Op || void 0 === Op || null === (Ip = Op.opts.textures) || void 0 === Ip ? void 0 : Ip.head) ? cp = !0 : "npc_pig_head" === (null === Op || void 0 === Op || null === (Sp = Op.opts.textures) || void 0 === Sp ? void 0 : Sp.head) && (cp = "sitting" === Op.opts.pose || "sitting"), ip && (ip.size >= 256 && ip.clear(), ip.set(pp.meshOpts, cp))
      }
      return "sitting" === cp ? "sitting" === pp.pose : cp
    }(0, Ip.h)("skyblock", ((pp, ip) => {
      ip.setFacingTolerance(Sp(pp) ? 0 : null)
    }));
    class xp {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = pp, this.alsoVisit = ip, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = pp => {
          var ip;
          const cp = this.api.getEntityInfo(pp);
          cp && (Sp(cp, this.meshFacingCache) && (this.api.setFacingTolerance(pp, 0), this.nextFacing.add(pp)), null === (ip = this.alsoVisit) || void 0 === ip || ip.call(this, pp, cp))
        }
      }
      LP() {
        const {
          api: pp
        } = this, ip = this.nextFacing;
        pp.forEachEntity(this.visit);
        for (const cp of this.facing) ip.has(cp) || pp.setFacingTolerance(cp, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = ip
      }
      dispose() {
        for (const pp of this.facing) this.api.setFacingTolerance(pp, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);