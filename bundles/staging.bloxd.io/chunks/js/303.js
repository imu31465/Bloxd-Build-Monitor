export const id = 303;
export const ids = [303];
export const modules = {
  41286: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      _HDRTextureLoader: () => ab
    });
    var Bb = hb(36727);
    class Ob {
      static ConvertPanoramaToCubemap(bb, ub, hb, Bb) {
        let Ob, Gb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ub = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!bb) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (bb.length != ub * hb * 3) {
          if (bb.length != ub * hb * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Ob = 4
        } else Ob = 3;
        return {
          front: this.CreateCubemapTexture(Bb, this.FACE_FRONT, bb, ub, hb, Gb, Ub, Ob),
          back: this.CreateCubemapTexture(Bb, this.FACE_BACK, bb, ub, hb, Gb, Ub, Ob),
          left: this.CreateCubemapTexture(Bb, this.FACE_LEFT, bb, ub, hb, Gb, Ub, Ob),
          right: this.CreateCubemapTexture(Bb, this.FACE_RIGHT, bb, ub, hb, Gb, Ub, Ob),
          up: this.CreateCubemapTexture(Bb, this.FACE_UP, bb, ub, hb, Gb, Ub, Ob),
          down: this.CreateCubemapTexture(Bb, this.FACE_DOWN, bb, ub, hb, Gb, Ub, Ob),
          size: Bb,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        const Yb = new ArrayBuffer(bb * bb * 4 * 3),
          Sb = new Float32Array(Yb),
          ab = Gb ? Math.max(1, Math.round(Bb / 4 / bb)) : 1,
          Hb = 1 / ab,
          wb = Hb * Hb,
          Zb = ub[1].subtract(ub[0]).scale(Hb / bb),
          Xb = ub[3].subtract(ub[2]).scale(Hb / bb),
          pb = 1 / bb;
        let ob = 0;
        for (let Ab = 0; Ab < bb; Ab++)
          for (let Gb = 0; Gb < ab; Gb++) {
            let Gb = ub[0],
              Yb = ub[2];
            for (let ub = 0; ub < bb; ub++)
              for (let Hb = 0; Hb < ab; Hb++) {
                const ab = Yb.subtract(Gb).scale(ob).add(Gb);
                ab.normalize();
                const Hb = this.CalcProjectionSpherical(ab, hb, Bb, Ob, Lb, Ub);
                Sb[Ab * bb * 3 + 3 * ub + 0] += Hb.r * wb, Sb[Ab * bb * 3 + 3 * ub + 1] += Hb.g * wb, Sb[Ab * bb * 3 + 3 * ub + 2] += Hb.b * wb, Gb = Gb.add(Zb), Yb = Yb.add(Xb)
              }
            ob += pb * Hb
          }
        return Sb
      }
      static CalcProjectionSpherical(bb, ub, hb, Bb, Ob, Gb) {
        let Ub = Math.atan2(bb.z, bb.x);
        const Lb = Math.acos(bb.y);
        for (; Ub < -Math.PI;) Ub += 2 * Math.PI;
        for (; Ub > Math.PI;) Ub -= 2 * Math.PI;
        let Yb = Ub / Math.PI;
        const Sb = Lb / Math.PI;
        Yb = .5 * Yb + .5;
        let ab = Math.round(Yb * hb);
        ab < 0 ? ab = 0 : ab >= hb && (ab = hb - 1);
        let Hb = Math.round(Sb * Bb);
        Hb < 0 ? Hb = 0 : Hb >= Bb && (Hb = Bb - 1);
        const wb = Gb ? Bb - Hb - 1 : Hb;
        return {
          r: ub[wb * hb * Ob + ab * Ob + 0],
          g: ub[wb * hb * Ob + ab * Ob + 1],
          b: ub[wb * hb * Ob + ab * Ob + 2]
        }
      }
    }

    function Gb(bb, ub, hb, Bb, Ob, Gb) {
      Ob > 0 ? (Ob = function(bb, ub) {
        return ub > 1023 ? bb * Math.pow(2, 1023) * Math.pow(2, ub - 1023) : ub < -1074 ? bb * Math.pow(2, -1074) * Math.pow(2, ub + 1074) : bb * Math.pow(2, ub)
      }(1, Ob - 136), bb[Gb + 0] = ub * Ob, bb[Gb + 1] = hb * Ob, bb[Gb + 2] = Bb * Ob) : (bb[Gb + 0] = 0, bb[Gb + 1] = 0, bb[Gb + 2] = 0)
    }

    function Ub(bb, ub) {
      let hb, Bb = "";
      for (let Ob = ub; Ob < bb.length - ub && (hb = String.fromCharCode(bb[Ob]), "\n" != hb); Ob++) Bb += hb;
      return Bb
    }

    function Lb(bb) {
      let ub = Ub(bb, 0);
      if ("#" != ub[0] || "?" != ub[1]) throw "Bad HDR Format.";
      let hb = !1,
        Bb = !1,
        Ob = 0;
      do {
        Ob += ub.length + 1, ub = Ub(bb, Ob), "FORMAT=32-bit_rle_rgbe" == ub ? Bb = !0 : 0 == ub.length && (hb = !0)
      } while (!hb);
      if (!Bb) throw "HDR Bad header format, unsupported FORMAT";
      Ob += ub.length + 1, ub = Ub(bb, Ob);
      const Gb = /^-Y (.*) \+X (.*)$/g.exec(ub);
      if (!Gb || Gb.length < 3) throw "HDR Bad header format, no size";
      const Lb = parseInt(Gb[2]),
        Yb = parseInt(Gb[1]);
      if (Lb < 8 || Lb > 32767) throw "HDR Bad header format, unsupported size";
      return Ob += ub.length + 1, {
        height: Yb,
        width: Lb,
        dataPosition: Ob
      }
    }

    function Yb(bb, ub) {
      return function(bb, ub) {
        let hb = ub.height;
        const Bb = ub.width;
        let Ob, Ub, Lb, Yb, ab, Hb, wb, Zb, Xb = ub.dataPosition;
        const pb = new ArrayBuffer(4 * Bb),
          ob = new Uint8Array(pb),
          Ab = new ArrayBuffer(ub.width * ub.height * 4 * 3),
          lb = new Float32Array(Ab);
        for (; hb > 0;) {
          if (Ob = bb[Xb++], Ub = bb[Xb++], Lb = bb[Xb++], Yb = bb[Xb++], 2 != Ob || 2 != Ub || 128 & Lb || ub.width < 8 || ub.width > 32767) return Sb(bb, ub);
          if ((Lb << 8 | Yb) != Bb) throw "HDR Bad header format, wrong scan line width";
          for (Hb = 0, Zb = 0; Zb < 4; Zb++)
            for (wb = (Zb + 1) * Bb; Hb < wb;)
              if (Ob = bb[Xb++], Ub = bb[Xb++], Ob > 128) {
                if (ab = Ob - 128, 0 == ab || ab > wb - Hb) throw "HDR Bad Format, bad scanline data (run)";
                for (; ab-- > 0;) ob[Hb++] = Ub
              } else {
                if (ab = Ob, 0 == ab || ab > wb - Hb) throw "HDR Bad Format, bad scanline data (non-run)";
                if (ob[Hb++] = Ub, --ab > 0)
                  for (let ub = 0; ub < ab; ub++) ob[Hb++] = bb[Xb++]
              } for (Zb = 0; Zb < Bb; Zb++) Ob = ob[Zb], Ub = ob[Zb + Bb], Lb = ob[Zb + 2 * Bb], Yb = ob[Zb + 3 * Bb], Gb(lb, Ob, Ub, Lb, Yb, (ub.height - hb) * Bb * 3 + 3 * Zb);
          hb--
        }
        return lb
      }(bb, ub)
    }

    function Sb(bb, ub) {
      let hb = ub.height;
      const Bb = ub.width;
      let Ob, Ub, Lb, Yb, Sb, ab = ub.dataPosition;
      const Hb = new ArrayBuffer(ub.width * ub.height * 4 * 3),
        wb = new Float32Array(Hb);
      for (; hb > 0;) {
        for (Sb = 0; Sb < ub.width; Sb++) Ob = bb[ab++], Ub = bb[ab++], Lb = bb[ab++], Yb = bb[ab++], Gb(wb, Ob, Ub, Lb, Yb, (ub.height - hb) * Bb * 3 + 3 * Sb);
        hb--
      }
      return wb
    }
    Ob.FACE_LEFT = [new Bb.q(-1, -1, -1), new Bb.q(1, -1, -1), new Bb.q(-1, 1, -1), new Bb.q(1, 1, -1)], Ob.FACE_RIGHT = [new Bb.q(1, -1, 1), new Bb.q(-1, -1, 1), new Bb.q(1, 1, 1), new Bb.q(-1, 1, 1)], Ob.FACE_FRONT = [new Bb.q(1, -1, -1), new Bb.q(1, -1, 1), new Bb.q(1, 1, -1), new Bb.q(1, 1, 1)], Ob.FACE_BACK = [new Bb.q(-1, -1, 1), new Bb.q(-1, -1, -1), new Bb.q(-1, 1, 1), new Bb.q(-1, 1, -1)], Ob.FACE_DOWN = [new Bb.q(1, 1, -1), new Bb.q(1, 1, 1), new Bb.q(-1, 1, -1), new Bb.q(-1, 1, 1)], Ob.FACE_UP = [new Bb.q(-1, -1, -1), new Bb.q(-1, -1, 1), new Bb.q(1, -1, -1), new Bb.q(1, -1, 1)];
    class ab {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(bb, ub, hb) {
        const Bb = new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength),
          Ob = Lb(Bb),
          Gb = Yb(Bb, Ob),
          Ub = Ob.width * Ob.height,
          Sb = new Float32Array(4 * Ub);
        for (let Lb = 0; Lb < Ub; Lb += 1) Sb[4 * Lb] = Gb[3 * Lb], Sb[4 * Lb + 1] = Gb[3 * Lb + 1], Sb[4 * Lb + 2] = Gb[3 * Lb + 2], Sb[4 * Lb + 3] = 1;
        hb(Ob.width, Ob.height, ub.generateMipMaps, !1, (() => {
          const bb = ub.UX();
          ub.type = 1, ub.format = 5, ub._gammaSpace = !1, bb._uploadDataToTextureDirectly(ub, Sb)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);