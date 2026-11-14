export const id = 265;
export const ids = [265];
export const modules = {
  39152: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      CharacterPreview: () => qB
    });
    var Vc = nc(73),
      Ic = nc(2175),
      rB = nc(1108),
      uc = nc(7729),
      sc = nc(35460),
      Mc = nc(2799),
      Pc = nc(957);
    const qB = (0, Vc.memo)((0, Vc.forwardRef)((function(cB, Bc) {
      let {
        onReady: nc,
        owner: qB = "other",
        forcedCosmetics: Oc,
        EQ: Tc,
        emotePlaySeq: fc
      } = cB;
      const mB = (0, Vc.useRef)(null),
        {
          width: ec,
          height: tB
        } = (0, Ic.c)(mB),
        Sc = (0, Vc.useRef)(null),
        yB = (0, Vc.useRef)({}),
        zB = (0, Vc.useRef)({}),
        [pc, hc] = (0, Vc.useState)(!1),
        aB = (0, Vc.useRef)(nc);
      return aB.current = nc, (0, Vc.useImperativeHandle)(Bc, (() => {
        const cB = (cB, Bc) => {
          var nc;
          (yB.current[cB] = Bc, null !== Oc && void 0 !== Oc && Oc[cB]) || (null === (nc = Sc.current) || void 0 === nc || nc.setCosmetic(cB, Bc))
        };
        return {
          updateCosmetic: cB,
          setAllCosmetics(Bc) {
            for (const Vc of rB.v) {
              var nc;
              cB(Vc, null !== (nc = Bc[Vc]) && void 0 !== nc ? nc : (0, uc.c)(Vc))
            }
          },
          isReady() {
            var cB, Bc;
            return null !== (cB = null === (Bc = Sc.current) || void 0 === Bc ? void 0 : Bc.isReady()) && void 0 !== cB && cB
          },
          async ensureReadyForCapture(cB) {
            var Bc;
            await (null === (Bc = Sc.current) || void 0 === Bc ? void 0 : Bc.untilDrawn(cB))
          },
          getDevTools() {
            var cB;
            return null !== (cB = Sc.current) && void 0 !== cB && cB.isReady() ? Sc.current.dev : null
          }
        }
      }), [Oc]), (0, Vc.useEffect)((() => {
        const cB = Mc.d.register(qB),
          Bc = sc.d.openCharacter(mB.current);
        Sc.current = Bc;
        let nc = !0;
        return Bc.ready.then((() => {
          nc && (hc(!0), aB.current())
        })).catch((cB => {
          console.error("Failed to set up the character preview", cB)
        })), () => {
          nc = !1, cB(), Bc.close(), Sc.current = null
        }
      }), []), (0, Vc.useEffect)((() => {
        ec <= 0 || tB <= 0 || Sc.current.resize(ec, tB)
      }), [ec, tB]), (0, Vc.useEffect)((() => {
        if (!pc) return;
        const cB = zB.current;
        for (const Bc of rB.v) {
          const nc = null === Oc || void 0 === Oc ? void 0 : Oc[Bc],
            Vc = cB[Bc];
          nc && nc !== Vc ? Sc.current.setCosmetic(Bc, nc) : !nc && Vc && yB.current[Bc] && Sc.current.setCosmetic(Bc, yB.current[Bc])
        }
        zB.current = {
          ...Oc
        }
      }), [Oc, pc]), (0, Vc.useEffect)((() => {
        pc && Sc.current.playEmote(null !== Tc && void 0 !== Tc ? Tc : null)
      }), [Tc, fc, pc]), (0, Pc.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: mB
      })
    })))
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);