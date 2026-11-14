export const id = 41;
export const ids = [41];
export const modules = {
  37040: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      SkyblockEntityFacing: () => bW,
      needsSkyblockEntityFacing: () => hF
    });
    var CF = SF(36949),
      AF = SF(3434),
      uF = SF(37047);

    function hF(FF, WF) {
      if (FF.metaInfo === CF.p || "Iron Guardian" === FF.type || "Gold Guardian" === FF.type) return !0;
      if ("Pig" === FF.type) return "sitting" === FF.pose;
      if ("Person" !== FF.meshKind || void 0 === FF.meshOpts) return !1;
      let SF = null === WF || void 0 === WF ? void 0 : WF.get(FF.meshOpts);
      if (void 0 === SF) {
        var uF, hF;
        const CF = (0, AF.j)(FF);
        SF = !1, "pig_napoleon" === (null === CF || void 0 === CF || null === (uF = CF.opts.textures) || void 0 === uF ? void 0 : uF.head) ? SF = !0 : "npc_pig_head" === (null === CF || void 0 === CF || null === (hF = CF.opts.textures) || void 0 === hF ? void 0 : hF.head) && (SF = "sitting" === CF.opts.pose || "sitting"), WF && (WF.size >= 256 && WF.clear(), WF.set(FF.meshOpts, SF))
      }
      return "sitting" === SF ? "sitting" === FF.pose : SF
    }(0, uF.f)("skyblock", ((FF, WF) => {
      WF.setFacingTolerance(hF(FF) ? 0 : null)
    }));
    class bW {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = FF, this.alsoVisit = WF, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = FF => {
          var WF;
          const SF = this.api.getEntityInfo(FF);
          SF && (hF(SF, this.meshFacingCache) && (this.api.setFacingTolerance(FF, 0), this.nextFacing.add(FF)), null === (WF = this.alsoVisit) || void 0 === WF || WF.call(this, FF, SF))
        }
      }
      lF() {
        const {
          api: FF
        } = this, WF = this.nextFacing;
        FF.forEachEntity(this.visit);
        for (const SF of this.facing) WF.has(SF) || FF.setFacingTolerance(SF, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = WF
      }
      dispose() {
        for (const FF of this.facing) this.api.setFacingTolerance(FF, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  36949: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF,
      f: () => bW,
      j: () => CF,
      l: () => uF,
      p: () => AF,
      q: () => dF
    });
    const CF = "skyblockDungeons",
      AF = "skyblockHeldBoss",
      uF = "dungeonEnter ",
      hF = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      bW = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function dF(FF) {
      let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const SF = Math.max(0, Math.floor(FF)),
        CF = Math.floor(SF % 1e3 / 100),
        AF = Math.floor(SF / 1e3),
        uF = AF % 60,
        hF = Math.floor(AF / 60),
        bW = hF % 60,
        dF = Math.floor(hF / 60),
        PF = FF => FF < 10 ? `0${FF}` : String(FF),
        RF = WF ? `.${CF}` : "";
      return dF > 0 ? `${dF}:${PF(bW)}:${PF(uF)}${RF}` : `${bW}:${PF(uF)}${RF}`
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);