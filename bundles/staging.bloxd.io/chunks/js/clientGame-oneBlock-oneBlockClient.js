export const id = 21;
export const ids = [21];
export const modules = {
  39666: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => Dt
    });
    const Ot = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const qt = 6400;
    const Dt = function(tt, et, Vt, Dt) {
      let mt, {
          localPlayerId: dt
        } = Dt,
        jt = [];
      return {
        onCreate: tt => {
          mt = tt
        },
        onReceivedMessageFromServer: (tt, et) => {
          "oneBlockNextBlocks" === tt && (jt = et.blocks.map((tt => mt.blockNameToBlockId(tt))))
        },
        BQ: () => {
          if (0 === jt.length) return;
          const tt = mt.getPositionView(dt),
            et = function(tt, et) {
              const Vt = Math.ceil((tt - 3200) / qt);
              if (Vt !== Math.ceil((et - 3200) / qt) || Vt <= 0) return null;
              const Ot = Vt * qt + 6;
              return [Ot, 10, Ot]
            }(tt[0], tt[2]);
          if (!et) return;
          const [Vt, Ot, Dt] = et;
          if (mt.isBlockInLoadedChunk(Vt, Ot, Dt) && 0 === mt.getBlockId(Vt, Ot, Dt)) {
            const tt = jt.shift();
            mt.setBlockId(Vt, Ot, Dt, tt)
          }
        },
        onPlayerAltAction: (tt, et, Vt, qt, Dt, dt) => {
          ! function(tt, et, Vt, qt) {
            if (!Vt || "Mesh" !== tt.getEntityType(Vt)) return !1;
            const Dt = Ot[tt.getEntityName(Vt)];
            !!Dt && tt.openShop(et, qt, Dt)
          }(mt, tt, dt, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);