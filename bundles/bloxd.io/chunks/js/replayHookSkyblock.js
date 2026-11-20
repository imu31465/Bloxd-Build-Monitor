export const id = 50;
export const ids = [50];
export const modules = {
  38619: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      SkyblockEntityFacing: () => xq,
      needsSkyblockEntityFacing: () => mq
    });
    var Yq = gq(590),
      lq = gq(4096),
      Oq = gq(38625);

    function mq(qq, Eq) {
      if (qq.metaInfo === Yq.c || "Iron Guardian" === qq.type || "Gold Guardian" === qq.type) return !0;
      if ("Pig" === qq.type) return "sitting" === qq.pose;
      if ("Person" !== qq.meshKind || void 0 === qq.meshOpts) return !1;
      let gq = null === Eq || void 0 === Eq ? void 0 : Eq.get(qq.meshOpts);
      if (void 0 === gq) {
        var Oq, mq;
        const Yq = (0, lq.i)(qq);
        gq = !1, "pig_napoleon" === (null === Yq || void 0 === Yq || null === (Oq = Yq.opts.textures) || void 0 === Oq ? void 0 : Oq.head) ? gq = !0 : "npc_pig_head" === (null === Yq || void 0 === Yq || null === (mq = Yq.opts.textures) || void 0 === mq ? void 0 : mq.head) && (gq = "sitting" === Yq.opts.pose || "sitting"), Eq && (Eq.size >= 256 && Eq.clear(), Eq.set(qq.meshOpts, gq))
      }
      return "sitting" === gq ? "sitting" === qq.pose : gq
    }(0, Oq.g)("skyblock", ((qq, Eq) => {
      Eq.setFacingTolerance(mq(qq) ? 0 : null)
    }));
    class xq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = qq, this.alsoVisit = Eq, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = qq => {
          var Eq;
          const gq = this.api.getEntityInfo(qq);
          gq && (mq(gq, this.meshFacingCache) && (this.api.setFacingTolerance(qq, 0), this.nextFacing.add(qq)), null === (Eq = this.alsoVisit) || void 0 === Eq || Eq.call(this, qq, gq))
        }
      }
      SB() {
        const {
          api: qq
        } = this, Eq = this.nextFacing;
        qq.forEachEntity(this.visit);
        for (const gq of this.facing) Eq.has(gq) || qq.setFacingTolerance(gq, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Eq
      }
      dispose() {
        for (const qq of this.facing) this.api.setFacingTolerance(qq, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);