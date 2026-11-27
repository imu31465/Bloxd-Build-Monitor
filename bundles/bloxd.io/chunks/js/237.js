/*! For license information please see fl4vv.237.98d04a57.chunk.js.LICENSE.txt */
export const id = 237;
export const ids = [237];
export const modules = {
  41361: (rr, Sr, Qr) => {
    function Zr() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function Wr(rr) {
      return rr instanceof Uint8Array && (!Zr() || !Buffer.isBuffer(rr))
    }

    function ar(rr) {
      return rr instanceof ArrayBuffer
    }

    function jr(rr) {
      return !!Zr() && Buffer.isBuffer(rr)
    }
    var Ir = Qr(41364).c,
      fr = Qr(41369).b,
      Er = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    Sr.d = function(rr) {
      if (!Wr(rr) && !ar(rr) && !jr(rr)) throw new TypeError(Er);
      var Sr = !1,
        Qr = !1;
      Wr(rr) ? Sr = !0 : ar(rr) && (Qr = !0, rr = new Uint8Array(rr));
      var Zr, Ir, pr, xr = new fr(rr),
        mr = xr.maxCompressedLength();
      if (Sr ? (Zr = new Uint8Array(mr), pr = xr.compressToBuffer(Zr)) : Qr ? (Zr = new ArrayBuffer(mr), Ir = new Uint8Array(Zr), pr = xr.compressToBuffer(Ir)) : (Zr = Buffer.alloc(mr), pr = xr.compressToBuffer(Zr)), !Zr.slice) {
        var Nr = new Uint8Array(Array.prototype.slice.call(Zr, 0, pr));
        if (Sr) return Nr;
        if (Qr) return Nr.buffer;
        throw new Error("Not implemented")
      }
      return Zr.slice(0, pr)
    }
  },
  41369: (rr, Sr) => {
    var Qr = new Array(15);

    function Zr(rr, Sr) {
      return 506832829 * rr >>> Sr
    }

    function Wr(rr, Sr) {
      return rr[Sr] + (rr[Sr + 1] << 8) + (rr[Sr + 2] << 16) + (rr[Sr + 3] << 24)
    }

    function ar(rr, Sr, Qr) {
      return rr[Sr] === rr[Qr] && rr[Sr + 1] === rr[Qr + 1] && rr[Sr + 2] === rr[Qr + 2] && rr[Sr + 3] === rr[Qr + 3]
    }

    function jr(rr, Sr, Qr, Zr, Wr) {
      return Qr <= 60 ? (Zr[Wr] = Qr - 1 << 2, Wr += 1) : Qr < 256 ? (Zr[Wr] = 240, Zr[Wr + 1] = Qr - 1, Wr += 2) : (Zr[Wr] = 244, Zr[Wr + 1] = Qr - 1 & 255, Zr[Wr + 2] = Qr - 1 >>> 8, Wr += 3),
        function(rr, Sr, Qr, Zr, Wr) {
          var ar;
          for (ar = 0; ar < Wr; ar++) Qr[Zr + ar] = rr[Sr + ar]
        }(rr, Sr, Zr, Wr, Qr), Wr + Qr
    }

    function Ir(rr, Sr, Qr, Zr) {
      return Zr < 12 && Qr < 2048 ? (rr[Sr] = 1 + (Zr - 4 << 2) + (Qr >>> 8 << 5), rr[Sr + 1] = 255 & Qr, Sr + 2) : (rr[Sr] = 2 + (Zr - 1 << 2), rr[Sr + 1] = 255 & Qr, rr[Sr + 2] = Qr >>> 8, Sr + 3)
    }

    function fr(rr, Sr, Qr, Zr) {
      for (; Zr >= 68;) Sr = Ir(rr, Sr, Qr, 64), Zr -= 64;
      return Zr > 64 && (Sr = Ir(rr, Sr, Qr, 60), Zr -= 60), Ir(rr, Sr, Qr, Zr)
    }

    function Er(rr, Sr, Ir, Er, pr) {
      for (var xr = 1; 1 << xr <= Ir && xr <= 14;) xr += 1;
      var mr = 32 - (xr -= 1);
      "undefined" === typeof Qr[xr] && (Qr[xr] = new Uint16Array(1 << xr));
      var Nr, Ur = Qr[xr];
      for (Nr = 0; Nr < Ur.length; Nr++) Ur[Nr] = 0;
      var tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr = Sr + Ir,
        Or = Sr,
        Lr = Sr,
        lr = !0;
      if (Ir >= 15)
        for (tr = vr - 15, zr = Zr(Wr(rr, Sr += 1), mr); lr;) {
          er = 32, Yr = Sr;
          do {
            if (hr = zr, Kr = er >>> 5, er += 1, Yr = (Sr = Yr) + Kr, Sr > tr) {
              lr = !1;
              break
            }
            zr = Zr(Wr(rr, Yr), mr), nr = Or + Ur[hr], Ur[hr] = Sr - Or
          } while (!ar(rr, Sr, nr));
          if (!lr) break;
          pr = jr(rr, Lr, Sr - Lr, Er, pr);
          do {
            for (yr = Sr, Br = 4; Sr + Br < vr && rr[Sr + Br] === rr[nr + Br];) Br += 1;
            if (Sr += Br, pr = fr(Er, pr, yr - nr, Br), Lr = Sr, Sr >= tr) {
              lr = !1;
              break
            }
            Ur[Zr(Wr(rr, Sr - 1), mr)] = Sr - 1 - Or, nr = Or + Ur[Tr = Zr(Wr(rr, Sr), mr)], Ur[Tr] = Sr - Or
          } while (ar(rr, Sr, nr));
          if (!lr) break;
          zr = Zr(Wr(rr, Sr += 1), mr)
        }
      return Lr < vr && (pr = jr(rr, Lr, vr - Lr, Er, pr)), pr
    }

    function pr(rr) {
      this.array = rr
    }
    pr.prototype.maxCompressedLength = function() {
      var rr = this.array.length;
      return 32 + rr + Math.floor(rr / 6)
    }, pr.prototype.compressToBuffer = function(rr) {
      var Sr, Qr = this.array,
        Zr = Qr.length,
        Wr = 0,
        ar = 0;
      for (ar = function(rr, Sr, Qr) {
          do {
            Sr[Qr] = 127 & rr, (rr >>>= 7) > 0 && (Sr[Qr] += 128), Qr += 1
          } while (rr > 0);
          return Qr
        }(Zr, rr, ar); Wr < Zr;) ar = Er(Qr, Wr, Sr = Math.min(Zr - Wr, 65536), rr, ar), Wr += Sr;
      return ar
    }, Sr.b = pr
  },
  41364: (rr, Sr) => {
    var Qr = [0, 255, 65535, 16777215, 4294967295];

    function Zr(rr, Sr, Qr, Zr, Wr) {
      var ar;
      for (ar = 0; ar < Wr; ar++) Qr[Zr + ar] = rr[Sr + ar]
    }

    function Wr(rr, Sr, Qr, Zr) {
      var Wr;
      for (Wr = 0; Wr < Zr; Wr++) rr[Sr + Wr] = rr[Sr - Qr + Wr]
    }

    function ar(rr) {
      this.array = rr, this.pos = 0
    }
    ar.prototype.readUncompressedLength = function() {
      for (var rr, Sr, Qr = 0, Zr = 0; Zr < 32 && this.pos < this.array.length;) {
        if (rr = this.array[this.pos], this.pos += 1, (Sr = 127 & rr) << Zr >>> Zr !== Sr) return -1;
        if (Qr |= Sr << Zr, rr < 128) return Qr;
        Zr += 7
      }
      return -1
    }, ar.prototype.uncompressToBuffer = function(rr) {
      for (var Sr, ar, jr, Ir, fr = this.array, Er = fr.length, pr = this.pos, xr = 0; pr < fr.length;)
        if (Sr = fr[pr], pr += 1, 0 === (3 & Sr)) {
          if ((ar = 1 + (Sr >>> 2)) > 60) {
            if (pr + 3 >= Er) return !1;
            jr = ar - 60, ar = 1 + ((ar = fr[pr] + (fr[pr + 1] << 8) + (fr[pr + 2] << 16) + (fr[pr + 3] << 24)) & Qr[jr]), pr += jr
          }
          if (pr + ar > Er) return !1;
          Zr(fr, pr, rr, xr, ar), pr += ar, xr += ar
        } else {
          switch (3 & Sr) {
            case 1:
              ar = 4 + (Sr >>> 2 & 7), Ir = fr[pr] + (Sr >>> 5 << 8), pr += 1;
              break;
            case 2:
              if (pr + 1 >= Er) return !1;
              ar = 1 + (Sr >>> 2), Ir = fr[pr] + (fr[pr + 1] << 8), pr += 2;
              break;
            case 3:
              if (pr + 3 >= Er) return !1;
              ar = 1 + (Sr >>> 2), Ir = fr[pr] + (fr[pr + 1] << 8) + (fr[pr + 2] << 16) + (fr[pr + 3] << 24), pr += 4
          }
          if (0 === Ir || Ir > xr) return !1;
          Wr(rr, xr, Ir, ar), xr += ar
        } return !0
    }, Sr.c = ar
  },
  37500: rr => {
    rr.exports = function(rr, Sr, Qr, Zr) {
      var Wr = self || window;
      try {
        try {
          var ar;
          try {
            ar = new Wr.Blob([rr])
          } catch (Er) {
            (ar = new(Wr.BlobBuilder || Wr.WebKitBlobBuilder || Wr.MozBlobBuilder || Wr.MSBlobBuilder)).append(rr), ar = ar.getBlob()
          }
          var jr = Wr.URL || Wr.webkitURL,
            Ir = jr.createObjectURL(ar),
            fr = new Wr[Sr](Ir, Qr);
          return jr.revokeObjectURL(Ir), fr
        } catch (Er) {
          return new Wr[Sr]("data:application/javascript,".concat(encodeURIComponent(rr)), Qr)
        }
      } catch (Er) {
        if (!Zr) throw Error("Inline worker is not supported");
        return new Wr[Sr](Zr, Qr)
      }
    }
  },
  41488: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      e: () => Wr,
      h: () => Er,
      i: () => Nr,
      m: () => jr,
      q: () => Ur
    });
    var Zr = Qr(41493);
    const Wr = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
      ar = [-1, 1, 2, 3, 4, 5, 6, 8],
      jr = rr => {
        if (!rr || rr.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
        const Sr = new Zr.b(rr),
          Qr = Ir(Sr),
          {
            frequencyIndex: Wr,
            sampleRate: jr
          } = fr(Sr),
          Er = Sr.readBits(4);
        let pr = null;
        Er >= 1 && Er <= 7 && (pr = ar[Er]);
        let xr = Qr,
          mr = !1,
          Nr = jr;
        if (5 === Qr || 29 === Qr) mr = 29 === Qr, Nr = fr(Sr).sampleRate, xr = Ir(Sr), 22 === xr && Sr.skipBits(4);
        else
          for (; Sr.getBitsLeft() > 15;) {
            const rr = Sr.pos;
            if (695 === Sr.readBits(11)) {
              5 === Ir(Sr) && Sr.readBits(1) && (Nr = fr(Sr).sampleRate, Sr.getBitsLeft() > 11 && 1352 === Sr.readBits(11) && (mr = !!Sr.readBits(1)));
              break
            }
            Sr.pos = rr + 1
          }
        return null !== pr && pr > 1 && (mr = !1), {
          objectType: Qr,
          coreObjectType: xr,
          frequencyIndex: Wr,
          channelConfiguration: Er,
          outputSampleRate: Nr,
          outputNumberOfChannels: mr && 1 === pr ? 2 : pr
        }
      },
      Ir = rr => {
        const Sr = rr.readBits(5);
        return 31 === Sr ? 32 + rr.readBits(6) : Sr
      },
      fr = rr => {
        const Sr = rr.readBits(4);
        return 15 === Sr ? {
          frequencyIndex: Sr,
          sampleRate: rr.readBits(24)
        } : {
          frequencyIndex: Sr,
          sampleRate: Sr < Wr.length ? Wr[Sr] : null
        }
      },
      Er = rr => {
        const Sr = 5 === rr.objectType || 29 === rr.objectType,
          Qr = 29 === rr.objectType,
          Wr = Sr ? rr.outputSampleRate / 2 : rr.outputSampleRate,
          jr = Qr ? 1 : rr.outputNumberOfChannels,
          Ir = ar.indexOf(jr);
        if (-1 === Ir) throw new TypeError(`Unsupported number of channels: ${rr.outputNumberOfChannels}`);
        let fr = 16;
        rr.objectType >= 32 && (fr += 6), 15 === mr(Wr) && (fr += 24), Sr && (fr += 9, 15 === mr(rr.outputSampleRate) && (fr += 24));
        const Er = Math.ceil(fr / 8),
          Nr = new Uint8Array(Er),
          Ur = new Zr.b(Nr);
        return pr(Ur, rr.objectType), xr(Ur, Wr), Ur.writeBits(4, Ir), Sr && (xr(Ur, rr.outputSampleRate), pr(Ur, 2)), Ur.writeBits(3, 0), Nr
      },
      pr = (rr, Sr) => {
        Sr < 32 ? rr.writeBits(5, Sr) : (rr.writeBits(5, 31), rr.writeBits(6, Sr - 32))
      },
      xr = (rr, Sr) => {
        const Qr = mr(Sr);
        rr.writeBits(4, Qr), 15 === Qr && rr.writeBits(24, Sr)
      },
      mr = rr => {
        const Sr = Wr.indexOf(rr);
        return -1 === Sr ? 15 : Sr
      },
      Nr = rr => {
        const Sr = new Uint8Array(7),
          Qr = new Zr.b(Sr),
          {
            coreObjectType: Wr,
            frequencyIndex: ar,
            channelConfiguration: jr
          } = rr,
          Ir = Wr - 1;
        return Qr.writeBits(12, 4095), Qr.writeBits(1, 0), Qr.writeBits(2, 0), Qr.writeBits(1, 1), Qr.writeBits(2, Ir), Qr.writeBits(4, ar), Qr.writeBits(1, 0), Qr.writeBits(3, jr), Qr.writeBits(1, 0), Qr.writeBits(1, 0), Qr.writeBits(1, 0), Qr.writeBits(1, 0), Qr.skipBits(13), Qr.writeBits(11, 2047), Qr.writeBits(2, 0), {
          header: Sr,
          bitstream: Qr
        }
      },
      Ur = (rr, Sr) => {
        rr.pos = 30, rr.writeBits(13, Sr)
      }
  },
  41493: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      constructor(rr) {
        this.bytes = rr, this.pos = 0
      }
      seekToByte(rr) {
        this.pos = 8 * rr
      }
      readBit() {
        const rr = Math.floor(this.pos / 8),
          Sr = this.bytes[rr] ?? 0,
          Qr = 7 - (7 & this.pos),
          Zr = (Sr & 1 << Qr) >> Qr;
        return this.pos++, Zr
      }
      readBits(rr) {
        if (1 === rr) return this.readBit();
        let Sr = 0;
        for (let Qr = 0; Qr < rr; Qr++) Sr <<= 1, Sr |= this.readBit();
        return Sr
      }
      writeBits(rr, Sr) {
        const Qr = this.pos + rr;
        for (let Zr = this.pos; Zr < Qr; Zr++) {
          const rr = Math.floor(Zr / 8);
          let Wr = this.bytes[rr];
          const ar = 7 - (7 & Zr);
          Wr &= ~(1 << ar), Wr |= (Sr & 1 << Qr - Zr - 1) >> Qr - Zr - 1 << ar, this.bytes[rr] = Wr
        }
        this.pos = Qr
      }
      copyBits(rr, Sr) {
        let Qr = 0;
        for (; Qr < rr - 7; Qr += 8) this.writeBits(8, Sr.readBits(8));
        const Zr = rr - Qr;
        Zr > 0 && this.writeBits(Zr, Sr.readBits(Zr))
      }
      readAlignedByte() {
        if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
        const rr = this.pos / 8,
          Sr = this.bytes[rr] ?? 0;
        return this.pos += 8, Sr
      }
      skipBits(rr) {
        this.pos += rr
      }
      getBitsLeft() {
        return 8 * this.bytes.length - this.pos
      }
      clone() {
        const rr = new Zr(this.bytes);
        return rr.pos = this.pos, rr
      }
    }
  },
  41506: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ur,
      f: () => fr,
      j: () => rS,
      n: () => Dr,
      r: () => Er,
      s: () => wr,
      w: () => US,
      y: () => zr,
      C: () => Yr,
      D: () => dr,
      E: () => Kr,
      I: () => Mr,
      K: () => Jr,
      P: () => ir,
      O: () => nr,
      Q: () => Lr,
      T: () => Ur,
      U: () => Or,
      Y: () => Ar,
      $: () => mr,
      db: () => Nr,
      eb: () => sr,
      gb: () => xS,
      ib: () => QS,
      lb: () => br,
      ob: () => cr,
      pb: () => or,
      tb: () => er,
      xb: () => Cr
    });
    var Zr = Qr(41502),
      Wr = Qr(41474),
      ar = Qr(41512);
    const jr = [48e3, 44100, 32e3],
      Ir = [24e3, 22050, 16e3];
    var fr, Er, pr = Qr(41493),
      xr = Qr(41521);
    ! function(rr) {
      rr[rr.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", rr[rr.SLICE_DPA = 2] = "SLICE_DPA", rr[rr.SLICE_DPB = 3] = "SLICE_DPB", rr[rr.SLICE_DPC = 4] = "SLICE_DPC", rr[rr.IDR = 5] = "IDR", rr[rr.SEI = 6] = "SEI", rr[rr.SPS = 7] = "SPS", rr[rr.PPS = 8] = "PPS", rr[rr.AUD = 9] = "AUD", rr[rr.SPS_EXT = 13] = "SPS_EXT"
    }(fr || (fr = {})),
    function(rr) {
      rr[rr.RASL_N = 8] = "RASL_N", rr[rr.RASL_R = 9] = "RASL_R", rr[rr.BLA_W_LP = 16] = "BLA_W_LP", rr[rr.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", rr[rr.VPS_NUT = 32] = "VPS_NUT", rr[rr.SPS_NUT = 33] = "SPS_NUT", rr[rr.PPS_NUT = 34] = "PPS_NUT", rr[rr.AUD_NUT = 35] = "AUD_NUT", rr[rr.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", rr[rr.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT"
    }(Er || (Er = {}));
    const mr = function*(rr) {
        let Sr = 0,
          Qr = -1;
        for (; Sr < rr.length - 2;) {
          const Zr = rr.indexOf(0, Sr);
          if (-1 === Zr || Zr >= rr.length - 2) break;
          Sr = Zr;
          let Wr = 0;
          Sr + 3 < rr.length && 0 === rr[Sr + 1] && 0 === rr[Sr + 2] && 1 === rr[Sr + 3] ? Wr = 4 : 0 === rr[Sr + 1] && 1 === rr[Sr + 2] && (Wr = 3), 0 !== Wr ? (-1 !== Qr && Sr > Qr && (yield {
            offset: Qr,
            length: Sr - Qr
          }), Qr = Sr + Wr, Sr = Qr) : Sr++
        } - 1 !== Qr && Qr < rr.length && (yield {
          offset: Qr,
          length: rr.length - Qr
        })
      },
      Nr = function*(rr, Sr) {
        let Qr = 0;
        const Zr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength);
        for (; Qr + Sr <= rr.length;) {
          let rr;
          1 === Sr ? rr = Zr.getUint8(Qr) : 2 === Sr ? rr = Zr.getUint16(Qr, !1) : 3 === Sr ? rr = (0, Wr.rb)(Zr, Qr, !1) : ((0, Wr.I)(4 === Sr), rr = Zr.getUint32(Qr, !1)), Qr += Sr, yield {
            offset: Qr,
            length: rr
          }, Qr += rr
        }
      },
      Ur = rr => 31 & rr,
      tr = rr => {
        const Sr = [],
          Qr = rr.length;
        for (let Zr = 0; Zr < Qr; Zr++) Zr + 2 < Qr && 0 === rr[Zr] && 0 === rr[Zr + 1] && 3 === rr[Zr + 2] ? (Sr.push(0, 0), Zr += 2) : Sr.push(rr[Zr]);
        return new Uint8Array(Sr)
      },
      hr = new Uint8Array([0, 0, 0, 1]),
      zr = rr => {
        const Sr = rr.reduce(((rr, Sr) => rr + hr.byteLength + Sr.byteLength), 0),
          Qr = new Uint8Array(Sr);
        let Zr = 0;
        for (const Wr of rr) Qr.set(hr, Zr), Zr += hr.byteLength, Qr.set(Wr, Zr), Zr += Wr.byteLength;
        return Qr
      },
      Yr = (rr, Sr) => {
        const Qr = rr.reduce(((rr, Qr) => rr + Sr + Qr.byteLength), 0),
          Zr = new Uint8Array(Qr);
        let ar = 0;
        for (const jr of rr) {
          const rr = new DataView(Zr.buffer, Zr.byteOffset, Zr.byteLength);
          switch (Sr) {
            case 1:
              rr.setUint8(ar, jr.byteLength);
              break;
            case 2:
              rr.setUint16(ar, jr.byteLength, !1);
              break;
            case 3:
              (0, Wr.Rc)(rr, ar, jr.byteLength, !1);
              break;
            case 4:
              rr.setUint32(ar, jr.byteLength, !1)
          }
          ar += Sr, Zr.set(jr, ar), ar += jr.byteLength
        }
        return Zr
      },
      nr = rr => {
        try {
          const Sr = [],
            Qr = [],
            Zr = [];
          for (const Wr of mr(rr)) {
            const ar = rr.subarray(Wr.offset, Wr.offset + Wr.length),
              jr = Ur(ar[0]);
            jr === fr.SPS ? Sr.push(ar) : jr === fr.PPS ? Qr.push(ar) : jr === fr.SPS_EXT && Zr.push(ar)
          }
          if (0 === Sr.length) return null;
          if (0 === Qr.length) return null;
          const ar = Sr[0],
            jr = Br(ar);
          (0, Wr.I)(null !== jr);
          const Ir = 100 === jr.profileIdc || 110 === jr.profileIdc || 122 === jr.profileIdc || 144 === jr.profileIdc;
          return {
            configurationVersion: 1,
            avcProfileIndication: jr.profileIdc,
            profileCompatibility: jr.constraintFlags,
            avcLevelIndication: jr.levelIdc,
            lengthSizeMinusOne: 3,
            sequenceParameterSets: Sr,
            pictureParameterSets: Qr,
            chromaFormat: Ir ? jr.chromaFormatIdc : null,
            bitDepthLumaMinus8: Ir ? jr.bitDepthLumaMinus8 : null,
            bitDepthChromaMinus8: Ir ? jr.bitDepthChromaMinus8 : null,
            sequenceParameterSetExt: Ir ? Zr : null
          }
        } catch (Sr) {
          return ar.e._error("Error building AVC Decoder Configuration Record:", Sr), null
        }
      },
      er = rr => {
        const Sr = [];
        Sr.push(rr.configurationVersion), Sr.push(rr.avcProfileIndication), Sr.push(rr.profileCompatibility), Sr.push(rr.avcLevelIndication), Sr.push(252 | 3 & rr.lengthSizeMinusOne), Sr.push(224 | 31 & rr.sequenceParameterSets.length);
        for (const Qr of rr.sequenceParameterSets) {
          const rr = Qr.byteLength;
          Sr.push(rr >> 8), Sr.push(255 & rr);
          for (let Zr = 0; Zr < rr; Zr++) Sr.push(Qr[Zr])
        }
        Sr.push(rr.pictureParameterSets.length);
        for (const Qr of rr.pictureParameterSets) {
          const rr = Qr.byteLength;
          Sr.push(rr >> 8), Sr.push(255 & rr);
          for (let Zr = 0; Zr < rr; Zr++) Sr.push(Qr[Zr])
        }
        if ((100 === rr.avcProfileIndication || 110 === rr.avcProfileIndication || 122 === rr.avcProfileIndication || 144 === rr.avcProfileIndication) && null !== rr.chromaFormat) {
          (0, Wr.I)(null !== rr.bitDepthLumaMinus8), (0, Wr.I)(null !== rr.bitDepthChromaMinus8), (0, Wr.I)(null !== rr.sequenceParameterSetExt), Sr.push(252 | 3 & rr.chromaFormat), Sr.push(248 | 7 & rr.bitDepthLumaMinus8), Sr.push(248 | 7 & rr.bitDepthChromaMinus8), Sr.push(rr.sequenceParameterSetExt.length);
          for (const Qr of rr.sequenceParameterSetExt) {
            const rr = Qr.byteLength;
            Sr.push(rr >> 8), Sr.push(255 & rr);
            for (let Zr = 0; Zr < rr; Zr++) Sr.push(Qr[Zr])
          }
        }
        return new Uint8Array(Sr)
      },
      Kr = rr => {
        try {
          const Sr = (0, Wr.ed)(rr);
          let Qr = 0;
          const Zr = Sr.getUint8(Qr++),
            ar = Sr.getUint8(Qr++),
            jr = Sr.getUint8(Qr++),
            Ir = Sr.getUint8(Qr++),
            fr = 3 & Sr.getUint8(Qr++),
            Er = 31 & Sr.getUint8(Qr++),
            pr = [];
          for (let Wr = 0; Wr < Er; Wr++) {
            const Zr = Sr.getUint16(Qr, !1);
            Qr += 2, pr.push(rr.subarray(Qr, Qr + Zr)), Qr += Zr
          }
          const xr = Sr.getUint8(Qr++),
            mr = [];
          for (let Wr = 0; Wr < xr; Wr++) {
            const Zr = Sr.getUint16(Qr, !1);
            Qr += 2, mr.push(rr.subarray(Qr, Qr + Zr)), Qr += Zr
          }
          const Nr = {
            configurationVersion: Zr,
            avcProfileIndication: ar,
            profileCompatibility: jr,
            avcLevelIndication: Ir,
            lengthSizeMinusOne: fr,
            sequenceParameterSets: pr,
            pictureParameterSets: mr,
            chromaFormat: null,
            bitDepthLumaMinus8: null,
            bitDepthChromaMinus8: null,
            sequenceParameterSetExt: null
          };
          if ((100 === ar || 110 === ar || 122 === ar || 144 === ar) && Qr + 4 <= rr.length) {
            const Zr = 3 & Sr.getUint8(Qr++),
              Wr = 7 & Sr.getUint8(Qr++),
              ar = 7 & Sr.getUint8(Qr++),
              jr = Sr.getUint8(Qr++);
            Nr.chromaFormat = Zr, Nr.bitDepthLumaMinus8 = Wr, Nr.bitDepthChromaMinus8 = ar;
            const Ir = [];
            for (let fr = 0; fr < jr; fr++) {
              const Zr = Sr.getUint16(Qr, !1);
              Qr += 2, Ir.push(rr.subarray(Qr, Qr + Zr)), Qr += Zr
            }
            Nr.sequenceParameterSetExt = Ir
          }
          return Nr
        } catch (Sr) {
          return ar.e._error("Error deserializing AVC Decoder Configuration Record:", Sr), null
        }
      },
      yr = {
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
      Br = rr => {
        try {
          const Sr = tr(rr),
            Qr = new pr.b(Sr);
          Qr.skipBits(1), Qr.skipBits(2);
          if (7 !== Qr.readBits(5)) return null;
          const ar = Qr.readAlignedByte(),
            jr = Qr.readAlignedByte(),
            Ir = Qr.readAlignedByte();
          (0, Wr.wc)(Qr);
          let fr = 1,
            Er = 0,
            xr = 0,
            mr = 0;
          if (100 === ar || 110 === ar || 122 === ar || 244 === ar || 44 === ar || 83 === ar || 86 === ar || 118 === ar || 128 === ar) {
            fr = (0, Wr.wc)(Qr), 3 === fr && (mr = Qr.readBits(1)), Er = (0, Wr.wc)(Qr), xr = (0, Wr.wc)(Qr), Qr.skipBits(1);
            if (Qr.readBits(1))
              for (let rr = 0; rr < (3 !== fr ? 8 : 12); rr++) {
                if (Qr.readBits(1)) {
                  const Sr = rr < 6 ? 16 : 64;
                  let Zr = 8,
                    ar = 8;
                  for (let rr = 0; rr < Sr; rr++) {
                    if (0 !== ar) {
                      ar = (Zr + (0, Wr.Ac)(Qr) + 256) % 256
                    }
                    Zr = 0 === ar ? Zr : ar
                  }
                }
              }
          }(0, Wr.wc)(Qr);
          const Nr = (0, Wr.wc)(Qr);
          if (0 === Nr)(0, Wr.wc)(Qr);
          else if (1 === Nr) {
            Qr.skipBits(1), (0, Wr.Ac)(Qr), (0, Wr.Ac)(Qr);
            const rr = (0, Wr.wc)(Qr);
            for (let Sr = 0; Sr < rr; Sr++)(0, Wr.Ac)(Qr)
          }(0, Wr.wc)(Qr), Qr.skipBits(1);
          const Ur = (0, Wr.wc)(Qr),
            hr = (0, Wr.wc)(Qr),
            zr = 16 * (Ur + 1),
            Yr = 16 * (hr + 1);
          let nr = zr,
            er = Yr;
          const Kr = Qr.readBits(1);
          Kr || Qr.skipBits(1), Qr.skipBits(1);
          if (Qr.readBits(1)) {
            const rr = (0, Wr.wc)(Qr),
              Sr = (0, Wr.wc)(Qr),
              Zr = (0, Wr.wc)(Qr),
              ar = (0, Wr.wc)(Qr);
            let jr, Ir;
            if (0 === (0 === mr ? fr : 0)) jr = 1, Ir = 2 - Kr;
            else {
              jr = 3 === fr ? 1 : 2, Ir = (1 === fr ? 2 : 1) * (2 - Kr)
            }
            nr -= jr * (rr + Sr), er -= Ir * (Zr + ar)
          }
          let Br = 2,
            vr = 2,
            Or = 2,
            Lr = 0,
            lr = {
              num: 1,
              den: 1
            },
            Xr = null,
            Pr = null,
            Hr = null,
            qr = null;
          const Rr = Qr.pos;
          if (Qr.readBits(1)) {
            if (Qr.readBits(1)) {
              const rr = Qr.readBits(8);
              if (255 === rr) lr = {
                num: Qr.readBits(16),
                den: Qr.readBits(16)
              };
              else {
                const Sr = yr[rr];
                Sr && (lr = Sr)
              }
            }
            Qr.readBits(1) && Qr.skipBits(1);
            if (Qr.readBits(1)) {
              Qr.skipBits(3), Lr = Qr.readBits(1);
              Qr.readBits(1) && (Br = Qr.readBits(8), vr = Qr.readBits(8), Or = Qr.readBits(8))
            }
            Qr.readBits(1) && ((0, Wr.wc)(Qr), (0, Wr.wc)(Qr));
            Qr.readBits(1) && (Qr.skipBits(32), Qr.skipBits(32), Qr.skipBits(1));
            const rr = Qr.readBits(1);
            rr && Tr(Qr);
            const Sr = Qr.readBits(1);
            Sr && Tr(Qr), (rr || Sr) && Qr.skipBits(1), Qr.skipBits(1), Hr = Qr.pos, qr = Qr.readBits(1), qr && (Qr.skipBits(1), (0, Wr.wc)(Qr), (0, Wr.wc)(Qr), (0, Wr.wc)(Qr), (0, Wr.wc)(Qr), Xr = (0, Wr.wc)(Qr), Pr = (0, Wr.wc)(Qr))
          }
          if (null === Xr) {
            (0, Wr.I)(null === Pr);
            if (44 !== ar && 86 !== ar && 100 !== ar && 110 !== ar && 122 !== ar && 244 !== ar || !(16 & jr)) {
              const rr = Ur + 1,
                Sr = (2 - Kr) * (hr + 1),
                Qr = Zr.i.find((rr => rr.level >= Ir)) ?? (0, Wr.Yb)(Zr.i),
                ar = Math.min(Math.floor(Qr.maxDpbMbs / (rr * Sr)), 16);
              Xr = ar, Pr = ar
            } else Xr = 0, Pr = 0
          }
          return (0, Wr.I)(null !== Pr), {
            emulationUnpreventedBytes: Sr,
            profileIdc: ar,
            constraintFlags: jr,
            levelIdc: Ir,
            frameMbsOnlyFlag: Kr,
            chromaFormatIdc: fr,
            bitDepthLumaMinus8: Er,
            bitDepthChromaMinus8: xr,
            codedWidth: zr,
            codedHeight: Yr,
            displayWidth: nr,
            displayHeight: er,
            pixelAspectRatio: lr,
            colourPrimaries: Br,
            matrixCoefficients: Or,
            transferCharacteristics: vr,
            fullRangeFlag: Lr,
            numReorderFrames: Xr,
            maxDecFrameBuffering: Pr,
            vuiParametersFlagBitOffset: Rr,
            bitstreamRestrictionFlagBitOffset: Hr,
            bitstreamRestrictionFlag: qr
          }
        } catch (Sr) {
          return ar.e._error("Error parsing AVC SPS:", Sr), null
        }
      },
      Tr = rr => {
        const Sr = (0, Wr.wc)(rr);
        rr.skipBits(4), rr.skipBits(4);
        for (let Qr = 0; Qr <= Sr; Qr++)(0, Wr.wc)(rr), (0, Wr.wc)(rr), rr.skipBits(1);
        rr.skipBits(5), rr.skipBits(5), rr.skipBits(5), rr.skipBits(5)
      },
      vr = (rr, Sr) => {
        if (Sr.description) {
          const Qr = 3 & (0, Wr.id)(Sr.description)[21];
          return Nr(rr, Qr + 1)
        }
        return mr(rr)
      },
      Or = rr => rr >> 1 & 63,
      Lr = rr => {
        try {
          const Sr = [],
            Qr = [],
            Zr = [],
            jr = [];
          for (const Wr of mr(rr)) {
            const ar = rr.subarray(Wr.offset, Wr.offset + Wr.length),
              Ir = Or(ar[0]);
            Ir === Er.VPS_NUT ? Sr.push(ar) : Ir === Er.SPS_NUT ? Qr.push(ar) : Ir === Er.PPS_NUT ? Zr.push(ar) : Ir !== Er.PREFIX_SEI_NUT && Ir !== Er.SUFFIX_SEI_NUT || jr.push(ar)
          }
          if (0 === Qr.length || 0 === Zr.length) return null;
          const Ir = (rr => {
            try {
              const Sr = new pr.b(tr(rr));
              Sr.skipBits(16), Sr.readBits(4);
              const Qr = Sr.readBits(3),
                Zr = Sr.readBits(1),
                {
                  general_profile_space: ar,
                  general_tier_flag: jr,
                  general_profile_idc: Ir,
                  general_profile_compatibility_flags: fr,
                  general_constraint_indicator_flags: Er,
                  general_level_idc: xr
                } = lr(Sr, Qr);
              (0, Wr.wc)(Sr);
              const mr = (0, Wr.wc)(Sr);
              let Nr = 0;
              3 === mr && (Nr = Sr.readBits(1));
              const Ur = (0, Wr.wc)(Sr),
                hr = (0, Wr.wc)(Sr);
              let zr = Ur,
                Yr = hr;
              if (Sr.readBits(1)) {
                const rr = (0, Wr.wc)(Sr),
                  Qr = (0, Wr.wc)(Sr),
                  Zr = (0, Wr.wc)(Sr),
                  ar = (0, Wr.wc)(Sr);
                let jr = 1,
                  Ir = 1;
                const fr = 0 === Nr ? mr : 0;
                1 === fr ? (jr = 2, Ir = 2) : 2 === fr && (jr = 2, Ir = 1), zr -= (rr + Qr) * jr, Yr -= (Zr + ar) * Ir
              }
              const nr = (0, Wr.wc)(Sr),
                er = (0, Wr.wc)(Sr);
              (0, Wr.wc)(Sr);
              const Kr = Sr.readBits(1);
              let yr = 0;
              for (let rr = Kr ? 0 : Qr; rr <= Qr; rr++)(0, Wr.wc)(Sr), yr = (0, Wr.wc)(Sr), (0, Wr.wc)(Sr);
              (0, Wr.wc)(Sr), (0, Wr.wc)(Sr), (0, Wr.wc)(Sr), (0, Wr.wc)(Sr), (0, Wr.wc)(Sr), (0, Wr.wc)(Sr), Sr.readBits(1) && Sr.readBits(1) && Xr(Sr), Sr.skipBits(1), Sr.skipBits(1), Sr.readBits(1) && (Sr.skipBits(4), Sr.skipBits(4), (0, Wr.wc)(Sr), (0, Wr.wc)(Sr), Sr.skipBits(1));
              const Br = (0, Wr.wc)(Sr);
              if (Pr(Sr, Br), Sr.readBits(1)) {
                const rr = (0, Wr.wc)(Sr);
                for (let Qr = 0; Qr < rr; Qr++)(0, Wr.wc)(Sr), Sr.skipBits(1)
              }
              Sr.skipBits(1), Sr.skipBits(1);
              let Tr = 2,
                vr = 2,
                Or = 2,
                Lr = 0,
                Hr = 0,
                Rr = {
                  num: 1,
                  den: 1
                };
              if (Sr.readBits(1)) {
                const rr = qr(Sr, Qr);
                Rr = rr.pixelAspectRatio, Tr = rr.colourPrimaries, vr = rr.transferCharacteristics, Or = rr.matrixCoefficients, Lr = rr.fullRangeFlag, Hr = rr.minSpatialSegmentationIdc
              }
              return {
                displayWidth: zr,
                displayHeight: Yr,
                pixelAspectRatio: Rr,
                colourPrimaries: Tr,
                transferCharacteristics: vr,
                matrixCoefficients: Or,
                fullRangeFlag: Lr,
                maxDecFrameBuffering: yr + 1,
                spsMaxSubLayersMinus1: Qr,
                spsTemporalIdNestingFlag: Zr,
                generalProfileSpace: ar,
                generalTierFlag: jr,
                generalProfileIdc: Ir,
                generalProfileCompatibilityFlags: fr,
                generalConstraintIndicatorFlags: Er,
                generalLevelIdc: xr,
                chromaFormatIdc: mr,
                bitDepthLumaMinus8: nr,
                bitDepthChromaMinus8: er,
                minSpatialSegmentationIdc: Hr
              }
            } catch (Sr) {
              return ar.e._error("Error parsing HEVC SPS:", Sr), null
            }
          })(Qr[0]);
          if (!Ir) return null;
          let fr = 0;
          if (Zr.length > 0) {
            const rr = Zr[0],
              Sr = new pr.b(tr(rr));
            Sr.skipBits(16), (0, Wr.wc)(Sr), (0, Wr.wc)(Sr), Sr.skipBits(1), Sr.skipBits(1), Sr.skipBits(3), Sr.skipBits(1), Sr.skipBits(1), (0, Wr.wc)(Sr), (0, Wr.wc)(Sr), (0, Wr.Ac)(Sr), Sr.skipBits(1), Sr.skipBits(1), Sr.readBits(1) && (0, Wr.wc)(Sr), (0, Wr.Ac)(Sr), (0, Wr.Ac)(Sr), Sr.skipBits(1), Sr.skipBits(1), Sr.skipBits(1), Sr.skipBits(1);
            const Qr = Sr.readBits(1),
              ar = Sr.readBits(1);
            fr = Qr || ar ? Qr && !ar ? 2 : !Qr && ar ? 3 : 0 : 0
          }
          const xr = [...Sr.length ? [{
            arrayCompleteness: 1,
            nalUnitType: Er.VPS_NUT,
            nalUnits: Sr
          }] : [], ...Qr.length ? [{
            arrayCompleteness: 1,
            nalUnitType: Er.SPS_NUT,
            nalUnits: Qr
          }] : [], ...Zr.length ? [{
            arrayCompleteness: 1,
            nalUnitType: Er.PPS_NUT,
            nalUnits: Zr
          }] : [], ...jr.length ? [{
            arrayCompleteness: 1,
            nalUnitType: Or(jr[0][0]),
            nalUnits: jr
          }] : []];
          return {
            configurationVersion: 1,
            generalProfileSpace: Ir.generalProfileSpace,
            generalTierFlag: Ir.generalTierFlag,
            generalProfileIdc: Ir.generalProfileIdc,
            generalProfileCompatibilityFlags: Ir.generalProfileCompatibilityFlags,
            generalConstraintIndicatorFlags: Ir.generalConstraintIndicatorFlags,
            generalLevelIdc: Ir.generalLevelIdc,
            minSpatialSegmentationIdc: Ir.minSpatialSegmentationIdc,
            parallelismType: fr,
            chromaFormatIdc: Ir.chromaFormatIdc,
            bitDepthLumaMinus8: Ir.bitDepthLumaMinus8,
            bitDepthChromaMinus8: Ir.bitDepthChromaMinus8,
            avgFrameRate: 0,
            constantFrameRate: 0,
            numTemporalLayers: Ir.spsMaxSubLayersMinus1 + 1,
            temporalIdNested: Ir.spsTemporalIdNestingFlag,
            lengthSizeMinusOne: 3,
            arrays: xr
          }
        } catch (Sr) {
          return ar.e._error("Error building HEVC Decoder Configuration Record:", Sr), null
        }
      },
      lr = (rr, Sr) => {
        const Qr = rr.readBits(2),
          Zr = rr.readBits(1),
          Wr = rr.readBits(5);
        let ar = 0;
        for (let pr = 0; pr < 32; pr++) ar = ar << 1 | rr.readBits(1);
        const jr = new Uint8Array(6);
        for (let pr = 0; pr < 6; pr++) jr[pr] = rr.readBits(8);
        const Ir = rr.readBits(8),
          fr = [],
          Er = [];
        for (let pr = 0; pr < Sr; pr++) fr.push(rr.readBits(1)), Er.push(rr.readBits(1));
        if (Sr > 0)
          for (let pr = Sr; pr < 8; pr++) rr.skipBits(2);
        for (let pr = 0; pr < Sr; pr++) fr[pr] && rr.skipBits(88), Er[pr] && rr.skipBits(8);
        return {
          general_profile_space: Qr,
          general_tier_flag: Zr,
          general_profile_idc: Wr,
          general_profile_compatibility_flags: ar,
          general_constraint_indicator_flags: jr,
          general_level_idc: Ir
        }
      },
      Xr = rr => {
        for (let Sr = 0; Sr < 4; Sr++)
          for (let Qr = 0; Qr < (3 === Sr ? 2 : 6); Qr++) {
            if (rr.readBits(1)) {
              const Qr = Math.min(64, 1 << 4 + (Sr << 1));
              Sr > 1 && (0, Wr.Ac)(rr);
              for (let Sr = 0; Sr < Qr; Sr++)(0, Wr.Ac)(rr)
            } else(0, Wr.wc)(rr)
          }
      },
      Pr = (rr, Sr) => {
        const Qr = [];
        for (let Zr = 0; Zr < Sr; Zr++) Qr[Zr] = Hr(rr, Zr, Sr, Qr)
      },
      Hr = (rr, Sr, Qr, Zr) => {
        let ar = 0,
          jr = 0,
          Ir = 0;
        if (0 !== Sr && (jr = rr.readBits(1)), jr) {
          if (Sr === Qr) {
            Ir = Sr - ((0, Wr.wc)(rr) + 1)
          } else Ir = Sr - 1;
          rr.readBits(1), (0, Wr.wc)(rr);
          const jr = Zr[Ir] ?? 0;
          for (let Sr = 0; Sr <= jr; Sr++) {
            rr.readBits(1) || rr.readBits(1)
          }
          ar = Zr[Ir]
        } else {
          const Sr = (0, Wr.wc)(rr),
            Qr = (0, Wr.wc)(rr);
          for (let Zr = 0; Zr < Sr; Zr++)(0, Wr.wc)(rr), rr.readBits(1);
          for (let Zr = 0; Zr < Qr; Zr++)(0, Wr.wc)(rr), rr.readBits(1);
          ar = Sr + Qr
        }
        return ar
      },
      qr = (rr, Sr) => {
        let Qr = 2,
          Zr = 2,
          ar = 2,
          jr = 0,
          Ir = 0,
          fr = {
            num: 1,
            den: 1
          };
        if (rr.readBits(1)) {
          const Sr = rr.readBits(8);
          if (255 === Sr) fr = {
            num: rr.readBits(16),
            den: rr.readBits(16)
          };
          else {
            const rr = yr[Sr];
            rr && (fr = rr)
          }
        }
        return rr.readBits(1) && rr.readBits(1), rr.readBits(1) && (rr.readBits(3), jr = rr.readBits(1), rr.readBits(1) && (Qr = rr.readBits(8), Zr = rr.readBits(8), ar = rr.readBits(8))), rr.readBits(1) && ((0, Wr.wc)(rr), (0, Wr.wc)(rr)), rr.readBits(1), rr.readBits(1), rr.readBits(1), rr.readBits(1) && ((0, Wr.wc)(rr), (0, Wr.wc)(rr), (0, Wr.wc)(rr), (0, Wr.wc)(rr)), rr.readBits(1) && (rr.readBits(32), rr.readBits(32), rr.readBits(1) && (0, Wr.wc)(rr), rr.readBits(1) && Rr(rr, !0, Sr)), rr.readBits(1) && (rr.readBits(1), rr.readBits(1), rr.readBits(1), Ir = (0, Wr.wc)(rr), (0, Wr.wc)(rr), (0, Wr.wc)(rr), (0, Wr.wc)(rr), (0, Wr.wc)(rr)), {
          pixelAspectRatio: fr,
          colourPrimaries: Qr,
          transferCharacteristics: Zr,
          matrixCoefficients: ar,
          fullRangeFlag: jr,
          minSpatialSegmentationIdc: Ir
        }
      },
      Rr = (rr, Sr, Qr) => {
        let Zr = !1,
          ar = !1,
          jr = !1;
        Sr && (Zr = 1 === rr.readBits(1), ar = 1 === rr.readBits(1), (Zr || ar) && (jr = 1 === rr.readBits(1), jr && (rr.readBits(8), rr.readBits(5), rr.readBits(1), rr.readBits(5)), rr.readBits(4), rr.readBits(4), jr && rr.readBits(4), rr.readBits(5), rr.readBits(5), rr.readBits(5)));
        for (let Ir = 0; Ir <= Qr; Ir++) {
          let Sr = !0;
          1 === rr.readBits(1) || (Sr = 1 === rr.readBits(1));
          let Qr = !1;
          Sr ? (0, Wr.wc)(rr) : Qr = 1 === rr.readBits(1);
          let Ir = 1;
          if (!Qr) {
            Ir = (0, Wr.wc)(rr) + 1
          }
          Zr && gr(rr, Ir, jr), ar && gr(rr, Ir, jr)
        }
      },
      gr = (rr, Sr, Qr) => {
        for (let Zr = 0; Zr < Sr; Zr++)(0, Wr.wc)(rr), (0, Wr.wc)(rr), Qr && ((0, Wr.wc)(rr), (0, Wr.wc)(rr)), rr.readBits(1)
      },
      Cr = rr => {
        const Sr = [];
        Sr.push(rr.configurationVersion), Sr.push((3 & rr.generalProfileSpace) << 6 | (1 & rr.generalTierFlag) << 5 | 31 & rr.generalProfileIdc), Sr.push(rr.generalProfileCompatibilityFlags >>> 24 & 255), Sr.push(rr.generalProfileCompatibilityFlags >>> 16 & 255), Sr.push(rr.generalProfileCompatibilityFlags >>> 8 & 255), Sr.push(255 & rr.generalProfileCompatibilityFlags), Sr.push(...rr.generalConstraintIndicatorFlags), Sr.push(255 & rr.generalLevelIdc), Sr.push(240 | rr.minSpatialSegmentationIdc >> 8 & 15), Sr.push(255 & rr.minSpatialSegmentationIdc), Sr.push(252 | 3 & rr.parallelismType), Sr.push(252 | 3 & rr.chromaFormatIdc), Sr.push(248 | 7 & rr.bitDepthLumaMinus8), Sr.push(248 | 7 & rr.bitDepthChromaMinus8), Sr.push(rr.avgFrameRate >> 8 & 255), Sr.push(255 & rr.avgFrameRate), Sr.push((3 & rr.constantFrameRate) << 6 | (7 & rr.numTemporalLayers) << 3 | (1 & rr.temporalIdNested) << 2 | 3 & rr.lengthSizeMinusOne), Sr.push(255 & rr.arrays.length);
        for (const Qr of rr.arrays) {
          Sr.push((1 & Qr.arrayCompleteness) << 7 | 63 & Qr.nalUnitType), Sr.push(Qr.nalUnits.length >> 8 & 255), Sr.push(255 & Qr.nalUnits.length);
          for (const rr of Qr.nalUnits) {
            Sr.push(rr.length >> 8 & 255), Sr.push(255 & rr.length);
            for (let Qr = 0; Qr < rr.length; Qr++) Sr.push(rr[Qr])
          }
        }
        return new Uint8Array(Sr)
      },
      Mr = rr => {
        try {
          const Sr = (0, Wr.ed)(rr);
          let Qr = 0;
          const Zr = Sr.getUint8(Qr++),
            ar = Sr.getUint8(Qr++),
            jr = ar >> 6 & 3,
            Ir = ar >> 5 & 1,
            fr = 31 & ar,
            Er = Sr.getUint32(Qr, !1);
          Qr += 4;
          const pr = rr.subarray(Qr, Qr + 6);
          Qr += 6;
          const xr = Sr.getUint8(Qr++),
            mr = (15 & Sr.getUint8(Qr++)) << 8 | Sr.getUint8(Qr++),
            Nr = 3 & Sr.getUint8(Qr++),
            Ur = 3 & Sr.getUint8(Qr++),
            tr = 7 & Sr.getUint8(Qr++),
            hr = 7 & Sr.getUint8(Qr++),
            zr = Sr.getUint16(Qr, !1);
          Qr += 2;
          const Yr = Sr.getUint8(Qr++),
            nr = Yr >> 6 & 3,
            er = Yr >> 3 & 7,
            Kr = Yr >> 2 & 1,
            yr = 3 & Yr,
            Br = Sr.getUint8(Qr++),
            Tr = [];
          for (let Wr = 0; Wr < Br; Wr++) {
            const Zr = Sr.getUint8(Qr++),
              Wr = Zr >> 7 & 1,
              ar = 63 & Zr,
              jr = Sr.getUint16(Qr, !1);
            Qr += 2;
            const Ir = [];
            for (let fr = 0; fr < jr; fr++) {
              const Zr = Sr.getUint16(Qr, !1);
              Qr += 2, Ir.push(rr.subarray(Qr, Qr + Zr)), Qr += Zr
            }
            Tr.push({
              arrayCompleteness: Wr,
              nalUnitType: ar,
              nalUnits: Ir
            })
          }
          return {
            configurationVersion: Zr,
            generalProfileSpace: jr,
            generalTierFlag: Ir,
            generalProfileIdc: fr,
            generalProfileCompatibilityFlags: Er,
            generalConstraintIndicatorFlags: pr,
            generalLevelIdc: xr,
            minSpatialSegmentationIdc: mr,
            parallelismType: Nr,
            chromaFormatIdc: Ur,
            bitDepthLumaMinus8: tr,
            bitDepthChromaMinus8: hr,
            avgFrameRate: zr,
            constantFrameRate: nr,
            numTemporalLayers: er,
            temporalIdNested: Kr,
            lengthSizeMinusOne: yr,
            arrays: Tr
          }
        } catch (Sr) {
          return ar.e._error("Error deserializing HEVC Decoder Configuration Record:", Sr), null
        }
      };
    var Gr;
    ! function(rr) {
      rr[rr.audAllowed = 0] = "audAllowed", rr[rr.beforeFirstVcl = 1] = "beforeFirstVcl", rr[rr.afterFirstVcl = 2] = "afterFirstVcl", rr[rr.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", rr[rr.noMoreDataAllowed = 4] = "noMoreDataAllowed"
    }(Gr || (Gr = {}));
    const kr = {
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
      Ar = rr => {
        const Sr = new pr.b(rr);
        if (2 !== Sr.readBits(2)) return null;
        const Qr = Sr.readBits(1),
          ar = (Sr.readBits(1) << 1) + Qr;
        3 === ar && Sr.skipBits(1);
        if (1 === Sr.readBits(1)) return null;
        if (0 !== Sr.readBits(1)) return null;
        Sr.skipBits(2);
        if (4817730 !== Sr.readBits(24)) return null;
        let jr = 8;
        if (ar >= 2) {
          jr = Sr.readBits(1) ? 12 : 10
        }
        const Ir = Sr.readBits(3);
        let fr = 0,
          Er = 0;
        if (7 !== Ir) {
          if (Er = Sr.readBits(1), 1 === ar || 3 === ar) {
            const rr = Sr.readBits(1),
              Qr = Sr.readBits(1);
            fr = rr || Qr ? rr && !Qr ? 2 : 1 : 3, Sr.skipBits(1)
          } else fr = 1
        } else fr = 3, Er = 1;
        const xr = (Sr.readBits(16) + 1) * (Sr.readBits(16) + 1);
        let mr = (0, Wr.Yb)(Zr.x).level;
        for (const Wr of Zr.x)
          if (xr <= Wr.maxPictureSize) {
            mr = Wr.level;
            break
          } const Nr = kr[Ir];
        return {
          profile: ar,
          level: mr,
          bitDepth: jr,
          chromaSubsampling: fr,
          videoFullRangeFlag: Er,
          colourPrimaries: Nr?.colourPrimaries ?? 2,
          transferCharacteristics: Nr?.transferCharacteristics ?? 2,
          matrixCoefficients: Nr?.matrixCoefficients ?? 2
        }
      },
      Vr = function*(rr) {
        const Sr = new pr.b(rr),
          Qr = () => {
            let rr = 0;
            for (let Qr = 0; Qr < 8; Qr++) {
              const Zr = Sr.readAlignedByte();
              if (rr += (127 & Zr) * 2 ** (7 * Qr), !(128 & Zr)) break;
              if (7 === Qr && 128 & Zr) return null
            }
            return rr > 2 ** 32 - 1 ? null : rr
          };
        for (; Sr.getBitsLeft() >= 8;) {
          Sr.skipBits(1);
          const Zr = Sr.readBits(4),
            ar = Sr.readBits(1),
            jr = Sr.readBits(1);
          let Ir;
          if (Sr.skipBits(1), ar && Sr.skipBits(8), jr) {
            const rr = Qr();
            if (null === rr) return;
            Ir = rr
          } else Ir = Math.floor(Sr.getBitsLeft() / 8);
          (0, Wr.I)(Sr.pos % 8 === 0), yield {
            type: Zr,
            data: rr.subarray(Sr.pos / 8, Sr.pos / 8 + Ir)
          }, Sr.skipBits(8 * Ir)
        }
      },
      ir = rr => {
        for (const {
            type: Sr,
            data: Qr
          }
          of Vr(rr)) {
          if (1 !== Sr) continue;
          const rr = new pr.b(Qr),
            Zr = rr.readBits(3),
            Wr = (rr.readBits(1), rr.readBits(1));
          let ar = 0,
            jr = 0,
            Ir = 0;
          if (Wr) ar = rr.readBits(5);
          else {
            let Sr = 0;
            if (rr.readBits(1)) {
              rr.skipBits(32), rr.skipBits(32);
              if (rr.readBits(1)) {
                let Sr = 0;
                for (; Sr < 32 && !rr.readBits(1);) Sr++;
                Sr < 32 && rr.skipBits(Sr)
              }
              Sr = rr.readBits(1), Sr && (Ir = rr.readBits(5), rr.skipBits(32), rr.skipBits(5), rr.skipBits(5))
            }
            const Qr = rr.readBits(1),
              Zr = rr.readBits(5);
            for (let Wr = 0; Wr <= Zr; Wr++) {
              rr.skipBits(12);
              const Zr = rr.readBits(5);
              if (0 === Wr && (ar = Zr), Zr > 7) {
                const Sr = rr.readBits(1);
                0 === Wr && (jr = Sr)
              }
              if (Sr) {
                if (rr.readBits(1)) {
                  const Sr = Ir + 1;
                  rr.skipBits(Sr), rr.skipBits(Sr), rr.skipBits(1)
                }
              }
              if (Qr) {
                rr.readBits(1) && rr.skipBits(4)
              }
            }
          }
          const fr = rr.readBits(4),
            Er = rr.readBits(4),
            xr = fr + 1;
          rr.skipBits(xr);
          const mr = Er + 1;
          rr.skipBits(mr);
          let Nr = 0;
          if (Nr = Wr ? 0 : rr.readBits(1), Nr && (rr.skipBits(4), rr.skipBits(3)), rr.skipBits(1), rr.skipBits(1), rr.skipBits(1), !Wr) {
            rr.skipBits(1), rr.skipBits(1), rr.skipBits(1), rr.skipBits(1);
            const Sr = rr.readBits(1);
            Sr && (rr.skipBits(1), rr.skipBits(1));
            let Qr = 0;
            if (Qr = rr.readBits(1) ? 2 : rr.readBits(1), Qr > 0) {
              rr.readBits(1) || rr.skipBits(1)
            }
            Sr && rr.skipBits(3)
          }
          rr.skipBits(1), rr.skipBits(1), rr.skipBits(1);
          const Ur = rr.readBits(1);
          let tr = 8;
          if (2 === Zr && Ur) {
            tr = rr.readBits(1) ? 12 : 10
          } else Zr <= 2 && (tr = Ur ? 10 : 8);
          let hr = 0;
          1 !== Zr && (hr = rr.readBits(1));
          let zr = 2,
            Yr = 2,
            nr = 2;
          rr.readBits(1) && (zr = rr.readBits(8), Yr = rr.readBits(8), nr = rr.readBits(8));
          let er = 0,
            Kr = 1,
            yr = 1,
            Br = 0;
          return hr ? er = rr.readBits(1) : 1 === zr && 13 === Yr && 0 === nr ? (er = 1, Kr = 0, yr = 0) : (er = rr.readBits(1), 0 === Zr ? (Kr = 1, yr = 1) : 1 === Zr ? (Kr = 0, yr = 0) : 12 === tr ? (Kr = rr.readBits(1), yr = Kr ? rr.readBits(1) : 0) : (Kr = 1, yr = 0), Kr && yr && (Br = rr.readBits(2))), {
            profile: Zr,
            level: ar,
            tier: jr,
            bitDepth: tr,
            monochrome: hr,
            chromaSubsamplingX: Kr,
            chromaSubsamplingY: yr,
            chromaSamplePosition: Br,
            videoFullRangeFlag: er,
            colourPrimaries: zr,
            transferCharacteristics: Yr,
            matrixCoefficients: nr
          }
        }
        return null
      },
      wr = rr => 2 !== rr.colourPrimaries || 2 !== rr.transferCharacteristics || 2 !== rr.matrixCoefficients,
      cr = rr => {
        const Sr = (0, Wr.ed)(rr),
          Qr = Sr.getUint8(9),
          Zr = Sr.getUint16(10, !0),
          ar = Sr.getUint32(12, !0),
          jr = Sr.getInt16(16, !0),
          Ir = Sr.getUint8(18);
        let fr = null;
        return Ir && (fr = rr.subarray(19, 21 + Qr)), {
          outputChannelCount: Qr,
          preSkip: Zr,
          inputSampleRate: ar,
          outputGain: jr,
          channelMappingFamily: Ir,
          channelMappingTable: fr
        }
      },
      Fr = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960],
      or = rr => {
        const Sr = rr[0] >> 3,
          Qr = 3 & rr[0];
        let Zr;
        return Zr = 0 === Qr ? 1 : 1 === Qr || 2 === Qr ? 2 : 63 & rr[1], {
          durationInSamples: Fr[Sr] * Zr
        }
      },
      br = rr => {
        if (rr.length < 7) throw new Error("Setup header is too short.");
        if (5 !== rr[0]) throw new Error("Wrong packet type in Setup header.");
        if ("vorbis" !== String.fromCharCode(...rr.slice(1, 7))) throw new Error("Invalid packet signature in Setup header.");
        const Sr = rr.length,
          Qr = new Uint8Array(Sr);
        for (let pr = 0; pr < Sr; pr++) Qr[pr] = rr[Sr - 1 - pr];
        const Zr = new pr.b(Qr);
        let Wr = 0;
        for (; Zr.getBitsLeft() > 97;)
          if (1 === Zr.readBits(1)) {
            Wr = Zr.pos;
            break
          } if (0 === Wr) throw new Error("Invalid Setup header: framing bit not found.");
        let ar = 0,
          jr = !1,
          Ir = 0;
        for (; Zr.getBitsLeft() >= 97;) {
          const rr = Zr.pos,
            Sr = Zr.readBits(8),
            Qr = Zr.readBits(16),
            Wr = Zr.readBits(16);
          if (Sr > 63 || 0 !== Qr || 0 !== Wr) {
            Zr.pos = rr;
            break
          }
          if (Zr.skipBits(1), ar++, ar > 64) break;
          Zr.clone().readBits(6) + 1 === ar && (jr = !0, Ir = ar)
        }
        if (!jr) throw new Error("Invalid Setup header: mode header not found.");
        if (Ir > 63) throw new Error(`Unsupported mode count: ${Ir}.`);
        const fr = Ir;
        Zr.pos = 0, Zr.skipBits(Wr);
        const Er = Array(fr).fill(0);
        for (let pr = fr - 1; pr >= 0; pr--) Zr.skipBits(40), Er[pr] = Zr.readBits(1);
        return {
          modeBlockflags: Er
        }
      },
      Jr = (rr, Sr, Qr) => {
        switch (rr) {
          case "avc":
            for (const rr of ((rr, Sr) => {
                if (Sr.description) {
                  const Qr = 3 & (0, Wr.id)(Sr.description)[4];
                  return Nr(rr, Qr + 1)
                }
                return mr(rr)
              })(Qr, Sr)) {
              const Sr = Qr[rr.offset],
                Zr = Ur(Sr);
              if (Zr >= fr.NON_IDR_SLICE && Zr <= fr.SLICE_DPC) return "delta";
              if (Zr === fr.IDR) return "key";
              if (Zr === fr.SEI && !(0, Wr.yb)()) {
                const Sr = Qr.subarray(rr.offset, rr.offset + rr.length),
                  Zr = tr(Sr);
                let ar = 1;
                do {
                  let rr = 0;
                  for (;;) {
                    const Sr = Zr[ar++];
                    if (void 0 === Sr) break;
                    if (rr += Sr, Sr < 255) break
                  }
                  let Sr = 0;
                  for (;;) {
                    const rr = Zr[ar++];
                    if (void 0 === rr) break;
                    if (Sr += rr, rr < 255) break
                  }
                  if (rr === 6) {
                    const rr = new pr.b(Zr);
                    rr.pos = 8 * ar;
                    const Sr = (0, Wr.wc)(rr),
                      Qr = rr.readBits(1);
                    if (0 === Sr && 1 === Qr) return "key"
                  }
                  ar += Sr
                } while (ar < Zr.length - 1)
              }
            }
            return "delta";
          case "hevc":
            for (const rr of vr(Qr, Sr)) {
              const Sr = Or(Qr[rr.offset]);
              if (Sr < Er.BLA_W_LP) return "delta";
              if (Sr <= Er.RSV_IRAP_VCL23) return "key"
            }
            return "delta";
          case "vp8":
            return 0 === (1 & Qr[0]) ? "key" : "delta";
          case "vp9": {
            const rr = new pr.b(Qr);
            if (2 !== rr.readBits(2)) return null;
            const Sr = rr.readBits(1);
            3 === (rr.readBits(1) << 1) + Sr && rr.skipBits(1);
            if (rr.readBits(1)) return null;
            return 0 === rr.readBits(1) ? "key" : "delta"
          }
          case "av1": {
            let rr = !1;
            for (const {
                type: Sr,
                data: Zr
              }
              of Vr(Qr))
              if (1 === Sr) {
                const Sr = new pr.b(Zr);
                Sr.skipBits(4), rr = !!Sr.readBits(1)
              } else if (3 === Sr || 6 === Sr || 7 === Sr) {
              if (rr) return "key";
              const Sr = new pr.b(Zr);
              if (Sr.readBits(1)) return null;
              return 0 === Sr.readBits(2) ? "key" : "delta"
            }
            return null
          }
          case "prores":
            return "key";
          default:
            (0, Wr.H)(rr), (0, Wr.I)(!1)
        }
      };
    var Dr;
    ! function(rr) {
      rr[rr.STREAMINFO = 0] = "STREAMINFO", rr[rr.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", rr[rr.PICTURE = 6] = "PICTURE"
    }(Dr || (Dr = {}));
    const dr = (rr, Sr, Qr) => {
        const Zr = [rr],
          ar = Wr.$c.encode(xr.e);
        let jr = new Uint8Array(4 + ar.length),
          Ir = new DataView(jr.buffer);
        Ir.setUint32(0, ar.length, !0), jr.set(ar, 4), Zr.push(jr);
        const fr = [],
          Er = (rr, Sr) => {
            const Qr = `${rr}=${Sr}`,
              ar = Wr.$c.encode(Qr);
            jr = new Uint8Array(4 + ar.length), Ir = new DataView(jr.buffer), Ir.setUint32(0, ar.length, !0), jr.set(ar, 4), Zr.push(jr), fr.push(rr)
          };
        for (const {
            key: xr,
            value: tr
          }
          of(0, Wr.Xb)(Sr)) switch (xr) {
          case "title":
            Er("TITLE", tr);
            break;
          case "description":
            Er("DESCRIPTION", tr);
            break;
          case "artist":
            Er("ARTIST", tr);
            break;
          case "album":
            Er("ALBUM", tr);
            break;
          case "albumArtist":
            Er("ALBUMARTIST", tr);
            break;
          case "genre":
            Er("GENRE", tr);
            break;
          case "date":
            Er("DATE", tr.toISOString().slice(0, 10));
            break;
          case "comment":
            Er("COMMENT", tr);
            break;
          case "lyrics":
            Er("LYRICS", tr);
            break;
          case "trackNumber":
            Er("TRACKNUMBER", tr.toString());
            break;
          case "tracksTotal":
            Er("TRACKTOTAL", tr.toString());
            break;
          case "discNumber":
            Er("DISCNUMBER", tr.toString());
            break;
          case "discsTotal":
            Er("DISCTOTAL", tr.toString());
            break;
          case "beatsPerMinute":
            Er("BPM", tr.toString());
            break;
          case "images":
            if (!Qr) break;
            for (const rr of tr) {
              const Sr = "coverFront" === rr.kind ? 3 : "coverBack" === rr.kind ? 4 : 0,
                Qr = new Uint8Array(rr.mimeType.length);
              for (let Wr = 0; Wr < rr.mimeType.length; Wr++) Qr[Wr] = rr.mimeType.charCodeAt(Wr);
              const Zr = Wr.$c.encode(rr.description ?? ""),
                ar = new Uint8Array(8 + Qr.length + 4 + Zr.length + 16 + 4 + rr.data.length),
                jr = (0, Wr.ed)(ar);
              jr.setUint32(0, Sr, !1), jr.setUint32(4, Qr.length, !1), ar.set(Qr, 8), jr.setUint32(8 + Qr.length, Zr.length, !1), ar.set(Zr, 12 + Qr.length), jr.setUint32(28 + Qr.length + Zr.length, rr.data.length, !1), ar.set(rr.data, 32 + Qr.length + Zr.length);
              Er("METADATA_BLOCK_PICTURE", (0, Wr.M)(ar))
            }
            break;
          case "raw":
            break;
          default:
            (0, Wr.H)(xr)
        }
        if (Sr.raw)
          for (const Wr in Sr.raw) {
            const rr = Sr.raw[Wr] ?? Sr.raw[Wr.toLowerCase()];
            if ("vendor" !== Wr && null != rr && !fr.includes(Wr))
              if ("string" === typeof rr) Er(Wr, rr);
              else if (Array.isArray(rr)) {
              if (rr.every((rr => "string" === typeof rr)))
                for (const Sr of rr) Er(Wr, Sr)
            }
          }
        const pr = new Uint8Array(4);
        (0, Wr.ed)(pr).setUint32(0, fr.length, !0), Zr.splice(2, 0, pr);
        const mr = Zr.reduce(((rr, Sr) => rr + Sr.length), 0),
          Nr = new Uint8Array(mr);
        let Ur = 0;
        for (const Wr of Zr) Nr.set(Wr, Ur), Ur += Wr.length;
        return Nr
      },
      sr = rr => {
        if (rr.length < 7) return null;
        if (11 !== rr[0] || 119 !== rr[1]) return null;
        const Sr = new pr.b(rr);
        Sr.skipBits(16), Sr.skipBits(16);
        const Qr = Sr.readBits(2);
        if (3 === Qr) return null;
        const Zr = Sr.readBits(6),
          Wr = Sr.readBits(5);
        if (Wr > 8) return null;
        const ar = Sr.readBits(3),
          jr = Sr.readBits(3);
        0 !== (1 & jr) && 1 !== jr && Sr.skipBits(2), 0 !== (4 & jr) && Sr.skipBits(2), 2 === jr && Sr.skipBits(2);
        return {
          fscod: Qr,
          bsid: Wr,
          bsmod: ar,
          acmod: jr,
          lfeon: Sr.readBits(1),
          bitRateCode: Math.floor(Zr / 2)
        }
      },
      ur = new Uint8Array([5, 4, 65, 67, 45, 51]),
      rS = new Uint8Array([5, 4, 69, 65, 67, 51]),
      SS = [1, 2, 3, 6],
      QS = rr => {
        if (rr.length < 6) return null;
        if (11 !== rr[0] || 119 !== rr[1]) return null;
        const Sr = new pr.b(rr);
        Sr.skipBits(16);
        const Qr = Sr.readBits(2);
        if (Sr.skipBits(3), 0 !== Qr && 2 !== Qr) return null;
        const Zr = Sr.readBits(11),
          Wr = Sr.readBits(2);
        let ar, fr = 0;
        3 === Wr ? (fr = Sr.readBits(2), ar = 3) : ar = Sr.readBits(2);
        const Er = Sr.readBits(3),
          xr = Sr.readBits(1),
          mr = Sr.readBits(5);
        if (mr < 11 || mr > 16) return null;
        const Nr = SS[ar];
        let Ur;
        Ur = Wr < 3 ? jr[Wr] / 1e3 : Ir[fr] / 1e3;
        return {
          dataRate: Math.round((Zr + 1) * Ur / (16 * Nr)),
          substreams: [{
            fscod: Wr,
            fscod2: fr,
            bsid: mr,
            bsmod: 0,
            acmod: Er,
            lfeon: xr,
            numDepSub: 0,
            chanLoc: 0
          }]
        }
      },
      ZS = [0, 8e3, 16e3, 32e3, 0, 0, 11025, 22050, 44100, 0, 0, 12e3, 24e3, 48e3, 96e3, 192e3],
      WS = [32e3, 56e3, 64e3, 96e3, 112e3, 128e3, 192e3, 224e3, 256e3, 32e4, 384e3, 448e3, 512e3, 576e3, 64e4, 768e3, 96e4, 1024e3, 1152e3, 128e4, 1344e3, 1408e3, 1411200, 1472e3, 1536e3, 192e4, 2048e3, 3072e3, 384e4, 0, 0, 0],
      aS = [16, 16, 20, 20, 0, 24, 24, 0],
      jS = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8],
      IS = [1, 2, 2, 2, 2, 3, 18, 19, 6, 7, 518, 323, 83, 519, 582, 535],
      fS = [32e3, 44100, 48e3, 0],
      ES = [8e3, 16e3, 32e3, 64e3, 128e3, 22050, 44100, 88200, 176400, 352800, 12e3, 24e3, 48e3, 96e3, 192e3, 384e3],
      pS = [512, 1024, 2048, 4096],
      xS = rr => {
        const Sr = mS(rr),
          Qr = (0, Wr.ed)(rr);
        let Zr = Sr ? 4 * Math.ceil(Sr.frameSize / 4) : 0,
          ar = null;
        for (; Zr + 4 <= rr.length && 1683496997 === Qr.getUint32(Zr);) {
          const Sr = NS(rr.subarray(Zr));
          if (!Sr) break;
          ar ??= Sr, Zr += Sr.frameSize
        }
        if (Sr) return {
          frameSize: ar ? Zr : Sr.frameSize,
          sampleRate: Sr.sampleRate,
          numberOfChannels: Sr.numberOfChannels,
          sampleCount: Sr.sampleCount,
          channelLayout: Sr.channelLayout,
          pcmResolution: Sr.pcmResolution,
          bitRate: Sr.bitRate,
          core: Sr,
          hasExtensions: null !== ar
        };
        if (!ar?.asset) return null;
        const {
          asset: jr
        } = ar;
        return {
          frameSize: Zr,
          sampleRate: jr.sampleRate,
          numberOfChannels: jr.numberOfChannels,
          sampleCount: jr.sampleCount,
          channelLayout: jr.channelLayout,
          pcmResolution: jr.pcmResolution,
          bitRate: 0,
          core: null,
          hasExtensions: !0
        }
      },
      mS = rr => {
        if (rr.length < 18) return null;
        if (127 !== rr[0] || 254 !== rr[1] || 128 !== rr[2] || 1 !== rr[3]) return null;
        const Sr = new pr.b(rr);
        if (Sr.skipBits(32), Sr.skipBits(1), 31 !== Sr.readBits(5)) return null;
        const Qr = Sr.readBits(1),
          Zr = Sr.readBits(7) + 1;
        if (Zr % 8 !== 0) return null;
        const Wr = Sr.readBits(14) + 1;
        if (Wr < 96) return null;
        const ar = Sr.readBits(6);
        if (ar >= jS.length) return null;
        const jr = ZS[Sr.readBits(4)];
        if (0 === jr) return null;
        const Ir = WS[Sr.readBits(5)];
        if (0 !== Sr.readBits(1)) return null;
        Sr.skipBits(4), Sr.skipBits(5);
        const fr = Sr.readBits(2);
        if (3 === fr) return null;
        Sr.skipBits(1), Qr && Sr.skipBits(16), Sr.skipBits(7);
        const Er = aS[Sr.readBits(3)];
        if (0 === Er) return null;
        const xr = 0 !== fr;
        return {
          frameSize: Wr,
          sampleRate: jr,
          numberOfChannels: jS[ar] + (xr ? 1 : 0),
          sampleCount: 32 * Zr,
          channelLayout: IS[ar] | (xr ? 8 : 0),
          amode: ar,
          lfePresent: xr,
          bitRate: Ir,
          pcmResolution: Er
        }
      },
      NS = rr => {
        if (rr.length < 10) return null;
        if (100 !== rr[0] || 88 !== rr[1] || 32 !== rr[2] || 37 !== rr[3]) return null;
        const Sr = new pr.b(rr);
        Sr.skipBits(32), Sr.skipBits(8);
        const Qr = Sr.readBits(2),
          Zr = Sr.readBits(1),
          ar = 8 + 4 * Zr,
          jr = 16 + 4 * Zr;
        Sr.skipBits(ar);
        const Ir = Sr.readBits(jr) + 1,
          fr = {
            frameSize: Ir,
            asset: null
          };
        if (!Sr.readBits(1)) return fr;
        const Er = fS[Sr.readBits(2)],
          xr = 512 * (Sr.readBits(3) + 1);
        Sr.readBits(1) && Sr.skipBits(36);
        const mr = Sr.readBits(3) + 1,
          Nr = Sr.readBits(3) + 1,
          Ur = [];
        for (let Wr = 0; Wr < mr; Wr++) Ur.push(Sr.readBits(Qr + 1));
        for (const pr of Ur) Sr.skipBits(8 * (0, Wr.rc)(pr));
        if (Sr.readBits(1)) {
          Sr.skipBits(2);
          const rr = Sr.readBits(2) + 1 << 2,
            Qr = Sr.readBits(2) + 1;
          Sr.skipBits(Qr * rr)
        }
        for (let Wr = 0; Wr < Nr; Wr++) Sr.skipBits(jr);
        Sr.skipBits(9), Sr.skipBits(3), Sr.readBits(1) && Sr.skipBits(4), Sr.readBits(1) && Sr.skipBits(24), Sr.readBits(1) && Sr.skipBits(8 * (Sr.readBits(10) + 1));
        const tr = Sr.readBits(5) + 1,
          hr = ES[Sr.readBits(4)],
          zr = Sr.readBits(8) + 1;
        let Yr = 0;
        if (Sr.readBits(1) && (zr > 2 && Sr.skipBits(1), zr > 6 && Sr.skipBits(1), Sr.readBits(1))) {
          const rr = Sr.readBits(2) + 1 << 2;
          Yr = Sr.readBits(rr)
        }
        return 0 === Er || Sr.getBitsLeft() < 0 ? fr : {
          frameSize: Ir,
          asset: {
            sampleRate: hr,
            numberOfChannels: zr,
            sampleCount: Math.round(xr * hr / Er),
            channelLayout: Yr,
            pcmResolution: tr
          }
        }
      },
      US = rr => {
        const Sr = new Uint8Array(20),
          Qr = (0, Wr.ed)(Sr);
        Qr.setUint32(0, rr.sampleRate), Qr.setUint32(4, rr.bitRate), Qr.setUint32(8, rr.bitRate), Sr[12] = rr.pcmResolution;
        const Zr = rr.core && !rr.hasExtensions ? 1 : 0,
          ar = new pr.b(Sr);
        return ar.seekToByte(13), ar.writeBits(2, Math.max(pS.indexOf(rr.sampleCount), 0)), ar.writeBits(5, Zr), ar.writeBits(1, rr.core?.lfePresent ? 1 : 0), ar.writeBits(6, rr.core?.amode ?? 0), ar.writeBits(14, rr.core ? rr.core.frameSize - 1 : 0), ar.writeBits(1, 0), ar.writeBits(3, 0), ar.writeBits(16, rr.channelLayout), ar.writeBits(1, 0), ar.writeBits(1, 0), ar.writeBits(1, 0), ar.writeBits(5, 0), Sr
      }
  },
  41502: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => Br,
      D: () => nr,
      E: () => yr,
      F: () => Kr,
      H: () => er,
      I: () => Xr,
      L: () => lr,
      O: () => Lr,
      Q: () => Or,
      T: () => Gr,
      V: () => kr,
      X: () => Cr,
      e: () => fr,
      i: () => pr,
      m: () => Ir,
      n: () => Tr,
      q: () => jr,
      u: () => Er,
      v: () => ar,
      x: () => mr
    });
    var Zr = Qr(41506),
      Wr = Qr(41474);
    const ar = ["avc", "hevc", "vp9", "av1", "vp8", "prores"],
      jr = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"],
      Ir = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"],
      fr = [...Ir, ...jr],
      Er = ["webvtt"],
      pr = [{
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
      xr = [{
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
      mr = [{
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
      Nr = [{
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
      Ur = ".01.01.01.01.00",
      tr = ".0.110.01.01.01.0",
      hr = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"],
      zr = ["dtsc", "dtsh", "dtsl", "dtse"],
      Yr = [{
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
      nr = (rr, Sr, Qr, Zr, ar) => {
        if ("avc" === rr) {
          const rr = 100,
            ar = Math.ceil(Sr / 16) * Math.ceil(Qr / 16),
            jr = pr.find((rr => ar <= rr.maxMacroblocks && Zr <= rr.maxBitrate)) ?? (0, Wr.Yb)(pr),
            Ir = jr ? jr.level : 0;
          return `avc1.${rr.toString(16).padStart(2,"0")}${"00"}${Ir.toString(16).padStart(2,"0")}`
        }
        if ("hevc" === rr) {
          const rr = "",
            ar = 1,
            jr = "6",
            Ir = Sr * Qr,
            fr = xr.find((rr => Ir <= rr.maxPictureSize && Zr <= rr.maxBitrate)) ?? (0, Wr.Yb)(xr),
            Er = "B0";
          return `hev1.${rr}${ar}.${jr}.${fr.tier}${fr.level}.${Er}`
        }
        if ("vp8" === rr) return "vp8";
        if ("vp9" === rr) {
          const rr = Sr * Qr,
            ar = "08";
          return `vp09.${"00"}.${(mr.find((Sr=>rr<=Sr.maxPictureSize&&Zr<=Sr.maxBitrate))??(0,Wr.Yb)(mr)).level.toString().padStart(2,"0")}.${ar}`
        }
        if ("av1" === rr) {
          const rr = 0,
            ar = Sr * Qr,
            jr = Nr.find((rr => ar <= rr.maxPictureSize && Zr <= rr.maxBitrate)) ?? (0, Wr.Yb)(Nr),
            Ir = "08";
          return `av01.${rr}.${jr.level.toString().padStart(2,"0")}${jr.tier}.${Ir}`
        }
        if ("prores" === rr) {
          const rr = 2073600,
            Wr = Math.pow(Sr * Qr / rr, .95),
            jr = Yr.filter((rr => rr.alpha === ar));
          let Ir = jr[0].fourCc,
            fr = 1 / 0;
          for (const {
              fourCc: Sr,
              bitrate: Qr
            }
            of jr) {
            const rr = Math.abs(Qr * Wr - Zr);
            rr < fr && (fr = rr, Ir = Sr)
          }
          return Ir
        }
        throw (0, Wr.H)(rr), new TypeError(`Unhandled codec '${String(rr)}'.`)
      },
      er = rr => {
        const Sr = rr.split(".");
        return [1, 1, Number(Sr[1]), 2, 1, Number(Sr[2]), 3, 1, Number(Sr[3]), 4, 1, Sr[4] ? Number(Sr[4]) : 1]
      },
      Kr = rr => {
        const Sr = rr.split("."),
          Qr = Number(Sr[1]),
          Zr = Sr[2],
          Wr = (Qr << 5) + Number(Zr.slice(0, -1)),
          ar = "H" === Zr.slice(-1) ? 1 : 0,
          jr = Number(Sr[3]);
        return [129, Wr, (ar << 7) + ((8 === jr ? 0 : 1) << 6) + ((12 === jr ? 1 : 0) << 5) + ((Sr[4] ? Number(Sr[4]) : 0) << 4) + ((Sr[5] ? Number(Sr[5][0]) : 1) << 3) + ((Sr[5] ? Number(Sr[5][1]) : 1) << 2) + (Sr[5] ? Number(Sr[5][2]) : 0), 0]
      },
      yr = rr => {
        const {
          codec: Sr,
          codecDescription: Qr,
          colorSpace: ar,
          avcCodecInfo: jr,
          hevcCodecInfo: Ir,
          vp9CodecInfo: fr,
          av1CodecInfo: Er,
          proresFormat: pr
        } = rr;
        if ("avc" === Sr) {
          if ((0, Wr.I)(null !== rr.avcType), jr) {
            const Sr = new Uint8Array([jr.avcProfileIndication, jr.profileCompatibility, jr.avcLevelIndication]);
            return `avc${rr.avcType}.${(0,Wr.Q)(Sr)}`
          }
          if (!Qr || Qr.byteLength < 4) throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
          return `avc${rr.avcType}.${(0,Wr.Q)(Qr.subarray(1,4))}`
        }
        if ("hevc" === Sr) {
          let rr, Sr, Zr, ar, jr, fr;
          if (Ir) rr = Ir.generalProfileSpace, Sr = Ir.generalProfileIdc, Zr = (0, Wr.Bc)(Ir.generalProfileCompatibilityFlags), ar = Ir.generalTierFlag, jr = Ir.generalLevelIdc, fr = [...Ir.generalConstraintIndicatorFlags];
          else {
            if (!Qr || Qr.byteLength < 23) throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
            const Ir = (0, Wr.ed)(Qr),
              Er = Ir.getUint8(1);
            rr = Er >> 6 & 3, Sr = 31 & Er, Zr = (0, Wr.Bc)(Ir.getUint32(2)), ar = Er >> 5 & 1, jr = Ir.getUint8(12), fr = [];
            for (let rr = 0; rr < 6; rr++) fr.push(Ir.getUint8(6 + rr))
          }
          let Er = "hev1.";
          for (Er += ["", "A", "B", "C"][rr] + Sr, Er += ".", Er += Zr.toString(16).toUpperCase(), Er += ".", Er += 0 === ar ? "L" : "H", Er += jr; fr.length > 0 && 0 === fr[fr.length - 1];) fr.pop();
          return fr.length > 0 && (Er += ".", Er += fr.map((rr => rr.toString(16).toUpperCase())).join(".")), Er
        }
        if ("vp8" === Sr) return "vp8";
        if ("vp9" === Sr) {
          if (!fr) {
            const Sr = rr.width * rr.height;
            let Qr = (0, Wr.Yb)(mr).level;
            for (const rr of mr)
              if (Sr <= rr.maxPictureSize) {
                Qr = rr.level;
                break
              } return `vp09.00.${Qr.toString().padStart(2,"0")}.08`
          }
          let Sr = `vp09.${fr.profile.toString().padStart(2,"0")}.${fr.level.toString().padStart(2,"0")}.${fr.bitDepth.toString().padStart(2,"0")}.${fr.chromaSubsampling.toString().padStart(2,"0")}`;
          return Sr += `.${fr.colourPrimaries.toString().padStart(2,"0")}.${fr.transferCharacteristics.toString().padStart(2,"0")}.${fr.matrixCoefficients.toString().padStart(2,"0")}.${fr.videoFullRangeFlag.toString().padStart(2,"0")}`, Sr.endsWith(Ur) && (Sr = Sr.slice(0, -15)), Sr
        }
        if ("av1" === Sr) {
          if (!Er) {
            const Sr = rr.width * rr.height;
            let Qr = (0, Wr.Yb)(mr).level;
            for (const rr of mr)
              if (Sr <= rr.maxPictureSize) {
                Qr = rr.level;
                break
              } return `av01.0.${Qr.toString().padStart(2,"0")}M.08`
          }
          const Sr = Er.profile,
            Qr = Er.level.toString().padStart(2, "0"),
            jr = Er.tier ? "H" : "M",
            Ir = Er.bitDepth.toString().padStart(2, "0"),
            fr = Er.monochrome ? "1" : "0",
            pr = 100 * Er.chromaSubsamplingX + 10 * Er.chromaSubsamplingY + 1 * (Er.chromaSubsamplingX && Er.chromaSubsamplingY ? Er.chromaSamplePosition : 0);
          let xr, Nr, Ur, hr;
          (0, Zr.s)(Er) ? (xr = Er.colourPrimaries, Nr = Er.transferCharacteristics, Ur = Er.matrixCoefficients, hr = Er.videoFullRangeFlag) : (xr = ar?.primaries ? Wr.e[ar.primaries] : 1, Nr = ar?.transfer ? Wr.t[ar.transfer] : 1, Ur = ar?.matrix ? Wr.m[ar.matrix] : 1, hr = ar?.fullRange ? 1 : 0);
          let zr = `av01.${Sr}.${Qr}${jr}.${Ir}`;
          return zr += `.${fr}.${pr.toString().padStart(3,"0")}`, zr += `.${xr.toString().padStart(2,"0")}`, zr += `.${Nr.toString().padStart(2,"0")}`, zr += `.${Ur.toString().padStart(2,"0")}`, zr += `.${hr}`, zr.endsWith(tr) && (zr = zr.slice(0, -17)), zr
        }
        if ("prores" === Sr) return pr ?? "apch";
        throw null !== Sr && (0, Wr.H)(Sr), new TypeError(`Unhandled codec '${Sr}'.`)
      },
      Br = (rr, Sr, Qr) => {
        if ("aac" === rr) return Sr >= 2 && Qr <= 24e3 ? "mp4a.40.29" : Qr <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
        if ("mp3" === rr) return "mp3";
        if ("opus" === rr) return "opus";
        if ("vorbis" === rr) return "vorbis";
        if ("flac" === rr) return "flac";
        if ("ac3" === rr) return "ac-3";
        if ("eac3" === rr) return "ec-3";
        if ("dts" === rr) return "dtsc";
        if (jr.includes(rr)) return rr;
        throw new TypeError(`Unhandled codec '${rr}'.`)
      },
      Tr = 48e3,
      vr = /^pcm-([usf])(\d+)(be)?$/,
      Or = rr => {
        if ((0, Wr.I)(jr.includes(rr)), "ulaw" === rr) return {
          dataType: "ulaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 255
        };
        if ("alaw" === rr) return {
          dataType: "alaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 213
        };
        const Sr = vr.exec(rr);
        let Qr;
        (0, Wr.I)(Sr), Qr = "u" === Sr[1] ? "unsigned" : "s" === Sr[1] ? "signed" : "float";
        return {
          dataType: Qr,
          sampleSize: Number(Sr[2]) / 8,
          littleEndian: "be" !== Sr[3],
          silentValue: "pcm-u8" === rr ? 128 : 0
        }
      },
      Lr = rr => rr.startsWith("avc1") || rr.startsWith("avc3") ? "avc" : rr.startsWith("hev1") || rr.startsWith("hvc1") ? "hevc" : "vp8" === rr ? "vp8" : rr.startsWith("vp09") ? "vp9" : rr.startsWith("av01") ? "av1" : hr.includes(rr) ? "prores" : "mp3" === rr || "mp4a.69" === rr || "mp4a.6B" === rr || "mp4a.6b" === rr || "mp4a.40.34" === rr ? "mp3" : rr.startsWith("mp4a.40.") || "mp4a.67" === rr ? "aac" : "opus" === rr || "Opus" === rr ? "opus" : "vorbis" === rr ? "vorbis" : "flac" === rr ? "flac" : "ac-3" === rr || "ac3" === rr ? "ac3" : "ec-3" === rr || "eac3" === rr ? "eac3" : zr.includes(rr) ? "dts" : "ulaw" === rr ? "ulaw" : "alaw" === rr ? "alaw" : vr.test(rr) ? rr : "webvtt" === rr ? "webvtt" : null,
      lr = rr => "avc" === rr ? {
        avc: {
          format: "avc"
        }
      } : "hevc" === rr ? {
        hevc: {
          format: "hevc"
        }
      } : {},
      Xr = rr => "aac" === rr ? {
        aac: {
          format: "aac"
        }
      } : "opus" === rr ? {
        opus: {
          format: "opus"
        }
      } : {},
      Pr = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...hr],
      Hr = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/,
      qr = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,
      Rr = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,
      gr = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,
      Cr = (rr, Sr) => {
        if (!rr) throw new TypeError("Video chunk metadata must be provided.");
        if ("object" !== typeof rr) throw new TypeError("Video chunk metadata must be an object.");
        if (!rr.decoderConfig) throw new TypeError("Video chunk metadata must include a decoder configuration.");
        if ("object" !== typeof rr.decoderConfig) throw new TypeError("Video chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof rr.decoderConfig.codec) throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
        if (!Pr.some((Sr => rr.decoderConfig.codec.startsWith(Sr)))) throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(rr.decoderConfig.codedWidth) || rr.decoderConfig.codedWidth <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
        if (!Number.isInteger(rr.decoderConfig.codedHeight) || rr.decoderConfig.codedHeight <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
        if (void 0 !== rr.decoderConfig.displayAspectWidth && (!Number.isInteger(rr.decoderConfig.displayAspectWidth) || rr.decoderConfig.displayAspectWidth <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
        if (void 0 !== rr.decoderConfig.displayAspectHeight && (!Number.isInteger(rr.decoderConfig.displayAspectHeight) || rr.decoderConfig.displayAspectHeight <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
        if (void 0 !== rr.decoderConfig.displayAspectWidth !== (void 0 !== rr.decoderConfig.displayAspectHeight)) throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
        if (void 0 !== rr.decoderConfig.description && !(0, Wr.xb)(rr.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (void 0 !== rr.decoderConfig.colorSpace) {
          const {
            colorSpace: Sr
          } = rr.decoderConfig;
          if ("object" !== typeof Sr) throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
          const Qr = Object.keys(Wr.e);
          if (null != Sr.primaries && !Qr.includes(Sr.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${Qr.join(", ")}.`);
          const Zr = Object.keys(Wr.t);
          if (null != Sr.transfer && !Zr.includes(Sr.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${Zr.join(", ")}.`);
          const ar = Object.keys(Wr.m);
          if (null != Sr.matrix && !ar.includes(Sr.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${ar.join(", ")}.`);
          if (null != Sr.fullRange && "boolean" !== typeof Sr.fullRange) throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")
        }
        if (rr.decoderConfig.codec.startsWith("avc1") || rr.decoderConfig.codec.startsWith("avc3")) {
          if (!Hr.test(rr.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")
        } else if (rr.decoderConfig.codec.startsWith("hev1") || rr.decoderConfig.codec.startsWith("hvc1")) {
          if (!qr.test(rr.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")
        } else if (rr.decoderConfig.codec.startsWith("vp8")) {
          if ("vp8" !== rr.decoderConfig.codec) throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')
        } else if (rr.decoderConfig.codec.startsWith("vp09")) {
          if (!Rr.test(rr.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')
        } else if (rr.decoderConfig.codec.startsWith("av01")) {
          if (!gr.test(rr.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')
        } else if (hr.some((Sr => rr.decoderConfig.codec.startsWith(Sr))) && !hr.some((Sr => rr.decoderConfig.codec === Sr))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${hr.join(", ")}.`);
        if (null !== Sr && Lr(rr.decoderConfig.codec) !== Sr) throw new TypeError(`Video chunk metadata decoder configuration codec string '${rr.decoderConfig.codec}' does not fit to the track codec '${Sr}'.`)
      },
      Mr = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3", "dts"],
      Gr = (rr, Sr) => {
        if (!rr) throw new TypeError("Audio chunk metadata must be provided.");
        if ("object" !== typeof rr) throw new TypeError("Audio chunk metadata must be an object.");
        if (!rr.decoderConfig) throw new TypeError("Audio chunk metadata must include a decoder configuration.");
        if ("object" !== typeof rr.decoderConfig) throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof rr.decoderConfig.codec) throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
        if (!Mr.some((Sr => rr.decoderConfig.codec.startsWith(Sr)))) throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(rr.decoderConfig.sampleRate) || rr.decoderConfig.sampleRate <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
        if (!Number.isInteger(rr.decoderConfig.numberOfChannels) || rr.decoderConfig.numberOfChannels <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
        if (void 0 !== rr.decoderConfig.description && !(0, Wr.xb)(rr.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (rr.decoderConfig.codec.startsWith("mp4a") && "mp4a.69" !== rr.decoderConfig.codec && "mp4a.6B" !== rr.decoderConfig.codec && "mp4a.6b" !== rr.decoderConfig.codec) {
          if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(rr.decoderConfig.codec)) throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")
        } else if (rr.decoderConfig.codec.startsWith("mp3") || rr.decoderConfig.codec.startsWith("mp4a")) {
          if ("mp3" !== rr.decoderConfig.codec && "mp4a.69" !== rr.decoderConfig.codec && "mp4a.6B" !== rr.decoderConfig.codec && "mp4a.6b" !== rr.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')
        } else if (rr.decoderConfig.codec.startsWith("opus")) {
          if ("opus" !== rr.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
          if (rr.decoderConfig.description && rr.decoderConfig.description.byteLength < 18) throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")
        } else if (rr.decoderConfig.codec.startsWith("vorbis")) {
          if ("vorbis" !== rr.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
          if (!rr.decoderConfig.description) throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")
        } else if (rr.decoderConfig.codec.startsWith("flac")) {
          if ("flac" !== rr.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
          const Sr = 42;
          if (!rr.decoderConfig.description || rr.decoderConfig.description.byteLength < Sr) throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")
        } else if (rr.decoderConfig.codec.startsWith("ac-3") || rr.decoderConfig.codec.startsWith("ac3")) {
          if ("ac-3" !== rr.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')
        } else if (rr.decoderConfig.codec.startsWith("ec-3") || rr.decoderConfig.codec.startsWith("eac3")) {
          if ("ec-3" !== rr.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')
        } else if (rr.decoderConfig.codec.startsWith("dts")) {
          if (!zr.includes(rr.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${zr.join(", ")}.`)
        } else if ((rr.decoderConfig.codec.startsWith("pcm") || rr.decoderConfig.codec.startsWith("ulaw") || rr.decoderConfig.codec.startsWith("alaw")) && !jr.includes(rr.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${jr.join(", ")}).`);
        if (null !== Sr && Lr(rr.decoderConfig.codec) !== Sr) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${rr.decoderConfig.codec}' does not fit to the track codec '${Sr}'.`)
      },
      kr = rr => {
        if (!rr) throw new TypeError("Subtitle metadata must be provided.");
        if ("object" !== typeof rr) throw new TypeError("Subtitle metadata must be an object.");
        if (!rr.config) throw new TypeError("Subtitle metadata must include a config object.");
        if ("object" !== typeof rr.config) throw new TypeError("Subtitle metadata config must be an object.");
        if ("string" !== typeof rr.config.description) throw new TypeError("Subtitle metadata config description must be a string.")
      }
  },
  41555: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => mr,
      g: () => xr,
      i: () => zr,
      l: () => fr,
      o: () => Yr,
      s: () => Er,
      u: () => jr
    });
    var Zr = Qr(41502),
      Wr = Qr(41474),
      ar = Qr(41563);
    new Map, new Map;
    const jr = rr => {
        if (!rr || "object" !== typeof rr) throw new TypeError("Encoding config must be an object.");
        if (!Zr.v.includes(rr.codec)) throw new TypeError(`Invalid video codec '${rr.codec}'. Must be one of: ${Zr.v.join(", ")}.`);
        const Sr = rr.bitrate;
        if (void 0 === rr.quality && void 0 === Sr) throw new TypeError("config.quality must be provided.");
        if (void 0 !== rr.quality && void 0 !== Sr) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== rr.quality && !(rr.quality instanceof mr)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== Sr && !(Sr instanceof mr) && (!Number.isInteger(Sr) || Sr <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== rr.keyFrameInterval && (!Number.isFinite(rr.keyFrameInterval) || rr.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
        if (void 0 !== rr.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(rr.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
        if (void 0 !== rr.transform) {
          if ("object" !== typeof rr.transform || !rr.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== rr.transform.width && (!Number.isInteger(rr.transform.width) || rr.transform.width <= 0)) throw new TypeError("config.transform.width, when provided, must be a positive integer.");
          if (void 0 !== rr.transform.height && (!Number.isInteger(rr.transform.height) || rr.transform.height <= 0)) throw new TypeError("config.transform.height, when provided, must be a positive integer.");
          if (void 0 !== rr.transform.fit && !["fill", "contain", "cover"].includes(rr.transform.fit)) throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');
          if (void 0 !== rr.transform.width && void 0 !== rr.transform.height && void 0 === rr.transform.fit && !["fill", "contain", "cover"].includes(rr.sizeChangeBehavior)) throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
          if (void 0 !== rr.transform.fit && ["fill", "contain", "cover"].includes(rr.sizeChangeBehavior) && rr.transform.fit !== rr.sizeChangeBehavior) throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
          if (void 0 !== rr.transform.rotate && ![0, 90, 180, 270].includes(rr.transform.rotate)) throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
          if (void 0 !== rr.transform.flip && "boolean" !== typeof rr.transform.flip) throw new TypeError("config.transform.flip, when provided, must be a boolean.");
          if (void 0 !== rr.transform.crop && (0, ar.k)(rr.transform.crop, "config.transform."), void 0 !== rr.transform.process && "function" !== typeof rr.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
          if (void 0 !== rr.transform.frameRate && (!Number.isFinite(rr.transform.frameRate) || rr.transform.frameRate <= 0)) throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
          if (void 0 !== rr.transform.force && "boolean" !== typeof rr.transform.force) throw new TypeError("config.transform.force, when provided, must be a boolean.")
        }
        if (void 0 !== rr.onEncodedPacket && "function" !== typeof rr.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== rr.onEncoderConfig && "function" !== typeof rr.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== rr.onEncodedSample && "function" !== typeof rr.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        Ir(rr.codec, rr)
      },
      Ir = (rr, Sr) => {
        if (!Sr || "object" !== typeof Sr) throw new TypeError("Encoding options must be an object.");
        if (void 0 !== Sr.alpha && !["discard", "keep"].includes(Sr.alpha)) throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
        const Qr = Sr.bitrateMode;
        if (void 0 !== Qr && !["constant", "variable"].includes(Qr)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== Sr.latencyMode && !["quality", "realtime"].includes(Sr.latencyMode)) throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
        if (void 0 !== Sr.fullCodecString && "string" !== typeof Sr.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== Sr.fullCodecString && (0, Zr.O)(Sr.fullCodecString) !== rr) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${rr}).`);
        if (void 0 !== Sr.hardwareAcceleration && !["no-preference", "prefer-hardware", "prefer-software"].includes(Sr.hardwareAcceleration)) throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
        if (void 0 !== Sr.scalabilityMode && "string" !== typeof Sr.scalabilityMode) throw new TypeError("scalabilityMode, when provided, must be a string.");
        if (void 0 !== Sr.contentHint && "string" !== typeof Sr.contentHint) throw new TypeError("contentHint, when provided, must be a string.")
      },
      fr = rr => {
        const Sr = rr.bitrateMode,
          Qr = rr.quality._toVideoRateControl(rr.codec, rr.width, rr.height, Sr),
          ar = (Sr, Qr, Wr) => ({
            codec: rr.fullCodecString ?? (0, Zr.D)(rr.codec, rr.width, rr.height, Wr, "keep" === rr.alpha),
            width: rr.width,
            height: rr.height,
            displayWidth: rr.squarePixelWidth,
            displayHeight: rr.squarePixelHeight,
            bitrate: Sr,
            bitrateMode: Qr,
            alpha: rr.alpha ?? "discard",
            framerate: rr.framerate,
            latencyMode: rr.latencyMode,
            hardwareAcceleration: rr.hardwareAcceleration,
            scalabilityMode: rr.scalabilityMode,
            contentHint: rr.contentHint,
            ...(0, Zr.L)(rr.codec)
          }),
          jr = [];
        return null !== Qr.quantizer && jr.push({
          config: ar(void 0, "quantizer", Qr.bitrate),
          quantizer: Qr.quantizer
        }), "quantizer" !== Qr.bitrateMode && jr.push({
          config: ar(Qr.bitrate, Qr.bitrateMode, Qr.bitrate),
          quantizer: null
        }), (0, Wr.I)(jr.length > 0), jr
      },
      Er = rr => {
        if (!rr || "object" !== typeof rr) throw new TypeError("Encoding config must be an object.");
        if (!Zr.e.includes(rr.codec)) throw new TypeError(`Invalid audio codec '${rr.codec}'. Must be one of: ${Zr.e.join(", ")}.`);
        const Sr = rr.bitrate;
        if (void 0 === rr.quality && void 0 === Sr && !Zr.q.includes(rr.codec) && "flac" !== rr.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
        if (void 0 !== rr.quality && void 0 !== Sr) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== rr.quality && !(rr.quality instanceof mr)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== Sr && !(Sr instanceof mr) && (!Number.isInteger(Sr) || Sr <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== rr.transform) {
          if ("object" !== typeof rr.transform || !rr.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== rr.transform.numberOfChannels && (!Number.isInteger(rr.transform.numberOfChannels) || rr.transform.numberOfChannels <= 0)) throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
          if (void 0 !== rr.transform.sampleRate && (!Number.isInteger(rr.transform.sampleRate) || rr.transform.sampleRate <= 0)) throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
          if (void 0 !== rr.transform.sampleFormat && !["u8", "s16", "s32", "f32"].includes(rr.transform.sampleFormat)) throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
          if (void 0 !== rr.transform.process && "function" !== typeof rr.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.")
        }
        if (void 0 !== rr.onEncodedPacket && "function" !== typeof rr.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== rr.onEncoderConfig && "function" !== typeof rr.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== rr.onEncodedSample && "function" !== typeof rr.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        pr(rr.codec, rr)
      },
      pr = (rr, Sr) => {
        if (!Sr || "object" !== typeof Sr) throw new TypeError("Encoding options must be an object.");
        const Qr = Sr.bitrateMode;
        if (void 0 !== Qr && !["constant", "variable"].includes(Qr)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== Sr.fullCodecString && "string" !== typeof Sr.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== Sr.fullCodecString && (0, Zr.O)(Sr.fullCodecString) !== rr) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${rr}).`)
      },
      xr = rr => {
        const Sr = rr.bitrateMode;
        return {
          codec: rr.fullCodecString ?? (0, Zr.B)(rr.codec, rr.numberOfChannels, rr.sampleRate),
          numberOfChannels: rr.numberOfChannels,
          sampleRate: rr.sampleRate,
          bitrate: rr.quality?._toAudioBitrate(rr.codec),
          bitrateMode: rr.quality?._bitrateMode ?? Sr,
          ...(0, Zr.I)(rr.codec)
        }
      };
    class mr {
      constructor(rr) {
        if ("number" !== typeof rr && "string" !== typeof rr || (rr = {
            quality: rr
          }), !rr || "object" !== typeof rr) throw new TypeError("options must be an object.");
        if (void 0 !== rr.bitrateMode && !["constant", "variable"].includes(rr.bitrateMode)) throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
        if ("quality" in rr) {
          if ("string" === typeof rr.quality ? !(rr.quality in Nr) : "number" !== typeof rr.quality || Number.isNaN(rr.quality)) throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
          if (void 0 !== rr.preferBitrate && "boolean" !== typeof rr.preferBitrate) throw new TypeError("options.preferBitrate, when provided, must be a boolean.");
          if ("bitrate" in rr || "quantizer" in rr) throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
          this._quality = "string" === typeof rr.quality ? Nr[rr.quality] : rr.quality, this._preferBitrate = rr.preferBitrate ?? !1, this._bitrate = void 0, this._quantizer = void 0
        } else {
          if (void 0 !== rr.bitrate && (!Number.isInteger(rr.bitrate) || rr.bitrate <= 0)) throw new TypeError("options.bitrate, when provided, must be a positive integer.");
          if (void 0 !== rr.quantizer && (!Number.isInteger(rr.quantizer) || rr.quantizer < 0)) throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");
          if (void 0 === rr.bitrate && void 0 === rr.quantizer) throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");
          if ("preferBitrate" in rr) throw new TypeError("options.preferBitrate can only be combined with options.quality.");
          this._quality = void 0, this._preferBitrate = !1, this._bitrate = rr.bitrate, this._quantizer = rr.quantizer
        }
        this._bitrateMode = rr.bitrateMode
      }
      _toVideoRateControl(rr, Sr, Qr, Zr) {
        const ar = Ur[rr];
        let jr, Ir = null,
          fr = this._bitrateMode ?? Zr ?? "variable";
        if (void 0 !== this._quantizer) {
          if (ar)
            if (this._quantizer < ar.min || this._quantizer > ar.max) {
              if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${rr}'; must be between ${ar.min} and ${ar.max}.`)
            } else Ir = this._quantizer, void 0 === this._bitrate && (fr = "quantizer");
          else if (void 0 === this._bitrate) throw new Error(`Codec '${rr}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
        } else void 0 === this._bitrate && ar && !this._preferBitrate && ((0, Wr.I)(void 0 !== this._quality), Ir = (0, Wr.X)(Math.round((0, Wr.$b)(ar.worst, ar.best, this._quality)), ar.min, ar.max));
        if (void 0 !== this._bitrate) jr = this._bitrate;
        else {
          let Zr = this._quality;
          void 0 === Zr && ((0, Wr.I)(null !== Ir && ar), Zr = (0, Wr.X)((Ir - ar.worst) / (ar.best - ar.worst), 0, 1)), jr = hr(rr, Sr, Qr, tr(Zr))
        }
        return {
          quantizer: Ir,
          bitrate: jr,
          bitrateMode: fr
        }
      }
      _toVideoBitrate(rr, Sr, Qr) {
        return void 0 !== this._bitrate ? this._bitrate : ((0, Wr.I)(void 0 !== this._quality), hr(rr, Sr, Qr, tr(this._quality)))
      }
      _toAudioBitrate(rr) {
        if (Zr.q.includes(rr) || "flac" === rr) return;
        if (void 0 !== this._bitrate) return this._bitrate;
        if (void 0 === this._quality) throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
        const Sr = tr(this._quality),
          Qr = {
            aac: 128e3,
            opus: 64e3,
            mp3: 16e4,
            vorbis: 64e3,
            ac3: 384e3,
            eac3: 192e3,
            dts: 768e3
          } [rr];
        if (!Qr) throw new Error(`Unhandled codec: ${rr}`);
        let Wr = Qr * Sr;
        if ("aac" === rr) {
          Wr = [96e3, 128e3, 16e4, 192e3].reduce(((rr, Sr) => Math.abs(Sr - Wr) < Math.abs(rr - Wr) ? Sr : rr))
        } else if ("opus" === rr || "vorbis" === rr) Wr = Math.max(6e3, Wr);
        else if ("mp3" === rr) {
          Wr = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((rr, Sr) => Math.abs(Sr - Wr) < Math.abs(rr - Wr) ? Sr : rr))
        }
        return 1e3 * Math.round(Wr / 1e3)
      }
    }
    const Nr = {
        "very-low": 0,
        low: .25,
        medium: .5,
        high: .75,
        "very-high": 1
      },
      Ur = {
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
      tr = rr => .3 * Math.exp(2.5538 * rr),
      hr = (rr, Sr, Qr, Zr) => {
        const Wr = Sr * Qr,
          ar = 3e6,
          jr = ar * Math.pow(Wr / 2073600, .95) * {
            avc: 1,
            hevc: .6,
            vp9: .6,
            av1: .4,
            vp8: 1.2,
            prores: 73.33333333333333
          } [rr] * Zr;
        return 1e3 * Math.ceil(jr / 1e3)
      },
      zr = (rr, Sr) => "avc" === rr ? {
        avc: {
          quantizer: Sr
        }
      } : "hevc" === rr ? {
        hevc: {
          quantizer: Sr
        }
      } : "vp9" === rr ? {
        vp9: {
          quantizer: Sr
        }
      } : "av1" === rr ? {
        av1: {
          quantizer: Sr
        }
      } : void(0, Wr.I)(!1),
      Yr = (rr, Sr) => void 0 !== rr ? rr : void 0 !== Sr ? Sr instanceof mr ? Sr : new mr({
        bitrate: Sr
      }) : void 0
  },
  41512: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar
    });
    var Zr, Wr = Qr(41474);
    ! function(rr) {
      rr[rr.Silent = 0] = "Silent", rr[rr.Errors = 1] = "Errors", rr[rr.Warnings = 2] = "Warnings", rr[rr.Info = 3] = "Info"
    }(Zr || (Zr = {}));
    class ar {
      constructor() {}
      static get level() {
        return ar._level
      }
      static set level(rr) {
        if (rr !== Zr.Silent && rr !== Zr.Errors && rr !== Zr.Warnings && rr !== Zr.Info) throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
        ar._level = rr
      }
      static get _emitter() {
        return ar._emitterInstance ??= new Wr.j
      }
      static on(rr, Sr, Qr) {
        return ar._emitter.on(rr, Sr, Qr)
      }
      static _error() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        ar._emitter._emit("error", Sr), ar._level >= Zr.Errors && console.error(...Sr)
      }
      static _warn() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        ar._emitter._emit("warn", Sr), ar._level >= Zr.Warnings && console.warn(...Sr)
      }
      static _info() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        ar._emitter._emit("info", Sr), ar._level >= Zr.Info && console.info(...Sr)
      }
    }
    ar._level = Zr.Info, ar._emitterInstance = null
  },
  41566: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er,
      g: () => pr,
      i: () => fr,
      m: () => xr,
      n: () => jr
    });
    Qr(41488);
    var Zr = Qr(41502);
    Qr(41474), Qr(41526);
    var Wr = Qr(41552);
    Qr(41563), Qr(41555);
    Qr(41506), Qr(41512), "function" === typeof SuppressedError && SuppressedError;
    class ar {
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
      async _flushAndClose(rr) {}
      close() {
        if (this._closingPromise) return;
        const rr = this._connectedTrack;
        if (!rr) throw new Error("Cannot call close without connecting the source to an output track.");
        if ("pending" === rr.output.state) throw new Error("Cannot call close before output has been started.");
        this._closingPromise = (async () => {
          await this._flushAndClose(!1), this._closed = !0, "finalizing" !== rr.output.state && "finalized" !== rr.output.state && rr.output._muxer.onTrackClose(rr)
        })()
      }
      async _flushOrWaitForOngoingClose(rr) {
        return this._closingPromise ??= (async () => {
          await this._flushAndClose(rr), this._closed = !0
        })()
      }
    }
    class jr extends ar {
      constructor(rr) {
        if (super(), !Zr.v.includes(rr)) throw new TypeError(`Invalid video codec '${rr}'. Must be one of: ${Zr.v.join(", ")}.`);
        this._codec = rr
      }
    }
    const Ir = (rr, Sr) => {
      if (rr.metadata.hasOnlyKeyPackets && "key" !== Sr.type) throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")
    };
    class fr extends jr {
      constructor(rr) {
        super(rr)
      }
      add(rr, Sr) {
        if (!(rr instanceof Wr.b)) throw new TypeError("packet must be an EncodedPacket.");
        if (rr.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== Sr && (!Sr || "object" !== typeof Sr)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), Ir(this._connectedTrack, rr), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, rr, Sr)
      }
    }
    class Er extends ar {
      constructor(rr) {
        if (super(), !Zr.e.includes(rr)) throw new TypeError(`Invalid audio codec '${rr}'. Must be one of: ${Zr.e.join(", ")}.`);
        this._codec = rr
      }
    }
    class pr extends Er {
      constructor(rr) {
        super(rr)
      }
      add(rr, Sr) {
        if (!(rr instanceof Wr.b)) throw new TypeError("packet must be an EncodedPacket.");
        if (rr.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== Sr && (!Sr || "object" !== typeof Sr)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, rr, Sr)
      }
    }
    class xr extends ar {
      constructor(rr) {
        if (super(), !Zr.u.includes(rr)) throw new TypeError(`Invalid subtitle codec '${rr}'. Must be one of: ${Zr.u.join(", ")}.`);
        this._codec = rr
      }
    }
  },
  41478: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      f: () => fr,
      h: () => Wr,
      i: () => Ir,
      l: () => jr,
      n: () => Er
    });
    var Zr = Qr(41474);
    class Wr {
      constructor(rr, Sr) {
        if (this.data = rr, this.mimeType = Sr, !(rr instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("string" !== typeof Sr) throw new TypeError("mimeType must be a string.")
      }
    }
    class ar {
      constructor(rr, Sr, Qr, Zr) {
        if (this.data = rr, this.mimeType = Sr, this.name = Qr, this.description = Zr, !(rr instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if (void 0 !== Sr && "string" !== typeof Sr) throw new TypeError("mimeType, when provided, must be a string.");
        if (void 0 !== Qr && "string" !== typeof Qr) throw new TypeError("name, when provided, must be a string.");
        if (void 0 !== Zr && "string" !== typeof Zr) throw new TypeError("description, when provided, must be a string.")
      }
    }
    const jr = rr => {
        if (!rr || "object" !== typeof rr) throw new TypeError("tags must be an object.");
        if (void 0 !== rr.title && "string" !== typeof rr.title) throw new TypeError("tags.title, when provided, must be a string.");
        if (void 0 !== rr.description && "string" !== typeof rr.description) throw new TypeError("tags.description, when provided, must be a string.");
        if (void 0 !== rr.artist && "string" !== typeof rr.artist) throw new TypeError("tags.artist, when provided, must be a string.");
        if (void 0 !== rr.album && "string" !== typeof rr.album) throw new TypeError("tags.album, when provided, must be a string.");
        if (void 0 !== rr.albumArtist && "string" !== typeof rr.albumArtist) throw new TypeError("tags.albumArtist, when provided, must be a string.");
        if (void 0 !== rr.trackNumber && (!Number.isInteger(rr.trackNumber) || rr.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
        if (void 0 !== rr.tracksTotal && (!Number.isInteger(rr.tracksTotal) || rr.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
        if (void 0 !== rr.discNumber && (!Number.isInteger(rr.discNumber) || rr.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
        if (void 0 !== rr.discsTotal && (!Number.isInteger(rr.discsTotal) || rr.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
        if (void 0 !== rr.genre && "string" !== typeof rr.genre) throw new TypeError("tags.genre, when provided, must be a string.");
        if (void 0 !== rr.date && (!(rr.date instanceof Date) || Number.isNaN(rr.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
        if (void 0 !== rr.beatsPerMinute && (!Number.isInteger(rr.beatsPerMinute) || rr.beatsPerMinute <= 0)) throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");
        if (void 0 !== rr.lyrics && "string" !== typeof rr.lyrics) throw new TypeError("tags.lyrics, when provided, must be a string.");
        if (void 0 !== rr.images) {
          if (!Array.isArray(rr.images)) throw new TypeError("tags.images, when provided, must be an array.");
          for (const Sr of rr.images) {
            if (!Sr || "object" !== typeof Sr) throw new TypeError("Each image in tags.images must be an object.");
            if (!(Sr.data instanceof Uint8Array)) throw new TypeError("Each image.data must be a Uint8Array.");
            if ("string" !== typeof Sr.mimeType) throw new TypeError("Each image.mimeType must be a string.");
            if (!["coverFront", "coverBack", "unknown"].includes(Sr.kind)) throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")
          }
        }
        if (void 0 !== rr.comment && "string" !== typeof rr.comment) throw new TypeError("tags.comment, when provided, must be a string.");
        if (void 0 !== rr.raw) {
          if (!rr.raw || "object" !== typeof rr.raw) throw new TypeError("tags.raw, when provided, must be an object.");
          for (const Sr of Object.values(rr.raw))
            if (null !== Sr && "string" !== typeof Sr && (!Array.isArray(Sr) || !Sr.every((rr => "string" === typeof rr))) && !(Sr instanceof Uint8Array) && !(Sr instanceof Wr) && !(Sr instanceof ar) && !(0, Zr.Kb)(Sr)) throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")
        }
      },
      Ir = rr => void 0 === rr.title && void 0 === rr.description && void 0 === rr.artist && void 0 === rr.album && void 0 === rr.albumArtist && void 0 === rr.trackNumber && void 0 === rr.tracksTotal && void 0 === rr.discNumber && void 0 === rr.discsTotal && void 0 === rr.genre && void 0 === rr.beatsPerMinute && void 0 === rr.date && void 0 === rr.lyrics && (!rr.images || 0 === rr.images.length) && void 0 === rr.comment && (void 0 === rr.raw || 0 === Object.keys(rr.raw).length),
      fr = {
        default: !0,
        primary: !0,
        forced: !1,
        original: !1,
        commentary: !1,
        hearingImpaired: !1,
        visuallyImpaired: !1
      },
      Er = rr => {
        if (!rr || "object" !== typeof rr) throw new TypeError("disposition must be an object.");
        if (void 0 !== rr.default && "boolean" !== typeof rr.default) throw new TypeError("disposition.default must be a boolean.");
        if (void 0 !== rr.primary && "boolean" !== typeof rr.primary) throw new TypeError("disposition.primary must be a boolean.");
        if (void 0 !== rr.forced && "boolean" !== typeof rr.forced) throw new TypeError("disposition.forced must be a boolean.");
        if (void 0 !== rr.original && "boolean" !== typeof rr.original) throw new TypeError("disposition.original must be a boolean.");
        if (void 0 !== rr.commentary && "boolean" !== typeof rr.commentary) throw new TypeError("disposition.commentary must be a boolean.");
        if (void 0 !== rr.hearingImpaired && "boolean" !== typeof rr.hearingImpaired) throw new TypeError("disposition.hearingImpaired must be a boolean.");
        if (void 0 !== rr.visuallyImpaired && "boolean" !== typeof rr.visuallyImpaired) throw new TypeError("disposition.visuallyImpaired must be a boolean.")
      }
  },
  41474: (rr, Sr, Qr) => {
    function Zr(rr) {
      if (!rr) throw new Error("Assertion failed.")
    }
    Qr.d(Sr, {
      $: () => qr,
      $b: () => br,
      $c: () => Lr,
      A: () => OS,
      Ac: () => er,
      Bb: () => US,
      Bc: () => Mr,
      Cb: () => pS,
      D: () => vS,
      Db: () => ZS,
      Ec: () => xr,
      Fc: () => sr,
      Gc: () => dr,
      H: () => Vr,
      Hb: () => lr,
      I: () => Zr,
      Ib: () => Yr,
      Jb: () => BS,
      Kb: () => iS,
      Kc: () => Nr,
      L: () => Gr,
      Lc: () => MS,
      M: () => eS,
      Mb: () => hS,
      Oc: () => cr,
      Pb: () => zr,
      Q: () => Cr,
      Qc: () => Fr,
      Rc: () => wr,
      Sb: () => fS,
      Tc: () => LS,
      U: () => fr,
      Ub: () => TS,
      X: () => or,
      Xb: () => YS,
      Xc: () => Or,
      Y: () => GS,
      Yb: () => hr,
      Z: () => zS,
      ab: () => tr,
      bb: () => aS,
      bd: () => AS,
      c: () => gr,
      dc: () => NS,
      e: () => Xr,
      ed: () => Br,
      fb: () => Er,
      fc: () => Jr,
      h: () => jS,
      id: () => yr,
      j: () => VS,
      jb: () => Ar,
      jc: () => Ur,
      jd: () => KS,
      k: () => Ir,
      kc: () => jr,
      kd: () => lS,
      ld: () => kS,
      m: () => Hr,
      md: () => Kr,
      n: () => ar,
      nb: () => ur,
      nc: () => yS,
      r: () => WS,
      rb: () => ir,
      rc: () => SS,
      sb: () => rS,
      t: () => Pr,
      tb: () => nS,
      u: () => vr,
      uc: () => kr,
      wc: () => nr,
      xb: () => Rr,
      y: () => Dr,
      yb: () => mS
    });
    const Wr = Math.PI / 180,
      ar = 180 / Math.PI,
      jr = rr => {
        const Sr = (rr % 360 + 360) % 360;
        if (0 === Sr || 90 === Sr || 180 === Sr || 270 === Sr) return Sr;
        throw new Error(`Invalid rotation ${rr}.`)
      },
      Ir = [1, 0, 0, 0, 1, 0, 0, 0, 1],
      fr = (rr, Sr, Qr) => {
        const [Zr, Wr, , ar, jr] = rr, Ir = Math.abs(Zr) * Sr + Math.abs(ar) * Qr, fr = Math.abs(Wr) * Sr + Math.abs(jr) * Qr;
        return Ur(Ur(mr(-Sr / 2, -Qr / 2), rr), mr(Ir / 2, fr / 2))
      },
      Er = rr => {
        const [Sr, Qr] = rr, Zr = Math.atan2(Qr, pr(rr) ? -Sr : Sr);
        return jr(dr(Zr * ar, 90))
      },
      pr = rr => {
        const [Sr, Qr, , Zr, Wr] = rr;
        return Sr * Wr - Qr * Zr < 0
      },
      xr = rr => {
        const Sr = rr * Wr,
          Qr = Math.round(Math.cos(Sr)),
          Zr = Math.round(Math.sin(Sr));
        return [Qr, Zr, 0, -Zr, Qr, 0, 0, 0, 1]
      },
      mr = (rr, Sr) => [1, 0, 0, 0, 1, 0, rr, Sr, 1],
      Nr = (rr, Sr) => [rr, 0, 0, 0, Sr, 0, 0, 0, 1],
      Ur = (rr, Sr) => {
        const Qr = new Array(9);
        for (let Zr = 0; Zr < 3; Zr++)
          for (let Wr = 0; Wr < 3; Wr++) Qr[3 * Zr + Wr] = rr[3 * Zr] * Sr[Wr] + rr[3 * Zr + 1] * Sr[3 + Wr] + rr[3 * Zr + 2] * Sr[6 + Wr];
        return Qr
      },
      tr = (rr, Sr, Qr, Zr) => ({
        rotation: jr(rr + (Sr ? -Qr : Qr)),
        flip: Sr !== Zr
      }),
      hr = rr => rr && rr[rr.length - 1],
      zr = rr => rr >= 0 && rr < 2 ** 32,
      Yr = rr => rr >= -(2 ** 31) && rr < 2 ** 31,
      nr = rr => {
        let Sr = 0;
        for (; 0 === rr.readBits(1) && Sr < 32;) Sr++;
        if (Sr >= 32) throw new Error("Invalid exponential-Golomb code.");
        return (1 << Sr) - 1 + rr.readBits(Sr)
      },
      er = rr => {
        const Sr = nr(rr);
        return 0 === (1 & Sr) ? -(Sr >> 1) : Sr + 1 >> 1
      },
      Kr = (rr, Sr, Qr, Zr) => {
        for (let Wr = Sr; Wr < Qr; Wr++) {
          const Sr = Math.floor(Wr / 8);
          let ar = rr[Sr];
          const jr = 7 - (7 & Wr);
          ar &= ~(1 << jr), ar |= (Zr & 1 << Qr - Wr - 1) >> Qr - Wr - 1 << jr, rr[Sr] = ar
        }
      },
      yr = rr => rr.constructor === Uint8Array ? rr : ArrayBuffer.isView(rr) ? new Uint8Array(rr.buffer, rr.byteOffset, rr.byteLength) : new Uint8Array(rr),
      Br = rr => rr.constructor === DataView ? rr : ArrayBuffer.isView(rr) ? new DataView(rr.buffer, rr.byteOffset, rr.byteLength) : new DataView(rr),
      Tr = "undefined" !== typeof globalThis.TextEncoder ? globalThis.TextEncoder : class {
        constructor() {
          this.encoding = "utf-8"
        }
        encode() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          const Sr = new Uint8Array(3 * rr.length);
          let Qr = 0;
          for (let Zr = 0; Zr < rr.length; Zr++) {
            let Wr = rr.charCodeAt(Zr);
            if (Wr < 128) Sr[Qr++] = Wr;
            else if (Wr < 2048) Sr[Qr++] = 192 | Wr >> 6, Sr[Qr++] = 128 | 63 & Wr;
            else if (Wr < 55296 || Wr > 57343) Sr[Qr++] = 224 | Wr >> 12, Sr[Qr++] = 128 | Wr >> 6 & 63, Sr[Qr++] = 128 | 63 & Wr;
            else {
              const ar = Zr + 1 < rr.length ? rr.charCodeAt(Zr + 1) : 0;
              Wr < 56320 && ar >= 56320 && ar <= 57343 ? (Wr = 65536 + (Wr - 55296 << 10) + (ar - 56320), Zr++, Sr[Qr++] = 240 | Wr >> 18, Sr[Qr++] = 128 | Wr >> 12 & 63, Sr[Qr++] = 128 | Wr >> 6 & 63, Sr[Qr++] = 128 | 63 & Wr) : (Sr[Qr++] = 239, Sr[Qr++] = 191, Sr[Qr++] = 189)
            }
          }
          return Sr.slice(0, Qr)
        }
      },
      vr = "undefined" !== typeof globalThis.TextDecoder ? globalThis.TextDecoder : class {
        constructor() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "utf-8";
          const Sr = rr.trim().toLowerCase();
          if ("utf-8" === Sr || "utf8" === Sr || "unicode-1-1-utf-8" === Sr) this.encoding = "utf-8";
          else if ("utf-16le" === Sr || "utf-16" === Sr) this.encoding = "utf-16le";
          else {
            if ("utf-16be" !== Sr) throw new RangeError(`The encoding label provided ('${rr}') is invalid.`);
            this.encoding = "utf-16be"
          }
        }
        decode(rr) {
          const Sr = rr ? yr(rr) : new Uint8Array(0),
            Qr = [];
          if ("utf-8" === this.encoding) {
            let rr = Sr.length >= 3 && 239 === Sr[0] && 187 === Sr[1] && 191 === Sr[2] ? 3 : 0;
            for (; rr < Sr.length;) {
              const Zr = Sr[rr];
              if (Zr < 128) {
                Qr.push(Zr), rr++;
                continue
              }
              let Wr, ar;
              if (Zr >= 194 && Zr < 224) Wr = 1, ar = 31 & Zr;
              else if (Zr >= 224 && Zr < 240) Wr = 2, ar = 15 & Zr;
              else {
                if (!(Zr >= 240 && Zr < 245)) {
                  Qr.push(65533), rr++;
                  continue
                }
                Wr = 3, ar = 7 & Zr
              }
              let jr = 224 === Zr ? 160 : 240 === Zr ? 144 : 128,
                Ir = 237 === Zr ? 159 : 244 === Zr ? 143 : 191,
                fr = 1;
              for (; fr <= Wr; fr++) {
                const Qr = rr + fr < Sr.length ? Sr[rr + fr] : 0;
                if (Qr < jr || Qr > Ir) break;
                ar = ar << 6 | 63 & Qr, jr = 128, Ir = 191
              }
              rr += fr, fr <= Wr ? Qr.push(65533) : ar >= 65536 ? (ar -= 65536, Qr.push(55296 | ar >> 10, 56320 | 1023 & ar)) : Qr.push(ar)
            }
          } else {
            const rr = "utf-16le" === this.encoding,
              Zr = rr ? 255 : 254,
              Wr = rr ? 254 : 255;
            let ar = Sr.length >= 2 && Sr[0] === Zr && Sr[1] === Wr ? 2 : 0;
            for (; ar + 1 < Sr.length;) {
              const Zr = rr ? Sr[ar] | Sr[ar + 1] << 8 : Sr[ar] << 8 | Sr[ar + 1];
              if (ar += 2, Zr >= 55296 && Zr <= 56319) {
                const Wr = ar + 1 < Sr.length ? rr ? Sr[ar] | Sr[ar + 1] << 8 : Sr[ar] << 8 | Sr[ar + 1] : -1;
                Wr >= 56320 && Wr <= 57343 ? (Qr.push(Zr, Wr), ar += 2) : Qr.push(65533)
              } else Zr >= 56320 && Zr <= 57343 ? Qr.push(65533) : Qr.push(Zr)
            }
            ar < Sr.length && Qr.push(65533)
          }
          let Zr = "";
          for (let Wr = 0; Wr < Qr.length; Wr += 8192) Zr += String.fromCharCode(...Qr.slice(Wr, Wr + 8192));
          return Zr
        }
      },
      Or = new vr,
      Lr = new Tr,
      lr = rr => {
        for (let Sr = 0; Sr < rr.length; Sr++) {
          if (rr.charCodeAt(Sr) > 255) return !1
        }
        return !0
      },
      Xr = {
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        bt2020: 9,
        smpte432: 12
      },
      Pr = {
        bt709: 1,
        smpte170m: 6,
        linear: 8,
        "iec61966-2-1": 13,
        pq: 16,
        hlg: 18
      },
      Hr = {
        rgb: 0,
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        "bt2020-ncl": 9
      },
      qr = rr => !rr || null == rr.primaries && null == rr.transfer && null == rr.matrix && null == rr.fullRange,
      Rr = rr => rr instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && rr instanceof SharedArrayBuffer || ArrayBuffer.isView(rr);
    class gr {
      constructor() {
        this.currentPromise = Promise.resolve(), this.pending = 0
      }
      async acquire() {
        let rr;
        const Sr = new Promise((Sr => {
            let Qr = !1;
            rr = () => {
              Qr || (Sr(), this.pending--, Qr = !0)
            }
          })),
          Qr = this.currentPromise;
        return this.currentPromise = Sr, this.pending++, await Qr, rr
      }
    }
    const Cr = rr => [...rr].map((rr => rr.toString(16).padStart(2, "0"))).join(""),
      Mr = rr => (rr = (rr = (rr = (rr = (rr = rr >> 1 & 1431655765 | (1431655765 & rr) << 1) >> 2 & 858993459 | (858993459 & rr) << 2) >> 4 & 252645135 | (252645135 & rr) << 4) >> 8 & 16711935 | (16711935 & rr) << 8) >> 16 & 65535 | (65535 & rr) << 16) >>> 0,
      Gr = (rr, Sr, Qr) => {
        let Zr = 0,
          Wr = rr.length - 1,
          ar = -1;
        for (; Zr <= Wr;) {
          const jr = Zr + (Wr - Zr + 1) / 2 | 0;
          Qr(rr[jr]) <= Sr ? (ar = jr, Zr = jr + 1) : Wr = jr - 1
        }
        return ar
      },
      kr = () => {
        let rr, Sr;
        return {
          promise: new Promise(((Qr, Zr) => {
            rr = Qr, Sr = Zr
          })),
          resolve: rr,
          reject: Sr
        }
      },
      Ar = (rr, Sr) => {
        for (let Qr = rr.length - 1; Qr >= 0; Qr--)
          if (Sr(rr[Qr])) return Qr;
        return -1
      },
      Vr = rr => {
        throw new Error(`Unexpected value: ${rr}`)
      },
      ir = (rr, Sr, Qr) => {
        const Zr = rr.getUint8(Sr),
          Wr = rr.getUint8(Sr + 1),
          ar = rr.getUint8(Sr + 2);
        return Qr ? Zr | Wr << 8 | ar << 16 : Zr << 16 | Wr << 8 | ar
      },
      wr = (rr, Sr, Qr, Zr) => {
        Qr >>>= 0, Qr &= 16777215, Zr ? (rr.setUint8(Sr, 255 & Qr), rr.setUint8(Sr + 1, Qr >>> 8 & 255), rr.setUint8(Sr + 2, Qr >>> 16 & 255)) : (rr.setUint8(Sr, Qr >>> 16 & 255), rr.setUint8(Sr + 1, Qr >>> 8 & 255), rr.setUint8(Sr + 2, 255 & Qr))
      },
      cr = (rr, Sr, Qr, Zr) => {
        (Qr = or(Qr, -8388608, 8388607)) < 0 && (Qr = Qr + 16777216 & 16777215), wr(rr, Sr, Qr, Zr)
      },
      Fr = (rr, Sr, Qr, Zr) => {
        Zr ? (rr.setUint32(Sr + 0, Qr, !0), rr.setInt32(Sr + 4, Math.floor(Qr / 2 ** 32), !0)) : (rr.setInt32(Sr + 0, Math.floor(Qr / 2 ** 32), !0), rr.setUint32(Sr + 4, Qr, !0))
      },
      or = (rr, Sr, Qr) => Math.max(Sr, Math.min(Qr, rr)),
      br = (rr, Sr, Qr) => rr + (Sr - rr) * Qr,
      Jr = (rr, Sr) => rr - Math.floor(rr / Sr) * Sr,
      Dr = "und",
      dr = (rr, Sr) => Math.round(rr / Sr) * Sr,
      sr = (rr, Sr) => Math.round(rr * Sr) / Sr,
      ur = (rr, Sr) => Math.floor(rr * Sr) / Sr,
      rS = rr => {
        let Sr = 0;
        for (; rr;) Sr++, rr >>= 1;
        return Sr
      },
      SS = rr => {
        let Sr = 0;
        for (; 0 !== rr;) rr &= rr - 1, Sr++;
        return Sr
      },
      QS = /^[a-z]{3}$/,
      ZS = rr => QS.test(rr),
      WS = 1e6 * (1 + Number.EPSILON),
      aS = (rr, Sr) => {
        const Qr = rr < 0 ? -1 : 1;
        let Zr = 0,
          Wr = 1,
          ar = 1,
          jr = 0,
          Ir = rr = Math.abs(rr);
        for (;;) {
          const rr = Math.floor(Ir),
            fr = rr * ar + Zr,
            Er = rr * jr + Wr;
          if (Er > Sr) return {
            num: Qr * ar,
            den: jr
          };
          if (Zr = ar, Wr = jr, ar = fr, jr = Er, Ir = 1 / (Ir - rr), !isFinite(Ir)) break
        }
        return {
          num: Qr * ar,
          den: jr
        }
      };
    class jS {
      constructor() {
        this.currentPromise = Promise.resolve()
      }
      call(rr) {
        return this.currentPromise = this.currentPromise.then(rr)
      }
    }
    let IS = null;
    const fS = () => null !== IS ? IS : IS = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
    let ES = null;
    const pS = () => null !== ES ? ES : ES = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
    let xS = null;
    const mS = () => null !== xS ? xS : xS = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
    const NS = rr => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${rr} is not available in this environment.` : `${rr} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`,
      US = rr => rr instanceof DOMException && "QuotaExceededError" === rr.name && /reclaimed/i.test(rr.message),
      tS = (async () => {})().constructor,
      hS = rr => rr instanceof tS || rr instanceof Promise || "function" === typeof rr?.then,
      zS = (rr, Sr) => -1 !== rr ? rr : Sr,
      YS = function*(rr) {
        for (const Sr in rr) {
          const Qr = rr[Sr];
          void 0 !== Qr && (yield {
            key: Sr,
            value: Qr
          })
        }
      },
      nS = rr => {
        switch (rr.toLowerCase()) {
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
      eS = rr => {
        let Sr = "";
        for (let Qr = 0; Qr < rr.length; Qr++) Sr += String.fromCharCode(rr[Qr]);
        return btoa(Sr)
      },
      KS = (rr, Sr) => {
        if (rr.length !== Sr.length) return !1;
        for (let Qr = 0; Qr < rr.length; Qr++)
          if (rr[Qr] !== Sr[Qr]) return !1;
        return !0
      },
      yS = () => {
        Symbol.dispose ??= Symbol("Symbol.dispose")
      },
      BS = rr => "number" === typeof rr && !Number.isNaN(rr),
      TS = (rr, Sr) => {
        if (Sr.includes("://")) return Sr;
        if (rr.includes("://")) {
          const Sr = rr.indexOf("?"); - 1 !== Sr && (rr = rr.slice(0, Sr))
        }
        let Qr;
        if (Sr.startsWith("/")) {
          const Zr = rr.indexOf("://");
          if (-1 === Zr) Qr = Sr;
          else {
            const Wr = rr.indexOf("/", Zr + 3);
            Qr = -1 === Wr ? rr + Sr : rr.slice(0, Wr) + Sr
          }
        } else {
          const Zr = rr.lastIndexOf("/");
          Qr = -1 === Zr ? Sr : rr.slice(0, Zr + 1) + Sr
        }
        let Zr = "";
        const Wr = Qr.indexOf("://");
        if (-1 !== Wr) {
          const rr = Qr.indexOf("/", Wr + 3); - 1 !== rr && (Zr = Qr.slice(0, rr), Qr = Qr.slice(rr))
        }
        const ar = Qr.split("/"),
          jr = [];
        for (const Ir of ar) ".." === Ir ? jr.pop() : "." !== Ir && jr.push(Ir);
        return Zr + jr.join("/")
      },
      vS = (rr, Sr) => {
        let Qr = -1,
          Zr = 1 / 0;
        for (let Wr = 0; Wr < rr.length; Wr++) {
          const ar = Sr(rr[Wr]);
          ar < Zr && (Zr = ar, Qr = Wr)
        }
        return Qr
      },
      OS = (rr, Sr) => {
        let Qr = -1,
          Zr = -1 / 0;
        for (let Wr = 0; Wr < rr.length; Wr++) {
          const ar = Sr(rr[Wr]);
          ar > Zr && (Zr = ar, Qr = Wr)
        }
        return Qr
      },
      LS = rr => {
        Zr(Number.isInteger(rr.num)), Zr(Number.isInteger(rr.den)), Zr(0 !== rr.den);
        let Sr = Math.abs(rr.num),
          Qr = Math.abs(rr.den);
        for (; 0 !== Qr;) {
          const rr = Sr % Qr;
          Sr = Qr, Qr = rr
        }
        const Wr = Sr || 1;
        return {
          num: rr.num / Wr,
          den: rr.den / Wr
        }
      },
      lS = (rr, Sr) => {
        if ("object" !== typeof rr || !rr) throw new TypeError(`${Sr} must be an object.`);
        if (!Number.isInteger(rr.left) || rr.left < 0) throw new TypeError(`${Sr}.left must be a non-negative integer.`);
        if (!Number.isInteger(rr.top) || rr.top < 0) throw new TypeError(`${Sr}.top must be a non-negative integer.`);
        if (!Number.isInteger(rr.width) || rr.width < 0) throw new TypeError(`${Sr}.width must be a non-negative integer.`);
        if (!Number.isInteger(rr.height) || rr.height < 0) throw new TypeError(`${Sr}.height must be a non-negative integer.`)
      };
    let XS, PS = 1;
    const HS = new Map,
      qS = new Map,
      RS = () => "undefined" === typeof window,
      gS = () => {
        const rr = new Map,
          Sr = new Map;
        self.onmessage = Qr => {
          const Zr = Qr.data;
          switch (Zr.type) {
            case "set-timeout": {
              const Sr = setTimeout((() => {
                rr.delete(Zr.timerId), self.postMessage({
                  type: "fire",
                  timerId: Zr.timerId
                })
              }), Zr.delay);
              rr.set(Zr.timerId, Sr)
            }
            break;
            case "set-interval": {
              const rr = setInterval((() => {
                self.postMessage({
                  type: "fire",
                  timerId: Zr.timerId
                })
              }), Zr.delay);
              Sr.set(Zr.timerId, rr)
            }
            break;
            case "clear-timeout": {
              const Sr = rr.get(Zr.timerId);
              void 0 !== Sr && (clearTimeout(Sr), rr.delete(Zr.timerId))
            }
            break;
            case "clear-interval": {
              const rr = Sr.get(Zr.timerId);
              void 0 !== rr && (clearInterval(rr), Sr.delete(Zr.timerId))
            }
          }
        }
      },
      CS = () => {
        if (XS) return XS;
        const rr = `(${gS.toString()})();`,
          Sr = URL.createObjectURL(new Blob([rr], {
            type: "text/javascript"
          }));
        return XS = new Worker(Sr), URL.revokeObjectURL(Sr), XS.onmessage = rr => {
          const Sr = rr.data,
            Qr = HS.get(Sr.timerId);
          if (Qr) return HS.delete(Sr.timerId), void Qr();
          const Zr = qS.get(Sr.timerId);
          Zr && Zr()
        }, XS
      },
      MS = (rr, Sr) => {
        if (RS()) return {
          id: setInterval(rr, Sr)
        };
        const Qr = PS++;
        return qS.set(Qr, (() => {
          rr()
        })), CS().postMessage({
          type: "set-interval",
          timerId: Qr,
          delay: Sr
        }), {
          id: Qr
        }
      },
      GS = rr => {
        RS() ? clearInterval(rr.id) : (Zr("number" === typeof rr.id), qS.delete(rr.id), CS().postMessage({
          type: "clear-interval",
          timerId: rr.id
        }))
      },
      kS = rr => new Promise((Sr => setTimeout(Sr, rr))),
      AS = rr => Array.isArray(rr) ? rr : [rr];
    class VS {
      constructor() {
        this._listeners = new Map
      }
      on(rr, Sr, Qr) {
        this._listeners.has(rr) || this._listeners.set(rr, new Set);
        const Zr = {
          Wx: Sr,
          once: Qr?.once ?? !1
        };
        return this._listeners.get(rr).add(Zr), () => {
          this._listeners.get(rr)?.delete(Zr)
        }
      }
      _emit() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        const [Zr, Wr] = Sr, ar = this._listeners.get(Zr);
        if (ar)
          for (const Ir of ar) {
            try {
              Ir.Wx(Wr)
            } catch (jr) {
              console.error(jr)
            }
            Ir.once && ar.delete(Ir)
          }
      }
    }
    const iS = rr => null !== rr && "object" === typeof rr && Object.getPrototypeOf(rr) === Object.prototype && Object.values(rr).every((rr => "string" === typeof rr))
  },
  41486: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => CQ,
      e: () => MQ,
      i: () => gQ,
      m: () => qQ,
      n: () => kQ
    });
    var Zr = Qr(41488),
      Wr = Qr(41502);
    var ar;
    ! function(rr) {
      rr[rr.FrameCount = 1] = "FrameCount", rr[rr.FileSize = 2] = "FileSize", rr[rr.Toc = 4] = "Toc"
    }(ar || (ar = {}));
    var jr = Qr(41512),
      Ir = Qr(41474);
    class fr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.bytes = rr, this.view = Sr, this.offset = Qr, this.start = Zr, this.end = Wr, this.bufferPos = Zr - Qr
      }
      static tempFromBytes(rr) {
        return new fr(rr, (0, Ir.ed)(rr), 0, 0, rr.length)
      }
      get length() {
        return this.end - this.start
      }
      get filePos() {
        return this.offset + this.bufferPos
      }
      set filePos(rr) {
        this.bufferPos = rr - this.offset
      }
      get remainingLength() {
        return Math.max(this.end - this.filePos, 0)
      }
      skip(rr) {
        this.bufferPos += rr
      }
      slice(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.end - rr;
        if (rr < this.start || rr + Sr > this.end) throw new RangeError("Slicing outside of original slice.");
        return new fr(this.bytes, this.view, this.offset, rr, rr + Sr)
      }
    }
    const Er = (rr, Sr) => {
        if (rr.filePos < rr.start || rr.filePos + Sr > rr.end) throw new RangeError(`Tried reading [${rr.filePos}, ${rr.filePos+Sr}), but slice is [${rr.start}, ${rr.end}). This is likely an internal error, please report it alongside the file that caused it.`)
      },
      pr = (rr, Sr) => {
        Er(rr, Sr);
        const Qr = rr.bytes.subarray(rr.bufferPos, rr.bufferPos + Sr);
        return rr.bufferPos += Sr, Qr
      };
    var xr, mr;
    ! function(rr) {
      rr[rr.Unsynchronisation = 128] = "Unsynchronisation", rr[rr.ExtendedHeader = 64] = "ExtendedHeader", rr[rr.ExperimentalIndicator = 32] = "ExperimentalIndicator", rr[rr.Footer = 16] = "Footer"
    }(xr || (xr = {})),
    function(rr) {
      rr[rr.ISO_8859_1 = 0] = "ISO_8859_1", rr[rr.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", rr[rr.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", rr[rr.UTF_8 = 3] = "UTF_8"
    }(mr || (mr = {}));
    var Nr = Qr(41478);
    class Ur {
      constructor(rr) {
        this.mutex = new Ir.c, this.trackTimestampInfo = new WeakMap, this.output = rr
      }
      onTrackClose(rr) {}
      validateTimestamp(rr, Sr, Qr) {
        let Zr = this.trackTimestampInfo.get(rr);
        if (Zr) {
          if (Qr && (Zr.maxTimestampBeforeLastKeyPacket = Zr.maxTimestamp), null !== Zr.maxTimestampBeforeLastKeyPacket && Sr < Zr.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${Sr}s, but largest timestamp is ${Zr.maxTimestampBeforeLastKeyPacket}s.`);
          Zr.maxTimestamp = Math.max(Zr.maxTimestamp, Sr)
        } else {
          if (!Qr) throw new Error("First packet must be a key packet.");
          Zr = {
            maxTimestamp: Sr,
            maxTimestampBeforeLastKeyPacket: null
          }, this.trackTimestampInfo.set(rr, Zr)
        }
      }
    }
    var tr = Qr(41506),
      hr = Qr(41493);
    var zr = Qr(41526),
      Yr = Qr(41521);
    class nr {
      constructor(rr) {
        this.writer = rr, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap
      }
      writeU32(rr) {
        this.helperView.setUint32(0, rr, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeU64(rr) {
        this.helperView.setUint32(0, Math.floor(rr / 2 ** 32), !1), this.helperView.setUint32(4, rr, !1), this.writer.write(this.helper.subarray(0, 8))
      }
      writeAscii(rr) {
        for (let Sr = 0; Sr < rr.length; Sr++) this.helperView.setUint8(Sr % 8, rr.charCodeAt(Sr)), Sr % 8 === 7 && this.writer.write(this.helper);
        rr.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, rr.length % 8))
      }
      writeBox(rr) {
        if (this.offsets.set(rr, this.writer.getPos()), rr.contents && !rr.children) this.writeBoxHeader(rr, rr.size ?? rr.contents.byteLength + 8), this.writer.write(rr.contents);
        else {
          const Sr = this.writer.getPos();
          if (this.writeBoxHeader(rr, 0), rr.contents && this.writer.write(rr.contents), rr.children)
            for (const Wr of rr.children) Wr && this.writeBox(Wr);
          const Qr = this.writer.getPos(),
            Zr = rr.size ?? Qr - Sr;
          this.writer.seek(Sr), this.writeBoxHeader(rr, Zr), this.writer.seek(Qr)
        }
      }
      writeBoxHeader(rr, Sr) {
        this.writeU32(rr.largeSize ? 1 : Sr), this.writeAscii(rr.type), rr.largeSize && this.writeU64(Sr)
      }
      measureBoxHeader(rr) {
        return 8 + (rr.largeSize ? 8 : 0)
      }
      patchBox(rr) {
        const Sr = this.offsets.get(rr);
        (0, Ir.I)(void 0 !== Sr);
        const Qr = this.writer.getPos();
        this.writer.seek(Sr), this.writeBox(rr), this.writer.seek(Qr)
      }
      measureBox(rr) {
        if (rr.contents && !rr.children) {
          return this.measureBoxHeader(rr) + rr.contents.byteLength
        } {
          let Sr = this.measureBoxHeader(rr);
          if (rr.contents && (Sr += rr.contents.byteLength), rr.children)
            for (const Qr of rr.children) Qr && (Sr += this.measureBox(Qr));
          return Sr
        }
      }
    }
    const er = new Uint8Array(8),
      Kr = new DataView(er.buffer),
      yr = rr => [(rr % 256 + 256) % 256],
      Br = rr => (Kr.setUint16(0, rr, !1), [er[0], er[1]]),
      Tr = rr => (Kr.setInt16(0, rr, !1), [er[0], er[1]]),
      vr = rr => (Kr.setUint32(0, rr, !1), [er[1], er[2], er[3]]),
      Or = rr => (Kr.setUint32(0, rr, !1), [er[0], er[1], er[2], er[3]]),
      Lr = rr => (Kr.setInt32(0, rr, !1), [er[0], er[1], er[2], er[3]]),
      lr = rr => (Kr.setUint32(0, Math.floor(rr / 2 ** 32), !1), Kr.setUint32(4, rr, !1), [er[0], er[1], er[2], er[3], er[4], er[5], er[6], er[7]]),
      Xr = rr => (Kr.setInt32(0, Math.floor(rr / 2 ** 32), !1), Kr.setUint32(4, rr, !1), [er[0], er[1], er[2], er[3], er[4], er[5], er[6], er[7]]),
      Pr = rr => (Kr.setInt16(0, 256 * rr, !1), [er[0], er[1]]),
      Hr = rr => (Kr.setInt32(0, 65536 * rr, !1), [er[0], er[1], er[2], er[3]]),
      qr = rr => (Kr.setInt32(0, 2 ** 30 * rr, !1), [er[0], er[1], er[2], er[3]]),
      Rr = (rr, Sr) => {
        const Qr = [];
        let Zr = rr;
        do {
          let rr = 127 & Zr;
          Zr >>= 7, Qr.length > 0 && (rr |= 128), Qr.push(rr), void 0 !== Sr && Sr--
        } while (Zr > 0 || Sr);
        return Qr.reverse()
      },
      gr = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = Array(rr.length).fill(null).map(((Sr, Qr) => rr.charCodeAt(Qr)));
        return Sr && Qr.push(0), Qr
      },
      Cr = rr => [Hr(rr[0]), Hr(rr[1]), qr(rr[2]), Hr(rr[3]), Hr(rr[4]), qr(rr[5]), Hr(rr[6]), Hr(rr[7]), qr(rr[8])],
      Mr = (rr, Sr, Qr) => ({
        type: rr,
        contents: Sr && new Uint8Array(Sr.flat(10)),
        children: Qr
      }),
      Gr = (rr, Sr, Qr, Zr, Wr) => Mr(rr, [yr(Sr), vr(Qr), Zr ?? []], Wr),
      kr = () => Mr("styp", [gr("iso5"), Or(0), gr("iso5"), gr("iso6"), gr("mp41"), gr("cmfc"), gr("dash")]),
      Ar = (rr, Sr) => {
        const Qr = Math.max(0, rr.minWrittenTimestamp);
        let Zr = Math.max(0, rr.maxWrittenEndTimestamp - Qr);
        return Number.isFinite(Zr) || (Zr = 0), Gr("sidx", 1, 0, [Or(1), Or(pQ), lr(mQ(Qr, pQ)), lr(0), Br(0), Br(1), Or(2147483647 & Sr), Or(mQ(Zr, pQ)), Or(0)])
      },
      Vr = rr => ({
        type: "mdat",
        largeSize: rr
      }),
      ir = rr => Mr("moov", void 0, [wr(rr.creationTime, rr.trackDatas), ...rr.trackDatas.map((Sr => cr(Sr, rr.creationTime))), rr.isFragmented ? PS(rr.trackDatas) : null, FS(rr)]),
      wr = (rr, Sr) => {
        const Qr = Math.max(0, ...Sr.map((rr => Math.max(0, mQ(NQ(rr), pQ) + mQ(rr.startTimestampOffset ?? 0, pQ))))),
          Zr = Math.max(0, ...Sr.map((rr => rr.track.id))) + 1,
          Wr = !(0, Ir.Pb)(rr) || !(0, Ir.Pb)(Qr),
          ar = Wr ? lr : Or;
        return Gr("mvhd", +Wr, 0, [ar(rr), ar(rr), Or(pQ), ar(Qr), Hr(1), Pr(1), Array(10).fill(0), Cr(Ir.k), Array(24).fill(0), Or(Zr)])
      },
      cr = (rr, Sr) => {
        const Qr = xQ(rr),
          Zr = null !== rr.startTimestampOffset && 0 !== rr.startTimestampOffset;
        return Mr("trak", void 0, [Fr(rr, Sr), Zr ? or(rr) : null, br(rr, Sr), void 0 !== Qr.name ? Mr("udta", void 0, [Mr("name", [...Ir.$c.encode(Qr.name)])]) : null])
      },
      Fr = (rr, Sr) => {
        const Qr = Math.max(0, mQ(NQ(rr), pQ) + mQ(rr.startTimestampOffset ?? 0, pQ)),
          Zr = !(0, Ir.Pb)(Sr) || !(0, Ir.Pb)(Qr),
          Wr = Zr ? lr : Or;
        let ar;
        if ("video" === rr.type && rr.track.metadata.transformationMatrix) ar = rr.track.metadata.transformationMatrix;
        else if ("video" === rr.type) {
          const {
            rotation: Sr,
            flip: Qr
          } = rr.track.metadata, Zr = (0, Ir.jc)((0, Ir.Ec)(Sr ?? 0), (0, Ir.Kc)(Qr ? -1 : 1, 1));
          ar = (0, Ir.U)(Zr, rr.info.width, rr.info.height)
        } else ar = Ir.k;
        let jr = 2;
        !1 !== rr.track.metadata.disposition?.default && (jr |= 1);
        const fr = "video" === rr.type ? 0 : "audio" === rr.type ? 1 : "subtitle" === rr.type ? 2 : (0, Ir.H)(rr);
        return Gr("tkhd", +Zr, jr, [Wr(Sr), Wr(Sr), Or(rr.track.id), Or(0), Wr(Qr), Array(8).fill(0), Br(0), Br(fr), Pr("audio" === rr.type ? 1 : 0), Br(0), Cr(ar), Hr("video" === rr.type ? rr.info.width : 0), Hr("video" === rr.type ? rr.info.height : 0)])
      },
      or = rr => {
        const Sr = rr.startTimestampOffset;
        if ((0, Ir.I)(null !== Sr), Sr > 0) {
          const Qr = mQ(Sr, pQ),
            Zr = mQ(NQ(rr), pQ),
            Wr = !(0, Ir.Pb)(Qr) || !(0, Ir.Pb)(Zr),
            ar = Wr ? lr : Or,
            jr = Wr ? Xr : Lr;
          return Mr("edts", void 0, [Gr("elst", Wr ? 1 : 0, 0, [Or(2), ar(Qr), jr(-1), Hr(1), ar(Zr), jr(0), Hr(1)])])
        } {
          const Qr = mQ(-Sr, rr.timescale),
            Zr = Math.max(0, mQ(NQ(rr), pQ) + mQ(Sr, pQ)),
            Wr = !(0, Ir.Ib)(Qr) || !(0, Ir.Pb)(Zr),
            ar = Wr ? lr : Or,
            jr = Wr ? Xr : Lr;
          return Mr("edts", void 0, [Gr("elst", Wr ? 1 : 0, 0, [Or(1), ar(Zr), jr(Qr), Hr(1)])])
        }
      },
      br = (rr, Sr) => Mr("mdia", void 0, [Jr(rr, Sr), sr(!0, Dr[rr.type], dr[rr.type]), ur(rr)]),
      Jr = (rr, Sr) => {
        const Qr = mQ(NQ(rr), rr.timescale),
          Zr = !(0, Ir.Pb)(Sr) || !(0, Ir.Pb)(Qr),
          Wr = Zr ? lr : Or;
        return Gr("mdhd", +Zr, 0, [Wr(Sr), Wr(Sr), Or(rr.timescale), Wr(Qr), Br(jQ(rr.track.metadata.languageCode ?? Ir.y)), Br(0)])
      },
      Dr = {
        video: "vide",
        audio: "soun",
        subtitle: "text"
      },
      dr = {
        video: "MediabunnyVideoHandler",
        audio: "MediabunnySoundHandler",
        subtitle: "MediabunnyTextHandler"
      },
      sr = function(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "\0\0\0\0";
        return Gr("hdlr", 0, 0, [rr ? gr("mhlr") : Or(0), gr(Sr), gr(Zr), Or(0), Or(0), gr(Qr, !0)])
      },
      ur = rr => Mr("minf", void 0, [rS[rr.type](), SS(), WS(rr)]),
      rS = {
        video: () => Gr("vmhd", 0, 1, [Br(0), Br(0), Br(0), Br(0)]),
        audio: () => Gr("smhd", 0, 0, [Br(0), Br(0)]),
        subtitle: () => Gr("nmhd", 0, 0)
      },
      SS = () => Mr("dinf", void 0, [QS()]),
      QS = () => Gr("dref", 0, 0, [Or(1)], [ZS()]),
      ZS = () => Gr("url ", 0, 1),
      WS = rr => {
        const Sr = rr.compositionTimeOffsetTable.length > 1 || rr.compositionTimeOffsetTable.some((rr => 0 !== rr.sampleCompositionTimeOffset));
        return Mr("stbl", void 0, [aS(rr), BS(rr), Sr ? lS(rr) : null, Sr ? XS(rr) : null, vS(rr), OS(rr), LS(rr), TS(rr)])
      },
      aS = rr => {
        let Sr;
        if ("video" === rr.type) Sr = jS(rQ(rr.track.source._codec, rr.info.decoderConfig.codec), rr);
        else if ("audio" === rr.type) {
          const Qr = QQ(rr.track.source._codec, rr.info.decoderConfig.codec, rr.muxer.isQuickTime);
          (0, Ir.I)(Qr), Sr = xS(Qr, rr)
        } else "subtitle" === rr.type && (Sr = yS(WQ[rr.track.source._codec], rr));
        return (0, Ir.I)(Sr), Gr("stsd", 0, 0, [Or(1)], [Sr])
      },
      jS = (rr, Sr) => Mr(rr, [Array(6).fill(0), Br(1), Br(0), Br(0), Array(12).fill(0), Br(Sr.info.width), Br(Sr.info.height), Or(4718592), Or(4718592), Or(0), Br(1), yr(Yr.e.length), gr(Yr.e), Array(31 - Yr.e.length).fill(0), Br(Sr.info.hasAlphaChannel ? 32 : 24), Tr(65535)], [SQ[Sr.track.source._codec]?.(Sr) ?? null, fS(Sr), (0, Ir.$)(Sr.info.decoderConfig.colorSpace) ? null : ES(Sr), IS(Sr)]),
      IS = rr => 0 === rr.avgBitrate && 0 === rr.maxBitrate ? null : Mr("btrt", [Or(0), Or(rr.maxBitrate), Or(rr.avgBitrate)]),
      fS = rr => rr.info.pixelAspectRatio.num === rr.info.pixelAspectRatio.den ? null : Mr("pasp", [Or(rr.info.pixelAspectRatio.num), Or(rr.info.pixelAspectRatio.den)]),
      ES = rr => {
        const Sr = rr.info.decoderConfig.colorSpace;
        return Mr("colr", [gr(rr.muxer.isQuickTime ? "nclc" : "nclx"), Br(null != Sr?.primaries ? Ir.e[Sr.primaries] : 2), Br(null != Sr?.transfer ? Ir.t[Sr.transfer] : 2), Br(null != Sr?.matrix ? Ir.m[Sr.matrix] : 2), rr.muxer.isQuickTime ? [] : yr((Sr?.fullRange ? 1 : 0) << 7)])
      },
      pS = rr => {
        if (!rr.info.decoderConfig) return null;
        const Sr = rr.info.decoderConfig,
          Qr = Sr.codec.split("."),
          Zr = Number(Qr[1]),
          Wr = Number(Qr[2]),
          ar = (Number(Qr[3]) << 4) + ((Qr[4] ? Number(Qr[4]) : 1) << 1) + (Qr[8] ? Number(Qr[8]) : Number(Sr.colorSpace?.fullRange ?? 0)),
          jr = Qr[5] ? Number(Qr[5]) : Sr.colorSpace?.primaries ? Ir.e[Sr.colorSpace.primaries] : 1,
          fr = Qr[6] ? Number(Qr[6]) : Sr.colorSpace?.transfer ? Ir.t[Sr.colorSpace.transfer] : 1,
          Er = Qr[7] ? Number(Qr[7]) : Sr.colorSpace?.matrix ? Ir.m[Sr.colorSpace.matrix] : 1;
        return Gr("vpcC", 1, 0, [yr(Zr), yr(Wr), yr(ar), yr(jr), yr(fr), yr(Er), Br(0)])
      },
      xS = (rr, Sr) => {
        let Qr, Zr = 0,
          ar = 16;
        const jr = Wr.q.includes(Sr.track.source._codec);
        if (jr) {
          const rr = Sr.track.source._codec,
            {
              sampleSize: Qr
            } = (0, Wr.Q)(rr);
          ar = 8 * Qr, ar > 16 && (Zr = 1)
        }
        if (Sr.muxer.isQuickTime && (Zr = 1), 0 === Zr) Qr = [Array(6).fill(0), Br(1), Br(Zr), Br(0), Or(0), Br(Sr.info.numberOfChannels), Br(ar), Br(0), Br(0), Br(Sr.info.sampleRate < 65536 ? Sr.info.sampleRate : 0), Br(0)];
        else {
          const rr = jr ? 0 : -2;
          Qr = [Array(6).fill(0), Br(1), Br(Zr), Br(0), Or(0), Br(Sr.info.numberOfChannels), Br(Math.min(ar, 16)), Tr(rr), Br(0), Br(Sr.info.sampleRate < 65536 ? Sr.info.sampleRate : 0), Br(0), jr ? [Or(1), Or(ar / 8), Or(Sr.info.numberOfChannels * ar / 8)] : [Or(0), Or(0), Or(0)], Or(2)]
        }
        return Mr(rr, Qr, [ZQ(Sr.track.source._codec, Sr.muxer.isQuickTime)?.(Sr) ?? null, IS(Sr)])
      },
      mS = rr => {
        let Sr;
        switch (rr.track.source._codec) {
          case "aac":
            Sr = 64;
            break;
          case "mp3":
            Sr = 107;
            break;
          case "vorbis":
            Sr = 221;
            break;
          default:
            throw new Error(`Unhandled audio codec: ${rr.track.source._codec}`)
        }
        let Qr = [...yr(Sr), ...yr(21), ...vr(0), ...Or(rr.maxBitrate), ...Or(rr.avgBitrate)];
        if (rr.info.decoderConfig.description) {
          const Sr = (0, Ir.id)(rr.info.decoderConfig.description);
          Qr = [...Qr, ...yr(5), ...Rr(Sr.byteLength), ...Sr]
        }
        return Qr = [...Br(1), ...yr(0), ...yr(4), ...Rr(Qr.length), ...Qr, ...yr(6), ...yr(1), ...yr(2)], Qr = [...yr(3), ...Rr(Qr.length), ...Qr], Gr("esds", 0, 0, Qr)
      },
      NS = rr => Mr("wave", void 0, [US(rr), tS(rr), Mr("\0\0\0\0")]),
      US = rr => Mr("frma", [gr(QQ(rr.track.source._codec, rr.info.decoderConfig.codec, rr.muxer.isQuickTime))]),
      tS = rr => {
        const {
          littleEndian: Sr
        } = (0, Wr.Q)(rr.track.source._codec);
        return Mr("enda", [Br(+Sr)])
      },
      hS = rr => {
        let Sr = rr.info.numberOfChannels,
          Qr = 3840,
          Zr = rr.info.sampleRate,
          Wr = 0,
          ar = 0,
          jr = new Uint8Array(0);
        const fr = rr.info.decoderConfig?.description;
        if (fr) {
          (0, Ir.I)(fr.byteLength >= 18);
          const rr = (0, Ir.id)(fr),
            Er = (0, tr.ob)(rr);
          Sr = Er.outputChannelCount, Qr = Er.preSkip, Zr = Er.inputSampleRate, Wr = Er.outputGain, ar = Er.channelMappingFamily, Er.channelMappingTable && (jr = Er.channelMappingTable)
        }
        return Mr("dOps", [yr(0), yr(Sr), Br(Qr), Or(Zr), Tr(Wr), yr(ar), ...jr])
      },
      zS = rr => {
        const Sr = rr.info.decoderConfig?.description;
        (0, Ir.I)(Sr);
        const Qr = (0, Ir.id)(Sr);
        return Gr("dfLa", 0, 0, [...Qr.subarray(4)])
      },
      YS = rr => {
        const {
          littleEndian: Sr,
          sampleSize: Qr
        } = (0, Wr.Q)(rr.track.source._codec);
        return Gr("pcmC", 0, 0, [yr(+Sr), yr(8 * Qr)])
      },
      nS = rr => {
        (0, Ir.I)(rr.info.primingPacket);
        const Sr = (0, tr.eb)(rr.info.primingPacket.data);
        if (!Sr) throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
        const Qr = new Uint8Array(3),
          Zr = new hr.b(Qr);
        return Zr.writeBits(2, Sr.fscod), Zr.writeBits(5, Sr.bsid), Zr.writeBits(3, Sr.bsmod), Zr.writeBits(3, Sr.acmod), Zr.writeBits(1, Sr.lfeon), Zr.writeBits(5, Sr.bitRateCode), Zr.writeBits(5, 0), Mr("dac3", [...Qr])
      },
      eS = rr => {
        (0, Ir.I)(rr.info.primingPacket);
        const Sr = (0, tr.ib)(rr.info.primingPacket.data);
        if (!Sr) throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
        let Qr = 16;
        for (const jr of Sr.substreams) Qr += 23, jr.numDepSub > 0 ? Qr += 9 : Qr += 1;
        const Zr = Math.ceil(Qr / 8),
          Wr = new Uint8Array(Zr),
          ar = new hr.b(Wr);
        ar.writeBits(13, Sr.dataRate), ar.writeBits(3, Sr.substreams.length - 1);
        for (const jr of Sr.substreams) ar.writeBits(2, jr.fscod), ar.writeBits(5, jr.bsid), ar.writeBits(1, 0), ar.writeBits(1, 0), ar.writeBits(3, jr.bsmod), ar.writeBits(3, jr.acmod), ar.writeBits(1, jr.lfeon), ar.writeBits(3, 0), ar.writeBits(4, jr.numDepSub), jr.numDepSub > 0 ? ar.writeBits(9, jr.chanLoc) : ar.writeBits(1, 0);
        return Mr("dec3", [...Wr])
      },
      KS = rr => {
        (0, Ir.I)(rr.info.primingPacket);
        const Sr = (0, tr.gb)(rr.info.primingPacket.data);
        if (!Sr) throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");
        return Mr("ddts", [...(0, tr.w)(Sr)])
      },
      yS = (rr, Sr) => Mr(rr, [Array(6).fill(0), Br(1)], [aQ[Sr.track.source._codec](Sr), IS(Sr)]),
      BS = rr => Gr("stts", 0, 0, [Or(rr.timeToSampleTable.length), rr.timeToSampleTable.map((rr => [Or(rr.sampleCount), Or(rr.sampleDelta)]))]),
      TS = rr => {
        if (rr.samples.every((rr => "key" === rr.type))) return null;
        const Sr = [...rr.samples.entries()].filter((rr => {
          let [, Sr] = rr;
          return "key" === Sr.type
        }));
        return Gr("stss", 0, 0, [Or(Sr.length), Sr.map((rr => {
          let [Sr] = rr;
          return Or(Sr + 1)
        }))])
      },
      vS = rr => Gr("stsc", 0, 0, [Or(rr.compactlyCodedChunkTable.length), rr.compactlyCodedChunkTable.map((rr => [Or(rr.firstChunk), Or(rr.samplesPerChunk), Or(1)]))]),
      OS = rr => {
        if ("audio" === rr.type && rr.info.requiresPcmTransformation) {
          const {
            sampleSize: Sr
          } = (0, Wr.Q)(rr.track.source._codec);
          return Gr("stsz", 0, 0, [Or(Sr * rr.info.numberOfChannels), Or(rr.samples.reduce(((Sr, Qr) => Sr + mQ(Qr.duration, rr.timescale)), 0))])
        }
        return Gr("stsz", 0, 0, [Or(0), Or(rr.samples.length), rr.samples.map((rr => Or(rr.size)))])
      },
      LS = rr => rr.finalizedChunks.length > 0 && (0, Ir.Yb)(rr.finalizedChunks).offset >= 2 ** 32 ? Gr("co64", 0, 0, [Or(rr.finalizedChunks.length), rr.finalizedChunks.map((rr => lr(rr.offset)))]) : Gr("stco", 0, 0, [Or(rr.finalizedChunks.length), rr.finalizedChunks.map((rr => Or(rr.offset)))]),
      lS = rr => Gr("ctts", 1, 0, [Or(rr.compositionTimeOffsetTable.length), rr.compositionTimeOffsetTable.map((rr => [Or(rr.sampleCount), Lr(rr.sampleCompositionTimeOffset)]))]),
      XS = rr => {
        let Sr = 1 / 0,
          Qr = -1 / 0,
          Zr = 1 / 0,
          Wr = -1 / 0;
        (0, Ir.I)(rr.compositionTimeOffsetTable.length > 0), (0, Ir.I)(rr.samples.length > 0);
        for (let jr = 0; jr < rr.compositionTimeOffsetTable.length; jr++) {
          const Zr = rr.compositionTimeOffsetTable[jr];
          Sr = Math.min(Sr, Zr.sampleCompositionTimeOffset), Qr = Math.max(Qr, Zr.sampleCompositionTimeOffset)
        }
        for (let jr = 0; jr < rr.samples.length; jr++) {
          const Sr = rr.samples[jr];
          Zr = Math.min(Zr, mQ(Sr.timestamp, rr.timescale)), Wr = Math.max(Wr, mQ(Sr.timestamp + Sr.duration, rr.timescale))
        }
        const ar = Math.max(-Sr, 0);
        return Wr >= 2 ** 31 ? null : Gr("cslg", 0, 0, [Lr(ar), Lr(Sr), Lr(Qr), Lr(Zr), Lr(Wr)])
      },
      PS = rr => Mr("mvex", void 0, rr.map(HS)),
      HS = rr => Gr("trex", 0, 0, [Or(rr.track.id), Or(1), Or(0), Or(0), Or(0)]),
      qS = (rr, Sr) => Mr("moof", void 0, [RS(rr), ...Sr.map(CS)]),
      RS = rr => Gr("mfhd", 0, 0, [Or(rr)]),
      gS = rr => {
        let Sr = 0,
          Qr = 0;
        const Zr = "delta" === rr.type;
        return Qr |= +Zr, Sr |= Zr ? 1 : 2, Sr << 24 | Qr << 16
      },
      CS = rr => Mr("traf", void 0, [MS(rr), GS(rr), kS(rr)]),
      MS = rr => {
        (0, Ir.I)(rr.currentChunk);
        let Sr = 0;
        Sr |= 8, Sr |= 16, Sr |= 32, Sr |= 131072;
        const Qr = rr.currentChunk.samples[1] ?? rr.currentChunk.samples[0],
          Zr = {
            duration: Qr.timescaleUnitsToNextSample,
            size: Qr.size,
            flags: gS(Qr)
          };
        return Gr("tfhd", 0, 131128, [Or(rr.track.id), Or(Zr.duration), Or(Zr.size), Or(Zr.flags)])
      },
      GS = rr => ((0, Ir.I)(rr.currentChunk), Gr("tfdt", 1, 0, [lr(mQ(rr.currentChunk.startTimestamp, rr.timescale))])),
      kS = rr => {
        (0, Ir.I)(rr.currentChunk);
        const Sr = rr.currentChunk.samples.map((rr => rr.timescaleUnitsToNextSample)),
          Qr = rr.currentChunk.samples.map((rr => rr.size)),
          Zr = rr.currentChunk.samples.map(gS),
          Wr = rr.currentChunk.samples.map((Sr => mQ(Sr.timestamp - Sr.decodeTimestamp, rr.timescale))),
          ar = new Set(Sr),
          jr = new Set(Qr),
          fr = new Set(Zr),
          Er = new Set(Wr),
          pr = 2 === fr.size && Zr[0] !== Zr[1],
          xr = ar.size > 1,
          mr = jr.size > 1,
          Nr = !pr && fr.size > 1,
          Ur = Er.size > 1 || [...Er].some((rr => 0 !== rr));
        let tr = 0;
        return tr |= 1, tr |= 4 * +pr, tr |= 256 * +xr, tr |= 512 * +mr, tr |= 1024 * +Nr, tr |= 2048 * +Ur, Gr("trun", 1, tr, [Or(rr.currentChunk.samples.length), Or(rr.currentChunk.offset - rr.currentChunk.moofOffset || 0), pr ? Or(Zr[0]) : [], rr.currentChunk.samples.map(((rr, ar) => [xr ? Or(Sr[ar]) : [], mr ? Or(Qr[ar]) : [], Nr ? Or(Zr[ar]) : [], Ur ? Lr(Wr[ar]) : []]))])
      },
      AS = rr => Gr("tfra", 1, 0, [Or(rr.track.id), Or(63), Or(rr.finalizedChunks.length), rr.finalizedChunks.map((Sr => [lr(mQ(Sr.samples[0].timestamp, rr.timescale)), lr(Sr.moofOffset), Or(Sr.trafIndex + 1), Or(1), Or(1)]))]),
      VS = () => Gr("mfro", 0, 0, [Or(0)]),
      iS = () => Mr("vtte"),
      wS = (rr, Sr, Qr, Zr, Wr) => Mr("vttc", void 0, [null !== Wr ? Mr("vsid", [Lr(Wr)]) : null, null !== Qr ? Mr("iden", [...Ir.$c.encode(Qr)]) : null, null !== Sr ? Mr("ctim", [...Ir.$c.encode((0, zr.e)(Sr))]) : null, null !== Zr ? Mr("sttg", [...Ir.$c.encode(Zr)]) : null, Mr("payl", [...Ir.$c.encode(rr)])]),
      cS = rr => Mr("vtta", [...Ir.$c.encode(rr)]),
      FS = rr => {
        const Sr = [],
          Qr = rr.format._options.metadataFormat ?? "auto",
          Zr = rr.output._metadataTags;
        if ("mdir" === Qr || "auto" === Qr && !rr.isQuickTime) {
          const rr = dS(Zr);
          rr && Sr.push(rr)
        } else if ("mdta" === Qr) {
          const rr = sS(Zr);
          rr && Sr.push(rr)
        } else("udta" === Qr || "auto" === Qr && rr.isQuickTime) && oS(Sr, rr.output._metadataTags);
        return 0 === Sr.length ? null : Mr("udta", void 0, Sr)
      },
      oS = (rr, Sr) => {
        for (const {
            key: Qr,
            value: Zr
          }
          of(0, Ir.Xb)(Sr)) switch (Qr) {
          case "title":
            rr.push(bS("\xa9nam", Zr));
            break;
          case "description":
            rr.push(bS("\xa9des", Zr));
            break;
          case "artist":
            rr.push(bS("\xa9ART", Zr));
            break;
          case "album":
            rr.push(bS("\xa9alb", Zr));
            break;
          case "albumArtist":
            rr.push(bS("albr", Zr));
            break;
          case "genre":
            rr.push(bS("\xa9gen", Zr));
            break;
          case "date":
            rr.push(bS("\xa9day", Zr.toISOString().slice(0, 10)));
            break;
          case "comment":
            rr.push(bS("\xa9cmt", Zr));
            break;
          case "lyrics":
            rr.push(bS("\xa9lyr", Zr));
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
            (0, Ir.H)(Qr)
        }
        if (Sr.raw)
          for (const Qr in Sr.raw) {
            const Zr = Sr.raw[Qr];
            null == Zr || 4 !== Qr.length || rr.some((rr => rr.type === Qr)) || ("string" === typeof Zr ? rr.push(bS(Qr, Zr)) : Zr instanceof Uint8Array && rr.push(Mr(Qr, Array.from(Zr))))
          }
      },
      bS = (rr, Sr) => {
        const Qr = Ir.$c.encode(Sr);
        return Mr(rr, [Br(Qr.length), Br(jQ("und")), Array.from(Qr)])
      },
      JS = {
        "image/jpeg": 13,
        "image/png": 14,
        "image/bmp": 27
      },
      DS = (rr, Sr) => {
        const Qr = [];
        for (const {
            key: Zr,
            value: Wr
          }
          of(0, Ir.Xb)(rr)) switch (Zr) {
          case "title":
            Qr.push({
              key: Sr ? "title" : "\xa9nam",
              value: uS(Wr)
            });
            break;
          case "description":
            Qr.push({
              key: Sr ? "description" : "\xa9des",
              value: uS(Wr)
            });
            break;
          case "artist":
            Qr.push({
              key: Sr ? "artist" : "\xa9ART",
              value: uS(Wr)
            });
            break;
          case "album":
            Qr.push({
              key: Sr ? "album" : "\xa9alb",
              value: uS(Wr)
            });
            break;
          case "albumArtist":
            Qr.push({
              key: Sr ? "album_artist" : "aART",
              value: uS(Wr)
            });
            break;
          case "comment":
            Qr.push({
              key: Sr ? "comment" : "\xa9cmt",
              value: uS(Wr)
            });
            break;
          case "genre":
            Qr.push({
              key: Sr ? "genre" : "\xa9gen",
              value: uS(Wr)
            });
            break;
          case "beatsPerMinute":
            Sr || Qr.push({
              key: "tmpo",
              value: Mr("data", [Or(21), Or(0), Br(Wr)])
            });
            break;
          case "lyrics":
            Qr.push({
              key: Sr ? "lyrics" : "\xa9lyr",
              value: uS(Wr)
            });
            break;
          case "date":
            Qr.push({
              key: Sr ? "date" : "\xa9day",
              value: uS(Wr.toISOString().slice(0, 10))
            });
            break;
          case "images":
            for (const rr of Wr) "coverFront" === rr.kind && Qr.push({
              key: "covr",
              value: Mr("data", [Or(JS[rr.mimeType] ?? 0), Or(0), Array.from(rr.data)])
            });
            break;
          case "trackNumber":
            if (Sr) {
              const Sr = void 0 !== rr.tracksTotal ? `${Wr}/${rr.tracksTotal}` : Wr.toString();
              Qr.push({
                key: "track",
                value: uS(Sr)
              })
            } else Qr.push({
              key: "trkn",
              value: Mr("data", [Or(0), Or(0), Br(0), Br(Wr), Br(rr.tracksTotal ?? 0), Br(0)])
            });
            break;
          case "discNumber":
            Sr || Qr.push({
              key: "disc",
              value: Mr("data", [Or(0), Or(0), Br(0), Br(Wr), Br(rr.discsTotal ?? 0), Br(0)])
            });
            break;
          case "tracksTotal":
          case "discsTotal":
          case "raw":
            break;
          default:
            (0, Ir.H)(Zr)
        }
        if (rr.raw)
          for (const Zr in rr.raw) {
            const Wr = rr.raw[Zr];
            null == Wr || !Sr && 4 !== Zr.length || Qr.some((rr => rr.key === Zr)) || ("string" === typeof Wr ? Qr.push({
              key: Zr,
              value: uS(Wr)
            }) : Wr instanceof Uint8Array ? Qr.push({
              key: Zr,
              value: Mr("data", [Or(0), Or(0), Array.from(Wr)])
            }) : Wr instanceof Nr.h && Qr.push({
              key: Zr,
              value: Mr("data", [Or(JS[Wr.mimeType] ?? 0), Or(0), Array.from(Wr.data)])
            }))
          }
        return Qr
      },
      dS = rr => {
        const Sr = DS(rr, !1);
        return 0 === Sr.length ? null : Gr("meta", 0, 0, void 0, [sr(!1, "mdir", "", "appl"), Mr("ilst", void 0, Sr.map((rr => Mr(rr.key, void 0, [rr.value]))))])
      },
      sS = rr => {
        const Sr = DS(rr, !0);
        return 0 === Sr.length ? null : Mr("meta", void 0, [sr(!1, "mdta", ""), Gr("keys", 0, 0, [Or(Sr.length)], Sr.map((rr => Mr("mdta", [...Ir.$c.encode(rr.key)])))), Mr("ilst", void 0, Sr.map(((rr, Sr) => {
          const Qr = String.fromCharCode(...Or(Sr + 1));
          return Mr(Qr, void 0, [rr.value])
        })))])
      },
      uS = rr => Mr("data", [Or(1), Or(0), ...Ir.$c.encode(rr)]),
      rQ = (rr, Sr) => {
        switch (rr) {
          case "avc":
            return Sr.startsWith("avc3") ? "avc3" : "avc1";
          case "hevc":
            return "hvc1";
          case "vp8":
            return "vp08";
          case "vp9":
            return "vp09";
          case "av1":
            return "av01";
          case "prores":
            return Sr
        }
      },
      SQ = {
        avc: rr => rr.info.decoderConfig && Mr("avcC", [...(0, Ir.id)(rr.info.decoderConfig.description)]),
        hevc: rr => rr.info.decoderConfig && Mr("hvcC", [...(0, Ir.id)(rr.info.decoderConfig.description)]),
        vp8: pS,
        vp9: pS,
        av1: rr => Mr("av1C", (0, Wr.F)(rr.info.decoderConfig.codec)),
        prores: null
      },
      QQ = (rr, Sr, Qr) => {
        switch (rr) {
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
            return Sr
        }
        if (Qr) switch (rr) {
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
        } else switch (rr) {
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
      ZQ = (rr, Sr) => {
        switch (rr) {
          case "aac":
          case "mp3":
          case "vorbis":
            return mS;
          case "opus":
            return hS;
          case "flac":
            return zS;
          case "ac3":
            return nS;
          case "eac3":
            return eS;
          case "dts":
            return KS
        }
        if (Sr) switch (rr) {
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return NS
        } else switch (rr) {
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
            return YS
        }
        return null
      },
      WQ = {
        webvtt: "wvtt"
      },
      aQ = {
        webvtt: rr => Mr("vttC", [...Ir.$c.encode(rr.info.config.description)])
      },
      jQ = rr => {
        (0, Ir.I)(3 === rr.length);
        let Sr = 0;
        for (let Qr = 0; Qr < 3; Qr++) Sr <<= 5, Sr += rr.charCodeAt(Qr) - 96;
        return Sr
      };
    var IQ = Qr(41531),
      fQ = Qr(41539);
    const EQ = rr => {
        const Sr = rr.filePos,
          Qr = pr(rr, 9),
          Zr = new hr.b(Qr);
        if (4095 !== Zr.readBits(12)) return null;
        Zr.skipBits(1);
        if (0 !== Zr.readBits(2)) return null;
        const Wr = Zr.readBits(1),
          ar = Zr.readBits(2) + 1,
          jr = Zr.readBits(4);
        if (15 === jr) return null;
        Zr.skipBits(1);
        const Ir = Zr.readBits(3);
        if (0 === Ir) throw new Error("ADTS frames with channel configuration 0 are not supported.");
        Zr.skipBits(1), Zr.skipBits(1), Zr.skipBits(1), Zr.skipBits(1);
        const fr = Zr.readBits(13);
        Zr.skipBits(11);
        const Er = Zr.readBits(2) + 1;
        if (1 !== Er) throw new Error("ADTS frames with more than one AAC frame are not supported.");
        let xr = null;
        return 1 === Wr ? rr.filePos -= 2 : xr = Zr.readBits(16), {
          objectType: ar,
          samplingFrequencyIndex: jr,
          channelConfiguration: Ir,
          frameLength: fr,
          numberOfAacFrames: Er,
          crcCheck: xr,
          startPos: Sr
        }
      },
      pQ = 57600,
      xQ = rr => {
        const Sr = {},
          Qr = rr.track;
        return void 0 !== Qr.metadata.name && (Sr.name = Qr.metadata.name), Sr
      },
      mQ = function(rr, Sr) {
        const Qr = rr * Sr;
        return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Math.round(Qr) : Qr
      },
      NQ = rr => {
        if (0 === rr.samples.length) return 0;
        let Sr = 1 / 0,
          Qr = -1 / 0;
        for (let Zr = 0; Zr < rr.samples.length; Zr++) {
          const Wr = rr.samples[Zr];
          Wr.timestamp < Sr && (Sr = Wr.timestamp), Wr.timestamp + Wr.duration > Qr && (Qr = Wr.timestamp + Wr.duration)
        }
        return Sr === 1 / 0 ? 0 : Qr - Sr
      };
    class UQ extends Ur {
      constructor(rr, Sr) {
        super(rr), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new fQ.d, this.auxWriter = new IQ.d(this.auxTarget, !1), this.auxBoxWriter = new nr(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = (0, Ir.uc)(), this.creationTime = Math.floor(Date.now() / 1e3) + 2082844800, this.finalizedChunks = [], this.wroteFragmentedHeader = !1, this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = Sr, this.formatOptions = {
          ...Sr._options
        }, this.isQuickTime = Sr instanceof MQ, this.isCmaf = Sr instanceof CQ, this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (Sr instanceof CQ ? 1 / 0 : 1), this.auxWriter.start()
      }
      async start() {
        const rr = await this.mutex.acquire();
        if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((rr => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : rr instanceof fQ.d)), this.boxWriter = new nr(this.writer), this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof fQ.d && "in-memory"), this.isFragmented = "fragmented" === this.fastStart), this.isCmaf) {
          if (!this.output._hasInitTarget()) throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
          const rr = await this.output._getInitTarget(),
            Sr = new IQ.d(rr, !0);
          Sr.start(), this.initWriter = Sr, this.initBoxWriter = new nr(Sr)
        }
        const Sr = this.output.tracks.some((rr => rr.isVideoTrack() && "avc" === rr.source._codec));
        {
          const rr = this.initBoxWriter ?? this.boxWriter;
          if ((0, Ir.I)(rr), this.formatOptions.onFtyp && rr.writer.startTrackingWrites(), rr.writeBox((rr => {
              const Sr = 512;
              return rr.isQuickTime ? Mr("ftyp", [gr("qt  "), Or(Sr), gr("qt  ")]) : rr.fragmented ? rr.cmaf ? Mr("ftyp", [gr("iso5"), Or(Sr), gr("iso5"), gr("iso6"), gr("mp41"), gr("cmfc"), gr("dash")]) : Mr("ftyp", [gr("iso5"), Or(Sr), gr("iso5"), gr("iso6"), gr("mp41")]) : Mr("ftyp", [gr("isom"), Or(Sr), gr("isom"), rr.holdsAvc ? gr("avc1") : [], gr("mp41")])
            })({
              isQuickTime: this.isQuickTime,
              holdsAvc: Sr,
              fragmented: this.isFragmented,
              cmaf: this.isCmaf
            })), this.formatOptions.onFtyp) {
            const {
              data: Sr,
              start: Qr
            } = rr.writer.stopTrackingWrites();
            this.formatOptions.onFtyp(Sr, Qr)
          }
          this.ftypSize = rr.writer.getPos(), this.isCmaf && await this.initWriter.flush()
        }
        if ("in-memory" === this.fastStart);
        else if ("reserve" === this.fastStart) {
          for (const Qr of this.output.tracks)
            if (void 0 === Qr.metadata.maximumPacketCount) throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")
        } else this.isFragmented || ((0, Ir.I)(this.writer), (0, Ir.I)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = Vr(!0), this.boxWriter.writeBox(this.mdat));
        await (this.writer?.flush());
        for (const Qr of this.output.tracks) Qr.isVideoTrack() && Qr.metadata.decoderConfig ? this.getVideoTrackData(Qr, Qr.metadata.primingPacket ?? null, {
          decoderConfig: Qr.metadata.decoderConfig
        }) : Qr.isAudioTrack() && Qr.metadata.decoderConfig && this.getAudioTrackData(Qr, Qr.metadata.primingPacket ?? null, {
          decoderConfig: Qr.metadata.decoderConfig
        });
        rr()
      }
      allTracksAreKnown() {
        for (const rr of this.output.tracks)
          if (!rr.source._closed && !this.trackDatas.some((Sr => Sr.track === rr))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const rr = this.trackDatas.map((rr => {
          if ("video" === rr.type) return rr.info.decoderConfig.codec;
          if ("audio" === rr.type) return rr.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [rr.track.source._codec]
        }));
        return (rr => {
          let Sr = (rr.hasVideo ? "video/" : rr.hasAudio ? "audio/" : "application/") + (rr.isQuickTime ? "quicktime" : "mp4");
          rr.codecStrings.length > 0 && (Sr += `; codecs="${[...new Set(rr.codecStrings)].join(", ")}"`);
          return Sr
        })({
          isQuickTime: this.isQuickTime,
          hasVideo: this.trackDatas.some((rr => "video" === rr.type)),
          hasAudio: this.trackDatas.some((rr => "audio" === rr.type)),
          codecStrings: rr
        })
      }
      getVideoTrackData(rr, Sr, Qr) {
        const Zr = this.trackDatas.find((Sr => Sr.track === rr));
        if (Zr) return Zr;
        (0, Wr.X)(Qr, rr.source._codec), (0, Ir.I)(Qr), (0, Ir.I)(Qr.decoderConfig);
        const ar = {
          ...Qr.decoderConfig
        };
        (0, Ir.I)(void 0 !== ar.codedWidth), (0, Ir.I)(void 0 !== ar.codedHeight);
        let jr = !1;
        if ("avc" !== rr.source._codec || ar.description) {
          if ("hevc" === rr.source._codec && !ar.description) {
            if (!Sr) throw new Error("No HEVC description provided; you must therefore provide a priming packet.");
            const rr = (0, tr.Q)(Sr.data);
            if (!rr) throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
            ar.description = (0, tr.xb)(rr), jr = !0
          }
        } else {
          if (!Sr) throw new Error("No AVC description provided; you must therefore provide a priming packet.");
          const rr = (0, tr.O)(Sr.data);
          if (!rr) throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
          ar.description = (0, tr.tb)(rr), jr = !0
        }
        const fr = (0, Ir.bb)(1 / (rr.metadata.frameRate ?? pQ), 1e6).den,
          Er = ar.displayAspectWidth,
          pr = ar.displayAspectHeight,
          xr = void 0 === Er || void 0 === pr ? {
            num: 1,
            den: 1
          } : (0, Ir.Tc)({
            num: Er * ar.codedHeight,
            den: pr * ar.codedWidth
          }),
          mr = "ap4h" === ar.codec || "ap4x" === ar.codec,
          Nr = {
            muxer: this,
            track: rr,
            type: "video",
            info: {
              width: ar.codedWidth,
              height: ar.codedHeight,
              pixelAspectRatio: xr,
              decoderConfig: ar,
              requiresAnnexBTransformation: jr,
              hasAlphaChannel: mr
            },
            timescale: fr,
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
            avgBitrate: rr.source._nominalBitrate ?? rr.metadata.averageBitrate ?? 0,
            maxBitrate: rr.source._nominalBitrate ?? rr.metadata.bitrate ?? 0
          };
        return this.trackDatas.push(Nr), this.trackDatas.sort(((rr, Sr) => rr.track.id - Sr.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Nr
      }
      getAudioTrackData(rr, Sr, Qr) {
        const ar = this.trackDatas.find((Sr => Sr.track === rr));
        if (ar) return ar;
        (0, Wr.T)(Qr, rr.source._codec), (0, Ir.I)(Qr), (0, Ir.I)(Qr.decoderConfig);
        const jr = {
          ...Qr.decoderConfig
        };
        let Er = !1;
        if ("aac" === rr.source._codec && !jr.description) {
          if (!Sr) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const rr = EQ(fr.tempFromBytes(Sr.data));
          if (!rr) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const Qr = Zr.e[rr.samplingFrequencyIndex],
            Wr = Zr.c[rr.channelConfiguration];
          if (void 0 === Qr || void 0 === Wr) throw new Error("Invalid ADTS frame header.");
          jr.description = (0, Zr.h)({
            objectType: rr.objectType,
            outputSampleRate: Qr,
            outputNumberOfChannels: Wr
          }), Er = !0
        }
        if (!Sr) {
          if ("ac3" === rr.source._codec || "eac3" === rr.source._codec) throw new Error("AC-3/E-AC-3 require a priming packet.");
          if ("dts" === rr.source._codec) throw new Error("DTS requires a priming packet.")
        }
        const pr = {
          muxer: this,
          track: rr,
          type: "audio",
          info: {
            numberOfChannels: Qr.decoderConfig.numberOfChannels,
            sampleRate: Qr.decoderConfig.sampleRate,
            decoderConfig: jr,
            requiresPcmTransformation: !this.isFragmented && Wr.q.includes(rr.source._codec),
            expectedNextPcmPacketTimestamp: null,
            requiresAdtsStripping: Er,
            primingPacket: Sr
          },
          timescale: jr.sampleRate,
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
          avgBitrate: rr.source._nominalBitrate ?? rr.metadata.averageBitrate ?? 0,
          maxBitrate: rr.source._nominalBitrate ?? rr.metadata.bitrate ?? 0
        };
        return this.trackDatas.push(pr), this.trackDatas.sort(((rr, Sr) => rr.track.id - Sr.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), pr
      }
      getSubtitleTrackData(rr, Sr) {
        const Qr = this.trackDatas.find((Sr => Sr.track === rr));
        if (Qr) return Qr;
        (0, Wr.V)(Sr), (0, Ir.I)(Sr), (0, Ir.I)(Sr.config);
        const Zr = {
          muxer: this,
          track: rr,
          type: "subtitle",
          info: {
            config: Sr.config
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
          avgBitrate: rr.source._nominalBitrate ?? rr.metadata.averageBitrate ?? 0,
          maxBitrate: rr.source._nominalBitrate ?? rr.metadata.bitrate ?? 0,
          lastCueEndTimestamp: null,
          cueQueue: [],
          nextSourceId: 0,
          cueToSourceId: new WeakMap
        };
        return this.trackDatas.push(Zr), this.trackDatas.sort(((rr, Sr) => rr.track.id - Sr.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Zr
      }
      async addEncodedVideoPacket(rr, Sr, Qr) {
        const Zr = await this.mutex.acquire();
        try {
          const Zr = this.getVideoTrackData(rr, Sr, Qr);
          let Wr = Sr.data;
          if (Zr.info.requiresAnnexBTransformation) {
            const rr = [...(0, tr.$)(Wr)].map((rr => Wr.subarray(rr.offset, rr.offset + rr.length)));
            if (0 === rr.length) throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
            Wr = (0, tr.C)(rr, 4)
          }
          this.validateTimestamp(Zr.track, Sr.timestamp, "key" === Sr.type);
          const ar = this.createSampleForTrack(Zr, Wr, Sr.timestamp, Sr.duration, Sr.type);
          await this.registerSample(Zr, ar)
        } finally {
          Zr()
        }
      }
      async addEncodedAudioPacket(rr, Sr, Qr) {
        const Zr = await this.mutex.acquire();
        try {
          const Zr = this.getAudioTrackData(rr, Sr, Qr);
          let ar = Sr.data;
          if (Zr.info.requiresAdtsStripping) {
            const rr = EQ(fr.tempFromBytes(ar));
            if (!rr) throw new Error("Expected ADTS frame, didn't get one.");
            const Sr = null === rr.crcCheck ? 7 : 9;
            ar = ar.subarray(Sr)
          }
          this.validateTimestamp(Zr.track, Sr.timestamp, "key" === Sr.type);
          let jr = Sr.timestamp,
            Ir = Sr.duration;
          if (Zr.info.requiresPcmTransformation) {
            const rr = (0, Wr.Q)(Zr.info.decoderConfig.codec).sampleSize * Zr.info.numberOfChannels;
            if (Ir = ar.byteLength / rr / Zr.info.sampleRate, null !== Zr.info.expectedNextPcmPacketTimestamp) {
              const rr = jr - Zr.info.expectedNextPcmPacketTimestamp;
              if (rr < .01) jr = Zr.info.expectedNextPcmPacketTimestamp;
              else {
                const Sr = await this.padWithSilence(Zr, Zr.info.expectedNextPcmPacketTimestamp, rr);
                jr = Zr.info.expectedNextPcmPacketTimestamp + Sr
              }
            }
            Zr.info.expectedNextPcmPacketTimestamp = jr + Ir
          }
          const Er = this.createSampleForTrack(Zr, ar, jr, Ir, Sr.type);
          await this.registerSample(Zr, Er)
        } finally {
          Zr()
        }
      }
      async padWithSilence(rr, Sr, Qr) {
        const Zr = mQ(Qr, rr.timescale);
        if (Qr = Zr / rr.timescale, Zr > 0) {
          const {
            sampleSize: ar,
            silentValue: jr
          } = (0, Wr.Q)(rr.info.decoderConfig.codec), Ir = Zr * rr.info.numberOfChannels, fr = new Uint8Array(ar * Ir).fill(jr), Er = this.createSampleForTrack(rr, new Uint8Array(fr.buffer), Sr, Qr, "key");
          await this.registerSample(rr, Er)
        }
        return Qr
      }
      async addSubtitleCue(rr, Sr, Qr) {
        const Zr = await this.mutex.acquire();
        try {
          const Zr = this.getSubtitleTrackData(rr, Qr);
          this.validateTimestamp(Zr.track, Sr.timestamp, !0), "webvtt" === rr.source._codec && (Zr.cueQueue.push(Sr), await this.processWebVTTCues(Zr, Sr.timestamp))
        } finally {
          Zr()
        }
      }
      async processWebVTTCues(rr, Sr) {
        for (; rr.cueQueue.length > 0;) {
          rr.lastCueEndTimestamp ??= Math.min(0, rr.cueQueue[0].timestamp);
          const Qr = new Set([]);
          for (const Er of rr.cueQueue)(0, Ir.I)(Er.timestamp <= Sr), (0, Ir.I)(rr.lastCueEndTimestamp <= Er.timestamp + Er.duration), Qr.add(Math.max(Er.timestamp, rr.lastCueEndTimestamp)), Qr.add(Er.timestamp + Er.duration);
          const Zr = [...Qr].sort(((rr, Sr) => rr - Sr)),
            Wr = Zr[0],
            ar = Zr[1] ?? Wr;
          if (Sr < ar) break;
          if (rr.lastCueEndTimestamp < Wr) {
            this.auxWriter.seek(0);
            const Sr = iS();
            this.auxBoxWriter.writeBox(Sr);
            const Qr = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
              Zr = this.createSampleForTrack(rr, Qr, rr.lastCueEndTimestamp, Wr - rr.lastCueEndTimestamp, "key");
            await this.registerSample(rr, Zr), rr.lastCueEndTimestamp = Wr
          }
          this.auxWriter.seek(0);
          for (let Sr = 0; Sr < rr.cueQueue.length; Sr++) {
            const Qr = rr.cueQueue[Sr];
            if (Qr.timestamp >= ar) break;
            zr.g.lastIndex = 0;
            const Zr = zr.g.test(Qr.text),
              jr = Qr.timestamp + Qr.duration;
            let Ir = rr.cueToSourceId.get(Qr);
            if (void 0 === Ir && ar < jr && (Ir = rr.nextSourceId++, rr.cueToSourceId.set(Qr, Ir)), Qr.notes) {
              const rr = cS(Qr.notes);
              this.auxBoxWriter.writeBox(rr)
            }
            const fr = wS(Qr.text, Zr ? Wr : null, Qr.identifier ?? null, Qr.settings ?? null, Ir ?? null);
            this.auxBoxWriter.writeBox(fr), jr === ar && rr.cueQueue.splice(Sr--, 1)
          }
          const jr = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
            fr = this.createSampleForTrack(rr, jr, Wr, ar - Wr, "key");
          await this.registerSample(rr, fr), rr.lastCueEndTimestamp = ar
        }
      }
      createSampleForTrack(rr, Sr, Qr, Zr, Wr) {
        return {
          timestamp: Qr,
          decodeTimestamp: Qr,
          duration: Zr,
          data: Sr,
          size: Sr.byteLength,
          type: Wr,
          timescaleUnitsToNextSample: mQ(Zr, rr.timescale)
        }
      }
      processTimestamps(rr, Sr) {
        if (0 === rr.timestampProcessingQueue.length) return;
        if ("audio" === rr.type && rr.info.requiresPcmTransformation) {
          (0, Ir.I)(!this.isFragmented), rr.startTimestampOffset ??= rr.timestampProcessingQueue[0].timestamp;
          let Sr = 0;
          for (let Qr = 0; Qr < rr.timestampProcessingQueue.length; Qr++) {
            const Zr = rr.timestampProcessingQueue[Qr];
            Sr += mQ(Zr.duration, rr.timescale)
          }
          if (0 === rr.timeToSampleTable.length) rr.timeToSampleTable.push({
            sampleCount: Sr,
            sampleDelta: 1
          });
          else {
            (0, Ir.Yb)(rr.timeToSampleTable).sampleCount += Sr
          }
          return void(rr.timestampProcessingQueue.length = 0)
        }
        const Qr = rr.timestampProcessingQueue.map((rr => rr.timestamp)).sort(((rr, Sr) => rr - Sr));
        this.isFragmented ? rr.startTimestampOffset ??= Math.min(Qr[0], 0) : rr.startTimestampOffset ??= Qr[0];
        for (let Zr = 0; Zr < rr.timestampProcessingQueue.length; Zr++) {
          const Sr = rr.timestampProcessingQueue[Zr];
          Sr.decodeTimestamp = Qr[Zr];
          const Wr = mQ(Sr.timestamp - Sr.decodeTimestamp, rr.timescale),
            ar = mQ(Sr.duration, rr.timescale);
          if (null !== rr.lastTimescaleUnits) {
            (0, Ir.I)(rr.lastSample);
            const Qr = mQ(Sr.decodeTimestamp, rr.timescale, !1),
              Zr = Math.round(Qr - rr.lastTimescaleUnits);
            if ((0, Ir.I)(Zr >= 0), rr.lastTimescaleUnits += Zr, rr.lastSample.timescaleUnitsToNextSample = Zr, !this.isFragmented) {
              let Sr = (0, Ir.Yb)(rr.timeToSampleTable);
              if ((0, Ir.I)(Sr), 1 === Sr.sampleCount) {
                Sr.sampleDelta = Zr;
                const Qr = rr.timeToSampleTable[rr.timeToSampleTable.length - 2];
                Qr && Qr.sampleDelta === Zr && (Qr.sampleCount++, rr.timeToSampleTable.pop(), Sr = Qr)
              } else Sr.sampleDelta !== Zr && (Sr.sampleCount--, rr.timeToSampleTable.push(Sr = {
                sampleCount: 1,
                sampleDelta: Zr
              }));
              Sr.sampleDelta === ar ? Sr.sampleCount++ : rr.timeToSampleTable.push({
                sampleCount: 1,
                sampleDelta: ar
              });
              const Qr = (0, Ir.Yb)(rr.compositionTimeOffsetTable);
              (0, Ir.I)(Qr), Qr.sampleCompositionTimeOffset === Wr ? Qr.sampleCount++ : rr.compositionTimeOffsetTable.push({
                sampleCount: 1,
                sampleCompositionTimeOffset: Wr
              })
            }
          } else rr.lastTimescaleUnits = mQ(Sr.decodeTimestamp, rr.timescale, !1), this.isFragmented || (rr.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: ar
          }), rr.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: Wr
          }));
          rr.lastSample = Sr
        }
        if (rr.timestampProcessingQueue.length = 0, (0, Ir.I)(rr.lastSample), (0, Ir.I)(null !== rr.lastTimescaleUnits), void 0 !== Sr && 0 === rr.lastSample.timescaleUnitsToNextSample) {
          (0, Ir.I)("key" === Sr.type);
          const Qr = mQ(Sr.timestamp, rr.timescale, !1),
            Zr = Math.round(Qr - rr.lastTimescaleUnits);
          rr.lastSample.timescaleUnitsToNextSample = Zr
        }
      }
      async registerSample(rr, Sr) {
        "key" === Sr.type && this.processTimestamps(rr, Sr), rr.timestampProcessingQueue.push(Sr), this.isFragmented ? (rr.sampleQueue.push(Sr), await this.interleaveSamples()) : "reserve" === this.fastStart ? await this.registerSampleFastStartReserve(rr, Sr) : await this.addSampleToTrack(rr, Sr)
      }
      async addSampleToTrack(rr, Sr) {
        if (!this.isFragmented && (rr.samples.push(Sr), "reserve" === this.fastStart)) {
          const Sr = rr.track.metadata.maximumPacketCount;
          if ((0, Ir.I)(void 0 !== Sr), rr.samples.length > Sr) throw new Error(`Track #${rr.track.id} has already reached the maximum packet count (${Sr}). Either add less packets or increase the maximum packet count.`)
        }
        let Qr = !1;
        if (rr.currentChunk) {
          rr.currentChunk.startTimestamp = Math.min(rr.currentChunk.startTimestamp, Sr.timestamp);
          const Zr = Sr.timestamp - rr.currentChunk.startTimestamp;
          if (this.isFragmented) {
            const Wr = this.trackDatas.every((Qr => {
              if (rr === Qr) return "key" === Sr.type;
              const Zr = Qr.sampleQueue[0];
              return Zr ? "key" === Zr.type : Qr.closed
            }));
            Zr >= this.minimumFragmentDuration && Wr && Sr.timestamp > this.maxWrittenTimestamp && (Qr = !0, await this.finalizeFragment())
          } else Qr = Zr >= .5
        } else Qr = !0;
        Qr && (rr.currentChunk && await this.finalizeCurrentChunk(rr), rr.currentChunk = {
          startTimestamp: Sr.timestamp,
          samples: [],
          offset: null,
          moofOffset: null,
          trafIndex: null
        }), (0, Ir.I)(rr.currentChunk), rr.currentChunk.samples.push(Sr), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, Sr.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, Sr.timestamp + Sr.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, Sr.timestamp))
      }
      async finalizeCurrentChunk(rr) {
        if ((0, Ir.I)(!this.isFragmented), (0, Ir.I)(this.writer), !rr.currentChunk) return;
        rr.finalizedChunks.push(rr.currentChunk), this.finalizedChunks.push(rr.currentChunk);
        let Sr = rr.currentChunk.samples.length;
        if ("audio" === rr.type && rr.info.requiresPcmTransformation && (Sr = rr.currentChunk.samples.reduce(((Sr, Qr) => Sr + mQ(Qr.duration, rr.timescale)), 0)), 0 !== rr.compactlyCodedChunkTable.length && (0, Ir.Yb)(rr.compactlyCodedChunkTable).samplesPerChunk === Sr || rr.compactlyCodedChunkTable.push({
            firstChunk: rr.finalizedChunks.length,
            samplesPerChunk: Sr
          }), "in-memory" !== this.fastStart) {
          rr.currentChunk.offset = this.writer.getPos();
          for (const Sr of rr.currentChunk.samples)(0, Ir.I)(Sr.data), this.writer.write(Sr.data), Sr.data = null;
          await this.writer.flush()
        } else rr.currentChunk.offset = 0
      }
      async interleaveSamples() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if ((0, Ir.I)(this.isFragmented), rr || this.allTracksAreKnown()) rr: for (;;) {
          let Sr = null,
            Qr = 1 / 0;
          for (const Wr of this.trackDatas) {
            if (!rr && 0 === Wr.sampleQueue.length && !Wr.closed) break rr;
            Wr.sampleQueue.length > 0 && Wr.sampleQueue[0].timestamp < Qr && (Sr = Wr, Qr = Wr.sampleQueue[0].timestamp)
          }
          if (!Sr) break;
          const Zr = Sr.sampleQueue.shift();
          await this.addSampleToTrack(Sr, Zr)
        }
      }
      async finalizeFragment() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isCmaf;
        if ((0, Ir.I)(this.isFragmented), !this.wroteFragmentedHeader) {
          this.wroteFragmentedHeader = !0;
          const rr = this.initBoxWriter ?? this.boxWriter;
          (0, Ir.I)(rr), this.formatOptions.onMoov && rr.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
          const Sr = ir(this);
          if (rr.writeBox(Sr), this.formatOptions.onMoov) {
            const {
              data: Sr,
              start: Qr
            } = rr.writer.stopTrackingWrites();
            this.formatOptions.onMoov(Sr, Qr)
          }
          if (this.isCmaf) {
            (0, Ir.I)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new nr(this.writer);
            const rr = this.boxWriter.measureBox(kr()),
              Sr = this.boxWriter.measureBox(Ar(this, 0));
            this.segmentHeaderSize = rr + Sr, this.writer.seek(this.segmentHeaderSize)
          }
        }(0, Ir.I)(this.writer), (0, Ir.I)(this.boxWriter);
        const Sr = this.trackDatas.filter((rr => rr.currentChunk));
        if (0 === Sr.length) return void(rr && await this.writer.flush());
        const Qr = this.nextFragmentNumber++,
          Zr = qS(Qr, Sr),
          Wr = this.writer.getPos(),
          ar = Wr + this.boxWriter.measureBox(Zr);
        let jr = ar + 8,
          fr = 1 / 0;
        for (let Nr = 0; Nr < Sr.length; Nr++) {
          const rr = Sr[Nr];
          (0, Ir.I)(rr.currentChunk), (0, Ir.I)(null !== rr.startTimestampOffset), rr.currentChunk.offset = jr, rr.currentChunk.moofOffset = Wr, rr.currentChunk.trafIndex = Nr, rr.currentChunk.startTimestamp -= rr.startTimestampOffset;
          for (const Sr of rr.currentChunk.samples) jr += Sr.size, Sr.timestamp -= rr.startTimestampOffset, Sr.decodeTimestamp -= rr.startTimestampOffset;
          fr = Math.min(fr, rr.currentChunk.startTimestamp)
        }
        const Er = jr - ar,
          pr = Er >= 2 ** 32;
        if (pr)
          for (const Ir of Sr) Ir.currentChunk.offset += 8;
        this.formatOptions.onMoof && this.writer.startTrackingWrites();
        const xr = qS(Qr, Sr);
        if (this.boxWriter.writeBox(xr), this.formatOptions.onMoof) {
          const {
            data: rr,
            start: Sr
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMoof(rr, Sr, fr)
        }(0, Ir.I)(this.writer.getPos() === ar), this.formatOptions.onMdat && this.writer.startTrackingWrites();
        const mr = Vr(pr);
        mr.size = Er, this.boxWriter.writeBox(mr), this.writer.seek(ar + (pr ? 16 : 8));
        for (const Ir of Sr)
          for (const rr of Ir.currentChunk.samples) this.writer.write(rr.data), rr.data = null;
        if (this.formatOptions.onMdat) {
          const {
            data: rr,
            start: Sr
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMdat(rr, Sr)
        }
        for (const Ir of Sr) Ir.finalizedChunks.push(Ir.currentChunk), this.finalizedChunks.push(Ir.currentChunk), Ir.currentChunk = null;
        rr && await this.writer.flush()
      }
      async registerSampleFastStartReserve(rr, Sr) {
        this.allTracksAreKnown() ? (this.mdat || await this.createFastStartReserveMdat(), await this.addSampleToTrack(rr, Sr)) : rr.sampleQueue.push(Sr)
      }
      async createFastStartReserveMdat() {
        (0, Ir.I)(this.writer), (0, Ir.I)(this.boxWriter), this.ensureOneEnabledTrack();
        const rr = ir(this),
          Sr = this.boxWriter.measureBox(rr) + this.computeSampleTableSizeUpperBound() + 4096;
        (0, Ir.I)(null !== this.ftypSize), this.writer.seek(this.ftypSize + Sr), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = Vr(!0), this.boxWriter.writeBox(this.mdat);
        for (const Qr of this.trackDatas) {
          for (const rr of Qr.sampleQueue) await this.addSampleToTrack(Qr, rr);
          Qr.sampleQueue.length = 0
        }
      }
      computeSampleTableSizeUpperBound() {
        (0, Ir.I)("reserve" === this.fastStart);
        let rr = 0;
        for (const Sr of this.trackDatas) {
          const Qr = Sr.track.metadata.maximumPacketCount;
          (0, Ir.I)(void 0 !== Qr), rr += 8 * Math.ceil(2 / 3 * Qr), rr += 4 * Qr, rr += 8 * Math.ceil(2 / 3 * Qr), rr += 12 * Math.ceil(2 / 3 * Qr), rr += 4 * Qr, rr += 8 * Qr
        }
        return rr
      }
      async onTrackClose(rr) {
        const Sr = await this.mutex.acquire(),
          Qr = this.trackDatas.find((Sr => Sr.track === rr));
        Qr && (Qr.closed = !0, "subtitle" === Qr.type && "webvtt" === rr.source._codec && await this.processWebVTTCues(Qr, 1 / 0), this.processTimestamps(Qr)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), Sr()
      }
      ensureOneEnabledTrack() {
        for (const rr of ["video", "audio", "subtitle"]) {
          const Sr = this.trackDatas.filter((Sr => Sr.type === rr));
          if (0 === Sr.length) continue;
          if (!Sr.some((rr => !1 !== rr.track.metadata.disposition?.default))) {
            const rr = Sr[0];
            rr.track.metadata.disposition = {
              ...rr.track.metadata.disposition,
              default: !0
            }
          }
        }
      }
      async forceFragmentFinalization() {
        (0, Ir.I)(this.isFragmented);
        const rr = await this.mutex.acquire();
        try {
          for (const rr of this.trackDatas) "subtitle" === rr.type && "webvtt" === rr.track.source._codec && await this.processWebVTTCues(rr, 1 / 0), this.processTimestamps(rr);
          await this.interleaveSamples(!0), await this.finalizeFragment()
        } finally {
          rr()
        }
      }
      async finalize() {
        const rr = await this.mutex.acquire();
        this.allTracksKnown.resolve(), this.ensureOneEnabledTrack(), this.mdat || "reserve" !== this.fastStart || await this.createFastStartReserveMdat();
        for (const Qr of this.trackDatas) Qr.closed = !0, "subtitle" === Qr.type && "webvtt" === Qr.track.source._codec && await this.processWebVTTCues(Qr, 1 / 0), this.processTimestamps(Qr);
        if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
        else
          for (const Qr of this.trackDatas) {
            await this.finalizeCurrentChunk(Qr);
            const rr = NQ(Qr);
            if (rr > 0) {
              let Sr = 0;
              for (const rr of Qr.samples) Sr += rr.size;
              Qr.avgBitrate = Math.round(8 * Sr / rr)
            } else Qr.avgBitrate = 0;
            let Sr = 0,
              Zr = 0,
              Wr = 0;
            for (let ar = 0; ar < Qr.samples.length; ar++) {
              const rr = Qr.samples[ar];
              for (Zr += rr.size; rr.decodeTimestamp - Qr.samples[Sr].decodeTimestamp >= 1;) Zr -= Qr.samples[Sr].size, Sr++;
              Wr = Math.max(Wr, Zr)
            }
            if (Qr.maxBitrate = 8 * Wr, null !== Qr.startTimestampOffset)
              for (let ar = 0; ar < Qr.samples.length; ar++) {
                const rr = Qr.samples[ar];
                rr.timestamp -= Qr.startTimestampOffset, rr.decodeTimestamp -= Qr.startTimestampOffset
              }
          }
        if ((0, Ir.I)(this.writer), (0, Ir.I)(this.boxWriter), "in-memory" === this.fastStart) {
          let rr;
          this.mdat = Vr(!1);
          for (let Qr = 0; Qr < 2; Qr++) {
            const Sr = ir(this),
              Qr = this.boxWriter.measureBox(Sr);
            rr = this.boxWriter.measureBox(this.mdat);
            let Zr = this.writer.getPos() + Qr + rr;
            for (const Wr of this.finalizedChunks) {
              Wr.offset = Zr;
              for (const {
                  data: Sr
                }
                of Wr.samples)(0, Ir.I)(Sr), Zr += Sr.byteLength, rr += Sr.byteLength
            }
            if (Zr < 2 ** 32) break;
            rr >= 2 ** 32 && (this.mdat.largeSize = !0)
          }
          this.formatOptions.onMoov && this.writer.startTrackingWrites();
          const Sr = ir(this);
          if (this.boxWriter.writeBox(Sr), this.formatOptions.onMoov) {
            const {
              data: rr,
              start: Sr
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(rr, Sr)
          }
          this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat.size = rr, this.boxWriter.writeBox(this.mdat);
          for (const Qr of this.finalizedChunks)
            for (const rr of Qr.samples)(0, Ir.I)(rr.data), this.writer.write(rr.data), rr.data = null;
          if (this.formatOptions.onMdat) {
            const {
              data: rr,
              start: Sr
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(rr, Sr)
          }
        } else if (this.isFragmented)
          if (this.isCmaf) {
            const rr = null !== this.segmentHeaderSize ? this.writer.getPos() - this.segmentHeaderSize : 0;
            this.writer.seek(0), this.boxWriter.writeBox(kr()), this.boxWriter.writeBox(Ar(this, rr))
          } else {
            const rr = this.writer.getPos(),
              Qr = (Sr = this.trackDatas, Mr("mfra", void 0, [...Sr.map(AS), VS()]));
            this.boxWriter.writeBox(Qr);
            const Zr = this.writer.getPos() - rr;
            this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(Zr)
          }
        else {
          (0, Ir.I)(this.mdat);
          const rr = this.boxWriter.offsets.get(this.mdat);
          (0, Ir.I)(void 0 !== rr);
          const Sr = this.writer.getPos() - rr;
          if (this.mdat.size = Sr, this.mdat.largeSize = Sr >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.formatOptions.onMdat) {
            const {
              data: rr,
              start: Sr
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(rr, Sr)
          }
          const Qr = ir(this);
          if ("reserve" === this.fastStart) {
            (0, Ir.I)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(Qr);
            const rr = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
            this.boxWriter.writeBox({
              type: "free",
              size: rr
            })
          } else this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(Qr);
          if (this.formatOptions.onMoov) {
            const {
              data: rr,
              start: Sr
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(rr, Sr)
          }
        }
        var Sr;
        rr()
      }
    }
    class tQ {
      constructor(rr) {
        this.value = rr
      }
    }
    class hQ {
      constructor(rr) {
        this.value = rr
      }
    }
    class zQ {
      constructor(rr) {
        this.value = rr
      }
    }
    class YQ {
      constructor(rr) {
        this.value = rr
      }
    }
    var nQ;
    ! function(rr) {
      rr[rr.EBML = 440786851] = "EBML", rr[rr.EBMLVersion = 17030] = "EBMLVersion", rr[rr.EBMLReadVersion = 17143] = "EBMLReadVersion", rr[rr.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", rr[rr.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", rr[rr.DocType = 17026] = "DocType", rr[rr.DocTypeVersion = 17031] = "DocTypeVersion", rr[rr.DocTypeReadVersion = 17029] = "DocTypeReadVersion", rr[rr.Void = 236] = "Void", rr[rr.Segment = 408125543] = "Segment", rr[rr.SeekHead = 290298740] = "SeekHead", rr[rr.Seek = 19899] = "Seek", rr[rr.SeekID = 21419] = "SeekID", rr[rr.SeekPosition = 21420] = "SeekPosition", rr[rr.Duration = 17545] = "Duration", rr[rr.Info = 357149030] = "Info", rr[rr.TimestampScale = 2807729] = "TimestampScale", rr[rr.MuxingApp = 19840] = "MuxingApp", rr[rr.WritingApp = 22337] = "WritingApp", rr[rr.Tracks = 374648427] = "Tracks", rr[rr.TrackEntry = 174] = "TrackEntry", rr[rr.TrackNumber = 215] = "TrackNumber", rr[rr.TrackUID = 29637] = "TrackUID", rr[rr.TrackType = 131] = "TrackType", rr[rr.FlagEnabled = 185] = "FlagEnabled", rr[rr.FlagDefault = 136] = "FlagDefault", rr[rr.FlagForced = 21930] = "FlagForced", rr[rr.FlagOriginal = 21934] = "FlagOriginal", rr[rr.FlagHearingImpaired = 21931] = "FlagHearingImpaired", rr[rr.FlagVisualImpaired = 21932] = "FlagVisualImpaired", rr[rr.FlagCommentary = 21935] = "FlagCommentary", rr[rr.FlagLacing = 156] = "FlagLacing", rr[rr.Name = 21358] = "Name", rr[rr.Language = 2274716] = "Language", rr[rr.LanguageBCP47 = 2274717] = "LanguageBCP47", rr[rr.CodecID = 134] = "CodecID", rr[rr.CodecPrivate = 25506] = "CodecPrivate", rr[rr.CodecDelay = 22186] = "CodecDelay", rr[rr.SeekPreRoll = 22203] = "SeekPreRoll", rr[rr.DefaultDuration = 2352003] = "DefaultDuration", rr[rr.Video = 224] = "Video", rr[rr.PixelWidth = 176] = "PixelWidth", rr[rr.PixelHeight = 186] = "PixelHeight", rr[rr.DisplayWidth = 21680] = "DisplayWidth", rr[rr.DisplayHeight = 21690] = "DisplayHeight", rr[rr.DisplayUnit = 21682] = "DisplayUnit", rr[rr.AlphaMode = 21440] = "AlphaMode", rr[rr.Audio = 225] = "Audio", rr[rr.SamplingFrequency = 181] = "SamplingFrequency", rr[rr.Channels = 159] = "Channels", rr[rr.BitDepth = 25188] = "BitDepth", rr[rr.SimpleBlock = 163] = "SimpleBlock", rr[rr.BlockGroup = 160] = "BlockGroup", rr[rr.Block = 161] = "Block", rr[rr.BlockAdditions = 30113] = "BlockAdditions", rr[rr.BlockMore = 166] = "BlockMore", rr[rr.BlockAdditional = 165] = "BlockAdditional", rr[rr.BlockAddID = 238] = "BlockAddID", rr[rr.BlockDuration = 155] = "BlockDuration", rr[rr.ReferenceBlock = 251] = "ReferenceBlock", rr[rr.Cluster = 524531317] = "Cluster", rr[rr.Timestamp = 231] = "Timestamp", rr[rr.Cues = 475249515] = "Cues", rr[rr.CuePoint = 187] = "CuePoint", rr[rr.CueTime = 179] = "CueTime", rr[rr.CueTrackPositions = 183] = "CueTrackPositions", rr[rr.CueTrack = 247] = "CueTrack", rr[rr.CueClusterPosition = 241] = "CueClusterPosition", rr[rr.Colour = 21936] = "Colour", rr[rr.MatrixCoefficients = 21937] = "MatrixCoefficients", rr[rr.TransferCharacteristics = 21946] = "TransferCharacteristics", rr[rr.Primaries = 21947] = "Primaries", rr[rr.Range = 21945] = "Range", rr[rr.Projection = 30320] = "Projection", rr[rr.ProjectionType = 30321] = "ProjectionType", rr[rr.ProjectionPoseYaw = 30323] = "ProjectionPoseYaw", rr[rr.ProjectionPosePitch = 30324] = "ProjectionPosePitch", rr[rr.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", rr[rr.Attachments = 423732329] = "Attachments", rr[rr.AttachedFile = 24999] = "AttachedFile", rr[rr.FileDescription = 18046] = "FileDescription", rr[rr.FileName = 18030] = "FileName", rr[rr.FileMediaType = 18016] = "FileMediaType", rr[rr.FileData = 18012] = "FileData", rr[rr.FileUID = 18094] = "FileUID", rr[rr.Chapters = 272869232] = "Chapters", rr[rr.Tags = 307544935] = "Tags", rr[rr.Tag = 29555] = "Tag", rr[rr.Targets = 25536] = "Targets", rr[rr.TargetTypeValue = 26826] = "TargetTypeValue", rr[rr.TargetType = 25546] = "TargetType", rr[rr.TagTrackUID = 25541] = "TagTrackUID", rr[rr.TagEditionUID = 25545] = "TagEditionUID", rr[rr.TagChapterUID = 25540] = "TagChapterUID", rr[rr.TagAttachmentUID = 25542] = "TagAttachmentUID", rr[rr.SimpleTag = 26568] = "SimpleTag", rr[rr.TagName = 17827] = "TagName", rr[rr.TagLanguage = 17530] = "TagLanguage", rr[rr.TagString = 17543] = "TagString", rr[rr.TagBinary = 17541] = "TagBinary", rr[rr.ContentEncodings = 28032] = "ContentEncodings", rr[rr.ContentEncoding = 25152] = "ContentEncoding", rr[rr.ContentEncodingOrder = 20529] = "ContentEncodingOrder", rr[rr.ContentEncodingScope = 20530] = "ContentEncodingScope", rr[rr.ContentCompression = 20532] = "ContentCompression", rr[rr.ContentCompAlgo = 16980] = "ContentCompAlgo", rr[rr.ContentCompSettings = 16981] = "ContentCompSettings", rr[rr.ContentEncryption = 20533] = "ContentEncryption"
    }(nQ || (nQ = {}));
    nQ.EBML, nQ.Segment, nQ.SeekHead, nQ.Info, nQ.Cluster, nQ.Tracks, nQ.Cues, nQ.Attachments, nQ.Chapters, nQ.Tags;
    const eQ = rr => rr < 256 ? 1 : rr < 65536 ? 2 : rr < 1 << 24 ? 3 : rr < 2 ** 32 ? 4 : rr < 2 ** 40 ? 5 : 6,
      KQ = rr => rr < 256n ? 1 : rr < 65536n ? 2 : rr < 1n << 24n ? 3 : rr < 1n << 32n ? 4 : rr < 1n << 40n ? 5 : rr < 1n << 48n ? 6 : rr < 1n << 56n ? 7 : 8,
      yQ = rr => rr >= -64 && rr < 64 ? 1 : rr >= -8192 && rr < 8192 ? 2 : rr >= -1048576 && rr < 1 << 20 ? 3 : rr >= -(1 << 27) && rr < 1 << 27 ? 4 : rr >= -(2 ** 34) && rr < 2 ** 34 ? 5 : 6;
    class BQ {
      constructor(rr) {
        this.writer = rr, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap, this.dataOffsets = new WeakMap
      }
      writeByte(rr) {
        this.helperView.setUint8(0, rr), this.writer.write(this.helper.subarray(0, 1))
      }
      writeFloat32(rr) {
        this.helperView.setFloat32(0, rr, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeFloat64(rr) {
        this.helperView.setFloat64(0, rr, !1), this.writer.write(this.helper)
      }
      writeUnsignedInt(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ(rr),
          Qr = 0;
        switch (Sr) {
          case 6:
            this.helperView.setUint8(Qr++, rr / 2 ** 40 | 0);
          case 5:
            this.helperView.setUint8(Qr++, rr / 2 ** 32 | 0);
          case 4:
            this.helperView.setUint8(Qr++, rr >> 24);
          case 3:
            this.helperView.setUint8(Qr++, rr >> 16);
          case 2:
            this.helperView.setUint8(Qr++, rr >> 8);
          case 1:
            this.helperView.setUint8(Qr++, rr);
            break;
          default:
            throw new Error("Bad unsigned int size " + Sr)
        }
        this.writer.write(this.helper.subarray(0, Qr))
      }
      writeUnsignedBigInt(rr) {
        let Sr = 0;
        for (let Qr = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KQ(rr)) - 1; Qr >= 0; Qr--) this.helperView.setUint8(Sr++, Number(rr >> BigInt(8 * Qr) & 0xffn));
        this.writer.write(this.helper.subarray(0, Sr))
      }
      writeSignedInt(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yQ(rr);
        rr < 0 && (rr += 2 ** (8 * Sr)), this.writeUnsignedInt(rr, Sr)
      }
      writeVarInt(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (rr => {
            if (rr < 127) return 1;
            if (rr < 16383) return 2;
            if (rr < 2097151) return 3;
            if (rr < 268435455) return 4;
            if (rr < 2 ** 35 - 1) return 5;
            if (rr < 2 ** 42 - 1) return 6;
            throw new Error("EBML varint size not supported " + rr)
          })(rr),
          Qr = 0;
        switch (Sr) {
          case 1:
            this.helperView.setUint8(Qr++, 128 | rr);
            break;
          case 2:
            this.helperView.setUint8(Qr++, 64 | rr >> 8), this.helperView.setUint8(Qr++, rr);
            break;
          case 3:
            this.helperView.setUint8(Qr++, 32 | rr >> 16), this.helperView.setUint8(Qr++, rr >> 8), this.helperView.setUint8(Qr++, rr);
            break;
          case 4:
            this.helperView.setUint8(Qr++, 16 | rr >> 24), this.helperView.setUint8(Qr++, rr >> 16), this.helperView.setUint8(Qr++, rr >> 8), this.helperView.setUint8(Qr++, rr);
            break;
          case 5:
            this.helperView.setUint8(Qr++, 8 | rr / 2 ** 32 & 7), this.helperView.setUint8(Qr++, rr >> 24), this.helperView.setUint8(Qr++, rr >> 16), this.helperView.setUint8(Qr++, rr >> 8), this.helperView.setUint8(Qr++, rr);
            break;
          case 6:
            this.helperView.setUint8(Qr++, 4 | rr / 2 ** 40 & 3), this.helperView.setUint8(Qr++, rr / 2 ** 32 | 0), this.helperView.setUint8(Qr++, rr >> 24), this.helperView.setUint8(Qr++, rr >> 16), this.helperView.setUint8(Qr++, rr >> 8), this.helperView.setUint8(Qr++, rr);
            break;
          default:
            throw new Error("Bad EBML varint size " + Sr)
        }
        this.writer.write(this.helper.subarray(0, Qr))
      }
      writeAsciiString(rr) {
        this.writer.write(new Uint8Array(rr.split("").map((rr => rr.charCodeAt(0)))))
      }
      writeEBML(rr) {
        if (null !== rr)
          if (rr instanceof Uint8Array) this.writer.write(rr);
          else if (Array.isArray(rr))
          for (const Sr of rr) this.writeEBML(Sr);
        else if (this.offsets.set(rr, this.writer.getPos()), this.writeUnsignedInt(rr.id), Array.isArray(rr.data)) {
          const Sr = this.writer.getPos(),
            Qr = -1 === rr.size ? 1 : rr.size ?? 4; - 1 === rr.size ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + Qr);
          const Zr = this.writer.getPos();
          if (this.dataOffsets.set(rr, Zr), this.writeEBML(rr.data), -1 !== rr.size) {
            const rr = this.writer.getPos() - Zr,
              Wr = this.writer.getPos();
            this.writer.seek(Sr), this.writeVarInt(rr, Qr), this.writer.seek(Wr)
          }
        } else if ("number" === typeof rr.data) {
          const Sr = rr.size ?? eQ(rr.data);
          this.writeVarInt(Sr), this.writeUnsignedInt(rr.data, Sr)
        } else if ("bigint" === typeof rr.data) {
          const Sr = rr.size ?? KQ(rr.data);
          this.writeVarInt(Sr), this.writeUnsignedBigInt(rr.data, Sr)
        } else if ("string" === typeof rr.data) this.writeVarInt(rr.data.length), this.writeAsciiString(rr.data);
        else if (rr.data instanceof Uint8Array) this.writeVarInt(rr.data.byteLength, rr.size), this.writer.write(rr.data);
        else if (rr.data instanceof tQ) this.writeVarInt(4), this.writeFloat32(rr.data.value);
        else if (rr.data instanceof hQ) this.writeVarInt(8), this.writeFloat64(rr.data.value);
        else if (rr.data instanceof zQ) {
          const Sr = rr.size ?? yQ(rr.data.value);
          this.writeVarInt(Sr), this.writeSignedInt(rr.data.value, Sr)
        } else if (rr.data instanceof YQ) {
          const Sr = Ir.$c.encode(rr.data.value);
          this.writeVarInt(Sr.length), this.writer.write(Sr)
        } else(0, Ir.H)(rr.data)
      }
    }
    const TQ = {
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
    const vQ = {
      video: 1,
      audio: 2,
      subtitle: 17
    };
    class OQ extends Ur {
      constructor(rr, Sr) {
        super(rr), this.trackDatas = [], this.allTracksKnown = (0, Ir.uc)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = new Map, this.startTimestamp = 1 / 0, this.endTimestamp = -1 / 0, this.warnedAboutTooNegativeTimestamp = !1, this.format = Sr
      }
      async start() {
        const rr = await this.mutex.acquire();
        this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new BQ(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush();
        for (const Sr of this.output.tracks) Sr.isVideoTrack() && Sr.metadata.decoderConfig ? this.getVideoTrackData(Sr, Sr.metadata.primingPacket ?? null, {
          decoderConfig: Sr.metadata.decoderConfig
        }) : Sr.isAudioTrack() && Sr.metadata.decoderConfig && this.getAudioTrackData(Sr, Sr.metadata.primingPacket ?? null, {
          decoderConfig: Sr.metadata.decoderConfig
        });
        rr()
      }
      writeEBMLHeader() {
        this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
        const rr = {
          id: nQ.EBML,
          data: [{
            id: nQ.EBMLVersion,
            data: 1
          }, {
            id: nQ.EBMLReadVersion,
            data: 1
          }, {
            id: nQ.EBMLMaxIDLength,
            data: 4
          }, {
            id: nQ.EBMLMaxSizeLength,
            data: 8
          }, {
            id: nQ.DocType,
            data: this.format instanceof kQ ? "webm" : "matroska"
          }, {
            id: nQ.DocTypeVersion,
            data: 4
          }, {
            id: nQ.DocTypeReadVersion,
            data: 2
          }]
        };
        if (this.ebmlWriter.writeEBML(rr), this.format._options.onEbmlHeader) {
          const {
            data: rr,
            start: Sr
          } = this.writer.stopTrackingWrites();
          this.format._options.onEbmlHeader(rr, Sr)
        }
      }
      maybeCreateSeekHead(rr) {
        if (this.format._options.appendOnly) return;
        const Sr = new Uint8Array([28, 83, 187, 107]),
          Qr = new Uint8Array([21, 73, 169, 102]),
          Zr = new Uint8Array([22, 84, 174, 107]),
          Wr = new Uint8Array([25, 65, 164, 105]),
          ar = new Uint8Array([18, 84, 195, 103]),
          jr = {
            id: nQ.SeekHead,
            data: [{
              id: nQ.Seek,
              data: [{
                id: nQ.SeekID,
                data: Qr
              }, {
                id: nQ.SeekPosition,
                size: 5,
                data: rr ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
              }]
            }, {
              id: nQ.Seek,
              data: [{
                id: nQ.SeekID,
                data: Zr
              }, {
                id: nQ.SeekPosition,
                size: 5,
                data: rr ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
              }]
            }, this.attachmentsElement ? {
              id: nQ.Seek,
              data: [{
                id: nQ.SeekID,
                data: Wr
              }, {
                id: nQ.SeekPosition,
                size: 5,
                data: rr ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
              }]
            } : null, this.tagsElement ? {
              id: nQ.Seek,
              data: [{
                id: nQ.SeekID,
                data: ar
              }, {
                id: nQ.SeekPosition,
                size: 5,
                data: rr ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
              }]
            } : null, {
              id: nQ.Seek,
              data: [{
                id: nQ.SeekID,
                data: Sr
              }, {
                id: nQ.SeekPosition,
                size: 5,
                data: rr ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
              }]
            }]
          };
        this.seekHead = jr
      }
      createSegmentInfo() {
        const rr = {
          id: nQ.Duration,
          data: new hQ(0)
        };
        this.segmentDuration = rr;
        const Sr = {
          id: nQ.Info,
          data: [{
            id: nQ.TimestampScale,
            data: 1e6
          }, {
            id: nQ.MuxingApp,
            data: Yr.e
          }, {
            id: nQ.WritingApp,
            data: Yr.e
          }, this.format._options.appendOnly ? null : rr]
        };
        this.segmentInfo = Sr
      }
      createTracks() {
        const rr = {
          id: nQ.Tracks,
          data: []
        };
        this.tracksElement = rr;
        for (const Sr of this.trackDatas) {
          let Qr = TQ[Sr.track.source._codec];
          (0, Ir.I)(Qr), "audio" === Sr.type && "dts" === Sr.track.source._codec && ("dtse" === Sr.info.decoderConfig.codec ? Qr = "A_DTS/EXPRESS" : "dtsl" === Sr.info.decoderConfig.codec && (Qr = "A_DTS/LOSSLESS"));
          let Zr = 0;
          if ("audio" === Sr.type && "opus" === Sr.track.source._codec) {
            Zr = 8e7;
            const rr = Sr.info.decoderConfig.description;
            if (rr) {
              const Sr = (0, Ir.id)(rr),
                Qr = (0, tr.ob)(Sr);
              Zr = Math.round(Qr.preSkip / Wr.n * 1e9)
            }
          }
          rr.data.push({
            id: nQ.TrackEntry,
            data: [{
              id: nQ.TrackNumber,
              data: Sr.track.id
            }, {
              id: nQ.TrackUID,
              data: Sr.track.id
            }, {
              id: nQ.TrackType,
              data: vQ[Sr.type]
            }, !1 === Sr.track.metadata.disposition?.default ? {
              id: nQ.FlagDefault,
              data: 0
            } : null, Sr.track.metadata.disposition?.forced ? {
              id: nQ.FlagForced,
              data: 1
            } : null, Sr.track.metadata.disposition?.hearingImpaired ? {
              id: nQ.FlagHearingImpaired,
              data: 1
            } : null, Sr.track.metadata.disposition?.visuallyImpaired ? {
              id: nQ.FlagVisualImpaired,
              data: 1
            } : null, Sr.track.metadata.disposition?.original ? {
              id: nQ.FlagOriginal,
              data: 1
            } : null, Sr.track.metadata.disposition?.commentary ? {
              id: nQ.FlagCommentary,
              data: 1
            } : null, {
              id: nQ.FlagLacing,
              data: 0
            }, {
              id: nQ.Language,
              data: Sr.track.metadata.languageCode ?? Ir.y
            }, {
              id: nQ.CodecID,
              data: Qr
            }, Sr.codecPrivate ? {
              id: nQ.CodecPrivate,
              data: (0, Ir.id)(Sr.codecPrivate)
            } : null, Zr > 0 ? {
              id: nQ.SeekPreRoll,
              data: Zr
            } : null, void 0 !== Sr.track.metadata.name ? {
              id: nQ.Name,
              data: new YQ(Sr.track.metadata.name)
            } : null, "video" === Sr.type ? this.videoSpecificTrackInfo(Sr) : null, "audio" === Sr.type ? this.audioSpecificTrackInfo(Sr) : null, "subtitle" === Sr.type ? this.subtitleSpecificTrackInfo(Sr) : null]
          })
        }
      }
      videoSpecificTrackInfo(rr) {
        const {
          frameRate: Sr,
          transformationMatrix: Qr
        } = rr.track.metadata, Zr = [Sr ? {
          id: nQ.DefaultDuration,
          data: 1e9 / Sr
        } : null];
        let Wr, ar, jr;
        if (Qr) {
          Wr = (0, Ir.fb)(Qr);
          const rr = (0, Ir.jc)((0, Ir.Ec)(-Wr), Qr);
          ar = Math.sign(rr[0]), jr = Math.sign(rr[4]), -1 === jr && (jr = 1, ar = -ar, Wr = (0, Ir.kc)(Wr + 180))
        } else Wr = rr.track.metadata.rotation ?? 0, ar = rr.track.metadata.flip ? -1 : 1, jr = 1;
        const fr = Wr ? (0, Ir.kc)(-1 === ar ? Wr : -Wr) : 0,
          Er = Math.round(Math.acos(ar) * Ir.n),
          pr = Math.round(Math.acos(jr) * Ir.n),
          xr = !!rr.info.aspectRatio && rr.info.aspectRatio.num * rr.info.height !== rr.info.aspectRatio.den * rr.info.width,
          mr = rr.info.decoderConfig.colorSpace,
          Nr = {
            id: nQ.Video,
            data: [{
              id: nQ.PixelWidth,
              data: rr.info.width
            }, {
              id: nQ.PixelHeight,
              data: rr.info.height
            }, xr ? {
              id: nQ.DisplayWidth,
              data: rr.info.aspectRatio.num
            } : null, xr ? {
              id: nQ.DisplayHeight,
              data: rr.info.aspectRatio.den
            } : null, xr ? {
              id: nQ.DisplayUnit,
              data: 3
            } : null, rr.info.alphaMode ? {
              id: nQ.AlphaMode,
              data: 1
            } : null, (0, Ir.$)(mr) ? null : {
              id: nQ.Colour,
              data: [{
                id: nQ.MatrixCoefficients,
                data: null != mr?.matrix ? Ir.m[mr.matrix] : 2
              }, {
                id: nQ.TransferCharacteristics,
                data: null != mr?.transfer ? Ir.t[mr.transfer] : 2
              }, {
                id: nQ.Primaries,
                data: null != mr?.primaries ? Ir.e[mr.primaries] : 2
              }, {
                id: nQ.Range,
                data: null != mr?.fullRange ? mr.fullRange ? 2 : 1 : 0
              }]
            }, fr || Er || pr ? {
              id: nQ.Projection,
              data: [{
                id: nQ.ProjectionType,
                data: 0
              }, Er ? {
                id: nQ.ProjectionPoseYaw,
                data: new tQ(Er)
              } : null, pr ? {
                id: nQ.ProjectionPosePitch,
                data: new tQ(pr)
              } : null, fr ? {
                id: nQ.ProjectionPoseRoll,
                data: new tQ((fr + 180) % 360 - 180)
              } : null]
            } : null]
          };
        return Zr.push(Nr), Zr
      }
      audioSpecificTrackInfo(rr) {
        const Sr = Wr.q.includes(rr.track.source._codec) ? (0, Wr.Q)(rr.track.source._codec) : null;
        return [{
          id: nQ.Audio,
          data: [{
            id: nQ.SamplingFrequency,
            data: new tQ(rr.info.sampleRate)
          }, {
            id: nQ.Channels,
            data: rr.info.numberOfChannels
          }, Sr ? {
            id: nQ.BitDepth,
            data: 8 * Sr.sampleSize
          } : null]
        }]
      }
      subtitleSpecificTrackInfo(rr) {
        return []
      }
      maybeCreateTags() {
        const rr = [],
          Sr = (Sr, Qr) => {
            rr.push({
              id: nQ.SimpleTag,
              data: [{
                id: nQ.TagName,
                data: new YQ(Sr)
              }, "string" === typeof Qr ? {
                id: nQ.TagString,
                data: new YQ(Qr)
              } : {
                id: nQ.TagBinary,
                data: Qr
              }]
            })
          },
          Qr = this.output._metadataTags,
          Zr = new Set;
        for (const {
            key: Wr,
            value: ar
          }
          of(0, Ir.Xb)(Qr)) switch (Wr) {
          case "title":
            Sr("TITLE", ar), Zr.add("TITLE");
            break;
          case "description":
            Sr("DESCRIPTION", ar), Zr.add("DESCRIPTION");
            break;
          case "artist":
            Sr("ARTIST", ar), Zr.add("ARTIST");
            break;
          case "album":
            Sr("ALBUM", ar), Zr.add("ALBUM");
            break;
          case "albumArtist":
            Sr("ALBUM_ARTIST", ar), Zr.add("ALBUM_ARTIST");
            break;
          case "genre":
            Sr("GENRE", ar), Zr.add("GENRE");
            break;
          case "beatsPerMinute":
            Sr("BPM", ar.toString()), Zr.add("BPM");
            break;
          case "comment":
            Sr("COMMENT", ar), Zr.add("COMMENT");
            break;
          case "lyrics":
            Sr("LYRICS", ar), Zr.add("LYRICS");
            break;
          case "date":
            Sr("DATE", ar.toISOString().slice(0, 10)), Zr.add("DATE");
            break;
          case "trackNumber":
            Sr("PART_NUMBER", void 0 !== Qr.tracksTotal ? `${ar}/${Qr.tracksTotal}` : ar.toString()), Zr.add("PART_NUMBER");
            break;
          case "discNumber":
            Sr("DISC", void 0 !== Qr.discsTotal ? `${ar}/${Qr.discsTotal}` : ar.toString()), Zr.add("DISC");
            break;
          case "tracksTotal":
          case "discsTotal":
          case "images":
          case "raw":
            break;
          default:
            (0, Ir.H)(Wr)
        }
        if (Qr.raw)
          for (const Wr in Qr.raw) {
            const rr = Qr.raw[Wr];
            null == rr || Zr.has(Wr) || ("string" === typeof rr || rr instanceof Uint8Array) && Sr(Wr, rr)
          }
        0 !== rr.length && (this.tagsElement = {
          id: nQ.Tags,
          data: [{
            id: nQ.Tag,
            data: [{
              id: nQ.Targets,
              data: [{
                id: nQ.TargetTypeValue,
                data: 50
              }, {
                id: nQ.TargetType,
                data: "MOVIE"
              }]
            }, ...rr]
          }]
        })
      }
      maybeCreateAttachments() {
        const rr = this.output._metadataTags,
          Sr = [],
          Qr = new Set,
          Zr = rr.images ?? [];
        for (const Wr of Zr) {
          let rr, Zr = Wr.name;
          if (void 0 === Zr) {
            Zr = ("coverFront" === Wr.kind ? "cover" : "coverBack" === Wr.kind ? "back" : "image") + ((0, Ir.tb)(Wr.mimeType) ?? "")
          }
          for (;;) {
            rr = 0n;
            for (let Sr = 0; Sr < 8; Sr++) rr <<= 8n, rr |= BigInt(Math.floor(256 * Math.random()));
            if (0n !== rr && !Qr.has(rr)) break
          }
          Qr.add(rr), Sr.push({
            id: nQ.AttachedFile,
            data: [void 0 !== Wr.description ? {
              id: nQ.FileDescription,
              data: new YQ(Wr.description)
            } : null, {
              id: nQ.FileName,
              data: new YQ(Zr)
            }, {
              id: nQ.FileMediaType,
              data: Wr.mimeType
            }, {
              id: nQ.FileData,
              data: Wr.data
            }, {
              id: nQ.FileUID,
              data: rr
            }]
          })
        }
        for (const [Wr, ar] of Object.entries(rr.raw ?? {})) {
          if (!(ar instanceof Nr.c)) continue;
          /^\d+$/.test(Wr) && (Zr.find((rr => rr.mimeType === ar.mimeType && (0, Ir.jd)(rr.data, ar.data))) || Sr.push({
            id: nQ.AttachedFile,
            data: [void 0 !== ar.description ? {
              id: nQ.FileDescription,
              data: new YQ(ar.description)
            } : null, {
              id: nQ.FileName,
              data: new YQ(ar.name ?? "")
            }, {
              id: nQ.FileMediaType,
              data: ar.mimeType ?? ""
            }, {
              id: nQ.FileData,
              data: ar.data
            }, {
              id: nQ.FileUID,
              data: BigInt(Wr)
            }]
          }))
        }
        0 !== Sr.length && (this.attachmentsElement = {
          id: nQ.Attachments,
          data: Sr
        })
      }
      createSegment() {
        this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
        const rr = {
          id: nQ.Segment,
          size: this.format._options.appendOnly ? -1 : 6,
          data: [this.seekHead, this.segmentInfo, this.tracksElement, this.attachmentsElement, this.tagsElement]
        };
        if (this.segment = rr, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(rr), this.format._options.onSegmentHeader) {
          const {
            data: rr,
            start: Sr
          } = this.writer.stopTrackingWrites();
          this.format._options.onSegmentHeader(rr, Sr)
        }
      }
      createCues() {
        this.cues = {
          id: nQ.Cues,
          data: []
        }
      }
      get segmentDataOffset() {
        return (0, Ir.I)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
      }
      allTracksAreKnown() {
        for (const rr of this.output.tracks)
          if (!rr.source._closed && !this.trackDatas.some((Sr => Sr.track === rr))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const rr = this.trackDatas.map((rr => {
          if ("video" === rr.type) return rr.info.decoderConfig.codec;
          if ("audio" === rr.type) return rr.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [rr.track.source._codec]
        }));
        return (rr => {
          let Sr = (rr.hasVideo ? "video/" : rr.hasAudio ? "audio/" : "application/") + (rr.isWebM ? "webm" : "x-matroska");
          rr.codecStrings.length > 0 && (Sr += `; codecs="${[...new Set(rr.codecStrings.filter(Boolean))].join(", ")}"`);
          return Sr
        })({
          isWebM: this.format instanceof kQ,
          hasVideo: this.trackDatas.some((rr => "video" === rr.type)),
          hasAudio: this.trackDatas.some((rr => "audio" === rr.type)),
          codecStrings: rr
        })
      }
      getVideoTrackData(rr, Sr, Qr) {
        const Zr = this.trackDatas.find((Sr => Sr.track === rr));
        if (Zr) return Zr;
        (0, Wr.X)(Qr, rr.source._codec), (0, Ir.I)(Qr), (0, Ir.I)(Qr.decoderConfig), (0, Ir.I)(void 0 !== Qr.decoderConfig.codedWidth), (0, Ir.I)(void 0 !== Qr.decoderConfig.codedHeight);
        const ar = Qr.decoderConfig.displayAspectWidth,
          jr = Qr.decoderConfig.displayAspectHeight,
          fr = void 0 === ar || void 0 === jr ? null : (0, Ir.Tc)({
            num: ar,
            den: jr
          }),
          Er = {
            track: rr,
            type: "video",
            info: {
              width: Qr.decoderConfig.codedWidth,
              height: Qr.decoderConfig.codedHeight,
              aspectRatio: fr,
              decoderConfig: Qr.decoderConfig,
              alphaMode: rr.metadata.canBeTransparent || (Sr ? !!Sr.sideData.alpha : null)
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null,
            codecPrivate: Qr.decoderConfig.description ?? null,
            closed: !1
          };
        return "vp9" === rr.source._codec ? Er.codecPrivate = new Uint8Array((0, Wr.H)(Er.info.decoderConfig.codec)) : "av1" === rr.source._codec ? Er.codecPrivate = new Uint8Array((0, Wr.F)(Er.info.decoderConfig.codec)) : "prores" === rr.source._codec && (Er.codecPrivate = Ir.$c.encode(Qr.decoderConfig.codec)), this.trackDatas.push(Er), this.trackDatas.sort(((rr, Sr) => rr.track.id - Sr.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Er
      }
      getAudioTrackData(rr, Sr, Qr) {
        const ar = this.trackDatas.find((Sr => Sr.track === rr));
        if (ar) return ar;
        (0, Wr.T)(Qr, rr.source._codec), (0, Ir.I)(Qr), (0, Ir.I)(Qr.decoderConfig);
        const jr = {
          ...Qr.decoderConfig
        };
        let Er = !1;
        if ("aac" === rr.source._codec && !jr.description) {
          if (!Sr) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const rr = EQ(fr.tempFromBytes(Sr.data));
          if (!rr) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const Qr = Zr.e[rr.samplingFrequencyIndex],
            Wr = Zr.c[rr.channelConfiguration];
          if (void 0 === Qr || void 0 === Wr) throw new Error("Invalid ADTS frame header.");
          jr.description = (0, Zr.h)({
            objectType: rr.objectType,
            outputSampleRate: Qr,
            outputNumberOfChannels: Wr
          }), Er = !0
        }
        const pr = {
          track: rr,
          type: "audio",
          info: {
            numberOfChannels: Qr.decoderConfig.numberOfChannels,
            sampleRate: Qr.decoderConfig.sampleRate,
            decoderConfig: jr,
            requiresAdtsStripping: Er
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: jr.description ?? null,
          closed: !1
        };
        return this.trackDatas.push(pr), this.trackDatas.sort(((rr, Sr) => rr.track.id - Sr.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), pr
      }
      getSubtitleTrackData(rr, Sr) {
        const Qr = this.trackDatas.find((Sr => Sr.track === rr));
        if (Qr) return Qr;
        (0, Wr.V)(Sr), (0, Ir.I)(Sr), (0, Ir.I)(Sr.config);
        const Zr = {
          track: rr,
          type: "subtitle",
          info: {
            config: Sr.config
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: Ir.$c.encode(Sr.config.description),
          closed: !1
        };
        return this.trackDatas.push(Zr), this.trackDatas.sort(((rr, Sr) => rr.track.id - Sr.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Zr
      }
      async addEncodedVideoPacket(rr, Sr, Qr) {
        const Zr = await this.mutex.acquire();
        try {
          const Zr = this.getVideoTrackData(rr, Sr, Qr);
          Zr.info.alphaMode ??= !!Sr.sideData.alpha;
          let Wr = Sr.data;
          if ("prores" === rr.source._codec) {
            if (Wr.byteLength < 8) throw new Error("ProRes packet too small, expected at least 8 bytes.");
            Wr = Wr.subarray(8)
          }
          const ar = "key" === Sr.type;
          this.validateTimestamp(Zr.track, Sr.timestamp, ar);
          let jr = Sr.timestamp,
            fr = Sr.duration;
          void 0 !== rr.metadata.frameRate && (jr = (0, Ir.Fc)(jr, rr.metadata.frameRate), fr = (0, Ir.Fc)(fr, rr.metadata.frameRate));
          const Er = Zr.info.alphaMode ? Sr.sideData.alpha ?? null : null,
            pr = this.createInternalChunk(Wr, jr, fr, Sr.type, Er);
          "vp9" === rr.source._codec && this.fixVP9ColorSpace(Zr, pr), Zr.chunkQueue.push(pr), await this.interleaveChunks()
        } finally {
          Zr()
        }
      }
      async addEncodedAudioPacket(rr, Sr, Qr) {
        const Zr = await this.mutex.acquire();
        try {
          const Zr = this.getAudioTrackData(rr, Sr, Qr);
          let Wr = Sr.data;
          if (Zr.info.requiresAdtsStripping) {
            const rr = EQ(fr.tempFromBytes(Wr));
            if (!rr) throw new Error("Expected ADTS frame, didn't get one.");
            const Sr = null === rr.crcCheck ? 7 : 9;
            Wr = Wr.subarray(Sr)
          }
          const ar = "key" === Sr.type;
          this.validateTimestamp(Zr.track, Sr.timestamp, ar);
          const jr = this.createInternalChunk(Wr, Sr.timestamp, Sr.duration, Sr.type);
          Zr.chunkQueue.push(jr), await this.interleaveChunks()
        } finally {
          Zr()
        }
      }
      async addSubtitleCue(rr, Sr, Qr) {
        const Zr = await this.mutex.acquire();
        try {
          const Zr = this.getSubtitleTrackData(rr, Qr);
          this.validateTimestamp(Zr.track, Sr.timestamp, !0);
          let Wr = Sr.text;
          const ar = Math.round(1e3 * Sr.timestamp);
          zr.g.lastIndex = 0, Wr = Wr.replace(zr.g, (rr => {
            const Sr = (0, zr.j)(rr.slice(1, -1)) - ar;
            return `<${(0,zr.e)(Sr)}>`
          }));
          const jr = Ir.$c.encode(Wr),
            fr = `${Sr.settings??""}\n${Sr.identifier??""}\n${Sr.notes??""}`,
            Er = this.createInternalChunk(jr, Sr.timestamp, Sr.duration, "key", fr.trim() ? Ir.$c.encode(fr) : null);
          Zr.chunkQueue.push(Er), await this.interleaveChunks()
        } finally {
          Zr()
        }
      }
      async interleaveChunks() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (rr || this.allTracksAreKnown()) {
          rr: for (;;) {
            let Sr = null,
              Qr = 1 / 0;
            for (const Wr of this.trackDatas) {
              if (!rr && 0 === Wr.chunkQueue.length && !Wr.closed) break rr;
              Wr.chunkQueue.length > 0 && Wr.chunkQueue[0].timestamp < Qr && (Sr = Wr, Qr = Wr.chunkQueue[0].timestamp)
            }
            if (!Sr) break;
            const Zr = Sr.chunkQueue.shift();
            this.writeBlock(Sr, Zr)
          }
          rr || await this.writer.flush()
        }
      }
      fixVP9ColorSpace(rr, Sr) {
        if ("key" !== Sr.type) return;
        if (!rr.info.decoderConfig.colorSpace || !rr.info.decoderConfig.colorSpace.matrix) return;
        const Qr = new hr.b(Sr.data);
        Qr.skipBits(2);
        const Zr = Qr.readBits(1),
          Wr = (Qr.readBits(1) << 1) + Zr;
        3 === Wr && Qr.skipBits(1);
        if (Qr.readBits(1)) return;
        if (0 !== Qr.readBits(1)) return;
        Qr.skipBits(2);
        if (4817730 !== Qr.readBits(24)) return;
        Wr >= 2 && Qr.skipBits(1);
        const ar = {
          rgb: 7,
          bt709: 2,
          bt470bg: 1,
          smpte170m: 3
        } [rr.info.decoderConfig.colorSpace.matrix];
        (0, Ir.md)(Sr.data, Qr.pos, Qr.pos + 3, ar)
      }
      createInternalChunk(rr, Sr, Qr, Zr) {
        return {
          data: rr,
          type: Zr,
          timestamp: Sr,
          duration: Qr,
          additions: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
        }
      }
      writeBlock(rr, Sr) {
        this.segment || this.createSegment();
        const Qr = Math.round(1e3 * Sr.timestamp),
          Zr = this.trackDatas.every((Qr => {
            if (rr === Qr) return "key" === Sr.type;
            const Zr = Qr.chunkQueue[0];
            return Zr ? "key" === Zr.type : Qr.closed
          }));
        let Wr = !1;
        if (this.currentCluster) {
          (0, Ir.I)(null !== this.currentClusterStartMsTimestamp), (0, Ir.I)(null !== this.currentClusterMaxMsTimestamp);
          const rr = Qr - this.currentClusterStartMsTimestamp;
          Wr = Zr && Qr > this.currentClusterMaxMsTimestamp && rr >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || rr > 32767
        } else Wr = !0;
        Wr && this.createNewCluster(Qr);
        const ar = Qr - this.currentClusterStartMsTimestamp;
        if (ar < -32768) {
          if (!this.warnedAboutTooNegativeTimestamp) {
            const rr = this.format instanceof kQ ? "WebM" : "Matroska";
            jr.e._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${rr}.`), this.warnedAboutTooNegativeTimestamp = !0
          }
          return
        }
        const fr = new Uint8Array(4),
          Er = new DataView(fr.buffer);
        Er.setUint8(0, 128 | rr.track.id), Er.setInt16(1, ar, !1);
        const pr = Math.round(1e3 * Sr.duration);
        if (!!Sr.additions || "subtitle" === rr.type) {
          const Zr = {
            id: nQ.BlockGroup,
            data: [{
              id: nQ.Block,
              data: [fr, Sr.data]
            }, "delta" === Sr.type ? {
              id: nQ.ReferenceBlock,
              data: new zQ(rr.lastWrittenMsTimestamp - Qr)
            } : null, Sr.additions ? {
              id: nQ.BlockAdditions,
              data: [{
                id: nQ.BlockMore,
                data: [{
                  id: nQ.BlockAddID,
                  data: 1
                }, {
                  id: nQ.BlockAdditional,
                  data: Sr.additions
                }]
              }]
            } : null, pr > 0 ? {
              id: nQ.BlockDuration,
              data: pr
            } : null]
          };
          this.ebmlWriter.writeEBML(Zr)
        } else {
          Er.setUint8(3, Number("key" === Sr.type) << 7);
          const rr = {
            id: nQ.SimpleBlock,
            data: [fr, Sr.data]
          };
          this.ebmlWriter.writeEBML(rr)
        }
        this.startTimestamp = Math.min(this.startTimestamp, Qr), this.endTimestamp = Math.max(this.endTimestamp, Qr + pr), rr.lastWrittenMsTimestamp = Qr, this.trackDatasInCurrentCluster.has(rr) || this.trackDatasInCurrentCluster.set(rr, {
          firstMsTimestamp: Qr
        }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, Qr)
      }
      createNewCluster(rr) {
        rr = Math.max(0, rr), this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
          id: nQ.Cluster,
          size: this.format._options.appendOnly ? -1 : 5,
          data: [{
            id: nQ.Timestamp,
            data: rr
          }]
        }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = rr, this.currentClusterMaxMsTimestamp = rr, this.trackDatasInCurrentCluster.clear()
      }
      finalizeCurrentCluster() {
        if ((0, Ir.I)(this.currentCluster), !this.format._options.appendOnly) {
          const rr = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster),
            Sr = this.writer.getPos();
          this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(rr, 5), this.writer.seek(Sr)
        }
        if (this.format._options.onCluster) {
          (0, Ir.I)(null !== this.currentClusterStartMsTimestamp);
          const {
            data: rr,
            start: Sr
          } = this.writer.stopTrackingWrites();
          this.format._options.onCluster(rr, Sr, this.currentClusterStartMsTimestamp / 1e3)
        }
        const rr = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset,
          Sr = new Map;
        for (const [Zr, {
            firstMsTimestamp: Wr
          }] of this.trackDatasInCurrentCluster) Sr.has(Wr) || Sr.set(Wr, []), Sr.get(Wr).push(Zr);
        const Qr = [...Sr.entries()].sort(((rr, Sr) => rr[0] - Sr[0]));
        for (const [Zr, Wr] of Qr)(0, Ir.I)(this.cues), this.cues.data.push({
          id: nQ.CuePoint,
          data: [{
            id: nQ.CueTime,
            data: Math.max(0, Zr)
          }, ...Wr.map((Sr => ({
            id: nQ.CueTrackPositions,
            data: [{
              id: nQ.CueTrack,
              data: Sr.track.id
            }, {
              id: nQ.CueClusterPosition,
              data: rr
            }]
          })))]
        })
      }
      async onTrackClose(rr) {
        const Sr = await this.mutex.acquire(),
          Qr = this.trackDatas.find((Sr => Sr.track === rr));
        Qr && (Qr.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), Sr()
      }
      async finalize() {
        const rr = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        for (const Sr of this.trackDatas) Sr.closed = !0;
        if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, Ir.I)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
          const rr = this.writer.getPos() - this.segmentDataOffset;
          this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(rr, 6);
          const Sr = this.startTimestamp === 1 / 0 ? 0 : this.endTimestamp;
          this.segmentDuration.data = new hQ(Sr), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, Ir.I)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead)
        }
        rr()
      }
    }
    const LQ = new Uint32Array(256);
    for (let AQ = 0; AQ < 256; AQ++) {
      let rr = AQ << 24;
      for (let Sr = 0; Sr < 8; Sr++) rr = 2147483648 & rr ? rr << 1 ^ 79764919 : rr << 1;
      LQ[AQ] = rr >>> 0 & 4294967295
    }
    new Uint8Array([9, 240]), new Uint8Array([70, 1]);
    const lQ = new Uint32Array(256);
    for (let AQ = 0; AQ < 256; AQ++) {
      let rr = AQ << 24;
      for (let Sr = 0; Sr < 8; Sr++) rr = 2147483648 & rr ? rr << 1 ^ 79764919 : rr << 1;
      lQ[AQ] = rr >>> 0 & 4294967295
    }
    const XQ = rr => {
        let Sr = 4294967295;
        for (let Qr = 0; Qr < rr.length; Qr++) {
          const Zr = rr[Qr];
          Sr = (Sr << 8 ^ lQ[Sr >>> 24 ^ Zr]) >>> 0
        }
        return Sr
      },
      PQ = new Uint8Array(16);
    {
      const rr = (0, Ir.ed)(PQ);
      PQ[0] = 0, rr.setUint16(1, 45069, !1), rr.setUint16(3, 1, !1), PQ[5] = 193, PQ[6] = 0, PQ[7] = 0, rr.setUint16(8, 1, !1), rr.setUint16(10, 61440, !1), rr.setUint32(12, XQ(PQ.subarray(0, 12)), !1)
    }
    var HQ;
    Qr(41552);
    ! function(rr) {
      rr[rr.PCM = 1] = "PCM", rr[rr.IEEE_FLOAT = 3] = "IEEE_FLOAT", rr[rr.ALAW = 6] = "ALAW", rr[rr.MULAW = 7] = "MULAW", rr[rr.EXTENSIBLE = 65534] = "EXTENSIBLE"
    }(HQ || (HQ = {}));
    Qr(41555), Qr(41566), Qr(41470);
    class qQ {
      get supportsVideoRotationMetadata() {
        return this.supportsVideoTransformationMetadata
      }
      getSupportedVideoCodecs() {
        return this.getSupportedCodecs().filter((rr => Wr.v.includes(rr)))
      }
      getSupportedAudioCodecs() {
        return this.getSupportedCodecs().filter((rr => Wr.e.includes(rr)))
      }
      getSupportedSubtitleCodecs() {
        return this.getSupportedCodecs().filter((rr => Wr.u.includes(rr)))
      }
      _codecUnsupportedHint(rr) {
        return ""
      }
      _isFragmentedIsobmff() {
        return !1
      }
    }
    class RQ extends qQ {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!rr || "object" !== typeof rr) throw new TypeError("options must be an object.");
        if (void 0 !== rr.fastStart && ![!1, "in-memory", "reserve", "fragmented"].includes(rr.fastStart)) throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
        if (void 0 !== rr.minimumFragmentDuration && (!(0, Ir.Jb)(rr.minimumFragmentDuration) || rr.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
        if (void 0 !== rr.onFtyp && "function" !== typeof rr.onFtyp) throw new TypeError("options.onFtyp, when provided, must be a function.");
        if (void 0 !== rr.onMoov && "function" !== typeof rr.onMoov) throw new TypeError("options.onMoov, when provided, must be a function.");
        if (void 0 !== rr.onMdat && "function" !== typeof rr.onMdat) throw new TypeError("options.onMdat, when provided, must be a function.");
        if (void 0 !== rr.onMoof && "function" !== typeof rr.onMoof) throw new TypeError("options.onMoof, when provided, must be a function.");
        if (void 0 !== rr.metadataFormat && !["mdir", "mdta", "udta", "auto"].includes(rr.metadataFormat)) throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
        super(), this._options = rr
      }
      getSupportedTrackCounts() {
        const rr = 2 ** 32 - 1;
        return {
          video: {
            min: 0,
            max: rr
          },
          audio: {
            min: 0,
            max: rr
          },
          subtitle: {
            min: 0,
            max: rr
          },
          total: {
            min: 0,
            max: rr
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
      _createMuxer(rr) {
        return new UQ(rr, this)
      }
      _isFragmentedIsobmff() {
        return "fragmented" === this._options.fastStart
      }
    }
    class gQ extends RQ {
      constructor(rr) {
        super(rr)
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
        return [...Wr.v, ...Wr.m, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...Wr.u]
      }
      _codecUnsupportedHint(rr) {
        return (new MQ).getSupportedCodecs().includes(rr) ? " Switching to MOV will grant support for this codec." : ""
      }
    }
    class CQ extends RQ {
      constructor(rr) {
        super(rr)
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
        return [...Wr.v, ...Wr.m, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...Wr.u]
      }
    }
    class MQ extends RQ {
      constructor(rr) {
        super(rr)
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
        return [...Wr.v, ...Wr.e]
      }
      _codecUnsupportedHint(rr) {
        return (new gQ).getSupportedCodecs().includes(rr) ? " Switching to MP4 will grant support for this codec." : ""
      }
    }
    class GQ extends qQ {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!rr || "object" !== typeof rr) throw new TypeError("options must be an object.");
        if (void 0 !== rr.appendOnly && "boolean" !== typeof rr.appendOnly) throw new TypeError("options.appendOnly, when provided, must be a boolean.");
        if (void 0 !== rr.minimumClusterDuration && (!(0, Ir.Jb)(rr.minimumClusterDuration) || rr.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
        if (void 0 !== rr.onEbmlHeader && "function" !== typeof rr.onEbmlHeader) throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
        if (void 0 !== rr.onSegmentHeader && "function" !== typeof rr.onSegmentHeader) throw new TypeError("options.onHeader, when provided, must be a function.");
        if (void 0 !== rr.onCluster && "function" !== typeof rr.onCluster) throw new TypeError("options.onCluster, when provided, must be a function.");
        super(), this._options = rr
      }
      _createMuxer(rr) {
        return new OQ(rr, this)
      }
      get _name() {
        return "Matroska"
      }
      getSupportedTrackCounts() {
        const rr = 127;
        return {
          video: {
            min: 0,
            max: rr
          },
          audio: {
            min: 0,
            max: rr
          },
          subtitle: {
            min: 0,
            max: rr
          },
          total: {
            min: 0,
            max: rr
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
        return [...Wr.v, ...Wr.m, ...Wr.q.filter((rr => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(rr))), ...Wr.u]
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
    class kQ extends GQ {
      constructor(rr) {
        super(rr)
      }
      getSupportedCodecs() {
        return [...Wr.v.filter((rr => ["vp8", "vp9", "av1"].includes(rr))), ...Wr.e.filter((rr => ["opus", "vorbis"].includes(rr))), ...Wr.u]
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
      _codecUnsupportedHint(rr) {
        return (new GQ).getSupportedCodecs().includes(rr) ? " Switching to MKV will grant support for this codec." : ""
      }
    }
  },
  41470: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => nr
    });
    var Zr = Qr(41474),
      Wr = Qr(41478),
      ar = Qr(41486),
      jr = Qr(41566),
      Ir = Qr(41539),
      fr = Qr(41531),
      Er = Qr(41512),
      pr = Qr(41552),
      xr = Qr(41502);
    const mr = ["video", "audio", "subtitle"];
    class Nr {
      constructor(rr, Sr, Qr, Zr, Wr) {
        this.id = rr, this.output = Sr, this.type = Qr, this.source = Zr, this.metadata = Wr
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
      canBePairedWith(rr) {
        if (!(rr instanceof Nr)) throw new TypeError("other must be an OutputTrack.");
        if (this === rr) return !1;
        const Sr = (0, Zr.bd)(this.metadata.group),
          Qr = (0, Zr.bd)(rr.metadata.group);
        for (const Zr of Sr) {
          if (this.type !== rr.type && Qr.some((rr => Zr === rr))) return !0;
          if (Qr.some((rr => Zr._pairedGroups.has(rr)))) return !0
        }
        return !1
      }
    }
    class Ur extends Nr {
      constructor(rr, Sr, Qr, Zr) {
        super(rr, Sr, "video", Qr, Zr)
      }
    }
    class tr extends Nr {
      constructor(rr, Sr, Qr, Zr) {
        super(rr, Sr, "audio", Qr, Zr)
      }
    }
    class hr extends Nr {
      constructor(rr, Sr, Qr, Zr) {
        super(rr, Sr, "subtitle", Qr, Zr)
      }
    }
    class zr {
      constructor() {
        this._pairedGroups = new Set
      }
      pairWith(rr) {
        if (!(rr instanceof zr)) throw new TypeError("other must be an OutputTrackGroup.");
        if (this === rr) throw new TypeError("Cannot pair a group with itself.");
        this._pairedGroups.add(rr), rr._pairedGroups.add(this)
      }
    }
    const Yr = rr => {
      if (!rr || "object" !== typeof rr) throw new TypeError("metadata must be an object.");
      if (void 0 !== rr.languageCode && !(0, Zr.Db)(rr.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
      if (void 0 !== rr.name && "string" !== typeof rr.name) throw new TypeError("metadata.name, when provided, must be a string.");
      if (void 0 !== rr.disposition && (0, Wr.n)(rr.disposition), void 0 !== rr.maximumPacketCount && (!Number.isInteger(rr.maximumPacketCount) || rr.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
      if (void 0 !== rr.bitrate && (!Number.isFinite(rr.bitrate) || rr.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
      if (void 0 !== rr.averageBitrate && (!Number.isFinite(rr.averageBitrate) || rr.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
      if (void 0 !== rr.group && !(rr.group instanceof zr) && (!Array.isArray(rr.group) || rr.group.some((rr => !(rr instanceof zr))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
    };
    class nr extends Zr.j {
      get target() {
        const rr = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
        if (this._rootTargetPromise) throw new TypeError(rr);
        const Sr = this._getRootTarget();
        if ((0, Zr.Mb)(Sr)) throw new TypeError(rr);
        return Sr
      }
      constructor(rr) {
        if (super(), this.state = "pending", this.defaultTrackGroup = new zr, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new Zr.c, this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !rr || "object" !== typeof rr) throw new TypeError("options must be an object.");
        if (!(rr.format instanceof ar.m)) throw new TypeError("options.format must be an OutputFormat.");
        if (!(rr.target instanceof Ir.k || rr.target instanceof Ir.h)) throw new TypeError("options.target must be a Target or a PathedTarget.");
        if (rr.target instanceof Ir.k && this._rememberTarget(rr.target), void 0 !== rr.initTarget && !(rr.initTarget instanceof Ir.k) && "function" !== typeof rr.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
        if (void 0 !== rr.onFinalize && "function" !== typeof rr.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        this.format = rr.format, this.Xx = rr.target, this._onFinalize = rr.onFinalize ?? null, this._initTarget = rr.initTarget ?? null, this._initTarget instanceof Ir.k && this._rememberTarget(this._initTarget), this._muxer = rr.format._createMuxer(this)
      }
      _getTargetValidated(rr) {
        (0, Zr.I)(this.Xx instanceof Ir.h);
        const Sr = this.Xx.getTarget(rr),
          Qr = rr => {
            if (!(rr instanceof Ir.k)) throw new TypeError("getTarget must return a Target.");
            return rr
          };
        return (0, Zr.Mb)(Sr) ? Sr.then(Qr) : Qr(Sr)
      }
      async _getTarget(rr) {
        (0, Zr.I)(this.Xx instanceof Ir.h);
        const Sr = await this._getTargetValidated(rr);
        return this._emit("target", {
          target: Sr,
          request: rr,
          isRoot: rr.isRoot
        }), "canceled" === this.state ? await Sr._close() : this._rememberTarget(Sr), Sr
      }
      _rememberTarget(rr) {
        this._unfinalizedTargets.add(rr), rr.on("finalized", (() => this._unfinalizedTargets.delete(rr)), {
          once: !0
        })
      }
      async _getInitTarget() {
        if ((0, Zr.I)(null !== this._initTarget), this._initTarget instanceof Ir.k) return this._initTarget;
        const rr = await this._initTarget();
        return "canceled" === this.state ? await rr._close() : this._rememberTarget(rr), rr
      }
      _hasInitTarget() {
        return null !== this._initTarget
      }
      _getRootTarget() {
        if (this._rootTarget) return this._rootTarget;
        if (this._rootTargetPromise) return this._rootTargetPromise;
        if (this.Xx instanceof Ir.k) return this._emit("target", {
          target: this.Xx,
          request: null,
          isRoot: !0
        }), this._rootTarget = this.Xx, this.Xx;
        const rr = {
            path: this.Xx.rootPath,
            isRoot: !0,
            mimeType: this.format.mimeType
          },
          Sr = this._getTargetValidated(rr),
          Qr = Sr => ("canceled" === this.state ? Sr._close() : this._rememberTarget(Sr), this._emit("target", {
            target: Sr,
            request: rr,
            isRoot: !0
          }), this._rootTarget = Sr, Sr);
        return (0, Zr.Mb)(Sr) ? this._rootTargetPromise = Sr.then(Qr) : Qr(Sr)
      }
      _getRootWriter(rr) {
        return this._rootWriterPromise ??= (async () => {
          const Sr = await this._getRootTarget(),
            Qr = new fr.d(Sr, "boolean" === typeof rr ? rr : rr(Sr));
          return Qr.start(), Qr
        })()
      }
      addVideoTrack(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(rr instanceof jr.n)) throw new TypeError("source must be a VideoSource.");
        if (Yr(Sr), void 0 !== Sr.rotation && ![0, 90, 180, 270].includes(Sr.rotation)) throw new TypeError(`Invalid video rotation: ${Sr.rotation}. Has to be 0, 90, 180 or 270.`);
        if (void 0 !== Sr.flip && "boolean" !== typeof Sr.flip) throw new TypeError("metadata.flip, when provided, must be a boolean.");
        if (void 0 !== Sr.transformationMatrix && (!Array.isArray(Sr.transformationMatrix) || 9 !== Sr.transformationMatrix.length || !Sr.transformationMatrix.every((rr => Number.isFinite(rr))))) throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");
        if (void 0 !== Sr.frameRate && (!Number.isFinite(Sr.frameRate) || Sr.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${Sr.frameRate}. Must be a positive number.`);
        if (void 0 !== Sr.hasOnlyKeyPackets && "boolean" !== typeof Sr.hasOnlyKeyPackets) throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");
        if (void 0 !== Sr.canBeTransparent && "boolean" !== typeof Sr.canBeTransparent) throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");
        if (void 0 !== Sr.decoderConfig && (0, xr.X)({
            decoderConfig: Sr.decoderConfig
          }, rr._codec), void 0 !== Sr.primingPacket) {
          if (!(Sr.primingPacket instanceof pr.b)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === Sr.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const Qr = {
          ...Sr
        };
        return Qr.group ??= this.defaultTrackGroup, this._addTrack(new Ur(this.tracks.length + 1, this, rr, Qr))
      }
      addAudioTrack(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(rr instanceof jr.c)) throw new TypeError("source must be an AudioSource.");
        if (Yr(Sr), void 0 !== Sr.decoderConfig && (0, xr.T)({
            decoderConfig: Sr.decoderConfig
          }, rr._codec), void 0 !== Sr.primingPacket) {
          if (!(Sr.primingPacket instanceof pr.b)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === Sr.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const Qr = {
          ...Sr
        };
        return Qr.group ??= this.defaultTrackGroup, this._addTrack(new tr(this.tracks.length + 1, this, rr, Qr))
      }
      addSubtitleTrack(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(rr instanceof jr.m)) throw new TypeError("source must be a SubtitleSource.");
        Yr(Sr);
        const Qr = {
          ...Sr
        };
        return Qr.group ??= this.defaultTrackGroup, this._addTrack(new hr(this.tracks.length + 1, this, rr, Qr))
      }
      setMetadataTags(rr) {
        if ((0, Wr.l)(rr), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
        this._metadataTags = rr
      }
      _addTrack(rr) {
        if ("pending" !== this.state) throw new Error("Cannot add track after output has been started or canceled.");
        if (rr.source._connectedTrack) throw new Error("Source is already used for a track.");
        const Sr = this.format.getSupportedTrackCounts(),
          Qr = this.tracks.reduce(((Sr, Qr) => Sr + (Qr.type === rr.type ? 1 : 0)), 0),
          Zr = Sr[rr.type].max;
        if (Qr === Zr) throw new Error(0 === Zr ? `${this.format._name} does not support ${rr.type} tracks.` : `${this.format._name} does not support more than ${Zr} ${rr.type} track` + (1 === Zr ? "" : "s") + ".");
        const Wr = Sr.total.max;
        if (this.tracks.length === Wr) throw new Error(`${this.format._name} does not support more than ${Wr} tracks` + (1 === Wr ? "" : "s") + " in total.");
        if (rr.isVideoTrack()) {
          const Sr = this.format.getSupportedVideoCodecs();
          if (0 === Sr.length) throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(rr.source._codec));
          if (!Sr.includes(rr.source._codec)) throw new Error(`Codec '${rr.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${Sr.map((rr=>`'${rr}'`)).join(", ")}.` + this.format._codecUnsupportedHint(rr.source._codec))
        } else if (rr.isAudioTrack()) {
          const Sr = this.format.getSupportedAudioCodecs();
          if (0 === Sr.length) throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(rr.source._codec));
          if (!Sr.includes(rr.source._codec)) throw new Error(`Codec '${rr.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${Sr.map((rr=>`'${rr}'`)).join(", ")}.` + this.format._codecUnsupportedHint(rr.source._codec))
        } else if (rr.isSubtitleTrack()) {
          const Sr = this.format.getSupportedSubtitleCodecs();
          if (0 === Sr.length) throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(rr.source._codec));
          if (!Sr.includes(rr.source._codec)) throw new Error(`Codec '${rr.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${Sr.map((rr=>`'${rr}'`)).join(", ")}.` + this.format._codecUnsupportedHint(rr.source._codec))
        }
        return this.tracks.push(rr), rr.source._connectedTrack = rr, rr
      }
      hasEnoughTracks() {
        const rr = this.format.getSupportedTrackCounts();
        for (const Qr of mr) {
          if (this.tracks.reduce(((rr, Sr) => rr + (Sr.type === Qr ? 1 : 0)), 0) < rr[Qr].min) return !1
        }
        const Sr = rr.total.min;
        return !(this.tracks.length < Sr)
      }
      async start() {
        const rr = this.format.getSupportedTrackCounts();
        for (const Qr of mr) {
          const Sr = this.tracks.reduce(((rr, Sr) => rr + (Sr.type === Qr ? 1 : 0)), 0),
            Zr = rr[Qr].min;
          if (Sr < Zr) throw new Error(Zr === rr[Qr].max ? `${this.format._name} requires exactly ${Zr} ${Qr} track${1===Zr?"":"s"}.` : `${this.format._name} requires at least ${Zr} ${Qr} track${1===Zr?"":"s"}.`)
        }
        const Sr = rr.total.min;
        if (this.tracks.length < Sr) throw new Error(Sr === rr.total.max ? `${this.format._name} requires exactly ${Sr} track` + (1 === Sr ? "" : "s") + "." : `${this.format._name} requires at least ${Sr} track` + (1 === Sr ? "" : "s") + ".");
        if ("canceled" === this.state) throw new Error("Output has been canceled.");
        return this._startPromise ? (Er.e._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
          this.state = "started";
          const rr = this._mutex.acquire();
          try {
            await this._muxer.start();
            const rr = this.tracks.map((rr => rr.source._start()));
            await Promise.all(rr)
          } finally {
            (await rr)()
          }
        })()
      }
      getMimeType() {
        return this._muxer.getMimeType()
      }
      async cancel() {
        return "canceled" === this.state ? this._cancelPromise ?? void 0 : "finalizing" !== this.state && "finalized" !== this.state ? this._cancelPromise = (async () => {
          this.state = "canceled";
          const rr = await this._mutex.acquire();
          try {
            const rr = this.tracks.map((rr => rr.source._flushOrWaitForOngoingClose(!0)));
            await Promise.all(rr), await Promise.all([...this._unfinalizedTargets].map((rr => rr._close()))), this._unfinalizedTargets.clear()
          } finally {
            rr()
          }
        })() : void("finalized" === this.state && Er.e._warn("Output has already been finalized."))
      }
      async finalize() {
        if ("pending" === this.state) throw new Error("Cannot finalize before starting.");
        if ("canceled" === this.state) throw new Error("Cannot finalize after canceling.");
        return this._finalizePromise ? (Er.e._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
          this.state = "finalizing";
          const rr = await this._mutex.acquire();
          try {
            const rr = this.tracks.map((rr => rr.source._flushOrWaitForOngoingClose(!1)));
            if (await Promise.all(rr), await this._muxer.finalize(), this._rootWriterPromise) {
              const rr = await this._rootWriterPromise;
              rr.finalized || (await rr.flush(), await rr.finalize())
            }
            this._onFinalize && await this._onFinalize(), this.state = "finalized"
          } catch (Sr) {
            throw this.state = "canceled", Sr
          } finally {
            await Promise.all([...this._unfinalizedTargets].map((rr => rr._close().catch((() => {}))))), this._unfinalizedTargets.clear(), rr()
          }
        })()
      }
    }
  },
  41552: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      e: () => Wr
    });
    var Zr = Qr(41474);
    const Wr = new Uint8Array(0);
    class ar {
      constructor(rr, Sr, Qr, Zr) {
        let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          jr = arguments.length > 5 ? arguments[5] : void 0,
          Ir = arguments.length > 6 ? arguments[6] : void 0;
        if (this.data = rr, this.type = Sr, this.timestamp = Qr, this.duration = Zr, this.sequenceNumber = ar, rr === Wr && void 0 === jr) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
        if (void 0 === jr && (jr = rr.byteLength), !(rr instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("key" !== Sr && "delta" !== Sr) throw new TypeError('type must be either "key" or "delta".');
        if (!Number.isFinite(Qr)) throw new TypeError("timestamp must be a number.");
        if (!Number.isFinite(Zr) || Zr < 0) throw new TypeError("duration must be a non-negative number.");
        if (!Number.isFinite(ar)) throw new TypeError("sequenceNumber must be a number.");
        if (!Number.isInteger(jr) || jr < 0) throw new TypeError("byteLength must be a non-negative integer.");
        if (void 0 !== Ir && ("object" !== typeof Ir || !Ir)) throw new TypeError("sideData, when provided, must be an object.");
        if (void 0 !== Ir?.alpha && !(Ir.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
        if (void 0 !== Ir?.alphaByteLength && (!Number.isInteger(Ir.alphaByteLength) || Ir.alphaByteLength < 0)) throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
        this.byteLength = jr, this.sideData = Ir ?? {}, this.sideData.alpha && void 0 === this.sideData.alphaByteLength && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength)
      }
      get isMetadataOnly() {
        return this.data === Wr
      }
      get microsecondTimestamp() {
        return Math.trunc(Zr.r * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(Zr.r * this.duration)
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
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type;
        if (!this.sideData.alpha) throw new TypeError("This packet does not contain alpha side data.");
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.sideData.alpha,
          type: rr,
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
      static fromEncodedChunk(rr, Sr) {
        if (!(rr instanceof EncodedVideoChunk || rr instanceof EncodedAudioChunk)) throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
        const Qr = new Uint8Array(rr.byteLength);
        return rr.copyTo(Qr), new ar(Qr, rr.type, rr.timestamp / 1e6, (rr.duration ?? 0) / 1e6, void 0, void 0, Sr)
      }
      clone(rr) {
        if (void 0 !== rr && ("object" !== typeof rr || null === rr)) throw new TypeError("options, when provided, must be an object.");
        if (void 0 !== rr?.data && !(rr.data instanceof Uint8Array)) throw new TypeError("options.data, when provided, must be a Uint8Array.");
        if (void 0 !== rr?.type && "key" !== rr.type && "delta" !== rr.type) throw new TypeError('options.type, when provided, must be either "key" or "delta".');
        if (void 0 !== rr?.timestamp && !Number.isFinite(rr.timestamp)) throw new TypeError("options.timestamp, when provided, must be a number.");
        if (void 0 !== rr?.duration && !Number.isFinite(rr.duration)) throw new TypeError("options.duration, when provided, must be a number.");
        if (void 0 !== rr?.sequenceNumber && !Number.isFinite(rr.sequenceNumber)) throw new TypeError("options.sequenceNumber, when provided, must be a number.");
        if (void 0 !== rr?.sideData && ("object" !== typeof rr.sideData || null === rr.sideData)) throw new TypeError("options.sideData, when provided, must be an object.");
        return new ar(rr?.data ?? this.data, rr?.type ?? this.type, rr?.timestamp ?? this.timestamp, rr?.duration ?? this.duration, rr?.sequenceNumber ?? this.sequenceNumber, this.byteLength, rr?.sideData ?? this.sideData)
      }
    }
  },
  41563: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Hr,
      e: () => Nr,
      f: () => Ar,
      h: () => Gr,
      k: () => Kr
    });
    var Zr = Qr(41474),
      Wr = Qr(41512),
      ar = function(rr, Sr, Qr) {
        if (null !== Sr && void 0 !== Sr) {
          if ("object" !== typeof Sr && "function" !== typeof Sr) throw new TypeError("Object expected.");
          var Zr, Wr;
          if (Qr) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            Zr = Sr[Symbol.asyncDispose]
          }
          if (void 0 === Zr) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            Zr = Sr[Symbol.dispose], Qr && (Wr = Zr)
          }
          if ("function" !== typeof Zr) throw new TypeError("Object not disposable.");
          Wr && (Zr = function() {
            try {
              Wr.call(this)
            } catch (rr) {
              return Promise.reject(rr)
            }
          }), rr.stack.push({
            value: Sr,
            dispose: Zr,
            async: Qr
          })
        } else Qr && rr.stack.push({
          async: !0
        });
        return Sr
      },
      jr = function(rr) {
        return function(Sr) {
          function Qr(Qr) {
            Sr.error = Sr.hasError ? new rr(Qr, Sr.error, "An error was suppressed during disposal.") : Qr, Sr.hasError = !0
          }
          var Zr, Wr = 0;
          return function rr() {
            for (; Zr = Sr.stack.pop();) try {
              if (!Zr.async && 1 === Wr) return Wr = 0, Sr.stack.push(Zr), Promise.resolve().then(rr);
              if (Zr.dispose) {
                var ar = Zr.dispose.call(Zr.value);
                if (Zr.async) return Wr |= 2, Promise.resolve(ar).then(rr, (function(Sr) {
                  return Qr(Sr), rr()
                }))
              } else Wr |= 1
            } catch (jr) {
              Qr(jr)
            }
            if (1 === Wr) return Sr.hasError ? Promise.reject(Sr.error) : Promise.resolve();
            if (Sr.hasError) throw Sr.error
          }()
        }
      }("function" === typeof SuppressedError ? SuppressedError : function(rr, Sr, Qr) {
        var Zr = new Error(Qr);
        return Zr.name = "SuppressedError", Zr.error = rr, Zr.suppressed = Sr, Zr
      });
    (0, Zr.nc)();
    let Ir = -1 / 0,
      fr = -1 / 0,
      Er = null;
    "undefined" !== typeof FinalizationRegistry && (Er = new FinalizationRegistry((rr => {
      const Sr = performance.now();
      "video" === rr.type ? (Sr - Ir >= 1e3 && (Wr.e._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), Ir = Sr), "undefined" !== typeof VideoFrame && rr.data instanceof VideoFrame && rr.data.close()) : (Sr - fr >= 1e3 && (Wr.e._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), fr = Sr), "undefined" !== typeof AudioData && rr.data instanceof AudioData && rr.data.close())
    })));
    class pr {
      constructor() {
        this._referenceCount = 0, this._lastAllocationBuffer = null
      }
    }
    const xr = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
      mr = new Set(xr);
    class Nr {
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
        return Math.trunc(Zr.r * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(Zr.r * this.duration)
      }
      get hasAlpha() {
        return this.format && this.format.includes("A")
      }
      constructor(rr, Sr) {
        if (this._closed = !1, rr instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && rr instanceof SharedArrayBuffer || ArrayBuffer.isView(rr)) {
          if (!Sr || "object" !== typeof Sr) throw new TypeError("init must be an object.");
          if (void 0 === Sr.format || !mr.has(Sr.format)) throw new TypeError("init.format must be one of: " + xr.join(", "));
          if (!Number.isInteger(Sr.codedWidth) || Sr.codedWidth <= 0) throw new TypeError("init.codedWidth must be a positive integer.");
          if (!Number.isInteger(Sr.codedHeight) || Sr.codedHeight <= 0) throw new TypeError("init.codedHeight must be a positive integer.");
          if (void 0 !== Sr.rotation && ![0, 90, 180, 270].includes(Sr.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== Sr.flip && "boolean" !== typeof Sr.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(Sr.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== Sr.duration && (!Number.isFinite(Sr.duration) || Sr.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== Sr.layout) {
            if (!Array.isArray(Sr.layout)) throw new TypeError("init.layout, when provided, must be an array.");
            for (const rr of Sr.layout) {
              if (!rr || "object" !== typeof rr || Array.isArray(rr)) throw new TypeError("Each entry in init.layout must be an object.");
              if (!Number.isInteger(rr.offset) || rr.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
              if (!Number.isInteger(rr.stride) || rr.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
            }
          }
          if (void 0 !== Sr.visibleRect && (0, Zr.kd)(Sr.visibleRect, "init.visibleRect"), void 0 !== Sr.displayWidth && (!Number.isInteger(Sr.displayWidth) || Sr.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
          if (void 0 !== Sr.displayHeight && (!Number.isInteger(Sr.displayHeight) || Sr.displayHeight <= 0)) throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
          if (void 0 !== Sr.displayWidth !== (void 0 !== Sr.displayHeight)) throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
          this.format = Sr.format, this.rotation = Sr.rotation ?? 0, this.flip = Sr.flip ?? !1, this.timestamp = Sr.timestamp, this.duration = Sr.duration ?? 0;
          const Qr = Sr.layout ?? Br(Sr.format, Sr.codedWidth, Sr.codedHeight);
          let Wr = Sr.colorSpace ?? null;
          null === Wr && (Wr = "RGBA" === this.format || "RGBX" === this.format || "BGRA" === this.format || "BGRX" === this.format ? {
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
            left: Sr.visibleRect?.left ?? 0,
            top: Sr.visibleRect?.top ?? 0,
            width: Sr.visibleRect?.width ?? Sr.codedWidth,
            height: Sr.visibleRect?.height ?? Sr.codedHeight
          }, void 0 !== Sr.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? Sr.displayWidth : Sr.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? Sr.displayHeight : Sr.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height), this._data = Sr._doNotCopy ? (0, Zr.id)(rr) : (0, Zr.id)(rr).slice(), this._layout = Qr, this.colorSpace = new Yr(Wr)
        } else if ("undefined" !== typeof VideoFrame && rr instanceof VideoFrame) {
          if (void 0 !== Sr?.rotation && ![0, 90, 180, 270].includes(Sr.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== Sr?.flip && "boolean" !== typeof Sr.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (void 0 !== Sr?.timestamp && !Number.isFinite(Sr?.timestamp)) throw new TypeError("init.timestamp, when provided, must be a number.");
          if (void 0 !== Sr?.duration && (!Number.isFinite(Sr.duration) || Sr.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          void 0 !== Sr?.visibleRect && (0, Zr.kd)(Sr.visibleRect, "init.visibleRect"), this._data = rr, this._layout = null, this.format = rr.format, this.visibleRect = {
            left: rr.visibleRect?.x ?? 0,
            top: rr.visibleRect?.y ?? 0,
            width: rr.visibleRect?.width ?? rr.codedWidth,
            height: rr.visibleRect?.height ?? rr.codedHeight
          }, this.rotation = Sr?.rotation ?? 0, this.flip = Sr?.flip ?? !1, this.squarePixelWidth = rr.displayWidth, this.squarePixelHeight = rr.displayHeight, this.timestamp = Sr?.timestamp ?? rr.timestamp / 1e6, this.duration = Sr?.duration ?? (rr.duration ?? 0) / 1e6, this.colorSpace = new Yr(rr.colorSpace)
        } else if ("undefined" !== typeof HTMLImageElement && rr instanceof HTMLImageElement || "undefined" !== typeof SVGImageElement && rr instanceof SVGImageElement || "undefined" !== typeof ImageBitmap && rr instanceof ImageBitmap || "undefined" !== typeof HTMLVideoElement && rr instanceof HTMLVideoElement || "undefined" !== typeof HTMLCanvasElement && rr instanceof HTMLCanvasElement || "undefined" !== typeof OffscreenCanvas && rr instanceof OffscreenCanvas) {
          if (!Sr || "object" !== typeof Sr) throw new TypeError("init must be an object.");
          if (void 0 !== Sr.rotation && ![0, 90, 180, 270].includes(Sr.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== Sr.flip && "boolean" !== typeof Sr.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(Sr.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== Sr.duration && (!Number.isFinite(Sr.duration) || Sr.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== Sr.visibleRect && (0, Zr.kd)(Sr.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new Nr(new VideoFrame(rr, {
            timestamp: Math.trunc(Sr.timestamp * Zr.r),
            duration: Math.trunc((Sr.duration ?? 0) * Zr.r) || void 0,
            visibleRect: Sr.visibleRect && {
              x: Sr.visibleRect.left,
              y: Sr.visibleRect.top,
              width: Sr.visibleRect.width,
              height: Sr.visibleRect.height
            }
          }), Sr);
          let Qr = 0,
            Wr = 0;
          if ("naturalWidth" in rr ? (Qr = rr.naturalWidth, Wr = rr.naturalHeight) : "videoWidth" in rr ? (Qr = rr.videoWidth, Wr = rr.videoHeight) : "width" in rr && (Qr = Number(rr.width), Wr = Number(rr.height)), !Qr || !Wr) throw new TypeError("Could not determine dimensions.");
          const ar = Sr.visibleRect ?? {
              left: 0,
              top: 0,
              width: Qr,
              height: Wr
            },
            jr = new OffscreenCanvas(ar.width, ar.height),
            Ir = jr.getContext("2d", {
              alpha: (0, Zr.Cb)(),
              willReadFrequently: !0
            });
          if (!Ir) throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
          Ir.drawImage(rr, -ar.left, -ar.top), this._data = jr, this._layout = null, this.format = "RGBX", this.visibleRect = {
            left: 0,
            top: 0,
            width: ar.width,
            height: ar.height
          }, this.squarePixelWidth = ar.width, this.squarePixelHeight = ar.height, this.rotation = Sr.rotation ?? 0, this.flip = Sr.flip ?? !1, this.timestamp = Sr.timestamp, this.duration = Sr.duration ?? 0, this.colorSpace = new Yr({
            matrix: "rgb",
            primaries: "bt709",
            transfer: "iec61966-2-1",
            fullRange: !0
          })
        } else {
          if (!(rr instanceof pr)) throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
          if (!Sr || "object" !== typeof Sr) throw new TypeError("init must be an object.");
          if (void 0 !== Sr.rotation && ![0, 90, 180, 270].includes(Sr.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== Sr.flip && "boolean" !== typeof Sr.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(Sr.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== Sr.duration && (!Number.isFinite(Sr.duration) || Sr.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (this._data = rr, rr._referenceCount++, this.format = rr.getFormat(), null !== this.format && !xr.includes(this.format)) throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
          if (this.visibleRect = {
              left: 0,
              top: 0,
              width: rr.getCodedWidth(),
              height: rr.getCodedHeight()
            }, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw new TypeError("getCodedWidth() must return a positive integer.");
          if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw new TypeError("getCodedHeight() must return a positive integer.");
          if (this.squarePixelWidth = rr.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw new TypeError("getSquarePixelWidth() must return a positive integer.");
          if (this.squarePixelHeight = rr.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw new TypeError("getSquarePixelHeight() must return a positive integer.");
          this.rotation = Sr.rotation ?? 0, this.flip = Sr.flip ?? !1, this.timestamp = Sr.timestamp, this.duration = Sr.duration ?? 0, this.colorSpace = rr.getColorSpace()
        }
        this.encodeOptions = Sr?.encodeOptions ?? {}, this.pixelAspectRatio = (0, Zr.Tc)({
          num: this.squarePixelWidth * this.codedHeight,
          den: this.squarePixelHeight * this.codedWidth
        }), Er?.register(this, {
          type: "video",
          data: this._data
        }, this)
      }
      clone() {
        if (this._closed) throw new Error("VideoSample is closed.");
        return (0, Zr.I)(null !== this._data), this._data instanceof pr ? new Nr(this._data, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : nr(this._data) ? new Nr(this._data.clone(), {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : this._data instanceof Uint8Array ? ((0, Zr.I)(this._layout), new Nr(this._data, {
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
        })) : new Nr(this._data, {
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
        this._closed || (Er?.unregister(this), this._data instanceof pr ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : nr(this._data) ? this._data.close() : this._data = null, this._closed = !0)
      }
      allocationSize() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (yr(rr), this._closed) throw new Error("VideoSample is closed.");
        if (null == (rr.format ?? this.format)) throw new Error("Cannot get allocation size when format is null.");
        if (nr(this._data)) return this._data.allocationSize(rr);
        return vr(this, rr).allocationSize
      }
      async copyTo(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, Zr.xb)(rr)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (yr(Sr), this._closed) throw new Error("VideoSample is closed.");
        if (null == (Sr.format ?? this.format)) throw new Error("Cannot copy video sample data when format is null.");
        if ((0, Zr.I)(null !== this._data), nr(this._data)) return this._data.copyTo(rr, Sr);
        if (Sr.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(Sr.format)) {
          if (!(this._data instanceof pr)) {
            if ("undefined" === typeof VideoFrame) throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
            const Qr = this.toVideoFrame(),
              Zr = await Qr.copyTo(rr, Sr);
            return Qr.close(), Zr
          } {
            const Qr = {
              stack: [],
              error: void 0,
              hasError: !1
            };
            try {
              const Zr = ar(Qr, await this._data.toRgbSample({
                timestamp: this.timestamp,
                duration: this.duration,
                rotation: this.rotation,
                flip: this.flip
              }, Sr.colorSpace ?? "srgb"), !1);
              if (!(Zr instanceof Nr)) throw new TypeError("toRgbSample() must return a VideoSample.");
              if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(Zr.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${Zr.format}' instead.`);
              return await Zr.copyTo(rr, Sr)
            } catch (mr) {
              Qr.error = mr, Qr.hasError = !0
            } finally {
              jr(Qr)
            }
          }
        }
        const Qr = vr(this, Sr);
        (0, Zr.I)(this.format);
        const Wr = (0, Zr.id)(rr);
        if (Wr.byteLength < Qr.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${Qr.allocationSize}, Available: ${Wr.byteLength}`);
        const Ir = Tr(this.format);
        let fr;
        if (this._data instanceof pr) {
          let rr = this._data.getDataPlanes();
          if ((0, Zr.Mb)(rr) && (rr = await rr), !Array.isArray(rr) || rr.some((rr => !(rr.data instanceof Uint8Array) || !Number.isInteger(rr.stride) || rr.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');
          fr = rr
        } else if (this._data instanceof Uint8Array)(0, Zr.I)(this._layout), (0, Zr.I)(this._layout.length === Ir.length), fr = this._layout.map(((rr, Sr) => {
          const Qr = Math.ceil(this.codedHeight / Ir[Sr].heightDivisor);
          return {
            data: this._data.subarray(rr.offset, rr.offset + rr.stride * Qr),
            stride: rr.stride
          }
        }));
        else {
          const rr = this._data.getContext("2d");
          (0, Zr.I)(rr);
          const Sr = rr.getImageData(0, 0, this.codedWidth, this.codedHeight);
          fr = [{
            data: (0, Zr.id)(Sr.data),
            stride: 4 * this.codedWidth
          }]
        }
        const Er = [],
          xr = Ir.length;
        for (let Zr = 0; Zr < xr; Zr++) {
          const rr = Qr.computedLayouts[Zr],
            Sr = fr[Zr].stride,
            ar = fr[Zr].data;
          let jr = rr.sourceTop * Sr;
          jr += rr.sourceLeftBytes;
          let Ir = rr.destinationOffset;
          const pr = rr.sourceWidthBytes,
            xr = {
              offset: Ir,
              stride: rr.destinationStride
            };
          for (let Qr = 0; Qr < rr.sourceHeight; Qr++) {
            if (jr + pr > ar.byteLength) throw new Error("Source buffer OOB read.");
            if (Ir + pr > Wr.byteLength) throw new Error("Destination buffer OOB write.");
            const Qr = ar.subarray(jr, jr + pr);
            Wr.set(Qr, Ir), jr += Sr, Ir += rr.destinationStride
          }
          Er.push(xr)
        }
        if (void 0 !== Sr.format) {
          const rr = this.format.startsWith("RGB") !== Sr.format.startsWith("RGB"),
            Zr = this.format.includes("X") && Sr.format.includes("A");
          if (rr || Zr)
            for (let Sr = 0; Sr < Qr.allocationSize; Sr += 4) {
              if (rr) {
                const rr = Wr[Sr],
                  Qr = Wr[Sr + 2];
                Wr[Sr] = Qr, Wr[Sr + 2] = rr
              }
              Zr && (Wr[Sr + 3] = 255)
            }
        }
        return Er
      }
      toVideoFrame() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, Zr.I)(null !== this._data), this._data instanceof pr) {
          if (null === this.format) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
          const rr = this._data.getDataPlanes();
          if ((0, Zr.Mb)(rr)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
          const Sr = rr.reduce(((rr, Sr) => rr + Sr.data.byteLength), 0),
            Qr = new Uint8Array(Sr);
          let Wr = 0;
          const ar = [];
          for (const Zr of rr) Qr.set(Zr.data, Wr), ar.push(Wr), Wr += Zr.data.byteLength;
          return new VideoFrame(Qr, {
            format: this.format,
            layout: rr.map(((rr, Sr) => ({
              offset: ar[Sr],
              stride: rr.stride
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
        return nr(this._data) ? new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        }) : this._data instanceof Uint8Array ? ((0, Zr.I)(this._layout), new VideoFrame(this._data, {
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
      draw(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        let Er = 0,
          pr = 0,
          xr = this.displayWidth,
          mr = this.displayHeight,
          Nr = 0,
          Ur = 0,
          tr = this.displayWidth,
          hr = this.displayHeight;
        if (void 0 !== ar ? (Er = Sr, pr = Qr, xr = Zr, mr = Wr, Nr = ar, Ur = jr, void 0 !== Ir ? (tr = Ir, hr = fr) : (tr = xr, hr = mr)) : (Nr = Sr, Ur = Qr, void 0 !== Zr && (tr = Zr, hr = Wr)), !("undefined" !== typeof CanvasRenderingContext2D && rr instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && rr instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Number.isFinite(Er)) throw new TypeError("sx must be a number.");
        if (!Number.isFinite(pr)) throw new TypeError("sy must be a number.");
        if (!Number.isFinite(xr) || xr < 0) throw new TypeError("sWidth must be a non-negative number.");
        if (!Number.isFinite(mr) || mr < 0) throw new TypeError("sHeight must be a non-negative number.");
        if (!Number.isFinite(Nr)) throw new TypeError("dx must be a number.");
        if (!Number.isFinite(Ur)) throw new TypeError("dy must be a number.");
        if (!Number.isFinite(tr) || tr < 0) throw new TypeError("dWidth must be a non-negative number.");
        if (!Number.isFinite(hr) || hr < 0) throw new TypeError("dHeight must be a non-negative number.");
        if (this._closed) throw new Error("VideoSample is closed.");
        ({
          sx: Er,
          sy: pr,
          sWidth: xr,
          sHeight: mr
        } = this._unmapSourceRegion(Er, pr, xr, mr, this.rotation, this.flip));
        const zr = this.toCanvasImageSource();
        rr.save();
        const Yr = Nr + tr / 2,
          nr = Ur + hr / 2;
        rr.translate(Yr, nr), this.flip && rr.scale(-1, 1), rr.rotate(this.rotation * Math.PI / 180);
        const er = this.rotation % 180 === 0 ? 1 : tr / hr;
        rr.scale(1 / er, er), rr.drawImage(zr, Er, pr, xr, mr, -tr / 2, -hr / 2, tr, hr), rr.restore()
      }
      drawWithFit(rr, Sr) {
        if (!("undefined" !== typeof CanvasRenderingContext2D && rr instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && rr instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Sr || "object" !== typeof Sr) throw new TypeError("options must be an object.");
        if (!["fill", "contain", "cover"].includes(Sr.fit)) throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
        if (void 0 !== Sr.rotation && ![0, 90, 180, 270].includes(Sr.rotation)) throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
        if (void 0 !== Sr.flip && "boolean" !== typeof Sr.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        void 0 !== Sr.crop && Kr(Sr.crop, "options.");
        const Qr = rr.canvas.width,
          Zr = rr.canvas.height,
          Wr = Sr.rotation ?? this.rotation,
          ar = Sr.flip ?? this.flip,
          [jr, Ir] = Wr % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let fr, Er, pr, xr, mr = Sr.crop;
        mr && (mr = er(mr, jr, Ir));
        const {
          sx: Nr,
          sy: Ur,
          sWidth: tr,
          sHeight: hr
        } = this._unmapSourceRegion(Sr.crop?.left ?? 0, Sr.crop?.top ?? 0, Sr.crop?.width ?? jr, Sr.crop?.height ?? Ir, Wr, ar);
        if ("fill" === Sr.fit) fr = 0, Er = 0, pr = Qr, xr = Zr;
        else {
          const [rr, Wr] = Sr.crop ? [Sr.crop.width, Sr.crop.height] : [jr, Ir], ar = "contain" === Sr.fit ? Math.min(Qr / rr, Zr / Wr) : Math.max(Qr / rr, Zr / Wr);
          pr = rr * ar, xr = Wr * ar, fr = (Qr - pr) / 2, Er = (Zr - xr) / 2
        }
        rr.save();
        const zr = Wr % 180 === 0 ? 1 : pr / xr;
        rr.translate(Qr / 2, Zr / 2), ar && rr.scale(-1, 1), rr.rotate(Wr * Math.PI / 180), rr.scale(1 / zr, zr), rr.translate(-Qr / 2, -Zr / 2), rr.drawImage(this.toCanvasImageSource(), Nr, Ur, tr, hr, fr, Er, pr, xr), rr.restore()
      }
      _unmapSourceRegion(rr, Sr, Qr, Zr, Wr, ar) {
        if (ar) {
          rr = (Wr % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight) - rr - Qr
        }
        return 90 === Wr ? [rr, Sr, Qr, Zr] = [Sr, this.squarePixelHeight - rr - Qr, Zr, Qr] : 180 === Wr ? [rr, Sr] = [this.squarePixelWidth - rr - Qr, this.squarePixelHeight - Sr - Zr] : 270 === Wr && ([rr, Sr, Qr, Zr] = [this.squarePixelWidth - Sr - Zr, rr, Zr, Qr]), {
          sx: rr,
          sy: Sr,
          sWidth: Qr,
          sHeight: Zr
        }
      }
      _drawWithFitAndMipmapping(rr, Sr, Qr) {
        const Zr = rr.width,
          Wr = rr.height,
          [ar, jr] = Qr.rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth],
          Ir = Qr.crop ? Qr.crop.width : ar,
          fr = Qr.crop ? Qr.crop.height : jr;
        let Er = 0;
        2 * Zr < Ir && 2 * Wr < fr && (Er = Math.floor(Math.log2(Math.min(Ir / Zr, fr / Wr))));
        const pr = Zr * 2 ** Er,
          xr = Wr * 2 ** Er,
          {
            canvas: mr,
            context: Nr,
            isNew: Ur
          } = Er > 0 ? zr(pr, xr) : {
            canvas: rr,
            context: Sr,
            isNew: Qr.targetIsFresh
          };
        Nr.imageSmoothingQuality = "high", Qr.fillBlack ? (Nr.fillStyle = "black", Nr.fillRect(0, 0, pr, xr)) : Ur || Nr.clearRect(0, 0, pr, xr), this.drawWithFit(Nr, {
          fit: Qr.fit,
          rotation: Qr.rotation,
          flip: Qr.flip,
          crop: Qr.crop
        }), Nr.globalCompositeOperation = "copy";
        for (let tr = Er; tr > 1; tr--) {
          const rr = Zr * 2 ** tr,
            Sr = Wr * 2 ** tr;
          Nr.drawImage(mr, 0, 0, rr, Sr, 0, 0, rr / 2, Sr / 2)
        }
        Nr.globalCompositeOperation = "source-over", Er > 0 && (Sr.imageSmoothingQuality = "high", Sr.globalCompositeOperation = "copy", Sr.drawImage(mr, 0, 0, 2 * Zr, 2 * Wr, 0, 0, Zr, Wr), Sr.globalCompositeOperation = "source-over")
      }
      toCanvasImageSource() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, Zr.I)(null !== this._data), this._data instanceof pr || this._data instanceof Uint8Array) {
          const rr = this.toVideoFrame();
          return queueMicrotask((() => rr.close())), rr
        }
        return this._data
      }
      async transform(rr) {
        if (!rr || "object" !== typeof rr) throw new TypeError("options must be an object.");
        if (void 0 !== rr.width && (!Number.isInteger(rr.width) || rr.width <= 0)) throw new TypeError("options.width, when provided, must be a positive integer.");
        if (void 0 !== rr.height && (!Number.isInteger(rr.height) || rr.height <= 0)) throw new TypeError("options.height, when provided, must be a positive integer.");
        if (void 0 !== rr.roundDimensionsTo && (!Number.isInteger(rr.roundDimensionsTo) || rr.roundDimensionsTo <= 0)) throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
        if (void 0 !== rr.fit && !["fill", "contain", "cover"].includes(rr.fit)) throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
        if (void 0 !== rr.width && void 0 !== rr.height && void 0 === rr.fit) throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
        if (void 0 !== rr.rotate && ![0, 90, 180, 270].includes(rr.rotate)) throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
        if (void 0 !== rr.flip && "boolean" !== typeof rr.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        if (void 0 !== rr.crop && Kr(rr.crop, "options."), void 0 !== rr.alpha && !["keep", "discard"].includes(rr.alpha)) throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
        const {
          rotation: Sr,
          flip: Qr
        } = (0, Zr.ab)(this.rotation, this.flip, rr.rotate ?? 0, rr.flip ?? !1), [Wr, ar] = Sr % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let jr = rr.crop;
        jr && (jr = er(jr, Wr, ar));
        const Ir = jr ? jr.width : Wr,
          fr = jr ? jr.height : ar,
          Er = Ir / fr;
        let pr, xr;
        void 0 !== rr.width && void 0 === rr.height ? (pr = rr.width, xr = pr / Er) : void 0 === rr.width && void 0 !== rr.height ? (xr = rr.height, pr = xr * Er) : void 0 !== rr.width && void 0 !== rr.height ? (pr = rr.width, xr = rr.height) : (pr = Ir, xr = fr), pr = (0, Zr.Gc)(pr, rr.roundDimensionsTo ?? 1), xr = (0, Zr.Gc)(xr, rr.roundDimensionsTo ?? 1);
        const mr = {
          width: pr,
          height: xr,
          fit: rr.fit ?? "fill",
          rotation: Sr,
          flip: Qr,
          crop: jr ?? {
            left: 0,
            top: 0,
            width: Wr,
            height: ar
          },
          alpha: rr.alpha ?? "keep"
        };
        for (const Nr of Ur) {
          let rr = Nr(this, mr);
          if ((0, Zr.Mb)(rr) && (rr = await rr), null !== rr) return rr
        }
        const {
          canvas: tr,
          context: hr,
          isNew: Yr
        } = zr(mr.width, mr.height);
        return this._drawWithFitAndMipmapping(tr, hr, {
          fit: mr.fit,
          rotation: mr.rotation,
          flip: mr.flip,
          crop: mr.crop,
          targetIsFresh: Yr,
          fillBlack: "discard" === mr.alpha
        }), new Nr(tr, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: 0,
          flip: !1
        })
      }
      setRotation(rr) {
        if (![0, 90, 180, 270].includes(rr)) throw new TypeError("newRotation must be 0, 90, 180, or 270.");
        this.rotation = rr
      }
      setFlip(rr) {
        if ("boolean" !== typeof rr) throw new TypeError("newFlip must be a boolean.");
        this.flip = rr
      }
      setTimestamp(rr) {
        if (!Number.isFinite(rr)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = rr
      }
      setDuration(rr) {
        if (!Number.isFinite(rr) || rr < 0) throw new TypeError("newDuration must be a non-negative number.");
        this.duration = rr
      }
      setEncodeOptions(rr) {
        if (!rr || "object" !== typeof rr) throw new TypeError("newEncodeOptions must be an object.");
        this.encodeOptions = rr
      } [Symbol.dispose]() {
        this.close()
      }
    }
    const Ur = [],
      tr = [];
    let hr = 0;
    const zr = (rr, Sr) => {
      for (const Zr of tr)
        if (Zr.canvas.width === rr && Zr.canvas.height === Sr) return Zr.age = hr++, {
          canvas: Zr.canvas,
          context: Zr.context,
          isNew: !1
        };
      let Qr;
      if ("undefined" !== typeof OffscreenCanvas) Qr = new OffscreenCanvas(rr, Sr);
      else {
        if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
        Qr = document.createElement("canvas"), Qr.width = rr, Qr.height = Sr
      }
      const Wr = Qr.getContext("2d", {
        alpha: !0,
        willReadFrequently: !1
      });
      if (!Wr) throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
      return tr.length >= 3 && tr.splice((0, Zr.D)(tr, (rr => rr.age)), 1), tr.push({
        canvas: Qr,
        context: Wr,
        age: hr++
      }), {
        canvas: Qr,
        context: Wr,
        isNew: !0
      }
    };
    class Yr {
      constructor(rr) {
        if (void 0 !== rr) {
          if (!rr || "object" !== typeof rr) throw new TypeError("init.colorSpace, when provided, must be an object.");
          const Sr = Object.keys(Zr.e);
          if (null != rr.primaries && !Sr.includes(rr.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${Sr.join(", ")}.`);
          const Qr = Object.keys(Zr.t);
          if (null != rr.transfer && !Qr.includes(rr.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${Qr.join(", ")}.`);
          const Wr = Object.keys(Zr.m);
          if (null != rr.matrix && !Wr.includes(rr.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${Wr.join(", ")}.`);
          if (null != rr.fullRange && "boolean" !== typeof rr.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
        }
        this.primaries = rr?.primaries ?? null, this.transfer = rr?.transfer ?? null, this.matrix = rr?.matrix ?? null, this.fullRange = rr?.fullRange ?? null
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
    const nr = rr => "undefined" !== typeof VideoFrame && rr instanceof VideoFrame,
      er = (rr, Sr, Qr) => {
        const Wr = Math.min(rr.left, Sr),
          ar = Math.min(rr.top, Qr),
          jr = Math.min(rr.width, Sr - Wr),
          Ir = Math.min(rr.height, Qr - ar);
        return (0, Zr.I)(jr >= 0), (0, Zr.I)(Ir >= 0), {
          left: Wr,
          top: ar,
          width: jr,
          height: Ir
        }
      },
      Kr = (rr, Sr) => {
        if (!rr || "object" !== typeof rr) throw new TypeError(Sr + "crop, when provided, must be an object.");
        if (!Number.isInteger(rr.left) || rr.left < 0) throw new TypeError(Sr + "crop.left must be a non-negative integer.");
        if (!Number.isInteger(rr.top) || rr.top < 0) throw new TypeError(Sr + "crop.top must be a non-negative integer.");
        if (!Number.isInteger(rr.width) || rr.width < 0) throw new TypeError(Sr + "crop.width must be a non-negative integer.");
        if (!Number.isInteger(rr.height) || rr.height < 0) throw new TypeError(Sr + "crop.height must be a non-negative integer.")
      },
      yr = rr => {
        if (!rr || "object" !== typeof rr) throw new TypeError("options must be an object.");
        if (void 0 !== rr.colorSpace && !["display-p3", "srgb"].includes(rr.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
        if (void 0 !== rr.format && "string" !== typeof rr.format) throw new TypeError("options.format, when provided, must be a string.");
        if (void 0 !== rr.layout) {
          if (!Array.isArray(rr.layout)) throw new TypeError("options.layout, when provided, must be an array.");
          for (const Sr of rr.layout) {
            if (!Sr || "object" !== typeof Sr) throw new TypeError("Each entry in options.layout must be an object.");
            if (!Number.isInteger(Sr.offset) || Sr.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
            if (!Number.isInteger(Sr.stride) || Sr.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
          }
        }
        if (void 0 !== rr.rect) {
          if (!rr.rect || "object" !== typeof rr.rect) throw new TypeError("options.rect, when provided, must be an object.");
          if (void 0 !== rr.rect.x && (!Number.isInteger(rr.rect.x) || rr.rect.x < 0)) throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
          if (void 0 !== rr.rect.y && (!Number.isInteger(rr.rect.y) || rr.rect.y < 0)) throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
          if (void 0 !== rr.rect.width && (!Number.isInteger(rr.rect.width) || rr.rect.width < 0)) throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
          if (void 0 !== rr.rect.height && (!Number.isInteger(rr.rect.height) || rr.rect.height < 0)) throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")
        }
      },
      Br = (rr, Sr, Qr) => {
        const Zr = Tr(rr),
          Wr = [];
        let ar = 0;
        for (const jr of Zr) {
          const rr = Math.ceil(Sr / jr.widthDivisor),
            Zr = Math.ceil(Qr / jr.heightDivisor),
            Ir = rr * jr.sampleBytes,
            fr = Ir * Zr;
          Wr.push({
            offset: ar,
            stride: Ir
          }), ar += fr
        }
        return Wr
      },
      Tr = rr => {
        const Sr = (rr, Sr, Qr, Zr, Wr) => {
          const ar = [{
            sampleBytes: rr,
            widthDivisor: 1,
            heightDivisor: 1
          }, {
            sampleBytes: Sr,
            widthDivisor: Qr,
            heightDivisor: Zr
          }, {
            sampleBytes: Sr,
            widthDivisor: Qr,
            heightDivisor: Zr
          }];
          return Wr && ar.push({
            sampleBytes: rr,
            widthDivisor: 1,
            heightDivisor: 1
          }), ar
        };
        switch (rr) {
          case "I420":
            return Sr(1, 1, 2, 2, !1);
          case "I420P10":
          case "I420P12":
            return Sr(2, 2, 2, 2, !1);
          case "I420A":
            return Sr(1, 1, 2, 2, !0);
          case "I420AP10":
          case "I420AP12":
            return Sr(2, 2, 2, 2, !0);
          case "I422":
            return Sr(1, 1, 2, 1, !1);
          case "I422P10":
          case "I422P12":
            return Sr(2, 2, 2, 1, !1);
          case "I422A":
            return Sr(1, 1, 2, 1, !0);
          case "I422AP10":
          case "I422AP12":
            return Sr(2, 2, 2, 1, !0);
          case "I444":
            return Sr(1, 1, 1, 1, !1);
          case "I444P10":
          case "I444P12":
            return Sr(2, 2, 1, 1, !1);
          case "I444A":
            return Sr(1, 1, 1, 1, !0);
          case "I444AP10":
          case "I444AP12":
            return Sr(2, 2, 1, 1, !0);
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
            (0, Zr.H)(rr), (0, Zr.I)(!1)
        }
      },
      vr = (rr, Sr) => {
        const Qr = {
            left: 0,
            top: 0,
            width: rr.codedWidth,
            height: rr.codedHeight
          },
          Zr = Sr.rect,
          Wr = Or(Qr, Zr, rr.codedWidth, rr.codedHeight, rr.format),
          ar = Sr.layout;
        let jr;
        if (Sr.format && Sr.format !== rr.format) {
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(Sr.format)) throw new Error("NotSupportedError: Invalid destination format.");
          jr = Sr.format
        } else jr = rr.format;
        return lr(Wr, jr, ar)
      },
      Or = (rr, Sr, Qr, Zr, Wr) => {
        const ar = {
          ...rr
        };
        if (void 0 !== Sr) {
          if (0 === Sr.width || 0 === Sr.height) throw new TypeError("visibleRect dimensions cannot be zero.");
          if ((Sr.x || 0) + (Sr.width || 0) > Qr) throw new TypeError("visibleRect exceeds codedWidth.");
          if ((Sr.y || 0) + (Sr.height || 0) > Zr) throw new TypeError("visibleRect exceeds codedHeight.");
          ar.x = Sr.x || 0, ar.y = Sr.y || 0, ar.width = Sr.width || 0, ar.height = Sr.height || 0
        }
        if (!Lr(Wr, ar)) throw new TypeError("visibleRect alignment is invalid for the format.");
        return ar
      },
      Lr = (rr, Sr) => {
        if (null === rr) return !0;
        const Qr = Tr(rr);
        for (let Zr = 0; Zr < Qr.length; Zr++) {
          const rr = Qr[Zr],
            Wr = rr.widthDivisor,
            ar = rr.heightDivisor;
          if ((Sr.x || 0) % Wr !== 0) return !1;
          if ((Sr.y || 0) % ar !== 0) return !1
        }
        return !0
      },
      lr = (rr, Sr, Qr) => {
        const Zr = Tr(Sr),
          Wr = Zr.length;
        if (void 0 !== Qr && Qr.length !== Wr) throw new TypeError(`Layout must have ${Wr} planes.`);
        let ar = 0;
        const jr = [],
          Ir = [];
        for (let fr = 0; fr < Wr; fr++) {
          const Sr = Zr[fr],
            Wr = Sr.sampleBytes,
            Er = Sr.widthDivisor,
            pr = Sr.heightDivisor,
            xr = {
              destinationOffset: 0,
              destinationStride: 0,
              sourceTop: 0,
              sourceHeight: 0,
              sourceLeftBytes: 0,
              sourceWidthBytes: 0
            };
          if (xr.sourceTop = Math.ceil(Math.trunc(rr.y || 0) / pr), xr.sourceHeight = Math.ceil(Math.trunc(rr.height || 0) / pr), xr.sourceLeftBytes = Math.floor(Math.trunc(rr.x || 0) / Er) * Wr, xr.sourceWidthBytes = Math.floor(Math.trunc(rr.width || 0) / Er) * Wr, void 0 !== Qr) {
            const rr = Qr[fr];
            if (rr.stride < xr.sourceWidthBytes) throw new TypeError(`Stride for plane ${fr} is too small.`);
            xr.destinationOffset = rr.offset, xr.destinationStride = rr.stride
          } else xr.destinationOffset = ar, xr.destinationStride = xr.sourceWidthBytes;
          const mr = xr.destinationStride * xr.sourceHeight + xr.destinationOffset;
          if (mr > 4294967295) throw new TypeError("Allocation size exceeds limit.");
          Ir.push(mr), ar = Math.max(ar, mr);
          for (let rr = 0; rr < fr; rr++) {
            const Sr = jr[rr];
            if (!(Ir[fr] <= Sr.destinationOffset || Ir[rr] <= xr.destinationOffset)) throw new TypeError("Planes overlap.")
          }
          jr.push(xr)
        }
        return {
          allocationSize: ar,
          computedLayouts: jr
        }
      },
      Xr = new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
    class Pr {
      constructor() {
        this._referenceCount = 0
      }
    }
    class Hr {
      get microsecondTimestamp() {
        return Math.trunc(Zr.r * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(Zr.r * this.duration)
      }
      constructor(rr) {
        if (this._closed = !1, Mr(rr)) {
          if (null === rr.format) throw new TypeError("AudioData with null format is not supported.");
          this._data = rr, this.format = rr.format, this.sampleRate = rr.sampleRate, this.numberOfFrames = rr.numberOfFrames, this.numberOfChannels = rr.numberOfChannels, this.timestamp = rr.timestamp / 1e6, this.duration = rr.numberOfFrames / rr.sampleRate
        } else if (rr instanceof Pr) {
          if (this._data = rr, rr._referenceCount++, this.format = rr.getFormat(), !Xr.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
          if (this.sampleRate = rr.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
          if (this.numberOfFrames = rr.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
          if (this.numberOfChannels = rr.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
          if (this.timestamp = rr.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
          this.duration = this.numberOfFrames / this.sampleRate
        } else {
          if (!rr || "object" !== typeof rr) throw new TypeError("Invalid AudioDataInit: must be an object.");
          if (!Xr.has(rr.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
          if (!Number.isFinite(rr.sampleRate) || rr.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
          if (!Number.isInteger(rr.numberOfChannels) || 0 === rr.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
          if (!Number.isFinite(rr?.timestamp)) throw new TypeError("init.timestamp must be a number.");
          const Sr = rr.data.byteLength / (qr(rr.format) * rr.numberOfChannels);
          if (!Number.isInteger(Sr)) throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
          let Qr;
          if (this.format = rr.format, this.sampleRate = rr.sampleRate, this.numberOfFrames = Sr, this.numberOfChannels = rr.numberOfChannels, this.timestamp = rr.timestamp, this.duration = Sr / rr.sampleRate, rr.data instanceof ArrayBuffer) Qr = new Uint8Array(rr.data);
          else {
            if (!ArrayBuffer.isView(rr.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
            Qr = new Uint8Array(rr.data.buffer, rr.data.byteOffset, rr.data.byteLength)
          }
          const Zr = this.numberOfFrames * this.numberOfChannels * qr(this.format);
          if (Qr.byteLength < Zr) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
          this._data = Qr
        }
        Er?.register(this, {
          type: "audio",
          data: this._data
        }, this)
      }
      allocationSize(rr) {
        if (!rr || "object" !== typeof rr) throw new TypeError("options must be an object.");
        if (!Number.isInteger(rr.planeIndex) || rr.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== rr.format && !Xr.has(rr.format)) throw new TypeError("Invalid format.");
        if (void 0 !== rr.frameOffset && (!Number.isInteger(rr.frameOffset) || rr.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== rr.frameCount && (!Number.isInteger(rr.frameCount) || rr.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const Sr = rr.format ?? this.format,
          Qr = rr.frameOffset ?? 0;
        if (Qr >= this.numberOfFrames) throw new RangeError("frameOffset out of range");
        const Zr = void 0 !== rr.frameCount ? rr.frameCount : this.numberOfFrames - Qr;
        if (Zr > this.numberOfFrames - Qr) throw new RangeError("frameCount out of range");
        const Wr = qr(Sr),
          ar = Rr(Sr);
        if (ar && rr.planeIndex >= this.numberOfChannels) throw new RangeError("planeIndex out of range");
        if (!ar && 0 !== rr.planeIndex) throw new RangeError("planeIndex out of range");
        return (ar ? Zr : Zr * this.numberOfChannels) * Wr
      }
      copyTo(rr, Sr) {
        if (!(0, Zr.xb)(rr)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (!Sr || "object" !== typeof Sr) throw new TypeError("options must be an object.");
        if (!Number.isInteger(Sr.planeIndex) || Sr.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== Sr.format && !Xr.has(Sr.format)) throw new TypeError("Invalid format.");
        if (void 0 !== Sr.frameOffset && (!Number.isInteger(Sr.frameOffset) || Sr.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== Sr.frameCount && (!Number.isInteger(Sr.frameCount) || Sr.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const {
          format: Qr,
          frameCount: Wr,
          frameOffset: ar
        } = Sr;
        let {
          planeIndex: jr
        } = Sr, Ir = this.format;
        const fr = Qr ?? this.format;
        if (!fr) throw new Error("Destination format not determined");
        const Er = this.numberOfFrames,
          pr = this.numberOfChannels,
          xr = ar ?? 0;
        if (xr >= Er) throw new RangeError("frameOffset out of range");
        const mr = void 0 !== Wr ? Wr : Er - xr;
        if (mr > Er - xr) throw new RangeError("frameCount out of range");
        const Nr = qr(fr),
          Ur = Rr(fr);
        if (Ur && jr >= pr) throw new RangeError("planeIndex out of range");
        if (!Ur && 0 !== jr) throw new RangeError("planeIndex out of range");
        const tr = (Ur ? mr : mr * pr) * Nr;
        if (rr.byteLength < tr) throw new RangeError("Destination buffer is too small");
        const hr = (0, Zr.ed)(rr),
          zr = Cr(fr);
        if (Mr(this._data)) {
          if ((0, Zr.Sb)() && pr > 2 && fr !== Ir) return void kr(this._data, hr, Ir, fr, pr, jr, xr, mr);
          try {
            return void this._data.copyTo(rr, {
              planeIndex: jr,
              frameOffset: xr,
              frameCount: mr,
              format: fr
            })
          } catch (Br) {
            if ("f32-planar" === fr) throw Br;
            Ir = "f32-planar"
          }
        }
        const Yr = gr(Ir),
          nr = qr(Ir),
          er = Rr(Ir);
        let Kr;
        if (this._data instanceof Pr) {
          const rr = rr => {
            const Sr = this._data.getDataPlane(rr);
            if (!(Sr instanceof Uint8Array)) throw new TypeError("getDataPlane() must return a Uint8Array.");
            const Qr = Er * nr * (er ? 1 : pr);
            if (Sr.byteLength !== Qr) throw new TypeError(`Data plane ${rr} has invalid size. Expected exactly ${Qr} bytes, got ${Sr.byteLength} bytes.`);
            return Sr
          };
          if (er)
            if (Ur) Kr = rr(jr), jr = 0;
            else {
              Kr = new Uint8Array(Er * nr * pr);
              for (let Sr = 0; Sr < pr; Sr++) {
                const Qr = rr(Sr);
                Kr.set(Qr, Sr * Er * nr)
              }
            }
          else Kr = rr(0)
        } else if (this._data instanceof Uint8Array) Kr = this._data;
        else if ((0, Zr.I)("f32-planar" === Ir), Ur) Kr = new Uint8Array(this._data.allocationSize({
          format: "f32-planar",
          planeIndex: jr
        })), this._data.copyTo(Kr, {
          format: "f32-planar",
          planeIndex: jr
        }), jr = 0;
        else {
          Kr = new Uint8Array(this._data.allocationSize({
            format: "f32-planar",
            planeIndex: 0
          }) * pr);
          for (let rr = 0; rr < pr; rr++) this._data.copyTo(Kr.subarray(rr * Er * nr, (rr + 1) * Er * nr), {
            format: "f32-planar",
            planeIndex: rr
          })
        }
        const yr = (0, Zr.ed)(Kr);
        for (let Zr = 0; Zr < mr; Zr++)
          if (Ur) {
            let rr;
            rr = er ? (jr * Er + (Zr + xr)) * nr : ((Zr + xr) * pr + jr) * nr;
            zr(hr, Zr * Nr, Yr(yr, rr))
          } else
            for (let rr = 0; rr < pr; rr++) {
              let Sr;
              Sr = er ? (rr * Er + (Zr + xr)) * nr : ((Zr + xr) * pr + rr) * nr;
              zr(hr, (Zr * pr + rr) * Nr, Yr(yr, Sr))
            }
      }
      clone() {
        if (this._closed) throw new Error("AudioSample is closed.");
        if (this._data instanceof Pr) {
          const rr = new Hr(this._data);
          return rr.setTimestamp(this.timestamp), rr
        }
        if (Mr(this._data)) {
          const rr = new Hr(this._data.clone());
          return rr.setTimestamp(this.timestamp), rr
        }
        return new Hr({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp,
          data: this._data
        })
      }
      trim(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.numberOfFrames;
        if (!Number.isInteger(rr) || rr < 0) throw new TypeError("startFrame must be a non-negative integer.");
        if (!Number.isInteger(Sr) || Sr < 0) throw new TypeError("endFrame must be a non-negative integer.");
        if (rr > this.numberOfFrames) throw new RangeError("startFrame out of range.");
        if (Sr > this.numberOfFrames) throw new RangeError("endFrame out of range.");
        if (Sr < rr) throw new RangeError("endFrame must not be less than startFrame.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const Qr = Sr - rr,
          Zr = qr(this.format);
        let Wr;
        if (Rr(this.format)) {
          const Sr = Qr * Zr;
          if (Wr = new Uint8Array(Sr * this.numberOfChannels), Qr > 0)
            for (let Zr = 0; Zr < this.numberOfChannels; Zr++) this.copyTo(Wr.subarray(Zr * Sr, (Zr + 1) * Sr), {
              planeIndex: Zr,
              format: this.format,
              frameOffset: rr,
              frameCount: Qr
            })
        } else Wr = new Uint8Array(Qr * this.numberOfChannels * Zr), Qr > 0 && this.copyTo(Wr, {
          planeIndex: 0,
          format: this.format,
          frameOffset: rr,
          frameCount: Qr
        });
        return new Hr({
          data: Wr,
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp + rr / this.sampleRate
        })
      }
      close() {
        this._closed || (Er?.unregister(this), this._data instanceof Pr ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : Mr(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
      }
      toAudioData() {
        if (this._closed) throw new Error("AudioSample is closed.");
        return this._data instanceof Pr ? this._createAudioDataFromData() : Mr(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
        })
      }
      _createAudioDataFromData() {
        if (Rr(this.format)) {
          const rr = this.allocationSize({
              planeIndex: 0,
              format: this.format
            }),
            Sr = new ArrayBuffer(rr * this.numberOfChannels);
          for (let Qr = 0; Qr < this.numberOfChannels; Qr++) this.copyTo(new Uint8Array(Sr, Qr * rr, rr), {
            planeIndex: Qr,
            format: this.format
          });
          return new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: Sr
          })
        } {
          const rr = new ArrayBuffer(this.allocationSize({
            planeIndex: 0,
            format: this.format
          }));
          return this.copyTo(rr, {
            planeIndex: 0,
            format: this.format
          }), new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: rr
          })
        }
      }
      toAudioBuffer() {
        if (this._closed) throw new Error("AudioSample is closed.");
        const rr = new AudioBuffer({
            numberOfChannels: this.numberOfChannels,
            length: this.numberOfFrames,
            sampleRate: this.sampleRate
          }),
          Sr = new Float32Array(this.allocationSize({
            planeIndex: 0,
            format: "f32-planar"
          }) / 4);
        for (let Qr = 0; Qr < this.numberOfChannels; Qr++) this.copyTo(Sr, {
          planeIndex: Qr,
          format: "f32-planar"
        }), rr.copyToChannel(Sr, Qr);
        return rr
      }
      setTimestamp(rr) {
        if (!Number.isFinite(rr)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = rr
      } [Symbol.dispose]() {
        this.close()
      }
      static * _fromAudioBuffer(rr, Sr) {
        if (!(rr instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const Qr = rr.numberOfChannels,
          Zr = rr.sampleRate,
          Wr = rr.length,
          ar = Math.floor(24e4 / Qr);
        let jr = 0,
          Ir = Wr;
        for (; Ir > 0;) {
          const Wr = Math.min(ar, Ir),
            fr = new Float32Array(Qr * Wr);
          for (let Sr = 0; Sr < Qr; Sr++) rr.copyFromChannel(fr.subarray(Sr * Wr, (Sr + 1) * Wr), Sr, jr);
          yield new Hr({
            format: "f32-planar",
            sampleRate: Zr,
            numberOfFrames: Wr,
            numberOfChannels: Qr,
            timestamp: Sr + jr / Zr,
            data: fr
          }), jr += Wr, Ir -= Wr
        }
      }
      static fromAudioBuffer(rr, Sr) {
        if (!(rr instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const Qr = rr.numberOfChannels,
          Zr = rr.sampleRate,
          Wr = rr.length,
          ar = Math.floor(24e4 / Qr);
        let jr = 0,
          Ir = Wr;
        const fr = [];
        for (; Ir > 0;) {
          const Wr = Math.min(ar, Ir),
            Er = new Float32Array(Qr * Wr);
          for (let Sr = 0; Sr < Qr; Sr++) rr.copyFromChannel(Er.subarray(Sr * Wr, (Sr + 1) * Wr), Sr, jr);
          const pr = new Hr({
            format: "f32-planar",
            sampleRate: Zr,
            numberOfFrames: Wr,
            numberOfChannels: Qr,
            timestamp: Sr + jr / Zr,
            data: Er
          });
          fr.push(pr), jr += Wr, Ir -= Wr
        }
        return fr
      }
    }
    const qr = rr => {
        switch (rr) {
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
      Rr = rr => {
        switch (rr) {
          case "u8-planar":
          case "s16-planar":
          case "s32-planar":
          case "f32-planar":
            return !0;
          default:
            return !1
        }
      },
      gr = rr => {
        switch (rr) {
          case "u8":
          case "u8-planar":
            return (rr, Sr) => (rr.getUint8(Sr) - 128) / 128;
          case "s16":
          case "s16-planar":
            return (rr, Sr) => rr.getInt16(Sr, !0) / 32768;
          case "s32":
          case "s32-planar":
            return (rr, Sr) => rr.getInt32(Sr, !0) / 2147483648;
          case "f32":
          case "f32-planar":
            return (rr, Sr) => rr.getFloat32(Sr, !0)
        }
      },
      Cr = rr => {
        switch (rr) {
          case "u8":
          case "u8-planar":
            return (rr, Sr, Qr) => rr.setUint8(Sr, (0, Zr.X)(Math.round(128 * Qr) + 128, 0, 255));
          case "s16":
          case "s16-planar":
            return (rr, Sr, Qr) => rr.setInt16(Sr, (0, Zr.X)(Math.round(32768 * Qr), -32768, 32767), !0);
          case "s32":
          case "s32-planar":
            return (rr, Sr, Qr) => rr.setInt32(Sr, (0, Zr.X)(Math.round(2147483648 * Qr), -2147483648, 2147483647), !0);
          case "f32":
          case "f32-planar":
            return (rr, Sr, Qr) => rr.setFloat32(Sr, Qr, !0)
        }
      },
      Mr = rr => "undefined" !== typeof AudioData && rr instanceof AudioData,
      Gr = rr => {
        switch (rr) {
          case "u8-planar":
            return "u8";
          case "s16-planar":
            return "s16";
          case "s32-planar":
            return "s32";
          case "f32-planar":
            return "f32";
          default:
            return rr
        }
      },
      kr = (rr, Sr, Qr, Wr, ar, jr, Ir, fr) => {
        const Er = gr(Qr),
          pr = Cr(Wr),
          xr = qr(Qr),
          mr = qr(Wr),
          Nr = Rr(Qr);
        if (Rr(Wr))
          if (Nr) {
            const Wr = new ArrayBuffer(fr * xr),
              ar = (0, Zr.ed)(Wr);
            rr.copyTo(Wr, {
              planeIndex: jr,
              frameOffset: Ir,
              frameCount: fr,
              format: Qr
            });
            for (let rr = 0; rr < fr; rr++) {
              pr(Sr, rr * mr, Er(ar, rr * xr))
            }
          } else {
            const Wr = new ArrayBuffer(fr * ar * xr),
              Nr = (0, Zr.ed)(Wr);
            rr.copyTo(Wr, {
              planeIndex: 0,
              frameOffset: Ir,
              frameCount: fr,
              format: Qr
            });
            for (let rr = 0; rr < fr; rr++) {
              pr(Sr, rr * mr, Er(Nr, (rr * ar + jr) * xr))
            }
          }
        else if (Nr) {
          const Wr = new ArrayBuffer(fr * xr),
            jr = (0, Zr.ed)(Wr);
          for (let Zr = 0; Zr < ar; Zr++) {
            rr.copyTo(Wr, {
              planeIndex: Zr,
              frameOffset: Ir,
              frameCount: fr,
              format: Qr
            });
            for (let rr = 0; rr < fr; rr++) {
              pr(Sr, (rr * ar + Zr) * mr, Er(jr, rr * xr))
            }
          }
        } else {
          const Wr = new ArrayBuffer(fr * ar * xr),
            jr = (0, Zr.ed)(Wr);
          rr.copyTo(Wr, {
            planeIndex: 0,
            frameOffset: Ir,
            frameCount: fr,
            format: Qr
          });
          for (let rr = 0; rr < fr; rr++)
            for (let Qr = 0; Qr < ar; Qr++) {
              const Zr = rr * ar + Qr;
              pr(Sr, Zr * mr, Er(jr, Zr * xr))
            }
        }
      },
      Ar = (rr, Sr) => {
        const Qr = rr.allocationSize({
            format: Sr,
            planeIndex: 0
          }),
          Zr = new ArrayBuffer(Qr);
        return rr.copyTo(Zr, {
          format: Sr,
          planeIndex: 0
        }), new Hr({
          data: Zr,
          format: Sr,
          numberOfChannels: rr.numberOfChannels,
          sampleRate: rr.sampleRate,
          timestamp: rr.timestamp,
          duration: rr.duration
        })
      }
  },
  41526: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      e: () => Er,
      g: () => ar,
      j: () => fr
    });
    const Zr = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
      Wr = /^WEBVTT(.|\n)*?\n{2}/,
      ar = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
    class jr {
      constructor(rr) {
        this.preambleText = null, this.preambleEmitted = !1, this.options = rr
      }
      parse(rr) {
        let Sr;
        if (rr = rr.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), Zr.lastIndex = 0, !this.preambleText) {
          if (!Wr.test(rr)) throw new Error("WebVTT preamble incorrect.");
          Sr = Zr.exec(rr);
          const Qr = rr.slice(0, Sr?.index ?? rr.length).trimEnd();
          if (!Qr) throw new Error("No WebVTT preamble provided.");
          this.preambleText = Qr, Sr && (rr = rr.slice(Sr.index), Zr.lastIndex = 0)
        }
        for (; Sr = Zr.exec(rr);) {
          const Qr = rr.slice(0, Sr.index),
            Wr = Sr[1],
            ar = Sr.index + Sr[0].length,
            jr = rr.indexOf("\n", ar) + 1,
            Ir = rr.slice(ar, jr).trim();
          let Er = rr.indexOf("\n\n", ar); - 1 === Er && (Er = rr.length);
          const pr = fr(Sr[2]),
            xr = fr(Sr[3]) - pr,
            mr = rr.slice(jr, Er).trim();
          rr = rr.slice(Er).trimStart(), Zr.lastIndex = 0;
          const Nr = {
              timestamp: pr / 1e3,
              duration: xr / 1e3,
              text: mr,
              identifier: Wr,
              settings: Ir,
              notes: Qr
            },
            Ur = {};
          this.preambleEmitted || (Ur.config = {
            description: this.preambleText
          }, this.preambleEmitted = !0), this.options.output(Nr, Ur)
        }
      }
    }
    const Ir = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
      fr = rr => {
        const Sr = Ir.exec(rr);
        if (!Sr) throw new Error("Expected match.");
        return 36e5 * Number(Sr[1] || "0") + 6e4 * Number(Sr[2]) + 1e3 * Number(Sr[3]) + Number(Sr[4])
      },
      Er = rr => {
        const Sr = Math.floor(rr / 36e5),
          Qr = Math.floor(rr % 36e5 / 6e4),
          Zr = Math.floor(rr % 6e4 / 1e3),
          Wr = rr % 1e3;
        return Sr.toString().padStart(2, "0") + ":" + Qr.toString().padStart(2, "0") + ":" + Zr.toString().padStart(2, "0") + "." + Wr.toString().padStart(3, "0")
      }
  },
  41539: (rr, Sr, Qr) => {
    var Zr;
    Qr.d(Sr, {
      d: () => Er,
      g: () => pr,
      h: () => mr,
      k: () => jr
    });
    var Wr = Qr(41545),
      ar = Qr(41474);
    "undefined" !== typeof(Zr || (Zr = Qr.t(Wr, 2))) && (Zr || (Zr = Qr.t(Wr, 2)));
    class jr extends ar.j {
      constructor() {
        super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
      }
      _setMonotonicity(rr) {
        !1 !== this._monotonicity && (this._monotonicity = rr)
      }
      _dispatchWrite(rr, Sr) {
        this.onwrite?.(rr, Sr), this._emit("write", {
          start: rr,
          end: Sr
        })
      }
      slice(rr) {
        if (!Number.isInteger(rr) || rr < 0) throw new TypeError("offset must be a non-negative integer.");
        return new xr(this, rr)
      }
    }
    const Ir = 65536,
      fr = 2 ** 32;
    class Er extends jr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (super(), this.buffer = null, this._maxPos = 0, !rr || "object" !== typeof rr) throw new TypeError("BufferTarget options, when provided, must be an object.");
        if (void 0 !== rr.onFinalize && "function" !== typeof rr.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        if (this._options = rr, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
          this._buffer = new ArrayBuffer(Ir, {
            maxByteLength: fr
          })
        } catch {
          this._buffer = new ArrayBuffer(Ir), this._supportsResize = !1
        } else this._buffer = new ArrayBuffer(Ir);
        this._bytes = new Uint8Array(this._buffer)
      }
      _ensureSize(rr) {
        let Sr = this._buffer.byteLength;
        for (; Sr < rr;) Sr *= 2;
        if (Sr !== this._buffer.byteLength) {
          if (Sr > fr) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
          if (this._supportsResize) this._buffer.resize(Sr);
          else {
            const rr = new ArrayBuffer(Sr),
              Qr = new Uint8Array(rr);
            Qr.set(this._bytes, 0), this._buffer = rr, this._bytes = Qr
          }
        }
      }
      _start() {}
      _write(rr, Sr) {
        this._ensureSize(Sr + rr.byteLength), this._bytes.set(rr, Sr), this._maxPos = Math.max(this._maxPos, Sr + rr.byteLength), this._dispatchWrite(Sr, Sr + rr.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
      }
      async _close() {}
      _getSlice(rr, Sr) {
        return this._bytes.slice(rr, Sr)
      }
    }
    class pr extends jr {
      _start() {}
      _write(rr, Sr) {
        this._dispatchWrite(Sr, Sr + rr.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
    }
    class xr extends jr {
      constructor(rr, Sr) {
        super(), this._baseTarget = rr, this._offset = Sr
      }
      _start() {}
      _write(rr, Sr) {
        this._baseTarget._write(rr, this._offset + Sr), this._dispatchWrite(Sr, Sr + rr.byteLength)
      }
      _flush() {
        return this._baseTarget._flush()
      }
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
      _setMonotonicity(rr) {
        super._setMonotonicity(rr), this._baseTarget._setMonotonicity(rr)
      }
    }
    class mr {
      constructor(rr, Sr) {
        if (this.rootPath = rr, this.getTarget = Sr, "string" !== typeof rr) throw new TypeError("rootPath must be a string.");
        if ("function" !== typeof Sr) throw new TypeError("getTarget must be a function.")
      }
    }
  },
  41521: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr
    });
    const Zr = "Mediabunny v1.61.3"
  },
  41531: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(41474);
    class Wr {
      constructor(rr, Sr) {
        if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, rr._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
        this.target = rr, rr._setMonotonicity(Sr), rr._writerAcquired = !0
      }
      start() {
        (0, Zr.I)(!this.started), this.target._start(), this.started = !0
      }
      write(rr) {
        (0, Zr.I)(this.started && !this.finalized), this.maybeTrackWrites(rr), this.target._write(rr, this.pos), this.pos += rr.byteLength
      }
      seek(rr) {
        this.pos = rr
      }
      getPos() {
        return this.pos
      }
      async flush() {
        return (0, Zr.I)(this.started && !this.finalized), this.target._flush()
      }
      async finalize() {
        (0, Zr.I)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
      }
      maybeTrackWrites(rr) {
        if (!this.trackedWrites) return;
        let Sr = this.getPos();
        if (Sr < this.trackedStart) {
          if (Sr + rr.byteLength <= this.trackedStart) return;
          rr = rr.subarray(this.trackedStart - Sr), Sr = 0
        }
        const Qr = Sr + rr.byteLength - this.trackedStart;
        let Zr = this.trackedWrites.byteLength;
        for (; Zr < Qr;) Zr *= 2;
        if (Zr !== this.trackedWrites.byteLength) {
          const rr = new Uint8Array(Zr);
          rr.set(this.trackedWrites, 0), this.trackedWrites = rr
        }
        this.trackedWrites.set(rr, Sr - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, Sr + rr.byteLength)
      }
      startTrackingWrites() {
        this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
      }
      stopTrackingWrites() {
        if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
        const rr = {
          data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
          start: this.trackedStart,
          end: this.trackedEnd
        };
        return this.trackedWrites = null, rr
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);