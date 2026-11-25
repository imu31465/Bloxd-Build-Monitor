export const id = 621;
export const ids = [621];
export const modules = {
  44487: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      _HDRTextureLoader: () => zM
    });
    var OM = iM(38040);
    class SM {
      static ConvertPanoramaToCubemap(MM, rM, iM, OM) {
        let SM, jM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          aM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!MM) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (MM.length != rM * iM * 3) {
          if (MM.length != rM * iM * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          SM = 4
        } else SM = 3;
        return {
          front: this.CreateCubemapTexture(OM, this.FACE_FRONT, MM, rM, iM, jM, aM, SM),
          back: this.CreateCubemapTexture(OM, this.FACE_BACK, MM, rM, iM, jM, aM, SM),
          left: this.CreateCubemapTexture(OM, this.FACE_LEFT, MM, rM, iM, jM, aM, SM),
          right: this.CreateCubemapTexture(OM, this.FACE_RIGHT, MM, rM, iM, jM, aM, SM),
          up: this.CreateCubemapTexture(OM, this.FACE_UP, MM, rM, iM, jM, aM, SM),
          down: this.CreateCubemapTexture(OM, this.FACE_DOWN, MM, rM, iM, jM, aM, SM),
          size: OM,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(MM, rM, iM, OM, SM, jM, aM, PM) {
        const nM = new ArrayBuffer(MM * MM * 4 * 3),
          QM = new Float32Array(nM),
          zM = jM ? Math.max(1, Math.round(OM / 4 / MM)) : 1,
          LM = 1 / zM,
          mM = LM * LM,
          HM = rM[1].subtract(rM[0]).scale(LM / MM),
          hM = rM[3].subtract(rM[2]).scale(LM / MM),
          JM = 1 / MM;
        let dM = 0;
        for (let yM = 0; yM < MM; yM++)
          for (let jM = 0; jM < zM; jM++) {
            let jM = rM[0],
              nM = rM[2];
            for (let rM = 0; rM < MM; rM++)
              for (let LM = 0; LM < zM; LM++) {
                const zM = nM.subtract(jM).scale(dM).add(jM);
                zM.normalize();
                const LM = this.CalcProjectionSpherical(zM, iM, OM, SM, PM, aM);
                QM[yM * MM * 3 + 3 * rM + 0] += LM.r * mM, QM[yM * MM * 3 + 3 * rM + 1] += LM.g * mM, QM[yM * MM * 3 + 3 * rM + 2] += LM.b * mM, jM = jM.add(HM), nM = nM.add(hM)
              }
            dM += JM * LM
          }
        return QM
      }
      static CalcProjectionSpherical(MM, rM, iM, OM, SM, jM) {
        let aM = Math.atan2(MM.z, MM.x);
        const PM = Math.acos(MM.y);
        for (; aM < -Math.PI;) aM += 2 * Math.PI;
        for (; aM > Math.PI;) aM -= 2 * Math.PI;
        let nM = aM / Math.PI;
        const QM = PM / Math.PI;
        nM = .5 * nM + .5;
        let zM = Math.round(nM * iM);
        zM < 0 ? zM = 0 : zM >= iM && (zM = iM - 1);
        let LM = Math.round(QM * OM);
        LM < 0 ? LM = 0 : LM >= OM && (LM = OM - 1);
        const mM = jM ? OM - LM - 1 : LM;
        return {
          r: rM[mM * iM * SM + zM * SM + 0],
          g: rM[mM * iM * SM + zM * SM + 1],
          b: rM[mM * iM * SM + zM * SM + 2]
        }
      }
    }

    function jM(MM, rM, iM, OM, SM, jM) {
      SM > 0 ? (SM = function(MM, rM) {
        return rM > 1023 ? MM * Math.pow(2, 1023) * Math.pow(2, rM - 1023) : rM < -1074 ? MM * Math.pow(2, -1074) * Math.pow(2, rM + 1074) : MM * Math.pow(2, rM)
      }(1, SM - 136), MM[jM + 0] = rM * SM, MM[jM + 1] = iM * SM, MM[jM + 2] = OM * SM) : (MM[jM + 0] = 0, MM[jM + 1] = 0, MM[jM + 2] = 0)
    }

    function aM(MM, rM) {
      let iM, OM = "";
      for (let SM = rM; SM < MM.length - rM && (iM = String.fromCharCode(MM[SM]), "\n" != iM); SM++) OM += iM;
      return OM
    }

    function PM(MM) {
      let rM = aM(MM, 0);
      if ("#" != rM[0] || "?" != rM[1]) throw "Bad HDR Format.";
      let iM = !1,
        OM = !1,
        SM = 0;
      do {
        SM += rM.length + 1, rM = aM(MM, SM), "FORMAT=32-bit_rle_rgbe" == rM ? OM = !0 : 0 == rM.length && (iM = !0)
      } while (!iM);
      if (!OM) throw "HDR Bad header format, unsupported FORMAT";
      SM += rM.length + 1, rM = aM(MM, SM);
      const jM = /^-Y (.*) \+X (.*)$/g.exec(rM);
      if (!jM || jM.length < 3) throw "HDR Bad header format, no size";
      const PM = parseInt(jM[2]),
        nM = parseInt(jM[1]);
      if (PM < 8 || PM > 32767) throw "HDR Bad header format, unsupported size";
      return SM += rM.length + 1, {
        height: nM,
        width: PM,
        dataPosition: SM
      }
    }

    function nM(MM, rM) {
      return function(MM, rM) {
        let iM = rM.height;
        const OM = rM.width;
        let SM, aM, PM, nM, zM, LM, mM, HM, hM = rM.dataPosition;
        const JM = new ArrayBuffer(4 * OM),
          dM = new Uint8Array(JM),
          yM = new ArrayBuffer(rM.width * rM.height * 4 * 3),
          lM = new Float32Array(yM);
        for (; iM > 0;) {
          if (SM = MM[hM++], aM = MM[hM++], PM = MM[hM++], nM = MM[hM++], 2 != SM || 2 != aM || 128 & PM || rM.width < 8 || rM.width > 32767) return QM(MM, rM);
          if ((PM << 8 | nM) != OM) throw "HDR Bad header format, wrong scan line width";
          for (LM = 0, HM = 0; HM < 4; HM++)
            for (mM = (HM + 1) * OM; LM < mM;)
              if (SM = MM[hM++], aM = MM[hM++], SM > 128) {
                if (zM = SM - 128, 0 == zM || zM > mM - LM) throw "HDR Bad Format, bad scanline data (run)";
                for (; zM-- > 0;) dM[LM++] = aM
              } else {
                if (zM = SM, 0 == zM || zM > mM - LM) throw "HDR Bad Format, bad scanline data (non-run)";
                if (dM[LM++] = aM, --zM > 0)
                  for (let rM = 0; rM < zM; rM++) dM[LM++] = MM[hM++]
              } for (HM = 0; HM < OM; HM++) SM = dM[HM], aM = dM[HM + OM], PM = dM[HM + 2 * OM], nM = dM[HM + 3 * OM], jM(lM, SM, aM, PM, nM, (rM.height - iM) * OM * 3 + 3 * HM);
          iM--
        }
        return lM
      }(MM, rM)
    }

    function QM(MM, rM) {
      let iM = rM.height;
      const OM = rM.width;
      let SM, aM, PM, nM, QM, zM = rM.dataPosition;
      const LM = new ArrayBuffer(rM.width * rM.height * 4 * 3),
        mM = new Float32Array(LM);
      for (; iM > 0;) {
        for (QM = 0; QM < rM.width; QM++) SM = MM[zM++], aM = MM[zM++], PM = MM[zM++], nM = MM[zM++], jM(mM, SM, aM, PM, nM, (rM.height - iM) * OM * 3 + 3 * QM);
        iM--
      }
      return mM
    }
    SM.FACE_LEFT = [new OM.q(-1, -1, -1), new OM.q(1, -1, -1), new OM.q(-1, 1, -1), new OM.q(1, 1, -1)], SM.FACE_RIGHT = [new OM.q(1, -1, 1), new OM.q(-1, -1, 1), new OM.q(1, 1, 1), new OM.q(-1, 1, 1)], SM.FACE_FRONT = [new OM.q(1, -1, -1), new OM.q(1, -1, 1), new OM.q(1, 1, -1), new OM.q(1, 1, 1)], SM.FACE_BACK = [new OM.q(-1, -1, 1), new OM.q(-1, -1, -1), new OM.q(-1, 1, 1), new OM.q(-1, 1, -1)], SM.FACE_DOWN = [new OM.q(1, 1, -1), new OM.q(1, 1, 1), new OM.q(-1, 1, -1), new OM.q(-1, 1, 1)], SM.FACE_UP = [new OM.q(-1, -1, -1), new OM.q(-1, -1, 1), new OM.q(1, -1, -1), new OM.q(1, -1, 1)];
    class zM {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(MM, rM, iM) {
        const OM = new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength),
          SM = PM(OM),
          jM = nM(OM, SM),
          aM = SM.width * SM.height,
          QM = new Float32Array(4 * aM);
        for (let PM = 0; PM < aM; PM += 1) QM[4 * PM] = jM[3 * PM], QM[4 * PM + 1] = jM[3 * PM + 1], QM[4 * PM + 2] = jM[3 * PM + 2], QM[4 * PM + 3] = 1;
        iM(SM.width, SM.height, rM.generateMipMaps, !1, (() => {
          const MM = rM.ph();
          rM.type = 1, rM.format = 5, rM._gammaSpace = !1, MM._uploadDataToTextureDirectly(rM, QM)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);