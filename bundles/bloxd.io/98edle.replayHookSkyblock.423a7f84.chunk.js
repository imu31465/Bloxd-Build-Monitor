export const id = 41;
export const ids = [41];
export const modules = {
  36683: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      SkyblockEntityFacing: () => bR,
      needsSkyblockEntityFacing: () => AW
    });
    var wW = MW(36586),
      CW = MW(3357),
      zR = MW(36688);

    function AW(WW, RW) {
      if (WW.metaInfo === wW.k || "Iron Guardian" === WW.type || "Gold Guardian" === WW.type) return !0;
      if ("Pig" === WW.type) return "sitting" === WW.pose;
      if ("Person" !== WW.meshKind || void 0 === WW.meshOpts) return !1;
      let MW = null === RW || void 0 === RW ? void 0 : RW.get(WW.meshOpts);
      if (void 0 === MW) {
        var zR, AW;
        const wW = (0, CW.i)(WW);
        MW = !1, "pig_napoleon" === (null === wW || void 0 === wW || null === (zR = wW.opts.textures) || void 0 === zR ? void 0 : zR.head) ? MW = !0 : "npc_pig_head" === (null === wW || void 0 === wW || null === (AW = wW.opts.textures) || void 0 === AW ? void 0 : AW.head) && (MW = "sitting" === wW.opts.pose || "sitting"), RW && (RW.size >= 256 && RW.clear(), RW.set(WW.meshOpts, MW))
      }
      return "sitting" === MW ? "sitting" === WW.pose : MW
    }(0, zR.g)("skyblock", ((WW, RW) => {
      RW.setFacingTolerance(AW(WW) ? 0 : null)
    }));
    class bR {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = WW, this.alsoVisit = RW, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = WW => {
          var RW;
          const MW = this.api.getEntityInfo(WW);
          MW && (AW(MW, this.meshFacingCache) && (this.api.setFacingTolerance(WW, 0), this.nextFacing.add(WW)), null === (RW = this.alsoVisit) || void 0 === RW || RW.call(this, WW, MW))
        }
      }
      WR() {
        const {
          api: WW
        } = this, RW = this.nextFacing;
        WW.forEachEntity(this.visit);
        for (const MW of this.facing) RW.has(MW) || WW.setFacingTolerance(MW, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = RW
      }
      dispose() {
        for (const WW of this.facing) this.api.setFacingTolerance(WW, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  36586: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW,
      f: () => bR,
      g: () => wW,
      j: () => zR,
      k: () => CW,
      n: () => yR
    });
    const wW = "skyblockDungeons",
      CW = "skyblockHeldBoss",
      zR = "dungeonEnter ",
      AW = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      bR = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function yR(WW) {
      let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const MW = Math.max(0, Math.floor(WW)),
        wW = Math.floor(MW % 1e3 / 100),
        CW = Math.floor(MW / 1e3),
        zR = CW % 60,
        AW = Math.floor(CW / 60),
        bR = AW % 60,
        yR = Math.floor(AW / 60),
        NW = WW => WW < 10 ? `0${WW}` : String(WW),
        eW = RW ? `.${wW}` : "";
      return yR > 0 ? `${yR}:${NW(bR)}:${NW(zR)}${eW}` : `${bR}:${NW(zR)}${eW}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);