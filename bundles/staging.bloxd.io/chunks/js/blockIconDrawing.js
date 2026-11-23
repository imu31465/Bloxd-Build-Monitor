export const id = 2;
export const ids = [2];
export const modules = {
  36377: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      drawBlockIcon: () => Jk,
      drawBlockIconUrl: () => xk,
      getDrawnBlockIcon: () => Hk
    });
    var Xk = Ik(36386);
    const Tk = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      ik = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      yk = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const lk = 1e-6;

    function ak(kk, Fk, Ik, Xk) {
      let {
        origin: Tk,
        across: ik,
        down: yk,
        texture: ak,
        rect: [qk, Lk, tk, Zk],
        shade: jk
      } = Xk;
      const ek = ik.x * yk.y - ik.y * yk.x;
      if (Math.abs(ek) < 1e-9) return;
      const wk = [Tk.x, Tk.x + ik.x, Tk.x + yk.x, Tk.x + ik.x + yk.x],
        Hk = [Tk.y, Tk.y + ik.y, Tk.y + yk.y, Tk.y + ik.y + yk.y],
        Jk = Math.max(0, Math.floor(Math.min(...wk))),
        xk = Math.min(Ik - 1, Math.ceil(Math.max(...wk))),
        Pk = Math.max(0, Math.floor(Math.min(...Hk))),
        Kk = Math.min(Ik - 1, Math.ceil(Math.max(...Hk)));
      for (let Qk = Pk; Qk <= Kk; Qk++)
        for (let Xk = Jk; Xk <= xk; Xk++) {
          const wk = Xk + .5 - Tk.x,
            Hk = Qk + .5 - Tk.y,
            Jk = (wk * yk.y - Hk * yk.x) / ek,
            xk = (ik.x * Hk - ik.y * wk) / ek;
          if (Jk < -lk || Jk > 1 + lk || xk < -lk || xk > 1 + lk) continue;
          const Pk = Qk * Ik + Xk;
          Fk[Pk] = 1;
          const Kk = qk + Math.min(Math.max(Jk, 0), 1) * (tk - qk),
            sk = Lk + Math.min(Math.max(xk, 0), 1) * (Zk - Lk),
            Vk = Math.min(ak.width - 1, Math.floor(Kk * ak.width)),
            zk = 4 * (Math.min(ak.height - 1, Math.floor(sk * ak.height)) * ak.width + Vk),
            Sk = ak.pixels[zk + 3] / 255;
          if (0 === Sk) continue;
          const vk = 4 * Pk,
            Ek = kk[vk + 3] / 255 * (1 - Sk),
            Ok = Sk + Ek;
          for (let Fk = 0; Fk < 3; Fk++) kk[vk + Fk] = (ak.pixels[zk + Fk] * jk * Sk + kk[vk + Fk] * Ek) / Ok;
          kk[vk + 3] = 255 * Ok
        }
    }
    var qk = Ik(36388);
    const Lk = new Map,
      tk = new Map,
      Zk = new Map,
      jk = new Map;

    function ek(kk, Fk, Ik) {
      return `${Fk}|${Ik}|${kk}`
    }

    function wk(kk, Fk, Ik) {
      let Xk = kk.get(Fk);
      return void 0 === Xk && (Xk = Ik().catch((Ik => {
        throw kk.delete(Fk), Ik
      })), kk.set(Fk, Xk)), Xk
    }

    function Hk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return tk.get(ek(kk, Fk, Ik))
    }

    function Jk(kk, Fk, Ik, Xk) {
      const Tk = ek(kk, Fk, Ik);
      return wk(Lk, Tk, (async () => {
        const ik = await Pk(Xk(kk), Fk, Ik);
        return tk.set(Tk, ik), ik
      }))
    }

    function xk(kk, Fk, Ik, Xk) {
      return wk(Zk, ek(kk, Fk, Ik), (async () => {
        var Tk;
        const ik = Xk(kk);
        return null !== (Tk = await (0, qk.d)(ik, Fk, Ik)) && void 0 !== Tk ? Tk : (await Pk(ik, Fk, Ik)).toDataURL()
      }))
    }
    async function Pk(kk, Fk, Ik) {
      let {
        top: lk,
        left: qk,
        right: Lk,
        itemType: tk
      } = kk;
      const [Zk, jk, ek] = await Promise.all([Kk(lk), Kk(qk), Kk(Lk)]), wk = function(kk, Fk, Ik, Tk) {
        const ik = (0, Xk.i)(Ik, Tk),
          yk = ik * Xk.c.across,
          lk = ik * Xk.c.down,
          qk = ik * Xk.c.up,
          Lk = Math.max(...Fk.boxes.map((kk => kk[4]))),
          tk = Ik / 2,
          Zk = lk + (Ik - lk - lk - Lk * qk) / 2,
          jk = (kk, Fk, Ik) => ({
            x: tk + (kk - Ik) * yk,
            y: Zk - lk + (kk + Ik) * lk + (Lk - Fk) * qk
          }),
          ek = (kk, Ik, Xk, Tk, ik, yk) => ({
            origin: kk,
            across: {
              x: Ik.x - kk.x,
              y: Ik.y - kk.y
            },
            down: {
              x: Xk.x - kk.x,
              y: Xk.y - kk.y
            },
            texture: Tk,
            rect: Fk.cropFaces ? ik : [0, 0, 1, 1],
            shade: yk
          }),
          wk = new Uint8ClampedArray(Ik * Ik * 4),
          Hk = new Uint8Array(Ik * Ik),
          Jk = Xk.g;
        for (const [Xk, xk, Pk, Kk, Qk, sk] of Fk.boxes) {
          const Fk = ek(jk(Kk, Qk, sk), jk(Kk, Qk, Pk), jk(Kk, xk, sk), kk.right, [1 - sk, 1 - Qk, 1 - Pk, 1 - xk], Jk.right),
            Tk = ek(jk(Xk, Qk, sk), jk(Kk, Qk, sk), jk(Xk, xk, sk), kk.left, [Xk, 1 - Qk, Kk, 1 - xk], Jk.left),
            ik = ek(jk(Xk, Qk, Pk), jk(Kk, Qk, Pk), jk(Xk, Qk, sk), kk.top, [Xk, Pk, Kk, sk], Jk.top);
          for (const kk of [Fk, Tk, ik]) ak(wk, Hk, Ik, kk)
        }
        return (0, Xk.k)(wk, Ik, Tk, (kk => 1 === Hk[kk])), wk
      }({
        top: Zk,
        left: jk,
        right: ek
      }, function(kk) {
        return "SlabBlock" === kk ? ik : "StairsBlock" === kk ? yk : Tk
      }(tk), Fk, Ik), Hk = document.createElement("canvas");
      Hk.width = Fk, Hk.height = Fk;
      const Jk = Hk.getContext("2d");
      if (!Jk) throw new Error("Failed to get 2D context");
      return Jk.putImageData(new ImageData(wk, Fk, Fk), 0, 0), Hk
    }

    function Kk(kk) {
      return wk(jk, kk, (async () => {
        const Fk = await (0, qk.i)(kk),
          Ik = document.createElement("canvas");
        Ik.width = Fk.width, Ik.height = Fk.height;
        const Xk = Ik.getContext("2d");
        if (!Xk) throw new Error("Failed to get 2D context");
        return Xk.drawImage(Fk, 0, 0), {
          width: Fk.width,
          height: Fk.height,
          pixels: Xk.getImageData(0, 0, Fk.width, Fk.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);