export const id = 302;
export const ids = [302];
export const modules = {
  40941: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      _HDRTextureLoader: () => vb
    });
    var Ab = Ub(36401);
    class Mb {
      static ConvertPanoramaToCubemap(bb, ab, Ub, Ab) {
        let Mb, Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Eb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!bb) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (bb.length != ab * Ub * 3) {
          if (bb.length != ab * Ub * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Mb = 4
        } else Mb = 3;
        return {
          front: this.CreateCubemapTexture(Ab, this.FACE_FRONT, bb, ab, Ub, Tb, Eb, Mb),
          back: this.CreateCubemapTexture(Ab, this.FACE_BACK, bb, ab, Ub, Tb, Eb, Mb),
          left: this.CreateCubemapTexture(Ab, this.FACE_LEFT, bb, ab, Ub, Tb, Eb, Mb),
          right: this.CreateCubemapTexture(Ab, this.FACE_RIGHT, bb, ab, Ub, Tb, Eb, Mb),
          up: this.CreateCubemapTexture(Ab, this.FACE_UP, bb, ab, Ub, Tb, Eb, Mb),
          down: this.CreateCubemapTexture(Ab, this.FACE_DOWN, bb, ab, Ub, Tb, Eb, Mb),
          size: Ab,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        const Bb = new ArrayBuffer(bb * bb * 4 * 3),
          eb = new Float32Array(Bb),
          vb = Tb ? Math.max(1, Math.round(Ab / 4 / bb)) : 1,
          Lb = 1 / vb,
          Pb = Lb * Lb,
          Xb = ab[1].subtract(ab[0]).scale(Lb / bb),
          jb = ab[3].subtract(ab[2]).scale(Lb / bb),
          Rb = 1 / bb;
        let kb = 0;
        for (let yb = 0; yb < bb; yb++)
          for (let Tb = 0; Tb < vb; Tb++) {
            let Tb = ab[0],
              Bb = ab[2];
            for (let ab = 0; ab < bb; ab++)
              for (let Lb = 0; Lb < vb; Lb++) {
                const vb = Bb.subtract(Tb).scale(kb).add(Tb);
                vb.normalize();
                const Lb = this.CalcProjectionSpherical(vb, Ub, Ab, Mb, Yb, Eb);
                eb[yb * bb * 3 + 3 * ab + 0] += Lb.r * Pb, eb[yb * bb * 3 + 3 * ab + 1] += Lb.g * Pb, eb[yb * bb * 3 + 3 * ab + 2] += Lb.b * Pb, Tb = Tb.add(Xb), Bb = Bb.add(jb)
              }
            kb += Rb * Lb
          }
        return eb
      }
      static CalcProjectionSpherical(bb, ab, Ub, Ab, Mb, Tb) {
        let Eb = Math.atan2(bb.z, bb.x);
        const Yb = Math.acos(bb.y);
        for (; Eb < -Math.PI;) Eb += 2 * Math.PI;
        for (; Eb > Math.PI;) Eb -= 2 * Math.PI;
        let Bb = Eb / Math.PI;
        const eb = Yb / Math.PI;
        Bb = .5 * Bb + .5;
        let vb = Math.round(Bb * Ub);
        vb < 0 ? vb = 0 : vb >= Ub && (vb = Ub - 1);
        let Lb = Math.round(eb * Ab);
        Lb < 0 ? Lb = 0 : Lb >= Ab && (Lb = Ab - 1);
        const Pb = Tb ? Ab - Lb - 1 : Lb;
        return {
          r: ab[Pb * Ub * Mb + vb * Mb + 0],
          g: ab[Pb * Ub * Mb + vb * Mb + 1],
          b: ab[Pb * Ub * Mb + vb * Mb + 2]
        }
      }
    }

    function Tb(bb, ab, Ub, Ab, Mb, Tb) {
      Mb > 0 ? (Mb = function(bb, ab) {
        return ab > 1023 ? bb * Math.pow(2, 1023) * Math.pow(2, ab - 1023) : ab < -1074 ? bb * Math.pow(2, -1074) * Math.pow(2, ab + 1074) : bb * Math.pow(2, ab)
      }(1, Mb - 136), bb[Tb + 0] = ab * Mb, bb[Tb + 1] = Ub * Mb, bb[Tb + 2] = Ab * Mb) : (bb[Tb + 0] = 0, bb[Tb + 1] = 0, bb[Tb + 2] = 0)
    }

    function Eb(bb, ab) {
      let Ub, Ab = "";
      for (let Mb = ab; Mb < bb.length - ab && (Ub = String.fromCharCode(bb[Mb]), "\n" != Ub); Mb++) Ab += Ub;
      return Ab
    }

    function Yb(bb) {
      let ab = Eb(bb, 0);
      if ("#" != ab[0] || "?" != ab[1]) throw "Bad HDR Format.";
      let Ub = !1,
        Ab = !1,
        Mb = 0;
      do {
        Mb += ab.length + 1, ab = Eb(bb, Mb), "FORMAT=32-bit_rle_rgbe" == ab ? Ab = !0 : 0 == ab.length && (Ub = !0)
      } while (!Ub);
      if (!Ab) throw "HDR Bad header format, unsupported FORMAT";
      Mb += ab.length + 1, ab = Eb(bb, Mb);
      const Tb = /^-Y (.*) \+X (.*)$/g.exec(ab);
      if (!Tb || Tb.length < 3) throw "HDR Bad header format, no size";
      const Yb = parseInt(Tb[2]),
        Bb = parseInt(Tb[1]);
      if (Yb < 8 || Yb > 32767) throw "HDR Bad header format, unsupported size";
      return Mb += ab.length + 1, {
        height: Bb,
        width: Yb,
        dataPosition: Mb
      }
    }

    function Bb(bb, ab) {
      return function(bb, ab) {
        let Ub = ab.height;
        const Ab = ab.width;
        let Mb, Eb, Yb, Bb, vb, Lb, Pb, Xb, jb = ab.dataPosition;
        const Rb = new ArrayBuffer(4 * Ab),
          kb = new Uint8Array(Rb),
          yb = new ArrayBuffer(ab.width * ab.height * 4 * 3),
          Zb = new Float32Array(yb);
        for (; Ub > 0;) {
          if (Mb = bb[jb++], Eb = bb[jb++], Yb = bb[jb++], Bb = bb[jb++], 2 != Mb || 2 != Eb || 128 & Yb || ab.width < 8 || ab.width > 32767) return eb(bb, ab);
          if ((Yb << 8 | Bb) != Ab) throw "HDR Bad header format, wrong scan line width";
          for (Lb = 0, Xb = 0; Xb < 4; Xb++)
            for (Pb = (Xb + 1) * Ab; Lb < Pb;)
              if (Mb = bb[jb++], Eb = bb[jb++], Mb > 128) {
                if (vb = Mb - 128, 0 == vb || vb > Pb - Lb) throw "HDR Bad Format, bad scanline data (run)";
                for (; vb-- > 0;) kb[Lb++] = Eb
              } else {
                if (vb = Mb, 0 == vb || vb > Pb - Lb) throw "HDR Bad Format, bad scanline data (non-run)";
                if (kb[Lb++] = Eb, --vb > 0)
                  for (let ab = 0; ab < vb; ab++) kb[Lb++] = bb[jb++]
              } for (Xb = 0; Xb < Ab; Xb++) Mb = kb[Xb], Eb = kb[Xb + Ab], Yb = kb[Xb + 2 * Ab], Bb = kb[Xb + 3 * Ab], Tb(Zb, Mb, Eb, Yb, Bb, (ab.height - Ub) * Ab * 3 + 3 * Xb);
          Ub--
        }
        return Zb
      }(bb, ab)
    }

    function eb(bb, ab) {
      let Ub = ab.height;
      const Ab = ab.width;
      let Mb, Eb, Yb, Bb, eb, vb = ab.dataPosition;
      const Lb = new ArrayBuffer(ab.width * ab.height * 4 * 3),
        Pb = new Float32Array(Lb);
      for (; Ub > 0;) {
        for (eb = 0; eb < ab.width; eb++) Mb = bb[vb++], Eb = bb[vb++], Yb = bb[vb++], Bb = bb[vb++], Tb(Pb, Mb, Eb, Yb, Bb, (ab.height - Ub) * Ab * 3 + 3 * eb);
        Ub--
      }
      return Pb
    }
    Mb.FACE_LEFT = [new Ab.m(-1, -1, -1), new Ab.m(1, -1, -1), new Ab.m(-1, 1, -1), new Ab.m(1, 1, -1)], Mb.FACE_RIGHT = [new Ab.m(1, -1, 1), new Ab.m(-1, -1, 1), new Ab.m(1, 1, 1), new Ab.m(-1, 1, 1)], Mb.FACE_FRONT = [new Ab.m(1, -1, -1), new Ab.m(1, -1, 1), new Ab.m(1, 1, -1), new Ab.m(1, 1, 1)], Mb.FACE_BACK = [new Ab.m(-1, -1, 1), new Ab.m(-1, -1, -1), new Ab.m(-1, 1, 1), new Ab.m(-1, 1, -1)], Mb.FACE_DOWN = [new Ab.m(1, 1, -1), new Ab.m(1, 1, 1), new Ab.m(-1, 1, -1), new Ab.m(-1, 1, 1)], Mb.FACE_UP = [new Ab.m(-1, -1, -1), new Ab.m(-1, -1, 1), new Ab.m(1, -1, -1), new Ab.m(1, -1, 1)];
    class vb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(bb, ab, Ub) {
        const Ab = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength),
          Mb = Yb(Ab),
          Tb = Bb(Ab, Mb),
          Eb = Mb.width * Mb.height,
          eb = new Float32Array(4 * Eb);
        for (let Yb = 0; Yb < Eb; Yb += 1) eb[4 * Yb] = Tb[3 * Yb], eb[4 * Yb + 1] = Tb[3 * Yb + 1], eb[4 * Yb + 2] = Tb[3 * Yb + 2], eb[4 * Yb + 3] = 1;
        Ub(Mb.width, Mb.height, ab.generateMipMaps, !1, (() => {
          const bb = ab.vj();
          ab.type = 1, ab.format = 5, ab._gammaSpace = !1, bb._uploadDataToTextureDirectly(ab, eb)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);