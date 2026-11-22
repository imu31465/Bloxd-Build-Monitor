export const id = 311;
export const ids = [311];
export const modules = {
  41426: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      _HDRTextureLoader: () => Mk
    });
    var Dk = ik(36698);
    class fk {
      static ConvertPanoramaToCubemap(kk, ek, ik, Dk) {
        let fk, Sk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!kk) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (kk.length != ek * ik * 3) {
          if (kk.length != ek * ik * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          fk = 4
        } else fk = 3;
        return {
          front: this.CreateCubemapTexture(Dk, this.FACE_FRONT, kk, ek, ik, Sk, bk, fk),
          back: this.CreateCubemapTexture(Dk, this.FACE_BACK, kk, ek, ik, Sk, bk, fk),
          left: this.CreateCubemapTexture(Dk, this.FACE_LEFT, kk, ek, ik, Sk, bk, fk),
          right: this.CreateCubemapTexture(Dk, this.FACE_RIGHT, kk, ek, ik, Sk, bk, fk),
          up: this.CreateCubemapTexture(Dk, this.FACE_UP, kk, ek, ik, Sk, bk, fk),
          down: this.CreateCubemapTexture(Dk, this.FACE_DOWN, kk, ek, ik, Sk, bk, fk),
          size: Dk,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        const Pk = new ArrayBuffer(kk * kk * 4 * 3),
          mk = new Float32Array(Pk),
          Mk = Sk ? Math.max(1, Math.round(Dk / 4 / kk)) : 1,
          Kk = 1 / Mk,
          xk = Kk * Kk,
          nk = ek[1].subtract(ek[0]).scale(Kk / kk),
          Uk = ek[3].subtract(ek[2]).scale(Kk / kk),
          Hk = 1 / kk;
        let wk = 0;
        for (let lk = 0; lk < kk; lk++)
          for (let Sk = 0; Sk < Mk; Sk++) {
            let Sk = ek[0],
              Pk = ek[2];
            for (let ek = 0; ek < kk; ek++)
              for (let Kk = 0; Kk < Mk; Kk++) {
                const Mk = Pk.subtract(Sk).scale(wk).add(Sk);
                Mk.normalize();
                const Kk = this.CalcProjectionSpherical(Mk, ik, Dk, fk, rk, bk);
                mk[lk * kk * 3 + 3 * ek + 0] += Kk.r * xk, mk[lk * kk * 3 + 3 * ek + 1] += Kk.g * xk, mk[lk * kk * 3 + 3 * ek + 2] += Kk.b * xk, Sk = Sk.add(nk), Pk = Pk.add(Uk)
              }
            wk += Hk * Kk
          }
        return mk
      }
      static CalcProjectionSpherical(kk, ek, ik, Dk, fk, Sk) {
        let bk = Math.atan2(kk.z, kk.x);
        const rk = Math.acos(kk.y);
        for (; bk < -Math.PI;) bk += 2 * Math.PI;
        for (; bk > Math.PI;) bk -= 2 * Math.PI;
        let Pk = bk / Math.PI;
        const mk = rk / Math.PI;
        Pk = .5 * Pk + .5;
        let Mk = Math.round(Pk * ik);
        Mk < 0 ? Mk = 0 : Mk >= ik && (Mk = ik - 1);
        let Kk = Math.round(mk * Dk);
        Kk < 0 ? Kk = 0 : Kk >= Dk && (Kk = Dk - 1);
        const xk = Sk ? Dk - Kk - 1 : Kk;
        return {
          r: ek[xk * ik * fk + Mk * fk + 0],
          g: ek[xk * ik * fk + Mk * fk + 1],
          b: ek[xk * ik * fk + Mk * fk + 2]
        }
      }
    }

    function Sk(kk, ek, ik, Dk, fk, Sk) {
      fk > 0 ? (fk = function(kk, ek) {
        return ek > 1023 ? kk * Math.pow(2, 1023) * Math.pow(2, ek - 1023) : ek < -1074 ? kk * Math.pow(2, -1074) * Math.pow(2, ek + 1074) : kk * Math.pow(2, ek)
      }(1, fk - 136), kk[Sk + 0] = ek * fk, kk[Sk + 1] = ik * fk, kk[Sk + 2] = Dk * fk) : (kk[Sk + 0] = 0, kk[Sk + 1] = 0, kk[Sk + 2] = 0)
    }

    function bk(kk, ek) {
      let ik, Dk = "";
      for (let fk = ek; fk < kk.length - ek && (ik = String.fromCharCode(kk[fk]), "\n" != ik); fk++) Dk += ik;
      return Dk
    }

    function rk(kk) {
      let ek = bk(kk, 0);
      if ("#" != ek[0] || "?" != ek[1]) throw "Bad HDR Format.";
      let ik = !1,
        Dk = !1,
        fk = 0;
      do {
        fk += ek.length + 1, ek = bk(kk, fk), "FORMAT=32-bit_rle_rgbe" == ek ? Dk = !0 : 0 == ek.length && (ik = !0)
      } while (!ik);
      if (!Dk) throw "HDR Bad header format, unsupported FORMAT";
      fk += ek.length + 1, ek = bk(kk, fk);
      const Sk = /^-Y (.*) \+X (.*)$/g.exec(ek);
      if (!Sk || Sk.length < 3) throw "HDR Bad header format, no size";
      const rk = parseInt(Sk[2]),
        Pk = parseInt(Sk[1]);
      if (rk < 8 || rk > 32767) throw "HDR Bad header format, unsupported size";
      return fk += ek.length + 1, {
        height: Pk,
        width: rk,
        dataPosition: fk
      }
    }

    function Pk(kk, ek) {
      return function(kk, ek) {
        let ik = ek.height;
        const Dk = ek.width;
        let fk, bk, rk, Pk, Mk, Kk, xk, nk, Uk = ek.dataPosition;
        const Hk = new ArrayBuffer(4 * Dk),
          wk = new Uint8Array(Hk),
          lk = new ArrayBuffer(ek.width * ek.height * 4 * 3),
          pk = new Float32Array(lk);
        for (; ik > 0;) {
          if (fk = kk[Uk++], bk = kk[Uk++], rk = kk[Uk++], Pk = kk[Uk++], 2 != fk || 2 != bk || 128 & rk || ek.width < 8 || ek.width > 32767) return mk(kk, ek);
          if ((rk << 8 | Pk) != Dk) throw "HDR Bad header format, wrong scan line width";
          for (Kk = 0, nk = 0; nk < 4; nk++)
            for (xk = (nk + 1) * Dk; Kk < xk;)
              if (fk = kk[Uk++], bk = kk[Uk++], fk > 128) {
                if (Mk = fk - 128, 0 == Mk || Mk > xk - Kk) throw "HDR Bad Format, bad scanline data (run)";
                for (; Mk-- > 0;) wk[Kk++] = bk
              } else {
                if (Mk = fk, 0 == Mk || Mk > xk - Kk) throw "HDR Bad Format, bad scanline data (non-run)";
                if (wk[Kk++] = bk, --Mk > 0)
                  for (let ek = 0; ek < Mk; ek++) wk[Kk++] = kk[Uk++]
              } for (nk = 0; nk < Dk; nk++) fk = wk[nk], bk = wk[nk + Dk], rk = wk[nk + 2 * Dk], Pk = wk[nk + 3 * Dk], Sk(pk, fk, bk, rk, Pk, (ek.height - ik) * Dk * 3 + 3 * nk);
          ik--
        }
        return pk
      }(kk, ek)
    }

    function mk(kk, ek) {
      let ik = ek.height;
      const Dk = ek.width;
      let fk, bk, rk, Pk, mk, Mk = ek.dataPosition;
      const Kk = new ArrayBuffer(ek.width * ek.height * 4 * 3),
        xk = new Float32Array(Kk);
      for (; ik > 0;) {
        for (mk = 0; mk < ek.width; mk++) fk = kk[Mk++], bk = kk[Mk++], rk = kk[Mk++], Pk = kk[Mk++], Sk(xk, fk, bk, rk, Pk, (ek.height - ik) * Dk * 3 + 3 * mk);
        ik--
      }
      return xk
    }
    fk.FACE_LEFT = [new Dk.o(-1, -1, -1), new Dk.o(1, -1, -1), new Dk.o(-1, 1, -1), new Dk.o(1, 1, -1)], fk.FACE_RIGHT = [new Dk.o(1, -1, 1), new Dk.o(-1, -1, 1), new Dk.o(1, 1, 1), new Dk.o(-1, 1, 1)], fk.FACE_FRONT = [new Dk.o(1, -1, -1), new Dk.o(1, -1, 1), new Dk.o(1, 1, -1), new Dk.o(1, 1, 1)], fk.FACE_BACK = [new Dk.o(-1, -1, 1), new Dk.o(-1, -1, -1), new Dk.o(-1, 1, 1), new Dk.o(-1, 1, -1)], fk.FACE_DOWN = [new Dk.o(1, 1, -1), new Dk.o(1, 1, 1), new Dk.o(-1, 1, -1), new Dk.o(-1, 1, 1)], fk.FACE_UP = [new Dk.o(-1, -1, -1), new Dk.o(-1, -1, 1), new Dk.o(1, -1, -1), new Dk.o(1, -1, 1)];
    class Mk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(kk, ek, ik) {
        const Dk = new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength),
          fk = rk(Dk),
          Sk = Pk(Dk, fk),
          bk = fk.width * fk.height,
          mk = new Float32Array(4 * bk);
        for (let rk = 0; rk < bk; rk += 1) mk[4 * rk] = Sk[3 * rk], mk[4 * rk + 1] = Sk[3 * rk + 1], mk[4 * rk + 2] = Sk[3 * rk + 2], mk[4 * rk + 3] = 1;
        ik(fk.width, fk.height, ek.generateMipMaps, !1, (() => {
          const kk = ek.JU();
          ek.type = 1, ek.format = 5, ek._gammaSpace = !1, kk._uploadDataToTextureDirectly(ek, mk)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);