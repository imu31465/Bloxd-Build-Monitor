export const id = 50;
export const ids = [50];
export const modules = {
  41827: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      joinRoom: () => oy,
      leaveHeldSeat: () => Sy,
      resumeRoom: () => Ky
    });
    var Uy = Wy(5740),
      hy = Wy(37746),
      fy = Wy(2363),
      Zy = Wy(3996),
      cb = Wy(39351),
      Py = Wy(39432);
    async function oy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await By(yb, bb, Wy)
      } catch (hy) {
        var Uy;
        const fy = await (null === (Uy = bb.optionsAfterRefusal) || void 0 === Uy ? void 0 : Uy.call(bb, hy));
        if (!fy) throw hy;
        return By(yb, {
          ...bb,
          joinOptions: fy
        }, {
          ...Wy,
          early: void 0
        })
      }
    }
    async function By(yb, bb, Wy) {
      var hy;
      const {
        signal: fy
      } = Wy, Zy = () => (0, Py.i)(bb.endpoint, bb.roomName, bb.joinOptions, Wy), {
        early: cb
      } = Wy, oy = cb ? null !== (hy = await cb.take(fy)) && void 0 !== hy ? hy : await cb.reserveInstead(Zy, fy) : await Zy();
      return (0, Uy.j)(fy), sy(yb, bb.endpoint, oy, Wy, !1)
    }
    async function Ky(yb, bb, Wy, hy) {
      let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const Zy = await (0, Py.f)(bb, Wy, hy, fy);
      return (0, Uy.j)(fy.signal), sy(yb, bb, Zy, fy, !0)
    }

    function ey(yb, bb, Wy) {
      const Uy = (0, Py.l)(yb, bb);
      return Wy.createSocket ? Wy.createSocket(Uy) : new WebSocket(Uy)
    }

    function qb(yb, bb, Wy) {
      var Uy;
      let hy = !1;
      return (null !== (Uy = yb.setTimer) && void 0 !== Uy ? Uy : (yb, bb) => {
        setTimeout(yb, bb)
      })((() => {
        hy || bb()
      }), Wy), () => {
        hy = !0
      }
    }
    async function sy(yb, bb, Wy, Py, oy) {
      const {
        signal: By
      } = Py, Ky = ey(bb, Wy, Py);
      let sy = null,
        Sy = null;
      const Ey = [];
      let ly = !1,
        mb = !1;
      const Cy = yb => {
        var bb;
        mb = !0, null === (bb = Sy) || void 0 === bb || bb.reject(new cb.e("the room socket closed before the resume", "closed", yb.code))
      };
      oy && Ky.addEventListener("close", Cy);
      const Ty = (yb, bb) => {
          var Wy;
          if (yb === (oy ? Zy.A.Resumed : Zy.A.Activated)) ly = !0, null === (Wy = Sy) || void 0 === Wy || Wy.resolve();
          else if (!oy || yb !== Zy.A.ResumeRefused && yb !== Zy.A.Activated)
            if (yb === Zy.A.Error) {
              var Uy;
              null === (Uy = Sy) || void 0 === Uy || Uy.reject(new cb.e(`the room refused the join (code ${bb})`, "roomError", bb))
            } else {
              var hy;
              null === (hy = Sy) || void 0 === hy || hy.reject(new cb.e("the room socket closed before the join", "closed", bb))
            }
          else {
            var fy;
            null === (fy = Sy) || void 0 === fy || fy.reject(new cb.o("the core refused the resume: it held no game"))
          }
        },
        Vy = yb.onConnection(((yb, bb, Wy) => {
          null === sy ? Ey.push([yb, bb, Wy]) : yb === sy && Ty(bb, Wy)
        })),
        Jy = yb.attachSocket(Ky);
      if (null === Jy) throw Vy(), new cb.e("the core could not take the room socket", "attach");
      var gb;
      (sy = Jy, oy) && (null === (gb = Py.onAttached) || void 0 === gb || gb.call(Py));
      const Gy = oy ? null : new fy.b(hy.c, (() => {
        var bb, Wy;
        null === (bb = yb.flushNet) || void 0 === bb || bb.call(yb), null === (Wy = Sy) || void 0 === Wy || Wy.reject(new hy.d)
      }));
      let Oy = !1;
      const Ry = () => {
        if (Oy) return;
        if (Oy = !0, Vy(), oy && (Ky.removeEventListener("close", Cy), !ly && !(null !== By && void 0 !== By && By.aborted && (0, Uy.e)(By) instanceof cb.q))) return void(mb || yb.closeSocket(Jy));
        ly && yb.leaveRoom(Jy) || yb.sendRaw(Jy, cb.m) ? qb(Py, (() => {
          yb.closeSocket(Jy)
        }), cb.g) : yb.closeSocket(Jy)
      };
      try {
        await new Promise(((bb, Wy) => {
          const hy = () => {
            var bb;
            oy && (null === (bb = yb.flushNet) || void 0 === bb || bb.call(yb));
            Wy((0, Uy.e)(By))
          };
          null === By || void 0 === By || By.addEventListener("abort", hy, {
            once: !0
          }), Sy = {
            resolve: () => {
              null === By || void 0 === By || By.removeEventListener("abort", hy), bb()
            },
            reject: yb => {
              null === By || void 0 === By || By.removeEventListener("abort", hy), Wy(yb)
            }
          };
          for (const [yb, Uy, fy] of Ey.splice(0)) yb === sy && Ty(Uy, fy)
        }))
      } catch (vb) {
        throw Ry(), vb
      } finally {
        null === Gy || void 0 === Gy || Gy.stop()
      }
      oy && Ky.removeEventListener("close", Cy);
      return {
        conn: Jy,
        seat: Wy,
        qh: Ry,
        detach: () => {
          Oy = !0, Vy()
        }
      }
    }
    async function Sy(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const hy = ey(yb, await (0, Py.f)(yb, bb, Wy, Uy), Uy);
        hy.binaryType = "arraybuffer", await new Promise((yb => {
          const bb = qb(Uy, (() => {
            hy.close(), yb()
          }), cb.g);
          hy.addEventListener("open", (() => {
            hy.send(cb.m)
          })), hy.addEventListener("close", (() => {
            bb(), yb()
          }))
        }))
      } catch (hy) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", hy)
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);