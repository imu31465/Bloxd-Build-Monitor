export const id = 49;
export const ids = [49];
export const modules = {
  38013: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      SkyblockEntityFacing: () => bD,
      needsSkyblockEntityFacing: () => fD
    });
    var ID = cD(618),
      pD = cD(4081),
      iD = cD(38017);

    function fD(DD, CD) {
      if (DD.metaInfo === ID.e || "Iron Guardian" === DD.type || "Gold Guardian" === DD.type) return !0;
      if ("Pig" === DD.type) return "sitting" === DD.pose;
      if ("Person" !== DD.meshKind || void 0 === DD.meshOpts) return !1;
      let cD = null === CD || void 0 === CD ? void 0 : CD.get(DD.meshOpts);
      if (void 0 === cD) {
        var iD, fD;
        const ID = (0, pD.d)(DD);
        cD = !1, "pig_napoleon" === (null === ID || void 0 === ID || null === (iD = ID.opts.textures) || void 0 === iD ? void 0 : iD.head) ? cD = !0 : "npc_pig_head" === (null === ID || void 0 === ID || null === (fD = ID.opts.textures) || void 0 === fD ? void 0 : fD.head) && (cD = "sitting" === ID.opts.pose || "sitting"), CD && (CD.size >= 256 && CD.clear(), CD.set(DD.meshOpts, cD))
      }
      return "sitting" === cD ? "sitting" === DD.pose : cD
    }(0, iD.f)("skyblock", ((DD, CD) => {
      CD.setFacingTolerance(fD(DD) ? 0 : null)
    }));
    class bD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = DD, this.alsoVisit = CD, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = DD => {
          var CD;
          const cD = this.api.getEntityInfo(DD);
          cD && (fD(cD, this.meshFacingCache) && (this.api.setFacingTolerance(DD, 0), this.nextFacing.add(DD)), null === (CD = this.alsoVisit) || void 0 === CD || CD.call(this, DD, cD))
        }
      }
      wy() {
        const {
          api: DD
        } = this, CD = this.nextFacing;
        DD.forEachEntity(this.visit);
        for (const cD of this.facing) CD.has(cD) || DD.setFacingTolerance(cD, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = CD
      }
      dispose() {
        for (const DD of this.facing) this.api.setFacingTolerance(DD, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);