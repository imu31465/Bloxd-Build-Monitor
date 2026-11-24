export const id = 21;
export const ids = [21];
export const modules = {
  39589: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => am
    });
    const hm = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const Am = 6400;
    const am = function(mm, Tm, fm, am) {
      let xm, {
          localPlayerId: wm
        } = am,
        Dm = [];
      return {
        onCreate: mm => {
          xm = mm
        },
        onReceivedMessageFromServer: (mm, Tm) => {
          "oneBlockNextBlocks" === mm && (Dm = Tm.blocks.map((mm => xm.blockNameToBlockId(mm))))
        },
        DE: () => {
          if (0 === Dm.length) return;
          const mm = xm.getPositionView(wm),
            Tm = function(mm, Tm) {
              const fm = Math.ceil((mm - 3200) / Am);
              if (fm !== Math.ceil((Tm - 3200) / Am) || fm <= 0) return null;
              const hm = fm * Am + 6;
              return [hm, 10, hm]
            }(mm[0], mm[2]);
          if (!Tm) return;
          const [fm, hm, am] = Tm;
          if (xm.isBlockInLoadedChunk(fm, hm, am) && 0 === xm.getBlockId(fm, hm, am)) {
            const mm = Dm.shift();
            xm.setBlockId(fm, hm, am, mm)
          }
        },
        onPlayerAltAction: (mm, Tm, fm, Am, am, wm) => {
          ! function(mm, Tm, fm, Am) {
            if (!fm || "Mesh" !== mm.getEntityType(fm)) return !1;
            const am = hm[mm.getEntityName(fm)];
            !!am && mm.openShop(Tm, Am, am)
          }(xm, mm, wm, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);