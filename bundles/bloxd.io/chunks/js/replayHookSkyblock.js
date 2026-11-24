export const id = 51;
export const ids = [51];
export const modules = {
  38629: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      SkyblockEntityFacing: () => LD,
      needsSkyblockEntityFacing: () => rD
    });
    var pD = wD(616),
      sD = wD(4257),
      KD = wD(38638);

    function rD(DD, zD) {
      if (DD.metaInfo === pD.e || "Iron Guardian" === DD.type || "Gold Guardian" === DD.type) return !0;
      if ("Pig" === DD.type) return "sitting" === DD.pose;
      if ("Person" !== DD.meshKind || void 0 === DD.meshOpts) return !1;
      let wD = null === zD || void 0 === zD ? void 0 : zD.get(DD.meshOpts);
      if (void 0 === wD) {
        var KD, rD;
        const pD = (0, sD.g)(DD);
        wD = !1, "pig_napoleon" === (null === pD || void 0 === pD || null === (KD = pD.opts.textures) || void 0 === KD ? void 0 : KD.head) ? wD = !0 : "npc_pig_head" === (null === pD || void 0 === pD || null === (rD = pD.opts.textures) || void 0 === rD ? void 0 : rD.head) && (wD = "sitting" === pD.opts.pose || "sitting"), zD && (zD.size >= 256 && zD.clear(), zD.set(DD.meshOpts, wD))
      }
      return "sitting" === wD ? "sitting" === DD.pose : wD
    }(0, KD.f)("skyblock", ((DD, zD) => {
      zD.setFacingTolerance(rD(DD) ? 0 : null)
    }));
    class LD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = DD, this.alsoVisit = zD, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = DD => {
          var zD;
          const wD = this.api.getEntityInfo(DD);
          wD && (rD(wD, this.meshFacingCache) && (this.api.setFacingTolerance(DD, 0), this.nextFacing.add(DD)), null === (zD = this.alsoVisit) || void 0 === zD || zD.call(this, DD, wD))
        }
      }
      DU() {
        const {
          api: DD
        } = this, zD = this.nextFacing;
        DD.forEachEntity(this.visit);
        for (const wD of this.facing) zD.has(wD) || DD.setFacingTolerance(wD, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = zD
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