export const id = 60;
export const ids = [60];
export const modules = {
  40218: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      SkyblockEntityFacing: () => Ir,
      needsSkyblockEntityFacing: () => jr
    });
    var Zr = Qr(683),
      Wr = Qr(2984),
      ar = Qr(40221);

    function jr(rr, Sr) {
      if (rr.metaInfo === Zr.d || "Iron Guardian" === rr.type || "Gold Guardian" === rr.type) return !0;
      if ("Pig" === rr.type) return "sitting" === rr.pose;
      if ("Person" !== rr.meshKind || void 0 === rr.meshOpts) return !1;
      let Qr = null === Sr || void 0 === Sr ? void 0 : Sr.get(rr.meshOpts);
      if (void 0 === Qr) {
        var ar, jr;
        const Zr = (0, Wr.h)(rr);
        Qr = !1, "pig_napoleon" === (null === Zr || void 0 === Zr || null === (ar = Zr.opts.textures) || void 0 === ar ? void 0 : ar.head) ? Qr = !0 : "npc_pig_head" === (null === Zr || void 0 === Zr || null === (jr = Zr.opts.textures) || void 0 === jr ? void 0 : jr.head) && (Qr = "sitting" === Zr.opts.pose || "sitting"), Sr && (Sr.size >= 256 && Sr.clear(), Sr.set(rr.meshOpts, Qr))
      }
      return "sitting" === Qr ? "sitting" === rr.pose : Qr
    }(0, ar.h)("skyblock", ((rr, Sr) => {
      Sr.setFacingTolerance(jr(rr) ? 0 : null)
    }));
    class Ir {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = rr, this.alsoVisit = Sr, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = rr => {
          var Sr;
          const Qr = this.api.getEntityInfo(rr);
          Qr && (jr(Qr, this.meshFacingCache) && (this.api.setFacingTolerance(rr, 0), this.nextFacing.add(rr)), null === (Sr = this.alsoVisit) || void 0 === Sr || Sr.call(this, rr, Qr))
        }
      }
      lx() {
        const {
          api: rr
        } = this, Sr = this.nextFacing;
        rr.forEachEntity(this.visit);
        for (const Qr of this.facing) Sr.has(Qr) || rr.setFacingTolerance(Qr, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Sr
      }
      dispose() {
        for (const rr of this.facing) this.api.setFacingTolerance(rr, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);