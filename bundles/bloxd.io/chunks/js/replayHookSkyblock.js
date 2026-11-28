export const id = 60;
export const ids = [60];
export const modules = {
  40249: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      SkyblockEntityFacing: () => Kd,
      needsSkyblockEntityFacing: () => Xd
    });
    var Wd = md(699),
      Fd = md(2991),
      Rd = md(40251);

    function Xd(dd, Od) {
      if (dd.metaInfo === Wd.c || "Iron Guardian" === dd.type || "Gold Guardian" === dd.type) return !0;
      if ("Pig" === dd.type) return "sitting" === dd.pose;
      if ("Person" !== dd.meshKind || void 0 === dd.meshOpts) return !1;
      let md = null === Od || void 0 === Od ? void 0 : Od.get(dd.meshOpts);
      if (void 0 === md) {
        var Rd, Xd;
        const Wd = (0, Fd.k)(dd);
        md = !1, "pig_napoleon" === (null === Wd || void 0 === Wd || null === (Rd = Wd.opts.textures) || void 0 === Rd ? void 0 : Rd.head) ? md = !0 : "npc_pig_head" === (null === Wd || void 0 === Wd || null === (Xd = Wd.opts.textures) || void 0 === Xd ? void 0 : Xd.head) && (md = "sitting" === Wd.opts.pose || "sitting"), Od && (Od.size >= 256 && Od.clear(), Od.set(dd.meshOpts, md))
      }
      return "sitting" === md ? "sitting" === dd.pose : md
    }(0, Rd.i)("skyblock", ((dd, Od) => {
      Od.setFacingTolerance(Xd(dd) ? 0 : null)
    }));
    class Kd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = dd, this.alsoVisit = Od, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = dd => {
          var Od;
          const md = this.api.getEntityInfo(dd);
          md && (Xd(md, this.meshFacingCache) && (this.api.setFacingTolerance(dd, 0), this.nextFacing.add(dd)), null === (Od = this.alsoVisit) || void 0 === Od || Od.call(this, dd, md))
        }
      }
      Et() {
        const {
          api: dd
        } = this, Od = this.nextFacing;
        dd.forEachEntity(this.visit);
        for (const md of this.facing) Od.has(md) || dd.setFacingTolerance(md, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Od
      }
      dispose() {
        for (const dd of this.facing) this.api.setFacingTolerance(dd, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);