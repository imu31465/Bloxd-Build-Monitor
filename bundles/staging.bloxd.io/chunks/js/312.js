export const id = 312;
export const ids = [312];
export const modules = {
  41837: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      _HDRTextureLoader: () => Lk
    });
    var Xk = Ik(37153);
    class Tk {
      static ConvertPanoramaToCubemap(kk, Fk, Ik, Xk) {
        let Tk, ik = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          yk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!kk) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (kk.length != Fk * Ik * 3) {
          if (kk.length != Fk * Ik * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Tk = 4
        } else Tk = 3;
        return {
          front: this.CreateCubemapTexture(Xk, this.FACE_FRONT, kk, Fk, Ik, ik, yk, Tk),
          back: this.CreateCubemapTexture(Xk, this.FACE_BACK, kk, Fk, Ik, ik, yk, Tk),
          left: this.CreateCubemapTexture(Xk, this.FACE_LEFT, kk, Fk, Ik, ik, yk, Tk),
          right: this.CreateCubemapTexture(Xk, this.FACE_RIGHT, kk, Fk, Ik, ik, yk, Tk),
          up: this.CreateCubemapTexture(Xk, this.FACE_UP, kk, Fk, Ik, ik, yk, Tk),
          down: this.CreateCubemapTexture(Xk, this.FACE_DOWN, kk, Fk, Ik, ik, yk, Tk),
          size: Xk,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        const ak = new ArrayBuffer(kk * kk * 4 * 3),
          qk = new Float32Array(ak),
          Lk = ik ? Math.max(1, Math.round(Xk / 4 / kk)) : 1,
          tk = 1 / Lk,
          Zk = tk * tk,
          jk = Fk[1].subtract(Fk[0]).scale(tk / kk),
          ek = Fk[3].subtract(Fk[2]).scale(tk / kk),
          wk = 1 / kk;
        let Hk = 0;
        for (let Jk = 0; Jk < kk; Jk++)
          for (let ik = 0; ik < Lk; ik++) {
            let ik = Fk[0],
              ak = Fk[2];
            for (let Fk = 0; Fk < kk; Fk++)
              for (let tk = 0; tk < Lk; tk++) {
                const Lk = ak.subtract(ik).scale(Hk).add(ik);
                Lk.normalize();
                const tk = this.CalcProjectionSpherical(Lk, Ik, Xk, Tk, lk, yk);
                qk[Jk * kk * 3 + 3 * Fk + 0] += tk.r * Zk, qk[Jk * kk * 3 + 3 * Fk + 1] += tk.g * Zk, qk[Jk * kk * 3 + 3 * Fk + 2] += tk.b * Zk, ik = ik.add(jk), ak = ak.add(ek)
              }
            Hk += wk * tk
          }
        return qk
      }
      static CalcProjectionSpherical(kk, Fk, Ik, Xk, Tk, ik) {
        let yk = Math.atan2(kk.z, kk.x);
        const lk = Math.acos(kk.y);
        for (; yk < -Math.PI;) yk += 2 * Math.PI;
        for (; yk > Math.PI;) yk -= 2 * Math.PI;
        let ak = yk / Math.PI;
        const qk = lk / Math.PI;
        ak = .5 * ak + .5;
        let Lk = Math.round(ak * Ik);
        Lk < 0 ? Lk = 0 : Lk >= Ik && (Lk = Ik - 1);
        let tk = Math.round(qk * Xk);
        tk < 0 ? tk = 0 : tk >= Xk && (tk = Xk - 1);
        const Zk = ik ? Xk - tk - 1 : tk;
        return {
          r: Fk[Zk * Ik * Tk + Lk * Tk + 0],
          g: Fk[Zk * Ik * Tk + Lk * Tk + 1],
          b: Fk[Zk * Ik * Tk + Lk * Tk + 2]
        }
      }
    }

    function ik(kk, Fk, Ik, Xk, Tk, ik) {
      Tk > 0 ? (Tk = function(kk, Fk) {
        return Fk > 1023 ? kk * Math.pow(2, 1023) * Math.pow(2, Fk - 1023) : Fk < -1074 ? kk * Math.pow(2, -1074) * Math.pow(2, Fk + 1074) : kk * Math.pow(2, Fk)
      }(1, Tk - 136), kk[ik + 0] = Fk * Tk, kk[ik + 1] = Ik * Tk, kk[ik + 2] = Xk * Tk) : (kk[ik + 0] = 0, kk[ik + 1] = 0, kk[ik + 2] = 0)
    }

    function yk(kk, Fk) {
      let Ik, Xk = "";
      for (let Tk = Fk; Tk < kk.length - Fk && (Ik = String.fromCharCode(kk[Tk]), "\n" != Ik); Tk++) Xk += Ik;
      return Xk
    }

    function lk(kk) {
      let Fk = yk(kk, 0);
      if ("#" != Fk[0] || "?" != Fk[1]) throw "Bad HDR Format.";
      let Ik = !1,
        Xk = !1,
        Tk = 0;
      do {
        Tk += Fk.length + 1, Fk = yk(kk, Tk), "FORMAT=32-bit_rle_rgbe" == Fk ? Xk = !0 : 0 == Fk.length && (Ik = !0)
      } while (!Ik);
      if (!Xk) throw "HDR Bad header format, unsupported FORMAT";
      Tk += Fk.length + 1, Fk = yk(kk, Tk);
      const ik = /^-Y (.*) \+X (.*)$/g.exec(Fk);
      if (!ik || ik.length < 3) throw "HDR Bad header format, no size";
      const lk = parseInt(ik[2]),
        ak = parseInt(ik[1]);
      if (lk < 8 || lk > 32767) throw "HDR Bad header format, unsupported size";
      return Tk += Fk.length + 1, {
        height: ak,
        width: lk,
        dataPosition: Tk
      }
    }

    function ak(kk, Fk) {
      return function(kk, Fk) {
        let Ik = Fk.height;
        const Xk = Fk.width;
        let Tk, yk, lk, ak, Lk, tk, Zk, jk, ek = Fk.dataPosition;
        const wk = new ArrayBuffer(4 * Xk),
          Hk = new Uint8Array(wk),
          Jk = new ArrayBuffer(Fk.width * Fk.height * 4 * 3),
          xk = new Float32Array(Jk);
        for (; Ik > 0;) {
          if (Tk = kk[ek++], yk = kk[ek++], lk = kk[ek++], ak = kk[ek++], 2 != Tk || 2 != yk || 128 & lk || Fk.width < 8 || Fk.width > 32767) return qk(kk, Fk);
          if ((lk << 8 | ak) != Xk) throw "HDR Bad header format, wrong scan line width";
          for (tk = 0, jk = 0; jk < 4; jk++)
            for (Zk = (jk + 1) * Xk; tk < Zk;)
              if (Tk = kk[ek++], yk = kk[ek++], Tk > 128) {
                if (Lk = Tk - 128, 0 == Lk || Lk > Zk - tk) throw "HDR Bad Format, bad scanline data (run)";
                for (; Lk-- > 0;) Hk[tk++] = yk
              } else {
                if (Lk = Tk, 0 == Lk || Lk > Zk - tk) throw "HDR Bad Format, bad scanline data (non-run)";
                if (Hk[tk++] = yk, --Lk > 0)
                  for (let Fk = 0; Fk < Lk; Fk++) Hk[tk++] = kk[ek++]
              } for (jk = 0; jk < Xk; jk++) Tk = Hk[jk], yk = Hk[jk + Xk], lk = Hk[jk + 2 * Xk], ak = Hk[jk + 3 * Xk], ik(xk, Tk, yk, lk, ak, (Fk.height - Ik) * Xk * 3 + 3 * jk);
          Ik--
        }
        return xk
      }(kk, Fk)
    }

    function qk(kk, Fk) {
      let Ik = Fk.height;
      const Xk = Fk.width;
      let Tk, yk, lk, ak, qk, Lk = Fk.dataPosition;
      const tk = new ArrayBuffer(Fk.width * Fk.height * 4 * 3),
        Zk = new Float32Array(tk);
      for (; Ik > 0;) {
        for (qk = 0; qk < Fk.width; qk++) Tk = kk[Lk++], yk = kk[Lk++], lk = kk[Lk++], ak = kk[Lk++], ik(Zk, Tk, yk, lk, ak, (Fk.height - Ik) * Xk * 3 + 3 * qk);
        Ik--
      }
      return Zk
    }
    Tk.FACE_LEFT = [new Xk.t(-1, -1, -1), new Xk.t(1, -1, -1), new Xk.t(-1, 1, -1), new Xk.t(1, 1, -1)], Tk.FACE_RIGHT = [new Xk.t(1, -1, 1), new Xk.t(-1, -1, 1), new Xk.t(1, 1, 1), new Xk.t(-1, 1, 1)], Tk.FACE_FRONT = [new Xk.t(1, -1, -1), new Xk.t(1, -1, 1), new Xk.t(1, 1, -1), new Xk.t(1, 1, 1)], Tk.FACE_BACK = [new Xk.t(-1, -1, 1), new Xk.t(-1, -1, -1), new Xk.t(-1, 1, 1), new Xk.t(-1, 1, -1)], Tk.FACE_DOWN = [new Xk.t(1, 1, -1), new Xk.t(1, 1, 1), new Xk.t(-1, 1, -1), new Xk.t(-1, 1, 1)], Tk.FACE_UP = [new Xk.t(-1, -1, -1), new Xk.t(-1, -1, 1), new Xk.t(1, -1, -1), new Xk.t(1, -1, 1)];
    class Lk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(kk, Fk, Ik) {
        const Xk = new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength),
          Tk = lk(Xk),
          ik = ak(Xk, Tk),
          yk = Tk.width * Tk.height,
          qk = new Float32Array(4 * yk);
        for (let lk = 0; lk < yk; lk += 1) qk[4 * lk] = ik[3 * lk], qk[4 * lk + 1] = ik[3 * lk + 1], qk[4 * lk + 2] = ik[3 * lk + 2], qk[4 * lk + 3] = 1;
        Ik(Tk.width, Tk.height, Fk.generateMipMaps, !1, (() => {
          const kk = Fk.Oe();
          Fk.type = 1, Fk.format = 5, Fk._gammaSpace = !1, kk._uploadDataToTextureDirectly(Fk, qk)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);