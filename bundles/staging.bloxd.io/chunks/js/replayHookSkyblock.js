export const id = 51;
export const ids = [51];
export const modules = {
  38650: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      SkyblockEntityFacing: () => NS,
      needsSkyblockEntityFacing: () => xS
    });
    var tS = gS(672),
      bS = gS(4356),
      XS = gS(38659);

    function xS(SS, HS) {
      if (SS.metaInfo === tS.d || "Iron Guardian" === SS.type || "Gold Guardian" === SS.type) return !0;
      if ("Pig" === SS.type) return "sitting" === SS.pose;
      if ("Person" !== SS.meshKind || void 0 === SS.meshOpts) return !1;
      let gS = null === HS || void 0 === HS ? void 0 : HS.get(SS.meshOpts);
      if (void 0 === gS) {
        var XS, xS;
        const tS = (0, bS.k)(SS);
        gS = !1, "pig_napoleon" === (null === tS || void 0 === tS || null === (XS = tS.opts.textures) || void 0 === XS ? void 0 : XS.head) ? gS = !0 : "npc_pig_head" === (null === tS || void 0 === tS || null === (xS = tS.opts.textures) || void 0 === xS ? void 0 : xS.head) && (gS = "sitting" === tS.opts.pose || "sitting"), HS && (HS.size >= 256 && HS.clear(), HS.set(SS.meshOpts, gS))
      }
      return "sitting" === gS ? "sitting" === SS.pose : gS
    }(0, XS.d)("skyblock", ((SS, HS) => {
      HS.setFacingTolerance(xS(SS) ? 0 : null)
    }));
    class NS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = SS, this.alsoVisit = HS, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = SS => {
          var HS;
          const gS = this.api.getEntityInfo(SS);
          gS && (xS(gS, this.meshFacingCache) && (this.api.setFacingTolerance(SS, 0), this.nextFacing.add(SS)), null === (HS = this.alsoVisit) || void 0 === HS || HS.call(this, SS, gS))
        }
      }
      mf() {
        const {
          api: SS
        } = this, HS = this.nextFacing;
        SS.forEachEntity(this.visit);
        for (const gS of this.facing) HS.has(gS) || SS.setFacingTolerance(gS, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = HS
      }
      dispose() {
        for (const SS of this.facing) this.api.setFacingTolerance(SS, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);