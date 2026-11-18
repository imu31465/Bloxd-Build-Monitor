export const id = 268;
export const ids = [268];
export const modules = {
  39650: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      CharacterPreview: () => By
    });
    var Uy = Wy(55),
      hy = Wy(2214),
      fy = Wy(1102),
      Zy = Wy(7955),
      cb = Wy(35578),
      Py = Wy(2929),
      oy = Wy(952);
    const By = (0, Uy.memo)((0, Uy.forwardRef)((function(yb, bb) {
      let {
        onReady: Wy,
        onDrawn: By,
        owner: Ky = "other",
        forcedCosmetics: ey,
        Zm: qb,
        emotePlaySeq: sy
      } = yb;
      const Sy = (0, Uy.useRef)(null),
        {
          width: Ey,
          height: ly
        } = (0, hy.e)(Sy),
        mb = (0, Uy.useRef)(null),
        Cy = (0, Uy.useRef)({}),
        Ty = (0, Uy.useRef)({}),
        [Vy, Jy] = (0, Uy.useState)(!1),
        gb = (0, Uy.useRef)(Wy);
      gb.current = Wy;
      const Gy = (0, Uy.useRef)(By);
      Gy.current = By;
      const Oy = (0, Uy.useRef)(null),
        Ry = (0, Uy.useRef)(!1),
        vb = (0, Uy.useRef)(!1),
        ib = (0, Uy.useCallback)((() => {
          const yb = mb.current;
          if (!yb || !Gy.current || Ry.current || !vb.current) return;
          const bb = {};
          Oy.current = bb, queueMicrotask((() => {
            if (Oy.current !== bb) return;
            const Wy = Promise.all(fy.x.map((bb => yb.untilDrawn(bb)))).catch((yb => {
                console.error("Failed to draw the character preview", yb)
              })),
              Uy = new Promise((yb => {
                setTimeout(yb, 1e4)
              }));
            Promise.race([Wy, Uy]).then((() => {
              var Wy;
              mb.current !== yb || Oy.current !== bb || Ry.current || (Ry.current = !0, null === (Wy = Gy.current) || void 0 === Wy || Wy.call(Gy))
            }))
          }))
        }), []);
      return (0, Uy.useImperativeHandle)(bb, (() => {
        const yb = (yb, bb) => {
          var Wy;
          (Cy.current[yb] = bb, null !== ey && void 0 !== ey && ey[yb]) || (null === (Wy = mb.current) || void 0 === Wy || Wy.setCosmetic(yb, bb), ib())
        };
        return {
          updateCosmetic: yb,
          setAllCosmetics(bb) {
            for (const Uy of fy.x) {
              var Wy;
              yb(Uy, null !== (Wy = bb[Uy]) && void 0 !== Wy ? Wy : (0, Zy.e)(Uy))
            }
          },
          isReady() {
            var yb, bb;
            return null !== (yb = null === (bb = mb.current) || void 0 === bb ? void 0 : bb.isReady()) && void 0 !== yb && yb
          },
          resetCamera() {
            var yb;
            null === (yb = mb.current) || void 0 === yb || yb.resetCamera()
          },
          async ensureReadyForCapture(yb) {
            var bb;
            await (null === (bb = mb.current) || void 0 === bb ? void 0 : bb.untilDrawn(yb))
          },
          getDevTools() {
            var yb;
            return null !== (yb = mb.current) && void 0 !== yb && yb.isReady() ? mb.current.dev : null
          }
        }
      }), [ey, ib]), (0, Uy.useEffect)((() => {
        const yb = Py.b.register(Ky),
          bb = cb.f.openCharacter(Sy.current);
        mb.current = bb;
        let Wy = !0;
        return bb.ready.then((() => {
          Wy && (Jy(!0), gb.current())
        })).catch((yb => {
          console.error("Failed to set up the character preview", yb)
        })), () => {
          Wy = !1, yb(), bb.close(), mb.current = null
        }
      }), []), (0, Uy.useEffect)((() => {
        Ey <= 0 || ly <= 0 || mb.current.resize(Ey, ly)
      }), [Ey, ly]), (0, Uy.useEffect)((() => {
        if (!Vy) return;
        const yb = Ty.current;
        for (const bb of fy.x) {
          const Wy = null === ey || void 0 === ey ? void 0 : ey[bb],
            Uy = yb[bb];
          Wy && Wy !== Uy ? mb.current.setCosmetic(bb, Wy) : !Wy && Uy && Cy.current[bb] && mb.current.setCosmetic(bb, Cy.current[bb])
        }
        Ty.current = {
          ...ey
        }, vb.current = !0, ib()
      }), [ey, Vy, ib]), (0, Uy.useEffect)((() => {
        Vy && mb.current.playEmote(null !== qb && void 0 !== qb ? qb : null)
      }), [qb, sy, Vy]), (0, oy.jsx)("div", {
        className: "CharCustomisationPreview",
        ref: Sy
      })
    })))
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);