export const id = 49;
export const ids = [49];
export const modules = {
  37632: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      SkyblockEntityFacing: () => XT,
      needsSkyblockEntityFacing: () => WT
    });
    var iT = IT(37524),
      zT = IT(3811),
      kT = IT(37636);

    function WT(TT, oT) {
      if (TT.metaInfo === iT.q || "Iron Guardian" === TT.type || "Gold Guardian" === TT.type) return !0;
      if ("Pig" === TT.type) return "sitting" === TT.pose;
      if ("Person" !== TT.meshKind || void 0 === TT.meshOpts) return !1;
      let IT = null === oT || void 0 === oT ? void 0 : oT.get(TT.meshOpts);
      if (void 0 === IT) {
        var kT, WT;
        const iT = (0, zT.l)(TT);
        IT = !1, "pig_napoleon" === (null === iT || void 0 === iT || null === (kT = iT.opts.textures) || void 0 === kT ? void 0 : kT.head) ? IT = !0 : "npc_pig_head" === (null === iT || void 0 === iT || null === (WT = iT.opts.textures) || void 0 === WT ? void 0 : WT.head) && (IT = "sitting" === iT.opts.pose || "sitting"), oT && (oT.size >= 256 && oT.clear(), oT.set(TT.meshOpts, IT))
      }
      return "sitting" === IT ? "sitting" === TT.pose : IT
    }(0, kT.g)("skyblock", ((TT, oT) => {
      oT.setFacingTolerance(WT(TT) ? 0 : null)
    }));
    class XT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = TT, this.alsoVisit = oT, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = TT => {
          var oT;
          const IT = this.api.getEntityInfo(TT);
          IT && (WT(IT, this.meshFacingCache) && (this.api.setFacingTolerance(TT, 0), this.nextFacing.add(TT)), null === (oT = this.alsoVisit) || void 0 === oT || oT.call(this, TT, IT))
        }
      }
      dD() {
        const {
          api: TT
        } = this, oT = this.nextFacing;
        TT.forEachEntity(this.visit);
        for (const IT of this.facing) oT.has(IT) || TT.setFacingTolerance(IT, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = oT
      }
      dispose() {
        for (const TT of this.facing) this.api.setFacingTolerance(TT, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37524: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT,
      i: () => XT,
      k: () => iT,
      o: () => kT,
      q: () => zT,
      t: () => BT
    });
    const iT = "skyblockDungeons",
      zT = "skyblockHeldBoss",
      kT = "dungeonEnter ",
      WT = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      XT = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function BT(TT) {
      let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const IT = Math.max(0, Math.floor(TT)),
        iT = Math.floor(IT % 1e3 / 100),
        zT = Math.floor(IT / 1e3),
        kT = zT % 60,
        WT = Math.floor(zT / 60),
        XT = WT % 60,
        BT = Math.floor(WT / 60),
        FT = TT => TT < 10 ? `0${TT}` : String(TT),
        ST = oT ? `.${iT}` : "";
      return BT > 0 ? `${BT}:${FT(XT)}:${FT(kT)}${ST}` : `${XT}:${FT(kT)}${ST}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);