export const id = 49;
export const ids = [49];
export const modules = {
  38405: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      SkyblockEntityFacing: () => Ju,
      needsSkyblockEntityFacing: () => mu
    });
    var Eu = yu(602),
      Ku = yu(4053),
      Qu = yu(38414);

    function mu(uu, Ru) {
      if (uu.metaInfo === Eu.b || "Iron Guardian" === uu.type || "Gold Guardian" === uu.type) return !0;
      if ("Pig" === uu.type) return "sitting" === uu.pose;
      if ("Person" !== uu.meshKind || void 0 === uu.meshOpts) return !1;
      let yu = null === Ru || void 0 === Ru ? void 0 : Ru.get(uu.meshOpts);
      if (void 0 === yu) {
        var Qu, mu;
        const Eu = (0, Ku.k)(uu);
        yu = !1, "pig_napoleon" === (null === Eu || void 0 === Eu || null === (Qu = Eu.opts.textures) || void 0 === Qu ? void 0 : Qu.head) ? yu = !0 : "npc_pig_head" === (null === Eu || void 0 === Eu || null === (mu = Eu.opts.textures) || void 0 === mu ? void 0 : mu.head) && (yu = "sitting" === Eu.opts.pose || "sitting"), Ru && (Ru.size >= 256 && Ru.clear(), Ru.set(uu.meshOpts, yu))
      }
      return "sitting" === yu ? "sitting" === uu.pose : yu
    }(0, Qu.c)("skyblock", ((uu, Ru) => {
      Ru.setFacingTolerance(mu(uu) ? 0 : null)
    }));
    class Ju {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = uu, this.alsoVisit = Ru, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = uu => {
          var Ru;
          const yu = this.api.getEntityInfo(uu);
          yu && (mu(yu, this.meshFacingCache) && (this.api.setFacingTolerance(uu, 0), this.nextFacing.add(uu)), null === (Ru = this.alsoVisit) || void 0 === Ru || Ru.call(this, uu, yu))
        }
      }
      sr() {
        const {
          api: uu
        } = this, Ru = this.nextFacing;
        uu.forEachEntity(this.visit);
        for (const yu of this.facing) Ru.has(yu) || uu.setFacingTolerance(yu, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Ru
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