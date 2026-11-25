export const id = 2;
export const ids = [2];
export const modules = {
  36628: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      drawBlockIcon: () => Nt,
      drawBlockIconUrl: () => Mt,
      getDrawnBlockIcon: () => yt
    });
    var Ot = Vt(36632);
    const qt = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      Dt = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      mt = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const dt = 1e-6;

    function jt(tt, et, Vt, Ot) {
      let {
        origin: qt,
        across: Dt,
        down: mt,
        texture: jt,
        rect: [Ht, Xt, Qt, lt],
        shade: Et
      } = Ot;
      const ft = Dt.x * mt.y - Dt.y * mt.x;
      if (Math.abs(ft) < 1e-9) return;
      const wt = [qt.x, qt.x + Dt.x, qt.x + mt.x, qt.x + Dt.x + mt.x],
        yt = [qt.y, qt.y + Dt.y, qt.y + mt.y, qt.y + Dt.y + mt.y],
        Nt = Math.max(0, Math.floor(Math.min(...wt))),
        Mt = Math.min(Vt - 1, Math.ceil(Math.max(...wt))),
        bt = Math.max(0, Math.floor(Math.min(...yt))),
        Jt = Math.min(Vt - 1, Math.ceil(Math.max(...yt)));
      for (let Ct = bt; Ct <= Jt; Ct++)
        for (let Ot = Nt; Ot <= Mt; Ot++) {
          const wt = Ot + .5 - qt.x,
            yt = Ct + .5 - qt.y,
            Nt = (wt * mt.y - yt * mt.x) / ft,
            Mt = (Dt.x * yt - Dt.y * wt) / ft;
          if (Nt < -dt || Nt > 1 + dt || Mt < -dt || Mt > 1 + dt) continue;
          const bt = Ct * Vt + Ot;
          et[bt] = 1;
          const Jt = Ht + Math.min(Math.max(Nt, 0), 1) * (Qt - Ht),
            ut = Xt + Math.min(Math.max(Mt, 0), 1) * (lt - Xt),
            Kt = Math.min(jt.width - 1, Math.floor(Jt * jt.width)),
            ht = 4 * (Math.min(jt.height - 1, Math.floor(ut * jt.height)) * jt.width + Kt),
            vt = jt.pixels[ht + 3] / 255;
          if (0 === vt) continue;
          const Wt = 4 * bt,
            St = tt[Wt + 3] / 255 * (1 - vt),
            ct = vt + St;
          for (let et = 0; et < 3; et++) tt[Wt + et] = (jt.pixels[ht + et] * Et * vt + tt[Wt + et] * St) / ct;
          tt[Wt + 3] = 255 * ct
        }
    }
    var Ht = Vt(36635);
    const Xt = new Map,
      Qt = new Map,
      lt = new Map,
      Et = new Map;

    function ft(tt, et, Vt) {
      return `${et}|${Vt}|${tt}`
    }

    function wt(tt, et, Vt) {
      let Ot = tt.get(et);
      return void 0 === Ot && (Ot = Vt().catch((Vt => {
        throw tt.delete(et), Vt
      })), tt.set(et, Ot)), Ot
    }

    function yt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Qt.get(ft(tt, et, Vt))
    }

    function Nt(tt, et, Vt, Ot) {
      const qt = ft(tt, et, Vt);
      return wt(Xt, qt, (async () => {
        const Dt = await bt(Ot(tt), et, Vt);
        return Qt.set(qt, Dt), Dt
      }))
    }

    function Mt(tt, et, Vt, Ot) {
      return wt(lt, ft(tt, et, Vt), (async () => {
        var qt;
        const Dt = Ot(tt);
        return null !== (qt = await (0, Ht.d)(Dt, et, Vt)) && void 0 !== qt ? qt : (await bt(Dt, et, Vt)).toDataURL()
      }))
    }
    async function bt(tt, et, Vt) {
      let {
        top: dt,
        left: Ht,
        right: Xt,
        itemType: Qt
      } = tt;
      const [lt, Et, ft] = await Promise.all([Jt(dt), Jt(Ht), Jt(Xt)]), wt = function(tt, et, Vt, qt) {
        const Dt = (0, Ot.l)(Vt, qt),
          mt = Dt * Ot.d.across,
          dt = Dt * Ot.d.down,
          Ht = Dt * Ot.d.up,
          Xt = Math.max(...et.boxes.map((tt => tt[4]))),
          Qt = Vt / 2,
          lt = dt + (Vt - dt - dt - Xt * Ht) / 2,
          Et = (tt, et, Vt) => ({
            x: Qt + (tt - Vt) * mt,
            y: lt - dt + (tt + Vt) * dt + (Xt - et) * Ht
          }),
          ft = (tt, Vt, Ot, qt, Dt, mt) => ({
            origin: tt,
            across: {
              x: Vt.x - tt.x,
              y: Vt.y - tt.y
            },
            down: {
              x: Ot.x - tt.x,
              y: Ot.y - tt.y
            },
            texture: qt,
            rect: et.cropFaces ? Dt : [0, 0, 1, 1],
            shade: mt
          }),
          wt = new Uint8ClampedArray(Vt * Vt * 4),
          yt = new Uint8Array(Vt * Vt),
          Nt = Ot.h;
        for (const [Ot, Mt, bt, Jt, Ct, ut] of et.boxes) {
          const et = ft(Et(Jt, Ct, ut), Et(Jt, Ct, bt), Et(Jt, Mt, ut), tt.right, [1 - ut, 1 - Ct, 1 - bt, 1 - Mt], Nt.right),
            qt = ft(Et(Ot, Ct, ut), Et(Jt, Ct, ut), Et(Ot, Mt, ut), tt.left, [Ot, 1 - Ct, Jt, 1 - Mt], Nt.left),
            Dt = ft(Et(Ot, Ct, bt), Et(Jt, Ct, bt), Et(Ot, Ct, ut), tt.top, [Ot, bt, Jt, ut], Nt.top);
          for (const tt of [et, qt, Dt]) jt(wt, yt, Vt, tt)
        }
        return (0, Ot.o)(wt, Vt, qt, (tt => 1 === yt[tt])), wt
      }({
        top: lt,
        left: Et,
        right: ft
      }, function(tt) {
        return "SlabBlock" === tt ? Dt : "StairsBlock" === tt ? mt : qt
      }(Qt), et, Vt), yt = document.createElement("canvas");
      yt.width = et, yt.height = et;
      const Nt = yt.getContext("2d");
      if (!Nt) throw new Error("Failed to get 2D context");
      return Nt.putImageData(new ImageData(wt, et, et), 0, 0), yt
    }

    function Jt(tt) {
      return wt(Et, tt, (async () => {
        const et = await (0, Ht.g)(tt),
          Vt = document.createElement("canvas");
        Vt.width = et.width, Vt.height = et.height;
        const Ot = Vt.getContext("2d");
        if (!Ot) throw new Error("Failed to get 2D context");
        return Ot.drawImage(et, 0, 0), {
          width: et.width,
          height: et.height,
          pixels: Ot.getImageData(0, 0, et.width, et.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);