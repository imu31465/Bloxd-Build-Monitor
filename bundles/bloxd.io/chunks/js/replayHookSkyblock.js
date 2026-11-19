export const id = 49;
export const ids = [49];
export const modules = {
  38005: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      SkyblockEntityFacing: () => OY,
      needsSkyblockEntityFacing: () => RY
    });
    var FY = DY(37921),
      AY = DY(3815),
      IY = DY(38011);

    function RY(YY, rY) {
      if (YY.metaInfo === FY.n || "Iron Guardian" === YY.type || "Gold Guardian" === YY.type) return !0;
      if ("Pig" === YY.type) return "sitting" === YY.pose;
      if ("Person" !== YY.meshKind || void 0 === YY.meshOpts) return !1;
      let DY = null === rY || void 0 === rY ? void 0 : rY.get(YY.meshOpts);
      if (void 0 === DY) {
        var IY, RY;
        const FY = (0, AY.j)(YY);
        DY = !1, "pig_napoleon" === (null === FY || void 0 === FY || null === (IY = FY.opts.textures) || void 0 === IY ? void 0 : IY.head) ? DY = !0 : "npc_pig_head" === (null === FY || void 0 === FY || null === (RY = FY.opts.textures) || void 0 === RY ? void 0 : RY.head) && (DY = "sitting" === FY.opts.pose || "sitting"), rY && (rY.size >= 256 && rY.clear(), rY.set(YY.meshOpts, DY))
      }
      return "sitting" === DY ? "sitting" === YY.pose : DY
    }(0, IY.f)("skyblock", ((YY, rY) => {
      rY.setFacingTolerance(RY(YY) ? 0 : null)
    }));
    class OY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = YY, this.alsoVisit = rY, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = YY => {
          var rY;
          const DY = this.api.getEntityInfo(YY);
          DY && (RY(DY, this.meshFacingCache) && (this.api.setFacingTolerance(YY, 0), this.nextFacing.add(YY)), null === (rY = this.alsoVisit) || void 0 === rY || rY.call(this, YY, DY))
        }
      }
      Zu() {
        const {
          api: YY
        } = this, rY = this.nextFacing;
        YY.forEachEntity(this.visit);
        for (const DY of this.facing) rY.has(DY) || YY.setFacingTolerance(DY, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = rY
      }
      dispose() {
        for (const YY of this.facing) this.api.setFacingTolerance(YY, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37921: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      g: () => OY,
      i: () => FY,
      m: () => IY,
      n: () => AY,
      q: () => gY
    });
    const FY = "skyblockDungeons",
      AY = "skyblockHeldBoss",
      IY = "dungeonEnter ",
      RY = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      OY = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function gY(YY) {
      let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const DY = Math.max(0, Math.floor(YY)),
        FY = Math.floor(DY % 1e3 / 100),
        AY = Math.floor(DY / 1e3),
        IY = AY % 60,
        RY = Math.floor(AY / 60),
        OY = RY % 60,
        gY = Math.floor(RY / 60),
        aY = YY => YY < 10 ? `0${YY}` : String(YY),
        vY = rY ? `.${FY}` : "";
      return gY > 0 ? `${gY}:${aY(OY)}:${aY(IY)}${vY}` : `${OY}:${aY(IY)}${vY}`
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);