export const id = 49;
export const ids = [49];
export const modules = {
  38020: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      SkyblockEntityFacing: () => Mz,
      needsSkyblockEntityFacing: () => lz
    });
    var Ez = bz(586),
      nz = bz(4035),
      iz = bz(38026);

    function lz(zz, uz) {
      if (zz.metaInfo === Ez.b || "Iron Guardian" === zz.type || "Gold Guardian" === zz.type) return !0;
      if ("Pig" === zz.type) return "sitting" === zz.pose;
      if ("Person" !== zz.meshKind || void 0 === zz.meshOpts) return !1;
      let bz = null === uz || void 0 === uz ? void 0 : uz.get(zz.meshOpts);
      if (void 0 === bz) {
        var iz, lz;
        const Ez = (0, nz.h)(zz);
        bz = !1, "pig_napoleon" === (null === Ez || void 0 === Ez || null === (iz = Ez.opts.textures) || void 0 === iz ? void 0 : iz.head) ? bz = !0 : "npc_pig_head" === (null === Ez || void 0 === Ez || null === (lz = Ez.opts.textures) || void 0 === lz ? void 0 : lz.head) && (bz = "sitting" === Ez.opts.pose || "sitting"), uz && (uz.size >= 256 && uz.clear(), uz.set(zz.meshOpts, bz))
      }
      return "sitting" === bz ? "sitting" === zz.pose : bz
    }(0, iz.h)("skyblock", ((zz, uz) => {
      uz.setFacingTolerance(lz(zz) ? 0 : null)
    }));
    class Mz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = zz, this.alsoVisit = uz, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = zz => {
          var uz;
          const bz = this.api.getEntityInfo(zz);
          bz && (lz(bz, this.meshFacingCache) && (this.api.setFacingTolerance(zz, 0), this.nextFacing.add(zz)), null === (uz = this.alsoVisit) || void 0 === uz || uz.call(this, zz, bz))
        }
      }
      sd() {
        const {
          api: zz
        } = this, uz = this.nextFacing;
        zz.forEachEntity(this.visit);
        for (const bz of this.facing) uz.has(bz) || zz.setFacingTolerance(bz, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = uz
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