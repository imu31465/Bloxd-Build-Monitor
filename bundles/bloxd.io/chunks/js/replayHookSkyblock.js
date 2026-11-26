export const id = 58;
export const ids = [58];
export const modules = {
  39833: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      SkyblockEntityFacing: () => pV,
      needsSkyblockEntityFacing: () => yV
    });
    var JV = xV(654),
      YV = xV(4642),
      UV = xV(39842);

    function yV(VV, eV) {
      if (VV.metaInfo === JV.d || "Iron Guardian" === VV.type || "Gold Guardian" === VV.type) return !0;
      if ("Pig" === VV.type) return "sitting" === VV.pose;
      if ("Person" !== VV.meshKind || void 0 === VV.meshOpts) return !1;
      let xV = null === eV || void 0 === eV ? void 0 : eV.get(VV.meshOpts);
      if (void 0 === xV) {
        var UV, yV;
        const JV = (0, YV.h)(VV);
        xV = !1, "pig_napoleon" === (null === JV || void 0 === JV || null === (UV = JV.opts.textures) || void 0 === UV ? void 0 : UV.head) ? xV = !0 : "npc_pig_head" === (null === JV || void 0 === JV || null === (yV = JV.opts.textures) || void 0 === yV ? void 0 : yV.head) && (xV = "sitting" === JV.opts.pose || "sitting"), eV && (eV.size >= 256 && eV.clear(), eV.set(VV.meshOpts, xV))
      }
      return "sitting" === xV ? "sitting" === VV.pose : xV
    }(0, UV.d)("skyblock", ((VV, eV) => {
      eV.setFacingTolerance(yV(VV) ? 0 : null)
    }));
    class pV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = VV, this.alsoVisit = eV, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = VV => {
          var eV;
          const xV = this.api.getEntityInfo(VV);
          xV && (yV(xV, this.meshFacingCache) && (this.api.setFacingTolerance(VV, 0), this.nextFacing.add(VV)), null === (eV = this.alsoVisit) || void 0 === eV || eV.call(this, VV, xV))
        }
      }
      iZ() {
        const {
          api: VV
        } = this, eV = this.nextFacing;
        VV.forEachEntity(this.visit);
        for (const xV of this.facing) eV.has(xV) || VV.setFacingTolerance(xV, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = eV
      }
      dispose() {
        for (const VV of this.facing) this.api.setFacingTolerance(VV, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);