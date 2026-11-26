/*! For license information please see fecih8.223.e50b9fcc.chunk.js.LICENSE.txt */
export const id = 223;
export const ids = [223];
export const modules = {
  40549: (UU, XU, zU) => {
    function cU() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function yU(UU) {
      return UU instanceof Uint8Array && (!cU() || !Buffer.isBuffer(UU))
    }

    function QU(UU) {
      return UU instanceof ArrayBuffer
    }

    function AU(UU) {
      return !!cU() && Buffer.isBuffer(UU)
    }
    var FU = zU(40557).b,
      oU = zU(40563).c,
      DU = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    XU.e = function(UU) {
      if (!yU(UU) && !QU(UU) && !AU(UU)) throw new TypeError(DU);
      var XU = !1,
        zU = !1;
      yU(UU) ? XU = !0 : QU(UU) && (zU = !0, UU = new Uint8Array(UU));
      var cU, FU, EU, YU = new oU(UU),
        NU = YU.maxCompressedLength();
      if (XU ? (cU = new Uint8Array(NU), EU = YU.compressToBuffer(cU)) : zU ? (cU = new ArrayBuffer(NU), FU = new Uint8Array(cU), EU = YU.compressToBuffer(FU)) : (cU = Buffer.alloc(NU), EU = YU.compressToBuffer(cU)), !cU.slice) {
        var IU = new Uint8Array(Array.prototype.slice.call(cU, 0, EU));
        if (XU) return IU;
        if (zU) return IU.buffer;
        throw new Error("Not implemented")
      }
      return cU.slice(0, EU)
    }
  },
  40563: (UU, XU) => {
    var zU = new Array(15);

    function cU(UU, XU) {
      return 506832829 * UU >>> XU
    }

    function yU(UU, XU) {
      return UU[XU] + (UU[XU + 1] << 8) + (UU[XU + 2] << 16) + (UU[XU + 3] << 24)
    }

    function QU(UU, XU, zU) {
      return UU[XU] === UU[zU] && UU[XU + 1] === UU[zU + 1] && UU[XU + 2] === UU[zU + 2] && UU[XU + 3] === UU[zU + 3]
    }

    function AU(UU, XU, zU, cU, yU) {
      return zU <= 60 ? (cU[yU] = zU - 1 << 2, yU += 1) : zU < 256 ? (cU[yU] = 240, cU[yU + 1] = zU - 1, yU += 2) : (cU[yU] = 244, cU[yU + 1] = zU - 1 & 255, cU[yU + 2] = zU - 1 >>> 8, yU += 3),
        function(UU, XU, zU, cU, yU) {
          var QU;
          for (QU = 0; QU < yU; QU++) zU[cU + QU] = UU[XU + QU]
        }(UU, XU, cU, yU, zU), yU + zU
    }

    function FU(UU, XU, zU, cU) {
      return cU < 12 && zU < 2048 ? (UU[XU] = 1 + (cU - 4 << 2) + (zU >>> 8 << 5), UU[XU + 1] = 255 & zU, XU + 2) : (UU[XU] = 2 + (cU - 1 << 2), UU[XU + 1] = 255 & zU, UU[XU + 2] = zU >>> 8, XU + 3)
    }

    function oU(UU, XU, zU, cU) {
      for (; cU >= 68;) XU = FU(UU, XU, zU, 64), cU -= 64;
      return cU > 64 && (XU = FU(UU, XU, zU, 60), cU -= 60), FU(UU, XU, zU, cU)
    }

    function DU(UU, XU, FU, DU, EU) {
      for (var YU = 1; 1 << YU <= FU && YU <= 14;) YU += 1;
      var NU = 32 - (YU -= 1);
      "undefined" === typeof zU[YU] && (zU[YU] = new Uint16Array(1 << YU));
      var IU, pU = zU[YU];
      for (IU = 0; IU < pU.length; IU++) pU[IU] = 0;
      var aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU = XU + FU,
        LU = XU,
        eU = XU,
        CU = !0;
      if (FU >= 15)
        for (aU = dU - 15, gU = cU(yU(UU, XU += 1), NU); CU;) {
          BU = 32, kU = XU;
          do {
            if (tU = gU, ZU = BU >>> 5, BU += 1, kU = (XU = kU) + ZU, XU > aU) {
              CU = !1;
              break
            }
            gU = cU(yU(UU, kU), NU), GU = LU + pU[tU], pU[tU] = XU - LU
          } while (!QU(UU, XU, GU));
          if (!CU) break;
          EU = AU(UU, eU, XU - eU, DU, EU);
          do {
            for (RU = XU, PU = 4; XU + PU < dU && UU[XU + PU] === UU[GU + PU];) PU += 1;
            if (XU += PU, EU = oU(DU, EU, RU - GU, PU), eU = XU, XU >= aU) {
              CU = !1;
              break
            }
            pU[cU(yU(UU, XU - 1), NU)] = XU - 1 - LU, GU = LU + pU[WU = cU(yU(UU, XU), NU)], pU[WU] = XU - LU
          } while (QU(UU, XU, GU));
          if (!CU) break;
          gU = cU(yU(UU, XU += 1), NU)
        }
      return eU < dU && (EU = AU(UU, eU, dU - eU, DU, EU)), EU
    }

    function EU(UU) {
      this.array = UU
    }
    EU.prototype.maxCompressedLength = function() {
      var UU = this.array.length;
      return 32 + UU + Math.floor(UU / 6)
    }, EU.prototype.compressToBuffer = function(UU) {
      var XU, zU = this.array,
        cU = zU.length,
        yU = 0,
        QU = 0;
      for (QU = function(UU, XU, zU) {
          do {
            XU[zU] = 127 & UU, (UU >>>= 7) > 0 && (XU[zU] += 128), zU += 1
          } while (UU > 0);
          return zU
        }(cU, UU, QU); yU < cU;) QU = DU(zU, yU, XU = Math.min(cU - yU, 65536), UU, QU), yU += XU;
      return QU
    }, XU.c = EU
  },
  40557: (UU, XU) => {
    var zU = [0, 255, 65535, 16777215, 4294967295];

    function cU(UU, XU, zU, cU, yU) {
      var QU;
      for (QU = 0; QU < yU; QU++) zU[cU + QU] = UU[XU + QU]
    }

    function yU(UU, XU, zU, cU) {
      var yU;
      for (yU = 0; yU < cU; yU++) UU[XU + yU] = UU[XU - zU + yU]
    }

    function QU(UU) {
      this.array = UU, this.pos = 0
    }
    QU.prototype.readUncompressedLength = function() {
      for (var UU, XU, zU = 0, cU = 0; cU < 32 && this.pos < this.array.length;) {
        if (UU = this.array[this.pos], this.pos += 1, (XU = 127 & UU) << cU >>> cU !== XU) return -1;
        if (zU |= XU << cU, UU < 128) return zU;
        cU += 7
      }
      return -1
    }, QU.prototype.uncompressToBuffer = function(UU) {
      for (var XU, QU, AU, FU, oU = this.array, DU = oU.length, EU = this.pos, YU = 0; EU < oU.length;)
        if (XU = oU[EU], EU += 1, 0 === (3 & XU)) {
          if ((QU = 1 + (XU >>> 2)) > 60) {
            if (EU + 3 >= DU) return !1;
            AU = QU - 60, QU = 1 + ((QU = oU[EU] + (oU[EU + 1] << 8) + (oU[EU + 2] << 16) + (oU[EU + 3] << 24)) & zU[AU]), EU += AU
          }
          if (EU + QU > DU) return !1;
          cU(oU, EU, UU, YU, QU), EU += QU, YU += QU
        } else {
          switch (3 & XU) {
            case 1:
              QU = 4 + (XU >>> 2 & 7), FU = oU[EU] + (XU >>> 5 << 8), EU += 1;
              break;
            case 2:
              if (EU + 1 >= DU) return !1;
              QU = 1 + (XU >>> 2), FU = oU[EU] + (oU[EU + 1] << 8), EU += 2;
              break;
            case 3:
              if (EU + 3 >= DU) return !1;
              QU = 1 + (XU >>> 2), FU = oU[EU] + (oU[EU + 1] << 8) + (oU[EU + 2] << 16) + (oU[EU + 3] << 24), EU += 4
          }
          if (0 === FU || FU > YU) return !1;
          yU(UU, YU, FU, QU), YU += QU
        } return !0
    }, XU.b = QU
  },
  36961: UU => {
    UU.exports = function(UU, XU, zU, cU) {
      var yU = self || window;
      try {
        try {
          var QU;
          try {
            QU = new yU.Blob([UU])
          } catch (DU) {
            (QU = new(yU.BlobBuilder || yU.WebKitBlobBuilder || yU.MozBlobBuilder || yU.MSBlobBuilder)).append(UU), QU = QU.getBlob()
          }
          var AU = yU.URL || yU.webkitURL,
            FU = AU.createObjectURL(QU),
            oU = new yU[XU](FU, zU);
          return AU.revokeObjectURL(FU), oU
        } catch (DU) {
          return new yU[XU]("data:application/javascript,".concat(encodeURIComponent(UU)), zU)
        }
      } catch (DU) {
        if (!cU) throw Error("Inline worker is not supported");
        return new yU[XU](cU, zU)
      }
    }
  },
  40705: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      e: () => yU,
      h: () => DU,
      i: () => IU,
      k: () => AU,
      m: () => pU
    });
    var cU = zU(40714);
    const yU = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
      QU = [-1, 1, 2, 3, 4, 5, 6, 8],
      AU = UU => {
        if (!UU || UU.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
        const XU = new cU.b(UU),
          zU = FU(XU),
          {
            frequencyIndex: yU,
            sampleRate: AU
          } = oU(XU),
          DU = XU.readBits(4);
        let EU = null;
        DU >= 1 && DU <= 7 && (EU = QU[DU]);
        let YU = zU,
          NU = !1,
          IU = AU;
        if (5 === zU || 29 === zU) NU = 29 === zU, IU = oU(XU).sampleRate, YU = FU(XU), 22 === YU && XU.skipBits(4);
        else
          for (; XU.getBitsLeft() > 15;) {
            const UU = XU.pos;
            if (695 === XU.readBits(11)) {
              5 === FU(XU) && XU.readBits(1) && (IU = oU(XU).sampleRate, XU.getBitsLeft() > 11 && 1352 === XU.readBits(11) && (NU = !!XU.readBits(1)));
              break
            }
            XU.pos = UU + 1
          }
        return null !== EU && EU > 1 && (NU = !1), {
          objectType: zU,
          coreObjectType: YU,
          frequencyIndex: yU,
          channelConfiguration: DU,
          outputSampleRate: IU,
          outputNumberOfChannels: NU && 1 === EU ? 2 : EU
        }
      },
      FU = UU => {
        const XU = UU.readBits(5);
        return 31 === XU ? 32 + UU.readBits(6) : XU
      },
      oU = UU => {
        const XU = UU.readBits(4);
        return 15 === XU ? {
          frequencyIndex: XU,
          sampleRate: UU.readBits(24)
        } : {
          frequencyIndex: XU,
          sampleRate: XU < yU.length ? yU[XU] : null
        }
      },
      DU = UU => {
        const XU = 5 === UU.objectType || 29 === UU.objectType,
          zU = 29 === UU.objectType,
          yU = XU ? UU.outputSampleRate / 2 : UU.outputSampleRate,
          AU = zU ? 1 : UU.outputNumberOfChannels,
          FU = QU.indexOf(AU);
        if (-1 === FU) throw new TypeError(`Unsupported number of channels: ${UU.outputNumberOfChannels}`);
        let oU = 16;
        UU.objectType >= 32 && (oU += 6), 15 === NU(yU) && (oU += 24), XU && (oU += 9, 15 === NU(UU.outputSampleRate) && (oU += 24));
        const DU = Math.ceil(oU / 8),
          IU = new Uint8Array(DU),
          pU = new cU.b(IU);
        return EU(pU, UU.objectType), YU(pU, yU), pU.writeBits(4, FU), XU && (YU(pU, UU.outputSampleRate), EU(pU, 2)), pU.writeBits(3, 0), IU
      },
      EU = (UU, XU) => {
        XU < 32 ? UU.writeBits(5, XU) : (UU.writeBits(5, 31), UU.writeBits(6, XU - 32))
      },
      YU = (UU, XU) => {
        const zU = NU(XU);
        UU.writeBits(4, zU), 15 === zU && UU.writeBits(24, XU)
      },
      NU = UU => {
        const XU = yU.indexOf(UU);
        return -1 === XU ? 15 : XU
      },
      IU = UU => {
        const XU = new Uint8Array(7),
          zU = new cU.b(XU),
          {
            coreObjectType: yU,
            frequencyIndex: QU,
            channelConfiguration: AU
          } = UU,
          FU = yU - 1;
        return zU.writeBits(12, 4095), zU.writeBits(1, 0), zU.writeBits(2, 0), zU.writeBits(1, 1), zU.writeBits(2, FU), zU.writeBits(4, QU), zU.writeBits(1, 0), zU.writeBits(3, AU), zU.writeBits(1, 0), zU.writeBits(1, 0), zU.writeBits(1, 0), zU.writeBits(1, 0), zU.skipBits(13), zU.writeBits(11, 2047), zU.writeBits(2, 0), {
          header: XU,
          bitstream: zU
        }
      },
      pU = (UU, XU) => {
        UU.pos = 30, UU.writeBits(13, XU)
      }
  },
  40714: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      constructor(UU) {
        this.bytes = UU, this.pos = 0
      }
      seekToByte(UU) {
        this.pos = 8 * UU
      }
      readBit() {
        const UU = Math.floor(this.pos / 8),
          XU = this.bytes[UU] ?? 0,
          zU = 7 - (7 & this.pos),
          cU = (XU & 1 << zU) >> zU;
        return this.pos++, cU
      }
      readBits(UU) {
        if (1 === UU) return this.readBit();
        let XU = 0;
        for (let zU = 0; zU < UU; zU++) XU <<= 1, XU |= this.readBit();
        return XU
      }
      writeBits(UU, XU) {
        const zU = this.pos + UU;
        for (let cU = this.pos; cU < zU; cU++) {
          const UU = Math.floor(cU / 8);
          let yU = this.bytes[UU];
          const QU = 7 - (7 & cU);
          yU &= ~(1 << QU), yU |= (XU & 1 << zU - cU - 1) >> zU - cU - 1 << QU, this.bytes[UU] = yU
        }
        this.pos = zU
      }
      copyBits(UU, XU) {
        let zU = 0;
        for (; zU < UU - 7; zU += 8) this.writeBits(8, XU.readBits(8));
        const cU = UU - zU;
        cU > 0 && this.writeBits(cU, XU.readBits(cU))
      }
      readAlignedByte() {
        if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
        const UU = this.pos / 8,
          XU = this.bytes[UU] ?? 0;
        return this.pos += 8, XU
      }
      skipBits(UU) {
        this.pos += UU
      }
      getBitsLeft() {
        return 8 * this.bytes.length - this.pos
      }
      clone() {
        const UU = new cU(this.bytes);
        return UU.pos = this.pos, UU
      }
    }
  },
  40725: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => hU,
      d: () => oU,
      e: () => UX,
      g: () => KU,
      j: () => DU,
      m: () => nU,
      q: () => pX,
      u: () => gU,
      w: () => kU,
      y: () => bU,
      A: () => ZU,
      B: () => iU,
      E: () => jU,
      K: () => sU,
      H: () => GU,
      M: () => eU,
      Q: () => pU,
      T: () => LU,
      X: () => vU,
      _: () => NU,
      bb: () => IU,
      fb: () => TU,
      ib: () => YX,
      jb: () => zX,
      nb: () => JU,
      rb: () => mU,
      sb: () => xU,
      tb: () => BU,
      vb: () => fU
    });
    var cU = zU(40723),
      yU = zU(40687),
      QU = zU(40727);
    const AU = [48e3, 44100, 32e3],
      FU = [24e3, 22050, 16e3];
    var oU, DU, EU = zU(40714),
      YU = zU(40730);
    ! function(UU) {
      UU[UU.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", UU[UU.SLICE_DPA = 2] = "SLICE_DPA", UU[UU.SLICE_DPB = 3] = "SLICE_DPB", UU[UU.SLICE_DPC = 4] = "SLICE_DPC", UU[UU.IDR = 5] = "IDR", UU[UU.SEI = 6] = "SEI", UU[UU.SPS = 7] = "SPS", UU[UU.PPS = 8] = "PPS", UU[UU.AUD = 9] = "AUD", UU[UU.SPS_EXT = 13] = "SPS_EXT"
    }(oU || (oU = {})),
    function(UU) {
      UU[UU.RASL_N = 8] = "RASL_N", UU[UU.RASL_R = 9] = "RASL_R", UU[UU.BLA_W_LP = 16] = "BLA_W_LP", UU[UU.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", UU[UU.VPS_NUT = 32] = "VPS_NUT", UU[UU.SPS_NUT = 33] = "SPS_NUT", UU[UU.PPS_NUT = 34] = "PPS_NUT", UU[UU.AUD_NUT = 35] = "AUD_NUT", UU[UU.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", UU[UU.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT"
    }(DU || (DU = {}));
    const NU = function*(UU) {
        let XU = 0,
          zU = -1;
        for (; XU < UU.length - 2;) {
          const cU = UU.indexOf(0, XU);
          if (-1 === cU || cU >= UU.length - 2) break;
          XU = cU;
          let yU = 0;
          XU + 3 < UU.length && 0 === UU[XU + 1] && 0 === UU[XU + 2] && 1 === UU[XU + 3] ? yU = 4 : 0 === UU[XU + 1] && 1 === UU[XU + 2] && (yU = 3), 0 !== yU ? (-1 !== zU && XU > zU && (yield {
            offset: zU,
            length: XU - zU
          }), zU = XU + yU, XU = zU) : XU++
        } - 1 !== zU && zU < UU.length && (yield {
          offset: zU,
          length: UU.length - zU
        })
      },
      IU = function*(UU, XU) {
        let zU = 0;
        const cU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
        for (; zU + XU <= UU.length;) {
          let UU;
          1 === XU ? UU = cU.getUint8(zU) : 2 === XU ? UU = cU.getUint16(zU, !1) : 3 === XU ? UU = (0, yU.vb)(cU, zU, !1) : ((0, yU.J)(4 === XU), UU = cU.getUint32(zU, !1)), zU += XU, yield {
            offset: zU,
            length: UU
          }, zU += UU
        }
      },
      pU = UU => 31 & UU,
      aU = UU => {
        const XU = [],
          zU = UU.length;
        for (let cU = 0; cU < zU; cU++) cU + 2 < zU && 0 === UU[cU] && 0 === UU[cU + 1] && 3 === UU[cU + 2] ? (XU.push(0, 0), cU += 2) : XU.push(UU[cU]);
        return new Uint8Array(XU)
      },
      tU = new Uint8Array([0, 0, 0, 1]),
      gU = UU => {
        const XU = UU.reduce(((UU, XU) => UU + tU.byteLength + XU.byteLength), 0),
          zU = new Uint8Array(XU);
        let cU = 0;
        for (const yU of UU) zU.set(tU, cU), cU += tU.byteLength, zU.set(yU, cU), cU += yU.byteLength;
        return zU
      },
      kU = (UU, XU) => {
        const zU = UU.reduce(((UU, zU) => UU + XU + zU.byteLength), 0),
          cU = new Uint8Array(zU);
        let QU = 0;
        for (const AU of UU) {
          const UU = new DataView(cU.buffer, cU.byteOffset, cU.byteLength);
          switch (XU) {
            case 1:
              UU.setUint8(QU, AU.byteLength);
              break;
            case 2:
              UU.setUint16(QU, AU.byteLength, !1);
              break;
            case 3:
              (0, yU.ad)(UU, QU, AU.byteLength, !1);
              break;
            case 4:
              UU.setUint32(QU, AU.byteLength, !1)
          }
          QU += XU, cU.set(AU, QU), QU += AU.byteLength
        }
        return cU
      },
      GU = UU => {
        try {
          const XU = [],
            zU = [],
            cU = [];
          for (const yU of NU(UU)) {
            const QU = UU.subarray(yU.offset, yU.offset + yU.length),
              AU = pU(QU[0]);
            AU === oU.SPS ? XU.push(QU) : AU === oU.PPS ? zU.push(QU) : AU === oU.SPS_EXT && cU.push(QU)
          }
          if (0 === XU.length) return null;
          if (0 === zU.length) return null;
          const QU = XU[0],
            AU = PU(QU);
          (0, yU.J)(null !== AU);
          const FU = 100 === AU.profileIdc || 110 === AU.profileIdc || 122 === AU.profileIdc || 144 === AU.profileIdc;
          return {
            configurationVersion: 1,
            avcProfileIndication: AU.profileIdc,
            profileCompatibility: AU.constraintFlags,
            avcLevelIndication: AU.levelIdc,
            lengthSizeMinusOne: 3,
            sequenceParameterSets: XU,
            pictureParameterSets: zU,
            chromaFormat: FU ? AU.chromaFormatIdc : null,
            bitDepthLumaMinus8: FU ? AU.bitDepthLumaMinus8 : null,
            bitDepthChromaMinus8: FU ? AU.bitDepthChromaMinus8 : null,
            sequenceParameterSetExt: FU ? cU : null
          }
        } catch (XU) {
          return QU.c._error("Error building AVC Decoder Configuration Record:", XU), null
        }
      },
      BU = UU => {
        const XU = [];
        XU.push(UU.configurationVersion), XU.push(UU.avcProfileIndication), XU.push(UU.profileCompatibility), XU.push(UU.avcLevelIndication), XU.push(252 | 3 & UU.lengthSizeMinusOne), XU.push(224 | 31 & UU.sequenceParameterSets.length);
        for (const zU of UU.sequenceParameterSets) {
          const UU = zU.byteLength;
          XU.push(UU >> 8), XU.push(255 & UU);
          for (let cU = 0; cU < UU; cU++) XU.push(zU[cU])
        }
        XU.push(UU.pictureParameterSets.length);
        for (const zU of UU.pictureParameterSets) {
          const UU = zU.byteLength;
          XU.push(UU >> 8), XU.push(255 & UU);
          for (let cU = 0; cU < UU; cU++) XU.push(zU[cU])
        }
        if ((100 === UU.avcProfileIndication || 110 === UU.avcProfileIndication || 122 === UU.avcProfileIndication || 144 === UU.avcProfileIndication) && null !== UU.chromaFormat) {
          (0, yU.J)(null !== UU.bitDepthLumaMinus8), (0, yU.J)(null !== UU.bitDepthChromaMinus8), (0, yU.J)(null !== UU.sequenceParameterSetExt), XU.push(252 | 3 & UU.chromaFormat), XU.push(248 | 7 & UU.bitDepthLumaMinus8), XU.push(248 | 7 & UU.bitDepthChromaMinus8), XU.push(UU.sequenceParameterSetExt.length);
          for (const zU of UU.sequenceParameterSetExt) {
            const UU = zU.byteLength;
            XU.push(UU >> 8), XU.push(255 & UU);
            for (let cU = 0; cU < UU; cU++) XU.push(zU[cU])
          }
        }
        return new Uint8Array(XU)
      },
      ZU = UU => {
        try {
          const XU = (0, yU.ld)(UU);
          let zU = 0;
          const cU = XU.getUint8(zU++),
            QU = XU.getUint8(zU++),
            AU = XU.getUint8(zU++),
            FU = XU.getUint8(zU++),
            oU = 3 & XU.getUint8(zU++),
            DU = 31 & XU.getUint8(zU++),
            EU = [];
          for (let yU = 0; yU < DU; yU++) {
            const cU = XU.getUint16(zU, !1);
            zU += 2, EU.push(UU.subarray(zU, zU + cU)), zU += cU
          }
          const YU = XU.getUint8(zU++),
            NU = [];
          for (let yU = 0; yU < YU; yU++) {
            const cU = XU.getUint16(zU, !1);
            zU += 2, NU.push(UU.subarray(zU, zU + cU)), zU += cU
          }
          const IU = {
            configurationVersion: cU,
            avcProfileIndication: QU,
            profileCompatibility: AU,
            avcLevelIndication: FU,
            lengthSizeMinusOne: oU,
            sequenceParameterSets: EU,
            pictureParameterSets: NU,
            chromaFormat: null,
            bitDepthLumaMinus8: null,
            bitDepthChromaMinus8: null,
            sequenceParameterSetExt: null
          };
          if ((100 === QU || 110 === QU || 122 === QU || 144 === QU) && zU + 4 <= UU.length) {
            const cU = 3 & XU.getUint8(zU++),
              yU = 7 & XU.getUint8(zU++),
              QU = 7 & XU.getUint8(zU++),
              AU = XU.getUint8(zU++);
            IU.chromaFormat = cU, IU.bitDepthLumaMinus8 = yU, IU.bitDepthChromaMinus8 = QU;
            const FU = [];
            for (let oU = 0; oU < AU; oU++) {
              const cU = XU.getUint16(zU, !1);
              zU += 2, FU.push(UU.subarray(zU, zU + cU)), zU += cU
            }
            IU.sequenceParameterSetExt = FU
          }
          return IU
        } catch (XU) {
          return QU.c._error("Error deserializing AVC Decoder Configuration Record:", XU), null
        }
      },
      RU = {
        1: {
          num: 1,
          den: 1
        },
        2: {
          num: 12,
          den: 11
        },
        3: {
          num: 10,
          den: 11
        },
        4: {
          num: 16,
          den: 11
        },
        5: {
          num: 40,
          den: 33
        },
        6: {
          num: 24,
          den: 11
        },
        7: {
          num: 20,
          den: 11
        },
        8: {
          num: 32,
          den: 11
        },
        9: {
          num: 80,
          den: 33
        },
        10: {
          num: 18,
          den: 11
        },
        11: {
          num: 15,
          den: 11
        },
        12: {
          num: 64,
          den: 33
        },
        13: {
          num: 160,
          den: 99
        },
        14: {
          num: 4,
          den: 3
        },
        15: {
          num: 3,
          den: 2
        },
        16: {
          num: 2,
          den: 1
        }
      },
      PU = UU => {
        try {
          const XU = aU(UU),
            zU = new EU.b(XU);
          zU.skipBits(1), zU.skipBits(2);
          if (7 !== zU.readBits(5)) return null;
          const QU = zU.readAlignedByte(),
            AU = zU.readAlignedByte(),
            FU = zU.readAlignedByte();
          (0, yU.Hc)(zU);
          let oU = 1,
            DU = 0,
            YU = 0,
            NU = 0;
          if (100 === QU || 110 === QU || 122 === QU || 244 === QU || 44 === QU || 83 === QU || 86 === QU || 118 === QU || 128 === QU) {
            oU = (0, yU.Hc)(zU), 3 === oU && (NU = zU.readBits(1)), DU = (0, yU.Hc)(zU), YU = (0, yU.Hc)(zU), zU.skipBits(1);
            if (zU.readBits(1))
              for (let UU = 0; UU < (3 !== oU ? 8 : 12); UU++) {
                if (zU.readBits(1)) {
                  const XU = UU < 6 ? 16 : 64;
                  let cU = 8,
                    QU = 8;
                  for (let UU = 0; UU < XU; UU++) {
                    if (0 !== QU) {
                      QU = (cU + (0, yU.Ic)(zU) + 256) % 256
                    }
                    cU = 0 === QU ? cU : QU
                  }
                }
              }
          }(0, yU.Hc)(zU);
          const IU = (0, yU.Hc)(zU);
          if (0 === IU)(0, yU.Hc)(zU);
          else if (1 === IU) {
            zU.skipBits(1), (0, yU.Ic)(zU), (0, yU.Ic)(zU);
            const UU = (0, yU.Hc)(zU);
            for (let XU = 0; XU < UU; XU++)(0, yU.Ic)(zU)
          }(0, yU.Hc)(zU), zU.skipBits(1);
          const pU = (0, yU.Hc)(zU),
            tU = (0, yU.Hc)(zU),
            gU = 16 * (pU + 1),
            kU = 16 * (tU + 1);
          let GU = gU,
            BU = kU;
          const ZU = zU.readBits(1);
          ZU || zU.skipBits(1), zU.skipBits(1);
          if (zU.readBits(1)) {
            const UU = (0, yU.Hc)(zU),
              XU = (0, yU.Hc)(zU),
              cU = (0, yU.Hc)(zU),
              QU = (0, yU.Hc)(zU);
            let AU, FU;
            if (0 === (0 === NU ? oU : 0)) AU = 1, FU = 2 - ZU;
            else {
              AU = 3 === oU ? 1 : 2, FU = (1 === oU ? 2 : 1) * (2 - ZU)
            }
            GU -= AU * (UU + XU), BU -= FU * (cU + QU)
          }
          let PU = 2,
            dU = 2,
            LU = 2,
            eU = 0,
            CU = {
              num: 1,
              den: 1
            },
            wU = null,
            qU = null,
            OU = null,
            SU = null;
          const rU = zU.pos;
          if (zU.readBits(1)) {
            if (zU.readBits(1)) {
              const UU = zU.readBits(8);
              if (255 === UU) CU = {
                num: zU.readBits(16),
                den: zU.readBits(16)
              };
              else {
                const XU = RU[UU];
                XU && (CU = XU)
              }
            }
            zU.readBits(1) && zU.skipBits(1);
            if (zU.readBits(1)) {
              zU.skipBits(3), eU = zU.readBits(1);
              zU.readBits(1) && (PU = zU.readBits(8), dU = zU.readBits(8), LU = zU.readBits(8))
            }
            zU.readBits(1) && ((0, yU.Hc)(zU), (0, yU.Hc)(zU));
            zU.readBits(1) && (zU.skipBits(32), zU.skipBits(32), zU.skipBits(1));
            const UU = zU.readBits(1);
            UU && WU(zU);
            const XU = zU.readBits(1);
            XU && WU(zU), (UU || XU) && zU.skipBits(1), zU.skipBits(1), OU = zU.pos, SU = zU.readBits(1), SU && (zU.skipBits(1), (0, yU.Hc)(zU), (0, yU.Hc)(zU), (0, yU.Hc)(zU), (0, yU.Hc)(zU), wU = (0, yU.Hc)(zU), qU = (0, yU.Hc)(zU))
          }
          if (null === wU) {
            (0, yU.J)(null === qU);
            if (44 !== QU && 86 !== QU && 100 !== QU && 110 !== QU && 122 !== QU && 244 !== QU || !(16 & AU)) {
              const UU = pU + 1,
                XU = (2 - ZU) * (tU + 1),
                zU = cU.g.find((UU => UU.level >= FU)) ?? (0, yU.kc)(cU.g),
                QU = Math.min(Math.floor(zU.maxDpbMbs / (UU * XU)), 16);
              wU = QU, qU = QU
            } else wU = 0, qU = 0
          }
          return (0, yU.J)(null !== qU), {
            emulationUnpreventedBytes: XU,
            profileIdc: QU,
            constraintFlags: AU,
            levelIdc: FU,
            frameMbsOnlyFlag: ZU,
            chromaFormatIdc: oU,
            bitDepthLumaMinus8: DU,
            bitDepthChromaMinus8: YU,
            codedWidth: gU,
            codedHeight: kU,
            displayWidth: GU,
            displayHeight: BU,
            pixelAspectRatio: CU,
            colourPrimaries: PU,
            matrixCoefficients: LU,
            transferCharacteristics: dU,
            fullRangeFlag: eU,
            numReorderFrames: wU,
            maxDecFrameBuffering: qU,
            vuiParametersFlagBitOffset: rU,
            bitstreamRestrictionFlagBitOffset: OU,
            bitstreamRestrictionFlag: SU
          }
        } catch (XU) {
          return QU.c._error("Error parsing AVC SPS:", XU), null
        }
      },
      WU = UU => {
        const XU = (0, yU.Hc)(UU);
        UU.skipBits(4), UU.skipBits(4);
        for (let zU = 0; zU <= XU; zU++)(0, yU.Hc)(UU), (0, yU.Hc)(UU), UU.skipBits(1);
        UU.skipBits(5), UU.skipBits(5), UU.skipBits(5), UU.skipBits(5)
      },
      dU = (UU, XU) => {
        if (XU.description) {
          const zU = 3 & (0, yU.md)(XU.description)[21];
          return IU(UU, zU + 1)
        }
        return NU(UU)
      },
      LU = UU => UU >> 1 & 63,
      eU = UU => {
        try {
          const XU = [],
            zU = [],
            cU = [],
            AU = [];
          for (const yU of NU(UU)) {
            const QU = UU.subarray(yU.offset, yU.offset + yU.length),
              FU = LU(QU[0]);
            FU === DU.VPS_NUT ? XU.push(QU) : FU === DU.SPS_NUT ? zU.push(QU) : FU === DU.PPS_NUT ? cU.push(QU) : FU !== DU.PREFIX_SEI_NUT && FU !== DU.SUFFIX_SEI_NUT || AU.push(QU)
          }
          if (0 === zU.length || 0 === cU.length) return null;
          const FU = (UU => {
            try {
              const XU = new EU.b(aU(UU));
              XU.skipBits(16), XU.readBits(4);
              const zU = XU.readBits(3),
                cU = XU.readBits(1),
                {
                  general_profile_space: QU,
                  general_tier_flag: AU,
                  general_profile_idc: FU,
                  general_profile_compatibility_flags: oU,
                  general_constraint_indicator_flags: DU,
                  general_level_idc: YU
                } = CU(XU, zU);
              (0, yU.Hc)(XU);
              const NU = (0, yU.Hc)(XU);
              let IU = 0;
              3 === NU && (IU = XU.readBits(1));
              const pU = (0, yU.Hc)(XU),
                tU = (0, yU.Hc)(XU);
              let gU = pU,
                kU = tU;
              if (XU.readBits(1)) {
                const UU = (0, yU.Hc)(XU),
                  zU = (0, yU.Hc)(XU),
                  cU = (0, yU.Hc)(XU),
                  QU = (0, yU.Hc)(XU);
                let AU = 1,
                  FU = 1;
                const oU = 0 === IU ? NU : 0;
                1 === oU ? (AU = 2, FU = 2) : 2 === oU && (AU = 2, FU = 1), gU -= (UU + zU) * AU, kU -= (cU + QU) * FU
              }
              const GU = (0, yU.Hc)(XU),
                BU = (0, yU.Hc)(XU);
              (0, yU.Hc)(XU);
              const ZU = XU.readBits(1);
              let RU = 0;
              for (let UU = ZU ? 0 : zU; UU <= zU; UU++)(0, yU.Hc)(XU), RU = (0, yU.Hc)(XU), (0, yU.Hc)(XU);
              (0, yU.Hc)(XU), (0, yU.Hc)(XU), (0, yU.Hc)(XU), (0, yU.Hc)(XU), (0, yU.Hc)(XU), (0, yU.Hc)(XU), XU.readBits(1) && XU.readBits(1) && wU(XU), XU.skipBits(1), XU.skipBits(1), XU.readBits(1) && (XU.skipBits(4), XU.skipBits(4), (0, yU.Hc)(XU), (0, yU.Hc)(XU), XU.skipBits(1));
              const PU = (0, yU.Hc)(XU);
              if (qU(XU, PU), XU.readBits(1)) {
                const UU = (0, yU.Hc)(XU);
                for (let zU = 0; zU < UU; zU++)(0, yU.Hc)(XU), XU.skipBits(1)
              }
              XU.skipBits(1), XU.skipBits(1);
              let WU = 2,
                dU = 2,
                LU = 2,
                eU = 0,
                OU = 0,
                rU = {
                  num: 1,
                  den: 1
                };
              if (XU.readBits(1)) {
                const UU = SU(XU, zU);
                rU = UU.pixelAspectRatio, WU = UU.colourPrimaries, dU = UU.transferCharacteristics, LU = UU.matrixCoefficients, eU = UU.fullRangeFlag, OU = UU.minSpatialSegmentationIdc
              }
              return {
                displayWidth: gU,
                displayHeight: kU,
                pixelAspectRatio: rU,
                colourPrimaries: WU,
                transferCharacteristics: dU,
                matrixCoefficients: LU,
                fullRangeFlag: eU,
                maxDecFrameBuffering: RU + 1,
                spsMaxSubLayersMinus1: zU,
                spsTemporalIdNestingFlag: cU,
                generalProfileSpace: QU,
                generalTierFlag: AU,
                generalProfileIdc: FU,
                generalProfileCompatibilityFlags: oU,
                generalConstraintIndicatorFlags: DU,
                generalLevelIdc: YU,
                chromaFormatIdc: NU,
                bitDepthLumaMinus8: GU,
                bitDepthChromaMinus8: BU,
                minSpatialSegmentationIdc: OU
              }
            } catch (XU) {
              return QU.c._error("Error parsing HEVC SPS:", XU), null
            }
          })(zU[0]);
          if (!FU) return null;
          let oU = 0;
          if (cU.length > 0) {
            const UU = cU[0],
              XU = new EU.b(aU(UU));
            XU.skipBits(16), (0, yU.Hc)(XU), (0, yU.Hc)(XU), XU.skipBits(1), XU.skipBits(1), XU.skipBits(3), XU.skipBits(1), XU.skipBits(1), (0, yU.Hc)(XU), (0, yU.Hc)(XU), (0, yU.Ic)(XU), XU.skipBits(1), XU.skipBits(1), XU.readBits(1) && (0, yU.Hc)(XU), (0, yU.Ic)(XU), (0, yU.Ic)(XU), XU.skipBits(1), XU.skipBits(1), XU.skipBits(1), XU.skipBits(1);
            const zU = XU.readBits(1),
              QU = XU.readBits(1);
            oU = zU || QU ? zU && !QU ? 2 : !zU && QU ? 3 : 0 : 0
          }
          const YU = [...XU.length ? [{
            arrayCompleteness: 1,
            nalUnitType: DU.VPS_NUT,
            nalUnits: XU
          }] : [], ...zU.length ? [{
            arrayCompleteness: 1,
            nalUnitType: DU.SPS_NUT,
            nalUnits: zU
          }] : [], ...cU.length ? [{
            arrayCompleteness: 1,
            nalUnitType: DU.PPS_NUT,
            nalUnits: cU
          }] : [], ...AU.length ? [{
            arrayCompleteness: 1,
            nalUnitType: LU(AU[0][0]),
            nalUnits: AU
          }] : []];
          return {
            configurationVersion: 1,
            generalProfileSpace: FU.generalProfileSpace,
            generalTierFlag: FU.generalTierFlag,
            generalProfileIdc: FU.generalProfileIdc,
            generalProfileCompatibilityFlags: FU.generalProfileCompatibilityFlags,
            generalConstraintIndicatorFlags: FU.generalConstraintIndicatorFlags,
            generalLevelIdc: FU.generalLevelIdc,
            minSpatialSegmentationIdc: FU.minSpatialSegmentationIdc,
            parallelismType: oU,
            chromaFormatIdc: FU.chromaFormatIdc,
            bitDepthLumaMinus8: FU.bitDepthLumaMinus8,
            bitDepthChromaMinus8: FU.bitDepthChromaMinus8,
            avgFrameRate: 0,
            constantFrameRate: 0,
            numTemporalLayers: FU.spsMaxSubLayersMinus1 + 1,
            temporalIdNested: FU.spsTemporalIdNestingFlag,
            lengthSizeMinusOne: 3,
            arrays: YU
          }
        } catch (XU) {
          return QU.c._error("Error building HEVC Decoder Configuration Record:", XU), null
        }
      },
      CU = (UU, XU) => {
        const zU = UU.readBits(2),
          cU = UU.readBits(1),
          yU = UU.readBits(5);
        let QU = 0;
        for (let EU = 0; EU < 32; EU++) QU = QU << 1 | UU.readBits(1);
        const AU = new Uint8Array(6);
        for (let EU = 0; EU < 6; EU++) AU[EU] = UU.readBits(8);
        const FU = UU.readBits(8),
          oU = [],
          DU = [];
        for (let EU = 0; EU < XU; EU++) oU.push(UU.readBits(1)), DU.push(UU.readBits(1));
        if (XU > 0)
          for (let EU = XU; EU < 8; EU++) UU.skipBits(2);
        for (let EU = 0; EU < XU; EU++) oU[EU] && UU.skipBits(88), DU[EU] && UU.skipBits(8);
        return {
          general_profile_space: zU,
          general_tier_flag: cU,
          general_profile_idc: yU,
          general_profile_compatibility_flags: QU,
          general_constraint_indicator_flags: AU,
          general_level_idc: FU
        }
      },
      wU = UU => {
        for (let XU = 0; XU < 4; XU++)
          for (let zU = 0; zU < (3 === XU ? 2 : 6); zU++) {
            if (UU.readBits(1)) {
              const zU = Math.min(64, 1 << 4 + (XU << 1));
              XU > 1 && (0, yU.Ic)(UU);
              for (let XU = 0; XU < zU; XU++)(0, yU.Ic)(UU)
            } else(0, yU.Hc)(UU)
          }
      },
      qU = (UU, XU) => {
        const zU = [];
        for (let cU = 0; cU < XU; cU++) zU[cU] = OU(UU, cU, XU, zU)
      },
      OU = (UU, XU, zU, cU) => {
        let QU = 0,
          AU = 0,
          FU = 0;
        if (0 !== XU && (AU = UU.readBits(1)), AU) {
          if (XU === zU) {
            FU = XU - ((0, yU.Hc)(UU) + 1)
          } else FU = XU - 1;
          UU.readBits(1), (0, yU.Hc)(UU);
          const AU = cU[FU] ?? 0;
          for (let XU = 0; XU <= AU; XU++) {
            UU.readBits(1) || UU.readBits(1)
          }
          QU = cU[FU]
        } else {
          const XU = (0, yU.Hc)(UU),
            zU = (0, yU.Hc)(UU);
          for (let cU = 0; cU < XU; cU++)(0, yU.Hc)(UU), UU.readBits(1);
          for (let cU = 0; cU < zU; cU++)(0, yU.Hc)(UU), UU.readBits(1);
          QU = XU + zU
        }
        return QU
      },
      SU = (UU, XU) => {
        let zU = 2,
          cU = 2,
          QU = 2,
          AU = 0,
          FU = 0,
          oU = {
            num: 1,
            den: 1
          };
        if (UU.readBits(1)) {
          const XU = UU.readBits(8);
          if (255 === XU) oU = {
            num: UU.readBits(16),
            den: UU.readBits(16)
          };
          else {
            const UU = RU[XU];
            UU && (oU = UU)
          }
        }
        return UU.readBits(1) && UU.readBits(1), UU.readBits(1) && (UU.readBits(3), AU = UU.readBits(1), UU.readBits(1) && (zU = UU.readBits(8), cU = UU.readBits(8), QU = UU.readBits(8))), UU.readBits(1) && ((0, yU.Hc)(UU), (0, yU.Hc)(UU)), UU.readBits(1), UU.readBits(1), UU.readBits(1), UU.readBits(1) && ((0, yU.Hc)(UU), (0, yU.Hc)(UU), (0, yU.Hc)(UU), (0, yU.Hc)(UU)), UU.readBits(1) && (UU.readBits(32), UU.readBits(32), UU.readBits(1) && (0, yU.Hc)(UU), UU.readBits(1) && rU(UU, !0, XU)), UU.readBits(1) && (UU.readBits(1), UU.readBits(1), UU.readBits(1), FU = (0, yU.Hc)(UU), (0, yU.Hc)(UU), (0, yU.Hc)(UU), (0, yU.Hc)(UU), (0, yU.Hc)(UU)), {
          pixelAspectRatio: oU,
          colourPrimaries: zU,
          transferCharacteristics: cU,
          matrixCoefficients: QU,
          fullRangeFlag: AU,
          minSpatialSegmentationIdc: FU
        }
      },
      rU = (UU, XU, zU) => {
        let cU = !1,
          QU = !1,
          AU = !1;
        XU && (cU = 1 === UU.readBits(1), QU = 1 === UU.readBits(1), (cU || QU) && (AU = 1 === UU.readBits(1), AU && (UU.readBits(8), UU.readBits(5), UU.readBits(1), UU.readBits(5)), UU.readBits(4), UU.readBits(4), AU && UU.readBits(4), UU.readBits(5), UU.readBits(5), UU.readBits(5)));
        for (let FU = 0; FU <= zU; FU++) {
          let XU = !0;
          1 === UU.readBits(1) || (XU = 1 === UU.readBits(1));
          let zU = !1;
          XU ? (0, yU.Hc)(UU) : zU = 1 === UU.readBits(1);
          let FU = 1;
          if (!zU) {
            FU = (0, yU.Hc)(UU) + 1
          }
          cU && uU(UU, FU, AU), QU && uU(UU, FU, AU)
        }
      },
      uU = (UU, XU, zU) => {
        for (let cU = 0; cU < XU; cU++)(0, yU.Hc)(UU), (0, yU.Hc)(UU), zU && ((0, yU.Hc)(UU), (0, yU.Hc)(UU)), UU.readBits(1)
      },
      fU = UU => {
        const XU = [];
        XU.push(UU.configurationVersion), XU.push((3 & UU.generalProfileSpace) << 6 | (1 & UU.generalTierFlag) << 5 | 31 & UU.generalProfileIdc), XU.push(UU.generalProfileCompatibilityFlags >>> 24 & 255), XU.push(UU.generalProfileCompatibilityFlags >>> 16 & 255), XU.push(UU.generalProfileCompatibilityFlags >>> 8 & 255), XU.push(255 & UU.generalProfileCompatibilityFlags), XU.push(...UU.generalConstraintIndicatorFlags), XU.push(255 & UU.generalLevelIdc), XU.push(240 | UU.minSpatialSegmentationIdc >> 8 & 15), XU.push(255 & UU.minSpatialSegmentationIdc), XU.push(252 | 3 & UU.parallelismType), XU.push(252 | 3 & UU.chromaFormatIdc), XU.push(248 | 7 & UU.bitDepthLumaMinus8), XU.push(248 | 7 & UU.bitDepthChromaMinus8), XU.push(UU.avgFrameRate >> 8 & 255), XU.push(255 & UU.avgFrameRate), XU.push((3 & UU.constantFrameRate) << 6 | (7 & UU.numTemporalLayers) << 3 | (1 & UU.temporalIdNested) << 2 | 3 & UU.lengthSizeMinusOne), XU.push(255 & UU.arrays.length);
        for (const zU of UU.arrays) {
          XU.push((1 & zU.arrayCompleteness) << 7 | 63 & zU.nalUnitType), XU.push(zU.nalUnits.length >> 8 & 255), XU.push(255 & zU.nalUnits.length);
          for (const UU of zU.nalUnits) {
            XU.push(UU.length >> 8 & 255), XU.push(255 & UU.length);
            for (let zU = 0; zU < UU.length; zU++) XU.push(UU[zU])
          }
        }
        return new Uint8Array(XU)
      },
      iU = UU => {
        try {
          const XU = (0, yU.ld)(UU);
          let zU = 0;
          const cU = XU.getUint8(zU++),
            QU = XU.getUint8(zU++),
            AU = QU >> 6 & 3,
            FU = QU >> 5 & 1,
            oU = 31 & QU,
            DU = XU.getUint32(zU, !1);
          zU += 4;
          const EU = UU.subarray(zU, zU + 6);
          zU += 6;
          const YU = XU.getUint8(zU++),
            NU = (15 & XU.getUint8(zU++)) << 8 | XU.getUint8(zU++),
            IU = 3 & XU.getUint8(zU++),
            pU = 3 & XU.getUint8(zU++),
            aU = 7 & XU.getUint8(zU++),
            tU = 7 & XU.getUint8(zU++),
            gU = XU.getUint16(zU, !1);
          zU += 2;
          const kU = XU.getUint8(zU++),
            GU = kU >> 6 & 3,
            BU = kU >> 3 & 7,
            ZU = kU >> 2 & 1,
            RU = 3 & kU,
            PU = XU.getUint8(zU++),
            WU = [];
          for (let yU = 0; yU < PU; yU++) {
            const cU = XU.getUint8(zU++),
              yU = cU >> 7 & 1,
              QU = 63 & cU,
              AU = XU.getUint16(zU, !1);
            zU += 2;
            const FU = [];
            for (let oU = 0; oU < AU; oU++) {
              const cU = XU.getUint16(zU, !1);
              zU += 2, FU.push(UU.subarray(zU, zU + cU)), zU += cU
            }
            WU.push({
              arrayCompleteness: yU,
              nalUnitType: QU,
              nalUnits: FU
            })
          }
          return {
            configurationVersion: cU,
            generalProfileSpace: AU,
            generalTierFlag: FU,
            generalProfileIdc: oU,
            generalProfileCompatibilityFlags: DU,
            generalConstraintIndicatorFlags: EU,
            generalLevelIdc: YU,
            minSpatialSegmentationIdc: NU,
            parallelismType: IU,
            chromaFormatIdc: pU,
            bitDepthLumaMinus8: aU,
            bitDepthChromaMinus8: tU,
            avgFrameRate: gU,
            constantFrameRate: GU,
            numTemporalLayers: BU,
            temporalIdNested: ZU,
            lengthSizeMinusOne: RU,
            arrays: WU
          }
        } catch (XU) {
          return QU.c._error("Error deserializing HEVC Decoder Configuration Record:", XU), null
        }
      };
    var HU;
    ! function(UU) {
      UU[UU.audAllowed = 0] = "audAllowed", UU[UU.beforeFirstVcl = 1] = "beforeFirstVcl", UU[UU.afterFirstVcl = 2] = "afterFirstVcl", UU[UU.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", UU[UU.noMoreDataAllowed = 4] = "noMoreDataAllowed"
    }(HU || (HU = {}));
    const MU = {
        1: {
          colourPrimaries: 5,
          transferCharacteristics: 6,
          matrixCoefficients: 5
        },
        2: {
          colourPrimaries: 1,
          transferCharacteristics: 1,
          matrixCoefficients: 1
        },
        3: {
          colourPrimaries: 6,
          transferCharacteristics: 6,
          matrixCoefficients: 6
        },
        4: {
          colourPrimaries: 7,
          transferCharacteristics: 7,
          matrixCoefficients: 7
        },
        5: {
          colourPrimaries: 9,
          transferCharacteristics: 14,
          matrixCoefficients: 9
        },
        7: {
          colourPrimaries: 1,
          transferCharacteristics: 13,
          matrixCoefficients: 0
        }
      },
      vU = UU => {
        const XU = new EU.b(UU);
        if (2 !== XU.readBits(2)) return null;
        const zU = XU.readBits(1),
          QU = (XU.readBits(1) << 1) + zU;
        3 === QU && XU.skipBits(1);
        if (1 === XU.readBits(1)) return null;
        if (0 !== XU.readBits(1)) return null;
        XU.skipBits(2);
        if (4817730 !== XU.readBits(24)) return null;
        let AU = 8;
        if (QU >= 2) {
          AU = XU.readBits(1) ? 12 : 10
        }
        const FU = XU.readBits(3);
        let oU = 0,
          DU = 0;
        if (7 !== FU) {
          if (DU = XU.readBits(1), 1 === QU || 3 === QU) {
            const UU = XU.readBits(1),
              zU = XU.readBits(1);
            oU = UU || zU ? UU && !zU ? 2 : 1 : 3, XU.skipBits(1)
          } else oU = 1
        } else oU = 3, DU = 1;
        const YU = (XU.readBits(16) + 1) * (XU.readBits(16) + 1);
        let NU = (0, yU.kc)(cU.z).level;
        for (const yU of cU.z)
          if (YU <= yU.maxPictureSize) {
            NU = yU.level;
            break
          } const IU = MU[FU];
        return {
          profile: QU,
          level: NU,
          bitDepth: AU,
          chromaSubsampling: oU,
          videoFullRangeFlag: DU,
          colourPrimaries: IU?.colourPrimaries ?? 2,
          transferCharacteristics: IU?.transferCharacteristics ?? 2,
          matrixCoefficients: IU?.matrixCoefficients ?? 2
        }
      },
      VU = function*(UU) {
        const XU = new EU.b(UU),
          zU = () => {
            let UU = 0;
            for (let zU = 0; zU < 8; zU++) {
              const cU = XU.readAlignedByte();
              if (UU += (127 & cU) * 2 ** (7 * zU), !(128 & cU)) break;
              if (7 === zU && 128 & cU) return null
            }
            return UU > 2 ** 32 - 1 ? null : UU
          };
        for (; XU.getBitsLeft() >= 8;) {
          XU.skipBits(1);
          const cU = XU.readBits(4),
            QU = XU.readBits(1),
            AU = XU.readBits(1);
          let FU;
          if (XU.skipBits(1), QU && XU.skipBits(8), AU) {
            const UU = zU();
            if (null === UU) return;
            FU = UU
          } else FU = Math.floor(XU.getBitsLeft() / 8);
          (0, yU.J)(XU.pos % 8 === 0), yield {
            type: cU,
            data: UU.subarray(XU.pos / 8, XU.pos / 8 + FU)
          }, XU.skipBits(8 * FU)
        }
      },
      sU = UU => {
        for (const {
            type: XU,
            data: zU
          }
          of VU(UU)) {
          if (1 !== XU) continue;
          const UU = new EU.b(zU),
            cU = UU.readBits(3),
            yU = (UU.readBits(1), UU.readBits(1));
          let QU = 0,
            AU = 0,
            FU = 0;
          if (yU) QU = UU.readBits(5);
          else {
            let XU = 0;
            if (UU.readBits(1)) {
              UU.skipBits(32), UU.skipBits(32);
              if (UU.readBits(1)) {
                let XU = 0;
                for (; XU < 32 && !UU.readBits(1);) XU++;
                XU < 32 && UU.skipBits(XU)
              }
              XU = UU.readBits(1), XU && (FU = UU.readBits(5), UU.skipBits(32), UU.skipBits(5), UU.skipBits(5))
            }
            const zU = UU.readBits(1),
              cU = UU.readBits(5);
            for (let yU = 0; yU <= cU; yU++) {
              UU.skipBits(12);
              const cU = UU.readBits(5);
              if (0 === yU && (QU = cU), cU > 7) {
                const XU = UU.readBits(1);
                0 === yU && (AU = XU)
              }
              if (XU) {
                if (UU.readBits(1)) {
                  const XU = FU + 1;
                  UU.skipBits(XU), UU.skipBits(XU), UU.skipBits(1)
                }
              }
              if (zU) {
                UU.readBits(1) && UU.skipBits(4)
              }
            }
          }
          const oU = UU.readBits(4),
            DU = UU.readBits(4),
            YU = oU + 1;
          UU.skipBits(YU);
          const NU = DU + 1;
          UU.skipBits(NU);
          let IU = 0;
          if (IU = yU ? 0 : UU.readBits(1), IU && (UU.skipBits(4), UU.skipBits(3)), UU.skipBits(1), UU.skipBits(1), UU.skipBits(1), !yU) {
            UU.skipBits(1), UU.skipBits(1), UU.skipBits(1), UU.skipBits(1);
            const XU = UU.readBits(1);
            XU && (UU.skipBits(1), UU.skipBits(1));
            let zU = 0;
            if (zU = UU.readBits(1) ? 2 : UU.readBits(1), zU > 0) {
              UU.readBits(1) || UU.skipBits(1)
            }
            XU && UU.skipBits(3)
          }
          UU.skipBits(1), UU.skipBits(1), UU.skipBits(1);
          const pU = UU.readBits(1);
          let aU = 8;
          if (2 === cU && pU) {
            aU = UU.readBits(1) ? 12 : 10
          } else cU <= 2 && (aU = pU ? 10 : 8);
          let tU = 0;
          1 !== cU && (tU = UU.readBits(1));
          let gU = 2,
            kU = 2,
            GU = 2;
          UU.readBits(1) && (gU = UU.readBits(8), kU = UU.readBits(8), GU = UU.readBits(8));
          let BU = 0,
            ZU = 1,
            RU = 1,
            PU = 0;
          return tU ? BU = UU.readBits(1) : 1 === gU && 13 === kU && 0 === GU ? (BU = 1, ZU = 0, RU = 0) : (BU = UU.readBits(1), 0 === cU ? (ZU = 1, RU = 1) : 1 === cU ? (ZU = 0, RU = 0) : 12 === aU ? (ZU = UU.readBits(1), RU = ZU ? UU.readBits(1) : 0) : (ZU = 1, RU = 0), ZU && RU && (PU = UU.readBits(2))), {
            profile: cU,
            level: QU,
            tier: AU,
            bitDepth: aU,
            monochrome: tU,
            chromaSubsamplingX: ZU,
            chromaSubsamplingY: RU,
            chromaSamplePosition: PU,
            videoFullRangeFlag: BU,
            colourPrimaries: gU,
            transferCharacteristics: kU,
            matrixCoefficients: GU
          }
        }
        return null
      },
      nU = UU => 2 !== UU.colourPrimaries || 2 !== UU.transferCharacteristics || 2 !== UU.matrixCoefficients,
      mU = UU => {
        const XU = (0, yU.ld)(UU),
          zU = XU.getUint8(9),
          cU = XU.getUint16(10, !0),
          QU = XU.getUint32(12, !0),
          AU = XU.getInt16(16, !0),
          FU = XU.getUint8(18);
        let oU = null;
        return FU && (oU = UU.subarray(19, 21 + zU)), {
          outputChannelCount: zU,
          preSkip: cU,
          inputSampleRate: QU,
          outputGain: AU,
          channelMappingFamily: FU,
          channelMappingTable: oU
        }
      },
      lU = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960],
      xU = UU => {
        const XU = UU[0] >> 3,
          zU = 3 & UU[0];
        let cU;
        return cU = 0 === zU ? 1 : 1 === zU || 2 === zU ? 2 : 63 & UU[1], {
          durationInSamples: lU[XU] * cU
        }
      },
      JU = UU => {
        if (UU.length < 7) throw new Error("Setup header is too short.");
        if (5 !== UU[0]) throw new Error("Wrong packet type in Setup header.");
        if ("vorbis" !== String.fromCharCode(...UU.slice(1, 7))) throw new Error("Invalid packet signature in Setup header.");
        const XU = UU.length,
          zU = new Uint8Array(XU);
        for (let EU = 0; EU < XU; EU++) zU[EU] = UU[XU - 1 - EU];
        const cU = new EU.b(zU);
        let yU = 0;
        for (; cU.getBitsLeft() > 97;)
          if (1 === cU.readBits(1)) {
            yU = cU.pos;
            break
          } if (0 === yU) throw new Error("Invalid Setup header: framing bit not found.");
        let QU = 0,
          AU = !1,
          FU = 0;
        for (; cU.getBitsLeft() >= 97;) {
          const UU = cU.pos,
            XU = cU.readBits(8),
            zU = cU.readBits(16),
            yU = cU.readBits(16);
          if (XU > 63 || 0 !== zU || 0 !== yU) {
            cU.pos = UU;
            break
          }
          if (cU.skipBits(1), QU++, QU > 64) break;
          cU.clone().readBits(6) + 1 === QU && (AU = !0, FU = QU)
        }
        if (!AU) throw new Error("Invalid Setup header: mode header not found.");
        if (FU > 63) throw new Error(`Unsupported mode count: ${FU}.`);
        const oU = FU;
        cU.pos = 0, cU.skipBits(yU);
        const DU = Array(oU).fill(0);
        for (let EU = oU - 1; EU >= 0; EU--) cU.skipBits(40), DU[EU] = cU.readBits(1);
        return {
          modeBlockflags: DU
        }
      },
      jU = (UU, XU, zU) => {
        switch (UU) {
          case "avc":
            for (const UU of ((UU, XU) => {
                if (XU.description) {
                  const zU = 3 & (0, yU.md)(XU.description)[4];
                  return IU(UU, zU + 1)
                }
                return NU(UU)
              })(zU, XU)) {
              const XU = zU[UU.offset],
                cU = pU(XU);
              if (cU >= oU.NON_IDR_SLICE && cU <= oU.SLICE_DPC) return "delta";
              if (cU === oU.IDR) return "key";
              if (cU === oU.SEI && !(0, yU.Fb)()) {
                const XU = zU.subarray(UU.offset, UU.offset + UU.length),
                  cU = aU(XU);
                let QU = 1;
                do {
                  let UU = 0;
                  for (;;) {
                    const XU = cU[QU++];
                    if (void 0 === XU) break;
                    if (UU += XU, XU < 255) break
                  }
                  let XU = 0;
                  for (;;) {
                    const UU = cU[QU++];
                    if (void 0 === UU) break;
                    if (XU += UU, UU < 255) break
                  }
                  if (UU === 6) {
                    const UU = new EU.b(cU);
                    UU.pos = 8 * QU;
                    const XU = (0, yU.Hc)(UU),
                      zU = UU.readBits(1);
                    if (0 === XU && 1 === zU) return "key"
                  }
                  QU += XU
                } while (QU < cU.length - 1)
              }
            }
            return "delta";
          case "hevc":
            for (const UU of dU(zU, XU)) {
              const XU = LU(zU[UU.offset]);
              if (XU < DU.BLA_W_LP) return "delta";
              if (XU <= DU.RSV_IRAP_VCL23) return "key"
            }
            return "delta";
          case "vp8":
            return 0 === (1 & zU[0]) ? "key" : "delta";
          case "vp9": {
            const UU = new EU.b(zU);
            if (2 !== UU.readBits(2)) return null;
            const XU = UU.readBits(1);
            3 === (UU.readBits(1) << 1) + XU && UU.skipBits(1);
            if (UU.readBits(1)) return null;
            return 0 === UU.readBits(1) ? "key" : "delta"
          }
          case "av1": {
            let UU = !1;
            for (const {
                type: XU,
                data: cU
              }
              of VU(zU))
              if (1 === XU) {
                const XU = new EU.b(cU);
                XU.skipBits(4), UU = !!XU.readBits(1)
              } else if (3 === XU || 6 === XU || 7 === XU) {
              if (UU) return "key";
              const XU = new EU.b(cU);
              if (XU.readBits(1)) return null;
              return 0 === XU.readBits(2) ? "key" : "delta"
            }
            return null
          }
          case "prores":
            return "key";
          default:
            (0, yU.H)(UU), (0, yU.J)(!1)
        }
      };
    var KU;
    ! function(UU) {
      UU[UU.STREAMINFO = 0] = "STREAMINFO", UU[UU.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", UU[UU.PICTURE = 6] = "PICTURE"
    }(KU || (KU = {}));
    const bU = (UU, XU, zU) => {
        const cU = [UU],
          QU = yU.hd.encode(YU.e);
        let AU = new Uint8Array(4 + QU.length),
          FU = new DataView(AU.buffer);
        FU.setUint32(0, QU.length, !0), AU.set(QU, 4), cU.push(AU);
        const oU = [],
          DU = (UU, XU) => {
            const zU = `${UU}=${XU}`,
              QU = yU.hd.encode(zU);
            AU = new Uint8Array(4 + QU.length), FU = new DataView(AU.buffer), FU.setUint32(0, QU.length, !0), AU.set(QU, 4), cU.push(AU), oU.push(UU)
          };
        for (const {
            key: YU,
            value: aU
          }
          of(0, yU.gc)(XU)) switch (YU) {
          case "title":
            DU("TITLE", aU);
            break;
          case "description":
            DU("DESCRIPTION", aU);
            break;
          case "artist":
            DU("ARTIST", aU);
            break;
          case "album":
            DU("ALBUM", aU);
            break;
          case "albumArtist":
            DU("ALBUMARTIST", aU);
            break;
          case "genre":
            DU("GENRE", aU);
            break;
          case "date":
            DU("DATE", aU.toISOString().slice(0, 10));
            break;
          case "comment":
            DU("COMMENT", aU);
            break;
          case "lyrics":
            DU("LYRICS", aU);
            break;
          case "trackNumber":
            DU("TRACKNUMBER", aU.toString());
            break;
          case "tracksTotal":
            DU("TRACKTOTAL", aU.toString());
            break;
          case "discNumber":
            DU("DISCNUMBER", aU.toString());
            break;
          case "discsTotal":
            DU("DISCTOTAL", aU.toString());
            break;
          case "beatsPerMinute":
            DU("BPM", aU.toString());
            break;
          case "images":
            if (!zU) break;
            for (const UU of aU) {
              const XU = "coverFront" === UU.kind ? 3 : "coverBack" === UU.kind ? 4 : 0,
                zU = new Uint8Array(UU.mimeType.length);
              for (let yU = 0; yU < UU.mimeType.length; yU++) zU[yU] = UU.mimeType.charCodeAt(yU);
              const cU = yU.hd.encode(UU.description ?? ""),
                QU = new Uint8Array(8 + zU.length + 4 + cU.length + 16 + 4 + UU.data.length),
                AU = (0, yU.ld)(QU);
              AU.setUint32(0, XU, !1), AU.setUint32(4, zU.length, !1), QU.set(zU, 8), AU.setUint32(8 + zU.length, cU.length, !1), QU.set(cU, 12 + zU.length), AU.setUint32(28 + zU.length + cU.length, UU.data.length, !1), QU.set(UU.data, 32 + zU.length + cU.length);
              DU("METADATA_BLOCK_PICTURE", (0, yU.O)(QU))
            }
            break;
          case "raw":
            break;
          default:
            (0, yU.H)(YU)
        }
        if (XU.raw)
          for (const yU in XU.raw) {
            const UU = XU.raw[yU] ?? XU.raw[yU.toLowerCase()];
            if ("vendor" !== yU && null != UU && !oU.includes(yU))
              if ("string" === typeof UU) DU(yU, UU);
              else if (Array.isArray(UU)) {
              if (UU.every((UU => "string" === typeof UU)))
                for (const XU of UU) DU(yU, XU)
            }
          }
        const EU = new Uint8Array(4);
        (0, yU.ld)(EU).setUint32(0, oU.length, !0), cU.splice(2, 0, EU);
        const NU = cU.reduce(((UU, XU) => UU + XU.length), 0),
          IU = new Uint8Array(NU);
        let pU = 0;
        for (const yU of cU) IU.set(yU, pU), pU += yU.length;
        return IU
      },
      TU = UU => {
        if (UU.length < 7) return null;
        if (11 !== UU[0] || 119 !== UU[1]) return null;
        const XU = new EU.b(UU);
        XU.skipBits(16), XU.skipBits(16);
        const zU = XU.readBits(2);
        if (3 === zU) return null;
        const cU = XU.readBits(6),
          yU = XU.readBits(5);
        if (yU > 8) return null;
        const QU = XU.readBits(3),
          AU = XU.readBits(3);
        0 !== (1 & AU) && 1 !== AU && XU.skipBits(2), 0 !== (4 & AU) && XU.skipBits(2), 2 === AU && XU.skipBits(2);
        return {
          fscod: zU,
          bsid: yU,
          bsmod: QU,
          acmod: AU,
          lfeon: XU.readBits(1),
          bitRateCode: Math.floor(cU / 2)
        }
      },
      hU = new Uint8Array([5, 4, 65, 67, 45, 51]),
      UX = new Uint8Array([5, 4, 69, 65, 67, 51]),
      XX = [1, 2, 3, 6],
      zX = UU => {
        if (UU.length < 6) return null;
        if (11 !== UU[0] || 119 !== UU[1]) return null;
        const XU = new EU.b(UU);
        XU.skipBits(16);
        const zU = XU.readBits(2);
        if (XU.skipBits(3), 0 !== zU && 2 !== zU) return null;
        const cU = XU.readBits(11),
          yU = XU.readBits(2);
        let QU, oU = 0;
        3 === yU ? (oU = XU.readBits(2), QU = 3) : QU = XU.readBits(2);
        const DU = XU.readBits(3),
          YU = XU.readBits(1),
          NU = XU.readBits(5);
        if (NU < 11 || NU > 16) return null;
        const IU = XX[QU];
        let pU;
        pU = yU < 3 ? AU[yU] / 1e3 : FU[oU] / 1e3;
        return {
          dataRate: Math.round((cU + 1) * pU / (16 * IU)),
          substreams: [{
            fscod: yU,
            fscod2: oU,
            bsid: NU,
            bsmod: 0,
            acmod: DU,
            lfeon: YU,
            numDepSub: 0,
            chanLoc: 0
          }]
        }
      },
      cX = [0, 8e3, 16e3, 32e3, 0, 0, 11025, 22050, 44100, 0, 0, 12e3, 24e3, 48e3, 96e3, 192e3],
      yX = [32e3, 56e3, 64e3, 96e3, 112e3, 128e3, 192e3, 224e3, 256e3, 32e4, 384e3, 448e3, 512e3, 576e3, 64e4, 768e3, 96e4, 1024e3, 1152e3, 128e4, 1344e3, 1408e3, 1411200, 1472e3, 1536e3, 192e4, 2048e3, 3072e3, 384e4, 0, 0, 0],
      QX = [16, 16, 20, 20, 0, 24, 24, 0],
      AX = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8],
      FX = [1, 2, 2, 2, 2, 3, 18, 19, 6, 7, 518, 323, 83, 519, 582, 535],
      oX = [32e3, 44100, 48e3, 0],
      DX = [8e3, 16e3, 32e3, 64e3, 128e3, 22050, 44100, 88200, 176400, 352800, 12e3, 24e3, 48e3, 96e3, 192e3, 384e3],
      EX = [512, 1024, 2048, 4096],
      YX = UU => {
        const XU = NX(UU),
          zU = (0, yU.ld)(UU);
        let cU = XU ? 4 * Math.ceil(XU.frameSize / 4) : 0,
          QU = null;
        for (; cU + 4 <= UU.length && 1683496997 === zU.getUint32(cU);) {
          const XU = IX(UU.subarray(cU));
          if (!XU) break;
          QU ??= XU, cU += XU.frameSize
        }
        if (XU) return {
          frameSize: QU ? cU : XU.frameSize,
          sampleRate: XU.sampleRate,
          numberOfChannels: XU.numberOfChannels,
          sampleCount: XU.sampleCount,
          channelLayout: XU.channelLayout,
          pcmResolution: XU.pcmResolution,
          bitRate: XU.bitRate,
          core: XU,
          hasExtensions: null !== QU
        };
        if (!QU?.asset) return null;
        const {
          asset: AU
        } = QU;
        return {
          frameSize: cU,
          sampleRate: AU.sampleRate,
          numberOfChannels: AU.numberOfChannels,
          sampleCount: AU.sampleCount,
          channelLayout: AU.channelLayout,
          pcmResolution: AU.pcmResolution,
          bitRate: 0,
          core: null,
          hasExtensions: !0
        }
      },
      NX = UU => {
        if (UU.length < 18) return null;
        if (127 !== UU[0] || 254 !== UU[1] || 128 !== UU[2] || 1 !== UU[3]) return null;
        const XU = new EU.b(UU);
        if (XU.skipBits(32), XU.skipBits(1), 31 !== XU.readBits(5)) return null;
        const zU = XU.readBits(1),
          cU = XU.readBits(7) + 1;
        if (cU % 8 !== 0) return null;
        const yU = XU.readBits(14) + 1;
        if (yU < 96) return null;
        const QU = XU.readBits(6);
        if (QU >= AX.length) return null;
        const AU = cX[XU.readBits(4)];
        if (0 === AU) return null;
        const FU = yX[XU.readBits(5)];
        if (0 !== XU.readBits(1)) return null;
        XU.skipBits(4), XU.skipBits(5);
        const oU = XU.readBits(2);
        if (3 === oU) return null;
        XU.skipBits(1), zU && XU.skipBits(16), XU.skipBits(7);
        const DU = QX[XU.readBits(3)];
        if (0 === DU) return null;
        const YU = 0 !== oU;
        return {
          frameSize: yU,
          sampleRate: AU,
          numberOfChannels: AX[QU] + (YU ? 1 : 0),
          sampleCount: 32 * cU,
          channelLayout: FX[QU] | (YU ? 8 : 0),
          amode: QU,
          lfePresent: YU,
          bitRate: FU,
          pcmResolution: DU
        }
      },
      IX = UU => {
        if (UU.length < 10) return null;
        if (100 !== UU[0] || 88 !== UU[1] || 32 !== UU[2] || 37 !== UU[3]) return null;
        const XU = new EU.b(UU);
        XU.skipBits(32), XU.skipBits(8);
        const zU = XU.readBits(2),
          cU = XU.readBits(1),
          QU = 8 + 4 * cU,
          AU = 16 + 4 * cU;
        XU.skipBits(QU);
        const FU = XU.readBits(AU) + 1,
          oU = {
            frameSize: FU,
            asset: null
          };
        if (!XU.readBits(1)) return oU;
        const DU = oX[XU.readBits(2)],
          YU = 512 * (XU.readBits(3) + 1);
        XU.readBits(1) && XU.skipBits(36);
        const NU = XU.readBits(3) + 1,
          IU = XU.readBits(3) + 1,
          pU = [];
        for (let yU = 0; yU < NU; yU++) pU.push(XU.readBits(zU + 1));
        for (const EU of pU) XU.skipBits(8 * (0, yU.Dc)(EU));
        if (XU.readBits(1)) {
          XU.skipBits(2);
          const UU = XU.readBits(2) + 1 << 2,
            zU = XU.readBits(2) + 1;
          XU.skipBits(zU * UU)
        }
        for (let yU = 0; yU < IU; yU++) XU.skipBits(AU);
        XU.skipBits(9), XU.skipBits(3), XU.readBits(1) && XU.skipBits(4), XU.readBits(1) && XU.skipBits(24), XU.readBits(1) && XU.skipBits(8 * (XU.readBits(10) + 1));
        const aU = XU.readBits(5) + 1,
          tU = DX[XU.readBits(4)],
          gU = XU.readBits(8) + 1;
        let kU = 0;
        if (XU.readBits(1) && (gU > 2 && XU.skipBits(1), gU > 6 && XU.skipBits(1), XU.readBits(1))) {
          const UU = XU.readBits(2) + 1 << 2;
          kU = XU.readBits(UU)
        }
        return 0 === DU || XU.getBitsLeft() < 0 ? oU : {
          frameSize: FU,
          asset: {
            sampleRate: tU,
            numberOfChannels: gU,
            sampleCount: Math.round(YU * tU / DU),
            channelLayout: kU,
            pcmResolution: aU
          }
        }
      },
      pX = UU => {
        const XU = new Uint8Array(20),
          zU = (0, yU.ld)(XU);
        zU.setUint32(0, UU.sampleRate), zU.setUint32(4, UU.bitRate), zU.setUint32(8, UU.bitRate), XU[12] = UU.pcmResolution;
        const cU = UU.core && !UU.hasExtensions ? 1 : 0,
          QU = new EU.b(XU);
        return QU.seekToByte(13), QU.writeBits(2, Math.max(EX.indexOf(UU.sampleCount), 0)), QU.writeBits(5, cU), QU.writeBits(1, UU.core?.lfePresent ? 1 : 0), QU.writeBits(6, UU.core?.amode ?? 0), QU.writeBits(14, UU.core ? UU.core.frameSize - 1 : 0), QU.writeBits(1, 0), QU.writeBits(3, 0), QU.writeBits(16, UU.channelLayout), QU.writeBits(1, 0), QU.writeBits(1, 0), QU.writeBits(1, 0), QU.writeBits(5, 0), XU
      }
  },
  40723: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => PU,
      D: () => GU,
      F: () => RU,
      G: () => ZU,
      K: () => BU,
      L: () => wU,
      M: () => CU,
      N: () => eU,
      R: () => LU,
      S: () => HU,
      U: () => MU,
      V: () => fU,
      e: () => oU,
      g: () => EU,
      k: () => FU,
      o: () => WU,
      r: () => AU,
      u: () => DU,
      w: () => QU,
      z: () => NU
    });
    var cU = zU(40725),
      yU = zU(40687);
    const QU = ["avc", "hevc", "vp9", "av1", "vp8", "prores"],
      AU = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"],
      FU = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"],
      oU = [...FU, ...AU],
      DU = ["webvtt"],
      EU = [{
        maxMacroblocks: 99,
        maxBitrate: 64e3,
        maxDpbMbs: 396,
        level: 10
      }, {
        maxMacroblocks: 396,
        maxBitrate: 192e3,
        maxDpbMbs: 900,
        level: 11
      }, {
        maxMacroblocks: 396,
        maxBitrate: 384e3,
        maxDpbMbs: 2376,
        level: 12
      }, {
        maxMacroblocks: 396,
        maxBitrate: 768e3,
        maxDpbMbs: 2376,
        level: 13
      }, {
        maxMacroblocks: 396,
        maxBitrate: 2e6,
        maxDpbMbs: 2376,
        level: 20
      }, {
        maxMacroblocks: 792,
        maxBitrate: 4e6,
        maxDpbMbs: 4752,
        level: 21
      }, {
        maxMacroblocks: 1620,
        maxBitrate: 4e6,
        maxDpbMbs: 8100,
        level: 22
      }, {
        maxMacroblocks: 1620,
        maxBitrate: 1e7,
        maxDpbMbs: 8100,
        level: 30
      }, {
        maxMacroblocks: 3600,
        maxBitrate: 14e6,
        maxDpbMbs: 18e3,
        level: 31
      }, {
        maxMacroblocks: 5120,
        maxBitrate: 2e7,
        maxDpbMbs: 20480,
        level: 32
      }, {
        maxMacroblocks: 8192,
        maxBitrate: 2e7,
        maxDpbMbs: 32768,
        level: 40
      }, {
        maxMacroblocks: 8192,
        maxBitrate: 5e7,
        maxDpbMbs: 32768,
        level: 41
      }, {
        maxMacroblocks: 8704,
        maxBitrate: 5e7,
        maxDpbMbs: 34816,
        level: 42
      }, {
        maxMacroblocks: 22080,
        maxBitrate: 135e6,
        maxDpbMbs: 110400,
        level: 50
      }, {
        maxMacroblocks: 36864,
        maxBitrate: 24e7,
        maxDpbMbs: 184320,
        level: 51
      }, {
        maxMacroblocks: 36864,
        maxBitrate: 24e7,
        maxDpbMbs: 184320,
        level: 52
      }, {
        maxMacroblocks: 139264,
        maxBitrate: 24e7,
        maxDpbMbs: 696320,
        level: 60
      }, {
        maxMacroblocks: 139264,
        maxBitrate: 48e7,
        maxDpbMbs: 696320,
        level: 61
      }, {
        maxMacroblocks: 139264,
        maxBitrate: 8e8,
        maxDpbMbs: 696320,
        level: 62
      }],
      YU = [{
        maxPictureSize: 36864,
        maxBitrate: 128e3,
        tier: "L",
        level: 30
      }, {
        maxPictureSize: 122880,
        maxBitrate: 15e5,
        tier: "L",
        level: 60
      }, {
        maxPictureSize: 245760,
        maxBitrate: 3e6,
        tier: "L",
        level: 63
      }, {
        maxPictureSize: 552960,
        maxBitrate: 6e6,
        tier: "L",
        level: 90
      }, {
        maxPictureSize: 983040,
        maxBitrate: 1e7,
        tier: "L",
        level: 93
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 12e6,
        tier: "L",
        level: 120
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 3e7,
        tier: "H",
        level: 120
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 2e7,
        tier: "L",
        level: 123
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 5e7,
        tier: "H",
        level: 123
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 25e6,
        tier: "L",
        level: 150
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 1e8,
        tier: "H",
        level: 150
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 4e7,
        tier: "L",
        level: 153
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 16e7,
        tier: "H",
        level: 153
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 6e7,
        tier: "L",
        level: 156
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 24e7,
        tier: "H",
        level: 156
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 6e7,
        tier: "L",
        level: 180
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "H",
        level: 180
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 12e7,
        tier: "L",
        level: 183
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 48e7,
        tier: "H",
        level: 183
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "L",
        level: 186
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 8e8,
        tier: "H",
        level: 186
      }],
      NU = [{
        maxPictureSize: 36864,
        maxBitrate: 2e5,
        level: 10
      }, {
        maxPictureSize: 73728,
        maxBitrate: 8e5,
        level: 11
      }, {
        maxPictureSize: 122880,
        maxBitrate: 18e5,
        level: 20
      }, {
        maxPictureSize: 245760,
        maxBitrate: 36e5,
        level: 21
      }, {
        maxPictureSize: 552960,
        maxBitrate: 72e5,
        level: 30
      }, {
        maxPictureSize: 983040,
        maxBitrate: 12e6,
        level: 31
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 18e6,
        level: 40
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 3e7,
        level: 41
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 6e7,
        level: 50
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 12e7,
        level: 51
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 18e7,
        level: 52
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 18e7,
        level: 60
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        level: 61
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 48e7,
        level: 62
      }],
      IU = [{
        maxPictureSize: 147456,
        maxBitrate: 15e5,
        tier: "M",
        level: 0
      }, {
        maxPictureSize: 278784,
        maxBitrate: 3e6,
        tier: "M",
        level: 1
      }, {
        maxPictureSize: 665856,
        maxBitrate: 6e6,
        tier: "M",
        level: 4
      }, {
        maxPictureSize: 1065024,
        maxBitrate: 1e7,
        tier: "M",
        level: 5
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 12e6,
        tier: "M",
        level: 8
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 3e7,
        tier: "H",
        level: 8
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 2e7,
        tier: "M",
        level: 9
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 5e7,
        tier: "H",
        level: 9
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 3e7,
        tier: "M",
        level: 12
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 1e8,
        tier: "H",
        level: 12
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 4e7,
        tier: "M",
        level: 13
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 16e7,
        tier: "H",
        level: 13
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 6e7,
        tier: "M",
        level: 14
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 24e7,
        tier: "H",
        level: 14
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 6e7,
        tier: "M",
        level: 15
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "H",
        level: 15
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 6e7,
        tier: "M",
        level: 16
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "H",
        level: 16
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 1e8,
        tier: "M",
        level: 17
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 48e7,
        tier: "H",
        level: 17
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 16e7,
        tier: "M",
        level: 18
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 8e8,
        tier: "H",
        level: 18
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 16e7,
        tier: "M",
        level: 19
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 8e8,
        tier: "H",
        level: 19
      }],
      pU = ".01.01.01.01.00",
      aU = ".0.110.01.01.01.0",
      tU = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"],
      gU = ["dtsc", "dtsh", "dtsl", "dtse"],
      kU = [{
        fourCc: "apco",
        bitrate: 45e6,
        alpha: !1
      }, {
        fourCc: "apcs",
        bitrate: 102e6,
        alpha: !1
      }, {
        fourCc: "apcn",
        bitrate: 147e6,
        alpha: !1
      }, {
        fourCc: "apch",
        bitrate: 22e7,
        alpha: !1
      }, {
        fourCc: "ap4h",
        bitrate: 33e7,
        alpha: !0
      }, {
        fourCc: "ap4x",
        bitrate: 5e8,
        alpha: !0
      }],
      GU = (UU, XU, zU, cU, QU) => {
        if ("avc" === UU) {
          const UU = 100,
            QU = Math.ceil(XU / 16) * Math.ceil(zU / 16),
            AU = EU.find((UU => QU <= UU.maxMacroblocks && cU <= UU.maxBitrate)) ?? (0, yU.kc)(EU),
            FU = AU ? AU.level : 0;
          return `avc1.${UU.toString(16).padStart(2,"0")}${"00"}${FU.toString(16).padStart(2,"0")}`
        }
        if ("hevc" === UU) {
          const UU = "",
            QU = 1,
            AU = "6",
            FU = XU * zU,
            oU = YU.find((UU => FU <= UU.maxPictureSize && cU <= UU.maxBitrate)) ?? (0, yU.kc)(YU),
            DU = "B0";
          return `hev1.${UU}${QU}.${AU}.${oU.tier}${oU.level}.${DU}`
        }
        if ("vp8" === UU) return "vp8";
        if ("vp9" === UU) {
          const UU = XU * zU,
            QU = "08";
          return `vp09.${"00"}.${(NU.find((XU=>UU<=XU.maxPictureSize&&cU<=XU.maxBitrate))??(0,yU.kc)(NU)).level.toString().padStart(2,"0")}.${QU}`
        }
        if ("av1" === UU) {
          const UU = 0,
            QU = XU * zU,
            AU = IU.find((UU => QU <= UU.maxPictureSize && cU <= UU.maxBitrate)) ?? (0, yU.kc)(IU),
            FU = "08";
          return `av01.${UU}.${AU.level.toString().padStart(2,"0")}${AU.tier}.${FU}`
        }
        if ("prores" === UU) {
          const UU = 2073600,
            yU = Math.pow(XU * zU / UU, .95),
            AU = kU.filter((UU => UU.alpha === QU));
          let FU = AU[0].fourCc,
            oU = 1 / 0;
          for (const {
              fourCc: XU,
              bitrate: zU
            }
            of AU) {
            const UU = Math.abs(zU * yU - cU);
            UU < oU && (oU = UU, FU = XU)
          }
          return FU
        }
        throw (0, yU.H)(UU), new TypeError(`Unhandled codec '${String(UU)}'.`)
      },
      BU = UU => {
        const XU = UU.split(".");
        return [1, 1, Number(XU[1]), 2, 1, Number(XU[2]), 3, 1, Number(XU[3]), 4, 1, XU[4] ? Number(XU[4]) : 1]
      },
      ZU = UU => {
        const XU = UU.split("."),
          zU = Number(XU[1]),
          cU = XU[2],
          yU = (zU << 5) + Number(cU.slice(0, -1)),
          QU = "H" === cU.slice(-1) ? 1 : 0,
          AU = Number(XU[3]);
        return [129, yU, (QU << 7) + ((8 === AU ? 0 : 1) << 6) + ((12 === AU ? 1 : 0) << 5) + ((XU[4] ? Number(XU[4]) : 0) << 4) + ((XU[5] ? Number(XU[5][0]) : 1) << 3) + ((XU[5] ? Number(XU[5][1]) : 1) << 2) + (XU[5] ? Number(XU[5][2]) : 0), 0]
      },
      RU = UU => {
        const {
          codec: XU,
          codecDescription: zU,
          colorSpace: QU,
          avcCodecInfo: AU,
          hevcCodecInfo: FU,
          vp9CodecInfo: oU,
          av1CodecInfo: DU,
          proresFormat: EU
        } = UU;
        if ("avc" === XU) {
          if ((0, yU.J)(null !== UU.avcType), AU) {
            const XU = new Uint8Array([AU.avcProfileIndication, AU.profileCompatibility, AU.avcLevelIndication]);
            return `avc${UU.avcType}.${(0,yU.S)(XU)}`
          }
          if (!zU || zU.byteLength < 4) throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
          return `avc${UU.avcType}.${(0,yU.S)(zU.subarray(1,4))}`
        }
        if ("hevc" === XU) {
          let UU, XU, cU, QU, AU, oU;
          if (FU) UU = FU.generalProfileSpace, XU = FU.generalProfileIdc, cU = (0, yU.Kc)(FU.generalProfileCompatibilityFlags), QU = FU.generalTierFlag, AU = FU.generalLevelIdc, oU = [...FU.generalConstraintIndicatorFlags];
          else {
            if (!zU || zU.byteLength < 23) throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
            const FU = (0, yU.ld)(zU),
              DU = FU.getUint8(1);
            UU = DU >> 6 & 3, XU = 31 & DU, cU = (0, yU.Kc)(FU.getUint32(2)), QU = DU >> 5 & 1, AU = FU.getUint8(12), oU = [];
            for (let UU = 0; UU < 6; UU++) oU.push(FU.getUint8(6 + UU))
          }
          let DU = "hev1.";
          for (DU += ["", "A", "B", "C"][UU] + XU, DU += ".", DU += cU.toString(16).toUpperCase(), DU += ".", DU += 0 === QU ? "L" : "H", DU += AU; oU.length > 0 && 0 === oU[oU.length - 1];) oU.pop();
          return oU.length > 0 && (DU += ".", DU += oU.map((UU => UU.toString(16).toUpperCase())).join(".")), DU
        }
        if ("vp8" === XU) return "vp8";
        if ("vp9" === XU) {
          if (!oU) {
            const XU = UU.width * UU.height;
            let zU = (0, yU.kc)(NU).level;
            for (const UU of NU)
              if (XU <= UU.maxPictureSize) {
                zU = UU.level;
                break
              } return `vp09.00.${zU.toString().padStart(2,"0")}.08`
          }
          let XU = `vp09.${oU.profile.toString().padStart(2,"0")}.${oU.level.toString().padStart(2,"0")}.${oU.bitDepth.toString().padStart(2,"0")}.${oU.chromaSubsampling.toString().padStart(2,"0")}`;
          return XU += `.${oU.colourPrimaries.toString().padStart(2,"0")}.${oU.transferCharacteristics.toString().padStart(2,"0")}.${oU.matrixCoefficients.toString().padStart(2,"0")}.${oU.videoFullRangeFlag.toString().padStart(2,"0")}`, XU.endsWith(pU) && (XU = XU.slice(0, -15)), XU
        }
        if ("av1" === XU) {
          if (!DU) {
            const XU = UU.width * UU.height;
            let zU = (0, yU.kc)(NU).level;
            for (const UU of NU)
              if (XU <= UU.maxPictureSize) {
                zU = UU.level;
                break
              } return `av01.0.${zU.toString().padStart(2,"0")}M.08`
          }
          const XU = DU.profile,
            zU = DU.level.toString().padStart(2, "0"),
            AU = DU.tier ? "H" : "M",
            FU = DU.bitDepth.toString().padStart(2, "0"),
            oU = DU.monochrome ? "1" : "0",
            EU = 100 * DU.chromaSubsamplingX + 10 * DU.chromaSubsamplingY + 1 * (DU.chromaSubsamplingX && DU.chromaSubsamplingY ? DU.chromaSamplePosition : 0);
          let YU, IU, pU, tU;
          (0, cU.m)(DU) ? (YU = DU.colourPrimaries, IU = DU.transferCharacteristics, pU = DU.matrixCoefficients, tU = DU.videoFullRangeFlag) : (YU = QU?.primaries ? yU.c[QU.primaries] : 1, IU = QU?.transfer ? yU.v[QU.transfer] : 1, pU = QU?.matrix ? yU.l[QU.matrix] : 1, tU = QU?.fullRange ? 1 : 0);
          let gU = `av01.${XU}.${zU}${AU}.${FU}`;
          return gU += `.${oU}.${EU.toString().padStart(3,"0")}`, gU += `.${YU.toString().padStart(2,"0")}`, gU += `.${IU.toString().padStart(2,"0")}`, gU += `.${pU.toString().padStart(2,"0")}`, gU += `.${tU}`, gU.endsWith(aU) && (gU = gU.slice(0, -17)), gU
        }
        if ("prores" === XU) return EU ?? "apch";
        throw null !== XU && (0, yU.H)(XU), new TypeError(`Unhandled codec '${XU}'.`)
      },
      PU = (UU, XU, zU) => {
        if ("aac" === UU) return XU >= 2 && zU <= 24e3 ? "mp4a.40.29" : zU <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
        if ("mp3" === UU) return "mp3";
        if ("opus" === UU) return "opus";
        if ("vorbis" === UU) return "vorbis";
        if ("flac" === UU) return "flac";
        if ("ac3" === UU) return "ac-3";
        if ("eac3" === UU) return "ec-3";
        if ("dts" === UU) return "dtsc";
        if (AU.includes(UU)) return UU;
        throw new TypeError(`Unhandled codec '${UU}'.`)
      },
      WU = 48e3,
      dU = /^pcm-([usf])(\d+)(be)?$/,
      LU = UU => {
        if ((0, yU.J)(AU.includes(UU)), "ulaw" === UU) return {
          dataType: "ulaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 255
        };
        if ("alaw" === UU) return {
          dataType: "alaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 213
        };
        const XU = dU.exec(UU);
        let zU;
        (0, yU.J)(XU), zU = "u" === XU[1] ? "unsigned" : "s" === XU[1] ? "signed" : "float";
        return {
          dataType: zU,
          sampleSize: Number(XU[2]) / 8,
          littleEndian: "be" !== XU[3],
          silentValue: "pcm-u8" === UU ? 128 : 0
        }
      },
      eU = UU => UU.startsWith("avc1") || UU.startsWith("avc3") ? "avc" : UU.startsWith("hev1") || UU.startsWith("hvc1") ? "hevc" : "vp8" === UU ? "vp8" : UU.startsWith("vp09") ? "vp9" : UU.startsWith("av01") ? "av1" : tU.includes(UU) ? "prores" : "mp3" === UU || "mp4a.69" === UU || "mp4a.6B" === UU || "mp4a.6b" === UU || "mp4a.40.34" === UU ? "mp3" : UU.startsWith("mp4a.40.") || "mp4a.67" === UU ? "aac" : "opus" === UU || "Opus" === UU ? "opus" : "vorbis" === UU ? "vorbis" : "flac" === UU ? "flac" : "ac-3" === UU || "ac3" === UU ? "ac3" : "ec-3" === UU || "eac3" === UU ? "eac3" : gU.includes(UU) ? "dts" : "ulaw" === UU ? "ulaw" : "alaw" === UU ? "alaw" : dU.test(UU) ? UU : "webvtt" === UU ? "webvtt" : null,
      CU = UU => "avc" === UU ? {
        avc: {
          format: "avc"
        }
      } : "hevc" === UU ? {
        hevc: {
          format: "hevc"
        }
      } : {},
      wU = UU => "aac" === UU ? {
        aac: {
          format: "aac"
        }
      } : "opus" === UU ? {
        opus: {
          format: "opus"
        }
      } : {},
      qU = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...tU],
      OU = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/,
      SU = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,
      rU = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,
      uU = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,
      fU = (UU, XU) => {
        if (!UU) throw new TypeError("Video chunk metadata must be provided.");
        if ("object" !== typeof UU) throw new TypeError("Video chunk metadata must be an object.");
        if (!UU.decoderConfig) throw new TypeError("Video chunk metadata must include a decoder configuration.");
        if ("object" !== typeof UU.decoderConfig) throw new TypeError("Video chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof UU.decoderConfig.codec) throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
        if (!qU.some((XU => UU.decoderConfig.codec.startsWith(XU)))) throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(UU.decoderConfig.codedWidth) || UU.decoderConfig.codedWidth <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
        if (!Number.isInteger(UU.decoderConfig.codedHeight) || UU.decoderConfig.codedHeight <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
        if (void 0 !== UU.decoderConfig.displayAspectWidth && (!Number.isInteger(UU.decoderConfig.displayAspectWidth) || UU.decoderConfig.displayAspectWidth <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
        if (void 0 !== UU.decoderConfig.displayAspectHeight && (!Number.isInteger(UU.decoderConfig.displayAspectHeight) || UU.decoderConfig.displayAspectHeight <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
        if (void 0 !== UU.decoderConfig.displayAspectWidth !== (void 0 !== UU.decoderConfig.displayAspectHeight)) throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
        if (void 0 !== UU.decoderConfig.description && !(0, yU.Db)(UU.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (void 0 !== UU.decoderConfig.colorSpace) {
          const {
            colorSpace: XU
          } = UU.decoderConfig;
          if ("object" !== typeof XU) throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
          const zU = Object.keys(yU.c);
          if (null != XU.primaries && !zU.includes(XU.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${zU.join(", ")}.`);
          const cU = Object.keys(yU.v);
          if (null != XU.transfer && !cU.includes(XU.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${cU.join(", ")}.`);
          const QU = Object.keys(yU.l);
          if (null != XU.matrix && !QU.includes(XU.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${QU.join(", ")}.`);
          if (null != XU.fullRange && "boolean" !== typeof XU.fullRange) throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")
        }
        if (UU.decoderConfig.codec.startsWith("avc1") || UU.decoderConfig.codec.startsWith("avc3")) {
          if (!OU.test(UU.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")
        } else if (UU.decoderConfig.codec.startsWith("hev1") || UU.decoderConfig.codec.startsWith("hvc1")) {
          if (!SU.test(UU.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")
        } else if (UU.decoderConfig.codec.startsWith("vp8")) {
          if ("vp8" !== UU.decoderConfig.codec) throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')
        } else if (UU.decoderConfig.codec.startsWith("vp09")) {
          if (!rU.test(UU.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')
        } else if (UU.decoderConfig.codec.startsWith("av01")) {
          if (!uU.test(UU.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')
        } else if (tU.some((XU => UU.decoderConfig.codec.startsWith(XU))) && !tU.some((XU => UU.decoderConfig.codec === XU))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${tU.join(", ")}.`);
        if (null !== XU && eU(UU.decoderConfig.codec) !== XU) throw new TypeError(`Video chunk metadata decoder configuration codec string '${UU.decoderConfig.codec}' does not fit to the track codec '${XU}'.`)
      },
      iU = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3", "dts"],
      HU = (UU, XU) => {
        if (!UU) throw new TypeError("Audio chunk metadata must be provided.");
        if ("object" !== typeof UU) throw new TypeError("Audio chunk metadata must be an object.");
        if (!UU.decoderConfig) throw new TypeError("Audio chunk metadata must include a decoder configuration.");
        if ("object" !== typeof UU.decoderConfig) throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof UU.decoderConfig.codec) throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
        if (!iU.some((XU => UU.decoderConfig.codec.startsWith(XU)))) throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(UU.decoderConfig.sampleRate) || UU.decoderConfig.sampleRate <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
        if (!Number.isInteger(UU.decoderConfig.numberOfChannels) || UU.decoderConfig.numberOfChannels <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
        if (void 0 !== UU.decoderConfig.description && !(0, yU.Db)(UU.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (UU.decoderConfig.codec.startsWith("mp4a") && "mp4a.69" !== UU.decoderConfig.codec && "mp4a.6B" !== UU.decoderConfig.codec && "mp4a.6b" !== UU.decoderConfig.codec) {
          if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(UU.decoderConfig.codec)) throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")
        } else if (UU.decoderConfig.codec.startsWith("mp3") || UU.decoderConfig.codec.startsWith("mp4a")) {
          if ("mp3" !== UU.decoderConfig.codec && "mp4a.69" !== UU.decoderConfig.codec && "mp4a.6B" !== UU.decoderConfig.codec && "mp4a.6b" !== UU.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')
        } else if (UU.decoderConfig.codec.startsWith("opus")) {
          if ("opus" !== UU.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
          if (UU.decoderConfig.description && UU.decoderConfig.description.byteLength < 18) throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")
        } else if (UU.decoderConfig.codec.startsWith("vorbis")) {
          if ("vorbis" !== UU.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
          if (!UU.decoderConfig.description) throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")
        } else if (UU.decoderConfig.codec.startsWith("flac")) {
          if ("flac" !== UU.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
          const XU = 42;
          if (!UU.decoderConfig.description || UU.decoderConfig.description.byteLength < XU) throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")
        } else if (UU.decoderConfig.codec.startsWith("ac-3") || UU.decoderConfig.codec.startsWith("ac3")) {
          if ("ac-3" !== UU.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')
        } else if (UU.decoderConfig.codec.startsWith("ec-3") || UU.decoderConfig.codec.startsWith("eac3")) {
          if ("ec-3" !== UU.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')
        } else if (UU.decoderConfig.codec.startsWith("dts")) {
          if (!gU.includes(UU.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${gU.join(", ")}.`)
        } else if ((UU.decoderConfig.codec.startsWith("pcm") || UU.decoderConfig.codec.startsWith("ulaw") || UU.decoderConfig.codec.startsWith("alaw")) && !AU.includes(UU.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${AU.join(", ")}).`);
        if (null !== XU && eU(UU.decoderConfig.codec) !== XU) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${UU.decoderConfig.codec}' does not fit to the track codec '${XU}'.`)
      },
      MU = UU => {
        if (!UU) throw new TypeError("Subtitle metadata must be provided.");
        if ("object" !== typeof UU) throw new TypeError("Subtitle metadata must be an object.");
        if (!UU.config) throw new TypeError("Subtitle metadata must include a config object.");
        if ("object" !== typeof UU.config) throw new TypeError("Subtitle metadata config must be an object.");
        if ("string" !== typeof UU.config.description) throw new TypeError("Subtitle metadata config description must be a string.")
      }
  },
  40758: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => NU,
      f: () => YU,
      g: () => gU,
      h: () => oU,
      j: () => kU,
      k: () => DU,
      m: () => AU
    });
    var cU = zU(40723),
      yU = zU(40687),
      QU = zU(40764);
    new Map, new Map;
    const AU = UU => {
        if (!UU || "object" !== typeof UU) throw new TypeError("Encoding config must be an object.");
        if (!cU.w.includes(UU.codec)) throw new TypeError(`Invalid video codec '${UU.codec}'. Must be one of: ${cU.w.join(", ")}.`);
        const XU = UU.bitrate;
        if (void 0 === UU.quality && void 0 === XU) throw new TypeError("config.quality must be provided.");
        if (void 0 !== UU.quality && void 0 !== XU) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== UU.quality && !(UU.quality instanceof NU)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== XU && !(XU instanceof NU) && (!Number.isInteger(XU) || XU <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== UU.keyFrameInterval && (!Number.isFinite(UU.keyFrameInterval) || UU.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
        if (void 0 !== UU.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(UU.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
        if (void 0 !== UU.transform) {
          if ("object" !== typeof UU.transform || !UU.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== UU.transform.width && (!Number.isInteger(UU.transform.width) || UU.transform.width <= 0)) throw new TypeError("config.transform.width, when provided, must be a positive integer.");
          if (void 0 !== UU.transform.height && (!Number.isInteger(UU.transform.height) || UU.transform.height <= 0)) throw new TypeError("config.transform.height, when provided, must be a positive integer.");
          if (void 0 !== UU.transform.fit && !["fill", "contain", "cover"].includes(UU.transform.fit)) throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');
          if (void 0 !== UU.transform.width && void 0 !== UU.transform.height && void 0 === UU.transform.fit && !["fill", "contain", "cover"].includes(UU.sizeChangeBehavior)) throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
          if (void 0 !== UU.transform.fit && ["fill", "contain", "cover"].includes(UU.sizeChangeBehavior) && UU.transform.fit !== UU.sizeChangeBehavior) throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
          if (void 0 !== UU.transform.rotate && ![0, 90, 180, 270].includes(UU.transform.rotate)) throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
          if (void 0 !== UU.transform.flip && "boolean" !== typeof UU.transform.flip) throw new TypeError("config.transform.flip, when provided, must be a boolean.");
          if (void 0 !== UU.transform.crop && (0, QU.k)(UU.transform.crop, "config.transform."), void 0 !== UU.transform.process && "function" !== typeof UU.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
          if (void 0 !== UU.transform.frameRate && (!Number.isFinite(UU.transform.frameRate) || UU.transform.frameRate <= 0)) throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
          if (void 0 !== UU.transform.force && "boolean" !== typeof UU.transform.force) throw new TypeError("config.transform.force, when provided, must be a boolean.")
        }
        if (void 0 !== UU.onEncodedPacket && "function" !== typeof UU.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== UU.onEncoderConfig && "function" !== typeof UU.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== UU.onEncodedSample && "function" !== typeof UU.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        FU(UU.codec, UU)
      },
      FU = (UU, XU) => {
        if (!XU || "object" !== typeof XU) throw new TypeError("Encoding options must be an object.");
        if (void 0 !== XU.alpha && !["discard", "keep"].includes(XU.alpha)) throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
        const zU = XU.bitrateMode;
        if (void 0 !== zU && !["constant", "variable"].includes(zU)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== XU.latencyMode && !["quality", "realtime"].includes(XU.latencyMode)) throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
        if (void 0 !== XU.fullCodecString && "string" !== typeof XU.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== XU.fullCodecString && (0, cU.N)(XU.fullCodecString) !== UU) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${UU}).`);
        if (void 0 !== XU.hardwareAcceleration && !["no-preference", "prefer-hardware", "prefer-software"].includes(XU.hardwareAcceleration)) throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
        if (void 0 !== XU.scalabilityMode && "string" !== typeof XU.scalabilityMode) throw new TypeError("scalabilityMode, when provided, must be a string.");
        if (void 0 !== XU.contentHint && "string" !== typeof XU.contentHint) throw new TypeError("contentHint, when provided, must be a string.")
      },
      oU = UU => {
        const XU = UU.bitrateMode,
          zU = UU.quality._toVideoRateControl(UU.codec, UU.width, UU.height, XU),
          QU = (XU, zU, yU) => ({
            codec: UU.fullCodecString ?? (0, cU.D)(UU.codec, UU.width, UU.height, yU, "keep" === UU.alpha),
            width: UU.width,
            height: UU.height,
            displayWidth: UU.squarePixelWidth,
            displayHeight: UU.squarePixelHeight,
            bitrate: XU,
            bitrateMode: zU,
            alpha: UU.alpha ?? "discard",
            framerate: UU.framerate,
            latencyMode: UU.latencyMode,
            hardwareAcceleration: UU.hardwareAcceleration,
            scalabilityMode: UU.scalabilityMode,
            contentHint: UU.contentHint,
            ...(0, cU.M)(UU.codec)
          }),
          AU = [];
        return null !== zU.quantizer && AU.push({
          config: QU(void 0, "quantizer", zU.bitrate),
          quantizer: zU.quantizer
        }), "quantizer" !== zU.bitrateMode && AU.push({
          config: QU(zU.bitrate, zU.bitrateMode, zU.bitrate),
          quantizer: null
        }), (0, yU.J)(AU.length > 0), AU
      },
      DU = UU => {
        if (!UU || "object" !== typeof UU) throw new TypeError("Encoding config must be an object.");
        if (!cU.e.includes(UU.codec)) throw new TypeError(`Invalid audio codec '${UU.codec}'. Must be one of: ${cU.e.join(", ")}.`);
        const XU = UU.bitrate;
        if (void 0 === UU.quality && void 0 === XU && !cU.r.includes(UU.codec) && "flac" !== UU.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
        if (void 0 !== UU.quality && void 0 !== XU) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== UU.quality && !(UU.quality instanceof NU)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== XU && !(XU instanceof NU) && (!Number.isInteger(XU) || XU <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== UU.transform) {
          if ("object" !== typeof UU.transform || !UU.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== UU.transform.numberOfChannels && (!Number.isInteger(UU.transform.numberOfChannels) || UU.transform.numberOfChannels <= 0)) throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
          if (void 0 !== UU.transform.sampleRate && (!Number.isInteger(UU.transform.sampleRate) || UU.transform.sampleRate <= 0)) throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
          if (void 0 !== UU.transform.sampleFormat && !["u8", "s16", "s32", "f32"].includes(UU.transform.sampleFormat)) throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
          if (void 0 !== UU.transform.process && "function" !== typeof UU.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.")
        }
        if (void 0 !== UU.onEncodedPacket && "function" !== typeof UU.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== UU.onEncoderConfig && "function" !== typeof UU.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== UU.onEncodedSample && "function" !== typeof UU.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        EU(UU.codec, UU)
      },
      EU = (UU, XU) => {
        if (!XU || "object" !== typeof XU) throw new TypeError("Encoding options must be an object.");
        const zU = XU.bitrateMode;
        if (void 0 !== zU && !["constant", "variable"].includes(zU)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== XU.fullCodecString && "string" !== typeof XU.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== XU.fullCodecString && (0, cU.N)(XU.fullCodecString) !== UU) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${UU}).`)
      },
      YU = UU => {
        const XU = UU.bitrateMode;
        return {
          codec: UU.fullCodecString ?? (0, cU.A)(UU.codec, UU.numberOfChannels, UU.sampleRate),
          numberOfChannels: UU.numberOfChannels,
          sampleRate: UU.sampleRate,
          bitrate: UU.quality?._toAudioBitrate(UU.codec),
          bitrateMode: UU.quality?._bitrateMode ?? XU,
          ...(0, cU.L)(UU.codec)
        }
      };
    class NU {
      constructor(UU) {
        if ("number" !== typeof UU && "string" !== typeof UU || (UU = {
            quality: UU
          }), !UU || "object" !== typeof UU) throw new TypeError("options must be an object.");
        if (void 0 !== UU.bitrateMode && !["constant", "variable"].includes(UU.bitrateMode)) throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
        if ("quality" in UU) {
          if ("string" === typeof UU.quality ? !(UU.quality in IU) : "number" !== typeof UU.quality || Number.isNaN(UU.quality)) throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
          if (void 0 !== UU.preferBitrate && "boolean" !== typeof UU.preferBitrate) throw new TypeError("options.preferBitrate, when provided, must be a boolean.");
          if ("bitrate" in UU || "quantizer" in UU) throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
          this._quality = "string" === typeof UU.quality ? IU[UU.quality] : UU.quality, this._preferBitrate = UU.preferBitrate ?? !1, this._bitrate = void 0, this._quantizer = void 0
        } else {
          if (void 0 !== UU.bitrate && (!Number.isInteger(UU.bitrate) || UU.bitrate <= 0)) throw new TypeError("options.bitrate, when provided, must be a positive integer.");
          if (void 0 !== UU.quantizer && (!Number.isInteger(UU.quantizer) || UU.quantizer < 0)) throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");
          if (void 0 === UU.bitrate && void 0 === UU.quantizer) throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");
          if ("preferBitrate" in UU) throw new TypeError("options.preferBitrate can only be combined with options.quality.");
          this._quality = void 0, this._preferBitrate = !1, this._bitrate = UU.bitrate, this._quantizer = UU.quantizer
        }
        this._bitrateMode = UU.bitrateMode
      }
      _toVideoRateControl(UU, XU, zU, cU) {
        const QU = pU[UU];
        let AU, FU = null,
          oU = this._bitrateMode ?? cU ?? "variable";
        if (void 0 !== this._quantizer) {
          if (QU)
            if (this._quantizer < QU.min || this._quantizer > QU.max) {
              if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${UU}'; must be between ${QU.min} and ${QU.max}.`)
            } else FU = this._quantizer, void 0 === this._bitrate && (oU = "quantizer");
          else if (void 0 === this._bitrate) throw new Error(`Codec '${UU}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
        } else void 0 === this._bitrate && QU && !this._preferBitrate && ((0, yU.J)(void 0 !== this._quality), FU = (0, yU.Y)(Math.round((0, yU.nc)(QU.worst, QU.best, this._quality)), QU.min, QU.max));
        if (void 0 !== this._bitrate) AU = this._bitrate;
        else {
          let cU = this._quality;
          void 0 === cU && ((0, yU.J)(null !== FU && QU), cU = (0, yU.Y)((FU - QU.worst) / (QU.best - QU.worst), 0, 1)), AU = tU(UU, XU, zU, aU(cU))
        }
        return {
          quantizer: FU,
          bitrate: AU,
          bitrateMode: oU
        }
      }
      _toVideoBitrate(UU, XU, zU) {
        return void 0 !== this._bitrate ? this._bitrate : ((0, yU.J)(void 0 !== this._quality), tU(UU, XU, zU, aU(this._quality)))
      }
      _toAudioBitrate(UU) {
        if (cU.r.includes(UU) || "flac" === UU) return;
        if (void 0 !== this._bitrate) return this._bitrate;
        if (void 0 === this._quality) throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
        const XU = aU(this._quality),
          zU = {
            aac: 128e3,
            opus: 64e3,
            mp3: 16e4,
            vorbis: 64e3,
            ac3: 384e3,
            eac3: 192e3,
            dts: 768e3
          } [UU];
        if (!zU) throw new Error(`Unhandled codec: ${UU}`);
        let yU = zU * XU;
        if ("aac" === UU) {
          yU = [96e3, 128e3, 16e4, 192e3].reduce(((UU, XU) => Math.abs(XU - yU) < Math.abs(UU - yU) ? XU : UU))
        } else if ("opus" === UU || "vorbis" === UU) yU = Math.max(6e3, yU);
        else if ("mp3" === UU) {
          yU = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((UU, XU) => Math.abs(XU - yU) < Math.abs(UU - yU) ? XU : UU))
        }
        return 1e3 * Math.round(yU / 1e3)
      }
    }
    const IU = {
        "very-low": 0,
        low: .25,
        medium: .5,
        high: .75,
        "very-high": 1
      },
      pU = {
        avc: {
          min: 0,
          max: 51,
          worst: 41,
          best: 16
        },
        hevc: {
          min: 0,
          max: 51,
          worst: 41,
          best: 16
        },
        vp9: {
          min: 0,
          max: 63,
          worst: 52,
          best: 20
        },
        av1: {
          min: 0,
          max: 255,
          worst: 208,
          best: 80
        }
      },
      aU = UU => .3 * Math.exp(2.5538 * UU),
      tU = (UU, XU, zU, cU) => {
        const yU = XU * zU,
          QU = 3e6,
          AU = QU * Math.pow(yU / 2073600, .95) * {
            avc: 1,
            hevc: .6,
            vp9: .6,
            av1: .4,
            vp8: 1.2,
            prores: 73.33333333333333
          } [UU] * cU;
        return 1e3 * Math.ceil(AU / 1e3)
      },
      gU = (UU, XU) => "avc" === UU ? {
        avc: {
          quantizer: XU
        }
      } : "hevc" === UU ? {
        hevc: {
          quantizer: XU
        }
      } : "vp9" === UU ? {
        vp9: {
          quantizer: XU
        }
      } : "av1" === UU ? {
        av1: {
          quantizer: XU
        }
      } : void(0, yU.J)(!1),
      kU = (UU, XU) => void 0 !== UU ? UU : void 0 !== XU ? XU instanceof NU ? XU : new NU({
        bitrate: XU
      }) : void 0
  },
  40727: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU, yU = zU(40687);
    ! function(UU) {
      UU[UU.Silent = 0] = "Silent", UU[UU.Errors = 1] = "Errors", UU[UU.Warnings = 2] = "Warnings", UU[UU.Info = 3] = "Info"
    }(cU || (cU = {}));
    class QU {
      constructor() {}
      static get level() {
        return QU._level
      }
      static set level(UU) {
        if (UU !== cU.Silent && UU !== cU.Errors && UU !== cU.Warnings && UU !== cU.Info) throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
        QU._level = UU
      }
      static get _emitter() {
        return QU._emitterInstance ??= new yU.f
      }
      static on(UU, XU, zU) {
        return QU._emitter.on(UU, XU, zU)
      }
      static _error() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        QU._emitter._emit("error", XU), QU._level >= cU.Errors && console.error(...XU)
      }
      static _warn() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        QU._emitter._emit("warn", XU), QU._level >= cU.Warnings && console.warn(...XU)
      }
      static _info() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        QU._emitter._emit("info", XU), QU._level >= cU.Info && console.info(...XU)
      }
    }
    QU._level = cU.Info, QU._emitterInstance = null
  },
  40771: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU,
      d: () => EU,
      g: () => oU,
      h: () => YU,
      j: () => AU
    });
    zU(40705);
    var cU = zU(40723);
    zU(40687), zU(40738);
    var yU = zU(40754);
    zU(40764), zU(40758);
    zU(40725), zU(40727), "function" === typeof SuppressedError && SuppressedError;
    class QU {
      constructor() {
        this._connectedTrack = null, this._closingPromise = null, this._closed = !1, this._nominalBitrate = null
      }
      _ensureValidAdd() {
        if (!this._connectedTrack) throw new Error("Source is not connected to an output track.");
        if ("canceled" === this._connectedTrack.output.state) throw new Error("Output has been canceled.");
        if ("finalizing" === this._connectedTrack.output.state || "finalized" === this._connectedTrack.output.state) throw new Error("Output has been finalized.");
        if ("pending" === this._connectedTrack.output.state) throw new Error("Output has not started.");
        if (this._closed) throw new Error("Source is closed.")
      }
      async _start() {}
      async _flushAndClose(UU) {}
      close() {
        if (this._closingPromise) return;
        const UU = this._connectedTrack;
        if (!UU) throw new Error("Cannot call close without connecting the source to an output track.");
        if ("pending" === UU.output.state) throw new Error("Cannot call close before output has been started.");
        this._closingPromise = (async () => {
          await this._flushAndClose(!1), this._closed = !0, "finalizing" !== UU.output.state && "finalized" !== UU.output.state && UU.output._muxer.onTrackClose(UU)
        })()
      }
      async _flushOrWaitForOngoingClose(UU) {
        return this._closingPromise ??= (async () => {
          await this._flushAndClose(UU), this._closed = !0
        })()
      }
    }
    class AU extends QU {
      constructor(UU) {
        if (super(), !cU.w.includes(UU)) throw new TypeError(`Invalid video codec '${UU}'. Must be one of: ${cU.w.join(", ")}.`);
        this._codec = UU
      }
    }
    const FU = (UU, XU) => {
      if (UU.metadata.hasOnlyKeyPackets && "key" !== XU.type) throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")
    };
    class oU extends AU {
      constructor(UU) {
        super(UU)
      }
      add(UU, XU) {
        if (!(UU instanceof yU.e)) throw new TypeError("packet must be an EncodedPacket.");
        if (UU.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== XU && (!XU || "object" !== typeof XU)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), FU(this._connectedTrack, UU), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, UU, XU)
      }
    }
    class DU extends QU {
      constructor(UU) {
        if (super(), !cU.e.includes(UU)) throw new TypeError(`Invalid audio codec '${UU}'. Must be one of: ${cU.e.join(", ")}.`);
        this._codec = UU
      }
    }
    class EU extends DU {
      constructor(UU) {
        super(UU)
      }
      add(UU, XU) {
        if (!(UU instanceof yU.e)) throw new TypeError("packet must be an EncodedPacket.");
        if (UU.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== XU && (!XU || "object" !== typeof XU)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, UU, XU)
      }
    }
    class YU extends QU {
      constructor(UU) {
        if (super(), !cU.u.includes(UU)) throw new TypeError(`Invalid subtitle codec '${UU}'. Must be one of: ${cU.u.join(", ")}.`);
        this._codec = UU
      }
    }
  },
  40689: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      f: () => oU,
      j: () => yU,
      l: () => FU,
      p: () => AU,
      r: () => DU
    });
    var cU = zU(40687);
    class yU {
      constructor(UU, XU) {
        if (this.data = UU, this.mimeType = XU, !(UU instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("string" !== typeof XU) throw new TypeError("mimeType must be a string.")
      }
    }
    class QU {
      constructor(UU, XU, zU, cU) {
        if (this.data = UU, this.mimeType = XU, this.name = zU, this.description = cU, !(UU instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if (void 0 !== XU && "string" !== typeof XU) throw new TypeError("mimeType, when provided, must be a string.");
        if (void 0 !== zU && "string" !== typeof zU) throw new TypeError("name, when provided, must be a string.");
        if (void 0 !== cU && "string" !== typeof cU) throw new TypeError("description, when provided, must be a string.")
      }
    }
    const AU = UU => {
        if (!UU || "object" !== typeof UU) throw new TypeError("tags must be an object.");
        if (void 0 !== UU.title && "string" !== typeof UU.title) throw new TypeError("tags.title, when provided, must be a string.");
        if (void 0 !== UU.description && "string" !== typeof UU.description) throw new TypeError("tags.description, when provided, must be a string.");
        if (void 0 !== UU.artist && "string" !== typeof UU.artist) throw new TypeError("tags.artist, when provided, must be a string.");
        if (void 0 !== UU.album && "string" !== typeof UU.album) throw new TypeError("tags.album, when provided, must be a string.");
        if (void 0 !== UU.albumArtist && "string" !== typeof UU.albumArtist) throw new TypeError("tags.albumArtist, when provided, must be a string.");
        if (void 0 !== UU.trackNumber && (!Number.isInteger(UU.trackNumber) || UU.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
        if (void 0 !== UU.tracksTotal && (!Number.isInteger(UU.tracksTotal) || UU.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
        if (void 0 !== UU.discNumber && (!Number.isInteger(UU.discNumber) || UU.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
        if (void 0 !== UU.discsTotal && (!Number.isInteger(UU.discsTotal) || UU.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
        if (void 0 !== UU.genre && "string" !== typeof UU.genre) throw new TypeError("tags.genre, when provided, must be a string.");
        if (void 0 !== UU.date && (!(UU.date instanceof Date) || Number.isNaN(UU.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
        if (void 0 !== UU.beatsPerMinute && (!Number.isInteger(UU.beatsPerMinute) || UU.beatsPerMinute <= 0)) throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");
        if (void 0 !== UU.lyrics && "string" !== typeof UU.lyrics) throw new TypeError("tags.lyrics, when provided, must be a string.");
        if (void 0 !== UU.images) {
          if (!Array.isArray(UU.images)) throw new TypeError("tags.images, when provided, must be an array.");
          for (const XU of UU.images) {
            if (!XU || "object" !== typeof XU) throw new TypeError("Each image in tags.images must be an object.");
            if (!(XU.data instanceof Uint8Array)) throw new TypeError("Each image.data must be a Uint8Array.");
            if ("string" !== typeof XU.mimeType) throw new TypeError("Each image.mimeType must be a string.");
            if (!["coverFront", "coverBack", "unknown"].includes(XU.kind)) throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")
          }
        }
        if (void 0 !== UU.comment && "string" !== typeof UU.comment) throw new TypeError("tags.comment, when provided, must be a string.");
        if (void 0 !== UU.raw) {
          if (!UU.raw || "object" !== typeof UU.raw) throw new TypeError("tags.raw, when provided, must be an object.");
          for (const XU of Object.values(UU.raw))
            if (null !== XU && "string" !== typeof XU && (!Array.isArray(XU) || !XU.every((UU => "string" === typeof UU))) && !(XU instanceof Uint8Array) && !(XU instanceof yU) && !(XU instanceof QU) && !(0, cU.Wb)(XU)) throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")
        }
      },
      FU = UU => void 0 === UU.title && void 0 === UU.description && void 0 === UU.artist && void 0 === UU.album && void 0 === UU.albumArtist && void 0 === UU.trackNumber && void 0 === UU.tracksTotal && void 0 === UU.discNumber && void 0 === UU.discsTotal && void 0 === UU.genre && void 0 === UU.beatsPerMinute && void 0 === UU.date && void 0 === UU.lyrics && (!UU.images || 0 === UU.images.length) && void 0 === UU.comment && (void 0 === UU.raw || 0 === Object.keys(UU.raw).length),
      oU = {
        default: !0,
        primary: !0,
        forced: !1,
        original: !1,
        commentary: !1,
        hearingImpaired: !1,
        visuallyImpaired: !1
      },
      DU = UU => {
        if (!UU || "object" !== typeof UU) throw new TypeError("disposition must be an object.");
        if (void 0 !== UU.default && "boolean" !== typeof UU.default) throw new TypeError("disposition.default must be a boolean.");
        if (void 0 !== UU.primary && "boolean" !== typeof UU.primary) throw new TypeError("disposition.primary must be a boolean.");
        if (void 0 !== UU.forced && "boolean" !== typeof UU.forced) throw new TypeError("disposition.forced must be a boolean.");
        if (void 0 !== UU.original && "boolean" !== typeof UU.original) throw new TypeError("disposition.original must be a boolean.");
        if (void 0 !== UU.commentary && "boolean" !== typeof UU.commentary) throw new TypeError("disposition.commentary must be a boolean.");
        if (void 0 !== UU.hearingImpaired && "boolean" !== typeof UU.hearingImpaired) throw new TypeError("disposition.hearingImpaired must be a boolean.");
        if (void 0 !== UU.visuallyImpaired && "boolean" !== typeof UU.visuallyImpaired) throw new TypeError("disposition.visuallyImpaired must be a boolean.")
      }
  },
  40687: (UU, XU, zU) => {
    function cU(UU) {
      if (!UU) throw new Error("Assertion failed.")
    }
    zU.d(XU, {
      $: () => HX,
      $b: () => gU,
      Ab: () => GX,
      B: () => LX,
      Bc: () => RX,
      Db: () => rU,
      Dc: () => XX,
      F: () => dX,
      Fb: () => NX,
      Gc: () => MU,
      H: () => VU,
      Hb: () => pX,
      Hc: () => GU,
      Ic: () => BU,
      J: () => cU,
      Kc: () => iU,
      L: () => HU,
      Lb: () => EX,
      Lc: () => YU,
      Nb: () => cX,
      Nc: () => TU,
      O: () => BX,
      Ob: () => CU,
      Oc: () => bU,
      Pb: () => kU,
      S: () => fU,
      Sc: () => IU,
      Tb: () => PX,
      Tc: () => iX,
      V: () => oU,
      Wb: () => sX,
      Wc: () => mU,
      Y: () => xU,
      Zb: () => tX,
      _c: () => lU,
      ac: () => oX,
      ad: () => nU,
      b: () => uU,
      c: () => wU,
      cd: () => eX,
      db: () => gX,
      dc: () => WX,
      e: () => AX,
      ed: () => LU,
      f: () => VX,
      gc: () => kX,
      hb: () => SU,
      hd: () => eU,
      i: () => FU,
      id: () => vX,
      kc: () => tU,
      l: () => OU,
      lb: () => aU,
      ld: () => PU,
      md: () => RU,
      nc: () => JU,
      o: () => QU,
      pb: () => QX,
      qb: () => DU,
      qd: () => ZX,
      r: () => yX,
      rb: () => vU,
      rc: () => IX,
      rd: () => CX,
      sb: () => hU,
      ud: () => MX,
      v: () => qU,
      vb: () => sU,
      vc: () => jU,
      vd: () => ZU,
      w: () => dU,
      wc: () => pU,
      y: () => KU,
      yb: () => UX,
      yc: () => AU
    });
    const yU = Math.PI / 180,
      QU = 180 / Math.PI,
      AU = UU => {
        const XU = (UU % 360 + 360) % 360;
        if (0 === XU || 90 === XU || 180 === XU || 270 === XU) return XU;
        throw new Error(`Invalid rotation ${UU}.`)
      },
      FU = [1, 0, 0, 0, 1, 0, 0, 0, 1],
      oU = (UU, XU, zU) => {
        const [cU, yU, , QU, AU] = UU, FU = Math.abs(cU) * XU + Math.abs(QU) * zU, oU = Math.abs(yU) * XU + Math.abs(AU) * zU;
        return pU(pU(NU(-XU / 2, -zU / 2), UU), NU(FU / 2, oU / 2))
      },
      DU = UU => {
        const [XU, zU] = UU, cU = Math.atan2(zU, EU(UU) ? -XU : XU);
        return AU(bU(cU * QU, 90))
      },
      EU = UU => {
        const [XU, zU, , cU, yU] = UU;
        return XU * yU - zU * cU < 0
      },
      YU = UU => {
        const XU = UU * yU,
          zU = Math.round(Math.cos(XU)),
          cU = Math.round(Math.sin(XU));
        return [zU, cU, 0, -cU, zU, 0, 0, 0, 1]
      },
      NU = (UU, XU) => [1, 0, 0, 0, 1, 0, UU, XU, 1],
      IU = (UU, XU) => [UU, 0, 0, 0, XU, 0, 0, 0, 1],
      pU = (UU, XU) => {
        const zU = new Array(9);
        for (let cU = 0; cU < 3; cU++)
          for (let yU = 0; yU < 3; yU++) zU[3 * cU + yU] = UU[3 * cU] * XU[yU] + UU[3 * cU + 1] * XU[3 + yU] + UU[3 * cU + 2] * XU[6 + yU];
        return zU
      },
      aU = (UU, XU, zU, cU) => ({
        rotation: AU(UU + (XU ? -zU : zU)),
        flip: XU !== cU
      }),
      tU = UU => UU && UU[UU.length - 1],
      gU = UU => UU >= 0 && UU < 2 ** 32,
      kU = UU => UU >= -(2 ** 31) && UU < 2 ** 31,
      GU = UU => {
        let XU = 0;
        for (; 0 === UU.readBits(1) && XU < 32;) XU++;
        if (XU >= 32) throw new Error("Invalid exponential-Golomb code.");
        return (1 << XU) - 1 + UU.readBits(XU)
      },
      BU = UU => {
        const XU = GU(UU);
        return 0 === (1 & XU) ? -(XU >> 1) : XU + 1 >> 1
      },
      ZU = (UU, XU, zU, cU) => {
        for (let yU = XU; yU < zU; yU++) {
          const XU = Math.floor(yU / 8);
          let QU = UU[XU];
          const AU = 7 - (7 & yU);
          QU &= ~(1 << AU), QU |= (cU & 1 << zU - yU - 1) >> zU - yU - 1 << AU, UU[XU] = QU
        }
      },
      RU = UU => UU.constructor === Uint8Array ? UU : ArrayBuffer.isView(UU) ? new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength) : new Uint8Array(UU),
      PU = UU => UU.constructor === DataView ? UU : ArrayBuffer.isView(UU) ? new DataView(UU.buffer, UU.byteOffset, UU.byteLength) : new DataView(UU),
      WU = "undefined" !== typeof globalThis.TextEncoder ? globalThis.TextEncoder : class {
        constructor() {
          this.encoding = "utf-8"
        }
        encode() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          const XU = new Uint8Array(3 * UU.length);
          let zU = 0;
          for (let cU = 0; cU < UU.length; cU++) {
            let yU = UU.charCodeAt(cU);
            if (yU < 128) XU[zU++] = yU;
            else if (yU < 2048) XU[zU++] = 192 | yU >> 6, XU[zU++] = 128 | 63 & yU;
            else if (yU < 55296 || yU > 57343) XU[zU++] = 224 | yU >> 12, XU[zU++] = 128 | yU >> 6 & 63, XU[zU++] = 128 | 63 & yU;
            else {
              const QU = cU + 1 < UU.length ? UU.charCodeAt(cU + 1) : 0;
              yU < 56320 && QU >= 56320 && QU <= 57343 ? (yU = 65536 + (yU - 55296 << 10) + (QU - 56320), cU++, XU[zU++] = 240 | yU >> 18, XU[zU++] = 128 | yU >> 12 & 63, XU[zU++] = 128 | yU >> 6 & 63, XU[zU++] = 128 | 63 & yU) : (XU[zU++] = 239, XU[zU++] = 191, XU[zU++] = 189)
            }
          }
          return XU.slice(0, zU)
        }
      },
      dU = "undefined" !== typeof globalThis.TextDecoder ? globalThis.TextDecoder : class {
        constructor() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "utf-8";
          const XU = UU.trim().toLowerCase();
          if ("utf-8" === XU || "utf8" === XU || "unicode-1-1-utf-8" === XU) this.encoding = "utf-8";
          else if ("utf-16le" === XU || "utf-16" === XU) this.encoding = "utf-16le";
          else {
            if ("utf-16be" !== XU) throw new RangeError(`The encoding label provided ('${UU}') is invalid.`);
            this.encoding = "utf-16be"
          }
        }
        decode(UU) {
          const XU = UU ? RU(UU) : new Uint8Array(0),
            zU = [];
          if ("utf-8" === this.encoding) {
            let UU = XU.length >= 3 && 239 === XU[0] && 187 === XU[1] && 191 === XU[2] ? 3 : 0;
            for (; UU < XU.length;) {
              const cU = XU[UU];
              if (cU < 128) {
                zU.push(cU), UU++;
                continue
              }
              let yU, QU;
              if (cU >= 194 && cU < 224) yU = 1, QU = 31 & cU;
              else if (cU >= 224 && cU < 240) yU = 2, QU = 15 & cU;
              else {
                if (!(cU >= 240 && cU < 245)) {
                  zU.push(65533), UU++;
                  continue
                }
                yU = 3, QU = 7 & cU
              }
              let AU = 224 === cU ? 160 : 240 === cU ? 144 : 128,
                FU = 237 === cU ? 159 : 244 === cU ? 143 : 191,
                oU = 1;
              for (; oU <= yU; oU++) {
                const zU = UU + oU < XU.length ? XU[UU + oU] : 0;
                if (zU < AU || zU > FU) break;
                QU = QU << 6 | 63 & zU, AU = 128, FU = 191
              }
              UU += oU, oU <= yU ? zU.push(65533) : QU >= 65536 ? (QU -= 65536, zU.push(55296 | QU >> 10, 56320 | 1023 & QU)) : zU.push(QU)
            }
          } else {
            const UU = "utf-16le" === this.encoding,
              cU = UU ? 255 : 254,
              yU = UU ? 254 : 255;
            let QU = XU.length >= 2 && XU[0] === cU && XU[1] === yU ? 2 : 0;
            for (; QU + 1 < XU.length;) {
              const cU = UU ? XU[QU] | XU[QU + 1] << 8 : XU[QU] << 8 | XU[QU + 1];
              if (QU += 2, cU >= 55296 && cU <= 56319) {
                const yU = QU + 1 < XU.length ? UU ? XU[QU] | XU[QU + 1] << 8 : XU[QU] << 8 | XU[QU + 1] : -1;
                yU >= 56320 && yU <= 57343 ? (zU.push(cU, yU), QU += 2) : zU.push(65533)
              } else cU >= 56320 && cU <= 57343 ? zU.push(65533) : zU.push(cU)
            }
            QU < XU.length && zU.push(65533)
          }
          let cU = "";
          for (let yU = 0; yU < zU.length; yU += 8192) cU += String.fromCharCode(...zU.slice(yU, yU + 8192));
          return cU
        }
      },
      LU = new dU,
      eU = new WU,
      CU = UU => {
        for (let XU = 0; XU < UU.length; XU++) {
          if (UU.charCodeAt(XU) > 255) return !1
        }
        return !0
      },
      wU = {
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        bt2020: 9,
        smpte432: 12
      },
      qU = {
        bt709: 1,
        smpte170m: 6,
        linear: 8,
        "iec61966-2-1": 13,
        pq: 16,
        hlg: 18
      },
      OU = {
        rgb: 0,
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        "bt2020-ncl": 9
      },
      SU = UU => !UU || null == UU.primaries && null == UU.transfer && null == UU.matrix && null == UU.fullRange,
      rU = UU => UU instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && UU instanceof SharedArrayBuffer || ArrayBuffer.isView(UU);
    class uU {
      constructor() {
        this.currentPromise = Promise.resolve(), this.pending = 0
      }
      async acquire() {
        let UU;
        const XU = new Promise((XU => {
            let zU = !1;
            UU = () => {
              zU || (XU(), this.pending--, zU = !0)
            }
          })),
          zU = this.currentPromise;
        return this.currentPromise = XU, this.pending++, await zU, UU
      }
    }
    const fU = UU => [...UU].map((UU => UU.toString(16).padStart(2, "0"))).join(""),
      iU = UU => (UU = (UU = (UU = (UU = (UU = UU >> 1 & 1431655765 | (1431655765 & UU) << 1) >> 2 & 858993459 | (858993459 & UU) << 2) >> 4 & 252645135 | (252645135 & UU) << 4) >> 8 & 16711935 | (16711935 & UU) << 8) >> 16 & 65535 | (65535 & UU) << 16) >>> 0,
      HU = (UU, XU, zU) => {
        let cU = 0,
          yU = UU.length - 1,
          QU = -1;
        for (; cU <= yU;) {
          const AU = cU + (yU - cU + 1) / 2 | 0;
          zU(UU[AU]) <= XU ? (QU = AU, cU = AU + 1) : yU = AU - 1
        }
        return QU
      },
      MU = () => {
        let UU, XU;
        return {
          promise: new Promise(((zU, cU) => {
            UU = zU, XU = cU
          })),
          resolve: UU,
          reject: XU
        }
      },
      vU = (UU, XU) => {
        for (let zU = UU.length - 1; zU >= 0; zU--)
          if (XU(UU[zU])) return zU;
        return -1
      },
      VU = UU => {
        throw new Error(`Unexpected value: ${UU}`)
      },
      sU = (UU, XU, zU) => {
        const cU = UU.getUint8(XU),
          yU = UU.getUint8(XU + 1),
          QU = UU.getUint8(XU + 2);
        return zU ? cU | yU << 8 | QU << 16 : cU << 16 | yU << 8 | QU
      },
      nU = (UU, XU, zU, cU) => {
        zU >>>= 0, zU &= 16777215, cU ? (UU.setUint8(XU, 255 & zU), UU.setUint8(XU + 1, zU >>> 8 & 255), UU.setUint8(XU + 2, zU >>> 16 & 255)) : (UU.setUint8(XU, zU >>> 16 & 255), UU.setUint8(XU + 1, zU >>> 8 & 255), UU.setUint8(XU + 2, 255 & zU))
      },
      mU = (UU, XU, zU, cU) => {
        (zU = xU(zU, -8388608, 8388607)) < 0 && (zU = zU + 16777216 & 16777215), nU(UU, XU, zU, cU)
      },
      lU = (UU, XU, zU, cU) => {
        cU ? (UU.setUint32(XU + 0, zU, !0), UU.setInt32(XU + 4, Math.floor(zU / 2 ** 32), !0)) : (UU.setInt32(XU + 0, Math.floor(zU / 2 ** 32), !0), UU.setUint32(XU + 4, zU, !0))
      },
      xU = (UU, XU, zU) => Math.max(XU, Math.min(zU, UU)),
      JU = (UU, XU, zU) => UU + (XU - UU) * zU,
      jU = (UU, XU) => UU - Math.floor(UU / XU) * XU,
      KU = "und",
      bU = (UU, XU) => Math.round(UU / XU) * XU,
      TU = (UU, XU) => Math.round(UU * XU) / XU,
      hU = (UU, XU) => Math.floor(UU * XU) / XU,
      UX = UU => {
        let XU = 0;
        for (; UU;) XU++, UU >>= 1;
        return XU
      },
      XX = UU => {
        let XU = 0;
        for (; 0 !== UU;) UU &= UU - 1, XU++;
        return XU
      },
      zX = /^[a-z]{3}$/,
      cX = UU => zX.test(UU),
      yX = 1e6 * (1 + Number.EPSILON),
      QX = (UU, XU) => {
        const zU = UU < 0 ? -1 : 1;
        let cU = 0,
          yU = 1,
          QU = 1,
          AU = 0,
          FU = UU = Math.abs(UU);
        for (;;) {
          const UU = Math.floor(FU),
            oU = UU * QU + cU,
            DU = UU * AU + yU;
          if (DU > XU) return {
            num: zU * QU,
            den: AU
          };
          if (cU = QU, yU = AU, QU = oU, AU = DU, FU = 1 / (FU - UU), !isFinite(FU)) break
        }
        return {
          num: zU * QU,
          den: AU
        }
      };
    class AX {
      constructor() {
        this.currentPromise = Promise.resolve()
      }
      call(UU) {
        return this.currentPromise = this.currentPromise.then(UU)
      }
    }
    let FX = null;
    const oX = () => null !== FX ? FX : FX = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
    let DX = null;
    const EX = () => null !== DX ? DX : DX = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
    let YX = null;
    const NX = () => null !== YX ? YX : YX = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
    const IX = UU => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${UU} is not available in this environment.` : `${UU} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`,
      pX = UU => UU instanceof DOMException && "QuotaExceededError" === UU.name && /reclaimed/i.test(UU.message),
      aX = (async () => {})().constructor,
      tX = UU => UU instanceof aX || UU instanceof Promise || "function" === typeof UU?.then,
      gX = (UU, XU) => -1 !== UU ? UU : XU,
      kX = function*(UU) {
        for (const XU in UU) {
          const zU = UU[XU];
          void 0 !== zU && (yield {
            key: XU,
            value: zU
          })
        }
      },
      GX = UU => {
        switch (UU.toLowerCase()) {
          case "image/jpeg":
          case "image/jpg":
            return ".jpg";
          case "image/png":
            return ".png";
          case "image/gif":
            return ".gif";
          case "image/webp":
            return ".webp";
          case "image/bmp":
            return ".bmp";
          case "image/svg+xml":
            return ".svg";
          case "image/tiff":
            return ".tiff";
          case "image/avif":
            return ".avif";
          case "image/x-icon":
          case "image/vnd.microsoft.icon":
            return ".ico";
          default:
            return null
        }
      },
      BX = UU => {
        let XU = "";
        for (let zU = 0; zU < UU.length; zU++) XU += String.fromCharCode(UU[zU]);
        return btoa(XU)
      },
      ZX = (UU, XU) => {
        if (UU.length !== XU.length) return !1;
        for (let zU = 0; zU < UU.length; zU++)
          if (UU[zU] !== XU[zU]) return !1;
        return !0
      },
      RX = () => {
        Symbol.dispose ??= Symbol("Symbol.dispose")
      },
      PX = UU => "number" === typeof UU && !Number.isNaN(UU),
      WX = (UU, XU) => {
        if (XU.includes("://")) return XU;
        if (UU.includes("://")) {
          const XU = UU.indexOf("?"); - 1 !== XU && (UU = UU.slice(0, XU))
        }
        let zU;
        if (XU.startsWith("/")) {
          const cU = UU.indexOf("://");
          if (-1 === cU) zU = XU;
          else {
            const yU = UU.indexOf("/", cU + 3);
            zU = -1 === yU ? UU + XU : UU.slice(0, yU) + XU
          }
        } else {
          const cU = UU.lastIndexOf("/");
          zU = -1 === cU ? XU : UU.slice(0, cU + 1) + XU
        }
        let cU = "";
        const yU = zU.indexOf("://");
        if (-1 !== yU) {
          const UU = zU.indexOf("/", yU + 3); - 1 !== UU && (cU = zU.slice(0, UU), zU = zU.slice(UU))
        }
        const QU = zU.split("/"),
          AU = [];
        for (const FU of QU) ".." === FU ? AU.pop() : "." !== FU && AU.push(FU);
        return cU + AU.join("/")
      },
      dX = (UU, XU) => {
        let zU = -1,
          cU = 1 / 0;
        for (let yU = 0; yU < UU.length; yU++) {
          const QU = XU(UU[yU]);
          QU < cU && (cU = QU, zU = yU)
        }
        return zU
      },
      LX = (UU, XU) => {
        let zU = -1,
          cU = -1 / 0;
        for (let yU = 0; yU < UU.length; yU++) {
          const QU = XU(UU[yU]);
          QU > cU && (cU = QU, zU = yU)
        }
        return zU
      },
      eX = UU => {
        cU(Number.isInteger(UU.num)), cU(Number.isInteger(UU.den)), cU(0 !== UU.den);
        let XU = Math.abs(UU.num),
          zU = Math.abs(UU.den);
        for (; 0 !== zU;) {
          const UU = XU % zU;
          XU = zU, zU = UU
        }
        const yU = XU || 1;
        return {
          num: UU.num / yU,
          den: UU.den / yU
        }
      },
      CX = (UU, XU) => {
        if ("object" !== typeof UU || !UU) throw new TypeError(`${XU} must be an object.`);
        if (!Number.isInteger(UU.left) || UU.left < 0) throw new TypeError(`${XU}.left must be a non-negative integer.`);
        if (!Number.isInteger(UU.top) || UU.top < 0) throw new TypeError(`${XU}.top must be a non-negative integer.`);
        if (!Number.isInteger(UU.width) || UU.width < 0) throw new TypeError(`${XU}.width must be a non-negative integer.`);
        if (!Number.isInteger(UU.height) || UU.height < 0) throw new TypeError(`${XU}.height must be a non-negative integer.`)
      };
    let wX, qX = 1;
    const OX = new Map,
      SX = new Map,
      rX = () => "undefined" === typeof window,
      uX = () => {
        const UU = new Map,
          XU = new Map;
        self.onmessage = zU => {
          const cU = zU.data;
          switch (cU.type) {
            case "set-timeout": {
              const XU = setTimeout((() => {
                UU.delete(cU.timerId), self.postMessage({
                  type: "fire",
                  timerId: cU.timerId
                })
              }), cU.delay);
              UU.set(cU.timerId, XU)
            }
            break;
            case "set-interval": {
              const UU = setInterval((() => {
                self.postMessage({
                  type: "fire",
                  timerId: cU.timerId
                })
              }), cU.delay);
              XU.set(cU.timerId, UU)
            }
            break;
            case "clear-timeout": {
              const XU = UU.get(cU.timerId);
              void 0 !== XU && (clearTimeout(XU), UU.delete(cU.timerId))
            }
            break;
            case "clear-interval": {
              const UU = XU.get(cU.timerId);
              void 0 !== UU && (clearInterval(UU), XU.delete(cU.timerId))
            }
          }
        }
      },
      fX = () => {
        if (wX) return wX;
        const UU = `(${uX.toString()})();`,
          XU = URL.createObjectURL(new Blob([UU], {
            type: "text/javascript"
          }));
        return wX = new Worker(XU), URL.revokeObjectURL(XU), wX.onmessage = UU => {
          const XU = UU.data,
            zU = OX.get(XU.timerId);
          if (zU) return OX.delete(XU.timerId), void zU();
          const cU = SX.get(XU.timerId);
          cU && cU()
        }, wX
      },
      iX = (UU, XU) => {
        if (rX()) return {
          id: setInterval(UU, XU)
        };
        const zU = qX++;
        return SX.set(zU, (() => {
          UU()
        })), fX().postMessage({
          type: "set-interval",
          timerId: zU,
          delay: XU
        }), {
          id: zU
        }
      },
      HX = UU => {
        rX() ? clearInterval(UU.id) : (cU("number" === typeof UU.id), SX.delete(UU.id), fX().postMessage({
          type: "clear-interval",
          timerId: UU.id
        }))
      },
      MX = UU => new Promise((XU => setTimeout(XU, UU))),
      vX = UU => Array.isArray(UU) ? UU : [UU];
    class VX {
      constructor() {
        this._listeners = new Map
      }
      on(UU, XU, zU) {
        this._listeners.has(UU) || this._listeners.set(UU, new Set);
        const cU = {
          FY: XU,
          once: zU?.once ?? !1
        };
        return this._listeners.get(UU).add(cU), () => {
          this._listeners.get(UU)?.delete(cU)
        }
      }
      _emit() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        const [cU, yU] = XU, QU = this._listeners.get(cU);
        if (QU)
          for (const FU of QU) {
            try {
              FU.FY(yU)
            } catch (AU) {
              console.error(AU)
            }
            FU.once && QU.delete(FU)
          }
      }
    }
    const sX = UU => null !== UU && "object" === typeof UU && Object.getPrototypeOf(UU) === Object.prototype && Object.values(UU).every((UU => "string" === typeof UU))
  },
  40698: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => fz,
      f: () => iz,
      g: () => uz,
      i: () => Sz,
      l: () => Mz
    });
    var cU = zU(40705),
      yU = zU(40723);
    var QU;
    ! function(UU) {
      UU[UU.FrameCount = 1] = "FrameCount", UU[UU.FileSize = 2] = "FileSize", UU[UU.Toc = 4] = "Toc"
    }(QU || (QU = {}));
    var AU = zU(40727),
      FU = zU(40687);
    class oU {
      constructor(UU, XU, zU, cU, yU) {
        this.bytes = UU, this.view = XU, this.offset = zU, this.start = cU, this.end = yU, this.bufferPos = cU - zU
      }
      static tempFromBytes(UU) {
        return new oU(UU, (0, FU.ld)(UU), 0, 0, UU.length)
      }
      get length() {
        return this.end - this.start
      }
      get filePos() {
        return this.offset + this.bufferPos
      }
      set filePos(UU) {
        this.bufferPos = UU - this.offset
      }
      get remainingLength() {
        return Math.max(this.end - this.filePos, 0)
      }
      skip(UU) {
        this.bufferPos += UU
      }
      slice(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.end - UU;
        if (UU < this.start || UU + XU > this.end) throw new RangeError("Slicing outside of original slice.");
        return new oU(this.bytes, this.view, this.offset, UU, UU + XU)
      }
    }
    const DU = (UU, XU) => {
        if (UU.filePos < UU.start || UU.filePos + XU > UU.end) throw new RangeError(`Tried reading [${UU.filePos}, ${UU.filePos+XU}), but slice is [${UU.start}, ${UU.end}). This is likely an internal error, please report it alongside the file that caused it.`)
      },
      EU = (UU, XU) => {
        DU(UU, XU);
        const zU = UU.bytes.subarray(UU.bufferPos, UU.bufferPos + XU);
        return UU.bufferPos += XU, zU
      };
    var YU, NU;
    ! function(UU) {
      UU[UU.Unsynchronisation = 128] = "Unsynchronisation", UU[UU.ExtendedHeader = 64] = "ExtendedHeader", UU[UU.ExperimentalIndicator = 32] = "ExperimentalIndicator", UU[UU.Footer = 16] = "Footer"
    }(YU || (YU = {})),
    function(UU) {
      UU[UU.ISO_8859_1 = 0] = "ISO_8859_1", UU[UU.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", UU[UU.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", UU[UU.UTF_8 = 3] = "UTF_8"
    }(NU || (NU = {}));
    var IU = zU(40689);
    class pU {
      constructor(UU) {
        this.mutex = new FU.b, this.trackTimestampInfo = new WeakMap, this.output = UU
      }
      onTrackClose(UU) {}
      validateTimestamp(UU, XU, zU) {
        let cU = this.trackTimestampInfo.get(UU);
        if (cU) {
          if (zU && (cU.maxTimestampBeforeLastKeyPacket = cU.maxTimestamp), null !== cU.maxTimestampBeforeLastKeyPacket && XU < cU.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${XU}s, but largest timestamp is ${cU.maxTimestampBeforeLastKeyPacket}s.`);
          cU.maxTimestamp = Math.max(cU.maxTimestamp, XU)
        } else {
          if (!zU) throw new Error("First packet must be a key packet.");
          cU = {
            maxTimestamp: XU,
            maxTimestampBeforeLastKeyPacket: null
          }, this.trackTimestampInfo.set(UU, cU)
        }
      }
    }
    var aU = zU(40725),
      tU = zU(40714);
    var gU = zU(40738),
      kU = zU(40730);
    class GU {
      constructor(UU) {
        this.writer = UU, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap
      }
      writeU32(UU) {
        this.helperView.setUint32(0, UU, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeU64(UU) {
        this.helperView.setUint32(0, Math.floor(UU / 2 ** 32), !1), this.helperView.setUint32(4, UU, !1), this.writer.write(this.helper.subarray(0, 8))
      }
      writeAscii(UU) {
        for (let XU = 0; XU < UU.length; XU++) this.helperView.setUint8(XU % 8, UU.charCodeAt(XU)), XU % 8 === 7 && this.writer.write(this.helper);
        UU.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, UU.length % 8))
      }
      writeBox(UU) {
        if (this.offsets.set(UU, this.writer.getPos()), UU.contents && !UU.children) this.writeBoxHeader(UU, UU.size ?? UU.contents.byteLength + 8), this.writer.write(UU.contents);
        else {
          const XU = this.writer.getPos();
          if (this.writeBoxHeader(UU, 0), UU.contents && this.writer.write(UU.contents), UU.children)
            for (const yU of UU.children) yU && this.writeBox(yU);
          const zU = this.writer.getPos(),
            cU = UU.size ?? zU - XU;
          this.writer.seek(XU), this.writeBoxHeader(UU, cU), this.writer.seek(zU)
        }
      }
      writeBoxHeader(UU, XU) {
        this.writeU32(UU.largeSize ? 1 : XU), this.writeAscii(UU.type), UU.largeSize && this.writeU64(XU)
      }
      measureBoxHeader(UU) {
        return 8 + (UU.largeSize ? 8 : 0)
      }
      patchBox(UU) {
        const XU = this.offsets.get(UU);
        (0, FU.J)(void 0 !== XU);
        const zU = this.writer.getPos();
        this.writer.seek(XU), this.writeBox(UU), this.writer.seek(zU)
      }
      measureBox(UU) {
        if (UU.contents && !UU.children) {
          return this.measureBoxHeader(UU) + UU.contents.byteLength
        } {
          let XU = this.measureBoxHeader(UU);
          if (UU.contents && (XU += UU.contents.byteLength), UU.children)
            for (const zU of UU.children) zU && (XU += this.measureBox(zU));
          return XU
        }
      }
    }
    const BU = new Uint8Array(8),
      ZU = new DataView(BU.buffer),
      RU = UU => [(UU % 256 + 256) % 256],
      PU = UU => (ZU.setUint16(0, UU, !1), [BU[0], BU[1]]),
      WU = UU => (ZU.setInt16(0, UU, !1), [BU[0], BU[1]]),
      dU = UU => (ZU.setUint32(0, UU, !1), [BU[1], BU[2], BU[3]]),
      LU = UU => (ZU.setUint32(0, UU, !1), [BU[0], BU[1], BU[2], BU[3]]),
      eU = UU => (ZU.setInt32(0, UU, !1), [BU[0], BU[1], BU[2], BU[3]]),
      CU = UU => (ZU.setUint32(0, Math.floor(UU / 2 ** 32), !1), ZU.setUint32(4, UU, !1), [BU[0], BU[1], BU[2], BU[3], BU[4], BU[5], BU[6], BU[7]]),
      wU = UU => (ZU.setInt32(0, Math.floor(UU / 2 ** 32), !1), ZU.setUint32(4, UU, !1), [BU[0], BU[1], BU[2], BU[3], BU[4], BU[5], BU[6], BU[7]]),
      qU = UU => (ZU.setInt16(0, 256 * UU, !1), [BU[0], BU[1]]),
      OU = UU => (ZU.setInt32(0, 65536 * UU, !1), [BU[0], BU[1], BU[2], BU[3]]),
      SU = UU => (ZU.setInt32(0, 2 ** 30 * UU, !1), [BU[0], BU[1], BU[2], BU[3]]),
      rU = (UU, XU) => {
        const zU = [];
        let cU = UU;
        do {
          let UU = 127 & cU;
          cU >>= 7, zU.length > 0 && (UU |= 128), zU.push(UU), void 0 !== XU && XU--
        } while (cU > 0 || XU);
        return zU.reverse()
      },
      uU = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = Array(UU.length).fill(null).map(((XU, zU) => UU.charCodeAt(zU)));
        return XU && zU.push(0), zU
      },
      fU = UU => [OU(UU[0]), OU(UU[1]), SU(UU[2]), OU(UU[3]), OU(UU[4]), SU(UU[5]), OU(UU[6]), OU(UU[7]), SU(UU[8])],
      iU = (UU, XU, zU) => ({
        type: UU,
        contents: XU && new Uint8Array(XU.flat(10)),
        children: zU
      }),
      HU = (UU, XU, zU, cU, yU) => iU(UU, [RU(XU), dU(zU), cU ?? []], yU),
      MU = () => iU("styp", [uU("iso5"), LU(0), uU("iso5"), uU("iso6"), uU("mp41"), uU("cmfc"), uU("dash")]),
      vU = (UU, XU) => {
        const zU = Math.max(0, UU.minWrittenTimestamp);
        let cU = Math.max(0, UU.maxWrittenEndTimestamp - zU);
        return Number.isFinite(cU) || (cU = 0), HU("sidx", 1, 0, [LU(1), LU(Ez), CU(Nz(zU, Ez)), CU(0), PU(0), PU(1), LU(2147483647 & XU), LU(Nz(cU, Ez)), LU(0)])
      },
      VU = UU => ({
        type: "mdat",
        largeSize: UU
      }),
      sU = UU => iU("moov", void 0, [nU(UU.creationTime, UU.trackDatas), ...UU.trackDatas.map((XU => mU(XU, UU.creationTime))), UU.isFragmented ? qX(UU.trackDatas) : null, lX(UU)]),
      nU = (UU, XU) => {
        const zU = Math.max(0, ...XU.map((UU => Math.max(0, Nz(Iz(UU), Ez) + Nz(UU.startTimestampOffset ?? 0, Ez))))),
          cU = Math.max(0, ...XU.map((UU => UU.track.id))) + 1,
          yU = !(0, FU.$b)(UU) || !(0, FU.$b)(zU),
          QU = yU ? CU : LU;
        return HU("mvhd", +yU, 0, [QU(UU), QU(UU), LU(Ez), QU(zU), OU(1), qU(1), Array(10).fill(0), fU(FU.i), Array(24).fill(0), LU(cU)])
      },
      mU = (UU, XU) => {
        const zU = Yz(UU),
          cU = null !== UU.startTimestampOffset && 0 !== UU.startTimestampOffset;
        return iU("trak", void 0, [lU(UU, XU), cU ? xU(UU) : null, JU(UU, XU), void 0 !== zU.name ? iU("udta", void 0, [iU("name", [...FU.hd.encode(zU.name)])]) : null])
      },
      lU = (UU, XU) => {
        const zU = Math.max(0, Nz(Iz(UU), Ez) + Nz(UU.startTimestampOffset ?? 0, Ez)),
          cU = !(0, FU.$b)(XU) || !(0, FU.$b)(zU),
          yU = cU ? CU : LU;
        let QU;
        if ("video" === UU.type && UU.track.metadata.transformationMatrix) QU = UU.track.metadata.transformationMatrix;
        else if ("video" === UU.type) {
          const {
            rotation: XU,
            flip: zU
          } = UU.track.metadata, cU = (0, FU.wc)((0, FU.Lc)(XU ?? 0), (0, FU.Sc)(zU ? -1 : 1, 1));
          QU = (0, FU.V)(cU, UU.info.width, UU.info.height)
        } else QU = FU.i;
        let AU = 2;
        !1 !== UU.track.metadata.disposition?.default && (AU |= 1);
        const oU = "video" === UU.type ? 0 : "audio" === UU.type ? 1 : "subtitle" === UU.type ? 2 : (0, FU.H)(UU);
        return HU("tkhd", +cU, AU, [yU(XU), yU(XU), LU(UU.track.id), LU(0), yU(zU), Array(8).fill(0), PU(0), PU(oU), qU("audio" === UU.type ? 1 : 0), PU(0), fU(QU), OU("video" === UU.type ? UU.info.width : 0), OU("video" === UU.type ? UU.info.height : 0)])
      },
      xU = UU => {
        const XU = UU.startTimestampOffset;
        if ((0, FU.J)(null !== XU), XU > 0) {
          const zU = Nz(XU, Ez),
            cU = Nz(Iz(UU), Ez),
            yU = !(0, FU.$b)(zU) || !(0, FU.$b)(cU),
            QU = yU ? CU : LU,
            AU = yU ? wU : eU;
          return iU("edts", void 0, [HU("elst", yU ? 1 : 0, 0, [LU(2), QU(zU), AU(-1), OU(1), QU(cU), AU(0), OU(1)])])
        } {
          const zU = Nz(-XU, UU.timescale),
            cU = Math.max(0, Nz(Iz(UU), Ez) + Nz(XU, Ez)),
            yU = !(0, FU.Pb)(zU) || !(0, FU.$b)(cU),
            QU = yU ? CU : LU,
            AU = yU ? wU : eU;
          return iU("edts", void 0, [HU("elst", yU ? 1 : 0, 0, [LU(1), QU(cU), AU(zU), OU(1)])])
        }
      },
      JU = (UU, XU) => iU("mdia", void 0, [jU(UU, XU), TU(!0, KU[UU.type], bU[UU.type]), hU(UU)]),
      jU = (UU, XU) => {
        const zU = Nz(Iz(UU), UU.timescale),
          cU = !(0, FU.$b)(XU) || !(0, FU.$b)(zU),
          yU = cU ? CU : LU;
        return HU("mdhd", +cU, 0, [yU(XU), yU(XU), LU(UU.timescale), yU(zU), PU(Az(UU.track.metadata.languageCode ?? FU.y)), PU(0)])
      },
      KU = {
        video: "vide",
        audio: "soun",
        subtitle: "text"
      },
      bU = {
        video: "MediabunnyVideoHandler",
        audio: "MediabunnySoundHandler",
        subtitle: "MediabunnyTextHandler"
      },
      TU = function(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "\0\0\0\0";
        return HU("hdlr", 0, 0, [UU ? uU("mhlr") : LU(0), uU(XU), uU(cU), LU(0), LU(0), uU(zU, !0)])
      },
      hU = UU => iU("minf", void 0, [UX[UU.type](), XX(), yX(UU)]),
      UX = {
        video: () => HU("vmhd", 0, 1, [PU(0), PU(0), PU(0), PU(0)]),
        audio: () => HU("smhd", 0, 0, [PU(0), PU(0)]),
        subtitle: () => HU("nmhd", 0, 0)
      },
      XX = () => iU("dinf", void 0, [zX()]),
      zX = () => HU("dref", 0, 0, [LU(1)], [cX()]),
      cX = () => HU("url ", 0, 1),
      yX = UU => {
        const XU = UU.compositionTimeOffsetTable.length > 1 || UU.compositionTimeOffsetTable.some((UU => 0 !== UU.sampleCompositionTimeOffset));
        return iU("stbl", void 0, [QX(UU), PX(UU), XU ? CX(UU) : null, XU ? wX(UU) : null, dX(UU), LX(UU), eX(UU), WX(UU)])
      },
      QX = UU => {
        let XU;
        if ("video" === UU.type) XU = AX(Uz(UU.track.source._codec, UU.info.decoderConfig.codec), UU);
        else if ("audio" === UU.type) {
          const zU = zz(UU.track.source._codec, UU.info.decoderConfig.codec, UU.muxer.isQuickTime);
          (0, FU.J)(zU), XU = YX(zU, UU)
        } else "subtitle" === UU.type && (XU = RX(yz[UU.track.source._codec], UU));
        return (0, FU.J)(XU), HU("stsd", 0, 0, [LU(1)], [XU])
      },
      AX = (UU, XU) => iU(UU, [Array(6).fill(0), PU(1), PU(0), PU(0), Array(12).fill(0), PU(XU.info.width), PU(XU.info.height), LU(4718592), LU(4718592), LU(0), PU(1), RU(kU.e.length), uU(kU.e), Array(31 - kU.e.length).fill(0), PU(XU.info.hasAlphaChannel ? 32 : 24), WU(65535)], [Xz[XU.track.source._codec]?.(XU) ?? null, oX(XU), (0, FU.hb)(XU.info.decoderConfig.colorSpace) ? null : DX(XU), FX(XU)]),
      FX = UU => 0 === UU.avgBitrate && 0 === UU.maxBitrate ? null : iU("btrt", [LU(0), LU(UU.maxBitrate), LU(UU.avgBitrate)]),
      oX = UU => UU.info.pixelAspectRatio.num === UU.info.pixelAspectRatio.den ? null : iU("pasp", [LU(UU.info.pixelAspectRatio.num), LU(UU.info.pixelAspectRatio.den)]),
      DX = UU => {
        const XU = UU.info.decoderConfig.colorSpace;
        return iU("colr", [uU(UU.muxer.isQuickTime ? "nclc" : "nclx"), PU(null != XU?.primaries ? FU.c[XU.primaries] : 2), PU(null != XU?.transfer ? FU.v[XU.transfer] : 2), PU(null != XU?.matrix ? FU.l[XU.matrix] : 2), UU.muxer.isQuickTime ? [] : RU((XU?.fullRange ? 1 : 0) << 7)])
      },
      EX = UU => {
        if (!UU.info.decoderConfig) return null;
        const XU = UU.info.decoderConfig,
          zU = XU.codec.split("."),
          cU = Number(zU[1]),
          yU = Number(zU[2]),
          QU = (Number(zU[3]) << 4) + ((zU[4] ? Number(zU[4]) : 1) << 1) + (zU[8] ? Number(zU[8]) : Number(XU.colorSpace?.fullRange ?? 0)),
          AU = zU[5] ? Number(zU[5]) : XU.colorSpace?.primaries ? FU.c[XU.colorSpace.primaries] : 1,
          oU = zU[6] ? Number(zU[6]) : XU.colorSpace?.transfer ? FU.v[XU.colorSpace.transfer] : 1,
          DU = zU[7] ? Number(zU[7]) : XU.colorSpace?.matrix ? FU.l[XU.colorSpace.matrix] : 1;
        return HU("vpcC", 1, 0, [RU(cU), RU(yU), RU(QU), RU(AU), RU(oU), RU(DU), PU(0)])
      },
      YX = (UU, XU) => {
        let zU, cU = 0,
          QU = 16;
        const AU = yU.r.includes(XU.track.source._codec);
        if (AU) {
          const UU = XU.track.source._codec,
            {
              sampleSize: zU
            } = (0, yU.R)(UU);
          QU = 8 * zU, QU > 16 && (cU = 1)
        }
        if (XU.muxer.isQuickTime && (cU = 1), 0 === cU) zU = [Array(6).fill(0), PU(1), PU(cU), PU(0), LU(0), PU(XU.info.numberOfChannels), PU(QU), PU(0), PU(0), PU(XU.info.sampleRate < 65536 ? XU.info.sampleRate : 0), PU(0)];
        else {
          const UU = AU ? 0 : -2;
          zU = [Array(6).fill(0), PU(1), PU(cU), PU(0), LU(0), PU(XU.info.numberOfChannels), PU(Math.min(QU, 16)), WU(UU), PU(0), PU(XU.info.sampleRate < 65536 ? XU.info.sampleRate : 0), PU(0), AU ? [LU(1), LU(QU / 8), LU(XU.info.numberOfChannels * QU / 8)] : [LU(0), LU(0), LU(0)], LU(2)]
        }
        return iU(UU, zU, [cz(XU.track.source._codec, XU.muxer.isQuickTime)?.(XU) ?? null, FX(XU)])
      },
      NX = UU => {
        let XU;
        switch (UU.track.source._codec) {
          case "aac":
            XU = 64;
            break;
          case "mp3":
            XU = 107;
            break;
          case "vorbis":
            XU = 221;
            break;
          default:
            throw new Error(`Unhandled audio codec: ${UU.track.source._codec}`)
        }
        let zU = [...RU(XU), ...RU(21), ...dU(0), ...LU(UU.maxBitrate), ...LU(UU.avgBitrate)];
        if (UU.info.decoderConfig.description) {
          const XU = (0, FU.md)(UU.info.decoderConfig.description);
          zU = [...zU, ...RU(5), ...rU(XU.byteLength), ...XU]
        }
        return zU = [...PU(1), ...RU(0), ...RU(4), ...rU(zU.length), ...zU, ...RU(6), ...RU(1), ...RU(2)], zU = [...RU(3), ...rU(zU.length), ...zU], HU("esds", 0, 0, zU)
      },
      IX = UU => iU("wave", void 0, [pX(UU), aX(UU), iU("\0\0\0\0")]),
      pX = UU => iU("frma", [uU(zz(UU.track.source._codec, UU.info.decoderConfig.codec, UU.muxer.isQuickTime))]),
      aX = UU => {
        const {
          littleEndian: XU
        } = (0, yU.R)(UU.track.source._codec);
        return iU("enda", [PU(+XU)])
      },
      tX = UU => {
        let XU = UU.info.numberOfChannels,
          zU = 3840,
          cU = UU.info.sampleRate,
          yU = 0,
          QU = 0,
          AU = new Uint8Array(0);
        const oU = UU.info.decoderConfig?.description;
        if (oU) {
          (0, FU.J)(oU.byteLength >= 18);
          const UU = (0, FU.md)(oU),
            DU = (0, aU.rb)(UU);
          XU = DU.outputChannelCount, zU = DU.preSkip, cU = DU.inputSampleRate, yU = DU.outputGain, QU = DU.channelMappingFamily, DU.channelMappingTable && (AU = DU.channelMappingTable)
        }
        return iU("dOps", [RU(0), RU(XU), PU(zU), LU(cU), WU(yU), RU(QU), ...AU])
      },
      gX = UU => {
        const XU = UU.info.decoderConfig?.description;
        (0, FU.J)(XU);
        const zU = (0, FU.md)(XU);
        return HU("dfLa", 0, 0, [...zU.subarray(4)])
      },
      kX = UU => {
        const {
          littleEndian: XU,
          sampleSize: zU
        } = (0, yU.R)(UU.track.source._codec);
        return HU("pcmC", 0, 0, [RU(+XU), RU(8 * zU)])
      },
      GX = UU => {
        (0, FU.J)(UU.info.primingPacket);
        const XU = (0, aU.fb)(UU.info.primingPacket.data);
        if (!XU) throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
        const zU = new Uint8Array(3),
          cU = new tU.b(zU);
        return cU.writeBits(2, XU.fscod), cU.writeBits(5, XU.bsid), cU.writeBits(3, XU.bsmod), cU.writeBits(3, XU.acmod), cU.writeBits(1, XU.lfeon), cU.writeBits(5, XU.bitRateCode), cU.writeBits(5, 0), iU("dac3", [...zU])
      },
      BX = UU => {
        (0, FU.J)(UU.info.primingPacket);
        const XU = (0, aU.jb)(UU.info.primingPacket.data);
        if (!XU) throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
        let zU = 16;
        for (const AU of XU.substreams) zU += 23, AU.numDepSub > 0 ? zU += 9 : zU += 1;
        const cU = Math.ceil(zU / 8),
          yU = new Uint8Array(cU),
          QU = new tU.b(yU);
        QU.writeBits(13, XU.dataRate), QU.writeBits(3, XU.substreams.length - 1);
        for (const AU of XU.substreams) QU.writeBits(2, AU.fscod), QU.writeBits(5, AU.bsid), QU.writeBits(1, 0), QU.writeBits(1, 0), QU.writeBits(3, AU.bsmod), QU.writeBits(3, AU.acmod), QU.writeBits(1, AU.lfeon), QU.writeBits(3, 0), QU.writeBits(4, AU.numDepSub), AU.numDepSub > 0 ? QU.writeBits(9, AU.chanLoc) : QU.writeBits(1, 0);
        return iU("dec3", [...yU])
      },
      ZX = UU => {
        (0, FU.J)(UU.info.primingPacket);
        const XU = (0, aU.ib)(UU.info.primingPacket.data);
        if (!XU) throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");
        return iU("ddts", [...(0, aU.q)(XU)])
      },
      RX = (UU, XU) => iU(UU, [Array(6).fill(0), PU(1)], [Qz[XU.track.source._codec](XU), FX(XU)]),
      PX = UU => HU("stts", 0, 0, [LU(UU.timeToSampleTable.length), UU.timeToSampleTable.map((UU => [LU(UU.sampleCount), LU(UU.sampleDelta)]))]),
      WX = UU => {
        if (UU.samples.every((UU => "key" === UU.type))) return null;
        const XU = [...UU.samples.entries()].filter((UU => {
          let [, XU] = UU;
          return "key" === XU.type
        }));
        return HU("stss", 0, 0, [LU(XU.length), XU.map((UU => {
          let [XU] = UU;
          return LU(XU + 1)
        }))])
      },
      dX = UU => HU("stsc", 0, 0, [LU(UU.compactlyCodedChunkTable.length), UU.compactlyCodedChunkTable.map((UU => [LU(UU.firstChunk), LU(UU.samplesPerChunk), LU(1)]))]),
      LX = UU => {
        if ("audio" === UU.type && UU.info.requiresPcmTransformation) {
          const {
            sampleSize: XU
          } = (0, yU.R)(UU.track.source._codec);
          return HU("stsz", 0, 0, [LU(XU * UU.info.numberOfChannels), LU(UU.samples.reduce(((XU, zU) => XU + Nz(zU.duration, UU.timescale)), 0))])
        }
        return HU("stsz", 0, 0, [LU(0), LU(UU.samples.length), UU.samples.map((UU => LU(UU.size)))])
      },
      eX = UU => UU.finalizedChunks.length > 0 && (0, FU.kc)(UU.finalizedChunks).offset >= 2 ** 32 ? HU("co64", 0, 0, [LU(UU.finalizedChunks.length), UU.finalizedChunks.map((UU => CU(UU.offset)))]) : HU("stco", 0, 0, [LU(UU.finalizedChunks.length), UU.finalizedChunks.map((UU => LU(UU.offset)))]),
      CX = UU => HU("ctts", 1, 0, [LU(UU.compositionTimeOffsetTable.length), UU.compositionTimeOffsetTable.map((UU => [LU(UU.sampleCount), eU(UU.sampleCompositionTimeOffset)]))]),
      wX = UU => {
        let XU = 1 / 0,
          zU = -1 / 0,
          cU = 1 / 0,
          yU = -1 / 0;
        (0, FU.J)(UU.compositionTimeOffsetTable.length > 0), (0, FU.J)(UU.samples.length > 0);
        for (let AU = 0; AU < UU.compositionTimeOffsetTable.length; AU++) {
          const cU = UU.compositionTimeOffsetTable[AU];
          XU = Math.min(XU, cU.sampleCompositionTimeOffset), zU = Math.max(zU, cU.sampleCompositionTimeOffset)
        }
        for (let AU = 0; AU < UU.samples.length; AU++) {
          const XU = UU.samples[AU];
          cU = Math.min(cU, Nz(XU.timestamp, UU.timescale)), yU = Math.max(yU, Nz(XU.timestamp + XU.duration, UU.timescale))
        }
        const QU = Math.max(-XU, 0);
        return yU >= 2 ** 31 ? null : HU("cslg", 0, 0, [eU(QU), eU(XU), eU(zU), eU(cU), eU(yU)])
      },
      qX = UU => iU("mvex", void 0, UU.map(OX)),
      OX = UU => HU("trex", 0, 0, [LU(UU.track.id), LU(1), LU(0), LU(0), LU(0)]),
      SX = (UU, XU) => iU("moof", void 0, [rX(UU), ...XU.map(fX)]),
      rX = UU => HU("mfhd", 0, 0, [LU(UU)]),
      uX = UU => {
        let XU = 0,
          zU = 0;
        const cU = "delta" === UU.type;
        return zU |= +cU, XU |= cU ? 1 : 2, XU << 24 | zU << 16
      },
      fX = UU => iU("traf", void 0, [iX(UU), HX(UU), MX(UU)]),
      iX = UU => {
        (0, FU.J)(UU.currentChunk);
        let XU = 0;
        XU |= 8, XU |= 16, XU |= 32, XU |= 131072;
        const zU = UU.currentChunk.samples[1] ?? UU.currentChunk.samples[0],
          cU = {
            duration: zU.timescaleUnitsToNextSample,
            size: zU.size,
            flags: uX(zU)
          };
        return HU("tfhd", 0, 131128, [LU(UU.track.id), LU(cU.duration), LU(cU.size), LU(cU.flags)])
      },
      HX = UU => ((0, FU.J)(UU.currentChunk), HU("tfdt", 1, 0, [CU(Nz(UU.currentChunk.startTimestamp, UU.timescale))])),
      MX = UU => {
        (0, FU.J)(UU.currentChunk);
        const XU = UU.currentChunk.samples.map((UU => UU.timescaleUnitsToNextSample)),
          zU = UU.currentChunk.samples.map((UU => UU.size)),
          cU = UU.currentChunk.samples.map(uX),
          yU = UU.currentChunk.samples.map((XU => Nz(XU.timestamp - XU.decodeTimestamp, UU.timescale))),
          QU = new Set(XU),
          AU = new Set(zU),
          oU = new Set(cU),
          DU = new Set(yU),
          EU = 2 === oU.size && cU[0] !== cU[1],
          YU = QU.size > 1,
          NU = AU.size > 1,
          IU = !EU && oU.size > 1,
          pU = DU.size > 1 || [...DU].some((UU => 0 !== UU));
        let aU = 0;
        return aU |= 1, aU |= 4 * +EU, aU |= 256 * +YU, aU |= 512 * +NU, aU |= 1024 * +IU, aU |= 2048 * +pU, HU("trun", 1, aU, [LU(UU.currentChunk.samples.length), LU(UU.currentChunk.offset - UU.currentChunk.moofOffset || 0), EU ? LU(cU[0]) : [], UU.currentChunk.samples.map(((UU, QU) => [YU ? LU(XU[QU]) : [], NU ? LU(zU[QU]) : [], IU ? LU(cU[QU]) : [], pU ? eU(yU[QU]) : []]))])
      },
      vX = UU => HU("tfra", 1, 0, [LU(UU.track.id), LU(63), LU(UU.finalizedChunks.length), UU.finalizedChunks.map((XU => [CU(Nz(XU.samples[0].timestamp, UU.timescale)), CU(XU.moofOffset), LU(XU.trafIndex + 1), LU(1), LU(1)]))]),
      VX = () => HU("mfro", 0, 0, [LU(0)]),
      sX = () => iU("vtte"),
      nX = (UU, XU, zU, cU, yU) => iU("vttc", void 0, [null !== yU ? iU("vsid", [eU(yU)]) : null, null !== zU ? iU("iden", [...FU.hd.encode(zU)]) : null, null !== XU ? iU("ctim", [...FU.hd.encode((0, gU.h)(XU))]) : null, null !== cU ? iU("sttg", [...FU.hd.encode(cU)]) : null, iU("payl", [...FU.hd.encode(UU)])]),
      mX = UU => iU("vtta", [...FU.hd.encode(UU)]),
      lX = UU => {
        const XU = [],
          zU = UU.format._options.metadataFormat ?? "auto",
          cU = UU.output._metadataTags;
        if ("mdir" === zU || "auto" === zU && !UU.isQuickTime) {
          const UU = bX(cU);
          UU && XU.push(UU)
        } else if ("mdta" === zU) {
          const UU = TX(cU);
          UU && XU.push(UU)
        } else("udta" === zU || "auto" === zU && UU.isQuickTime) && xX(XU, UU.output._metadataTags);
        return 0 === XU.length ? null : iU("udta", void 0, XU)
      },
      xX = (UU, XU) => {
        for (const {
            key: zU,
            value: cU
          }
          of(0, FU.gc)(XU)) switch (zU) {
          case "title":
            UU.push(JX("\xa9nam", cU));
            break;
          case "description":
            UU.push(JX("\xa9des", cU));
            break;
          case "artist":
            UU.push(JX("\xa9ART", cU));
            break;
          case "album":
            UU.push(JX("\xa9alb", cU));
            break;
          case "albumArtist":
            UU.push(JX("albr", cU));
            break;
          case "genre":
            UU.push(JX("\xa9gen", cU));
            break;
          case "date":
            UU.push(JX("\xa9day", cU.toISOString().slice(0, 10)));
            break;
          case "comment":
            UU.push(JX("\xa9cmt", cU));
            break;
          case "lyrics":
            UU.push(JX("\xa9lyr", cU));
            break;
          case "raw":
          case "discNumber":
          case "discsTotal":
          case "trackNumber":
          case "tracksTotal":
          case "beatsPerMinute":
          case "images":
            break;
          default:
            (0, FU.H)(zU)
        }
        if (XU.raw)
          for (const zU in XU.raw) {
            const cU = XU.raw[zU];
            null == cU || 4 !== zU.length || UU.some((UU => UU.type === zU)) || ("string" === typeof cU ? UU.push(JX(zU, cU)) : cU instanceof Uint8Array && UU.push(iU(zU, Array.from(cU))))
          }
      },
      JX = (UU, XU) => {
        const zU = FU.hd.encode(XU);
        return iU(UU, [PU(zU.length), PU(Az("und")), Array.from(zU)])
      },
      jX = {
        "image/jpeg": 13,
        "image/png": 14,
        "image/bmp": 27
      },
      KX = (UU, XU) => {
        const zU = [];
        for (const {
            key: cU,
            value: yU
          }
          of(0, FU.gc)(UU)) switch (cU) {
          case "title":
            zU.push({
              key: XU ? "title" : "\xa9nam",
              value: hX(yU)
            });
            break;
          case "description":
            zU.push({
              key: XU ? "description" : "\xa9des",
              value: hX(yU)
            });
            break;
          case "artist":
            zU.push({
              key: XU ? "artist" : "\xa9ART",
              value: hX(yU)
            });
            break;
          case "album":
            zU.push({
              key: XU ? "album" : "\xa9alb",
              value: hX(yU)
            });
            break;
          case "albumArtist":
            zU.push({
              key: XU ? "album_artist" : "aART",
              value: hX(yU)
            });
            break;
          case "comment":
            zU.push({
              key: XU ? "comment" : "\xa9cmt",
              value: hX(yU)
            });
            break;
          case "genre":
            zU.push({
              key: XU ? "genre" : "\xa9gen",
              value: hX(yU)
            });
            break;
          case "beatsPerMinute":
            XU || zU.push({
              key: "tmpo",
              value: iU("data", [LU(21), LU(0), PU(yU)])
            });
            break;
          case "lyrics":
            zU.push({
              key: XU ? "lyrics" : "\xa9lyr",
              value: hX(yU)
            });
            break;
          case "date":
            zU.push({
              key: XU ? "date" : "\xa9day",
              value: hX(yU.toISOString().slice(0, 10))
            });
            break;
          case "images":
            for (const UU of yU) "coverFront" === UU.kind && zU.push({
              key: "covr",
              value: iU("data", [LU(jX[UU.mimeType] ?? 0), LU(0), Array.from(UU.data)])
            });
            break;
          case "trackNumber":
            if (XU) {
              const XU = void 0 !== UU.tracksTotal ? `${yU}/${UU.tracksTotal}` : yU.toString();
              zU.push({
                key: "track",
                value: hX(XU)
              })
            } else zU.push({
              key: "trkn",
              value: iU("data", [LU(0), LU(0), PU(0), PU(yU), PU(UU.tracksTotal ?? 0), PU(0)])
            });
            break;
          case "discNumber":
            XU || zU.push({
              key: "disc",
              value: iU("data", [LU(0), LU(0), PU(0), PU(yU), PU(UU.discsTotal ?? 0), PU(0)])
            });
            break;
          case "tracksTotal":
          case "discsTotal":
          case "raw":
            break;
          default:
            (0, FU.H)(cU)
        }
        if (UU.raw)
          for (const cU in UU.raw) {
            const yU = UU.raw[cU];
            null == yU || !XU && 4 !== cU.length || zU.some((UU => UU.key === cU)) || ("string" === typeof yU ? zU.push({
              key: cU,
              value: hX(yU)
            }) : yU instanceof Uint8Array ? zU.push({
              key: cU,
              value: iU("data", [LU(0), LU(0), Array.from(yU)])
            }) : yU instanceof IU.j && zU.push({
              key: cU,
              value: iU("data", [LU(jX[yU.mimeType] ?? 0), LU(0), Array.from(yU.data)])
            }))
          }
        return zU
      },
      bX = UU => {
        const XU = KX(UU, !1);
        return 0 === XU.length ? null : HU("meta", 0, 0, void 0, [TU(!1, "mdir", "", "appl"), iU("ilst", void 0, XU.map((UU => iU(UU.key, void 0, [UU.value]))))])
      },
      TX = UU => {
        const XU = KX(UU, !0);
        return 0 === XU.length ? null : iU("meta", void 0, [TU(!1, "mdta", ""), HU("keys", 0, 0, [LU(XU.length)], XU.map((UU => iU("mdta", [...FU.hd.encode(UU.key)])))), iU("ilst", void 0, XU.map(((UU, XU) => {
          const zU = String.fromCharCode(...LU(XU + 1));
          return iU(zU, void 0, [UU.value])
        })))])
      },
      hX = UU => iU("data", [LU(1), LU(0), ...FU.hd.encode(UU)]),
      Uz = (UU, XU) => {
        switch (UU) {
          case "avc":
            return XU.startsWith("avc3") ? "avc3" : "avc1";
          case "hevc":
            return "hvc1";
          case "vp8":
            return "vp08";
          case "vp9":
            return "vp09";
          case "av1":
            return "av01";
          case "prores":
            return XU
        }
      },
      Xz = {
        avc: UU => UU.info.decoderConfig && iU("avcC", [...(0, FU.md)(UU.info.decoderConfig.description)]),
        hevc: UU => UU.info.decoderConfig && iU("hvcC", [...(0, FU.md)(UU.info.decoderConfig.description)]),
        vp8: EX,
        vp9: EX,
        av1: UU => iU("av1C", (0, yU.G)(UU.info.decoderConfig.codec)),
        prores: null
      },
      zz = (UU, XU, zU) => {
        switch (UU) {
          case "aac":
          case "mp3":
          case "vorbis":
            return "mp4a";
          case "opus":
            return "Opus";
          case "flac":
            return "fLaC";
          case "ulaw":
            return "ulaw";
          case "alaw":
            return "alaw";
          case "pcm-u8":
            return "raw ";
          case "pcm-s8":
            return "sowt";
          case "ac3":
            return "ac-3";
          case "eac3":
            return "ec-3";
          case "dts":
            return XU
        }
        if (zU) switch (UU) {
          case "pcm-s16":
            return "sowt";
          case "pcm-s16be":
            return "twos";
          case "pcm-s24":
          case "pcm-s24be":
            return "in24";
          case "pcm-s32":
          case "pcm-s32be":
            return "in32";
          case "pcm-f32":
          case "pcm-f32be":
            return "fl32";
          case "pcm-f64":
          case "pcm-f64be":
            return "fl64"
        } else switch (UU) {
          case "pcm-s16":
          case "pcm-s16be":
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
            return "ipcm";
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return "fpcm"
        }
      },
      cz = (UU, XU) => {
        switch (UU) {
          case "aac":
          case "mp3":
          case "vorbis":
            return NX;
          case "opus":
            return tX;
          case "flac":
            return gX;
          case "ac3":
            return GX;
          case "eac3":
            return BX;
          case "dts":
            return ZX
        }
        if (XU) switch (UU) {
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return IX
        } else switch (UU) {
          case "pcm-s16":
          case "pcm-s16be":
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return kX
        }
        return null
      },
      yz = {
        webvtt: "wvtt"
      },
      Qz = {
        webvtt: UU => iU("vttC", [...FU.hd.encode(UU.info.config.description)])
      },
      Az = UU => {
        (0, FU.J)(3 === UU.length);
        let XU = 0;
        for (let zU = 0; zU < 3; zU++) XU <<= 5, XU += UU.charCodeAt(zU) - 96;
        return XU
      };
    var Fz = zU(40742),
      oz = zU(40747);
    const Dz = UU => {
        const XU = UU.filePos,
          zU = EU(UU, 9),
          cU = new tU.b(zU);
        if (4095 !== cU.readBits(12)) return null;
        cU.skipBits(1);
        if (0 !== cU.readBits(2)) return null;
        const yU = cU.readBits(1),
          QU = cU.readBits(2) + 1,
          AU = cU.readBits(4);
        if (15 === AU) return null;
        cU.skipBits(1);
        const FU = cU.readBits(3);
        if (0 === FU) throw new Error("ADTS frames with channel configuration 0 are not supported.");
        cU.skipBits(1), cU.skipBits(1), cU.skipBits(1), cU.skipBits(1);
        const oU = cU.readBits(13);
        cU.skipBits(11);
        const DU = cU.readBits(2) + 1;
        if (1 !== DU) throw new Error("ADTS frames with more than one AAC frame are not supported.");
        let YU = null;
        return 1 === yU ? UU.filePos -= 2 : YU = cU.readBits(16), {
          objectType: QU,
          samplingFrequencyIndex: AU,
          channelConfiguration: FU,
          frameLength: oU,
          numberOfAacFrames: DU,
          crcCheck: YU,
          startPos: XU
        }
      },
      Ez = 57600,
      Yz = UU => {
        const XU = {},
          zU = UU.track;
        return void 0 !== zU.metadata.name && (XU.name = zU.metadata.name), XU
      },
      Nz = function(UU, XU) {
        const zU = UU * XU;
        return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Math.round(zU) : zU
      },
      Iz = UU => {
        if (0 === UU.samples.length) return 0;
        let XU = 1 / 0,
          zU = -1 / 0;
        for (let cU = 0; cU < UU.samples.length; cU++) {
          const yU = UU.samples[cU];
          yU.timestamp < XU && (XU = yU.timestamp), yU.timestamp + yU.duration > zU && (zU = yU.timestamp + yU.duration)
        }
        return XU === 1 / 0 ? 0 : zU - XU
      };
    class pz extends pU {
      constructor(UU, XU) {
        super(UU), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new oz.b, this.auxWriter = new Fz.d(this.auxTarget, !1), this.auxBoxWriter = new GU(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = (0, FU.Gc)(), this.creationTime = Math.floor(Date.now() / 1e3) + 2082844800, this.finalizedChunks = [], this.wroteFragmentedHeader = !1, this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = XU, this.formatOptions = {
          ...XU._options
        }, this.isQuickTime = XU instanceof iz, this.isCmaf = XU instanceof fz, this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (XU instanceof fz ? 1 / 0 : 1), this.auxWriter.start()
      }
      async start() {
        const UU = await this.mutex.acquire();
        if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((UU => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : UU instanceof oz.b)), this.boxWriter = new GU(this.writer), this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof oz.b && "in-memory"), this.isFragmented = "fragmented" === this.fastStart), this.isCmaf) {
          if (!this.output._hasInitTarget()) throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
          const UU = await this.output._getInitTarget(),
            XU = new Fz.d(UU, !0);
          XU.start(), this.initWriter = XU, this.initBoxWriter = new GU(XU)
        }
        const XU = this.output.tracks.some((UU => UU.isVideoTrack() && "avc" === UU.source._codec));
        {
          const UU = this.initBoxWriter ?? this.boxWriter;
          if ((0, FU.J)(UU), this.formatOptions.onFtyp && UU.writer.startTrackingWrites(), UU.writeBox((UU => {
              const XU = 512;
              return UU.isQuickTime ? iU("ftyp", [uU("qt  "), LU(XU), uU("qt  ")]) : UU.fragmented ? UU.cmaf ? iU("ftyp", [uU("iso5"), LU(XU), uU("iso5"), uU("iso6"), uU("mp41"), uU("cmfc"), uU("dash")]) : iU("ftyp", [uU("iso5"), LU(XU), uU("iso5"), uU("iso6"), uU("mp41")]) : iU("ftyp", [uU("isom"), LU(XU), uU("isom"), UU.holdsAvc ? uU("avc1") : [], uU("mp41")])
            })({
              isQuickTime: this.isQuickTime,
              holdsAvc: XU,
              fragmented: this.isFragmented,
              cmaf: this.isCmaf
            })), this.formatOptions.onFtyp) {
            const {
              data: XU,
              start: zU
            } = UU.writer.stopTrackingWrites();
            this.formatOptions.onFtyp(XU, zU)
          }
          this.ftypSize = UU.writer.getPos(), this.isCmaf && await this.initWriter.flush()
        }
        if ("in-memory" === this.fastStart);
        else if ("reserve" === this.fastStart) {
          for (const zU of this.output.tracks)
            if (void 0 === zU.metadata.maximumPacketCount) throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")
        } else this.isFragmented || ((0, FU.J)(this.writer), (0, FU.J)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = VU(!0), this.boxWriter.writeBox(this.mdat));
        await (this.writer?.flush());
        for (const zU of this.output.tracks) zU.isVideoTrack() && zU.metadata.decoderConfig ? this.getVideoTrackData(zU, zU.metadata.primingPacket ?? null, {
          decoderConfig: zU.metadata.decoderConfig
        }) : zU.isAudioTrack() && zU.metadata.decoderConfig && this.getAudioTrackData(zU, zU.metadata.primingPacket ?? null, {
          decoderConfig: zU.metadata.decoderConfig
        });
        UU()
      }
      allTracksAreKnown() {
        for (const UU of this.output.tracks)
          if (!UU.source._closed && !this.trackDatas.some((XU => XU.track === UU))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const UU = this.trackDatas.map((UU => {
          if ("video" === UU.type) return UU.info.decoderConfig.codec;
          if ("audio" === UU.type) return UU.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [UU.track.source._codec]
        }));
        return (UU => {
          let XU = (UU.hasVideo ? "video/" : UU.hasAudio ? "audio/" : "application/") + (UU.isQuickTime ? "quicktime" : "mp4");
          UU.codecStrings.length > 0 && (XU += `; codecs="${[...new Set(UU.codecStrings)].join(", ")}"`);
          return XU
        })({
          isQuickTime: this.isQuickTime,
          hasVideo: this.trackDatas.some((UU => "video" === UU.type)),
          hasAudio: this.trackDatas.some((UU => "audio" === UU.type)),
          codecStrings: UU
        })
      }
      getVideoTrackData(UU, XU, zU) {
        const cU = this.trackDatas.find((XU => XU.track === UU));
        if (cU) return cU;
        (0, yU.V)(zU, UU.source._codec), (0, FU.J)(zU), (0, FU.J)(zU.decoderConfig);
        const QU = {
          ...zU.decoderConfig
        };
        (0, FU.J)(void 0 !== QU.codedWidth), (0, FU.J)(void 0 !== QU.codedHeight);
        let AU = !1;
        if ("avc" !== UU.source._codec || QU.description) {
          if ("hevc" === UU.source._codec && !QU.description) {
            if (!XU) throw new Error("No HEVC description provided; you must therefore provide a priming packet.");
            const UU = (0, aU.M)(XU.data);
            if (!UU) throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
            QU.description = (0, aU.vb)(UU), AU = !0
          }
        } else {
          if (!XU) throw new Error("No AVC description provided; you must therefore provide a priming packet.");
          const UU = (0, aU.H)(XU.data);
          if (!UU) throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
          QU.description = (0, aU.tb)(UU), AU = !0
        }
        const oU = (0, FU.pb)(1 / (UU.metadata.frameRate ?? Ez), 1e6).den,
          DU = QU.displayAspectWidth,
          EU = QU.displayAspectHeight,
          YU = void 0 === DU || void 0 === EU ? {
            num: 1,
            den: 1
          } : (0, FU.cd)({
            num: DU * QU.codedHeight,
            den: EU * QU.codedWidth
          }),
          NU = "ap4h" === QU.codec || "ap4x" === QU.codec,
          IU = {
            muxer: this,
            track: UU,
            type: "video",
            info: {
              width: QU.codedWidth,
              height: QU.codedHeight,
              pixelAspectRatio: YU,
              decoderConfig: QU,
              requiresAnnexBTransformation: AU,
              hasAlphaChannel: NU
            },
            timescale: oU,
            samples: [],
            sampleQueue: [],
            timestampProcessingQueue: [],
            timeToSampleTable: [],
            compositionTimeOffsetTable: [],
            lastTimescaleUnits: null,
            lastSample: null,
            startTimestampOffset: null,
            finalizedChunks: [],
            currentChunk: null,
            compactlyCodedChunkTable: [],
            closed: !1,
            avgBitrate: UU.source._nominalBitrate ?? UU.metadata.averageBitrate ?? 0,
            maxBitrate: UU.source._nominalBitrate ?? UU.metadata.bitrate ?? 0
          };
        return this.trackDatas.push(IU), this.trackDatas.sort(((UU, XU) => UU.track.id - XU.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), IU
      }
      getAudioTrackData(UU, XU, zU) {
        const QU = this.trackDatas.find((XU => XU.track === UU));
        if (QU) return QU;
        (0, yU.S)(zU, UU.source._codec), (0, FU.J)(zU), (0, FU.J)(zU.decoderConfig);
        const AU = {
          ...zU.decoderConfig
        };
        let DU = !1;
        if ("aac" === UU.source._codec && !AU.description) {
          if (!XU) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const UU = Dz(oU.tempFromBytes(XU.data));
          if (!UU) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const zU = cU.e[UU.samplingFrequencyIndex],
            yU = cU.d[UU.channelConfiguration];
          if (void 0 === zU || void 0 === yU) throw new Error("Invalid ADTS frame header.");
          AU.description = (0, cU.h)({
            objectType: UU.objectType,
            outputSampleRate: zU,
            outputNumberOfChannels: yU
          }), DU = !0
        }
        if (!XU) {
          if ("ac3" === UU.source._codec || "eac3" === UU.source._codec) throw new Error("AC-3/E-AC-3 require a priming packet.");
          if ("dts" === UU.source._codec) throw new Error("DTS requires a priming packet.")
        }
        const EU = {
          muxer: this,
          track: UU,
          type: "audio",
          info: {
            numberOfChannels: zU.decoderConfig.numberOfChannels,
            sampleRate: zU.decoderConfig.sampleRate,
            decoderConfig: AU,
            requiresPcmTransformation: !this.isFragmented && yU.r.includes(UU.source._codec),
            expectedNextPcmPacketTimestamp: null,
            requiresAdtsStripping: DU,
            primingPacket: XU
          },
          timescale: AU.sampleRate,
          samples: [],
          sampleQueue: [],
          timestampProcessingQueue: [],
          timeToSampleTable: [],
          compositionTimeOffsetTable: [],
          lastTimescaleUnits: null,
          lastSample: null,
          startTimestampOffset: null,
          finalizedChunks: [],
          currentChunk: null,
          compactlyCodedChunkTable: [],
          closed: !1,
          avgBitrate: UU.source._nominalBitrate ?? UU.metadata.averageBitrate ?? 0,
          maxBitrate: UU.source._nominalBitrate ?? UU.metadata.bitrate ?? 0
        };
        return this.trackDatas.push(EU), this.trackDatas.sort(((UU, XU) => UU.track.id - XU.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), EU
      }
      getSubtitleTrackData(UU, XU) {
        const zU = this.trackDatas.find((XU => XU.track === UU));
        if (zU) return zU;
        (0, yU.U)(XU), (0, FU.J)(XU), (0, FU.J)(XU.config);
        const cU = {
          muxer: this,
          track: UU,
          type: "subtitle",
          info: {
            config: XU.config
          },
          timescale: 1e3,
          samples: [],
          sampleQueue: [],
          timestampProcessingQueue: [],
          timeToSampleTable: [],
          compositionTimeOffsetTable: [],
          lastTimescaleUnits: null,
          lastSample: null,
          startTimestampOffset: null,
          finalizedChunks: [],
          currentChunk: null,
          compactlyCodedChunkTable: [],
          closed: !1,
          avgBitrate: UU.source._nominalBitrate ?? UU.metadata.averageBitrate ?? 0,
          maxBitrate: UU.source._nominalBitrate ?? UU.metadata.bitrate ?? 0,
          lastCueEndTimestamp: null,
          cueQueue: [],
          nextSourceId: 0,
          cueToSourceId: new WeakMap
        };
        return this.trackDatas.push(cU), this.trackDatas.sort(((UU, XU) => UU.track.id - XU.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), cU
      }
      async addEncodedVideoPacket(UU, XU, zU) {
        const cU = await this.mutex.acquire();
        try {
          const cU = this.getVideoTrackData(UU, XU, zU);
          let yU = XU.data;
          if (cU.info.requiresAnnexBTransformation) {
            const UU = [...(0, aU._)(yU)].map((UU => yU.subarray(UU.offset, UU.offset + UU.length)));
            if (0 === UU.length) throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
            yU = (0, aU.w)(UU, 4)
          }
          this.validateTimestamp(cU.track, XU.timestamp, "key" === XU.type);
          const QU = this.createSampleForTrack(cU, yU, XU.timestamp, XU.duration, XU.type);
          await this.registerSample(cU, QU)
        } finally {
          cU()
        }
      }
      async addEncodedAudioPacket(UU, XU, zU) {
        const cU = await this.mutex.acquire();
        try {
          const cU = this.getAudioTrackData(UU, XU, zU);
          let QU = XU.data;
          if (cU.info.requiresAdtsStripping) {
            const UU = Dz(oU.tempFromBytes(QU));
            if (!UU) throw new Error("Expected ADTS frame, didn't get one.");
            const XU = null === UU.crcCheck ? 7 : 9;
            QU = QU.subarray(XU)
          }
          this.validateTimestamp(cU.track, XU.timestamp, "key" === XU.type);
          let AU = XU.timestamp,
            FU = XU.duration;
          if (cU.info.requiresPcmTransformation) {
            const UU = (0, yU.R)(cU.info.decoderConfig.codec).sampleSize * cU.info.numberOfChannels;
            if (FU = QU.byteLength / UU / cU.info.sampleRate, null !== cU.info.expectedNextPcmPacketTimestamp) {
              const UU = AU - cU.info.expectedNextPcmPacketTimestamp;
              if (UU < .01) AU = cU.info.expectedNextPcmPacketTimestamp;
              else {
                const XU = await this.padWithSilence(cU, cU.info.expectedNextPcmPacketTimestamp, UU);
                AU = cU.info.expectedNextPcmPacketTimestamp + XU
              }
            }
            cU.info.expectedNextPcmPacketTimestamp = AU + FU
          }
          const DU = this.createSampleForTrack(cU, QU, AU, FU, XU.type);
          await this.registerSample(cU, DU)
        } finally {
          cU()
        }
      }
      async padWithSilence(UU, XU, zU) {
        const cU = Nz(zU, UU.timescale);
        if (zU = cU / UU.timescale, cU > 0) {
          const {
            sampleSize: QU,
            silentValue: AU
          } = (0, yU.R)(UU.info.decoderConfig.codec), FU = cU * UU.info.numberOfChannels, oU = new Uint8Array(QU * FU).fill(AU), DU = this.createSampleForTrack(UU, new Uint8Array(oU.buffer), XU, zU, "key");
          await this.registerSample(UU, DU)
        }
        return zU
      }
      async addSubtitleCue(UU, XU, zU) {
        const cU = await this.mutex.acquire();
        try {
          const cU = this.getSubtitleTrackData(UU, zU);
          this.validateTimestamp(cU.track, XU.timestamp, !0), "webvtt" === UU.source._codec && (cU.cueQueue.push(XU), await this.processWebVTTCues(cU, XU.timestamp))
        } finally {
          cU()
        }
      }
      async processWebVTTCues(UU, XU) {
        for (; UU.cueQueue.length > 0;) {
          UU.lastCueEndTimestamp ??= Math.min(0, UU.cueQueue[0].timestamp);
          const zU = new Set([]);
          for (const DU of UU.cueQueue)(0, FU.J)(DU.timestamp <= XU), (0, FU.J)(UU.lastCueEndTimestamp <= DU.timestamp + DU.duration), zU.add(Math.max(DU.timestamp, UU.lastCueEndTimestamp)), zU.add(DU.timestamp + DU.duration);
          const cU = [...zU].sort(((UU, XU) => UU - XU)),
            yU = cU[0],
            QU = cU[1] ?? yU;
          if (XU < QU) break;
          if (UU.lastCueEndTimestamp < yU) {
            this.auxWriter.seek(0);
            const XU = sX();
            this.auxBoxWriter.writeBox(XU);
            const zU = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
              cU = this.createSampleForTrack(UU, zU, UU.lastCueEndTimestamp, yU - UU.lastCueEndTimestamp, "key");
            await this.registerSample(UU, cU), UU.lastCueEndTimestamp = yU
          }
          this.auxWriter.seek(0);
          for (let XU = 0; XU < UU.cueQueue.length; XU++) {
            const zU = UU.cueQueue[XU];
            if (zU.timestamp >= QU) break;
            gU.j.lastIndex = 0;
            const cU = gU.j.test(zU.text),
              AU = zU.timestamp + zU.duration;
            let FU = UU.cueToSourceId.get(zU);
            if (void 0 === FU && QU < AU && (FU = UU.nextSourceId++, UU.cueToSourceId.set(zU, FU)), zU.notes) {
              const UU = mX(zU.notes);
              this.auxBoxWriter.writeBox(UU)
            }
            const oU = nX(zU.text, cU ? yU : null, zU.identifier ?? null, zU.settings ?? null, FU ?? null);
            this.auxBoxWriter.writeBox(oU), AU === QU && UU.cueQueue.splice(XU--, 1)
          }
          const AU = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
            oU = this.createSampleForTrack(UU, AU, yU, QU - yU, "key");
          await this.registerSample(UU, oU), UU.lastCueEndTimestamp = QU
        }
      }
      createSampleForTrack(UU, XU, zU, cU, yU) {
        return {
          timestamp: zU,
          decodeTimestamp: zU,
          duration: cU,
          data: XU,
          size: XU.byteLength,
          type: yU,
          timescaleUnitsToNextSample: Nz(cU, UU.timescale)
        }
      }
      processTimestamps(UU, XU) {
        if (0 === UU.timestampProcessingQueue.length) return;
        if ("audio" === UU.type && UU.info.requiresPcmTransformation) {
          (0, FU.J)(!this.isFragmented), UU.startTimestampOffset ??= UU.timestampProcessingQueue[0].timestamp;
          let XU = 0;
          for (let zU = 0; zU < UU.timestampProcessingQueue.length; zU++) {
            const cU = UU.timestampProcessingQueue[zU];
            XU += Nz(cU.duration, UU.timescale)
          }
          if (0 === UU.timeToSampleTable.length) UU.timeToSampleTable.push({
            sampleCount: XU,
            sampleDelta: 1
          });
          else {
            (0, FU.kc)(UU.timeToSampleTable).sampleCount += XU
          }
          return void(UU.timestampProcessingQueue.length = 0)
        }
        const zU = UU.timestampProcessingQueue.map((UU => UU.timestamp)).sort(((UU, XU) => UU - XU));
        this.isFragmented ? UU.startTimestampOffset ??= Math.min(zU[0], 0) : UU.startTimestampOffset ??= zU[0];
        for (let cU = 0; cU < UU.timestampProcessingQueue.length; cU++) {
          const XU = UU.timestampProcessingQueue[cU];
          XU.decodeTimestamp = zU[cU];
          const yU = Nz(XU.timestamp - XU.decodeTimestamp, UU.timescale),
            QU = Nz(XU.duration, UU.timescale);
          if (null !== UU.lastTimescaleUnits) {
            (0, FU.J)(UU.lastSample);
            const zU = Nz(XU.decodeTimestamp, UU.timescale, !1),
              cU = Math.round(zU - UU.lastTimescaleUnits);
            if ((0, FU.J)(cU >= 0), UU.lastTimescaleUnits += cU, UU.lastSample.timescaleUnitsToNextSample = cU, !this.isFragmented) {
              let XU = (0, FU.kc)(UU.timeToSampleTable);
              if ((0, FU.J)(XU), 1 === XU.sampleCount) {
                XU.sampleDelta = cU;
                const zU = UU.timeToSampleTable[UU.timeToSampleTable.length - 2];
                zU && zU.sampleDelta === cU && (zU.sampleCount++, UU.timeToSampleTable.pop(), XU = zU)
              } else XU.sampleDelta !== cU && (XU.sampleCount--, UU.timeToSampleTable.push(XU = {
                sampleCount: 1,
                sampleDelta: cU
              }));
              XU.sampleDelta === QU ? XU.sampleCount++ : UU.timeToSampleTable.push({
                sampleCount: 1,
                sampleDelta: QU
              });
              const zU = (0, FU.kc)(UU.compositionTimeOffsetTable);
              (0, FU.J)(zU), zU.sampleCompositionTimeOffset === yU ? zU.sampleCount++ : UU.compositionTimeOffsetTable.push({
                sampleCount: 1,
                sampleCompositionTimeOffset: yU
              })
            }
          } else UU.lastTimescaleUnits = Nz(XU.decodeTimestamp, UU.timescale, !1), this.isFragmented || (UU.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: QU
          }), UU.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: yU
          }));
          UU.lastSample = XU
        }
        if (UU.timestampProcessingQueue.length = 0, (0, FU.J)(UU.lastSample), (0, FU.J)(null !== UU.lastTimescaleUnits), void 0 !== XU && 0 === UU.lastSample.timescaleUnitsToNextSample) {
          (0, FU.J)("key" === XU.type);
          const zU = Nz(XU.timestamp, UU.timescale, !1),
            cU = Math.round(zU - UU.lastTimescaleUnits);
          UU.lastSample.timescaleUnitsToNextSample = cU
        }
      }
      async registerSample(UU, XU) {
        "key" === XU.type && this.processTimestamps(UU, XU), UU.timestampProcessingQueue.push(XU), this.isFragmented ? (UU.sampleQueue.push(XU), await this.interleaveSamples()) : "reserve" === this.fastStart ? await this.registerSampleFastStartReserve(UU, XU) : await this.addSampleToTrack(UU, XU)
      }
      async addSampleToTrack(UU, XU) {
        if (!this.isFragmented && (UU.samples.push(XU), "reserve" === this.fastStart)) {
          const XU = UU.track.metadata.maximumPacketCount;
          if ((0, FU.J)(void 0 !== XU), UU.samples.length > XU) throw new Error(`Track #${UU.track.id} has already reached the maximum packet count (${XU}). Either add less packets or increase the maximum packet count.`)
        }
        let zU = !1;
        if (UU.currentChunk) {
          UU.currentChunk.startTimestamp = Math.min(UU.currentChunk.startTimestamp, XU.timestamp);
          const cU = XU.timestamp - UU.currentChunk.startTimestamp;
          if (this.isFragmented) {
            const yU = this.trackDatas.every((zU => {
              if (UU === zU) return "key" === XU.type;
              const cU = zU.sampleQueue[0];
              return cU ? "key" === cU.type : zU.closed
            }));
            cU >= this.minimumFragmentDuration && yU && XU.timestamp > this.maxWrittenTimestamp && (zU = !0, await this.finalizeFragment())
          } else zU = cU >= .5
        } else zU = !0;
        zU && (UU.currentChunk && await this.finalizeCurrentChunk(UU), UU.currentChunk = {
          startTimestamp: XU.timestamp,
          samples: [],
          offset: null,
          moofOffset: null,
          trafIndex: null
        }), (0, FU.J)(UU.currentChunk), UU.currentChunk.samples.push(XU), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, XU.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, XU.timestamp + XU.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, XU.timestamp))
      }
      async finalizeCurrentChunk(UU) {
        if ((0, FU.J)(!this.isFragmented), (0, FU.J)(this.writer), !UU.currentChunk) return;
        UU.finalizedChunks.push(UU.currentChunk), this.finalizedChunks.push(UU.currentChunk);
        let XU = UU.currentChunk.samples.length;
        if ("audio" === UU.type && UU.info.requiresPcmTransformation && (XU = UU.currentChunk.samples.reduce(((XU, zU) => XU + Nz(zU.duration, UU.timescale)), 0)), 0 !== UU.compactlyCodedChunkTable.length && (0, FU.kc)(UU.compactlyCodedChunkTable).samplesPerChunk === XU || UU.compactlyCodedChunkTable.push({
            firstChunk: UU.finalizedChunks.length,
            samplesPerChunk: XU
          }), "in-memory" !== this.fastStart) {
          UU.currentChunk.offset = this.writer.getPos();
          for (const XU of UU.currentChunk.samples)(0, FU.J)(XU.data), this.writer.write(XU.data), XU.data = null;
          await this.writer.flush()
        } else UU.currentChunk.offset = 0
      }
      async interleaveSamples() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if ((0, FU.J)(this.isFragmented), UU || this.allTracksAreKnown()) UU: for (;;) {
          let XU = null,
            zU = 1 / 0;
          for (const yU of this.trackDatas) {
            if (!UU && 0 === yU.sampleQueue.length && !yU.closed) break UU;
            yU.sampleQueue.length > 0 && yU.sampleQueue[0].timestamp < zU && (XU = yU, zU = yU.sampleQueue[0].timestamp)
          }
          if (!XU) break;
          const cU = XU.sampleQueue.shift();
          await this.addSampleToTrack(XU, cU)
        }
      }
      async finalizeFragment() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isCmaf;
        if ((0, FU.J)(this.isFragmented), !this.wroteFragmentedHeader) {
          this.wroteFragmentedHeader = !0;
          const UU = this.initBoxWriter ?? this.boxWriter;
          (0, FU.J)(UU), this.formatOptions.onMoov && UU.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
          const XU = sU(this);
          if (UU.writeBox(XU), this.formatOptions.onMoov) {
            const {
              data: XU,
              start: zU
            } = UU.writer.stopTrackingWrites();
            this.formatOptions.onMoov(XU, zU)
          }
          if (this.isCmaf) {
            (0, FU.J)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new GU(this.writer);
            const UU = this.boxWriter.measureBox(MU()),
              XU = this.boxWriter.measureBox(vU(this, 0));
            this.segmentHeaderSize = UU + XU, this.writer.seek(this.segmentHeaderSize)
          }
        }(0, FU.J)(this.writer), (0, FU.J)(this.boxWriter);
        const XU = this.trackDatas.filter((UU => UU.currentChunk));
        if (0 === XU.length) return void(UU && await this.writer.flush());
        const zU = this.nextFragmentNumber++,
          cU = SX(zU, XU),
          yU = this.writer.getPos(),
          QU = yU + this.boxWriter.measureBox(cU);
        let AU = QU + 8,
          oU = 1 / 0;
        for (let IU = 0; IU < XU.length; IU++) {
          const UU = XU[IU];
          (0, FU.J)(UU.currentChunk), (0, FU.J)(null !== UU.startTimestampOffset), UU.currentChunk.offset = AU, UU.currentChunk.moofOffset = yU, UU.currentChunk.trafIndex = IU, UU.currentChunk.startTimestamp -= UU.startTimestampOffset;
          for (const XU of UU.currentChunk.samples) AU += XU.size, XU.timestamp -= UU.startTimestampOffset, XU.decodeTimestamp -= UU.startTimestampOffset;
          oU = Math.min(oU, UU.currentChunk.startTimestamp)
        }
        const DU = AU - QU,
          EU = DU >= 2 ** 32;
        if (EU)
          for (const FU of XU) FU.currentChunk.offset += 8;
        this.formatOptions.onMoof && this.writer.startTrackingWrites();
        const YU = SX(zU, XU);
        if (this.boxWriter.writeBox(YU), this.formatOptions.onMoof) {
          const {
            data: UU,
            start: XU
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMoof(UU, XU, oU)
        }(0, FU.J)(this.writer.getPos() === QU), this.formatOptions.onMdat && this.writer.startTrackingWrites();
        const NU = VU(EU);
        NU.size = DU, this.boxWriter.writeBox(NU), this.writer.seek(QU + (EU ? 16 : 8));
        for (const FU of XU)
          for (const UU of FU.currentChunk.samples) this.writer.write(UU.data), UU.data = null;
        if (this.formatOptions.onMdat) {
          const {
            data: UU,
            start: XU
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMdat(UU, XU)
        }
        for (const FU of XU) FU.finalizedChunks.push(FU.currentChunk), this.finalizedChunks.push(FU.currentChunk), FU.currentChunk = null;
        UU && await this.writer.flush()
      }
      async registerSampleFastStartReserve(UU, XU) {
        this.allTracksAreKnown() ? (this.mdat || await this.createFastStartReserveMdat(), await this.addSampleToTrack(UU, XU)) : UU.sampleQueue.push(XU)
      }
      async createFastStartReserveMdat() {
        (0, FU.J)(this.writer), (0, FU.J)(this.boxWriter), this.ensureOneEnabledTrack();
        const UU = sU(this),
          XU = this.boxWriter.measureBox(UU) + this.computeSampleTableSizeUpperBound() + 4096;
        (0, FU.J)(null !== this.ftypSize), this.writer.seek(this.ftypSize + XU), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = VU(!0), this.boxWriter.writeBox(this.mdat);
        for (const zU of this.trackDatas) {
          for (const UU of zU.sampleQueue) await this.addSampleToTrack(zU, UU);
          zU.sampleQueue.length = 0
        }
      }
      computeSampleTableSizeUpperBound() {
        (0, FU.J)("reserve" === this.fastStart);
        let UU = 0;
        for (const XU of this.trackDatas) {
          const zU = XU.track.metadata.maximumPacketCount;
          (0, FU.J)(void 0 !== zU), UU += 8 * Math.ceil(2 / 3 * zU), UU += 4 * zU, UU += 8 * Math.ceil(2 / 3 * zU), UU += 12 * Math.ceil(2 / 3 * zU), UU += 4 * zU, UU += 8 * zU
        }
        return UU
      }
      async onTrackClose(UU) {
        const XU = await this.mutex.acquire(),
          zU = this.trackDatas.find((XU => XU.track === UU));
        zU && (zU.closed = !0, "subtitle" === zU.type && "webvtt" === UU.source._codec && await this.processWebVTTCues(zU, 1 / 0), this.processTimestamps(zU)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), XU()
      }
      ensureOneEnabledTrack() {
        for (const UU of ["video", "audio", "subtitle"]) {
          const XU = this.trackDatas.filter((XU => XU.type === UU));
          if (0 === XU.length) continue;
          if (!XU.some((UU => !1 !== UU.track.metadata.disposition?.default))) {
            const UU = XU[0];
            UU.track.metadata.disposition = {
              ...UU.track.metadata.disposition,
              default: !0
            }
          }
        }
      }
      async forceFragmentFinalization() {
        (0, FU.J)(this.isFragmented);
        const UU = await this.mutex.acquire();
        try {
          for (const UU of this.trackDatas) "subtitle" === UU.type && "webvtt" === UU.track.source._codec && await this.processWebVTTCues(UU, 1 / 0), this.processTimestamps(UU);
          await this.interleaveSamples(!0), await this.finalizeFragment()
        } finally {
          UU()
        }
      }
      async finalize() {
        const UU = await this.mutex.acquire();
        this.allTracksKnown.resolve(), this.ensureOneEnabledTrack(), this.mdat || "reserve" !== this.fastStart || await this.createFastStartReserveMdat();
        for (const zU of this.trackDatas) zU.closed = !0, "subtitle" === zU.type && "webvtt" === zU.track.source._codec && await this.processWebVTTCues(zU, 1 / 0), this.processTimestamps(zU);
        if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
        else
          for (const zU of this.trackDatas) {
            await this.finalizeCurrentChunk(zU);
            const UU = Iz(zU);
            if (UU > 0) {
              let XU = 0;
              for (const UU of zU.samples) XU += UU.size;
              zU.avgBitrate = Math.round(8 * XU / UU)
            } else zU.avgBitrate = 0;
            let XU = 0,
              cU = 0,
              yU = 0;
            for (let QU = 0; QU < zU.samples.length; QU++) {
              const UU = zU.samples[QU];
              for (cU += UU.size; UU.decodeTimestamp - zU.samples[XU].decodeTimestamp >= 1;) cU -= zU.samples[XU].size, XU++;
              yU = Math.max(yU, cU)
            }
            if (zU.maxBitrate = 8 * yU, null !== zU.startTimestampOffset)
              for (let QU = 0; QU < zU.samples.length; QU++) {
                const UU = zU.samples[QU];
                UU.timestamp -= zU.startTimestampOffset, UU.decodeTimestamp -= zU.startTimestampOffset
              }
          }
        if ((0, FU.J)(this.writer), (0, FU.J)(this.boxWriter), "in-memory" === this.fastStart) {
          let UU;
          this.mdat = VU(!1);
          for (let zU = 0; zU < 2; zU++) {
            const XU = sU(this),
              zU = this.boxWriter.measureBox(XU);
            UU = this.boxWriter.measureBox(this.mdat);
            let cU = this.writer.getPos() + zU + UU;
            for (const yU of this.finalizedChunks) {
              yU.offset = cU;
              for (const {
                  data: XU
                }
                of yU.samples)(0, FU.J)(XU), cU += XU.byteLength, UU += XU.byteLength
            }
            if (cU < 2 ** 32) break;
            UU >= 2 ** 32 && (this.mdat.largeSize = !0)
          }
          this.formatOptions.onMoov && this.writer.startTrackingWrites();
          const XU = sU(this);
          if (this.boxWriter.writeBox(XU), this.formatOptions.onMoov) {
            const {
              data: UU,
              start: XU
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(UU, XU)
          }
          this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat.size = UU, this.boxWriter.writeBox(this.mdat);
          for (const zU of this.finalizedChunks)
            for (const UU of zU.samples)(0, FU.J)(UU.data), this.writer.write(UU.data), UU.data = null;
          if (this.formatOptions.onMdat) {
            const {
              data: UU,
              start: XU
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(UU, XU)
          }
        } else if (this.isFragmented)
          if (this.isCmaf) {
            const UU = null !== this.segmentHeaderSize ? this.writer.getPos() - this.segmentHeaderSize : 0;
            this.writer.seek(0), this.boxWriter.writeBox(MU()), this.boxWriter.writeBox(vU(this, UU))
          } else {
            const UU = this.writer.getPos(),
              zU = (XU = this.trackDatas, iU("mfra", void 0, [...XU.map(vX), VX()]));
            this.boxWriter.writeBox(zU);
            const cU = this.writer.getPos() - UU;
            this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(cU)
          }
        else {
          (0, FU.J)(this.mdat);
          const UU = this.boxWriter.offsets.get(this.mdat);
          (0, FU.J)(void 0 !== UU);
          const XU = this.writer.getPos() - UU;
          if (this.mdat.size = XU, this.mdat.largeSize = XU >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.formatOptions.onMdat) {
            const {
              data: UU,
              start: XU
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(UU, XU)
          }
          const zU = sU(this);
          if ("reserve" === this.fastStart) {
            (0, FU.J)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(zU);
            const UU = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
            this.boxWriter.writeBox({
              type: "free",
              size: UU
            })
          } else this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(zU);
          if (this.formatOptions.onMoov) {
            const {
              data: UU,
              start: XU
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(UU, XU)
          }
        }
        var XU;
        UU()
      }
    }
    class az {
      constructor(UU) {
        this.value = UU
      }
    }
    class tz {
      constructor(UU) {
        this.value = UU
      }
    }
    class gz {
      constructor(UU) {
        this.value = UU
      }
    }
    class kz {
      constructor(UU) {
        this.value = UU
      }
    }
    var Gz;
    ! function(UU) {
      UU[UU.EBML = 440786851] = "EBML", UU[UU.EBMLVersion = 17030] = "EBMLVersion", UU[UU.EBMLReadVersion = 17143] = "EBMLReadVersion", UU[UU.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", UU[UU.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", UU[UU.DocType = 17026] = "DocType", UU[UU.DocTypeVersion = 17031] = "DocTypeVersion", UU[UU.DocTypeReadVersion = 17029] = "DocTypeReadVersion", UU[UU.Void = 236] = "Void", UU[UU.Segment = 408125543] = "Segment", UU[UU.SeekHead = 290298740] = "SeekHead", UU[UU.Seek = 19899] = "Seek", UU[UU.SeekID = 21419] = "SeekID", UU[UU.SeekPosition = 21420] = "SeekPosition", UU[UU.Duration = 17545] = "Duration", UU[UU.Info = 357149030] = "Info", UU[UU.TimestampScale = 2807729] = "TimestampScale", UU[UU.MuxingApp = 19840] = "MuxingApp", UU[UU.WritingApp = 22337] = "WritingApp", UU[UU.Tracks = 374648427] = "Tracks", UU[UU.TrackEntry = 174] = "TrackEntry", UU[UU.TrackNumber = 215] = "TrackNumber", UU[UU.TrackUID = 29637] = "TrackUID", UU[UU.TrackType = 131] = "TrackType", UU[UU.FlagEnabled = 185] = "FlagEnabled", UU[UU.FlagDefault = 136] = "FlagDefault", UU[UU.FlagForced = 21930] = "FlagForced", UU[UU.FlagOriginal = 21934] = "FlagOriginal", UU[UU.FlagHearingImpaired = 21931] = "FlagHearingImpaired", UU[UU.FlagVisualImpaired = 21932] = "FlagVisualImpaired", UU[UU.FlagCommentary = 21935] = "FlagCommentary", UU[UU.FlagLacing = 156] = "FlagLacing", UU[UU.Name = 21358] = "Name", UU[UU.Language = 2274716] = "Language", UU[UU.LanguageBCP47 = 2274717] = "LanguageBCP47", UU[UU.CodecID = 134] = "CodecID", UU[UU.CodecPrivate = 25506] = "CodecPrivate", UU[UU.CodecDelay = 22186] = "CodecDelay", UU[UU.SeekPreRoll = 22203] = "SeekPreRoll", UU[UU.DefaultDuration = 2352003] = "DefaultDuration", UU[UU.Video = 224] = "Video", UU[UU.PixelWidth = 176] = "PixelWidth", UU[UU.PixelHeight = 186] = "PixelHeight", UU[UU.DisplayWidth = 21680] = "DisplayWidth", UU[UU.DisplayHeight = 21690] = "DisplayHeight", UU[UU.DisplayUnit = 21682] = "DisplayUnit", UU[UU.AlphaMode = 21440] = "AlphaMode", UU[UU.Audio = 225] = "Audio", UU[UU.SamplingFrequency = 181] = "SamplingFrequency", UU[UU.Channels = 159] = "Channels", UU[UU.BitDepth = 25188] = "BitDepth", UU[UU.SimpleBlock = 163] = "SimpleBlock", UU[UU.BlockGroup = 160] = "BlockGroup", UU[UU.Block = 161] = "Block", UU[UU.BlockAdditions = 30113] = "BlockAdditions", UU[UU.BlockMore = 166] = "BlockMore", UU[UU.BlockAdditional = 165] = "BlockAdditional", UU[UU.BlockAddID = 238] = "BlockAddID", UU[UU.BlockDuration = 155] = "BlockDuration", UU[UU.ReferenceBlock = 251] = "ReferenceBlock", UU[UU.Cluster = 524531317] = "Cluster", UU[UU.Timestamp = 231] = "Timestamp", UU[UU.Cues = 475249515] = "Cues", UU[UU.CuePoint = 187] = "CuePoint", UU[UU.CueTime = 179] = "CueTime", UU[UU.CueTrackPositions = 183] = "CueTrackPositions", UU[UU.CueTrack = 247] = "CueTrack", UU[UU.CueClusterPosition = 241] = "CueClusterPosition", UU[UU.Colour = 21936] = "Colour", UU[UU.MatrixCoefficients = 21937] = "MatrixCoefficients", UU[UU.TransferCharacteristics = 21946] = "TransferCharacteristics", UU[UU.Primaries = 21947] = "Primaries", UU[UU.Range = 21945] = "Range", UU[UU.Projection = 30320] = "Projection", UU[UU.ProjectionType = 30321] = "ProjectionType", UU[UU.ProjectionPoseYaw = 30323] = "ProjectionPoseYaw", UU[UU.ProjectionPosePitch = 30324] = "ProjectionPosePitch", UU[UU.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", UU[UU.Attachments = 423732329] = "Attachments", UU[UU.AttachedFile = 24999] = "AttachedFile", UU[UU.FileDescription = 18046] = "FileDescription", UU[UU.FileName = 18030] = "FileName", UU[UU.FileMediaType = 18016] = "FileMediaType", UU[UU.FileData = 18012] = "FileData", UU[UU.FileUID = 18094] = "FileUID", UU[UU.Chapters = 272869232] = "Chapters", UU[UU.Tags = 307544935] = "Tags", UU[UU.Tag = 29555] = "Tag", UU[UU.Targets = 25536] = "Targets", UU[UU.TargetTypeValue = 26826] = "TargetTypeValue", UU[UU.TargetType = 25546] = "TargetType", UU[UU.TagTrackUID = 25541] = "TagTrackUID", UU[UU.TagEditionUID = 25545] = "TagEditionUID", UU[UU.TagChapterUID = 25540] = "TagChapterUID", UU[UU.TagAttachmentUID = 25542] = "TagAttachmentUID", UU[UU.SimpleTag = 26568] = "SimpleTag", UU[UU.TagName = 17827] = "TagName", UU[UU.TagLanguage = 17530] = "TagLanguage", UU[UU.TagString = 17543] = "TagString", UU[UU.TagBinary = 17541] = "TagBinary", UU[UU.ContentEncodings = 28032] = "ContentEncodings", UU[UU.ContentEncoding = 25152] = "ContentEncoding", UU[UU.ContentEncodingOrder = 20529] = "ContentEncodingOrder", UU[UU.ContentEncodingScope = 20530] = "ContentEncodingScope", UU[UU.ContentCompression = 20532] = "ContentCompression", UU[UU.ContentCompAlgo = 16980] = "ContentCompAlgo", UU[UU.ContentCompSettings = 16981] = "ContentCompSettings", UU[UU.ContentEncryption = 20533] = "ContentEncryption"
    }(Gz || (Gz = {}));
    Gz.EBML, Gz.Segment, Gz.SeekHead, Gz.Info, Gz.Cluster, Gz.Tracks, Gz.Cues, Gz.Attachments, Gz.Chapters, Gz.Tags;
    const Bz = UU => UU < 256 ? 1 : UU < 65536 ? 2 : UU < 1 << 24 ? 3 : UU < 2 ** 32 ? 4 : UU < 2 ** 40 ? 5 : 6,
      Zz = UU => UU < 256n ? 1 : UU < 65536n ? 2 : UU < 1n << 24n ? 3 : UU < 1n << 32n ? 4 : UU < 1n << 40n ? 5 : UU < 1n << 48n ? 6 : UU < 1n << 56n ? 7 : 8,
      Rz = UU => UU >= -64 && UU < 64 ? 1 : UU >= -8192 && UU < 8192 ? 2 : UU >= -1048576 && UU < 1 << 20 ? 3 : UU >= -(1 << 27) && UU < 1 << 27 ? 4 : UU >= -(2 ** 34) && UU < 2 ** 34 ? 5 : 6;
    class Pz {
      constructor(UU) {
        this.writer = UU, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap, this.dataOffsets = new WeakMap
      }
      writeByte(UU) {
        this.helperView.setUint8(0, UU), this.writer.write(this.helper.subarray(0, 1))
      }
      writeFloat32(UU) {
        this.helperView.setFloat32(0, UU, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeFloat64(UU) {
        this.helperView.setFloat64(0, UU, !1), this.writer.write(this.helper)
      }
      writeUnsignedInt(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bz(UU),
          zU = 0;
        switch (XU) {
          case 6:
            this.helperView.setUint8(zU++, UU / 2 ** 40 | 0);
          case 5:
            this.helperView.setUint8(zU++, UU / 2 ** 32 | 0);
          case 4:
            this.helperView.setUint8(zU++, UU >> 24);
          case 3:
            this.helperView.setUint8(zU++, UU >> 16);
          case 2:
            this.helperView.setUint8(zU++, UU >> 8);
          case 1:
            this.helperView.setUint8(zU++, UU);
            break;
          default:
            throw new Error("Bad unsigned int size " + XU)
        }
        this.writer.write(this.helper.subarray(0, zU))
      }
      writeUnsignedBigInt(UU) {
        let XU = 0;
        for (let zU = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zz(UU)) - 1; zU >= 0; zU--) this.helperView.setUint8(XU++, Number(UU >> BigInt(8 * zU) & 0xffn));
        this.writer.write(this.helper.subarray(0, XU))
      }
      writeSignedInt(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rz(UU);
        UU < 0 && (UU += 2 ** (8 * XU)), this.writeUnsignedInt(UU, XU)
      }
      writeVarInt(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (UU => {
            if (UU < 127) return 1;
            if (UU < 16383) return 2;
            if (UU < 2097151) return 3;
            if (UU < 268435455) return 4;
            if (UU < 2 ** 35 - 1) return 5;
            if (UU < 2 ** 42 - 1) return 6;
            throw new Error("EBML varint size not supported " + UU)
          })(UU),
          zU = 0;
        switch (XU) {
          case 1:
            this.helperView.setUint8(zU++, 128 | UU);
            break;
          case 2:
            this.helperView.setUint8(zU++, 64 | UU >> 8), this.helperView.setUint8(zU++, UU);
            break;
          case 3:
            this.helperView.setUint8(zU++, 32 | UU >> 16), this.helperView.setUint8(zU++, UU >> 8), this.helperView.setUint8(zU++, UU);
            break;
          case 4:
            this.helperView.setUint8(zU++, 16 | UU >> 24), this.helperView.setUint8(zU++, UU >> 16), this.helperView.setUint8(zU++, UU >> 8), this.helperView.setUint8(zU++, UU);
            break;
          case 5:
            this.helperView.setUint8(zU++, 8 | UU / 2 ** 32 & 7), this.helperView.setUint8(zU++, UU >> 24), this.helperView.setUint8(zU++, UU >> 16), this.helperView.setUint8(zU++, UU >> 8), this.helperView.setUint8(zU++, UU);
            break;
          case 6:
            this.helperView.setUint8(zU++, 4 | UU / 2 ** 40 & 3), this.helperView.setUint8(zU++, UU / 2 ** 32 | 0), this.helperView.setUint8(zU++, UU >> 24), this.helperView.setUint8(zU++, UU >> 16), this.helperView.setUint8(zU++, UU >> 8), this.helperView.setUint8(zU++, UU);
            break;
          default:
            throw new Error("Bad EBML varint size " + XU)
        }
        this.writer.write(this.helper.subarray(0, zU))
      }
      writeAsciiString(UU) {
        this.writer.write(new Uint8Array(UU.split("").map((UU => UU.charCodeAt(0)))))
      }
      writeEBML(UU) {
        if (null !== UU)
          if (UU instanceof Uint8Array) this.writer.write(UU);
          else if (Array.isArray(UU))
          for (const XU of UU) this.writeEBML(XU);
        else if (this.offsets.set(UU, this.writer.getPos()), this.writeUnsignedInt(UU.id), Array.isArray(UU.data)) {
          const XU = this.writer.getPos(),
            zU = -1 === UU.size ? 1 : UU.size ?? 4; - 1 === UU.size ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + zU);
          const cU = this.writer.getPos();
          if (this.dataOffsets.set(UU, cU), this.writeEBML(UU.data), -1 !== UU.size) {
            const UU = this.writer.getPos() - cU,
              yU = this.writer.getPos();
            this.writer.seek(XU), this.writeVarInt(UU, zU), this.writer.seek(yU)
          }
        } else if ("number" === typeof UU.data) {
          const XU = UU.size ?? Bz(UU.data);
          this.writeVarInt(XU), this.writeUnsignedInt(UU.data, XU)
        } else if ("bigint" === typeof UU.data) {
          const XU = UU.size ?? Zz(UU.data);
          this.writeVarInt(XU), this.writeUnsignedBigInt(UU.data, XU)
        } else if ("string" === typeof UU.data) this.writeVarInt(UU.data.length), this.writeAsciiString(UU.data);
        else if (UU.data instanceof Uint8Array) this.writeVarInt(UU.data.byteLength, UU.size), this.writer.write(UU.data);
        else if (UU.data instanceof az) this.writeVarInt(4), this.writeFloat32(UU.data.value);
        else if (UU.data instanceof tz) this.writeVarInt(8), this.writeFloat64(UU.data.value);
        else if (UU.data instanceof gz) {
          const XU = UU.size ?? Rz(UU.data.value);
          this.writeVarInt(XU), this.writeSignedInt(UU.data.value, XU)
        } else if (UU.data instanceof kz) {
          const XU = FU.hd.encode(UU.data.value);
          this.writeVarInt(XU.length), this.writer.write(XU)
        } else(0, FU.H)(UU.data)
      }
    }
    const Wz = {
      avc: "V_MPEG4/ISO/AVC",
      hevc: "V_MPEGH/ISO/HEVC",
      vp8: "V_VP8",
      vp9: "V_VP9",
      av1: "V_AV1",
      prores: "V_PRORES",
      aac: "A_AAC",
      mp3: "A_MPEG/L3",
      opus: "A_OPUS",
      vorbis: "A_VORBIS",
      flac: "A_FLAC",
      ac3: "A_AC3",
      eac3: "A_EAC3",
      dts: "A_DTS",
      "pcm-u8": "A_PCM/INT/LIT",
      "pcm-s16": "A_PCM/INT/LIT",
      "pcm-s16be": "A_PCM/INT/BIG",
      "pcm-s24": "A_PCM/INT/LIT",
      "pcm-s24be": "A_PCM/INT/BIG",
      "pcm-s32": "A_PCM/INT/LIT",
      "pcm-s32be": "A_PCM/INT/BIG",
      "pcm-f32": "A_PCM/FLOAT/IEEE",
      "pcm-f64": "A_PCM/FLOAT/IEEE",
      webvtt: "S_TEXT/WEBVTT"
    };
    const dz = {
      video: 1,
      audio: 2,
      subtitle: 17
    };
    class Lz extends pU {
      constructor(UU, XU) {
        super(UU), this.trackDatas = [], this.allTracksKnown = (0, FU.Gc)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = new Map, this.startTimestamp = 1 / 0, this.endTimestamp = -1 / 0, this.warnedAboutTooNegativeTimestamp = !1, this.format = XU
      }
      async start() {
        const UU = await this.mutex.acquire();
        this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new Pz(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush();
        for (const XU of this.output.tracks) XU.isVideoTrack() && XU.metadata.decoderConfig ? this.getVideoTrackData(XU, XU.metadata.primingPacket ?? null, {
          decoderConfig: XU.metadata.decoderConfig
        }) : XU.isAudioTrack() && XU.metadata.decoderConfig && this.getAudioTrackData(XU, XU.metadata.primingPacket ?? null, {
          decoderConfig: XU.metadata.decoderConfig
        });
        UU()
      }
      writeEBMLHeader() {
        this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
        const UU = {
          id: Gz.EBML,
          data: [{
            id: Gz.EBMLVersion,
            data: 1
          }, {
            id: Gz.EBMLReadVersion,
            data: 1
          }, {
            id: Gz.EBMLMaxIDLength,
            data: 4
          }, {
            id: Gz.EBMLMaxSizeLength,
            data: 8
          }, {
            id: Gz.DocType,
            data: this.format instanceof Mz ? "webm" : "matroska"
          }, {
            id: Gz.DocTypeVersion,
            data: 4
          }, {
            id: Gz.DocTypeReadVersion,
            data: 2
          }]
        };
        if (this.ebmlWriter.writeEBML(UU), this.format._options.onEbmlHeader) {
          const {
            data: UU,
            start: XU
          } = this.writer.stopTrackingWrites();
          this.format._options.onEbmlHeader(UU, XU)
        }
      }
      maybeCreateSeekHead(UU) {
        if (this.format._options.appendOnly) return;
        const XU = new Uint8Array([28, 83, 187, 107]),
          zU = new Uint8Array([21, 73, 169, 102]),
          cU = new Uint8Array([22, 84, 174, 107]),
          yU = new Uint8Array([25, 65, 164, 105]),
          QU = new Uint8Array([18, 84, 195, 103]),
          AU = {
            id: Gz.SeekHead,
            data: [{
              id: Gz.Seek,
              data: [{
                id: Gz.SeekID,
                data: zU
              }, {
                id: Gz.SeekPosition,
                size: 5,
                data: UU ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
              }]
            }, {
              id: Gz.Seek,
              data: [{
                id: Gz.SeekID,
                data: cU
              }, {
                id: Gz.SeekPosition,
                size: 5,
                data: UU ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
              }]
            }, this.attachmentsElement ? {
              id: Gz.Seek,
              data: [{
                id: Gz.SeekID,
                data: yU
              }, {
                id: Gz.SeekPosition,
                size: 5,
                data: UU ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
              }]
            } : null, this.tagsElement ? {
              id: Gz.Seek,
              data: [{
                id: Gz.SeekID,
                data: QU
              }, {
                id: Gz.SeekPosition,
                size: 5,
                data: UU ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
              }]
            } : null, {
              id: Gz.Seek,
              data: [{
                id: Gz.SeekID,
                data: XU
              }, {
                id: Gz.SeekPosition,
                size: 5,
                data: UU ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
              }]
            }]
          };
        this.seekHead = AU
      }
      createSegmentInfo() {
        const UU = {
          id: Gz.Duration,
          data: new tz(0)
        };
        this.segmentDuration = UU;
        const XU = {
          id: Gz.Info,
          data: [{
            id: Gz.TimestampScale,
            data: 1e6
          }, {
            id: Gz.MuxingApp,
            data: kU.e
          }, {
            id: Gz.WritingApp,
            data: kU.e
          }, this.format._options.appendOnly ? null : UU]
        };
        this.segmentInfo = XU
      }
      createTracks() {
        const UU = {
          id: Gz.Tracks,
          data: []
        };
        this.tracksElement = UU;
        for (const XU of this.trackDatas) {
          let zU = Wz[XU.track.source._codec];
          (0, FU.J)(zU), "audio" === XU.type && "dts" === XU.track.source._codec && ("dtse" === XU.info.decoderConfig.codec ? zU = "A_DTS/EXPRESS" : "dtsl" === XU.info.decoderConfig.codec && (zU = "A_DTS/LOSSLESS"));
          let cU = 0;
          if ("audio" === XU.type && "opus" === XU.track.source._codec) {
            cU = 8e7;
            const UU = XU.info.decoderConfig.description;
            if (UU) {
              const XU = (0, FU.md)(UU),
                zU = (0, aU.rb)(XU);
              cU = Math.round(zU.preSkip / yU.o * 1e9)
            }
          }
          UU.data.push({
            id: Gz.TrackEntry,
            data: [{
              id: Gz.TrackNumber,
              data: XU.track.id
            }, {
              id: Gz.TrackUID,
              data: XU.track.id
            }, {
              id: Gz.TrackType,
              data: dz[XU.type]
            }, !1 === XU.track.metadata.disposition?.default ? {
              id: Gz.FlagDefault,
              data: 0
            } : null, XU.track.metadata.disposition?.forced ? {
              id: Gz.FlagForced,
              data: 1
            } : null, XU.track.metadata.disposition?.hearingImpaired ? {
              id: Gz.FlagHearingImpaired,
              data: 1
            } : null, XU.track.metadata.disposition?.visuallyImpaired ? {
              id: Gz.FlagVisualImpaired,
              data: 1
            } : null, XU.track.metadata.disposition?.original ? {
              id: Gz.FlagOriginal,
              data: 1
            } : null, XU.track.metadata.disposition?.commentary ? {
              id: Gz.FlagCommentary,
              data: 1
            } : null, {
              id: Gz.FlagLacing,
              data: 0
            }, {
              id: Gz.Language,
              data: XU.track.metadata.languageCode ?? FU.y
            }, {
              id: Gz.CodecID,
              data: zU
            }, XU.codecPrivate ? {
              id: Gz.CodecPrivate,
              data: (0, FU.md)(XU.codecPrivate)
            } : null, cU > 0 ? {
              id: Gz.SeekPreRoll,
              data: cU
            } : null, void 0 !== XU.track.metadata.name ? {
              id: Gz.Name,
              data: new kz(XU.track.metadata.name)
            } : null, "video" === XU.type ? this.videoSpecificTrackInfo(XU) : null, "audio" === XU.type ? this.audioSpecificTrackInfo(XU) : null, "subtitle" === XU.type ? this.subtitleSpecificTrackInfo(XU) : null]
          })
        }
      }
      videoSpecificTrackInfo(UU) {
        const {
          frameRate: XU,
          transformationMatrix: zU
        } = UU.track.metadata, cU = [XU ? {
          id: Gz.DefaultDuration,
          data: 1e9 / XU
        } : null];
        let yU, QU, AU;
        if (zU) {
          yU = (0, FU.qb)(zU);
          const UU = (0, FU.wc)((0, FU.Lc)(-yU), zU);
          QU = Math.sign(UU[0]), AU = Math.sign(UU[4]), -1 === AU && (AU = 1, QU = -QU, yU = (0, FU.yc)(yU + 180))
        } else yU = UU.track.metadata.rotation ?? 0, QU = UU.track.metadata.flip ? -1 : 1, AU = 1;
        const oU = yU ? (0, FU.yc)(-1 === QU ? yU : -yU) : 0,
          DU = Math.round(Math.acos(QU) * FU.o),
          EU = Math.round(Math.acos(AU) * FU.o),
          YU = !!UU.info.aspectRatio && UU.info.aspectRatio.num * UU.info.height !== UU.info.aspectRatio.den * UU.info.width,
          NU = UU.info.decoderConfig.colorSpace,
          IU = {
            id: Gz.Video,
            data: [{
              id: Gz.PixelWidth,
              data: UU.info.width
            }, {
              id: Gz.PixelHeight,
              data: UU.info.height
            }, YU ? {
              id: Gz.DisplayWidth,
              data: UU.info.aspectRatio.num
            } : null, YU ? {
              id: Gz.DisplayHeight,
              data: UU.info.aspectRatio.den
            } : null, YU ? {
              id: Gz.DisplayUnit,
              data: 3
            } : null, UU.info.alphaMode ? {
              id: Gz.AlphaMode,
              data: 1
            } : null, (0, FU.hb)(NU) ? null : {
              id: Gz.Colour,
              data: [{
                id: Gz.MatrixCoefficients,
                data: null != NU?.matrix ? FU.l[NU.matrix] : 2
              }, {
                id: Gz.TransferCharacteristics,
                data: null != NU?.transfer ? FU.v[NU.transfer] : 2
              }, {
                id: Gz.Primaries,
                data: null != NU?.primaries ? FU.c[NU.primaries] : 2
              }, {
                id: Gz.Range,
                data: null != NU?.fullRange ? NU.fullRange ? 2 : 1 : 0
              }]
            }, oU || DU || EU ? {
              id: Gz.Projection,
              data: [{
                id: Gz.ProjectionType,
                data: 0
              }, DU ? {
                id: Gz.ProjectionPoseYaw,
                data: new az(DU)
              } : null, EU ? {
                id: Gz.ProjectionPosePitch,
                data: new az(EU)
              } : null, oU ? {
                id: Gz.ProjectionPoseRoll,
                data: new az((oU + 180) % 360 - 180)
              } : null]
            } : null]
          };
        return cU.push(IU), cU
      }
      audioSpecificTrackInfo(UU) {
        const XU = yU.r.includes(UU.track.source._codec) ? (0, yU.R)(UU.track.source._codec) : null;
        return [{
          id: Gz.Audio,
          data: [{
            id: Gz.SamplingFrequency,
            data: new az(UU.info.sampleRate)
          }, {
            id: Gz.Channels,
            data: UU.info.numberOfChannels
          }, XU ? {
            id: Gz.BitDepth,
            data: 8 * XU.sampleSize
          } : null]
        }]
      }
      subtitleSpecificTrackInfo(UU) {
        return []
      }
      maybeCreateTags() {
        const UU = [],
          XU = (XU, zU) => {
            UU.push({
              id: Gz.SimpleTag,
              data: [{
                id: Gz.TagName,
                data: new kz(XU)
              }, "string" === typeof zU ? {
                id: Gz.TagString,
                data: new kz(zU)
              } : {
                id: Gz.TagBinary,
                data: zU
              }]
            })
          },
          zU = this.output._metadataTags,
          cU = new Set;
        for (const {
            key: yU,
            value: QU
          }
          of(0, FU.gc)(zU)) switch (yU) {
          case "title":
            XU("TITLE", QU), cU.add("TITLE");
            break;
          case "description":
            XU("DESCRIPTION", QU), cU.add("DESCRIPTION");
            break;
          case "artist":
            XU("ARTIST", QU), cU.add("ARTIST");
            break;
          case "album":
            XU("ALBUM", QU), cU.add("ALBUM");
            break;
          case "albumArtist":
            XU("ALBUM_ARTIST", QU), cU.add("ALBUM_ARTIST");
            break;
          case "genre":
            XU("GENRE", QU), cU.add("GENRE");
            break;
          case "beatsPerMinute":
            XU("BPM", QU.toString()), cU.add("BPM");
            break;
          case "comment":
            XU("COMMENT", QU), cU.add("COMMENT");
            break;
          case "lyrics":
            XU("LYRICS", QU), cU.add("LYRICS");
            break;
          case "date":
            XU("DATE", QU.toISOString().slice(0, 10)), cU.add("DATE");
            break;
          case "trackNumber":
            XU("PART_NUMBER", void 0 !== zU.tracksTotal ? `${QU}/${zU.tracksTotal}` : QU.toString()), cU.add("PART_NUMBER");
            break;
          case "discNumber":
            XU("DISC", void 0 !== zU.discsTotal ? `${QU}/${zU.discsTotal}` : QU.toString()), cU.add("DISC");
            break;
          case "tracksTotal":
          case "discsTotal":
          case "images":
          case "raw":
            break;
          default:
            (0, FU.H)(yU)
        }
        if (zU.raw)
          for (const yU in zU.raw) {
            const UU = zU.raw[yU];
            null == UU || cU.has(yU) || ("string" === typeof UU || UU instanceof Uint8Array) && XU(yU, UU)
          }
        0 !== UU.length && (this.tagsElement = {
          id: Gz.Tags,
          data: [{
            id: Gz.Tag,
            data: [{
              id: Gz.Targets,
              data: [{
                id: Gz.TargetTypeValue,
                data: 50
              }, {
                id: Gz.TargetType,
                data: "MOVIE"
              }]
            }, ...UU]
          }]
        })
      }
      maybeCreateAttachments() {
        const UU = this.output._metadataTags,
          XU = [],
          zU = new Set,
          cU = UU.images ?? [];
        for (const yU of cU) {
          let UU, cU = yU.name;
          if (void 0 === cU) {
            cU = ("coverFront" === yU.kind ? "cover" : "coverBack" === yU.kind ? "back" : "image") + ((0, FU.Ab)(yU.mimeType) ?? "")
          }
          for (;;) {
            UU = 0n;
            for (let XU = 0; XU < 8; XU++) UU <<= 8n, UU |= BigInt(Math.floor(256 * Math.random()));
            if (0n !== UU && !zU.has(UU)) break
          }
          zU.add(UU), XU.push({
            id: Gz.AttachedFile,
            data: [void 0 !== yU.description ? {
              id: Gz.FileDescription,
              data: new kz(yU.description)
            } : null, {
              id: Gz.FileName,
              data: new kz(cU)
            }, {
              id: Gz.FileMediaType,
              data: yU.mimeType
            }, {
              id: Gz.FileData,
              data: yU.data
            }, {
              id: Gz.FileUID,
              data: UU
            }]
          })
        }
        for (const [yU, QU] of Object.entries(UU.raw ?? {})) {
          if (!(QU instanceof IU.d)) continue;
          /^\d+$/.test(yU) && (cU.find((UU => UU.mimeType === QU.mimeType && (0, FU.qd)(UU.data, QU.data))) || XU.push({
            id: Gz.AttachedFile,
            data: [void 0 !== QU.description ? {
              id: Gz.FileDescription,
              data: new kz(QU.description)
            } : null, {
              id: Gz.FileName,
              data: new kz(QU.name ?? "")
            }, {
              id: Gz.FileMediaType,
              data: QU.mimeType ?? ""
            }, {
              id: Gz.FileData,
              data: QU.data
            }, {
              id: Gz.FileUID,
              data: BigInt(yU)
            }]
          }))
        }
        0 !== XU.length && (this.attachmentsElement = {
          id: Gz.Attachments,
          data: XU
        })
      }
      createSegment() {
        this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
        const UU = {
          id: Gz.Segment,
          size: this.format._options.appendOnly ? -1 : 6,
          data: [this.seekHead, this.segmentInfo, this.tracksElement, this.attachmentsElement, this.tagsElement]
        };
        if (this.segment = UU, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(UU), this.format._options.onSegmentHeader) {
          const {
            data: UU,
            start: XU
          } = this.writer.stopTrackingWrites();
          this.format._options.onSegmentHeader(UU, XU)
        }
      }
      createCues() {
        this.cues = {
          id: Gz.Cues,
          data: []
        }
      }
      get segmentDataOffset() {
        return (0, FU.J)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
      }
      allTracksAreKnown() {
        for (const UU of this.output.tracks)
          if (!UU.source._closed && !this.trackDatas.some((XU => XU.track === UU))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const UU = this.trackDatas.map((UU => {
          if ("video" === UU.type) return UU.info.decoderConfig.codec;
          if ("audio" === UU.type) return UU.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [UU.track.source._codec]
        }));
        return (UU => {
          let XU = (UU.hasVideo ? "video/" : UU.hasAudio ? "audio/" : "application/") + (UU.isWebM ? "webm" : "x-matroska");
          UU.codecStrings.length > 0 && (XU += `; codecs="${[...new Set(UU.codecStrings.filter(Boolean))].join(", ")}"`);
          return XU
        })({
          isWebM: this.format instanceof Mz,
          hasVideo: this.trackDatas.some((UU => "video" === UU.type)),
          hasAudio: this.trackDatas.some((UU => "audio" === UU.type)),
          codecStrings: UU
        })
      }
      getVideoTrackData(UU, XU, zU) {
        const cU = this.trackDatas.find((XU => XU.track === UU));
        if (cU) return cU;
        (0, yU.V)(zU, UU.source._codec), (0, FU.J)(zU), (0, FU.J)(zU.decoderConfig), (0, FU.J)(void 0 !== zU.decoderConfig.codedWidth), (0, FU.J)(void 0 !== zU.decoderConfig.codedHeight);
        const QU = zU.decoderConfig.displayAspectWidth,
          AU = zU.decoderConfig.displayAspectHeight,
          oU = void 0 === QU || void 0 === AU ? null : (0, FU.cd)({
            num: QU,
            den: AU
          }),
          DU = {
            track: UU,
            type: "video",
            info: {
              width: zU.decoderConfig.codedWidth,
              height: zU.decoderConfig.codedHeight,
              aspectRatio: oU,
              decoderConfig: zU.decoderConfig,
              alphaMode: UU.metadata.canBeTransparent || (XU ? !!XU.sideData.alpha : null)
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null,
            codecPrivate: zU.decoderConfig.description ?? null,
            closed: !1
          };
        return "vp9" === UU.source._codec ? DU.codecPrivate = new Uint8Array((0, yU.K)(DU.info.decoderConfig.codec)) : "av1" === UU.source._codec ? DU.codecPrivate = new Uint8Array((0, yU.G)(DU.info.decoderConfig.codec)) : "prores" === UU.source._codec && (DU.codecPrivate = FU.hd.encode(zU.decoderConfig.codec)), this.trackDatas.push(DU), this.trackDatas.sort(((UU, XU) => UU.track.id - XU.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), DU
      }
      getAudioTrackData(UU, XU, zU) {
        const QU = this.trackDatas.find((XU => XU.track === UU));
        if (QU) return QU;
        (0, yU.S)(zU, UU.source._codec), (0, FU.J)(zU), (0, FU.J)(zU.decoderConfig);
        const AU = {
          ...zU.decoderConfig
        };
        let DU = !1;
        if ("aac" === UU.source._codec && !AU.description) {
          if (!XU) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const UU = Dz(oU.tempFromBytes(XU.data));
          if (!UU) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const zU = cU.e[UU.samplingFrequencyIndex],
            yU = cU.d[UU.channelConfiguration];
          if (void 0 === zU || void 0 === yU) throw new Error("Invalid ADTS frame header.");
          AU.description = (0, cU.h)({
            objectType: UU.objectType,
            outputSampleRate: zU,
            outputNumberOfChannels: yU
          }), DU = !0
        }
        const EU = {
          track: UU,
          type: "audio",
          info: {
            numberOfChannels: zU.decoderConfig.numberOfChannels,
            sampleRate: zU.decoderConfig.sampleRate,
            decoderConfig: AU,
            requiresAdtsStripping: DU
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: AU.description ?? null,
          closed: !1
        };
        return this.trackDatas.push(EU), this.trackDatas.sort(((UU, XU) => UU.track.id - XU.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), EU
      }
      getSubtitleTrackData(UU, XU) {
        const zU = this.trackDatas.find((XU => XU.track === UU));
        if (zU) return zU;
        (0, yU.U)(XU), (0, FU.J)(XU), (0, FU.J)(XU.config);
        const cU = {
          track: UU,
          type: "subtitle",
          info: {
            config: XU.config
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: FU.hd.encode(XU.config.description),
          closed: !1
        };
        return this.trackDatas.push(cU), this.trackDatas.sort(((UU, XU) => UU.track.id - XU.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), cU
      }
      async addEncodedVideoPacket(UU, XU, zU) {
        const cU = await this.mutex.acquire();
        try {
          const cU = this.getVideoTrackData(UU, XU, zU);
          cU.info.alphaMode ??= !!XU.sideData.alpha;
          let yU = XU.data;
          if ("prores" === UU.source._codec) {
            if (yU.byteLength < 8) throw new Error("ProRes packet too small, expected at least 8 bytes.");
            yU = yU.subarray(8)
          }
          const QU = "key" === XU.type;
          this.validateTimestamp(cU.track, XU.timestamp, QU);
          let AU = XU.timestamp,
            oU = XU.duration;
          void 0 !== UU.metadata.frameRate && (AU = (0, FU.Nc)(AU, UU.metadata.frameRate), oU = (0, FU.Nc)(oU, UU.metadata.frameRate));
          const DU = cU.info.alphaMode ? XU.sideData.alpha ?? null : null,
            EU = this.createInternalChunk(yU, AU, oU, XU.type, DU);
          "vp9" === UU.source._codec && this.fixVP9ColorSpace(cU, EU), cU.chunkQueue.push(EU), await this.interleaveChunks()
        } finally {
          cU()
        }
      }
      async addEncodedAudioPacket(UU, XU, zU) {
        const cU = await this.mutex.acquire();
        try {
          const cU = this.getAudioTrackData(UU, XU, zU);
          let yU = XU.data;
          if (cU.info.requiresAdtsStripping) {
            const UU = Dz(oU.tempFromBytes(yU));
            if (!UU) throw new Error("Expected ADTS frame, didn't get one.");
            const XU = null === UU.crcCheck ? 7 : 9;
            yU = yU.subarray(XU)
          }
          const QU = "key" === XU.type;
          this.validateTimestamp(cU.track, XU.timestamp, QU);
          const AU = this.createInternalChunk(yU, XU.timestamp, XU.duration, XU.type);
          cU.chunkQueue.push(AU), await this.interleaveChunks()
        } finally {
          cU()
        }
      }
      async addSubtitleCue(UU, XU, zU) {
        const cU = await this.mutex.acquire();
        try {
          const cU = this.getSubtitleTrackData(UU, zU);
          this.validateTimestamp(cU.track, XU.timestamp, !0);
          let yU = XU.text;
          const QU = Math.round(1e3 * XU.timestamp);
          gU.j.lastIndex = 0, yU = yU.replace(gU.j, (UU => {
            const XU = (0, gU.l)(UU.slice(1, -1)) - QU;
            return `<${(0,gU.h)(XU)}>`
          }));
          const AU = FU.hd.encode(yU),
            oU = `${XU.settings??""}\n${XU.identifier??""}\n${XU.notes??""}`,
            DU = this.createInternalChunk(AU, XU.timestamp, XU.duration, "key", oU.trim() ? FU.hd.encode(oU) : null);
          cU.chunkQueue.push(DU), await this.interleaveChunks()
        } finally {
          cU()
        }
      }
      async interleaveChunks() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (UU || this.allTracksAreKnown()) {
          UU: for (;;) {
            let XU = null,
              zU = 1 / 0;
            for (const yU of this.trackDatas) {
              if (!UU && 0 === yU.chunkQueue.length && !yU.closed) break UU;
              yU.chunkQueue.length > 0 && yU.chunkQueue[0].timestamp < zU && (XU = yU, zU = yU.chunkQueue[0].timestamp)
            }
            if (!XU) break;
            const cU = XU.chunkQueue.shift();
            this.writeBlock(XU, cU)
          }
          UU || await this.writer.flush()
        }
      }
      fixVP9ColorSpace(UU, XU) {
        if ("key" !== XU.type) return;
        if (!UU.info.decoderConfig.colorSpace || !UU.info.decoderConfig.colorSpace.matrix) return;
        const zU = new tU.b(XU.data);
        zU.skipBits(2);
        const cU = zU.readBits(1),
          yU = (zU.readBits(1) << 1) + cU;
        3 === yU && zU.skipBits(1);
        if (zU.readBits(1)) return;
        if (0 !== zU.readBits(1)) return;
        zU.skipBits(2);
        if (4817730 !== zU.readBits(24)) return;
        yU >= 2 && zU.skipBits(1);
        const QU = {
          rgb: 7,
          bt709: 2,
          bt470bg: 1,
          smpte170m: 3
        } [UU.info.decoderConfig.colorSpace.matrix];
        (0, FU.vd)(XU.data, zU.pos, zU.pos + 3, QU)
      }
      createInternalChunk(UU, XU, zU, cU) {
        return {
          data: UU,
          type: cU,
          timestamp: XU,
          duration: zU,
          additions: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
        }
      }
      writeBlock(UU, XU) {
        this.segment || this.createSegment();
        const zU = Math.round(1e3 * XU.timestamp),
          cU = this.trackDatas.every((zU => {
            if (UU === zU) return "key" === XU.type;
            const cU = zU.chunkQueue[0];
            return cU ? "key" === cU.type : zU.closed
          }));
        let yU = !1;
        if (this.currentCluster) {
          (0, FU.J)(null !== this.currentClusterStartMsTimestamp), (0, FU.J)(null !== this.currentClusterMaxMsTimestamp);
          const UU = zU - this.currentClusterStartMsTimestamp;
          yU = cU && zU > this.currentClusterMaxMsTimestamp && UU >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || UU > 32767
        } else yU = !0;
        yU && this.createNewCluster(zU);
        const QU = zU - this.currentClusterStartMsTimestamp;
        if (QU < -32768) {
          if (!this.warnedAboutTooNegativeTimestamp) {
            const UU = this.format instanceof Mz ? "WebM" : "Matroska";
            AU.c._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${UU}.`), this.warnedAboutTooNegativeTimestamp = !0
          }
          return
        }
        const oU = new Uint8Array(4),
          DU = new DataView(oU.buffer);
        DU.setUint8(0, 128 | UU.track.id), DU.setInt16(1, QU, !1);
        const EU = Math.round(1e3 * XU.duration);
        if (!!XU.additions || "subtitle" === UU.type) {
          const cU = {
            id: Gz.BlockGroup,
            data: [{
              id: Gz.Block,
              data: [oU, XU.data]
            }, "delta" === XU.type ? {
              id: Gz.ReferenceBlock,
              data: new gz(UU.lastWrittenMsTimestamp - zU)
            } : null, XU.additions ? {
              id: Gz.BlockAdditions,
              data: [{
                id: Gz.BlockMore,
                data: [{
                  id: Gz.BlockAddID,
                  data: 1
                }, {
                  id: Gz.BlockAdditional,
                  data: XU.additions
                }]
              }]
            } : null, EU > 0 ? {
              id: Gz.BlockDuration,
              data: EU
            } : null]
          };
          this.ebmlWriter.writeEBML(cU)
        } else {
          DU.setUint8(3, Number("key" === XU.type) << 7);
          const UU = {
            id: Gz.SimpleBlock,
            data: [oU, XU.data]
          };
          this.ebmlWriter.writeEBML(UU)
        }
        this.startTimestamp = Math.min(this.startTimestamp, zU), this.endTimestamp = Math.max(this.endTimestamp, zU + EU), UU.lastWrittenMsTimestamp = zU, this.trackDatasInCurrentCluster.has(UU) || this.trackDatasInCurrentCluster.set(UU, {
          firstMsTimestamp: zU
        }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, zU)
      }
      createNewCluster(UU) {
        UU = Math.max(0, UU), this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
          id: Gz.Cluster,
          size: this.format._options.appendOnly ? -1 : 5,
          data: [{
            id: Gz.Timestamp,
            data: UU
          }]
        }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = UU, this.currentClusterMaxMsTimestamp = UU, this.trackDatasInCurrentCluster.clear()
      }
      finalizeCurrentCluster() {
        if ((0, FU.J)(this.currentCluster), !this.format._options.appendOnly) {
          const UU = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster),
            XU = this.writer.getPos();
          this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(UU, 5), this.writer.seek(XU)
        }
        if (this.format._options.onCluster) {
          (0, FU.J)(null !== this.currentClusterStartMsTimestamp);
          const {
            data: UU,
            start: XU
          } = this.writer.stopTrackingWrites();
          this.format._options.onCluster(UU, XU, this.currentClusterStartMsTimestamp / 1e3)
        }
        const UU = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset,
          XU = new Map;
        for (const [cU, {
            firstMsTimestamp: yU
          }] of this.trackDatasInCurrentCluster) XU.has(yU) || XU.set(yU, []), XU.get(yU).push(cU);
        const zU = [...XU.entries()].sort(((UU, XU) => UU[0] - XU[0]));
        for (const [cU, yU] of zU)(0, FU.J)(this.cues), this.cues.data.push({
          id: Gz.CuePoint,
          data: [{
            id: Gz.CueTime,
            data: Math.max(0, cU)
          }, ...yU.map((XU => ({
            id: Gz.CueTrackPositions,
            data: [{
              id: Gz.CueTrack,
              data: XU.track.id
            }, {
              id: Gz.CueClusterPosition,
              data: UU
            }]
          })))]
        })
      }
      async onTrackClose(UU) {
        const XU = await this.mutex.acquire(),
          zU = this.trackDatas.find((XU => XU.track === UU));
        zU && (zU.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), XU()
      }
      async finalize() {
        const UU = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        for (const XU of this.trackDatas) XU.closed = !0;
        if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, FU.J)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
          const UU = this.writer.getPos() - this.segmentDataOffset;
          this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(UU, 6);
          const XU = this.startTimestamp === 1 / 0 ? 0 : this.endTimestamp;
          this.segmentDuration.data = new tz(XU), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, FU.J)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead)
        }
        UU()
      }
    }
    const ez = new Uint32Array(256);
    for (let vz = 0; vz < 256; vz++) {
      let UU = vz << 24;
      for (let XU = 0; XU < 8; XU++) UU = 2147483648 & UU ? UU << 1 ^ 79764919 : UU << 1;
      ez[vz] = UU >>> 0 & 4294967295
    }
    new Uint8Array([9, 240]), new Uint8Array([70, 1]);
    const Cz = new Uint32Array(256);
    for (let vz = 0; vz < 256; vz++) {
      let UU = vz << 24;
      for (let XU = 0; XU < 8; XU++) UU = 2147483648 & UU ? UU << 1 ^ 79764919 : UU << 1;
      Cz[vz] = UU >>> 0 & 4294967295
    }
    const wz = UU => {
        let XU = 4294967295;
        for (let zU = 0; zU < UU.length; zU++) {
          const cU = UU[zU];
          XU = (XU << 8 ^ Cz[XU >>> 24 ^ cU]) >>> 0
        }
        return XU
      },
      qz = new Uint8Array(16);
    {
      const UU = (0, FU.ld)(qz);
      qz[0] = 0, UU.setUint16(1, 45069, !1), UU.setUint16(3, 1, !1), qz[5] = 193, qz[6] = 0, qz[7] = 0, UU.setUint16(8, 1, !1), UU.setUint16(10, 61440, !1), UU.setUint32(12, wz(qz.subarray(0, 12)), !1)
    }
    var Oz;
    zU(40754);
    ! function(UU) {
      UU[UU.PCM = 1] = "PCM", UU[UU.IEEE_FLOAT = 3] = "IEEE_FLOAT", UU[UU.ALAW = 6] = "ALAW", UU[UU.MULAW = 7] = "MULAW", UU[UU.EXTENSIBLE = 65534] = "EXTENSIBLE"
    }(Oz || (Oz = {}));
    zU(40758), zU(40771), zU(40679);
    class Sz {
      get supportsVideoRotationMetadata() {
        return this.supportsVideoTransformationMetadata
      }
      getSupportedVideoCodecs() {
        return this.getSupportedCodecs().filter((UU => yU.w.includes(UU)))
      }
      getSupportedAudioCodecs() {
        return this.getSupportedCodecs().filter((UU => yU.e.includes(UU)))
      }
      getSupportedSubtitleCodecs() {
        return this.getSupportedCodecs().filter((UU => yU.u.includes(UU)))
      }
      _codecUnsupportedHint(UU) {
        return ""
      }
      _isFragmentedIsobmff() {
        return !1
      }
    }
    class rz extends Sz {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!UU || "object" !== typeof UU) throw new TypeError("options must be an object.");
        if (void 0 !== UU.fastStart && ![!1, "in-memory", "reserve", "fragmented"].includes(UU.fastStart)) throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
        if (void 0 !== UU.minimumFragmentDuration && (!(0, FU.Tb)(UU.minimumFragmentDuration) || UU.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
        if (void 0 !== UU.onFtyp && "function" !== typeof UU.onFtyp) throw new TypeError("options.onFtyp, when provided, must be a function.");
        if (void 0 !== UU.onMoov && "function" !== typeof UU.onMoov) throw new TypeError("options.onMoov, when provided, must be a function.");
        if (void 0 !== UU.onMdat && "function" !== typeof UU.onMdat) throw new TypeError("options.onMdat, when provided, must be a function.");
        if (void 0 !== UU.onMoof && "function" !== typeof UU.onMoof) throw new TypeError("options.onMoof, when provided, must be a function.");
        if (void 0 !== UU.metadataFormat && !["mdir", "mdta", "udta", "auto"].includes(UU.metadataFormat)) throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
        super(), this._options = UU
      }
      getSupportedTrackCounts() {
        const UU = 2 ** 32 - 1;
        return {
          video: {
            min: 0,
            max: UU
          },
          audio: {
            min: 0,
            max: UU
          },
          subtitle: {
            min: 0,
            max: UU
          },
          total: {
            min: 0,
            max: UU
          }
        }
      }
      get supportsVideoTransformationMetadata() {
        return !0
      }
      get supportsTimestampedMediaData() {
        return !0
      }
      get negativeTimestampSupport() {
        return "full"
      }
      _createMuxer(UU) {
        return new pz(UU, this)
      }
      _isFragmentedIsobmff() {
        return "fragmented" === this._options.fastStart
      }
    }
    class uz extends rz {
      constructor(UU) {
        super(UU)
      }
      get _name() {
        return "MP4"
      }
      get fileExtension() {
        return ".mp4"
      }
      get mimeType() {
        return "video/mp4"
      }
      getSupportedCodecs() {
        return [...yU.w, ...yU.k, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...yU.u]
      }
      _codecUnsupportedHint(UU) {
        return (new iz).getSupportedCodecs().includes(UU) ? " Switching to MOV will grant support for this codec." : ""
      }
    }
    class fz extends rz {
      constructor(UU) {
        super(UU)
      }
      get _name() {
        return "CMAF"
      }
      get fileExtension() {
        return ".m4s"
      }
      get mimeType() {
        return "video/mp4"
      }
      getSupportedCodecs() {
        return [...yU.w, ...yU.k, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...yU.u]
      }
    }
    class iz extends rz {
      constructor(UU) {
        super(UU)
      }
      get _name() {
        return "MOV"
      }
      get fileExtension() {
        return ".mov"
      }
      get mimeType() {
        return "video/quicktime"
      }
      getSupportedCodecs() {
        return [...yU.w, ...yU.e]
      }
      _codecUnsupportedHint(UU) {
        return (new uz).getSupportedCodecs().includes(UU) ? " Switching to MP4 will grant support for this codec." : ""
      }
    }
    class Hz extends Sz {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!UU || "object" !== typeof UU) throw new TypeError("options must be an object.");
        if (void 0 !== UU.appendOnly && "boolean" !== typeof UU.appendOnly) throw new TypeError("options.appendOnly, when provided, must be a boolean.");
        if (void 0 !== UU.minimumClusterDuration && (!(0, FU.Tb)(UU.minimumClusterDuration) || UU.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
        if (void 0 !== UU.onEbmlHeader && "function" !== typeof UU.onEbmlHeader) throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
        if (void 0 !== UU.onSegmentHeader && "function" !== typeof UU.onSegmentHeader) throw new TypeError("options.onHeader, when provided, must be a function.");
        if (void 0 !== UU.onCluster && "function" !== typeof UU.onCluster) throw new TypeError("options.onCluster, when provided, must be a function.");
        super(), this._options = UU
      }
      _createMuxer(UU) {
        return new Lz(UU, this)
      }
      get _name() {
        return "Matroska"
      }
      getSupportedTrackCounts() {
        const UU = 127;
        return {
          video: {
            min: 0,
            max: UU
          },
          audio: {
            min: 0,
            max: UU
          },
          subtitle: {
            min: 0,
            max: UU
          },
          total: {
            min: 0,
            max: UU
          }
        }
      }
      get fileExtension() {
        return ".mkv"
      }
      get mimeType() {
        return "video/x-matroska"
      }
      getSupportedCodecs() {
        return [...yU.w, ...yU.k, ...yU.r.filter((UU => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(UU))), ...yU.u]
      }
      get supportsVideoTransformationMetadata() {
        return !1
      }
      get supportsTimestampedMediaData() {
        return !0
      }
      get negativeTimestampSupport() {
        return "prefer-non-negative"
      }
    }
    class Mz extends Hz {
      constructor(UU) {
        super(UU)
      }
      getSupportedCodecs() {
        return [...yU.w.filter((UU => ["vp8", "vp9", "av1"].includes(UU))), ...yU.e.filter((UU => ["opus", "vorbis"].includes(UU))), ...yU.u]
      }
      get _name() {
        return "WebM"
      }
      get fileExtension() {
        return ".webm"
      }
      get mimeType() {
        return "video/webm"
      }
      _codecUnsupportedHint(UU) {
        return (new Hz).getSupportedCodecs().includes(UU) ? " Switching to MKV will grant support for this codec." : ""
      }
    }
  },
  40679: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => GU
    });
    var cU = zU(40687),
      yU = zU(40689),
      QU = zU(40698),
      AU = zU(40771),
      FU = zU(40747),
      oU = zU(40742),
      DU = zU(40727),
      EU = zU(40754),
      YU = zU(40723);
    const NU = ["video", "audio", "subtitle"];
    class IU {
      constructor(UU, XU, zU, cU, yU) {
        this.id = UU, this.output = XU, this.type = zU, this.source = cU, this.metadata = yU
      }
      isVideoTrack() {
        return "video" === this.type
      }
      isAudioTrack() {
        return "audio" === this.type
      }
      isSubtitleTrack() {
        return "subtitle" === this.type
      }
      canBePairedWith(UU) {
        if (!(UU instanceof IU)) throw new TypeError("other must be an OutputTrack.");
        if (this === UU) return !1;
        const XU = (0, cU.id)(this.metadata.group),
          zU = (0, cU.id)(UU.metadata.group);
        for (const cU of XU) {
          if (this.type !== UU.type && zU.some((UU => cU === UU))) return !0;
          if (zU.some((UU => cU._pairedGroups.has(UU)))) return !0
        }
        return !1
      }
    }
    class pU extends IU {
      constructor(UU, XU, zU, cU) {
        super(UU, XU, "video", zU, cU)
      }
    }
    class aU extends IU {
      constructor(UU, XU, zU, cU) {
        super(UU, XU, "audio", zU, cU)
      }
    }
    class tU extends IU {
      constructor(UU, XU, zU, cU) {
        super(UU, XU, "subtitle", zU, cU)
      }
    }
    class gU {
      constructor() {
        this._pairedGroups = new Set
      }
      pairWith(UU) {
        if (!(UU instanceof gU)) throw new TypeError("other must be an OutputTrackGroup.");
        if (this === UU) throw new TypeError("Cannot pair a group with itself.");
        this._pairedGroups.add(UU), UU._pairedGroups.add(this)
      }
    }
    const kU = UU => {
      if (!UU || "object" !== typeof UU) throw new TypeError("metadata must be an object.");
      if (void 0 !== UU.languageCode && !(0, cU.Nb)(UU.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
      if (void 0 !== UU.name && "string" !== typeof UU.name) throw new TypeError("metadata.name, when provided, must be a string.");
      if (void 0 !== UU.disposition && (0, yU.r)(UU.disposition), void 0 !== UU.maximumPacketCount && (!Number.isInteger(UU.maximumPacketCount) || UU.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
      if (void 0 !== UU.bitrate && (!Number.isFinite(UU.bitrate) || UU.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
      if (void 0 !== UU.averageBitrate && (!Number.isFinite(UU.averageBitrate) || UU.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
      if (void 0 !== UU.group && !(UU.group instanceof gU) && (!Array.isArray(UU.group) || UU.group.some((UU => !(UU instanceof gU))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
    };
    class GU extends cU.f {
      get target() {
        const UU = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
        if (this._rootTargetPromise) throw new TypeError(UU);
        const XU = this._getRootTarget();
        if ((0, cU.Zb)(XU)) throw new TypeError(UU);
        return XU
      }
      constructor(UU) {
        if (super(), this.state = "pending", this.defaultTrackGroup = new gU, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new cU.b, this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !UU || "object" !== typeof UU) throw new TypeError("options must be an object.");
        if (!(UU.format instanceof QU.i)) throw new TypeError("options.format must be an OutputFormat.");
        if (!(UU.target instanceof FU.i || UU.target instanceof FU.g)) throw new TypeError("options.target must be a Target or a PathedTarget.");
        if (UU.target instanceof FU.i && this._rememberTarget(UU.target), void 0 !== UU.initTarget && !(UU.initTarget instanceof FU.i) && "function" !== typeof UU.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
        if (void 0 !== UU.onFinalize && "function" !== typeof UU.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        this.format = UU.format, this.eY = UU.target, this._onFinalize = UU.onFinalize ?? null, this._initTarget = UU.initTarget ?? null, this._initTarget instanceof FU.i && this._rememberTarget(this._initTarget), this._muxer = UU.format._createMuxer(this)
      }
      _getTargetValidated(UU) {
        (0, cU.J)(this.eY instanceof FU.g);
        const XU = this.eY.getTarget(UU),
          zU = UU => {
            if (!(UU instanceof FU.i)) throw new TypeError("getTarget must return a Target.");
            return UU
          };
        return (0, cU.Zb)(XU) ? XU.then(zU) : zU(XU)
      }
      async _getTarget(UU) {
        (0, cU.J)(this.eY instanceof FU.g);
        const XU = await this._getTargetValidated(UU);
        return this._emit("target", {
          target: XU,
          request: UU,
          isRoot: UU.isRoot
        }), "canceled" === this.state ? await XU._close() : this._rememberTarget(XU), XU
      }
      _rememberTarget(UU) {
        this._unfinalizedTargets.add(UU), UU.on("finalized", (() => this._unfinalizedTargets.delete(UU)), {
          once: !0
        })
      }
      async _getInitTarget() {
        if ((0, cU.J)(null !== this._initTarget), this._initTarget instanceof FU.i) return this._initTarget;
        const UU = await this._initTarget();
        return "canceled" === this.state ? await UU._close() : this._rememberTarget(UU), UU
      }
      _hasInitTarget() {
        return null !== this._initTarget
      }
      _getRootTarget() {
        if (this._rootTarget) return this._rootTarget;
        if (this._rootTargetPromise) return this._rootTargetPromise;
        if (this.eY instanceof FU.i) return this._emit("target", {
          target: this.eY,
          request: null,
          isRoot: !0
        }), this._rootTarget = this.eY, this.eY;
        const UU = {
            path: this.eY.rootPath,
            isRoot: !0,
            mimeType: this.format.mimeType
          },
          XU = this._getTargetValidated(UU),
          zU = XU => ("canceled" === this.state ? XU._close() : this._rememberTarget(XU), this._emit("target", {
            target: XU,
            request: UU,
            isRoot: !0
          }), this._rootTarget = XU, XU);
        return (0, cU.Zb)(XU) ? this._rootTargetPromise = XU.then(zU) : zU(XU)
      }
      _getRootWriter(UU) {
        return this._rootWriterPromise ??= (async () => {
          const XU = await this._getRootTarget(),
            zU = new oU.d(XU, "boolean" === typeof UU ? UU : UU(XU));
          return zU.start(), zU
        })()
      }
      addVideoTrack(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(UU instanceof AU.j)) throw new TypeError("source must be a VideoSource.");
        if (kU(XU), void 0 !== XU.rotation && ![0, 90, 180, 270].includes(XU.rotation)) throw new TypeError(`Invalid video rotation: ${XU.rotation}. Has to be 0, 90, 180 or 270.`);
        if (void 0 !== XU.flip && "boolean" !== typeof XU.flip) throw new TypeError("metadata.flip, when provided, must be a boolean.");
        if (void 0 !== XU.transformationMatrix && (!Array.isArray(XU.transformationMatrix) || 9 !== XU.transformationMatrix.length || !XU.transformationMatrix.every((UU => Number.isFinite(UU))))) throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");
        if (void 0 !== XU.frameRate && (!Number.isFinite(XU.frameRate) || XU.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${XU.frameRate}. Must be a positive number.`);
        if (void 0 !== XU.hasOnlyKeyPackets && "boolean" !== typeof XU.hasOnlyKeyPackets) throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");
        if (void 0 !== XU.canBeTransparent && "boolean" !== typeof XU.canBeTransparent) throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");
        if (void 0 !== XU.decoderConfig && (0, YU.V)({
            decoderConfig: XU.decoderConfig
          }, UU._codec), void 0 !== XU.primingPacket) {
          if (!(XU.primingPacket instanceof EU.e)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === XU.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const zU = {
          ...XU
        };
        return zU.group ??= this.defaultTrackGroup, this._addTrack(new pU(this.tracks.length + 1, this, UU, zU))
      }
      addAudioTrack(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(UU instanceof AU.b)) throw new TypeError("source must be an AudioSource.");
        if (kU(XU), void 0 !== XU.decoderConfig && (0, YU.S)({
            decoderConfig: XU.decoderConfig
          }, UU._codec), void 0 !== XU.primingPacket) {
          if (!(XU.primingPacket instanceof EU.e)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === XU.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const zU = {
          ...XU
        };
        return zU.group ??= this.defaultTrackGroup, this._addTrack(new aU(this.tracks.length + 1, this, UU, zU))
      }
      addSubtitleTrack(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(UU instanceof AU.h)) throw new TypeError("source must be a SubtitleSource.");
        kU(XU);
        const zU = {
          ...XU
        };
        return zU.group ??= this.defaultTrackGroup, this._addTrack(new tU(this.tracks.length + 1, this, UU, zU))
      }
      setMetadataTags(UU) {
        if ((0, yU.p)(UU), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
        this._metadataTags = UU
      }
      _addTrack(UU) {
        if ("pending" !== this.state) throw new Error("Cannot add track after output has been started or canceled.");
        if (UU.source._connectedTrack) throw new Error("Source is already used for a track.");
        const XU = this.format.getSupportedTrackCounts(),
          zU = this.tracks.reduce(((XU, zU) => XU + (zU.type === UU.type ? 1 : 0)), 0),
          cU = XU[UU.type].max;
        if (zU === cU) throw new Error(0 === cU ? `${this.format._name} does not support ${UU.type} tracks.` : `${this.format._name} does not support more than ${cU} ${UU.type} track` + (1 === cU ? "" : "s") + ".");
        const yU = XU.total.max;
        if (this.tracks.length === yU) throw new Error(`${this.format._name} does not support more than ${yU} tracks` + (1 === yU ? "" : "s") + " in total.");
        if (UU.isVideoTrack()) {
          const XU = this.format.getSupportedVideoCodecs();
          if (0 === XU.length) throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(UU.source._codec));
          if (!XU.includes(UU.source._codec)) throw new Error(`Codec '${UU.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${XU.map((UU=>`'${UU}'`)).join(", ")}.` + this.format._codecUnsupportedHint(UU.source._codec))
        } else if (UU.isAudioTrack()) {
          const XU = this.format.getSupportedAudioCodecs();
          if (0 === XU.length) throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(UU.source._codec));
          if (!XU.includes(UU.source._codec)) throw new Error(`Codec '${UU.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${XU.map((UU=>`'${UU}'`)).join(", ")}.` + this.format._codecUnsupportedHint(UU.source._codec))
        } else if (UU.isSubtitleTrack()) {
          const XU = this.format.getSupportedSubtitleCodecs();
          if (0 === XU.length) throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(UU.source._codec));
          if (!XU.includes(UU.source._codec)) throw new Error(`Codec '${UU.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${XU.map((UU=>`'${UU}'`)).join(", ")}.` + this.format._codecUnsupportedHint(UU.source._codec))
        }
        return this.tracks.push(UU), UU.source._connectedTrack = UU, UU
      }
      hasEnoughTracks() {
        const UU = this.format.getSupportedTrackCounts();
        for (const zU of NU) {
          if (this.tracks.reduce(((UU, XU) => UU + (XU.type === zU ? 1 : 0)), 0) < UU[zU].min) return !1
        }
        const XU = UU.total.min;
        return !(this.tracks.length < XU)
      }
      async start() {
        const UU = this.format.getSupportedTrackCounts();
        for (const zU of NU) {
          const XU = this.tracks.reduce(((UU, XU) => UU + (XU.type === zU ? 1 : 0)), 0),
            cU = UU[zU].min;
          if (XU < cU) throw new Error(cU === UU[zU].max ? `${this.format._name} requires exactly ${cU} ${zU} track${1===cU?"":"s"}.` : `${this.format._name} requires at least ${cU} ${zU} track${1===cU?"":"s"}.`)
        }
        const XU = UU.total.min;
        if (this.tracks.length < XU) throw new Error(XU === UU.total.max ? `${this.format._name} requires exactly ${XU} track` + (1 === XU ? "" : "s") + "." : `${this.format._name} requires at least ${XU} track` + (1 === XU ? "" : "s") + ".");
        if ("canceled" === this.state) throw new Error("Output has been canceled.");
        return this._startPromise ? (DU.c._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
          this.state = "started";
          const UU = this._mutex.acquire();
          try {
            await this._muxer.start();
            const UU = this.tracks.map((UU => UU.source._start()));
            await Promise.all(UU)
          } finally {
            (await UU)()
          }
        })()
      }
      getMimeType() {
        return this._muxer.getMimeType()
      }
      async cancel() {
        return "canceled" === this.state ? this._cancelPromise ?? void 0 : "finalizing" !== this.state && "finalized" !== this.state ? this._cancelPromise = (async () => {
          this.state = "canceled";
          const UU = await this._mutex.acquire();
          try {
            const UU = this.tracks.map((UU => UU.source._flushOrWaitForOngoingClose(!0)));
            await Promise.all(UU), await Promise.all([...this._unfinalizedTargets].map((UU => UU._close()))), this._unfinalizedTargets.clear()
          } finally {
            UU()
          }
        })() : void("finalized" === this.state && DU.c._warn("Output has already been finalized."))
      }
      async finalize() {
        if ("pending" === this.state) throw new Error("Cannot finalize before starting.");
        if ("canceled" === this.state) throw new Error("Cannot finalize after canceling.");
        return this._finalizePromise ? (DU.c._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
          this.state = "finalizing";
          const UU = await this._mutex.acquire();
          try {
            const UU = this.tracks.map((UU => UU.source._flushOrWaitForOngoingClose(!1)));
            if (await Promise.all(UU), await this._muxer.finalize(), this._rootWriterPromise) {
              const UU = await this._rootWriterPromise;
              UU.finalized || (await UU.flush(), await UU.finalize())
            }
            this._onFinalize && await this._onFinalize(), this.state = "finalized"
          } catch (XU) {
            throw this.state = "canceled", XU
          } finally {
            await Promise.all([...this._unfinalizedTargets].map((UU => UU._close().catch((() => {}))))), this._unfinalizedTargets.clear(), UU()
          }
        })()
      }
    }
  },
  40754: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      h: () => yU
    });
    var cU = zU(40687);
    const yU = new Uint8Array(0);
    class QU {
      constructor(UU, XU, zU, cU) {
        let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          AU = arguments.length > 5 ? arguments[5] : void 0,
          FU = arguments.length > 6 ? arguments[6] : void 0;
        if (this.data = UU, this.type = XU, this.timestamp = zU, this.duration = cU, this.sequenceNumber = QU, UU === yU && void 0 === AU) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
        if (void 0 === AU && (AU = UU.byteLength), !(UU instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("key" !== XU && "delta" !== XU) throw new TypeError('type must be either "key" or "delta".');
        if (!Number.isFinite(zU)) throw new TypeError("timestamp must be a number.");
        if (!Number.isFinite(cU) || cU < 0) throw new TypeError("duration must be a non-negative number.");
        if (!Number.isFinite(QU)) throw new TypeError("sequenceNumber must be a number.");
        if (!Number.isInteger(AU) || AU < 0) throw new TypeError("byteLength must be a non-negative integer.");
        if (void 0 !== FU && ("object" !== typeof FU || !FU)) throw new TypeError("sideData, when provided, must be an object.");
        if (void 0 !== FU?.alpha && !(FU.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
        if (void 0 !== FU?.alphaByteLength && (!Number.isInteger(FU.alphaByteLength) || FU.alphaByteLength < 0)) throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
        this.byteLength = AU, this.sideData = FU ?? {}, this.sideData.alpha && void 0 === this.sideData.alphaByteLength && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength)
      }
      get isMetadataOnly() {
        return this.data === yU
      }
      get microsecondTimestamp() {
        return Math.trunc(cU.r * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(cU.r * this.duration)
      }
      toEncodedVideoChunk() {
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.data,
          type: this.type,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration
        })
      }
      alphaToEncodedVideoChunk() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type;
        if (!this.sideData.alpha) throw new TypeError("This packet does not contain alpha side data.");
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.sideData.alpha,
          type: UU,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration
        })
      }
      toEncodedAudioChunk() {
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");
        if ("undefined" === typeof EncodedAudioChunk) throw new Error("EncodedAudioChunk is not available in this environment.");
        return new EncodedAudioChunk({
          data: this.data,
          type: this.type,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration
        })
      }
      static fromEncodedChunk(UU, XU) {
        if (!(UU instanceof EncodedVideoChunk || UU instanceof EncodedAudioChunk)) throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
        const zU = new Uint8Array(UU.byteLength);
        return UU.copyTo(zU), new QU(zU, UU.type, UU.timestamp / 1e6, (UU.duration ?? 0) / 1e6, void 0, void 0, XU)
      }
      clone(UU) {
        if (void 0 !== UU && ("object" !== typeof UU || null === UU)) throw new TypeError("options, when provided, must be an object.");
        if (void 0 !== UU?.data && !(UU.data instanceof Uint8Array)) throw new TypeError("options.data, when provided, must be a Uint8Array.");
        if (void 0 !== UU?.type && "key" !== UU.type && "delta" !== UU.type) throw new TypeError('options.type, when provided, must be either "key" or "delta".');
        if (void 0 !== UU?.timestamp && !Number.isFinite(UU.timestamp)) throw new TypeError("options.timestamp, when provided, must be a number.");
        if (void 0 !== UU?.duration && !Number.isFinite(UU.duration)) throw new TypeError("options.duration, when provided, must be a number.");
        if (void 0 !== UU?.sequenceNumber && !Number.isFinite(UU.sequenceNumber)) throw new TypeError("options.sequenceNumber, when provided, must be a number.");
        if (void 0 !== UU?.sideData && ("object" !== typeof UU.sideData || null === UU.sideData)) throw new TypeError("options.sideData, when provided, must be an object.");
        return new QU(UU?.data ?? this.data, UU?.type ?? this.type, UU?.timestamp ?? this.timestamp, UU?.duration ?? this.duration, UU?.sequenceNumber ?? this.sequenceNumber, this.byteLength, UU?.sideData ?? this.sideData)
      }
    }
  },
  40764: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => OU,
      e: () => IU,
      f: () => vU,
      g: () => HU,
      k: () => ZU
    });
    var cU = zU(40687),
      yU = zU(40727),
      QU = function(UU, XU, zU) {
        if (null !== XU && void 0 !== XU) {
          if ("object" !== typeof XU && "function" !== typeof XU) throw new TypeError("Object expected.");
          var cU, yU;
          if (zU) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            cU = XU[Symbol.asyncDispose]
          }
          if (void 0 === cU) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            cU = XU[Symbol.dispose], zU && (yU = cU)
          }
          if ("function" !== typeof cU) throw new TypeError("Object not disposable.");
          yU && (cU = function() {
            try {
              yU.call(this)
            } catch (UU) {
              return Promise.reject(UU)
            }
          }), UU.stack.push({
            value: XU,
            dispose: cU,
            async: zU
          })
        } else zU && UU.stack.push({
          async: !0
        });
        return XU
      },
      AU = function(UU) {
        return function(XU) {
          function zU(zU) {
            XU.error = XU.hasError ? new UU(zU, XU.error, "An error was suppressed during disposal.") : zU, XU.hasError = !0
          }
          var cU, yU = 0;
          return function UU() {
            for (; cU = XU.stack.pop();) try {
              if (!cU.async && 1 === yU) return yU = 0, XU.stack.push(cU), Promise.resolve().then(UU);
              if (cU.dispose) {
                var QU = cU.dispose.call(cU.value);
                if (cU.async) return yU |= 2, Promise.resolve(QU).then(UU, (function(XU) {
                  return zU(XU), UU()
                }))
              } else yU |= 1
            } catch (AU) {
              zU(AU)
            }
            if (1 === yU) return XU.hasError ? Promise.reject(XU.error) : Promise.resolve();
            if (XU.hasError) throw XU.error
          }()
        }
      }("function" === typeof SuppressedError ? SuppressedError : function(UU, XU, zU) {
        var cU = new Error(zU);
        return cU.name = "SuppressedError", cU.error = UU, cU.suppressed = XU, cU
      });
    (0, cU.Bc)();
    let FU = -1 / 0,
      oU = -1 / 0,
      DU = null;
    "undefined" !== typeof FinalizationRegistry && (DU = new FinalizationRegistry((UU => {
      const XU = performance.now();
      "video" === UU.type ? (XU - FU >= 1e3 && (yU.c._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), FU = XU), "undefined" !== typeof VideoFrame && UU.data instanceof VideoFrame && UU.data.close()) : (XU - oU >= 1e3 && (yU.c._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), oU = XU), "undefined" !== typeof AudioData && UU.data instanceof AudioData && UU.data.close())
    })));
    class EU {
      constructor() {
        this._referenceCount = 0, this._lastAllocationBuffer = null
      }
    }
    const YU = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
      NU = new Set(YU);
    class IU {
      get codedWidth() {
        return this.visibleRect.width
      }
      get codedHeight() {
        return this.visibleRect.height
      }
      get displayWidth() {
        return this.rotation % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight
      }
      get displayHeight() {
        return this.rotation % 180 === 0 ? this.squarePixelHeight : this.squarePixelWidth
      }
      get microsecondTimestamp() {
        return Math.trunc(cU.r * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(cU.r * this.duration)
      }
      get hasAlpha() {
        return this.format && this.format.includes("A")
      }
      constructor(UU, XU) {
        if (this._closed = !1, UU instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && UU instanceof SharedArrayBuffer || ArrayBuffer.isView(UU)) {
          if (!XU || "object" !== typeof XU) throw new TypeError("init must be an object.");
          if (void 0 === XU.format || !NU.has(XU.format)) throw new TypeError("init.format must be one of: " + YU.join(", "));
          if (!Number.isInteger(XU.codedWidth) || XU.codedWidth <= 0) throw new TypeError("init.codedWidth must be a positive integer.");
          if (!Number.isInteger(XU.codedHeight) || XU.codedHeight <= 0) throw new TypeError("init.codedHeight must be a positive integer.");
          if (void 0 !== XU.rotation && ![0, 90, 180, 270].includes(XU.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== XU.flip && "boolean" !== typeof XU.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(XU.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== XU.duration && (!Number.isFinite(XU.duration) || XU.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== XU.layout) {
            if (!Array.isArray(XU.layout)) throw new TypeError("init.layout, when provided, must be an array.");
            for (const UU of XU.layout) {
              if (!UU || "object" !== typeof UU || Array.isArray(UU)) throw new TypeError("Each entry in init.layout must be an object.");
              if (!Number.isInteger(UU.offset) || UU.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
              if (!Number.isInteger(UU.stride) || UU.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
            }
          }
          if (void 0 !== XU.visibleRect && (0, cU.rd)(XU.visibleRect, "init.visibleRect"), void 0 !== XU.displayWidth && (!Number.isInteger(XU.displayWidth) || XU.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
          if (void 0 !== XU.displayHeight && (!Number.isInteger(XU.displayHeight) || XU.displayHeight <= 0)) throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
          if (void 0 !== XU.displayWidth !== (void 0 !== XU.displayHeight)) throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
          this.format = XU.format, this.rotation = XU.rotation ?? 0, this.flip = XU.flip ?? !1, this.timestamp = XU.timestamp, this.duration = XU.duration ?? 0;
          const zU = XU.layout ?? PU(XU.format, XU.codedWidth, XU.codedHeight);
          let yU = XU.colorSpace ?? null;
          null === yU && (yU = "RGBA" === this.format || "RGBX" === this.format || "BGRA" === this.format || "BGRX" === this.format ? {
            primaries: "bt709",
            transfer: "iec61966-2-1",
            matrix: "rgb",
            fullRange: !0
          } : {
            primaries: "bt709",
            transfer: "bt709",
            matrix: "bt709",
            fullRange: !1
          }), this.visibleRect = {
            left: XU.visibleRect?.left ?? 0,
            top: XU.visibleRect?.top ?? 0,
            width: XU.visibleRect?.width ?? XU.codedWidth,
            height: XU.visibleRect?.height ?? XU.codedHeight
          }, void 0 !== XU.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? XU.displayWidth : XU.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? XU.displayHeight : XU.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height), this._data = XU._doNotCopy ? (0, cU.md)(UU) : (0, cU.md)(UU).slice(), this._layout = zU, this.colorSpace = new kU(yU)
        } else if ("undefined" !== typeof VideoFrame && UU instanceof VideoFrame) {
          if (void 0 !== XU?.rotation && ![0, 90, 180, 270].includes(XU.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== XU?.flip && "boolean" !== typeof XU.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (void 0 !== XU?.timestamp && !Number.isFinite(XU?.timestamp)) throw new TypeError("init.timestamp, when provided, must be a number.");
          if (void 0 !== XU?.duration && (!Number.isFinite(XU.duration) || XU.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          void 0 !== XU?.visibleRect && (0, cU.rd)(XU.visibleRect, "init.visibleRect"), this._data = UU, this._layout = null, this.format = UU.format, this.visibleRect = {
            left: UU.visibleRect?.x ?? 0,
            top: UU.visibleRect?.y ?? 0,
            width: UU.visibleRect?.width ?? UU.codedWidth,
            height: UU.visibleRect?.height ?? UU.codedHeight
          }, this.rotation = XU?.rotation ?? 0, this.flip = XU?.flip ?? !1, this.squarePixelWidth = UU.displayWidth, this.squarePixelHeight = UU.displayHeight, this.timestamp = XU?.timestamp ?? UU.timestamp / 1e6, this.duration = XU?.duration ?? (UU.duration ?? 0) / 1e6, this.colorSpace = new kU(UU.colorSpace)
        } else if ("undefined" !== typeof HTMLImageElement && UU instanceof HTMLImageElement || "undefined" !== typeof SVGImageElement && UU instanceof SVGImageElement || "undefined" !== typeof ImageBitmap && UU instanceof ImageBitmap || "undefined" !== typeof HTMLVideoElement && UU instanceof HTMLVideoElement || "undefined" !== typeof HTMLCanvasElement && UU instanceof HTMLCanvasElement || "undefined" !== typeof OffscreenCanvas && UU instanceof OffscreenCanvas) {
          if (!XU || "object" !== typeof XU) throw new TypeError("init must be an object.");
          if (void 0 !== XU.rotation && ![0, 90, 180, 270].includes(XU.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== XU.flip && "boolean" !== typeof XU.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(XU.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== XU.duration && (!Number.isFinite(XU.duration) || XU.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== XU.visibleRect && (0, cU.rd)(XU.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new IU(new VideoFrame(UU, {
            timestamp: Math.trunc(XU.timestamp * cU.r),
            duration: Math.trunc((XU.duration ?? 0) * cU.r) || void 0,
            visibleRect: XU.visibleRect && {
              x: XU.visibleRect.left,
              y: XU.visibleRect.top,
              width: XU.visibleRect.width,
              height: XU.visibleRect.height
            }
          }), XU);
          let zU = 0,
            yU = 0;
          if ("naturalWidth" in UU ? (zU = UU.naturalWidth, yU = UU.naturalHeight) : "videoWidth" in UU ? (zU = UU.videoWidth, yU = UU.videoHeight) : "width" in UU && (zU = Number(UU.width), yU = Number(UU.height)), !zU || !yU) throw new TypeError("Could not determine dimensions.");
          const QU = XU.visibleRect ?? {
              left: 0,
              top: 0,
              width: zU,
              height: yU
            },
            AU = new OffscreenCanvas(QU.width, QU.height),
            FU = AU.getContext("2d", {
              alpha: (0, cU.Lb)(),
              willReadFrequently: !0
            });
          if (!FU) throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
          FU.drawImage(UU, -QU.left, -QU.top), this._data = AU, this._layout = null, this.format = "RGBX", this.visibleRect = {
            left: 0,
            top: 0,
            width: QU.width,
            height: QU.height
          }, this.squarePixelWidth = QU.width, this.squarePixelHeight = QU.height, this.rotation = XU.rotation ?? 0, this.flip = XU.flip ?? !1, this.timestamp = XU.timestamp, this.duration = XU.duration ?? 0, this.colorSpace = new kU({
            matrix: "rgb",
            primaries: "bt709",
            transfer: "iec61966-2-1",
            fullRange: !0
          })
        } else {
          if (!(UU instanceof EU)) throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
          if (!XU || "object" !== typeof XU) throw new TypeError("init must be an object.");
          if (void 0 !== XU.rotation && ![0, 90, 180, 270].includes(XU.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== XU.flip && "boolean" !== typeof XU.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(XU.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== XU.duration && (!Number.isFinite(XU.duration) || XU.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (this._data = UU, UU._referenceCount++, this.format = UU.getFormat(), null !== this.format && !YU.includes(this.format)) throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
          if (this.visibleRect = {
              left: 0,
              top: 0,
              width: UU.getCodedWidth(),
              height: UU.getCodedHeight()
            }, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw new TypeError("getCodedWidth() must return a positive integer.");
          if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw new TypeError("getCodedHeight() must return a positive integer.");
          if (this.squarePixelWidth = UU.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw new TypeError("getSquarePixelWidth() must return a positive integer.");
          if (this.squarePixelHeight = UU.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw new TypeError("getSquarePixelHeight() must return a positive integer.");
          this.rotation = XU.rotation ?? 0, this.flip = XU.flip ?? !1, this.timestamp = XU.timestamp, this.duration = XU.duration ?? 0, this.colorSpace = UU.getColorSpace()
        }
        this.encodeOptions = XU?.encodeOptions ?? {}, this.pixelAspectRatio = (0, cU.cd)({
          num: this.squarePixelWidth * this.codedHeight,
          den: this.squarePixelHeight * this.codedWidth
        }), DU?.register(this, {
          type: "video",
          data: this._data
        }, this)
      }
      clone() {
        if (this._closed) throw new Error("VideoSample is closed.");
        return (0, cU.J)(null !== this._data), this._data instanceof EU ? new IU(this._data, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : GU(this._data) ? new IU(this._data.clone(), {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : this._data instanceof Uint8Array ? ((0, cU.J)(this._layout), new IU(this._data, {
          format: this.format,
          layout: this._layout,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          timestamp: this.timestamp,
          duration: this.duration,
          colorSpace: this.colorSpace,
          rotation: this.rotation,
          flip: this.flip,
          visibleRect: this.visibleRect,
          displayWidth: this.displayWidth,
          displayHeight: this.displayHeight,
          encodeOptions: this.encodeOptions,
          _doNotCopy: !0
        })) : new IU(this._data, {
          format: this.format,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          timestamp: this.timestamp,
          duration: this.duration,
          colorSpace: this.colorSpace,
          rotation: this.rotation,
          flip: this.flip,
          visibleRect: this.visibleRect,
          displayWidth: this.displayWidth,
          displayHeight: this.displayHeight,
          encodeOptions: this.encodeOptions
        })
      }
      close() {
        this._closed || (DU?.unregister(this), this._data instanceof EU ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : GU(this._data) ? this._data.close() : this._data = null, this._closed = !0)
      }
      allocationSize() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (RU(UU), this._closed) throw new Error("VideoSample is closed.");
        if (null == (UU.format ?? this.format)) throw new Error("Cannot get allocation size when format is null.");
        if (GU(this._data)) return this._data.allocationSize(UU);
        return dU(this, UU).allocationSize
      }
      async copyTo(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, cU.Db)(UU)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (RU(XU), this._closed) throw new Error("VideoSample is closed.");
        if (null == (XU.format ?? this.format)) throw new Error("Cannot copy video sample data when format is null.");
        if ((0, cU.J)(null !== this._data), GU(this._data)) return this._data.copyTo(UU, XU);
        if (XU.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(XU.format)) {
          if (!(this._data instanceof EU)) {
            if ("undefined" === typeof VideoFrame) throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
            const zU = this.toVideoFrame(),
              cU = await zU.copyTo(UU, XU);
            return zU.close(), cU
          } {
            const zU = {
              stack: [],
              error: void 0,
              hasError: !1
            };
            try {
              const cU = QU(zU, await this._data.toRgbSample({
                timestamp: this.timestamp,
                duration: this.duration,
                rotation: this.rotation,
                flip: this.flip
              }, XU.colorSpace ?? "srgb"), !1);
              if (!(cU instanceof IU)) throw new TypeError("toRgbSample() must return a VideoSample.");
              if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(cU.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${cU.format}' instead.`);
              return await cU.copyTo(UU, XU)
            } catch (NU) {
              zU.error = NU, zU.hasError = !0
            } finally {
              AU(zU)
            }
          }
        }
        const zU = dU(this, XU);
        (0, cU.J)(this.format);
        const yU = (0, cU.md)(UU);
        if (yU.byteLength < zU.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${zU.allocationSize}, Available: ${yU.byteLength}`);
        const FU = WU(this.format);
        let oU;
        if (this._data instanceof EU) {
          let UU = this._data.getDataPlanes();
          if ((0, cU.Zb)(UU) && (UU = await UU), !Array.isArray(UU) || UU.some((UU => !(UU.data instanceof Uint8Array) || !Number.isInteger(UU.stride) || UU.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');
          oU = UU
        } else if (this._data instanceof Uint8Array)(0, cU.J)(this._layout), (0, cU.J)(this._layout.length === FU.length), oU = this._layout.map(((UU, XU) => {
          const zU = Math.ceil(this.codedHeight / FU[XU].heightDivisor);
          return {
            data: this._data.subarray(UU.offset, UU.offset + UU.stride * zU),
            stride: UU.stride
          }
        }));
        else {
          const UU = this._data.getContext("2d");
          (0, cU.J)(UU);
          const XU = UU.getImageData(0, 0, this.codedWidth, this.codedHeight);
          oU = [{
            data: (0, cU.md)(XU.data),
            stride: 4 * this.codedWidth
          }]
        }
        const DU = [],
          YU = FU.length;
        for (let cU = 0; cU < YU; cU++) {
          const UU = zU.computedLayouts[cU],
            XU = oU[cU].stride,
            QU = oU[cU].data;
          let AU = UU.sourceTop * XU;
          AU += UU.sourceLeftBytes;
          let FU = UU.destinationOffset;
          const EU = UU.sourceWidthBytes,
            YU = {
              offset: FU,
              stride: UU.destinationStride
            };
          for (let zU = 0; zU < UU.sourceHeight; zU++) {
            if (AU + EU > QU.byteLength) throw new Error("Source buffer OOB read.");
            if (FU + EU > yU.byteLength) throw new Error("Destination buffer OOB write.");
            const zU = QU.subarray(AU, AU + EU);
            yU.set(zU, FU), AU += XU, FU += UU.destinationStride
          }
          DU.push(YU)
        }
        if (void 0 !== XU.format) {
          const UU = this.format.startsWith("RGB") !== XU.format.startsWith("RGB"),
            cU = this.format.includes("X") && XU.format.includes("A");
          if (UU || cU)
            for (let XU = 0; XU < zU.allocationSize; XU += 4) {
              if (UU) {
                const UU = yU[XU],
                  zU = yU[XU + 2];
                yU[XU] = zU, yU[XU + 2] = UU
              }
              cU && (yU[XU + 3] = 255)
            }
        }
        return DU
      }
      toVideoFrame() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, cU.J)(null !== this._data), this._data instanceof EU) {
          if (null === this.format) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
          const UU = this._data.getDataPlanes();
          if ((0, cU.Zb)(UU)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
          const XU = UU.reduce(((UU, XU) => UU + XU.data.byteLength), 0),
            zU = new Uint8Array(XU);
          let yU = 0;
          const QU = [];
          for (const cU of UU) zU.set(cU.data, yU), QU.push(yU), yU += cU.data.byteLength;
          return new VideoFrame(zU, {
            format: this.format,
            layout: UU.map(((UU, XU) => ({
              offset: QU[XU],
              stride: UU.stride
            }))),
            codedWidth: this.codedWidth,
            codedHeight: this.codedHeight,
            timestamp: this.microsecondTimestamp,
            duration: this.microsecondDuration,
            colorSpace: this.colorSpace,
            visibleRect: this.visibleRect,
            displayWidth: this.squarePixelWidth,
            displayHeight: this.squarePixelHeight
          })
        }
        return GU(this._data) ? new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        }) : this._data instanceof Uint8Array ? ((0, cU.J)(this._layout), new VideoFrame(this._data, {
          format: this.format,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          layout: this._layout,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0,
          colorSpace: this.colorSpace,
          visibleRect: this.visibleRect,
          displayWidth: this.squarePixelWidth,
          displayHeight: this.squarePixelHeight
        })) : new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        })
      }
      draw(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        let DU = 0,
          EU = 0,
          YU = this.displayWidth,
          NU = this.displayHeight,
          IU = 0,
          pU = 0,
          aU = this.displayWidth,
          tU = this.displayHeight;
        if (void 0 !== QU ? (DU = XU, EU = zU, YU = cU, NU = yU, IU = QU, pU = AU, void 0 !== FU ? (aU = FU, tU = oU) : (aU = YU, tU = NU)) : (IU = XU, pU = zU, void 0 !== cU && (aU = cU, tU = yU)), !("undefined" !== typeof CanvasRenderingContext2D && UU instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && UU instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Number.isFinite(DU)) throw new TypeError("sx must be a number.");
        if (!Number.isFinite(EU)) throw new TypeError("sy must be a number.");
        if (!Number.isFinite(YU) || YU < 0) throw new TypeError("sWidth must be a non-negative number.");
        if (!Number.isFinite(NU) || NU < 0) throw new TypeError("sHeight must be a non-negative number.");
        if (!Number.isFinite(IU)) throw new TypeError("dx must be a number.");
        if (!Number.isFinite(pU)) throw new TypeError("dy must be a number.");
        if (!Number.isFinite(aU) || aU < 0) throw new TypeError("dWidth must be a non-negative number.");
        if (!Number.isFinite(tU) || tU < 0) throw new TypeError("dHeight must be a non-negative number.");
        if (this._closed) throw new Error("VideoSample is closed.");
        ({
          sx: DU,
          sy: EU,
          sWidth: YU,
          sHeight: NU
        } = this._unmapSourceRegion(DU, EU, YU, NU, this.rotation, this.flip));
        const gU = this.toCanvasImageSource();
        UU.save();
        const kU = IU + aU / 2,
          GU = pU + tU / 2;
        UU.translate(kU, GU), this.flip && UU.scale(-1, 1), UU.rotate(this.rotation * Math.PI / 180);
        const BU = this.rotation % 180 === 0 ? 1 : aU / tU;
        UU.scale(1 / BU, BU), UU.drawImage(gU, DU, EU, YU, NU, -aU / 2, -tU / 2, aU, tU), UU.restore()
      }
      drawWithFit(UU, XU) {
        if (!("undefined" !== typeof CanvasRenderingContext2D && UU instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && UU instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!XU || "object" !== typeof XU) throw new TypeError("options must be an object.");
        if (!["fill", "contain", "cover"].includes(XU.fit)) throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
        if (void 0 !== XU.rotation && ![0, 90, 180, 270].includes(XU.rotation)) throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
        if (void 0 !== XU.flip && "boolean" !== typeof XU.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        void 0 !== XU.crop && ZU(XU.crop, "options.");
        const zU = UU.canvas.width,
          cU = UU.canvas.height,
          yU = XU.rotation ?? this.rotation,
          QU = XU.flip ?? this.flip,
          [AU, FU] = yU % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let oU, DU, EU, YU, NU = XU.crop;
        NU && (NU = BU(NU, AU, FU));
        const {
          sx: IU,
          sy: pU,
          sWidth: aU,
          sHeight: tU
        } = this._unmapSourceRegion(XU.crop?.left ?? 0, XU.crop?.top ?? 0, XU.crop?.width ?? AU, XU.crop?.height ?? FU, yU, QU);
        if ("fill" === XU.fit) oU = 0, DU = 0, EU = zU, YU = cU;
        else {
          const [UU, yU] = XU.crop ? [XU.crop.width, XU.crop.height] : [AU, FU], QU = "contain" === XU.fit ? Math.min(zU / UU, cU / yU) : Math.max(zU / UU, cU / yU);
          EU = UU * QU, YU = yU * QU, oU = (zU - EU) / 2, DU = (cU - YU) / 2
        }
        UU.save();
        const gU = yU % 180 === 0 ? 1 : EU / YU;
        UU.translate(zU / 2, cU / 2), QU && UU.scale(-1, 1), UU.rotate(yU * Math.PI / 180), UU.scale(1 / gU, gU), UU.translate(-zU / 2, -cU / 2), UU.drawImage(this.toCanvasImageSource(), IU, pU, aU, tU, oU, DU, EU, YU), UU.restore()
      }
      _unmapSourceRegion(UU, XU, zU, cU, yU, QU) {
        if (QU) {
          UU = (yU % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight) - UU - zU
        }
        return 90 === yU ? [UU, XU, zU, cU] = [XU, this.squarePixelHeight - UU - zU, cU, zU] : 180 === yU ? [UU, XU] = [this.squarePixelWidth - UU - zU, this.squarePixelHeight - XU - cU] : 270 === yU && ([UU, XU, zU, cU] = [this.squarePixelWidth - XU - cU, UU, cU, zU]), {
          sx: UU,
          sy: XU,
          sWidth: zU,
          sHeight: cU
        }
      }
      _drawWithFitAndMipmapping(UU, XU, zU) {
        const cU = UU.width,
          yU = UU.height,
          [QU, AU] = zU.rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth],
          FU = zU.crop ? zU.crop.width : QU,
          oU = zU.crop ? zU.crop.height : AU;
        let DU = 0;
        2 * cU < FU && 2 * yU < oU && (DU = Math.floor(Math.log2(Math.min(FU / cU, oU / yU))));
        const EU = cU * 2 ** DU,
          YU = yU * 2 ** DU,
          {
            canvas: NU,
            context: IU,
            isNew: pU
          } = DU > 0 ? gU(EU, YU) : {
            canvas: UU,
            context: XU,
            isNew: zU.targetIsFresh
          };
        IU.imageSmoothingQuality = "high", zU.fillBlack ? (IU.fillStyle = "black", IU.fillRect(0, 0, EU, YU)) : pU || IU.clearRect(0, 0, EU, YU), this.drawWithFit(IU, {
          fit: zU.fit,
          rotation: zU.rotation,
          flip: zU.flip,
          crop: zU.crop
        }), IU.globalCompositeOperation = "copy";
        for (let aU = DU; aU > 1; aU--) {
          const UU = cU * 2 ** aU,
            XU = yU * 2 ** aU;
          IU.drawImage(NU, 0, 0, UU, XU, 0, 0, UU / 2, XU / 2)
        }
        IU.globalCompositeOperation = "source-over", DU > 0 && (XU.imageSmoothingQuality = "high", XU.globalCompositeOperation = "copy", XU.drawImage(NU, 0, 0, 2 * cU, 2 * yU, 0, 0, cU, yU), XU.globalCompositeOperation = "source-over")
      }
      toCanvasImageSource() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, cU.J)(null !== this._data), this._data instanceof EU || this._data instanceof Uint8Array) {
          const UU = this.toVideoFrame();
          return queueMicrotask((() => UU.close())), UU
        }
        return this._data
      }
      async transform(UU) {
        if (!UU || "object" !== typeof UU) throw new TypeError("options must be an object.");
        if (void 0 !== UU.width && (!Number.isInteger(UU.width) || UU.width <= 0)) throw new TypeError("options.width, when provided, must be a positive integer.");
        if (void 0 !== UU.height && (!Number.isInteger(UU.height) || UU.height <= 0)) throw new TypeError("options.height, when provided, must be a positive integer.");
        if (void 0 !== UU.roundDimensionsTo && (!Number.isInteger(UU.roundDimensionsTo) || UU.roundDimensionsTo <= 0)) throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
        if (void 0 !== UU.fit && !["fill", "contain", "cover"].includes(UU.fit)) throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
        if (void 0 !== UU.width && void 0 !== UU.height && void 0 === UU.fit) throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
        if (void 0 !== UU.rotate && ![0, 90, 180, 270].includes(UU.rotate)) throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
        if (void 0 !== UU.flip && "boolean" !== typeof UU.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        if (void 0 !== UU.crop && ZU(UU.crop, "options."), void 0 !== UU.alpha && !["keep", "discard"].includes(UU.alpha)) throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
        const {
          rotation: XU,
          flip: zU
        } = (0, cU.lb)(this.rotation, this.flip, UU.rotate ?? 0, UU.flip ?? !1), [yU, QU] = XU % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let AU = UU.crop;
        AU && (AU = BU(AU, yU, QU));
        const FU = AU ? AU.width : yU,
          oU = AU ? AU.height : QU,
          DU = FU / oU;
        let EU, YU;
        void 0 !== UU.width && void 0 === UU.height ? (EU = UU.width, YU = EU / DU) : void 0 === UU.width && void 0 !== UU.height ? (YU = UU.height, EU = YU * DU) : void 0 !== UU.width && void 0 !== UU.height ? (EU = UU.width, YU = UU.height) : (EU = FU, YU = oU), EU = (0, cU.Oc)(EU, UU.roundDimensionsTo ?? 1), YU = (0, cU.Oc)(YU, UU.roundDimensionsTo ?? 1);
        const NU = {
          width: EU,
          height: YU,
          fit: UU.fit ?? "fill",
          rotation: XU,
          flip: zU,
          crop: AU ?? {
            left: 0,
            top: 0,
            width: yU,
            height: QU
          },
          alpha: UU.alpha ?? "keep"
        };
        for (const IU of pU) {
          let UU = IU(this, NU);
          if ((0, cU.Zb)(UU) && (UU = await UU), null !== UU) return UU
        }
        const {
          canvas: aU,
          context: tU,
          isNew: kU
        } = gU(NU.width, NU.height);
        return this._drawWithFitAndMipmapping(aU, tU, {
          fit: NU.fit,
          rotation: NU.rotation,
          flip: NU.flip,
          crop: NU.crop,
          targetIsFresh: kU,
          fillBlack: "discard" === NU.alpha
        }), new IU(aU, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: 0,
          flip: !1
        })
      }
      setRotation(UU) {
        if (![0, 90, 180, 270].includes(UU)) throw new TypeError("newRotation must be 0, 90, 180, or 270.");
        this.rotation = UU
      }
      setFlip(UU) {
        if ("boolean" !== typeof UU) throw new TypeError("newFlip must be a boolean.");
        this.flip = UU
      }
      setTimestamp(UU) {
        if (!Number.isFinite(UU)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = UU
      }
      setDuration(UU) {
        if (!Number.isFinite(UU) || UU < 0) throw new TypeError("newDuration must be a non-negative number.");
        this.duration = UU
      }
      setEncodeOptions(UU) {
        if (!UU || "object" !== typeof UU) throw new TypeError("newEncodeOptions must be an object.");
        this.encodeOptions = UU
      } [Symbol.dispose]() {
        this.close()
      }
    }
    const pU = [],
      aU = [];
    let tU = 0;
    const gU = (UU, XU) => {
      for (const cU of aU)
        if (cU.canvas.width === UU && cU.canvas.height === XU) return cU.age = tU++, {
          canvas: cU.canvas,
          context: cU.context,
          isNew: !1
        };
      let zU;
      if ("undefined" !== typeof OffscreenCanvas) zU = new OffscreenCanvas(UU, XU);
      else {
        if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
        zU = document.createElement("canvas"), zU.width = UU, zU.height = XU
      }
      const yU = zU.getContext("2d", {
        alpha: !0,
        willReadFrequently: !1
      });
      if (!yU) throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
      return aU.length >= 3 && aU.splice((0, cU.F)(aU, (UU => UU.age)), 1), aU.push({
        canvas: zU,
        context: yU,
        age: tU++
      }), {
        canvas: zU,
        context: yU,
        isNew: !0
      }
    };
    class kU {
      constructor(UU) {
        if (void 0 !== UU) {
          if (!UU || "object" !== typeof UU) throw new TypeError("init.colorSpace, when provided, must be an object.");
          const XU = Object.keys(cU.c);
          if (null != UU.primaries && !XU.includes(UU.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${XU.join(", ")}.`);
          const zU = Object.keys(cU.v);
          if (null != UU.transfer && !zU.includes(UU.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${zU.join(", ")}.`);
          const yU = Object.keys(cU.l);
          if (null != UU.matrix && !yU.includes(UU.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${yU.join(", ")}.`);
          if (null != UU.fullRange && "boolean" !== typeof UU.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
        }
        this.primaries = UU?.primaries ?? null, this.transfer = UU?.transfer ?? null, this.matrix = UU?.matrix ?? null, this.fullRange = UU?.fullRange ?? null
      }
      toJSON() {
        return {
          primaries: this.primaries,
          transfer: this.transfer,
          matrix: this.matrix,
          fullRange: this.fullRange
        }
      }
    }
    const GU = UU => "undefined" !== typeof VideoFrame && UU instanceof VideoFrame,
      BU = (UU, XU, zU) => {
        const yU = Math.min(UU.left, XU),
          QU = Math.min(UU.top, zU),
          AU = Math.min(UU.width, XU - yU),
          FU = Math.min(UU.height, zU - QU);
        return (0, cU.J)(AU >= 0), (0, cU.J)(FU >= 0), {
          left: yU,
          top: QU,
          width: AU,
          height: FU
        }
      },
      ZU = (UU, XU) => {
        if (!UU || "object" !== typeof UU) throw new TypeError(XU + "crop, when provided, must be an object.");
        if (!Number.isInteger(UU.left) || UU.left < 0) throw new TypeError(XU + "crop.left must be a non-negative integer.");
        if (!Number.isInteger(UU.top) || UU.top < 0) throw new TypeError(XU + "crop.top must be a non-negative integer.");
        if (!Number.isInteger(UU.width) || UU.width < 0) throw new TypeError(XU + "crop.width must be a non-negative integer.");
        if (!Number.isInteger(UU.height) || UU.height < 0) throw new TypeError(XU + "crop.height must be a non-negative integer.")
      },
      RU = UU => {
        if (!UU || "object" !== typeof UU) throw new TypeError("options must be an object.");
        if (void 0 !== UU.colorSpace && !["display-p3", "srgb"].includes(UU.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
        if (void 0 !== UU.format && "string" !== typeof UU.format) throw new TypeError("options.format, when provided, must be a string.");
        if (void 0 !== UU.layout) {
          if (!Array.isArray(UU.layout)) throw new TypeError("options.layout, when provided, must be an array.");
          for (const XU of UU.layout) {
            if (!XU || "object" !== typeof XU) throw new TypeError("Each entry in options.layout must be an object.");
            if (!Number.isInteger(XU.offset) || XU.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
            if (!Number.isInteger(XU.stride) || XU.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
          }
        }
        if (void 0 !== UU.rect) {
          if (!UU.rect || "object" !== typeof UU.rect) throw new TypeError("options.rect, when provided, must be an object.");
          if (void 0 !== UU.rect.x && (!Number.isInteger(UU.rect.x) || UU.rect.x < 0)) throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
          if (void 0 !== UU.rect.y && (!Number.isInteger(UU.rect.y) || UU.rect.y < 0)) throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
          if (void 0 !== UU.rect.width && (!Number.isInteger(UU.rect.width) || UU.rect.width < 0)) throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
          if (void 0 !== UU.rect.height && (!Number.isInteger(UU.rect.height) || UU.rect.height < 0)) throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")
        }
      },
      PU = (UU, XU, zU) => {
        const cU = WU(UU),
          yU = [];
        let QU = 0;
        for (const AU of cU) {
          const UU = Math.ceil(XU / AU.widthDivisor),
            cU = Math.ceil(zU / AU.heightDivisor),
            FU = UU * AU.sampleBytes,
            oU = FU * cU;
          yU.push({
            offset: QU,
            stride: FU
          }), QU += oU
        }
        return yU
      },
      WU = UU => {
        const XU = (UU, XU, zU, cU, yU) => {
          const QU = [{
            sampleBytes: UU,
            widthDivisor: 1,
            heightDivisor: 1
          }, {
            sampleBytes: XU,
            widthDivisor: zU,
            heightDivisor: cU
          }, {
            sampleBytes: XU,
            widthDivisor: zU,
            heightDivisor: cU
          }];
          return yU && QU.push({
            sampleBytes: UU,
            widthDivisor: 1,
            heightDivisor: 1
          }), QU
        };
        switch (UU) {
          case "I420":
            return XU(1, 1, 2, 2, !1);
          case "I420P10":
          case "I420P12":
            return XU(2, 2, 2, 2, !1);
          case "I420A":
            return XU(1, 1, 2, 2, !0);
          case "I420AP10":
          case "I420AP12":
            return XU(2, 2, 2, 2, !0);
          case "I422":
            return XU(1, 1, 2, 1, !1);
          case "I422P10":
          case "I422P12":
            return XU(2, 2, 2, 1, !1);
          case "I422A":
            return XU(1, 1, 2, 1, !0);
          case "I422AP10":
          case "I422AP12":
            return XU(2, 2, 2, 1, !0);
          case "I444":
            return XU(1, 1, 1, 1, !1);
          case "I444P10":
          case "I444P12":
            return XU(2, 2, 1, 1, !1);
          case "I444A":
            return XU(1, 1, 1, 1, !0);
          case "I444AP10":
          case "I444AP12":
            return XU(2, 2, 1, 1, !0);
          case "NV12":
            return [{
              sampleBytes: 1,
              widthDivisor: 1,
              heightDivisor: 1
            }, {
              sampleBytes: 2,
              widthDivisor: 2,
              heightDivisor: 2
            }];
          case "RGBA":
          case "RGBX":
          case "BGRA":
          case "BGRX":
            return [{
              sampleBytes: 4,
              widthDivisor: 1,
              heightDivisor: 1
            }];
          default:
            (0, cU.H)(UU), (0, cU.J)(!1)
        }
      },
      dU = (UU, XU) => {
        const zU = {
            left: 0,
            top: 0,
            width: UU.codedWidth,
            height: UU.codedHeight
          },
          cU = XU.rect,
          yU = LU(zU, cU, UU.codedWidth, UU.codedHeight, UU.format),
          QU = XU.layout;
        let AU;
        if (XU.format && XU.format !== UU.format) {
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(XU.format)) throw new Error("NotSupportedError: Invalid destination format.");
          AU = XU.format
        } else AU = UU.format;
        return CU(yU, AU, QU)
      },
      LU = (UU, XU, zU, cU, yU) => {
        const QU = {
          ...UU
        };
        if (void 0 !== XU) {
          if (0 === XU.width || 0 === XU.height) throw new TypeError("visibleRect dimensions cannot be zero.");
          if ((XU.x || 0) + (XU.width || 0) > zU) throw new TypeError("visibleRect exceeds codedWidth.");
          if ((XU.y || 0) + (XU.height || 0) > cU) throw new TypeError("visibleRect exceeds codedHeight.");
          QU.x = XU.x || 0, QU.y = XU.y || 0, QU.width = XU.width || 0, QU.height = XU.height || 0
        }
        if (!eU(yU, QU)) throw new TypeError("visibleRect alignment is invalid for the format.");
        return QU
      },
      eU = (UU, XU) => {
        if (null === UU) return !0;
        const zU = WU(UU);
        for (let cU = 0; cU < zU.length; cU++) {
          const UU = zU[cU],
            yU = UU.widthDivisor,
            QU = UU.heightDivisor;
          if ((XU.x || 0) % yU !== 0) return !1;
          if ((XU.y || 0) % QU !== 0) return !1
        }
        return !0
      },
      CU = (UU, XU, zU) => {
        const cU = WU(XU),
          yU = cU.length;
        if (void 0 !== zU && zU.length !== yU) throw new TypeError(`Layout must have ${yU} planes.`);
        let QU = 0;
        const AU = [],
          FU = [];
        for (let oU = 0; oU < yU; oU++) {
          const XU = cU[oU],
            yU = XU.sampleBytes,
            DU = XU.widthDivisor,
            EU = XU.heightDivisor,
            YU = {
              destinationOffset: 0,
              destinationStride: 0,
              sourceTop: 0,
              sourceHeight: 0,
              sourceLeftBytes: 0,
              sourceWidthBytes: 0
            };
          if (YU.sourceTop = Math.ceil(Math.trunc(UU.y || 0) / EU), YU.sourceHeight = Math.ceil(Math.trunc(UU.height || 0) / EU), YU.sourceLeftBytes = Math.floor(Math.trunc(UU.x || 0) / DU) * yU, YU.sourceWidthBytes = Math.floor(Math.trunc(UU.width || 0) / DU) * yU, void 0 !== zU) {
            const UU = zU[oU];
            if (UU.stride < YU.sourceWidthBytes) throw new TypeError(`Stride for plane ${oU} is too small.`);
            YU.destinationOffset = UU.offset, YU.destinationStride = UU.stride
          } else YU.destinationOffset = QU, YU.destinationStride = YU.sourceWidthBytes;
          const NU = YU.destinationStride * YU.sourceHeight + YU.destinationOffset;
          if (NU > 4294967295) throw new TypeError("Allocation size exceeds limit.");
          FU.push(NU), QU = Math.max(QU, NU);
          for (let UU = 0; UU < oU; UU++) {
            const XU = AU[UU];
            if (!(FU[oU] <= XU.destinationOffset || FU[UU] <= YU.destinationOffset)) throw new TypeError("Planes overlap.")
          }
          AU.push(YU)
        }
        return {
          allocationSize: QU,
          computedLayouts: AU
        }
      },
      wU = new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
    class qU {
      constructor() {
        this._referenceCount = 0
      }
    }
    class OU {
      get microsecondTimestamp() {
        return Math.trunc(cU.r * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(cU.r * this.duration)
      }
      constructor(UU) {
        if (this._closed = !1, iU(UU)) {
          if (null === UU.format) throw new TypeError("AudioData with null format is not supported.");
          this._data = UU, this.format = UU.format, this.sampleRate = UU.sampleRate, this.numberOfFrames = UU.numberOfFrames, this.numberOfChannels = UU.numberOfChannels, this.timestamp = UU.timestamp / 1e6, this.duration = UU.numberOfFrames / UU.sampleRate
        } else if (UU instanceof qU) {
          if (this._data = UU, UU._referenceCount++, this.format = UU.getFormat(), !wU.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
          if (this.sampleRate = UU.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
          if (this.numberOfFrames = UU.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
          if (this.numberOfChannels = UU.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
          if (this.timestamp = UU.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
          this.duration = this.numberOfFrames / this.sampleRate
        } else {
          if (!UU || "object" !== typeof UU) throw new TypeError("Invalid AudioDataInit: must be an object.");
          if (!wU.has(UU.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
          if (!Number.isFinite(UU.sampleRate) || UU.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
          if (!Number.isInteger(UU.numberOfChannels) || 0 === UU.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
          if (!Number.isFinite(UU?.timestamp)) throw new TypeError("init.timestamp must be a number.");
          const XU = UU.data.byteLength / (SU(UU.format) * UU.numberOfChannels);
          if (!Number.isInteger(XU)) throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
          let zU;
          if (this.format = UU.format, this.sampleRate = UU.sampleRate, this.numberOfFrames = XU, this.numberOfChannels = UU.numberOfChannels, this.timestamp = UU.timestamp, this.duration = XU / UU.sampleRate, UU.data instanceof ArrayBuffer) zU = new Uint8Array(UU.data);
          else {
            if (!ArrayBuffer.isView(UU.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
            zU = new Uint8Array(UU.data.buffer, UU.data.byteOffset, UU.data.byteLength)
          }
          const cU = this.numberOfFrames * this.numberOfChannels * SU(this.format);
          if (zU.byteLength < cU) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
          this._data = zU
        }
        DU?.register(this, {
          type: "audio",
          data: this._data
        }, this)
      }
      allocationSize(UU) {
        if (!UU || "object" !== typeof UU) throw new TypeError("options must be an object.");
        if (!Number.isInteger(UU.planeIndex) || UU.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== UU.format && !wU.has(UU.format)) throw new TypeError("Invalid format.");
        if (void 0 !== UU.frameOffset && (!Number.isInteger(UU.frameOffset) || UU.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== UU.frameCount && (!Number.isInteger(UU.frameCount) || UU.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const XU = UU.format ?? this.format,
          zU = UU.frameOffset ?? 0;
        if (zU >= this.numberOfFrames) throw new RangeError("frameOffset out of range");
        const cU = void 0 !== UU.frameCount ? UU.frameCount : this.numberOfFrames - zU;
        if (cU > this.numberOfFrames - zU) throw new RangeError("frameCount out of range");
        const yU = SU(XU),
          QU = rU(XU);
        if (QU && UU.planeIndex >= this.numberOfChannels) throw new RangeError("planeIndex out of range");
        if (!QU && 0 !== UU.planeIndex) throw new RangeError("planeIndex out of range");
        return (QU ? cU : cU * this.numberOfChannels) * yU
      }
      copyTo(UU, XU) {
        if (!(0, cU.Db)(UU)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (!XU || "object" !== typeof XU) throw new TypeError("options must be an object.");
        if (!Number.isInteger(XU.planeIndex) || XU.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== XU.format && !wU.has(XU.format)) throw new TypeError("Invalid format.");
        if (void 0 !== XU.frameOffset && (!Number.isInteger(XU.frameOffset) || XU.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== XU.frameCount && (!Number.isInteger(XU.frameCount) || XU.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const {
          format: zU,
          frameCount: yU,
          frameOffset: QU
        } = XU;
        let {
          planeIndex: AU
        } = XU, FU = this.format;
        const oU = zU ?? this.format;
        if (!oU) throw new Error("Destination format not determined");
        const DU = this.numberOfFrames,
          EU = this.numberOfChannels,
          YU = QU ?? 0;
        if (YU >= DU) throw new RangeError("frameOffset out of range");
        const NU = void 0 !== yU ? yU : DU - YU;
        if (NU > DU - YU) throw new RangeError("frameCount out of range");
        const IU = SU(oU),
          pU = rU(oU);
        if (pU && AU >= EU) throw new RangeError("planeIndex out of range");
        if (!pU && 0 !== AU) throw new RangeError("planeIndex out of range");
        const aU = (pU ? NU : NU * EU) * IU;
        if (UU.byteLength < aU) throw new RangeError("Destination buffer is too small");
        const tU = (0, cU.ld)(UU),
          gU = fU(oU);
        if (iU(this._data)) {
          if ((0, cU.ac)() && EU > 2 && oU !== FU) return void MU(this._data, tU, FU, oU, EU, AU, YU, NU);
          try {
            return void this._data.copyTo(UU, {
              planeIndex: AU,
              frameOffset: YU,
              frameCount: NU,
              format: oU
            })
          } catch (PU) {
            if ("f32-planar" === oU) throw PU;
            FU = "f32-planar"
          }
        }
        const kU = uU(FU),
          GU = SU(FU),
          BU = rU(FU);
        let ZU;
        if (this._data instanceof qU) {
          const UU = UU => {
            const XU = this._data.getDataPlane(UU);
            if (!(XU instanceof Uint8Array)) throw new TypeError("getDataPlane() must return a Uint8Array.");
            const zU = DU * GU * (BU ? 1 : EU);
            if (XU.byteLength !== zU) throw new TypeError(`Data plane ${UU} has invalid size. Expected exactly ${zU} bytes, got ${XU.byteLength} bytes.`);
            return XU
          };
          if (BU)
            if (pU) ZU = UU(AU), AU = 0;
            else {
              ZU = new Uint8Array(DU * GU * EU);
              for (let XU = 0; XU < EU; XU++) {
                const zU = UU(XU);
                ZU.set(zU, XU * DU * GU)
              }
            }
          else ZU = UU(0)
        } else if (this._data instanceof Uint8Array) ZU = this._data;
        else if ((0, cU.J)("f32-planar" === FU), pU) ZU = new Uint8Array(this._data.allocationSize({
          format: "f32-planar",
          planeIndex: AU
        })), this._data.copyTo(ZU, {
          format: "f32-planar",
          planeIndex: AU
        }), AU = 0;
        else {
          ZU = new Uint8Array(this._data.allocationSize({
            format: "f32-planar",
            planeIndex: 0
          }) * EU);
          for (let UU = 0; UU < EU; UU++) this._data.copyTo(ZU.subarray(UU * DU * GU, (UU + 1) * DU * GU), {
            format: "f32-planar",
            planeIndex: UU
          })
        }
        const RU = (0, cU.ld)(ZU);
        for (let cU = 0; cU < NU; cU++)
          if (pU) {
            let UU;
            UU = BU ? (AU * DU + (cU + YU)) * GU : ((cU + YU) * EU + AU) * GU;
            gU(tU, cU * IU, kU(RU, UU))
          } else
            for (let UU = 0; UU < EU; UU++) {
              let XU;
              XU = BU ? (UU * DU + (cU + YU)) * GU : ((cU + YU) * EU + UU) * GU;
              gU(tU, (cU * EU + UU) * IU, kU(RU, XU))
            }
      }
      clone() {
        if (this._closed) throw new Error("AudioSample is closed.");
        if (this._data instanceof qU) {
          const UU = new OU(this._data);
          return UU.setTimestamp(this.timestamp), UU
        }
        if (iU(this._data)) {
          const UU = new OU(this._data.clone());
          return UU.setTimestamp(this.timestamp), UU
        }
        return new OU({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp,
          data: this._data
        })
      }
      trim(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.numberOfFrames;
        if (!Number.isInteger(UU) || UU < 0) throw new TypeError("startFrame must be a non-negative integer.");
        if (!Number.isInteger(XU) || XU < 0) throw new TypeError("endFrame must be a non-negative integer.");
        if (UU > this.numberOfFrames) throw new RangeError("startFrame out of range.");
        if (XU > this.numberOfFrames) throw new RangeError("endFrame out of range.");
        if (XU < UU) throw new RangeError("endFrame must not be less than startFrame.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const zU = XU - UU,
          cU = SU(this.format);
        let yU;
        if (rU(this.format)) {
          const XU = zU * cU;
          if (yU = new Uint8Array(XU * this.numberOfChannels), zU > 0)
            for (let cU = 0; cU < this.numberOfChannels; cU++) this.copyTo(yU.subarray(cU * XU, (cU + 1) * XU), {
              planeIndex: cU,
              format: this.format,
              frameOffset: UU,
              frameCount: zU
            })
        } else yU = new Uint8Array(zU * this.numberOfChannels * cU), zU > 0 && this.copyTo(yU, {
          planeIndex: 0,
          format: this.format,
          frameOffset: UU,
          frameCount: zU
        });
        return new OU({
          data: yU,
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp + UU / this.sampleRate
        })
      }
      close() {
        this._closed || (DU?.unregister(this), this._data instanceof qU ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : iU(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
      }
      toAudioData() {
        if (this._closed) throw new Error("AudioSample is closed.");
        return this._data instanceof qU ? this._createAudioDataFromData() : iU(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
        })
      }
      _createAudioDataFromData() {
        if (rU(this.format)) {
          const UU = this.allocationSize({
              planeIndex: 0,
              format: this.format
            }),
            XU = new ArrayBuffer(UU * this.numberOfChannels);
          for (let zU = 0; zU < this.numberOfChannels; zU++) this.copyTo(new Uint8Array(XU, zU * UU, UU), {
            planeIndex: zU,
            format: this.format
          });
          return new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: XU
          })
        } {
          const UU = new ArrayBuffer(this.allocationSize({
            planeIndex: 0,
            format: this.format
          }));
          return this.copyTo(UU, {
            planeIndex: 0,
            format: this.format
          }), new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: UU
          })
        }
      }
      toAudioBuffer() {
        if (this._closed) throw new Error("AudioSample is closed.");
        const UU = new AudioBuffer({
            numberOfChannels: this.numberOfChannels,
            length: this.numberOfFrames,
            sampleRate: this.sampleRate
          }),
          XU = new Float32Array(this.allocationSize({
            planeIndex: 0,
            format: "f32-planar"
          }) / 4);
        for (let zU = 0; zU < this.numberOfChannels; zU++) this.copyTo(XU, {
          planeIndex: zU,
          format: "f32-planar"
        }), UU.copyToChannel(XU, zU);
        return UU
      }
      setTimestamp(UU) {
        if (!Number.isFinite(UU)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = UU
      } [Symbol.dispose]() {
        this.close()
      }
      static * _fromAudioBuffer(UU, XU) {
        if (!(UU instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const zU = UU.numberOfChannels,
          cU = UU.sampleRate,
          yU = UU.length,
          QU = Math.floor(24e4 / zU);
        let AU = 0,
          FU = yU;
        for (; FU > 0;) {
          const yU = Math.min(QU, FU),
            oU = new Float32Array(zU * yU);
          for (let XU = 0; XU < zU; XU++) UU.copyFromChannel(oU.subarray(XU * yU, (XU + 1) * yU), XU, AU);
          yield new OU({
            format: "f32-planar",
            sampleRate: cU,
            numberOfFrames: yU,
            numberOfChannels: zU,
            timestamp: XU + AU / cU,
            data: oU
          }), AU += yU, FU -= yU
        }
      }
      static fromAudioBuffer(UU, XU) {
        if (!(UU instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const zU = UU.numberOfChannels,
          cU = UU.sampleRate,
          yU = UU.length,
          QU = Math.floor(24e4 / zU);
        let AU = 0,
          FU = yU;
        const oU = [];
        for (; FU > 0;) {
          const yU = Math.min(QU, FU),
            DU = new Float32Array(zU * yU);
          for (let XU = 0; XU < zU; XU++) UU.copyFromChannel(DU.subarray(XU * yU, (XU + 1) * yU), XU, AU);
          const EU = new OU({
            format: "f32-planar",
            sampleRate: cU,
            numberOfFrames: yU,
            numberOfChannels: zU,
            timestamp: XU + AU / cU,
            data: DU
          });
          oU.push(EU), AU += yU, FU -= yU
        }
        return oU
      }
    }
    const SU = UU => {
        switch (UU) {
          case "u8":
          case "u8-planar":
            return 1;
          case "s16":
          case "s16-planar":
            return 2;
          case "s32":
          case "s32-planar":
          case "f32":
          case "f32-planar":
            return 4;
          default:
            throw new Error("Unknown AudioSampleFormat")
        }
      },
      rU = UU => {
        switch (UU) {
          case "u8-planar":
          case "s16-planar":
          case "s32-planar":
          case "f32-planar":
            return !0;
          default:
            return !1
        }
      },
      uU = UU => {
        switch (UU) {
          case "u8":
          case "u8-planar":
            return (UU, XU) => (UU.getUint8(XU) - 128) / 128;
          case "s16":
          case "s16-planar":
            return (UU, XU) => UU.getInt16(XU, !0) / 32768;
          case "s32":
          case "s32-planar":
            return (UU, XU) => UU.getInt32(XU, !0) / 2147483648;
          case "f32":
          case "f32-planar":
            return (UU, XU) => UU.getFloat32(XU, !0)
        }
      },
      fU = UU => {
        switch (UU) {
          case "u8":
          case "u8-planar":
            return (UU, XU, zU) => UU.setUint8(XU, (0, cU.Y)(Math.round(128 * zU) + 128, 0, 255));
          case "s16":
          case "s16-planar":
            return (UU, XU, zU) => UU.setInt16(XU, (0, cU.Y)(Math.round(32768 * zU), -32768, 32767), !0);
          case "s32":
          case "s32-planar":
            return (UU, XU, zU) => UU.setInt32(XU, (0, cU.Y)(Math.round(2147483648 * zU), -2147483648, 2147483647), !0);
          case "f32":
          case "f32-planar":
            return (UU, XU, zU) => UU.setFloat32(XU, zU, !0)
        }
      },
      iU = UU => "undefined" !== typeof AudioData && UU instanceof AudioData,
      HU = UU => {
        switch (UU) {
          case "u8-planar":
            return "u8";
          case "s16-planar":
            return "s16";
          case "s32-planar":
            return "s32";
          case "f32-planar":
            return "f32";
          default:
            return UU
        }
      },
      MU = (UU, XU, zU, yU, QU, AU, FU, oU) => {
        const DU = uU(zU),
          EU = fU(yU),
          YU = SU(zU),
          NU = SU(yU),
          IU = rU(zU);
        if (rU(yU))
          if (IU) {
            const yU = new ArrayBuffer(oU * YU),
              QU = (0, cU.ld)(yU);
            UU.copyTo(yU, {
              planeIndex: AU,
              frameOffset: FU,
              frameCount: oU,
              format: zU
            });
            for (let UU = 0; UU < oU; UU++) {
              EU(XU, UU * NU, DU(QU, UU * YU))
            }
          } else {
            const yU = new ArrayBuffer(oU * QU * YU),
              IU = (0, cU.ld)(yU);
            UU.copyTo(yU, {
              planeIndex: 0,
              frameOffset: FU,
              frameCount: oU,
              format: zU
            });
            for (let UU = 0; UU < oU; UU++) {
              EU(XU, UU * NU, DU(IU, (UU * QU + AU) * YU))
            }
          }
        else if (IU) {
          const yU = new ArrayBuffer(oU * YU),
            AU = (0, cU.ld)(yU);
          for (let cU = 0; cU < QU; cU++) {
            UU.copyTo(yU, {
              planeIndex: cU,
              frameOffset: FU,
              frameCount: oU,
              format: zU
            });
            for (let UU = 0; UU < oU; UU++) {
              EU(XU, (UU * QU + cU) * NU, DU(AU, UU * YU))
            }
          }
        } else {
          const yU = new ArrayBuffer(oU * QU * YU),
            AU = (0, cU.ld)(yU);
          UU.copyTo(yU, {
            planeIndex: 0,
            frameOffset: FU,
            frameCount: oU,
            format: zU
          });
          for (let UU = 0; UU < oU; UU++)
            for (let zU = 0; zU < QU; zU++) {
              const cU = UU * QU + zU;
              EU(XU, cU * NU, DU(AU, cU * YU))
            }
        }
      },
      vU = (UU, XU) => {
        const zU = UU.allocationSize({
            format: XU,
            planeIndex: 0
          }),
          cU = new ArrayBuffer(zU);
        return UU.copyTo(cU, {
          format: XU,
          planeIndex: 0
        }), new OU({
          data: cU,
          format: XU,
          numberOfChannels: UU.numberOfChannels,
          sampleRate: UU.sampleRate,
          timestamp: UU.timestamp,
          duration: UU.duration
        })
      }
  },
  40738: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      h: () => DU,
      j: () => QU,
      l: () => oU
    });
    const cU = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
      yU = /^WEBVTT(.|\n)*?\n{2}/,
      QU = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
    class AU {
      constructor(UU) {
        this.preambleText = null, this.preambleEmitted = !1, this.options = UU
      }
      parse(UU) {
        let XU;
        if (UU = UU.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), cU.lastIndex = 0, !this.preambleText) {
          if (!yU.test(UU)) throw new Error("WebVTT preamble incorrect.");
          XU = cU.exec(UU);
          const zU = UU.slice(0, XU?.index ?? UU.length).trimEnd();
          if (!zU) throw new Error("No WebVTT preamble provided.");
          this.preambleText = zU, XU && (UU = UU.slice(XU.index), cU.lastIndex = 0)
        }
        for (; XU = cU.exec(UU);) {
          const zU = UU.slice(0, XU.index),
            yU = XU[1],
            QU = XU.index + XU[0].length,
            AU = UU.indexOf("\n", QU) + 1,
            FU = UU.slice(QU, AU).trim();
          let DU = UU.indexOf("\n\n", QU); - 1 === DU && (DU = UU.length);
          const EU = oU(XU[2]),
            YU = oU(XU[3]) - EU,
            NU = UU.slice(AU, DU).trim();
          UU = UU.slice(DU).trimStart(), cU.lastIndex = 0;
          const IU = {
              timestamp: EU / 1e3,
              duration: YU / 1e3,
              text: NU,
              identifier: yU,
              settings: FU,
              notes: zU
            },
            pU = {};
          this.preambleEmitted || (pU.config = {
            description: this.preambleText
          }, this.preambleEmitted = !0), this.options.output(IU, pU)
        }
      }
    }
    const FU = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
      oU = UU => {
        const XU = FU.exec(UU);
        if (!XU) throw new Error("Expected match.");
        return 36e5 * Number(XU[1] || "0") + 6e4 * Number(XU[2]) + 1e3 * Number(XU[3]) + Number(XU[4])
      },
      DU = UU => {
        const XU = Math.floor(UU / 36e5),
          zU = Math.floor(UU % 36e5 / 6e4),
          cU = Math.floor(UU % 6e4 / 1e3),
          yU = UU % 1e3;
        return XU.toString().padStart(2, "0") + ":" + zU.toString().padStart(2, "0") + ":" + cU.toString().padStart(2, "0") + "." + yU.toString().padStart(3, "0")
      }
  },
  40747: (UU, XU, zU) => {
    var cU;
    zU.d(XU, {
      b: () => DU,
      d: () => EU,
      g: () => NU,
      i: () => AU
    });
    var yU = zU(40752),
      QU = zU(40687);
    "undefined" !== typeof(cU || (cU = zU.t(yU, 2))) && (cU || (cU = zU.t(yU, 2)));
    class AU extends QU.f {
      constructor() {
        super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
      }
      _setMonotonicity(UU) {
        !1 !== this._monotonicity && (this._monotonicity = UU)
      }
      _dispatchWrite(UU, XU) {
        this.onwrite?.(UU, XU), this._emit("write", {
          start: UU,
          end: XU
        })
      }
      slice(UU) {
        if (!Number.isInteger(UU) || UU < 0) throw new TypeError("offset must be a non-negative integer.");
        return new YU(this, UU)
      }
    }
    const FU = 65536,
      oU = 2 ** 32;
    class DU extends AU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (super(), this.buffer = null, this._maxPos = 0, !UU || "object" !== typeof UU) throw new TypeError("BufferTarget options, when provided, must be an object.");
        if (void 0 !== UU.onFinalize && "function" !== typeof UU.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        if (this._options = UU, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
          this._buffer = new ArrayBuffer(FU, {
            maxByteLength: oU
          })
        } catch {
          this._buffer = new ArrayBuffer(FU), this._supportsResize = !1
        } else this._buffer = new ArrayBuffer(FU);
        this._bytes = new Uint8Array(this._buffer)
      }
      _ensureSize(UU) {
        let XU = this._buffer.byteLength;
        for (; XU < UU;) XU *= 2;
        if (XU !== this._buffer.byteLength) {
          if (XU > oU) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
          if (this._supportsResize) this._buffer.resize(XU);
          else {
            const UU = new ArrayBuffer(XU),
              zU = new Uint8Array(UU);
            zU.set(this._bytes, 0), this._buffer = UU, this._bytes = zU
          }
        }
      }
      _start() {}
      _write(UU, XU) {
        this._ensureSize(XU + UU.byteLength), this._bytes.set(UU, XU), this._maxPos = Math.max(this._maxPos, XU + UU.byteLength), this._dispatchWrite(XU, XU + UU.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
      }
      async _close() {}
      _getSlice(UU, XU) {
        return this._bytes.slice(UU, XU)
      }
    }
    class EU extends AU {
      _start() {}
      _write(UU, XU) {
        this._dispatchWrite(XU, XU + UU.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
    }
    class YU extends AU {
      constructor(UU, XU) {
        super(), this._baseTarget = UU, this._offset = XU
      }
      _start() {}
      _write(UU, XU) {
        this._baseTarget._write(UU, this._offset + XU), this._dispatchWrite(XU, XU + UU.byteLength)
      }
      _flush() {
        return this._baseTarget._flush()
      }
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
      _setMonotonicity(UU) {
        super._setMonotonicity(UU), this._baseTarget._setMonotonicity(UU)
      }
    }
    class NU {
      constructor(UU, XU) {
        if (this.rootPath = UU, this.getTarget = XU, "string" !== typeof UU) throw new TypeError("rootPath must be a string.");
        if ("function" !== typeof XU) throw new TypeError("getTarget must be a function.")
      }
    }
  },
  40730: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU
    });
    const cU = "Mediabunny v1.61.3"
  },
  40742: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(40687);
    class yU {
      constructor(UU, XU) {
        if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, UU._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
        this.target = UU, UU._setMonotonicity(XU), UU._writerAcquired = !0
      }
      start() {
        (0, cU.J)(!this.started), this.target._start(), this.started = !0
      }
      write(UU) {
        (0, cU.J)(this.started && !this.finalized), this.maybeTrackWrites(UU), this.target._write(UU, this.pos), this.pos += UU.byteLength
      }
      seek(UU) {
        this.pos = UU
      }
      getPos() {
        return this.pos
      }
      async flush() {
        return (0, cU.J)(this.started && !this.finalized), this.target._flush()
      }
      async finalize() {
        (0, cU.J)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
      }
      maybeTrackWrites(UU) {
        if (!this.trackedWrites) return;
        let XU = this.getPos();
        if (XU < this.trackedStart) {
          if (XU + UU.byteLength <= this.trackedStart) return;
          UU = UU.subarray(this.trackedStart - XU), XU = 0
        }
        const zU = XU + UU.byteLength - this.trackedStart;
        let cU = this.trackedWrites.byteLength;
        for (; cU < zU;) cU *= 2;
        if (cU !== this.trackedWrites.byteLength) {
          const UU = new Uint8Array(cU);
          UU.set(this.trackedWrites, 0), this.trackedWrites = UU
        }
        this.trackedWrites.set(UU, XU - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, XU + UU.byteLength)
      }
      startTrackingWrites() {
        this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
      }
      stopTrackingWrites() {
        if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
        const UU = {
          data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
          start: this.trackedStart,
          end: this.trackedEnd
        };
        return this.trackedWrites = null, UU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);