export const id = 42;
export const ids = [42];
export const modules = {
  37154: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      SkyblockEntityFacing: () => sc,
      needsSkyblockEntityFacing: () => uc
    });
    var Vc = nc(37064),
      Ic = nc(3441),
      rB = nc(37156);

    function uc(cB, Bc) {
      if (cB.metaInfo === Vc.k || "Iron Guardian" === cB.type || "Gold Guardian" === cB.type) return !0;
      if ("Pig" === cB.type) return "sitting" === cB.pose;
      if ("Person" !== cB.meshKind || void 0 === cB.meshOpts) return !1;
      let nc = null === Bc || void 0 === Bc ? void 0 : Bc.get(cB.meshOpts);
      if (void 0 === nc) {
        var rB, uc;
        const Vc = (0, Ic.g)(cB);
        nc = !1, "pig_napoleon" === (null === Vc || void 0 === Vc || null === (rB = Vc.opts.textures) || void 0 === rB ? void 0 : rB.head) ? nc = !0 : "npc_pig_head" === (null === Vc || void 0 === Vc || null === (uc = Vc.opts.textures) || void 0 === uc ? void 0 : uc.head) && (nc = "sitting" === Vc.opts.pose || "sitting"), Bc && (Bc.size >= 256 && Bc.clear(), Bc.set(cB.meshOpts, nc))
      }
      return "sitting" === nc ? "sitting" === cB.pose : nc
    }(0, rB.h)("skyblock", ((cB, Bc) => {
      Bc.setFacingTolerance(uc(cB) ? 0 : null)
    }));
    class sc {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = cB, this.alsoVisit = Bc, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = cB => {
          var Bc;
          const nc = this.api.getEntityInfo(cB);
          nc && (uc(nc, this.meshFacingCache) && (this.api.setFacingTolerance(cB, 0), this.nextFacing.add(cB)), null === (Bc = this.alsoVisit) || void 0 === Bc || Bc.call(this, cB, nc))
        }
      }
      cn() {
        const {
          api: cB
        } = this, Bc = this.nextFacing;
        cB.forEachEntity(this.visit);
        for (const nc of this.facing) Bc.has(nc) || cB.setFacingTolerance(nc, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = Bc
      }
      dispose() {
        for (const cB of this.facing) this.api.setFacingTolerance(cB, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37064: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      e: () => sc,
      f: () => Vc,
      j: () => rB,
      k: () => Ic,
      m: () => Mc
    });
    const Vc = "skyblockDungeons",
      Ic = "skyblockHeldBoss",
      rB = "dungeonEnter ",
      uc = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      sc = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function Mc(cB) {
      let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const nc = Math.max(0, Math.floor(cB)),
        Vc = Math.floor(nc % 1e3 / 100),
        Ic = Math.floor(nc / 1e3),
        rB = Ic % 60,
        uc = Math.floor(Ic / 60),
        sc = uc % 60,
        Mc = Math.floor(uc / 60),
        Pc = cB => cB < 10 ? `0${cB}` : String(cB),
        qB = Bc ? `.${Vc}` : "";
      return Mc > 0 ? `${Mc}:${Pc(sc)}:${Pc(rB)}${qB}` : `${sc}:${Pc(rB)}${qB}`
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);