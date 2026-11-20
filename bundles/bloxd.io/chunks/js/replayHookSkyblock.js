export const id = 49;
export const ids = [49];
export const modules = {
  38053: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      SkyblockEntityFacing: () => oz,
      needsSkyblockEntityFacing: () => Oz
    });
    var Fz = sz(577),
      Wz = sz(3926),
      Xz = sz(38057);

    function Oz(zz, tz) {
      if (zz.metaInfo === Fz.d || "Iron Guardian" === zz.type || "Gold Guardian" === zz.type) return !0;
      if ("Pig" === zz.type) return "sitting" === zz.pose;
      if ("Person" !== zz.meshKind || void 0 === zz.meshOpts) return !1;
      let sz = null === tz || void 0 === tz ? void 0 : tz.get(zz.meshOpts);
      if (void 0 === sz) {
        var Xz, Oz;
        const Fz = (0, Wz.j)(zz);
        sz = !1, "pig_napoleon" === (null === Fz || void 0 === Fz || null === (Xz = Fz.opts.textures) || void 0 === Xz ? void 0 : Xz.head) ? sz = !0 : "npc_pig_head" === (null === Fz || void 0 === Fz || null === (Oz = Fz.opts.textures) || void 0 === Oz ? void 0 : Oz.head) && (sz = "sitting" === Fz.opts.pose || "sitting"), tz && (tz.size >= 256 && tz.clear(), tz.set(zz.meshOpts, sz))
      }
      return "sitting" === sz ? "sitting" === zz.pose : sz
    }(0, Xz.f)("skyblock", ((zz, tz) => {
      tz.setFacingTolerance(Oz(zz) ? 0 : null)
    }));
    class oz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = zz, this.alsoVisit = tz, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = zz => {
          var tz;
          const sz = this.api.getEntityInfo(zz);
          sz && (Oz(sz, this.meshFacingCache) && (this.api.setFacingTolerance(zz, 0), this.nextFacing.add(zz)), null === (tz = this.alsoVisit) || void 0 === tz || tz.call(this, zz, sz))
        }
      }
      wN() {
        const {
          api: zz
        } = this, tz = this.nextFacing;
        zz.forEachEntity(this.visit);
        for (const sz of this.facing) tz.has(sz) || zz.setFacingTolerance(sz, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = tz
      }
      dispose() {
        for (const zz of this.facing) this.api.setFacingTolerance(zz, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);