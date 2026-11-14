export const id = 282;
export const ids = [282];
export const modules = {
  39298: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      _HDRTextureLoader: () => eW
    });
    var wW = MW(35324);
    class CW {
      static ConvertPanoramaToCubemap(WW, RW, MW, wW) {
        let CW, zR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          AW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!WW) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (WW.length != RW * MW * 3) {
          if (WW.length != RW * MW * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          CW = 4
        } else CW = 3;
        return {
          front: this.CreateCubemapTexture(wW, this.FACE_FRONT, WW, RW, MW, zR, AW, CW),
          back: this.CreateCubemapTexture(wW, this.FACE_BACK, WW, RW, MW, zR, AW, CW),
          left: this.CreateCubemapTexture(wW, this.FACE_LEFT, WW, RW, MW, zR, AW, CW),
          right: this.CreateCubemapTexture(wW, this.FACE_RIGHT, WW, RW, MW, zR, AW, CW),
          up: this.CreateCubemapTexture(wW, this.FACE_UP, WW, RW, MW, zR, AW, CW),
          down: this.CreateCubemapTexture(wW, this.FACE_DOWN, WW, RW, MW, zR, AW, CW),
          size: wW,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(WW, RW, MW, wW, CW, zR, AW, bR) {
        const yR = new ArrayBuffer(WW * WW * 4 * 3),
          NW = new Float32Array(yR),
          eW = zR ? Math.max(1, Math.round(wW / 4 / WW)) : 1,
          BW = 1 / eW,
          tR = BW * BW,
          TW = RW[1].subtract(RW[0]).scale(BW / WW),
          gR = RW[3].subtract(RW[2]).scale(BW / WW),
          iR = 1 / WW;
        let YW = 0;
        for (let JW = 0; JW < WW; JW++)
          for (let zR = 0; zR < eW; zR++) {
            let zR = RW[0],
              yR = RW[2];
            for (let RW = 0; RW < WW; RW++)
              for (let BW = 0; BW < eW; BW++) {
                const eW = yR.subtract(zR).scale(YW).add(zR);
                eW.normalize();
                const BW = this.CalcProjectionSpherical(eW, MW, wW, CW, bR, AW);
                NW[JW * WW * 3 + 3 * RW + 0] += BW.r * tR, NW[JW * WW * 3 + 3 * RW + 1] += BW.g * tR, NW[JW * WW * 3 + 3 * RW + 2] += BW.b * tR, zR = zR.add(TW), yR = yR.add(gR)
              }
            YW += iR * BW
          }
        return NW
      }
      static CalcProjectionSpherical(WW, RW, MW, wW, CW, zR) {
        let AW = Math.atan2(WW.z, WW.x);
        const bR = Math.acos(WW.y);
        for (; AW < -Math.PI;) AW += 2 * Math.PI;
        for (; AW > Math.PI;) AW -= 2 * Math.PI;
        let yR = AW / Math.PI;
        const NW = bR / Math.PI;
        yR = .5 * yR + .5;
        let eW = Math.round(yR * MW);
        eW < 0 ? eW = 0 : eW >= MW && (eW = MW - 1);
        let BW = Math.round(NW * wW);
        BW < 0 ? BW = 0 : BW >= wW && (BW = wW - 1);
        const tR = zR ? wW - BW - 1 : BW;
        return {
          r: RW[tR * MW * CW + eW * CW + 0],
          g: RW[tR * MW * CW + eW * CW + 1],
          b: RW[tR * MW * CW + eW * CW + 2]
        }
      }
    }

    function zR(WW, RW, MW, wW, CW, zR) {
      CW > 0 ? (CW = function(WW, RW) {
        return RW > 1023 ? WW * Math.pow(2, 1023) * Math.pow(2, RW - 1023) : RW < -1074 ? WW * Math.pow(2, -1074) * Math.pow(2, RW + 1074) : WW * Math.pow(2, RW)
      }(1, CW - 136), WW[zR + 0] = RW * CW, WW[zR + 1] = MW * CW, WW[zR + 2] = wW * CW) : (WW[zR + 0] = 0, WW[zR + 1] = 0, WW[zR + 2] = 0)
    }

    function AW(WW, RW) {
      let MW, wW = "";
      for (let CW = RW; CW < WW.length - RW && (MW = String.fromCharCode(WW[CW]), "\n" != MW); CW++) wW += MW;
      return wW
    }

    function bR(WW) {
      let RW = AW(WW, 0);
      if ("#" != RW[0] || "?" != RW[1]) throw "Bad HDR Format.";
      let MW = !1,
        wW = !1,
        CW = 0;
      do {
        CW += RW.length + 1, RW = AW(WW, CW), "FORMAT=32-bit_rle_rgbe" == RW ? wW = !0 : 0 == RW.length && (MW = !0)
      } while (!MW);
      if (!wW) throw "HDR Bad header format, unsupported FORMAT";
      CW += RW.length + 1, RW = AW(WW, CW);
      const zR = /^-Y (.*) \+X (.*)$/g.exec(RW);
      if (!zR || zR.length < 3) throw "HDR Bad header format, no size";
      const bR = parseInt(zR[2]),
        yR = parseInt(zR[1]);
      if (bR < 8 || bR > 32767) throw "HDR Bad header format, unsupported size";
      return CW += RW.length + 1, {
        height: yR,
        width: bR,
        dataPosition: CW
      }
    }

    function yR(WW, RW) {
      return function(WW, RW) {
        let MW = RW.height;
        const wW = RW.width;
        let CW, AW, bR, yR, eW, BW, tR, TW, gR = RW.dataPosition;
        const iR = new ArrayBuffer(4 * wW),
          YW = new Uint8Array(iR),
          JW = new ArrayBuffer(RW.width * RW.height * 4 * 3),
          PW = new Float32Array(JW);
        for (; MW > 0;) {
          if (CW = WW[gR++], AW = WW[gR++], bR = WW[gR++], yR = WW[gR++], 2 != CW || 2 != AW || 128 & bR || RW.width < 8 || RW.width > 32767) return NW(WW, RW);
          if ((bR << 8 | yR) != wW) throw "HDR Bad header format, wrong scan line width";
          for (BW = 0, TW = 0; TW < 4; TW++)
            for (tR = (TW + 1) * wW; BW < tR;)
              if (CW = WW[gR++], AW = WW[gR++], CW > 128) {
                if (eW = CW - 128, 0 == eW || eW > tR - BW) throw "HDR Bad Format, bad scanline data (run)";
                for (; eW-- > 0;) YW[BW++] = AW
              } else {
                if (eW = CW, 0 == eW || eW > tR - BW) throw "HDR Bad Format, bad scanline data (non-run)";
                if (YW[BW++] = AW, --eW > 0)
                  for (let RW = 0; RW < eW; RW++) YW[BW++] = WW[gR++]
              } for (TW = 0; TW < wW; TW++) CW = YW[TW], AW = YW[TW + wW], bR = YW[TW + 2 * wW], yR = YW[TW + 3 * wW], zR(PW, CW, AW, bR, yR, (RW.height - MW) * wW * 3 + 3 * TW);
          MW--
        }
        return PW
      }(WW, RW)
    }

    function NW(WW, RW) {
      let MW = RW.height;
      const wW = RW.width;
      let CW, AW, bR, yR, NW, eW = RW.dataPosition;
      const BW = new ArrayBuffer(RW.width * RW.height * 4 * 3),
        tR = new Float32Array(BW);
      for (; MW > 0;) {
        for (NW = 0; NW < RW.width; NW++) CW = WW[eW++], AW = WW[eW++], bR = WW[eW++], yR = WW[eW++], zR(tR, CW, AW, bR, yR, (RW.height - MW) * wW * 3 + 3 * NW);
        MW--
      }
      return tR
    }
    CW.FACE_LEFT = [new wW.q(-1, -1, -1), new wW.q(1, -1, -1), new wW.q(-1, 1, -1), new wW.q(1, 1, -1)], CW.FACE_RIGHT = [new wW.q(1, -1, 1), new wW.q(-1, -1, 1), new wW.q(1, 1, 1), new wW.q(-1, 1, 1)], CW.FACE_FRONT = [new wW.q(1, -1, -1), new wW.q(1, -1, 1), new wW.q(1, 1, -1), new wW.q(1, 1, 1)], CW.FACE_BACK = [new wW.q(-1, -1, 1), new wW.q(-1, -1, -1), new wW.q(-1, 1, 1), new wW.q(-1, 1, -1)], CW.FACE_DOWN = [new wW.q(1, 1, -1), new wW.q(1, 1, 1), new wW.q(-1, 1, -1), new wW.q(-1, 1, 1)], CW.FACE_UP = [new wW.q(-1, -1, -1), new wW.q(-1, -1, 1), new wW.q(1, -1, -1), new wW.q(1, -1, 1)];
    class eW {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(WW, RW, MW) {
        const wW = new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength),
          CW = bR(wW),
          zR = yR(wW, CW),
          AW = CW.width * CW.height,
          NW = new Float32Array(4 * AW);
        for (let bR = 0; bR < AW; bR += 1) NW[4 * bR] = zR[3 * bR], NW[4 * bR + 1] = zR[3 * bR + 1], NW[4 * bR + 2] = zR[3 * bR + 2], NW[4 * bR + 3] = 1;
        MW(CW.width, CW.height, RW.generateMipMaps, !1, (() => {
          const WW = RW.mC();
          RW.type = 1, RW.format = 5, RW._gammaSpace = !1, WW._uploadDataToTextureDirectly(RW, NW)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);