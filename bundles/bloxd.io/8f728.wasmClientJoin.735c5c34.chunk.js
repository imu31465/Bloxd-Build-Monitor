export const id = 47;
export const ids = [47];
export const modules = {
  41209: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      joinRoom: () => sc
    });
    var Vc = nc(5465),
      Ic = nc(3838),
      rB = nc(38843),
      uc = nc(38982);
    async function sc(cB, Bc) {
      var nc, sc;
      let Mc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const {
        signal: Pc
      } = Mc, qB = null !== (nc = Mc.setTimer) && void 0 !== nc ? nc : (cB, Bc) => {
        setTimeout(cB, Bc)
      }, Oc = () => (0, uc.b)(Bc.endpoint, Bc.roomName, Bc.joinOptions, Mc), {
        early: Tc
      } = Mc, fc = Tc ? null !== (sc = await Tc.take(Pc)) && void 0 !== sc ? sc : await Tc.reserveInstead(Oc, Pc) : await Oc();
      (0, Vc.l)(Pc);
      const mB = (0, uc.f)(Bc.endpoint, fc),
        ec = Mc.createSocket ? Mc.createSocket(mB) : new WebSocket(mB);
      let tB = null,
        Sc = null;
      const yB = [];
      let zB = !1;
      const pc = (cB, Bc) => {
          var nc;
          if (cB === Ic.A.Activated) zB = !0, null === (nc = Sc) || void 0 === nc || nc.resolve();
          else if (cB === Ic.A.Error) {
            var Vc;
            null === (Vc = Sc) || void 0 === Vc || Vc.reject(new rB.b(`the room refused the join (code ${Bc})`, "roomError", Bc))
          } else {
            var uc;
            null === (uc = Sc) || void 0 === uc || uc.reject(new rB.b("the room socket closed before the join", "closed", Bc))
          }
        },
        hc = cB.onConnection(((cB, Bc, nc) => {
          null === tB ? yB.push([cB, Bc, nc]) : cB === tB && pc(Bc, nc)
        })),
        aB = cB.attachSocket(ec);
      if (null === aB) throw hc(), new rB.b("the core could not take the room socket", "attach");
      tB = aB;
      let lc = !1;
      const Yc = () => {
        if (lc) return;
        lc = !0, hc();
        zB && cB.leaveRoom(aB) || cB.sendRaw(aB, rB.g) ? qB((() => {
          cB.closeSocket(aB)
        }), rB.e) : cB.closeSocket(aB)
      };
      try {
        await new Promise(((cB, Bc) => {
          const nc = () => {
            Bc((0, Vc.d)(Pc))
          };
          null === Pc || void 0 === Pc || Pc.addEventListener("abort", nc, {
            once: !0
          }), Sc = {
            resolve: () => {
              null === Pc || void 0 === Pc || Pc.removeEventListener("abort", nc), cB()
            },
            reject: cB => {
              null === Pc || void 0 === Pc || Pc.removeEventListener("abort", nc), Bc(cB)
            }
          };
          for (const [Vc, Ic, rB] of yB.splice(0)) Vc === tB && pc(Ic, rB)
        }))
      } catch (Lc) {
        throw Yc(), Lc
      }
      return {
        conn: aB,
        seat: fc,
        OV: Yc
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);