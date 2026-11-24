export const id = 312;
export const ids = [312];
export const modules = {
  41749: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      _HDRTextureLoader: () => RD
    });
    var pD = wD(37079);
    class sD {
      static ConvertPanoramaToCubemap(DD, zD, wD, pD) {
        let sD, KD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          rD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!DD) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (DD.length != zD * wD * 3) {
          if (DD.length != zD * wD * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          sD = 4
        } else sD = 3;
        return {
          front: this.CreateCubemapTexture(pD, this.FACE_FRONT, DD, zD, wD, KD, rD, sD),
          back: this.CreateCubemapTexture(pD, this.FACE_BACK, DD, zD, wD, KD, rD, sD),
          left: this.CreateCubemapTexture(pD, this.FACE_LEFT, DD, zD, wD, KD, rD, sD),
          right: this.CreateCubemapTexture(pD, this.FACE_RIGHT, DD, zD, wD, KD, rD, sD),
          up: this.CreateCubemapTexture(pD, this.FACE_UP, DD, zD, wD, KD, rD, sD),
          down: this.CreateCubemapTexture(pD, this.FACE_DOWN, DD, zD, wD, KD, rD, sD),
          size: pD,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(DD, zD, wD, pD, sD, KD, rD, LD) {
        const cD = new ArrayBuffer(DD * DD * 4 * 3),
          gD = new Float32Array(cD),
          RD = KD ? Math.max(1, Math.round(pD / 4 / DD)) : 1,
          AD = 1 / RD,
          UD = AD * AD,
          fD = zD[1].subtract(zD[0]).scale(AD / DD),
          ID = zD[3].subtract(zD[2]).scale(AD / DD),
          BD = 1 / DD;
        let GD = 0;
        for (let hD = 0; hD < DD; hD++)
          for (let KD = 0; KD < RD; KD++) {
            let KD = zD[0],
              cD = zD[2];
            for (let zD = 0; zD < DD; zD++)
              for (let AD = 0; AD < RD; AD++) {
                const RD = cD.subtract(KD).scale(GD).add(KD);
                RD.normalize();
                const AD = this.CalcProjectionSpherical(RD, wD, pD, sD, LD, rD);
                gD[hD * DD * 3 + 3 * zD + 0] += AD.r * UD, gD[hD * DD * 3 + 3 * zD + 1] += AD.g * UD, gD[hD * DD * 3 + 3 * zD + 2] += AD.b * UD, KD = KD.add(fD), cD = cD.add(ID)
              }
            GD += BD * AD
          }
        return gD
      }
      static CalcProjectionSpherical(DD, zD, wD, pD, sD, KD) {
        let rD = Math.atan2(DD.z, DD.x);
        const LD = Math.acos(DD.y);
        for (; rD < -Math.PI;) rD += 2 * Math.PI;
        for (; rD > Math.PI;) rD -= 2 * Math.PI;
        let cD = rD / Math.PI;
        const gD = LD / Math.PI;
        cD = .5 * cD + .5;
        let RD = Math.round(cD * wD);
        RD < 0 ? RD = 0 : RD >= wD && (RD = wD - 1);
        let AD = Math.round(gD * pD);
        AD < 0 ? AD = 0 : AD >= pD && (AD = pD - 1);
        const UD = KD ? pD - AD - 1 : AD;
        return {
          r: zD[UD * wD * sD + RD * sD + 0],
          g: zD[UD * wD * sD + RD * sD + 1],
          b: zD[UD * wD * sD + RD * sD + 2]
        }
      }
    }

    function KD(DD, zD, wD, pD, sD, KD) {
      sD > 0 ? (sD = function(DD, zD) {
        return zD > 1023 ? DD * Math.pow(2, 1023) * Math.pow(2, zD - 1023) : zD < -1074 ? DD * Math.pow(2, -1074) * Math.pow(2, zD + 1074) : DD * Math.pow(2, zD)
      }(1, sD - 136), DD[KD + 0] = zD * sD, DD[KD + 1] = wD * sD, DD[KD + 2] = pD * sD) : (DD[KD + 0] = 0, DD[KD + 1] = 0, DD[KD + 2] = 0)
    }

    function rD(DD, zD) {
      let wD, pD = "";
      for (let sD = zD; sD < DD.length - zD && (wD = String.fromCharCode(DD[sD]), "\n" != wD); sD++) pD += wD;
      return pD
    }

    function LD(DD) {
      let zD = rD(DD, 0);
      if ("#" != zD[0] || "?" != zD[1]) throw "Bad HDR Format.";
      let wD = !1,
        pD = !1,
        sD = 0;
      do {
        sD += zD.length + 1, zD = rD(DD, sD), "FORMAT=32-bit_rle_rgbe" == zD ? pD = !0 : 0 == zD.length && (wD = !0)
      } while (!wD);
      if (!pD) throw "HDR Bad header format, unsupported FORMAT";
      sD += zD.length + 1, zD = rD(DD, sD);
      const KD = /^-Y (.*) \+X (.*)$/g.exec(zD);
      if (!KD || KD.length < 3) throw "HDR Bad header format, no size";
      const LD = parseInt(KD[2]),
        cD = parseInt(KD[1]);
      if (LD < 8 || LD > 32767) throw "HDR Bad header format, unsupported size";
      return sD += zD.length + 1, {
        height: cD,
        width: LD,
        dataPosition: sD
      }
    }

    function cD(DD, zD) {
      return function(DD, zD) {
        let wD = zD.height;
        const pD = zD.width;
        let sD, rD, LD, cD, RD, AD, UD, fD, ID = zD.dataPosition;
        const BD = new ArrayBuffer(4 * pD),
          GD = new Uint8Array(BD),
          hD = new ArrayBuffer(zD.width * zD.height * 4 * 3),
          nD = new Float32Array(hD);
        for (; wD > 0;) {
          if (sD = DD[ID++], rD = DD[ID++], LD = DD[ID++], cD = DD[ID++], 2 != sD || 2 != rD || 128 & LD || zD.width < 8 || zD.width > 32767) return gD(DD, zD);
          if ((LD << 8 | cD) != pD) throw "HDR Bad header format, wrong scan line width";
          for (AD = 0, fD = 0; fD < 4; fD++)
            for (UD = (fD + 1) * pD; AD < UD;)
              if (sD = DD[ID++], rD = DD[ID++], sD > 128) {
                if (RD = sD - 128, 0 == RD || RD > UD - AD) throw "HDR Bad Format, bad scanline data (run)";
                for (; RD-- > 0;) GD[AD++] = rD
              } else {
                if (RD = sD, 0 == RD || RD > UD - AD) throw "HDR Bad Format, bad scanline data (non-run)";
                if (GD[AD++] = rD, --RD > 0)
                  for (let zD = 0; zD < RD; zD++) GD[AD++] = DD[ID++]
              } for (fD = 0; fD < pD; fD++) sD = GD[fD], rD = GD[fD + pD], LD = GD[fD + 2 * pD], cD = GD[fD + 3 * pD], KD(nD, sD, rD, LD, cD, (zD.height - wD) * pD * 3 + 3 * fD);
          wD--
        }
        return nD
      }(DD, zD)
    }

    function gD(DD, zD) {
      let wD = zD.height;
      const pD = zD.width;
      let sD, rD, LD, cD, gD, RD = zD.dataPosition;
      const AD = new ArrayBuffer(zD.width * zD.height * 4 * 3),
        UD = new Float32Array(AD);
      for (; wD > 0;) {
        for (gD = 0; gD < zD.width; gD++) sD = DD[RD++], rD = DD[RD++], LD = DD[RD++], cD = DD[RD++], KD(UD, sD, rD, LD, cD, (zD.height - wD) * pD * 3 + 3 * gD);
        wD--
      }
      return UD
    }
    sD.FACE_LEFT = [new pD.s(-1, -1, -1), new pD.s(1, -1, -1), new pD.s(-1, 1, -1), new pD.s(1, 1, -1)], sD.FACE_RIGHT = [new pD.s(1, -1, 1), new pD.s(-1, -1, 1), new pD.s(1, 1, 1), new pD.s(-1, 1, 1)], sD.FACE_FRONT = [new pD.s(1, -1, -1), new pD.s(1, -1, 1), new pD.s(1, 1, -1), new pD.s(1, 1, 1)], sD.FACE_BACK = [new pD.s(-1, -1, 1), new pD.s(-1, -1, -1), new pD.s(-1, 1, 1), new pD.s(-1, 1, -1)], sD.FACE_DOWN = [new pD.s(1, 1, -1), new pD.s(1, 1, 1), new pD.s(-1, 1, -1), new pD.s(-1, 1, 1)], sD.FACE_UP = [new pD.s(-1, -1, -1), new pD.s(-1, -1, 1), new pD.s(1, -1, -1), new pD.s(1, -1, 1)];
    class RD {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(DD, zD, wD) {
        const pD = new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength),
          sD = LD(pD),
          KD = cD(pD, sD),
          rD = sD.width * sD.height,
          gD = new Float32Array(4 * rD);
        for (let LD = 0; LD < rD; LD += 1) gD[4 * LD] = KD[3 * LD], gD[4 * LD + 1] = KD[3 * LD + 1], gD[4 * LD + 2] = KD[3 * LD + 2], gD[4 * LD + 3] = 1;
        wD(sD.width, sD.height, zD.generateMipMaps, !1, (() => {
          const DD = zD.iI();
          zD.type = 1, zD.format = 5, zD._gammaSpace = !1, DD._uploadDataToTextureDirectly(zD, gD)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);