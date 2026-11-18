export const id = 45;
export const ids = [45];
export const modules = {
  37310: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      SkyblockEntityFacing: () => cb,
      needsSkyblockEntityFacing: () => Zy
    });
    var Uy = Wy(37225),
      hy = Wy(3525),
      fy = Wy(37314);

    function Zy(yb, bb) {
      if (yb.metaInfo === Uy.q || "Iron Guardian" === yb.type || "Gold Guardian" === yb.type) return !0;
      if ("Pig" === yb.type) return "sitting" === yb.pose;
      if ("Person" !== yb.meshKind || void 0 === yb.meshOpts) return !1;
      let Wy = null === bb || void 0 === bb ? void 0 : bb.get(yb.meshOpts);
      if (void 0 === Wy) {
        var fy, Zy;
        const Uy = (0, hy.i)(yb);
        Wy = !1, "pig_napoleon" === (null === Uy || void 0 === Uy || null === (fy = Uy.opts.textures) || void 0 === fy ? void 0 : fy.head) ? Wy = !0 : "npc_pig_head" === (null === Uy || void 0 === Uy || null === (Zy = Uy.opts.textures) || void 0 === Zy ? void 0 : Zy.head) && (Wy = "sitting" === Uy.opts.pose || "sitting"), bb && (bb.size >= 256 && bb.clear(), bb.set(yb.meshOpts, Wy))
      }
      return "sitting" === Wy ? "sitting" === yb.pose : Wy
    }(0, fy.g)("skyblock", ((yb, bb) => {
      bb.setFacingTolerance(Zy(yb) ? 0 : null)
    }));
    class cb {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = yb, this.alsoVisit = bb, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = yb => {
          var bb;
          const Wy = this.api.getEntityInfo(yb);
          Wy && (Zy(Wy, this.meshFacingCache) && (this.api.setFacingTolerance(yb, 0), this.nextFacing.add(yb)), null === (bb = this.alsoVisit) || void 0 === bb || bb.call(this, yb, Wy))
        }
      }
      Zb() {
        const {
          api: yb
        } = this, bb = this.nextFacing;
        yb.forEachEntity(this.visit);
        for (const Wy of this.facing) bb.has(Wy) || yb.setFacingTolerance(Wy, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = bb
      }
      dispose() {
        for (const yb of this.facing) this.api.setFacingTolerance(yb, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37225: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy,
      f: () => cb,
      j: () => Uy,
      n: () => fy,
      q: () => hy,
      t: () => Py
    });
    const Uy = "skyblockDungeons",
      hy = "skyblockHeldBoss",
      fy = "dungeonEnter ",
      Zy = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      cb = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function Py(yb) {
      let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const Wy = Math.max(0, Math.floor(yb)),
        Uy = Math.floor(Wy % 1e3 / 100),
        hy = Math.floor(Wy / 1e3),
        fy = hy % 60,
        Zy = Math.floor(hy / 60),
        cb = Zy % 60,
        Py = Math.floor(Zy / 60),
        oy = yb => yb < 10 ? `0${yb}` : String(yb),
        By = bb ? `.${Uy}` : "";
      return Py > 0 ? `${Py}:${oy(cb)}:${oy(fy)}${By}` : `${cb}:${oy(fy)}${By}`
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);