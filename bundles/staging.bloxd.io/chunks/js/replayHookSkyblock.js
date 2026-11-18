export const id = 45;
export const ids = [45];
export const modules = {
  37626: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      SkyblockEntityFacing: () => AJ,
      needsSkyblockEntityFacing: () => XJ
    });
    var FJ = ZJ(37524),
      UJ = ZJ(3726),
      eJ = ZJ(37633);

    function XJ(JJ, cJ) {
      if (JJ.metaInfo === FJ.n || "Iron Guardian" === JJ.type || "Gold Guardian" === JJ.type) return !0;
      if ("Pig" === JJ.type) return "sitting" === JJ.pose;
      if ("Person" !== JJ.meshKind || void 0 === JJ.meshOpts) return !1;
      let ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.get(JJ.meshOpts);
      if (void 0 === ZJ) {
        var eJ, XJ;
        const FJ = (0, UJ.i)(JJ);
        ZJ = !1, "pig_napoleon" === (null === FJ || void 0 === FJ || null === (eJ = FJ.opts.textures) || void 0 === eJ ? void 0 : eJ.head) ? ZJ = !0 : "npc_pig_head" === (null === FJ || void 0 === FJ || null === (XJ = FJ.opts.textures) || void 0 === XJ ? void 0 : XJ.head) && (ZJ = "sitting" === FJ.opts.pose || "sitting"), cJ && (cJ.size >= 256 && cJ.clear(), cJ.set(JJ.meshOpts, ZJ))
      }
      return "sitting" === ZJ ? "sitting" === JJ.pose : ZJ
    }(0, eJ.g)("skyblock", ((JJ, cJ) => {
      cJ.setFacingTolerance(XJ(JJ) ? 0 : null)
    }));
    class AJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = JJ, this.alsoVisit = cJ, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = JJ => {
          var cJ;
          const ZJ = this.api.getEntityInfo(JJ);
          ZJ && (XJ(ZJ, this.meshFacingCache) && (this.api.setFacingTolerance(JJ, 0), this.nextFacing.add(JJ)), null === (cJ = this.alsoVisit) || void 0 === cJ || cJ.call(this, JJ, ZJ))
        }
      }
      Hh() {
        const {
          api: JJ
        } = this, cJ = this.nextFacing;
        JJ.forEachEntity(this.visit);
        for (const ZJ of this.facing) cJ.has(ZJ) || JJ.setFacingTolerance(ZJ, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = cJ
      }
      dispose() {
        for (const JJ of this.facing) this.api.setFacingTolerance(JJ, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37524: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      g: () => AJ,
      j: () => FJ,
      l: () => eJ,
      n: () => UJ,
      o: () => qJ
    });
    const FJ = "skyblockDungeons",
      UJ = "skyblockHeldBoss",
      eJ = "dungeonEnter ",
      XJ = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      AJ = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function qJ(JJ) {
      let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const ZJ = Math.max(0, Math.floor(JJ)),
        FJ = Math.floor(ZJ % 1e3 / 100),
        UJ = Math.floor(ZJ / 1e3),
        eJ = UJ % 60,
        XJ = Math.floor(UJ / 60),
        AJ = XJ % 60,
        qJ = Math.floor(XJ / 60),
        jJ = JJ => JJ < 10 ? `0${JJ}` : String(JJ),
        YJ = cJ ? `.${FJ}` : "";
      return qJ > 0 ? `${qJ}:${jJ(AJ)}:${jJ(eJ)}${YJ}` : `${AJ}:${jJ(eJ)}${YJ}`
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);