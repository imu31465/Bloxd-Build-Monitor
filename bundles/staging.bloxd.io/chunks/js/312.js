export const id = 312;
export const ids = [312];
export const modules = {
  41657: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      _HDRTextureLoader: () => FC
    });
    var QC = ZC(36963);
    class wC {
      static ConvertPanoramaToCubemap(CC, zC, ZC, QC) {
        let wC, bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!CC) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (CC.length != zC * ZC * 3) {
          if (CC.length != zC * ZC * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          wC = 4
        } else wC = 3;
        return {
          front: this.CreateCubemapTexture(QC, this.FACE_FRONT, CC, zC, ZC, bC, nC, wC),
          back: this.CreateCubemapTexture(QC, this.FACE_BACK, CC, zC, ZC, bC, nC, wC),
          left: this.CreateCubemapTexture(QC, this.FACE_LEFT, CC, zC, ZC, bC, nC, wC),
          right: this.CreateCubemapTexture(QC, this.FACE_RIGHT, CC, zC, ZC, bC, nC, wC),
          up: this.CreateCubemapTexture(QC, this.FACE_UP, CC, zC, ZC, bC, nC, wC),
          down: this.CreateCubemapTexture(QC, this.FACE_DOWN, CC, zC, ZC, bC, nC, wC),
          size: QC,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(CC, zC, ZC, QC, wC, bC, nC, fC) {
        const oC = new ArrayBuffer(CC * CC * 4 * 3),
          qC = new Float32Array(oC),
          FC = bC ? Math.max(1, Math.round(QC / 4 / CC)) : 1,
          WC = 1 / FC,
          NC = WC * WC,
          MC = zC[1].subtract(zC[0]).scale(WC / CC),
          gC = zC[3].subtract(zC[2]).scale(WC / CC),
          SC = 1 / CC;
        let pC = 0;
        for (let PC = 0; PC < CC; PC++)
          for (let bC = 0; bC < FC; bC++) {
            let bC = zC[0],
              oC = zC[2];
            for (let zC = 0; zC < CC; zC++)
              for (let WC = 0; WC < FC; WC++) {
                const FC = oC.subtract(bC).scale(pC).add(bC);
                FC.normalize();
                const WC = this.CalcProjectionSpherical(FC, ZC, QC, wC, fC, nC);
                qC[PC * CC * 3 + 3 * zC + 0] += WC.r * NC, qC[PC * CC * 3 + 3 * zC + 1] += WC.g * NC, qC[PC * CC * 3 + 3 * zC + 2] += WC.b * NC, bC = bC.add(MC), oC = oC.add(gC)
              }
            pC += SC * WC
          }
        return qC
      }
      static CalcProjectionSpherical(CC, zC, ZC, QC, wC, bC) {
        let nC = Math.atan2(CC.z, CC.x);
        const fC = Math.acos(CC.y);
        for (; nC < -Math.PI;) nC += 2 * Math.PI;
        for (; nC > Math.PI;) nC -= 2 * Math.PI;
        let oC = nC / Math.PI;
        const qC = fC / Math.PI;
        oC = .5 * oC + .5;
        let FC = Math.round(oC * ZC);
        FC < 0 ? FC = 0 : FC >= ZC && (FC = ZC - 1);
        let WC = Math.round(qC * QC);
        WC < 0 ? WC = 0 : WC >= QC && (WC = QC - 1);
        const NC = bC ? QC - WC - 1 : WC;
        return {
          r: zC[NC * ZC * wC + FC * wC + 0],
          g: zC[NC * ZC * wC + FC * wC + 1],
          b: zC[NC * ZC * wC + FC * wC + 2]
        }
      }
    }

    function bC(CC, zC, ZC, QC, wC, bC) {
      wC > 0 ? (wC = function(CC, zC) {
        return zC > 1023 ? CC * Math.pow(2, 1023) * Math.pow(2, zC - 1023) : zC < -1074 ? CC * Math.pow(2, -1074) * Math.pow(2, zC + 1074) : CC * Math.pow(2, zC)
      }(1, wC - 136), CC[bC + 0] = zC * wC, CC[bC + 1] = ZC * wC, CC[bC + 2] = QC * wC) : (CC[bC + 0] = 0, CC[bC + 1] = 0, CC[bC + 2] = 0)
    }

    function nC(CC, zC) {
      let ZC, QC = "";
      for (let wC = zC; wC < CC.length - zC && (ZC = String.fromCharCode(CC[wC]), "\n" != ZC); wC++) QC += ZC;
      return QC
    }

    function fC(CC) {
      let zC = nC(CC, 0);
      if ("#" != zC[0] || "?" != zC[1]) throw "Bad HDR Format.";
      let ZC = !1,
        QC = !1,
        wC = 0;
      do {
        wC += zC.length + 1, zC = nC(CC, wC), "FORMAT=32-bit_rle_rgbe" == zC ? QC = !0 : 0 == zC.length && (ZC = !0)
      } while (!ZC);
      if (!QC) throw "HDR Bad header format, unsupported FORMAT";
      wC += zC.length + 1, zC = nC(CC, wC);
      const bC = /^-Y (.*) \+X (.*)$/g.exec(zC);
      if (!bC || bC.length < 3) throw "HDR Bad header format, no size";
      const fC = parseInt(bC[2]),
        oC = parseInt(bC[1]);
      if (fC < 8 || fC > 32767) throw "HDR Bad header format, unsupported size";
      return wC += zC.length + 1, {
        height: oC,
        width: fC,
        dataPosition: wC
      }
    }

    function oC(CC, zC) {
      return function(CC, zC) {
        let ZC = zC.height;
        const QC = zC.width;
        let wC, nC, fC, oC, FC, WC, NC, MC, gC = zC.dataPosition;
        const SC = new ArrayBuffer(4 * QC),
          pC = new Uint8Array(SC),
          PC = new ArrayBuffer(zC.width * zC.height * 4 * 3),
          GC = new Float32Array(PC);
        for (; ZC > 0;) {
          if (wC = CC[gC++], nC = CC[gC++], fC = CC[gC++], oC = CC[gC++], 2 != wC || 2 != nC || 128 & fC || zC.width < 8 || zC.width > 32767) return qC(CC, zC);
          if ((fC << 8 | oC) != QC) throw "HDR Bad header format, wrong scan line width";
          for (WC = 0, MC = 0; MC < 4; MC++)
            for (NC = (MC + 1) * QC; WC < NC;)
              if (wC = CC[gC++], nC = CC[gC++], wC > 128) {
                if (FC = wC - 128, 0 == FC || FC > NC - WC) throw "HDR Bad Format, bad scanline data (run)";
                for (; FC-- > 0;) pC[WC++] = nC
              } else {
                if (FC = wC, 0 == FC || FC > NC - WC) throw "HDR Bad Format, bad scanline data (non-run)";
                if (pC[WC++] = nC, --FC > 0)
                  for (let zC = 0; zC < FC; zC++) pC[WC++] = CC[gC++]
              } for (MC = 0; MC < QC; MC++) wC = pC[MC], nC = pC[MC + QC], fC = pC[MC + 2 * QC], oC = pC[MC + 3 * QC], bC(GC, wC, nC, fC, oC, (zC.height - ZC) * QC * 3 + 3 * MC);
          ZC--
        }
        return GC
      }(CC, zC)
    }

    function qC(CC, zC) {
      let ZC = zC.height;
      const QC = zC.width;
      let wC, nC, fC, oC, qC, FC = zC.dataPosition;
      const WC = new ArrayBuffer(zC.width * zC.height * 4 * 3),
        NC = new Float32Array(WC);
      for (; ZC > 0;) {
        for (qC = 0; qC < zC.width; qC++) wC = CC[FC++], nC = CC[FC++], fC = CC[FC++], oC = CC[FC++], bC(NC, wC, nC, fC, oC, (zC.height - ZC) * QC * 3 + 3 * qC);
        ZC--
      }
      return NC
    }
    wC.FACE_LEFT = [new QC.r(-1, -1, -1), new QC.r(1, -1, -1), new QC.r(-1, 1, -1), new QC.r(1, 1, -1)], wC.FACE_RIGHT = [new QC.r(1, -1, 1), new QC.r(-1, -1, 1), new QC.r(1, 1, 1), new QC.r(-1, 1, 1)], wC.FACE_FRONT = [new QC.r(1, -1, -1), new QC.r(1, -1, 1), new QC.r(1, 1, -1), new QC.r(1, 1, 1)], wC.FACE_BACK = [new QC.r(-1, -1, 1), new QC.r(-1, -1, -1), new QC.r(-1, 1, 1), new QC.r(-1, 1, -1)], wC.FACE_DOWN = [new QC.r(1, 1, -1), new QC.r(1, 1, 1), new QC.r(-1, 1, -1), new QC.r(-1, 1, 1)], wC.FACE_UP = [new QC.r(-1, -1, -1), new QC.r(-1, -1, 1), new QC.r(1, -1, -1), new QC.r(1, -1, 1)];
    class FC {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(CC, zC, ZC) {
        const QC = new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength),
          wC = fC(QC),
          bC = oC(QC, wC),
          nC = wC.width * wC.height,
          qC = new Float32Array(4 * nC);
        for (let fC = 0; fC < nC; fC += 1) qC[4 * fC] = bC[3 * fC], qC[4 * fC + 1] = bC[3 * fC + 1], qC[4 * fC + 2] = bC[3 * fC + 2], qC[4 * fC + 3] = 1;
        ZC(wC.width, wC.height, zC.generateMipMaps, !1, (() => {
          const CC = zC.mg();
          zC.type = 1, zC.format = 5, zC._gammaSpace = !1, CC._uploadDataToTextureDirectly(zC, qC)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);