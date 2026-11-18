export const id = 292;
export const ids = [292];
export const modules = {
  40545: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      _HDRTextureLoader: () => YJ
    });
    var FJ = ZJ(36174);
    class UJ {
      static ConvertPanoramaToCubemap(JJ, cJ, ZJ, FJ) {
        let UJ, eJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          XJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!JJ) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (JJ.length != cJ * ZJ * 3) {
          if (JJ.length != cJ * ZJ * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          UJ = 4
        } else UJ = 3;
        return {
          front: this.CreateCubemapTexture(FJ, this.FACE_FRONT, JJ, cJ, ZJ, eJ, XJ, UJ),
          back: this.CreateCubemapTexture(FJ, this.FACE_BACK, JJ, cJ, ZJ, eJ, XJ, UJ),
          left: this.CreateCubemapTexture(FJ, this.FACE_LEFT, JJ, cJ, ZJ, eJ, XJ, UJ),
          right: this.CreateCubemapTexture(FJ, this.FACE_RIGHT, JJ, cJ, ZJ, eJ, XJ, UJ),
          up: this.CreateCubemapTexture(FJ, this.FACE_UP, JJ, cJ, ZJ, eJ, XJ, UJ),
          down: this.CreateCubemapTexture(FJ, this.FACE_DOWN, JJ, cJ, ZJ, eJ, XJ, UJ),
          size: FJ,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        const qJ = new ArrayBuffer(JJ * JJ * 4 * 3),
          jJ = new Float32Array(qJ),
          YJ = eJ ? Math.max(1, Math.round(FJ / 4 / JJ)) : 1,
          hJ = 1 / YJ,
          DJ = hJ * hJ,
          sJ = cJ[1].subtract(cJ[0]).scale(hJ / JJ),
          nJ = cJ[3].subtract(cJ[2]).scale(hJ / JJ),
          GJ = 1 / JJ;
        let fJ = 0;
        for (let xJ = 0; xJ < JJ; xJ++)
          for (let eJ = 0; eJ < YJ; eJ++) {
            let eJ = cJ[0],
              qJ = cJ[2];
            for (let cJ = 0; cJ < JJ; cJ++)
              for (let hJ = 0; hJ < YJ; hJ++) {
                const YJ = qJ.subtract(eJ).scale(fJ).add(eJ);
                YJ.normalize();
                const hJ = this.CalcProjectionSpherical(YJ, ZJ, FJ, UJ, AJ, XJ);
                jJ[xJ * JJ * 3 + 3 * cJ + 0] += hJ.r * DJ, jJ[xJ * JJ * 3 + 3 * cJ + 1] += hJ.g * DJ, jJ[xJ * JJ * 3 + 3 * cJ + 2] += hJ.b * DJ, eJ = eJ.add(sJ), qJ = qJ.add(nJ)
              }
            fJ += GJ * hJ
          }
        return jJ
      }
      static CalcProjectionSpherical(JJ, cJ, ZJ, FJ, UJ, eJ) {
        let XJ = Math.atan2(JJ.z, JJ.x);
        const AJ = Math.acos(JJ.y);
        for (; XJ < -Math.PI;) XJ += 2 * Math.PI;
        for (; XJ > Math.PI;) XJ -= 2 * Math.PI;
        let qJ = XJ / Math.PI;
        const jJ = AJ / Math.PI;
        qJ = .5 * qJ + .5;
        let YJ = Math.round(qJ * ZJ);
        YJ < 0 ? YJ = 0 : YJ >= ZJ && (YJ = ZJ - 1);
        let hJ = Math.round(jJ * FJ);
        hJ < 0 ? hJ = 0 : hJ >= FJ && (hJ = FJ - 1);
        const DJ = eJ ? FJ - hJ - 1 : hJ;
        return {
          r: cJ[DJ * ZJ * UJ + YJ * UJ + 0],
          g: cJ[DJ * ZJ * UJ + YJ * UJ + 1],
          b: cJ[DJ * ZJ * UJ + YJ * UJ + 2]
        }
      }
    }

    function eJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      UJ > 0 ? (UJ = function(JJ, cJ) {
        return cJ > 1023 ? JJ * Math.pow(2, 1023) * Math.pow(2, cJ - 1023) : cJ < -1074 ? JJ * Math.pow(2, -1074) * Math.pow(2, cJ + 1074) : JJ * Math.pow(2, cJ)
      }(1, UJ - 136), JJ[eJ + 0] = cJ * UJ, JJ[eJ + 1] = ZJ * UJ, JJ[eJ + 2] = FJ * UJ) : (JJ[eJ + 0] = 0, JJ[eJ + 1] = 0, JJ[eJ + 2] = 0)
    }

    function XJ(JJ, cJ) {
      let ZJ, FJ = "";
      for (let UJ = cJ; UJ < JJ.length - cJ && (ZJ = String.fromCharCode(JJ[UJ]), "\n" != ZJ); UJ++) FJ += ZJ;
      return FJ
    }

    function AJ(JJ) {
      let cJ = XJ(JJ, 0);
      if ("#" != cJ[0] || "?" != cJ[1]) throw "Bad HDR Format.";
      let ZJ = !1,
        FJ = !1,
        UJ = 0;
      do {
        UJ += cJ.length + 1, cJ = XJ(JJ, UJ), "FORMAT=32-bit_rle_rgbe" == cJ ? FJ = !0 : 0 == cJ.length && (ZJ = !0)
      } while (!ZJ);
      if (!FJ) throw "HDR Bad header format, unsupported FORMAT";
      UJ += cJ.length + 1, cJ = XJ(JJ, UJ);
      const eJ = /^-Y (.*) \+X (.*)$/g.exec(cJ);
      if (!eJ || eJ.length < 3) throw "HDR Bad header format, no size";
      const AJ = parseInt(eJ[2]),
        qJ = parseInt(eJ[1]);
      if (AJ < 8 || AJ > 32767) throw "HDR Bad header format, unsupported size";
      return UJ += cJ.length + 1, {
        height: qJ,
        width: AJ,
        dataPosition: UJ
      }
    }

    function qJ(JJ, cJ) {
      return function(JJ, cJ) {
        let ZJ = cJ.height;
        const FJ = cJ.width;
        let UJ, XJ, AJ, qJ, YJ, hJ, DJ, sJ, nJ = cJ.dataPosition;
        const GJ = new ArrayBuffer(4 * FJ),
          fJ = new Uint8Array(GJ),
          xJ = new ArrayBuffer(cJ.width * cJ.height * 4 * 3),
          rJ = new Float32Array(xJ);
        for (; ZJ > 0;) {
          if (UJ = JJ[nJ++], XJ = JJ[nJ++], AJ = JJ[nJ++], qJ = JJ[nJ++], 2 != UJ || 2 != XJ || 128 & AJ || cJ.width < 8 || cJ.width > 32767) return jJ(JJ, cJ);
          if ((AJ << 8 | qJ) != FJ) throw "HDR Bad header format, wrong scan line width";
          for (hJ = 0, sJ = 0; sJ < 4; sJ++)
            for (DJ = (sJ + 1) * FJ; hJ < DJ;)
              if (UJ = JJ[nJ++], XJ = JJ[nJ++], UJ > 128) {
                if (YJ = UJ - 128, 0 == YJ || YJ > DJ - hJ) throw "HDR Bad Format, bad scanline data (run)";
                for (; YJ-- > 0;) fJ[hJ++] = XJ
              } else {
                if (YJ = UJ, 0 == YJ || YJ > DJ - hJ) throw "HDR Bad Format, bad scanline data (non-run)";
                if (fJ[hJ++] = XJ, --YJ > 0)
                  for (let cJ = 0; cJ < YJ; cJ++) fJ[hJ++] = JJ[nJ++]
              } for (sJ = 0; sJ < FJ; sJ++) UJ = fJ[sJ], XJ = fJ[sJ + FJ], AJ = fJ[sJ + 2 * FJ], qJ = fJ[sJ + 3 * FJ], eJ(rJ, UJ, XJ, AJ, qJ, (cJ.height - ZJ) * FJ * 3 + 3 * sJ);
          ZJ--
        }
        return rJ
      }(JJ, cJ)
    }

    function jJ(JJ, cJ) {
      let ZJ = cJ.height;
      const FJ = cJ.width;
      let UJ, XJ, AJ, qJ, jJ, YJ = cJ.dataPosition;
      const hJ = new ArrayBuffer(cJ.width * cJ.height * 4 * 3),
        DJ = new Float32Array(hJ);
      for (; ZJ > 0;) {
        for (jJ = 0; jJ < cJ.width; jJ++) UJ = JJ[YJ++], XJ = JJ[YJ++], AJ = JJ[YJ++], qJ = JJ[YJ++], eJ(DJ, UJ, XJ, AJ, qJ, (cJ.height - ZJ) * FJ * 3 + 3 * jJ);
        ZJ--
      }
      return DJ
    }
    UJ.FACE_LEFT = [new FJ.j(-1, -1, -1), new FJ.j(1, -1, -1), new FJ.j(-1, 1, -1), new FJ.j(1, 1, -1)], UJ.FACE_RIGHT = [new FJ.j(1, -1, 1), new FJ.j(-1, -1, 1), new FJ.j(1, 1, 1), new FJ.j(-1, 1, 1)], UJ.FACE_FRONT = [new FJ.j(1, -1, -1), new FJ.j(1, -1, 1), new FJ.j(1, 1, -1), new FJ.j(1, 1, 1)], UJ.FACE_BACK = [new FJ.j(-1, -1, 1), new FJ.j(-1, -1, -1), new FJ.j(-1, 1, 1), new FJ.j(-1, 1, -1)], UJ.FACE_DOWN = [new FJ.j(1, 1, -1), new FJ.j(1, 1, 1), new FJ.j(-1, 1, -1), new FJ.j(-1, 1, 1)], UJ.FACE_UP = [new FJ.j(-1, -1, -1), new FJ.j(-1, -1, 1), new FJ.j(1, -1, -1), new FJ.j(1, -1, 1)];
    class YJ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(JJ, cJ, ZJ) {
        const FJ = new Uint8Array(JJ.buffer, JJ.byteOffset, JJ.byteLength),
          UJ = AJ(FJ),
          eJ = qJ(FJ, UJ),
          XJ = UJ.width * UJ.height,
          jJ = new Float32Array(4 * XJ);
        for (let AJ = 0; AJ < XJ; AJ += 1) jJ[4 * AJ] = eJ[3 * AJ], jJ[4 * AJ + 1] = eJ[3 * AJ + 1], jJ[4 * AJ + 2] = eJ[3 * AJ + 2], jJ[4 * AJ + 3] = 1;
        ZJ(UJ.width, UJ.height, cJ.generateMipMaps, !1, (() => {
          const JJ = cJ.gn();
          cJ.type = 1, cJ.format = 5, cJ._gammaSpace = !1, JJ._uploadDataToTextureDirectly(cJ, jJ)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);