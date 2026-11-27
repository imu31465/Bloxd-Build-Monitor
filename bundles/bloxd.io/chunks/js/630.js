export const id = 630;
export const ids = [630];
export const modules = {
  53869: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      _HDRTextureLoader: () => VR
    });
    var yR = GR(38204);
    class tR {
      static ConvertPanoramaToCubemap(RR, JR, GR, yR) {
        let tR, uR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ZR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!RR) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (RR.length != JR * GR * 3) {
          if (RR.length != JR * GR * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          tR = 4
        } else tR = 3;
        return {
          front: this.CreateCubemapTexture(yR, this.FACE_FRONT, RR, JR, GR, uR, ZR, tR),
          back: this.CreateCubemapTexture(yR, this.FACE_BACK, RR, JR, GR, uR, ZR, tR),
          left: this.CreateCubemapTexture(yR, this.FACE_LEFT, RR, JR, GR, uR, ZR, tR),
          right: this.CreateCubemapTexture(yR, this.FACE_RIGHT, RR, JR, GR, uR, ZR, tR),
          up: this.CreateCubemapTexture(yR, this.FACE_UP, RR, JR, GR, uR, ZR, tR),
          down: this.CreateCubemapTexture(yR, this.FACE_DOWN, RR, JR, GR, uR, ZR, tR),
          size: yR,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(RR, JR, GR, yR, tR, uR, ZR, qR) {
        const iR = new ArrayBuffer(RR * RR * 4 * 3),
          fR = new Float32Array(iR),
          VR = uR ? Math.max(1, Math.round(yR / 4 / RR)) : 1,
          KR = 1 / VR,
          wR = KR * KR,
          rR = JR[1].subtract(JR[0]).scale(KR / RR),
          eR = JR[3].subtract(JR[2]).scale(KR / RR),
          aR = 1 / RR;
        let LR = 0;
        for (let nR = 0; nR < RR; nR++)
          for (let uR = 0; uR < VR; uR++) {
            let uR = JR[0],
              iR = JR[2];
            for (let JR = 0; JR < RR; JR++)
              for (let KR = 0; KR < VR; KR++) {
                const VR = iR.subtract(uR).scale(LR).add(uR);
                VR.normalize();
                const KR = this.CalcProjectionSpherical(VR, GR, yR, tR, qR, ZR);
                fR[nR * RR * 3 + 3 * JR + 0] += KR.r * wR, fR[nR * RR * 3 + 3 * JR + 1] += KR.g * wR, fR[nR * RR * 3 + 3 * JR + 2] += KR.b * wR, uR = uR.add(rR), iR = iR.add(eR)
              }
            LR += aR * KR
          }
        return fR
      }
      static CalcProjectionSpherical(RR, JR, GR, yR, tR, uR) {
        let ZR = Math.atan2(RR.z, RR.x);
        const qR = Math.acos(RR.y);
        for (; ZR < -Math.PI;) ZR += 2 * Math.PI;
        for (; ZR > Math.PI;) ZR -= 2 * Math.PI;
        let iR = ZR / Math.PI;
        const fR = qR / Math.PI;
        iR = .5 * iR + .5;
        let VR = Math.round(iR * GR);
        VR < 0 ? VR = 0 : VR >= GR && (VR = GR - 1);
        let KR = Math.round(fR * yR);
        KR < 0 ? KR = 0 : KR >= yR && (KR = yR - 1);
        const wR = uR ? yR - KR - 1 : KR;
        return {
          r: JR[wR * GR * tR + VR * tR + 0],
          g: JR[wR * GR * tR + VR * tR + 1],
          b: JR[wR * GR * tR + VR * tR + 2]
        }
      }
    }

    function uR(RR, JR, GR, yR, tR, uR) {
      tR > 0 ? (tR = function(RR, JR) {
        return JR > 1023 ? RR * Math.pow(2, 1023) * Math.pow(2, JR - 1023) : JR < -1074 ? RR * Math.pow(2, -1074) * Math.pow(2, JR + 1074) : RR * Math.pow(2, JR)
      }(1, tR - 136), RR[uR + 0] = JR * tR, RR[uR + 1] = GR * tR, RR[uR + 2] = yR * tR) : (RR[uR + 0] = 0, RR[uR + 1] = 0, RR[uR + 2] = 0)
    }

    function ZR(RR, JR) {
      let GR, yR = "";
      for (let tR = JR; tR < RR.length - JR && (GR = String.fromCharCode(RR[tR]), "\n" != GR); tR++) yR += GR;
      return yR
    }

    function qR(RR) {
      let JR = ZR(RR, 0);
      if ("#" != JR[0] || "?" != JR[1]) throw "Bad HDR Format.";
      let GR = !1,
        yR = !1,
        tR = 0;
      do {
        tR += JR.length + 1, JR = ZR(RR, tR), "FORMAT=32-bit_rle_rgbe" == JR ? yR = !0 : 0 == JR.length && (GR = !0)
      } while (!GR);
      if (!yR) throw "HDR Bad header format, unsupported FORMAT";
      tR += JR.length + 1, JR = ZR(RR, tR);
      const uR = /^-Y (.*) \+X (.*)$/g.exec(JR);
      if (!uR || uR.length < 3) throw "HDR Bad header format, no size";
      const qR = parseInt(uR[2]),
        iR = parseInt(uR[1]);
      if (qR < 8 || qR > 32767) throw "HDR Bad header format, unsupported size";
      return tR += JR.length + 1, {
        height: iR,
        width: qR,
        dataPosition: tR
      }
    }

    function iR(RR, JR) {
      return function(RR, JR) {
        let GR = JR.height;
        const yR = JR.width;
        let tR, ZR, qR, iR, VR, KR, wR, rR, eR = JR.dataPosition;
        const aR = new ArrayBuffer(4 * yR),
          LR = new Uint8Array(aR),
          nR = new ArrayBuffer(JR.width * JR.height * 4 * 3),
          UR = new Float32Array(nR);
        for (; GR > 0;) {
          if (tR = RR[eR++], ZR = RR[eR++], qR = RR[eR++], iR = RR[eR++], 2 != tR || 2 != ZR || 128 & qR || JR.width < 8 || JR.width > 32767) return fR(RR, JR);
          if ((qR << 8 | iR) != yR) throw "HDR Bad header format, wrong scan line width";
          for (KR = 0, rR = 0; rR < 4; rR++)
            for (wR = (rR + 1) * yR; KR < wR;)
              if (tR = RR[eR++], ZR = RR[eR++], tR > 128) {
                if (VR = tR - 128, 0 == VR || VR > wR - KR) throw "HDR Bad Format, bad scanline data (run)";
                for (; VR-- > 0;) LR[KR++] = ZR
              } else {
                if (VR = tR, 0 == VR || VR > wR - KR) throw "HDR Bad Format, bad scanline data (non-run)";
                if (LR[KR++] = ZR, --VR > 0)
                  for (let JR = 0; JR < VR; JR++) LR[KR++] = RR[eR++]
              } for (rR = 0; rR < yR; rR++) tR = LR[rR], ZR = LR[rR + yR], qR = LR[rR + 2 * yR], iR = LR[rR + 3 * yR], uR(UR, tR, ZR, qR, iR, (JR.height - GR) * yR * 3 + 3 * rR);
          GR--
        }
        return UR
      }(RR, JR)
    }

    function fR(RR, JR) {
      let GR = JR.height;
      const yR = JR.width;
      let tR, ZR, qR, iR, fR, VR = JR.dataPosition;
      const KR = new ArrayBuffer(JR.width * JR.height * 4 * 3),
        wR = new Float32Array(KR);
      for (; GR > 0;) {
        for (fR = 0; fR < JR.width; fR++) tR = RR[VR++], ZR = RR[VR++], qR = RR[VR++], iR = RR[VR++], uR(wR, tR, ZR, qR, iR, (JR.height - GR) * yR * 3 + 3 * fR);
        GR--
      }
      return wR
    }
    tR.FACE_LEFT = [new yR.r(-1, -1, -1), new yR.r(1, -1, -1), new yR.r(-1, 1, -1), new yR.r(1, 1, -1)], tR.FACE_RIGHT = [new yR.r(1, -1, 1), new yR.r(-1, -1, 1), new yR.r(1, 1, 1), new yR.r(-1, 1, 1)], tR.FACE_FRONT = [new yR.r(1, -1, -1), new yR.r(1, -1, 1), new yR.r(1, 1, -1), new yR.r(1, 1, 1)], tR.FACE_BACK = [new yR.r(-1, -1, 1), new yR.r(-1, -1, -1), new yR.r(-1, 1, 1), new yR.r(-1, 1, -1)], tR.FACE_DOWN = [new yR.r(1, 1, -1), new yR.r(1, 1, 1), new yR.r(-1, 1, -1), new yR.r(-1, 1, 1)], tR.FACE_UP = [new yR.r(-1, -1, -1), new yR.r(-1, -1, 1), new yR.r(1, -1, -1), new yR.r(1, -1, 1)];
    class VR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(RR, JR, GR) {
        const yR = new Uint8Array(RR.buffer, RR.byteOffset, RR.byteLength),
          tR = qR(yR),
          uR = iR(yR, tR),
          ZR = tR.width * tR.height,
          fR = new Float32Array(4 * ZR);
        for (let qR = 0; qR < ZR; qR += 1) fR[4 * qR] = uR[3 * qR], fR[4 * qR + 1] = uR[3 * qR + 1], fR[4 * qR + 2] = uR[3 * qR + 2], fR[4 * qR + 3] = 1;
        GR(tR.width, tR.height, JR.generateMipMaps, !1, (() => {
          const RR = JR.ke();
          JR.type = 1, JR.format = 5, JR._gammaSpace = !1, RR._uploadDataToTextureDirectly(JR, fR)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);