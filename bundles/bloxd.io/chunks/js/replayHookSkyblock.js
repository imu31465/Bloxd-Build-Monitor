export const id = 51;
export const ids = [51];
export const modules = {
  38739: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      SkyblockEntityFacing: () => wm,
      needsSkyblockEntityFacing: () => xm
    });
    var hm = fm(649),
      Am = fm(4171),
      am = fm(38743);

    function xm(mm, Tm) {
      if (mm.metaInfo === hm.c || "Iron Guardian" === mm.type || "Gold Guardian" === mm.type) return !0;
      if ("Pig" === mm.type) return "sitting" === mm.pose;
      if ("Person" !== mm.meshKind || void 0 === mm.meshOpts) return !1;
      let fm = null === Tm || void 0 === Tm ? void 0 : Tm.get(mm.meshOpts);
      if (void 0 === fm) {
        var am, xm;
        const hm = (0, Am.k)(mm);
        fm = !1, "pig_napoleon" === (null === hm || void 0 === hm || null === (am = hm.opts.textures) || void 0 === am ? void 0 : am.head) ? fm = !0 : "npc_pig_head" === (null === hm || void 0 === hm || null === (xm = hm.opts.textures) || void 0 === xm ? void 0 : xm.head) && (fm = "sitting" === hm.opts.pose || "sitting"), Tm && (Tm.size >= 256 && Tm.clear(), Tm.set(mm.meshOpts, fm))
      }
      return "sitting" === fm ? "sitting" === mm.pose : fm
    }(0, am.f)("skyblock", ((mm, Tm) => {
      Tm.setFacingTolerance(xm(mm) ? 0 : null)
    }));
    class wm {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = mm, this.alsoVisit = Tm, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = mm => {
          var Tm;
          const fm = this.api.getEntityInfo(mm);
          fm && (xm(fm, this.meshFacingCache) && (this.api.setFacingTolerance(mm, 0), this.nextFacing.add(mm)), null === (Tm = this.alsoVisit) || void 0 === Tm || Tm.call(this, mm, fm))
        }
      }
      DE() {
        const {
          api: mm
        } = this, Tm = this.nextFacing;
        mm.forEachEntity(this.visit);
        for (const fm of this.facing) Tm.has(fm) || mm.setFacingTolerance(fm, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Tm
      }
      dispose() {
        for (const mm of this.facing) this.api.setFacingTolerance(mm, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);