export const id = 52;
export const ids = [52];
export const modules = {
  38988: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      SkyblockEntityFacing: () => lu,
      needsSkyblockEntityFacing: () => Xu
    });
    var su = ju(645),
      Uu = ju(4427),
      Zu = ju(38992);

    function Xu(uu, Eu) {
      if (uu.metaInfo === su.b || "Iron Guardian" === uu.type || "Gold Guardian" === uu.type) return !0;
      if ("Pig" === uu.type) return "sitting" === uu.pose;
      if ("Person" !== uu.meshKind || void 0 === uu.meshOpts) return !1;
      let ju = null === Eu || void 0 === Eu ? void 0 : Eu.get(uu.meshOpts);
      if (void 0 === ju) {
        var Zu, Xu;
        const su = (0, Uu.i)(uu);
        ju = !1, "pig_napoleon" === (null === su || void 0 === su || null === (Zu = su.opts.textures) || void 0 === Zu ? void 0 : Zu.head) ? ju = !0 : "npc_pig_head" === (null === su || void 0 === su || null === (Xu = su.opts.textures) || void 0 === Xu ? void 0 : Xu.head) && (ju = "sitting" === su.opts.pose || "sitting"), Eu && (Eu.size >= 256 && Eu.clear(), Eu.set(uu.meshOpts, ju))
      }
      return "sitting" === ju ? "sitting" === uu.pose : ju
    }(0, Zu.f)("skyblock", ((uu, Eu) => {
      Eu.setFacingTolerance(Xu(uu) ? 0 : null)
    }));
    class lu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = uu, this.alsoVisit = Eu, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = uu => {
          var Eu;
          const ju = this.api.getEntityInfo(uu);
          ju && (Xu(ju, this.meshFacingCache) && (this.api.setFacingTolerance(uu, 0), this.nextFacing.add(uu)), null === (Eu = this.alsoVisit) || void 0 === Eu || Eu.call(this, uu, ju))
        }
      }
      Tb() {
        const {
          api: uu
        } = this, Eu = this.nextFacing;
        uu.forEachEntity(this.visit);
        for (const ju of this.facing) Eu.has(ju) || uu.setFacingTolerance(ju, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Eu
      }
      dispose() {
        for (const uu of this.facing) this.api.setFacingTolerance(uu, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);