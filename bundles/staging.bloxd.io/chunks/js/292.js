export const id = 292;
export const ids = [292];
export const modules = {
  40541: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      _HDRTextureLoader: () => oB
    });
    var VB = dB(36126);
    class yB {
      static ConvertPanoramaToCubemap(BB, TB, dB, VB) {
        let yB, pB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          lB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!BB) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (BB.length != TB * dB * 3) {
          if (BB.length != TB * dB * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          yB = 4
        } else yB = 3;
        return {
          front: this.CreateCubemapTexture(VB, this.FACE_FRONT, BB, TB, dB, pB, lB, yB),
          back: this.CreateCubemapTexture(VB, this.FACE_BACK, BB, TB, dB, pB, lB, yB),
          left: this.CreateCubemapTexture(VB, this.FACE_LEFT, BB, TB, dB, pB, lB, yB),
          right: this.CreateCubemapTexture(VB, this.FACE_RIGHT, BB, TB, dB, pB, lB, yB),
          up: this.CreateCubemapTexture(VB, this.FACE_UP, BB, TB, dB, pB, lB, yB),
          down: this.CreateCubemapTexture(VB, this.FACE_DOWN, BB, TB, dB, pB, lB, yB),
          size: VB,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(BB, TB, dB, VB, yB, pB, lB, JB) {
        const YB = new ArrayBuffer(BB * BB * 4 * 3),
          gB = new Float32Array(YB),
          oB = pB ? Math.max(1, Math.round(VB / 4 / BB)) : 1,
          kB = 1 / oB,
          LB = kB * kB,
          OB = TB[1].subtract(TB[0]).scale(kB / BB),
          DB = TB[3].subtract(TB[2]).scale(kB / BB),
          uB = 1 / BB;
        let HB = 0;
        for (let EB = 0; EB < BB; EB++)
          for (let pB = 0; pB < oB; pB++) {
            let pB = TB[0],
              YB = TB[2];
            for (let TB = 0; TB < BB; TB++)
              for (let kB = 0; kB < oB; kB++) {
                const oB = YB.subtract(pB).scale(HB).add(pB);
                oB.normalize();
                const kB = this.CalcProjectionSpherical(oB, dB, VB, yB, JB, lB);
                gB[EB * BB * 3 + 3 * TB + 0] += kB.r * LB, gB[EB * BB * 3 + 3 * TB + 1] += kB.g * LB, gB[EB * BB * 3 + 3 * TB + 2] += kB.b * LB, pB = pB.add(OB), YB = YB.add(DB)
              }
            HB += uB * kB
          }
        return gB
      }
      static CalcProjectionSpherical(BB, TB, dB, VB, yB, pB) {
        let lB = Math.atan2(BB.z, BB.x);
        const JB = Math.acos(BB.y);
        for (; lB < -Math.PI;) lB += 2 * Math.PI;
        for (; lB > Math.PI;) lB -= 2 * Math.PI;
        let YB = lB / Math.PI;
        const gB = JB / Math.PI;
        YB = .5 * YB + .5;
        let oB = Math.round(YB * dB);
        oB < 0 ? oB = 0 : oB >= dB && (oB = dB - 1);
        let kB = Math.round(gB * VB);
        kB < 0 ? kB = 0 : kB >= VB && (kB = VB - 1);
        const LB = pB ? VB - kB - 1 : kB;
        return {
          r: TB[LB * dB * yB + oB * yB + 0],
          g: TB[LB * dB * yB + oB * yB + 1],
          b: TB[LB * dB * yB + oB * yB + 2]
        }
      }
    }

    function pB(BB, TB, dB, VB, yB, pB) {
      yB > 0 ? (yB = function(BB, TB) {
        return TB > 1023 ? BB * Math.pow(2, 1023) * Math.pow(2, TB - 1023) : TB < -1074 ? BB * Math.pow(2, -1074) * Math.pow(2, TB + 1074) : BB * Math.pow(2, TB)
      }(1, yB - 136), BB[pB + 0] = TB * yB, BB[pB + 1] = dB * yB, BB[pB + 2] = VB * yB) : (BB[pB + 0] = 0, BB[pB + 1] = 0, BB[pB + 2] = 0)
    }

    function lB(BB, TB) {
      let dB, VB = "";
      for (let yB = TB; yB < BB.length - TB && (dB = String.fromCharCode(BB[yB]), "\n" != dB); yB++) VB += dB;
      return VB
    }

    function JB(BB) {
      let TB = lB(BB, 0);
      if ("#" != TB[0] || "?" != TB[1]) throw "Bad HDR Format.";
      let dB = !1,
        VB = !1,
        yB = 0;
      do {
        yB += TB.length + 1, TB = lB(BB, yB), "FORMAT=32-bit_rle_rgbe" == TB ? VB = !0 : 0 == TB.length && (dB = !0)
      } while (!dB);
      if (!VB) throw "HDR Bad header format, unsupported FORMAT";
      yB += TB.length + 1, TB = lB(BB, yB);
      const pB = /^-Y (.*) \+X (.*)$/g.exec(TB);
      if (!pB || pB.length < 3) throw "HDR Bad header format, no size";
      const JB = parseInt(pB[2]),
        YB = parseInt(pB[1]);
      if (JB < 8 || JB > 32767) throw "HDR Bad header format, unsupported size";
      return yB += TB.length + 1, {
        height: YB,
        width: JB,
        dataPosition: yB
      }
    }

    function YB(BB, TB) {
      return function(BB, TB) {
        let dB = TB.height;
        const VB = TB.width;
        let yB, lB, JB, YB, oB, kB, LB, OB, DB = TB.dataPosition;
        const uB = new ArrayBuffer(4 * VB),
          HB = new Uint8Array(uB),
          EB = new ArrayBuffer(TB.width * TB.height * 4 * 3),
          vB = new Float32Array(EB);
        for (; dB > 0;) {
          if (yB = BB[DB++], lB = BB[DB++], JB = BB[DB++], YB = BB[DB++], 2 != yB || 2 != lB || 128 & JB || TB.width < 8 || TB.width > 32767) return gB(BB, TB);
          if ((JB << 8 | YB) != VB) throw "HDR Bad header format, wrong scan line width";
          for (kB = 0, OB = 0; OB < 4; OB++)
            for (LB = (OB + 1) * VB; kB < LB;)
              if (yB = BB[DB++], lB = BB[DB++], yB > 128) {
                if (oB = yB - 128, 0 == oB || oB > LB - kB) throw "HDR Bad Format, bad scanline data (run)";
                for (; oB-- > 0;) HB[kB++] = lB
              } else {
                if (oB = yB, 0 == oB || oB > LB - kB) throw "HDR Bad Format, bad scanline data (non-run)";
                if (HB[kB++] = lB, --oB > 0)
                  for (let TB = 0; TB < oB; TB++) HB[kB++] = BB[DB++]
              } for (OB = 0; OB < VB; OB++) yB = HB[OB], lB = HB[OB + VB], JB = HB[OB + 2 * VB], YB = HB[OB + 3 * VB], pB(vB, yB, lB, JB, YB, (TB.height - dB) * VB * 3 + 3 * OB);
          dB--
        }
        return vB
      }(BB, TB)
    }

    function gB(BB, TB) {
      let dB = TB.height;
      const VB = TB.width;
      let yB, lB, JB, YB, gB, oB = TB.dataPosition;
      const kB = new ArrayBuffer(TB.width * TB.height * 4 * 3),
        LB = new Float32Array(kB);
      for (; dB > 0;) {
        for (gB = 0; gB < TB.width; gB++) yB = BB[oB++], lB = BB[oB++], JB = BB[oB++], YB = BB[oB++], pB(LB, yB, lB, JB, YB, (TB.height - dB) * VB * 3 + 3 * gB);
        dB--
      }
      return LB
    }
    yB.FACE_LEFT = [new VB.p(-1, -1, -1), new VB.p(1, -1, -1), new VB.p(-1, 1, -1), new VB.p(1, 1, -1)], yB.FACE_RIGHT = [new VB.p(1, -1, 1), new VB.p(-1, -1, 1), new VB.p(1, 1, 1), new VB.p(-1, 1, 1)], yB.FACE_FRONT = [new VB.p(1, -1, -1), new VB.p(1, -1, 1), new VB.p(1, 1, -1), new VB.p(1, 1, 1)], yB.FACE_BACK = [new VB.p(-1, -1, 1), new VB.p(-1, -1, -1), new VB.p(-1, 1, 1), new VB.p(-1, 1, -1)], yB.FACE_DOWN = [new VB.p(1, 1, -1), new VB.p(1, 1, 1), new VB.p(-1, 1, -1), new VB.p(-1, 1, 1)], yB.FACE_UP = [new VB.p(-1, -1, -1), new VB.p(-1, -1, 1), new VB.p(1, -1, -1), new VB.p(1, -1, 1)];
    class oB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(BB, TB, dB) {
        const VB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength),
          yB = JB(VB),
          pB = YB(VB, yB),
          lB = yB.width * yB.height,
          gB = new Float32Array(4 * lB);
        for (let JB = 0; JB < lB; JB += 1) gB[4 * JB] = pB[3 * JB], gB[4 * JB + 1] = pB[3 * JB + 1], gB[4 * JB + 2] = pB[3 * JB + 2], gB[4 * JB + 3] = 1;
        dB(yB.width, yB.height, TB.generateMipMaps, !1, (() => {
          const BB = TB.PD();
          TB.type = 1, TB.format = 5, TB._gammaSpace = !1, BB._uploadDataToTextureDirectly(TB, gB)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);