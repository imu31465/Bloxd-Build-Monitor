export const id = 60;
export const ids = [60];
export const modules = {
  39894: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      SkyblockEntityFacing: () => LW,
      needsSkyblockEntityFacing: () => PW
    });
    var mW = OW(639),
      EW = OW(2937),
      NW = OW(39897);

    function PW(WW, iW) {
      if (WW.metaInfo === mW.d || "Iron Guardian" === WW.type || "Gold Guardian" === WW.type) return !0;
      if ("Pig" === WW.type) return "sitting" === WW.pose;
      if ("Person" !== WW.meshKind || void 0 === WW.meshOpts) return !1;
      let OW = null === iW || void 0 === iW ? void 0 : iW.get(WW.meshOpts);
      if (void 0 === OW) {
        var NW, PW;
        const mW = (0, EW.h)(WW);
        OW = !1, "pig_napoleon" === (null === mW || void 0 === mW || null === (NW = mW.opts.textures) || void 0 === NW ? void 0 : NW.head) ? OW = !0 : "npc_pig_head" === (null === mW || void 0 === mW || null === (PW = mW.opts.textures) || void 0 === PW ? void 0 : PW.head) && (OW = "sitting" === mW.opts.pose || "sitting"), iW && (iW.size >= 256 && iW.clear(), iW.set(WW.meshOpts, OW))
      }
      return "sitting" === OW ? "sitting" === WW.pose : OW
    }(0, NW.e)("skyblock", ((WW, iW) => {
      iW.setFacingTolerance(PW(WW) ? 0 : null)
    }));
    class LW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = WW, this.alsoVisit = iW, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = WW => {
          var iW;
          const OW = this.api.getEntityInfo(WW);
          OW && (PW(OW, this.meshFacingCache) && (this.api.setFacingTolerance(WW, 0), this.nextFacing.add(WW)), null === (iW = this.alsoVisit) || void 0 === iW || iW.call(this, WW, OW))
        }
      }
      hZ() {
        const {
          api: WW
        } = this, iW = this.nextFacing;
        WW.forEachEntity(this.visit);
        for (const OW of this.facing) iW.has(OW) || WW.setFacingTolerance(OW, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = iW
      }
      dispose() {
        for (const WW of this.facing) this.api.setFacingTolerance(WW, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);