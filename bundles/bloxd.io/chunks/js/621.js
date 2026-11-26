export const id = 621;
export const ids = [621];
export const modules = {
  44731: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      _HDRTextureLoader: () => wV
    });
    var JV = xV(38269);
    class YV {
      static ConvertPanoramaToCubemap(VV, eV, xV, JV) {
        let YV, UV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          yV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!VV) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (VV.length != eV * xV * 3) {
          if (VV.length != eV * xV * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          YV = 4
        } else YV = 3;
        return {
          front: this.CreateCubemapTexture(JV, this.FACE_FRONT, VV, eV, xV, UV, yV, YV),
          back: this.CreateCubemapTexture(JV, this.FACE_BACK, VV, eV, xV, UV, yV, YV),
          left: this.CreateCubemapTexture(JV, this.FACE_LEFT, VV, eV, xV, UV, yV, YV),
          right: this.CreateCubemapTexture(JV, this.FACE_RIGHT, VV, eV, xV, UV, yV, YV),
          up: this.CreateCubemapTexture(JV, this.FACE_UP, VV, eV, xV, UV, yV, YV),
          down: this.CreateCubemapTexture(JV, this.FACE_DOWN, VV, eV, xV, UV, yV, YV),
          size: JV,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(VV, eV, xV, JV, YV, UV, yV, pV) {
        const QV = new ArrayBuffer(VV * VV * 4 * 3),
          nV = new Float32Array(QV),
          wV = UV ? Math.max(1, Math.round(JV / 4 / VV)) : 1,
          ZV = 1 / wV,
          vV = ZV * ZV,
          rV = eV[1].subtract(eV[0]).scale(ZV / VV),
          kV = eV[3].subtract(eV[2]).scale(ZV / VV),
          bV = 1 / VV;
        let EV = 0;
        for (let BV = 0; BV < VV; BV++)
          for (let UV = 0; UV < wV; UV++) {
            let UV = eV[0],
              QV = eV[2];
            for (let eV = 0; eV < VV; eV++)
              for (let ZV = 0; ZV < wV; ZV++) {
                const wV = QV.subtract(UV).scale(EV).add(UV);
                wV.normalize();
                const ZV = this.CalcProjectionSpherical(wV, xV, JV, YV, pV, yV);
                nV[BV * VV * 3 + 3 * eV + 0] += ZV.r * vV, nV[BV * VV * 3 + 3 * eV + 1] += ZV.g * vV, nV[BV * VV * 3 + 3 * eV + 2] += ZV.b * vV, UV = UV.add(rV), QV = QV.add(kV)
              }
            EV += bV * ZV
          }
        return nV
      }
      static CalcProjectionSpherical(VV, eV, xV, JV, YV, UV) {
        let yV = Math.atan2(VV.z, VV.x);
        const pV = Math.acos(VV.y);
        for (; yV < -Math.PI;) yV += 2 * Math.PI;
        for (; yV > Math.PI;) yV -= 2 * Math.PI;
        let QV = yV / Math.PI;
        const nV = pV / Math.PI;
        QV = .5 * QV + .5;
        let wV = Math.round(QV * xV);
        wV < 0 ? wV = 0 : wV >= xV && (wV = xV - 1);
        let ZV = Math.round(nV * JV);
        ZV < 0 ? ZV = 0 : ZV >= JV && (ZV = JV - 1);
        const vV = UV ? JV - ZV - 1 : ZV;
        return {
          r: eV[vV * xV * YV + wV * YV + 0],
          g: eV[vV * xV * YV + wV * YV + 1],
          b: eV[vV * xV * YV + wV * YV + 2]
        }
      }
    }

    function UV(VV, eV, xV, JV, YV, UV) {
      YV > 0 ? (YV = function(VV, eV) {
        return eV > 1023 ? VV * Math.pow(2, 1023) * Math.pow(2, eV - 1023) : eV < -1074 ? VV * Math.pow(2, -1074) * Math.pow(2, eV + 1074) : VV * Math.pow(2, eV)
      }(1, YV - 136), VV[UV + 0] = eV * YV, VV[UV + 1] = xV * YV, VV[UV + 2] = JV * YV) : (VV[UV + 0] = 0, VV[UV + 1] = 0, VV[UV + 2] = 0)
    }

    function yV(VV, eV) {
      let xV, JV = "";
      for (let YV = eV; YV < VV.length - eV && (xV = String.fromCharCode(VV[YV]), "\n" != xV); YV++) JV += xV;
      return JV
    }

    function pV(VV) {
      let eV = yV(VV, 0);
      if ("#" != eV[0] || "?" != eV[1]) throw "Bad HDR Format.";
      let xV = !1,
        JV = !1,
        YV = 0;
      do {
        YV += eV.length + 1, eV = yV(VV, YV), "FORMAT=32-bit_rle_rgbe" == eV ? JV = !0 : 0 == eV.length && (xV = !0)
      } while (!xV);
      if (!JV) throw "HDR Bad header format, unsupported FORMAT";
      YV += eV.length + 1, eV = yV(VV, YV);
      const UV = /^-Y (.*) \+X (.*)$/g.exec(eV);
      if (!UV || UV.length < 3) throw "HDR Bad header format, no size";
      const pV = parseInt(UV[2]),
        QV = parseInt(UV[1]);
      if (pV < 8 || pV > 32767) throw "HDR Bad header format, unsupported size";
      return YV += eV.length + 1, {
        height: QV,
        width: pV,
        dataPosition: YV
      }
    }

    function QV(VV, eV) {
      return function(VV, eV) {
        let xV = eV.height;
        const JV = eV.width;
        let YV, yV, pV, QV, wV, ZV, vV, rV, kV = eV.dataPosition;
        const bV = new ArrayBuffer(4 * JV),
          EV = new Uint8Array(bV),
          BV = new ArrayBuffer(eV.width * eV.height * 4 * 3),
          jV = new Float32Array(BV);
        for (; xV > 0;) {
          if (YV = VV[kV++], yV = VV[kV++], pV = VV[kV++], QV = VV[kV++], 2 != YV || 2 != yV || 128 & pV || eV.width < 8 || eV.width > 32767) return nV(VV, eV);
          if ((pV << 8 | QV) != JV) throw "HDR Bad header format, wrong scan line width";
          for (ZV = 0, rV = 0; rV < 4; rV++)
            for (vV = (rV + 1) * JV; ZV < vV;)
              if (YV = VV[kV++], yV = VV[kV++], YV > 128) {
                if (wV = YV - 128, 0 == wV || wV > vV - ZV) throw "HDR Bad Format, bad scanline data (run)";
                for (; wV-- > 0;) EV[ZV++] = yV
              } else {
                if (wV = YV, 0 == wV || wV > vV - ZV) throw "HDR Bad Format, bad scanline data (non-run)";
                if (EV[ZV++] = yV, --wV > 0)
                  for (let eV = 0; eV < wV; eV++) EV[ZV++] = VV[kV++]
              } for (rV = 0; rV < JV; rV++) YV = EV[rV], yV = EV[rV + JV], pV = EV[rV + 2 * JV], QV = EV[rV + 3 * JV], UV(jV, YV, yV, pV, QV, (eV.height - xV) * JV * 3 + 3 * rV);
          xV--
        }
        return jV
      }(VV, eV)
    }

    function nV(VV, eV) {
      let xV = eV.height;
      const JV = eV.width;
      let YV, yV, pV, QV, nV, wV = eV.dataPosition;
      const ZV = new ArrayBuffer(eV.width * eV.height * 4 * 3),
        vV = new Float32Array(ZV);
      for (; xV > 0;) {
        for (nV = 0; nV < eV.width; nV++) YV = VV[wV++], yV = VV[wV++], pV = VV[wV++], QV = VV[wV++], UV(vV, YV, yV, pV, QV, (eV.height - xV) * JV * 3 + 3 * nV);
        xV--
      }
      return vV
    }
    YV.FACE_LEFT = [new JV.o(-1, -1, -1), new JV.o(1, -1, -1), new JV.o(-1, 1, -1), new JV.o(1, 1, -1)], YV.FACE_RIGHT = [new JV.o(1, -1, 1), new JV.o(-1, -1, 1), new JV.o(1, 1, 1), new JV.o(-1, 1, 1)], YV.FACE_FRONT = [new JV.o(1, -1, -1), new JV.o(1, -1, 1), new JV.o(1, 1, -1), new JV.o(1, 1, 1)], YV.FACE_BACK = [new JV.o(-1, -1, 1), new JV.o(-1, -1, -1), new JV.o(-1, 1, 1), new JV.o(-1, 1, -1)], YV.FACE_DOWN = [new JV.o(1, 1, -1), new JV.o(1, 1, 1), new JV.o(-1, 1, -1), new JV.o(-1, 1, 1)], YV.FACE_UP = [new JV.o(-1, -1, -1), new JV.o(-1, -1, 1), new JV.o(1, -1, -1), new JV.o(1, -1, 1)];
    class wV {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(VV, eV, xV) {
        const JV = new Uint8Array(VV.buffer, VV.byteOffset, VV.byteLength),
          YV = pV(JV),
          UV = QV(JV, YV),
          yV = YV.width * YV.height,
          nV = new Float32Array(4 * yV);
        for (let pV = 0; pV < yV; pV += 1) nV[4 * pV] = UV[3 * pV], nV[4 * pV + 1] = UV[3 * pV + 1], nV[4 * pV + 2] = UV[3 * pV + 2], nV[4 * pV + 3] = 1;
        xV(YV.width, YV.height, eV.generateMipMaps, !1, (() => {
          const VV = eV.sk();
          eV.type = 1, eV.format = 5, eV._gammaSpace = !1, VV._uploadDataToTextureDirectly(eV, nV)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);