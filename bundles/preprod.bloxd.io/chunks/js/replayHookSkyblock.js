export const id = 59;
export const ids = [59];
export const modules = {
  39455: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      SkyblockEntityFacing: () => FU,
      needsSkyblockEntityFacing: () => AU
    });
    var cU = zU(638),
      yU = zU(4608),
      QU = zU(39462);

    function AU(UU, XU) {
      if (UU.metaInfo === cU.b || "Iron Guardian" === UU.type || "Gold Guardian" === UU.type) return !0;
      if ("Pig" === UU.type) return "sitting" === UU.pose;
      if ("Person" !== UU.meshKind || void 0 === UU.meshOpts) return !1;
      let zU = null === XU || void 0 === XU ? void 0 : XU.get(UU.meshOpts);
      if (void 0 === zU) {
        var QU, AU;
        const cU = (0, yU.i)(UU);
        zU = !1, "pig_napoleon" === (null === cU || void 0 === cU || null === (QU = cU.opts.textures) || void 0 === QU ? void 0 : QU.head) ? zU = !0 : "npc_pig_head" === (null === cU || void 0 === cU || null === (AU = cU.opts.textures) || void 0 === AU ? void 0 : AU.head) && (zU = "sitting" === cU.opts.pose || "sitting"), XU && (XU.size >= 256 && XU.clear(), XU.set(UU.meshOpts, zU))
      }
      return "sitting" === zU ? "sitting" === UU.pose : zU
    }(0, QU.i)("skyblock", ((UU, XU) => {
      XU.setFacingTolerance(AU(UU) ? 0 : null)
    }));
    class FU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = UU, this.alsoVisit = XU, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = UU => {
          var XU;
          const zU = this.api.getEntityInfo(UU);
          zU && (AU(zU, this.meshFacingCache) && (this.api.setFacingTolerance(UU, 0), this.nextFacing.add(UU)), null === (XU = this.alsoVisit) || void 0 === XU || XU.call(this, UU, zU))
        }
      }
      LY() {
        const {
          api: UU
        } = this, XU = this.nextFacing;
        UU.forEachEntity(this.visit);
        for (const zU of this.facing) XU.has(zU) || UU.setFacingTolerance(zU, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = XU
      }
      dispose() {
        for (const UU of this.facing) this.api.setFacingTolerance(UU, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);