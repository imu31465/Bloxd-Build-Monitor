export const id = 59;
export const ids = [59];
export const modules = {
  39446: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      SkyblockEntityFacing: () => Ue,
      needsSkyblockEntityFacing: () => Ke
    });
    var ye = He(608),
      be = He(4598),
      Me = He(39452);

    function Ke(ee, ie) {
      if (ee.metaInfo === ye.c || "Iron Guardian" === ee.type || "Gold Guardian" === ee.type) return !0;
      if ("Pig" === ee.type) return "sitting" === ee.pose;
      if ("Person" !== ee.meshKind || void 0 === ee.meshOpts) return !1;
      let He = null === ie || void 0 === ie ? void 0 : ie.get(ee.meshOpts);
      if (void 0 === He) {
        var Me, Ke;
        const ye = (0, be.i)(ee);
        He = !1, "pig_napoleon" === (null === ye || void 0 === ye || null === (Me = ye.opts.textures) || void 0 === Me ? void 0 : Me.head) ? He = !0 : "npc_pig_head" === (null === ye || void 0 === ye || null === (Ke = ye.opts.textures) || void 0 === Ke ? void 0 : Ke.head) && (He = "sitting" === ye.opts.pose || "sitting"), ie && (ie.size >= 256 && ie.clear(), ie.set(ee.meshOpts, He))
      }
      return "sitting" === He ? "sitting" === ee.pose : He
    }(0, Me.d)("skyblock", ((ee, ie) => {
      ie.setFacingTolerance(Ke(ee) ? 0 : null)
    }));
    class Ue {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = ee, this.alsoVisit = ie, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = ee => {
          var ie;
          const He = this.api.getEntityInfo(ee);
          He && (Ke(He, this.meshFacingCache) && (this.api.setFacingTolerance(ee, 0), this.nextFacing.add(ee)), null === (ie = this.alsoVisit) || void 0 === ie || ie.call(this, ee, He))
        }
      }
      YR() {
        const {
          api: ee
        } = this, ie = this.nextFacing;
        ee.forEachEntity(this.visit);
        for (const He of this.facing) ie.has(He) || ee.setFacingTolerance(He, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = ie
      }
      dispose() {
        for (const ee of this.facing) this.api.setFacingTolerance(ee, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);