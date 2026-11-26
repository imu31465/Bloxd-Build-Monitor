export const id = 618;
export const ids = [618];
export const modules = {
  44535: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      _HDRTextureLoader: () => EU
    });
    var cU = zU(37819);
    class yU {
      static ConvertPanoramaToCubemap(UU, XU, zU, cU) {
        let yU, QU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          AU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!UU) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (UU.length != XU * zU * 3) {
          if (UU.length != XU * zU * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          yU = 4
        } else yU = 3;
        return {
          front: this.CreateCubemapTexture(cU, this.FACE_FRONT, UU, XU, zU, QU, AU, yU),
          back: this.CreateCubemapTexture(cU, this.FACE_BACK, UU, XU, zU, QU, AU, yU),
          left: this.CreateCubemapTexture(cU, this.FACE_LEFT, UU, XU, zU, QU, AU, yU),
          right: this.CreateCubemapTexture(cU, this.FACE_RIGHT, UU, XU, zU, QU, AU, yU),
          up: this.CreateCubemapTexture(cU, this.FACE_UP, UU, XU, zU, QU, AU, yU),
          down: this.CreateCubemapTexture(cU, this.FACE_DOWN, UU, XU, zU, QU, AU, yU),
          size: cU,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(UU, XU, zU, cU, yU, QU, AU, FU) {
        const oU = new ArrayBuffer(UU * UU * 4 * 3),
          DU = new Float32Array(oU),
          EU = QU ? Math.max(1, Math.round(cU / 4 / UU)) : 1,
          YU = 1 / EU,
          NU = YU * YU,
          IU = XU[1].subtract(XU[0]).scale(YU / UU),
          pU = XU[3].subtract(XU[2]).scale(YU / UU),
          aU = 1 / UU;
        let tU = 0;
        for (let gU = 0; gU < UU; gU++)
          for (let QU = 0; QU < EU; QU++) {
            let QU = XU[0],
              oU = XU[2];
            for (let XU = 0; XU < UU; XU++)
              for (let YU = 0; YU < EU; YU++) {
                const EU = oU.subtract(QU).scale(tU).add(QU);
                EU.normalize();
                const YU = this.CalcProjectionSpherical(EU, zU, cU, yU, FU, AU);
                DU[gU * UU * 3 + 3 * XU + 0] += YU.r * NU, DU[gU * UU * 3 + 3 * XU + 1] += YU.g * NU, DU[gU * UU * 3 + 3 * XU + 2] += YU.b * NU, QU = QU.add(IU), oU = oU.add(pU)
              }
            tU += aU * YU
          }
        return DU
      }
      static CalcProjectionSpherical(UU, XU, zU, cU, yU, QU) {
        let AU = Math.atan2(UU.z, UU.x);
        const FU = Math.acos(UU.y);
        for (; AU < -Math.PI;) AU += 2 * Math.PI;
        for (; AU > Math.PI;) AU -= 2 * Math.PI;
        let oU = AU / Math.PI;
        const DU = FU / Math.PI;
        oU = .5 * oU + .5;
        let EU = Math.round(oU * zU);
        EU < 0 ? EU = 0 : EU >= zU && (EU = zU - 1);
        let YU = Math.round(DU * cU);
        YU < 0 ? YU = 0 : YU >= cU && (YU = cU - 1);
        const NU = QU ? cU - YU - 1 : YU;
        return {
          r: XU[NU * zU * yU + EU * yU + 0],
          g: XU[NU * zU * yU + EU * yU + 1],
          b: XU[NU * zU * yU + EU * yU + 2]
        }
      }
    }

    function QU(UU, XU, zU, cU, yU, QU) {
      yU > 0 ? (yU = function(UU, XU) {
        return XU > 1023 ? UU * Math.pow(2, 1023) * Math.pow(2, XU - 1023) : XU < -1074 ? UU * Math.pow(2, -1074) * Math.pow(2, XU + 1074) : UU * Math.pow(2, XU)
      }(1, yU - 136), UU[QU + 0] = XU * yU, UU[QU + 1] = zU * yU, UU[QU + 2] = cU * yU) : (UU[QU + 0] = 0, UU[QU + 1] = 0, UU[QU + 2] = 0)
    }

    function AU(UU, XU) {
      let zU, cU = "";
      for (let yU = XU; yU < UU.length - XU && (zU = String.fromCharCode(UU[yU]), "\n" != zU); yU++) cU += zU;
      return cU
    }

    function FU(UU) {
      let XU = AU(UU, 0);
      if ("#" != XU[0] || "?" != XU[1]) throw "Bad HDR Format.";
      let zU = !1,
        cU = !1,
        yU = 0;
      do {
        yU += XU.length + 1, XU = AU(UU, yU), "FORMAT=32-bit_rle_rgbe" == XU ? cU = !0 : 0 == XU.length && (zU = !0)
      } while (!zU);
      if (!cU) throw "HDR Bad header format, unsupported FORMAT";
      yU += XU.length + 1, XU = AU(UU, yU);
      const QU = /^-Y (.*) \+X (.*)$/g.exec(XU);
      if (!QU || QU.length < 3) throw "HDR Bad header format, no size";
      const FU = parseInt(QU[2]),
        oU = parseInt(QU[1]);
      if (FU < 8 || FU > 32767) throw "HDR Bad header format, unsupported size";
      return yU += XU.length + 1, {
        height: oU,
        width: FU,
        dataPosition: yU
      }
    }

    function oU(UU, XU) {
      return function(UU, XU) {
        let zU = XU.height;
        const cU = XU.width;
        let yU, AU, FU, oU, EU, YU, NU, IU, pU = XU.dataPosition;
        const aU = new ArrayBuffer(4 * cU),
          tU = new Uint8Array(aU),
          gU = new ArrayBuffer(XU.width * XU.height * 4 * 3),
          kU = new Float32Array(gU);
        for (; zU > 0;) {
          if (yU = UU[pU++], AU = UU[pU++], FU = UU[pU++], oU = UU[pU++], 2 != yU || 2 != AU || 128 & FU || XU.width < 8 || XU.width > 32767) return DU(UU, XU);
          if ((FU << 8 | oU) != cU) throw "HDR Bad header format, wrong scan line width";
          for (YU = 0, IU = 0; IU < 4; IU++)
            for (NU = (IU + 1) * cU; YU < NU;)
              if (yU = UU[pU++], AU = UU[pU++], yU > 128) {
                if (EU = yU - 128, 0 == EU || EU > NU - YU) throw "HDR Bad Format, bad scanline data (run)";
                for (; EU-- > 0;) tU[YU++] = AU
              } else {
                if (EU = yU, 0 == EU || EU > NU - YU) throw "HDR Bad Format, bad scanline data (non-run)";
                if (tU[YU++] = AU, --EU > 0)
                  for (let XU = 0; XU < EU; XU++) tU[YU++] = UU[pU++]
              } for (IU = 0; IU < cU; IU++) yU = tU[IU], AU = tU[IU + cU], FU = tU[IU + 2 * cU], oU = tU[IU + 3 * cU], QU(kU, yU, AU, FU, oU, (XU.height - zU) * cU * 3 + 3 * IU);
          zU--
        }
        return kU
      }(UU, XU)
    }

    function DU(UU, XU) {
      let zU = XU.height;
      const cU = XU.width;
      let yU, AU, FU, oU, DU, EU = XU.dataPosition;
      const YU = new ArrayBuffer(XU.width * XU.height * 4 * 3),
        NU = new Float32Array(YU);
      for (; zU > 0;) {
        for (DU = 0; DU < XU.width; DU++) yU = UU[EU++], AU = UU[EU++], FU = UU[EU++], oU = UU[EU++], QU(NU, yU, AU, FU, oU, (XU.height - zU) * cU * 3 + 3 * DU);
        zU--
      }
      return NU
    }
    yU.FACE_LEFT = [new cU.q(-1, -1, -1), new cU.q(1, -1, -1), new cU.q(-1, 1, -1), new cU.q(1, 1, -1)], yU.FACE_RIGHT = [new cU.q(1, -1, 1), new cU.q(-1, -1, 1), new cU.q(1, 1, 1), new cU.q(-1, 1, 1)], yU.FACE_FRONT = [new cU.q(1, -1, -1), new cU.q(1, -1, 1), new cU.q(1, 1, -1), new cU.q(1, 1, 1)], yU.FACE_BACK = [new cU.q(-1, -1, 1), new cU.q(-1, -1, -1), new cU.q(-1, 1, 1), new cU.q(-1, 1, -1)], yU.FACE_DOWN = [new cU.q(1, 1, -1), new cU.q(1, 1, 1), new cU.q(-1, 1, -1), new cU.q(-1, 1, 1)], yU.FACE_UP = [new cU.q(-1, -1, -1), new cU.q(-1, -1, 1), new cU.q(1, -1, -1), new cU.q(1, -1, 1)];
    class EU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(UU, XU, zU) {
        const cU = new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength),
          yU = FU(cU),
          QU = oU(cU, yU),
          AU = yU.width * yU.height,
          DU = new Float32Array(4 * AU);
        for (let FU = 0; FU < AU; FU += 1) DU[4 * FU] = QU[3 * FU], DU[4 * FU + 1] = QU[3 * FU + 1], DU[4 * FU + 2] = QU[3 * FU + 2], DU[4 * FU + 3] = 1;
        zU(yU.width, yU.height, XU.generateMipMaps, !1, (() => {
          const UU = XU.qp();
          XU.type = 1, XU.format = 5, XU._gammaSpace = !1, UU._uploadDataToTextureDirectly(XU, DU)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);