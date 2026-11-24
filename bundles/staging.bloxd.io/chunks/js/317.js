export const id = 317;
export const ids = [317];
export const modules = {
  41872: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      _HDRTextureLoader: () => nB
    });
    var TB = ZB(37120);
    class JB {
      static ConvertPanoramaToCubemap(BB, IB, ZB, TB) {
        let JB, oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          GB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!BB) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (BB.length != IB * ZB * 3) {
          if (BB.length != IB * ZB * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          JB = 4
        } else JB = 3;
        return {
          front: this.CreateCubemapTexture(TB, this.FACE_FRONT, BB, IB, ZB, oB, GB, JB),
          back: this.CreateCubemapTexture(TB, this.FACE_BACK, BB, IB, ZB, oB, GB, JB),
          left: this.CreateCubemapTexture(TB, this.FACE_LEFT, BB, IB, ZB, oB, GB, JB),
          right: this.CreateCubemapTexture(TB, this.FACE_RIGHT, BB, IB, ZB, oB, GB, JB),
          up: this.CreateCubemapTexture(TB, this.FACE_UP, BB, IB, ZB, oB, GB, JB),
          down: this.CreateCubemapTexture(TB, this.FACE_DOWN, BB, IB, ZB, oB, GB, JB),
          size: TB,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(BB, IB, ZB, TB, JB, oB, GB, vB) {
        const kB = new ArrayBuffer(BB * BB * 4 * 3),
          cB = new Float32Array(kB),
          nB = oB ? Math.max(1, Math.round(TB / 4 / BB)) : 1,
          hB = 1 / nB,
          zB = hB * hB,
          FB = IB[1].subtract(IB[0]).scale(hB / BB),
          NB = IB[3].subtract(IB[2]).scale(hB / BB),
          gB = 1 / BB;
        let qB = 0;
        for (let yB = 0; yB < BB; yB++)
          for (let oB = 0; oB < nB; oB++) {
            let oB = IB[0],
              kB = IB[2];
            for (let IB = 0; IB < BB; IB++)
              for (let hB = 0; hB < nB; hB++) {
                const nB = kB.subtract(oB).scale(qB).add(oB);
                nB.normalize();
                const hB = this.CalcProjectionSpherical(nB, ZB, TB, JB, vB, GB);
                cB[yB * BB * 3 + 3 * IB + 0] += hB.r * zB, cB[yB * BB * 3 + 3 * IB + 1] += hB.g * zB, cB[yB * BB * 3 + 3 * IB + 2] += hB.b * zB, oB = oB.add(FB), kB = kB.add(NB)
              }
            qB += gB * hB
          }
        return cB
      }
      static CalcProjectionSpherical(BB, IB, ZB, TB, JB, oB) {
        let GB = Math.atan2(BB.z, BB.x);
        const vB = Math.acos(BB.y);
        for (; GB < -Math.PI;) GB += 2 * Math.PI;
        for (; GB > Math.PI;) GB -= 2 * Math.PI;
        let kB = GB / Math.PI;
        const cB = vB / Math.PI;
        kB = .5 * kB + .5;
        let nB = Math.round(kB * ZB);
        nB < 0 ? nB = 0 : nB >= ZB && (nB = ZB - 1);
        let hB = Math.round(cB * TB);
        hB < 0 ? hB = 0 : hB >= TB && (hB = TB - 1);
        const zB = oB ? TB - hB - 1 : hB;
        return {
          r: IB[zB * ZB * JB + nB * JB + 0],
          g: IB[zB * ZB * JB + nB * JB + 1],
          b: IB[zB * ZB * JB + nB * JB + 2]
        }
      }
    }

    function oB(BB, IB, ZB, TB, JB, oB) {
      JB > 0 ? (JB = function(BB, IB) {
        return IB > 1023 ? BB * Math.pow(2, 1023) * Math.pow(2, IB - 1023) : IB < -1074 ? BB * Math.pow(2, -1074) * Math.pow(2, IB + 1074) : BB * Math.pow(2, IB)
      }(1, JB - 136), BB[oB + 0] = IB * JB, BB[oB + 1] = ZB * JB, BB[oB + 2] = TB * JB) : (BB[oB + 0] = 0, BB[oB + 1] = 0, BB[oB + 2] = 0)
    }

    function GB(BB, IB) {
      let ZB, TB = "";
      for (let JB = IB; JB < BB.length - IB && (ZB = String.fromCharCode(BB[JB]), "\n" != ZB); JB++) TB += ZB;
      return TB
    }

    function vB(BB) {
      let IB = GB(BB, 0);
      if ("#" != IB[0] || "?" != IB[1]) throw "Bad HDR Format.";
      let ZB = !1,
        TB = !1,
        JB = 0;
      do {
        JB += IB.length + 1, IB = GB(BB, JB), "FORMAT=32-bit_rle_rgbe" == IB ? TB = !0 : 0 == IB.length && (ZB = !0)
      } while (!ZB);
      if (!TB) throw "HDR Bad header format, unsupported FORMAT";
      JB += IB.length + 1, IB = GB(BB, JB);
      const oB = /^-Y (.*) \+X (.*)$/g.exec(IB);
      if (!oB || oB.length < 3) throw "HDR Bad header format, no size";
      const vB = parseInt(oB[2]),
        kB = parseInt(oB[1]);
      if (vB < 8 || vB > 32767) throw "HDR Bad header format, unsupported size";
      return JB += IB.length + 1, {
        height: kB,
        width: vB,
        dataPosition: JB
      }
    }

    function kB(BB, IB) {
      return function(BB, IB) {
        let ZB = IB.height;
        const TB = IB.width;
        let JB, GB, vB, kB, nB, hB, zB, FB, NB = IB.dataPosition;
        const gB = new ArrayBuffer(4 * TB),
          qB = new Uint8Array(gB),
          yB = new ArrayBuffer(IB.width * IB.height * 4 * 3),
          UB = new Float32Array(yB);
        for (; ZB > 0;) {
          if (JB = BB[NB++], GB = BB[NB++], vB = BB[NB++], kB = BB[NB++], 2 != JB || 2 != GB || 128 & vB || IB.width < 8 || IB.width > 32767) return cB(BB, IB);
          if ((vB << 8 | kB) != TB) throw "HDR Bad header format, wrong scan line width";
          for (hB = 0, FB = 0; FB < 4; FB++)
            for (zB = (FB + 1) * TB; hB < zB;)
              if (JB = BB[NB++], GB = BB[NB++], JB > 128) {
                if (nB = JB - 128, 0 == nB || nB > zB - hB) throw "HDR Bad Format, bad scanline data (run)";
                for (; nB-- > 0;) qB[hB++] = GB
              } else {
                if (nB = JB, 0 == nB || nB > zB - hB) throw "HDR Bad Format, bad scanline data (non-run)";
                if (qB[hB++] = GB, --nB > 0)
                  for (let IB = 0; IB < nB; IB++) qB[hB++] = BB[NB++]
              } for (FB = 0; FB < TB; FB++) JB = qB[FB], GB = qB[FB + TB], vB = qB[FB + 2 * TB], kB = qB[FB + 3 * TB], oB(UB, JB, GB, vB, kB, (IB.height - ZB) * TB * 3 + 3 * FB);
          ZB--
        }
        return UB
      }(BB, IB)
    }

    function cB(BB, IB) {
      let ZB = IB.height;
      const TB = IB.width;
      let JB, GB, vB, kB, cB, nB = IB.dataPosition;
      const hB = new ArrayBuffer(IB.width * IB.height * 4 * 3),
        zB = new Float32Array(hB);
      for (; ZB > 0;) {
        for (cB = 0; cB < IB.width; cB++) JB = BB[nB++], GB = BB[nB++], vB = BB[nB++], kB = BB[nB++], oB(zB, JB, GB, vB, kB, (IB.height - ZB) * TB * 3 + 3 * cB);
        ZB--
      }
      return zB
    }
    JB.FACE_LEFT = [new TB.s(-1, -1, -1), new TB.s(1, -1, -1), new TB.s(-1, 1, -1), new TB.s(1, 1, -1)], JB.FACE_RIGHT = [new TB.s(1, -1, 1), new TB.s(-1, -1, 1), new TB.s(1, 1, 1), new TB.s(-1, 1, 1)], JB.FACE_FRONT = [new TB.s(1, -1, -1), new TB.s(1, -1, 1), new TB.s(1, 1, -1), new TB.s(1, 1, 1)], JB.FACE_BACK = [new TB.s(-1, -1, 1), new TB.s(-1, -1, -1), new TB.s(-1, 1, 1), new TB.s(-1, 1, -1)], JB.FACE_DOWN = [new TB.s(1, 1, -1), new TB.s(1, 1, 1), new TB.s(-1, 1, -1), new TB.s(-1, 1, 1)], JB.FACE_UP = [new TB.s(-1, -1, -1), new TB.s(-1, -1, 1), new TB.s(1, -1, -1), new TB.s(1, -1, 1)];
    class nB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(BB, IB, ZB) {
        const TB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength),
          JB = vB(TB),
          oB = kB(TB, JB),
          GB = JB.width * JB.height,
          cB = new Float32Array(4 * GB);
        for (let vB = 0; vB < GB; vB += 1) cB[4 * vB] = oB[3 * vB], cB[4 * vB + 1] = oB[3 * vB + 1], cB[4 * vB + 2] = oB[3 * vB + 2], cB[4 * vB + 3] = 1;
        ZB(JB.width, JB.height, IB.generateMipMaps, !1, (() => {
          const BB = IB.PN();
          IB.type = 1, IB.format = 5, IB._gammaSpace = !1, BB._uploadDataToTextureDirectly(IB, cB)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);