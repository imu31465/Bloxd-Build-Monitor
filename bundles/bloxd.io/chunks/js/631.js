export const id = 631;
export const ids = [631];
export const modules = {
  54374: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      _HDRTextureLoader: () => pr
    });
    var Zr = Qr(38560);
    class Wr {
      static ConvertPanoramaToCubemap(rr, Sr, Qr, Zr) {
        let Wr, ar = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          jr = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!rr) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (rr.length != Sr * Qr * 3) {
          if (rr.length != Sr * Qr * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Wr = 4
        } else Wr = 3;
        return {
          front: this.CreateCubemapTexture(Zr, this.FACE_FRONT, rr, Sr, Qr, ar, jr, Wr),
          back: this.CreateCubemapTexture(Zr, this.FACE_BACK, rr, Sr, Qr, ar, jr, Wr),
          left: this.CreateCubemapTexture(Zr, this.FACE_LEFT, rr, Sr, Qr, ar, jr, Wr),
          right: this.CreateCubemapTexture(Zr, this.FACE_RIGHT, rr, Sr, Qr, ar, jr, Wr),
          up: this.CreateCubemapTexture(Zr, this.FACE_UP, rr, Sr, Qr, ar, jr, Wr),
          down: this.CreateCubemapTexture(Zr, this.FACE_DOWN, rr, Sr, Qr, ar, jr, Wr),
          size: Zr,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        const fr = new ArrayBuffer(rr * rr * 4 * 3),
          Er = new Float32Array(fr),
          pr = ar ? Math.max(1, Math.round(Zr / 4 / rr)) : 1,
          xr = 1 / pr,
          mr = xr * xr,
          Nr = Sr[1].subtract(Sr[0]).scale(xr / rr),
          Ur = Sr[3].subtract(Sr[2]).scale(xr / rr),
          tr = 1 / rr;
        let hr = 0;
        for (let zr = 0; zr < rr; zr++)
          for (let ar = 0; ar < pr; ar++) {
            let ar = Sr[0],
              fr = Sr[2];
            for (let Sr = 0; Sr < rr; Sr++)
              for (let xr = 0; xr < pr; xr++) {
                const pr = fr.subtract(ar).scale(hr).add(ar);
                pr.normalize();
                const xr = this.CalcProjectionSpherical(pr, Qr, Zr, Wr, Ir, jr);
                Er[zr * rr * 3 + 3 * Sr + 0] += xr.r * mr, Er[zr * rr * 3 + 3 * Sr + 1] += xr.g * mr, Er[zr * rr * 3 + 3 * Sr + 2] += xr.b * mr, ar = ar.add(Nr), fr = fr.add(Ur)
              }
            hr += tr * xr
          }
        return Er
      }
      static CalcProjectionSpherical(rr, Sr, Qr, Zr, Wr, ar) {
        let jr = Math.atan2(rr.z, rr.x);
        const Ir = Math.acos(rr.y);
        for (; jr < -Math.PI;) jr += 2 * Math.PI;
        for (; jr > Math.PI;) jr -= 2 * Math.PI;
        let fr = jr / Math.PI;
        const Er = Ir / Math.PI;
        fr = .5 * fr + .5;
        let pr = Math.round(fr * Qr);
        pr < 0 ? pr = 0 : pr >= Qr && (pr = Qr - 1);
        let xr = Math.round(Er * Zr);
        xr < 0 ? xr = 0 : xr >= Zr && (xr = Zr - 1);
        const mr = ar ? Zr - xr - 1 : xr;
        return {
          r: Sr[mr * Qr * Wr + pr * Wr + 0],
          g: Sr[mr * Qr * Wr + pr * Wr + 1],
          b: Sr[mr * Qr * Wr + pr * Wr + 2]
        }
      }
    }

    function ar(rr, Sr, Qr, Zr, Wr, ar) {
      Wr > 0 ? (Wr = function(rr, Sr) {
        return Sr > 1023 ? rr * Math.pow(2, 1023) * Math.pow(2, Sr - 1023) : Sr < -1074 ? rr * Math.pow(2, -1074) * Math.pow(2, Sr + 1074) : rr * Math.pow(2, Sr)
      }(1, Wr - 136), rr[ar + 0] = Sr * Wr, rr[ar + 1] = Qr * Wr, rr[ar + 2] = Zr * Wr) : (rr[ar + 0] = 0, rr[ar + 1] = 0, rr[ar + 2] = 0)
    }

    function jr(rr, Sr) {
      let Qr, Zr = "";
      for (let Wr = Sr; Wr < rr.length - Sr && (Qr = String.fromCharCode(rr[Wr]), "\n" != Qr); Wr++) Zr += Qr;
      return Zr
    }

    function Ir(rr) {
      let Sr = jr(rr, 0);
      if ("#" != Sr[0] || "?" != Sr[1]) throw "Bad HDR Format.";
      let Qr = !1,
        Zr = !1,
        Wr = 0;
      do {
        Wr += Sr.length + 1, Sr = jr(rr, Wr), "FORMAT=32-bit_rle_rgbe" == Sr ? Zr = !0 : 0 == Sr.length && (Qr = !0)
      } while (!Qr);
      if (!Zr) throw "HDR Bad header format, unsupported FORMAT";
      Wr += Sr.length + 1, Sr = jr(rr, Wr);
      const ar = /^-Y (.*) \+X (.*)$/g.exec(Sr);
      if (!ar || ar.length < 3) throw "HDR Bad header format, no size";
      const Ir = parseInt(ar[2]),
        fr = parseInt(ar[1]);
      if (Ir < 8 || Ir > 32767) throw "HDR Bad header format, unsupported size";
      return Wr += Sr.length + 1, {
        height: fr,
        width: Ir,
        dataPosition: Wr
      }
    }

    function fr(rr, Sr) {
      return function(rr, Sr) {
        let Qr = Sr.height;
        const Zr = Sr.width;
        let Wr, jr, Ir, fr, pr, xr, mr, Nr, Ur = Sr.dataPosition;
        const tr = new ArrayBuffer(4 * Zr),
          hr = new Uint8Array(tr),
          zr = new ArrayBuffer(Sr.width * Sr.height * 4 * 3),
          Yr = new Float32Array(zr);
        for (; Qr > 0;) {
          if (Wr = rr[Ur++], jr = rr[Ur++], Ir = rr[Ur++], fr = rr[Ur++], 2 != Wr || 2 != jr || 128 & Ir || Sr.width < 8 || Sr.width > 32767) return Er(rr, Sr);
          if ((Ir << 8 | fr) != Zr) throw "HDR Bad header format, wrong scan line width";
          for (xr = 0, Nr = 0; Nr < 4; Nr++)
            for (mr = (Nr + 1) * Zr; xr < mr;)
              if (Wr = rr[Ur++], jr = rr[Ur++], Wr > 128) {
                if (pr = Wr - 128, 0 == pr || pr > mr - xr) throw "HDR Bad Format, bad scanline data (run)";
                for (; pr-- > 0;) hr[xr++] = jr
              } else {
                if (pr = Wr, 0 == pr || pr > mr - xr) throw "HDR Bad Format, bad scanline data (non-run)";
                if (hr[xr++] = jr, --pr > 0)
                  for (let Sr = 0; Sr < pr; Sr++) hr[xr++] = rr[Ur++]
              } for (Nr = 0; Nr < Zr; Nr++) Wr = hr[Nr], jr = hr[Nr + Zr], Ir = hr[Nr + 2 * Zr], fr = hr[Nr + 3 * Zr], ar(Yr, Wr, jr, Ir, fr, (Sr.height - Qr) * Zr * 3 + 3 * Nr);
          Qr--
        }
        return Yr
      }(rr, Sr)
    }

    function Er(rr, Sr) {
      let Qr = Sr.height;
      const Zr = Sr.width;
      let Wr, jr, Ir, fr, Er, pr = Sr.dataPosition;
      const xr = new ArrayBuffer(Sr.width * Sr.height * 4 * 3),
        mr = new Float32Array(xr);
      for (; Qr > 0;) {
        for (Er = 0; Er < Sr.width; Er++) Wr = rr[pr++], jr = rr[pr++], Ir = rr[pr++], fr = rr[pr++], ar(mr, Wr, jr, Ir, fr, (Sr.height - Qr) * Zr * 3 + 3 * Er);
        Qr--
      }
      return mr
    }
    Wr.FACE_LEFT = [new Zr.u(-1, -1, -1), new Zr.u(1, -1, -1), new Zr.u(-1, 1, -1), new Zr.u(1, 1, -1)], Wr.FACE_RIGHT = [new Zr.u(1, -1, 1), new Zr.u(-1, -1, 1), new Zr.u(1, 1, 1), new Zr.u(-1, 1, 1)], Wr.FACE_FRONT = [new Zr.u(1, -1, -1), new Zr.u(1, -1, 1), new Zr.u(1, 1, -1), new Zr.u(1, 1, 1)], Wr.FACE_BACK = [new Zr.u(-1, -1, 1), new Zr.u(-1, -1, -1), new Zr.u(-1, 1, 1), new Zr.u(-1, 1, -1)], Wr.FACE_DOWN = [new Zr.u(1, 1, -1), new Zr.u(1, 1, 1), new Zr.u(-1, 1, -1), new Zr.u(-1, 1, 1)], Wr.FACE_UP = [new Zr.u(-1, -1, -1), new Zr.u(-1, -1, 1), new Zr.u(1, -1, -1), new Zr.u(1, -1, 1)];
    class pr {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(rr, Sr, Qr) {
        const Zr = new Uint8Array(rr.buffer, rr.byteOffset, rr.byteLength),
          Wr = Ir(Zr),
          ar = fr(Zr, Wr),
          jr = Wr.width * Wr.height,
          Er = new Float32Array(4 * jr);
        for (let Ir = 0; Ir < jr; Ir += 1) Er[4 * Ir] = ar[3 * Ir], Er[4 * Ir + 1] = ar[3 * Ir + 1], Er[4 * Ir + 2] = ar[3 * Ir + 2], Er[4 * Ir + 3] = 1;
        Qr(Wr.width, Wr.height, Sr.generateMipMaps, !1, (() => {
          const rr = Sr.MU();
          Sr.type = 1, Sr.format = 5, Sr._gammaSpace = !1, rr._uploadDataToTextureDirectly(Sr, Er)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);