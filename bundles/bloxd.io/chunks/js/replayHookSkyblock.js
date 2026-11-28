export const id = 60;
export const ids = [60];
export const modules = {
  39948: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      SkyblockEntityFacing: () => gb,
      needsSkyblockEntityFacing: () => Vb
    });
    var eb = Mb(655),
      Hb = Mb(3059),
      pb = Mb(39953);

    function Vb(bb, wb) {
      if (bb.metaInfo === eb.b || "Iron Guardian" === bb.type || "Gold Guardian" === bb.type) return !0;
      if ("Pig" === bb.type) return "sitting" === bb.pose;
      if ("Person" !== bb.meshKind || void 0 === bb.meshOpts) return !1;
      let Mb = null === wb || void 0 === wb ? void 0 : wb.get(bb.meshOpts);
      if (void 0 === Mb) {
        var pb, Vb;
        const eb = (0, Hb.f)(bb);
        Mb = !1, "pig_napoleon" === (null === eb || void 0 === eb || null === (pb = eb.opts.textures) || void 0 === pb ? void 0 : pb.head) ? Mb = !0 : "npc_pig_head" === (null === eb || void 0 === eb || null === (Vb = eb.opts.textures) || void 0 === Vb ? void 0 : Vb.head) && (Mb = "sitting" === eb.opts.pose || "sitting"), wb && (wb.size >= 256 && wb.clear(), wb.set(bb.meshOpts, Mb))
      }
      return "sitting" === Mb ? "sitting" === bb.pose : Mb
    }(0, pb.e)("skyblock", ((bb, wb) => {
      wb.setFacingTolerance(Vb(bb) ? 0 : null)
    }));
    class gb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = bb, this.alsoVisit = wb, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = bb => {
          var wb;
          const Mb = this.api.getEntityInfo(bb);
          Mb && (Vb(Mb, this.meshFacingCache) && (this.api.setFacingTolerance(bb, 0), this.nextFacing.add(bb)), null === (wb = this.alsoVisit) || void 0 === wb || wb.call(this, bb, Mb))
        }
      }
      sO() {
        const {
          api: bb
        } = this, wb = this.nextFacing;
        bb.forEachEntity(this.visit);
        for (const Mb of this.facing) wb.has(Mb) || bb.setFacingTolerance(Mb, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = wb
      }
      dispose() {
        for (const bb of this.facing) this.api.setFacingTolerance(bb, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);