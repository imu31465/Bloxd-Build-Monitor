export const id = 21;
export const ids = [21];
export const modules = {
  39561: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => Wd
    });
    const pd = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const Nd = 6400;
    const Wd = function(dd, Jd, kd, Wd) {
      let Pd, {
          localPlayerId: Zd
        } = Wd,
        gd = [];
      return {
        onCreate: dd => {
          Pd = dd
        },
        onReceivedMessageFromServer: (dd, Jd) => {
          "oneBlockNextBlocks" === dd && (gd = Jd.blocks.map((dd => Pd.blockNameToBlockId(dd))))
        },
        Do: () => {
          if (0 === gd.length) return;
          const dd = Pd.getPositionView(Zd),
            Jd = function(dd, Jd) {
              const kd = Math.ceil((dd - 3200) / Nd);
              if (kd !== Math.ceil((Jd - 3200) / Nd) || kd <= 0) return null;
              const pd = kd * Nd + 6;
              return [pd, 10, pd]
            }(dd[0], dd[2]);
          if (!Jd) return;
          const [kd, pd, Wd] = Jd;
          if (Pd.isBlockInLoadedChunk(kd, pd, Wd) && 0 === Pd.getBlockId(kd, pd, Wd)) {
            const dd = gd.shift();
            Pd.setBlockId(kd, pd, Wd, dd)
          }
        },
        onPlayerAltAction: (dd, Jd, kd, Nd, Wd, Zd) => {
          ! function(dd, Jd, kd, Nd) {
            if (!kd || "Mesh" !== dd.getEntityType(kd)) return !1;
            const Wd = pd[dd.getEntityName(kd)];
            !!Wd && dd.openShop(Jd, Nd, Wd)
          }(Pd, dd, Zd, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);