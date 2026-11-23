export const id = 51;
export const ids = [51];
export const modules = {
  38623: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      SkyblockEntityFacing: () => lk,
      needsSkyblockEntityFacing: () => yk
    });
    var Xk = Ik(621),
      Tk = Ik(4210),
      ik = Ik(38632);

    function yk(kk, Fk) {
      if (kk.metaInfo === Xk.b || "Iron Guardian" === kk.type || "Gold Guardian" === kk.type) return !0;
      if ("Pig" === kk.type) return "sitting" === kk.pose;
      if ("Person" !== kk.meshKind || void 0 === kk.meshOpts) return !1;
      let Ik = null === Fk || void 0 === Fk ? void 0 : Fk.get(kk.meshOpts);
      if (void 0 === Ik) {
        var ik, yk;
        const Xk = (0, Tk.g)(kk);
        Ik = !1, "pig_napoleon" === (null === Xk || void 0 === Xk || null === (ik = Xk.opts.textures) || void 0 === ik ? void 0 : ik.head) ? Ik = !0 : "npc_pig_head" === (null === Xk || void 0 === Xk || null === (yk = Xk.opts.textures) || void 0 === yk ? void 0 : yk.head) && (Ik = "sitting" === Xk.opts.pose || "sitting"), Fk && (Fk.size >= 256 && Fk.clear(), Fk.set(kk.meshOpts, Ik))
      }
      return "sitting" === Ik ? "sitting" === kk.pose : Ik
    }(0, ik.g)("skyblock", ((kk, Fk) => {
      Fk.setFacingTolerance(yk(kk) ? 0 : null)
    }));
    class lk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = kk, this.alsoVisit = Fk, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = kk => {
          var Fk;
          const Ik = this.api.getEntityInfo(kk);
          Ik && (yk(Ik, this.meshFacingCache) && (this.api.setFacingTolerance(kk, 0), this.nextFacing.add(kk)), null === (Fk = this.alsoVisit) || void 0 === Fk || Fk.call(this, kk, Ik))
        }
      }
      Dt() {
        const {
          api: kk
        } = this, Fk = this.nextFacing;
        kk.forEachEntity(this.visit);
        for (const Ik of this.facing) Fk.has(Ik) || kk.setFacingTolerance(Ik, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Fk
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