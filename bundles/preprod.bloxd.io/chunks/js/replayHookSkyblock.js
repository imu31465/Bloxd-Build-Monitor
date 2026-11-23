export const id = 51;
export const ids = [51];
export const modules = {
  38463: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      SkyblockEntityFacing: () => fC,
      needsSkyblockEntityFacing: () => nC
    });
    var QC = ZC(597),
      wC = ZC(4179),
      bC = ZC(38471);

    function nC(CC, zC) {
      if (CC.metaInfo === QC.d || "Iron Guardian" === CC.type || "Gold Guardian" === CC.type) return !0;
      if ("Pig" === CC.type) return "sitting" === CC.pose;
      if ("Person" !== CC.meshKind || void 0 === CC.meshOpts) return !1;
      let ZC = null === zC || void 0 === zC ? void 0 : zC.get(CC.meshOpts);
      if (void 0 === ZC) {
        var bC, nC;
        const QC = (0, wC.g)(CC);
        ZC = !1, "pig_napoleon" === (null === QC || void 0 === QC || null === (bC = QC.opts.textures) || void 0 === bC ? void 0 : bC.head) ? ZC = !0 : "npc_pig_head" === (null === QC || void 0 === QC || null === (nC = QC.opts.textures) || void 0 === nC ? void 0 : nC.head) && (ZC = "sitting" === QC.opts.pose || "sitting"), zC && (zC.size >= 256 && zC.clear(), zC.set(CC.meshOpts, ZC))
      }
      return "sitting" === ZC ? "sitting" === CC.pose : ZC
    }(0, bC.e)("skyblock", ((CC, zC) => {
      zC.setFacingTolerance(nC(CC) ? 0 : null)
    }));
    class fC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = CC, this.alsoVisit = zC, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = CC => {
          var zC;
          const ZC = this.api.getEntityInfo(CC);
          ZC && (nC(ZC, this.meshFacingCache) && (this.api.setFacingTolerance(CC, 0), this.nextFacing.add(CC)), null === (zC = this.alsoVisit) || void 0 === zC || zC.call(this, CC, ZC))
        }
      }
      ZN() {
        const {
          api: CC
        } = this, zC = this.nextFacing;
        CC.forEachEntity(this.visit);
        for (const ZC of this.facing) zC.has(ZC) || CC.setFacingTolerance(ZC, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = zC
      }
      dispose() {
        for (const CC of this.facing) this.api.setFacingTolerance(CC, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);