export const id = 302;
export const ids = [302];
export const modules = {
  41254: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      _HDRTextureLoader: () => sk
    });
    var Rk = Bk(36758);
    class tk {
      static ConvertPanoramaToCubemap(kk, Fk, Bk, Rk) {
        let tk, ak = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Xk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!kk) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (kk.length != Fk * Bk * 3) {
          if (kk.length != Fk * Bk * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          tk = 4
        } else tk = 3;
        return {
          front: this.CreateCubemapTexture(Rk, this.FACE_FRONT, kk, Fk, Bk, ak, Xk, tk),
          back: this.CreateCubemapTexture(Rk, this.FACE_BACK, kk, Fk, Bk, ak, Xk, tk),
          left: this.CreateCubemapTexture(Rk, this.FACE_LEFT, kk, Fk, Bk, ak, Xk, tk),
          right: this.CreateCubemapTexture(Rk, this.FACE_RIGHT, kk, Fk, Bk, ak, Xk, tk),
          up: this.CreateCubemapTexture(Rk, this.FACE_UP, kk, Fk, Bk, ak, Xk, tk),
          down: this.CreateCubemapTexture(Rk, this.FACE_DOWN, kk, Fk, Bk, ak, Xk, tk),
          size: Rk,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        const wk = new ArrayBuffer(kk * kk * 4 * 3),
          dk = new Float32Array(wk),
          sk = ak ? Math.max(1, Math.round(Rk / 4 / kk)) : 1,
          Vk = 1 / sk,
          Jk = Vk * Vk,
          Ak = Fk[1].subtract(Fk[0]).scale(Vk / kk),
          ek = Fk[3].subtract(Fk[2]).scale(Vk / kk),
          yk = 1 / kk;
        let fk = 0;
        for (let mk = 0; mk < kk; mk++)
          for (let ak = 0; ak < sk; ak++) {
            let ak = Fk[0],
              wk = Fk[2];
            for (let Fk = 0; Fk < kk; Fk++)
              for (let Vk = 0; Vk < sk; Vk++) {
                const sk = wk.subtract(ak).scale(fk).add(ak);
                sk.normalize();
                const Vk = this.CalcProjectionSpherical(sk, Bk, Rk, tk, bk, Xk);
                dk[mk * kk * 3 + 3 * Fk + 0] += Vk.r * Jk, dk[mk * kk * 3 + 3 * Fk + 1] += Vk.g * Jk, dk[mk * kk * 3 + 3 * Fk + 2] += Vk.b * Jk, ak = ak.add(Ak), wk = wk.add(ek)
              }
            fk += yk * Vk
          }
        return dk
      }
      static CalcProjectionSpherical(kk, Fk, Bk, Rk, tk, ak) {
        let Xk = Math.atan2(kk.z, kk.x);
        const bk = Math.acos(kk.y);
        for (; Xk < -Math.PI;) Xk += 2 * Math.PI;
        for (; Xk > Math.PI;) Xk -= 2 * Math.PI;
        let wk = Xk / Math.PI;
        const dk = bk / Math.PI;
        wk = .5 * wk + .5;
        let sk = Math.round(wk * Bk);
        sk < 0 ? sk = 0 : sk >= Bk && (sk = Bk - 1);
        let Vk = Math.round(dk * Rk);
        Vk < 0 ? Vk = 0 : Vk >= Rk && (Vk = Rk - 1);
        const Jk = ak ? Rk - Vk - 1 : Vk;
        return {
          r: Fk[Jk * Bk * tk + sk * tk + 0],
          g: Fk[Jk * Bk * tk + sk * tk + 1],
          b: Fk[Jk * Bk * tk + sk * tk + 2]
        }
      }
    }

    function ak(kk, Fk, Bk, Rk, tk, ak) {
      tk > 0 ? (tk = function(kk, Fk) {
        return Fk > 1023 ? kk * Math.pow(2, 1023) * Math.pow(2, Fk - 1023) : Fk < -1074 ? kk * Math.pow(2, -1074) * Math.pow(2, Fk + 1074) : kk * Math.pow(2, Fk)
      }(1, tk - 136), kk[ak + 0] = Fk * tk, kk[ak + 1] = Bk * tk, kk[ak + 2] = Rk * tk) : (kk[ak + 0] = 0, kk[ak + 1] = 0, kk[ak + 2] = 0)
    }

    function Xk(kk, Fk) {
      let Bk, Rk = "";
      for (let tk = Fk; tk < kk.length - Fk && (Bk = String.fromCharCode(kk[tk]), "\n" != Bk); tk++) Rk += Bk;
      return Rk
    }

    function bk(kk) {
      let Fk = Xk(kk, 0);
      if ("#" != Fk[0] || "?" != Fk[1]) throw "Bad HDR Format.";
      let Bk = !1,
        Rk = !1,
        tk = 0;
      do {
        tk += Fk.length + 1, Fk = Xk(kk, tk), "FORMAT=32-bit_rle_rgbe" == Fk ? Rk = !0 : 0 == Fk.length && (Bk = !0)
      } while (!Bk);
      if (!Rk) throw "HDR Bad header format, unsupported FORMAT";
      tk += Fk.length + 1, Fk = Xk(kk, tk);
      const ak = /^-Y (.*) \+X (.*)$/g.exec(Fk);
      if (!ak || ak.length < 3) throw "HDR Bad header format, no size";
      const bk = parseInt(ak[2]),
        wk = parseInt(ak[1]);
      if (bk < 8 || bk > 32767) throw "HDR Bad header format, unsupported size";
      return tk += Fk.length + 1, {
        height: wk,
        width: bk,
        dataPosition: tk
      }
    }

    function wk(kk, Fk) {
      return function(kk, Fk) {
        let Bk = Fk.height;
        const Rk = Fk.width;
        let tk, Xk, bk, wk, sk, Vk, Jk, Ak, ek = Fk.dataPosition;
        const yk = new ArrayBuffer(4 * Rk),
          fk = new Uint8Array(yk),
          mk = new ArrayBuffer(Fk.width * Fk.height * 4 * 3),
          Wk = new Float32Array(mk);
        for (; Bk > 0;) {
          if (tk = kk[ek++], Xk = kk[ek++], bk = kk[ek++], wk = kk[ek++], 2 != tk || 2 != Xk || 128 & bk || Fk.width < 8 || Fk.width > 32767) return dk(kk, Fk);
          if ((bk << 8 | wk) != Rk) throw "HDR Bad header format, wrong scan line width";
          for (Vk = 0, Ak = 0; Ak < 4; Ak++)
            for (Jk = (Ak + 1) * Rk; Vk < Jk;)
              if (tk = kk[ek++], Xk = kk[ek++], tk > 128) {
                if (sk = tk - 128, 0 == sk || sk > Jk - Vk) throw "HDR Bad Format, bad scanline data (run)";
                for (; sk-- > 0;) fk[Vk++] = Xk
              } else {
                if (sk = tk, 0 == sk || sk > Jk - Vk) throw "HDR Bad Format, bad scanline data (non-run)";
                if (fk[Vk++] = Xk, --sk > 0)
                  for (let Fk = 0; Fk < sk; Fk++) fk[Vk++] = kk[ek++]
              } for (Ak = 0; Ak < Rk; Ak++) tk = fk[Ak], Xk = fk[Ak + Rk], bk = fk[Ak + 2 * Rk], wk = fk[Ak + 3 * Rk], ak(Wk, tk, Xk, bk, wk, (Fk.height - Bk) * Rk * 3 + 3 * Ak);
          Bk--
        }
        return Wk
      }(kk, Fk)
    }

    function dk(kk, Fk) {
      let Bk = Fk.height;
      const Rk = Fk.width;
      let tk, Xk, bk, wk, dk, sk = Fk.dataPosition;
      const Vk = new ArrayBuffer(Fk.width * Fk.height * 4 * 3),
        Jk = new Float32Array(Vk);
      for (; Bk > 0;) {
        for (dk = 0; dk < Fk.width; dk++) tk = kk[sk++], Xk = kk[sk++], bk = kk[sk++], wk = kk[sk++], ak(Jk, tk, Xk, bk, wk, (Fk.height - Bk) * Rk * 3 + 3 * dk);
        Bk--
      }
      return Jk
    }
    tk.FACE_LEFT = [new Rk.s(-1, -1, -1), new Rk.s(1, -1, -1), new Rk.s(-1, 1, -1), new Rk.s(1, 1, -1)], tk.FACE_RIGHT = [new Rk.s(1, -1, 1), new Rk.s(-1, -1, 1), new Rk.s(1, 1, 1), new Rk.s(-1, 1, 1)], tk.FACE_FRONT = [new Rk.s(1, -1, -1), new Rk.s(1, -1, 1), new Rk.s(1, 1, -1), new Rk.s(1, 1, 1)], tk.FACE_BACK = [new Rk.s(-1, -1, 1), new Rk.s(-1, -1, -1), new Rk.s(-1, 1, 1), new Rk.s(-1, 1, -1)], tk.FACE_DOWN = [new Rk.s(1, 1, -1), new Rk.s(1, 1, 1), new Rk.s(-1, 1, -1), new Rk.s(-1, 1, 1)], tk.FACE_UP = [new Rk.s(-1, -1, -1), new Rk.s(-1, -1, 1), new Rk.s(1, -1, -1), new Rk.s(1, -1, 1)];
    class sk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(kk, Fk, Bk) {
        const Rk = new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength),
          tk = bk(Rk),
          ak = wk(Rk, tk),
          Xk = tk.width * tk.height,
          dk = new Float32Array(4 * Xk);
        for (let bk = 0; bk < Xk; bk += 1) dk[4 * bk] = ak[3 * bk], dk[4 * bk + 1] = ak[3 * bk + 1], dk[4 * bk + 2] = ak[3 * bk + 2], dk[4 * bk + 3] = 1;
        Bk(tk.width, tk.height, Fk.generateMipMaps, !1, (() => {
          const kk = Fk.ne();
          Fk.type = 1, Fk.format = 5, Fk._gammaSpace = !1, kk._uploadDataToTextureDirectly(Fk, dk)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);