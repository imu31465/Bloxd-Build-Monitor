export const id = 25;
export const ids = [25];
export const modules = {
  40723: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => UV
    });
    const JV = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const YV = 6400;
    const UV = function(VV, eV, xV, UV) {
      let yV, {
          localPlayerId: pV
        } = UV,
        QV = [];
      return {
        onCreate: VV => {
          yV = VV
        },
        onReceivedMessageFromServer: (VV, eV) => {
          "oneBlockNextBlocks" === VV && (QV = eV.blocks.map((VV => yV.blockNameToBlockId(VV))))
        },
        iZ: () => {
          if (0 === QV.length) return;
          const VV = yV.getPositionView(pV),
            eV = function(VV, eV) {
              const xV = Math.ceil((VV - 3200) / YV);
              if (xV !== Math.ceil((eV - 3200) / YV) || xV <= 0) return null;
              const JV = xV * YV + 6;
              return [JV, 10, JV]
            }(VV[0], VV[2]);
          if (!eV) return;
          const [xV, JV, UV] = eV;
          if (yV.isBlockInLoadedChunk(xV, JV, UV) && 0 === yV.getBlockId(xV, JV, UV)) {
            const VV = QV.shift();
            yV.setBlockId(xV, JV, UV, VV)
          }
        },
        onPlayerAltAction: (VV, eV, xV, YV, UV, pV) => {
          ! function(VV, eV, xV, YV) {
            if (!xV || "Mesh" !== VV.getEntityType(xV)) return !1;
            const UV = JV[VV.getEntityName(xV)];
            !!UV && VV.openShop(eV, YV, UV)
          }(yV, VV, pV, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);