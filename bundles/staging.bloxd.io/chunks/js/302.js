export const id = 302;
export const ids = [302];
export const modules = {
  40902: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      _HDRTextureLoader: () => vY
    });
    var FY = DY(36524);
    class AY {
      static ConvertPanoramaToCubemap(YY, rY, DY, FY) {
        let AY, IY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          RY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!YY) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (YY.length != rY * DY * 3) {
          if (YY.length != rY * DY * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          AY = 4
        } else AY = 3;
        return {
          front: this.CreateCubemapTexture(FY, this.FACE_FRONT, YY, rY, DY, IY, RY, AY),
          back: this.CreateCubemapTexture(FY, this.FACE_BACK, YY, rY, DY, IY, RY, AY),
          left: this.CreateCubemapTexture(FY, this.FACE_LEFT, YY, rY, DY, IY, RY, AY),
          right: this.CreateCubemapTexture(FY, this.FACE_RIGHT, YY, rY, DY, IY, RY, AY),
          up: this.CreateCubemapTexture(FY, this.FACE_UP, YY, rY, DY, IY, RY, AY),
          down: this.CreateCubemapTexture(FY, this.FACE_DOWN, YY, rY, DY, IY, RY, AY),
          size: FY,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(YY, rY, DY, FY, AY, IY, RY, OY) {
        const gY = new ArrayBuffer(YY * YY * 4 * 3),
          aY = new Float32Array(gY),
          vY = IY ? Math.max(1, Math.round(FY / 4 / YY)) : 1,
          uY = 1 / vY,
          sY = uY * uY,
          iY = rY[1].subtract(rY[0]).scale(uY / YY),
          yY = rY[3].subtract(rY[2]).scale(uY / YY),
          QY = 1 / YY;
        let oY = 0;
        for (let WY = 0; WY < YY; WY++)
          for (let IY = 0; IY < vY; IY++) {
            let IY = rY[0],
              gY = rY[2];
            for (let rY = 0; rY < YY; rY++)
              for (let uY = 0; uY < vY; uY++) {
                const vY = gY.subtract(IY).scale(oY).add(IY);
                vY.normalize();
                const uY = this.CalcProjectionSpherical(vY, DY, FY, AY, OY, RY);
                aY[WY * YY * 3 + 3 * rY + 0] += uY.r * sY, aY[WY * YY * 3 + 3 * rY + 1] += uY.g * sY, aY[WY * YY * 3 + 3 * rY + 2] += uY.b * sY, IY = IY.add(iY), gY = gY.add(yY)
              }
            oY += QY * uY
          }
        return aY
      }
      static CalcProjectionSpherical(YY, rY, DY, FY, AY, IY) {
        let RY = Math.atan2(YY.z, YY.x);
        const OY = Math.acos(YY.y);
        for (; RY < -Math.PI;) RY += 2 * Math.PI;
        for (; RY > Math.PI;) RY -= 2 * Math.PI;
        let gY = RY / Math.PI;
        const aY = OY / Math.PI;
        gY = .5 * gY + .5;
        let vY = Math.round(gY * DY);
        vY < 0 ? vY = 0 : vY >= DY && (vY = DY - 1);
        let uY = Math.round(aY * FY);
        uY < 0 ? uY = 0 : uY >= FY && (uY = FY - 1);
        const sY = IY ? FY - uY - 1 : uY;
        return {
          r: rY[sY * DY * AY + vY * AY + 0],
          g: rY[sY * DY * AY + vY * AY + 1],
          b: rY[sY * DY * AY + vY * AY + 2]
        }
      }
    }

    function IY(YY, rY, DY, FY, AY, IY) {
      AY > 0 ? (AY = function(YY, rY) {
        return rY > 1023 ? YY * Math.pow(2, 1023) * Math.pow(2, rY - 1023) : rY < -1074 ? YY * Math.pow(2, -1074) * Math.pow(2, rY + 1074) : YY * Math.pow(2, rY)
      }(1, AY - 136), YY[IY + 0] = rY * AY, YY[IY + 1] = DY * AY, YY[IY + 2] = FY * AY) : (YY[IY + 0] = 0, YY[IY + 1] = 0, YY[IY + 2] = 0)
    }

    function RY(YY, rY) {
      let DY, FY = "";
      for (let AY = rY; AY < YY.length - rY && (DY = String.fromCharCode(YY[AY]), "\n" != DY); AY++) FY += DY;
      return FY
    }

    function OY(YY) {
      let rY = RY(YY, 0);
      if ("#" != rY[0] || "?" != rY[1]) throw "Bad HDR Format.";
      let DY = !1,
        FY = !1,
        AY = 0;
      do {
        AY += rY.length + 1, rY = RY(YY, AY), "FORMAT=32-bit_rle_rgbe" == rY ? FY = !0 : 0 == rY.length && (DY = !0)
      } while (!DY);
      if (!FY) throw "HDR Bad header format, unsupported FORMAT";
      AY += rY.length + 1, rY = RY(YY, AY);
      const IY = /^-Y (.*) \+X (.*)$/g.exec(rY);
      if (!IY || IY.length < 3) throw "HDR Bad header format, no size";
      const OY = parseInt(IY[2]),
        gY = parseInt(IY[1]);
      if (OY < 8 || OY > 32767) throw "HDR Bad header format, unsupported size";
      return AY += rY.length + 1, {
        height: gY,
        width: OY,
        dataPosition: AY
      }
    }

    function gY(YY, rY) {
      return function(YY, rY) {
        let DY = rY.height;
        const FY = rY.width;
        let AY, RY, OY, gY, vY, uY, sY, iY, yY = rY.dataPosition;
        const QY = new ArrayBuffer(4 * FY),
          oY = new Uint8Array(QY),
          WY = new ArrayBuffer(rY.width * rY.height * 4 * 3),
          EY = new Float32Array(WY);
        for (; DY > 0;) {
          if (AY = YY[yY++], RY = YY[yY++], OY = YY[yY++], gY = YY[yY++], 2 != AY || 2 != RY || 128 & OY || rY.width < 8 || rY.width > 32767) return aY(YY, rY);
          if ((OY << 8 | gY) != FY) throw "HDR Bad header format, wrong scan line width";
          for (uY = 0, iY = 0; iY < 4; iY++)
            for (sY = (iY + 1) * FY; uY < sY;)
              if (AY = YY[yY++], RY = YY[yY++], AY > 128) {
                if (vY = AY - 128, 0 == vY || vY > sY - uY) throw "HDR Bad Format, bad scanline data (run)";
                for (; vY-- > 0;) oY[uY++] = RY
              } else {
                if (vY = AY, 0 == vY || vY > sY - uY) throw "HDR Bad Format, bad scanline data (non-run)";
                if (oY[uY++] = RY, --vY > 0)
                  for (let rY = 0; rY < vY; rY++) oY[uY++] = YY[yY++]
              } for (iY = 0; iY < FY; iY++) AY = oY[iY], RY = oY[iY + FY], OY = oY[iY + 2 * FY], gY = oY[iY + 3 * FY], IY(EY, AY, RY, OY, gY, (rY.height - DY) * FY * 3 + 3 * iY);
          DY--
        }
        return EY
      }(YY, rY)
    }

    function aY(YY, rY) {
      let DY = rY.height;
      const FY = rY.width;
      let AY, RY, OY, gY, aY, vY = rY.dataPosition;
      const uY = new ArrayBuffer(rY.width * rY.height * 4 * 3),
        sY = new Float32Array(uY);
      for (; DY > 0;) {
        for (aY = 0; aY < rY.width; aY++) AY = YY[vY++], RY = YY[vY++], OY = YY[vY++], gY = YY[vY++], IY(sY, AY, RY, OY, gY, (rY.height - DY) * FY * 3 + 3 * aY);
        DY--
      }
      return sY
    }
    AY.FACE_LEFT = [new FY.r(-1, -1, -1), new FY.r(1, -1, -1), new FY.r(-1, 1, -1), new FY.r(1, 1, -1)], AY.FACE_RIGHT = [new FY.r(1, -1, 1), new FY.r(-1, -1, 1), new FY.r(1, 1, 1), new FY.r(-1, 1, 1)], AY.FACE_FRONT = [new FY.r(1, -1, -1), new FY.r(1, -1, 1), new FY.r(1, 1, -1), new FY.r(1, 1, 1)], AY.FACE_BACK = [new FY.r(-1, -1, 1), new FY.r(-1, -1, -1), new FY.r(-1, 1, 1), new FY.r(-1, 1, -1)], AY.FACE_DOWN = [new FY.r(1, 1, -1), new FY.r(1, 1, 1), new FY.r(-1, 1, -1), new FY.r(-1, 1, 1)], AY.FACE_UP = [new FY.r(-1, -1, -1), new FY.r(-1, -1, 1), new FY.r(1, -1, -1), new FY.r(1, -1, 1)];
    class vY {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(YY, rY, DY) {
        const FY = new Uint8Array(YY.buffer, YY.byteOffset, YY.byteLength),
          AY = OY(FY),
          IY = gY(FY, AY),
          RY = AY.width * AY.height,
          aY = new Float32Array(4 * RY);
        for (let OY = 0; OY < RY; OY += 1) aY[4 * OY] = IY[3 * OY], aY[4 * OY + 1] = IY[3 * OY + 1], aY[4 * OY + 2] = IY[3 * OY + 2], aY[4 * OY + 3] = 1;
        DY(AY.width, AY.height, rY.generateMipMaps, !1, (() => {
          const YY = rY.ky();
          rY.type = 1, rY.format = 5, rY._gammaSpace = !1, YY._uploadDataToTextureDirectly(rY, aY)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);