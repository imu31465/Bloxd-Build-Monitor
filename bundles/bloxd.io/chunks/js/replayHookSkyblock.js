export const id = 51;
export const ids = [51];
export const modules = {
  38228: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      SkyblockEntityFacing: () => rk,
      needsSkyblockEntityFacing: () => bk
    });
    var Dk = ik(591),
      fk = ik(4189),
      Sk = ik(38231);

    function bk(kk, ek) {
      if (kk.metaInfo === Dk.d || "Iron Guardian" === kk.type || "Gold Guardian" === kk.type) return !0;
      if ("Pig" === kk.type) return "sitting" === kk.pose;
      if ("Person" !== kk.meshKind || void 0 === kk.meshOpts) return !1;
      let ik = null === ek || void 0 === ek ? void 0 : ek.get(kk.meshOpts);
      if (void 0 === ik) {
        var Sk, bk;
        const Dk = (0, fk.l)(kk);
        ik = !1, "pig_napoleon" === (null === Dk || void 0 === Dk || null === (Sk = Dk.opts.textures) || void 0 === Sk ? void 0 : Sk.head) ? ik = !0 : "npc_pig_head" === (null === Dk || void 0 === Dk || null === (bk = Dk.opts.textures) || void 0 === bk ? void 0 : bk.head) && (ik = "sitting" === Dk.opts.pose || "sitting"), ek && (ek.size >= 256 && ek.clear(), ek.set(kk.meshOpts, ik))
      }
      return "sitting" === ik ? "sitting" === kk.pose : ik
    }(0, Sk.e)("skyblock", ((kk, ek) => {
      ek.setFacingTolerance(bk(kk) ? 0 : null)
    }));
    class rk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = kk, this.alsoVisit = ek, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = kk => {
          var ek;
          const ik = this.api.getEntityInfo(kk);
          ik && (bk(ik, this.meshFacingCache) && (this.api.setFacingTolerance(kk, 0), this.nextFacing.add(kk)), null === (ek = this.alsoVisit) || void 0 === ek || ek.call(this, kk, ik))
        }
      }
      Px() {
        const {
          api: kk
        } = this, ek = this.nextFacing;
        kk.forEachEntity(this.visit);
        for (const ik of this.facing) ek.has(ik) || kk.setFacingTolerance(ik, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = ek
      }
      dispose() {
        for (const kk of this.facing) this.api.setFacingTolerance(kk, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);