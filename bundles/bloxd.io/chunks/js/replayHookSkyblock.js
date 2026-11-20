export const id = 50;
export const ids = [50];
export const modules = {
  38169: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      SkyblockEntityFacing: () => pv,
      needsSkyblockEntityFacing: () => gv
    });
    var hv = Pv(618),
      Sv = Pv(4019),
      ev = Pv(38178);

    function gv(vv, zv) {
      if (vv.metaInfo === hv.d || "Iron Guardian" === vv.type || "Gold Guardian" === vv.type) return !0;
      if ("Pig" === vv.type) return "sitting" === vv.pose;
      if ("Person" !== vv.meshKind || void 0 === vv.meshOpts) return !1;
      let Pv = null === zv || void 0 === zv ? void 0 : zv.get(vv.meshOpts);
      if (void 0 === Pv) {
        var ev, gv;
        const hv = (0, Sv.g)(vv);
        Pv = !1, "pig_napoleon" === (null === hv || void 0 === hv || null === (ev = hv.opts.textures) || void 0 === ev ? void 0 : ev.head) ? Pv = !0 : "npc_pig_head" === (null === hv || void 0 === hv || null === (gv = hv.opts.textures) || void 0 === gv ? void 0 : gv.head) && (Pv = "sitting" === hv.opts.pose || "sitting"), zv && (zv.size >= 256 && zv.clear(), zv.set(vv.meshOpts, Pv))
      }
      return "sitting" === Pv ? "sitting" === vv.pose : Pv
    }(0, ev.h)("skyblock", ((vv, zv) => {
      zv.setFacingTolerance(gv(vv) ? 0 : null)
    }));
    class pv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = vv, this.alsoVisit = zv, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = vv => {
          var zv;
          const Pv = this.api.getEntityInfo(vv);
          Pv && (gv(Pv, this.meshFacingCache) && (this.api.setFacingTolerance(vv, 0), this.nextFacing.add(vv)), null === (zv = this.alsoVisit) || void 0 === zv || zv.call(this, vv, Pv))
        }
      }
      MT() {
        const {
          api: vv
        } = this, zv = this.nextFacing;
        vv.forEachEntity(this.visit);
        for (const Pv of this.facing) zv.has(Pv) || vv.setFacingTolerance(Pv, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = zv
      }
      dispose() {
        for (const vv of this.facing) this.api.setFacingTolerance(vv, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);