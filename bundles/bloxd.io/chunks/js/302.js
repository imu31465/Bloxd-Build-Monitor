export const id = 302;
export const ids = [302];
export const modules = {
  40956: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      _HDRTextureLoader: () => SD
    });
    var ID = cD(36446);
    class pD {
      static ConvertPanoramaToCubemap(DD, CD, cD, ID) {
        let pD, iD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          fD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!DD) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (DD.length != CD * cD * 3) {
          if (DD.length != CD * cD * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          pD = 4
        } else pD = 3;
        return {
          front: this.CreateCubemapTexture(ID, this.FACE_FRONT, DD, CD, cD, iD, fD, pD),
          back: this.CreateCubemapTexture(ID, this.FACE_BACK, DD, CD, cD, iD, fD, pD),
          left: this.CreateCubemapTexture(ID, this.FACE_LEFT, DD, CD, cD, iD, fD, pD),
          right: this.CreateCubemapTexture(ID, this.FACE_RIGHT, DD, CD, cD, iD, fD, pD),
          up: this.CreateCubemapTexture(ID, this.FACE_UP, DD, CD, cD, iD, fD, pD),
          down: this.CreateCubemapTexture(ID, this.FACE_DOWN, DD, CD, cD, iD, fD, pD),
          size: ID,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(DD, CD, cD, ID, pD, iD, fD, bD) {
        const QD = new ArrayBuffer(DD * DD * 4 * 3),
          wD = new Float32Array(QD),
          SD = iD ? Math.max(1, Math.round(ID / 4 / DD)) : 1,
          BD = 1 / SD,
          yD = BD * BD,
          MD = CD[1].subtract(CD[0]).scale(BD / DD),
          tD = CD[3].subtract(CD[2]).scale(BD / DD),
          ZD = 1 / DD;
        let oD = 0;
        for (let vD = 0; vD < DD; vD++)
          for (let iD = 0; iD < SD; iD++) {
            let iD = CD[0],
              QD = CD[2];
            for (let CD = 0; CD < DD; CD++)
              for (let BD = 0; BD < SD; BD++) {
                const SD = QD.subtract(iD).scale(oD).add(iD);
                SD.normalize();
                const BD = this.CalcProjectionSpherical(SD, cD, ID, pD, bD, fD);
                wD[vD * DD * 3 + 3 * CD + 0] += BD.r * yD, wD[vD * DD * 3 + 3 * CD + 1] += BD.g * yD, wD[vD * DD * 3 + 3 * CD + 2] += BD.b * yD, iD = iD.add(MD), QD = QD.add(tD)
              }
            oD += ZD * BD
          }
        return wD
      }
      static CalcProjectionSpherical(DD, CD, cD, ID, pD, iD) {
        let fD = Math.atan2(DD.z, DD.x);
        const bD = Math.acos(DD.y);
        for (; fD < -Math.PI;) fD += 2 * Math.PI;
        for (; fD > Math.PI;) fD -= 2 * Math.PI;
        let QD = fD / Math.PI;
        const wD = bD / Math.PI;
        QD = .5 * QD + .5;
        let SD = Math.round(QD * cD);
        SD < 0 ? SD = 0 : SD >= cD && (SD = cD - 1);
        let BD = Math.round(wD * ID);
        BD < 0 ? BD = 0 : BD >= ID && (BD = ID - 1);
        const yD = iD ? ID - BD - 1 : BD;
        return {
          r: CD[yD * cD * pD + SD * pD + 0],
          g: CD[yD * cD * pD + SD * pD + 1],
          b: CD[yD * cD * pD + SD * pD + 2]
        }
      }
    }

    function iD(DD, CD, cD, ID, pD, iD) {
      pD > 0 ? (pD = function(DD, CD) {
        return CD > 1023 ? DD * Math.pow(2, 1023) * Math.pow(2, CD - 1023) : CD < -1074 ? DD * Math.pow(2, -1074) * Math.pow(2, CD + 1074) : DD * Math.pow(2, CD)
      }(1, pD - 136), DD[iD + 0] = CD * pD, DD[iD + 1] = cD * pD, DD[iD + 2] = ID * pD) : (DD[iD + 0] = 0, DD[iD + 1] = 0, DD[iD + 2] = 0)
    }

    function fD(DD, CD) {
      let cD, ID = "";
      for (let pD = CD; pD < DD.length - CD && (cD = String.fromCharCode(DD[pD]), "\n" != cD); pD++) ID += cD;
      return ID
    }

    function bD(DD) {
      let CD = fD(DD, 0);
      if ("#" != CD[0] || "?" != CD[1]) throw "Bad HDR Format.";
      let cD = !1,
        ID = !1,
        pD = 0;
      do {
        pD += CD.length + 1, CD = fD(DD, pD), "FORMAT=32-bit_rle_rgbe" == CD ? ID = !0 : 0 == CD.length && (cD = !0)
      } while (!cD);
      if (!ID) throw "HDR Bad header format, unsupported FORMAT";
      pD += CD.length + 1, CD = fD(DD, pD);
      const iD = /^-Y (.*) \+X (.*)$/g.exec(CD);
      if (!iD || iD.length < 3) throw "HDR Bad header format, no size";
      const bD = parseInt(iD[2]),
        QD = parseInt(iD[1]);
      if (bD < 8 || bD > 32767) throw "HDR Bad header format, unsupported size";
      return pD += CD.length + 1, {
        height: QD,
        width: bD,
        dataPosition: pD
      }
    }

    function QD(DD, CD) {
      return function(DD, CD) {
        let cD = CD.height;
        const ID = CD.width;
        let pD, fD, bD, QD, SD, BD, yD, MD, tD = CD.dataPosition;
        const ZD = new ArrayBuffer(4 * ID),
          oD = new Uint8Array(ZD),
          vD = new ArrayBuffer(CD.width * CD.height * 4 * 3),
          ND = new Float32Array(vD);
        for (; cD > 0;) {
          if (pD = DD[tD++], fD = DD[tD++], bD = DD[tD++], QD = DD[tD++], 2 != pD || 2 != fD || 128 & bD || CD.width < 8 || CD.width > 32767) return wD(DD, CD);
          if ((bD << 8 | QD) != ID) throw "HDR Bad header format, wrong scan line width";
          for (BD = 0, MD = 0; MD < 4; MD++)
            for (yD = (MD + 1) * ID; BD < yD;)
              if (pD = DD[tD++], fD = DD[tD++], pD > 128) {
                if (SD = pD - 128, 0 == SD || SD > yD - BD) throw "HDR Bad Format, bad scanline data (run)";
                for (; SD-- > 0;) oD[BD++] = fD
              } else {
                if (SD = pD, 0 == SD || SD > yD - BD) throw "HDR Bad Format, bad scanline data (non-run)";
                if (oD[BD++] = fD, --SD > 0)
                  for (let CD = 0; CD < SD; CD++) oD[BD++] = DD[tD++]
              } for (MD = 0; MD < ID; MD++) pD = oD[MD], fD = oD[MD + ID], bD = oD[MD + 2 * ID], QD = oD[MD + 3 * ID], iD(ND, pD, fD, bD, QD, (CD.height - cD) * ID * 3 + 3 * MD);
          cD--
        }
        return ND
      }(DD, CD)
    }

    function wD(DD, CD) {
      let cD = CD.height;
      const ID = CD.width;
      let pD, fD, bD, QD, wD, SD = CD.dataPosition;
      const BD = new ArrayBuffer(CD.width * CD.height * 4 * 3),
        yD = new Float32Array(BD);
      for (; cD > 0;) {
        for (wD = 0; wD < CD.width; wD++) pD = DD[SD++], fD = DD[SD++], bD = DD[SD++], QD = DD[SD++], iD(yD, pD, fD, bD, QD, (CD.height - cD) * ID * 3 + 3 * wD);
        cD--
      }
      return yD
    }
    pD.FACE_LEFT = [new ID.p(-1, -1, -1), new ID.p(1, -1, -1), new ID.p(-1, 1, -1), new ID.p(1, 1, -1)], pD.FACE_RIGHT = [new ID.p(1, -1, 1), new ID.p(-1, -1, 1), new ID.p(1, 1, 1), new ID.p(-1, 1, 1)], pD.FACE_FRONT = [new ID.p(1, -1, -1), new ID.p(1, -1, 1), new ID.p(1, 1, -1), new ID.p(1, 1, 1)], pD.FACE_BACK = [new ID.p(-1, -1, 1), new ID.p(-1, -1, -1), new ID.p(-1, 1, 1), new ID.p(-1, 1, -1)], pD.FACE_DOWN = [new ID.p(1, 1, -1), new ID.p(1, 1, 1), new ID.p(-1, 1, -1), new ID.p(-1, 1, 1)], pD.FACE_UP = [new ID.p(-1, -1, -1), new ID.p(-1, -1, 1), new ID.p(1, -1, -1), new ID.p(1, -1, 1)];
    class SD {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(DD, CD, cD) {
        const ID = new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength),
          pD = bD(ID),
          iD = QD(ID, pD),
          fD = pD.width * pD.height,
          wD = new Float32Array(4 * fD);
        for (let bD = 0; bD < fD; bD += 1) wD[4 * bD] = iD[3 * bD], wD[4 * bD + 1] = iD[3 * bD + 1], wD[4 * bD + 2] = iD[3 * bD + 2], wD[4 * bD + 3] = 1;
        cD(pD.width, pD.height, CD.generateMipMaps, !1, (() => {
          const DD = CD.DZ();
          CD.type = 1, CD.format = 5, CD._gammaSpace = !1, DD._uploadDataToTextureDirectly(CD, wD)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);