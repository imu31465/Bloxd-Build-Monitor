export const id = 21;
export const ids = [21];
export const modules = {
  39649: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Ip
    });
    const Op = {
      Maverick: "Portal Config",
      "Bling Bling": "Bank",
      Fred: "Farmer",
      Spencer: "Painter's Guild",
      Lorenzo: "Monster Hunter's Guild",
      Gill: "Farmer's Guild",
      Wren: "Travelling Trader"
    };
    const op = 6400;
    const Ip = function(pp, ip, cp, Ip) {
      let Sp, {
          localPlayerId: xp
        } = Ip,
        Lp = [];
      return {
        onCreate: pp => {
          Sp = pp
        },
        onReceivedMessageFromServer: (pp, ip) => {
          "oneBlockNextBlocks" === pp && (Lp = ip.blocks.map((pp => Sp.blockNameToBlockId(pp))))
        },
        LP: () => {
          if (0 === Lp.length) return;
          const pp = Sp.getPositionView(xp),
            ip = function(pp, ip) {
              const cp = Math.ceil((pp - 3200) / op);
              if (cp !== Math.ceil((ip - 3200) / op) || cp <= 0) return null;
              const Op = cp * op + 6;
              return [Op, 10, Op]
            }(pp[0], pp[2]);
          if (!ip) return;
          const [cp, Op, Ip] = ip;
          if (Sp.isBlockInLoadedChunk(cp, Op, Ip) && 0 === Sp.getBlockId(cp, Op, Ip)) {
            const pp = Lp.shift();
            Sp.setBlockId(cp, Op, Ip, pp)
          }
        },
        onPlayerAltAction: (pp, ip, cp, op, Ip, xp) => {
          ! function(pp, ip, cp, op) {
            if (!cp || "Mesh" !== pp.getEntityType(cp)) return !1;
            const Ip = Op[pp.getEntityName(cp)];
            !!Ip && pp.openShop(ip, op, Ip)
          }(Sp, pp, xp, !1)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);