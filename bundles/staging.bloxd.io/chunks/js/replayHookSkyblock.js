export const id = 45;
export const ids = [45];
export const modules = {
  37605: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      SkyblockEntityFacing: () => JB,
      needsSkyblockEntityFacing: () => lB
    });
    var VB = dB(37502),
      yB = dB(3716),
      pB = dB(37614);

    function lB(BB, TB) {
      if (BB.metaInfo === VB.m || "Iron Guardian" === BB.type || "Gold Guardian" === BB.type) return !0;
      if ("Pig" === BB.type) return "sitting" === BB.pose;
      if ("Person" !== BB.meshKind || void 0 === BB.meshOpts) return !1;
      let dB = null === TB || void 0 === TB ? void 0 : TB.get(BB.meshOpts);
      if (void 0 === dB) {
        var pB, lB;
        const VB = (0, yB.g)(BB);
        dB = !1, "pig_napoleon" === (null === VB || void 0 === VB || null === (pB = VB.opts.textures) || void 0 === pB ? void 0 : pB.head) ? dB = !0 : "npc_pig_head" === (null === VB || void 0 === VB || null === (lB = VB.opts.textures) || void 0 === lB ? void 0 : lB.head) && (dB = "sitting" === VB.opts.pose || "sitting"), TB && (TB.size >= 256 && TB.clear(), TB.set(BB.meshOpts, dB))
      }
      return "sitting" === dB ? "sitting" === BB.pose : dB
    }(0, pB.g)("skyblock", ((BB, TB) => {
      TB.setFacingTolerance(lB(BB) ? 0 : null)
    }));
    class JB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = BB, this.alsoVisit = TB, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = BB => {
          var TB;
          const dB = this.api.getEntityInfo(BB);
          dB && (lB(dB, this.meshFacingCache) && (this.api.setFacingTolerance(BB, 0), this.nextFacing.add(BB)), null === (TB = this.alsoVisit) || void 0 === TB || TB.call(this, BB, dB))
        }
      }
      dL() {
        const {
          api: BB
        } = this, TB = this.nextFacing;
        BB.forEachEntity(this.visit);
        for (const dB of this.facing) TB.has(dB) || BB.setFacingTolerance(dB, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = TB
      }
      dispose() {
        for (const BB of this.facing) this.api.setFacingTolerance(BB, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37502: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      i: () => JB,
      j: () => VB,
      l: () => pB,
      m: () => yB,
      n: () => YB
    });
    const VB = "skyblockDungeons",
      yB = "skyblockHeldBoss",
      pB = "dungeonEnter ",
      lB = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      JB = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function YB(BB) {
      let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const dB = Math.max(0, Math.floor(BB)),
        VB = Math.floor(dB % 1e3 / 100),
        yB = Math.floor(dB / 1e3),
        pB = yB % 60,
        lB = Math.floor(yB / 60),
        JB = lB % 60,
        YB = Math.floor(lB / 60),
        gB = BB => BB < 10 ? `0${BB}` : String(BB),
        oB = TB ? `.${VB}` : "";
      return YB > 0 ? `${YB}:${gB(JB)}:${gB(pB)}${oB}` : `${JB}:${gB(pB)}${oB}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);