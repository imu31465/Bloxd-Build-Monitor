/*! For license information please see 1yqdn.236.7944a948.chunk.js.LICENSE.txt */
export const id = 236;
export const ids = [236];
export const modules = {
  41001: (WW, iW, OW) => {
    function mW() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function EW(WW) {
      return WW instanceof Uint8Array && (!mW() || !Buffer.isBuffer(WW))
    }

    function NW(WW) {
      return WW instanceof ArrayBuffer
    }

    function PW(WW) {
      return !!mW() && Buffer.isBuffer(WW)
    }
    var LW = OW(41009).c,
      cW = OW(41012).d,
      wW = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    iW.d = function(WW) {
      if (!EW(WW) && !NW(WW) && !PW(WW)) throw new TypeError(wW);
      var iW = !1,
        OW = !1;
      EW(WW) ? iW = !0 : NW(WW) && (OW = !0, WW = new Uint8Array(WW));
      var mW, LW, tW, ZW = new cW(WW),
        xW = ZW.maxCompressedLength();
      if (iW ? (mW = new Uint8Array(xW), tW = ZW.compressToBuffer(mW)) : OW ? (mW = new ArrayBuffer(xW), LW = new Uint8Array(mW), tW = ZW.compressToBuffer(LW)) : (mW = Buffer.alloc(xW), tW = ZW.compressToBuffer(mW)), !mW.slice) {
        var lW = new Uint8Array(Array.prototype.slice.call(mW, 0, tW));
        if (iW) return lW;
        if (OW) return lW.buffer;
        throw new Error("Not implemented")
      }
      return mW.slice(0, tW)
    }
  },
  41012: (WW, iW) => {
    var OW = new Array(15);

    function mW(WW, iW) {
      return 506832829 * WW >>> iW
    }

    function EW(WW, iW) {
      return WW[iW] + (WW[iW + 1] << 8) + (WW[iW + 2] << 16) + (WW[iW + 3] << 24)
    }

    function NW(WW, iW, OW) {
      return WW[iW] === WW[OW] && WW[iW + 1] === WW[OW + 1] && WW[iW + 2] === WW[OW + 2] && WW[iW + 3] === WW[OW + 3]
    }

    function PW(WW, iW, OW, mW, EW) {
      return OW <= 60 ? (mW[EW] = OW - 1 << 2, EW += 1) : OW < 256 ? (mW[EW] = 240, mW[EW + 1] = OW - 1, EW += 2) : (mW[EW] = 244, mW[EW + 1] = OW - 1 & 255, mW[EW + 2] = OW - 1 >>> 8, EW += 3),
        function(WW, iW, OW, mW, EW) {
          var NW;
          for (NW = 0; NW < EW; NW++) OW[mW + NW] = WW[iW + NW]
        }(WW, iW, mW, EW, OW), EW + OW
    }

    function LW(WW, iW, OW, mW) {
      return mW < 12 && OW < 2048 ? (WW[iW] = 1 + (mW - 4 << 2) + (OW >>> 8 << 5), WW[iW + 1] = 255 & OW, iW + 2) : (WW[iW] = 2 + (mW - 1 << 2), WW[iW + 1] = 255 & OW, WW[iW + 2] = OW >>> 8, iW + 3)
    }

    function cW(WW, iW, OW, mW) {
      for (; mW >= 68;) iW = LW(WW, iW, OW, 64), mW -= 64;
      return mW > 64 && (iW = LW(WW, iW, OW, 60), mW -= 60), LW(WW, iW, OW, mW)
    }

    function wW(WW, iW, LW, wW, tW) {
      for (var ZW = 1; 1 << ZW <= LW && ZW <= 14;) ZW += 1;
      var xW = 32 - (ZW -= 1);
      "undefined" === typeof OW[ZW] && (OW[ZW] = new Uint16Array(1 << ZW));
      var lW, AW = OW[ZW];
      for (lW = 0; lW < AW.length; lW++) AW[lW] = 0;
      var bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, TW = iW + LW,
        JW = iW,
        hW = iW,
        HW = !0;
      if (LW >= 15)
        for (bW = TW - 15, UW = mW(EW(WW, iW += 1), xW); HW;) {
          MW = 32, kW = iW;
          do {
            if (jW = UW, KW = MW >>> 5, MW += 1, kW = (iW = kW) + KW, iW > bW) {
              HW = !1;
              break
            }
            UW = mW(EW(WW, kW), xW), sW = JW + AW[jW], AW[jW] = iW - JW
          } while (!NW(WW, iW, sW));
          if (!HW) break;
          tW = PW(WW, hW, iW - hW, wW, tW);
          do {
            for (SW = iW, YW = 4; iW + YW < TW && WW[iW + YW] === WW[sW + YW];) YW += 1;
            if (iW += YW, tW = cW(wW, tW, SW - sW, YW), hW = iW, iW >= bW) {
              HW = !1;
              break
            }
            AW[mW(EW(WW, iW - 1), xW)] = iW - 1 - JW, sW = JW + AW[yW = mW(EW(WW, iW), xW)], AW[yW] = iW - JW
          } while (NW(WW, iW, sW));
          if (!HW) break;
          UW = mW(EW(WW, iW += 1), xW)
        }
      return hW < TW && (tW = PW(WW, hW, TW - hW, wW, tW)), tW
    }

    function tW(WW) {
      this.array = WW
    }
    tW.prototype.maxCompressedLength = function() {
      var WW = this.array.length;
      return 32 + WW + Math.floor(WW / 6)
    }, tW.prototype.compressToBuffer = function(WW) {
      var iW, OW = this.array,
        mW = OW.length,
        EW = 0,
        NW = 0;
      for (NW = function(WW, iW, OW) {
          do {
            iW[OW] = 127 & WW, (WW >>>= 7) > 0 && (iW[OW] += 128), OW += 1
          } while (WW > 0);
          return OW
        }(mW, WW, NW); EW < mW;) NW = wW(OW, EW, iW = Math.min(mW - EW, 65536), WW, NW), EW += iW;
      return NW
    }, iW.d = tW
  },
  41009: (WW, iW) => {
    var OW = [0, 255, 65535, 16777215, 4294967295];

    function mW(WW, iW, OW, mW, EW) {
      var NW;
      for (NW = 0; NW < EW; NW++) OW[mW + NW] = WW[iW + NW]
    }

    function EW(WW, iW, OW, mW) {
      var EW;
      for (EW = 0; EW < mW; EW++) WW[iW + EW] = WW[iW - OW + EW]
    }

    function NW(WW) {
      this.array = WW, this.pos = 0
    }
    NW.prototype.readUncompressedLength = function() {
      for (var WW, iW, OW = 0, mW = 0; mW < 32 && this.pos < this.array.length;) {
        if (WW = this.array[this.pos], this.pos += 1, (iW = 127 & WW) << mW >>> mW !== iW) return -1;
        if (OW |= iW << mW, WW < 128) return OW;
        mW += 7
      }
      return -1
    }, NW.prototype.uncompressToBuffer = function(WW) {
      for (var iW, NW, PW, LW, cW = this.array, wW = cW.length, tW = this.pos, ZW = 0; tW < cW.length;)
        if (iW = cW[tW], tW += 1, 0 === (3 & iW)) {
          if ((NW = 1 + (iW >>> 2)) > 60) {
            if (tW + 3 >= wW) return !1;
            PW = NW - 60, NW = 1 + ((NW = cW[tW] + (cW[tW + 1] << 8) + (cW[tW + 2] << 16) + (cW[tW + 3] << 24)) & OW[PW]), tW += PW
          }
          if (tW + NW > wW) return !1;
          mW(cW, tW, WW, ZW, NW), tW += NW, ZW += NW
        } else {
          switch (3 & iW) {
            case 1:
              NW = 4 + (iW >>> 2 & 7), LW = cW[tW] + (iW >>> 5 << 8), tW += 1;
              break;
            case 2:
              if (tW + 1 >= wW) return !1;
              NW = 1 + (iW >>> 2), LW = cW[tW] + (cW[tW + 1] << 8), tW += 2;
              break;
            case 3:
              if (tW + 3 >= wW) return !1;
              NW = 1 + (iW >>> 2), LW = cW[tW] + (cW[tW + 1] << 8) + (cW[tW + 2] << 16) + (cW[tW + 3] << 24), tW += 4
          }
          if (0 === LW || LW > ZW) return !1;
          EW(WW, ZW, LW, NW), ZW += NW
        } return !0
    }, iW.c = NW
  },
  37245: WW => {
    WW.exports = function(WW, iW, OW, mW) {
      var EW = self || window;
      try {
        try {
          var NW;
          try {
            NW = new EW.Blob([WW])
          } catch (wW) {
            (NW = new(EW.BlobBuilder || EW.WebKitBlobBuilder || EW.MozBlobBuilder || EW.MSBlobBuilder)).append(WW), NW = NW.getBlob()
          }
          var PW = EW.URL || EW.webkitURL,
            LW = PW.createObjectURL(NW),
            cW = new EW[iW](LW, OW);
          return PW.revokeObjectURL(LW), cW
        } catch (wW) {
          return new EW[iW]("data:application/javascript,".concat(encodeURIComponent(WW)), OW)
        }
      } catch (wW) {
        if (!mW) throw Error("Inline worker is not supported");
        return new EW[iW](mW, OW)
      }
    }
  },
  41149: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      g: () => EW,
      i: () => wW,
      k: () => lW,
      n: () => PW,
      q: () => AW
    });
    var mW = OW(41154);
    const EW = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
      NW = [-1, 1, 2, 3, 4, 5, 6, 8],
      PW = WW => {
        if (!WW || WW.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
        const iW = new mW.c(WW),
          OW = LW(iW),
          {
            frequencyIndex: EW,
            sampleRate: PW
          } = cW(iW),
          wW = iW.readBits(4);
        let tW = null;
        wW >= 1 && wW <= 7 && (tW = NW[wW]);
        let ZW = OW,
          xW = !1,
          lW = PW;
        if (5 === OW || 29 === OW) xW = 29 === OW, lW = cW(iW).sampleRate, ZW = LW(iW), 22 === ZW && iW.skipBits(4);
        else
          for (; iW.getBitsLeft() > 15;) {
            const WW = iW.pos;
            if (695 === iW.readBits(11)) {
              5 === LW(iW) && iW.readBits(1) && (lW = cW(iW).sampleRate, iW.getBitsLeft() > 11 && 1352 === iW.readBits(11) && (xW = !!iW.readBits(1)));
              break
            }
            iW.pos = WW + 1
          }
        return null !== tW && tW > 1 && (xW = !1), {
          objectType: OW,
          coreObjectType: ZW,
          frequencyIndex: EW,
          channelConfiguration: wW,
          outputSampleRate: lW,
          outputNumberOfChannels: xW && 1 === tW ? 2 : tW
        }
      },
      LW = WW => {
        const iW = WW.readBits(5);
        return 31 === iW ? 32 + WW.readBits(6) : iW
      },
      cW = WW => {
        const iW = WW.readBits(4);
        return 15 === iW ? {
          frequencyIndex: iW,
          sampleRate: WW.readBits(24)
        } : {
          frequencyIndex: iW,
          sampleRate: iW < EW.length ? EW[iW] : null
        }
      },
      wW = WW => {
        const iW = 5 === WW.objectType || 29 === WW.objectType,
          OW = 29 === WW.objectType,
          EW = iW ? WW.outputSampleRate / 2 : WW.outputSampleRate,
          PW = OW ? 1 : WW.outputNumberOfChannels,
          LW = NW.indexOf(PW);
        if (-1 === LW) throw new TypeError(`Unsupported number of channels: ${WW.outputNumberOfChannels}`);
        let cW = 16;
        WW.objectType >= 32 && (cW += 6), 15 === xW(EW) && (cW += 24), iW && (cW += 9, 15 === xW(WW.outputSampleRate) && (cW += 24));
        const wW = Math.ceil(cW / 8),
          lW = new Uint8Array(wW),
          AW = new mW.c(lW);
        return tW(AW, WW.objectType), ZW(AW, EW), AW.writeBits(4, LW), iW && (ZW(AW, WW.outputSampleRate), tW(AW, 2)), AW.writeBits(3, 0), lW
      },
      tW = (WW, iW) => {
        iW < 32 ? WW.writeBits(5, iW) : (WW.writeBits(5, 31), WW.writeBits(6, iW - 32))
      },
      ZW = (WW, iW) => {
        const OW = xW(iW);
        WW.writeBits(4, OW), 15 === OW && WW.writeBits(24, iW)
      },
      xW = WW => {
        const iW = EW.indexOf(WW);
        return -1 === iW ? 15 : iW
      },
      lW = WW => {
        const iW = new Uint8Array(7),
          OW = new mW.c(iW),
          {
            coreObjectType: EW,
            frequencyIndex: NW,
            channelConfiguration: PW
          } = WW,
          LW = EW - 1;
        return OW.writeBits(12, 4095), OW.writeBits(1, 0), OW.writeBits(2, 0), OW.writeBits(1, 1), OW.writeBits(2, LW), OW.writeBits(4, NW), OW.writeBits(1, 0), OW.writeBits(3, PW), OW.writeBits(1, 0), OW.writeBits(1, 0), OW.writeBits(1, 0), OW.writeBits(1, 0), OW.skipBits(13), OW.writeBits(11, 2047), OW.writeBits(2, 0), {
          header: iW,
          bitstream: OW
        }
      },
      AW = (WW, iW) => {
        WW.pos = 30, WW.writeBits(13, iW)
      }
  },
  41154: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      constructor(WW) {
        this.bytes = WW, this.pos = 0
      }
      seekToByte(WW) {
        this.pos = 8 * WW
      }
      readBit() {
        const WW = Math.floor(this.pos / 8),
          iW = this.bytes[WW] ?? 0,
          OW = 7 - (7 & this.pos),
          mW = (iW & 1 << OW) >> OW;
        return this.pos++, mW
      }
      readBits(WW) {
        if (1 === WW) return this.readBit();
        let iW = 0;
        for (let OW = 0; OW < WW; OW++) iW <<= 1, iW |= this.readBit();
        return iW
      }
      writeBits(WW, iW) {
        const OW = this.pos + WW;
        for (let mW = this.pos; mW < OW; mW++) {
          const WW = Math.floor(mW / 8);
          let EW = this.bytes[WW];
          const NW = 7 - (7 & mW);
          EW &= ~(1 << NW), EW |= (iW & 1 << OW - mW - 1) >> OW - mW - 1 << NW, this.bytes[WW] = EW
        }
        this.pos = OW
      }
      copyBits(WW, iW) {
        let OW = 0;
        for (; OW < WW - 7; OW += 8) this.writeBits(8, iW.readBits(8));
        const mW = WW - OW;
        mW > 0 && this.writeBits(mW, iW.readBits(mW))
      }
      readAlignedByte() {
        if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
        const WW = this.pos / 8,
          iW = this.bytes[WW] ?? 0;
        return this.pos += 8, iW
      }
      skipBits(WW) {
        this.pos += WW
      }
      getBitsLeft() {
        return 8 * this.bytes.length - this.pos
      }
      clone() {
        const WW = new mW(this.bytes);
        return WW.pos = this.pos, WW
      }
    }
  },
  41160: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => QW,
      g: () => cW,
      i: () => Wi,
      k: () => rW,
      m: () => wW,
      o: () => BW,
      q: () => Ai,
      s: () => UW,
      v: () => kW,
      y: () => zW,
      A: () => KW,
      E: () => DW,
      G: () => aW,
      N: () => XW,
      J: () => sW,
      P: () => hW,
      S: () => AW,
      U: () => JW,
      V: () => fW,
      Z: () => xW,
      bb: () => lW,
      cb: () => FW,
      eb: () => Zi,
      hb: () => Oi,
      kb: () => IW,
      nb: () => qW,
      pb: () => GW,
      rb: () => MW,
      ub: () => gW
    });
    var mW = OW(41156),
      EW = OW(41127),
      NW = OW(41162);
    const PW = [48e3, 44100, 32e3],
      LW = [24e3, 22050, 16e3];
    var cW, wW, tW = OW(41154),
      ZW = OW(41164);
    ! function(WW) {
      WW[WW.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", WW[WW.SLICE_DPA = 2] = "SLICE_DPA", WW[WW.SLICE_DPB = 3] = "SLICE_DPB", WW[WW.SLICE_DPC = 4] = "SLICE_DPC", WW[WW.IDR = 5] = "IDR", WW[WW.SEI = 6] = "SEI", WW[WW.SPS = 7] = "SPS", WW[WW.PPS = 8] = "PPS", WW[WW.AUD = 9] = "AUD", WW[WW.SPS_EXT = 13] = "SPS_EXT"
    }(cW || (cW = {})),
    function(WW) {
      WW[WW.RASL_N = 8] = "RASL_N", WW[WW.RASL_R = 9] = "RASL_R", WW[WW.BLA_W_LP = 16] = "BLA_W_LP", WW[WW.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", WW[WW.VPS_NUT = 32] = "VPS_NUT", WW[WW.SPS_NUT = 33] = "SPS_NUT", WW[WW.PPS_NUT = 34] = "PPS_NUT", WW[WW.AUD_NUT = 35] = "AUD_NUT", WW[WW.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", WW[WW.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT"
    }(wW || (wW = {}));
    const xW = function*(WW) {
        let iW = 0,
          OW = -1;
        for (; iW < WW.length - 2;) {
          const mW = WW.indexOf(0, iW);
          if (-1 === mW || mW >= WW.length - 2) break;
          iW = mW;
          let EW = 0;
          iW + 3 < WW.length && 0 === WW[iW + 1] && 0 === WW[iW + 2] && 1 === WW[iW + 3] ? EW = 4 : 0 === WW[iW + 1] && 1 === WW[iW + 2] && (EW = 3), 0 !== EW ? (-1 !== OW && iW > OW && (yield {
            offset: OW,
            length: iW - OW
          }), OW = iW + EW, iW = OW) : iW++
        } - 1 !== OW && OW < WW.length && (yield {
          offset: OW,
          length: WW.length - OW
        })
      },
      lW = function*(WW, iW) {
        let OW = 0;
        const mW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
        for (; OW + iW <= WW.length;) {
          let WW;
          1 === iW ? WW = mW.getUint8(OW) : 2 === iW ? WW = mW.getUint16(OW, !1) : 3 === iW ? WW = (0, EW.ub)(mW, OW, !1) : ((0, EW.K)(4 === iW), WW = mW.getUint32(OW, !1)), OW += iW, yield {
            offset: OW,
            length: WW
          }, OW += WW
        }
      },
      AW = WW => 31 & WW,
      bW = WW => {
        const iW = [],
          OW = WW.length;
        for (let mW = 0; mW < OW; mW++) mW + 2 < OW && 0 === WW[mW] && 0 === WW[mW + 1] && 3 === WW[mW + 2] ? (iW.push(0, 0), mW += 2) : iW.push(WW[mW]);
        return new Uint8Array(iW)
      },
      jW = new Uint8Array([0, 0, 0, 1]),
      UW = WW => {
        const iW = WW.reduce(((WW, iW) => WW + jW.byteLength + iW.byteLength), 0),
          OW = new Uint8Array(iW);
        let mW = 0;
        for (const EW of WW) OW.set(jW, mW), mW += jW.byteLength, OW.set(EW, mW), mW += EW.byteLength;
        return OW
      },
      kW = (WW, iW) => {
        const OW = WW.reduce(((WW, OW) => WW + iW + OW.byteLength), 0),
          mW = new Uint8Array(OW);
        let NW = 0;
        for (const PW of WW) {
          const WW = new DataView(mW.buffer, mW.byteOffset, mW.byteLength);
          switch (iW) {
            case 1:
              WW.setUint8(NW, PW.byteLength);
              break;
            case 2:
              WW.setUint16(NW, PW.byteLength, !1);
              break;
            case 3:
              (0, EW.cd)(WW, NW, PW.byteLength, !1);
              break;
            case 4:
              WW.setUint32(NW, PW.byteLength, !1)
          }
          NW += iW, mW.set(PW, NW), NW += PW.byteLength
        }
        return mW
      },
      sW = WW => {
        try {
          const iW = [],
            OW = [],
            mW = [];
          for (const EW of xW(WW)) {
            const NW = WW.subarray(EW.offset, EW.offset + EW.length),
              PW = AW(NW[0]);
            PW === cW.SPS ? iW.push(NW) : PW === cW.PPS ? OW.push(NW) : PW === cW.SPS_EXT && mW.push(NW)
          }
          if (0 === iW.length) return null;
          if (0 === OW.length) return null;
          const NW = iW[0],
            PW = YW(NW);
          (0, EW.K)(null !== PW);
          const LW = 100 === PW.profileIdc || 110 === PW.profileIdc || 122 === PW.profileIdc || 144 === PW.profileIdc;
          return {
            configurationVersion: 1,
            avcProfileIndication: PW.profileIdc,
            profileCompatibility: PW.constraintFlags,
            avcLevelIndication: PW.levelIdc,
            lengthSizeMinusOne: 3,
            sequenceParameterSets: iW,
            pictureParameterSets: OW,
            chromaFormat: LW ? PW.chromaFormatIdc : null,
            bitDepthLumaMinus8: LW ? PW.bitDepthLumaMinus8 : null,
            bitDepthChromaMinus8: LW ? PW.bitDepthChromaMinus8 : null,
            sequenceParameterSetExt: LW ? mW : null
          }
        } catch (iW) {
          return NW.d._error("Error building AVC Decoder Configuration Record:", iW), null
        }
      },
      MW = WW => {
        const iW = [];
        iW.push(WW.configurationVersion), iW.push(WW.avcProfileIndication), iW.push(WW.profileCompatibility), iW.push(WW.avcLevelIndication), iW.push(252 | 3 & WW.lengthSizeMinusOne), iW.push(224 | 31 & WW.sequenceParameterSets.length);
        for (const OW of WW.sequenceParameterSets) {
          const WW = OW.byteLength;
          iW.push(WW >> 8), iW.push(255 & WW);
          for (let mW = 0; mW < WW; mW++) iW.push(OW[mW])
        }
        iW.push(WW.pictureParameterSets.length);
        for (const OW of WW.pictureParameterSets) {
          const WW = OW.byteLength;
          iW.push(WW >> 8), iW.push(255 & WW);
          for (let mW = 0; mW < WW; mW++) iW.push(OW[mW])
        }
        if ((100 === WW.avcProfileIndication || 110 === WW.avcProfileIndication || 122 === WW.avcProfileIndication || 144 === WW.avcProfileIndication) && null !== WW.chromaFormat) {
          (0, EW.K)(null !== WW.bitDepthLumaMinus8), (0, EW.K)(null !== WW.bitDepthChromaMinus8), (0, EW.K)(null !== WW.sequenceParameterSetExt), iW.push(252 | 3 & WW.chromaFormat), iW.push(248 | 7 & WW.bitDepthLumaMinus8), iW.push(248 | 7 & WW.bitDepthChromaMinus8), iW.push(WW.sequenceParameterSetExt.length);
          for (const OW of WW.sequenceParameterSetExt) {
            const WW = OW.byteLength;
            iW.push(WW >> 8), iW.push(255 & WW);
            for (let mW = 0; mW < WW; mW++) iW.push(OW[mW])
          }
        }
        return new Uint8Array(iW)
      },
      KW = WW => {
        try {
          const iW = (0, EW.od)(WW);
          let OW = 0;
          const mW = iW.getUint8(OW++),
            NW = iW.getUint8(OW++),
            PW = iW.getUint8(OW++),
            LW = iW.getUint8(OW++),
            cW = 3 & iW.getUint8(OW++),
            wW = 31 & iW.getUint8(OW++),
            tW = [];
          for (let EW = 0; EW < wW; EW++) {
            const mW = iW.getUint16(OW, !1);
            OW += 2, tW.push(WW.subarray(OW, OW + mW)), OW += mW
          }
          const ZW = iW.getUint8(OW++),
            xW = [];
          for (let EW = 0; EW < ZW; EW++) {
            const mW = iW.getUint16(OW, !1);
            OW += 2, xW.push(WW.subarray(OW, OW + mW)), OW += mW
          }
          const lW = {
            configurationVersion: mW,
            avcProfileIndication: NW,
            profileCompatibility: PW,
            avcLevelIndication: LW,
            lengthSizeMinusOne: cW,
            sequenceParameterSets: tW,
            pictureParameterSets: xW,
            chromaFormat: null,
            bitDepthLumaMinus8: null,
            bitDepthChromaMinus8: null,
            sequenceParameterSetExt: null
          };
          if ((100 === NW || 110 === NW || 122 === NW || 144 === NW) && OW + 4 <= WW.length) {
            const mW = 3 & iW.getUint8(OW++),
              EW = 7 & iW.getUint8(OW++),
              NW = 7 & iW.getUint8(OW++),
              PW = iW.getUint8(OW++);
            lW.chromaFormat = mW, lW.bitDepthLumaMinus8 = EW, lW.bitDepthChromaMinus8 = NW;
            const LW = [];
            for (let cW = 0; cW < PW; cW++) {
              const mW = iW.getUint16(OW, !1);
              OW += 2, LW.push(WW.subarray(OW, OW + mW)), OW += mW
            }
            lW.sequenceParameterSetExt = LW
          }
          return lW
        } catch (iW) {
          return NW.d._error("Error deserializing AVC Decoder Configuration Record:", iW), null
        }
      },
      SW = {
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
      YW = WW => {
        try {
          const iW = bW(WW),
            OW = new tW.c(iW);
          OW.skipBits(1), OW.skipBits(2);
          if (7 !== OW.readBits(5)) return null;
          const NW = OW.readAlignedByte(),
            PW = OW.readAlignedByte(),
            LW = OW.readAlignedByte();
          (0, EW.Ic)(OW);
          let cW = 1,
            wW = 0,
            ZW = 0,
            xW = 0;
          if (100 === NW || 110 === NW || 122 === NW || 244 === NW || 44 === NW || 83 === NW || 86 === NW || 118 === NW || 128 === NW) {
            cW = (0, EW.Ic)(OW), 3 === cW && (xW = OW.readBits(1)), wW = (0, EW.Ic)(OW), ZW = (0, EW.Ic)(OW), OW.skipBits(1);
            if (OW.readBits(1))
              for (let WW = 0; WW < (3 !== cW ? 8 : 12); WW++) {
                if (OW.readBits(1)) {
                  const iW = WW < 6 ? 16 : 64;
                  let mW = 8,
                    NW = 8;
                  for (let WW = 0; WW < iW; WW++) {
                    if (0 !== NW) {
                      NW = (mW + (0, EW.Jc)(OW) + 256) % 256
                    }
                    mW = 0 === NW ? mW : NW
                  }
                }
              }
          }(0, EW.Ic)(OW);
          const lW = (0, EW.Ic)(OW);
          if (0 === lW)(0, EW.Ic)(OW);
          else if (1 === lW) {
            OW.skipBits(1), (0, EW.Jc)(OW), (0, EW.Jc)(OW);
            const WW = (0, EW.Ic)(OW);
            for (let iW = 0; iW < WW; iW++)(0, EW.Jc)(OW)
          }(0, EW.Ic)(OW), OW.skipBits(1);
          const AW = (0, EW.Ic)(OW),
            jW = (0, EW.Ic)(OW),
            UW = 16 * (AW + 1),
            kW = 16 * (jW + 1);
          let sW = UW,
            MW = kW;
          const KW = OW.readBits(1);
          KW || OW.skipBits(1), OW.skipBits(1);
          if (OW.readBits(1)) {
            const WW = (0, EW.Ic)(OW),
              iW = (0, EW.Ic)(OW),
              mW = (0, EW.Ic)(OW),
              NW = (0, EW.Ic)(OW);
            let PW, LW;
            if (0 === (0 === xW ? cW : 0)) PW = 1, LW = 2 - KW;
            else {
              PW = 3 === cW ? 1 : 2, LW = (1 === cW ? 2 : 1) * (2 - KW)
            }
            sW -= PW * (WW + iW), MW -= LW * (mW + NW)
          }
          let YW = 2,
            TW = 2,
            JW = 2,
            hW = 0,
            HW = {
              num: 1,
              den: 1
            },
            nW = null,
            uW = null,
            oW = null,
            dW = null;
          const eW = OW.pos;
          if (OW.readBits(1)) {
            if (OW.readBits(1)) {
              const WW = OW.readBits(8);
              if (255 === WW) HW = {
                num: OW.readBits(16),
                den: OW.readBits(16)
              };
              else {
                const iW = SW[WW];
                iW && (HW = iW)
              }
            }
            OW.readBits(1) && OW.skipBits(1);
            if (OW.readBits(1)) {
              OW.skipBits(3), hW = OW.readBits(1);
              OW.readBits(1) && (YW = OW.readBits(8), TW = OW.readBits(8), JW = OW.readBits(8))
            }
            OW.readBits(1) && ((0, EW.Ic)(OW), (0, EW.Ic)(OW));
            OW.readBits(1) && (OW.skipBits(32), OW.skipBits(32), OW.skipBits(1));
            const WW = OW.readBits(1);
            WW && yW(OW);
            const iW = OW.readBits(1);
            iW && yW(OW), (WW || iW) && OW.skipBits(1), OW.skipBits(1), oW = OW.pos, dW = OW.readBits(1), dW && (OW.skipBits(1), (0, EW.Ic)(OW), (0, EW.Ic)(OW), (0, EW.Ic)(OW), (0, EW.Ic)(OW), nW = (0, EW.Ic)(OW), uW = (0, EW.Ic)(OW))
          }
          if (null === nW) {
            (0, EW.K)(null === uW);
            if (44 !== NW && 86 !== NW && 100 !== NW && 110 !== NW && 122 !== NW && 244 !== NW || !(16 & PW)) {
              const WW = AW + 1,
                iW = (2 - KW) * (jW + 1),
                OW = mW.h.find((WW => WW.level >= LW)) ?? (0, EW.mc)(mW.h),
                NW = Math.min(Math.floor(OW.maxDpbMbs / (WW * iW)), 16);
              nW = NW, uW = NW
            } else nW = 0, uW = 0
          }
          return (0, EW.K)(null !== uW), {
            emulationUnpreventedBytes: iW,
            profileIdc: NW,
            constraintFlags: PW,
            levelIdc: LW,
            frameMbsOnlyFlag: KW,
            chromaFormatIdc: cW,
            bitDepthLumaMinus8: wW,
            bitDepthChromaMinus8: ZW,
            codedWidth: UW,
            codedHeight: kW,
            displayWidth: sW,
            displayHeight: MW,
            pixelAspectRatio: HW,
            colourPrimaries: YW,
            matrixCoefficients: JW,
            transferCharacteristics: TW,
            fullRangeFlag: hW,
            numReorderFrames: nW,
            maxDecFrameBuffering: uW,
            vuiParametersFlagBitOffset: eW,
            bitstreamRestrictionFlagBitOffset: oW,
            bitstreamRestrictionFlag: dW
          }
        } catch (iW) {
          return NW.d._error("Error parsing AVC SPS:", iW), null
        }
      },
      yW = WW => {
        const iW = (0, EW.Ic)(WW);
        WW.skipBits(4), WW.skipBits(4);
        for (let OW = 0; OW <= iW; OW++)(0, EW.Ic)(WW), (0, EW.Ic)(WW), WW.skipBits(1);
        WW.skipBits(5), WW.skipBits(5), WW.skipBits(5), WW.skipBits(5)
      },
      TW = (WW, iW) => {
        if (iW.description) {
          const OW = 3 & (0, EW.pd)(iW.description)[21];
          return lW(WW, OW + 1)
        }
        return xW(WW)
      },
      JW = WW => WW >> 1 & 63,
      hW = WW => {
        try {
          const iW = [],
            OW = [],
            mW = [],
            PW = [];
          for (const EW of xW(WW)) {
            const NW = WW.subarray(EW.offset, EW.offset + EW.length),
              LW = JW(NW[0]);
            LW === wW.VPS_NUT ? iW.push(NW) : LW === wW.SPS_NUT ? OW.push(NW) : LW === wW.PPS_NUT ? mW.push(NW) : LW !== wW.PREFIX_SEI_NUT && LW !== wW.SUFFIX_SEI_NUT || PW.push(NW)
          }
          if (0 === OW.length || 0 === mW.length) return null;
          const LW = (WW => {
            try {
              const iW = new tW.c(bW(WW));
              iW.skipBits(16), iW.readBits(4);
              const OW = iW.readBits(3),
                mW = iW.readBits(1),
                {
                  general_profile_space: NW,
                  general_tier_flag: PW,
                  general_profile_idc: LW,
                  general_profile_compatibility_flags: cW,
                  general_constraint_indicator_flags: wW,
                  general_level_idc: ZW
                } = HW(iW, OW);
              (0, EW.Ic)(iW);
              const xW = (0, EW.Ic)(iW);
              let lW = 0;
              3 === xW && (lW = iW.readBits(1));
              const AW = (0, EW.Ic)(iW),
                jW = (0, EW.Ic)(iW);
              let UW = AW,
                kW = jW;
              if (iW.readBits(1)) {
                const WW = (0, EW.Ic)(iW),
                  OW = (0, EW.Ic)(iW),
                  mW = (0, EW.Ic)(iW),
                  NW = (0, EW.Ic)(iW);
                let PW = 1,
                  LW = 1;
                const cW = 0 === lW ? xW : 0;
                1 === cW ? (PW = 2, LW = 2) : 2 === cW && (PW = 2, LW = 1), UW -= (WW + OW) * PW, kW -= (mW + NW) * LW
              }
              const sW = (0, EW.Ic)(iW),
                MW = (0, EW.Ic)(iW);
              (0, EW.Ic)(iW);
              const KW = iW.readBits(1);
              let SW = 0;
              for (let WW = KW ? 0 : OW; WW <= OW; WW++)(0, EW.Ic)(iW), SW = (0, EW.Ic)(iW), (0, EW.Ic)(iW);
              (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Ic)(iW), iW.readBits(1) && iW.readBits(1) && nW(iW), iW.skipBits(1), iW.skipBits(1), iW.readBits(1) && (iW.skipBits(4), iW.skipBits(4), (0, EW.Ic)(iW), (0, EW.Ic)(iW), iW.skipBits(1));
              const YW = (0, EW.Ic)(iW);
              if (uW(iW, YW), iW.readBits(1)) {
                const WW = (0, EW.Ic)(iW);
                for (let OW = 0; OW < WW; OW++)(0, EW.Ic)(iW), iW.skipBits(1)
              }
              iW.skipBits(1), iW.skipBits(1);
              let yW = 2,
                TW = 2,
                JW = 2,
                hW = 0,
                oW = 0,
                eW = {
                  num: 1,
                  den: 1
                };
              if (iW.readBits(1)) {
                const WW = dW(iW, OW);
                eW = WW.pixelAspectRatio, yW = WW.colourPrimaries, TW = WW.transferCharacteristics, JW = WW.matrixCoefficients, hW = WW.fullRangeFlag, oW = WW.minSpatialSegmentationIdc
              }
              return {
                displayWidth: UW,
                displayHeight: kW,
                pixelAspectRatio: eW,
                colourPrimaries: yW,
                transferCharacteristics: TW,
                matrixCoefficients: JW,
                fullRangeFlag: hW,
                maxDecFrameBuffering: SW + 1,
                spsMaxSubLayersMinus1: OW,
                spsTemporalIdNestingFlag: mW,
                generalProfileSpace: NW,
                generalTierFlag: PW,
                generalProfileIdc: LW,
                generalProfileCompatibilityFlags: cW,
                generalConstraintIndicatorFlags: wW,
                generalLevelIdc: ZW,
                chromaFormatIdc: xW,
                bitDepthLumaMinus8: sW,
                bitDepthChromaMinus8: MW,
                minSpatialSegmentationIdc: oW
              }
            } catch (iW) {
              return NW.d._error("Error parsing HEVC SPS:", iW), null
            }
          })(OW[0]);
          if (!LW) return null;
          let cW = 0;
          if (mW.length > 0) {
            const WW = mW[0],
              iW = new tW.c(bW(WW));
            iW.skipBits(16), (0, EW.Ic)(iW), (0, EW.Ic)(iW), iW.skipBits(1), iW.skipBits(1), iW.skipBits(3), iW.skipBits(1), iW.skipBits(1), (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Jc)(iW), iW.skipBits(1), iW.skipBits(1), iW.readBits(1) && (0, EW.Ic)(iW), (0, EW.Jc)(iW), (0, EW.Jc)(iW), iW.skipBits(1), iW.skipBits(1), iW.skipBits(1), iW.skipBits(1);
            const OW = iW.readBits(1),
              NW = iW.readBits(1);
            cW = OW || NW ? OW && !NW ? 2 : !OW && NW ? 3 : 0 : 0
          }
          const ZW = [...iW.length ? [{
            arrayCompleteness: 1,
            nalUnitType: wW.VPS_NUT,
            nalUnits: iW
          }] : [], ...OW.length ? [{
            arrayCompleteness: 1,
            nalUnitType: wW.SPS_NUT,
            nalUnits: OW
          }] : [], ...mW.length ? [{
            arrayCompleteness: 1,
            nalUnitType: wW.PPS_NUT,
            nalUnits: mW
          }] : [], ...PW.length ? [{
            arrayCompleteness: 1,
            nalUnitType: JW(PW[0][0]),
            nalUnits: PW
          }] : []];
          return {
            configurationVersion: 1,
            generalProfileSpace: LW.generalProfileSpace,
            generalTierFlag: LW.generalTierFlag,
            generalProfileIdc: LW.generalProfileIdc,
            generalProfileCompatibilityFlags: LW.generalProfileCompatibilityFlags,
            generalConstraintIndicatorFlags: LW.generalConstraintIndicatorFlags,
            generalLevelIdc: LW.generalLevelIdc,
            minSpatialSegmentationIdc: LW.minSpatialSegmentationIdc,
            parallelismType: cW,
            chromaFormatIdc: LW.chromaFormatIdc,
            bitDepthLumaMinus8: LW.bitDepthLumaMinus8,
            bitDepthChromaMinus8: LW.bitDepthChromaMinus8,
            avgFrameRate: 0,
            constantFrameRate: 0,
            numTemporalLayers: LW.spsMaxSubLayersMinus1 + 1,
            temporalIdNested: LW.spsTemporalIdNestingFlag,
            lengthSizeMinusOne: 3,
            arrays: ZW
          }
        } catch (iW) {
          return NW.d._error("Error building HEVC Decoder Configuration Record:", iW), null
        }
      },
      HW = (WW, iW) => {
        const OW = WW.readBits(2),
          mW = WW.readBits(1),
          EW = WW.readBits(5);
        let NW = 0;
        for (let tW = 0; tW < 32; tW++) NW = NW << 1 | WW.readBits(1);
        const PW = new Uint8Array(6);
        for (let tW = 0; tW < 6; tW++) PW[tW] = WW.readBits(8);
        const LW = WW.readBits(8),
          cW = [],
          wW = [];
        for (let tW = 0; tW < iW; tW++) cW.push(WW.readBits(1)), wW.push(WW.readBits(1));
        if (iW > 0)
          for (let tW = iW; tW < 8; tW++) WW.skipBits(2);
        for (let tW = 0; tW < iW; tW++) cW[tW] && WW.skipBits(88), wW[tW] && WW.skipBits(8);
        return {
          general_profile_space: OW,
          general_tier_flag: mW,
          general_profile_idc: EW,
          general_profile_compatibility_flags: NW,
          general_constraint_indicator_flags: PW,
          general_level_idc: LW
        }
      },
      nW = WW => {
        for (let iW = 0; iW < 4; iW++)
          for (let OW = 0; OW < (3 === iW ? 2 : 6); OW++) {
            if (WW.readBits(1)) {
              const OW = Math.min(64, 1 << 4 + (iW << 1));
              iW > 1 && (0, EW.Jc)(WW);
              for (let iW = 0; iW < OW; iW++)(0, EW.Jc)(WW)
            } else(0, EW.Ic)(WW)
          }
      },
      uW = (WW, iW) => {
        const OW = [];
        for (let mW = 0; mW < iW; mW++) OW[mW] = oW(WW, mW, iW, OW)
      },
      oW = (WW, iW, OW, mW) => {
        let NW = 0,
          PW = 0,
          LW = 0;
        if (0 !== iW && (PW = WW.readBits(1)), PW) {
          if (iW === OW) {
            LW = iW - ((0, EW.Ic)(WW) + 1)
          } else LW = iW - 1;
          WW.readBits(1), (0, EW.Ic)(WW);
          const PW = mW[LW] ?? 0;
          for (let iW = 0; iW <= PW; iW++) {
            WW.readBits(1) || WW.readBits(1)
          }
          NW = mW[LW]
        } else {
          const iW = (0, EW.Ic)(WW),
            OW = (0, EW.Ic)(WW);
          for (let mW = 0; mW < iW; mW++)(0, EW.Ic)(WW), WW.readBits(1);
          for (let mW = 0; mW < OW; mW++)(0, EW.Ic)(WW), WW.readBits(1);
          NW = iW + OW
        }
        return NW
      },
      dW = (WW, iW) => {
        let OW = 2,
          mW = 2,
          NW = 2,
          PW = 0,
          LW = 0,
          cW = {
            num: 1,
            den: 1
          };
        if (WW.readBits(1)) {
          const iW = WW.readBits(8);
          if (255 === iW) cW = {
            num: WW.readBits(16),
            den: WW.readBits(16)
          };
          else {
            const WW = SW[iW];
            WW && (cW = WW)
          }
        }
        return WW.readBits(1) && WW.readBits(1), WW.readBits(1) && (WW.readBits(3), PW = WW.readBits(1), WW.readBits(1) && (OW = WW.readBits(8), mW = WW.readBits(8), NW = WW.readBits(8))), WW.readBits(1) && ((0, EW.Ic)(WW), (0, EW.Ic)(WW)), WW.readBits(1), WW.readBits(1), WW.readBits(1), WW.readBits(1) && ((0, EW.Ic)(WW), (0, EW.Ic)(WW), (0, EW.Ic)(WW), (0, EW.Ic)(WW)), WW.readBits(1) && (WW.readBits(32), WW.readBits(32), WW.readBits(1) && (0, EW.Ic)(WW), WW.readBits(1) && eW(WW, !0, iW)), WW.readBits(1) && (WW.readBits(1), WW.readBits(1), WW.readBits(1), LW = (0, EW.Ic)(WW), (0, EW.Ic)(WW), (0, EW.Ic)(WW), (0, EW.Ic)(WW), (0, EW.Ic)(WW)), {
          pixelAspectRatio: cW,
          colourPrimaries: OW,
          transferCharacteristics: mW,
          matrixCoefficients: NW,
          fullRangeFlag: PW,
          minSpatialSegmentationIdc: LW
        }
      },
      eW = (WW, iW, OW) => {
        let mW = !1,
          NW = !1,
          PW = !1;
        iW && (mW = 1 === WW.readBits(1), NW = 1 === WW.readBits(1), (mW || NW) && (PW = 1 === WW.readBits(1), PW && (WW.readBits(8), WW.readBits(5), WW.readBits(1), WW.readBits(5)), WW.readBits(4), WW.readBits(4), PW && WW.readBits(4), WW.readBits(5), WW.readBits(5), WW.readBits(5)));
        for (let LW = 0; LW <= OW; LW++) {
          let iW = !0;
          1 === WW.readBits(1) || (iW = 1 === WW.readBits(1));
          let OW = !1;
          iW ? (0, EW.Ic)(WW) : OW = 1 === WW.readBits(1);
          let LW = 1;
          if (!OW) {
            LW = (0, EW.Ic)(WW) + 1
          }
          mW && vW(WW, LW, PW), NW && vW(WW, LW, PW)
        }
      },
      vW = (WW, iW, OW) => {
        for (let mW = 0; mW < iW; mW++)(0, EW.Ic)(WW), (0, EW.Ic)(WW), OW && ((0, EW.Ic)(WW), (0, EW.Ic)(WW)), WW.readBits(1)
      },
      gW = WW => {
        const iW = [];
        iW.push(WW.configurationVersion), iW.push((3 & WW.generalProfileSpace) << 6 | (1 & WW.generalTierFlag) << 5 | 31 & WW.generalProfileIdc), iW.push(WW.generalProfileCompatibilityFlags >>> 24 & 255), iW.push(WW.generalProfileCompatibilityFlags >>> 16 & 255), iW.push(WW.generalProfileCompatibilityFlags >>> 8 & 255), iW.push(255 & WW.generalProfileCompatibilityFlags), iW.push(...WW.generalConstraintIndicatorFlags), iW.push(255 & WW.generalLevelIdc), iW.push(240 | WW.minSpatialSegmentationIdc >> 8 & 15), iW.push(255 & WW.minSpatialSegmentationIdc), iW.push(252 | 3 & WW.parallelismType), iW.push(252 | 3 & WW.chromaFormatIdc), iW.push(248 | 7 & WW.bitDepthLumaMinus8), iW.push(248 | 7 & WW.bitDepthChromaMinus8), iW.push(WW.avgFrameRate >> 8 & 255), iW.push(255 & WW.avgFrameRate), iW.push((3 & WW.constantFrameRate) << 6 | (7 & WW.numTemporalLayers) << 3 | (1 & WW.temporalIdNested) << 2 | 3 & WW.lengthSizeMinusOne), iW.push(255 & WW.arrays.length);
        for (const OW of WW.arrays) {
          iW.push((1 & OW.arrayCompleteness) << 7 | 63 & OW.nalUnitType), iW.push(OW.nalUnits.length >> 8 & 255), iW.push(255 & OW.nalUnits.length);
          for (const WW of OW.nalUnits) {
            iW.push(WW.length >> 8 & 255), iW.push(255 & WW.length);
            for (let OW = 0; OW < WW.length; OW++) iW.push(WW[OW])
          }
        }
        return new Uint8Array(iW)
      },
      DW = WW => {
        try {
          const iW = (0, EW.od)(WW);
          let OW = 0;
          const mW = iW.getUint8(OW++),
            NW = iW.getUint8(OW++),
            PW = NW >> 6 & 3,
            LW = NW >> 5 & 1,
            cW = 31 & NW,
            wW = iW.getUint32(OW, !1);
          OW += 4;
          const tW = WW.subarray(OW, OW + 6);
          OW += 6;
          const ZW = iW.getUint8(OW++),
            xW = (15 & iW.getUint8(OW++)) << 8 | iW.getUint8(OW++),
            lW = 3 & iW.getUint8(OW++),
            AW = 3 & iW.getUint8(OW++),
            bW = 7 & iW.getUint8(OW++),
            jW = 7 & iW.getUint8(OW++),
            UW = iW.getUint16(OW, !1);
          OW += 2;
          const kW = iW.getUint8(OW++),
            sW = kW >> 6 & 3,
            MW = kW >> 3 & 7,
            KW = kW >> 2 & 1,
            SW = 3 & kW,
            YW = iW.getUint8(OW++),
            yW = [];
          for (let EW = 0; EW < YW; EW++) {
            const mW = iW.getUint8(OW++),
              EW = mW >> 7 & 1,
              NW = 63 & mW,
              PW = iW.getUint16(OW, !1);
            OW += 2;
            const LW = [];
            for (let cW = 0; cW < PW; cW++) {
              const mW = iW.getUint16(OW, !1);
              OW += 2, LW.push(WW.subarray(OW, OW + mW)), OW += mW
            }
            yW.push({
              arrayCompleteness: EW,
              nalUnitType: NW,
              nalUnits: LW
            })
          }
          return {
            configurationVersion: mW,
            generalProfileSpace: PW,
            generalTierFlag: LW,
            generalProfileIdc: cW,
            generalProfileCompatibilityFlags: wW,
            generalConstraintIndicatorFlags: tW,
            generalLevelIdc: ZW,
            minSpatialSegmentationIdc: xW,
            parallelismType: lW,
            chromaFormatIdc: AW,
            bitDepthLumaMinus8: bW,
            bitDepthChromaMinus8: jW,
            avgFrameRate: UW,
            constantFrameRate: sW,
            numTemporalLayers: MW,
            temporalIdNested: KW,
            lengthSizeMinusOne: SW,
            arrays: yW
          }
        } catch (iW) {
          return NW.d._error("Error deserializing HEVC Decoder Configuration Record:", iW), null
        }
      };
    var VW;
    ! function(WW) {
      WW[WW.audAllowed = 0] = "audAllowed", WW[WW.beforeFirstVcl = 1] = "beforeFirstVcl", WW[WW.afterFirstVcl = 2] = "afterFirstVcl", WW[WW.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", WW[WW.noMoreDataAllowed = 4] = "noMoreDataAllowed"
    }(VW || (VW = {}));
    const pW = {
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
      fW = WW => {
        const iW = new tW.c(WW);
        if (2 !== iW.readBits(2)) return null;
        const OW = iW.readBits(1),
          NW = (iW.readBits(1) << 1) + OW;
        3 === NW && iW.skipBits(1);
        if (1 === iW.readBits(1)) return null;
        if (0 !== iW.readBits(1)) return null;
        iW.skipBits(2);
        if (4817730 !== iW.readBits(24)) return null;
        let PW = 8;
        if (NW >= 2) {
          PW = iW.readBits(1) ? 12 : 10
        }
        const LW = iW.readBits(3);
        let cW = 0,
          wW = 0;
        if (7 !== LW) {
          if (wW = iW.readBits(1), 1 === NW || 3 === NW) {
            const WW = iW.readBits(1),
              OW = iW.readBits(1);
            cW = WW || OW ? WW && !OW ? 2 : 1 : 3, iW.skipBits(1)
          } else cW = 1
        } else cW = 3, wW = 1;
        const ZW = (iW.readBits(16) + 1) * (iW.readBits(16) + 1);
        let xW = (0, EW.mc)(mW.A).level;
        for (const EW of mW.A)
          if (ZW <= EW.maxPictureSize) {
            xW = EW.level;
            break
          } const lW = pW[LW];
        return {
          profile: NW,
          level: xW,
          bitDepth: PW,
          chromaSubsampling: cW,
          videoFullRangeFlag: wW,
          colourPrimaries: lW?.colourPrimaries ?? 2,
          transferCharacteristics: lW?.transferCharacteristics ?? 2,
          matrixCoefficients: lW?.matrixCoefficients ?? 2
        }
      },
      CW = function*(WW) {
        const iW = new tW.c(WW),
          OW = () => {
            let WW = 0;
            for (let OW = 0; OW < 8; OW++) {
              const mW = iW.readAlignedByte();
              if (WW += (127 & mW) * 2 ** (7 * OW), !(128 & mW)) break;
              if (7 === OW && 128 & mW) return null
            }
            return WW > 2 ** 32 - 1 ? null : WW
          };
        for (; iW.getBitsLeft() >= 8;) {
          iW.skipBits(1);
          const mW = iW.readBits(4),
            NW = iW.readBits(1),
            PW = iW.readBits(1);
          let LW;
          if (iW.skipBits(1), NW && iW.skipBits(8), PW) {
            const WW = OW();
            if (null === WW) return;
            LW = WW
          } else LW = Math.floor(iW.getBitsLeft() / 8);
          (0, EW.K)(iW.pos % 8 === 0), yield {
            type: mW,
            data: WW.subarray(iW.pos / 8, iW.pos / 8 + LW)
          }, iW.skipBits(8 * LW)
        }
      },
      XW = WW => {
        for (const {
            type: iW,
            data: OW
          }
          of CW(WW)) {
          if (1 !== iW) continue;
          const WW = new tW.c(OW),
            mW = WW.readBits(3),
            EW = (WW.readBits(1), WW.readBits(1));
          let NW = 0,
            PW = 0,
            LW = 0;
          if (EW) NW = WW.readBits(5);
          else {
            let iW = 0;
            if (WW.readBits(1)) {
              WW.skipBits(32), WW.skipBits(32);
              if (WW.readBits(1)) {
                let iW = 0;
                for (; iW < 32 && !WW.readBits(1);) iW++;
                iW < 32 && WW.skipBits(iW)
              }
              iW = WW.readBits(1), iW && (LW = WW.readBits(5), WW.skipBits(32), WW.skipBits(5), WW.skipBits(5))
            }
            const OW = WW.readBits(1),
              mW = WW.readBits(5);
            for (let EW = 0; EW <= mW; EW++) {
              WW.skipBits(12);
              const mW = WW.readBits(5);
              if (0 === EW && (NW = mW), mW > 7) {
                const iW = WW.readBits(1);
                0 === EW && (PW = iW)
              }
              if (iW) {
                if (WW.readBits(1)) {
                  const iW = LW + 1;
                  WW.skipBits(iW), WW.skipBits(iW), WW.skipBits(1)
                }
              }
              if (OW) {
                WW.readBits(1) && WW.skipBits(4)
              }
            }
          }
          const cW = WW.readBits(4),
            wW = WW.readBits(4),
            ZW = cW + 1;
          WW.skipBits(ZW);
          const xW = wW + 1;
          WW.skipBits(xW);
          let lW = 0;
          if (lW = EW ? 0 : WW.readBits(1), lW && (WW.skipBits(4), WW.skipBits(3)), WW.skipBits(1), WW.skipBits(1), WW.skipBits(1), !EW) {
            WW.skipBits(1), WW.skipBits(1), WW.skipBits(1), WW.skipBits(1);
            const iW = WW.readBits(1);
            iW && (WW.skipBits(1), WW.skipBits(1));
            let OW = 0;
            if (OW = WW.readBits(1) ? 2 : WW.readBits(1), OW > 0) {
              WW.readBits(1) || WW.skipBits(1)
            }
            iW && WW.skipBits(3)
          }
          WW.skipBits(1), WW.skipBits(1), WW.skipBits(1);
          const AW = WW.readBits(1);
          let bW = 8;
          if (2 === mW && AW) {
            bW = WW.readBits(1) ? 12 : 10
          } else mW <= 2 && (bW = AW ? 10 : 8);
          let jW = 0;
          1 !== mW && (jW = WW.readBits(1));
          let UW = 2,
            kW = 2,
            sW = 2;
          WW.readBits(1) && (UW = WW.readBits(8), kW = WW.readBits(8), sW = WW.readBits(8));
          let MW = 0,
            KW = 1,
            SW = 1,
            YW = 0;
          return jW ? MW = WW.readBits(1) : 1 === UW && 13 === kW && 0 === sW ? (MW = 1, KW = 0, SW = 0) : (MW = WW.readBits(1), 0 === mW ? (KW = 1, SW = 1) : 1 === mW ? (KW = 0, SW = 0) : 12 === bW ? (KW = WW.readBits(1), SW = KW ? WW.readBits(1) : 0) : (KW = 1, SW = 0), KW && SW && (YW = WW.readBits(2))), {
            profile: mW,
            level: NW,
            tier: PW,
            bitDepth: bW,
            monochrome: jW,
            chromaSubsamplingX: KW,
            chromaSubsamplingY: SW,
            chromaSamplePosition: YW,
            videoFullRangeFlag: MW,
            colourPrimaries: UW,
            transferCharacteristics: kW,
            matrixCoefficients: sW
          }
        }
        return null
      },
      BW = WW => 2 !== WW.colourPrimaries || 2 !== WW.transferCharacteristics || 2 !== WW.matrixCoefficients,
      qW = WW => {
        const iW = (0, EW.od)(WW),
          OW = iW.getUint8(9),
          mW = iW.getUint16(10, !0),
          NW = iW.getUint32(12, !0),
          PW = iW.getInt16(16, !0),
          LW = iW.getUint8(18);
        let cW = null;
        return LW && (cW = WW.subarray(19, 21 + OW)), {
          outputChannelCount: OW,
          preSkip: mW,
          inputSampleRate: NW,
          outputGain: PW,
          channelMappingFamily: LW,
          channelMappingTable: cW
        }
      },
      RW = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960],
      GW = WW => {
        const iW = WW[0] >> 3,
          OW = 3 & WW[0];
        let mW;
        return mW = 0 === OW ? 1 : 1 === OW || 2 === OW ? 2 : 63 & WW[1], {
          durationInSamples: RW[iW] * mW
        }
      },
      IW = WW => {
        if (WW.length < 7) throw new Error("Setup header is too short.");
        if (5 !== WW[0]) throw new Error("Wrong packet type in Setup header.");
        if ("vorbis" !== String.fromCharCode(...WW.slice(1, 7))) throw new Error("Invalid packet signature in Setup header.");
        const iW = WW.length,
          OW = new Uint8Array(iW);
        for (let tW = 0; tW < iW; tW++) OW[tW] = WW[iW - 1 - tW];
        const mW = new tW.c(OW);
        let EW = 0;
        for (; mW.getBitsLeft() > 97;)
          if (1 === mW.readBits(1)) {
            EW = mW.pos;
            break
          } if (0 === EW) throw new Error("Invalid Setup header: framing bit not found.");
        let NW = 0,
          PW = !1,
          LW = 0;
        for (; mW.getBitsLeft() >= 97;) {
          const WW = mW.pos,
            iW = mW.readBits(8),
            OW = mW.readBits(16),
            EW = mW.readBits(16);
          if (iW > 63 || 0 !== OW || 0 !== EW) {
            mW.pos = WW;
            break
          }
          if (mW.skipBits(1), NW++, NW > 64) break;
          mW.clone().readBits(6) + 1 === NW && (PW = !0, LW = NW)
        }
        if (!PW) throw new Error("Invalid Setup header: mode header not found.");
        if (LW > 63) throw new Error(`Unsupported mode count: ${LW}.`);
        const cW = LW;
        mW.pos = 0, mW.skipBits(EW);
        const wW = Array(cW).fill(0);
        for (let tW = cW - 1; tW >= 0; tW--) mW.skipBits(40), wW[tW] = mW.readBits(1);
        return {
          modeBlockflags: wW
        }
      },
      aW = (WW, iW, OW) => {
        switch (WW) {
          case "avc":
            for (const WW of ((WW, iW) => {
                if (iW.description) {
                  const OW = 3 & (0, EW.pd)(iW.description)[4];
                  return lW(WW, OW + 1)
                }
                return xW(WW)
              })(OW, iW)) {
              const iW = OW[WW.offset],
                mW = AW(iW);
              if (mW >= cW.NON_IDR_SLICE && mW <= cW.SLICE_DPC) return "delta";
              if (mW === cW.IDR) return "key";
              if (mW === cW.SEI && !(0, EW.Fb)()) {
                const iW = OW.subarray(WW.offset, WW.offset + WW.length),
                  mW = bW(iW);
                let NW = 1;
                do {
                  let WW = 0;
                  for (;;) {
                    const iW = mW[NW++];
                    if (void 0 === iW) break;
                    if (WW += iW, iW < 255) break
                  }
                  let iW = 0;
                  for (;;) {
                    const WW = mW[NW++];
                    if (void 0 === WW) break;
                    if (iW += WW, WW < 255) break
                  }
                  if (WW === 6) {
                    const WW = new tW.c(mW);
                    WW.pos = 8 * NW;
                    const iW = (0, EW.Ic)(WW),
                      OW = WW.readBits(1);
                    if (0 === iW && 1 === OW) return "key"
                  }
                  NW += iW
                } while (NW < mW.length - 1)
              }
            }
            return "delta";
          case "hevc":
            for (const WW of TW(OW, iW)) {
              const iW = JW(OW[WW.offset]);
              if (iW < wW.BLA_W_LP) return "delta";
              if (iW <= wW.RSV_IRAP_VCL23) return "key"
            }
            return "delta";
          case "vp8":
            return 0 === (1 & OW[0]) ? "key" : "delta";
          case "vp9": {
            const WW = new tW.c(OW);
            if (2 !== WW.readBits(2)) return null;
            const iW = WW.readBits(1);
            3 === (WW.readBits(1) << 1) + iW && WW.skipBits(1);
            if (WW.readBits(1)) return null;
            return 0 === WW.readBits(1) ? "key" : "delta"
          }
          case "av1": {
            let WW = !1;
            for (const {
                type: iW,
                data: mW
              }
              of CW(OW))
              if (1 === iW) {
                const iW = new tW.c(mW);
                iW.skipBits(4), WW = !!iW.readBits(1)
              } else if (3 === iW || 6 === iW || 7 === iW) {
              if (WW) return "key";
              const iW = new tW.c(mW);
              if (iW.readBits(1)) return null;
              return 0 === iW.readBits(2) ? "key" : "delta"
            }
            return null
          }
          case "prores":
            return "key";
          default:
            (0, EW.J)(WW), (0, EW.K)(!1)
        }
      };
    var rW;
    ! function(WW) {
      WW[WW.STREAMINFO = 0] = "STREAMINFO", WW[WW.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", WW[WW.PICTURE = 6] = "PICTURE"
    }(rW || (rW = {}));
    const zW = (WW, iW, OW) => {
        const mW = [WW],
          NW = EW.kd.encode(ZW.b);
        let PW = new Uint8Array(4 + NW.length),
          LW = new DataView(PW.buffer);
        LW.setUint32(0, NW.length, !0), PW.set(NW, 4), mW.push(PW);
        const cW = [],
          wW = (WW, iW) => {
            const OW = `${WW}=${iW}`,
              NW = EW.kd.encode(OW);
            PW = new Uint8Array(4 + NW.length), LW = new DataView(PW.buffer), LW.setUint32(0, NW.length, !0), PW.set(NW, 4), mW.push(PW), cW.push(WW)
          };
        for (const {
            key: ZW,
            value: bW
          }
          of(0, EW.kc)(iW)) switch (ZW) {
          case "title":
            wW("TITLE", bW);
            break;
          case "description":
            wW("DESCRIPTION", bW);
            break;
          case "artist":
            wW("ARTIST", bW);
            break;
          case "album":
            wW("ALBUM", bW);
            break;
          case "albumArtist":
            wW("ALBUMARTIST", bW);
            break;
          case "genre":
            wW("GENRE", bW);
            break;
          case "date":
            wW("DATE", bW.toISOString().slice(0, 10));
            break;
          case "comment":
            wW("COMMENT", bW);
            break;
          case "lyrics":
            wW("LYRICS", bW);
            break;
          case "trackNumber":
            wW("TRACKNUMBER", bW.toString());
            break;
          case "tracksTotal":
            wW("TRACKTOTAL", bW.toString());
            break;
          case "discNumber":
            wW("DISCNUMBER", bW.toString());
            break;
          case "discsTotal":
            wW("DISCTOTAL", bW.toString());
            break;
          case "beatsPerMinute":
            wW("BPM", bW.toString());
            break;
          case "images":
            if (!OW) break;
            for (const WW of bW) {
              const iW = "coverFront" === WW.kind ? 3 : "coverBack" === WW.kind ? 4 : 0,
                OW = new Uint8Array(WW.mimeType.length);
              for (let EW = 0; EW < WW.mimeType.length; EW++) OW[EW] = WW.mimeType.charCodeAt(EW);
              const mW = EW.kd.encode(WW.description ?? ""),
                NW = new Uint8Array(8 + OW.length + 4 + mW.length + 16 + 4 + WW.data.length),
                PW = (0, EW.od)(NW);
              PW.setUint32(0, iW, !1), PW.setUint32(4, OW.length, !1), NW.set(OW, 8), PW.setUint32(8 + OW.length, mW.length, !1), NW.set(mW, 12 + OW.length), PW.setUint32(28 + OW.length + mW.length, WW.data.length, !1), NW.set(WW.data, 32 + OW.length + mW.length);
              wW("METADATA_BLOCK_PICTURE", (0, EW.S)(NW))
            }
            break;
          case "raw":
            break;
          default:
            (0, EW.J)(ZW)
        }
        if (iW.raw)
          for (const EW in iW.raw) {
            const WW = iW.raw[EW] ?? iW.raw[EW.toLowerCase()];
            if ("vendor" !== EW && null != WW && !cW.includes(EW))
              if ("string" === typeof WW) wW(EW, WW);
              else if (Array.isArray(WW)) {
              if (WW.every((WW => "string" === typeof WW)))
                for (const iW of WW) wW(EW, iW)
            }
          }
        const tW = new Uint8Array(4);
        (0, EW.od)(tW).setUint32(0, cW.length, !0), mW.splice(2, 0, tW);
        const xW = mW.reduce(((WW, iW) => WW + iW.length), 0),
          lW = new Uint8Array(xW);
        let AW = 0;
        for (const EW of mW) lW.set(EW, AW), AW += EW.length;
        return lW
      },
      FW = WW => {
        if (WW.length < 7) return null;
        if (11 !== WW[0] || 119 !== WW[1]) return null;
        const iW = new tW.c(WW);
        iW.skipBits(16), iW.skipBits(16);
        const OW = iW.readBits(2);
        if (3 === OW) return null;
        const mW = iW.readBits(6),
          EW = iW.readBits(5);
        if (EW > 8) return null;
        const NW = iW.readBits(3),
          PW = iW.readBits(3);
        0 !== (1 & PW) && 1 !== PW && iW.skipBits(2), 0 !== (4 & PW) && iW.skipBits(2), 2 === PW && iW.skipBits(2);
        return {
          fscod: OW,
          bsid: EW,
          bsmod: NW,
          acmod: PW,
          lfeon: iW.readBits(1),
          bitRateCode: Math.floor(mW / 2)
        }
      },
      QW = new Uint8Array([5, 4, 65, 67, 45, 51]),
      Wi = new Uint8Array([5, 4, 69, 65, 67, 51]),
      ii = [1, 2, 3, 6],
      Oi = WW => {
        if (WW.length < 6) return null;
        if (11 !== WW[0] || 119 !== WW[1]) return null;
        const iW = new tW.c(WW);
        iW.skipBits(16);
        const OW = iW.readBits(2);
        if (iW.skipBits(3), 0 !== OW && 2 !== OW) return null;
        const mW = iW.readBits(11),
          EW = iW.readBits(2);
        let NW, cW = 0;
        3 === EW ? (cW = iW.readBits(2), NW = 3) : NW = iW.readBits(2);
        const wW = iW.readBits(3),
          ZW = iW.readBits(1),
          xW = iW.readBits(5);
        if (xW < 11 || xW > 16) return null;
        const lW = ii[NW];
        let AW;
        AW = EW < 3 ? PW[EW] / 1e3 : LW[cW] / 1e3;
        return {
          dataRate: Math.round((mW + 1) * AW / (16 * lW)),
          substreams: [{
            fscod: EW,
            fscod2: cW,
            bsid: xW,
            bsmod: 0,
            acmod: wW,
            lfeon: ZW,
            numDepSub: 0,
            chanLoc: 0
          }]
        }
      },
      mi = [0, 8e3, 16e3, 32e3, 0, 0, 11025, 22050, 44100, 0, 0, 12e3, 24e3, 48e3, 96e3, 192e3],
      Ei = [32e3, 56e3, 64e3, 96e3, 112e3, 128e3, 192e3, 224e3, 256e3, 32e4, 384e3, 448e3, 512e3, 576e3, 64e4, 768e3, 96e4, 1024e3, 1152e3, 128e4, 1344e3, 1408e3, 1411200, 1472e3, 1536e3, 192e4, 2048e3, 3072e3, 384e4, 0, 0, 0],
      Ni = [16, 16, 20, 20, 0, 24, 24, 0],
      Pi = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8],
      Li = [1, 2, 2, 2, 2, 3, 18, 19, 6, 7, 518, 323, 83, 519, 582, 535],
      ci = [32e3, 44100, 48e3, 0],
      wi = [8e3, 16e3, 32e3, 64e3, 128e3, 22050, 44100, 88200, 176400, 352800, 12e3, 24e3, 48e3, 96e3, 192e3, 384e3],
      ti = [512, 1024, 2048, 4096],
      Zi = WW => {
        const iW = xi(WW),
          OW = (0, EW.od)(WW);
        let mW = iW ? 4 * Math.ceil(iW.frameSize / 4) : 0,
          NW = null;
        for (; mW + 4 <= WW.length && 1683496997 === OW.getUint32(mW);) {
          const iW = li(WW.subarray(mW));
          if (!iW) break;
          NW ??= iW, mW += iW.frameSize
        }
        if (iW) return {
          frameSize: NW ? mW : iW.frameSize,
          sampleRate: iW.sampleRate,
          numberOfChannels: iW.numberOfChannels,
          sampleCount: iW.sampleCount,
          channelLayout: iW.channelLayout,
          pcmResolution: iW.pcmResolution,
          bitRate: iW.bitRate,
          core: iW,
          hasExtensions: null !== NW
        };
        if (!NW?.asset) return null;
        const {
          asset: PW
        } = NW;
        return {
          frameSize: mW,
          sampleRate: PW.sampleRate,
          numberOfChannels: PW.numberOfChannels,
          sampleCount: PW.sampleCount,
          channelLayout: PW.channelLayout,
          pcmResolution: PW.pcmResolution,
          bitRate: 0,
          core: null,
          hasExtensions: !0
        }
      },
      xi = WW => {
        if (WW.length < 18) return null;
        if (127 !== WW[0] || 254 !== WW[1] || 128 !== WW[2] || 1 !== WW[3]) return null;
        const iW = new tW.c(WW);
        if (iW.skipBits(32), iW.skipBits(1), 31 !== iW.readBits(5)) return null;
        const OW = iW.readBits(1),
          mW = iW.readBits(7) + 1;
        if (mW % 8 !== 0) return null;
        const EW = iW.readBits(14) + 1;
        if (EW < 96) return null;
        const NW = iW.readBits(6);
        if (NW >= Pi.length) return null;
        const PW = mi[iW.readBits(4)];
        if (0 === PW) return null;
        const LW = Ei[iW.readBits(5)];
        if (0 !== iW.readBits(1)) return null;
        iW.skipBits(4), iW.skipBits(5);
        const cW = iW.readBits(2);
        if (3 === cW) return null;
        iW.skipBits(1), OW && iW.skipBits(16), iW.skipBits(7);
        const wW = Ni[iW.readBits(3)];
        if (0 === wW) return null;
        const ZW = 0 !== cW;
        return {
          frameSize: EW,
          sampleRate: PW,
          numberOfChannels: Pi[NW] + (ZW ? 1 : 0),
          sampleCount: 32 * mW,
          channelLayout: Li[NW] | (ZW ? 8 : 0),
          amode: NW,
          lfePresent: ZW,
          bitRate: LW,
          pcmResolution: wW
        }
      },
      li = WW => {
        if (WW.length < 10) return null;
        if (100 !== WW[0] || 88 !== WW[1] || 32 !== WW[2] || 37 !== WW[3]) return null;
        const iW = new tW.c(WW);
        iW.skipBits(32), iW.skipBits(8);
        const OW = iW.readBits(2),
          mW = iW.readBits(1),
          NW = 8 + 4 * mW,
          PW = 16 + 4 * mW;
        iW.skipBits(NW);
        const LW = iW.readBits(PW) + 1,
          cW = {
            frameSize: LW,
            asset: null
          };
        if (!iW.readBits(1)) return cW;
        const wW = ci[iW.readBits(2)],
          ZW = 512 * (iW.readBits(3) + 1);
        iW.readBits(1) && iW.skipBits(36);
        const xW = iW.readBits(3) + 1,
          lW = iW.readBits(3) + 1,
          AW = [];
        for (let EW = 0; EW < xW; EW++) AW.push(iW.readBits(OW + 1));
        for (const tW of AW) iW.skipBits(8 * (0, EW.Ec)(tW));
        if (iW.readBits(1)) {
          iW.skipBits(2);
          const WW = iW.readBits(2) + 1 << 2,
            OW = iW.readBits(2) + 1;
          iW.skipBits(OW * WW)
        }
        for (let EW = 0; EW < lW; EW++) iW.skipBits(PW);
        iW.skipBits(9), iW.skipBits(3), iW.readBits(1) && iW.skipBits(4), iW.readBits(1) && iW.skipBits(24), iW.readBits(1) && iW.skipBits(8 * (iW.readBits(10) + 1));
        const bW = iW.readBits(5) + 1,
          jW = wi[iW.readBits(4)],
          UW = iW.readBits(8) + 1;
        let kW = 0;
        if (iW.readBits(1) && (UW > 2 && iW.skipBits(1), UW > 6 && iW.skipBits(1), iW.readBits(1))) {
          const WW = iW.readBits(2) + 1 << 2;
          kW = iW.readBits(WW)
        }
        return 0 === wW || iW.getBitsLeft() < 0 ? cW : {
          frameSize: LW,
          asset: {
            sampleRate: jW,
            numberOfChannels: UW,
            sampleCount: Math.round(ZW * jW / wW),
            channelLayout: kW,
            pcmResolution: bW
          }
        }
      },
      Ai = WW => {
        const iW = new Uint8Array(20),
          OW = (0, EW.od)(iW);
        OW.setUint32(0, WW.sampleRate), OW.setUint32(4, WW.bitRate), OW.setUint32(8, WW.bitRate), iW[12] = WW.pcmResolution;
        const mW = WW.core && !WW.hasExtensions ? 1 : 0,
          NW = new tW.c(iW);
        return NW.seekToByte(13), NW.writeBits(2, Math.max(ti.indexOf(WW.sampleCount), 0)), NW.writeBits(5, mW), NW.writeBits(1, WW.core?.lfePresent ? 1 : 0), NW.writeBits(6, WW.core?.amode ?? 0), NW.writeBits(14, WW.core ? WW.core.frameSize - 1 : 0), NW.writeBits(1, 0), NW.writeBits(3, 0), NW.writeBits(16, WW.channelLayout), NW.writeBits(1, 0), NW.writeBits(1, 0), NW.writeBits(1, 0), NW.writeBits(5, 0), iW
      }
  },
  41156: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => xW,
      E: () => YW,
      G: () => sW,
      H: () => SW,
      J: () => KW,
      L: () => MW,
      N: () => nW,
      Q: () => HW,
      S: () => hW,
      U: () => JW,
      W: () => VW,
      _: () => pW,
      bb: () => gW,
      d: () => cW,
      h: () => tW,
      j: () => LW,
      n: () => yW,
      r: () => PW,
      v: () => wW,
      x: () => NW
    });
    var mW = OW(41160),
      EW = OW(41127);
    const NW = ["avc", "hevc", "vp9", "av1", "vp8", "prores"],
      PW = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"],
      LW = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"],
      cW = [...LW, ...PW],
      wW = ["webvtt"],
      tW = [{
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
      ZW = [{
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
      xW = [{
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
      lW = [{
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
      AW = ".01.01.01.01.00",
      bW = ".0.110.01.01.01.0",
      jW = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"],
      UW = ["dtsc", "dtsh", "dtsl", "dtse"],
      kW = [{
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
      sW = (WW, iW, OW, mW, NW) => {
        if ("avc" === WW) {
          const WW = 100,
            NW = Math.ceil(iW / 16) * Math.ceil(OW / 16),
            PW = tW.find((WW => NW <= WW.maxMacroblocks && mW <= WW.maxBitrate)) ?? (0, EW.mc)(tW),
            LW = PW ? PW.level : 0;
          return `avc1.${WW.toString(16).padStart(2,"0")}${"00"}${LW.toString(16).padStart(2,"0")}`
        }
        if ("hevc" === WW) {
          const WW = "",
            NW = 1,
            PW = "6",
            LW = iW * OW,
            cW = ZW.find((WW => LW <= WW.maxPictureSize && mW <= WW.maxBitrate)) ?? (0, EW.mc)(ZW),
            wW = "B0";
          return `hev1.${WW}${NW}.${PW}.${cW.tier}${cW.level}.${wW}`
        }
        if ("vp8" === WW) return "vp8";
        if ("vp9" === WW) {
          const WW = iW * OW,
            NW = "08";
          return `vp09.${"00"}.${(xW.find((iW=>WW<=iW.maxPictureSize&&mW<=iW.maxBitrate))??(0,EW.mc)(xW)).level.toString().padStart(2,"0")}.${NW}`
        }
        if ("av1" === WW) {
          const WW = 0,
            NW = iW * OW,
            PW = lW.find((WW => NW <= WW.maxPictureSize && mW <= WW.maxBitrate)) ?? (0, EW.mc)(lW),
            LW = "08";
          return `av01.${WW}.${PW.level.toString().padStart(2,"0")}${PW.tier}.${LW}`
        }
        if ("prores" === WW) {
          const WW = 2073600,
            EW = Math.pow(iW * OW / WW, .95),
            PW = kW.filter((WW => WW.alpha === NW));
          let LW = PW[0].fourCc,
            cW = 1 / 0;
          for (const {
              fourCc: iW,
              bitrate: OW
            }
            of PW) {
            const WW = Math.abs(OW * EW - mW);
            WW < cW && (cW = WW, LW = iW)
          }
          return LW
        }
        throw (0, EW.J)(WW), new TypeError(`Unhandled codec '${String(WW)}'.`)
      },
      MW = WW => {
        const iW = WW.split(".");
        return [1, 1, Number(iW[1]), 2, 1, Number(iW[2]), 3, 1, Number(iW[3]), 4, 1, iW[4] ? Number(iW[4]) : 1]
      },
      KW = WW => {
        const iW = WW.split("."),
          OW = Number(iW[1]),
          mW = iW[2],
          EW = (OW << 5) + Number(mW.slice(0, -1)),
          NW = "H" === mW.slice(-1) ? 1 : 0,
          PW = Number(iW[3]);
        return [129, EW, (NW << 7) + ((8 === PW ? 0 : 1) << 6) + ((12 === PW ? 1 : 0) << 5) + ((iW[4] ? Number(iW[4]) : 0) << 4) + ((iW[5] ? Number(iW[5][0]) : 1) << 3) + ((iW[5] ? Number(iW[5][1]) : 1) << 2) + (iW[5] ? Number(iW[5][2]) : 0), 0]
      },
      SW = WW => {
        const {
          codec: iW,
          codecDescription: OW,
          colorSpace: NW,
          avcCodecInfo: PW,
          hevcCodecInfo: LW,
          vp9CodecInfo: cW,
          av1CodecInfo: wW,
          proresFormat: tW
        } = WW;
        if ("avc" === iW) {
          if ((0, EW.K)(null !== WW.avcType), PW) {
            const iW = new Uint8Array([PW.avcProfileIndication, PW.profileCompatibility, PW.avcLevelIndication]);
            return `avc${WW.avcType}.${(0,EW.V)(iW)}`
          }
          if (!OW || OW.byteLength < 4) throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
          return `avc${WW.avcType}.${(0,EW.V)(OW.subarray(1,4))}`
        }
        if ("hevc" === iW) {
          let WW, iW, mW, NW, PW, cW;
          if (LW) WW = LW.generalProfileSpace, iW = LW.generalProfileIdc, mW = (0, EW.Mc)(LW.generalProfileCompatibilityFlags), NW = LW.generalTierFlag, PW = LW.generalLevelIdc, cW = [...LW.generalConstraintIndicatorFlags];
          else {
            if (!OW || OW.byteLength < 23) throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
            const LW = (0, EW.od)(OW),
              wW = LW.getUint8(1);
            WW = wW >> 6 & 3, iW = 31 & wW, mW = (0, EW.Mc)(LW.getUint32(2)), NW = wW >> 5 & 1, PW = LW.getUint8(12), cW = [];
            for (let WW = 0; WW < 6; WW++) cW.push(LW.getUint8(6 + WW))
          }
          let wW = "hev1.";
          for (wW += ["", "A", "B", "C"][WW] + iW, wW += ".", wW += mW.toString(16).toUpperCase(), wW += ".", wW += 0 === NW ? "L" : "H", wW += PW; cW.length > 0 && 0 === cW[cW.length - 1];) cW.pop();
          return cW.length > 0 && (wW += ".", wW += cW.map((WW => WW.toString(16).toUpperCase())).join(".")), wW
        }
        if ("vp8" === iW) return "vp8";
        if ("vp9" === iW) {
          if (!cW) {
            const iW = WW.width * WW.height;
            let OW = (0, EW.mc)(xW).level;
            for (const WW of xW)
              if (iW <= WW.maxPictureSize) {
                OW = WW.level;
                break
              } return `vp09.00.${OW.toString().padStart(2,"0")}.08`
          }
          let iW = `vp09.${cW.profile.toString().padStart(2,"0")}.${cW.level.toString().padStart(2,"0")}.${cW.bitDepth.toString().padStart(2,"0")}.${cW.chromaSubsampling.toString().padStart(2,"0")}`;
          return iW += `.${cW.colourPrimaries.toString().padStart(2,"0")}.${cW.transferCharacteristics.toString().padStart(2,"0")}.${cW.matrixCoefficients.toString().padStart(2,"0")}.${cW.videoFullRangeFlag.toString().padStart(2,"0")}`, iW.endsWith(AW) && (iW = iW.slice(0, -15)), iW
        }
        if ("av1" === iW) {
          if (!wW) {
            const iW = WW.width * WW.height;
            let OW = (0, EW.mc)(xW).level;
            for (const WW of xW)
              if (iW <= WW.maxPictureSize) {
                OW = WW.level;
                break
              } return `av01.0.${OW.toString().padStart(2,"0")}M.08`
          }
          const iW = wW.profile,
            OW = wW.level.toString().padStart(2, "0"),
            PW = wW.tier ? "H" : "M",
            LW = wW.bitDepth.toString().padStart(2, "0"),
            cW = wW.monochrome ? "1" : "0",
            tW = 100 * wW.chromaSubsamplingX + 10 * wW.chromaSubsamplingY + 1 * (wW.chromaSubsamplingX && wW.chromaSubsamplingY ? wW.chromaSamplePosition : 0);
          let ZW, lW, AW, jW;
          (0, mW.o)(wW) ? (ZW = wW.colourPrimaries, lW = wW.transferCharacteristics, AW = wW.matrixCoefficients, jW = wW.videoFullRangeFlag) : (ZW = NW?.primaries ? EW.g[NW.primaries] : 1, lW = NW?.transfer ? EW.v[NW.transfer] : 1, AW = NW?.matrix ? EW.r[NW.matrix] : 1, jW = NW?.fullRange ? 1 : 0);
          let UW = `av01.${iW}.${OW}${PW}.${LW}`;
          return UW += `.${cW}.${tW.toString().padStart(3,"0")}`, UW += `.${ZW.toString().padStart(2,"0")}`, UW += `.${lW.toString().padStart(2,"0")}`, UW += `.${AW.toString().padStart(2,"0")}`, UW += `.${jW}`, UW.endsWith(bW) && (UW = UW.slice(0, -17)), UW
        }
        if ("prores" === iW) return tW ?? "apch";
        throw null !== iW && (0, EW.J)(iW), new TypeError(`Unhandled codec '${iW}'.`)
      },
      YW = (WW, iW, OW) => {
        if ("aac" === WW) return iW >= 2 && OW <= 24e3 ? "mp4a.40.29" : OW <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
        if ("mp3" === WW) return "mp3";
        if ("opus" === WW) return "opus";
        if ("vorbis" === WW) return "vorbis";
        if ("flac" === WW) return "flac";
        if ("ac3" === WW) return "ac-3";
        if ("eac3" === WW) return "ec-3";
        if ("dts" === WW) return "dtsc";
        if (PW.includes(WW)) return WW;
        throw new TypeError(`Unhandled codec '${WW}'.`)
      },
      yW = 48e3,
      TW = /^pcm-([usf])(\d+)(be)?$/,
      JW = WW => {
        if ((0, EW.K)(PW.includes(WW)), "ulaw" === WW) return {
          dataType: "ulaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 255
        };
        if ("alaw" === WW) return {
          dataType: "alaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 213
        };
        const iW = TW.exec(WW);
        let OW;
        (0, EW.K)(iW), OW = "u" === iW[1] ? "unsigned" : "s" === iW[1] ? "signed" : "float";
        return {
          dataType: OW,
          sampleSize: Number(iW[2]) / 8,
          littleEndian: "be" !== iW[3],
          silentValue: "pcm-u8" === WW ? 128 : 0
        }
      },
      hW = WW => WW.startsWith("avc1") || WW.startsWith("avc3") ? "avc" : WW.startsWith("hev1") || WW.startsWith("hvc1") ? "hevc" : "vp8" === WW ? "vp8" : WW.startsWith("vp09") ? "vp9" : WW.startsWith("av01") ? "av1" : jW.includes(WW) ? "prores" : "mp3" === WW || "mp4a.69" === WW || "mp4a.6B" === WW || "mp4a.6b" === WW || "mp4a.40.34" === WW ? "mp3" : WW.startsWith("mp4a.40.") || "mp4a.67" === WW ? "aac" : "opus" === WW || "Opus" === WW ? "opus" : "vorbis" === WW ? "vorbis" : "flac" === WW ? "flac" : "ac-3" === WW || "ac3" === WW ? "ac3" : "ec-3" === WW || "eac3" === WW ? "eac3" : UW.includes(WW) ? "dts" : "ulaw" === WW ? "ulaw" : "alaw" === WW ? "alaw" : TW.test(WW) ? WW : "webvtt" === WW ? "webvtt" : null,
      HW = WW => "avc" === WW ? {
        avc: {
          format: "avc"
        }
      } : "hevc" === WW ? {
        hevc: {
          format: "hevc"
        }
      } : {},
      nW = WW => "aac" === WW ? {
        aac: {
          format: "aac"
        }
      } : "opus" === WW ? {
        opus: {
          format: "opus"
        }
      } : {},
      uW = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...jW],
      oW = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/,
      dW = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,
      eW = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,
      vW = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,
      gW = (WW, iW) => {
        if (!WW) throw new TypeError("Video chunk metadata must be provided.");
        if ("object" !== typeof WW) throw new TypeError("Video chunk metadata must be an object.");
        if (!WW.decoderConfig) throw new TypeError("Video chunk metadata must include a decoder configuration.");
        if ("object" !== typeof WW.decoderConfig) throw new TypeError("Video chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof WW.decoderConfig.codec) throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
        if (!uW.some((iW => WW.decoderConfig.codec.startsWith(iW)))) throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(WW.decoderConfig.codedWidth) || WW.decoderConfig.codedWidth <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
        if (!Number.isInteger(WW.decoderConfig.codedHeight) || WW.decoderConfig.codedHeight <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
        if (void 0 !== WW.decoderConfig.displayAspectWidth && (!Number.isInteger(WW.decoderConfig.displayAspectWidth) || WW.decoderConfig.displayAspectWidth <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
        if (void 0 !== WW.decoderConfig.displayAspectHeight && (!Number.isInteger(WW.decoderConfig.displayAspectHeight) || WW.decoderConfig.displayAspectHeight <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
        if (void 0 !== WW.decoderConfig.displayAspectWidth !== (void 0 !== WW.decoderConfig.displayAspectHeight)) throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
        if (void 0 !== WW.decoderConfig.description && !(0, EW.Bb)(WW.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (void 0 !== WW.decoderConfig.colorSpace) {
          const {
            colorSpace: iW
          } = WW.decoderConfig;
          if ("object" !== typeof iW) throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
          const OW = Object.keys(EW.g);
          if (null != iW.primaries && !OW.includes(iW.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${OW.join(", ")}.`);
          const mW = Object.keys(EW.v);
          if (null != iW.transfer && !mW.includes(iW.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${mW.join(", ")}.`);
          const NW = Object.keys(EW.r);
          if (null != iW.matrix && !NW.includes(iW.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${NW.join(", ")}.`);
          if (null != iW.fullRange && "boolean" !== typeof iW.fullRange) throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")
        }
        if (WW.decoderConfig.codec.startsWith("avc1") || WW.decoderConfig.codec.startsWith("avc3")) {
          if (!oW.test(WW.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")
        } else if (WW.decoderConfig.codec.startsWith("hev1") || WW.decoderConfig.codec.startsWith("hvc1")) {
          if (!dW.test(WW.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")
        } else if (WW.decoderConfig.codec.startsWith("vp8")) {
          if ("vp8" !== WW.decoderConfig.codec) throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')
        } else if (WW.decoderConfig.codec.startsWith("vp09")) {
          if (!eW.test(WW.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')
        } else if (WW.decoderConfig.codec.startsWith("av01")) {
          if (!vW.test(WW.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')
        } else if (jW.some((iW => WW.decoderConfig.codec.startsWith(iW))) && !jW.some((iW => WW.decoderConfig.codec === iW))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${jW.join(", ")}.`);
        if (null !== iW && hW(WW.decoderConfig.codec) !== iW) throw new TypeError(`Video chunk metadata decoder configuration codec string '${WW.decoderConfig.codec}' does not fit to the track codec '${iW}'.`)
      },
      DW = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3", "dts"],
      VW = (WW, iW) => {
        if (!WW) throw new TypeError("Audio chunk metadata must be provided.");
        if ("object" !== typeof WW) throw new TypeError("Audio chunk metadata must be an object.");
        if (!WW.decoderConfig) throw new TypeError("Audio chunk metadata must include a decoder configuration.");
        if ("object" !== typeof WW.decoderConfig) throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof WW.decoderConfig.codec) throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
        if (!DW.some((iW => WW.decoderConfig.codec.startsWith(iW)))) throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(WW.decoderConfig.sampleRate) || WW.decoderConfig.sampleRate <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
        if (!Number.isInteger(WW.decoderConfig.numberOfChannels) || WW.decoderConfig.numberOfChannels <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
        if (void 0 !== WW.decoderConfig.description && !(0, EW.Bb)(WW.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (WW.decoderConfig.codec.startsWith("mp4a") && "mp4a.69" !== WW.decoderConfig.codec && "mp4a.6B" !== WW.decoderConfig.codec && "mp4a.6b" !== WW.decoderConfig.codec) {
          if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(WW.decoderConfig.codec)) throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")
        } else if (WW.decoderConfig.codec.startsWith("mp3") || WW.decoderConfig.codec.startsWith("mp4a")) {
          if ("mp3" !== WW.decoderConfig.codec && "mp4a.69" !== WW.decoderConfig.codec && "mp4a.6B" !== WW.decoderConfig.codec && "mp4a.6b" !== WW.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')
        } else if (WW.decoderConfig.codec.startsWith("opus")) {
          if ("opus" !== WW.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
          if (WW.decoderConfig.description && WW.decoderConfig.description.byteLength < 18) throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")
        } else if (WW.decoderConfig.codec.startsWith("vorbis")) {
          if ("vorbis" !== WW.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
          if (!WW.decoderConfig.description) throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")
        } else if (WW.decoderConfig.codec.startsWith("flac")) {
          if ("flac" !== WW.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
          const iW = 42;
          if (!WW.decoderConfig.description || WW.decoderConfig.description.byteLength < iW) throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")
        } else if (WW.decoderConfig.codec.startsWith("ac-3") || WW.decoderConfig.codec.startsWith("ac3")) {
          if ("ac-3" !== WW.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')
        } else if (WW.decoderConfig.codec.startsWith("ec-3") || WW.decoderConfig.codec.startsWith("eac3")) {
          if ("ec-3" !== WW.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')
        } else if (WW.decoderConfig.codec.startsWith("dts")) {
          if (!UW.includes(WW.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${UW.join(", ")}.`)
        } else if ((WW.decoderConfig.codec.startsWith("pcm") || WW.decoderConfig.codec.startsWith("ulaw") || WW.decoderConfig.codec.startsWith("alaw")) && !PW.includes(WW.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${PW.join(", ")}).`);
        if (null !== iW && hW(WW.decoderConfig.codec) !== iW) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${WW.decoderConfig.codec}' does not fit to the track codec '${iW}'.`)
      },
      pW = WW => {
        if (!WW) throw new TypeError("Subtitle metadata must be provided.");
        if ("object" !== typeof WW) throw new TypeError("Subtitle metadata must be an object.");
        if (!WW.config) throw new TypeError("Subtitle metadata must include a config object.");
        if ("object" !== typeof WW.config) throw new TypeError("Subtitle metadata config must be an object.");
        if ("string" !== typeof WW.config.description) throw new TypeError("Subtitle metadata config description must be a string.")
      }
  },
  41196: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => xW,
      i: () => ZW,
      j: () => UW,
      k: () => cW,
      m: () => kW,
      n: () => wW,
      o: () => PW
    });
    var mW = OW(41156),
      EW = OW(41127),
      NW = OW(41198);
    new Map, new Map;
    const PW = WW => {
        if (!WW || "object" !== typeof WW) throw new TypeError("Encoding config must be an object.");
        if (!mW.x.includes(WW.codec)) throw new TypeError(`Invalid video codec '${WW.codec}'. Must be one of: ${mW.x.join(", ")}.`);
        const iW = WW.bitrate;
        if (void 0 === WW.quality && void 0 === iW) throw new TypeError("config.quality must be provided.");
        if (void 0 !== WW.quality && void 0 !== iW) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== WW.quality && !(WW.quality instanceof xW)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== iW && !(iW instanceof xW) && (!Number.isInteger(iW) || iW <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== WW.keyFrameInterval && (!Number.isFinite(WW.keyFrameInterval) || WW.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
        if (void 0 !== WW.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(WW.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
        if (void 0 !== WW.transform) {
          if ("object" !== typeof WW.transform || !WW.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== WW.transform.width && (!Number.isInteger(WW.transform.width) || WW.transform.width <= 0)) throw new TypeError("config.transform.width, when provided, must be a positive integer.");
          if (void 0 !== WW.transform.height && (!Number.isInteger(WW.transform.height) || WW.transform.height <= 0)) throw new TypeError("config.transform.height, when provided, must be a positive integer.");
          if (void 0 !== WW.transform.fit && !["fill", "contain", "cover"].includes(WW.transform.fit)) throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');
          if (void 0 !== WW.transform.width && void 0 !== WW.transform.height && void 0 === WW.transform.fit && !["fill", "contain", "cover"].includes(WW.sizeChangeBehavior)) throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
          if (void 0 !== WW.transform.fit && ["fill", "contain", "cover"].includes(WW.sizeChangeBehavior) && WW.transform.fit !== WW.sizeChangeBehavior) throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
          if (void 0 !== WW.transform.rotate && ![0, 90, 180, 270].includes(WW.transform.rotate)) throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
          if (void 0 !== WW.transform.flip && "boolean" !== typeof WW.transform.flip) throw new TypeError("config.transform.flip, when provided, must be a boolean.");
          if (void 0 !== WW.transform.crop && (0, NW.o)(WW.transform.crop, "config.transform."), void 0 !== WW.transform.process && "function" !== typeof WW.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
          if (void 0 !== WW.transform.frameRate && (!Number.isFinite(WW.transform.frameRate) || WW.transform.frameRate <= 0)) throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
          if (void 0 !== WW.transform.force && "boolean" !== typeof WW.transform.force) throw new TypeError("config.transform.force, when provided, must be a boolean.")
        }
        if (void 0 !== WW.onEncodedPacket && "function" !== typeof WW.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== WW.onEncoderConfig && "function" !== typeof WW.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== WW.onEncodedSample && "function" !== typeof WW.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        LW(WW.codec, WW)
      },
      LW = (WW, iW) => {
        if (!iW || "object" !== typeof iW) throw new TypeError("Encoding options must be an object.");
        if (void 0 !== iW.alpha && !["discard", "keep"].includes(iW.alpha)) throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
        const OW = iW.bitrateMode;
        if (void 0 !== OW && !["constant", "variable"].includes(OW)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== iW.latencyMode && !["quality", "realtime"].includes(iW.latencyMode)) throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
        if (void 0 !== iW.fullCodecString && "string" !== typeof iW.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== iW.fullCodecString && (0, mW.S)(iW.fullCodecString) !== WW) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${WW}).`);
        if (void 0 !== iW.hardwareAcceleration && !["no-preference", "prefer-hardware", "prefer-software"].includes(iW.hardwareAcceleration)) throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
        if (void 0 !== iW.scalabilityMode && "string" !== typeof iW.scalabilityMode) throw new TypeError("scalabilityMode, when provided, must be a string.");
        if (void 0 !== iW.contentHint && "string" !== typeof iW.contentHint) throw new TypeError("contentHint, when provided, must be a string.")
      },
      cW = WW => {
        const iW = WW.bitrateMode,
          OW = WW.quality._toVideoRateControl(WW.codec, WW.width, WW.height, iW),
          NW = (iW, OW, EW) => ({
            codec: WW.fullCodecString ?? (0, mW.G)(WW.codec, WW.width, WW.height, EW, "keep" === WW.alpha),
            width: WW.width,
            height: WW.height,
            displayWidth: WW.squarePixelWidth,
            displayHeight: WW.squarePixelHeight,
            bitrate: iW,
            bitrateMode: OW,
            alpha: WW.alpha ?? "discard",
            framerate: WW.framerate,
            latencyMode: WW.latencyMode,
            hardwareAcceleration: WW.hardwareAcceleration,
            scalabilityMode: WW.scalabilityMode,
            contentHint: WW.contentHint,
            ...(0, mW.Q)(WW.codec)
          }),
          PW = [];
        return null !== OW.quantizer && PW.push({
          config: NW(void 0, "quantizer", OW.bitrate),
          quantizer: OW.quantizer
        }), "quantizer" !== OW.bitrateMode && PW.push({
          config: NW(OW.bitrate, OW.bitrateMode, OW.bitrate),
          quantizer: null
        }), (0, EW.K)(PW.length > 0), PW
      },
      wW = WW => {
        if (!WW || "object" !== typeof WW) throw new TypeError("Encoding config must be an object.");
        if (!mW.d.includes(WW.codec)) throw new TypeError(`Invalid audio codec '${WW.codec}'. Must be one of: ${mW.d.join(", ")}.`);
        const iW = WW.bitrate;
        if (void 0 === WW.quality && void 0 === iW && !mW.r.includes(WW.codec) && "flac" !== WW.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
        if (void 0 !== WW.quality && void 0 !== iW) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== WW.quality && !(WW.quality instanceof xW)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== iW && !(iW instanceof xW) && (!Number.isInteger(iW) || iW <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== WW.transform) {
          if ("object" !== typeof WW.transform || !WW.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== WW.transform.numberOfChannels && (!Number.isInteger(WW.transform.numberOfChannels) || WW.transform.numberOfChannels <= 0)) throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
          if (void 0 !== WW.transform.sampleRate && (!Number.isInteger(WW.transform.sampleRate) || WW.transform.sampleRate <= 0)) throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
          if (void 0 !== WW.transform.sampleFormat && !["u8", "s16", "s32", "f32"].includes(WW.transform.sampleFormat)) throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
          if (void 0 !== WW.transform.process && "function" !== typeof WW.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.")
        }
        if (void 0 !== WW.onEncodedPacket && "function" !== typeof WW.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== WW.onEncoderConfig && "function" !== typeof WW.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== WW.onEncodedSample && "function" !== typeof WW.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        tW(WW.codec, WW)
      },
      tW = (WW, iW) => {
        if (!iW || "object" !== typeof iW) throw new TypeError("Encoding options must be an object.");
        const OW = iW.bitrateMode;
        if (void 0 !== OW && !["constant", "variable"].includes(OW)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== iW.fullCodecString && "string" !== typeof iW.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== iW.fullCodecString && (0, mW.S)(iW.fullCodecString) !== WW) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${WW}).`)
      },
      ZW = WW => {
        const iW = WW.bitrateMode;
        return {
          codec: WW.fullCodecString ?? (0, mW.E)(WW.codec, WW.numberOfChannels, WW.sampleRate),
          numberOfChannels: WW.numberOfChannels,
          sampleRate: WW.sampleRate,
          bitrate: WW.quality?._toAudioBitrate(WW.codec),
          bitrateMode: WW.quality?._bitrateMode ?? iW,
          ...(0, mW.N)(WW.codec)
        }
      };
    class xW {
      constructor(WW) {
        if ("number" !== typeof WW && "string" !== typeof WW || (WW = {
            quality: WW
          }), !WW || "object" !== typeof WW) throw new TypeError("options must be an object.");
        if (void 0 !== WW.bitrateMode && !["constant", "variable"].includes(WW.bitrateMode)) throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
        if ("quality" in WW) {
          if ("string" === typeof WW.quality ? !(WW.quality in lW) : "number" !== typeof WW.quality || Number.isNaN(WW.quality)) throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
          if (void 0 !== WW.preferBitrate && "boolean" !== typeof WW.preferBitrate) throw new TypeError("options.preferBitrate, when provided, must be a boolean.");
          if ("bitrate" in WW || "quantizer" in WW) throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
          this._quality = "string" === typeof WW.quality ? lW[WW.quality] : WW.quality, this._preferBitrate = WW.preferBitrate ?? !1, this._bitrate = void 0, this._quantizer = void 0
        } else {
          if (void 0 !== WW.bitrate && (!Number.isInteger(WW.bitrate) || WW.bitrate <= 0)) throw new TypeError("options.bitrate, when provided, must be a positive integer.");
          if (void 0 !== WW.quantizer && (!Number.isInteger(WW.quantizer) || WW.quantizer < 0)) throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");
          if (void 0 === WW.bitrate && void 0 === WW.quantizer) throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");
          if ("preferBitrate" in WW) throw new TypeError("options.preferBitrate can only be combined with options.quality.");
          this._quality = void 0, this._preferBitrate = !1, this._bitrate = WW.bitrate, this._quantizer = WW.quantizer
        }
        this._bitrateMode = WW.bitrateMode
      }
      _toVideoRateControl(WW, iW, OW, mW) {
        const NW = AW[WW];
        let PW, LW = null,
          cW = this._bitrateMode ?? mW ?? "variable";
        if (void 0 !== this._quantizer) {
          if (NW)
            if (this._quantizer < NW.min || this._quantizer > NW.max) {
              if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${WW}'; must be between ${NW.min} and ${NW.max}.`)
            } else LW = this._quantizer, void 0 === this._bitrate && (cW = "quantizer");
          else if (void 0 === this._bitrate) throw new Error(`Codec '${WW}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
        } else void 0 === this._bitrate && NW && !this._preferBitrate && ((0, EW.K)(void 0 !== this._quality), LW = (0, EW.X)(Math.round((0, EW.nc)(NW.worst, NW.best, this._quality)), NW.min, NW.max));
        if (void 0 !== this._bitrate) PW = this._bitrate;
        else {
          let mW = this._quality;
          void 0 === mW && ((0, EW.K)(null !== LW && NW), mW = (0, EW.X)((LW - NW.worst) / (NW.best - NW.worst), 0, 1)), PW = jW(WW, iW, OW, bW(mW))
        }
        return {
          quantizer: LW,
          bitrate: PW,
          bitrateMode: cW
        }
      }
      _toVideoBitrate(WW, iW, OW) {
        return void 0 !== this._bitrate ? this._bitrate : ((0, EW.K)(void 0 !== this._quality), jW(WW, iW, OW, bW(this._quality)))
      }
      _toAudioBitrate(WW) {
        if (mW.r.includes(WW) || "flac" === WW) return;
        if (void 0 !== this._bitrate) return this._bitrate;
        if (void 0 === this._quality) throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
        const iW = bW(this._quality),
          OW = {
            aac: 128e3,
            opus: 64e3,
            mp3: 16e4,
            vorbis: 64e3,
            ac3: 384e3,
            eac3: 192e3,
            dts: 768e3
          } [WW];
        if (!OW) throw new Error(`Unhandled codec: ${WW}`);
        let EW = OW * iW;
        if ("aac" === WW) {
          EW = [96e3, 128e3, 16e4, 192e3].reduce(((WW, iW) => Math.abs(iW - EW) < Math.abs(WW - EW) ? iW : WW))
        } else if ("opus" === WW || "vorbis" === WW) EW = Math.max(6e3, EW);
        else if ("mp3" === WW) {
          EW = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((WW, iW) => Math.abs(iW - EW) < Math.abs(WW - EW) ? iW : WW))
        }
        return 1e3 * Math.round(EW / 1e3)
      }
    }
    const lW = {
        "very-low": 0,
        low: .25,
        medium: .5,
        high: .75,
        "very-high": 1
      },
      AW = {
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
      bW = WW => .3 * Math.exp(2.5538 * WW),
      jW = (WW, iW, OW, mW) => {
        const EW = iW * OW,
          NW = 3e6,
          PW = NW * Math.pow(EW / 2073600, .95) * {
            avc: 1,
            hevc: .6,
            vp9: .6,
            av1: .4,
            vp8: 1.2,
            prores: 73.33333333333333
          } [WW] * mW;
        return 1e3 * Math.ceil(PW / 1e3)
      },
      UW = (WW, iW) => "avc" === WW ? {
        avc: {
          quantizer: iW
        }
      } : "hevc" === WW ? {
        hevc: {
          quantizer: iW
        }
      } : "vp9" === WW ? {
        vp9: {
          quantizer: iW
        }
      } : "av1" === WW ? {
        av1: {
          quantizer: iW
        }
      } : void(0, EW.K)(!1),
      kW = (WW, iW) => void 0 !== WW ? WW : void 0 !== iW ? iW instanceof xW ? iW : new xW({
        bitrate: iW
      }) : void 0
  },
  41162: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW, EW = OW(41127);
    ! function(WW) {
      WW[WW.Silent = 0] = "Silent", WW[WW.Errors = 1] = "Errors", WW[WW.Warnings = 2] = "Warnings", WW[WW.Info = 3] = "Info"
    }(mW || (mW = {}));
    class NW {
      constructor() {}
      static get level() {
        return NW._level
      }
      static set level(WW) {
        if (WW !== mW.Silent && WW !== mW.Errors && WW !== mW.Warnings && WW !== mW.Info) throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
        NW._level = WW
      }
      static get _emitter() {
        return NW._emitterInstance ??= new EW.n
      }
      static on(WW, iW, OW) {
        return NW._emitter.on(WW, iW, OW)
      }
      static _error() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        NW._emitter._emit("error", iW), NW._level >= mW.Errors && console.error(...iW)
      }
      static _warn() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        NW._emitter._emit("warn", iW), NW._level >= mW.Warnings && console.warn(...iW)
      }
      static _info() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        NW._emitter._emit("info", iW), NW._level >= mW.Info && console.info(...iW)
      }
    }
    NW._level = mW.Info, NW._emitterInstance = null
  },
  41205: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => wW,
      g: () => tW,
      k: () => cW,
      n: () => ZW,
      o: () => PW
    });
    OW(41149);
    var mW = OW(41156);
    OW(41127), OW(41171);
    var EW = OW(41190);
    OW(41198), OW(41196);
    OW(41160), OW(41162), "function" === typeof SuppressedError && SuppressedError;
    class NW {
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
      async _flushAndClose(WW) {}
      close() {
        if (this._closingPromise) return;
        const WW = this._connectedTrack;
        if (!WW) throw new Error("Cannot call close without connecting the source to an output track.");
        if ("pending" === WW.output.state) throw new Error("Cannot call close before output has been started.");
        this._closingPromise = (async () => {
          await this._flushAndClose(!1), this._closed = !0, "finalizing" !== WW.output.state && "finalized" !== WW.output.state && WW.output._muxer.onTrackClose(WW)
        })()
      }
      async _flushOrWaitForOngoingClose(WW) {
        return this._closingPromise ??= (async () => {
          await this._flushAndClose(WW), this._closed = !0
        })()
      }
    }
    class PW extends NW {
      constructor(WW) {
        if (super(), !mW.x.includes(WW)) throw new TypeError(`Invalid video codec '${WW}'. Must be one of: ${mW.x.join(", ")}.`);
        this._codec = WW
      }
    }
    const LW = (WW, iW) => {
      if (WW.metadata.hasOnlyKeyPackets && "key" !== iW.type) throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")
    };
    class cW extends PW {
      constructor(WW) {
        super(WW)
      }
      add(WW, iW) {
        if (!(WW instanceof EW.c)) throw new TypeError("packet must be an EncodedPacket.");
        if (WW.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== iW && (!iW || "object" !== typeof iW)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), LW(this._connectedTrack, WW), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, WW, iW)
      }
    }
    class wW extends NW {
      constructor(WW) {
        if (super(), !mW.d.includes(WW)) throw new TypeError(`Invalid audio codec '${WW}'. Must be one of: ${mW.d.join(", ")}.`);
        this._codec = WW
      }
    }
    class tW extends wW {
      constructor(WW) {
        super(WW)
      }
      add(WW, iW) {
        if (!(WW instanceof EW.c)) throw new TypeError("packet must be an EncodedPacket.");
        if (WW.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== iW && (!iW || "object" !== typeof iW)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, WW, iW)
      }
    }
    class ZW extends NW {
      constructor(WW) {
        if (super(), !mW.v.includes(WW)) throw new TypeError(`Invalid subtitle codec '${WW}'. Must be one of: ${mW.v.join(", ")}.`);
        this._codec = WW
      }
    }
  },
  41134: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      g: () => cW,
      i: () => EW,
      j: () => LW,
      l: () => PW,
      m: () => wW
    });
    var mW = OW(41127);
    class EW {
      constructor(WW, iW) {
        if (this.data = WW, this.mimeType = iW, !(WW instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("string" !== typeof iW) throw new TypeError("mimeType must be a string.")
      }
    }
    class NW {
      constructor(WW, iW, OW, mW) {
        if (this.data = WW, this.mimeType = iW, this.name = OW, this.description = mW, !(WW instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if (void 0 !== iW && "string" !== typeof iW) throw new TypeError("mimeType, when provided, must be a string.");
        if (void 0 !== OW && "string" !== typeof OW) throw new TypeError("name, when provided, must be a string.");
        if (void 0 !== mW && "string" !== typeof mW) throw new TypeError("description, when provided, must be a string.")
      }
    }
    const PW = WW => {
        if (!WW || "object" !== typeof WW) throw new TypeError("tags must be an object.");
        if (void 0 !== WW.title && "string" !== typeof WW.title) throw new TypeError("tags.title, when provided, must be a string.");
        if (void 0 !== WW.description && "string" !== typeof WW.description) throw new TypeError("tags.description, when provided, must be a string.");
        if (void 0 !== WW.artist && "string" !== typeof WW.artist) throw new TypeError("tags.artist, when provided, must be a string.");
        if (void 0 !== WW.album && "string" !== typeof WW.album) throw new TypeError("tags.album, when provided, must be a string.");
        if (void 0 !== WW.albumArtist && "string" !== typeof WW.albumArtist) throw new TypeError("tags.albumArtist, when provided, must be a string.");
        if (void 0 !== WW.trackNumber && (!Number.isInteger(WW.trackNumber) || WW.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
        if (void 0 !== WW.tracksTotal && (!Number.isInteger(WW.tracksTotal) || WW.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
        if (void 0 !== WW.discNumber && (!Number.isInteger(WW.discNumber) || WW.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
        if (void 0 !== WW.discsTotal && (!Number.isInteger(WW.discsTotal) || WW.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
        if (void 0 !== WW.genre && "string" !== typeof WW.genre) throw new TypeError("tags.genre, when provided, must be a string.");
        if (void 0 !== WW.date && (!(WW.date instanceof Date) || Number.isNaN(WW.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
        if (void 0 !== WW.beatsPerMinute && (!Number.isInteger(WW.beatsPerMinute) || WW.beatsPerMinute <= 0)) throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");
        if (void 0 !== WW.lyrics && "string" !== typeof WW.lyrics) throw new TypeError("tags.lyrics, when provided, must be a string.");
        if (void 0 !== WW.images) {
          if (!Array.isArray(WW.images)) throw new TypeError("tags.images, when provided, must be an array.");
          for (const iW of WW.images) {
            if (!iW || "object" !== typeof iW) throw new TypeError("Each image in tags.images must be an object.");
            if (!(iW.data instanceof Uint8Array)) throw new TypeError("Each image.data must be a Uint8Array.");
            if ("string" !== typeof iW.mimeType) throw new TypeError("Each image.mimeType must be a string.");
            if (!["coverFront", "coverBack", "unknown"].includes(iW.kind)) throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")
          }
        }
        if (void 0 !== WW.comment && "string" !== typeof WW.comment) throw new TypeError("tags.comment, when provided, must be a string.");
        if (void 0 !== WW.raw) {
          if (!WW.raw || "object" !== typeof WW.raw) throw new TypeError("tags.raw, when provided, must be an object.");
          for (const iW of Object.values(WW.raw))
            if (null !== iW && "string" !== typeof iW && (!Array.isArray(iW) || !iW.every((WW => "string" === typeof WW))) && !(iW instanceof Uint8Array) && !(iW instanceof EW) && !(iW instanceof NW) && !(0, mW._b)(iW)) throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")
        }
      },
      LW = WW => void 0 === WW.title && void 0 === WW.description && void 0 === WW.artist && void 0 === WW.album && void 0 === WW.albumArtist && void 0 === WW.trackNumber && void 0 === WW.tracksTotal && void 0 === WW.discNumber && void 0 === WW.discsTotal && void 0 === WW.genre && void 0 === WW.beatsPerMinute && void 0 === WW.date && void 0 === WW.lyrics && (!WW.images || 0 === WW.images.length) && void 0 === WW.comment && (void 0 === WW.raw || 0 === Object.keys(WW.raw).length),
      cW = {
        default: !0,
        primary: !0,
        forced: !1,
        original: !1,
        commentary: !1,
        hearingImpaired: !1,
        visuallyImpaired: !1
      },
      wW = WW => {
        if (!WW || "object" !== typeof WW) throw new TypeError("disposition must be an object.");
        if (void 0 !== WW.default && "boolean" !== typeof WW.default) throw new TypeError("disposition.default must be a boolean.");
        if (void 0 !== WW.primary && "boolean" !== typeof WW.primary) throw new TypeError("disposition.primary must be a boolean.");
        if (void 0 !== WW.forced && "boolean" !== typeof WW.forced) throw new TypeError("disposition.forced must be a boolean.");
        if (void 0 !== WW.original && "boolean" !== typeof WW.original) throw new TypeError("disposition.original must be a boolean.");
        if (void 0 !== WW.commentary && "boolean" !== typeof WW.commentary) throw new TypeError("disposition.commentary must be a boolean.");
        if (void 0 !== WW.hearingImpaired && "boolean" !== typeof WW.hearingImpaired) throw new TypeError("disposition.hearingImpaired must be a boolean.");
        if (void 0 !== WW.visuallyImpaired && "boolean" !== typeof WW.visuallyImpaired) throw new TypeError("disposition.visuallyImpaired must be a boolean.")
      }
  },
  41127: (WW, iW, OW) => {
    function mW(WW) {
      if (!WW) throw new Error("Assertion failed.")
    }
    OW.d(iW, {
      $: () => fi,
      $c: () => RW,
      A: () => rW,
      Bb: () => eW,
      Bd: () => KW,
      Cc: () => Si,
      E: () => Ji,
      Ec: () => ii,
      F: () => Ti,
      Fb: () => xi,
      Gc: () => pW,
      Hb: () => Ai,
      Ic: () => sW,
      J: () => CW,
      Jc: () => MW,
      K: () => mW,
      Kb: () => ti,
      Mc: () => DW,
      Nb: () => mi,
      Nc: () => ZW,
      O: () => VW,
      Pc: () => FW,
      Rb: () => HW,
      S: () => Mi,
      Sc: () => zW,
      Tc: () => lW,
      Ub: () => kW,
      V: () => gW,
      Vc: () => Vi,
      W: () => cW,
      X: () => GW,
      Xb: () => Yi,
      Yc: () => qW,
      _b: () => qi,
      ac: () => ji,
      bb: () => Ui,
      c: () => vW,
      cc: () => UW,
      cd: () => BW,
      ed: () => Hi,
      fb: () => dW,
      fc: () => ci,
      g: () => nW,
      gd: () => JW,
      hc: () => yi,
      j: () => Pi,
      jb: () => bW,
      kc: () => ki,
      kd: () => hW,
      lb: () => Ni,
      ld: () => Xi,
      mb: () => wW,
      mc: () => jW,
      n: () => Bi,
      nb: () => fW,
      nc: () => IW,
      oc: () => li,
      od: () => YW,
      pd: () => SW,
      q: () => LW,
      qb: () => QW,
      qc: () => aW,
      qd: () => Ki,
      r: () => oW,
      t: () => NW,
      td: () => ni,
      u: () => Ei,
      ub: () => XW,
      uc: () => AW,
      v: () => uW,
      x: () => TW,
      xd: () => Ci,
      yb: () => Wi,
      yc: () => PW,
      zb: () => si
    });
    const EW = Math.PI / 180,
      NW = 180 / Math.PI,
      PW = WW => {
        const iW = (WW % 360 + 360) % 360;
        if (0 === iW || 90 === iW || 180 === iW || 270 === iW) return iW;
        throw new Error(`Invalid rotation ${WW}.`)
      },
      LW = [1, 0, 0, 0, 1, 0, 0, 0, 1],
      cW = (WW, iW, OW) => {
        const [mW, EW, , NW, PW] = WW, LW = Math.abs(mW) * iW + Math.abs(NW) * OW, cW = Math.abs(EW) * iW + Math.abs(PW) * OW;
        return AW(AW(xW(-iW / 2, -OW / 2), WW), xW(LW / 2, cW / 2))
      },
      wW = WW => {
        const [iW, OW] = WW, mW = Math.atan2(OW, tW(WW) ? -iW : iW);
        return PW(zW(mW * NW, 90))
      },
      tW = WW => {
        const [iW, OW, , mW, EW] = WW;
        return iW * EW - OW * mW < 0
      },
      ZW = WW => {
        const iW = WW * EW,
          OW = Math.round(Math.cos(iW)),
          mW = Math.round(Math.sin(iW));
        return [OW, mW, 0, -mW, OW, 0, 0, 0, 1]
      },
      xW = (WW, iW) => [1, 0, 0, 0, 1, 0, WW, iW, 1],
      lW = (WW, iW) => [WW, 0, 0, 0, iW, 0, 0, 0, 1],
      AW = (WW, iW) => {
        const OW = new Array(9);
        for (let mW = 0; mW < 3; mW++)
          for (let EW = 0; EW < 3; EW++) OW[3 * mW + EW] = WW[3 * mW] * iW[EW] + WW[3 * mW + 1] * iW[3 + EW] + WW[3 * mW + 2] * iW[6 + EW];
        return OW
      },
      bW = (WW, iW, OW, mW) => ({
        rotation: PW(WW + (iW ? -OW : OW)),
        flip: iW !== mW
      }),
      jW = WW => WW && WW[WW.length - 1],
      UW = WW => WW >= 0 && WW < 2 ** 32,
      kW = WW => WW >= -(2 ** 31) && WW < 2 ** 31,
      sW = WW => {
        let iW = 0;
        for (; 0 === WW.readBits(1) && iW < 32;) iW++;
        if (iW >= 32) throw new Error("Invalid exponential-Golomb code.");
        return (1 << iW) - 1 + WW.readBits(iW)
      },
      MW = WW => {
        const iW = sW(WW);
        return 0 === (1 & iW) ? -(iW >> 1) : iW + 1 >> 1
      },
      KW = (WW, iW, OW, mW) => {
        for (let EW = iW; EW < OW; EW++) {
          const iW = Math.floor(EW / 8);
          let NW = WW[iW];
          const PW = 7 - (7 & EW);
          NW &= ~(1 << PW), NW |= (mW & 1 << OW - EW - 1) >> OW - EW - 1 << PW, WW[iW] = NW
        }
      },
      SW = WW => WW.constructor === Uint8Array ? WW : ArrayBuffer.isView(WW) ? new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength) : new Uint8Array(WW),
      YW = WW => WW.constructor === DataView ? WW : ArrayBuffer.isView(WW) ? new DataView(WW.buffer, WW.byteOffset, WW.byteLength) : new DataView(WW),
      yW = "undefined" !== typeof globalThis.TextEncoder ? globalThis.TextEncoder : class {
        constructor() {
          this.encoding = "utf-8"
        }
        encode() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          const iW = new Uint8Array(3 * WW.length);
          let OW = 0;
          for (let mW = 0; mW < WW.length; mW++) {
            let EW = WW.charCodeAt(mW);
            if (EW < 128) iW[OW++] = EW;
            else if (EW < 2048) iW[OW++] = 192 | EW >> 6, iW[OW++] = 128 | 63 & EW;
            else if (EW < 55296 || EW > 57343) iW[OW++] = 224 | EW >> 12, iW[OW++] = 128 | EW >> 6 & 63, iW[OW++] = 128 | 63 & EW;
            else {
              const NW = mW + 1 < WW.length ? WW.charCodeAt(mW + 1) : 0;
              EW < 56320 && NW >= 56320 && NW <= 57343 ? (EW = 65536 + (EW - 55296 << 10) + (NW - 56320), mW++, iW[OW++] = 240 | EW >> 18, iW[OW++] = 128 | EW >> 12 & 63, iW[OW++] = 128 | EW >> 6 & 63, iW[OW++] = 128 | 63 & EW) : (iW[OW++] = 239, iW[OW++] = 191, iW[OW++] = 189)
            }
          }
          return iW.slice(0, OW)
        }
      },
      TW = "undefined" !== typeof globalThis.TextDecoder ? globalThis.TextDecoder : class {
        constructor() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "utf-8";
          const iW = WW.trim().toLowerCase();
          if ("utf-8" === iW || "utf8" === iW || "unicode-1-1-utf-8" === iW) this.encoding = "utf-8";
          else if ("utf-16le" === iW || "utf-16" === iW) this.encoding = "utf-16le";
          else {
            if ("utf-16be" !== iW) throw new RangeError(`The encoding label provided ('${WW}') is invalid.`);
            this.encoding = "utf-16be"
          }
        }
        decode(WW) {
          const iW = WW ? SW(WW) : new Uint8Array(0),
            OW = [];
          if ("utf-8" === this.encoding) {
            let WW = iW.length >= 3 && 239 === iW[0] && 187 === iW[1] && 191 === iW[2] ? 3 : 0;
            for (; WW < iW.length;) {
              const mW = iW[WW];
              if (mW < 128) {
                OW.push(mW), WW++;
                continue
              }
              let EW, NW;
              if (mW >= 194 && mW < 224) EW = 1, NW = 31 & mW;
              else if (mW >= 224 && mW < 240) EW = 2, NW = 15 & mW;
              else {
                if (!(mW >= 240 && mW < 245)) {
                  OW.push(65533), WW++;
                  continue
                }
                EW = 3, NW = 7 & mW
              }
              let PW = 224 === mW ? 160 : 240 === mW ? 144 : 128,
                LW = 237 === mW ? 159 : 244 === mW ? 143 : 191,
                cW = 1;
              for (; cW <= EW; cW++) {
                const OW = WW + cW < iW.length ? iW[WW + cW] : 0;
                if (OW < PW || OW > LW) break;
                NW = NW << 6 | 63 & OW, PW = 128, LW = 191
              }
              WW += cW, cW <= EW ? OW.push(65533) : NW >= 65536 ? (NW -= 65536, OW.push(55296 | NW >> 10, 56320 | 1023 & NW)) : OW.push(NW)
            }
          } else {
            const WW = "utf-16le" === this.encoding,
              mW = WW ? 255 : 254,
              EW = WW ? 254 : 255;
            let NW = iW.length >= 2 && iW[0] === mW && iW[1] === EW ? 2 : 0;
            for (; NW + 1 < iW.length;) {
              const mW = WW ? iW[NW] | iW[NW + 1] << 8 : iW[NW] << 8 | iW[NW + 1];
              if (NW += 2, mW >= 55296 && mW <= 56319) {
                const EW = NW + 1 < iW.length ? WW ? iW[NW] | iW[NW + 1] << 8 : iW[NW] << 8 | iW[NW + 1] : -1;
                EW >= 56320 && EW <= 57343 ? (OW.push(mW, EW), NW += 2) : OW.push(65533)
              } else mW >= 56320 && mW <= 57343 ? OW.push(65533) : OW.push(mW)
            }
            NW < iW.length && OW.push(65533)
          }
          let mW = "";
          for (let EW = 0; EW < OW.length; EW += 8192) mW += String.fromCharCode(...OW.slice(EW, EW + 8192));
          return mW
        }
      },
      JW = new TW,
      hW = new yW,
      HW = WW => {
        for (let iW = 0; iW < WW.length; iW++) {
          if (WW.charCodeAt(iW) > 255) return !1
        }
        return !0
      },
      nW = {
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        bt2020: 9,
        smpte432: 12
      },
      uW = {
        bt709: 1,
        smpte170m: 6,
        linear: 8,
        "iec61966-2-1": 13,
        pq: 16,
        hlg: 18
      },
      oW = {
        rgb: 0,
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        "bt2020-ncl": 9
      },
      dW = WW => !WW || null == WW.primaries && null == WW.transfer && null == WW.matrix && null == WW.fullRange,
      eW = WW => WW instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && WW instanceof SharedArrayBuffer || ArrayBuffer.isView(WW);
    class vW {
      constructor() {
        this.currentPromise = Promise.resolve(), this.pending = 0
      }
      async acquire() {
        let WW;
        const iW = new Promise((iW => {
            let OW = !1;
            WW = () => {
              OW || (iW(), this.pending--, OW = !0)
            }
          })),
          OW = this.currentPromise;
        return this.currentPromise = iW, this.pending++, await OW, WW
      }
    }
    const gW = WW => [...WW].map((WW => WW.toString(16).padStart(2, "0"))).join(""),
      DW = WW => (WW = (WW = (WW = (WW = (WW = WW >> 1 & 1431655765 | (1431655765 & WW) << 1) >> 2 & 858993459 | (858993459 & WW) << 2) >> 4 & 252645135 | (252645135 & WW) << 4) >> 8 & 16711935 | (16711935 & WW) << 8) >> 16 & 65535 | (65535 & WW) << 16) >>> 0,
      VW = (WW, iW, OW) => {
        let mW = 0,
          EW = WW.length - 1,
          NW = -1;
        for (; mW <= EW;) {
          const PW = mW + (EW - mW + 1) / 2 | 0;
          OW(WW[PW]) <= iW ? (NW = PW, mW = PW + 1) : EW = PW - 1
        }
        return NW
      },
      pW = () => {
        let WW, iW;
        return {
          promise: new Promise(((OW, mW) => {
            WW = OW, iW = mW
          })),
          resolve: WW,
          reject: iW
        }
      },
      fW = (WW, iW) => {
        for (let OW = WW.length - 1; OW >= 0; OW--)
          if (iW(WW[OW])) return OW;
        return -1
      },
      CW = WW => {
        throw new Error(`Unexpected value: ${WW}`)
      },
      XW = (WW, iW, OW) => {
        const mW = WW.getUint8(iW),
          EW = WW.getUint8(iW + 1),
          NW = WW.getUint8(iW + 2);
        return OW ? mW | EW << 8 | NW << 16 : mW << 16 | EW << 8 | NW
      },
      BW = (WW, iW, OW, mW) => {
        OW >>>= 0, OW &= 16777215, mW ? (WW.setUint8(iW, 255 & OW), WW.setUint8(iW + 1, OW >>> 8 & 255), WW.setUint8(iW + 2, OW >>> 16 & 255)) : (WW.setUint8(iW, OW >>> 16 & 255), WW.setUint8(iW + 1, OW >>> 8 & 255), WW.setUint8(iW + 2, 255 & OW))
      },
      qW = (WW, iW, OW, mW) => {
        (OW = GW(OW, -8388608, 8388607)) < 0 && (OW = OW + 16777216 & 16777215), BW(WW, iW, OW, mW)
      },
      RW = (WW, iW, OW, mW) => {
        mW ? (WW.setUint32(iW + 0, OW, !0), WW.setInt32(iW + 4, Math.floor(OW / 2 ** 32), !0)) : (WW.setInt32(iW + 0, Math.floor(OW / 2 ** 32), !0), WW.setUint32(iW + 4, OW, !0))
      },
      GW = (WW, iW, OW) => Math.max(iW, Math.min(OW, WW)),
      IW = (WW, iW, OW) => WW + (iW - WW) * OW,
      aW = (WW, iW) => WW - Math.floor(WW / iW) * iW,
      rW = "und",
      zW = (WW, iW) => Math.round(WW / iW) * iW,
      FW = (WW, iW) => Math.round(WW * iW) / iW,
      QW = (WW, iW) => Math.floor(WW * iW) / iW,
      Wi = WW => {
        let iW = 0;
        for (; WW;) iW++, WW >>= 1;
        return iW
      },
      ii = WW => {
        let iW = 0;
        for (; 0 !== WW;) WW &= WW - 1, iW++;
        return iW
      },
      Oi = /^[a-z]{3}$/,
      mi = WW => Oi.test(WW),
      Ei = 1e6 * (1 + Number.EPSILON),
      Ni = (WW, iW) => {
        const OW = WW < 0 ? -1 : 1;
        let mW = 0,
          EW = 1,
          NW = 1,
          PW = 0,
          LW = WW = Math.abs(WW);
        for (;;) {
          const WW = Math.floor(LW),
            cW = WW * NW + mW,
            wW = WW * PW + EW;
          if (wW > iW) return {
            num: OW * NW,
            den: PW
          };
          if (mW = NW, EW = PW, NW = cW, PW = wW, LW = 1 / (LW - WW), !isFinite(LW)) break
        }
        return {
          num: OW * NW,
          den: PW
        }
      };
    class Pi {
      constructor() {
        this.currentPromise = Promise.resolve()
      }
      call(WW) {
        return this.currentPromise = this.currentPromise.then(WW)
      }
    }
    let Li = null;
    const ci = () => null !== Li ? Li : Li = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
    let wi = null;
    const ti = () => null !== wi ? wi : wi = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
    let Zi = null;
    const xi = () => null !== Zi ? Zi : Zi = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
    const li = WW => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${WW} is not available in this environment.` : `${WW} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`,
      Ai = WW => WW instanceof DOMException && "QuotaExceededError" === WW.name && /reclaimed/i.test(WW.message),
      bi = (async () => {})().constructor,
      ji = WW => WW instanceof bi || WW instanceof Promise || "function" === typeof WW?.then,
      Ui = (WW, iW) => -1 !== WW ? WW : iW,
      ki = function*(WW) {
        for (const iW in WW) {
          const OW = WW[iW];
          void 0 !== OW && (yield {
            key: iW,
            value: OW
          })
        }
      },
      si = WW => {
        switch (WW.toLowerCase()) {
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
      Mi = WW => {
        let iW = "";
        for (let OW = 0; OW < WW.length; OW++) iW += String.fromCharCode(WW[OW]);
        return btoa(iW)
      },
      Ki = (WW, iW) => {
        if (WW.length !== iW.length) return !1;
        for (let OW = 0; OW < WW.length; OW++)
          if (WW[OW] !== iW[OW]) return !1;
        return !0
      },
      Si = () => {
        Symbol.dispose ??= Symbol("Symbol.dispose")
      },
      Yi = WW => "number" === typeof WW && !Number.isNaN(WW),
      yi = (WW, iW) => {
        if (iW.includes("://")) return iW;
        if (WW.includes("://")) {
          const iW = WW.indexOf("?"); - 1 !== iW && (WW = WW.slice(0, iW))
        }
        let OW;
        if (iW.startsWith("/")) {
          const mW = WW.indexOf("://");
          if (-1 === mW) OW = iW;
          else {
            const EW = WW.indexOf("/", mW + 3);
            OW = -1 === EW ? WW + iW : WW.slice(0, EW) + iW
          }
        } else {
          const mW = WW.lastIndexOf("/");
          OW = -1 === mW ? iW : WW.slice(0, mW + 1) + iW
        }
        let mW = "";
        const EW = OW.indexOf("://");
        if (-1 !== EW) {
          const WW = OW.indexOf("/", EW + 3); - 1 !== WW && (mW = OW.slice(0, WW), OW = OW.slice(WW))
        }
        const NW = OW.split("/"),
          PW = [];
        for (const LW of NW) ".." === LW ? PW.pop() : "." !== LW && PW.push(LW);
        return mW + PW.join("/")
      },
      Ti = (WW, iW) => {
        let OW = -1,
          mW = 1 / 0;
        for (let EW = 0; EW < WW.length; EW++) {
          const NW = iW(WW[EW]);
          NW < mW && (mW = NW, OW = EW)
        }
        return OW
      },
      Ji = (WW, iW) => {
        let OW = -1,
          mW = -1 / 0;
        for (let EW = 0; EW < WW.length; EW++) {
          const NW = iW(WW[EW]);
          NW > mW && (mW = NW, OW = EW)
        }
        return OW
      },
      Hi = WW => {
        mW(Number.isInteger(WW.num)), mW(Number.isInteger(WW.den)), mW(0 !== WW.den);
        let iW = Math.abs(WW.num),
          OW = Math.abs(WW.den);
        for (; 0 !== OW;) {
          const WW = iW % OW;
          iW = OW, OW = WW
        }
        const EW = iW || 1;
        return {
          num: WW.num / EW,
          den: WW.den / EW
        }
      },
      ni = (WW, iW) => {
        if ("object" !== typeof WW || !WW) throw new TypeError(`${iW} must be an object.`);
        if (!Number.isInteger(WW.left) || WW.left < 0) throw new TypeError(`${iW}.left must be a non-negative integer.`);
        if (!Number.isInteger(WW.top) || WW.top < 0) throw new TypeError(`${iW}.top must be a non-negative integer.`);
        if (!Number.isInteger(WW.width) || WW.width < 0) throw new TypeError(`${iW}.width must be a non-negative integer.`);
        if (!Number.isInteger(WW.height) || WW.height < 0) throw new TypeError(`${iW}.height must be a non-negative integer.`)
      };
    let ui, oi = 1;
    const di = new Map,
      ei = new Map,
      vi = () => "undefined" === typeof window,
      gi = () => {
        const WW = new Map,
          iW = new Map;
        self.onmessage = OW => {
          const mW = OW.data;
          switch (mW.type) {
            case "set-timeout": {
              const iW = setTimeout((() => {
                WW.delete(mW.timerId), self.postMessage({
                  type: "fire",
                  timerId: mW.timerId
                })
              }), mW.delay);
              WW.set(mW.timerId, iW)
            }
            break;
            case "set-interval": {
              const WW = setInterval((() => {
                self.postMessage({
                  type: "fire",
                  timerId: mW.timerId
                })
              }), mW.delay);
              iW.set(mW.timerId, WW)
            }
            break;
            case "clear-timeout": {
              const iW = WW.get(mW.timerId);
              void 0 !== iW && (clearTimeout(iW), WW.delete(mW.timerId))
            }
            break;
            case "clear-interval": {
              const WW = iW.get(mW.timerId);
              void 0 !== WW && (clearInterval(WW), iW.delete(mW.timerId))
            }
          }
        }
      },
      Di = () => {
        if (ui) return ui;
        const WW = `(${gi.toString()})();`,
          iW = URL.createObjectURL(new Blob([WW], {
            type: "text/javascript"
          }));
        return ui = new Worker(iW), URL.revokeObjectURL(iW), ui.onmessage = WW => {
          const iW = WW.data,
            OW = di.get(iW.timerId);
          if (OW) return di.delete(iW.timerId), void OW();
          const mW = ei.get(iW.timerId);
          mW && mW()
        }, ui
      },
      Vi = (WW, iW) => {
        if (vi()) return {
          id: setInterval(WW, iW)
        };
        const OW = oi++;
        return ei.set(OW, (() => {
          WW()
        })), Di().postMessage({
          type: "set-interval",
          timerId: OW,
          delay: iW
        }), {
          id: OW
        }
      },
      fi = WW => {
        vi() ? clearInterval(WW.id) : (mW("number" === typeof WW.id), ei.delete(WW.id), Di().postMessage({
          type: "clear-interval",
          timerId: WW.id
        }))
      },
      Ci = WW => new Promise((iW => setTimeout(iW, WW))),
      Xi = WW => Array.isArray(WW) ? WW : [WW];
    class Bi {
      constructor() {
        this._listeners = new Map
      }
      on(WW, iW, OW) {
        this._listeners.has(WW) || this._listeners.set(WW, new Set);
        const mW = {
          cZ: iW,
          once: OW?.once ?? !1
        };
        return this._listeners.get(WW).add(mW), () => {
          this._listeners.get(WW)?.delete(mW)
        }
      }
      _emit() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        const [mW, EW] = iW, NW = this._listeners.get(mW);
        if (NW)
          for (const LW of NW) {
            try {
              LW.cZ(EW)
            } catch (PW) {
              console.error(PW)
            }
            LW.once && NW.delete(LW)
          }
      }
    }
    const qi = WW => null !== WW && "object" === typeof WW && Object.getPrototypeOf(WW) === Object.prototype && Object.values(WW).every((WW => "string" === typeof WW))
  },
  41142: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => VO,
      f: () => pO,
      h: () => DO,
      j: () => vO,
      n: () => CO
    });
    var mW = OW(41149),
      EW = OW(41156);
    var NW;
    ! function(WW) {
      WW[WW.FrameCount = 1] = "FrameCount", WW[WW.FileSize = 2] = "FileSize", WW[WW.Toc = 4] = "Toc"
    }(NW || (NW = {}));
    var PW = OW(41162),
      LW = OW(41127);
    class cW {
      constructor(WW, iW, OW, mW, EW) {
        this.bytes = WW, this.view = iW, this.offset = OW, this.start = mW, this.end = EW, this.bufferPos = mW - OW
      }
      static tempFromBytes(WW) {
        return new cW(WW, (0, LW.od)(WW), 0, 0, WW.length)
      }
      get length() {
        return this.end - this.start
      }
      get filePos() {
        return this.offset + this.bufferPos
      }
      set filePos(WW) {
        this.bufferPos = WW - this.offset
      }
      get remainingLength() {
        return Math.max(this.end - this.filePos, 0)
      }
      skip(WW) {
        this.bufferPos += WW
      }
      slice(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.end - WW;
        if (WW < this.start || WW + iW > this.end) throw new RangeError("Slicing outside of original slice.");
        return new cW(this.bytes, this.view, this.offset, WW, WW + iW)
      }
    }
    const wW = (WW, iW) => {
        if (WW.filePos < WW.start || WW.filePos + iW > WW.end) throw new RangeError(`Tried reading [${WW.filePos}, ${WW.filePos+iW}), but slice is [${WW.start}, ${WW.end}). This is likely an internal error, please report it alongside the file that caused it.`)
      },
      tW = (WW, iW) => {
        wW(WW, iW);
        const OW = WW.bytes.subarray(WW.bufferPos, WW.bufferPos + iW);
        return WW.bufferPos += iW, OW
      };
    var ZW, xW;
    ! function(WW) {
      WW[WW.Unsynchronisation = 128] = "Unsynchronisation", WW[WW.ExtendedHeader = 64] = "ExtendedHeader", WW[WW.ExperimentalIndicator = 32] = "ExperimentalIndicator", WW[WW.Footer = 16] = "Footer"
    }(ZW || (ZW = {})),
    function(WW) {
      WW[WW.ISO_8859_1 = 0] = "ISO_8859_1", WW[WW.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", WW[WW.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", WW[WW.UTF_8 = 3] = "UTF_8"
    }(xW || (xW = {}));
    var lW = OW(41134);
    class AW {
      constructor(WW) {
        this.mutex = new LW.c, this.trackTimestampInfo = new WeakMap, this.output = WW
      }
      onTrackClose(WW) {}
      validateTimestamp(WW, iW, OW) {
        let mW = this.trackTimestampInfo.get(WW);
        if (mW) {
          if (OW && (mW.maxTimestampBeforeLastKeyPacket = mW.maxTimestamp), null !== mW.maxTimestampBeforeLastKeyPacket && iW < mW.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${iW}s, but largest timestamp is ${mW.maxTimestampBeforeLastKeyPacket}s.`);
          mW.maxTimestamp = Math.max(mW.maxTimestamp, iW)
        } else {
          if (!OW) throw new Error("First packet must be a key packet.");
          mW = {
            maxTimestamp: iW,
            maxTimestampBeforeLastKeyPacket: null
          }, this.trackTimestampInfo.set(WW, mW)
        }
      }
    }
    var bW = OW(41160),
      jW = OW(41154);
    var UW = OW(41171),
      kW = OW(41164);
    class sW {
      constructor(WW) {
        this.writer = WW, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap
      }
      writeU32(WW) {
        this.helperView.setUint32(0, WW, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeU64(WW) {
        this.helperView.setUint32(0, Math.floor(WW / 2 ** 32), !1), this.helperView.setUint32(4, WW, !1), this.writer.write(this.helper.subarray(0, 8))
      }
      writeAscii(WW) {
        for (let iW = 0; iW < WW.length; iW++) this.helperView.setUint8(iW % 8, WW.charCodeAt(iW)), iW % 8 === 7 && this.writer.write(this.helper);
        WW.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, WW.length % 8))
      }
      writeBox(WW) {
        if (this.offsets.set(WW, this.writer.getPos()), WW.contents && !WW.children) this.writeBoxHeader(WW, WW.size ?? WW.contents.byteLength + 8), this.writer.write(WW.contents);
        else {
          const iW = this.writer.getPos();
          if (this.writeBoxHeader(WW, 0), WW.contents && this.writer.write(WW.contents), WW.children)
            for (const EW of WW.children) EW && this.writeBox(EW);
          const OW = this.writer.getPos(),
            mW = WW.size ?? OW - iW;
          this.writer.seek(iW), this.writeBoxHeader(WW, mW), this.writer.seek(OW)
        }
      }
      writeBoxHeader(WW, iW) {
        this.writeU32(WW.largeSize ? 1 : iW), this.writeAscii(WW.type), WW.largeSize && this.writeU64(iW)
      }
      measureBoxHeader(WW) {
        return 8 + (WW.largeSize ? 8 : 0)
      }
      patchBox(WW) {
        const iW = this.offsets.get(WW);
        (0, LW.K)(void 0 !== iW);
        const OW = this.writer.getPos();
        this.writer.seek(iW), this.writeBox(WW), this.writer.seek(OW)
      }
      measureBox(WW) {
        if (WW.contents && !WW.children) {
          return this.measureBoxHeader(WW) + WW.contents.byteLength
        } {
          let iW = this.measureBoxHeader(WW);
          if (WW.contents && (iW += WW.contents.byteLength), WW.children)
            for (const OW of WW.children) OW && (iW += this.measureBox(OW));
          return iW
        }
      }
    }
    const MW = new Uint8Array(8),
      KW = new DataView(MW.buffer),
      SW = WW => [(WW % 256 + 256) % 256],
      YW = WW => (KW.setUint16(0, WW, !1), [MW[0], MW[1]]),
      yW = WW => (KW.setInt16(0, WW, !1), [MW[0], MW[1]]),
      TW = WW => (KW.setUint32(0, WW, !1), [MW[1], MW[2], MW[3]]),
      JW = WW => (KW.setUint32(0, WW, !1), [MW[0], MW[1], MW[2], MW[3]]),
      hW = WW => (KW.setInt32(0, WW, !1), [MW[0], MW[1], MW[2], MW[3]]),
      HW = WW => (KW.setUint32(0, Math.floor(WW / 2 ** 32), !1), KW.setUint32(4, WW, !1), [MW[0], MW[1], MW[2], MW[3], MW[4], MW[5], MW[6], MW[7]]),
      nW = WW => (KW.setInt32(0, Math.floor(WW / 2 ** 32), !1), KW.setUint32(4, WW, !1), [MW[0], MW[1], MW[2], MW[3], MW[4], MW[5], MW[6], MW[7]]),
      uW = WW => (KW.setInt16(0, 256 * WW, !1), [MW[0], MW[1]]),
      oW = WW => (KW.setInt32(0, 65536 * WW, !1), [MW[0], MW[1], MW[2], MW[3]]),
      dW = WW => (KW.setInt32(0, 2 ** 30 * WW, !1), [MW[0], MW[1], MW[2], MW[3]]),
      eW = (WW, iW) => {
        const OW = [];
        let mW = WW;
        do {
          let WW = 127 & mW;
          mW >>= 7, OW.length > 0 && (WW |= 128), OW.push(WW), void 0 !== iW && iW--
        } while (mW > 0 || iW);
        return OW.reverse()
      },
      vW = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = Array(WW.length).fill(null).map(((iW, OW) => WW.charCodeAt(OW)));
        return iW && OW.push(0), OW
      },
      gW = WW => [oW(WW[0]), oW(WW[1]), dW(WW[2]), oW(WW[3]), oW(WW[4]), dW(WW[5]), oW(WW[6]), oW(WW[7]), dW(WW[8])],
      DW = (WW, iW, OW) => ({
        type: WW,
        contents: iW && new Uint8Array(iW.flat(10)),
        children: OW
      }),
      VW = (WW, iW, OW, mW, EW) => DW(WW, [SW(iW), TW(OW), mW ?? []], EW),
      pW = () => DW("styp", [vW("iso5"), JW(0), vW("iso5"), vW("iso6"), vW("mp41"), vW("cmfc"), vW("dash")]),
      fW = (WW, iW) => {
        const OW = Math.max(0, WW.minWrittenTimestamp);
        let mW = Math.max(0, WW.maxWrittenEndTimestamp - OW);
        return Number.isFinite(mW) || (mW = 0), VW("sidx", 1, 0, [JW(1), JW(xO), HW(AO(OW, xO)), HW(0), YW(0), YW(1), JW(2147483647 & iW), JW(AO(mW, xO)), JW(0)])
      },
      CW = WW => ({
        type: "mdat",
        largeSize: WW
      }),
      XW = WW => DW("moov", void 0, [BW(WW.creationTime, WW.trackDatas), ...WW.trackDatas.map((iW => qW(iW, WW.creationTime))), WW.isFragmented ? oi(WW.trackDatas) : null, Ii(WW)]),
      BW = (WW, iW) => {
        const OW = Math.max(0, ...iW.map((WW => Math.max(0, AO(bO(WW), xO) + AO(WW.startTimestampOffset ?? 0, xO))))),
          mW = Math.max(0, ...iW.map((WW => WW.track.id))) + 1,
          EW = !(0, LW.cc)(WW) || !(0, LW.cc)(OW),
          NW = EW ? HW : JW;
        return VW("mvhd", +EW, 0, [NW(WW), NW(WW), JW(xO), NW(OW), oW(1), uW(1), Array(10).fill(0), gW(LW.q), Array(24).fill(0), JW(mW)])
      },
      qW = (WW, iW) => {
        const OW = lO(WW),
          mW = null !== WW.startTimestampOffset && 0 !== WW.startTimestampOffset;
        return DW("trak", void 0, [RW(WW, iW), mW ? GW(WW) : null, IW(WW, iW), void 0 !== OW.name ? DW("udta", void 0, [DW("name", [...LW.kd.encode(OW.name)])]) : null])
      },
      RW = (WW, iW) => {
        const OW = Math.max(0, AO(bO(WW), xO) + AO(WW.startTimestampOffset ?? 0, xO)),
          mW = !(0, LW.cc)(iW) || !(0, LW.cc)(OW),
          EW = mW ? HW : JW;
        let NW;
        if ("video" === WW.type && WW.track.metadata.transformationMatrix) NW = WW.track.metadata.transformationMatrix;
        else if ("video" === WW.type) {
          const {
            rotation: iW,
            flip: OW
          } = WW.track.metadata, mW = (0, LW.uc)((0, LW.Nc)(iW ?? 0), (0, LW.Tc)(OW ? -1 : 1, 1));
          NW = (0, LW.W)(mW, WW.info.width, WW.info.height)
        } else NW = LW.q;
        let PW = 2;
        !1 !== WW.track.metadata.disposition?.default && (PW |= 1);
        const cW = "video" === WW.type ? 0 : "audio" === WW.type ? 1 : "subtitle" === WW.type ? 2 : (0, LW.J)(WW);
        return VW("tkhd", +mW, PW, [EW(iW), EW(iW), JW(WW.track.id), JW(0), EW(OW), Array(8).fill(0), YW(0), YW(cW), uW("audio" === WW.type ? 1 : 0), YW(0), gW(NW), oW("video" === WW.type ? WW.info.width : 0), oW("video" === WW.type ? WW.info.height : 0)])
      },
      GW = WW => {
        const iW = WW.startTimestampOffset;
        if ((0, LW.K)(null !== iW), iW > 0) {
          const OW = AO(iW, xO),
            mW = AO(bO(WW), xO),
            EW = !(0, LW.cc)(OW) || !(0, LW.cc)(mW),
            NW = EW ? HW : JW,
            PW = EW ? nW : hW;
          return DW("edts", void 0, [VW("elst", EW ? 1 : 0, 0, [JW(2), NW(OW), PW(-1), oW(1), NW(mW), PW(0), oW(1)])])
        } {
          const OW = AO(-iW, WW.timescale),
            mW = Math.max(0, AO(bO(WW), xO) + AO(iW, xO)),
            EW = !(0, LW.Ub)(OW) || !(0, LW.cc)(mW),
            NW = EW ? HW : JW,
            PW = EW ? nW : hW;
          return DW("edts", void 0, [VW("elst", EW ? 1 : 0, 0, [JW(1), NW(mW), PW(OW), oW(1)])])
        }
      },
      IW = (WW, iW) => DW("mdia", void 0, [aW(WW, iW), FW(!0, rW[WW.type], zW[WW.type]), QW(WW)]),
      aW = (WW, iW) => {
        const OW = AO(bO(WW), WW.timescale),
          mW = !(0, LW.cc)(iW) || !(0, LW.cc)(OW),
          EW = mW ? HW : JW;
        return VW("mdhd", +mW, 0, [EW(iW), EW(iW), JW(WW.timescale), EW(OW), YW(cO(WW.track.metadata.languageCode ?? LW.A)), YW(0)])
      },
      rW = {
        video: "vide",
        audio: "soun",
        subtitle: "text"
      },
      zW = {
        video: "MediabunnyVideoHandler",
        audio: "MediabunnySoundHandler",
        subtitle: "MediabunnyTextHandler"
      },
      FW = function(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "\0\0\0\0";
        return VW("hdlr", 0, 0, [WW ? vW("mhlr") : JW(0), vW(iW), vW(mW), JW(0), JW(0), vW(OW, !0)])
      },
      QW = WW => DW("minf", void 0, [Wi[WW.type](), ii(), Ei(WW)]),
      Wi = {
        video: () => VW("vmhd", 0, 1, [YW(0), YW(0), YW(0), YW(0)]),
        audio: () => VW("smhd", 0, 0, [YW(0), YW(0)]),
        subtitle: () => VW("nmhd", 0, 0)
      },
      ii = () => DW("dinf", void 0, [Oi()]),
      Oi = () => VW("dref", 0, 0, [JW(1)], [mi()]),
      mi = () => VW("url ", 0, 1),
      Ei = WW => {
        const iW = WW.compositionTimeOffsetTable.length > 1 || WW.compositionTimeOffsetTable.some((WW => 0 !== WW.sampleCompositionTimeOffset));
        return DW("stbl", void 0, [Ni(WW), Yi(WW), iW ? ni(WW) : null, iW ? ui(WW) : null, Ti(WW), Ji(WW), Hi(WW), yi(WW)])
      },
      Ni = WW => {
        let iW;
        if ("video" === WW.type) iW = Pi(OO(WW.track.source._codec, WW.info.decoderConfig.codec), WW);
        else if ("audio" === WW.type) {
          const OW = EO(WW.track.source._codec, WW.info.decoderConfig.codec, WW.muxer.isQuickTime);
          (0, LW.K)(OW), iW = Zi(OW, WW)
        } else "subtitle" === WW.type && (iW = Si(PO[WW.track.source._codec], WW));
        return (0, LW.K)(iW), VW("stsd", 0, 0, [JW(1)], [iW])
      },
      Pi = (WW, iW) => DW(WW, [Array(6).fill(0), YW(1), YW(0), YW(0), Array(12).fill(0), YW(iW.info.width), YW(iW.info.height), JW(4718592), JW(4718592), JW(0), YW(1), SW(kW.b.length), vW(kW.b), Array(31 - kW.b.length).fill(0), YW(iW.info.hasAlphaChannel ? 32 : 24), yW(65535)], [mO[iW.track.source._codec]?.(iW) ?? null, ci(iW), (0, LW.fb)(iW.info.decoderConfig.colorSpace) ? null : wi(iW), Li(iW)]),
      Li = WW => 0 === WW.avgBitrate && 0 === WW.maxBitrate ? null : DW("btrt", [JW(0), JW(WW.maxBitrate), JW(WW.avgBitrate)]),
      ci = WW => WW.info.pixelAspectRatio.num === WW.info.pixelAspectRatio.den ? null : DW("pasp", [JW(WW.info.pixelAspectRatio.num), JW(WW.info.pixelAspectRatio.den)]),
      wi = WW => {
        const iW = WW.info.decoderConfig.colorSpace;
        return DW("colr", [vW(WW.muxer.isQuickTime ? "nclc" : "nclx"), YW(null != iW?.primaries ? LW.g[iW.primaries] : 2), YW(null != iW?.transfer ? LW.v[iW.transfer] : 2), YW(null != iW?.matrix ? LW.r[iW.matrix] : 2), WW.muxer.isQuickTime ? [] : SW((iW?.fullRange ? 1 : 0) << 7)])
      },
      ti = WW => {
        if (!WW.info.decoderConfig) return null;
        const iW = WW.info.decoderConfig,
          OW = iW.codec.split("."),
          mW = Number(OW[1]),
          EW = Number(OW[2]),
          NW = (Number(OW[3]) << 4) + ((OW[4] ? Number(OW[4]) : 1) << 1) + (OW[8] ? Number(OW[8]) : Number(iW.colorSpace?.fullRange ?? 0)),
          PW = OW[5] ? Number(OW[5]) : iW.colorSpace?.primaries ? LW.g[iW.colorSpace.primaries] : 1,
          cW = OW[6] ? Number(OW[6]) : iW.colorSpace?.transfer ? LW.v[iW.colorSpace.transfer] : 1,
          wW = OW[7] ? Number(OW[7]) : iW.colorSpace?.matrix ? LW.r[iW.colorSpace.matrix] : 1;
        return VW("vpcC", 1, 0, [SW(mW), SW(EW), SW(NW), SW(PW), SW(cW), SW(wW), YW(0)])
      },
      Zi = (WW, iW) => {
        let OW, mW = 0,
          NW = 16;
        const PW = EW.r.includes(iW.track.source._codec);
        if (PW) {
          const WW = iW.track.source._codec,
            {
              sampleSize: OW
            } = (0, EW.U)(WW);
          NW = 8 * OW, NW > 16 && (mW = 1)
        }
        if (iW.muxer.isQuickTime && (mW = 1), 0 === mW) OW = [Array(6).fill(0), YW(1), YW(mW), YW(0), JW(0), YW(iW.info.numberOfChannels), YW(NW), YW(0), YW(0), YW(iW.info.sampleRate < 65536 ? iW.info.sampleRate : 0), YW(0)];
        else {
          const WW = PW ? 0 : -2;
          OW = [Array(6).fill(0), YW(1), YW(mW), YW(0), JW(0), YW(iW.info.numberOfChannels), YW(Math.min(NW, 16)), yW(WW), YW(0), YW(iW.info.sampleRate < 65536 ? iW.info.sampleRate : 0), YW(0), PW ? [JW(1), JW(NW / 8), JW(iW.info.numberOfChannels * NW / 8)] : [JW(0), JW(0), JW(0)], JW(2)]
        }
        return DW(WW, OW, [NO(iW.track.source._codec, iW.muxer.isQuickTime)?.(iW) ?? null, Li(iW)])
      },
      xi = WW => {
        let iW;
        switch (WW.track.source._codec) {
          case "aac":
            iW = 64;
            break;
          case "mp3":
            iW = 107;
            break;
          case "vorbis":
            iW = 221;
            break;
          default:
            throw new Error(`Unhandled audio codec: ${WW.track.source._codec}`)
        }
        let OW = [...SW(iW), ...SW(21), ...TW(0), ...JW(WW.maxBitrate), ...JW(WW.avgBitrate)];
        if (WW.info.decoderConfig.description) {
          const iW = (0, LW.pd)(WW.info.decoderConfig.description);
          OW = [...OW, ...SW(5), ...eW(iW.byteLength), ...iW]
        }
        return OW = [...YW(1), ...SW(0), ...SW(4), ...eW(OW.length), ...OW, ...SW(6), ...SW(1), ...SW(2)], OW = [...SW(3), ...eW(OW.length), ...OW], VW("esds", 0, 0, OW)
      },
      li = WW => DW("wave", void 0, [Ai(WW), bi(WW), DW("\0\0\0\0")]),
      Ai = WW => DW("frma", [vW(EO(WW.track.source._codec, WW.info.decoderConfig.codec, WW.muxer.isQuickTime))]),
      bi = WW => {
        const {
          littleEndian: iW
        } = (0, EW.U)(WW.track.source._codec);
        return DW("enda", [YW(+iW)])
      },
      ji = WW => {
        let iW = WW.info.numberOfChannels,
          OW = 3840,
          mW = WW.info.sampleRate,
          EW = 0,
          NW = 0,
          PW = new Uint8Array(0);
        const cW = WW.info.decoderConfig?.description;
        if (cW) {
          (0, LW.K)(cW.byteLength >= 18);
          const WW = (0, LW.pd)(cW),
            wW = (0, bW.nb)(WW);
          iW = wW.outputChannelCount, OW = wW.preSkip, mW = wW.inputSampleRate, EW = wW.outputGain, NW = wW.channelMappingFamily, wW.channelMappingTable && (PW = wW.channelMappingTable)
        }
        return DW("dOps", [SW(0), SW(iW), YW(OW), JW(mW), yW(EW), SW(NW), ...PW])
      },
      Ui = WW => {
        const iW = WW.info.decoderConfig?.description;
        (0, LW.K)(iW);
        const OW = (0, LW.pd)(iW);
        return VW("dfLa", 0, 0, [...OW.subarray(4)])
      },
      ki = WW => {
        const {
          littleEndian: iW,
          sampleSize: OW
        } = (0, EW.U)(WW.track.source._codec);
        return VW("pcmC", 0, 0, [SW(+iW), SW(8 * OW)])
      },
      si = WW => {
        (0, LW.K)(WW.info.primingPacket);
        const iW = (0, bW.cb)(WW.info.primingPacket.data);
        if (!iW) throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
        const OW = new Uint8Array(3),
          mW = new jW.c(OW);
        return mW.writeBits(2, iW.fscod), mW.writeBits(5, iW.bsid), mW.writeBits(3, iW.bsmod), mW.writeBits(3, iW.acmod), mW.writeBits(1, iW.lfeon), mW.writeBits(5, iW.bitRateCode), mW.writeBits(5, 0), DW("dac3", [...OW])
      },
      Mi = WW => {
        (0, LW.K)(WW.info.primingPacket);
        const iW = (0, bW.hb)(WW.info.primingPacket.data);
        if (!iW) throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
        let OW = 16;
        for (const PW of iW.substreams) OW += 23, PW.numDepSub > 0 ? OW += 9 : OW += 1;
        const mW = Math.ceil(OW / 8),
          EW = new Uint8Array(mW),
          NW = new jW.c(EW);
        NW.writeBits(13, iW.dataRate), NW.writeBits(3, iW.substreams.length - 1);
        for (const PW of iW.substreams) NW.writeBits(2, PW.fscod), NW.writeBits(5, PW.bsid), NW.writeBits(1, 0), NW.writeBits(1, 0), NW.writeBits(3, PW.bsmod), NW.writeBits(3, PW.acmod), NW.writeBits(1, PW.lfeon), NW.writeBits(3, 0), NW.writeBits(4, PW.numDepSub), PW.numDepSub > 0 ? NW.writeBits(9, PW.chanLoc) : NW.writeBits(1, 0);
        return DW("dec3", [...EW])
      },
      Ki = WW => {
        (0, LW.K)(WW.info.primingPacket);
        const iW = (0, bW.eb)(WW.info.primingPacket.data);
        if (!iW) throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");
        return DW("ddts", [...(0, bW.q)(iW)])
      },
      Si = (WW, iW) => DW(WW, [Array(6).fill(0), YW(1)], [LO[iW.track.source._codec](iW), Li(iW)]),
      Yi = WW => VW("stts", 0, 0, [JW(WW.timeToSampleTable.length), WW.timeToSampleTable.map((WW => [JW(WW.sampleCount), JW(WW.sampleDelta)]))]),
      yi = WW => {
        if (WW.samples.every((WW => "key" === WW.type))) return null;
        const iW = [...WW.samples.entries()].filter((WW => {
          let [, iW] = WW;
          return "key" === iW.type
        }));
        return VW("stss", 0, 0, [JW(iW.length), iW.map((WW => {
          let [iW] = WW;
          return JW(iW + 1)
        }))])
      },
      Ti = WW => VW("stsc", 0, 0, [JW(WW.compactlyCodedChunkTable.length), WW.compactlyCodedChunkTable.map((WW => [JW(WW.firstChunk), JW(WW.samplesPerChunk), JW(1)]))]),
      Ji = WW => {
        if ("audio" === WW.type && WW.info.requiresPcmTransformation) {
          const {
            sampleSize: iW
          } = (0, EW.U)(WW.track.source._codec);
          return VW("stsz", 0, 0, [JW(iW * WW.info.numberOfChannels), JW(WW.samples.reduce(((iW, OW) => iW + AO(OW.duration, WW.timescale)), 0))])
        }
        return VW("stsz", 0, 0, [JW(0), JW(WW.samples.length), WW.samples.map((WW => JW(WW.size)))])
      },
      Hi = WW => WW.finalizedChunks.length > 0 && (0, LW.mc)(WW.finalizedChunks).offset >= 2 ** 32 ? VW("co64", 0, 0, [JW(WW.finalizedChunks.length), WW.finalizedChunks.map((WW => HW(WW.offset)))]) : VW("stco", 0, 0, [JW(WW.finalizedChunks.length), WW.finalizedChunks.map((WW => JW(WW.offset)))]),
      ni = WW => VW("ctts", 1, 0, [JW(WW.compositionTimeOffsetTable.length), WW.compositionTimeOffsetTable.map((WW => [JW(WW.sampleCount), hW(WW.sampleCompositionTimeOffset)]))]),
      ui = WW => {
        let iW = 1 / 0,
          OW = -1 / 0,
          mW = 1 / 0,
          EW = -1 / 0;
        (0, LW.K)(WW.compositionTimeOffsetTable.length > 0), (0, LW.K)(WW.samples.length > 0);
        for (let PW = 0; PW < WW.compositionTimeOffsetTable.length; PW++) {
          const mW = WW.compositionTimeOffsetTable[PW];
          iW = Math.min(iW, mW.sampleCompositionTimeOffset), OW = Math.max(OW, mW.sampleCompositionTimeOffset)
        }
        for (let PW = 0; PW < WW.samples.length; PW++) {
          const iW = WW.samples[PW];
          mW = Math.min(mW, AO(iW.timestamp, WW.timescale)), EW = Math.max(EW, AO(iW.timestamp + iW.duration, WW.timescale))
        }
        const NW = Math.max(-iW, 0);
        return EW >= 2 ** 31 ? null : VW("cslg", 0, 0, [hW(NW), hW(iW), hW(OW), hW(mW), hW(EW)])
      },
      oi = WW => DW("mvex", void 0, WW.map(di)),
      di = WW => VW("trex", 0, 0, [JW(WW.track.id), JW(1), JW(0), JW(0), JW(0)]),
      ei = (WW, iW) => DW("moof", void 0, [vi(WW), ...iW.map(Di)]),
      vi = WW => VW("mfhd", 0, 0, [JW(WW)]),
      gi = WW => {
        let iW = 0,
          OW = 0;
        const mW = "delta" === WW.type;
        return OW |= +mW, iW |= mW ? 1 : 2, iW << 24 | OW << 16
      },
      Di = WW => DW("traf", void 0, [Vi(WW), fi(WW), Ci(WW)]),
      Vi = WW => {
        (0, LW.K)(WW.currentChunk);
        let iW = 0;
        iW |= 8, iW |= 16, iW |= 32, iW |= 131072;
        const OW = WW.currentChunk.samples[1] ?? WW.currentChunk.samples[0],
          mW = {
            duration: OW.timescaleUnitsToNextSample,
            size: OW.size,
            flags: gi(OW)
          };
        return VW("tfhd", 0, 131128, [JW(WW.track.id), JW(mW.duration), JW(mW.size), JW(mW.flags)])
      },
      fi = WW => ((0, LW.K)(WW.currentChunk), VW("tfdt", 1, 0, [HW(AO(WW.currentChunk.startTimestamp, WW.timescale))])),
      Ci = WW => {
        (0, LW.K)(WW.currentChunk);
        const iW = WW.currentChunk.samples.map((WW => WW.timescaleUnitsToNextSample)),
          OW = WW.currentChunk.samples.map((WW => WW.size)),
          mW = WW.currentChunk.samples.map(gi),
          EW = WW.currentChunk.samples.map((iW => AO(iW.timestamp - iW.decodeTimestamp, WW.timescale))),
          NW = new Set(iW),
          PW = new Set(OW),
          cW = new Set(mW),
          wW = new Set(EW),
          tW = 2 === cW.size && mW[0] !== mW[1],
          ZW = NW.size > 1,
          xW = PW.size > 1,
          lW = !tW && cW.size > 1,
          AW = wW.size > 1 || [...wW].some((WW => 0 !== WW));
        let bW = 0;
        return bW |= 1, bW |= 4 * +tW, bW |= 256 * +ZW, bW |= 512 * +xW, bW |= 1024 * +lW, bW |= 2048 * +AW, VW("trun", 1, bW, [JW(WW.currentChunk.samples.length), JW(WW.currentChunk.offset - WW.currentChunk.moofOffset || 0), tW ? JW(mW[0]) : [], WW.currentChunk.samples.map(((WW, NW) => [ZW ? JW(iW[NW]) : [], xW ? JW(OW[NW]) : [], lW ? JW(mW[NW]) : [], AW ? hW(EW[NW]) : []]))])
      },
      Xi = WW => VW("tfra", 1, 0, [JW(WW.track.id), JW(63), JW(WW.finalizedChunks.length), WW.finalizedChunks.map((iW => [HW(AO(iW.samples[0].timestamp, WW.timescale)), HW(iW.moofOffset), JW(iW.trafIndex + 1), JW(1), JW(1)]))]),
      Bi = () => VW("mfro", 0, 0, [JW(0)]),
      qi = () => DW("vtte"),
      Ri = (WW, iW, OW, mW, EW) => DW("vttc", void 0, [null !== EW ? DW("vsid", [hW(EW)]) : null, null !== OW ? DW("iden", [...LW.kd.encode(OW)]) : null, null !== iW ? DW("ctim", [...LW.kd.encode((0, UW.d)(iW))]) : null, null !== mW ? DW("sttg", [...LW.kd.encode(mW)]) : null, DW("payl", [...LW.kd.encode(WW)])]),
      Gi = WW => DW("vtta", [...LW.kd.encode(WW)]),
      Ii = WW => {
        const iW = [],
          OW = WW.format._options.metadataFormat ?? "auto",
          mW = WW.output._metadataTags;
        if ("mdir" === OW || "auto" === OW && !WW.isQuickTime) {
          const WW = Qi(mW);
          WW && iW.push(WW)
        } else if ("mdta" === OW) {
          const WW = WO(mW);
          WW && iW.push(WW)
        } else("udta" === OW || "auto" === OW && WW.isQuickTime) && ai(iW, WW.output._metadataTags);
        return 0 === iW.length ? null : DW("udta", void 0, iW)
      },
      ai = (WW, iW) => {
        for (const {
            key: OW,
            value: mW
          }
          of(0, LW.kc)(iW)) switch (OW) {
          case "title":
            WW.push(ri("\xa9nam", mW));
            break;
          case "description":
            WW.push(ri("\xa9des", mW));
            break;
          case "artist":
            WW.push(ri("\xa9ART", mW));
            break;
          case "album":
            WW.push(ri("\xa9alb", mW));
            break;
          case "albumArtist":
            WW.push(ri("albr", mW));
            break;
          case "genre":
            WW.push(ri("\xa9gen", mW));
            break;
          case "date":
            WW.push(ri("\xa9day", mW.toISOString().slice(0, 10)));
            break;
          case "comment":
            WW.push(ri("\xa9cmt", mW));
            break;
          case "lyrics":
            WW.push(ri("\xa9lyr", mW));
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
            (0, LW.J)(OW)
        }
        if (iW.raw)
          for (const OW in iW.raw) {
            const mW = iW.raw[OW];
            null == mW || 4 !== OW.length || WW.some((WW => WW.type === OW)) || ("string" === typeof mW ? WW.push(ri(OW, mW)) : mW instanceof Uint8Array && WW.push(DW(OW, Array.from(mW))))
          }
      },
      ri = (WW, iW) => {
        const OW = LW.kd.encode(iW);
        return DW(WW, [YW(OW.length), YW(cO("und")), Array.from(OW)])
      },
      zi = {
        "image/jpeg": 13,
        "image/png": 14,
        "image/bmp": 27
      },
      Fi = (WW, iW) => {
        const OW = [];
        for (const {
            key: mW,
            value: EW
          }
          of(0, LW.kc)(WW)) switch (mW) {
          case "title":
            OW.push({
              key: iW ? "title" : "\xa9nam",
              value: iO(EW)
            });
            break;
          case "description":
            OW.push({
              key: iW ? "description" : "\xa9des",
              value: iO(EW)
            });
            break;
          case "artist":
            OW.push({
              key: iW ? "artist" : "\xa9ART",
              value: iO(EW)
            });
            break;
          case "album":
            OW.push({
              key: iW ? "album" : "\xa9alb",
              value: iO(EW)
            });
            break;
          case "albumArtist":
            OW.push({
              key: iW ? "album_artist" : "aART",
              value: iO(EW)
            });
            break;
          case "comment":
            OW.push({
              key: iW ? "comment" : "\xa9cmt",
              value: iO(EW)
            });
            break;
          case "genre":
            OW.push({
              key: iW ? "genre" : "\xa9gen",
              value: iO(EW)
            });
            break;
          case "beatsPerMinute":
            iW || OW.push({
              key: "tmpo",
              value: DW("data", [JW(21), JW(0), YW(EW)])
            });
            break;
          case "lyrics":
            OW.push({
              key: iW ? "lyrics" : "\xa9lyr",
              value: iO(EW)
            });
            break;
          case "date":
            OW.push({
              key: iW ? "date" : "\xa9day",
              value: iO(EW.toISOString().slice(0, 10))
            });
            break;
          case "images":
            for (const WW of EW) "coverFront" === WW.kind && OW.push({
              key: "covr",
              value: DW("data", [JW(zi[WW.mimeType] ?? 0), JW(0), Array.from(WW.data)])
            });
            break;
          case "trackNumber":
            if (iW) {
              const iW = void 0 !== WW.tracksTotal ? `${EW}/${WW.tracksTotal}` : EW.toString();
              OW.push({
                key: "track",
                value: iO(iW)
              })
            } else OW.push({
              key: "trkn",
              value: DW("data", [JW(0), JW(0), YW(0), YW(EW), YW(WW.tracksTotal ?? 0), YW(0)])
            });
            break;
          case "discNumber":
            iW || OW.push({
              key: "disc",
              value: DW("data", [JW(0), JW(0), YW(0), YW(EW), YW(WW.discsTotal ?? 0), YW(0)])
            });
            break;
          case "tracksTotal":
          case "discsTotal":
          case "raw":
            break;
          default:
            (0, LW.J)(mW)
        }
        if (WW.raw)
          for (const mW in WW.raw) {
            const EW = WW.raw[mW];
            null == EW || !iW && 4 !== mW.length || OW.some((WW => WW.key === mW)) || ("string" === typeof EW ? OW.push({
              key: mW,
              value: iO(EW)
            }) : EW instanceof Uint8Array ? OW.push({
              key: mW,
              value: DW("data", [JW(0), JW(0), Array.from(EW)])
            }) : EW instanceof lW.i && OW.push({
              key: mW,
              value: DW("data", [JW(zi[EW.mimeType] ?? 0), JW(0), Array.from(EW.data)])
            }))
          }
        return OW
      },
      Qi = WW => {
        const iW = Fi(WW, !1);
        return 0 === iW.length ? null : VW("meta", 0, 0, void 0, [FW(!1, "mdir", "", "appl"), DW("ilst", void 0, iW.map((WW => DW(WW.key, void 0, [WW.value]))))])
      },
      WO = WW => {
        const iW = Fi(WW, !0);
        return 0 === iW.length ? null : DW("meta", void 0, [FW(!1, "mdta", ""), VW("keys", 0, 0, [JW(iW.length)], iW.map((WW => DW("mdta", [...LW.kd.encode(WW.key)])))), DW("ilst", void 0, iW.map(((WW, iW) => {
          const OW = String.fromCharCode(...JW(iW + 1));
          return DW(OW, void 0, [WW.value])
        })))])
      },
      iO = WW => DW("data", [JW(1), JW(0), ...LW.kd.encode(WW)]),
      OO = (WW, iW) => {
        switch (WW) {
          case "avc":
            return iW.startsWith("avc3") ? "avc3" : "avc1";
          case "hevc":
            return "hvc1";
          case "vp8":
            return "vp08";
          case "vp9":
            return "vp09";
          case "av1":
            return "av01";
          case "prores":
            return iW
        }
      },
      mO = {
        avc: WW => WW.info.decoderConfig && DW("avcC", [...(0, LW.pd)(WW.info.decoderConfig.description)]),
        hevc: WW => WW.info.decoderConfig && DW("hvcC", [...(0, LW.pd)(WW.info.decoderConfig.description)]),
        vp8: ti,
        vp9: ti,
        av1: WW => DW("av1C", (0, EW.J)(WW.info.decoderConfig.codec)),
        prores: null
      },
      EO = (WW, iW, OW) => {
        switch (WW) {
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
            return iW
        }
        if (OW) switch (WW) {
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
        } else switch (WW) {
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
      NO = (WW, iW) => {
        switch (WW) {
          case "aac":
          case "mp3":
          case "vorbis":
            return xi;
          case "opus":
            return ji;
          case "flac":
            return Ui;
          case "ac3":
            return si;
          case "eac3":
            return Mi;
          case "dts":
            return Ki
        }
        if (iW) switch (WW) {
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return li
        } else switch (WW) {
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
            return ki
        }
        return null
      },
      PO = {
        webvtt: "wvtt"
      },
      LO = {
        webvtt: WW => DW("vttC", [...LW.kd.encode(WW.info.config.description)])
      },
      cO = WW => {
        (0, LW.K)(3 === WW.length);
        let iW = 0;
        for (let OW = 0; OW < 3; OW++) iW <<= 5, iW += WW.charCodeAt(OW) - 96;
        return iW
      };
    var wO = OW(41176),
      tO = OW(41179);
    const ZO = WW => {
        const iW = WW.filePos,
          OW = tW(WW, 9),
          mW = new jW.c(OW);
        if (4095 !== mW.readBits(12)) return null;
        mW.skipBits(1);
        if (0 !== mW.readBits(2)) return null;
        const EW = mW.readBits(1),
          NW = mW.readBits(2) + 1,
          PW = mW.readBits(4);
        if (15 === PW) return null;
        mW.skipBits(1);
        const LW = mW.readBits(3);
        if (0 === LW) throw new Error("ADTS frames with channel configuration 0 are not supported.");
        mW.skipBits(1), mW.skipBits(1), mW.skipBits(1), mW.skipBits(1);
        const cW = mW.readBits(13);
        mW.skipBits(11);
        const wW = mW.readBits(2) + 1;
        if (1 !== wW) throw new Error("ADTS frames with more than one AAC frame are not supported.");
        let ZW = null;
        return 1 === EW ? WW.filePos -= 2 : ZW = mW.readBits(16), {
          objectType: NW,
          samplingFrequencyIndex: PW,
          channelConfiguration: LW,
          frameLength: cW,
          numberOfAacFrames: wW,
          crcCheck: ZW,
          startPos: iW
        }
      },
      xO = 57600,
      lO = WW => {
        const iW = {},
          OW = WW.track;
        return void 0 !== OW.metadata.name && (iW.name = OW.metadata.name), iW
      },
      AO = function(WW, iW) {
        const OW = WW * iW;
        return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Math.round(OW) : OW
      },
      bO = WW => {
        if (0 === WW.samples.length) return 0;
        let iW = 1 / 0,
          OW = -1 / 0;
        for (let mW = 0; mW < WW.samples.length; mW++) {
          const EW = WW.samples[mW];
          EW.timestamp < iW && (iW = EW.timestamp), EW.timestamp + EW.duration > OW && (OW = EW.timestamp + EW.duration)
        }
        return iW === 1 / 0 ? 0 : OW - iW
      };
    class jO extends AW {
      constructor(WW, iW) {
        super(WW), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new tO.b, this.auxWriter = new wO.d(this.auxTarget, !1), this.auxBoxWriter = new sW(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = (0, LW.Gc)(), this.creationTime = Math.floor(Date.now() / 1e3) + 2082844800, this.finalizedChunks = [], this.wroteFragmentedHeader = !1, this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = iW, this.formatOptions = {
          ...iW._options
        }, this.isQuickTime = iW instanceof pO, this.isCmaf = iW instanceof VO, this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (iW instanceof VO ? 1 / 0 : 1), this.auxWriter.start()
      }
      async start() {
        const WW = await this.mutex.acquire();
        if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((WW => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : WW instanceof tO.b)), this.boxWriter = new sW(this.writer), this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof tO.b && "in-memory"), this.isFragmented = "fragmented" === this.fastStart), this.isCmaf) {
          if (!this.output._hasInitTarget()) throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
          const WW = await this.output._getInitTarget(),
            iW = new wO.d(WW, !0);
          iW.start(), this.initWriter = iW, this.initBoxWriter = new sW(iW)
        }
        const iW = this.output.tracks.some((WW => WW.isVideoTrack() && "avc" === WW.source._codec));
        {
          const WW = this.initBoxWriter ?? this.boxWriter;
          if ((0, LW.K)(WW), this.formatOptions.onFtyp && WW.writer.startTrackingWrites(), WW.writeBox((WW => {
              const iW = 512;
              return WW.isQuickTime ? DW("ftyp", [vW("qt  "), JW(iW), vW("qt  ")]) : WW.fragmented ? WW.cmaf ? DW("ftyp", [vW("iso5"), JW(iW), vW("iso5"), vW("iso6"), vW("mp41"), vW("cmfc"), vW("dash")]) : DW("ftyp", [vW("iso5"), JW(iW), vW("iso5"), vW("iso6"), vW("mp41")]) : DW("ftyp", [vW("isom"), JW(iW), vW("isom"), WW.holdsAvc ? vW("avc1") : [], vW("mp41")])
            })({
              isQuickTime: this.isQuickTime,
              holdsAvc: iW,
              fragmented: this.isFragmented,
              cmaf: this.isCmaf
            })), this.formatOptions.onFtyp) {
            const {
              data: iW,
              start: OW
            } = WW.writer.stopTrackingWrites();
            this.formatOptions.onFtyp(iW, OW)
          }
          this.ftypSize = WW.writer.getPos(), this.isCmaf && await this.initWriter.flush()
        }
        if ("in-memory" === this.fastStart);
        else if ("reserve" === this.fastStart) {
          for (const OW of this.output.tracks)
            if (void 0 === OW.metadata.maximumPacketCount) throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")
        } else this.isFragmented || ((0, LW.K)(this.writer), (0, LW.K)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = CW(!0), this.boxWriter.writeBox(this.mdat));
        await (this.writer?.flush());
        for (const OW of this.output.tracks) OW.isVideoTrack() && OW.metadata.decoderConfig ? this.getVideoTrackData(OW, OW.metadata.primingPacket ?? null, {
          decoderConfig: OW.metadata.decoderConfig
        }) : OW.isAudioTrack() && OW.metadata.decoderConfig && this.getAudioTrackData(OW, OW.metadata.primingPacket ?? null, {
          decoderConfig: OW.metadata.decoderConfig
        });
        WW()
      }
      allTracksAreKnown() {
        for (const WW of this.output.tracks)
          if (!WW.source._closed && !this.trackDatas.some((iW => iW.track === WW))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const WW = this.trackDatas.map((WW => {
          if ("video" === WW.type) return WW.info.decoderConfig.codec;
          if ("audio" === WW.type) return WW.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [WW.track.source._codec]
        }));
        return (WW => {
          let iW = (WW.hasVideo ? "video/" : WW.hasAudio ? "audio/" : "application/") + (WW.isQuickTime ? "quicktime" : "mp4");
          WW.codecStrings.length > 0 && (iW += `; codecs="${[...new Set(WW.codecStrings)].join(", ")}"`);
          return iW
        })({
          isQuickTime: this.isQuickTime,
          hasVideo: this.trackDatas.some((WW => "video" === WW.type)),
          hasAudio: this.trackDatas.some((WW => "audio" === WW.type)),
          codecStrings: WW
        })
      }
      getVideoTrackData(WW, iW, OW) {
        const mW = this.trackDatas.find((iW => iW.track === WW));
        if (mW) return mW;
        (0, EW.bb)(OW, WW.source._codec), (0, LW.K)(OW), (0, LW.K)(OW.decoderConfig);
        const NW = {
          ...OW.decoderConfig
        };
        (0, LW.K)(void 0 !== NW.codedWidth), (0, LW.K)(void 0 !== NW.codedHeight);
        let PW = !1;
        if ("avc" !== WW.source._codec || NW.description) {
          if ("hevc" === WW.source._codec && !NW.description) {
            if (!iW) throw new Error("No HEVC description provided; you must therefore provide a priming packet.");
            const WW = (0, bW.P)(iW.data);
            if (!WW) throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
            NW.description = (0, bW.ub)(WW), PW = !0
          }
        } else {
          if (!iW) throw new Error("No AVC description provided; you must therefore provide a priming packet.");
          const WW = (0, bW.J)(iW.data);
          if (!WW) throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
          NW.description = (0, bW.rb)(WW), PW = !0
        }
        const cW = (0, LW.lb)(1 / (WW.metadata.frameRate ?? xO), 1e6).den,
          wW = NW.displayAspectWidth,
          tW = NW.displayAspectHeight,
          ZW = void 0 === wW || void 0 === tW ? {
            num: 1,
            den: 1
          } : (0, LW.ed)({
            num: wW * NW.codedHeight,
            den: tW * NW.codedWidth
          }),
          xW = "ap4h" === NW.codec || "ap4x" === NW.codec,
          lW = {
            muxer: this,
            track: WW,
            type: "video",
            info: {
              width: NW.codedWidth,
              height: NW.codedHeight,
              pixelAspectRatio: ZW,
              decoderConfig: NW,
              requiresAnnexBTransformation: PW,
              hasAlphaChannel: xW
            },
            timescale: cW,
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
            avgBitrate: WW.source._nominalBitrate ?? WW.metadata.averageBitrate ?? 0,
            maxBitrate: WW.source._nominalBitrate ?? WW.metadata.bitrate ?? 0
          };
        return this.trackDatas.push(lW), this.trackDatas.sort(((WW, iW) => WW.track.id - iW.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), lW
      }
      getAudioTrackData(WW, iW, OW) {
        const NW = this.trackDatas.find((iW => iW.track === WW));
        if (NW) return NW;
        (0, EW.W)(OW, WW.source._codec), (0, LW.K)(OW), (0, LW.K)(OW.decoderConfig);
        const PW = {
          ...OW.decoderConfig
        };
        let wW = !1;
        if ("aac" === WW.source._codec && !PW.description) {
          if (!iW) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const WW = ZO(cW.tempFromBytes(iW.data));
          if (!WW) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const OW = mW.g[WW.samplingFrequencyIndex],
            EW = mW.e[WW.channelConfiguration];
          if (void 0 === OW || void 0 === EW) throw new Error("Invalid ADTS frame header.");
          PW.description = (0, mW.i)({
            objectType: WW.objectType,
            outputSampleRate: OW,
            outputNumberOfChannels: EW
          }), wW = !0
        }
        if (!iW) {
          if ("ac3" === WW.source._codec || "eac3" === WW.source._codec) throw new Error("AC-3/E-AC-3 require a priming packet.");
          if ("dts" === WW.source._codec) throw new Error("DTS requires a priming packet.")
        }
        const tW = {
          muxer: this,
          track: WW,
          type: "audio",
          info: {
            numberOfChannels: OW.decoderConfig.numberOfChannels,
            sampleRate: OW.decoderConfig.sampleRate,
            decoderConfig: PW,
            requiresPcmTransformation: !this.isFragmented && EW.r.includes(WW.source._codec),
            expectedNextPcmPacketTimestamp: null,
            requiresAdtsStripping: wW,
            primingPacket: iW
          },
          timescale: PW.sampleRate,
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
          avgBitrate: WW.source._nominalBitrate ?? WW.metadata.averageBitrate ?? 0,
          maxBitrate: WW.source._nominalBitrate ?? WW.metadata.bitrate ?? 0
        };
        return this.trackDatas.push(tW), this.trackDatas.sort(((WW, iW) => WW.track.id - iW.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), tW
      }
      getSubtitleTrackData(WW, iW) {
        const OW = this.trackDatas.find((iW => iW.track === WW));
        if (OW) return OW;
        (0, EW._)(iW), (0, LW.K)(iW), (0, LW.K)(iW.config);
        const mW = {
          muxer: this,
          track: WW,
          type: "subtitle",
          info: {
            config: iW.config
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
          avgBitrate: WW.source._nominalBitrate ?? WW.metadata.averageBitrate ?? 0,
          maxBitrate: WW.source._nominalBitrate ?? WW.metadata.bitrate ?? 0,
          lastCueEndTimestamp: null,
          cueQueue: [],
          nextSourceId: 0,
          cueToSourceId: new WeakMap
        };
        return this.trackDatas.push(mW), this.trackDatas.sort(((WW, iW) => WW.track.id - iW.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), mW
      }
      async addEncodedVideoPacket(WW, iW, OW) {
        const mW = await this.mutex.acquire();
        try {
          const mW = this.getVideoTrackData(WW, iW, OW);
          let EW = iW.data;
          if (mW.info.requiresAnnexBTransformation) {
            const WW = [...(0, bW.Z)(EW)].map((WW => EW.subarray(WW.offset, WW.offset + WW.length)));
            if (0 === WW.length) throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
            EW = (0, bW.v)(WW, 4)
          }
          this.validateTimestamp(mW.track, iW.timestamp, "key" === iW.type);
          const NW = this.createSampleForTrack(mW, EW, iW.timestamp, iW.duration, iW.type);
          await this.registerSample(mW, NW)
        } finally {
          mW()
        }
      }
      async addEncodedAudioPacket(WW, iW, OW) {
        const mW = await this.mutex.acquire();
        try {
          const mW = this.getAudioTrackData(WW, iW, OW);
          let NW = iW.data;
          if (mW.info.requiresAdtsStripping) {
            const WW = ZO(cW.tempFromBytes(NW));
            if (!WW) throw new Error("Expected ADTS frame, didn't get one.");
            const iW = null === WW.crcCheck ? 7 : 9;
            NW = NW.subarray(iW)
          }
          this.validateTimestamp(mW.track, iW.timestamp, "key" === iW.type);
          let PW = iW.timestamp,
            LW = iW.duration;
          if (mW.info.requiresPcmTransformation) {
            const WW = (0, EW.U)(mW.info.decoderConfig.codec).sampleSize * mW.info.numberOfChannels;
            if (LW = NW.byteLength / WW / mW.info.sampleRate, null !== mW.info.expectedNextPcmPacketTimestamp) {
              const WW = PW - mW.info.expectedNextPcmPacketTimestamp;
              if (WW < .01) PW = mW.info.expectedNextPcmPacketTimestamp;
              else {
                const iW = await this.padWithSilence(mW, mW.info.expectedNextPcmPacketTimestamp, WW);
                PW = mW.info.expectedNextPcmPacketTimestamp + iW
              }
            }
            mW.info.expectedNextPcmPacketTimestamp = PW + LW
          }
          const wW = this.createSampleForTrack(mW, NW, PW, LW, iW.type);
          await this.registerSample(mW, wW)
        } finally {
          mW()
        }
      }
      async padWithSilence(WW, iW, OW) {
        const mW = AO(OW, WW.timescale);
        if (OW = mW / WW.timescale, mW > 0) {
          const {
            sampleSize: NW,
            silentValue: PW
          } = (0, EW.U)(WW.info.decoderConfig.codec), LW = mW * WW.info.numberOfChannels, cW = new Uint8Array(NW * LW).fill(PW), wW = this.createSampleForTrack(WW, new Uint8Array(cW.buffer), iW, OW, "key");
          await this.registerSample(WW, wW)
        }
        return OW
      }
      async addSubtitleCue(WW, iW, OW) {
        const mW = await this.mutex.acquire();
        try {
          const mW = this.getSubtitleTrackData(WW, OW);
          this.validateTimestamp(mW.track, iW.timestamp, !0), "webvtt" === WW.source._codec && (mW.cueQueue.push(iW), await this.processWebVTTCues(mW, iW.timestamp))
        } finally {
          mW()
        }
      }
      async processWebVTTCues(WW, iW) {
        for (; WW.cueQueue.length > 0;) {
          WW.lastCueEndTimestamp ??= Math.min(0, WW.cueQueue[0].timestamp);
          const OW = new Set([]);
          for (const wW of WW.cueQueue)(0, LW.K)(wW.timestamp <= iW), (0, LW.K)(WW.lastCueEndTimestamp <= wW.timestamp + wW.duration), OW.add(Math.max(wW.timestamp, WW.lastCueEndTimestamp)), OW.add(wW.timestamp + wW.duration);
          const mW = [...OW].sort(((WW, iW) => WW - iW)),
            EW = mW[0],
            NW = mW[1] ?? EW;
          if (iW < NW) break;
          if (WW.lastCueEndTimestamp < EW) {
            this.auxWriter.seek(0);
            const iW = qi();
            this.auxBoxWriter.writeBox(iW);
            const OW = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
              mW = this.createSampleForTrack(WW, OW, WW.lastCueEndTimestamp, EW - WW.lastCueEndTimestamp, "key");
            await this.registerSample(WW, mW), WW.lastCueEndTimestamp = EW
          }
          this.auxWriter.seek(0);
          for (let iW = 0; iW < WW.cueQueue.length; iW++) {
            const OW = WW.cueQueue[iW];
            if (OW.timestamp >= NW) break;
            UW.g.lastIndex = 0;
            const mW = UW.g.test(OW.text),
              PW = OW.timestamp + OW.duration;
            let LW = WW.cueToSourceId.get(OW);
            if (void 0 === LW && NW < PW && (LW = WW.nextSourceId++, WW.cueToSourceId.set(OW, LW)), OW.notes) {
              const WW = Gi(OW.notes);
              this.auxBoxWriter.writeBox(WW)
            }
            const cW = Ri(OW.text, mW ? EW : null, OW.identifier ?? null, OW.settings ?? null, LW ?? null);
            this.auxBoxWriter.writeBox(cW), PW === NW && WW.cueQueue.splice(iW--, 1)
          }
          const PW = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
            cW = this.createSampleForTrack(WW, PW, EW, NW - EW, "key");
          await this.registerSample(WW, cW), WW.lastCueEndTimestamp = NW
        }
      }
      createSampleForTrack(WW, iW, OW, mW, EW) {
        return {
          timestamp: OW,
          decodeTimestamp: OW,
          duration: mW,
          data: iW,
          size: iW.byteLength,
          type: EW,
          timescaleUnitsToNextSample: AO(mW, WW.timescale)
        }
      }
      processTimestamps(WW, iW) {
        if (0 === WW.timestampProcessingQueue.length) return;
        if ("audio" === WW.type && WW.info.requiresPcmTransformation) {
          (0, LW.K)(!this.isFragmented), WW.startTimestampOffset ??= WW.timestampProcessingQueue[0].timestamp;
          let iW = 0;
          for (let OW = 0; OW < WW.timestampProcessingQueue.length; OW++) {
            const mW = WW.timestampProcessingQueue[OW];
            iW += AO(mW.duration, WW.timescale)
          }
          if (0 === WW.timeToSampleTable.length) WW.timeToSampleTable.push({
            sampleCount: iW,
            sampleDelta: 1
          });
          else {
            (0, LW.mc)(WW.timeToSampleTable).sampleCount += iW
          }
          return void(WW.timestampProcessingQueue.length = 0)
        }
        const OW = WW.timestampProcessingQueue.map((WW => WW.timestamp)).sort(((WW, iW) => WW - iW));
        this.isFragmented ? WW.startTimestampOffset ??= Math.min(OW[0], 0) : WW.startTimestampOffset ??= OW[0];
        for (let mW = 0; mW < WW.timestampProcessingQueue.length; mW++) {
          const iW = WW.timestampProcessingQueue[mW];
          iW.decodeTimestamp = OW[mW];
          const EW = AO(iW.timestamp - iW.decodeTimestamp, WW.timescale),
            NW = AO(iW.duration, WW.timescale);
          if (null !== WW.lastTimescaleUnits) {
            (0, LW.K)(WW.lastSample);
            const OW = AO(iW.decodeTimestamp, WW.timescale, !1),
              mW = Math.round(OW - WW.lastTimescaleUnits);
            if ((0, LW.K)(mW >= 0), WW.lastTimescaleUnits += mW, WW.lastSample.timescaleUnitsToNextSample = mW, !this.isFragmented) {
              let iW = (0, LW.mc)(WW.timeToSampleTable);
              if ((0, LW.K)(iW), 1 === iW.sampleCount) {
                iW.sampleDelta = mW;
                const OW = WW.timeToSampleTable[WW.timeToSampleTable.length - 2];
                OW && OW.sampleDelta === mW && (OW.sampleCount++, WW.timeToSampleTable.pop(), iW = OW)
              } else iW.sampleDelta !== mW && (iW.sampleCount--, WW.timeToSampleTable.push(iW = {
                sampleCount: 1,
                sampleDelta: mW
              }));
              iW.sampleDelta === NW ? iW.sampleCount++ : WW.timeToSampleTable.push({
                sampleCount: 1,
                sampleDelta: NW
              });
              const OW = (0, LW.mc)(WW.compositionTimeOffsetTable);
              (0, LW.K)(OW), OW.sampleCompositionTimeOffset === EW ? OW.sampleCount++ : WW.compositionTimeOffsetTable.push({
                sampleCount: 1,
                sampleCompositionTimeOffset: EW
              })
            }
          } else WW.lastTimescaleUnits = AO(iW.decodeTimestamp, WW.timescale, !1), this.isFragmented || (WW.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: NW
          }), WW.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: EW
          }));
          WW.lastSample = iW
        }
        if (WW.timestampProcessingQueue.length = 0, (0, LW.K)(WW.lastSample), (0, LW.K)(null !== WW.lastTimescaleUnits), void 0 !== iW && 0 === WW.lastSample.timescaleUnitsToNextSample) {
          (0, LW.K)("key" === iW.type);
          const OW = AO(iW.timestamp, WW.timescale, !1),
            mW = Math.round(OW - WW.lastTimescaleUnits);
          WW.lastSample.timescaleUnitsToNextSample = mW
        }
      }
      async registerSample(WW, iW) {
        "key" === iW.type && this.processTimestamps(WW, iW), WW.timestampProcessingQueue.push(iW), this.isFragmented ? (WW.sampleQueue.push(iW), await this.interleaveSamples()) : "reserve" === this.fastStart ? await this.registerSampleFastStartReserve(WW, iW) : await this.addSampleToTrack(WW, iW)
      }
      async addSampleToTrack(WW, iW) {
        if (!this.isFragmented && (WW.samples.push(iW), "reserve" === this.fastStart)) {
          const iW = WW.track.metadata.maximumPacketCount;
          if ((0, LW.K)(void 0 !== iW), WW.samples.length > iW) throw new Error(`Track #${WW.track.id} has already reached the maximum packet count (${iW}). Either add less packets or increase the maximum packet count.`)
        }
        let OW = !1;
        if (WW.currentChunk) {
          WW.currentChunk.startTimestamp = Math.min(WW.currentChunk.startTimestamp, iW.timestamp);
          const mW = iW.timestamp - WW.currentChunk.startTimestamp;
          if (this.isFragmented) {
            const EW = this.trackDatas.every((OW => {
              if (WW === OW) return "key" === iW.type;
              const mW = OW.sampleQueue[0];
              return mW ? "key" === mW.type : OW.closed
            }));
            mW >= this.minimumFragmentDuration && EW && iW.timestamp > this.maxWrittenTimestamp && (OW = !0, await this.finalizeFragment())
          } else OW = mW >= .5
        } else OW = !0;
        OW && (WW.currentChunk && await this.finalizeCurrentChunk(WW), WW.currentChunk = {
          startTimestamp: iW.timestamp,
          samples: [],
          offset: null,
          moofOffset: null,
          trafIndex: null
        }), (0, LW.K)(WW.currentChunk), WW.currentChunk.samples.push(iW), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, iW.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, iW.timestamp + iW.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, iW.timestamp))
      }
      async finalizeCurrentChunk(WW) {
        if ((0, LW.K)(!this.isFragmented), (0, LW.K)(this.writer), !WW.currentChunk) return;
        WW.finalizedChunks.push(WW.currentChunk), this.finalizedChunks.push(WW.currentChunk);
        let iW = WW.currentChunk.samples.length;
        if ("audio" === WW.type && WW.info.requiresPcmTransformation && (iW = WW.currentChunk.samples.reduce(((iW, OW) => iW + AO(OW.duration, WW.timescale)), 0)), 0 !== WW.compactlyCodedChunkTable.length && (0, LW.mc)(WW.compactlyCodedChunkTable).samplesPerChunk === iW || WW.compactlyCodedChunkTable.push({
            firstChunk: WW.finalizedChunks.length,
            samplesPerChunk: iW
          }), "in-memory" !== this.fastStart) {
          WW.currentChunk.offset = this.writer.getPos();
          for (const iW of WW.currentChunk.samples)(0, LW.K)(iW.data), this.writer.write(iW.data), iW.data = null;
          await this.writer.flush()
        } else WW.currentChunk.offset = 0
      }
      async interleaveSamples() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if ((0, LW.K)(this.isFragmented), WW || this.allTracksAreKnown()) WW: for (;;) {
          let iW = null,
            OW = 1 / 0;
          for (const EW of this.trackDatas) {
            if (!WW && 0 === EW.sampleQueue.length && !EW.closed) break WW;
            EW.sampleQueue.length > 0 && EW.sampleQueue[0].timestamp < OW && (iW = EW, OW = EW.sampleQueue[0].timestamp)
          }
          if (!iW) break;
          const mW = iW.sampleQueue.shift();
          await this.addSampleToTrack(iW, mW)
        }
      }
      async finalizeFragment() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isCmaf;
        if ((0, LW.K)(this.isFragmented), !this.wroteFragmentedHeader) {
          this.wroteFragmentedHeader = !0;
          const WW = this.initBoxWriter ?? this.boxWriter;
          (0, LW.K)(WW), this.formatOptions.onMoov && WW.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
          const iW = XW(this);
          if (WW.writeBox(iW), this.formatOptions.onMoov) {
            const {
              data: iW,
              start: OW
            } = WW.writer.stopTrackingWrites();
            this.formatOptions.onMoov(iW, OW)
          }
          if (this.isCmaf) {
            (0, LW.K)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new sW(this.writer);
            const WW = this.boxWriter.measureBox(pW()),
              iW = this.boxWriter.measureBox(fW(this, 0));
            this.segmentHeaderSize = WW + iW, this.writer.seek(this.segmentHeaderSize)
          }
        }(0, LW.K)(this.writer), (0, LW.K)(this.boxWriter);
        const iW = this.trackDatas.filter((WW => WW.currentChunk));
        if (0 === iW.length) return void(WW && await this.writer.flush());
        const OW = this.nextFragmentNumber++,
          mW = ei(OW, iW),
          EW = this.writer.getPos(),
          NW = EW + this.boxWriter.measureBox(mW);
        let PW = NW + 8,
          cW = 1 / 0;
        for (let lW = 0; lW < iW.length; lW++) {
          const WW = iW[lW];
          (0, LW.K)(WW.currentChunk), (0, LW.K)(null !== WW.startTimestampOffset), WW.currentChunk.offset = PW, WW.currentChunk.moofOffset = EW, WW.currentChunk.trafIndex = lW, WW.currentChunk.startTimestamp -= WW.startTimestampOffset;
          for (const iW of WW.currentChunk.samples) PW += iW.size, iW.timestamp -= WW.startTimestampOffset, iW.decodeTimestamp -= WW.startTimestampOffset;
          cW = Math.min(cW, WW.currentChunk.startTimestamp)
        }
        const wW = PW - NW,
          tW = wW >= 2 ** 32;
        if (tW)
          for (const LW of iW) LW.currentChunk.offset += 8;
        this.formatOptions.onMoof && this.writer.startTrackingWrites();
        const ZW = ei(OW, iW);
        if (this.boxWriter.writeBox(ZW), this.formatOptions.onMoof) {
          const {
            data: WW,
            start: iW
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMoof(WW, iW, cW)
        }(0, LW.K)(this.writer.getPos() === NW), this.formatOptions.onMdat && this.writer.startTrackingWrites();
        const xW = CW(tW);
        xW.size = wW, this.boxWriter.writeBox(xW), this.writer.seek(NW + (tW ? 16 : 8));
        for (const LW of iW)
          for (const WW of LW.currentChunk.samples) this.writer.write(WW.data), WW.data = null;
        if (this.formatOptions.onMdat) {
          const {
            data: WW,
            start: iW
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMdat(WW, iW)
        }
        for (const LW of iW) LW.finalizedChunks.push(LW.currentChunk), this.finalizedChunks.push(LW.currentChunk), LW.currentChunk = null;
        WW && await this.writer.flush()
      }
      async registerSampleFastStartReserve(WW, iW) {
        this.allTracksAreKnown() ? (this.mdat || await this.createFastStartReserveMdat(), await this.addSampleToTrack(WW, iW)) : WW.sampleQueue.push(iW)
      }
      async createFastStartReserveMdat() {
        (0, LW.K)(this.writer), (0, LW.K)(this.boxWriter), this.ensureOneEnabledTrack();
        const WW = XW(this),
          iW = this.boxWriter.measureBox(WW) + this.computeSampleTableSizeUpperBound() + 4096;
        (0, LW.K)(null !== this.ftypSize), this.writer.seek(this.ftypSize + iW), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = CW(!0), this.boxWriter.writeBox(this.mdat);
        for (const OW of this.trackDatas) {
          for (const WW of OW.sampleQueue) await this.addSampleToTrack(OW, WW);
          OW.sampleQueue.length = 0
        }
      }
      computeSampleTableSizeUpperBound() {
        (0, LW.K)("reserve" === this.fastStart);
        let WW = 0;
        for (const iW of this.trackDatas) {
          const OW = iW.track.metadata.maximumPacketCount;
          (0, LW.K)(void 0 !== OW), WW += 8 * Math.ceil(2 / 3 * OW), WW += 4 * OW, WW += 8 * Math.ceil(2 / 3 * OW), WW += 12 * Math.ceil(2 / 3 * OW), WW += 4 * OW, WW += 8 * OW
        }
        return WW
      }
      async onTrackClose(WW) {
        const iW = await this.mutex.acquire(),
          OW = this.trackDatas.find((iW => iW.track === WW));
        OW && (OW.closed = !0, "subtitle" === OW.type && "webvtt" === WW.source._codec && await this.processWebVTTCues(OW, 1 / 0), this.processTimestamps(OW)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), iW()
      }
      ensureOneEnabledTrack() {
        for (const WW of ["video", "audio", "subtitle"]) {
          const iW = this.trackDatas.filter((iW => iW.type === WW));
          if (0 === iW.length) continue;
          if (!iW.some((WW => !1 !== WW.track.metadata.disposition?.default))) {
            const WW = iW[0];
            WW.track.metadata.disposition = {
              ...WW.track.metadata.disposition,
              default: !0
            }
          }
        }
      }
      async forceFragmentFinalization() {
        (0, LW.K)(this.isFragmented);
        const WW = await this.mutex.acquire();
        try {
          for (const WW of this.trackDatas) "subtitle" === WW.type && "webvtt" === WW.track.source._codec && await this.processWebVTTCues(WW, 1 / 0), this.processTimestamps(WW);
          await this.interleaveSamples(!0), await this.finalizeFragment()
        } finally {
          WW()
        }
      }
      async finalize() {
        const WW = await this.mutex.acquire();
        this.allTracksKnown.resolve(), this.ensureOneEnabledTrack(), this.mdat || "reserve" !== this.fastStart || await this.createFastStartReserveMdat();
        for (const OW of this.trackDatas) OW.closed = !0, "subtitle" === OW.type && "webvtt" === OW.track.source._codec && await this.processWebVTTCues(OW, 1 / 0), this.processTimestamps(OW);
        if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
        else
          for (const OW of this.trackDatas) {
            await this.finalizeCurrentChunk(OW);
            const WW = bO(OW);
            if (WW > 0) {
              let iW = 0;
              for (const WW of OW.samples) iW += WW.size;
              OW.avgBitrate = Math.round(8 * iW / WW)
            } else OW.avgBitrate = 0;
            let iW = 0,
              mW = 0,
              EW = 0;
            for (let NW = 0; NW < OW.samples.length; NW++) {
              const WW = OW.samples[NW];
              for (mW += WW.size; WW.decodeTimestamp - OW.samples[iW].decodeTimestamp >= 1;) mW -= OW.samples[iW].size, iW++;
              EW = Math.max(EW, mW)
            }
            if (OW.maxBitrate = 8 * EW, null !== OW.startTimestampOffset)
              for (let NW = 0; NW < OW.samples.length; NW++) {
                const WW = OW.samples[NW];
                WW.timestamp -= OW.startTimestampOffset, WW.decodeTimestamp -= OW.startTimestampOffset
              }
          }
        if ((0, LW.K)(this.writer), (0, LW.K)(this.boxWriter), "in-memory" === this.fastStart) {
          let WW;
          this.mdat = CW(!1);
          for (let OW = 0; OW < 2; OW++) {
            const iW = XW(this),
              OW = this.boxWriter.measureBox(iW);
            WW = this.boxWriter.measureBox(this.mdat);
            let mW = this.writer.getPos() + OW + WW;
            for (const EW of this.finalizedChunks) {
              EW.offset = mW;
              for (const {
                  data: iW
                }
                of EW.samples)(0, LW.K)(iW), mW += iW.byteLength, WW += iW.byteLength
            }
            if (mW < 2 ** 32) break;
            WW >= 2 ** 32 && (this.mdat.largeSize = !0)
          }
          this.formatOptions.onMoov && this.writer.startTrackingWrites();
          const iW = XW(this);
          if (this.boxWriter.writeBox(iW), this.formatOptions.onMoov) {
            const {
              data: WW,
              start: iW
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(WW, iW)
          }
          this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat.size = WW, this.boxWriter.writeBox(this.mdat);
          for (const OW of this.finalizedChunks)
            for (const WW of OW.samples)(0, LW.K)(WW.data), this.writer.write(WW.data), WW.data = null;
          if (this.formatOptions.onMdat) {
            const {
              data: WW,
              start: iW
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(WW, iW)
          }
        } else if (this.isFragmented)
          if (this.isCmaf) {
            const WW = null !== this.segmentHeaderSize ? this.writer.getPos() - this.segmentHeaderSize : 0;
            this.writer.seek(0), this.boxWriter.writeBox(pW()), this.boxWriter.writeBox(fW(this, WW))
          } else {
            const WW = this.writer.getPos(),
              OW = (iW = this.trackDatas, DW("mfra", void 0, [...iW.map(Xi), Bi()]));
            this.boxWriter.writeBox(OW);
            const mW = this.writer.getPos() - WW;
            this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(mW)
          }
        else {
          (0, LW.K)(this.mdat);
          const WW = this.boxWriter.offsets.get(this.mdat);
          (0, LW.K)(void 0 !== WW);
          const iW = this.writer.getPos() - WW;
          if (this.mdat.size = iW, this.mdat.largeSize = iW >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.formatOptions.onMdat) {
            const {
              data: WW,
              start: iW
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(WW, iW)
          }
          const OW = XW(this);
          if ("reserve" === this.fastStart) {
            (0, LW.K)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(OW);
            const WW = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
            this.boxWriter.writeBox({
              type: "free",
              size: WW
            })
          } else this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(OW);
          if (this.formatOptions.onMoov) {
            const {
              data: WW,
              start: iW
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(WW, iW)
          }
        }
        var iW;
        WW()
      }
    }
    class UO {
      constructor(WW) {
        this.value = WW
      }
    }
    class kO {
      constructor(WW) {
        this.value = WW
      }
    }
    class sO {
      constructor(WW) {
        this.value = WW
      }
    }
    class MO {
      constructor(WW) {
        this.value = WW
      }
    }
    var KO;
    ! function(WW) {
      WW[WW.EBML = 440786851] = "EBML", WW[WW.EBMLVersion = 17030] = "EBMLVersion", WW[WW.EBMLReadVersion = 17143] = "EBMLReadVersion", WW[WW.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", WW[WW.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", WW[WW.DocType = 17026] = "DocType", WW[WW.DocTypeVersion = 17031] = "DocTypeVersion", WW[WW.DocTypeReadVersion = 17029] = "DocTypeReadVersion", WW[WW.Void = 236] = "Void", WW[WW.Segment = 408125543] = "Segment", WW[WW.SeekHead = 290298740] = "SeekHead", WW[WW.Seek = 19899] = "Seek", WW[WW.SeekID = 21419] = "SeekID", WW[WW.SeekPosition = 21420] = "SeekPosition", WW[WW.Duration = 17545] = "Duration", WW[WW.Info = 357149030] = "Info", WW[WW.TimestampScale = 2807729] = "TimestampScale", WW[WW.MuxingApp = 19840] = "MuxingApp", WW[WW.WritingApp = 22337] = "WritingApp", WW[WW.Tracks = 374648427] = "Tracks", WW[WW.TrackEntry = 174] = "TrackEntry", WW[WW.TrackNumber = 215] = "TrackNumber", WW[WW.TrackUID = 29637] = "TrackUID", WW[WW.TrackType = 131] = "TrackType", WW[WW.FlagEnabled = 185] = "FlagEnabled", WW[WW.FlagDefault = 136] = "FlagDefault", WW[WW.FlagForced = 21930] = "FlagForced", WW[WW.FlagOriginal = 21934] = "FlagOriginal", WW[WW.FlagHearingImpaired = 21931] = "FlagHearingImpaired", WW[WW.FlagVisualImpaired = 21932] = "FlagVisualImpaired", WW[WW.FlagCommentary = 21935] = "FlagCommentary", WW[WW.FlagLacing = 156] = "FlagLacing", WW[WW.Name = 21358] = "Name", WW[WW.Language = 2274716] = "Language", WW[WW.LanguageBCP47 = 2274717] = "LanguageBCP47", WW[WW.CodecID = 134] = "CodecID", WW[WW.CodecPrivate = 25506] = "CodecPrivate", WW[WW.CodecDelay = 22186] = "CodecDelay", WW[WW.SeekPreRoll = 22203] = "SeekPreRoll", WW[WW.DefaultDuration = 2352003] = "DefaultDuration", WW[WW.Video = 224] = "Video", WW[WW.PixelWidth = 176] = "PixelWidth", WW[WW.PixelHeight = 186] = "PixelHeight", WW[WW.DisplayWidth = 21680] = "DisplayWidth", WW[WW.DisplayHeight = 21690] = "DisplayHeight", WW[WW.DisplayUnit = 21682] = "DisplayUnit", WW[WW.AlphaMode = 21440] = "AlphaMode", WW[WW.Audio = 225] = "Audio", WW[WW.SamplingFrequency = 181] = "SamplingFrequency", WW[WW.Channels = 159] = "Channels", WW[WW.BitDepth = 25188] = "BitDepth", WW[WW.SimpleBlock = 163] = "SimpleBlock", WW[WW.BlockGroup = 160] = "BlockGroup", WW[WW.Block = 161] = "Block", WW[WW.BlockAdditions = 30113] = "BlockAdditions", WW[WW.BlockMore = 166] = "BlockMore", WW[WW.BlockAdditional = 165] = "BlockAdditional", WW[WW.BlockAddID = 238] = "BlockAddID", WW[WW.BlockDuration = 155] = "BlockDuration", WW[WW.ReferenceBlock = 251] = "ReferenceBlock", WW[WW.Cluster = 524531317] = "Cluster", WW[WW.Timestamp = 231] = "Timestamp", WW[WW.Cues = 475249515] = "Cues", WW[WW.CuePoint = 187] = "CuePoint", WW[WW.CueTime = 179] = "CueTime", WW[WW.CueTrackPositions = 183] = "CueTrackPositions", WW[WW.CueTrack = 247] = "CueTrack", WW[WW.CueClusterPosition = 241] = "CueClusterPosition", WW[WW.Colour = 21936] = "Colour", WW[WW.MatrixCoefficients = 21937] = "MatrixCoefficients", WW[WW.TransferCharacteristics = 21946] = "TransferCharacteristics", WW[WW.Primaries = 21947] = "Primaries", WW[WW.Range = 21945] = "Range", WW[WW.Projection = 30320] = "Projection", WW[WW.ProjectionType = 30321] = "ProjectionType", WW[WW.ProjectionPoseYaw = 30323] = "ProjectionPoseYaw", WW[WW.ProjectionPosePitch = 30324] = "ProjectionPosePitch", WW[WW.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", WW[WW.Attachments = 423732329] = "Attachments", WW[WW.AttachedFile = 24999] = "AttachedFile", WW[WW.FileDescription = 18046] = "FileDescription", WW[WW.FileName = 18030] = "FileName", WW[WW.FileMediaType = 18016] = "FileMediaType", WW[WW.FileData = 18012] = "FileData", WW[WW.FileUID = 18094] = "FileUID", WW[WW.Chapters = 272869232] = "Chapters", WW[WW.Tags = 307544935] = "Tags", WW[WW.Tag = 29555] = "Tag", WW[WW.Targets = 25536] = "Targets", WW[WW.TargetTypeValue = 26826] = "TargetTypeValue", WW[WW.TargetType = 25546] = "TargetType", WW[WW.TagTrackUID = 25541] = "TagTrackUID", WW[WW.TagEditionUID = 25545] = "TagEditionUID", WW[WW.TagChapterUID = 25540] = "TagChapterUID", WW[WW.TagAttachmentUID = 25542] = "TagAttachmentUID", WW[WW.SimpleTag = 26568] = "SimpleTag", WW[WW.TagName = 17827] = "TagName", WW[WW.TagLanguage = 17530] = "TagLanguage", WW[WW.TagString = 17543] = "TagString", WW[WW.TagBinary = 17541] = "TagBinary", WW[WW.ContentEncodings = 28032] = "ContentEncodings", WW[WW.ContentEncoding = 25152] = "ContentEncoding", WW[WW.ContentEncodingOrder = 20529] = "ContentEncodingOrder", WW[WW.ContentEncodingScope = 20530] = "ContentEncodingScope", WW[WW.ContentCompression = 20532] = "ContentCompression", WW[WW.ContentCompAlgo = 16980] = "ContentCompAlgo", WW[WW.ContentCompSettings = 16981] = "ContentCompSettings", WW[WW.ContentEncryption = 20533] = "ContentEncryption"
    }(KO || (KO = {}));
    KO.EBML, KO.Segment, KO.SeekHead, KO.Info, KO.Cluster, KO.Tracks, KO.Cues, KO.Attachments, KO.Chapters, KO.Tags;
    const SO = WW => WW < 256 ? 1 : WW < 65536 ? 2 : WW < 1 << 24 ? 3 : WW < 2 ** 32 ? 4 : WW < 2 ** 40 ? 5 : 6,
      YO = WW => WW < 256n ? 1 : WW < 65536n ? 2 : WW < 1n << 24n ? 3 : WW < 1n << 32n ? 4 : WW < 1n << 40n ? 5 : WW < 1n << 48n ? 6 : WW < 1n << 56n ? 7 : 8,
      yO = WW => WW >= -64 && WW < 64 ? 1 : WW >= -8192 && WW < 8192 ? 2 : WW >= -1048576 && WW < 1 << 20 ? 3 : WW >= -(1 << 27) && WW < 1 << 27 ? 4 : WW >= -(2 ** 34) && WW < 2 ** 34 ? 5 : 6;
    class TO {
      constructor(WW) {
        this.writer = WW, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap, this.dataOffsets = new WeakMap
      }
      writeByte(WW) {
        this.helperView.setUint8(0, WW), this.writer.write(this.helper.subarray(0, 1))
      }
      writeFloat32(WW) {
        this.helperView.setFloat32(0, WW, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeFloat64(WW) {
        this.helperView.setFloat64(0, WW, !1), this.writer.write(this.helper)
      }
      writeUnsignedInt(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SO(WW),
          OW = 0;
        switch (iW) {
          case 6:
            this.helperView.setUint8(OW++, WW / 2 ** 40 | 0);
          case 5:
            this.helperView.setUint8(OW++, WW / 2 ** 32 | 0);
          case 4:
            this.helperView.setUint8(OW++, WW >> 24);
          case 3:
            this.helperView.setUint8(OW++, WW >> 16);
          case 2:
            this.helperView.setUint8(OW++, WW >> 8);
          case 1:
            this.helperView.setUint8(OW++, WW);
            break;
          default:
            throw new Error("Bad unsigned int size " + iW)
        }
        this.writer.write(this.helper.subarray(0, OW))
      }
      writeUnsignedBigInt(WW) {
        let iW = 0;
        for (let OW = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YO(WW)) - 1; OW >= 0; OW--) this.helperView.setUint8(iW++, Number(WW >> BigInt(8 * OW) & 0xffn));
        this.writer.write(this.helper.subarray(0, iW))
      }
      writeSignedInt(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yO(WW);
        WW < 0 && (WW += 2 ** (8 * iW)), this.writeUnsignedInt(WW, iW)
      }
      writeVarInt(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (WW => {
            if (WW < 127) return 1;
            if (WW < 16383) return 2;
            if (WW < 2097151) return 3;
            if (WW < 268435455) return 4;
            if (WW < 2 ** 35 - 1) return 5;
            if (WW < 2 ** 42 - 1) return 6;
            throw new Error("EBML varint size not supported " + WW)
          })(WW),
          OW = 0;
        switch (iW) {
          case 1:
            this.helperView.setUint8(OW++, 128 | WW);
            break;
          case 2:
            this.helperView.setUint8(OW++, 64 | WW >> 8), this.helperView.setUint8(OW++, WW);
            break;
          case 3:
            this.helperView.setUint8(OW++, 32 | WW >> 16), this.helperView.setUint8(OW++, WW >> 8), this.helperView.setUint8(OW++, WW);
            break;
          case 4:
            this.helperView.setUint8(OW++, 16 | WW >> 24), this.helperView.setUint8(OW++, WW >> 16), this.helperView.setUint8(OW++, WW >> 8), this.helperView.setUint8(OW++, WW);
            break;
          case 5:
            this.helperView.setUint8(OW++, 8 | WW / 2 ** 32 & 7), this.helperView.setUint8(OW++, WW >> 24), this.helperView.setUint8(OW++, WW >> 16), this.helperView.setUint8(OW++, WW >> 8), this.helperView.setUint8(OW++, WW);
            break;
          case 6:
            this.helperView.setUint8(OW++, 4 | WW / 2 ** 40 & 3), this.helperView.setUint8(OW++, WW / 2 ** 32 | 0), this.helperView.setUint8(OW++, WW >> 24), this.helperView.setUint8(OW++, WW >> 16), this.helperView.setUint8(OW++, WW >> 8), this.helperView.setUint8(OW++, WW);
            break;
          default:
            throw new Error("Bad EBML varint size " + iW)
        }
        this.writer.write(this.helper.subarray(0, OW))
      }
      writeAsciiString(WW) {
        this.writer.write(new Uint8Array(WW.split("").map((WW => WW.charCodeAt(0)))))
      }
      writeEBML(WW) {
        if (null !== WW)
          if (WW instanceof Uint8Array) this.writer.write(WW);
          else if (Array.isArray(WW))
          for (const iW of WW) this.writeEBML(iW);
        else if (this.offsets.set(WW, this.writer.getPos()), this.writeUnsignedInt(WW.id), Array.isArray(WW.data)) {
          const iW = this.writer.getPos(),
            OW = -1 === WW.size ? 1 : WW.size ?? 4; - 1 === WW.size ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + OW);
          const mW = this.writer.getPos();
          if (this.dataOffsets.set(WW, mW), this.writeEBML(WW.data), -1 !== WW.size) {
            const WW = this.writer.getPos() - mW,
              EW = this.writer.getPos();
            this.writer.seek(iW), this.writeVarInt(WW, OW), this.writer.seek(EW)
          }
        } else if ("number" === typeof WW.data) {
          const iW = WW.size ?? SO(WW.data);
          this.writeVarInt(iW), this.writeUnsignedInt(WW.data, iW)
        } else if ("bigint" === typeof WW.data) {
          const iW = WW.size ?? YO(WW.data);
          this.writeVarInt(iW), this.writeUnsignedBigInt(WW.data, iW)
        } else if ("string" === typeof WW.data) this.writeVarInt(WW.data.length), this.writeAsciiString(WW.data);
        else if (WW.data instanceof Uint8Array) this.writeVarInt(WW.data.byteLength, WW.size), this.writer.write(WW.data);
        else if (WW.data instanceof UO) this.writeVarInt(4), this.writeFloat32(WW.data.value);
        else if (WW.data instanceof kO) this.writeVarInt(8), this.writeFloat64(WW.data.value);
        else if (WW.data instanceof sO) {
          const iW = WW.size ?? yO(WW.data.value);
          this.writeVarInt(iW), this.writeSignedInt(WW.data.value, iW)
        } else if (WW.data instanceof MO) {
          const iW = LW.kd.encode(WW.data.value);
          this.writeVarInt(iW.length), this.writer.write(iW)
        } else(0, LW.J)(WW.data)
      }
    }
    const JO = {
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
    const hO = {
      video: 1,
      audio: 2,
      subtitle: 17
    };
    class HO extends AW {
      constructor(WW, iW) {
        super(WW), this.trackDatas = [], this.allTracksKnown = (0, LW.Gc)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = new Map, this.startTimestamp = 1 / 0, this.endTimestamp = -1 / 0, this.warnedAboutTooNegativeTimestamp = !1, this.format = iW
      }
      async start() {
        const WW = await this.mutex.acquire();
        this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new TO(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush();
        for (const iW of this.output.tracks) iW.isVideoTrack() && iW.metadata.decoderConfig ? this.getVideoTrackData(iW, iW.metadata.primingPacket ?? null, {
          decoderConfig: iW.metadata.decoderConfig
        }) : iW.isAudioTrack() && iW.metadata.decoderConfig && this.getAudioTrackData(iW, iW.metadata.primingPacket ?? null, {
          decoderConfig: iW.metadata.decoderConfig
        });
        WW()
      }
      writeEBMLHeader() {
        this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
        const WW = {
          id: KO.EBML,
          data: [{
            id: KO.EBMLVersion,
            data: 1
          }, {
            id: KO.EBMLReadVersion,
            data: 1
          }, {
            id: KO.EBMLMaxIDLength,
            data: 4
          }, {
            id: KO.EBMLMaxSizeLength,
            data: 8
          }, {
            id: KO.DocType,
            data: this.format instanceof CO ? "webm" : "matroska"
          }, {
            id: KO.DocTypeVersion,
            data: 4
          }, {
            id: KO.DocTypeReadVersion,
            data: 2
          }]
        };
        if (this.ebmlWriter.writeEBML(WW), this.format._options.onEbmlHeader) {
          const {
            data: WW,
            start: iW
          } = this.writer.stopTrackingWrites();
          this.format._options.onEbmlHeader(WW, iW)
        }
      }
      maybeCreateSeekHead(WW) {
        if (this.format._options.appendOnly) return;
        const iW = new Uint8Array([28, 83, 187, 107]),
          OW = new Uint8Array([21, 73, 169, 102]),
          mW = new Uint8Array([22, 84, 174, 107]),
          EW = new Uint8Array([25, 65, 164, 105]),
          NW = new Uint8Array([18, 84, 195, 103]),
          PW = {
            id: KO.SeekHead,
            data: [{
              id: KO.Seek,
              data: [{
                id: KO.SeekID,
                data: OW
              }, {
                id: KO.SeekPosition,
                size: 5,
                data: WW ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
              }]
            }, {
              id: KO.Seek,
              data: [{
                id: KO.SeekID,
                data: mW
              }, {
                id: KO.SeekPosition,
                size: 5,
                data: WW ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
              }]
            }, this.attachmentsElement ? {
              id: KO.Seek,
              data: [{
                id: KO.SeekID,
                data: EW
              }, {
                id: KO.SeekPosition,
                size: 5,
                data: WW ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
              }]
            } : null, this.tagsElement ? {
              id: KO.Seek,
              data: [{
                id: KO.SeekID,
                data: NW
              }, {
                id: KO.SeekPosition,
                size: 5,
                data: WW ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
              }]
            } : null, {
              id: KO.Seek,
              data: [{
                id: KO.SeekID,
                data: iW
              }, {
                id: KO.SeekPosition,
                size: 5,
                data: WW ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
              }]
            }]
          };
        this.seekHead = PW
      }
      createSegmentInfo() {
        const WW = {
          id: KO.Duration,
          data: new kO(0)
        };
        this.segmentDuration = WW;
        const iW = {
          id: KO.Info,
          data: [{
            id: KO.TimestampScale,
            data: 1e6
          }, {
            id: KO.MuxingApp,
            data: kW.b
          }, {
            id: KO.WritingApp,
            data: kW.b
          }, this.format._options.appendOnly ? null : WW]
        };
        this.segmentInfo = iW
      }
      createTracks() {
        const WW = {
          id: KO.Tracks,
          data: []
        };
        this.tracksElement = WW;
        for (const iW of this.trackDatas) {
          let OW = JO[iW.track.source._codec];
          (0, LW.K)(OW), "audio" === iW.type && "dts" === iW.track.source._codec && ("dtse" === iW.info.decoderConfig.codec ? OW = "A_DTS/EXPRESS" : "dtsl" === iW.info.decoderConfig.codec && (OW = "A_DTS/LOSSLESS"));
          let mW = 0;
          if ("audio" === iW.type && "opus" === iW.track.source._codec) {
            mW = 8e7;
            const WW = iW.info.decoderConfig.description;
            if (WW) {
              const iW = (0, LW.pd)(WW),
                OW = (0, bW.nb)(iW);
              mW = Math.round(OW.preSkip / EW.n * 1e9)
            }
          }
          WW.data.push({
            id: KO.TrackEntry,
            data: [{
              id: KO.TrackNumber,
              data: iW.track.id
            }, {
              id: KO.TrackUID,
              data: iW.track.id
            }, {
              id: KO.TrackType,
              data: hO[iW.type]
            }, !1 === iW.track.metadata.disposition?.default ? {
              id: KO.FlagDefault,
              data: 0
            } : null, iW.track.metadata.disposition?.forced ? {
              id: KO.FlagForced,
              data: 1
            } : null, iW.track.metadata.disposition?.hearingImpaired ? {
              id: KO.FlagHearingImpaired,
              data: 1
            } : null, iW.track.metadata.disposition?.visuallyImpaired ? {
              id: KO.FlagVisualImpaired,
              data: 1
            } : null, iW.track.metadata.disposition?.original ? {
              id: KO.FlagOriginal,
              data: 1
            } : null, iW.track.metadata.disposition?.commentary ? {
              id: KO.FlagCommentary,
              data: 1
            } : null, {
              id: KO.FlagLacing,
              data: 0
            }, {
              id: KO.Language,
              data: iW.track.metadata.languageCode ?? LW.A
            }, {
              id: KO.CodecID,
              data: OW
            }, iW.codecPrivate ? {
              id: KO.CodecPrivate,
              data: (0, LW.pd)(iW.codecPrivate)
            } : null, mW > 0 ? {
              id: KO.SeekPreRoll,
              data: mW
            } : null, void 0 !== iW.track.metadata.name ? {
              id: KO.Name,
              data: new MO(iW.track.metadata.name)
            } : null, "video" === iW.type ? this.videoSpecificTrackInfo(iW) : null, "audio" === iW.type ? this.audioSpecificTrackInfo(iW) : null, "subtitle" === iW.type ? this.subtitleSpecificTrackInfo(iW) : null]
          })
        }
      }
      videoSpecificTrackInfo(WW) {
        const {
          frameRate: iW,
          transformationMatrix: OW
        } = WW.track.metadata, mW = [iW ? {
          id: KO.DefaultDuration,
          data: 1e9 / iW
        } : null];
        let EW, NW, PW;
        if (OW) {
          EW = (0, LW.mb)(OW);
          const WW = (0, LW.uc)((0, LW.Nc)(-EW), OW);
          NW = Math.sign(WW[0]), PW = Math.sign(WW[4]), -1 === PW && (PW = 1, NW = -NW, EW = (0, LW.yc)(EW + 180))
        } else EW = WW.track.metadata.rotation ?? 0, NW = WW.track.metadata.flip ? -1 : 1, PW = 1;
        const cW = EW ? (0, LW.yc)(-1 === NW ? EW : -EW) : 0,
          wW = Math.round(Math.acos(NW) * LW.t),
          tW = Math.round(Math.acos(PW) * LW.t),
          ZW = !!WW.info.aspectRatio && WW.info.aspectRatio.num * WW.info.height !== WW.info.aspectRatio.den * WW.info.width,
          xW = WW.info.decoderConfig.colorSpace,
          lW = {
            id: KO.Video,
            data: [{
              id: KO.PixelWidth,
              data: WW.info.width
            }, {
              id: KO.PixelHeight,
              data: WW.info.height
            }, ZW ? {
              id: KO.DisplayWidth,
              data: WW.info.aspectRatio.num
            } : null, ZW ? {
              id: KO.DisplayHeight,
              data: WW.info.aspectRatio.den
            } : null, ZW ? {
              id: KO.DisplayUnit,
              data: 3
            } : null, WW.info.alphaMode ? {
              id: KO.AlphaMode,
              data: 1
            } : null, (0, LW.fb)(xW) ? null : {
              id: KO.Colour,
              data: [{
                id: KO.MatrixCoefficients,
                data: null != xW?.matrix ? LW.r[xW.matrix] : 2
              }, {
                id: KO.TransferCharacteristics,
                data: null != xW?.transfer ? LW.v[xW.transfer] : 2
              }, {
                id: KO.Primaries,
                data: null != xW?.primaries ? LW.g[xW.primaries] : 2
              }, {
                id: KO.Range,
                data: null != xW?.fullRange ? xW.fullRange ? 2 : 1 : 0
              }]
            }, cW || wW || tW ? {
              id: KO.Projection,
              data: [{
                id: KO.ProjectionType,
                data: 0
              }, wW ? {
                id: KO.ProjectionPoseYaw,
                data: new UO(wW)
              } : null, tW ? {
                id: KO.ProjectionPosePitch,
                data: new UO(tW)
              } : null, cW ? {
                id: KO.ProjectionPoseRoll,
                data: new UO((cW + 180) % 360 - 180)
              } : null]
            } : null]
          };
        return mW.push(lW), mW
      }
      audioSpecificTrackInfo(WW) {
        const iW = EW.r.includes(WW.track.source._codec) ? (0, EW.U)(WW.track.source._codec) : null;
        return [{
          id: KO.Audio,
          data: [{
            id: KO.SamplingFrequency,
            data: new UO(WW.info.sampleRate)
          }, {
            id: KO.Channels,
            data: WW.info.numberOfChannels
          }, iW ? {
            id: KO.BitDepth,
            data: 8 * iW.sampleSize
          } : null]
        }]
      }
      subtitleSpecificTrackInfo(WW) {
        return []
      }
      maybeCreateTags() {
        const WW = [],
          iW = (iW, OW) => {
            WW.push({
              id: KO.SimpleTag,
              data: [{
                id: KO.TagName,
                data: new MO(iW)
              }, "string" === typeof OW ? {
                id: KO.TagString,
                data: new MO(OW)
              } : {
                id: KO.TagBinary,
                data: OW
              }]
            })
          },
          OW = this.output._metadataTags,
          mW = new Set;
        for (const {
            key: EW,
            value: NW
          }
          of(0, LW.kc)(OW)) switch (EW) {
          case "title":
            iW("TITLE", NW), mW.add("TITLE");
            break;
          case "description":
            iW("DESCRIPTION", NW), mW.add("DESCRIPTION");
            break;
          case "artist":
            iW("ARTIST", NW), mW.add("ARTIST");
            break;
          case "album":
            iW("ALBUM", NW), mW.add("ALBUM");
            break;
          case "albumArtist":
            iW("ALBUM_ARTIST", NW), mW.add("ALBUM_ARTIST");
            break;
          case "genre":
            iW("GENRE", NW), mW.add("GENRE");
            break;
          case "beatsPerMinute":
            iW("BPM", NW.toString()), mW.add("BPM");
            break;
          case "comment":
            iW("COMMENT", NW), mW.add("COMMENT");
            break;
          case "lyrics":
            iW("LYRICS", NW), mW.add("LYRICS");
            break;
          case "date":
            iW("DATE", NW.toISOString().slice(0, 10)), mW.add("DATE");
            break;
          case "trackNumber":
            iW("PART_NUMBER", void 0 !== OW.tracksTotal ? `${NW}/${OW.tracksTotal}` : NW.toString()), mW.add("PART_NUMBER");
            break;
          case "discNumber":
            iW("DISC", void 0 !== OW.discsTotal ? `${NW}/${OW.discsTotal}` : NW.toString()), mW.add("DISC");
            break;
          case "tracksTotal":
          case "discsTotal":
          case "images":
          case "raw":
            break;
          default:
            (0, LW.J)(EW)
        }
        if (OW.raw)
          for (const EW in OW.raw) {
            const WW = OW.raw[EW];
            null == WW || mW.has(EW) || ("string" === typeof WW || WW instanceof Uint8Array) && iW(EW, WW)
          }
        0 !== WW.length && (this.tagsElement = {
          id: KO.Tags,
          data: [{
            id: KO.Tag,
            data: [{
              id: KO.Targets,
              data: [{
                id: KO.TargetTypeValue,
                data: 50
              }, {
                id: KO.TargetType,
                data: "MOVIE"
              }]
            }, ...WW]
          }]
        })
      }
      maybeCreateAttachments() {
        const WW = this.output._metadataTags,
          iW = [],
          OW = new Set,
          mW = WW.images ?? [];
        for (const EW of mW) {
          let WW, mW = EW.name;
          if (void 0 === mW) {
            mW = ("coverFront" === EW.kind ? "cover" : "coverBack" === EW.kind ? "back" : "image") + ((0, LW.zb)(EW.mimeType) ?? "")
          }
          for (;;) {
            WW = 0n;
            for (let iW = 0; iW < 8; iW++) WW <<= 8n, WW |= BigInt(Math.floor(256 * Math.random()));
            if (0n !== WW && !OW.has(WW)) break
          }
          OW.add(WW), iW.push({
            id: KO.AttachedFile,
            data: [void 0 !== EW.description ? {
              id: KO.FileDescription,
              data: new MO(EW.description)
            } : null, {
              id: KO.FileName,
              data: new MO(mW)
            }, {
              id: KO.FileMediaType,
              data: EW.mimeType
            }, {
              id: KO.FileData,
              data: EW.data
            }, {
              id: KO.FileUID,
              data: WW
            }]
          })
        }
        for (const [EW, NW] of Object.entries(WW.raw ?? {})) {
          if (!(NW instanceof lW.e)) continue;
          /^\d+$/.test(EW) && (mW.find((WW => WW.mimeType === NW.mimeType && (0, LW.qd)(WW.data, NW.data))) || iW.push({
            id: KO.AttachedFile,
            data: [void 0 !== NW.description ? {
              id: KO.FileDescription,
              data: new MO(NW.description)
            } : null, {
              id: KO.FileName,
              data: new MO(NW.name ?? "")
            }, {
              id: KO.FileMediaType,
              data: NW.mimeType ?? ""
            }, {
              id: KO.FileData,
              data: NW.data
            }, {
              id: KO.FileUID,
              data: BigInt(EW)
            }]
          }))
        }
        0 !== iW.length && (this.attachmentsElement = {
          id: KO.Attachments,
          data: iW
        })
      }
      createSegment() {
        this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
        const WW = {
          id: KO.Segment,
          size: this.format._options.appendOnly ? -1 : 6,
          data: [this.seekHead, this.segmentInfo, this.tracksElement, this.attachmentsElement, this.tagsElement]
        };
        if (this.segment = WW, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(WW), this.format._options.onSegmentHeader) {
          const {
            data: WW,
            start: iW
          } = this.writer.stopTrackingWrites();
          this.format._options.onSegmentHeader(WW, iW)
        }
      }
      createCues() {
        this.cues = {
          id: KO.Cues,
          data: []
        }
      }
      get segmentDataOffset() {
        return (0, LW.K)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
      }
      allTracksAreKnown() {
        for (const WW of this.output.tracks)
          if (!WW.source._closed && !this.trackDatas.some((iW => iW.track === WW))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const WW = this.trackDatas.map((WW => {
          if ("video" === WW.type) return WW.info.decoderConfig.codec;
          if ("audio" === WW.type) return WW.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [WW.track.source._codec]
        }));
        return (WW => {
          let iW = (WW.hasVideo ? "video/" : WW.hasAudio ? "audio/" : "application/") + (WW.isWebM ? "webm" : "x-matroska");
          WW.codecStrings.length > 0 && (iW += `; codecs="${[...new Set(WW.codecStrings.filter(Boolean))].join(", ")}"`);
          return iW
        })({
          isWebM: this.format instanceof CO,
          hasVideo: this.trackDatas.some((WW => "video" === WW.type)),
          hasAudio: this.trackDatas.some((WW => "audio" === WW.type)),
          codecStrings: WW
        })
      }
      getVideoTrackData(WW, iW, OW) {
        const mW = this.trackDatas.find((iW => iW.track === WW));
        if (mW) return mW;
        (0, EW.bb)(OW, WW.source._codec), (0, LW.K)(OW), (0, LW.K)(OW.decoderConfig), (0, LW.K)(void 0 !== OW.decoderConfig.codedWidth), (0, LW.K)(void 0 !== OW.decoderConfig.codedHeight);
        const NW = OW.decoderConfig.displayAspectWidth,
          PW = OW.decoderConfig.displayAspectHeight,
          cW = void 0 === NW || void 0 === PW ? null : (0, LW.ed)({
            num: NW,
            den: PW
          }),
          wW = {
            track: WW,
            type: "video",
            info: {
              width: OW.decoderConfig.codedWidth,
              height: OW.decoderConfig.codedHeight,
              aspectRatio: cW,
              decoderConfig: OW.decoderConfig,
              alphaMode: WW.metadata.canBeTransparent || (iW ? !!iW.sideData.alpha : null)
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null,
            codecPrivate: OW.decoderConfig.description ?? null,
            closed: !1
          };
        return "vp9" === WW.source._codec ? wW.codecPrivate = new Uint8Array((0, EW.L)(wW.info.decoderConfig.codec)) : "av1" === WW.source._codec ? wW.codecPrivate = new Uint8Array((0, EW.J)(wW.info.decoderConfig.codec)) : "prores" === WW.source._codec && (wW.codecPrivate = LW.kd.encode(OW.decoderConfig.codec)), this.trackDatas.push(wW), this.trackDatas.sort(((WW, iW) => WW.track.id - iW.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), wW
      }
      getAudioTrackData(WW, iW, OW) {
        const NW = this.trackDatas.find((iW => iW.track === WW));
        if (NW) return NW;
        (0, EW.W)(OW, WW.source._codec), (0, LW.K)(OW), (0, LW.K)(OW.decoderConfig);
        const PW = {
          ...OW.decoderConfig
        };
        let wW = !1;
        if ("aac" === WW.source._codec && !PW.description) {
          if (!iW) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const WW = ZO(cW.tempFromBytes(iW.data));
          if (!WW) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const OW = mW.g[WW.samplingFrequencyIndex],
            EW = mW.e[WW.channelConfiguration];
          if (void 0 === OW || void 0 === EW) throw new Error("Invalid ADTS frame header.");
          PW.description = (0, mW.i)({
            objectType: WW.objectType,
            outputSampleRate: OW,
            outputNumberOfChannels: EW
          }), wW = !0
        }
        const tW = {
          track: WW,
          type: "audio",
          info: {
            numberOfChannels: OW.decoderConfig.numberOfChannels,
            sampleRate: OW.decoderConfig.sampleRate,
            decoderConfig: PW,
            requiresAdtsStripping: wW
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: PW.description ?? null,
          closed: !1
        };
        return this.trackDatas.push(tW), this.trackDatas.sort(((WW, iW) => WW.track.id - iW.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), tW
      }
      getSubtitleTrackData(WW, iW) {
        const OW = this.trackDatas.find((iW => iW.track === WW));
        if (OW) return OW;
        (0, EW._)(iW), (0, LW.K)(iW), (0, LW.K)(iW.config);
        const mW = {
          track: WW,
          type: "subtitle",
          info: {
            config: iW.config
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: LW.kd.encode(iW.config.description),
          closed: !1
        };
        return this.trackDatas.push(mW), this.trackDatas.sort(((WW, iW) => WW.track.id - iW.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), mW
      }
      async addEncodedVideoPacket(WW, iW, OW) {
        const mW = await this.mutex.acquire();
        try {
          const mW = this.getVideoTrackData(WW, iW, OW);
          mW.info.alphaMode ??= !!iW.sideData.alpha;
          let EW = iW.data;
          if ("prores" === WW.source._codec) {
            if (EW.byteLength < 8) throw new Error("ProRes packet too small, expected at least 8 bytes.");
            EW = EW.subarray(8)
          }
          const NW = "key" === iW.type;
          this.validateTimestamp(mW.track, iW.timestamp, NW);
          let PW = iW.timestamp,
            cW = iW.duration;
          void 0 !== WW.metadata.frameRate && (PW = (0, LW.Pc)(PW, WW.metadata.frameRate), cW = (0, LW.Pc)(cW, WW.metadata.frameRate));
          const wW = mW.info.alphaMode ? iW.sideData.alpha ?? null : null,
            tW = this.createInternalChunk(EW, PW, cW, iW.type, wW);
          "vp9" === WW.source._codec && this.fixVP9ColorSpace(mW, tW), mW.chunkQueue.push(tW), await this.interleaveChunks()
        } finally {
          mW()
        }
      }
      async addEncodedAudioPacket(WW, iW, OW) {
        const mW = await this.mutex.acquire();
        try {
          const mW = this.getAudioTrackData(WW, iW, OW);
          let EW = iW.data;
          if (mW.info.requiresAdtsStripping) {
            const WW = ZO(cW.tempFromBytes(EW));
            if (!WW) throw new Error("Expected ADTS frame, didn't get one.");
            const iW = null === WW.crcCheck ? 7 : 9;
            EW = EW.subarray(iW)
          }
          const NW = "key" === iW.type;
          this.validateTimestamp(mW.track, iW.timestamp, NW);
          const PW = this.createInternalChunk(EW, iW.timestamp, iW.duration, iW.type);
          mW.chunkQueue.push(PW), await this.interleaveChunks()
        } finally {
          mW()
        }
      }
      async addSubtitleCue(WW, iW, OW) {
        const mW = await this.mutex.acquire();
        try {
          const mW = this.getSubtitleTrackData(WW, OW);
          this.validateTimestamp(mW.track, iW.timestamp, !0);
          let EW = iW.text;
          const NW = Math.round(1e3 * iW.timestamp);
          UW.g.lastIndex = 0, EW = EW.replace(UW.g, (WW => {
            const iW = (0, UW.j)(WW.slice(1, -1)) - NW;
            return `<${(0,UW.d)(iW)}>`
          }));
          const PW = LW.kd.encode(EW),
            cW = `${iW.settings??""}\n${iW.identifier??""}\n${iW.notes??""}`,
            wW = this.createInternalChunk(PW, iW.timestamp, iW.duration, "key", cW.trim() ? LW.kd.encode(cW) : null);
          mW.chunkQueue.push(wW), await this.interleaveChunks()
        } finally {
          mW()
        }
      }
      async interleaveChunks() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (WW || this.allTracksAreKnown()) {
          WW: for (;;) {
            let iW = null,
              OW = 1 / 0;
            for (const EW of this.trackDatas) {
              if (!WW && 0 === EW.chunkQueue.length && !EW.closed) break WW;
              EW.chunkQueue.length > 0 && EW.chunkQueue[0].timestamp < OW && (iW = EW, OW = EW.chunkQueue[0].timestamp)
            }
            if (!iW) break;
            const mW = iW.chunkQueue.shift();
            this.writeBlock(iW, mW)
          }
          WW || await this.writer.flush()
        }
      }
      fixVP9ColorSpace(WW, iW) {
        if ("key" !== iW.type) return;
        if (!WW.info.decoderConfig.colorSpace || !WW.info.decoderConfig.colorSpace.matrix) return;
        const OW = new jW.c(iW.data);
        OW.skipBits(2);
        const mW = OW.readBits(1),
          EW = (OW.readBits(1) << 1) + mW;
        3 === EW && OW.skipBits(1);
        if (OW.readBits(1)) return;
        if (0 !== OW.readBits(1)) return;
        OW.skipBits(2);
        if (4817730 !== OW.readBits(24)) return;
        EW >= 2 && OW.skipBits(1);
        const NW = {
          rgb: 7,
          bt709: 2,
          bt470bg: 1,
          smpte170m: 3
        } [WW.info.decoderConfig.colorSpace.matrix];
        (0, LW.Bd)(iW.data, OW.pos, OW.pos + 3, NW)
      }
      createInternalChunk(WW, iW, OW, mW) {
        return {
          data: WW,
          type: mW,
          timestamp: iW,
          duration: OW,
          additions: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
        }
      }
      writeBlock(WW, iW) {
        this.segment || this.createSegment();
        const OW = Math.round(1e3 * iW.timestamp),
          mW = this.trackDatas.every((OW => {
            if (WW === OW) return "key" === iW.type;
            const mW = OW.chunkQueue[0];
            return mW ? "key" === mW.type : OW.closed
          }));
        let EW = !1;
        if (this.currentCluster) {
          (0, LW.K)(null !== this.currentClusterStartMsTimestamp), (0, LW.K)(null !== this.currentClusterMaxMsTimestamp);
          const WW = OW - this.currentClusterStartMsTimestamp;
          EW = mW && OW > this.currentClusterMaxMsTimestamp && WW >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || WW > 32767
        } else EW = !0;
        EW && this.createNewCluster(OW);
        const NW = OW - this.currentClusterStartMsTimestamp;
        if (NW < -32768) {
          if (!this.warnedAboutTooNegativeTimestamp) {
            const WW = this.format instanceof CO ? "WebM" : "Matroska";
            PW.d._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${WW}.`), this.warnedAboutTooNegativeTimestamp = !0
          }
          return
        }
        const cW = new Uint8Array(4),
          wW = new DataView(cW.buffer);
        wW.setUint8(0, 128 | WW.track.id), wW.setInt16(1, NW, !1);
        const tW = Math.round(1e3 * iW.duration);
        if (!!iW.additions || "subtitle" === WW.type) {
          const mW = {
            id: KO.BlockGroup,
            data: [{
              id: KO.Block,
              data: [cW, iW.data]
            }, "delta" === iW.type ? {
              id: KO.ReferenceBlock,
              data: new sO(WW.lastWrittenMsTimestamp - OW)
            } : null, iW.additions ? {
              id: KO.BlockAdditions,
              data: [{
                id: KO.BlockMore,
                data: [{
                  id: KO.BlockAddID,
                  data: 1
                }, {
                  id: KO.BlockAdditional,
                  data: iW.additions
                }]
              }]
            } : null, tW > 0 ? {
              id: KO.BlockDuration,
              data: tW
            } : null]
          };
          this.ebmlWriter.writeEBML(mW)
        } else {
          wW.setUint8(3, Number("key" === iW.type) << 7);
          const WW = {
            id: KO.SimpleBlock,
            data: [cW, iW.data]
          };
          this.ebmlWriter.writeEBML(WW)
        }
        this.startTimestamp = Math.min(this.startTimestamp, OW), this.endTimestamp = Math.max(this.endTimestamp, OW + tW), WW.lastWrittenMsTimestamp = OW, this.trackDatasInCurrentCluster.has(WW) || this.trackDatasInCurrentCluster.set(WW, {
          firstMsTimestamp: OW
        }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, OW)
      }
      createNewCluster(WW) {
        WW = Math.max(0, WW), this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
          id: KO.Cluster,
          size: this.format._options.appendOnly ? -1 : 5,
          data: [{
            id: KO.Timestamp,
            data: WW
          }]
        }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = WW, this.currentClusterMaxMsTimestamp = WW, this.trackDatasInCurrentCluster.clear()
      }
      finalizeCurrentCluster() {
        if ((0, LW.K)(this.currentCluster), !this.format._options.appendOnly) {
          const WW = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster),
            iW = this.writer.getPos();
          this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(WW, 5), this.writer.seek(iW)
        }
        if (this.format._options.onCluster) {
          (0, LW.K)(null !== this.currentClusterStartMsTimestamp);
          const {
            data: WW,
            start: iW
          } = this.writer.stopTrackingWrites();
          this.format._options.onCluster(WW, iW, this.currentClusterStartMsTimestamp / 1e3)
        }
        const WW = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset,
          iW = new Map;
        for (const [mW, {
            firstMsTimestamp: EW
          }] of this.trackDatasInCurrentCluster) iW.has(EW) || iW.set(EW, []), iW.get(EW).push(mW);
        const OW = [...iW.entries()].sort(((WW, iW) => WW[0] - iW[0]));
        for (const [mW, EW] of OW)(0, LW.K)(this.cues), this.cues.data.push({
          id: KO.CuePoint,
          data: [{
            id: KO.CueTime,
            data: Math.max(0, mW)
          }, ...EW.map((iW => ({
            id: KO.CueTrackPositions,
            data: [{
              id: KO.CueTrack,
              data: iW.track.id
            }, {
              id: KO.CueClusterPosition,
              data: WW
            }]
          })))]
        })
      }
      async onTrackClose(WW) {
        const iW = await this.mutex.acquire(),
          OW = this.trackDatas.find((iW => iW.track === WW));
        OW && (OW.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), iW()
      }
      async finalize() {
        const WW = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        for (const iW of this.trackDatas) iW.closed = !0;
        if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, LW.K)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
          const WW = this.writer.getPos() - this.segmentDataOffset;
          this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(WW, 6);
          const iW = this.startTimestamp === 1 / 0 ? 0 : this.endTimestamp;
          this.segmentDuration.data = new kO(iW), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, LW.K)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead)
        }
        WW()
      }
    }
    const nO = new Uint32Array(256);
    for (let XO = 0; XO < 256; XO++) {
      let WW = XO << 24;
      for (let iW = 0; iW < 8; iW++) WW = 2147483648 & WW ? WW << 1 ^ 79764919 : WW << 1;
      nO[XO] = WW >>> 0 & 4294967295
    }
    new Uint8Array([9, 240]), new Uint8Array([70, 1]);
    const uO = new Uint32Array(256);
    for (let XO = 0; XO < 256; XO++) {
      let WW = XO << 24;
      for (let iW = 0; iW < 8; iW++) WW = 2147483648 & WW ? WW << 1 ^ 79764919 : WW << 1;
      uO[XO] = WW >>> 0 & 4294967295
    }
    const oO = WW => {
        let iW = 4294967295;
        for (let OW = 0; OW < WW.length; OW++) {
          const mW = WW[OW];
          iW = (iW << 8 ^ uO[iW >>> 24 ^ mW]) >>> 0
        }
        return iW
      },
      dO = new Uint8Array(16);
    {
      const WW = (0, LW.od)(dO);
      dO[0] = 0, WW.setUint16(1, 45069, !1), WW.setUint16(3, 1, !1), dO[5] = 193, dO[6] = 0, dO[7] = 0, WW.setUint16(8, 1, !1), WW.setUint16(10, 61440, !1), WW.setUint32(12, oO(dO.subarray(0, 12)), !1)
    }
    var eO;
    OW(41190);
    ! function(WW) {
      WW[WW.PCM = 1] = "PCM", WW[WW.IEEE_FLOAT = 3] = "IEEE_FLOAT", WW[WW.ALAW = 6] = "ALAW", WW[WW.MULAW = 7] = "MULAW", WW[WW.EXTENSIBLE = 65534] = "EXTENSIBLE"
    }(eO || (eO = {}));
    OW(41196), OW(41205), OW(41120);
    class vO {
      get supportsVideoRotationMetadata() {
        return this.supportsVideoTransformationMetadata
      }
      getSupportedVideoCodecs() {
        return this.getSupportedCodecs().filter((WW => EW.x.includes(WW)))
      }
      getSupportedAudioCodecs() {
        return this.getSupportedCodecs().filter((WW => EW.d.includes(WW)))
      }
      getSupportedSubtitleCodecs() {
        return this.getSupportedCodecs().filter((WW => EW.v.includes(WW)))
      }
      _codecUnsupportedHint(WW) {
        return ""
      }
      _isFragmentedIsobmff() {
        return !1
      }
    }
    class gO extends vO {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!WW || "object" !== typeof WW) throw new TypeError("options must be an object.");
        if (void 0 !== WW.fastStart && ![!1, "in-memory", "reserve", "fragmented"].includes(WW.fastStart)) throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
        if (void 0 !== WW.minimumFragmentDuration && (!(0, LW.Xb)(WW.minimumFragmentDuration) || WW.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
        if (void 0 !== WW.onFtyp && "function" !== typeof WW.onFtyp) throw new TypeError("options.onFtyp, when provided, must be a function.");
        if (void 0 !== WW.onMoov && "function" !== typeof WW.onMoov) throw new TypeError("options.onMoov, when provided, must be a function.");
        if (void 0 !== WW.onMdat && "function" !== typeof WW.onMdat) throw new TypeError("options.onMdat, when provided, must be a function.");
        if (void 0 !== WW.onMoof && "function" !== typeof WW.onMoof) throw new TypeError("options.onMoof, when provided, must be a function.");
        if (void 0 !== WW.metadataFormat && !["mdir", "mdta", "udta", "auto"].includes(WW.metadataFormat)) throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
        super(), this._options = WW
      }
      getSupportedTrackCounts() {
        const WW = 2 ** 32 - 1;
        return {
          video: {
            min: 0,
            max: WW
          },
          audio: {
            min: 0,
            max: WW
          },
          subtitle: {
            min: 0,
            max: WW
          },
          total: {
            min: 0,
            max: WW
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
      _createMuxer(WW) {
        return new jO(WW, this)
      }
      _isFragmentedIsobmff() {
        return "fragmented" === this._options.fastStart
      }
    }
    class DO extends gO {
      constructor(WW) {
        super(WW)
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
        return [...EW.x, ...EW.j, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...EW.v]
      }
      _codecUnsupportedHint(WW) {
        return (new pO).getSupportedCodecs().includes(WW) ? " Switching to MOV will grant support for this codec." : ""
      }
    }
    class VO extends gO {
      constructor(WW) {
        super(WW)
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
        return [...EW.x, ...EW.j, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...EW.v]
      }
    }
    class pO extends gO {
      constructor(WW) {
        super(WW)
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
        return [...EW.x, ...EW.d]
      }
      _codecUnsupportedHint(WW) {
        return (new DO).getSupportedCodecs().includes(WW) ? " Switching to MP4 will grant support for this codec." : ""
      }
    }
    class fO extends vO {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!WW || "object" !== typeof WW) throw new TypeError("options must be an object.");
        if (void 0 !== WW.appendOnly && "boolean" !== typeof WW.appendOnly) throw new TypeError("options.appendOnly, when provided, must be a boolean.");
        if (void 0 !== WW.minimumClusterDuration && (!(0, LW.Xb)(WW.minimumClusterDuration) || WW.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
        if (void 0 !== WW.onEbmlHeader && "function" !== typeof WW.onEbmlHeader) throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
        if (void 0 !== WW.onSegmentHeader && "function" !== typeof WW.onSegmentHeader) throw new TypeError("options.onHeader, when provided, must be a function.");
        if (void 0 !== WW.onCluster && "function" !== typeof WW.onCluster) throw new TypeError("options.onCluster, when provided, must be a function.");
        super(), this._options = WW
      }
      _createMuxer(WW) {
        return new HO(WW, this)
      }
      get _name() {
        return "Matroska"
      }
      getSupportedTrackCounts() {
        const WW = 127;
        return {
          video: {
            min: 0,
            max: WW
          },
          audio: {
            min: 0,
            max: WW
          },
          subtitle: {
            min: 0,
            max: WW
          },
          total: {
            min: 0,
            max: WW
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
        return [...EW.x, ...EW.j, ...EW.r.filter((WW => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(WW))), ...EW.v]
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
    class CO extends fO {
      constructor(WW) {
        super(WW)
      }
      getSupportedCodecs() {
        return [...EW.x.filter((WW => ["vp8", "vp9", "av1"].includes(WW))), ...EW.d.filter((WW => ["opus", "vorbis"].includes(WW))), ...EW.v]
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
      _codecUnsupportedHint(WW) {
        return (new fO).getSupportedCodecs().includes(WW) ? " Switching to MKV will grant support for this codec." : ""
      }
    }
  },
  41120: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => sW
    });
    var mW = OW(41127),
      EW = OW(41134),
      NW = OW(41142),
      PW = OW(41205),
      LW = OW(41179),
      cW = OW(41176),
      wW = OW(41162),
      tW = OW(41190),
      ZW = OW(41156);
    const xW = ["video", "audio", "subtitle"];
    class lW {
      constructor(WW, iW, OW, mW, EW) {
        this.id = WW, this.output = iW, this.type = OW, this.source = mW, this.metadata = EW
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
      canBePairedWith(WW) {
        if (!(WW instanceof lW)) throw new TypeError("other must be an OutputTrack.");
        if (this === WW) return !1;
        const iW = (0, mW.ld)(this.metadata.group),
          OW = (0, mW.ld)(WW.metadata.group);
        for (const mW of iW) {
          if (this.type !== WW.type && OW.some((WW => mW === WW))) return !0;
          if (OW.some((WW => mW._pairedGroups.has(WW)))) return !0
        }
        return !1
      }
    }
    class AW extends lW {
      constructor(WW, iW, OW, mW) {
        super(WW, iW, "video", OW, mW)
      }
    }
    class bW extends lW {
      constructor(WW, iW, OW, mW) {
        super(WW, iW, "audio", OW, mW)
      }
    }
    class jW extends lW {
      constructor(WW, iW, OW, mW) {
        super(WW, iW, "subtitle", OW, mW)
      }
    }
    class UW {
      constructor() {
        this._pairedGroups = new Set
      }
      pairWith(WW) {
        if (!(WW instanceof UW)) throw new TypeError("other must be an OutputTrackGroup.");
        if (this === WW) throw new TypeError("Cannot pair a group with itself.");
        this._pairedGroups.add(WW), WW._pairedGroups.add(this)
      }
    }
    const kW = WW => {
      if (!WW || "object" !== typeof WW) throw new TypeError("metadata must be an object.");
      if (void 0 !== WW.languageCode && !(0, mW.Nb)(WW.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
      if (void 0 !== WW.name && "string" !== typeof WW.name) throw new TypeError("metadata.name, when provided, must be a string.");
      if (void 0 !== WW.disposition && (0, EW.m)(WW.disposition), void 0 !== WW.maximumPacketCount && (!Number.isInteger(WW.maximumPacketCount) || WW.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
      if (void 0 !== WW.bitrate && (!Number.isFinite(WW.bitrate) || WW.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
      if (void 0 !== WW.averageBitrate && (!Number.isFinite(WW.averageBitrate) || WW.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
      if (void 0 !== WW.group && !(WW.group instanceof UW) && (!Array.isArray(WW.group) || WW.group.some((WW => !(WW instanceof UW))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
    };
    class sW extends mW.n {
      get target() {
        const WW = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
        if (this._rootTargetPromise) throw new TypeError(WW);
        const iW = this._getRootTarget();
        if ((0, mW.ac)(iW)) throw new TypeError(WW);
        return iW
      }
      constructor(WW) {
        if (super(), this.state = "pending", this.defaultTrackGroup = new UW, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new mW.c, this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !WW || "object" !== typeof WW) throw new TypeError("options must be an object.");
        if (!(WW.format instanceof NW.j)) throw new TypeError("options.format must be an OutputFormat.");
        if (!(WW.target instanceof LW.n || WW.target instanceof LW.j)) throw new TypeError("options.target must be a Target or a PathedTarget.");
        if (WW.target instanceof LW.n && this._rememberTarget(WW.target), void 0 !== WW.initTarget && !(WW.initTarget instanceof LW.n) && "function" !== typeof WW.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
        if (void 0 !== WW.onFinalize && "function" !== typeof WW.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        this.format = WW.format, this.HZ = WW.target, this._onFinalize = WW.onFinalize ?? null, this._initTarget = WW.initTarget ?? null, this._initTarget instanceof LW.n && this._rememberTarget(this._initTarget), this._muxer = WW.format._createMuxer(this)
      }
      _getTargetValidated(WW) {
        (0, mW.K)(this.HZ instanceof LW.j);
        const iW = this.HZ.getTarget(WW),
          OW = WW => {
            if (!(WW instanceof LW.n)) throw new TypeError("getTarget must return a Target.");
            return WW
          };
        return (0, mW.ac)(iW) ? iW.then(OW) : OW(iW)
      }
      async _getTarget(WW) {
        (0, mW.K)(this.HZ instanceof LW.j);
        const iW = await this._getTargetValidated(WW);
        return this._emit("target", {
          target: iW,
          request: WW,
          isRoot: WW.isRoot
        }), "canceled" === this.state ? await iW._close() : this._rememberTarget(iW), iW
      }
      _rememberTarget(WW) {
        this._unfinalizedTargets.add(WW), WW.on("finalized", (() => this._unfinalizedTargets.delete(WW)), {
          once: !0
        })
      }
      async _getInitTarget() {
        if ((0, mW.K)(null !== this._initTarget), this._initTarget instanceof LW.n) return this._initTarget;
        const WW = await this._initTarget();
        return "canceled" === this.state ? await WW._close() : this._rememberTarget(WW), WW
      }
      _hasInitTarget() {
        return null !== this._initTarget
      }
      _getRootTarget() {
        if (this._rootTarget) return this._rootTarget;
        if (this._rootTargetPromise) return this._rootTargetPromise;
        if (this.HZ instanceof LW.n) return this._emit("target", {
          target: this.HZ,
          request: null,
          isRoot: !0
        }), this._rootTarget = this.HZ, this.HZ;
        const WW = {
            path: this.HZ.rootPath,
            isRoot: !0,
            mimeType: this.format.mimeType
          },
          iW = this._getTargetValidated(WW),
          OW = iW => ("canceled" === this.state ? iW._close() : this._rememberTarget(iW), this._emit("target", {
            target: iW,
            request: WW,
            isRoot: !0
          }), this._rootTarget = iW, iW);
        return (0, mW.ac)(iW) ? this._rootTargetPromise = iW.then(OW) : OW(iW)
      }
      _getRootWriter(WW) {
        return this._rootWriterPromise ??= (async () => {
          const iW = await this._getRootTarget(),
            OW = new cW.d(iW, "boolean" === typeof WW ? WW : WW(iW));
          return OW.start(), OW
        })()
      }
      addVideoTrack(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(WW instanceof PW.o)) throw new TypeError("source must be a VideoSource.");
        if (kW(iW), void 0 !== iW.rotation && ![0, 90, 180, 270].includes(iW.rotation)) throw new TypeError(`Invalid video rotation: ${iW.rotation}. Has to be 0, 90, 180 or 270.`);
        if (void 0 !== iW.flip && "boolean" !== typeof iW.flip) throw new TypeError("metadata.flip, when provided, must be a boolean.");
        if (void 0 !== iW.transformationMatrix && (!Array.isArray(iW.transformationMatrix) || 9 !== iW.transformationMatrix.length || !iW.transformationMatrix.every((WW => Number.isFinite(WW))))) throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");
        if (void 0 !== iW.frameRate && (!Number.isFinite(iW.frameRate) || iW.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${iW.frameRate}. Must be a positive number.`);
        if (void 0 !== iW.hasOnlyKeyPackets && "boolean" !== typeof iW.hasOnlyKeyPackets) throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");
        if (void 0 !== iW.canBeTransparent && "boolean" !== typeof iW.canBeTransparent) throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");
        if (void 0 !== iW.decoderConfig && (0, ZW.bb)({
            decoderConfig: iW.decoderConfig
          }, WW._codec), void 0 !== iW.primingPacket) {
          if (!(iW.primingPacket instanceof tW.c)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === iW.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const OW = {
          ...iW
        };
        return OW.group ??= this.defaultTrackGroup, this._addTrack(new AW(this.tracks.length + 1, this, WW, OW))
      }
      addAudioTrack(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(WW instanceof PW.d)) throw new TypeError("source must be an AudioSource.");
        if (kW(iW), void 0 !== iW.decoderConfig && (0, ZW.W)({
            decoderConfig: iW.decoderConfig
          }, WW._codec), void 0 !== iW.primingPacket) {
          if (!(iW.primingPacket instanceof tW.c)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === iW.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const OW = {
          ...iW
        };
        return OW.group ??= this.defaultTrackGroup, this._addTrack(new bW(this.tracks.length + 1, this, WW, OW))
      }
      addSubtitleTrack(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(WW instanceof PW.n)) throw new TypeError("source must be a SubtitleSource.");
        kW(iW);
        const OW = {
          ...iW
        };
        return OW.group ??= this.defaultTrackGroup, this._addTrack(new jW(this.tracks.length + 1, this, WW, OW))
      }
      setMetadataTags(WW) {
        if ((0, EW.l)(WW), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
        this._metadataTags = WW
      }
      _addTrack(WW) {
        if ("pending" !== this.state) throw new Error("Cannot add track after output has been started or canceled.");
        if (WW.source._connectedTrack) throw new Error("Source is already used for a track.");
        const iW = this.format.getSupportedTrackCounts(),
          OW = this.tracks.reduce(((iW, OW) => iW + (OW.type === WW.type ? 1 : 0)), 0),
          mW = iW[WW.type].max;
        if (OW === mW) throw new Error(0 === mW ? `${this.format._name} does not support ${WW.type} tracks.` : `${this.format._name} does not support more than ${mW} ${WW.type} track` + (1 === mW ? "" : "s") + ".");
        const EW = iW.total.max;
        if (this.tracks.length === EW) throw new Error(`${this.format._name} does not support more than ${EW} tracks` + (1 === EW ? "" : "s") + " in total.");
        if (WW.isVideoTrack()) {
          const iW = this.format.getSupportedVideoCodecs();
          if (0 === iW.length) throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(WW.source._codec));
          if (!iW.includes(WW.source._codec)) throw new Error(`Codec '${WW.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${iW.map((WW=>`'${WW}'`)).join(", ")}.` + this.format._codecUnsupportedHint(WW.source._codec))
        } else if (WW.isAudioTrack()) {
          const iW = this.format.getSupportedAudioCodecs();
          if (0 === iW.length) throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(WW.source._codec));
          if (!iW.includes(WW.source._codec)) throw new Error(`Codec '${WW.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${iW.map((WW=>`'${WW}'`)).join(", ")}.` + this.format._codecUnsupportedHint(WW.source._codec))
        } else if (WW.isSubtitleTrack()) {
          const iW = this.format.getSupportedSubtitleCodecs();
          if (0 === iW.length) throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(WW.source._codec));
          if (!iW.includes(WW.source._codec)) throw new Error(`Codec '${WW.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${iW.map((WW=>`'${WW}'`)).join(", ")}.` + this.format._codecUnsupportedHint(WW.source._codec))
        }
        return this.tracks.push(WW), WW.source._connectedTrack = WW, WW
      }
      hasEnoughTracks() {
        const WW = this.format.getSupportedTrackCounts();
        for (const OW of xW) {
          if (this.tracks.reduce(((WW, iW) => WW + (iW.type === OW ? 1 : 0)), 0) < WW[OW].min) return !1
        }
        const iW = WW.total.min;
        return !(this.tracks.length < iW)
      }
      async start() {
        const WW = this.format.getSupportedTrackCounts();
        for (const OW of xW) {
          const iW = this.tracks.reduce(((WW, iW) => WW + (iW.type === OW ? 1 : 0)), 0),
            mW = WW[OW].min;
          if (iW < mW) throw new Error(mW === WW[OW].max ? `${this.format._name} requires exactly ${mW} ${OW} track${1===mW?"":"s"}.` : `${this.format._name} requires at least ${mW} ${OW} track${1===mW?"":"s"}.`)
        }
        const iW = WW.total.min;
        if (this.tracks.length < iW) throw new Error(iW === WW.total.max ? `${this.format._name} requires exactly ${iW} track` + (1 === iW ? "" : "s") + "." : `${this.format._name} requires at least ${iW} track` + (1 === iW ? "" : "s") + ".");
        if ("canceled" === this.state) throw new Error("Output has been canceled.");
        return this._startPromise ? (wW.d._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
          this.state = "started";
          const WW = this._mutex.acquire();
          try {
            await this._muxer.start();
            const WW = this.tracks.map((WW => WW.source._start()));
            await Promise.all(WW)
          } finally {
            (await WW)()
          }
        })()
      }
      getMimeType() {
        return this._muxer.getMimeType()
      }
      async cancel() {
        return "canceled" === this.state ? this._cancelPromise ?? void 0 : "finalizing" !== this.state && "finalized" !== this.state ? this._cancelPromise = (async () => {
          this.state = "canceled";
          const WW = await this._mutex.acquire();
          try {
            const WW = this.tracks.map((WW => WW.source._flushOrWaitForOngoingClose(!0)));
            await Promise.all(WW), await Promise.all([...this._unfinalizedTargets].map((WW => WW._close()))), this._unfinalizedTargets.clear()
          } finally {
            WW()
          }
        })() : void("finalized" === this.state && wW.d._warn("Output has already been finalized."))
      }
      async finalize() {
        if ("pending" === this.state) throw new Error("Cannot finalize before starting.");
        if ("canceled" === this.state) throw new Error("Cannot finalize after canceling.");
        return this._finalizePromise ? (wW.d._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
          this.state = "finalizing";
          const WW = await this._mutex.acquire();
          try {
            const WW = this.tracks.map((WW => WW.source._flushOrWaitForOngoingClose(!1)));
            if (await Promise.all(WW), await this._muxer.finalize(), this._rootWriterPromise) {
              const WW = await this._rootWriterPromise;
              WW.finalized || (await WW.flush(), await WW.finalize())
            }
            this._onFinalize && await this._onFinalize(), this.state = "finalized"
          } catch (iW) {
            throw this.state = "canceled", iW
          } finally {
            await Promise.all([...this._unfinalizedTargets].map((WW => WW._close().catch((() => {}))))), this._unfinalizedTargets.clear(), WW()
          }
        })()
      }
    }
  },
  41190: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      f: () => EW
    });
    var mW = OW(41127);
    const EW = new Uint8Array(0);
    class NW {
      constructor(WW, iW, OW, mW) {
        let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          PW = arguments.length > 5 ? arguments[5] : void 0,
          LW = arguments.length > 6 ? arguments[6] : void 0;
        if (this.data = WW, this.type = iW, this.timestamp = OW, this.duration = mW, this.sequenceNumber = NW, WW === EW && void 0 === PW) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
        if (void 0 === PW && (PW = WW.byteLength), !(WW instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("key" !== iW && "delta" !== iW) throw new TypeError('type must be either "key" or "delta".');
        if (!Number.isFinite(OW)) throw new TypeError("timestamp must be a number.");
        if (!Number.isFinite(mW) || mW < 0) throw new TypeError("duration must be a non-negative number.");
        if (!Number.isFinite(NW)) throw new TypeError("sequenceNumber must be a number.");
        if (!Number.isInteger(PW) || PW < 0) throw new TypeError("byteLength must be a non-negative integer.");
        if (void 0 !== LW && ("object" !== typeof LW || !LW)) throw new TypeError("sideData, when provided, must be an object.");
        if (void 0 !== LW?.alpha && !(LW.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
        if (void 0 !== LW?.alphaByteLength && (!Number.isInteger(LW.alphaByteLength) || LW.alphaByteLength < 0)) throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
        this.byteLength = PW, this.sideData = LW ?? {}, this.sideData.alpha && void 0 === this.sideData.alphaByteLength && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength)
      }
      get isMetadataOnly() {
        return this.data === EW
      }
      get microsecondTimestamp() {
        return Math.trunc(mW.u * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(mW.u * this.duration)
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
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type;
        if (!this.sideData.alpha) throw new TypeError("This packet does not contain alpha side data.");
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.sideData.alpha,
          type: WW,
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
      static fromEncodedChunk(WW, iW) {
        if (!(WW instanceof EncodedVideoChunk || WW instanceof EncodedAudioChunk)) throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
        const OW = new Uint8Array(WW.byteLength);
        return WW.copyTo(OW), new NW(OW, WW.type, WW.timestamp / 1e6, (WW.duration ?? 0) / 1e6, void 0, void 0, iW)
      }
      clone(WW) {
        if (void 0 !== WW && ("object" !== typeof WW || null === WW)) throw new TypeError("options, when provided, must be an object.");
        if (void 0 !== WW?.data && !(WW.data instanceof Uint8Array)) throw new TypeError("options.data, when provided, must be a Uint8Array.");
        if (void 0 !== WW?.type && "key" !== WW.type && "delta" !== WW.type) throw new TypeError('options.type, when provided, must be either "key" or "delta".');
        if (void 0 !== WW?.timestamp && !Number.isFinite(WW.timestamp)) throw new TypeError("options.timestamp, when provided, must be a number.");
        if (void 0 !== WW?.duration && !Number.isFinite(WW.duration)) throw new TypeError("options.duration, when provided, must be a number.");
        if (void 0 !== WW?.sequenceNumber && !Number.isFinite(WW.sequenceNumber)) throw new TypeError("options.sequenceNumber, when provided, must be a number.");
        if (void 0 !== WW?.sideData && ("object" !== typeof WW.sideData || null === WW.sideData)) throw new TypeError("options.sideData, when provided, must be an object.");
        return new NW(WW?.data ?? this.data, WW?.type ?? this.type, WW?.timestamp ?? this.timestamp, WW?.duration ?? this.duration, WW?.sequenceNumber ?? this.sequenceNumber, this.byteLength, WW?.sideData ?? this.sideData)
      }
    }
  },
  41198: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => oW,
      g: () => lW,
      k: () => fW,
      n: () => VW,
      o: () => KW
    });
    var mW = OW(41127),
      EW = OW(41162),
      NW = function(WW, iW, OW) {
        if (null !== iW && void 0 !== iW) {
          if ("object" !== typeof iW && "function" !== typeof iW) throw new TypeError("Object expected.");
          var mW, EW;
          if (OW) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            mW = iW[Symbol.asyncDispose]
          }
          if (void 0 === mW) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            mW = iW[Symbol.dispose], OW && (EW = mW)
          }
          if ("function" !== typeof mW) throw new TypeError("Object not disposable.");
          EW && (mW = function() {
            try {
              EW.call(this)
            } catch (WW) {
              return Promise.reject(WW)
            }
          }), WW.stack.push({
            value: iW,
            dispose: mW,
            async: OW
          })
        } else OW && WW.stack.push({
          async: !0
        });
        return iW
      },
      PW = function(WW) {
        return function(iW) {
          function OW(OW) {
            iW.error = iW.hasError ? new WW(OW, iW.error, "An error was suppressed during disposal.") : OW, iW.hasError = !0
          }
          var mW, EW = 0;
          return function WW() {
            for (; mW = iW.stack.pop();) try {
              if (!mW.async && 1 === EW) return EW = 0, iW.stack.push(mW), Promise.resolve().then(WW);
              if (mW.dispose) {
                var NW = mW.dispose.call(mW.value);
                if (mW.async) return EW |= 2, Promise.resolve(NW).then(WW, (function(iW) {
                  return OW(iW), WW()
                }))
              } else EW |= 1
            } catch (PW) {
              OW(PW)
            }
            if (1 === EW) return iW.hasError ? Promise.reject(iW.error) : Promise.resolve();
            if (iW.hasError) throw iW.error
          }()
        }
      }("function" === typeof SuppressedError ? SuppressedError : function(WW, iW, OW) {
        var mW = new Error(OW);
        return mW.name = "SuppressedError", mW.error = WW, mW.suppressed = iW, mW
      });
    (0, mW.Cc)();
    let LW = -1 / 0,
      cW = -1 / 0,
      wW = null;
    "undefined" !== typeof FinalizationRegistry && (wW = new FinalizationRegistry((WW => {
      const iW = performance.now();
      "video" === WW.type ? (iW - LW >= 1e3 && (EW.d._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), LW = iW), "undefined" !== typeof VideoFrame && WW.data instanceof VideoFrame && WW.data.close()) : (iW - cW >= 1e3 && (EW.d._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), cW = iW), "undefined" !== typeof AudioData && WW.data instanceof AudioData && WW.data.close())
    })));
    class tW {
      constructor() {
        this._referenceCount = 0, this._lastAllocationBuffer = null
      }
    }
    const ZW = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
      xW = new Set(ZW);
    class lW {
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
        return Math.trunc(mW.u * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(mW.u * this.duration)
      }
      get hasAlpha() {
        return this.format && this.format.includes("A")
      }
      constructor(WW, iW) {
        if (this._closed = !1, WW instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && WW instanceof SharedArrayBuffer || ArrayBuffer.isView(WW)) {
          if (!iW || "object" !== typeof iW) throw new TypeError("init must be an object.");
          if (void 0 === iW.format || !xW.has(iW.format)) throw new TypeError("init.format must be one of: " + ZW.join(", "));
          if (!Number.isInteger(iW.codedWidth) || iW.codedWidth <= 0) throw new TypeError("init.codedWidth must be a positive integer.");
          if (!Number.isInteger(iW.codedHeight) || iW.codedHeight <= 0) throw new TypeError("init.codedHeight must be a positive integer.");
          if (void 0 !== iW.rotation && ![0, 90, 180, 270].includes(iW.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== iW.flip && "boolean" !== typeof iW.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(iW.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== iW.duration && (!Number.isFinite(iW.duration) || iW.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== iW.layout) {
            if (!Array.isArray(iW.layout)) throw new TypeError("init.layout, when provided, must be an array.");
            for (const WW of iW.layout) {
              if (!WW || "object" !== typeof WW || Array.isArray(WW)) throw new TypeError("Each entry in init.layout must be an object.");
              if (!Number.isInteger(WW.offset) || WW.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
              if (!Number.isInteger(WW.stride) || WW.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
            }
          }
          if (void 0 !== iW.visibleRect && (0, mW.td)(iW.visibleRect, "init.visibleRect"), void 0 !== iW.displayWidth && (!Number.isInteger(iW.displayWidth) || iW.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
          if (void 0 !== iW.displayHeight && (!Number.isInteger(iW.displayHeight) || iW.displayHeight <= 0)) throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
          if (void 0 !== iW.displayWidth !== (void 0 !== iW.displayHeight)) throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
          this.format = iW.format, this.rotation = iW.rotation ?? 0, this.flip = iW.flip ?? !1, this.timestamp = iW.timestamp, this.duration = iW.duration ?? 0;
          const OW = iW.layout ?? YW(iW.format, iW.codedWidth, iW.codedHeight);
          let EW = iW.colorSpace ?? null;
          null === EW && (EW = "RGBA" === this.format || "RGBX" === this.format || "BGRA" === this.format || "BGRX" === this.format ? {
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
            left: iW.visibleRect?.left ?? 0,
            top: iW.visibleRect?.top ?? 0,
            width: iW.visibleRect?.width ?? iW.codedWidth,
            height: iW.visibleRect?.height ?? iW.codedHeight
          }, void 0 !== iW.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? iW.displayWidth : iW.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? iW.displayHeight : iW.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height), this._data = iW._doNotCopy ? (0, mW.pd)(WW) : (0, mW.pd)(WW).slice(), this._layout = OW, this.colorSpace = new kW(EW)
        } else if ("undefined" !== typeof VideoFrame && WW instanceof VideoFrame) {
          if (void 0 !== iW?.rotation && ![0, 90, 180, 270].includes(iW.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== iW?.flip && "boolean" !== typeof iW.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (void 0 !== iW?.timestamp && !Number.isFinite(iW?.timestamp)) throw new TypeError("init.timestamp, when provided, must be a number.");
          if (void 0 !== iW?.duration && (!Number.isFinite(iW.duration) || iW.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          void 0 !== iW?.visibleRect && (0, mW.td)(iW.visibleRect, "init.visibleRect"), this._data = WW, this._layout = null, this.format = WW.format, this.visibleRect = {
            left: WW.visibleRect?.x ?? 0,
            top: WW.visibleRect?.y ?? 0,
            width: WW.visibleRect?.width ?? WW.codedWidth,
            height: WW.visibleRect?.height ?? WW.codedHeight
          }, this.rotation = iW?.rotation ?? 0, this.flip = iW?.flip ?? !1, this.squarePixelWidth = WW.displayWidth, this.squarePixelHeight = WW.displayHeight, this.timestamp = iW?.timestamp ?? WW.timestamp / 1e6, this.duration = iW?.duration ?? (WW.duration ?? 0) / 1e6, this.colorSpace = new kW(WW.colorSpace)
        } else if ("undefined" !== typeof HTMLImageElement && WW instanceof HTMLImageElement || "undefined" !== typeof SVGImageElement && WW instanceof SVGImageElement || "undefined" !== typeof ImageBitmap && WW instanceof ImageBitmap || "undefined" !== typeof HTMLVideoElement && WW instanceof HTMLVideoElement || "undefined" !== typeof HTMLCanvasElement && WW instanceof HTMLCanvasElement || "undefined" !== typeof OffscreenCanvas && WW instanceof OffscreenCanvas) {
          if (!iW || "object" !== typeof iW) throw new TypeError("init must be an object.");
          if (void 0 !== iW.rotation && ![0, 90, 180, 270].includes(iW.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== iW.flip && "boolean" !== typeof iW.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(iW.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== iW.duration && (!Number.isFinite(iW.duration) || iW.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== iW.visibleRect && (0, mW.td)(iW.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new lW(new VideoFrame(WW, {
            timestamp: Math.trunc(iW.timestamp * mW.u),
            duration: Math.trunc((iW.duration ?? 0) * mW.u) || void 0,
            visibleRect: iW.visibleRect && {
              x: iW.visibleRect.left,
              y: iW.visibleRect.top,
              width: iW.visibleRect.width,
              height: iW.visibleRect.height
            }
          }), iW);
          let OW = 0,
            EW = 0;
          if ("naturalWidth" in WW ? (OW = WW.naturalWidth, EW = WW.naturalHeight) : "videoWidth" in WW ? (OW = WW.videoWidth, EW = WW.videoHeight) : "width" in WW && (OW = Number(WW.width), EW = Number(WW.height)), !OW || !EW) throw new TypeError("Could not determine dimensions.");
          const NW = iW.visibleRect ?? {
              left: 0,
              top: 0,
              width: OW,
              height: EW
            },
            PW = new OffscreenCanvas(NW.width, NW.height),
            LW = PW.getContext("2d", {
              alpha: (0, mW.Kb)(),
              willReadFrequently: !0
            });
          if (!LW) throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
          LW.drawImage(WW, -NW.left, -NW.top), this._data = PW, this._layout = null, this.format = "RGBX", this.visibleRect = {
            left: 0,
            top: 0,
            width: NW.width,
            height: NW.height
          }, this.squarePixelWidth = NW.width, this.squarePixelHeight = NW.height, this.rotation = iW.rotation ?? 0, this.flip = iW.flip ?? !1, this.timestamp = iW.timestamp, this.duration = iW.duration ?? 0, this.colorSpace = new kW({
            matrix: "rgb",
            primaries: "bt709",
            transfer: "iec61966-2-1",
            fullRange: !0
          })
        } else {
          if (!(WW instanceof tW)) throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
          if (!iW || "object" !== typeof iW) throw new TypeError("init must be an object.");
          if (void 0 !== iW.rotation && ![0, 90, 180, 270].includes(iW.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== iW.flip && "boolean" !== typeof iW.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(iW.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== iW.duration && (!Number.isFinite(iW.duration) || iW.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (this._data = WW, WW._referenceCount++, this.format = WW.getFormat(), null !== this.format && !ZW.includes(this.format)) throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
          if (this.visibleRect = {
              left: 0,
              top: 0,
              width: WW.getCodedWidth(),
              height: WW.getCodedHeight()
            }, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw new TypeError("getCodedWidth() must return a positive integer.");
          if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw new TypeError("getCodedHeight() must return a positive integer.");
          if (this.squarePixelWidth = WW.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw new TypeError("getSquarePixelWidth() must return a positive integer.");
          if (this.squarePixelHeight = WW.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw new TypeError("getSquarePixelHeight() must return a positive integer.");
          this.rotation = iW.rotation ?? 0, this.flip = iW.flip ?? !1, this.timestamp = iW.timestamp, this.duration = iW.duration ?? 0, this.colorSpace = WW.getColorSpace()
        }
        this.encodeOptions = iW?.encodeOptions ?? {}, this.pixelAspectRatio = (0, mW.ed)({
          num: this.squarePixelWidth * this.codedHeight,
          den: this.squarePixelHeight * this.codedWidth
        }), wW?.register(this, {
          type: "video",
          data: this._data
        }, this)
      }
      clone() {
        if (this._closed) throw new Error("VideoSample is closed.");
        return (0, mW.K)(null !== this._data), this._data instanceof tW ? new lW(this._data, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : sW(this._data) ? new lW(this._data.clone(), {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : this._data instanceof Uint8Array ? ((0, mW.K)(this._layout), new lW(this._data, {
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
        })) : new lW(this._data, {
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
        this._closed || (wW?.unregister(this), this._data instanceof tW ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : sW(this._data) ? this._data.close() : this._data = null, this._closed = !0)
      }
      allocationSize() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (SW(WW), this._closed) throw new Error("VideoSample is closed.");
        if (null == (WW.format ?? this.format)) throw new Error("Cannot get allocation size when format is null.");
        if (sW(this._data)) return this._data.allocationSize(WW);
        return TW(this, WW).allocationSize
      }
      async copyTo(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, mW.Bb)(WW)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (SW(iW), this._closed) throw new Error("VideoSample is closed.");
        if (null == (iW.format ?? this.format)) throw new Error("Cannot copy video sample data when format is null.");
        if ((0, mW.K)(null !== this._data), sW(this._data)) return this._data.copyTo(WW, iW);
        if (iW.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(iW.format)) {
          if (!(this._data instanceof tW)) {
            if ("undefined" === typeof VideoFrame) throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
            const OW = this.toVideoFrame(),
              mW = await OW.copyTo(WW, iW);
            return OW.close(), mW
          } {
            const OW = {
              stack: [],
              error: void 0,
              hasError: !1
            };
            try {
              const mW = NW(OW, await this._data.toRgbSample({
                timestamp: this.timestamp,
                duration: this.duration,
                rotation: this.rotation,
                flip: this.flip
              }, iW.colorSpace ?? "srgb"), !1);
              if (!(mW instanceof lW)) throw new TypeError("toRgbSample() must return a VideoSample.");
              if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(mW.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${mW.format}' instead.`);
              return await mW.copyTo(WW, iW)
            } catch (xW) {
              OW.error = xW, OW.hasError = !0
            } finally {
              PW(OW)
            }
          }
        }
        const OW = TW(this, iW);
        (0, mW.K)(this.format);
        const EW = (0, mW.pd)(WW);
        if (EW.byteLength < OW.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${OW.allocationSize}, Available: ${EW.byteLength}`);
        const LW = yW(this.format);
        let cW;
        if (this._data instanceof tW) {
          let WW = this._data.getDataPlanes();
          if ((0, mW.ac)(WW) && (WW = await WW), !Array.isArray(WW) || WW.some((WW => !(WW.data instanceof Uint8Array) || !Number.isInteger(WW.stride) || WW.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');
          cW = WW
        } else if (this._data instanceof Uint8Array)(0, mW.K)(this._layout), (0, mW.K)(this._layout.length === LW.length), cW = this._layout.map(((WW, iW) => {
          const OW = Math.ceil(this.codedHeight / LW[iW].heightDivisor);
          return {
            data: this._data.subarray(WW.offset, WW.offset + WW.stride * OW),
            stride: WW.stride
          }
        }));
        else {
          const WW = this._data.getContext("2d");
          (0, mW.K)(WW);
          const iW = WW.getImageData(0, 0, this.codedWidth, this.codedHeight);
          cW = [{
            data: (0, mW.pd)(iW.data),
            stride: 4 * this.codedWidth
          }]
        }
        const wW = [],
          ZW = LW.length;
        for (let mW = 0; mW < ZW; mW++) {
          const WW = OW.computedLayouts[mW],
            iW = cW[mW].stride,
            NW = cW[mW].data;
          let PW = WW.sourceTop * iW;
          PW += WW.sourceLeftBytes;
          let LW = WW.destinationOffset;
          const tW = WW.sourceWidthBytes,
            ZW = {
              offset: LW,
              stride: WW.destinationStride
            };
          for (let OW = 0; OW < WW.sourceHeight; OW++) {
            if (PW + tW > NW.byteLength) throw new Error("Source buffer OOB read.");
            if (LW + tW > EW.byteLength) throw new Error("Destination buffer OOB write.");
            const OW = NW.subarray(PW, PW + tW);
            EW.set(OW, LW), PW += iW, LW += WW.destinationStride
          }
          wW.push(ZW)
        }
        if (void 0 !== iW.format) {
          const WW = this.format.startsWith("RGB") !== iW.format.startsWith("RGB"),
            mW = this.format.includes("X") && iW.format.includes("A");
          if (WW || mW)
            for (let iW = 0; iW < OW.allocationSize; iW += 4) {
              if (WW) {
                const WW = EW[iW],
                  OW = EW[iW + 2];
                EW[iW] = OW, EW[iW + 2] = WW
              }
              mW && (EW[iW + 3] = 255)
            }
        }
        return wW
      }
      toVideoFrame() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, mW.K)(null !== this._data), this._data instanceof tW) {
          if (null === this.format) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
          const WW = this._data.getDataPlanes();
          if ((0, mW.ac)(WW)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
          const iW = WW.reduce(((WW, iW) => WW + iW.data.byteLength), 0),
            OW = new Uint8Array(iW);
          let EW = 0;
          const NW = [];
          for (const mW of WW) OW.set(mW.data, EW), NW.push(EW), EW += mW.data.byteLength;
          return new VideoFrame(OW, {
            format: this.format,
            layout: WW.map(((WW, iW) => ({
              offset: NW[iW],
              stride: WW.stride
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
        return sW(this._data) ? new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        }) : this._data instanceof Uint8Array ? ((0, mW.K)(this._layout), new VideoFrame(this._data, {
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
      draw(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        let wW = 0,
          tW = 0,
          ZW = this.displayWidth,
          xW = this.displayHeight,
          lW = 0,
          AW = 0,
          bW = this.displayWidth,
          jW = this.displayHeight;
        if (void 0 !== NW ? (wW = iW, tW = OW, ZW = mW, xW = EW, lW = NW, AW = PW, void 0 !== LW ? (bW = LW, jW = cW) : (bW = ZW, jW = xW)) : (lW = iW, AW = OW, void 0 !== mW && (bW = mW, jW = EW)), !("undefined" !== typeof CanvasRenderingContext2D && WW instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && WW instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Number.isFinite(wW)) throw new TypeError("sx must be a number.");
        if (!Number.isFinite(tW)) throw new TypeError("sy must be a number.");
        if (!Number.isFinite(ZW) || ZW < 0) throw new TypeError("sWidth must be a non-negative number.");
        if (!Number.isFinite(xW) || xW < 0) throw new TypeError("sHeight must be a non-negative number.");
        if (!Number.isFinite(lW)) throw new TypeError("dx must be a number.");
        if (!Number.isFinite(AW)) throw new TypeError("dy must be a number.");
        if (!Number.isFinite(bW) || bW < 0) throw new TypeError("dWidth must be a non-negative number.");
        if (!Number.isFinite(jW) || jW < 0) throw new TypeError("dHeight must be a non-negative number.");
        if (this._closed) throw new Error("VideoSample is closed.");
        ({
          sx: wW,
          sy: tW,
          sWidth: ZW,
          sHeight: xW
        } = this._unmapSourceRegion(wW, tW, ZW, xW, this.rotation, this.flip));
        const UW = this.toCanvasImageSource();
        WW.save();
        const kW = lW + bW / 2,
          sW = AW + jW / 2;
        WW.translate(kW, sW), this.flip && WW.scale(-1, 1), WW.rotate(this.rotation * Math.PI / 180);
        const MW = this.rotation % 180 === 0 ? 1 : bW / jW;
        WW.scale(1 / MW, MW), WW.drawImage(UW, wW, tW, ZW, xW, -bW / 2, -jW / 2, bW, jW), WW.restore()
      }
      drawWithFit(WW, iW) {
        if (!("undefined" !== typeof CanvasRenderingContext2D && WW instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && WW instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!iW || "object" !== typeof iW) throw new TypeError("options must be an object.");
        if (!["fill", "contain", "cover"].includes(iW.fit)) throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
        if (void 0 !== iW.rotation && ![0, 90, 180, 270].includes(iW.rotation)) throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
        if (void 0 !== iW.flip && "boolean" !== typeof iW.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        void 0 !== iW.crop && KW(iW.crop, "options.");
        const OW = WW.canvas.width,
          mW = WW.canvas.height,
          EW = iW.rotation ?? this.rotation,
          NW = iW.flip ?? this.flip,
          [PW, LW] = EW % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let cW, wW, tW, ZW, xW = iW.crop;
        xW && (xW = MW(xW, PW, LW));
        const {
          sx: lW,
          sy: AW,
          sWidth: bW,
          sHeight: jW
        } = this._unmapSourceRegion(iW.crop?.left ?? 0, iW.crop?.top ?? 0, iW.crop?.width ?? PW, iW.crop?.height ?? LW, EW, NW);
        if ("fill" === iW.fit) cW = 0, wW = 0, tW = OW, ZW = mW;
        else {
          const [WW, EW] = iW.crop ? [iW.crop.width, iW.crop.height] : [PW, LW], NW = "contain" === iW.fit ? Math.min(OW / WW, mW / EW) : Math.max(OW / WW, mW / EW);
          tW = WW * NW, ZW = EW * NW, cW = (OW - tW) / 2, wW = (mW - ZW) / 2
        }
        WW.save();
        const UW = EW % 180 === 0 ? 1 : tW / ZW;
        WW.translate(OW / 2, mW / 2), NW && WW.scale(-1, 1), WW.rotate(EW * Math.PI / 180), WW.scale(1 / UW, UW), WW.translate(-OW / 2, -mW / 2), WW.drawImage(this.toCanvasImageSource(), lW, AW, bW, jW, cW, wW, tW, ZW), WW.restore()
      }
      _unmapSourceRegion(WW, iW, OW, mW, EW, NW) {
        if (NW) {
          WW = (EW % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight) - WW - OW
        }
        return 90 === EW ? [WW, iW, OW, mW] = [iW, this.squarePixelHeight - WW - OW, mW, OW] : 180 === EW ? [WW, iW] = [this.squarePixelWidth - WW - OW, this.squarePixelHeight - iW - mW] : 270 === EW && ([WW, iW, OW, mW] = [this.squarePixelWidth - iW - mW, WW, mW, OW]), {
          sx: WW,
          sy: iW,
          sWidth: OW,
          sHeight: mW
        }
      }
      _drawWithFitAndMipmapping(WW, iW, OW) {
        const mW = WW.width,
          EW = WW.height,
          [NW, PW] = OW.rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth],
          LW = OW.crop ? OW.crop.width : NW,
          cW = OW.crop ? OW.crop.height : PW;
        let wW = 0;
        2 * mW < LW && 2 * EW < cW && (wW = Math.floor(Math.log2(Math.min(LW / mW, cW / EW))));
        const tW = mW * 2 ** wW,
          ZW = EW * 2 ** wW,
          {
            canvas: xW,
            context: lW,
            isNew: AW
          } = wW > 0 ? UW(tW, ZW) : {
            canvas: WW,
            context: iW,
            isNew: OW.targetIsFresh
          };
        lW.imageSmoothingQuality = "high", OW.fillBlack ? (lW.fillStyle = "black", lW.fillRect(0, 0, tW, ZW)) : AW || lW.clearRect(0, 0, tW, ZW), this.drawWithFit(lW, {
          fit: OW.fit,
          rotation: OW.rotation,
          flip: OW.flip,
          crop: OW.crop
        }), lW.globalCompositeOperation = "copy";
        for (let bW = wW; bW > 1; bW--) {
          const WW = mW * 2 ** bW,
            iW = EW * 2 ** bW;
          lW.drawImage(xW, 0, 0, WW, iW, 0, 0, WW / 2, iW / 2)
        }
        lW.globalCompositeOperation = "source-over", wW > 0 && (iW.imageSmoothingQuality = "high", iW.globalCompositeOperation = "copy", iW.drawImage(xW, 0, 0, 2 * mW, 2 * EW, 0, 0, mW, EW), iW.globalCompositeOperation = "source-over")
      }
      toCanvasImageSource() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, mW.K)(null !== this._data), this._data instanceof tW || this._data instanceof Uint8Array) {
          const WW = this.toVideoFrame();
          return queueMicrotask((() => WW.close())), WW
        }
        return this._data
      }
      async transform(WW) {
        if (!WW || "object" !== typeof WW) throw new TypeError("options must be an object.");
        if (void 0 !== WW.width && (!Number.isInteger(WW.width) || WW.width <= 0)) throw new TypeError("options.width, when provided, must be a positive integer.");
        if (void 0 !== WW.height && (!Number.isInteger(WW.height) || WW.height <= 0)) throw new TypeError("options.height, when provided, must be a positive integer.");
        if (void 0 !== WW.roundDimensionsTo && (!Number.isInteger(WW.roundDimensionsTo) || WW.roundDimensionsTo <= 0)) throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
        if (void 0 !== WW.fit && !["fill", "contain", "cover"].includes(WW.fit)) throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
        if (void 0 !== WW.width && void 0 !== WW.height && void 0 === WW.fit) throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
        if (void 0 !== WW.rotate && ![0, 90, 180, 270].includes(WW.rotate)) throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
        if (void 0 !== WW.flip && "boolean" !== typeof WW.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        if (void 0 !== WW.crop && KW(WW.crop, "options."), void 0 !== WW.alpha && !["keep", "discard"].includes(WW.alpha)) throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
        const {
          rotation: iW,
          flip: OW
        } = (0, mW.jb)(this.rotation, this.flip, WW.rotate ?? 0, WW.flip ?? !1), [EW, NW] = iW % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let PW = WW.crop;
        PW && (PW = MW(PW, EW, NW));
        const LW = PW ? PW.width : EW,
          cW = PW ? PW.height : NW,
          wW = LW / cW;
        let tW, ZW;
        void 0 !== WW.width && void 0 === WW.height ? (tW = WW.width, ZW = tW / wW) : void 0 === WW.width && void 0 !== WW.height ? (ZW = WW.height, tW = ZW * wW) : void 0 !== WW.width && void 0 !== WW.height ? (tW = WW.width, ZW = WW.height) : (tW = LW, ZW = cW), tW = (0, mW.Sc)(tW, WW.roundDimensionsTo ?? 1), ZW = (0, mW.Sc)(ZW, WW.roundDimensionsTo ?? 1);
        const xW = {
          width: tW,
          height: ZW,
          fit: WW.fit ?? "fill",
          rotation: iW,
          flip: OW,
          crop: PW ?? {
            left: 0,
            top: 0,
            width: EW,
            height: NW
          },
          alpha: WW.alpha ?? "keep"
        };
        for (const lW of AW) {
          let WW = lW(this, xW);
          if ((0, mW.ac)(WW) && (WW = await WW), null !== WW) return WW
        }
        const {
          canvas: bW,
          context: jW,
          isNew: kW
        } = UW(xW.width, xW.height);
        return this._drawWithFitAndMipmapping(bW, jW, {
          fit: xW.fit,
          rotation: xW.rotation,
          flip: xW.flip,
          crop: xW.crop,
          targetIsFresh: kW,
          fillBlack: "discard" === xW.alpha
        }), new lW(bW, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: 0,
          flip: !1
        })
      }
      setRotation(WW) {
        if (![0, 90, 180, 270].includes(WW)) throw new TypeError("newRotation must be 0, 90, 180, or 270.");
        this.rotation = WW
      }
      setFlip(WW) {
        if ("boolean" !== typeof WW) throw new TypeError("newFlip must be a boolean.");
        this.flip = WW
      }
      setTimestamp(WW) {
        if (!Number.isFinite(WW)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = WW
      }
      setDuration(WW) {
        if (!Number.isFinite(WW) || WW < 0) throw new TypeError("newDuration must be a non-negative number.");
        this.duration = WW
      }
      setEncodeOptions(WW) {
        if (!WW || "object" !== typeof WW) throw new TypeError("newEncodeOptions must be an object.");
        this.encodeOptions = WW
      } [Symbol.dispose]() {
        this.close()
      }
    }
    const AW = [],
      bW = [];
    let jW = 0;
    const UW = (WW, iW) => {
      for (const mW of bW)
        if (mW.canvas.width === WW && mW.canvas.height === iW) return mW.age = jW++, {
          canvas: mW.canvas,
          context: mW.context,
          isNew: !1
        };
      let OW;
      if ("undefined" !== typeof OffscreenCanvas) OW = new OffscreenCanvas(WW, iW);
      else {
        if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
        OW = document.createElement("canvas"), OW.width = WW, OW.height = iW
      }
      const EW = OW.getContext("2d", {
        alpha: !0,
        willReadFrequently: !1
      });
      if (!EW) throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
      return bW.length >= 3 && bW.splice((0, mW.F)(bW, (WW => WW.age)), 1), bW.push({
        canvas: OW,
        context: EW,
        age: jW++
      }), {
        canvas: OW,
        context: EW,
        isNew: !0
      }
    };
    class kW {
      constructor(WW) {
        if (void 0 !== WW) {
          if (!WW || "object" !== typeof WW) throw new TypeError("init.colorSpace, when provided, must be an object.");
          const iW = Object.keys(mW.g);
          if (null != WW.primaries && !iW.includes(WW.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${iW.join(", ")}.`);
          const OW = Object.keys(mW.v);
          if (null != WW.transfer && !OW.includes(WW.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${OW.join(", ")}.`);
          const EW = Object.keys(mW.r);
          if (null != WW.matrix && !EW.includes(WW.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${EW.join(", ")}.`);
          if (null != WW.fullRange && "boolean" !== typeof WW.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
        }
        this.primaries = WW?.primaries ?? null, this.transfer = WW?.transfer ?? null, this.matrix = WW?.matrix ?? null, this.fullRange = WW?.fullRange ?? null
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
    const sW = WW => "undefined" !== typeof VideoFrame && WW instanceof VideoFrame,
      MW = (WW, iW, OW) => {
        const EW = Math.min(WW.left, iW),
          NW = Math.min(WW.top, OW),
          PW = Math.min(WW.width, iW - EW),
          LW = Math.min(WW.height, OW - NW);
        return (0, mW.K)(PW >= 0), (0, mW.K)(LW >= 0), {
          left: EW,
          top: NW,
          width: PW,
          height: LW
        }
      },
      KW = (WW, iW) => {
        if (!WW || "object" !== typeof WW) throw new TypeError(iW + "crop, when provided, must be an object.");
        if (!Number.isInteger(WW.left) || WW.left < 0) throw new TypeError(iW + "crop.left must be a non-negative integer.");
        if (!Number.isInteger(WW.top) || WW.top < 0) throw new TypeError(iW + "crop.top must be a non-negative integer.");
        if (!Number.isInteger(WW.width) || WW.width < 0) throw new TypeError(iW + "crop.width must be a non-negative integer.");
        if (!Number.isInteger(WW.height) || WW.height < 0) throw new TypeError(iW + "crop.height must be a non-negative integer.")
      },
      SW = WW => {
        if (!WW || "object" !== typeof WW) throw new TypeError("options must be an object.");
        if (void 0 !== WW.colorSpace && !["display-p3", "srgb"].includes(WW.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
        if (void 0 !== WW.format && "string" !== typeof WW.format) throw new TypeError("options.format, when provided, must be a string.");
        if (void 0 !== WW.layout) {
          if (!Array.isArray(WW.layout)) throw new TypeError("options.layout, when provided, must be an array.");
          for (const iW of WW.layout) {
            if (!iW || "object" !== typeof iW) throw new TypeError("Each entry in options.layout must be an object.");
            if (!Number.isInteger(iW.offset) || iW.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
            if (!Number.isInteger(iW.stride) || iW.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
          }
        }
        if (void 0 !== WW.rect) {
          if (!WW.rect || "object" !== typeof WW.rect) throw new TypeError("options.rect, when provided, must be an object.");
          if (void 0 !== WW.rect.x && (!Number.isInteger(WW.rect.x) || WW.rect.x < 0)) throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
          if (void 0 !== WW.rect.y && (!Number.isInteger(WW.rect.y) || WW.rect.y < 0)) throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
          if (void 0 !== WW.rect.width && (!Number.isInteger(WW.rect.width) || WW.rect.width < 0)) throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
          if (void 0 !== WW.rect.height && (!Number.isInteger(WW.rect.height) || WW.rect.height < 0)) throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")
        }
      },
      YW = (WW, iW, OW) => {
        const mW = yW(WW),
          EW = [];
        let NW = 0;
        for (const PW of mW) {
          const WW = Math.ceil(iW / PW.widthDivisor),
            mW = Math.ceil(OW / PW.heightDivisor),
            LW = WW * PW.sampleBytes,
            cW = LW * mW;
          EW.push({
            offset: NW,
            stride: LW
          }), NW += cW
        }
        return EW
      },
      yW = WW => {
        const iW = (WW, iW, OW, mW, EW) => {
          const NW = [{
            sampleBytes: WW,
            widthDivisor: 1,
            heightDivisor: 1
          }, {
            sampleBytes: iW,
            widthDivisor: OW,
            heightDivisor: mW
          }, {
            sampleBytes: iW,
            widthDivisor: OW,
            heightDivisor: mW
          }];
          return EW && NW.push({
            sampleBytes: WW,
            widthDivisor: 1,
            heightDivisor: 1
          }), NW
        };
        switch (WW) {
          case "I420":
            return iW(1, 1, 2, 2, !1);
          case "I420P10":
          case "I420P12":
            return iW(2, 2, 2, 2, !1);
          case "I420A":
            return iW(1, 1, 2, 2, !0);
          case "I420AP10":
          case "I420AP12":
            return iW(2, 2, 2, 2, !0);
          case "I422":
            return iW(1, 1, 2, 1, !1);
          case "I422P10":
          case "I422P12":
            return iW(2, 2, 2, 1, !1);
          case "I422A":
            return iW(1, 1, 2, 1, !0);
          case "I422AP10":
          case "I422AP12":
            return iW(2, 2, 2, 1, !0);
          case "I444":
            return iW(1, 1, 1, 1, !1);
          case "I444P10":
          case "I444P12":
            return iW(2, 2, 1, 1, !1);
          case "I444A":
            return iW(1, 1, 1, 1, !0);
          case "I444AP10":
          case "I444AP12":
            return iW(2, 2, 1, 1, !0);
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
            (0, mW.J)(WW), (0, mW.K)(!1)
        }
      },
      TW = (WW, iW) => {
        const OW = {
            left: 0,
            top: 0,
            width: WW.codedWidth,
            height: WW.codedHeight
          },
          mW = iW.rect,
          EW = JW(OW, mW, WW.codedWidth, WW.codedHeight, WW.format),
          NW = iW.layout;
        let PW;
        if (iW.format && iW.format !== WW.format) {
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(iW.format)) throw new Error("NotSupportedError: Invalid destination format.");
          PW = iW.format
        } else PW = WW.format;
        return HW(EW, PW, NW)
      },
      JW = (WW, iW, OW, mW, EW) => {
        const NW = {
          ...WW
        };
        if (void 0 !== iW) {
          if (0 === iW.width || 0 === iW.height) throw new TypeError("visibleRect dimensions cannot be zero.");
          if ((iW.x || 0) + (iW.width || 0) > OW) throw new TypeError("visibleRect exceeds codedWidth.");
          if ((iW.y || 0) + (iW.height || 0) > mW) throw new TypeError("visibleRect exceeds codedHeight.");
          NW.x = iW.x || 0, NW.y = iW.y || 0, NW.width = iW.width || 0, NW.height = iW.height || 0
        }
        if (!hW(EW, NW)) throw new TypeError("visibleRect alignment is invalid for the format.");
        return NW
      },
      hW = (WW, iW) => {
        if (null === WW) return !0;
        const OW = yW(WW);
        for (let mW = 0; mW < OW.length; mW++) {
          const WW = OW[mW],
            EW = WW.widthDivisor,
            NW = WW.heightDivisor;
          if ((iW.x || 0) % EW !== 0) return !1;
          if ((iW.y || 0) % NW !== 0) return !1
        }
        return !0
      },
      HW = (WW, iW, OW) => {
        const mW = yW(iW),
          EW = mW.length;
        if (void 0 !== OW && OW.length !== EW) throw new TypeError(`Layout must have ${EW} planes.`);
        let NW = 0;
        const PW = [],
          LW = [];
        for (let cW = 0; cW < EW; cW++) {
          const iW = mW[cW],
            EW = iW.sampleBytes,
            wW = iW.widthDivisor,
            tW = iW.heightDivisor,
            ZW = {
              destinationOffset: 0,
              destinationStride: 0,
              sourceTop: 0,
              sourceHeight: 0,
              sourceLeftBytes: 0,
              sourceWidthBytes: 0
            };
          if (ZW.sourceTop = Math.ceil(Math.trunc(WW.y || 0) / tW), ZW.sourceHeight = Math.ceil(Math.trunc(WW.height || 0) / tW), ZW.sourceLeftBytes = Math.floor(Math.trunc(WW.x || 0) / wW) * EW, ZW.sourceWidthBytes = Math.floor(Math.trunc(WW.width || 0) / wW) * EW, void 0 !== OW) {
            const WW = OW[cW];
            if (WW.stride < ZW.sourceWidthBytes) throw new TypeError(`Stride for plane ${cW} is too small.`);
            ZW.destinationOffset = WW.offset, ZW.destinationStride = WW.stride
          } else ZW.destinationOffset = NW, ZW.destinationStride = ZW.sourceWidthBytes;
          const xW = ZW.destinationStride * ZW.sourceHeight + ZW.destinationOffset;
          if (xW > 4294967295) throw new TypeError("Allocation size exceeds limit.");
          LW.push(xW), NW = Math.max(NW, xW);
          for (let WW = 0; WW < cW; WW++) {
            const iW = PW[WW];
            if (!(LW[cW] <= iW.destinationOffset || LW[WW] <= ZW.destinationOffset)) throw new TypeError("Planes overlap.")
          }
          PW.push(ZW)
        }
        return {
          allocationSize: NW,
          computedLayouts: PW
        }
      },
      nW = new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
    class uW {
      constructor() {
        this._referenceCount = 0
      }
    }
    class oW {
      get microsecondTimestamp() {
        return Math.trunc(mW.u * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(mW.u * this.duration)
      }
      constructor(WW) {
        if (this._closed = !1, DW(WW)) {
          if (null === WW.format) throw new TypeError("AudioData with null format is not supported.");
          this._data = WW, this.format = WW.format, this.sampleRate = WW.sampleRate, this.numberOfFrames = WW.numberOfFrames, this.numberOfChannels = WW.numberOfChannels, this.timestamp = WW.timestamp / 1e6, this.duration = WW.numberOfFrames / WW.sampleRate
        } else if (WW instanceof uW) {
          if (this._data = WW, WW._referenceCount++, this.format = WW.getFormat(), !nW.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
          if (this.sampleRate = WW.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
          if (this.numberOfFrames = WW.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
          if (this.numberOfChannels = WW.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
          if (this.timestamp = WW.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
          this.duration = this.numberOfFrames / this.sampleRate
        } else {
          if (!WW || "object" !== typeof WW) throw new TypeError("Invalid AudioDataInit: must be an object.");
          if (!nW.has(WW.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
          if (!Number.isFinite(WW.sampleRate) || WW.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
          if (!Number.isInteger(WW.numberOfChannels) || 0 === WW.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
          if (!Number.isFinite(WW?.timestamp)) throw new TypeError("init.timestamp must be a number.");
          const iW = WW.data.byteLength / (dW(WW.format) * WW.numberOfChannels);
          if (!Number.isInteger(iW)) throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
          let OW;
          if (this.format = WW.format, this.sampleRate = WW.sampleRate, this.numberOfFrames = iW, this.numberOfChannels = WW.numberOfChannels, this.timestamp = WW.timestamp, this.duration = iW / WW.sampleRate, WW.data instanceof ArrayBuffer) OW = new Uint8Array(WW.data);
          else {
            if (!ArrayBuffer.isView(WW.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
            OW = new Uint8Array(WW.data.buffer, WW.data.byteOffset, WW.data.byteLength)
          }
          const mW = this.numberOfFrames * this.numberOfChannels * dW(this.format);
          if (OW.byteLength < mW) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
          this._data = OW
        }
        wW?.register(this, {
          type: "audio",
          data: this._data
        }, this)
      }
      allocationSize(WW) {
        if (!WW || "object" !== typeof WW) throw new TypeError("options must be an object.");
        if (!Number.isInteger(WW.planeIndex) || WW.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== WW.format && !nW.has(WW.format)) throw new TypeError("Invalid format.");
        if (void 0 !== WW.frameOffset && (!Number.isInteger(WW.frameOffset) || WW.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== WW.frameCount && (!Number.isInteger(WW.frameCount) || WW.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const iW = WW.format ?? this.format,
          OW = WW.frameOffset ?? 0;
        if (OW >= this.numberOfFrames) throw new RangeError("frameOffset out of range");
        const mW = void 0 !== WW.frameCount ? WW.frameCount : this.numberOfFrames - OW;
        if (mW > this.numberOfFrames - OW) throw new RangeError("frameCount out of range");
        const EW = dW(iW),
          NW = eW(iW);
        if (NW && WW.planeIndex >= this.numberOfChannels) throw new RangeError("planeIndex out of range");
        if (!NW && 0 !== WW.planeIndex) throw new RangeError("planeIndex out of range");
        return (NW ? mW : mW * this.numberOfChannels) * EW
      }
      copyTo(WW, iW) {
        if (!(0, mW.Bb)(WW)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (!iW || "object" !== typeof iW) throw new TypeError("options must be an object.");
        if (!Number.isInteger(iW.planeIndex) || iW.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== iW.format && !nW.has(iW.format)) throw new TypeError("Invalid format.");
        if (void 0 !== iW.frameOffset && (!Number.isInteger(iW.frameOffset) || iW.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== iW.frameCount && (!Number.isInteger(iW.frameCount) || iW.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const {
          format: OW,
          frameCount: EW,
          frameOffset: NW
        } = iW;
        let {
          planeIndex: PW
        } = iW, LW = this.format;
        const cW = OW ?? this.format;
        if (!cW) throw new Error("Destination format not determined");
        const wW = this.numberOfFrames,
          tW = this.numberOfChannels,
          ZW = NW ?? 0;
        if (ZW >= wW) throw new RangeError("frameOffset out of range");
        const xW = void 0 !== EW ? EW : wW - ZW;
        if (xW > wW - ZW) throw new RangeError("frameCount out of range");
        const lW = dW(cW),
          AW = eW(cW);
        if (AW && PW >= tW) throw new RangeError("planeIndex out of range");
        if (!AW && 0 !== PW) throw new RangeError("planeIndex out of range");
        const bW = (AW ? xW : xW * tW) * lW;
        if (WW.byteLength < bW) throw new RangeError("Destination buffer is too small");
        const jW = (0, mW.od)(WW),
          UW = gW(cW);
        if (DW(this._data)) {
          if ((0, mW.fc)() && tW > 2 && cW !== LW) return void pW(this._data, jW, LW, cW, tW, PW, ZW, xW);
          try {
            return void this._data.copyTo(WW, {
              planeIndex: PW,
              frameOffset: ZW,
              frameCount: xW,
              format: cW
            })
          } catch (YW) {
            if ("f32-planar" === cW) throw YW;
            LW = "f32-planar"
          }
        }
        const kW = vW(LW),
          sW = dW(LW),
          MW = eW(LW);
        let KW;
        if (this._data instanceof uW) {
          const WW = WW => {
            const iW = this._data.getDataPlane(WW);
            if (!(iW instanceof Uint8Array)) throw new TypeError("getDataPlane() must return a Uint8Array.");
            const OW = wW * sW * (MW ? 1 : tW);
            if (iW.byteLength !== OW) throw new TypeError(`Data plane ${WW} has invalid size. Expected exactly ${OW} bytes, got ${iW.byteLength} bytes.`);
            return iW
          };
          if (MW)
            if (AW) KW = WW(PW), PW = 0;
            else {
              KW = new Uint8Array(wW * sW * tW);
              for (let iW = 0; iW < tW; iW++) {
                const OW = WW(iW);
                KW.set(OW, iW * wW * sW)
              }
            }
          else KW = WW(0)
        } else if (this._data instanceof Uint8Array) KW = this._data;
        else if ((0, mW.K)("f32-planar" === LW), AW) KW = new Uint8Array(this._data.allocationSize({
          format: "f32-planar",
          planeIndex: PW
        })), this._data.copyTo(KW, {
          format: "f32-planar",
          planeIndex: PW
        }), PW = 0;
        else {
          KW = new Uint8Array(this._data.allocationSize({
            format: "f32-planar",
            planeIndex: 0
          }) * tW);
          for (let WW = 0; WW < tW; WW++) this._data.copyTo(KW.subarray(WW * wW * sW, (WW + 1) * wW * sW), {
            format: "f32-planar",
            planeIndex: WW
          })
        }
        const SW = (0, mW.od)(KW);
        for (let mW = 0; mW < xW; mW++)
          if (AW) {
            let WW;
            WW = MW ? (PW * wW + (mW + ZW)) * sW : ((mW + ZW) * tW + PW) * sW;
            UW(jW, mW * lW, kW(SW, WW))
          } else
            for (let WW = 0; WW < tW; WW++) {
              let iW;
              iW = MW ? (WW * wW + (mW + ZW)) * sW : ((mW + ZW) * tW + WW) * sW;
              UW(jW, (mW * tW + WW) * lW, kW(SW, iW))
            }
      }
      clone() {
        if (this._closed) throw new Error("AudioSample is closed.");
        if (this._data instanceof uW) {
          const WW = new oW(this._data);
          return WW.setTimestamp(this.timestamp), WW
        }
        if (DW(this._data)) {
          const WW = new oW(this._data.clone());
          return WW.setTimestamp(this.timestamp), WW
        }
        return new oW({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp,
          data: this._data
        })
      }
      trim(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.numberOfFrames;
        if (!Number.isInteger(WW) || WW < 0) throw new TypeError("startFrame must be a non-negative integer.");
        if (!Number.isInteger(iW) || iW < 0) throw new TypeError("endFrame must be a non-negative integer.");
        if (WW > this.numberOfFrames) throw new RangeError("startFrame out of range.");
        if (iW > this.numberOfFrames) throw new RangeError("endFrame out of range.");
        if (iW < WW) throw new RangeError("endFrame must not be less than startFrame.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const OW = iW - WW,
          mW = dW(this.format);
        let EW;
        if (eW(this.format)) {
          const iW = OW * mW;
          if (EW = new Uint8Array(iW * this.numberOfChannels), OW > 0)
            for (let mW = 0; mW < this.numberOfChannels; mW++) this.copyTo(EW.subarray(mW * iW, (mW + 1) * iW), {
              planeIndex: mW,
              format: this.format,
              frameOffset: WW,
              frameCount: OW
            })
        } else EW = new Uint8Array(OW * this.numberOfChannels * mW), OW > 0 && this.copyTo(EW, {
          planeIndex: 0,
          format: this.format,
          frameOffset: WW,
          frameCount: OW
        });
        return new oW({
          data: EW,
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp + WW / this.sampleRate
        })
      }
      close() {
        this._closed || (wW?.unregister(this), this._data instanceof uW ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : DW(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
      }
      toAudioData() {
        if (this._closed) throw new Error("AudioSample is closed.");
        return this._data instanceof uW ? this._createAudioDataFromData() : DW(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
        })
      }
      _createAudioDataFromData() {
        if (eW(this.format)) {
          const WW = this.allocationSize({
              planeIndex: 0,
              format: this.format
            }),
            iW = new ArrayBuffer(WW * this.numberOfChannels);
          for (let OW = 0; OW < this.numberOfChannels; OW++) this.copyTo(new Uint8Array(iW, OW * WW, WW), {
            planeIndex: OW,
            format: this.format
          });
          return new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: iW
          })
        } {
          const WW = new ArrayBuffer(this.allocationSize({
            planeIndex: 0,
            format: this.format
          }));
          return this.copyTo(WW, {
            planeIndex: 0,
            format: this.format
          }), new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: WW
          })
        }
      }
      toAudioBuffer() {
        if (this._closed) throw new Error("AudioSample is closed.");
        const WW = new AudioBuffer({
            numberOfChannels: this.numberOfChannels,
            length: this.numberOfFrames,
            sampleRate: this.sampleRate
          }),
          iW = new Float32Array(this.allocationSize({
            planeIndex: 0,
            format: "f32-planar"
          }) / 4);
        for (let OW = 0; OW < this.numberOfChannels; OW++) this.copyTo(iW, {
          planeIndex: OW,
          format: "f32-planar"
        }), WW.copyToChannel(iW, OW);
        return WW
      }
      setTimestamp(WW) {
        if (!Number.isFinite(WW)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = WW
      } [Symbol.dispose]() {
        this.close()
      }
      static * _fromAudioBuffer(WW, iW) {
        if (!(WW instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const OW = WW.numberOfChannels,
          mW = WW.sampleRate,
          EW = WW.length,
          NW = Math.floor(24e4 / OW);
        let PW = 0,
          LW = EW;
        for (; LW > 0;) {
          const EW = Math.min(NW, LW),
            cW = new Float32Array(OW * EW);
          for (let iW = 0; iW < OW; iW++) WW.copyFromChannel(cW.subarray(iW * EW, (iW + 1) * EW), iW, PW);
          yield new oW({
            format: "f32-planar",
            sampleRate: mW,
            numberOfFrames: EW,
            numberOfChannels: OW,
            timestamp: iW + PW / mW,
            data: cW
          }), PW += EW, LW -= EW
        }
      }
      static fromAudioBuffer(WW, iW) {
        if (!(WW instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const OW = WW.numberOfChannels,
          mW = WW.sampleRate,
          EW = WW.length,
          NW = Math.floor(24e4 / OW);
        let PW = 0,
          LW = EW;
        const cW = [];
        for (; LW > 0;) {
          const EW = Math.min(NW, LW),
            wW = new Float32Array(OW * EW);
          for (let iW = 0; iW < OW; iW++) WW.copyFromChannel(wW.subarray(iW * EW, (iW + 1) * EW), iW, PW);
          const tW = new oW({
            format: "f32-planar",
            sampleRate: mW,
            numberOfFrames: EW,
            numberOfChannels: OW,
            timestamp: iW + PW / mW,
            data: wW
          });
          cW.push(tW), PW += EW, LW -= EW
        }
        return cW
      }
    }
    const dW = WW => {
        switch (WW) {
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
      eW = WW => {
        switch (WW) {
          case "u8-planar":
          case "s16-planar":
          case "s32-planar":
          case "f32-planar":
            return !0;
          default:
            return !1
        }
      },
      vW = WW => {
        switch (WW) {
          case "u8":
          case "u8-planar":
            return (WW, iW) => (WW.getUint8(iW) - 128) / 128;
          case "s16":
          case "s16-planar":
            return (WW, iW) => WW.getInt16(iW, !0) / 32768;
          case "s32":
          case "s32-planar":
            return (WW, iW) => WW.getInt32(iW, !0) / 2147483648;
          case "f32":
          case "f32-planar":
            return (WW, iW) => WW.getFloat32(iW, !0)
        }
      },
      gW = WW => {
        switch (WW) {
          case "u8":
          case "u8-planar":
            return (WW, iW, OW) => WW.setUint8(iW, (0, mW.X)(Math.round(128 * OW) + 128, 0, 255));
          case "s16":
          case "s16-planar":
            return (WW, iW, OW) => WW.setInt16(iW, (0, mW.X)(Math.round(32768 * OW), -32768, 32767), !0);
          case "s32":
          case "s32-planar":
            return (WW, iW, OW) => WW.setInt32(iW, (0, mW.X)(Math.round(2147483648 * OW), -2147483648, 2147483647), !0);
          case "f32":
          case "f32-planar":
            return (WW, iW, OW) => WW.setFloat32(iW, OW, !0)
        }
      },
      DW = WW => "undefined" !== typeof AudioData && WW instanceof AudioData,
      VW = WW => {
        switch (WW) {
          case "u8-planar":
            return "u8";
          case "s16-planar":
            return "s16";
          case "s32-planar":
            return "s32";
          case "f32-planar":
            return "f32";
          default:
            return WW
        }
      },
      pW = (WW, iW, OW, EW, NW, PW, LW, cW) => {
        const wW = vW(OW),
          tW = gW(EW),
          ZW = dW(OW),
          xW = dW(EW),
          lW = eW(OW);
        if (eW(EW))
          if (lW) {
            const EW = new ArrayBuffer(cW * ZW),
              NW = (0, mW.od)(EW);
            WW.copyTo(EW, {
              planeIndex: PW,
              frameOffset: LW,
              frameCount: cW,
              format: OW
            });
            for (let WW = 0; WW < cW; WW++) {
              tW(iW, WW * xW, wW(NW, WW * ZW))
            }
          } else {
            const EW = new ArrayBuffer(cW * NW * ZW),
              lW = (0, mW.od)(EW);
            WW.copyTo(EW, {
              planeIndex: 0,
              frameOffset: LW,
              frameCount: cW,
              format: OW
            });
            for (let WW = 0; WW < cW; WW++) {
              tW(iW, WW * xW, wW(lW, (WW * NW + PW) * ZW))
            }
          }
        else if (lW) {
          const EW = new ArrayBuffer(cW * ZW),
            PW = (0, mW.od)(EW);
          for (let mW = 0; mW < NW; mW++) {
            WW.copyTo(EW, {
              planeIndex: mW,
              frameOffset: LW,
              frameCount: cW,
              format: OW
            });
            for (let WW = 0; WW < cW; WW++) {
              tW(iW, (WW * NW + mW) * xW, wW(PW, WW * ZW))
            }
          }
        } else {
          const EW = new ArrayBuffer(cW * NW * ZW),
            PW = (0, mW.od)(EW);
          WW.copyTo(EW, {
            planeIndex: 0,
            frameOffset: LW,
            frameCount: cW,
            format: OW
          });
          for (let WW = 0; WW < cW; WW++)
            for (let OW = 0; OW < NW; OW++) {
              const mW = WW * NW + OW;
              tW(iW, mW * xW, wW(PW, mW * ZW))
            }
        }
      },
      fW = (WW, iW) => {
        const OW = WW.allocationSize({
            format: iW,
            planeIndex: 0
          }),
          mW = new ArrayBuffer(OW);
        return WW.copyTo(mW, {
          format: iW,
          planeIndex: 0
        }), new oW({
          data: mW,
          format: iW,
          numberOfChannels: WW.numberOfChannels,
          sampleRate: WW.sampleRate,
          timestamp: WW.timestamp,
          duration: WW.duration
        })
      }
  },
  41171: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      d: () => wW,
      g: () => NW,
      j: () => cW
    });
    const mW = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
      EW = /^WEBVTT(.|\n)*?\n{2}/,
      NW = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
    class PW {
      constructor(WW) {
        this.preambleText = null, this.preambleEmitted = !1, this.options = WW
      }
      parse(WW) {
        let iW;
        if (WW = WW.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), mW.lastIndex = 0, !this.preambleText) {
          if (!EW.test(WW)) throw new Error("WebVTT preamble incorrect.");
          iW = mW.exec(WW);
          const OW = WW.slice(0, iW?.index ?? WW.length).trimEnd();
          if (!OW) throw new Error("No WebVTT preamble provided.");
          this.preambleText = OW, iW && (WW = WW.slice(iW.index), mW.lastIndex = 0)
        }
        for (; iW = mW.exec(WW);) {
          const OW = WW.slice(0, iW.index),
            EW = iW[1],
            NW = iW.index + iW[0].length,
            PW = WW.indexOf("\n", NW) + 1,
            LW = WW.slice(NW, PW).trim();
          let wW = WW.indexOf("\n\n", NW); - 1 === wW && (wW = WW.length);
          const tW = cW(iW[2]),
            ZW = cW(iW[3]) - tW,
            xW = WW.slice(PW, wW).trim();
          WW = WW.slice(wW).trimStart(), mW.lastIndex = 0;
          const lW = {
              timestamp: tW / 1e3,
              duration: ZW / 1e3,
              text: xW,
              identifier: EW,
              settings: LW,
              notes: OW
            },
            AW = {};
          this.preambleEmitted || (AW.config = {
            description: this.preambleText
          }, this.preambleEmitted = !0), this.options.output(lW, AW)
        }
      }
    }
    const LW = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
      cW = WW => {
        const iW = LW.exec(WW);
        if (!iW) throw new Error("Expected match.");
        return 36e5 * Number(iW[1] || "0") + 6e4 * Number(iW[2]) + 1e3 * Number(iW[3]) + Number(iW[4])
      },
      wW = WW => {
        const iW = Math.floor(WW / 36e5),
          OW = Math.floor(WW % 36e5 / 6e4),
          mW = Math.floor(WW % 6e4 / 1e3),
          EW = WW % 1e3;
        return iW.toString().padStart(2, "0") + ":" + OW.toString().padStart(2, "0") + ":" + mW.toString().padStart(2, "0") + "." + EW.toString().padStart(3, "0")
      }
  },
  41179: (WW, iW, OW) => {
    var mW;
    OW.d(iW, {
      b: () => wW,
      f: () => tW,
      j: () => xW,
      n: () => PW
    });
    var EW = OW(41185),
      NW = OW(41127);
    "undefined" !== typeof(mW || (mW = OW.t(EW, 2))) && (mW || (mW = OW.t(EW, 2)));
    class PW extends NW.n {
      constructor() {
        super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
      }
      _setMonotonicity(WW) {
        !1 !== this._monotonicity && (this._monotonicity = WW)
      }
      _dispatchWrite(WW, iW) {
        this.onwrite?.(WW, iW), this._emit("write", {
          start: WW,
          end: iW
        })
      }
      slice(WW) {
        if (!Number.isInteger(WW) || WW < 0) throw new TypeError("offset must be a non-negative integer.");
        return new ZW(this, WW)
      }
    }
    const LW = 65536,
      cW = 2 ** 32;
    class wW extends PW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (super(), this.buffer = null, this._maxPos = 0, !WW || "object" !== typeof WW) throw new TypeError("BufferTarget options, when provided, must be an object.");
        if (void 0 !== WW.onFinalize && "function" !== typeof WW.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        if (this._options = WW, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
          this._buffer = new ArrayBuffer(LW, {
            maxByteLength: cW
          })
        } catch {
          this._buffer = new ArrayBuffer(LW), this._supportsResize = !1
        } else this._buffer = new ArrayBuffer(LW);
        this._bytes = new Uint8Array(this._buffer)
      }
      _ensureSize(WW) {
        let iW = this._buffer.byteLength;
        for (; iW < WW;) iW *= 2;
        if (iW !== this._buffer.byteLength) {
          if (iW > cW) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
          if (this._supportsResize) this._buffer.resize(iW);
          else {
            const WW = new ArrayBuffer(iW),
              OW = new Uint8Array(WW);
            OW.set(this._bytes, 0), this._buffer = WW, this._bytes = OW
          }
        }
      }
      _start() {}
      _write(WW, iW) {
        this._ensureSize(iW + WW.byteLength), this._bytes.set(WW, iW), this._maxPos = Math.max(this._maxPos, iW + WW.byteLength), this._dispatchWrite(iW, iW + WW.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
      }
      async _close() {}
      _getSlice(WW, iW) {
        return this._bytes.slice(WW, iW)
      }
    }
    class tW extends PW {
      _start() {}
      _write(WW, iW) {
        this._dispatchWrite(iW, iW + WW.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
    }
    class ZW extends PW {
      constructor(WW, iW) {
        super(), this._baseTarget = WW, this._offset = iW
      }
      _start() {}
      _write(WW, iW) {
        this._baseTarget._write(WW, this._offset + iW), this._dispatchWrite(iW, iW + WW.byteLength)
      }
      _flush() {
        return this._baseTarget._flush()
      }
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
      _setMonotonicity(WW) {
        super._setMonotonicity(WW), this._baseTarget._setMonotonicity(WW)
      }
    }
    class xW {
      constructor(WW, iW) {
        if (this.rootPath = WW, this.getTarget = iW, "string" !== typeof WW) throw new TypeError("rootPath must be a string.");
        if ("function" !== typeof iW) throw new TypeError("getTarget must be a function.")
      }
    }
  },
  41164: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW
    });
    const mW = "Mediabunny v1.61.3"
  },
  41176: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW
    });
    var mW = OW(41127);
    class EW {
      constructor(WW, iW) {
        if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, WW._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
        this.target = WW, WW._setMonotonicity(iW), WW._writerAcquired = !0
      }
      start() {
        (0, mW.K)(!this.started), this.target._start(), this.started = !0
      }
      write(WW) {
        (0, mW.K)(this.started && !this.finalized), this.maybeTrackWrites(WW), this.target._write(WW, this.pos), this.pos += WW.byteLength
      }
      seek(WW) {
        this.pos = WW
      }
      getPos() {
        return this.pos
      }
      async flush() {
        return (0, mW.K)(this.started && !this.finalized), this.target._flush()
      }
      async finalize() {
        (0, mW.K)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
      }
      maybeTrackWrites(WW) {
        if (!this.trackedWrites) return;
        let iW = this.getPos();
        if (iW < this.trackedStart) {
          if (iW + WW.byteLength <= this.trackedStart) return;
          WW = WW.subarray(this.trackedStart - iW), iW = 0
        }
        const OW = iW + WW.byteLength - this.trackedStart;
        let mW = this.trackedWrites.byteLength;
        for (; mW < OW;) mW *= 2;
        if (mW !== this.trackedWrites.byteLength) {
          const WW = new Uint8Array(mW);
          WW.set(this.trackedWrites, 0), this.trackedWrites = WW
        }
        this.trackedWrites.set(WW, iW - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, iW + WW.byteLength)
      }
      startTrackingWrites() {
        this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
      }
      stopTrackingWrites() {
        if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
        const WW = {
          data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
          start: this.trackedStart,
          end: this.trackedEnd
        };
        return this.trackedWrites = null, WW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);