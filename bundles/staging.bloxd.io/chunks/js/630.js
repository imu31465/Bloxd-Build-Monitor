export const id = 630;
export const ids = [630];
export const modules = {
  54017: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      _HDRTextureLoader: () => tW
    });
    var mW = OW(38241);
    class EW {
      static ConvertPanoramaToCubemap(WW, iW, OW, mW) {
        let EW, NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          PW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!WW) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (WW.length != iW * OW * 3) {
          if (WW.length != iW * OW * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          EW = 4
        } else EW = 3;
        return {
          front: this.CreateCubemapTexture(mW, this.FACE_FRONT, WW, iW, OW, NW, PW, EW),
          back: this.CreateCubemapTexture(mW, this.FACE_BACK, WW, iW, OW, NW, PW, EW),
          left: this.CreateCubemapTexture(mW, this.FACE_LEFT, WW, iW, OW, NW, PW, EW),
          right: this.CreateCubemapTexture(mW, this.FACE_RIGHT, WW, iW, OW, NW, PW, EW),
          up: this.CreateCubemapTexture(mW, this.FACE_UP, WW, iW, OW, NW, PW, EW),
          down: this.CreateCubemapTexture(mW, this.FACE_DOWN, WW, iW, OW, NW, PW, EW),
          size: mW,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(WW, iW, OW, mW, EW, NW, PW, LW) {
        const cW = new ArrayBuffer(WW * WW * 4 * 3),
          wW = new Float32Array(cW),
          tW = NW ? Math.max(1, Math.round(mW / 4 / WW)) : 1,
          ZW = 1 / tW,
          xW = ZW * ZW,
          lW = iW[1].subtract(iW[0]).scale(ZW / WW),
          AW = iW[3].subtract(iW[2]).scale(ZW / WW),
          bW = 1 / WW;
        let jW = 0;
        for (let UW = 0; UW < WW; UW++)
          for (let NW = 0; NW < tW; NW++) {
            let NW = iW[0],
              cW = iW[2];
            for (let iW = 0; iW < WW; iW++)
              for (let ZW = 0; ZW < tW; ZW++) {
                const tW = cW.subtract(NW).scale(jW).add(NW);
                tW.normalize();
                const ZW = this.CalcProjectionSpherical(tW, OW, mW, EW, LW, PW);
                wW[UW * WW * 3 + 3 * iW + 0] += ZW.r * xW, wW[UW * WW * 3 + 3 * iW + 1] += ZW.g * xW, wW[UW * WW * 3 + 3 * iW + 2] += ZW.b * xW, NW = NW.add(lW), cW = cW.add(AW)
              }
            jW += bW * ZW
          }
        return wW
      }
      static CalcProjectionSpherical(WW, iW, OW, mW, EW, NW) {
        let PW = Math.atan2(WW.z, WW.x);
        const LW = Math.acos(WW.y);
        for (; PW < -Math.PI;) PW += 2 * Math.PI;
        for (; PW > Math.PI;) PW -= 2 * Math.PI;
        let cW = PW / Math.PI;
        const wW = LW / Math.PI;
        cW = .5 * cW + .5;
        let tW = Math.round(cW * OW);
        tW < 0 ? tW = 0 : tW >= OW && (tW = OW - 1);
        let ZW = Math.round(wW * mW);
        ZW < 0 ? ZW = 0 : ZW >= mW && (ZW = mW - 1);
        const xW = NW ? mW - ZW - 1 : ZW;
        return {
          r: iW[xW * OW * EW + tW * EW + 0],
          g: iW[xW * OW * EW + tW * EW + 1],
          b: iW[xW * OW * EW + tW * EW + 2]
        }
      }
    }

    function NW(WW, iW, OW, mW, EW, NW) {
      EW > 0 ? (EW = function(WW, iW) {
        return iW > 1023 ? WW * Math.pow(2, 1023) * Math.pow(2, iW - 1023) : iW < -1074 ? WW * Math.pow(2, -1074) * Math.pow(2, iW + 1074) : WW * Math.pow(2, iW)
      }(1, EW - 136), WW[NW + 0] = iW * EW, WW[NW + 1] = OW * EW, WW[NW + 2] = mW * EW) : (WW[NW + 0] = 0, WW[NW + 1] = 0, WW[NW + 2] = 0)
    }

    function PW(WW, iW) {
      let OW, mW = "";
      for (let EW = iW; EW < WW.length - iW && (OW = String.fromCharCode(WW[EW]), "\n" != OW); EW++) mW += OW;
      return mW
    }

    function LW(WW) {
      let iW = PW(WW, 0);
      if ("#" != iW[0] || "?" != iW[1]) throw "Bad HDR Format.";
      let OW = !1,
        mW = !1,
        EW = 0;
      do {
        EW += iW.length + 1, iW = PW(WW, EW), "FORMAT=32-bit_rle_rgbe" == iW ? mW = !0 : 0 == iW.length && (OW = !0)
      } while (!OW);
      if (!mW) throw "HDR Bad header format, unsupported FORMAT";
      EW += iW.length + 1, iW = PW(WW, EW);
      const NW = /^-Y (.*) \+X (.*)$/g.exec(iW);
      if (!NW || NW.length < 3) throw "HDR Bad header format, no size";
      const LW = parseInt(NW[2]),
        cW = parseInt(NW[1]);
      if (LW < 8 || LW > 32767) throw "HDR Bad header format, unsupported size";
      return EW += iW.length + 1, {
        height: cW,
        width: LW,
        dataPosition: EW
      }
    }

    function cW(WW, iW) {
      return function(WW, iW) {
        let OW = iW.height;
        const mW = iW.width;
        let EW, PW, LW, cW, tW, ZW, xW, lW, AW = iW.dataPosition;
        const bW = new ArrayBuffer(4 * mW),
          jW = new Uint8Array(bW),
          UW = new ArrayBuffer(iW.width * iW.height * 4 * 3),
          kW = new Float32Array(UW);
        for (; OW > 0;) {
          if (EW = WW[AW++], PW = WW[AW++], LW = WW[AW++], cW = WW[AW++], 2 != EW || 2 != PW || 128 & LW || iW.width < 8 || iW.width > 32767) return wW(WW, iW);
          if ((LW << 8 | cW) != mW) throw "HDR Bad header format, wrong scan line width";
          for (ZW = 0, lW = 0; lW < 4; lW++)
            for (xW = (lW + 1) * mW; ZW < xW;)
              if (EW = WW[AW++], PW = WW[AW++], EW > 128) {
                if (tW = EW - 128, 0 == tW || tW > xW - ZW) throw "HDR Bad Format, bad scanline data (run)";
                for (; tW-- > 0;) jW[ZW++] = PW
              } else {
                if (tW = EW, 0 == tW || tW > xW - ZW) throw "HDR Bad Format, bad scanline data (non-run)";
                if (jW[ZW++] = PW, --tW > 0)
                  for (let iW = 0; iW < tW; iW++) jW[ZW++] = WW[AW++]
              } for (lW = 0; lW < mW; lW++) EW = jW[lW], PW = jW[lW + mW], LW = jW[lW + 2 * mW], cW = jW[lW + 3 * mW], NW(kW, EW, PW, LW, cW, (iW.height - OW) * mW * 3 + 3 * lW);
          OW--
        }
        return kW
      }(WW, iW)
    }

    function wW(WW, iW) {
      let OW = iW.height;
      const mW = iW.width;
      let EW, PW, LW, cW, wW, tW = iW.dataPosition;
      const ZW = new ArrayBuffer(iW.width * iW.height * 4 * 3),
        xW = new Float32Array(ZW);
      for (; OW > 0;) {
        for (wW = 0; wW < iW.width; wW++) EW = WW[tW++], PW = WW[tW++], LW = WW[tW++], cW = WW[tW++], NW(xW, EW, PW, LW, cW, (iW.height - OW) * mW * 3 + 3 * wW);
        OW--
      }
      return xW
    }
    EW.FACE_LEFT = [new mW.q(-1, -1, -1), new mW.q(1, -1, -1), new mW.q(-1, 1, -1), new mW.q(1, 1, -1)], EW.FACE_RIGHT = [new mW.q(1, -1, 1), new mW.q(-1, -1, 1), new mW.q(1, 1, 1), new mW.q(-1, 1, 1)], EW.FACE_FRONT = [new mW.q(1, -1, -1), new mW.q(1, -1, 1), new mW.q(1, 1, -1), new mW.q(1, 1, 1)], EW.FACE_BACK = [new mW.q(-1, -1, 1), new mW.q(-1, -1, -1), new mW.q(-1, 1, 1), new mW.q(-1, 1, -1)], EW.FACE_DOWN = [new mW.q(1, 1, -1), new mW.q(1, 1, 1), new mW.q(-1, 1, -1), new mW.q(-1, 1, 1)], EW.FACE_UP = [new mW.q(-1, -1, -1), new mW.q(-1, -1, 1), new mW.q(1, -1, -1), new mW.q(1, -1, 1)];
    class tW {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(WW, iW, OW) {
        const mW = new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength),
          EW = LW(mW),
          NW = cW(mW, EW),
          PW = EW.width * EW.height,
          wW = new Float32Array(4 * PW);
        for (let LW = 0; LW < PW; LW += 1) wW[4 * LW] = NW[3 * LW], wW[4 * LW + 1] = NW[3 * LW + 1], wW[4 * LW + 2] = NW[3 * LW + 2], wW[4 * LW + 3] = 1;
        OW(EW.width, EW.height, iW.generateMipMaps, !1, (() => {
          const WW = iW.VA();
          iW.type = 1, iW.format = 5, iW._gammaSpace = !1, WW._uploadDataToTextureDirectly(iW, wW)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);