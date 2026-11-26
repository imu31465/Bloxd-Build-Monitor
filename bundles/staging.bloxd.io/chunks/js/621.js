export const id = 621;
export const ids = [621];
export const modules = {
  45309: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      _HDRTextureLoader: () => EH
    });
    var AH = LH(37963);
    class rH {
      static ConvertPanoramaToCubemap(HH, BH, LH, AH) {
        let rH, SH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          hH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!HH) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (HH.length != BH * LH * 3) {
          if (HH.length != BH * LH * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          rH = 4
        } else rH = 3;
        return {
          front: this.CreateCubemapTexture(AH, this.FACE_FRONT, HH, BH, LH, SH, hH, rH),
          back: this.CreateCubemapTexture(AH, this.FACE_BACK, HH, BH, LH, SH, hH, rH),
          left: this.CreateCubemapTexture(AH, this.FACE_LEFT, HH, BH, LH, SH, hH, rH),
          right: this.CreateCubemapTexture(AH, this.FACE_RIGHT, HH, BH, LH, SH, hH, rH),
          up: this.CreateCubemapTexture(AH, this.FACE_UP, HH, BH, LH, SH, hH, rH),
          down: this.CreateCubemapTexture(AH, this.FACE_DOWN, HH, BH, LH, SH, hH, rH),
          size: AH,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(HH, BH, LH, AH, rH, SH, hH, tH) {
        const zH = new ArrayBuffer(HH * HH * 4 * 3),
          CH = new Float32Array(zH),
          EH = SH ? Math.max(1, Math.round(AH / 4 / HH)) : 1,
          XH = 1 / EH,
          GH = XH * XH,
          YH = BH[1].subtract(BH[0]).scale(XH / HH),
          uH = BH[3].subtract(BH[2]).scale(XH / HH),
          QH = 1 / HH;
        let WH = 0;
        for (let MH = 0; MH < HH; MH++)
          for (let SH = 0; SH < EH; SH++) {
            let SH = BH[0],
              zH = BH[2];
            for (let BH = 0; BH < HH; BH++)
              for (let XH = 0; XH < EH; XH++) {
                const EH = zH.subtract(SH).scale(WH).add(SH);
                EH.normalize();
                const XH = this.CalcProjectionSpherical(EH, LH, AH, rH, tH, hH);
                CH[MH * HH * 3 + 3 * BH + 0] += XH.r * GH, CH[MH * HH * 3 + 3 * BH + 1] += XH.g * GH, CH[MH * HH * 3 + 3 * BH + 2] += XH.b * GH, SH = SH.add(YH), zH = zH.add(uH)
              }
            WH += QH * XH
          }
        return CH
      }
      static CalcProjectionSpherical(HH, BH, LH, AH, rH, SH) {
        let hH = Math.atan2(HH.z, HH.x);
        const tH = Math.acos(HH.y);
        for (; hH < -Math.PI;) hH += 2 * Math.PI;
        for (; hH > Math.PI;) hH -= 2 * Math.PI;
        let zH = hH / Math.PI;
        const CH = tH / Math.PI;
        zH = .5 * zH + .5;
        let EH = Math.round(zH * LH);
        EH < 0 ? EH = 0 : EH >= LH && (EH = LH - 1);
        let XH = Math.round(CH * AH);
        XH < 0 ? XH = 0 : XH >= AH && (XH = AH - 1);
        const GH = SH ? AH - XH - 1 : XH;
        return {
          r: BH[GH * LH * rH + EH * rH + 0],
          g: BH[GH * LH * rH + EH * rH + 1],
          b: BH[GH * LH * rH + EH * rH + 2]
        }
      }
    }

    function SH(HH, BH, LH, AH, rH, SH) {
      rH > 0 ? (rH = function(HH, BH) {
        return BH > 1023 ? HH * Math.pow(2, 1023) * Math.pow(2, BH - 1023) : BH < -1074 ? HH * Math.pow(2, -1074) * Math.pow(2, BH + 1074) : HH * Math.pow(2, BH)
      }(1, rH - 136), HH[SH + 0] = BH * rH, HH[SH + 1] = LH * rH, HH[SH + 2] = AH * rH) : (HH[SH + 0] = 0, HH[SH + 1] = 0, HH[SH + 2] = 0)
    }

    function hH(HH, BH) {
      let LH, AH = "";
      for (let rH = BH; rH < HH.length - BH && (LH = String.fromCharCode(HH[rH]), "\n" != LH); rH++) AH += LH;
      return AH
    }

    function tH(HH) {
      let BH = hH(HH, 0);
      if ("#" != BH[0] || "?" != BH[1]) throw "Bad HDR Format.";
      let LH = !1,
        AH = !1,
        rH = 0;
      do {
        rH += BH.length + 1, BH = hH(HH, rH), "FORMAT=32-bit_rle_rgbe" == BH ? AH = !0 : 0 == BH.length && (LH = !0)
      } while (!LH);
      if (!AH) throw "HDR Bad header format, unsupported FORMAT";
      rH += BH.length + 1, BH = hH(HH, rH);
      const SH = /^-Y (.*) \+X (.*)$/g.exec(BH);
      if (!SH || SH.length < 3) throw "HDR Bad header format, no size";
      const tH = parseInt(SH[2]),
        zH = parseInt(SH[1]);
      if (tH < 8 || tH > 32767) throw "HDR Bad header format, unsupported size";
      return rH += BH.length + 1, {
        height: zH,
        width: tH,
        dataPosition: rH
      }
    }

    function zH(HH, BH) {
      return function(HH, BH) {
        let LH = BH.height;
        const AH = BH.width;
        let rH, hH, tH, zH, EH, XH, GH, YH, uH = BH.dataPosition;
        const QH = new ArrayBuffer(4 * AH),
          WH = new Uint8Array(QH),
          MH = new ArrayBuffer(BH.width * BH.height * 4 * 3),
          xH = new Float32Array(MH);
        for (; LH > 0;) {
          if (rH = HH[uH++], hH = HH[uH++], tH = HH[uH++], zH = HH[uH++], 2 != rH || 2 != hH || 128 & tH || BH.width < 8 || BH.width > 32767) return CH(HH, BH);
          if ((tH << 8 | zH) != AH) throw "HDR Bad header format, wrong scan line width";
          for (XH = 0, YH = 0; YH < 4; YH++)
            for (GH = (YH + 1) * AH; XH < GH;)
              if (rH = HH[uH++], hH = HH[uH++], rH > 128) {
                if (EH = rH - 128, 0 == EH || EH > GH - XH) throw "HDR Bad Format, bad scanline data (run)";
                for (; EH-- > 0;) WH[XH++] = hH
              } else {
                if (EH = rH, 0 == EH || EH > GH - XH) throw "HDR Bad Format, bad scanline data (non-run)";
                if (WH[XH++] = hH, --EH > 0)
                  for (let BH = 0; BH < EH; BH++) WH[XH++] = HH[uH++]
              } for (YH = 0; YH < AH; YH++) rH = WH[YH], hH = WH[YH + AH], tH = WH[YH + 2 * AH], zH = WH[YH + 3 * AH], SH(xH, rH, hH, tH, zH, (BH.height - LH) * AH * 3 + 3 * YH);
          LH--
        }
        return xH
      }(HH, BH)
    }

    function CH(HH, BH) {
      let LH = BH.height;
      const AH = BH.width;
      let rH, hH, tH, zH, CH, EH = BH.dataPosition;
      const XH = new ArrayBuffer(BH.width * BH.height * 4 * 3),
        GH = new Float32Array(XH);
      for (; LH > 0;) {
        for (CH = 0; CH < BH.width; CH++) rH = HH[EH++], hH = HH[EH++], tH = HH[EH++], zH = HH[EH++], SH(GH, rH, hH, tH, zH, (BH.height - LH) * AH * 3 + 3 * CH);
        LH--
      }
      return GH
    }
    rH.FACE_LEFT = [new AH.o(-1, -1, -1), new AH.o(1, -1, -1), new AH.o(-1, 1, -1), new AH.o(1, 1, -1)], rH.FACE_RIGHT = [new AH.o(1, -1, 1), new AH.o(-1, -1, 1), new AH.o(1, 1, 1), new AH.o(-1, 1, 1)], rH.FACE_FRONT = [new AH.o(1, -1, -1), new AH.o(1, -1, 1), new AH.o(1, 1, -1), new AH.o(1, 1, 1)], rH.FACE_BACK = [new AH.o(-1, -1, 1), new AH.o(-1, -1, -1), new AH.o(-1, 1, 1), new AH.o(-1, 1, -1)], rH.FACE_DOWN = [new AH.o(1, 1, -1), new AH.o(1, 1, 1), new AH.o(-1, 1, -1), new AH.o(-1, 1, 1)], rH.FACE_UP = [new AH.o(-1, -1, -1), new AH.o(-1, -1, 1), new AH.o(1, -1, -1), new AH.o(1, -1, 1)];
    class EH {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(HH, BH, LH) {
        const AH = new Uint8Array(HH.buffer, HH.byteOffset, HH.byteLength),
          rH = tH(AH),
          SH = zH(AH, rH),
          hH = rH.width * rH.height,
          CH = new Float32Array(4 * hH);
        for (let tH = 0; tH < hH; tH += 1) CH[4 * tH] = SH[3 * tH], CH[4 * tH + 1] = SH[3 * tH + 1], CH[4 * tH + 2] = SH[3 * tH + 2], CH[4 * tH + 3] = 1;
        LH(rH.width, rH.height, BH.generateMipMaps, !1, (() => {
          const HH = BH.Iu();
          BH.type = 1, BH.format = 5, BH._gammaSpace = !1, HH._uploadDataToTextureDirectly(BH, CH)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);