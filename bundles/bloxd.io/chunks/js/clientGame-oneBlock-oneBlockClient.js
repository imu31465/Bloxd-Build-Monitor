export const id = 21;
export const ids = [21];
export const modules = {
  38914: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => ev
    });
    const hv = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const Sv = 6400;
    const ev = function(vv, zv, Pv, ev) {
      let gv, {
          localPlayerId: pv
        } = ev,
        dv = [];
      return {
        onCreate: vv => {
          gv = vv
        },
        onReceivedMessageFromServer: (vv, zv) => {
          "oneBlockNextBlocks" === vv && (dv = zv.blocks.map((vv => gv.blockNameToBlockId(vv))))
        },
        MT: () => {
          if (0 === dv.length) return;
          const vv = gv.getPositionView(pv),
            zv = function(vv, zv) {
              const Pv = Math.ceil((vv - 3200) / Sv);
              if (Pv !== Math.ceil((zv - 3200) / Sv) || Pv <= 0) return null;
              const hv = Pv * Sv + 6;
              return [hv, 10, hv]
            }(vv[0], vv[2]);
          if (!zv) return;
          const [Pv, hv, ev] = zv;
          if (gv.isBlockInLoadedChunk(Pv, hv, ev) && 0 === gv.getBlockId(Pv, hv, ev)) {
            const vv = dv.shift();
            gv.setBlockId(Pv, hv, ev, vv)
          }
        },
        onPlayerAltAction: (vv, zv, Pv, Sv, ev, pv) => {
          ! function(vv, zv, Pv, Sv) {
            if (!Pv || "Mesh" !== vv.getEntityType(Pv)) return !1;
            const ev = hv[vv.getEntityName(Pv)];
            !!ev && vv.openShop(zv, Sv, ev)
          }(gv, vv, pv, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);