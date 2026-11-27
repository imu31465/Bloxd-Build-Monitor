/*! For license information please see u88b9b.229.14317690.chunk.js.LICENSE.txt */
export const id = 229;
export const ids = [229];
export const modules = {
  40554: (ee, ie, He) => {
    function ye() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function be(ee) {
      return ee instanceof Uint8Array && (!ye() || !Buffer.isBuffer(ee))
    }

    function Me(ee) {
      return ee instanceof ArrayBuffer
    }

    function Ke(ee) {
      return !!ye() && Buffer.isBuffer(ee)
    }
    var Ue = He(40557).e,
      Fe = He(40562).d,
      Je = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    ie.b = function(ee) {
      if (!be(ee) && !Me(ee) && !Ke(ee)) throw new TypeError(Je);
      var ie = !1,
        He = !1;
      be(ee) ? ie = !0 : Me(ee) && (He = !0, ee = new Uint8Array(ee));
      var ye, Ue, oe, Re = new Fe(ee),
        ke = Re.maxCompressedLength();
      if (ie ? (ye = new Uint8Array(ke), oe = Re.compressToBuffer(ye)) : He ? (ye = new ArrayBuffer(ke), Ue = new Uint8Array(ye), oe = Re.compressToBuffer(Ue)) : (ye = Buffer.alloc(ke), oe = Re.compressToBuffer(ye)), !ye.slice) {
        var qe = new Uint8Array(Array.prototype.slice.call(ye, 0, oe));
        if (ie) return qe;
        if (He) return qe.buffer;
        throw new Error("Not implemented")
      }
      return ye.slice(0, oe)
    }
  },
  40562: (ee, ie) => {
    var He = new Array(15);

    function ye(ee, ie) {
      return 506832829 * ee >>> ie
    }

    function be(ee, ie) {
      return ee[ie] + (ee[ie + 1] << 8) + (ee[ie + 2] << 16) + (ee[ie + 3] << 24)
    }

    function Me(ee, ie, He) {
      return ee[ie] === ee[He] && ee[ie + 1] === ee[He + 1] && ee[ie + 2] === ee[He + 2] && ee[ie + 3] === ee[He + 3]
    }

    function Ke(ee, ie, He, ye, be) {
      return He <= 60 ? (ye[be] = He - 1 << 2, be += 1) : He < 256 ? (ye[be] = 240, ye[be + 1] = He - 1, be += 2) : (ye[be] = 244, ye[be + 1] = He - 1 & 255, ye[be + 2] = He - 1 >>> 8, be += 3),
        function(ee, ie, He, ye, be) {
          var Me;
          for (Me = 0; Me < be; Me++) He[ye + Me] = ee[ie + Me]
        }(ee, ie, ye, be, He), be + He
    }

    function Ue(ee, ie, He, ye) {
      return ye < 12 && He < 2048 ? (ee[ie] = 1 + (ye - 4 << 2) + (He >>> 8 << 5), ee[ie + 1] = 255 & He, ie + 2) : (ee[ie] = 2 + (ye - 1 << 2), ee[ie + 1] = 255 & He, ee[ie + 2] = He >>> 8, ie + 3)
    }

    function Fe(ee, ie, He, ye) {
      for (; ye >= 68;) ie = Ue(ee, ie, He, 64), ye -= 64;
      return ye > 64 && (ie = Ue(ee, ie, He, 60), ye -= 60), Ue(ee, ie, He, ye)
    }

    function Je(ee, ie, Ue, Je, oe) {
      for (var Re = 1; 1 << Re <= Ue && Re <= 14;) Re += 1;
      var ke = 32 - (Re -= 1);
      "undefined" === typeof He[Re] && (He[Re] = new Uint16Array(1 << Re));
      var qe, fe = He[Re];
      for (qe = 0; qe < fe.length; qe++) fe[qe] = 0;
      var Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We, te = ie + Ue,
        Ze = ie,
        we = ie,
        De = !0;
      if (Ue >= 15)
        for (Te = te - 15, Xe = ye(be(ee, ie += 1), ke); De;) {
          Ee = 32, ze = ie;
          do {
            if (pe = Xe, ge = Ee >>> 5, Ee += 1, ze = (ie = ze) + ge, ie > Te) {
              De = !1;
              break
            }
            Xe = ye(be(ee, ze), ke), Be = Ze + fe[pe], fe[pe] = ie - Ze
          } while (!Me(ee, ie, Be));
          if (!De) break;
          oe = Ke(ee, we, ie - we, Je, oe);
          do {
            for (Oe = ie, de = 4; ie + de < te && ee[ie + de] === ee[Be + de];) de += 1;
            if (ie += de, oe = Fe(Je, oe, Oe - Be, de), we = ie, ie >= Te) {
              De = !1;
              break
            }
            fe[ye(be(ee, ie - 1), ke)] = ie - 1 - Ze, Be = Ze + fe[We = ye(be(ee, ie), ke)], fe[We] = ie - Ze
          } while (Me(ee, ie, Be));
          if (!De) break;
          Xe = ye(be(ee, ie += 1), ke)
        }
      return we < te && (oe = Ke(ee, we, te - we, Je, oe)), oe
    }

    function oe(ee) {
      this.array = ee
    }
    oe.prototype.maxCompressedLength = function() {
      var ee = this.array.length;
      return 32 + ee + Math.floor(ee / 6)
    }, oe.prototype.compressToBuffer = function(ee) {
      var ie, He = this.array,
        ye = He.length,
        be = 0,
        Me = 0;
      for (Me = function(ee, ie, He) {
          do {
            ie[He] = 127 & ee, (ee >>>= 7) > 0 && (ie[He] += 128), He += 1
          } while (ee > 0);
          return He
        }(ye, ee, Me); be < ye;) Me = Je(He, be, ie = Math.min(ye - be, 65536), ee, Me), be += ie;
      return Me
    }, ie.d = oe
  },
  40557: (ee, ie) => {
    var He = [0, 255, 65535, 16777215, 4294967295];

    function ye(ee, ie, He, ye, be) {
      var Me;
      for (Me = 0; Me < be; Me++) He[ye + Me] = ee[ie + Me]
    }

    function be(ee, ie, He, ye) {
      var be;
      for (be = 0; be < ye; be++) ee[ie + be] = ee[ie - He + be]
    }

    function Me(ee) {
      this.array = ee, this.pos = 0
    }
    Me.prototype.readUncompressedLength = function() {
      for (var ee, ie, He = 0, ye = 0; ye < 32 && this.pos < this.array.length;) {
        if (ee = this.array[this.pos], this.pos += 1, (ie = 127 & ee) << ye >>> ye !== ie) return -1;
        if (He |= ie << ye, ee < 128) return He;
        ye += 7
      }
      return -1
    }, Me.prototype.uncompressToBuffer = function(ee) {
      for (var ie, Me, Ke, Ue, Fe = this.array, Je = Fe.length, oe = this.pos, Re = 0; oe < Fe.length;)
        if (ie = Fe[oe], oe += 1, 0 === (3 & ie)) {
          if ((Me = 1 + (ie >>> 2)) > 60) {
            if (oe + 3 >= Je) return !1;
            Ke = Me - 60, Me = 1 + ((Me = Fe[oe] + (Fe[oe + 1] << 8) + (Fe[oe + 2] << 16) + (Fe[oe + 3] << 24)) & He[Ke]), oe += Ke
          }
          if (oe + Me > Je) return !1;
          ye(Fe, oe, ee, Re, Me), oe += Me, Re += Me
        } else {
          switch (3 & ie) {
            case 1:
              Me = 4 + (ie >>> 2 & 7), Ue = Fe[oe] + (ie >>> 5 << 8), oe += 1;
              break;
            case 2:
              if (oe + 1 >= Je) return !1;
              Me = 1 + (ie >>> 2), Ue = Fe[oe] + (Fe[oe + 1] << 8), oe += 2;
              break;
            case 3:
              if (oe + 3 >= Je) return !1;
              Me = 1 + (ie >>> 2), Ue = Fe[oe] + (Fe[oe + 1] << 8) + (Fe[oe + 2] << 16) + (Fe[oe + 3] << 24), oe += 4
          }
          if (0 === Ue || Ue > Re) return !1;
          be(ee, Re, Ue, Me), Re += Me
        } return !0
    }, ie.e = Me
  },
  36938: ee => {
    ee.exports = function(ee, ie, He, ye) {
      var be = self || window;
      try {
        try {
          var Me;
          try {
            Me = new be.Blob([ee])
          } catch (Je) {
            (Me = new(be.BlobBuilder || be.WebKitBlobBuilder || be.MozBlobBuilder || be.MSBlobBuilder)).append(ee), Me = Me.getBlob()
          }
          var Ke = be.URL || be.webkitURL,
            Ue = Ke.createObjectURL(Me),
            Fe = new be[ie](Ue, He);
          return Ke.revokeObjectURL(Ue), Fe
        } catch (Je) {
          return new be[ie]("data:application/javascript,".concat(encodeURIComponent(ee)), He)
        }
      } catch (Je) {
        if (!ye) throw Error("Inline worker is not supported");
        return new be[ie](ye, He)
      }
    }
  },
  40685: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      e: () => be,
      h: () => Je,
      l: () => qe,
      n: () => Ke,
      r: () => fe
    });
    var ye = He(40689);
    const be = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
      Me = [-1, 1, 2, 3, 4, 5, 6, 8],
      Ke = ee => {
        if (!ee || ee.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
        const ie = new ye.e(ee),
          He = Ue(ie),
          {
            frequencyIndex: be,
            sampleRate: Ke
          } = Fe(ie),
          Je = ie.readBits(4);
        let oe = null;
        Je >= 1 && Je <= 7 && (oe = Me[Je]);
        let Re = He,
          ke = !1,
          qe = Ke;
        if (5 === He || 29 === He) ke = 29 === He, qe = Fe(ie).sampleRate, Re = Ue(ie), 22 === Re && ie.skipBits(4);
        else
          for (; ie.getBitsLeft() > 15;) {
            const ee = ie.pos;
            if (695 === ie.readBits(11)) {
              5 === Ue(ie) && ie.readBits(1) && (qe = Fe(ie).sampleRate, ie.getBitsLeft() > 11 && 1352 === ie.readBits(11) && (ke = !!ie.readBits(1)));
              break
            }
            ie.pos = ee + 1
          }
        return null !== oe && oe > 1 && (ke = !1), {
          objectType: He,
          coreObjectType: Re,
          frequencyIndex: be,
          channelConfiguration: Je,
          outputSampleRate: qe,
          outputNumberOfChannels: ke && 1 === oe ? 2 : oe
        }
      },
      Ue = ee => {
        const ie = ee.readBits(5);
        return 31 === ie ? 32 + ee.readBits(6) : ie
      },
      Fe = ee => {
        const ie = ee.readBits(4);
        return 15 === ie ? {
          frequencyIndex: ie,
          sampleRate: ee.readBits(24)
        } : {
          frequencyIndex: ie,
          sampleRate: ie < be.length ? be[ie] : null
        }
      },
      Je = ee => {
        const ie = 5 === ee.objectType || 29 === ee.objectType,
          He = 29 === ee.objectType,
          be = ie ? ee.outputSampleRate / 2 : ee.outputSampleRate,
          Ke = He ? 1 : ee.outputNumberOfChannels,
          Ue = Me.indexOf(Ke);
        if (-1 === Ue) throw new TypeError(`Unsupported number of channels: ${ee.outputNumberOfChannels}`);
        let Fe = 16;
        ee.objectType >= 32 && (Fe += 6), 15 === ke(be) && (Fe += 24), ie && (Fe += 9, 15 === ke(ee.outputSampleRate) && (Fe += 24));
        const Je = Math.ceil(Fe / 8),
          qe = new Uint8Array(Je),
          fe = new ye.e(qe);
        return oe(fe, ee.objectType), Re(fe, be), fe.writeBits(4, Ue), ie && (Re(fe, ee.outputSampleRate), oe(fe, 2)), fe.writeBits(3, 0), qe
      },
      oe = (ee, ie) => {
        ie < 32 ? ee.writeBits(5, ie) : (ee.writeBits(5, 31), ee.writeBits(6, ie - 32))
      },
      Re = (ee, ie) => {
        const He = ke(ie);
        ee.writeBits(4, He), 15 === He && ee.writeBits(24, ie)
      },
      ke = ee => {
        const ie = be.indexOf(ee);
        return -1 === ie ? 15 : ie
      },
      qe = ee => {
        const ie = new Uint8Array(7),
          He = new ye.e(ie),
          {
            coreObjectType: be,
            frequencyIndex: Me,
            channelConfiguration: Ke
          } = ee,
          Ue = be - 1;
        return He.writeBits(12, 4095), He.writeBits(1, 0), He.writeBits(2, 0), He.writeBits(1, 1), He.writeBits(2, Ue), He.writeBits(4, Me), He.writeBits(1, 0), He.writeBits(3, Ke), He.writeBits(1, 0), He.writeBits(1, 0), He.writeBits(1, 0), He.writeBits(1, 0), He.skipBits(13), He.writeBits(11, 2047), He.writeBits(2, 0), {
          header: ie,
          bitstream: He
        }
      },
      fe = (ee, ie) => {
        ee.pos = 30, ee.writeBits(13, ie)
      }
  },
  40689: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      constructor(ee) {
        this.bytes = ee, this.pos = 0
      }
      seekToByte(ee) {
        this.pos = 8 * ee
      }
      readBit() {
        const ee = Math.floor(this.pos / 8),
          ie = this.bytes[ee] ?? 0,
          He = 7 - (7 & this.pos),
          ye = (ie & 1 << He) >> He;
        return this.pos++, ye
      }
      readBits(ee) {
        if (1 === ee) return this.readBit();
        let ie = 0;
        for (let He = 0; He < ee; He++) ie <<= 1, ie |= this.readBit();
        return ie
      }
      writeBits(ee, ie) {
        const He = this.pos + ee;
        for (let ye = this.pos; ye < He; ye++) {
          const ee = Math.floor(ye / 8);
          let be = this.bytes[ee];
          const Me = 7 - (7 & ye);
          be &= ~(1 << Me), be |= (ie & 1 << He - ye - 1) >> He - ye - 1 << Me, this.bytes[ee] = be
        }
        this.pos = He
      }
      copyBits(ee, ie) {
        let He = 0;
        for (; He < ee - 7; He += 8) this.writeBits(8, ie.readBits(8));
        const ye = ee - He;
        ye > 0 && this.writeBits(ye, ie.readBits(ye))
      }
      readAlignedByte() {
        if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
        const ee = this.pos / 8,
          ie = this.bytes[ee] ?? 0;
        return this.pos += 8, ie
      }
      skipBits(ee) {
        this.pos += ee
      }
      getBitsLeft() {
        return 8 * this.bytes.length - this.pos
      }
      clone() {
        const ee = new ye(this.bytes);
        return ee.pos = this.pos, ee
      }
    }
  },
  40699: (ee, ie, He) => {
    He.d(ie, {
      b: () => Qe,
      e: () => Fe,
      i: () => ei,
      m: () => Ne,
      q: () => Je,
      s: () => Se,
      w: () => fi,
      z: () => Xe,
      D: () => ze,
      G: () => Ge,
      H: () => ge,
      L: () => Le,
      O: () => he,
      T: () => le,
      R: () => Be,
      W: () => we,
      Z: () => fe,
      bb: () => Ze,
      fb: () => ue,
      gb: () => ke,
      hb: () => qe,
      jb: () => re,
      nb: () => Ri,
      rb: () => Hi,
      ub: () => Ie,
      yb: () => ne,
      Bb: () => se,
      Db: () => Ee,
      Eb: () => xe
    });
    var ye = He(40692),
      be = He(40671),
      Me = He(40703);
    const Ke = [48e3, 44100, 32e3],
      Ue = [24e3, 22050, 16e3];
    var Fe, Je, oe = He(40689),
      Re = He(40708);
    ! function(ee) {
      ee[ee.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", ee[ee.SLICE_DPA = 2] = "SLICE_DPA", ee[ee.SLICE_DPB = 3] = "SLICE_DPB", ee[ee.SLICE_DPC = 4] = "SLICE_DPC", ee[ee.IDR = 5] = "IDR", ee[ee.SEI = 6] = "SEI", ee[ee.SPS = 7] = "SPS", ee[ee.PPS = 8] = "PPS", ee[ee.AUD = 9] = "AUD", ee[ee.SPS_EXT = 13] = "SPS_EXT"
    }(Fe || (Fe = {})),
    function(ee) {
      ee[ee.RASL_N = 8] = "RASL_N", ee[ee.RASL_R = 9] = "RASL_R", ee[ee.BLA_W_LP = 16] = "BLA_W_LP", ee[ee.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", ee[ee.VPS_NUT = 32] = "VPS_NUT", ee[ee.SPS_NUT = 33] = "SPS_NUT", ee[ee.PPS_NUT = 34] = "PPS_NUT", ee[ee.AUD_NUT = 35] = "AUD_NUT", ee[ee.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", ee[ee.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT"
    }(Je || (Je = {}));
    const ke = function*(ee) {
        let ie = 0,
          He = -1;
        for (; ie < ee.length - 2;) {
          const ye = ee.indexOf(0, ie);
          if (-1 === ye || ye >= ee.length - 2) break;
          ie = ye;
          let be = 0;
          ie + 3 < ee.length && 0 === ee[ie + 1] && 0 === ee[ie + 2] && 1 === ee[ie + 3] ? be = 4 : 0 === ee[ie + 1] && 1 === ee[ie + 2] && (be = 3), 0 !== be ? (-1 !== He && ie > He && (yield {
            offset: He,
            length: ie - He
          }), He = ie + be, ie = He) : ie++
        } - 1 !== He && He < ee.length && (yield {
          offset: He,
          length: ee.length - He
        })
      },
      qe = function*(ee, ie) {
        let He = 0;
        const ye = new DataView(ee.buffer, ee.byteOffset, ee.byteLength);
        for (; He + ie <= ee.length;) {
          let ee;
          1 === ie ? ee = ye.getUint8(He) : 2 === ie ? ee = ye.getUint16(He, !1) : 3 === ie ? ee = (0, be.ob)(ye, He, !1) : ((0, be.I)(4 === ie), ee = ye.getUint32(He, !1)), He += ie, yield {
            offset: He,
            length: ee
          }, He += ee
        }
      },
      fe = ee => 31 & ee,
      Te = ee => {
        const ie = [],
          He = ee.length;
        for (let ye = 0; ye < He; ye++) ye + 2 < He && 0 === ee[ye] && 0 === ee[ye + 1] && 3 === ee[ye + 2] ? (ie.push(0, 0), ye += 2) : ie.push(ee[ye]);
        return new Uint8Array(ie)
      },
      pe = new Uint8Array([0, 0, 0, 1]),
      Xe = ee => {
        const ie = ee.reduce(((ee, ie) => ee + pe.byteLength + ie.byteLength), 0),
          He = new Uint8Array(ie);
        let ye = 0;
        for (const be of ee) He.set(pe, ye), ye += pe.byteLength, He.set(be, ye), ye += be.byteLength;
        return He
      },
      ze = (ee, ie) => {
        const He = ee.reduce(((ee, He) => ee + ie + He.byteLength), 0),
          ye = new Uint8Array(He);
        let Me = 0;
        for (const Ke of ee) {
          const ee = new DataView(ye.buffer, ye.byteOffset, ye.byteLength);
          switch (ie) {
            case 1:
              ee.setUint8(Me, Ke.byteLength);
              break;
            case 2:
              ee.setUint16(Me, Ke.byteLength, !1);
              break;
            case 3:
              (0, be._c)(ee, Me, Ke.byteLength, !1);
              break;
            case 4:
              ee.setUint32(Me, Ke.byteLength, !1)
          }
          Me += ie, ye.set(Ke, Me), Me += Ke.byteLength
        }
        return ye
      },
      Be = ee => {
        try {
          const ie = [],
            He = [],
            ye = [];
          for (const be of ke(ee)) {
            const Me = ee.subarray(be.offset, be.offset + be.length),
              Ke = fe(Me[0]);
            Ke === Fe.SPS ? ie.push(Me) : Ke === Fe.PPS ? He.push(Me) : Ke === Fe.SPS_EXT && ye.push(Me)
          }
          if (0 === ie.length) return null;
          if (0 === He.length) return null;
          const Me = ie[0],
            Ke = de(Me);
          (0, be.I)(null !== Ke);
          const Ue = 100 === Ke.profileIdc || 110 === Ke.profileIdc || 122 === Ke.profileIdc || 144 === Ke.profileIdc;
          return {
            configurationVersion: 1,
            avcProfileIndication: Ke.profileIdc,
            profileCompatibility: Ke.constraintFlags,
            avcLevelIndication: Ke.levelIdc,
            lengthSizeMinusOne: 3,
            sequenceParameterSets: ie,
            pictureParameterSets: He,
            chromaFormat: Ue ? Ke.chromaFormatIdc : null,
            bitDepthLumaMinus8: Ue ? Ke.bitDepthLumaMinus8 : null,
            bitDepthChromaMinus8: Ue ? Ke.bitDepthChromaMinus8 : null,
            sequenceParameterSetExt: Ue ? ye : null
          }
        } catch (ie) {
          return Me.b._error("Error building AVC Decoder Configuration Record:", ie), null
        }
      },
      Ee = ee => {
        const ie = [];
        ie.push(ee.configurationVersion), ie.push(ee.avcProfileIndication), ie.push(ee.profileCompatibility), ie.push(ee.avcLevelIndication), ie.push(252 | 3 & ee.lengthSizeMinusOne), ie.push(224 | 31 & ee.sequenceParameterSets.length);
        for (const He of ee.sequenceParameterSets) {
          const ee = He.byteLength;
          ie.push(ee >> 8), ie.push(255 & ee);
          for (let ye = 0; ye < ee; ye++) ie.push(He[ye])
        }
        ie.push(ee.pictureParameterSets.length);
        for (const He of ee.pictureParameterSets) {
          const ee = He.byteLength;
          ie.push(ee >> 8), ie.push(255 & ee);
          for (let ye = 0; ye < ee; ye++) ie.push(He[ye])
        }
        if ((100 === ee.avcProfileIndication || 110 === ee.avcProfileIndication || 122 === ee.avcProfileIndication || 144 === ee.avcProfileIndication) && null !== ee.chromaFormat) {
          (0, be.I)(null !== ee.bitDepthLumaMinus8), (0, be.I)(null !== ee.bitDepthChromaMinus8), (0, be.I)(null !== ee.sequenceParameterSetExt), ie.push(252 | 3 & ee.chromaFormat), ie.push(248 | 7 & ee.bitDepthLumaMinus8), ie.push(248 | 7 & ee.bitDepthChromaMinus8), ie.push(ee.sequenceParameterSetExt.length);
          for (const He of ee.sequenceParameterSetExt) {
            const ee = He.byteLength;
            ie.push(ee >> 8), ie.push(255 & ee);
            for (let ye = 0; ye < ee; ye++) ie.push(He[ye])
          }
        }
        return new Uint8Array(ie)
      },
      ge = ee => {
        try {
          const ie = (0, be.nd)(ee);
          let He = 0;
          const ye = ie.getUint8(He++),
            Me = ie.getUint8(He++),
            Ke = ie.getUint8(He++),
            Ue = ie.getUint8(He++),
            Fe = 3 & ie.getUint8(He++),
            Je = 31 & ie.getUint8(He++),
            oe = [];
          for (let be = 0; be < Je; be++) {
            const ye = ie.getUint16(He, !1);
            He += 2, oe.push(ee.subarray(He, He + ye)), He += ye
          }
          const Re = ie.getUint8(He++),
            ke = [];
          for (let be = 0; be < Re; be++) {
            const ye = ie.getUint16(He, !1);
            He += 2, ke.push(ee.subarray(He, He + ye)), He += ye
          }
          const qe = {
            configurationVersion: ye,
            avcProfileIndication: Me,
            profileCompatibility: Ke,
            avcLevelIndication: Ue,
            lengthSizeMinusOne: Fe,
            sequenceParameterSets: oe,
            pictureParameterSets: ke,
            chromaFormat: null,
            bitDepthLumaMinus8: null,
            bitDepthChromaMinus8: null,
            sequenceParameterSetExt: null
          };
          if ((100 === Me || 110 === Me || 122 === Me || 144 === Me) && He + 4 <= ee.length) {
            const ye = 3 & ie.getUint8(He++),
              be = 7 & ie.getUint8(He++),
              Me = 7 & ie.getUint8(He++),
              Ke = ie.getUint8(He++);
            qe.chromaFormat = ye, qe.bitDepthLumaMinus8 = be, qe.bitDepthChromaMinus8 = Me;
            const Ue = [];
            for (let Fe = 0; Fe < Ke; Fe++) {
              const ye = ie.getUint16(He, !1);
              He += 2, Ue.push(ee.subarray(He, He + ye)), He += ye
            }
            qe.sequenceParameterSetExt = Ue
          }
          return qe
        } catch (ie) {
          return Me.b._error("Error deserializing AVC Decoder Configuration Record:", ie), null
        }
      },
      Oe = {
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
      de = ee => {
        try {
          const ie = Te(ee),
            He = new oe.e(ie);
          He.skipBits(1), He.skipBits(2);
          if (7 !== He.readBits(5)) return null;
          const Me = He.readAlignedByte(),
            Ke = He.readAlignedByte(),
            Ue = He.readAlignedByte();
          (0, be.Ac)(He);
          let Fe = 1,
            Je = 0,
            Re = 0,
            ke = 0;
          if (100 === Me || 110 === Me || 122 === Me || 244 === Me || 44 === Me || 83 === Me || 86 === Me || 118 === Me || 128 === Me) {
            Fe = (0, be.Ac)(He), 3 === Fe && (ke = He.readBits(1)), Je = (0, be.Ac)(He), Re = (0, be.Ac)(He), He.skipBits(1);
            if (He.readBits(1))
              for (let ee = 0; ee < (3 !== Fe ? 8 : 12); ee++) {
                if (He.readBits(1)) {
                  const ie = ee < 6 ? 16 : 64;
                  let ye = 8,
                    Me = 8;
                  for (let ee = 0; ee < ie; ee++) {
                    if (0 !== Me) {
                      Me = (ye + (0, be.Ec)(He) + 256) % 256
                    }
                    ye = 0 === Me ? ye : Me
                  }
                }
              }
          }(0, be.Ac)(He);
          const qe = (0, be.Ac)(He);
          if (0 === qe)(0, be.Ac)(He);
          else if (1 === qe) {
            He.skipBits(1), (0, be.Ec)(He), (0, be.Ec)(He);
            const ee = (0, be.Ac)(He);
            for (let ie = 0; ie < ee; ie++)(0, be.Ec)(He)
          }(0, be.Ac)(He), He.skipBits(1);
          const fe = (0, be.Ac)(He),
            pe = (0, be.Ac)(He),
            Xe = 16 * (fe + 1),
            ze = 16 * (pe + 1);
          let Be = Xe,
            Ee = ze;
          const ge = He.readBits(1);
          ge || He.skipBits(1), He.skipBits(1);
          if (He.readBits(1)) {
            const ee = (0, be.Ac)(He),
              ie = (0, be.Ac)(He),
              ye = (0, be.Ac)(He),
              Me = (0, be.Ac)(He);
            let Ke, Ue;
            if (0 === (0 === ke ? Fe : 0)) Ke = 1, Ue = 2 - ge;
            else {
              Ke = 3 === Fe ? 1 : 2, Ue = (1 === Fe ? 2 : 1) * (2 - ge)
            }
            Be -= Ke * (ee + ie), Ee -= Ue * (ye + Me)
          }
          let de = 2,
            te = 2,
            Ze = 2,
            we = 0,
            De = {
              num: 1,
              den: 1
            },
            Pe = null,
            Ae = null,
            Ye = null,
            Ve = null;
          const ae = He.pos;
          if (He.readBits(1)) {
            if (He.readBits(1)) {
              const ee = He.readBits(8);
              if (255 === ee) De = {
                num: He.readBits(16),
                den: He.readBits(16)
              };
              else {
                const ie = Oe[ee];
                ie && (De = ie)
              }
            }
            He.readBits(1) && He.skipBits(1);
            if (He.readBits(1)) {
              He.skipBits(3), we = He.readBits(1);
              He.readBits(1) && (de = He.readBits(8), te = He.readBits(8), Ze = He.readBits(8))
            }
            He.readBits(1) && ((0, be.Ac)(He), (0, be.Ac)(He));
            He.readBits(1) && (He.skipBits(32), He.skipBits(32), He.skipBits(1));
            const ee = He.readBits(1);
            ee && We(He);
            const ie = He.readBits(1);
            ie && We(He), (ee || ie) && He.skipBits(1), He.skipBits(1), Ye = He.pos, Ve = He.readBits(1), Ve && (He.skipBits(1), (0, be.Ac)(He), (0, be.Ac)(He), (0, be.Ac)(He), (0, be.Ac)(He), Pe = (0, be.Ac)(He), Ae = (0, be.Ac)(He))
          }
          if (null === Pe) {
            (0, be.I)(null === Ae);
            if (44 !== Me && 86 !== Me && 100 !== Me && 110 !== Me && 122 !== Me && 244 !== Me || !(16 & Ke)) {
              const ee = fe + 1,
                ie = (2 - ge) * (pe + 1),
                He = ye.g.find((ee => ee.level >= Ue)) ?? (0, be.bc)(ye.g),
                Me = Math.min(Math.floor(He.maxDpbMbs / (ee * ie)), 16);
              Pe = Me, Ae = Me
            } else Pe = 0, Ae = 0
          }
          return (0, be.I)(null !== Ae), {
            emulationUnpreventedBytes: ie,
            profileIdc: Me,
            constraintFlags: Ke,
            levelIdc: Ue,
            frameMbsOnlyFlag: ge,
            chromaFormatIdc: Fe,
            bitDepthLumaMinus8: Je,
            bitDepthChromaMinus8: Re,
            codedWidth: Xe,
            codedHeight: ze,
            displayWidth: Be,
            displayHeight: Ee,
            pixelAspectRatio: De,
            colourPrimaries: de,
            matrixCoefficients: Ze,
            transferCharacteristics: te,
            fullRangeFlag: we,
            numReorderFrames: Pe,
            maxDecFrameBuffering: Ae,
            vuiParametersFlagBitOffset: ae,
            bitstreamRestrictionFlagBitOffset: Ye,
            bitstreamRestrictionFlag: Ve
          }
        } catch (ie) {
          return Me.b._error("Error parsing AVC SPS:", ie), null
        }
      },
      We = ee => {
        const ie = (0, be.Ac)(ee);
        ee.skipBits(4), ee.skipBits(4);
        for (let He = 0; He <= ie; He++)(0, be.Ac)(ee), (0, be.Ac)(ee), ee.skipBits(1);
        ee.skipBits(5), ee.skipBits(5), ee.skipBits(5), ee.skipBits(5)
      },
      te = (ee, ie) => {
        if (ie.description) {
          const He = 3 & (0, be.od)(ie.description)[21];
          return qe(ee, He + 1)
        }
        return ke(ee)
      },
      Ze = ee => ee >> 1 & 63,
      we = ee => {
        try {
          const ie = [],
            He = [],
            ye = [],
            Ke = [];
          for (const be of ke(ee)) {
            const Me = ee.subarray(be.offset, be.offset + be.length),
              Ue = Ze(Me[0]);
            Ue === Je.VPS_NUT ? ie.push(Me) : Ue === Je.SPS_NUT ? He.push(Me) : Ue === Je.PPS_NUT ? ye.push(Me) : Ue !== Je.PREFIX_SEI_NUT && Ue !== Je.SUFFIX_SEI_NUT || Ke.push(Me)
          }
          if (0 === He.length || 0 === ye.length) return null;
          const Ue = (ee => {
            try {
              const ie = new oe.e(Te(ee));
              ie.skipBits(16), ie.readBits(4);
              const He = ie.readBits(3),
                ye = ie.readBits(1),
                {
                  general_profile_space: Me,
                  general_tier_flag: Ke,
                  general_profile_idc: Ue,
                  general_profile_compatibility_flags: Fe,
                  general_constraint_indicator_flags: Je,
                  general_level_idc: Re
                } = De(ie, He);
              (0, be.Ac)(ie);
              const ke = (0, be.Ac)(ie);
              let qe = 0;
              3 === ke && (qe = ie.readBits(1));
              const fe = (0, be.Ac)(ie),
                pe = (0, be.Ac)(ie);
              let Xe = fe,
                ze = pe;
              if (ie.readBits(1)) {
                const ee = (0, be.Ac)(ie),
                  He = (0, be.Ac)(ie),
                  ye = (0, be.Ac)(ie),
                  Me = (0, be.Ac)(ie);
                let Ke = 1,
                  Ue = 1;
                const Fe = 0 === qe ? ke : 0;
                1 === Fe ? (Ke = 2, Ue = 2) : 2 === Fe && (Ke = 2, Ue = 1), Xe -= (ee + He) * Ke, ze -= (ye + Me) * Ue
              }
              const Be = (0, be.Ac)(ie),
                Ee = (0, be.Ac)(ie);
              (0, be.Ac)(ie);
              const ge = ie.readBits(1);
              let Oe = 0;
              for (let ee = ge ? 0 : He; ee <= He; ee++)(0, be.Ac)(ie), Oe = (0, be.Ac)(ie), (0, be.Ac)(ie);
              (0, be.Ac)(ie), (0, be.Ac)(ie), (0, be.Ac)(ie), (0, be.Ac)(ie), (0, be.Ac)(ie), (0, be.Ac)(ie), ie.readBits(1) && ie.readBits(1) && Pe(ie), ie.skipBits(1), ie.skipBits(1), ie.readBits(1) && (ie.skipBits(4), ie.skipBits(4), (0, be.Ac)(ie), (0, be.Ac)(ie), ie.skipBits(1));
              const de = (0, be.Ac)(ie);
              if (Ae(ie, de), ie.readBits(1)) {
                const ee = (0, be.Ac)(ie);
                for (let He = 0; He < ee; He++)(0, be.Ac)(ie), ie.skipBits(1)
              }
              ie.skipBits(1), ie.skipBits(1);
              let We = 2,
                te = 2,
                Ze = 2,
                we = 0,
                Ye = 0,
                ae = {
                  num: 1,
                  den: 1
                };
              if (ie.readBits(1)) {
                const ee = Ve(ie, He);
                ae = ee.pixelAspectRatio, We = ee.colourPrimaries, te = ee.transferCharacteristics, Ze = ee.matrixCoefficients, we = ee.fullRangeFlag, Ye = ee.minSpatialSegmentationIdc
              }
              return {
                displayWidth: Xe,
                displayHeight: ze,
                pixelAspectRatio: ae,
                colourPrimaries: We,
                transferCharacteristics: te,
                matrixCoefficients: Ze,
                fullRangeFlag: we,
                maxDecFrameBuffering: Oe + 1,
                spsMaxSubLayersMinus1: He,
                spsTemporalIdNestingFlag: ye,
                generalProfileSpace: Me,
                generalTierFlag: Ke,
                generalProfileIdc: Ue,
                generalProfileCompatibilityFlags: Fe,
                generalConstraintIndicatorFlags: Je,
                generalLevelIdc: Re,
                chromaFormatIdc: ke,
                bitDepthLumaMinus8: Be,
                bitDepthChromaMinus8: Ee,
                minSpatialSegmentationIdc: Ye
              }
            } catch (ie) {
              return Me.b._error("Error parsing HEVC SPS:", ie), null
            }
          })(He[0]);
          if (!Ue) return null;
          let Fe = 0;
          if (ye.length > 0) {
            const ee = ye[0],
              ie = new oe.e(Te(ee));
            ie.skipBits(16), (0, be.Ac)(ie), (0, be.Ac)(ie), ie.skipBits(1), ie.skipBits(1), ie.skipBits(3), ie.skipBits(1), ie.skipBits(1), (0, be.Ac)(ie), (0, be.Ac)(ie), (0, be.Ec)(ie), ie.skipBits(1), ie.skipBits(1), ie.readBits(1) && (0, be.Ac)(ie), (0, be.Ec)(ie), (0, be.Ec)(ie), ie.skipBits(1), ie.skipBits(1), ie.skipBits(1), ie.skipBits(1);
            const He = ie.readBits(1),
              Me = ie.readBits(1);
            Fe = He || Me ? He && !Me ? 2 : !He && Me ? 3 : 0 : 0
          }
          const Re = [...ie.length ? [{
            arrayCompleteness: 1,
            nalUnitType: Je.VPS_NUT,
            nalUnits: ie
          }] : [], ...He.length ? [{
            arrayCompleteness: 1,
            nalUnitType: Je.SPS_NUT,
            nalUnits: He
          }] : [], ...ye.length ? [{
            arrayCompleteness: 1,
            nalUnitType: Je.PPS_NUT,
            nalUnits: ye
          }] : [], ...Ke.length ? [{
            arrayCompleteness: 1,
            nalUnitType: Ze(Ke[0][0]),
            nalUnits: Ke
          }] : []];
          return {
            configurationVersion: 1,
            generalProfileSpace: Ue.generalProfileSpace,
            generalTierFlag: Ue.generalTierFlag,
            generalProfileIdc: Ue.generalProfileIdc,
            generalProfileCompatibilityFlags: Ue.generalProfileCompatibilityFlags,
            generalConstraintIndicatorFlags: Ue.generalConstraintIndicatorFlags,
            generalLevelIdc: Ue.generalLevelIdc,
            minSpatialSegmentationIdc: Ue.minSpatialSegmentationIdc,
            parallelismType: Fe,
            chromaFormatIdc: Ue.chromaFormatIdc,
            bitDepthLumaMinus8: Ue.bitDepthLumaMinus8,
            bitDepthChromaMinus8: Ue.bitDepthChromaMinus8,
            avgFrameRate: 0,
            constantFrameRate: 0,
            numTemporalLayers: Ue.spsMaxSubLayersMinus1 + 1,
            temporalIdNested: Ue.spsTemporalIdNestingFlag,
            lengthSizeMinusOne: 3,
            arrays: Re
          }
        } catch (ie) {
          return Me.b._error("Error building HEVC Decoder Configuration Record:", ie), null
        }
      },
      De = (ee, ie) => {
        const He = ee.readBits(2),
          ye = ee.readBits(1),
          be = ee.readBits(5);
        let Me = 0;
        for (let oe = 0; oe < 32; oe++) Me = Me << 1 | ee.readBits(1);
        const Ke = new Uint8Array(6);
        for (let oe = 0; oe < 6; oe++) Ke[oe] = ee.readBits(8);
        const Ue = ee.readBits(8),
          Fe = [],
          Je = [];
        for (let oe = 0; oe < ie; oe++) Fe.push(ee.readBits(1)), Je.push(ee.readBits(1));
        if (ie > 0)
          for (let oe = ie; oe < 8; oe++) ee.skipBits(2);
        for (let oe = 0; oe < ie; oe++) Fe[oe] && ee.skipBits(88), Je[oe] && ee.skipBits(8);
        return {
          general_profile_space: He,
          general_tier_flag: ye,
          general_profile_idc: be,
          general_profile_compatibility_flags: Me,
          general_constraint_indicator_flags: Ke,
          general_level_idc: Ue
        }
      },
      Pe = ee => {
        for (let ie = 0; ie < 4; ie++)
          for (let He = 0; He < (3 === ie ? 2 : 6); He++) {
            if (ee.readBits(1)) {
              const He = Math.min(64, 1 << 4 + (ie << 1));
              ie > 1 && (0, be.Ec)(ee);
              for (let ie = 0; ie < He; ie++)(0, be.Ec)(ee)
            } else(0, be.Ac)(ee)
          }
      },
      Ae = (ee, ie) => {
        const He = [];
        for (let ye = 0; ye < ie; ye++) He[ye] = Ye(ee, ye, ie, He)
      },
      Ye = (ee, ie, He, ye) => {
        let Me = 0,
          Ke = 0,
          Ue = 0;
        if (0 !== ie && (Ke = ee.readBits(1)), Ke) {
          if (ie === He) {
            Ue = ie - ((0, be.Ac)(ee) + 1)
          } else Ue = ie - 1;
          ee.readBits(1), (0, be.Ac)(ee);
          const Ke = ye[Ue] ?? 0;
          for (let ie = 0; ie <= Ke; ie++) {
            ee.readBits(1) || ee.readBits(1)
          }
          Me = ye[Ue]
        } else {
          const ie = (0, be.Ac)(ee),
            He = (0, be.Ac)(ee);
          for (let ye = 0; ye < ie; ye++)(0, be.Ac)(ee), ee.readBits(1);
          for (let ye = 0; ye < He; ye++)(0, be.Ac)(ee), ee.readBits(1);
          Me = ie + He
        }
        return Me
      },
      Ve = (ee, ie) => {
        let He = 2,
          ye = 2,
          Me = 2,
          Ke = 0,
          Ue = 0,
          Fe = {
            num: 1,
            den: 1
          };
        if (ee.readBits(1)) {
          const ie = ee.readBits(8);
          if (255 === ie) Fe = {
            num: ee.readBits(16),
            den: ee.readBits(16)
          };
          else {
            const ee = Oe[ie];
            ee && (Fe = ee)
          }
        }
        return ee.readBits(1) && ee.readBits(1), ee.readBits(1) && (ee.readBits(3), Ke = ee.readBits(1), ee.readBits(1) && (He = ee.readBits(8), ye = ee.readBits(8), Me = ee.readBits(8))), ee.readBits(1) && ((0, be.Ac)(ee), (0, be.Ac)(ee)), ee.readBits(1), ee.readBits(1), ee.readBits(1), ee.readBits(1) && ((0, be.Ac)(ee), (0, be.Ac)(ee), (0, be.Ac)(ee), (0, be.Ac)(ee)), ee.readBits(1) && (ee.readBits(32), ee.readBits(32), ee.readBits(1) && (0, be.Ac)(ee), ee.readBits(1) && ae(ee, !0, ie)), ee.readBits(1) && (ee.readBits(1), ee.readBits(1), ee.readBits(1), Ue = (0, be.Ac)(ee), (0, be.Ac)(ee), (0, be.Ac)(ee), (0, be.Ac)(ee), (0, be.Ac)(ee)), {
          pixelAspectRatio: Fe,
          colourPrimaries: He,
          transferCharacteristics: ye,
          matrixCoefficients: Me,
          fullRangeFlag: Ke,
          minSpatialSegmentationIdc: Ue
        }
      },
      ae = (ee, ie, He) => {
        let ye = !1,
          Me = !1,
          Ke = !1;
        ie && (ye = 1 === ee.readBits(1), Me = 1 === ee.readBits(1), (ye || Me) && (Ke = 1 === ee.readBits(1), Ke && (ee.readBits(8), ee.readBits(5), ee.readBits(1), ee.readBits(5)), ee.readBits(4), ee.readBits(4), Ke && ee.readBits(4), ee.readBits(5), ee.readBits(5), ee.readBits(5)));
        for (let Ue = 0; Ue <= He; Ue++) {
          let ie = !0;
          1 === ee.readBits(1) || (ie = 1 === ee.readBits(1));
          let He = !1;
          ie ? (0, be.Ac)(ee) : He = 1 === ee.readBits(1);
          let Ue = 1;
          if (!He) {
            Ue = (0, be.Ac)(ee) + 1
          }
          ye && ce(ee, Ue, Ke), Me && ce(ee, Ue, Ke)
        }
      },
      ce = (ee, ie, He) => {
        for (let ye = 0; ye < ie; ye++)(0, be.Ac)(ee), (0, be.Ac)(ee), He && ((0, be.Ac)(ee), (0, be.Ac)(ee)), ee.readBits(1)
      },
      xe = ee => {
        const ie = [];
        ie.push(ee.configurationVersion), ie.push((3 & ee.generalProfileSpace) << 6 | (1 & ee.generalTierFlag) << 5 | 31 & ee.generalProfileIdc), ie.push(ee.generalProfileCompatibilityFlags >>> 24 & 255), ie.push(ee.generalProfileCompatibilityFlags >>> 16 & 255), ie.push(ee.generalProfileCompatibilityFlags >>> 8 & 255), ie.push(255 & ee.generalProfileCompatibilityFlags), ie.push(...ee.generalConstraintIndicatorFlags), ie.push(255 & ee.generalLevelIdc), ie.push(240 | ee.minSpatialSegmentationIdc >> 8 & 15), ie.push(255 & ee.minSpatialSegmentationIdc), ie.push(252 | 3 & ee.parallelismType), ie.push(252 | 3 & ee.chromaFormatIdc), ie.push(248 | 7 & ee.bitDepthLumaMinus8), ie.push(248 | 7 & ee.bitDepthChromaMinus8), ie.push(ee.avgFrameRate >> 8 & 255), ie.push(255 & ee.avgFrameRate), ie.push((3 & ee.constantFrameRate) << 6 | (7 & ee.numTemporalLayers) << 3 | (1 & ee.temporalIdNested) << 2 | 3 & ee.lengthSizeMinusOne), ie.push(255 & ee.arrays.length);
        for (const He of ee.arrays) {
          ie.push((1 & He.arrayCompleteness) << 7 | 63 & He.nalUnitType), ie.push(He.nalUnits.length >> 8 & 255), ie.push(255 & He.nalUnits.length);
          for (const ee of He.nalUnits) {
            ie.push(ee.length >> 8 & 255), ie.push(255 & ee.length);
            for (let He = 0; He < ee.length; He++) ie.push(ee[He])
          }
        }
        return new Uint8Array(ie)
      },
      Le = ee => {
        try {
          const ie = (0, be.nd)(ee);
          let He = 0;
          const ye = ie.getUint8(He++),
            Me = ie.getUint8(He++),
            Ke = Me >> 6 & 3,
            Ue = Me >> 5 & 1,
            Fe = 31 & Me,
            Je = ie.getUint32(He, !1);
          He += 4;
          const oe = ee.subarray(He, He + 6);
          He += 6;
          const Re = ie.getUint8(He++),
            ke = (15 & ie.getUint8(He++)) << 8 | ie.getUint8(He++),
            qe = 3 & ie.getUint8(He++),
            fe = 3 & ie.getUint8(He++),
            Te = 7 & ie.getUint8(He++),
            pe = 7 & ie.getUint8(He++),
            Xe = ie.getUint16(He, !1);
          He += 2;
          const ze = ie.getUint8(He++),
            Be = ze >> 6 & 3,
            Ee = ze >> 3 & 7,
            ge = ze >> 2 & 1,
            Oe = 3 & ze,
            de = ie.getUint8(He++),
            We = [];
          for (let be = 0; be < de; be++) {
            const ye = ie.getUint8(He++),
              be = ye >> 7 & 1,
              Me = 63 & ye,
              Ke = ie.getUint16(He, !1);
            He += 2;
            const Ue = [];
            for (let Fe = 0; Fe < Ke; Fe++) {
              const ye = ie.getUint16(He, !1);
              He += 2, Ue.push(ee.subarray(He, He + ye)), He += ye
            }
            We.push({
              arrayCompleteness: be,
              nalUnitType: Me,
              nalUnits: Ue
            })
          }
          return {
            configurationVersion: ye,
            generalProfileSpace: Ke,
            generalTierFlag: Ue,
            generalProfileIdc: Fe,
            generalProfileCompatibilityFlags: Je,
            generalConstraintIndicatorFlags: oe,
            generalLevelIdc: Re,
            minSpatialSegmentationIdc: ke,
            parallelismType: qe,
            chromaFormatIdc: fe,
            bitDepthLumaMinus8: Te,
            bitDepthChromaMinus8: pe,
            avgFrameRate: Xe,
            constantFrameRate: Be,
            numTemporalLayers: Ee,
            temporalIdNested: ge,
            lengthSizeMinusOne: Oe,
            arrays: We
          }
        } catch (ie) {
          return Me.b._error("Error deserializing HEVC Decoder Configuration Record:", ie), null
        }
      };
    var Ce;
    ! function(ee) {
      ee[ee.audAllowed = 0] = "audAllowed", ee[ee.beforeFirstVcl = 1] = "beforeFirstVcl", ee[ee.afterFirstVcl = 2] = "afterFirstVcl", ee[ee.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", ee[ee.noMoreDataAllowed = 4] = "noMoreDataAllowed"
    }(Ce || (Ce = {}));
    const ve = {
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
      ue = ee => {
        const ie = new oe.e(ee);
        if (2 !== ie.readBits(2)) return null;
        const He = ie.readBits(1),
          Me = (ie.readBits(1) << 1) + He;
        3 === Me && ie.skipBits(1);
        if (1 === ie.readBits(1)) return null;
        if (0 !== ie.readBits(1)) return null;
        ie.skipBits(2);
        if (4817730 !== ie.readBits(24)) return null;
        let Ke = 8;
        if (Me >= 2) {
          Ke = ie.readBits(1) ? 12 : 10
        }
        const Ue = ie.readBits(3);
        let Fe = 0,
          Je = 0;
        if (7 !== Ue) {
          if (Je = ie.readBits(1), 1 === Me || 3 === Me) {
            const ee = ie.readBits(1),
              He = ie.readBits(1);
            Fe = ee || He ? ee && !He ? 2 : 1 : 3, ie.skipBits(1)
          } else Fe = 1
        } else Fe = 3, Je = 1;
        const Re = (ie.readBits(16) + 1) * (ie.readBits(16) + 1);
        let ke = (0, be.bc)(ye.t).level;
        for (const be of ye.t)
          if (Re <= be.maxPictureSize) {
            ke = be.level;
            break
          } const qe = ve[Ue];
        return {
          profile: Me,
          level: ke,
          bitDepth: Ke,
          chromaSubsampling: Fe,
          videoFullRangeFlag: Je,
          colourPrimaries: qe?.colourPrimaries ?? 2,
          transferCharacteristics: qe?.transferCharacteristics ?? 2,
          matrixCoefficients: qe?.matrixCoefficients ?? 2
        }
      },
      me = function*(ee) {
        const ie = new oe.e(ee),
          He = () => {
            let ee = 0;
            for (let He = 0; He < 8; He++) {
              const ye = ie.readAlignedByte();
              if (ee += (127 & ye) * 2 ** (7 * He), !(128 & ye)) break;
              if (7 === He && 128 & ye) return null
            }
            return ee > 2 ** 32 - 1 ? null : ee
          };
        for (; ie.getBitsLeft() >= 8;) {
          ie.skipBits(1);
          const ye = ie.readBits(4),
            Me = ie.readBits(1),
            Ke = ie.readBits(1);
          let Ue;
          if (ie.skipBits(1), Me && ie.skipBits(8), Ke) {
            const ee = He();
            if (null === ee) return;
            Ue = ee
          } else Ue = Math.floor(ie.getBitsLeft() / 8);
          (0, be.I)(ie.pos % 8 === 0), yield {
            type: ye,
            data: ee.subarray(ie.pos / 8, ie.pos / 8 + Ue)
          }, ie.skipBits(8 * Ue)
        }
      },
      le = ee => {
        for (const {
            type: ie,
            data: He
          }
          of me(ee)) {
          if (1 !== ie) continue;
          const ee = new oe.e(He),
            ye = ee.readBits(3),
            be = (ee.readBits(1), ee.readBits(1));
          let Me = 0,
            Ke = 0,
            Ue = 0;
          if (be) Me = ee.readBits(5);
          else {
            let ie = 0;
            if (ee.readBits(1)) {
              ee.skipBits(32), ee.skipBits(32);
              if (ee.readBits(1)) {
                let ie = 0;
                for (; ie < 32 && !ee.readBits(1);) ie++;
                ie < 32 && ee.skipBits(ie)
              }
              ie = ee.readBits(1), ie && (Ue = ee.readBits(5), ee.skipBits(32), ee.skipBits(5), ee.skipBits(5))
            }
            const He = ee.readBits(1),
              ye = ee.readBits(5);
            for (let be = 0; be <= ye; be++) {
              ee.skipBits(12);
              const ye = ee.readBits(5);
              if (0 === be && (Me = ye), ye > 7) {
                const ie = ee.readBits(1);
                0 === be && (Ke = ie)
              }
              if (ie) {
                if (ee.readBits(1)) {
                  const ie = Ue + 1;
                  ee.skipBits(ie), ee.skipBits(ie), ee.skipBits(1)
                }
              }
              if (He) {
                ee.readBits(1) && ee.skipBits(4)
              }
            }
          }
          const Fe = ee.readBits(4),
            Je = ee.readBits(4),
            Re = Fe + 1;
          ee.skipBits(Re);
          const ke = Je + 1;
          ee.skipBits(ke);
          let qe = 0;
          if (qe = be ? 0 : ee.readBits(1), qe && (ee.skipBits(4), ee.skipBits(3)), ee.skipBits(1), ee.skipBits(1), ee.skipBits(1), !be) {
            ee.skipBits(1), ee.skipBits(1), ee.skipBits(1), ee.skipBits(1);
            const ie = ee.readBits(1);
            ie && (ee.skipBits(1), ee.skipBits(1));
            let He = 0;
            if (He = ee.readBits(1) ? 2 : ee.readBits(1), He > 0) {
              ee.readBits(1) || ee.skipBits(1)
            }
            ie && ee.skipBits(3)
          }
          ee.skipBits(1), ee.skipBits(1), ee.skipBits(1);
          const fe = ee.readBits(1);
          let Te = 8;
          if (2 === ye && fe) {
            Te = ee.readBits(1) ? 12 : 10
          } else ye <= 2 && (Te = fe ? 10 : 8);
          let pe = 0;
          1 !== ye && (pe = ee.readBits(1));
          let Xe = 2,
            ze = 2,
            Be = 2;
          ee.readBits(1) && (Xe = ee.readBits(8), ze = ee.readBits(8), Be = ee.readBits(8));
          let Ee = 0,
            ge = 1,
            Oe = 1,
            de = 0;
          return pe ? Ee = ee.readBits(1) : 1 === Xe && 13 === ze && 0 === Be ? (Ee = 1, ge = 0, Oe = 0) : (Ee = ee.readBits(1), 0 === ye ? (ge = 1, Oe = 1) : 1 === ye ? (ge = 0, Oe = 0) : 12 === Te ? (ge = ee.readBits(1), Oe = ge ? ee.readBits(1) : 0) : (ge = 1, Oe = 0), ge && Oe && (de = ee.readBits(2))), {
            profile: ye,
            level: Me,
            tier: Ke,
            bitDepth: Te,
            monochrome: pe,
            chromaSubsamplingX: ge,
            chromaSubsamplingY: Oe,
            chromaSamplePosition: de,
            videoFullRangeFlag: Ee,
            colourPrimaries: Xe,
            transferCharacteristics: ze,
            matrixCoefficients: Be
          }
        }
        return null
      },
      Se = ee => 2 !== ee.colourPrimaries || 2 !== ee.transferCharacteristics || 2 !== ee.matrixCoefficients,
      ne = ee => {
        const ie = (0, be.nd)(ee),
          He = ie.getUint8(9),
          ye = ie.getUint16(10, !0),
          Me = ie.getUint32(12, !0),
          Ke = ie.getInt16(16, !0),
          Ue = ie.getUint8(18);
        let Fe = null;
        return Ue && (Fe = ee.subarray(19, 21 + He)), {
          outputChannelCount: He,
          preSkip: ye,
          inputSampleRate: Me,
          outputGain: Ke,
          channelMappingFamily: Ue,
          channelMappingTable: Fe
        }
      },
      je = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960],
      se = ee => {
        const ie = ee[0] >> 3,
          He = 3 & ee[0];
        let ye;
        return ye = 0 === He ? 1 : 1 === He || 2 === He ? 2 : 63 & ee[1], {
          durationInSamples: je[ie] * ye
        }
      },
      Ie = ee => {
        if (ee.length < 7) throw new Error("Setup header is too short.");
        if (5 !== ee[0]) throw new Error("Wrong packet type in Setup header.");
        if ("vorbis" !== String.fromCharCode(...ee.slice(1, 7))) throw new Error("Invalid packet signature in Setup header.");
        const ie = ee.length,
          He = new Uint8Array(ie);
        for (let oe = 0; oe < ie; oe++) He[oe] = ee[ie - 1 - oe];
        const ye = new oe.e(He);
        let be = 0;
        for (; ye.getBitsLeft() > 97;)
          if (1 === ye.readBits(1)) {
            be = ye.pos;
            break
          } if (0 === be) throw new Error("Invalid Setup header: framing bit not found.");
        let Me = 0,
          Ke = !1,
          Ue = 0;
        for (; ye.getBitsLeft() >= 97;) {
          const ee = ye.pos,
            ie = ye.readBits(8),
            He = ye.readBits(16),
            be = ye.readBits(16);
          if (ie > 63 || 0 !== He || 0 !== be) {
            ye.pos = ee;
            break
          }
          if (ye.skipBits(1), Me++, Me > 64) break;
          ye.clone().readBits(6) + 1 === Me && (Ke = !0, Ue = Me)
        }
        if (!Ke) throw new Error("Invalid Setup header: mode header not found.");
        if (Ue > 63) throw new Error(`Unsupported mode count: ${Ue}.`);
        const Fe = Ue;
        ye.pos = 0, ye.skipBits(be);
        const Je = Array(Fe).fill(0);
        for (let oe = Fe - 1; oe >= 0; oe--) ye.skipBits(40), Je[oe] = ye.readBits(1);
        return {
          modeBlockflags: Je
        }
      },
      he = (ee, ie, He) => {
        switch (ee) {
          case "avc":
            for (const ee of ((ee, ie) => {
                if (ie.description) {
                  const He = 3 & (0, be.od)(ie.description)[4];
                  return qe(ee, He + 1)
                }
                return ke(ee)
              })(He, ie)) {
              const ie = He[ee.offset],
                ye = fe(ie);
              if (ye >= Fe.NON_IDR_SLICE && ye <= Fe.SLICE_DPC) return "delta";
              if (ye === Fe.IDR) return "key";
              if (ye === Fe.SEI && !(0, be.ub)()) {
                const ie = He.subarray(ee.offset, ee.offset + ee.length),
                  ye = Te(ie);
                let Me = 1;
                do {
                  let ee = 0;
                  for (;;) {
                    const ie = ye[Me++];
                    if (void 0 === ie) break;
                    if (ee += ie, ie < 255) break
                  }
                  let ie = 0;
                  for (;;) {
                    const ee = ye[Me++];
                    if (void 0 === ee) break;
                    if (ie += ee, ee < 255) break
                  }
                  if (ee === 6) {
                    const ee = new oe.e(ye);
                    ee.pos = 8 * Me;
                    const ie = (0, be.Ac)(ee),
                      He = ee.readBits(1);
                    if (0 === ie && 1 === He) return "key"
                  }
                  Me += ie
                } while (Me < ye.length - 1)
              }
            }
            return "delta";
          case "hevc":
            for (const ee of te(He, ie)) {
              const ie = Ze(He[ee.offset]);
              if (ie < Je.BLA_W_LP) return "delta";
              if (ie <= Je.RSV_IRAP_VCL23) return "key"
            }
            return "delta";
          case "vp8":
            return 0 === (1 & He[0]) ? "key" : "delta";
          case "vp9": {
            const ee = new oe.e(He);
            if (2 !== ee.readBits(2)) return null;
            const ie = ee.readBits(1);
            3 === (ee.readBits(1) << 1) + ie && ee.skipBits(1);
            if (ee.readBits(1)) return null;
            return 0 === ee.readBits(1) ? "key" : "delta"
          }
          case "av1": {
            let ee = !1;
            for (const {
                type: ie,
                data: ye
              }
              of me(He))
              if (1 === ie) {
                const ie = new oe.e(ye);
                ie.skipBits(4), ee = !!ie.readBits(1)
              } else if (3 === ie || 6 === ie || 7 === ie) {
              if (ee) return "key";
              const ie = new oe.e(ye);
              if (ie.readBits(1)) return null;
              return 0 === ie.readBits(2) ? "key" : "delta"
            }
            return null
          }
          case "prores":
            return "key";
          default:
            (0, be.G)(ee), (0, be.I)(!1)
        }
      };
    var Ne;
    ! function(ee) {
      ee[ee.STREAMINFO = 0] = "STREAMINFO", ee[ee.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", ee[ee.PICTURE = 6] = "PICTURE"
    }(Ne || (Ne = {}));
    const Ge = (ee, ie, He) => {
        const ye = [ee],
          Me = be.hd.encode(Re.d);
        let Ke = new Uint8Array(4 + Me.length),
          Ue = new DataView(Ke.buffer);
        Ue.setUint32(0, Me.length, !0), Ke.set(Me, 4), ye.push(Ke);
        const Fe = [],
          Je = (ee, ie) => {
            const He = `${ee}=${ie}`,
              Me = be.hd.encode(He);
            Ke = new Uint8Array(4 + Me.length), Ue = new DataView(Ke.buffer), Ue.setUint32(0, Me.length, !0), Ke.set(Me, 4), ye.push(Ke), Fe.push(ee)
          };
        for (const {
            key: Re,
            value: Te
          }
          of(0, be._b)(ie)) switch (Re) {
          case "title":
            Je("TITLE", Te);
            break;
          case "description":
            Je("DESCRIPTION", Te);
            break;
          case "artist":
            Je("ARTIST", Te);
            break;
          case "album":
            Je("ALBUM", Te);
            break;
          case "albumArtist":
            Je("ALBUMARTIST", Te);
            break;
          case "genre":
            Je("GENRE", Te);
            break;
          case "date":
            Je("DATE", Te.toISOString().slice(0, 10));
            break;
          case "comment":
            Je("COMMENT", Te);
            break;
          case "lyrics":
            Je("LYRICS", Te);
            break;
          case "trackNumber":
            Je("TRACKNUMBER", Te.toString());
            break;
          case "tracksTotal":
            Je("TRACKTOTAL", Te.toString());
            break;
          case "discNumber":
            Je("DISCNUMBER", Te.toString());
            break;
          case "discsTotal":
            Je("DISCTOTAL", Te.toString());
            break;
          case "beatsPerMinute":
            Je("BPM", Te.toString());
            break;
          case "images":
            if (!He) break;
            for (const ee of Te) {
              const ie = "coverFront" === ee.kind ? 3 : "coverBack" === ee.kind ? 4 : 0,
                He = new Uint8Array(ee.mimeType.length);
              for (let be = 0; be < ee.mimeType.length; be++) He[be] = ee.mimeType.charCodeAt(be);
              const ye = be.hd.encode(ee.description ?? ""),
                Me = new Uint8Array(8 + He.length + 4 + ye.length + 16 + 4 + ee.data.length),
                Ke = (0, be.nd)(Me);
              Ke.setUint32(0, ie, !1), Ke.setUint32(4, He.length, !1), Me.set(He, 8), Ke.setUint32(8 + He.length, ye.length, !1), Me.set(ye, 12 + He.length), Ke.setUint32(28 + He.length + ye.length, ee.data.length, !1), Me.set(ee.data, 32 + He.length + ye.length);
              Je("METADATA_BLOCK_PICTURE", (0, be.N)(Me))
            }
            break;
          case "raw":
            break;
          default:
            (0, be.G)(Re)
        }
        if (ie.raw)
          for (const be in ie.raw) {
            const ee = ie.raw[be] ?? ie.raw[be.toLowerCase()];
            if ("vendor" !== be && null != ee && !Fe.includes(be))
              if ("string" === typeof ee) Je(be, ee);
              else if (Array.isArray(ee)) {
              if (ee.every((ee => "string" === typeof ee)))
                for (const ie of ee) Je(be, ie)
            }
          }
        const oe = new Uint8Array(4);
        (0, be.nd)(oe).setUint32(0, Fe.length, !0), ye.splice(2, 0, oe);
        const ke = ye.reduce(((ee, ie) => ee + ie.length), 0),
          qe = new Uint8Array(ke);
        let fe = 0;
        for (const be of ye) qe.set(be, fe), fe += be.length;
        return qe
      },
      re = ee => {
        if (ee.length < 7) return null;
        if (11 !== ee[0] || 119 !== ee[1]) return null;
        const ie = new oe.e(ee);
        ie.skipBits(16), ie.skipBits(16);
        const He = ie.readBits(2);
        if (3 === He) return null;
        const ye = ie.readBits(6),
          be = ie.readBits(5);
        if (be > 8) return null;
        const Me = ie.readBits(3),
          Ke = ie.readBits(3);
        0 !== (1 & Ke) && 1 !== Ke && ie.skipBits(2), 0 !== (4 & Ke) && ie.skipBits(2), 2 === Ke && ie.skipBits(2);
        return {
          fscod: He,
          bsid: be,
          bsmod: Me,
          acmod: Ke,
          lfeon: ie.readBits(1),
          bitRateCode: Math.floor(ye / 2)
        }
      },
      Qe = new Uint8Array([5, 4, 65, 67, 45, 51]),
      ei = new Uint8Array([5, 4, 69, 65, 67, 51]),
      ii = [1, 2, 3, 6],
      Hi = ee => {
        if (ee.length < 6) return null;
        if (11 !== ee[0] || 119 !== ee[1]) return null;
        const ie = new oe.e(ee);
        ie.skipBits(16);
        const He = ie.readBits(2);
        if (ie.skipBits(3), 0 !== He && 2 !== He) return null;
        const ye = ie.readBits(11),
          be = ie.readBits(2);
        let Me, Fe = 0;
        3 === be ? (Fe = ie.readBits(2), Me = 3) : Me = ie.readBits(2);
        const Je = ie.readBits(3),
          Re = ie.readBits(1),
          ke = ie.readBits(5);
        if (ke < 11 || ke > 16) return null;
        const qe = ii[Me];
        let fe;
        fe = be < 3 ? Ke[be] / 1e3 : Ue[Fe] / 1e3;
        return {
          dataRate: Math.round((ye + 1) * fe / (16 * qe)),
          substreams: [{
            fscod: be,
            fscod2: Fe,
            bsid: ke,
            bsmod: 0,
            acmod: Je,
            lfeon: Re,
            numDepSub: 0,
            chanLoc: 0
          }]
        }
      },
      yi = [0, 8e3, 16e3, 32e3, 0, 0, 11025, 22050, 44100, 0, 0, 12e3, 24e3, 48e3, 96e3, 192e3],
      bi = [32e3, 56e3, 64e3, 96e3, 112e3, 128e3, 192e3, 224e3, 256e3, 32e4, 384e3, 448e3, 512e3, 576e3, 64e4, 768e3, 96e4, 1024e3, 1152e3, 128e4, 1344e3, 1408e3, 1411200, 1472e3, 1536e3, 192e4, 2048e3, 3072e3, 384e4, 0, 0, 0],
      Mi = [16, 16, 20, 20, 0, 24, 24, 0],
      Ki = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8],
      Ui = [1, 2, 2, 2, 2, 3, 18, 19, 6, 7, 518, 323, 83, 519, 582, 535],
      Fi = [32e3, 44100, 48e3, 0],
      Ji = [8e3, 16e3, 32e3, 64e3, 128e3, 22050, 44100, 88200, 176400, 352800, 12e3, 24e3, 48e3, 96e3, 192e3, 384e3],
      oi = [512, 1024, 2048, 4096],
      Ri = ee => {
        const ie = ki(ee),
          He = (0, be.nd)(ee);
        let ye = ie ? 4 * Math.ceil(ie.frameSize / 4) : 0,
          Me = null;
        for (; ye + 4 <= ee.length && 1683496997 === He.getUint32(ye);) {
          const ie = qi(ee.subarray(ye));
          if (!ie) break;
          Me ??= ie, ye += ie.frameSize
        }
        if (ie) return {
          frameSize: Me ? ye : ie.frameSize,
          sampleRate: ie.sampleRate,
          numberOfChannels: ie.numberOfChannels,
          sampleCount: ie.sampleCount,
          channelLayout: ie.channelLayout,
          pcmResolution: ie.pcmResolution,
          bitRate: ie.bitRate,
          core: ie,
          hasExtensions: null !== Me
        };
        if (!Me?.asset) return null;
        const {
          asset: Ke
        } = Me;
        return {
          frameSize: ye,
          sampleRate: Ke.sampleRate,
          numberOfChannels: Ke.numberOfChannels,
          sampleCount: Ke.sampleCount,
          channelLayout: Ke.channelLayout,
          pcmResolution: Ke.pcmResolution,
          bitRate: 0,
          core: null,
          hasExtensions: !0
        }
      },
      ki = ee => {
        if (ee.length < 18) return null;
        if (127 !== ee[0] || 254 !== ee[1] || 128 !== ee[2] || 1 !== ee[3]) return null;
        const ie = new oe.e(ee);
        if (ie.skipBits(32), ie.skipBits(1), 31 !== ie.readBits(5)) return null;
        const He = ie.readBits(1),
          ye = ie.readBits(7) + 1;
        if (ye % 8 !== 0) return null;
        const be = ie.readBits(14) + 1;
        if (be < 96) return null;
        const Me = ie.readBits(6);
        if (Me >= Ki.length) return null;
        const Ke = yi[ie.readBits(4)];
        if (0 === Ke) return null;
        const Ue = bi[ie.readBits(5)];
        if (0 !== ie.readBits(1)) return null;
        ie.skipBits(4), ie.skipBits(5);
        const Fe = ie.readBits(2);
        if (3 === Fe) return null;
        ie.skipBits(1), He && ie.skipBits(16), ie.skipBits(7);
        const Je = Mi[ie.readBits(3)];
        if (0 === Je) return null;
        const Re = 0 !== Fe;
        return {
          frameSize: be,
          sampleRate: Ke,
          numberOfChannels: Ki[Me] + (Re ? 1 : 0),
          sampleCount: 32 * ye,
          channelLayout: Ui[Me] | (Re ? 8 : 0),
          amode: Me,
          lfePresent: Re,
          bitRate: Ue,
          pcmResolution: Je
        }
      },
      qi = ee => {
        if (ee.length < 10) return null;
        if (100 !== ee[0] || 88 !== ee[1] || 32 !== ee[2] || 37 !== ee[3]) return null;
        const ie = new oe.e(ee);
        ie.skipBits(32), ie.skipBits(8);
        const He = ie.readBits(2),
          ye = ie.readBits(1),
          Me = 8 + 4 * ye,
          Ke = 16 + 4 * ye;
        ie.skipBits(Me);
        const Ue = ie.readBits(Ke) + 1,
          Fe = {
            frameSize: Ue,
            asset: null
          };
        if (!ie.readBits(1)) return Fe;
        const Je = Fi[ie.readBits(2)],
          Re = 512 * (ie.readBits(3) + 1);
        ie.readBits(1) && ie.skipBits(36);
        const ke = ie.readBits(3) + 1,
          qe = ie.readBits(3) + 1,
          fe = [];
        for (let be = 0; be < ke; be++) fe.push(ie.readBits(He + 1));
        for (const oe of fe) ie.skipBits(8 * (0, be.vc)(oe));
        if (ie.readBits(1)) {
          ie.skipBits(2);
          const ee = ie.readBits(2) + 1 << 2,
            He = ie.readBits(2) + 1;
          ie.skipBits(He * ee)
        }
        for (let be = 0; be < qe; be++) ie.skipBits(Ke);
        ie.skipBits(9), ie.skipBits(3), ie.readBits(1) && ie.skipBits(4), ie.readBits(1) && ie.skipBits(24), ie.readBits(1) && ie.skipBits(8 * (ie.readBits(10) + 1));
        const Te = ie.readBits(5) + 1,
          pe = Ji[ie.readBits(4)],
          Xe = ie.readBits(8) + 1;
        let ze = 0;
        if (ie.readBits(1) && (Xe > 2 && ie.skipBits(1), Xe > 6 && ie.skipBits(1), ie.readBits(1))) {
          const ee = ie.readBits(2) + 1 << 2;
          ze = ie.readBits(ee)
        }
        return 0 === Je || ie.getBitsLeft() < 0 ? Fe : {
          frameSize: Ue,
          asset: {
            sampleRate: pe,
            numberOfChannels: Xe,
            sampleCount: Math.round(Re * pe / Je),
            channelLayout: ze,
            pcmResolution: Te
          }
        }
      },
      fi = ee => {
        const ie = new Uint8Array(20),
          He = (0, be.nd)(ie);
        He.setUint32(0, ee.sampleRate), He.setUint32(4, ee.bitRate), He.setUint32(8, ee.bitRate), ie[12] = ee.pcmResolution;
        const ye = ee.core && !ee.hasExtensions ? 1 : 0,
          Me = new oe.e(ie);
        return Me.seekToByte(13), Me.writeBits(2, Math.max(oi.indexOf(ee.sampleCount), 0)), Me.writeBits(5, ye), Me.writeBits(1, ee.core?.lfePresent ? 1 : 0), Me.writeBits(6, ee.core?.amode ?? 0), Me.writeBits(14, ee.core ? ee.core.frameSize - 1 : 0), Me.writeBits(1, 0), Me.writeBits(3, 0), Me.writeBits(16, ee.channelLayout), Me.writeBits(1, 0), Me.writeBits(1, 0), Me.writeBits(1, 0), Me.writeBits(5, 0), ie
      }
  },
  40692: (ee, ie, He) => {
    He.d(ie, {
      A: () => Be,
      B: () => Oe,
      F: () => ge,
      G: () => Ee,
      K: () => Pe,
      O: () => De,
      P: () => we,
      R: () => Ze,
      U: () => Ce,
      W: () => ve,
      Z: () => xe,
      c: () => Fe,
      g: () => oe,
      k: () => Ue,
      m: () => We,
      n: () => Ke,
      o: () => Je,
      s: () => Me,
      t: () => ke,
      w: () => de
    });
    var ye = He(40699),
      be = He(40671);
    const Me = ["avc", "hevc", "vp9", "av1", "vp8", "prores"],
      Ke = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"],
      Ue = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"],
      Fe = [...Ue, ...Ke],
      Je = ["webvtt"],
      oe = [{
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
      Re = [{
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
      ke = [{
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
      qe = [{
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
      fe = ".01.01.01.01.00",
      Te = ".0.110.01.01.01.0",
      pe = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"],
      Xe = ["dtsc", "dtsh", "dtsl", "dtse"],
      ze = [{
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
      Be = (ee, ie, He, ye, Me) => {
        if ("avc" === ee) {
          const ee = 100,
            Me = Math.ceil(ie / 16) * Math.ceil(He / 16),
            Ke = oe.find((ee => Me <= ee.maxMacroblocks && ye <= ee.maxBitrate)) ?? (0, be.bc)(oe),
            Ue = Ke ? Ke.level : 0;
          return `avc1.${ee.toString(16).padStart(2,"0")}${"00"}${Ue.toString(16).padStart(2,"0")}`
        }
        if ("hevc" === ee) {
          const ee = "",
            Me = 1,
            Ke = "6",
            Ue = ie * He,
            Fe = Re.find((ee => Ue <= ee.maxPictureSize && ye <= ee.maxBitrate)) ?? (0, be.bc)(Re),
            Je = "B0";
          return `hev1.${ee}${Me}.${Ke}.${Fe.tier}${Fe.level}.${Je}`
        }
        if ("vp8" === ee) return "vp8";
        if ("vp9" === ee) {
          const ee = ie * He,
            Me = "08";
          return `vp09.${"00"}.${(ke.find((ie=>ee<=ie.maxPictureSize&&ye<=ie.maxBitrate))??(0,be.bc)(ke)).level.toString().padStart(2,"0")}.${Me}`
        }
        if ("av1" === ee) {
          const ee = 0,
            Me = ie * He,
            Ke = qe.find((ee => Me <= ee.maxPictureSize && ye <= ee.maxBitrate)) ?? (0, be.bc)(qe),
            Ue = "08";
          return `av01.${ee}.${Ke.level.toString().padStart(2,"0")}${Ke.tier}.${Ue}`
        }
        if ("prores" === ee) {
          const ee = 2073600,
            be = Math.pow(ie * He / ee, .95),
            Ke = ze.filter((ee => ee.alpha === Me));
          let Ue = Ke[0].fourCc,
            Fe = 1 / 0;
          for (const {
              fourCc: ie,
              bitrate: He
            }
            of Ke) {
            const ee = Math.abs(He * be - ye);
            ee < Fe && (Fe = ee, Ue = ie)
          }
          return Ue
        }
        throw (0, be.G)(ee), new TypeError(`Unhandled codec '${String(ee)}'.`)
      },
      Ee = ee => {
        const ie = ee.split(".");
        return [1, 1, Number(ie[1]), 2, 1, Number(ie[2]), 3, 1, Number(ie[3]), 4, 1, ie[4] ? Number(ie[4]) : 1]
      },
      ge = ee => {
        const ie = ee.split("."),
          He = Number(ie[1]),
          ye = ie[2],
          be = (He << 5) + Number(ye.slice(0, -1)),
          Me = "H" === ye.slice(-1) ? 1 : 0,
          Ke = Number(ie[3]);
        return [129, be, (Me << 7) + ((8 === Ke ? 0 : 1) << 6) + ((12 === Ke ? 1 : 0) << 5) + ((ie[4] ? Number(ie[4]) : 0) << 4) + ((ie[5] ? Number(ie[5][0]) : 1) << 3) + ((ie[5] ? Number(ie[5][1]) : 1) << 2) + (ie[5] ? Number(ie[5][2]) : 0), 0]
      },
      Oe = ee => {
        const {
          codec: ie,
          codecDescription: He,
          colorSpace: Me,
          avcCodecInfo: Ke,
          hevcCodecInfo: Ue,
          vp9CodecInfo: Fe,
          av1CodecInfo: Je,
          proresFormat: oe
        } = ee;
        if ("avc" === ie) {
          if ((0, be.I)(null !== ee.avcType), Ke) {
            const ie = new Uint8Array([Ke.avcProfileIndication, Ke.profileCompatibility, Ke.avcLevelIndication]);
            return `avc${ee.avcType}.${(0,be.O)(ie)}`
          }
          if (!He || He.byteLength < 4) throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
          return `avc${ee.avcType}.${(0,be.O)(He.subarray(1,4))}`
        }
        if ("hevc" === ie) {
          let ee, ie, ye, Me, Ke, Fe;
          if (Ue) ee = Ue.generalProfileSpace, ie = Ue.generalProfileIdc, ye = (0, be.Hc)(Ue.generalProfileCompatibilityFlags), Me = Ue.generalTierFlag, Ke = Ue.generalLevelIdc, Fe = [...Ue.generalConstraintIndicatorFlags];
          else {
            if (!He || He.byteLength < 23) throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
            const Ue = (0, be.nd)(He),
              Je = Ue.getUint8(1);
            ee = Je >> 6 & 3, ie = 31 & Je, ye = (0, be.Hc)(Ue.getUint32(2)), Me = Je >> 5 & 1, Ke = Ue.getUint8(12), Fe = [];
            for (let ee = 0; ee < 6; ee++) Fe.push(Ue.getUint8(6 + ee))
          }
          let Je = "hev1.";
          for (Je += ["", "A", "B", "C"][ee] + ie, Je += ".", Je += ye.toString(16).toUpperCase(), Je += ".", Je += 0 === Me ? "L" : "H", Je += Ke; Fe.length > 0 && 0 === Fe[Fe.length - 1];) Fe.pop();
          return Fe.length > 0 && (Je += ".", Je += Fe.map((ee => ee.toString(16).toUpperCase())).join(".")), Je
        }
        if ("vp8" === ie) return "vp8";
        if ("vp9" === ie) {
          if (!Fe) {
            const ie = ee.width * ee.height;
            let He = (0, be.bc)(ke).level;
            for (const ee of ke)
              if (ie <= ee.maxPictureSize) {
                He = ee.level;
                break
              } return `vp09.00.${He.toString().padStart(2,"0")}.08`
          }
          let ie = `vp09.${Fe.profile.toString().padStart(2,"0")}.${Fe.level.toString().padStart(2,"0")}.${Fe.bitDepth.toString().padStart(2,"0")}.${Fe.chromaSubsampling.toString().padStart(2,"0")}`;
          return ie += `.${Fe.colourPrimaries.toString().padStart(2,"0")}.${Fe.transferCharacteristics.toString().padStart(2,"0")}.${Fe.matrixCoefficients.toString().padStart(2,"0")}.${Fe.videoFullRangeFlag.toString().padStart(2,"0")}`, ie.endsWith(fe) && (ie = ie.slice(0, -15)), ie
        }
        if ("av1" === ie) {
          if (!Je) {
            const ie = ee.width * ee.height;
            let He = (0, be.bc)(ke).level;
            for (const ee of ke)
              if (ie <= ee.maxPictureSize) {
                He = ee.level;
                break
              } return `av01.0.${He.toString().padStart(2,"0")}M.08`
          }
          const ie = Je.profile,
            He = Je.level.toString().padStart(2, "0"),
            Ke = Je.tier ? "H" : "M",
            Ue = Je.bitDepth.toString().padStart(2, "0"),
            Fe = Je.monochrome ? "1" : "0",
            oe = 100 * Je.chromaSubsamplingX + 10 * Je.chromaSubsamplingY + 1 * (Je.chromaSubsamplingX && Je.chromaSubsamplingY ? Je.chromaSamplePosition : 0);
          let Re, qe, fe, pe;
          (0, ye.s)(Je) ? (Re = Je.colourPrimaries, qe = Je.transferCharacteristics, fe = Je.matrixCoefficients, pe = Je.videoFullRangeFlag) : (Re = Me?.primaries ? be.f[Me.primaries] : 1, qe = Me?.transfer ? be.t[Me.transfer] : 1, fe = Me?.matrix ? be.o[Me.matrix] : 1, pe = Me?.fullRange ? 1 : 0);
          let Xe = `av01.${ie}.${He}${Ke}.${Ue}`;
          return Xe += `.${Fe}.${oe.toString().padStart(3,"0")}`, Xe += `.${Re.toString().padStart(2,"0")}`, Xe += `.${qe.toString().padStart(2,"0")}`, Xe += `.${fe.toString().padStart(2,"0")}`, Xe += `.${pe}`, Xe.endsWith(Te) && (Xe = Xe.slice(0, -17)), Xe
        }
        if ("prores" === ie) return oe ?? "apch";
        throw null !== ie && (0, be.G)(ie), new TypeError(`Unhandled codec '${ie}'.`)
      },
      de = (ee, ie, He) => {
        if ("aac" === ee) return ie >= 2 && He <= 24e3 ? "mp4a.40.29" : He <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
        if ("mp3" === ee) return "mp3";
        if ("opus" === ee) return "opus";
        if ("vorbis" === ee) return "vorbis";
        if ("flac" === ee) return "flac";
        if ("ac3" === ee) return "ac-3";
        if ("eac3" === ee) return "ec-3";
        if ("dts" === ee) return "dtsc";
        if (Ke.includes(ee)) return ee;
        throw new TypeError(`Unhandled codec '${ee}'.`)
      },
      We = 48e3,
      te = /^pcm-([usf])(\d+)(be)?$/,
      Ze = ee => {
        if ((0, be.I)(Ke.includes(ee)), "ulaw" === ee) return {
          dataType: "ulaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 255
        };
        if ("alaw" === ee) return {
          dataType: "alaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 213
        };
        const ie = te.exec(ee);
        let He;
        (0, be.I)(ie), He = "u" === ie[1] ? "unsigned" : "s" === ie[1] ? "signed" : "float";
        return {
          dataType: He,
          sampleSize: Number(ie[2]) / 8,
          littleEndian: "be" !== ie[3],
          silentValue: "pcm-u8" === ee ? 128 : 0
        }
      },
      we = ee => ee.startsWith("avc1") || ee.startsWith("avc3") ? "avc" : ee.startsWith("hev1") || ee.startsWith("hvc1") ? "hevc" : "vp8" === ee ? "vp8" : ee.startsWith("vp09") ? "vp9" : ee.startsWith("av01") ? "av1" : pe.includes(ee) ? "prores" : "mp3" === ee || "mp4a.69" === ee || "mp4a.6B" === ee || "mp4a.6b" === ee || "mp4a.40.34" === ee ? "mp3" : ee.startsWith("mp4a.40.") || "mp4a.67" === ee ? "aac" : "opus" === ee || "Opus" === ee ? "opus" : "vorbis" === ee ? "vorbis" : "flac" === ee ? "flac" : "ac-3" === ee || "ac3" === ee ? "ac3" : "ec-3" === ee || "eac3" === ee ? "eac3" : Xe.includes(ee) ? "dts" : "ulaw" === ee ? "ulaw" : "alaw" === ee ? "alaw" : te.test(ee) ? ee : "webvtt" === ee ? "webvtt" : null,
      De = ee => "avc" === ee ? {
        avc: {
          format: "avc"
        }
      } : "hevc" === ee ? {
        hevc: {
          format: "hevc"
        }
      } : {},
      Pe = ee => "aac" === ee ? {
        aac: {
          format: "aac"
        }
      } : "opus" === ee ? {
        opus: {
          format: "opus"
        }
      } : {},
      Ae = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...pe],
      Ye = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/,
      Ve = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,
      ae = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,
      ce = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,
      xe = (ee, ie) => {
        if (!ee) throw new TypeError("Video chunk metadata must be provided.");
        if ("object" !== typeof ee) throw new TypeError("Video chunk metadata must be an object.");
        if (!ee.decoderConfig) throw new TypeError("Video chunk metadata must include a decoder configuration.");
        if ("object" !== typeof ee.decoderConfig) throw new TypeError("Video chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof ee.decoderConfig.codec) throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
        if (!Ae.some((ie => ee.decoderConfig.codec.startsWith(ie)))) throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(ee.decoderConfig.codedWidth) || ee.decoderConfig.codedWidth <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
        if (!Number.isInteger(ee.decoderConfig.codedHeight) || ee.decoderConfig.codedHeight <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
        if (void 0 !== ee.decoderConfig.displayAspectWidth && (!Number.isInteger(ee.decoderConfig.displayAspectWidth) || ee.decoderConfig.displayAspectWidth <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
        if (void 0 !== ee.decoderConfig.displayAspectHeight && (!Number.isInteger(ee.decoderConfig.displayAspectHeight) || ee.decoderConfig.displayAspectHeight <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
        if (void 0 !== ee.decoderConfig.displayAspectWidth !== (void 0 !== ee.decoderConfig.displayAspectHeight)) throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
        if (void 0 !== ee.decoderConfig.description && !(0, be.sb)(ee.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (void 0 !== ee.decoderConfig.colorSpace) {
          const {
            colorSpace: ie
          } = ee.decoderConfig;
          if ("object" !== typeof ie) throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
          const He = Object.keys(be.f);
          if (null != ie.primaries && !He.includes(ie.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${He.join(", ")}.`);
          const ye = Object.keys(be.t);
          if (null != ie.transfer && !ye.includes(ie.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${ye.join(", ")}.`);
          const Me = Object.keys(be.o);
          if (null != ie.matrix && !Me.includes(ie.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${Me.join(", ")}.`);
          if (null != ie.fullRange && "boolean" !== typeof ie.fullRange) throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")
        }
        if (ee.decoderConfig.codec.startsWith("avc1") || ee.decoderConfig.codec.startsWith("avc3")) {
          if (!Ye.test(ee.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")
        } else if (ee.decoderConfig.codec.startsWith("hev1") || ee.decoderConfig.codec.startsWith("hvc1")) {
          if (!Ve.test(ee.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")
        } else if (ee.decoderConfig.codec.startsWith("vp8")) {
          if ("vp8" !== ee.decoderConfig.codec) throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')
        } else if (ee.decoderConfig.codec.startsWith("vp09")) {
          if (!ae.test(ee.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')
        } else if (ee.decoderConfig.codec.startsWith("av01")) {
          if (!ce.test(ee.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')
        } else if (pe.some((ie => ee.decoderConfig.codec.startsWith(ie))) && !pe.some((ie => ee.decoderConfig.codec === ie))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${pe.join(", ")}.`);
        if (null !== ie && we(ee.decoderConfig.codec) !== ie) throw new TypeError(`Video chunk metadata decoder configuration codec string '${ee.decoderConfig.codec}' does not fit to the track codec '${ie}'.`)
      },
      Le = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3", "dts"],
      Ce = (ee, ie) => {
        if (!ee) throw new TypeError("Audio chunk metadata must be provided.");
        if ("object" !== typeof ee) throw new TypeError("Audio chunk metadata must be an object.");
        if (!ee.decoderConfig) throw new TypeError("Audio chunk metadata must include a decoder configuration.");
        if ("object" !== typeof ee.decoderConfig) throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof ee.decoderConfig.codec) throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
        if (!Le.some((ie => ee.decoderConfig.codec.startsWith(ie)))) throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(ee.decoderConfig.sampleRate) || ee.decoderConfig.sampleRate <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
        if (!Number.isInteger(ee.decoderConfig.numberOfChannels) || ee.decoderConfig.numberOfChannels <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
        if (void 0 !== ee.decoderConfig.description && !(0, be.sb)(ee.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (ee.decoderConfig.codec.startsWith("mp4a") && "mp4a.69" !== ee.decoderConfig.codec && "mp4a.6B" !== ee.decoderConfig.codec && "mp4a.6b" !== ee.decoderConfig.codec) {
          if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(ee.decoderConfig.codec)) throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")
        } else if (ee.decoderConfig.codec.startsWith("mp3") || ee.decoderConfig.codec.startsWith("mp4a")) {
          if ("mp3" !== ee.decoderConfig.codec && "mp4a.69" !== ee.decoderConfig.codec && "mp4a.6B" !== ee.decoderConfig.codec && "mp4a.6b" !== ee.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')
        } else if (ee.decoderConfig.codec.startsWith("opus")) {
          if ("opus" !== ee.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
          if (ee.decoderConfig.description && ee.decoderConfig.description.byteLength < 18) throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")
        } else if (ee.decoderConfig.codec.startsWith("vorbis")) {
          if ("vorbis" !== ee.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
          if (!ee.decoderConfig.description) throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")
        } else if (ee.decoderConfig.codec.startsWith("flac")) {
          if ("flac" !== ee.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
          const ie = 42;
          if (!ee.decoderConfig.description || ee.decoderConfig.description.byteLength < ie) throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")
        } else if (ee.decoderConfig.codec.startsWith("ac-3") || ee.decoderConfig.codec.startsWith("ac3")) {
          if ("ac-3" !== ee.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')
        } else if (ee.decoderConfig.codec.startsWith("ec-3") || ee.decoderConfig.codec.startsWith("eac3")) {
          if ("ec-3" !== ee.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')
        } else if (ee.decoderConfig.codec.startsWith("dts")) {
          if (!Xe.includes(ee.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Xe.join(", ")}.`)
        } else if ((ee.decoderConfig.codec.startsWith("pcm") || ee.decoderConfig.codec.startsWith("ulaw") || ee.decoderConfig.codec.startsWith("alaw")) && !Ke.includes(ee.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Ke.join(", ")}).`);
        if (null !== ie && we(ee.decoderConfig.codec) !== ie) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${ee.decoderConfig.codec}' does not fit to the track codec '${ie}'.`)
      },
      ve = ee => {
        if (!ee) throw new TypeError("Subtitle metadata must be provided.");
        if ("object" !== typeof ee) throw new TypeError("Subtitle metadata must be an object.");
        if (!ee.config) throw new TypeError("Subtitle metadata must include a config object.");
        if ("object" !== typeof ee.config) throw new TypeError("Subtitle metadata config must be an object.");
        if ("string" !== typeof ee.config.description) throw new TypeError("Subtitle metadata config description must be a string.")
      }
  },
  40742: (ee, ie, He) => {
    He.d(ie, {
      e: () => ke,
      h: () => Re,
      l: () => Xe,
      n: () => Fe,
      q: () => ze,
      r: () => Je,
      u: () => Ke
    });
    var ye = He(40692),
      be = He(40671),
      Me = He(40746);
    new Map, new Map;
    const Ke = ee => {
        if (!ee || "object" !== typeof ee) throw new TypeError("Encoding config must be an object.");
        if (!ye.s.includes(ee.codec)) throw new TypeError(`Invalid video codec '${ee.codec}'. Must be one of: ${ye.s.join(", ")}.`);
        const ie = ee.bitrate;
        if (void 0 === ee.quality && void 0 === ie) throw new TypeError("config.quality must be provided.");
        if (void 0 !== ee.quality && void 0 !== ie) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== ee.quality && !(ee.quality instanceof ke)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== ie && !(ie instanceof ke) && (!Number.isInteger(ie) || ie <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== ee.keyFrameInterval && (!Number.isFinite(ee.keyFrameInterval) || ee.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
        if (void 0 !== ee.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(ee.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
        if (void 0 !== ee.transform) {
          if ("object" !== typeof ee.transform || !ee.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== ee.transform.width && (!Number.isInteger(ee.transform.width) || ee.transform.width <= 0)) throw new TypeError("config.transform.width, when provided, must be a positive integer.");
          if (void 0 !== ee.transform.height && (!Number.isInteger(ee.transform.height) || ee.transform.height <= 0)) throw new TypeError("config.transform.height, when provided, must be a positive integer.");
          if (void 0 !== ee.transform.fit && !["fill", "contain", "cover"].includes(ee.transform.fit)) throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');
          if (void 0 !== ee.transform.width && void 0 !== ee.transform.height && void 0 === ee.transform.fit && !["fill", "contain", "cover"].includes(ee.sizeChangeBehavior)) throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
          if (void 0 !== ee.transform.fit && ["fill", "contain", "cover"].includes(ee.sizeChangeBehavior) && ee.transform.fit !== ee.sizeChangeBehavior) throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
          if (void 0 !== ee.transform.rotate && ![0, 90, 180, 270].includes(ee.transform.rotate)) throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
          if (void 0 !== ee.transform.flip && "boolean" !== typeof ee.transform.flip) throw new TypeError("config.transform.flip, when provided, must be a boolean.");
          if (void 0 !== ee.transform.crop && (0, Me.f)(ee.transform.crop, "config.transform."), void 0 !== ee.transform.process && "function" !== typeof ee.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
          if (void 0 !== ee.transform.frameRate && (!Number.isFinite(ee.transform.frameRate) || ee.transform.frameRate <= 0)) throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
          if (void 0 !== ee.transform.force && "boolean" !== typeof ee.transform.force) throw new TypeError("config.transform.force, when provided, must be a boolean.")
        }
        if (void 0 !== ee.onEncodedPacket && "function" !== typeof ee.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== ee.onEncoderConfig && "function" !== typeof ee.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== ee.onEncodedSample && "function" !== typeof ee.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        Ue(ee.codec, ee)
      },
      Ue = (ee, ie) => {
        if (!ie || "object" !== typeof ie) throw new TypeError("Encoding options must be an object.");
        if (void 0 !== ie.alpha && !["discard", "keep"].includes(ie.alpha)) throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
        const He = ie.bitrateMode;
        if (void 0 !== He && !["constant", "variable"].includes(He)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== ie.latencyMode && !["quality", "realtime"].includes(ie.latencyMode)) throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
        if (void 0 !== ie.fullCodecString && "string" !== typeof ie.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== ie.fullCodecString && (0, ye.P)(ie.fullCodecString) !== ee) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${ee}).`);
        if (void 0 !== ie.hardwareAcceleration && !["no-preference", "prefer-hardware", "prefer-software"].includes(ie.hardwareAcceleration)) throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
        if (void 0 !== ie.scalabilityMode && "string" !== typeof ie.scalabilityMode) throw new TypeError("scalabilityMode, when provided, must be a string.");
        if (void 0 !== ie.contentHint && "string" !== typeof ie.contentHint) throw new TypeError("contentHint, when provided, must be a string.")
      },
      Fe = ee => {
        const ie = ee.bitrateMode,
          He = ee.quality._toVideoRateControl(ee.codec, ee.width, ee.height, ie),
          Me = (ie, He, be) => ({
            codec: ee.fullCodecString ?? (0, ye.A)(ee.codec, ee.width, ee.height, be, "keep" === ee.alpha),
            width: ee.width,
            height: ee.height,
            displayWidth: ee.squarePixelWidth,
            displayHeight: ee.squarePixelHeight,
            bitrate: ie,
            bitrateMode: He,
            alpha: ee.alpha ?? "discard",
            framerate: ee.framerate,
            latencyMode: ee.latencyMode,
            hardwareAcceleration: ee.hardwareAcceleration,
            scalabilityMode: ee.scalabilityMode,
            contentHint: ee.contentHint,
            ...(0, ye.O)(ee.codec)
          }),
          Ke = [];
        return null !== He.quantizer && Ke.push({
          config: Me(void 0, "quantizer", He.bitrate),
          quantizer: He.quantizer
        }), "quantizer" !== He.bitrateMode && Ke.push({
          config: Me(He.bitrate, He.bitrateMode, He.bitrate),
          quantizer: null
        }), (0, be.I)(Ke.length > 0), Ke
      },
      Je = ee => {
        if (!ee || "object" !== typeof ee) throw new TypeError("Encoding config must be an object.");
        if (!ye.c.includes(ee.codec)) throw new TypeError(`Invalid audio codec '${ee.codec}'. Must be one of: ${ye.c.join(", ")}.`);
        const ie = ee.bitrate;
        if (void 0 === ee.quality && void 0 === ie && !ye.n.includes(ee.codec) && "flac" !== ee.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
        if (void 0 !== ee.quality && void 0 !== ie) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== ee.quality && !(ee.quality instanceof ke)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== ie && !(ie instanceof ke) && (!Number.isInteger(ie) || ie <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== ee.transform) {
          if ("object" !== typeof ee.transform || !ee.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== ee.transform.numberOfChannels && (!Number.isInteger(ee.transform.numberOfChannels) || ee.transform.numberOfChannels <= 0)) throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
          if (void 0 !== ee.transform.sampleRate && (!Number.isInteger(ee.transform.sampleRate) || ee.transform.sampleRate <= 0)) throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
          if (void 0 !== ee.transform.sampleFormat && !["u8", "s16", "s32", "f32"].includes(ee.transform.sampleFormat)) throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
          if (void 0 !== ee.transform.process && "function" !== typeof ee.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.")
        }
        if (void 0 !== ee.onEncodedPacket && "function" !== typeof ee.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== ee.onEncoderConfig && "function" !== typeof ee.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== ee.onEncodedSample && "function" !== typeof ee.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        oe(ee.codec, ee)
      },
      oe = (ee, ie) => {
        if (!ie || "object" !== typeof ie) throw new TypeError("Encoding options must be an object.");
        const He = ie.bitrateMode;
        if (void 0 !== He && !["constant", "variable"].includes(He)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== ie.fullCodecString && "string" !== typeof ie.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== ie.fullCodecString && (0, ye.P)(ie.fullCodecString) !== ee) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${ee}).`)
      },
      Re = ee => {
        const ie = ee.bitrateMode;
        return {
          codec: ee.fullCodecString ?? (0, ye.w)(ee.codec, ee.numberOfChannels, ee.sampleRate),
          numberOfChannels: ee.numberOfChannels,
          sampleRate: ee.sampleRate,
          bitrate: ee.quality?._toAudioBitrate(ee.codec),
          bitrateMode: ee.quality?._bitrateMode ?? ie,
          ...(0, ye.K)(ee.codec)
        }
      };
    class ke {
      constructor(ee) {
        if ("number" !== typeof ee && "string" !== typeof ee || (ee = {
            quality: ee
          }), !ee || "object" !== typeof ee) throw new TypeError("options must be an object.");
        if (void 0 !== ee.bitrateMode && !["constant", "variable"].includes(ee.bitrateMode)) throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
        if ("quality" in ee) {
          if ("string" === typeof ee.quality ? !(ee.quality in qe) : "number" !== typeof ee.quality || Number.isNaN(ee.quality)) throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
          if (void 0 !== ee.preferBitrate && "boolean" !== typeof ee.preferBitrate) throw new TypeError("options.preferBitrate, when provided, must be a boolean.");
          if ("bitrate" in ee || "quantizer" in ee) throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
          this._quality = "string" === typeof ee.quality ? qe[ee.quality] : ee.quality, this._preferBitrate = ee.preferBitrate ?? !1, this._bitrate = void 0, this._quantizer = void 0
        } else {
          if (void 0 !== ee.bitrate && (!Number.isInteger(ee.bitrate) || ee.bitrate <= 0)) throw new TypeError("options.bitrate, when provided, must be a positive integer.");
          if (void 0 !== ee.quantizer && (!Number.isInteger(ee.quantizer) || ee.quantizer < 0)) throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");
          if (void 0 === ee.bitrate && void 0 === ee.quantizer) throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");
          if ("preferBitrate" in ee) throw new TypeError("options.preferBitrate can only be combined with options.quality.");
          this._quality = void 0, this._preferBitrate = !1, this._bitrate = ee.bitrate, this._quantizer = ee.quantizer
        }
        this._bitrateMode = ee.bitrateMode
      }
      _toVideoRateControl(ee, ie, He, ye) {
        const Me = fe[ee];
        let Ke, Ue = null,
          Fe = this._bitrateMode ?? ye ?? "variable";
        if (void 0 !== this._quantizer) {
          if (Me)
            if (this._quantizer < Me.min || this._quantizer > Me.max) {
              if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${ee}'; must be between ${Me.min} and ${Me.max}.`)
            } else Ue = this._quantizer, void 0 === this._bitrate && (Fe = "quantizer");
          else if (void 0 === this._bitrate) throw new Error(`Codec '${ee}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
        } else void 0 === this._bitrate && Me && !this._preferBitrate && ((0, be.I)(void 0 !== this._quality), Ue = (0, be.T)(Math.round((0, be.cc)(Me.worst, Me.best, this._quality)), Me.min, Me.max));
        if (void 0 !== this._bitrate) Ke = this._bitrate;
        else {
          let ye = this._quality;
          void 0 === ye && ((0, be.I)(null !== Ue && Me), ye = (0, be.T)((Ue - Me.worst) / (Me.best - Me.worst), 0, 1)), Ke = pe(ee, ie, He, Te(ye))
        }
        return {
          quantizer: Ue,
          bitrate: Ke,
          bitrateMode: Fe
        }
      }
      _toVideoBitrate(ee, ie, He) {
        return void 0 !== this._bitrate ? this._bitrate : ((0, be.I)(void 0 !== this._quality), pe(ee, ie, He, Te(this._quality)))
      }
      _toAudioBitrate(ee) {
        if (ye.n.includes(ee) || "flac" === ee) return;
        if (void 0 !== this._bitrate) return this._bitrate;
        if (void 0 === this._quality) throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
        const ie = Te(this._quality),
          He = {
            aac: 128e3,
            opus: 64e3,
            mp3: 16e4,
            vorbis: 64e3,
            ac3: 384e3,
            eac3: 192e3,
            dts: 768e3
          } [ee];
        if (!He) throw new Error(`Unhandled codec: ${ee}`);
        let be = He * ie;
        if ("aac" === ee) {
          be = [96e3, 128e3, 16e4, 192e3].reduce(((ee, ie) => Math.abs(ie - be) < Math.abs(ee - be) ? ie : ee))
        } else if ("opus" === ee || "vorbis" === ee) be = Math.max(6e3, be);
        else if ("mp3" === ee) {
          be = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((ee, ie) => Math.abs(ie - be) < Math.abs(ee - be) ? ie : ee))
        }
        return 1e3 * Math.round(be / 1e3)
      }
    }
    const qe = {
        "very-low": 0,
        low: .25,
        medium: .5,
        high: .75,
        "very-high": 1
      },
      fe = {
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
      Te = ee => .3 * Math.exp(2.5538 * ee),
      pe = (ee, ie, He, ye) => {
        const be = ie * He,
          Me = 3e6,
          Ke = Me * Math.pow(be / 2073600, .95) * {
            avc: 1,
            hevc: .6,
            vp9: .6,
            av1: .4,
            vp8: 1.2,
            prores: 73.33333333333333
          } [ee] * ye;
        return 1e3 * Math.ceil(Ke / 1e3)
      },
      Xe = (ee, ie) => "avc" === ee ? {
        avc: {
          quantizer: ie
        }
      } : "hevc" === ee ? {
        hevc: {
          quantizer: ie
        }
      } : "vp9" === ee ? {
        vp9: {
          quantizer: ie
        }
      } : "av1" === ee ? {
        av1: {
          quantizer: ie
        }
      } : void(0, be.I)(!1),
      ze = (ee, ie) => void 0 !== ee ? ee : void 0 !== ie ? ie instanceof ke ? ie : new ke({
        bitrate: ie
      }) : void 0
  },
  40703: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me
    });
    var ye, be = He(40671);
    ! function(ee) {
      ee[ee.Silent = 0] = "Silent", ee[ee.Errors = 1] = "Errors", ee[ee.Warnings = 2] = "Warnings", ee[ee.Info = 3] = "Info"
    }(ye || (ye = {}));
    class Me {
      constructor() {}
      static get level() {
        return Me._level
      }
      static set level(ee) {
        if (ee !== ye.Silent && ee !== ye.Errors && ee !== ye.Warnings && ee !== ye.Info) throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
        Me._level = ee
      }
      static get _emitter() {
        return Me._emitterInstance ??= new be.j
      }
      static on(ee, ie, He) {
        return Me._emitter.on(ee, ie, He)
      }
      static _error() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        Me._emitter._emit("error", ie), Me._level >= ye.Errors && console.error(...ie)
      }
      static _warn() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        Me._emitter._emit("warn", ie), Me._level >= ye.Warnings && console.warn(...ie)
      }
      static _info() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        Me._emitter._emit("info", ie), Me._level >= ye.Info && console.info(...ie)
      }
    }
    Me._level = ye.Info, Me._emitterInstance = null
  },
  40750: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      f: () => oe,
      g: () => Fe,
      i: () => Re,
      j: () => Ke
    });
    He(40685);
    var ye = He(40692);
    He(40671), He(40712);
    var be = He(40738);
    He(40746), He(40742);
    He(40699), He(40703), "function" === typeof SuppressedError && SuppressedError;
    class Me {
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
      async _flushAndClose(ee) {}
      close() {
        if (this._closingPromise) return;
        const ee = this._connectedTrack;
        if (!ee) throw new Error("Cannot call close without connecting the source to an output track.");
        if ("pending" === ee.output.state) throw new Error("Cannot call close before output has been started.");
        this._closingPromise = (async () => {
          await this._flushAndClose(!1), this._closed = !0, "finalizing" !== ee.output.state && "finalized" !== ee.output.state && ee.output._muxer.onTrackClose(ee)
        })()
      }
      async _flushOrWaitForOngoingClose(ee) {
        return this._closingPromise ??= (async () => {
          await this._flushAndClose(ee), this._closed = !0
        })()
      }
    }
    class Ke extends Me {
      constructor(ee) {
        if (super(), !ye.s.includes(ee)) throw new TypeError(`Invalid video codec '${ee}'. Must be one of: ${ye.s.join(", ")}.`);
        this._codec = ee
      }
    }
    const Ue = (ee, ie) => {
      if (ee.metadata.hasOnlyKeyPackets && "key" !== ie.type) throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")
    };
    class Fe extends Ke {
      constructor(ee) {
        super(ee)
      }
      add(ee, ie) {
        if (!(ee instanceof be.c)) throw new TypeError("packet must be an EncodedPacket.");
        if (ee.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== ie && (!ie || "object" !== typeof ie)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), Ue(this._connectedTrack, ee), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, ee, ie)
      }
    }
    class Je extends Me {
      constructor(ee) {
        if (super(), !ye.c.includes(ee)) throw new TypeError(`Invalid audio codec '${ee}'. Must be one of: ${ye.c.join(", ")}.`);
        this._codec = ee
      }
    }
    class oe extends Je {
      constructor(ee) {
        super(ee)
      }
      add(ee, ie) {
        if (!(ee instanceof be.c)) throw new TypeError("packet must be an EncodedPacket.");
        if (ee.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== ie && (!ie || "object" !== typeof ie)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, ee, ie)
      }
    }
    class Re extends Me {
      constructor(ee) {
        if (super(), !ye.o.includes(ee)) throw new TypeError(`Invalid subtitle codec '${ee}'. Must be one of: ${ye.o.join(", ")}.`);
        this._codec = ee
      }
    }
  },
  40676: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me,
      d: () => Fe,
      g: () => be,
      i: () => Ue,
      k: () => Ke,
      n: () => Je
    });
    var ye = He(40671);
    class be {
      constructor(ee, ie) {
        if (this.data = ee, this.mimeType = ie, !(ee instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("string" !== typeof ie) throw new TypeError("mimeType must be a string.")
      }
    }
    class Me {
      constructor(ee, ie, He, ye) {
        if (this.data = ee, this.mimeType = ie, this.name = He, this.description = ye, !(ee instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if (void 0 !== ie && "string" !== typeof ie) throw new TypeError("mimeType, when provided, must be a string.");
        if (void 0 !== He && "string" !== typeof He) throw new TypeError("name, when provided, must be a string.");
        if (void 0 !== ye && "string" !== typeof ye) throw new TypeError("description, when provided, must be a string.")
      }
    }
    const Ke = ee => {
        if (!ee || "object" !== typeof ee) throw new TypeError("tags must be an object.");
        if (void 0 !== ee.title && "string" !== typeof ee.title) throw new TypeError("tags.title, when provided, must be a string.");
        if (void 0 !== ee.description && "string" !== typeof ee.description) throw new TypeError("tags.description, when provided, must be a string.");
        if (void 0 !== ee.artist && "string" !== typeof ee.artist) throw new TypeError("tags.artist, when provided, must be a string.");
        if (void 0 !== ee.album && "string" !== typeof ee.album) throw new TypeError("tags.album, when provided, must be a string.");
        if (void 0 !== ee.albumArtist && "string" !== typeof ee.albumArtist) throw new TypeError("tags.albumArtist, when provided, must be a string.");
        if (void 0 !== ee.trackNumber && (!Number.isInteger(ee.trackNumber) || ee.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
        if (void 0 !== ee.tracksTotal && (!Number.isInteger(ee.tracksTotal) || ee.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
        if (void 0 !== ee.discNumber && (!Number.isInteger(ee.discNumber) || ee.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
        if (void 0 !== ee.discsTotal && (!Number.isInteger(ee.discsTotal) || ee.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
        if (void 0 !== ee.genre && "string" !== typeof ee.genre) throw new TypeError("tags.genre, when provided, must be a string.");
        if (void 0 !== ee.date && (!(ee.date instanceof Date) || Number.isNaN(ee.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
        if (void 0 !== ee.beatsPerMinute && (!Number.isInteger(ee.beatsPerMinute) || ee.beatsPerMinute <= 0)) throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");
        if (void 0 !== ee.lyrics && "string" !== typeof ee.lyrics) throw new TypeError("tags.lyrics, when provided, must be a string.");
        if (void 0 !== ee.images) {
          if (!Array.isArray(ee.images)) throw new TypeError("tags.images, when provided, must be an array.");
          for (const ie of ee.images) {
            if (!ie || "object" !== typeof ie) throw new TypeError("Each image in tags.images must be an object.");
            if (!(ie.data instanceof Uint8Array)) throw new TypeError("Each image.data must be a Uint8Array.");
            if ("string" !== typeof ie.mimeType) throw new TypeError("Each image.mimeType must be a string.");
            if (!["coverFront", "coverBack", "unknown"].includes(ie.kind)) throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")
          }
        }
        if (void 0 !== ee.comment && "string" !== typeof ee.comment) throw new TypeError("tags.comment, when provided, must be a string.");
        if (void 0 !== ee.raw) {
          if (!ee.raw || "object" !== typeof ee.raw) throw new TypeError("tags.raw, when provided, must be an object.");
          for (const ie of Object.values(ee.raw))
            if (null !== ie && "string" !== typeof ie && (!Array.isArray(ie) || !ie.every((ee => "string" === typeof ee))) && !(ie instanceof Uint8Array) && !(ie instanceof be) && !(ie instanceof Me) && !(0, ye.Mb)(ie)) throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")
        }
      },
      Ue = ee => void 0 === ee.title && void 0 === ee.description && void 0 === ee.artist && void 0 === ee.album && void 0 === ee.albumArtist && void 0 === ee.trackNumber && void 0 === ee.tracksTotal && void 0 === ee.discNumber && void 0 === ee.discsTotal && void 0 === ee.genre && void 0 === ee.beatsPerMinute && void 0 === ee.date && void 0 === ee.lyrics && (!ee.images || 0 === ee.images.length) && void 0 === ee.comment && (void 0 === ee.raw || 0 === Object.keys(ee.raw).length),
      Fe = {
        default: !0,
        primary: !0,
        forced: !1,
        original: !1,
        commentary: !1,
        hearingImpaired: !1,
        visuallyImpaired: !1
      },
      Je = ee => {
        if (!ee || "object" !== typeof ee) throw new TypeError("disposition must be an object.");
        if (void 0 !== ee.default && "boolean" !== typeof ee.default) throw new TypeError("disposition.default must be a boolean.");
        if (void 0 !== ee.primary && "boolean" !== typeof ee.primary) throw new TypeError("disposition.primary must be a boolean.");
        if (void 0 !== ee.forced && "boolean" !== typeof ee.forced) throw new TypeError("disposition.forced must be a boolean.");
        if (void 0 !== ee.original && "boolean" !== typeof ee.original) throw new TypeError("disposition.original must be a boolean.");
        if (void 0 !== ee.commentary && "boolean" !== typeof ee.commentary) throw new TypeError("disposition.commentary must be a boolean.");
        if (void 0 !== ee.hearingImpaired && "boolean" !== typeof ee.hearingImpaired) throw new TypeError("disposition.hearingImpaired must be a boolean.");
        if (void 0 !== ee.visuallyImpaired && "boolean" !== typeof ee.visuallyImpaired) throw new TypeError("disposition.visuallyImpaired must be a boolean.")
      }
  },
  40671: (ee, ie, He) => {
    function ye(ee) {
      if (!ee) throw new Error("Assertion failed.")
    }
    He.d(ie, {
      A: () => Ne,
      Ac: () => Be,
      Cb: () => oi,
      D: () => wi,
      E: () => Zi,
      Eb: () => yi,
      Ec: () => Ee,
      Fb: () => De,
      G: () => me,
      Hc: () => Le,
      I: () => ye,
      Ib: () => ze,
      Kb: () => Wi,
      Kc: () => Re,
      L: () => Ce,
      Lc: () => re,
      Mb: () => Si,
      N: () => gi,
      O: () => xe,
      Oc: () => Ge,
      Pc: () => qe,
      Qb: () => Xi,
      R: () => Fe,
      Rc: () => Ci,
      T: () => se,
      Tb: () => Xe,
      V: () => vi,
      Vc: () => ne,
      W: () => zi,
      Wb: () => Fi,
      Wc: () => je,
      Yb: () => ti,
      Z: () => Ve,
      _b: () => Bi,
      _c: () => Se,
      b: () => ce,
      bb: () => Te,
      bc: () => pe,
      bd: () => Di,
      cc: () => Ie,
      eb: () => Mi,
      ed: () => Ze,
      f: () => Pe,
      fc: () => qi,
      gb: () => Je,
      h: () => Ki,
      hb: () => ue,
      hd: () => we,
      ic: () => he,
      j: () => li,
      jc: () => fe,
      kb: () => Qe,
      ld: () => mi,
      m: () => Ue,
      nc: () => Ke,
      nd: () => de,
      o: () => Ye,
      ob: () => le,
      od: () => Oe,
      pb: () => ei,
      pd: () => Oi,
      q: () => Me,
      qb: () => Ei,
      rc: () => di,
      s: () => bi,
      sb: () => ae,
      sd: () => Pi,
      t: () => Ae,
      ub: () => ki,
      ud: () => ui,
      vc: () => ii,
      wd: () => ge,
      x: () => te,
      yb: () => fi,
      zc: () => ve
    });
    const be = Math.PI / 180,
      Me = 180 / Math.PI,
      Ke = ee => {
        const ie = (ee % 360 + 360) % 360;
        if (0 === ie || 90 === ie || 180 === ie || 270 === ie) return ie;
        throw new Error(`Invalid rotation ${ee}.`)
      },
      Ue = [1, 0, 0, 0, 1, 0, 0, 0, 1],
      Fe = (ee, ie, He) => {
        const [ye, be, , Me, Ke] = ee, Ue = Math.abs(ye) * ie + Math.abs(Me) * He, Fe = Math.abs(be) * ie + Math.abs(Ke) * He;
        return fe(fe(ke(-ie / 2, -He / 2), ee), ke(Ue / 2, Fe / 2))
      },
      Je = ee => {
        const [ie, He] = ee, ye = Math.atan2(He, oe(ee) ? -ie : ie);
        return Ke(Ge(ye * Me, 90))
      },
      oe = ee => {
        const [ie, He, , ye, be] = ee;
        return ie * be - He * ye < 0
      },
      Re = ee => {
        const ie = ee * be,
          He = Math.round(Math.cos(ie)),
          ye = Math.round(Math.sin(ie));
        return [He, ye, 0, -ye, He, 0, 0, 0, 1]
      },
      ke = (ee, ie) => [1, 0, 0, 0, 1, 0, ee, ie, 1],
      qe = (ee, ie) => [ee, 0, 0, 0, ie, 0, 0, 0, 1],
      fe = (ee, ie) => {
        const He = new Array(9);
        for (let ye = 0; ye < 3; ye++)
          for (let be = 0; be < 3; be++) He[3 * ye + be] = ee[3 * ye] * ie[be] + ee[3 * ye + 1] * ie[3 + be] + ee[3 * ye + 2] * ie[6 + be];
        return He
      },
      Te = (ee, ie, He, ye) => ({
        rotation: Ke(ee + (ie ? -He : He)),
        flip: ie !== ye
      }),
      pe = ee => ee && ee[ee.length - 1],
      Xe = ee => ee >= 0 && ee < 2 ** 32,
      ze = ee => ee >= -(2 ** 31) && ee < 2 ** 31,
      Be = ee => {
        let ie = 0;
        for (; 0 === ee.readBits(1) && ie < 32;) ie++;
        if (ie >= 32) throw new Error("Invalid exponential-Golomb code.");
        return (1 << ie) - 1 + ee.readBits(ie)
      },
      Ee = ee => {
        const ie = Be(ee);
        return 0 === (1 & ie) ? -(ie >> 1) : ie + 1 >> 1
      },
      ge = (ee, ie, He, ye) => {
        for (let be = ie; be < He; be++) {
          const ie = Math.floor(be / 8);
          let Me = ee[ie];
          const Ke = 7 - (7 & be);
          Me &= ~(1 << Ke), Me |= (ye & 1 << He - be - 1) >> He - be - 1 << Ke, ee[ie] = Me
        }
      },
      Oe = ee => ee.constructor === Uint8Array ? ee : ArrayBuffer.isView(ee) ? new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength) : new Uint8Array(ee),
      de = ee => ee.constructor === DataView ? ee : ArrayBuffer.isView(ee) ? new DataView(ee.buffer, ee.byteOffset, ee.byteLength) : new DataView(ee),
      We = "undefined" !== typeof globalThis.TextEncoder ? globalThis.TextEncoder : class {
        constructor() {
          this.encoding = "utf-8"
        }
        encode() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          const ie = new Uint8Array(3 * ee.length);
          let He = 0;
          for (let ye = 0; ye < ee.length; ye++) {
            let be = ee.charCodeAt(ye);
            if (be < 128) ie[He++] = be;
            else if (be < 2048) ie[He++] = 192 | be >> 6, ie[He++] = 128 | 63 & be;
            else if (be < 55296 || be > 57343) ie[He++] = 224 | be >> 12, ie[He++] = 128 | be >> 6 & 63, ie[He++] = 128 | 63 & be;
            else {
              const Me = ye + 1 < ee.length ? ee.charCodeAt(ye + 1) : 0;
              be < 56320 && Me >= 56320 && Me <= 57343 ? (be = 65536 + (be - 55296 << 10) + (Me - 56320), ye++, ie[He++] = 240 | be >> 18, ie[He++] = 128 | be >> 12 & 63, ie[He++] = 128 | be >> 6 & 63, ie[He++] = 128 | 63 & be) : (ie[He++] = 239, ie[He++] = 191, ie[He++] = 189)
            }
          }
          return ie.slice(0, He)
        }
      },
      te = "undefined" !== typeof globalThis.TextDecoder ? globalThis.TextDecoder : class {
        constructor() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "utf-8";
          const ie = ee.trim().toLowerCase();
          if ("utf-8" === ie || "utf8" === ie || "unicode-1-1-utf-8" === ie) this.encoding = "utf-8";
          else if ("utf-16le" === ie || "utf-16" === ie) this.encoding = "utf-16le";
          else {
            if ("utf-16be" !== ie) throw new RangeError(`The encoding label provided ('${ee}') is invalid.`);
            this.encoding = "utf-16be"
          }
        }
        decode(ee) {
          const ie = ee ? Oe(ee) : new Uint8Array(0),
            He = [];
          if ("utf-8" === this.encoding) {
            let ee = ie.length >= 3 && 239 === ie[0] && 187 === ie[1] && 191 === ie[2] ? 3 : 0;
            for (; ee < ie.length;) {
              const ye = ie[ee];
              if (ye < 128) {
                He.push(ye), ee++;
                continue
              }
              let be, Me;
              if (ye >= 194 && ye < 224) be = 1, Me = 31 & ye;
              else if (ye >= 224 && ye < 240) be = 2, Me = 15 & ye;
              else {
                if (!(ye >= 240 && ye < 245)) {
                  He.push(65533), ee++;
                  continue
                }
                be = 3, Me = 7 & ye
              }
              let Ke = 224 === ye ? 160 : 240 === ye ? 144 : 128,
                Ue = 237 === ye ? 159 : 244 === ye ? 143 : 191,
                Fe = 1;
              for (; Fe <= be; Fe++) {
                const He = ee + Fe < ie.length ? ie[ee + Fe] : 0;
                if (He < Ke || He > Ue) break;
                Me = Me << 6 | 63 & He, Ke = 128, Ue = 191
              }
              ee += Fe, Fe <= be ? He.push(65533) : Me >= 65536 ? (Me -= 65536, He.push(55296 | Me >> 10, 56320 | 1023 & Me)) : He.push(Me)
            }
          } else {
            const ee = "utf-16le" === this.encoding,
              ye = ee ? 255 : 254,
              be = ee ? 254 : 255;
            let Me = ie.length >= 2 && ie[0] === ye && ie[1] === be ? 2 : 0;
            for (; Me + 1 < ie.length;) {
              const ye = ee ? ie[Me] | ie[Me + 1] << 8 : ie[Me] << 8 | ie[Me + 1];
              if (Me += 2, ye >= 55296 && ye <= 56319) {
                const be = Me + 1 < ie.length ? ee ? ie[Me] | ie[Me + 1] << 8 : ie[Me] << 8 | ie[Me + 1] : -1;
                be >= 56320 && be <= 57343 ? (He.push(ye, be), Me += 2) : He.push(65533)
              } else ye >= 56320 && ye <= 57343 ? He.push(65533) : He.push(ye)
            }
            Me < ie.length && He.push(65533)
          }
          let ye = "";
          for (let be = 0; be < He.length; be += 8192) ye += String.fromCharCode(...He.slice(be, be + 8192));
          return ye
        }
      },
      Ze = new te,
      we = new We,
      De = ee => {
        for (let ie = 0; ie < ee.length; ie++) {
          if (ee.charCodeAt(ie) > 255) return !1
        }
        return !0
      },
      Pe = {
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        bt2020: 9,
        smpte432: 12
      },
      Ae = {
        bt709: 1,
        smpte170m: 6,
        linear: 8,
        "iec61966-2-1": 13,
        pq: 16,
        hlg: 18
      },
      Ye = {
        rgb: 0,
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        "bt2020-ncl": 9
      },
      Ve = ee => !ee || null == ee.primaries && null == ee.transfer && null == ee.matrix && null == ee.fullRange,
      ae = ee => ee instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && ee instanceof SharedArrayBuffer || ArrayBuffer.isView(ee);
    class ce {
      constructor() {
        this.currentPromise = Promise.resolve(), this.pending = 0
      }
      async acquire() {
        let ee;
        const ie = new Promise((ie => {
            let He = !1;
            ee = () => {
              He || (ie(), this.pending--, He = !0)
            }
          })),
          He = this.currentPromise;
        return this.currentPromise = ie, this.pending++, await He, ee
      }
    }
    const xe = ee => [...ee].map((ee => ee.toString(16).padStart(2, "0"))).join(""),
      Le = ee => (ee = (ee = (ee = (ee = (ee = ee >> 1 & 1431655765 | (1431655765 & ee) << 1) >> 2 & 858993459 | (858993459 & ee) << 2) >> 4 & 252645135 | (252645135 & ee) << 4) >> 8 & 16711935 | (16711935 & ee) << 8) >> 16 & 65535 | (65535 & ee) << 16) >>> 0,
      Ce = (ee, ie, He) => {
        let ye = 0,
          be = ee.length - 1,
          Me = -1;
        for (; ye <= be;) {
          const Ke = ye + (be - ye + 1) / 2 | 0;
          He(ee[Ke]) <= ie ? (Me = Ke, ye = Ke + 1) : be = Ke - 1
        }
        return Me
      },
      ve = () => {
        let ee, ie;
        return {
          promise: new Promise(((He, ye) => {
            ee = He, ie = ye
          })),
          resolve: ee,
          reject: ie
        }
      },
      ue = (ee, ie) => {
        for (let He = ee.length - 1; He >= 0; He--)
          if (ie(ee[He])) return He;
        return -1
      },
      me = ee => {
        throw new Error(`Unexpected value: ${ee}`)
      },
      le = (ee, ie, He) => {
        const ye = ee.getUint8(ie),
          be = ee.getUint8(ie + 1),
          Me = ee.getUint8(ie + 2);
        return He ? ye | be << 8 | Me << 16 : ye << 16 | be << 8 | Me
      },
      Se = (ee, ie, He, ye) => {
        He >>>= 0, He &= 16777215, ye ? (ee.setUint8(ie, 255 & He), ee.setUint8(ie + 1, He >>> 8 & 255), ee.setUint8(ie + 2, He >>> 16 & 255)) : (ee.setUint8(ie, He >>> 16 & 255), ee.setUint8(ie + 1, He >>> 8 & 255), ee.setUint8(ie + 2, 255 & He))
      },
      ne = (ee, ie, He, ye) => {
        (He = se(He, -8388608, 8388607)) < 0 && (He = He + 16777216 & 16777215), Se(ee, ie, He, ye)
      },
      je = (ee, ie, He, ye) => {
        ye ? (ee.setUint32(ie + 0, He, !0), ee.setInt32(ie + 4, Math.floor(He / 2 ** 32), !0)) : (ee.setInt32(ie + 0, Math.floor(He / 2 ** 32), !0), ee.setUint32(ie + 4, He, !0))
      },
      se = (ee, ie, He) => Math.max(ie, Math.min(He, ee)),
      Ie = (ee, ie, He) => ee + (ie - ee) * He,
      he = (ee, ie) => ee - Math.floor(ee / ie) * ie,
      Ne = "und",
      Ge = (ee, ie) => Math.round(ee / ie) * ie,
      re = (ee, ie) => Math.round(ee * ie) / ie,
      Qe = (ee, ie) => Math.floor(ee * ie) / ie,
      ei = ee => {
        let ie = 0;
        for (; ee;) ie++, ee >>= 1;
        return ie
      },
      ii = ee => {
        let ie = 0;
        for (; 0 !== ee;) ee &= ee - 1, ie++;
        return ie
      },
      Hi = /^[a-z]{3}$/,
      yi = ee => Hi.test(ee),
      bi = 1e6 * (1 + Number.EPSILON),
      Mi = (ee, ie) => {
        const He = ee < 0 ? -1 : 1;
        let ye = 0,
          be = 1,
          Me = 1,
          Ke = 0,
          Ue = ee = Math.abs(ee);
        for (;;) {
          const ee = Math.floor(Ue),
            Fe = ee * Me + ye,
            Je = ee * Ke + be;
          if (Je > ie) return {
            num: He * Me,
            den: Ke
          };
          if (ye = Me, be = Ke, Me = Fe, Ke = Je, Ue = 1 / (Ue - ee), !isFinite(Ue)) break
        }
        return {
          num: He * Me,
          den: Ke
        }
      };
    class Ki {
      constructor() {
        this.currentPromise = Promise.resolve()
      }
      call(ee) {
        return this.currentPromise = this.currentPromise.then(ee)
      }
    }
    let Ui = null;
    const Fi = () => null !== Ui ? Ui : Ui = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
    let Ji = null;
    const oi = () => null !== Ji ? Ji : Ji = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
    let Ri = null;
    const ki = () => null !== Ri ? Ri : Ri = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
    const qi = ee => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${ee} is not available in this environment.` : `${ee} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`,
      fi = ee => ee instanceof DOMException && "QuotaExceededError" === ee.name && /reclaimed/i.test(ee.message),
      Ti = (async () => {})().constructor,
      Xi = ee => ee instanceof Ti || ee instanceof Promise || "function" === typeof ee?.then,
      zi = (ee, ie) => -1 !== ee ? ee : ie,
      Bi = function*(ee) {
        for (const ie in ee) {
          const He = ee[ie];
          void 0 !== He && (yield {
            key: ie,
            value: He
          })
        }
      },
      Ei = ee => {
        switch (ee.toLowerCase()) {
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
      gi = ee => {
        let ie = "";
        for (let He = 0; He < ee.length; He++) ie += String.fromCharCode(ee[He]);
        return btoa(ie)
      },
      Oi = (ee, ie) => {
        if (ee.length !== ie.length) return !1;
        for (let He = 0; He < ee.length; He++)
          if (ee[He] !== ie[He]) return !1;
        return !0
      },
      di = () => {
        Symbol.dispose ??= Symbol("Symbol.dispose")
      },
      Wi = ee => "number" === typeof ee && !Number.isNaN(ee),
      ti = (ee, ie) => {
        if (ie.includes("://")) return ie;
        if (ee.includes("://")) {
          const ie = ee.indexOf("?"); - 1 !== ie && (ee = ee.slice(0, ie))
        }
        let He;
        if (ie.startsWith("/")) {
          const ye = ee.indexOf("://");
          if (-1 === ye) He = ie;
          else {
            const be = ee.indexOf("/", ye + 3);
            He = -1 === be ? ee + ie : ee.slice(0, be) + ie
          }
        } else {
          const ye = ee.lastIndexOf("/");
          He = -1 === ye ? ie : ee.slice(0, ye + 1) + ie
        }
        let ye = "";
        const be = He.indexOf("://");
        if (-1 !== be) {
          const ee = He.indexOf("/", be + 3); - 1 !== ee && (ye = He.slice(0, ee), He = He.slice(ee))
        }
        const Me = He.split("/"),
          Ke = [];
        for (const Ue of Me) ".." === Ue ? Ke.pop() : "." !== Ue && Ke.push(Ue);
        return ye + Ke.join("/")
      },
      Zi = (ee, ie) => {
        let He = -1,
          ye = 1 / 0;
        for (let be = 0; be < ee.length; be++) {
          const Me = ie(ee[be]);
          Me < ye && (ye = Me, He = be)
        }
        return He
      },
      wi = (ee, ie) => {
        let He = -1,
          ye = -1 / 0;
        for (let be = 0; be < ee.length; be++) {
          const Me = ie(ee[be]);
          Me > ye && (ye = Me, He = be)
        }
        return He
      },
      Di = ee => {
        ye(Number.isInteger(ee.num)), ye(Number.isInteger(ee.den)), ye(0 !== ee.den);
        let ie = Math.abs(ee.num),
          He = Math.abs(ee.den);
        for (; 0 !== He;) {
          const ee = ie % He;
          ie = He, He = ee
        }
        const be = ie || 1;
        return {
          num: ee.num / be,
          den: ee.den / be
        }
      },
      Pi = (ee, ie) => {
        if ("object" !== typeof ee || !ee) throw new TypeError(`${ie} must be an object.`);
        if (!Number.isInteger(ee.left) || ee.left < 0) throw new TypeError(`${ie}.left must be a non-negative integer.`);
        if (!Number.isInteger(ee.top) || ee.top < 0) throw new TypeError(`${ie}.top must be a non-negative integer.`);
        if (!Number.isInteger(ee.width) || ee.width < 0) throw new TypeError(`${ie}.width must be a non-negative integer.`);
        if (!Number.isInteger(ee.height) || ee.height < 0) throw new TypeError(`${ie}.height must be a non-negative integer.`)
      };
    let Ai, Yi = 1;
    const Vi = new Map,
      ai = new Map,
      ci = () => "undefined" === typeof window,
      xi = () => {
        const ee = new Map,
          ie = new Map;
        self.onmessage = He => {
          const ye = He.data;
          switch (ye.type) {
            case "set-timeout": {
              const ie = setTimeout((() => {
                ee.delete(ye.timerId), self.postMessage({
                  type: "fire",
                  timerId: ye.timerId
                })
              }), ye.delay);
              ee.set(ye.timerId, ie)
            }
            break;
            case "set-interval": {
              const ee = setInterval((() => {
                self.postMessage({
                  type: "fire",
                  timerId: ye.timerId
                })
              }), ye.delay);
              ie.set(ye.timerId, ee)
            }
            break;
            case "clear-timeout": {
              const ie = ee.get(ye.timerId);
              void 0 !== ie && (clearTimeout(ie), ee.delete(ye.timerId))
            }
            break;
            case "clear-interval": {
              const ee = ie.get(ye.timerId);
              void 0 !== ee && (clearInterval(ee), ie.delete(ye.timerId))
            }
          }
        }
      },
      Li = () => {
        if (Ai) return Ai;
        const ee = `(${xi.toString()})();`,
          ie = URL.createObjectURL(new Blob([ee], {
            type: "text/javascript"
          }));
        return Ai = new Worker(ie), URL.revokeObjectURL(ie), Ai.onmessage = ee => {
          const ie = ee.data,
            He = Vi.get(ie.timerId);
          if (He) return Vi.delete(ie.timerId), void He();
          const ye = ai.get(ie.timerId);
          ye && ye()
        }, Ai
      },
      Ci = (ee, ie) => {
        if (ci()) return {
          id: setInterval(ee, ie)
        };
        const He = Yi++;
        return ai.set(He, (() => {
          ee()
        })), Li().postMessage({
          type: "set-interval",
          timerId: He,
          delay: ie
        }), {
          id: He
        }
      },
      vi = ee => {
        ci() ? clearInterval(ee.id) : (ye("number" === typeof ee.id), ai.delete(ee.id), Li().postMessage({
          type: "clear-interval",
          timerId: ee.id
        }))
      },
      ui = ee => new Promise((ie => setTimeout(ie, ee))),
      mi = ee => Array.isArray(ee) ? ee : [ee];
    class li {
      constructor() {
        this._listeners = new Map
      }
      on(ee, ie, He) {
        this._listeners.has(ee) || this._listeners.set(ee, new Set);
        const ye = {
          oR: ie,
          once: He?.once ?? !1
        };
        return this._listeners.get(ee).add(ye), () => {
          this._listeners.get(ee)?.delete(ye)
        }
      }
      _emit() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        const [ye, be] = ie, Me = this._listeners.get(ye);
        if (Me)
          for (const Ue of Me) {
            try {
              Ue.oR(be)
            } catch (Ke) {
              console.error(Ke)
            }
            Ue.once && Me.delete(Ue)
          }
      }
    }
    const Si = ee => null !== ee && "object" === typeof ee && Object.getPrototypeOf(ee) === Object.prototype && Object.values(ee).every((ee => "string" === typeof ee))
  },
  40679: (ee, ie, He) => {
    He.d(ie, {
      d: () => CH,
      f: () => vH,
      i: () => LH,
      l: () => cH,
      p: () => mH
    });
    var ye = He(40685),
      be = He(40692);
    var Me;
    ! function(ee) {
      ee[ee.FrameCount = 1] = "FrameCount", ee[ee.FileSize = 2] = "FileSize", ee[ee.Toc = 4] = "Toc"
    }(Me || (Me = {}));
    var Ke = He(40703),
      Ue = He(40671);
    class Fe {
      constructor(ee, ie, He, ye, be) {
        this.bytes = ee, this.view = ie, this.offset = He, this.start = ye, this.end = be, this.bufferPos = ye - He
      }
      static tempFromBytes(ee) {
        return new Fe(ee, (0, Ue.nd)(ee), 0, 0, ee.length)
      }
      get length() {
        return this.end - this.start
      }
      get filePos() {
        return this.offset + this.bufferPos
      }
      set filePos(ee) {
        this.bufferPos = ee - this.offset
      }
      get remainingLength() {
        return Math.max(this.end - this.filePos, 0)
      }
      skip(ee) {
        this.bufferPos += ee
      }
      slice(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.end - ee;
        if (ee < this.start || ee + ie > this.end) throw new RangeError("Slicing outside of original slice.");
        return new Fe(this.bytes, this.view, this.offset, ee, ee + ie)
      }
    }
    const Je = (ee, ie) => {
        if (ee.filePos < ee.start || ee.filePos + ie > ee.end) throw new RangeError(`Tried reading [${ee.filePos}, ${ee.filePos+ie}), but slice is [${ee.start}, ${ee.end}). This is likely an internal error, please report it alongside the file that caused it.`)
      },
      oe = (ee, ie) => {
        Je(ee, ie);
        const He = ee.bytes.subarray(ee.bufferPos, ee.bufferPos + ie);
        return ee.bufferPos += ie, He
      };
    var Re, ke;
    ! function(ee) {
      ee[ee.Unsynchronisation = 128] = "Unsynchronisation", ee[ee.ExtendedHeader = 64] = "ExtendedHeader", ee[ee.ExperimentalIndicator = 32] = "ExperimentalIndicator", ee[ee.Footer = 16] = "Footer"
    }(Re || (Re = {})),
    function(ee) {
      ee[ee.ISO_8859_1 = 0] = "ISO_8859_1", ee[ee.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", ee[ee.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", ee[ee.UTF_8 = 3] = "UTF_8"
    }(ke || (ke = {}));
    var qe = He(40676);
    class fe {
      constructor(ee) {
        this.mutex = new Ue.b, this.trackTimestampInfo = new WeakMap, this.output = ee
      }
      onTrackClose(ee) {}
      validateTimestamp(ee, ie, He) {
        let ye = this.trackTimestampInfo.get(ee);
        if (ye) {
          if (He && (ye.maxTimestampBeforeLastKeyPacket = ye.maxTimestamp), null !== ye.maxTimestampBeforeLastKeyPacket && ie < ye.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${ie}s, but largest timestamp is ${ye.maxTimestampBeforeLastKeyPacket}s.`);
          ye.maxTimestamp = Math.max(ye.maxTimestamp, ie)
        } else {
          if (!He) throw new Error("First packet must be a key packet.");
          ye = {
            maxTimestamp: ie,
            maxTimestampBeforeLastKeyPacket: null
          }, this.trackTimestampInfo.set(ee, ye)
        }
      }
    }
    var Te = He(40699),
      pe = He(40689);
    var Xe = He(40712),
      ze = He(40708);
    class Be {
      constructor(ee) {
        this.writer = ee, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap
      }
      writeU32(ee) {
        this.helperView.setUint32(0, ee, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeU64(ee) {
        this.helperView.setUint32(0, Math.floor(ee / 2 ** 32), !1), this.helperView.setUint32(4, ee, !1), this.writer.write(this.helper.subarray(0, 8))
      }
      writeAscii(ee) {
        for (let ie = 0; ie < ee.length; ie++) this.helperView.setUint8(ie % 8, ee.charCodeAt(ie)), ie % 8 === 7 && this.writer.write(this.helper);
        ee.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, ee.length % 8))
      }
      writeBox(ee) {
        if (this.offsets.set(ee, this.writer.getPos()), ee.contents && !ee.children) this.writeBoxHeader(ee, ee.size ?? ee.contents.byteLength + 8), this.writer.write(ee.contents);
        else {
          const ie = this.writer.getPos();
          if (this.writeBoxHeader(ee, 0), ee.contents && this.writer.write(ee.contents), ee.children)
            for (const be of ee.children) be && this.writeBox(be);
          const He = this.writer.getPos(),
            ye = ee.size ?? He - ie;
          this.writer.seek(ie), this.writeBoxHeader(ee, ye), this.writer.seek(He)
        }
      }
      writeBoxHeader(ee, ie) {
        this.writeU32(ee.largeSize ? 1 : ie), this.writeAscii(ee.type), ee.largeSize && this.writeU64(ie)
      }
      measureBoxHeader(ee) {
        return 8 + (ee.largeSize ? 8 : 0)
      }
      patchBox(ee) {
        const ie = this.offsets.get(ee);
        (0, Ue.I)(void 0 !== ie);
        const He = this.writer.getPos();
        this.writer.seek(ie), this.writeBox(ee), this.writer.seek(He)
      }
      measureBox(ee) {
        if (ee.contents && !ee.children) {
          return this.measureBoxHeader(ee) + ee.contents.byteLength
        } {
          let ie = this.measureBoxHeader(ee);
          if (ee.contents && (ie += ee.contents.byteLength), ee.children)
            for (const He of ee.children) He && (ie += this.measureBox(He));
          return ie
        }
      }
    }
    const Ee = new Uint8Array(8),
      ge = new DataView(Ee.buffer),
      Oe = ee => [(ee % 256 + 256) % 256],
      de = ee => (ge.setUint16(0, ee, !1), [Ee[0], Ee[1]]),
      We = ee => (ge.setInt16(0, ee, !1), [Ee[0], Ee[1]]),
      te = ee => (ge.setUint32(0, ee, !1), [Ee[1], Ee[2], Ee[3]]),
      Ze = ee => (ge.setUint32(0, ee, !1), [Ee[0], Ee[1], Ee[2], Ee[3]]),
      we = ee => (ge.setInt32(0, ee, !1), [Ee[0], Ee[1], Ee[2], Ee[3]]),
      De = ee => (ge.setUint32(0, Math.floor(ee / 2 ** 32), !1), ge.setUint32(4, ee, !1), [Ee[0], Ee[1], Ee[2], Ee[3], Ee[4], Ee[5], Ee[6], Ee[7]]),
      Pe = ee => (ge.setInt32(0, Math.floor(ee / 2 ** 32), !1), ge.setUint32(4, ee, !1), [Ee[0], Ee[1], Ee[2], Ee[3], Ee[4], Ee[5], Ee[6], Ee[7]]),
      Ae = ee => (ge.setInt16(0, 256 * ee, !1), [Ee[0], Ee[1]]),
      Ye = ee => (ge.setInt32(0, 65536 * ee, !1), [Ee[0], Ee[1], Ee[2], Ee[3]]),
      Ve = ee => (ge.setInt32(0, 2 ** 30 * ee, !1), [Ee[0], Ee[1], Ee[2], Ee[3]]),
      ae = (ee, ie) => {
        const He = [];
        let ye = ee;
        do {
          let ee = 127 & ye;
          ye >>= 7, He.length > 0 && (ee |= 128), He.push(ee), void 0 !== ie && ie--
        } while (ye > 0 || ie);
        return He.reverse()
      },
      ce = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = Array(ee.length).fill(null).map(((ie, He) => ee.charCodeAt(He)));
        return ie && He.push(0), He
      },
      xe = ee => [Ye(ee[0]), Ye(ee[1]), Ve(ee[2]), Ye(ee[3]), Ye(ee[4]), Ve(ee[5]), Ye(ee[6]), Ye(ee[7]), Ve(ee[8])],
      Le = (ee, ie, He) => ({
        type: ee,
        contents: ie && new Uint8Array(ie.flat(10)),
        children: He
      }),
      Ce = (ee, ie, He, ye, be) => Le(ee, [Oe(ie), te(He), ye ?? []], be),
      ve = () => Le("styp", [ce("iso5"), Ze(0), ce("iso5"), ce("iso6"), ce("mp41"), ce("cmfc"), ce("dash")]),
      ue = (ee, ie) => {
        const He = Math.max(0, ee.minWrittenTimestamp);
        let ye = Math.max(0, ee.maxWrittenEndTimestamp - He);
        return Number.isFinite(ye) || (ye = 0), Ce("sidx", 1, 0, [Ze(1), Ze(kH), De(fH(He, kH)), De(0), de(0), de(1), Ze(2147483647 & ie), Ze(fH(ye, kH)), Ze(0)])
      },
      me = ee => ({
        type: "mdat",
        largeSize: ee
      }),
      le = ee => Le("moov", void 0, [Se(ee.creationTime, ee.trackDatas), ...ee.trackDatas.map((ie => ne(ie, ee.creationTime))), ee.isFragmented ? Yi(ee.trackDatas) : null, si(ee)]),
      Se = (ee, ie) => {
        const He = Math.max(0, ...ie.map((ee => Math.max(0, fH(TH(ee), kH) + fH(ee.startTimestampOffset ?? 0, kH))))),
          ye = Math.max(0, ...ie.map((ee => ee.track.id))) + 1,
          be = !(0, Ue.Tb)(ee) || !(0, Ue.Tb)(He),
          Me = be ? De : Ze;
        return Ce("mvhd", +be, 0, [Me(ee), Me(ee), Ze(kH), Me(He), Ye(1), Ae(1), Array(10).fill(0), xe(Ue.m), Array(24).fill(0), Ze(ye)])
      },
      ne = (ee, ie) => {
        const He = qH(ee),
          ye = null !== ee.startTimestampOffset && 0 !== ee.startTimestampOffset;
        return Le("trak", void 0, [je(ee, ie), ye ? se(ee) : null, Ie(ee, ie), void 0 !== He.name ? Le("udta", void 0, [Le("name", [...Ue.hd.encode(He.name)])]) : null])
      },
      je = (ee, ie) => {
        const He = Math.max(0, fH(TH(ee), kH) + fH(ee.startTimestampOffset ?? 0, kH)),
          ye = !(0, Ue.Tb)(ie) || !(0, Ue.Tb)(He),
          be = ye ? De : Ze;
        let Me;
        if ("video" === ee.type && ee.track.metadata.transformationMatrix) Me = ee.track.metadata.transformationMatrix;
        else if ("video" === ee.type) {
          const {
            rotation: ie,
            flip: He
          } = ee.track.metadata, ye = (0, Ue.jc)((0, Ue.Kc)(ie ?? 0), (0, Ue.Pc)(He ? -1 : 1, 1));
          Me = (0, Ue.R)(ye, ee.info.width, ee.info.height)
        } else Me = Ue.m;
        let Ke = 2;
        !1 !== ee.track.metadata.disposition?.default && (Ke |= 1);
        const Fe = "video" === ee.type ? 0 : "audio" === ee.type ? 1 : "subtitle" === ee.type ? 2 : (0, Ue.G)(ee);
        return Ce("tkhd", +ye, Ke, [be(ie), be(ie), Ze(ee.track.id), Ze(0), be(He), Array(8).fill(0), de(0), de(Fe), Ae("audio" === ee.type ? 1 : 0), de(0), xe(Me), Ye("video" === ee.type ? ee.info.width : 0), Ye("video" === ee.type ? ee.info.height : 0)])
      },
      se = ee => {
        const ie = ee.startTimestampOffset;
        if ((0, Ue.I)(null !== ie), ie > 0) {
          const He = fH(ie, kH),
            ye = fH(TH(ee), kH),
            be = !(0, Ue.Tb)(He) || !(0, Ue.Tb)(ye),
            Me = be ? De : Ze,
            Ke = be ? Pe : we;
          return Le("edts", void 0, [Ce("elst", be ? 1 : 0, 0, [Ze(2), Me(He), Ke(-1), Ye(1), Me(ye), Ke(0), Ye(1)])])
        } {
          const He = fH(-ie, ee.timescale),
            ye = Math.max(0, fH(TH(ee), kH) + fH(ie, kH)),
            be = !(0, Ue.Ib)(He) || !(0, Ue.Tb)(ye),
            Me = be ? De : Ze,
            Ke = be ? Pe : we;
          return Le("edts", void 0, [Ce("elst", be ? 1 : 0, 0, [Ze(1), Me(ye), Ke(He), Ye(1)])])
        }
      },
      Ie = (ee, ie) => Le("mdia", void 0, [he(ee, ie), re(!0, Ne[ee.type], Ge[ee.type]), Qe(ee)]),
      he = (ee, ie) => {
        const He = fH(TH(ee), ee.timescale),
          ye = !(0, Ue.Tb)(ie) || !(0, Ue.Tb)(He),
          be = ye ? De : Ze;
        return Ce("mdhd", +ye, 0, [be(ie), be(ie), Ze(ee.timescale), be(He), de(FH(ee.track.metadata.languageCode ?? Ue.A)), de(0)])
      },
      Ne = {
        video: "vide",
        audio: "soun",
        subtitle: "text"
      },
      Ge = {
        video: "MediabunnyVideoHandler",
        audio: "MediabunnySoundHandler",
        subtitle: "MediabunnyTextHandler"
      },
      re = function(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "\0\0\0\0";
        return Ce("hdlr", 0, 0, [ee ? ce("mhlr") : Ze(0), ce(ie), ce(ye), Ze(0), Ze(0), ce(He, !0)])
      },
      Qe = ee => Le("minf", void 0, [ei[ee.type](), ii(), bi(ee)]),
      ei = {
        video: () => Ce("vmhd", 0, 1, [de(0), de(0), de(0), de(0)]),
        audio: () => Ce("smhd", 0, 0, [de(0), de(0)]),
        subtitle: () => Ce("nmhd", 0, 0)
      },
      ii = () => Le("dinf", void 0, [Hi()]),
      Hi = () => Ce("dref", 0, 0, [Ze(1)], [yi()]),
      yi = () => Ce("url ", 0, 1),
      bi = ee => {
        const ie = ee.compositionTimeOffsetTable.length > 1 || ee.compositionTimeOffsetTable.some((ee => 0 !== ee.sampleCompositionTimeOffset));
        return Le("stbl", void 0, [Mi(ee), Wi(ee), ie ? Pi(ee) : null, ie ? Ai(ee) : null, Zi(ee), wi(ee), Di(ee), ti(ee)])
      },
      Mi = ee => {
        let ie;
        if ("video" === ee.type) ie = Ki(HH(ee.track.source._codec, ee.info.decoderConfig.codec), ee);
        else if ("audio" === ee.type) {
          const He = bH(ee.track.source._codec, ee.info.decoderConfig.codec, ee.muxer.isQuickTime);
          (0, Ue.I)(He), ie = Ri(He, ee)
        } else "subtitle" === ee.type && (ie = di(KH[ee.track.source._codec], ee));
        return (0, Ue.I)(ie), Ce("stsd", 0, 0, [Ze(1)], [ie])
      },
      Ki = (ee, ie) => Le(ee, [Array(6).fill(0), de(1), de(0), de(0), Array(12).fill(0), de(ie.info.width), de(ie.info.height), Ze(4718592), Ze(4718592), Ze(0), de(1), Oe(ze.d.length), ce(ze.d), Array(31 - ze.d.length).fill(0), de(ie.info.hasAlphaChannel ? 32 : 24), We(65535)], [yH[ie.track.source._codec]?.(ie) ?? null, Fi(ie), (0, Ue.Z)(ie.info.decoderConfig.colorSpace) ? null : Ji(ie), Ui(ie)]),
      Ui = ee => 0 === ee.avgBitrate && 0 === ee.maxBitrate ? null : Le("btrt", [Ze(0), Ze(ee.maxBitrate), Ze(ee.avgBitrate)]),
      Fi = ee => ee.info.pixelAspectRatio.num === ee.info.pixelAspectRatio.den ? null : Le("pasp", [Ze(ee.info.pixelAspectRatio.num), Ze(ee.info.pixelAspectRatio.den)]),
      Ji = ee => {
        const ie = ee.info.decoderConfig.colorSpace;
        return Le("colr", [ce(ee.muxer.isQuickTime ? "nclc" : "nclx"), de(null != ie?.primaries ? Ue.f[ie.primaries] : 2), de(null != ie?.transfer ? Ue.t[ie.transfer] : 2), de(null != ie?.matrix ? Ue.o[ie.matrix] : 2), ee.muxer.isQuickTime ? [] : Oe((ie?.fullRange ? 1 : 0) << 7)])
      },
      oi = ee => {
        if (!ee.info.decoderConfig) return null;
        const ie = ee.info.decoderConfig,
          He = ie.codec.split("."),
          ye = Number(He[1]),
          be = Number(He[2]),
          Me = (Number(He[3]) << 4) + ((He[4] ? Number(He[4]) : 1) << 1) + (He[8] ? Number(He[8]) : Number(ie.colorSpace?.fullRange ?? 0)),
          Ke = He[5] ? Number(He[5]) : ie.colorSpace?.primaries ? Ue.f[ie.colorSpace.primaries] : 1,
          Fe = He[6] ? Number(He[6]) : ie.colorSpace?.transfer ? Ue.t[ie.colorSpace.transfer] : 1,
          Je = He[7] ? Number(He[7]) : ie.colorSpace?.matrix ? Ue.o[ie.colorSpace.matrix] : 1;
        return Ce("vpcC", 1, 0, [Oe(ye), Oe(be), Oe(Me), Oe(Ke), Oe(Fe), Oe(Je), de(0)])
      },
      Ri = (ee, ie) => {
        let He, ye = 0,
          Me = 16;
        const Ke = be.n.includes(ie.track.source._codec);
        if (Ke) {
          const ee = ie.track.source._codec,
            {
              sampleSize: He
            } = (0, be.R)(ee);
          Me = 8 * He, Me > 16 && (ye = 1)
        }
        if (ie.muxer.isQuickTime && (ye = 1), 0 === ye) He = [Array(6).fill(0), de(1), de(ye), de(0), Ze(0), de(ie.info.numberOfChannels), de(Me), de(0), de(0), de(ie.info.sampleRate < 65536 ? ie.info.sampleRate : 0), de(0)];
        else {
          const ee = Ke ? 0 : -2;
          He = [Array(6).fill(0), de(1), de(ye), de(0), Ze(0), de(ie.info.numberOfChannels), de(Math.min(Me, 16)), We(ee), de(0), de(ie.info.sampleRate < 65536 ? ie.info.sampleRate : 0), de(0), Ke ? [Ze(1), Ze(Me / 8), Ze(ie.info.numberOfChannels * Me / 8)] : [Ze(0), Ze(0), Ze(0)], Ze(2)]
        }
        return Le(ee, He, [MH(ie.track.source._codec, ie.muxer.isQuickTime)?.(ie) ?? null, Ui(ie)])
      },
      ki = ee => {
        let ie;
        switch (ee.track.source._codec) {
          case "aac":
            ie = 64;
            break;
          case "mp3":
            ie = 107;
            break;
          case "vorbis":
            ie = 221;
            break;
          default:
            throw new Error(`Unhandled audio codec: ${ee.track.source._codec}`)
        }
        let He = [...Oe(ie), ...Oe(21), ...te(0), ...Ze(ee.maxBitrate), ...Ze(ee.avgBitrate)];
        if (ee.info.decoderConfig.description) {
          const ie = (0, Ue.od)(ee.info.decoderConfig.description);
          He = [...He, ...Oe(5), ...ae(ie.byteLength), ...ie]
        }
        return He = [...de(1), ...Oe(0), ...Oe(4), ...ae(He.length), ...He, ...Oe(6), ...Oe(1), ...Oe(2)], He = [...Oe(3), ...ae(He.length), ...He], Ce("esds", 0, 0, He)
      },
      qi = ee => Le("wave", void 0, [fi(ee), Ti(ee), Le("\0\0\0\0")]),
      fi = ee => Le("frma", [ce(bH(ee.track.source._codec, ee.info.decoderConfig.codec, ee.muxer.isQuickTime))]),
      Ti = ee => {
        const {
          littleEndian: ie
        } = (0, be.R)(ee.track.source._codec);
        return Le("enda", [de(+ie)])
      },
      Xi = ee => {
        let ie = ee.info.numberOfChannels,
          He = 3840,
          ye = ee.info.sampleRate,
          be = 0,
          Me = 0,
          Ke = new Uint8Array(0);
        const Fe = ee.info.decoderConfig?.description;
        if (Fe) {
          (0, Ue.I)(Fe.byteLength >= 18);
          const ee = (0, Ue.od)(Fe),
            Je = (0, Te.yb)(ee);
          ie = Je.outputChannelCount, He = Je.preSkip, ye = Je.inputSampleRate, be = Je.outputGain, Me = Je.channelMappingFamily, Je.channelMappingTable && (Ke = Je.channelMappingTable)
        }
        return Le("dOps", [Oe(0), Oe(ie), de(He), Ze(ye), We(be), Oe(Me), ...Ke])
      },
      zi = ee => {
        const ie = ee.info.decoderConfig?.description;
        (0, Ue.I)(ie);
        const He = (0, Ue.od)(ie);
        return Ce("dfLa", 0, 0, [...He.subarray(4)])
      },
      Bi = ee => {
        const {
          littleEndian: ie,
          sampleSize: He
        } = (0, be.R)(ee.track.source._codec);
        return Ce("pcmC", 0, 0, [Oe(+ie), Oe(8 * He)])
      },
      Ei = ee => {
        (0, Ue.I)(ee.info.primingPacket);
        const ie = (0, Te.jb)(ee.info.primingPacket.data);
        if (!ie) throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
        const He = new Uint8Array(3),
          ye = new pe.e(He);
        return ye.writeBits(2, ie.fscod), ye.writeBits(5, ie.bsid), ye.writeBits(3, ie.bsmod), ye.writeBits(3, ie.acmod), ye.writeBits(1, ie.lfeon), ye.writeBits(5, ie.bitRateCode), ye.writeBits(5, 0), Le("dac3", [...He])
      },
      gi = ee => {
        (0, Ue.I)(ee.info.primingPacket);
        const ie = (0, Te.rb)(ee.info.primingPacket.data);
        if (!ie) throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
        let He = 16;
        for (const Ke of ie.substreams) He += 23, Ke.numDepSub > 0 ? He += 9 : He += 1;
        const ye = Math.ceil(He / 8),
          be = new Uint8Array(ye),
          Me = new pe.e(be);
        Me.writeBits(13, ie.dataRate), Me.writeBits(3, ie.substreams.length - 1);
        for (const Ke of ie.substreams) Me.writeBits(2, Ke.fscod), Me.writeBits(5, Ke.bsid), Me.writeBits(1, 0), Me.writeBits(1, 0), Me.writeBits(3, Ke.bsmod), Me.writeBits(3, Ke.acmod), Me.writeBits(1, Ke.lfeon), Me.writeBits(3, 0), Me.writeBits(4, Ke.numDepSub), Ke.numDepSub > 0 ? Me.writeBits(9, Ke.chanLoc) : Me.writeBits(1, 0);
        return Le("dec3", [...be])
      },
      Oi = ee => {
        (0, Ue.I)(ee.info.primingPacket);
        const ie = (0, Te.nb)(ee.info.primingPacket.data);
        if (!ie) throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");
        return Le("ddts", [...(0, Te.w)(ie)])
      },
      di = (ee, ie) => Le(ee, [Array(6).fill(0), de(1)], [UH[ie.track.source._codec](ie), Ui(ie)]),
      Wi = ee => Ce("stts", 0, 0, [Ze(ee.timeToSampleTable.length), ee.timeToSampleTable.map((ee => [Ze(ee.sampleCount), Ze(ee.sampleDelta)]))]),
      ti = ee => {
        if (ee.samples.every((ee => "key" === ee.type))) return null;
        const ie = [...ee.samples.entries()].filter((ee => {
          let [, ie] = ee;
          return "key" === ie.type
        }));
        return Ce("stss", 0, 0, [Ze(ie.length), ie.map((ee => {
          let [ie] = ee;
          return Ze(ie + 1)
        }))])
      },
      Zi = ee => Ce("stsc", 0, 0, [Ze(ee.compactlyCodedChunkTable.length), ee.compactlyCodedChunkTable.map((ee => [Ze(ee.firstChunk), Ze(ee.samplesPerChunk), Ze(1)]))]),
      wi = ee => {
        if ("audio" === ee.type && ee.info.requiresPcmTransformation) {
          const {
            sampleSize: ie
          } = (0, be.R)(ee.track.source._codec);
          return Ce("stsz", 0, 0, [Ze(ie * ee.info.numberOfChannels), Ze(ee.samples.reduce(((ie, He) => ie + fH(He.duration, ee.timescale)), 0))])
        }
        return Ce("stsz", 0, 0, [Ze(0), Ze(ee.samples.length), ee.samples.map((ee => Ze(ee.size)))])
      },
      Di = ee => ee.finalizedChunks.length > 0 && (0, Ue.bc)(ee.finalizedChunks).offset >= 2 ** 32 ? Ce("co64", 0, 0, [Ze(ee.finalizedChunks.length), ee.finalizedChunks.map((ee => De(ee.offset)))]) : Ce("stco", 0, 0, [Ze(ee.finalizedChunks.length), ee.finalizedChunks.map((ee => Ze(ee.offset)))]),
      Pi = ee => Ce("ctts", 1, 0, [Ze(ee.compositionTimeOffsetTable.length), ee.compositionTimeOffsetTable.map((ee => [Ze(ee.sampleCount), we(ee.sampleCompositionTimeOffset)]))]),
      Ai = ee => {
        let ie = 1 / 0,
          He = -1 / 0,
          ye = 1 / 0,
          be = -1 / 0;
        (0, Ue.I)(ee.compositionTimeOffsetTable.length > 0), (0, Ue.I)(ee.samples.length > 0);
        for (let Ke = 0; Ke < ee.compositionTimeOffsetTable.length; Ke++) {
          const ye = ee.compositionTimeOffsetTable[Ke];
          ie = Math.min(ie, ye.sampleCompositionTimeOffset), He = Math.max(He, ye.sampleCompositionTimeOffset)
        }
        for (let Ke = 0; Ke < ee.samples.length; Ke++) {
          const ie = ee.samples[Ke];
          ye = Math.min(ye, fH(ie.timestamp, ee.timescale)), be = Math.max(be, fH(ie.timestamp + ie.duration, ee.timescale))
        }
        const Me = Math.max(-ie, 0);
        return be >= 2 ** 31 ? null : Ce("cslg", 0, 0, [we(Me), we(ie), we(He), we(ye), we(be)])
      },
      Yi = ee => Le("mvex", void 0, ee.map(Vi)),
      Vi = ee => Ce("trex", 0, 0, [Ze(ee.track.id), Ze(1), Ze(0), Ze(0), Ze(0)]),
      ai = (ee, ie) => Le("moof", void 0, [ci(ee), ...ie.map(Li)]),
      ci = ee => Ce("mfhd", 0, 0, [Ze(ee)]),
      xi = ee => {
        let ie = 0,
          He = 0;
        const ye = "delta" === ee.type;
        return He |= +ye, ie |= ye ? 1 : 2, ie << 24 | He << 16
      },
      Li = ee => Le("traf", void 0, [Ci(ee), vi(ee), ui(ee)]),
      Ci = ee => {
        (0, Ue.I)(ee.currentChunk);
        let ie = 0;
        ie |= 8, ie |= 16, ie |= 32, ie |= 131072;
        const He = ee.currentChunk.samples[1] ?? ee.currentChunk.samples[0],
          ye = {
            duration: He.timescaleUnitsToNextSample,
            size: He.size,
            flags: xi(He)
          };
        return Ce("tfhd", 0, 131128, [Ze(ee.track.id), Ze(ye.duration), Ze(ye.size), Ze(ye.flags)])
      },
      vi = ee => ((0, Ue.I)(ee.currentChunk), Ce("tfdt", 1, 0, [De(fH(ee.currentChunk.startTimestamp, ee.timescale))])),
      ui = ee => {
        (0, Ue.I)(ee.currentChunk);
        const ie = ee.currentChunk.samples.map((ee => ee.timescaleUnitsToNextSample)),
          He = ee.currentChunk.samples.map((ee => ee.size)),
          ye = ee.currentChunk.samples.map(xi),
          be = ee.currentChunk.samples.map((ie => fH(ie.timestamp - ie.decodeTimestamp, ee.timescale))),
          Me = new Set(ie),
          Ke = new Set(He),
          Fe = new Set(ye),
          Je = new Set(be),
          oe = 2 === Fe.size && ye[0] !== ye[1],
          Re = Me.size > 1,
          ke = Ke.size > 1,
          qe = !oe && Fe.size > 1,
          fe = Je.size > 1 || [...Je].some((ee => 0 !== ee));
        let Te = 0;
        return Te |= 1, Te |= 4 * +oe, Te |= 256 * +Re, Te |= 512 * +ke, Te |= 1024 * +qe, Te |= 2048 * +fe, Ce("trun", 1, Te, [Ze(ee.currentChunk.samples.length), Ze(ee.currentChunk.offset - ee.currentChunk.moofOffset || 0), oe ? Ze(ye[0]) : [], ee.currentChunk.samples.map(((ee, Me) => [Re ? Ze(ie[Me]) : [], ke ? Ze(He[Me]) : [], qe ? Ze(ye[Me]) : [], fe ? we(be[Me]) : []]))])
      },
      mi = ee => Ce("tfra", 1, 0, [Ze(ee.track.id), Ze(63), Ze(ee.finalizedChunks.length), ee.finalizedChunks.map((ie => [De(fH(ie.samples[0].timestamp, ee.timescale)), De(ie.moofOffset), Ze(ie.trafIndex + 1), Ze(1), Ze(1)]))]),
      li = () => Ce("mfro", 0, 0, [Ze(0)]),
      Si = () => Le("vtte"),
      ni = (ee, ie, He, ye, be) => Le("vttc", void 0, [null !== be ? Le("vsid", [we(be)]) : null, null !== He ? Le("iden", [...Ue.hd.encode(He)]) : null, null !== ie ? Le("ctim", [...Ue.hd.encode((0, Xe.e)(ie))]) : null, null !== ye ? Le("sttg", [...Ue.hd.encode(ye)]) : null, Le("payl", [...Ue.hd.encode(ee)])]),
      ji = ee => Le("vtta", [...Ue.hd.encode(ee)]),
      si = ee => {
        const ie = [],
          He = ee.format._options.metadataFormat ?? "auto",
          ye = ee.output._metadataTags;
        if ("mdir" === He || "auto" === He && !ee.isQuickTime) {
          const ee = Qi(ye);
          ee && ie.push(ee)
        } else if ("mdta" === He) {
          const ee = eH(ye);
          ee && ie.push(ee)
        } else("udta" === He || "auto" === He && ee.isQuickTime) && Ii(ie, ee.output._metadataTags);
        return 0 === ie.length ? null : Le("udta", void 0, ie)
      },
      Ii = (ee, ie) => {
        for (const {
            key: He,
            value: ye
          }
          of(0, Ue._b)(ie)) switch (He) {
          case "title":
            ee.push(Ni("\xa9nam", ye));
            break;
          case "description":
            ee.push(Ni("\xa9des", ye));
            break;
          case "artist":
            ee.push(Ni("\xa9ART", ye));
            break;
          case "album":
            ee.push(Ni("\xa9alb", ye));
            break;
          case "albumArtist":
            ee.push(Ni("albr", ye));
            break;
          case "genre":
            ee.push(Ni("\xa9gen", ye));
            break;
          case "date":
            ee.push(Ni("\xa9day", ye.toISOString().slice(0, 10)));
            break;
          case "comment":
            ee.push(Ni("\xa9cmt", ye));
            break;
          case "lyrics":
            ee.push(Ni("\xa9lyr", ye));
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
            (0, Ue.G)(He)
        }
        if (ie.raw)
          for (const He in ie.raw) {
            const ye = ie.raw[He];
            null == ye || 4 !== He.length || ee.some((ee => ee.type === He)) || ("string" === typeof ye ? ee.push(Ni(He, ye)) : ye instanceof Uint8Array && ee.push(Le(He, Array.from(ye))))
          }
      },
      Ni = (ee, ie) => {
        const He = Ue.hd.encode(ie);
        return Le(ee, [de(He.length), de(FH("und")), Array.from(He)])
      },
      Gi = {
        "image/jpeg": 13,
        "image/png": 14,
        "image/bmp": 27
      },
      ri = (ee, ie) => {
        const He = [];
        for (const {
            key: ye,
            value: be
          }
          of(0, Ue._b)(ee)) switch (ye) {
          case "title":
            He.push({
              key: ie ? "title" : "\xa9nam",
              value: iH(be)
            });
            break;
          case "description":
            He.push({
              key: ie ? "description" : "\xa9des",
              value: iH(be)
            });
            break;
          case "artist":
            He.push({
              key: ie ? "artist" : "\xa9ART",
              value: iH(be)
            });
            break;
          case "album":
            He.push({
              key: ie ? "album" : "\xa9alb",
              value: iH(be)
            });
            break;
          case "albumArtist":
            He.push({
              key: ie ? "album_artist" : "aART",
              value: iH(be)
            });
            break;
          case "comment":
            He.push({
              key: ie ? "comment" : "\xa9cmt",
              value: iH(be)
            });
            break;
          case "genre":
            He.push({
              key: ie ? "genre" : "\xa9gen",
              value: iH(be)
            });
            break;
          case "beatsPerMinute":
            ie || He.push({
              key: "tmpo",
              value: Le("data", [Ze(21), Ze(0), de(be)])
            });
            break;
          case "lyrics":
            He.push({
              key: ie ? "lyrics" : "\xa9lyr",
              value: iH(be)
            });
            break;
          case "date":
            He.push({
              key: ie ? "date" : "\xa9day",
              value: iH(be.toISOString().slice(0, 10))
            });
            break;
          case "images":
            for (const ee of be) "coverFront" === ee.kind && He.push({
              key: "covr",
              value: Le("data", [Ze(Gi[ee.mimeType] ?? 0), Ze(0), Array.from(ee.data)])
            });
            break;
          case "trackNumber":
            if (ie) {
              const ie = void 0 !== ee.tracksTotal ? `${be}/${ee.tracksTotal}` : be.toString();
              He.push({
                key: "track",
                value: iH(ie)
              })
            } else He.push({
              key: "trkn",
              value: Le("data", [Ze(0), Ze(0), de(0), de(be), de(ee.tracksTotal ?? 0), de(0)])
            });
            break;
          case "discNumber":
            ie || He.push({
              key: "disc",
              value: Le("data", [Ze(0), Ze(0), de(0), de(be), de(ee.discsTotal ?? 0), de(0)])
            });
            break;
          case "tracksTotal":
          case "discsTotal":
          case "raw":
            break;
          default:
            (0, Ue.G)(ye)
        }
        if (ee.raw)
          for (const ye in ee.raw) {
            const be = ee.raw[ye];
            null == be || !ie && 4 !== ye.length || He.some((ee => ee.key === ye)) || ("string" === typeof be ? He.push({
              key: ye,
              value: iH(be)
            }) : be instanceof Uint8Array ? He.push({
              key: ye,
              value: Le("data", [Ze(0), Ze(0), Array.from(be)])
            }) : be instanceof qe.g && He.push({
              key: ye,
              value: Le("data", [Ze(Gi[be.mimeType] ?? 0), Ze(0), Array.from(be.data)])
            }))
          }
        return He
      },
      Qi = ee => {
        const ie = ri(ee, !1);
        return 0 === ie.length ? null : Ce("meta", 0, 0, void 0, [re(!1, "mdir", "", "appl"), Le("ilst", void 0, ie.map((ee => Le(ee.key, void 0, [ee.value]))))])
      },
      eH = ee => {
        const ie = ri(ee, !0);
        return 0 === ie.length ? null : Le("meta", void 0, [re(!1, "mdta", ""), Ce("keys", 0, 0, [Ze(ie.length)], ie.map((ee => Le("mdta", [...Ue.hd.encode(ee.key)])))), Le("ilst", void 0, ie.map(((ee, ie) => {
          const He = String.fromCharCode(...Ze(ie + 1));
          return Le(He, void 0, [ee.value])
        })))])
      },
      iH = ee => Le("data", [Ze(1), Ze(0), ...Ue.hd.encode(ee)]),
      HH = (ee, ie) => {
        switch (ee) {
          case "avc":
            return ie.startsWith("avc3") ? "avc3" : "avc1";
          case "hevc":
            return "hvc1";
          case "vp8":
            return "vp08";
          case "vp9":
            return "vp09";
          case "av1":
            return "av01";
          case "prores":
            return ie
        }
      },
      yH = {
        avc: ee => ee.info.decoderConfig && Le("avcC", [...(0, Ue.od)(ee.info.decoderConfig.description)]),
        hevc: ee => ee.info.decoderConfig && Le("hvcC", [...(0, Ue.od)(ee.info.decoderConfig.description)]),
        vp8: oi,
        vp9: oi,
        av1: ee => Le("av1C", (0, be.F)(ee.info.decoderConfig.codec)),
        prores: null
      },
      bH = (ee, ie, He) => {
        switch (ee) {
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
            return ie
        }
        if (He) switch (ee) {
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
        } else switch (ee) {
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
      MH = (ee, ie) => {
        switch (ee) {
          case "aac":
          case "mp3":
          case "vorbis":
            return ki;
          case "opus":
            return Xi;
          case "flac":
            return zi;
          case "ac3":
            return Ei;
          case "eac3":
            return gi;
          case "dts":
            return Oi
        }
        if (ie) switch (ee) {
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return qi
        } else switch (ee) {
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
            return Bi
        }
        return null
      },
      KH = {
        webvtt: "wvtt"
      },
      UH = {
        webvtt: ee => Le("vttC", [...Ue.hd.encode(ee.info.config.description)])
      },
      FH = ee => {
        (0, Ue.I)(3 === ee.length);
        let ie = 0;
        for (let He = 0; He < 3; He++) ie <<= 5, ie += ee.charCodeAt(He) - 96;
        return ie
      };
    var JH = He(40717),
      oH = He(40726);
    const RH = ee => {
        const ie = ee.filePos,
          He = oe(ee, 9),
          ye = new pe.e(He);
        if (4095 !== ye.readBits(12)) return null;
        ye.skipBits(1);
        if (0 !== ye.readBits(2)) return null;
        const be = ye.readBits(1),
          Me = ye.readBits(2) + 1,
          Ke = ye.readBits(4);
        if (15 === Ke) return null;
        ye.skipBits(1);
        const Ue = ye.readBits(3);
        if (0 === Ue) throw new Error("ADTS frames with channel configuration 0 are not supported.");
        ye.skipBits(1), ye.skipBits(1), ye.skipBits(1), ye.skipBits(1);
        const Fe = ye.readBits(13);
        ye.skipBits(11);
        const Je = ye.readBits(2) + 1;
        if (1 !== Je) throw new Error("ADTS frames with more than one AAC frame are not supported.");
        let Re = null;
        return 1 === be ? ee.filePos -= 2 : Re = ye.readBits(16), {
          objectType: Me,
          samplingFrequencyIndex: Ke,
          channelConfiguration: Ue,
          frameLength: Fe,
          numberOfAacFrames: Je,
          crcCheck: Re,
          startPos: ie
        }
      },
      kH = 57600,
      qH = ee => {
        const ie = {},
          He = ee.track;
        return void 0 !== He.metadata.name && (ie.name = He.metadata.name), ie
      },
      fH = function(ee, ie) {
        const He = ee * ie;
        return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Math.round(He) : He
      },
      TH = ee => {
        if (0 === ee.samples.length) return 0;
        let ie = 1 / 0,
          He = -1 / 0;
        for (let ye = 0; ye < ee.samples.length; ye++) {
          const be = ee.samples[ye];
          be.timestamp < ie && (ie = be.timestamp), be.timestamp + be.duration > He && (He = be.timestamp + be.duration)
        }
        return ie === 1 / 0 ? 0 : He - ie
      };
    class pH extends fe {
      constructor(ee, ie) {
        super(ee), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new oH.d, this.auxWriter = new JH.c(this.auxTarget, !1), this.auxBoxWriter = new Be(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = (0, Ue.zc)(), this.creationTime = Math.floor(Date.now() / 1e3) + 2082844800, this.finalizedChunks = [], this.wroteFragmentedHeader = !1, this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = ie, this.formatOptions = {
          ...ie._options
        }, this.isQuickTime = ie instanceof vH, this.isCmaf = ie instanceof CH, this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (ie instanceof CH ? 1 / 0 : 1), this.auxWriter.start()
      }
      async start() {
        const ee = await this.mutex.acquire();
        if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((ee => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : ee instanceof oH.d)), this.boxWriter = new Be(this.writer), this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof oH.d && "in-memory"), this.isFragmented = "fragmented" === this.fastStart), this.isCmaf) {
          if (!this.output._hasInitTarget()) throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
          const ee = await this.output._getInitTarget(),
            ie = new JH.c(ee, !0);
          ie.start(), this.initWriter = ie, this.initBoxWriter = new Be(ie)
        }
        const ie = this.output.tracks.some((ee => ee.isVideoTrack() && "avc" === ee.source._codec));
        {
          const ee = this.initBoxWriter ?? this.boxWriter;
          if ((0, Ue.I)(ee), this.formatOptions.onFtyp && ee.writer.startTrackingWrites(), ee.writeBox((ee => {
              const ie = 512;
              return ee.isQuickTime ? Le("ftyp", [ce("qt  "), Ze(ie), ce("qt  ")]) : ee.fragmented ? ee.cmaf ? Le("ftyp", [ce("iso5"), Ze(ie), ce("iso5"), ce("iso6"), ce("mp41"), ce("cmfc"), ce("dash")]) : Le("ftyp", [ce("iso5"), Ze(ie), ce("iso5"), ce("iso6"), ce("mp41")]) : Le("ftyp", [ce("isom"), Ze(ie), ce("isom"), ee.holdsAvc ? ce("avc1") : [], ce("mp41")])
            })({
              isQuickTime: this.isQuickTime,
              holdsAvc: ie,
              fragmented: this.isFragmented,
              cmaf: this.isCmaf
            })), this.formatOptions.onFtyp) {
            const {
              data: ie,
              start: He
            } = ee.writer.stopTrackingWrites();
            this.formatOptions.onFtyp(ie, He)
          }
          this.ftypSize = ee.writer.getPos(), this.isCmaf && await this.initWriter.flush()
        }
        if ("in-memory" === this.fastStart);
        else if ("reserve" === this.fastStart) {
          for (const He of this.output.tracks)
            if (void 0 === He.metadata.maximumPacketCount) throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")
        } else this.isFragmented || ((0, Ue.I)(this.writer), (0, Ue.I)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = me(!0), this.boxWriter.writeBox(this.mdat));
        await (this.writer?.flush());
        for (const He of this.output.tracks) He.isVideoTrack() && He.metadata.decoderConfig ? this.getVideoTrackData(He, He.metadata.primingPacket ?? null, {
          decoderConfig: He.metadata.decoderConfig
        }) : He.isAudioTrack() && He.metadata.decoderConfig && this.getAudioTrackData(He, He.metadata.primingPacket ?? null, {
          decoderConfig: He.metadata.decoderConfig
        });
        ee()
      }
      allTracksAreKnown() {
        for (const ee of this.output.tracks)
          if (!ee.source._closed && !this.trackDatas.some((ie => ie.track === ee))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const ee = this.trackDatas.map((ee => {
          if ("video" === ee.type) return ee.info.decoderConfig.codec;
          if ("audio" === ee.type) return ee.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [ee.track.source._codec]
        }));
        return (ee => {
          let ie = (ee.hasVideo ? "video/" : ee.hasAudio ? "audio/" : "application/") + (ee.isQuickTime ? "quicktime" : "mp4");
          ee.codecStrings.length > 0 && (ie += `; codecs="${[...new Set(ee.codecStrings)].join(", ")}"`);
          return ie
        })({
          isQuickTime: this.isQuickTime,
          hasVideo: this.trackDatas.some((ee => "video" === ee.type)),
          hasAudio: this.trackDatas.some((ee => "audio" === ee.type)),
          codecStrings: ee
        })
      }
      getVideoTrackData(ee, ie, He) {
        const ye = this.trackDatas.find((ie => ie.track === ee));
        if (ye) return ye;
        (0, be.Z)(He, ee.source._codec), (0, Ue.I)(He), (0, Ue.I)(He.decoderConfig);
        const Me = {
          ...He.decoderConfig
        };
        (0, Ue.I)(void 0 !== Me.codedWidth), (0, Ue.I)(void 0 !== Me.codedHeight);
        let Ke = !1;
        if ("avc" !== ee.source._codec || Me.description) {
          if ("hevc" === ee.source._codec && !Me.description) {
            if (!ie) throw new Error("No HEVC description provided; you must therefore provide a priming packet.");
            const ee = (0, Te.W)(ie.data);
            if (!ee) throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
            Me.description = (0, Te.Eb)(ee), Ke = !0
          }
        } else {
          if (!ie) throw new Error("No AVC description provided; you must therefore provide a priming packet.");
          const ee = (0, Te.R)(ie.data);
          if (!ee) throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
          Me.description = (0, Te.Db)(ee), Ke = !0
        }
        const Fe = (0, Ue.eb)(1 / (ee.metadata.frameRate ?? kH), 1e6).den,
          Je = Me.displayAspectWidth,
          oe = Me.displayAspectHeight,
          Re = void 0 === Je || void 0 === oe ? {
            num: 1,
            den: 1
          } : (0, Ue.bd)({
            num: Je * Me.codedHeight,
            den: oe * Me.codedWidth
          }),
          ke = "ap4h" === Me.codec || "ap4x" === Me.codec,
          qe = {
            muxer: this,
            track: ee,
            type: "video",
            info: {
              width: Me.codedWidth,
              height: Me.codedHeight,
              pixelAspectRatio: Re,
              decoderConfig: Me,
              requiresAnnexBTransformation: Ke,
              hasAlphaChannel: ke
            },
            timescale: Fe,
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
            avgBitrate: ee.source._nominalBitrate ?? ee.metadata.averageBitrate ?? 0,
            maxBitrate: ee.source._nominalBitrate ?? ee.metadata.bitrate ?? 0
          };
        return this.trackDatas.push(qe), this.trackDatas.sort(((ee, ie) => ee.track.id - ie.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), qe
      }
      getAudioTrackData(ee, ie, He) {
        const Me = this.trackDatas.find((ie => ie.track === ee));
        if (Me) return Me;
        (0, be.U)(He, ee.source._codec), (0, Ue.I)(He), (0, Ue.I)(He.decoderConfig);
        const Ke = {
          ...He.decoderConfig
        };
        let Je = !1;
        if ("aac" === ee.source._codec && !Ke.description) {
          if (!ie) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const ee = RH(Fe.tempFromBytes(ie.data));
          if (!ee) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const He = ye.e[ee.samplingFrequencyIndex],
            be = ye.d[ee.channelConfiguration];
          if (void 0 === He || void 0 === be) throw new Error("Invalid ADTS frame header.");
          Ke.description = (0, ye.h)({
            objectType: ee.objectType,
            outputSampleRate: He,
            outputNumberOfChannels: be
          }), Je = !0
        }
        if (!ie) {
          if ("ac3" === ee.source._codec || "eac3" === ee.source._codec) throw new Error("AC-3/E-AC-3 require a priming packet.");
          if ("dts" === ee.source._codec) throw new Error("DTS requires a priming packet.")
        }
        const oe = {
          muxer: this,
          track: ee,
          type: "audio",
          info: {
            numberOfChannels: He.decoderConfig.numberOfChannels,
            sampleRate: He.decoderConfig.sampleRate,
            decoderConfig: Ke,
            requiresPcmTransformation: !this.isFragmented && be.n.includes(ee.source._codec),
            expectedNextPcmPacketTimestamp: null,
            requiresAdtsStripping: Je,
            primingPacket: ie
          },
          timescale: Ke.sampleRate,
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
          avgBitrate: ee.source._nominalBitrate ?? ee.metadata.averageBitrate ?? 0,
          maxBitrate: ee.source._nominalBitrate ?? ee.metadata.bitrate ?? 0
        };
        return this.trackDatas.push(oe), this.trackDatas.sort(((ee, ie) => ee.track.id - ie.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), oe
      }
      getSubtitleTrackData(ee, ie) {
        const He = this.trackDatas.find((ie => ie.track === ee));
        if (He) return He;
        (0, be.W)(ie), (0, Ue.I)(ie), (0, Ue.I)(ie.config);
        const ye = {
          muxer: this,
          track: ee,
          type: "subtitle",
          info: {
            config: ie.config
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
          avgBitrate: ee.source._nominalBitrate ?? ee.metadata.averageBitrate ?? 0,
          maxBitrate: ee.source._nominalBitrate ?? ee.metadata.bitrate ?? 0,
          lastCueEndTimestamp: null,
          cueQueue: [],
          nextSourceId: 0,
          cueToSourceId: new WeakMap
        };
        return this.trackDatas.push(ye), this.trackDatas.sort(((ee, ie) => ee.track.id - ie.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), ye
      }
      async addEncodedVideoPacket(ee, ie, He) {
        const ye = await this.mutex.acquire();
        try {
          const ye = this.getVideoTrackData(ee, ie, He);
          let be = ie.data;
          if (ye.info.requiresAnnexBTransformation) {
            const ee = [...(0, Te.gb)(be)].map((ee => be.subarray(ee.offset, ee.offset + ee.length)));
            if (0 === ee.length) throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
            be = (0, Te.D)(ee, 4)
          }
          this.validateTimestamp(ye.track, ie.timestamp, "key" === ie.type);
          const Me = this.createSampleForTrack(ye, be, ie.timestamp, ie.duration, ie.type);
          await this.registerSample(ye, Me)
        } finally {
          ye()
        }
      }
      async addEncodedAudioPacket(ee, ie, He) {
        const ye = await this.mutex.acquire();
        try {
          const ye = this.getAudioTrackData(ee, ie, He);
          let Me = ie.data;
          if (ye.info.requiresAdtsStripping) {
            const ee = RH(Fe.tempFromBytes(Me));
            if (!ee) throw new Error("Expected ADTS frame, didn't get one.");
            const ie = null === ee.crcCheck ? 7 : 9;
            Me = Me.subarray(ie)
          }
          this.validateTimestamp(ye.track, ie.timestamp, "key" === ie.type);
          let Ke = ie.timestamp,
            Ue = ie.duration;
          if (ye.info.requiresPcmTransformation) {
            const ee = (0, be.R)(ye.info.decoderConfig.codec).sampleSize * ye.info.numberOfChannels;
            if (Ue = Me.byteLength / ee / ye.info.sampleRate, null !== ye.info.expectedNextPcmPacketTimestamp) {
              const ee = Ke - ye.info.expectedNextPcmPacketTimestamp;
              if (ee < .01) Ke = ye.info.expectedNextPcmPacketTimestamp;
              else {
                const ie = await this.padWithSilence(ye, ye.info.expectedNextPcmPacketTimestamp, ee);
                Ke = ye.info.expectedNextPcmPacketTimestamp + ie
              }
            }
            ye.info.expectedNextPcmPacketTimestamp = Ke + Ue
          }
          const Je = this.createSampleForTrack(ye, Me, Ke, Ue, ie.type);
          await this.registerSample(ye, Je)
        } finally {
          ye()
        }
      }
      async padWithSilence(ee, ie, He) {
        const ye = fH(He, ee.timescale);
        if (He = ye / ee.timescale, ye > 0) {
          const {
            sampleSize: Me,
            silentValue: Ke
          } = (0, be.R)(ee.info.decoderConfig.codec), Ue = ye * ee.info.numberOfChannels, Fe = new Uint8Array(Me * Ue).fill(Ke), Je = this.createSampleForTrack(ee, new Uint8Array(Fe.buffer), ie, He, "key");
          await this.registerSample(ee, Je)
        }
        return He
      }
      async addSubtitleCue(ee, ie, He) {
        const ye = await this.mutex.acquire();
        try {
          const ye = this.getSubtitleTrackData(ee, He);
          this.validateTimestamp(ye.track, ie.timestamp, !0), "webvtt" === ee.source._codec && (ye.cueQueue.push(ie), await this.processWebVTTCues(ye, ie.timestamp))
        } finally {
          ye()
        }
      }
      async processWebVTTCues(ee, ie) {
        for (; ee.cueQueue.length > 0;) {
          ee.lastCueEndTimestamp ??= Math.min(0, ee.cueQueue[0].timestamp);
          const He = new Set([]);
          for (const Je of ee.cueQueue)(0, Ue.I)(Je.timestamp <= ie), (0, Ue.I)(ee.lastCueEndTimestamp <= Je.timestamp + Je.duration), He.add(Math.max(Je.timestamp, ee.lastCueEndTimestamp)), He.add(Je.timestamp + Je.duration);
          const ye = [...He].sort(((ee, ie) => ee - ie)),
            be = ye[0],
            Me = ye[1] ?? be;
          if (ie < Me) break;
          if (ee.lastCueEndTimestamp < be) {
            this.auxWriter.seek(0);
            const ie = Si();
            this.auxBoxWriter.writeBox(ie);
            const He = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
              ye = this.createSampleForTrack(ee, He, ee.lastCueEndTimestamp, be - ee.lastCueEndTimestamp, "key");
            await this.registerSample(ee, ye), ee.lastCueEndTimestamp = be
          }
          this.auxWriter.seek(0);
          for (let ie = 0; ie < ee.cueQueue.length; ie++) {
            const He = ee.cueQueue[ie];
            if (He.timestamp >= Me) break;
            Xe.g.lastIndex = 0;
            const ye = Xe.g.test(He.text),
              Ke = He.timestamp + He.duration;
            let Ue = ee.cueToSourceId.get(He);
            if (void 0 === Ue && Me < Ke && (Ue = ee.nextSourceId++, ee.cueToSourceId.set(He, Ue)), He.notes) {
              const ee = ji(He.notes);
              this.auxBoxWriter.writeBox(ee)
            }
            const Fe = ni(He.text, ye ? be : null, He.identifier ?? null, He.settings ?? null, Ue ?? null);
            this.auxBoxWriter.writeBox(Fe), Ke === Me && ee.cueQueue.splice(ie--, 1)
          }
          const Ke = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
            Fe = this.createSampleForTrack(ee, Ke, be, Me - be, "key");
          await this.registerSample(ee, Fe), ee.lastCueEndTimestamp = Me
        }
      }
      createSampleForTrack(ee, ie, He, ye, be) {
        return {
          timestamp: He,
          decodeTimestamp: He,
          duration: ye,
          data: ie,
          size: ie.byteLength,
          type: be,
          timescaleUnitsToNextSample: fH(ye, ee.timescale)
        }
      }
      processTimestamps(ee, ie) {
        if (0 === ee.timestampProcessingQueue.length) return;
        if ("audio" === ee.type && ee.info.requiresPcmTransformation) {
          (0, Ue.I)(!this.isFragmented), ee.startTimestampOffset ??= ee.timestampProcessingQueue[0].timestamp;
          let ie = 0;
          for (let He = 0; He < ee.timestampProcessingQueue.length; He++) {
            const ye = ee.timestampProcessingQueue[He];
            ie += fH(ye.duration, ee.timescale)
          }
          if (0 === ee.timeToSampleTable.length) ee.timeToSampleTable.push({
            sampleCount: ie,
            sampleDelta: 1
          });
          else {
            (0, Ue.bc)(ee.timeToSampleTable).sampleCount += ie
          }
          return void(ee.timestampProcessingQueue.length = 0)
        }
        const He = ee.timestampProcessingQueue.map((ee => ee.timestamp)).sort(((ee, ie) => ee - ie));
        this.isFragmented ? ee.startTimestampOffset ??= Math.min(He[0], 0) : ee.startTimestampOffset ??= He[0];
        for (let ye = 0; ye < ee.timestampProcessingQueue.length; ye++) {
          const ie = ee.timestampProcessingQueue[ye];
          ie.decodeTimestamp = He[ye];
          const be = fH(ie.timestamp - ie.decodeTimestamp, ee.timescale),
            Me = fH(ie.duration, ee.timescale);
          if (null !== ee.lastTimescaleUnits) {
            (0, Ue.I)(ee.lastSample);
            const He = fH(ie.decodeTimestamp, ee.timescale, !1),
              ye = Math.round(He - ee.lastTimescaleUnits);
            if ((0, Ue.I)(ye >= 0), ee.lastTimescaleUnits += ye, ee.lastSample.timescaleUnitsToNextSample = ye, !this.isFragmented) {
              let ie = (0, Ue.bc)(ee.timeToSampleTable);
              if ((0, Ue.I)(ie), 1 === ie.sampleCount) {
                ie.sampleDelta = ye;
                const He = ee.timeToSampleTable[ee.timeToSampleTable.length - 2];
                He && He.sampleDelta === ye && (He.sampleCount++, ee.timeToSampleTable.pop(), ie = He)
              } else ie.sampleDelta !== ye && (ie.sampleCount--, ee.timeToSampleTable.push(ie = {
                sampleCount: 1,
                sampleDelta: ye
              }));
              ie.sampleDelta === Me ? ie.sampleCount++ : ee.timeToSampleTable.push({
                sampleCount: 1,
                sampleDelta: Me
              });
              const He = (0, Ue.bc)(ee.compositionTimeOffsetTable);
              (0, Ue.I)(He), He.sampleCompositionTimeOffset === be ? He.sampleCount++ : ee.compositionTimeOffsetTable.push({
                sampleCount: 1,
                sampleCompositionTimeOffset: be
              })
            }
          } else ee.lastTimescaleUnits = fH(ie.decodeTimestamp, ee.timescale, !1), this.isFragmented || (ee.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: Me
          }), ee.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: be
          }));
          ee.lastSample = ie
        }
        if (ee.timestampProcessingQueue.length = 0, (0, Ue.I)(ee.lastSample), (0, Ue.I)(null !== ee.lastTimescaleUnits), void 0 !== ie && 0 === ee.lastSample.timescaleUnitsToNextSample) {
          (0, Ue.I)("key" === ie.type);
          const He = fH(ie.timestamp, ee.timescale, !1),
            ye = Math.round(He - ee.lastTimescaleUnits);
          ee.lastSample.timescaleUnitsToNextSample = ye
        }
      }
      async registerSample(ee, ie) {
        "key" === ie.type && this.processTimestamps(ee, ie), ee.timestampProcessingQueue.push(ie), this.isFragmented ? (ee.sampleQueue.push(ie), await this.interleaveSamples()) : "reserve" === this.fastStart ? await this.registerSampleFastStartReserve(ee, ie) : await this.addSampleToTrack(ee, ie)
      }
      async addSampleToTrack(ee, ie) {
        if (!this.isFragmented && (ee.samples.push(ie), "reserve" === this.fastStart)) {
          const ie = ee.track.metadata.maximumPacketCount;
          if ((0, Ue.I)(void 0 !== ie), ee.samples.length > ie) throw new Error(`Track #${ee.track.id} has already reached the maximum packet count (${ie}). Either add less packets or increase the maximum packet count.`)
        }
        let He = !1;
        if (ee.currentChunk) {
          ee.currentChunk.startTimestamp = Math.min(ee.currentChunk.startTimestamp, ie.timestamp);
          const ye = ie.timestamp - ee.currentChunk.startTimestamp;
          if (this.isFragmented) {
            const be = this.trackDatas.every((He => {
              if (ee === He) return "key" === ie.type;
              const ye = He.sampleQueue[0];
              return ye ? "key" === ye.type : He.closed
            }));
            ye >= this.minimumFragmentDuration && be && ie.timestamp > this.maxWrittenTimestamp && (He = !0, await this.finalizeFragment())
          } else He = ye >= .5
        } else He = !0;
        He && (ee.currentChunk && await this.finalizeCurrentChunk(ee), ee.currentChunk = {
          startTimestamp: ie.timestamp,
          samples: [],
          offset: null,
          moofOffset: null,
          trafIndex: null
        }), (0, Ue.I)(ee.currentChunk), ee.currentChunk.samples.push(ie), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, ie.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, ie.timestamp + ie.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, ie.timestamp))
      }
      async finalizeCurrentChunk(ee) {
        if ((0, Ue.I)(!this.isFragmented), (0, Ue.I)(this.writer), !ee.currentChunk) return;
        ee.finalizedChunks.push(ee.currentChunk), this.finalizedChunks.push(ee.currentChunk);
        let ie = ee.currentChunk.samples.length;
        if ("audio" === ee.type && ee.info.requiresPcmTransformation && (ie = ee.currentChunk.samples.reduce(((ie, He) => ie + fH(He.duration, ee.timescale)), 0)), 0 !== ee.compactlyCodedChunkTable.length && (0, Ue.bc)(ee.compactlyCodedChunkTable).samplesPerChunk === ie || ee.compactlyCodedChunkTable.push({
            firstChunk: ee.finalizedChunks.length,
            samplesPerChunk: ie
          }), "in-memory" !== this.fastStart) {
          ee.currentChunk.offset = this.writer.getPos();
          for (const ie of ee.currentChunk.samples)(0, Ue.I)(ie.data), this.writer.write(ie.data), ie.data = null;
          await this.writer.flush()
        } else ee.currentChunk.offset = 0
      }
      async interleaveSamples() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if ((0, Ue.I)(this.isFragmented), ee || this.allTracksAreKnown()) ee: for (;;) {
          let ie = null,
            He = 1 / 0;
          for (const be of this.trackDatas) {
            if (!ee && 0 === be.sampleQueue.length && !be.closed) break ee;
            be.sampleQueue.length > 0 && be.sampleQueue[0].timestamp < He && (ie = be, He = be.sampleQueue[0].timestamp)
          }
          if (!ie) break;
          const ye = ie.sampleQueue.shift();
          await this.addSampleToTrack(ie, ye)
        }
      }
      async finalizeFragment() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isCmaf;
        if ((0, Ue.I)(this.isFragmented), !this.wroteFragmentedHeader) {
          this.wroteFragmentedHeader = !0;
          const ee = this.initBoxWriter ?? this.boxWriter;
          (0, Ue.I)(ee), this.formatOptions.onMoov && ee.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
          const ie = le(this);
          if (ee.writeBox(ie), this.formatOptions.onMoov) {
            const {
              data: ie,
              start: He
            } = ee.writer.stopTrackingWrites();
            this.formatOptions.onMoov(ie, He)
          }
          if (this.isCmaf) {
            (0, Ue.I)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new Be(this.writer);
            const ee = this.boxWriter.measureBox(ve()),
              ie = this.boxWriter.measureBox(ue(this, 0));
            this.segmentHeaderSize = ee + ie, this.writer.seek(this.segmentHeaderSize)
          }
        }(0, Ue.I)(this.writer), (0, Ue.I)(this.boxWriter);
        const ie = this.trackDatas.filter((ee => ee.currentChunk));
        if (0 === ie.length) return void(ee && await this.writer.flush());
        const He = this.nextFragmentNumber++,
          ye = ai(He, ie),
          be = this.writer.getPos(),
          Me = be + this.boxWriter.measureBox(ye);
        let Ke = Me + 8,
          Fe = 1 / 0;
        for (let qe = 0; qe < ie.length; qe++) {
          const ee = ie[qe];
          (0, Ue.I)(ee.currentChunk), (0, Ue.I)(null !== ee.startTimestampOffset), ee.currentChunk.offset = Ke, ee.currentChunk.moofOffset = be, ee.currentChunk.trafIndex = qe, ee.currentChunk.startTimestamp -= ee.startTimestampOffset;
          for (const ie of ee.currentChunk.samples) Ke += ie.size, ie.timestamp -= ee.startTimestampOffset, ie.decodeTimestamp -= ee.startTimestampOffset;
          Fe = Math.min(Fe, ee.currentChunk.startTimestamp)
        }
        const Je = Ke - Me,
          oe = Je >= 2 ** 32;
        if (oe)
          for (const Ue of ie) Ue.currentChunk.offset += 8;
        this.formatOptions.onMoof && this.writer.startTrackingWrites();
        const Re = ai(He, ie);
        if (this.boxWriter.writeBox(Re), this.formatOptions.onMoof) {
          const {
            data: ee,
            start: ie
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMoof(ee, ie, Fe)
        }(0, Ue.I)(this.writer.getPos() === Me), this.formatOptions.onMdat && this.writer.startTrackingWrites();
        const ke = me(oe);
        ke.size = Je, this.boxWriter.writeBox(ke), this.writer.seek(Me + (oe ? 16 : 8));
        for (const Ue of ie)
          for (const ee of Ue.currentChunk.samples) this.writer.write(ee.data), ee.data = null;
        if (this.formatOptions.onMdat) {
          const {
            data: ee,
            start: ie
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMdat(ee, ie)
        }
        for (const Ue of ie) Ue.finalizedChunks.push(Ue.currentChunk), this.finalizedChunks.push(Ue.currentChunk), Ue.currentChunk = null;
        ee && await this.writer.flush()
      }
      async registerSampleFastStartReserve(ee, ie) {
        this.allTracksAreKnown() ? (this.mdat || await this.createFastStartReserveMdat(), await this.addSampleToTrack(ee, ie)) : ee.sampleQueue.push(ie)
      }
      async createFastStartReserveMdat() {
        (0, Ue.I)(this.writer), (0, Ue.I)(this.boxWriter), this.ensureOneEnabledTrack();
        const ee = le(this),
          ie = this.boxWriter.measureBox(ee) + this.computeSampleTableSizeUpperBound() + 4096;
        (0, Ue.I)(null !== this.ftypSize), this.writer.seek(this.ftypSize + ie), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = me(!0), this.boxWriter.writeBox(this.mdat);
        for (const He of this.trackDatas) {
          for (const ee of He.sampleQueue) await this.addSampleToTrack(He, ee);
          He.sampleQueue.length = 0
        }
      }
      computeSampleTableSizeUpperBound() {
        (0, Ue.I)("reserve" === this.fastStart);
        let ee = 0;
        for (const ie of this.trackDatas) {
          const He = ie.track.metadata.maximumPacketCount;
          (0, Ue.I)(void 0 !== He), ee += 8 * Math.ceil(2 / 3 * He), ee += 4 * He, ee += 8 * Math.ceil(2 / 3 * He), ee += 12 * Math.ceil(2 / 3 * He), ee += 4 * He, ee += 8 * He
        }
        return ee
      }
      async onTrackClose(ee) {
        const ie = await this.mutex.acquire(),
          He = this.trackDatas.find((ie => ie.track === ee));
        He && (He.closed = !0, "subtitle" === He.type && "webvtt" === ee.source._codec && await this.processWebVTTCues(He, 1 / 0), this.processTimestamps(He)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), ie()
      }
      ensureOneEnabledTrack() {
        for (const ee of ["video", "audio", "subtitle"]) {
          const ie = this.trackDatas.filter((ie => ie.type === ee));
          if (0 === ie.length) continue;
          if (!ie.some((ee => !1 !== ee.track.metadata.disposition?.default))) {
            const ee = ie[0];
            ee.track.metadata.disposition = {
              ...ee.track.metadata.disposition,
              default: !0
            }
          }
        }
      }
      async forceFragmentFinalization() {
        (0, Ue.I)(this.isFragmented);
        const ee = await this.mutex.acquire();
        try {
          for (const ee of this.trackDatas) "subtitle" === ee.type && "webvtt" === ee.track.source._codec && await this.processWebVTTCues(ee, 1 / 0), this.processTimestamps(ee);
          await this.interleaveSamples(!0), await this.finalizeFragment()
        } finally {
          ee()
        }
      }
      async finalize() {
        const ee = await this.mutex.acquire();
        this.allTracksKnown.resolve(), this.ensureOneEnabledTrack(), this.mdat || "reserve" !== this.fastStart || await this.createFastStartReserveMdat();
        for (const He of this.trackDatas) He.closed = !0, "subtitle" === He.type && "webvtt" === He.track.source._codec && await this.processWebVTTCues(He, 1 / 0), this.processTimestamps(He);
        if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
        else
          for (const He of this.trackDatas) {
            await this.finalizeCurrentChunk(He);
            const ee = TH(He);
            if (ee > 0) {
              let ie = 0;
              for (const ee of He.samples) ie += ee.size;
              He.avgBitrate = Math.round(8 * ie / ee)
            } else He.avgBitrate = 0;
            let ie = 0,
              ye = 0,
              be = 0;
            for (let Me = 0; Me < He.samples.length; Me++) {
              const ee = He.samples[Me];
              for (ye += ee.size; ee.decodeTimestamp - He.samples[ie].decodeTimestamp >= 1;) ye -= He.samples[ie].size, ie++;
              be = Math.max(be, ye)
            }
            if (He.maxBitrate = 8 * be, null !== He.startTimestampOffset)
              for (let Me = 0; Me < He.samples.length; Me++) {
                const ee = He.samples[Me];
                ee.timestamp -= He.startTimestampOffset, ee.decodeTimestamp -= He.startTimestampOffset
              }
          }
        if ((0, Ue.I)(this.writer), (0, Ue.I)(this.boxWriter), "in-memory" === this.fastStart) {
          let ee;
          this.mdat = me(!1);
          for (let He = 0; He < 2; He++) {
            const ie = le(this),
              He = this.boxWriter.measureBox(ie);
            ee = this.boxWriter.measureBox(this.mdat);
            let ye = this.writer.getPos() + He + ee;
            for (const be of this.finalizedChunks) {
              be.offset = ye;
              for (const {
                  data: ie
                }
                of be.samples)(0, Ue.I)(ie), ye += ie.byteLength, ee += ie.byteLength
            }
            if (ye < 2 ** 32) break;
            ee >= 2 ** 32 && (this.mdat.largeSize = !0)
          }
          this.formatOptions.onMoov && this.writer.startTrackingWrites();
          const ie = le(this);
          if (this.boxWriter.writeBox(ie), this.formatOptions.onMoov) {
            const {
              data: ee,
              start: ie
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(ee, ie)
          }
          this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat.size = ee, this.boxWriter.writeBox(this.mdat);
          for (const He of this.finalizedChunks)
            for (const ee of He.samples)(0, Ue.I)(ee.data), this.writer.write(ee.data), ee.data = null;
          if (this.formatOptions.onMdat) {
            const {
              data: ee,
              start: ie
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(ee, ie)
          }
        } else if (this.isFragmented)
          if (this.isCmaf) {
            const ee = null !== this.segmentHeaderSize ? this.writer.getPos() - this.segmentHeaderSize : 0;
            this.writer.seek(0), this.boxWriter.writeBox(ve()), this.boxWriter.writeBox(ue(this, ee))
          } else {
            const ee = this.writer.getPos(),
              He = (ie = this.trackDatas, Le("mfra", void 0, [...ie.map(mi), li()]));
            this.boxWriter.writeBox(He);
            const ye = this.writer.getPos() - ee;
            this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(ye)
          }
        else {
          (0, Ue.I)(this.mdat);
          const ee = this.boxWriter.offsets.get(this.mdat);
          (0, Ue.I)(void 0 !== ee);
          const ie = this.writer.getPos() - ee;
          if (this.mdat.size = ie, this.mdat.largeSize = ie >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.formatOptions.onMdat) {
            const {
              data: ee,
              start: ie
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(ee, ie)
          }
          const He = le(this);
          if ("reserve" === this.fastStart) {
            (0, Ue.I)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(He);
            const ee = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
            this.boxWriter.writeBox({
              type: "free",
              size: ee
            })
          } else this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(He);
          if (this.formatOptions.onMoov) {
            const {
              data: ee,
              start: ie
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(ee, ie)
          }
        }
        var ie;
        ee()
      }
    }
    class XH {
      constructor(ee) {
        this.value = ee
      }
    }
    class zH {
      constructor(ee) {
        this.value = ee
      }
    }
    class BH {
      constructor(ee) {
        this.value = ee
      }
    }
    class EH {
      constructor(ee) {
        this.value = ee
      }
    }
    var gH;
    ! function(ee) {
      ee[ee.EBML = 440786851] = "EBML", ee[ee.EBMLVersion = 17030] = "EBMLVersion", ee[ee.EBMLReadVersion = 17143] = "EBMLReadVersion", ee[ee.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", ee[ee.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", ee[ee.DocType = 17026] = "DocType", ee[ee.DocTypeVersion = 17031] = "DocTypeVersion", ee[ee.DocTypeReadVersion = 17029] = "DocTypeReadVersion", ee[ee.Void = 236] = "Void", ee[ee.Segment = 408125543] = "Segment", ee[ee.SeekHead = 290298740] = "SeekHead", ee[ee.Seek = 19899] = "Seek", ee[ee.SeekID = 21419] = "SeekID", ee[ee.SeekPosition = 21420] = "SeekPosition", ee[ee.Duration = 17545] = "Duration", ee[ee.Info = 357149030] = "Info", ee[ee.TimestampScale = 2807729] = "TimestampScale", ee[ee.MuxingApp = 19840] = "MuxingApp", ee[ee.WritingApp = 22337] = "WritingApp", ee[ee.Tracks = 374648427] = "Tracks", ee[ee.TrackEntry = 174] = "TrackEntry", ee[ee.TrackNumber = 215] = "TrackNumber", ee[ee.TrackUID = 29637] = "TrackUID", ee[ee.TrackType = 131] = "TrackType", ee[ee.FlagEnabled = 185] = "FlagEnabled", ee[ee.FlagDefault = 136] = "FlagDefault", ee[ee.FlagForced = 21930] = "FlagForced", ee[ee.FlagOriginal = 21934] = "FlagOriginal", ee[ee.FlagHearingImpaired = 21931] = "FlagHearingImpaired", ee[ee.FlagVisualImpaired = 21932] = "FlagVisualImpaired", ee[ee.FlagCommentary = 21935] = "FlagCommentary", ee[ee.FlagLacing = 156] = "FlagLacing", ee[ee.Name = 21358] = "Name", ee[ee.Language = 2274716] = "Language", ee[ee.LanguageBCP47 = 2274717] = "LanguageBCP47", ee[ee.CodecID = 134] = "CodecID", ee[ee.CodecPrivate = 25506] = "CodecPrivate", ee[ee.CodecDelay = 22186] = "CodecDelay", ee[ee.SeekPreRoll = 22203] = "SeekPreRoll", ee[ee.DefaultDuration = 2352003] = "DefaultDuration", ee[ee.Video = 224] = "Video", ee[ee.PixelWidth = 176] = "PixelWidth", ee[ee.PixelHeight = 186] = "PixelHeight", ee[ee.DisplayWidth = 21680] = "DisplayWidth", ee[ee.DisplayHeight = 21690] = "DisplayHeight", ee[ee.DisplayUnit = 21682] = "DisplayUnit", ee[ee.AlphaMode = 21440] = "AlphaMode", ee[ee.Audio = 225] = "Audio", ee[ee.SamplingFrequency = 181] = "SamplingFrequency", ee[ee.Channels = 159] = "Channels", ee[ee.BitDepth = 25188] = "BitDepth", ee[ee.SimpleBlock = 163] = "SimpleBlock", ee[ee.BlockGroup = 160] = "BlockGroup", ee[ee.Block = 161] = "Block", ee[ee.BlockAdditions = 30113] = "BlockAdditions", ee[ee.BlockMore = 166] = "BlockMore", ee[ee.BlockAdditional = 165] = "BlockAdditional", ee[ee.BlockAddID = 238] = "BlockAddID", ee[ee.BlockDuration = 155] = "BlockDuration", ee[ee.ReferenceBlock = 251] = "ReferenceBlock", ee[ee.Cluster = 524531317] = "Cluster", ee[ee.Timestamp = 231] = "Timestamp", ee[ee.Cues = 475249515] = "Cues", ee[ee.CuePoint = 187] = "CuePoint", ee[ee.CueTime = 179] = "CueTime", ee[ee.CueTrackPositions = 183] = "CueTrackPositions", ee[ee.CueTrack = 247] = "CueTrack", ee[ee.CueClusterPosition = 241] = "CueClusterPosition", ee[ee.Colour = 21936] = "Colour", ee[ee.MatrixCoefficients = 21937] = "MatrixCoefficients", ee[ee.TransferCharacteristics = 21946] = "TransferCharacteristics", ee[ee.Primaries = 21947] = "Primaries", ee[ee.Range = 21945] = "Range", ee[ee.Projection = 30320] = "Projection", ee[ee.ProjectionType = 30321] = "ProjectionType", ee[ee.ProjectionPoseYaw = 30323] = "ProjectionPoseYaw", ee[ee.ProjectionPosePitch = 30324] = "ProjectionPosePitch", ee[ee.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", ee[ee.Attachments = 423732329] = "Attachments", ee[ee.AttachedFile = 24999] = "AttachedFile", ee[ee.FileDescription = 18046] = "FileDescription", ee[ee.FileName = 18030] = "FileName", ee[ee.FileMediaType = 18016] = "FileMediaType", ee[ee.FileData = 18012] = "FileData", ee[ee.FileUID = 18094] = "FileUID", ee[ee.Chapters = 272869232] = "Chapters", ee[ee.Tags = 307544935] = "Tags", ee[ee.Tag = 29555] = "Tag", ee[ee.Targets = 25536] = "Targets", ee[ee.TargetTypeValue = 26826] = "TargetTypeValue", ee[ee.TargetType = 25546] = "TargetType", ee[ee.TagTrackUID = 25541] = "TagTrackUID", ee[ee.TagEditionUID = 25545] = "TagEditionUID", ee[ee.TagChapterUID = 25540] = "TagChapterUID", ee[ee.TagAttachmentUID = 25542] = "TagAttachmentUID", ee[ee.SimpleTag = 26568] = "SimpleTag", ee[ee.TagName = 17827] = "TagName", ee[ee.TagLanguage = 17530] = "TagLanguage", ee[ee.TagString = 17543] = "TagString", ee[ee.TagBinary = 17541] = "TagBinary", ee[ee.ContentEncodings = 28032] = "ContentEncodings", ee[ee.ContentEncoding = 25152] = "ContentEncoding", ee[ee.ContentEncodingOrder = 20529] = "ContentEncodingOrder", ee[ee.ContentEncodingScope = 20530] = "ContentEncodingScope", ee[ee.ContentCompression = 20532] = "ContentCompression", ee[ee.ContentCompAlgo = 16980] = "ContentCompAlgo", ee[ee.ContentCompSettings = 16981] = "ContentCompSettings", ee[ee.ContentEncryption = 20533] = "ContentEncryption"
    }(gH || (gH = {}));
    gH.EBML, gH.Segment, gH.SeekHead, gH.Info, gH.Cluster, gH.Tracks, gH.Cues, gH.Attachments, gH.Chapters, gH.Tags;
    const OH = ee => ee < 256 ? 1 : ee < 65536 ? 2 : ee < 1 << 24 ? 3 : ee < 2 ** 32 ? 4 : ee < 2 ** 40 ? 5 : 6,
      dH = ee => ee < 256n ? 1 : ee < 65536n ? 2 : ee < 1n << 24n ? 3 : ee < 1n << 32n ? 4 : ee < 1n << 40n ? 5 : ee < 1n << 48n ? 6 : ee < 1n << 56n ? 7 : 8,
      WH = ee => ee >= -64 && ee < 64 ? 1 : ee >= -8192 && ee < 8192 ? 2 : ee >= -1048576 && ee < 1 << 20 ? 3 : ee >= -(1 << 27) && ee < 1 << 27 ? 4 : ee >= -(2 ** 34) && ee < 2 ** 34 ? 5 : 6;
    class tH {
      constructor(ee) {
        this.writer = ee, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap, this.dataOffsets = new WeakMap
      }
      writeByte(ee) {
        this.helperView.setUint8(0, ee), this.writer.write(this.helper.subarray(0, 1))
      }
      writeFloat32(ee) {
        this.helperView.setFloat32(0, ee, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeFloat64(ee) {
        this.helperView.setFloat64(0, ee, !1), this.writer.write(this.helper)
      }
      writeUnsignedInt(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OH(ee),
          He = 0;
        switch (ie) {
          case 6:
            this.helperView.setUint8(He++, ee / 2 ** 40 | 0);
          case 5:
            this.helperView.setUint8(He++, ee / 2 ** 32 | 0);
          case 4:
            this.helperView.setUint8(He++, ee >> 24);
          case 3:
            this.helperView.setUint8(He++, ee >> 16);
          case 2:
            this.helperView.setUint8(He++, ee >> 8);
          case 1:
            this.helperView.setUint8(He++, ee);
            break;
          default:
            throw new Error("Bad unsigned int size " + ie)
        }
        this.writer.write(this.helper.subarray(0, He))
      }
      writeUnsignedBigInt(ee) {
        let ie = 0;
        for (let He = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dH(ee)) - 1; He >= 0; He--) this.helperView.setUint8(ie++, Number(ee >> BigInt(8 * He) & 0xffn));
        this.writer.write(this.helper.subarray(0, ie))
      }
      writeSignedInt(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WH(ee);
        ee < 0 && (ee += 2 ** (8 * ie)), this.writeUnsignedInt(ee, ie)
      }
      writeVarInt(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (ee => {
            if (ee < 127) return 1;
            if (ee < 16383) return 2;
            if (ee < 2097151) return 3;
            if (ee < 268435455) return 4;
            if (ee < 2 ** 35 - 1) return 5;
            if (ee < 2 ** 42 - 1) return 6;
            throw new Error("EBML varint size not supported " + ee)
          })(ee),
          He = 0;
        switch (ie) {
          case 1:
            this.helperView.setUint8(He++, 128 | ee);
            break;
          case 2:
            this.helperView.setUint8(He++, 64 | ee >> 8), this.helperView.setUint8(He++, ee);
            break;
          case 3:
            this.helperView.setUint8(He++, 32 | ee >> 16), this.helperView.setUint8(He++, ee >> 8), this.helperView.setUint8(He++, ee);
            break;
          case 4:
            this.helperView.setUint8(He++, 16 | ee >> 24), this.helperView.setUint8(He++, ee >> 16), this.helperView.setUint8(He++, ee >> 8), this.helperView.setUint8(He++, ee);
            break;
          case 5:
            this.helperView.setUint8(He++, 8 | ee / 2 ** 32 & 7), this.helperView.setUint8(He++, ee >> 24), this.helperView.setUint8(He++, ee >> 16), this.helperView.setUint8(He++, ee >> 8), this.helperView.setUint8(He++, ee);
            break;
          case 6:
            this.helperView.setUint8(He++, 4 | ee / 2 ** 40 & 3), this.helperView.setUint8(He++, ee / 2 ** 32 | 0), this.helperView.setUint8(He++, ee >> 24), this.helperView.setUint8(He++, ee >> 16), this.helperView.setUint8(He++, ee >> 8), this.helperView.setUint8(He++, ee);
            break;
          default:
            throw new Error("Bad EBML varint size " + ie)
        }
        this.writer.write(this.helper.subarray(0, He))
      }
      writeAsciiString(ee) {
        this.writer.write(new Uint8Array(ee.split("").map((ee => ee.charCodeAt(0)))))
      }
      writeEBML(ee) {
        if (null !== ee)
          if (ee instanceof Uint8Array) this.writer.write(ee);
          else if (Array.isArray(ee))
          for (const ie of ee) this.writeEBML(ie);
        else if (this.offsets.set(ee, this.writer.getPos()), this.writeUnsignedInt(ee.id), Array.isArray(ee.data)) {
          const ie = this.writer.getPos(),
            He = -1 === ee.size ? 1 : ee.size ?? 4; - 1 === ee.size ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + He);
          const ye = this.writer.getPos();
          if (this.dataOffsets.set(ee, ye), this.writeEBML(ee.data), -1 !== ee.size) {
            const ee = this.writer.getPos() - ye,
              be = this.writer.getPos();
            this.writer.seek(ie), this.writeVarInt(ee, He), this.writer.seek(be)
          }
        } else if ("number" === typeof ee.data) {
          const ie = ee.size ?? OH(ee.data);
          this.writeVarInt(ie), this.writeUnsignedInt(ee.data, ie)
        } else if ("bigint" === typeof ee.data) {
          const ie = ee.size ?? dH(ee.data);
          this.writeVarInt(ie), this.writeUnsignedBigInt(ee.data, ie)
        } else if ("string" === typeof ee.data) this.writeVarInt(ee.data.length), this.writeAsciiString(ee.data);
        else if (ee.data instanceof Uint8Array) this.writeVarInt(ee.data.byteLength, ee.size), this.writer.write(ee.data);
        else if (ee.data instanceof XH) this.writeVarInt(4), this.writeFloat32(ee.data.value);
        else if (ee.data instanceof zH) this.writeVarInt(8), this.writeFloat64(ee.data.value);
        else if (ee.data instanceof BH) {
          const ie = ee.size ?? WH(ee.data.value);
          this.writeVarInt(ie), this.writeSignedInt(ee.data.value, ie)
        } else if (ee.data instanceof EH) {
          const ie = Ue.hd.encode(ee.data.value);
          this.writeVarInt(ie.length), this.writer.write(ie)
        } else(0, Ue.G)(ee.data)
      }
    }
    const ZH = {
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
    const wH = {
      video: 1,
      audio: 2,
      subtitle: 17
    };
    class DH extends fe {
      constructor(ee, ie) {
        super(ee), this.trackDatas = [], this.allTracksKnown = (0, Ue.zc)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = new Map, this.startTimestamp = 1 / 0, this.endTimestamp = -1 / 0, this.warnedAboutTooNegativeTimestamp = !1, this.format = ie
      }
      async start() {
        const ee = await this.mutex.acquire();
        this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new tH(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush();
        for (const ie of this.output.tracks) ie.isVideoTrack() && ie.metadata.decoderConfig ? this.getVideoTrackData(ie, ie.metadata.primingPacket ?? null, {
          decoderConfig: ie.metadata.decoderConfig
        }) : ie.isAudioTrack() && ie.metadata.decoderConfig && this.getAudioTrackData(ie, ie.metadata.primingPacket ?? null, {
          decoderConfig: ie.metadata.decoderConfig
        });
        ee()
      }
      writeEBMLHeader() {
        this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
        const ee = {
          id: gH.EBML,
          data: [{
            id: gH.EBMLVersion,
            data: 1
          }, {
            id: gH.EBMLReadVersion,
            data: 1
          }, {
            id: gH.EBMLMaxIDLength,
            data: 4
          }, {
            id: gH.EBMLMaxSizeLength,
            data: 8
          }, {
            id: gH.DocType,
            data: this.format instanceof mH ? "webm" : "matroska"
          }, {
            id: gH.DocTypeVersion,
            data: 4
          }, {
            id: gH.DocTypeReadVersion,
            data: 2
          }]
        };
        if (this.ebmlWriter.writeEBML(ee), this.format._options.onEbmlHeader) {
          const {
            data: ee,
            start: ie
          } = this.writer.stopTrackingWrites();
          this.format._options.onEbmlHeader(ee, ie)
        }
      }
      maybeCreateSeekHead(ee) {
        if (this.format._options.appendOnly) return;
        const ie = new Uint8Array([28, 83, 187, 107]),
          He = new Uint8Array([21, 73, 169, 102]),
          ye = new Uint8Array([22, 84, 174, 107]),
          be = new Uint8Array([25, 65, 164, 105]),
          Me = new Uint8Array([18, 84, 195, 103]),
          Ke = {
            id: gH.SeekHead,
            data: [{
              id: gH.Seek,
              data: [{
                id: gH.SeekID,
                data: He
              }, {
                id: gH.SeekPosition,
                size: 5,
                data: ee ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
              }]
            }, {
              id: gH.Seek,
              data: [{
                id: gH.SeekID,
                data: ye
              }, {
                id: gH.SeekPosition,
                size: 5,
                data: ee ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
              }]
            }, this.attachmentsElement ? {
              id: gH.Seek,
              data: [{
                id: gH.SeekID,
                data: be
              }, {
                id: gH.SeekPosition,
                size: 5,
                data: ee ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
              }]
            } : null, this.tagsElement ? {
              id: gH.Seek,
              data: [{
                id: gH.SeekID,
                data: Me
              }, {
                id: gH.SeekPosition,
                size: 5,
                data: ee ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
              }]
            } : null, {
              id: gH.Seek,
              data: [{
                id: gH.SeekID,
                data: ie
              }, {
                id: gH.SeekPosition,
                size: 5,
                data: ee ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
              }]
            }]
          };
        this.seekHead = Ke
      }
      createSegmentInfo() {
        const ee = {
          id: gH.Duration,
          data: new zH(0)
        };
        this.segmentDuration = ee;
        const ie = {
          id: gH.Info,
          data: [{
            id: gH.TimestampScale,
            data: 1e6
          }, {
            id: gH.MuxingApp,
            data: ze.d
          }, {
            id: gH.WritingApp,
            data: ze.d
          }, this.format._options.appendOnly ? null : ee]
        };
        this.segmentInfo = ie
      }
      createTracks() {
        const ee = {
          id: gH.Tracks,
          data: []
        };
        this.tracksElement = ee;
        for (const ie of this.trackDatas) {
          let He = ZH[ie.track.source._codec];
          (0, Ue.I)(He), "audio" === ie.type && "dts" === ie.track.source._codec && ("dtse" === ie.info.decoderConfig.codec ? He = "A_DTS/EXPRESS" : "dtsl" === ie.info.decoderConfig.codec && (He = "A_DTS/LOSSLESS"));
          let ye = 0;
          if ("audio" === ie.type && "opus" === ie.track.source._codec) {
            ye = 8e7;
            const ee = ie.info.decoderConfig.description;
            if (ee) {
              const ie = (0, Ue.od)(ee),
                He = (0, Te.yb)(ie);
              ye = Math.round(He.preSkip / be.m * 1e9)
            }
          }
          ee.data.push({
            id: gH.TrackEntry,
            data: [{
              id: gH.TrackNumber,
              data: ie.track.id
            }, {
              id: gH.TrackUID,
              data: ie.track.id
            }, {
              id: gH.TrackType,
              data: wH[ie.type]
            }, !1 === ie.track.metadata.disposition?.default ? {
              id: gH.FlagDefault,
              data: 0
            } : null, ie.track.metadata.disposition?.forced ? {
              id: gH.FlagForced,
              data: 1
            } : null, ie.track.metadata.disposition?.hearingImpaired ? {
              id: gH.FlagHearingImpaired,
              data: 1
            } : null, ie.track.metadata.disposition?.visuallyImpaired ? {
              id: gH.FlagVisualImpaired,
              data: 1
            } : null, ie.track.metadata.disposition?.original ? {
              id: gH.FlagOriginal,
              data: 1
            } : null, ie.track.metadata.disposition?.commentary ? {
              id: gH.FlagCommentary,
              data: 1
            } : null, {
              id: gH.FlagLacing,
              data: 0
            }, {
              id: gH.Language,
              data: ie.track.metadata.languageCode ?? Ue.A
            }, {
              id: gH.CodecID,
              data: He
            }, ie.codecPrivate ? {
              id: gH.CodecPrivate,
              data: (0, Ue.od)(ie.codecPrivate)
            } : null, ye > 0 ? {
              id: gH.SeekPreRoll,
              data: ye
            } : null, void 0 !== ie.track.metadata.name ? {
              id: gH.Name,
              data: new EH(ie.track.metadata.name)
            } : null, "video" === ie.type ? this.videoSpecificTrackInfo(ie) : null, "audio" === ie.type ? this.audioSpecificTrackInfo(ie) : null, "subtitle" === ie.type ? this.subtitleSpecificTrackInfo(ie) : null]
          })
        }
      }
      videoSpecificTrackInfo(ee) {
        const {
          frameRate: ie,
          transformationMatrix: He
        } = ee.track.metadata, ye = [ie ? {
          id: gH.DefaultDuration,
          data: 1e9 / ie
        } : null];
        let be, Me, Ke;
        if (He) {
          be = (0, Ue.gb)(He);
          const ee = (0, Ue.jc)((0, Ue.Kc)(-be), He);
          Me = Math.sign(ee[0]), Ke = Math.sign(ee[4]), -1 === Ke && (Ke = 1, Me = -Me, be = (0, Ue.nc)(be + 180))
        } else be = ee.track.metadata.rotation ?? 0, Me = ee.track.metadata.flip ? -1 : 1, Ke = 1;
        const Fe = be ? (0, Ue.nc)(-1 === Me ? be : -be) : 0,
          Je = Math.round(Math.acos(Me) * Ue.q),
          oe = Math.round(Math.acos(Ke) * Ue.q),
          Re = !!ee.info.aspectRatio && ee.info.aspectRatio.num * ee.info.height !== ee.info.aspectRatio.den * ee.info.width,
          ke = ee.info.decoderConfig.colorSpace,
          qe = {
            id: gH.Video,
            data: [{
              id: gH.PixelWidth,
              data: ee.info.width
            }, {
              id: gH.PixelHeight,
              data: ee.info.height
            }, Re ? {
              id: gH.DisplayWidth,
              data: ee.info.aspectRatio.num
            } : null, Re ? {
              id: gH.DisplayHeight,
              data: ee.info.aspectRatio.den
            } : null, Re ? {
              id: gH.DisplayUnit,
              data: 3
            } : null, ee.info.alphaMode ? {
              id: gH.AlphaMode,
              data: 1
            } : null, (0, Ue.Z)(ke) ? null : {
              id: gH.Colour,
              data: [{
                id: gH.MatrixCoefficients,
                data: null != ke?.matrix ? Ue.o[ke.matrix] : 2
              }, {
                id: gH.TransferCharacteristics,
                data: null != ke?.transfer ? Ue.t[ke.transfer] : 2
              }, {
                id: gH.Primaries,
                data: null != ke?.primaries ? Ue.f[ke.primaries] : 2
              }, {
                id: gH.Range,
                data: null != ke?.fullRange ? ke.fullRange ? 2 : 1 : 0
              }]
            }, Fe || Je || oe ? {
              id: gH.Projection,
              data: [{
                id: gH.ProjectionType,
                data: 0
              }, Je ? {
                id: gH.ProjectionPoseYaw,
                data: new XH(Je)
              } : null, oe ? {
                id: gH.ProjectionPosePitch,
                data: new XH(oe)
              } : null, Fe ? {
                id: gH.ProjectionPoseRoll,
                data: new XH((Fe + 180) % 360 - 180)
              } : null]
            } : null]
          };
        return ye.push(qe), ye
      }
      audioSpecificTrackInfo(ee) {
        const ie = be.n.includes(ee.track.source._codec) ? (0, be.R)(ee.track.source._codec) : null;
        return [{
          id: gH.Audio,
          data: [{
            id: gH.SamplingFrequency,
            data: new XH(ee.info.sampleRate)
          }, {
            id: gH.Channels,
            data: ee.info.numberOfChannels
          }, ie ? {
            id: gH.BitDepth,
            data: 8 * ie.sampleSize
          } : null]
        }]
      }
      subtitleSpecificTrackInfo(ee) {
        return []
      }
      maybeCreateTags() {
        const ee = [],
          ie = (ie, He) => {
            ee.push({
              id: gH.SimpleTag,
              data: [{
                id: gH.TagName,
                data: new EH(ie)
              }, "string" === typeof He ? {
                id: gH.TagString,
                data: new EH(He)
              } : {
                id: gH.TagBinary,
                data: He
              }]
            })
          },
          He = this.output._metadataTags,
          ye = new Set;
        for (const {
            key: be,
            value: Me
          }
          of(0, Ue._b)(He)) switch (be) {
          case "title":
            ie("TITLE", Me), ye.add("TITLE");
            break;
          case "description":
            ie("DESCRIPTION", Me), ye.add("DESCRIPTION");
            break;
          case "artist":
            ie("ARTIST", Me), ye.add("ARTIST");
            break;
          case "album":
            ie("ALBUM", Me), ye.add("ALBUM");
            break;
          case "albumArtist":
            ie("ALBUM_ARTIST", Me), ye.add("ALBUM_ARTIST");
            break;
          case "genre":
            ie("GENRE", Me), ye.add("GENRE");
            break;
          case "beatsPerMinute":
            ie("BPM", Me.toString()), ye.add("BPM");
            break;
          case "comment":
            ie("COMMENT", Me), ye.add("COMMENT");
            break;
          case "lyrics":
            ie("LYRICS", Me), ye.add("LYRICS");
            break;
          case "date":
            ie("DATE", Me.toISOString().slice(0, 10)), ye.add("DATE");
            break;
          case "trackNumber":
            ie("PART_NUMBER", void 0 !== He.tracksTotal ? `${Me}/${He.tracksTotal}` : Me.toString()), ye.add("PART_NUMBER");
            break;
          case "discNumber":
            ie("DISC", void 0 !== He.discsTotal ? `${Me}/${He.discsTotal}` : Me.toString()), ye.add("DISC");
            break;
          case "tracksTotal":
          case "discsTotal":
          case "images":
          case "raw":
            break;
          default:
            (0, Ue.G)(be)
        }
        if (He.raw)
          for (const be in He.raw) {
            const ee = He.raw[be];
            null == ee || ye.has(be) || ("string" === typeof ee || ee instanceof Uint8Array) && ie(be, ee)
          }
        0 !== ee.length && (this.tagsElement = {
          id: gH.Tags,
          data: [{
            id: gH.Tag,
            data: [{
              id: gH.Targets,
              data: [{
                id: gH.TargetTypeValue,
                data: 50
              }, {
                id: gH.TargetType,
                data: "MOVIE"
              }]
            }, ...ee]
          }]
        })
      }
      maybeCreateAttachments() {
        const ee = this.output._metadataTags,
          ie = [],
          He = new Set,
          ye = ee.images ?? [];
        for (const be of ye) {
          let ee, ye = be.name;
          if (void 0 === ye) {
            ye = ("coverFront" === be.kind ? "cover" : "coverBack" === be.kind ? "back" : "image") + ((0, Ue.qb)(be.mimeType) ?? "")
          }
          for (;;) {
            ee = 0n;
            for (let ie = 0; ie < 8; ie++) ee <<= 8n, ee |= BigInt(Math.floor(256 * Math.random()));
            if (0n !== ee && !He.has(ee)) break
          }
          He.add(ee), ie.push({
            id: gH.AttachedFile,
            data: [void 0 !== be.description ? {
              id: gH.FileDescription,
              data: new EH(be.description)
            } : null, {
              id: gH.FileName,
              data: new EH(ye)
            }, {
              id: gH.FileMediaType,
              data: be.mimeType
            }, {
              id: gH.FileData,
              data: be.data
            }, {
              id: gH.FileUID,
              data: ee
            }]
          })
        }
        for (const [be, Me] of Object.entries(ee.raw ?? {})) {
          if (!(Me instanceof qe.b)) continue;
          /^\d+$/.test(be) && (ye.find((ee => ee.mimeType === Me.mimeType && (0, Ue.pd)(ee.data, Me.data))) || ie.push({
            id: gH.AttachedFile,
            data: [void 0 !== Me.description ? {
              id: gH.FileDescription,
              data: new EH(Me.description)
            } : null, {
              id: gH.FileName,
              data: new EH(Me.name ?? "")
            }, {
              id: gH.FileMediaType,
              data: Me.mimeType ?? ""
            }, {
              id: gH.FileData,
              data: Me.data
            }, {
              id: gH.FileUID,
              data: BigInt(be)
            }]
          }))
        }
        0 !== ie.length && (this.attachmentsElement = {
          id: gH.Attachments,
          data: ie
        })
      }
      createSegment() {
        this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
        const ee = {
          id: gH.Segment,
          size: this.format._options.appendOnly ? -1 : 6,
          data: [this.seekHead, this.segmentInfo, this.tracksElement, this.attachmentsElement, this.tagsElement]
        };
        if (this.segment = ee, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(ee), this.format._options.onSegmentHeader) {
          const {
            data: ee,
            start: ie
          } = this.writer.stopTrackingWrites();
          this.format._options.onSegmentHeader(ee, ie)
        }
      }
      createCues() {
        this.cues = {
          id: gH.Cues,
          data: []
        }
      }
      get segmentDataOffset() {
        return (0, Ue.I)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
      }
      allTracksAreKnown() {
        for (const ee of this.output.tracks)
          if (!ee.source._closed && !this.trackDatas.some((ie => ie.track === ee))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const ee = this.trackDatas.map((ee => {
          if ("video" === ee.type) return ee.info.decoderConfig.codec;
          if ("audio" === ee.type) return ee.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [ee.track.source._codec]
        }));
        return (ee => {
          let ie = (ee.hasVideo ? "video/" : ee.hasAudio ? "audio/" : "application/") + (ee.isWebM ? "webm" : "x-matroska");
          ee.codecStrings.length > 0 && (ie += `; codecs="${[...new Set(ee.codecStrings.filter(Boolean))].join(", ")}"`);
          return ie
        })({
          isWebM: this.format instanceof mH,
          hasVideo: this.trackDatas.some((ee => "video" === ee.type)),
          hasAudio: this.trackDatas.some((ee => "audio" === ee.type)),
          codecStrings: ee
        })
      }
      getVideoTrackData(ee, ie, He) {
        const ye = this.trackDatas.find((ie => ie.track === ee));
        if (ye) return ye;
        (0, be.Z)(He, ee.source._codec), (0, Ue.I)(He), (0, Ue.I)(He.decoderConfig), (0, Ue.I)(void 0 !== He.decoderConfig.codedWidth), (0, Ue.I)(void 0 !== He.decoderConfig.codedHeight);
        const Me = He.decoderConfig.displayAspectWidth,
          Ke = He.decoderConfig.displayAspectHeight,
          Fe = void 0 === Me || void 0 === Ke ? null : (0, Ue.bd)({
            num: Me,
            den: Ke
          }),
          Je = {
            track: ee,
            type: "video",
            info: {
              width: He.decoderConfig.codedWidth,
              height: He.decoderConfig.codedHeight,
              aspectRatio: Fe,
              decoderConfig: He.decoderConfig,
              alphaMode: ee.metadata.canBeTransparent || (ie ? !!ie.sideData.alpha : null)
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null,
            codecPrivate: He.decoderConfig.description ?? null,
            closed: !1
          };
        return "vp9" === ee.source._codec ? Je.codecPrivate = new Uint8Array((0, be.G)(Je.info.decoderConfig.codec)) : "av1" === ee.source._codec ? Je.codecPrivate = new Uint8Array((0, be.F)(Je.info.decoderConfig.codec)) : "prores" === ee.source._codec && (Je.codecPrivate = Ue.hd.encode(He.decoderConfig.codec)), this.trackDatas.push(Je), this.trackDatas.sort(((ee, ie) => ee.track.id - ie.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Je
      }
      getAudioTrackData(ee, ie, He) {
        const Me = this.trackDatas.find((ie => ie.track === ee));
        if (Me) return Me;
        (0, be.U)(He, ee.source._codec), (0, Ue.I)(He), (0, Ue.I)(He.decoderConfig);
        const Ke = {
          ...He.decoderConfig
        };
        let Je = !1;
        if ("aac" === ee.source._codec && !Ke.description) {
          if (!ie) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const ee = RH(Fe.tempFromBytes(ie.data));
          if (!ee) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const He = ye.e[ee.samplingFrequencyIndex],
            be = ye.d[ee.channelConfiguration];
          if (void 0 === He || void 0 === be) throw new Error("Invalid ADTS frame header.");
          Ke.description = (0, ye.h)({
            objectType: ee.objectType,
            outputSampleRate: He,
            outputNumberOfChannels: be
          }), Je = !0
        }
        const oe = {
          track: ee,
          type: "audio",
          info: {
            numberOfChannels: He.decoderConfig.numberOfChannels,
            sampleRate: He.decoderConfig.sampleRate,
            decoderConfig: Ke,
            requiresAdtsStripping: Je
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: Ke.description ?? null,
          closed: !1
        };
        return this.trackDatas.push(oe), this.trackDatas.sort(((ee, ie) => ee.track.id - ie.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), oe
      }
      getSubtitleTrackData(ee, ie) {
        const He = this.trackDatas.find((ie => ie.track === ee));
        if (He) return He;
        (0, be.W)(ie), (0, Ue.I)(ie), (0, Ue.I)(ie.config);
        const ye = {
          track: ee,
          type: "subtitle",
          info: {
            config: ie.config
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: Ue.hd.encode(ie.config.description),
          closed: !1
        };
        return this.trackDatas.push(ye), this.trackDatas.sort(((ee, ie) => ee.track.id - ie.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), ye
      }
      async addEncodedVideoPacket(ee, ie, He) {
        const ye = await this.mutex.acquire();
        try {
          const ye = this.getVideoTrackData(ee, ie, He);
          ye.info.alphaMode ??= !!ie.sideData.alpha;
          let be = ie.data;
          if ("prores" === ee.source._codec) {
            if (be.byteLength < 8) throw new Error("ProRes packet too small, expected at least 8 bytes.");
            be = be.subarray(8)
          }
          const Me = "key" === ie.type;
          this.validateTimestamp(ye.track, ie.timestamp, Me);
          let Ke = ie.timestamp,
            Fe = ie.duration;
          void 0 !== ee.metadata.frameRate && (Ke = (0, Ue.Lc)(Ke, ee.metadata.frameRate), Fe = (0, Ue.Lc)(Fe, ee.metadata.frameRate));
          const Je = ye.info.alphaMode ? ie.sideData.alpha ?? null : null,
            oe = this.createInternalChunk(be, Ke, Fe, ie.type, Je);
          "vp9" === ee.source._codec && this.fixVP9ColorSpace(ye, oe), ye.chunkQueue.push(oe), await this.interleaveChunks()
        } finally {
          ye()
        }
      }
      async addEncodedAudioPacket(ee, ie, He) {
        const ye = await this.mutex.acquire();
        try {
          const ye = this.getAudioTrackData(ee, ie, He);
          let be = ie.data;
          if (ye.info.requiresAdtsStripping) {
            const ee = RH(Fe.tempFromBytes(be));
            if (!ee) throw new Error("Expected ADTS frame, didn't get one.");
            const ie = null === ee.crcCheck ? 7 : 9;
            be = be.subarray(ie)
          }
          const Me = "key" === ie.type;
          this.validateTimestamp(ye.track, ie.timestamp, Me);
          const Ke = this.createInternalChunk(be, ie.timestamp, ie.duration, ie.type);
          ye.chunkQueue.push(Ke), await this.interleaveChunks()
        } finally {
          ye()
        }
      }
      async addSubtitleCue(ee, ie, He) {
        const ye = await this.mutex.acquire();
        try {
          const ye = this.getSubtitleTrackData(ee, He);
          this.validateTimestamp(ye.track, ie.timestamp, !0);
          let be = ie.text;
          const Me = Math.round(1e3 * ie.timestamp);
          Xe.g.lastIndex = 0, be = be.replace(Xe.g, (ee => {
            const ie = (0, Xe.j)(ee.slice(1, -1)) - Me;
            return `<${(0,Xe.e)(ie)}>`
          }));
          const Ke = Ue.hd.encode(be),
            Fe = `${ie.settings??""}\n${ie.identifier??""}\n${ie.notes??""}`,
            Je = this.createInternalChunk(Ke, ie.timestamp, ie.duration, "key", Fe.trim() ? Ue.hd.encode(Fe) : null);
          ye.chunkQueue.push(Je), await this.interleaveChunks()
        } finally {
          ye()
        }
      }
      async interleaveChunks() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (ee || this.allTracksAreKnown()) {
          ee: for (;;) {
            let ie = null,
              He = 1 / 0;
            for (const be of this.trackDatas) {
              if (!ee && 0 === be.chunkQueue.length && !be.closed) break ee;
              be.chunkQueue.length > 0 && be.chunkQueue[0].timestamp < He && (ie = be, He = be.chunkQueue[0].timestamp)
            }
            if (!ie) break;
            const ye = ie.chunkQueue.shift();
            this.writeBlock(ie, ye)
          }
          ee || await this.writer.flush()
        }
      }
      fixVP9ColorSpace(ee, ie) {
        if ("key" !== ie.type) return;
        if (!ee.info.decoderConfig.colorSpace || !ee.info.decoderConfig.colorSpace.matrix) return;
        const He = new pe.e(ie.data);
        He.skipBits(2);
        const ye = He.readBits(1),
          be = (He.readBits(1) << 1) + ye;
        3 === be && He.skipBits(1);
        if (He.readBits(1)) return;
        if (0 !== He.readBits(1)) return;
        He.skipBits(2);
        if (4817730 !== He.readBits(24)) return;
        be >= 2 && He.skipBits(1);
        const Me = {
          rgb: 7,
          bt709: 2,
          bt470bg: 1,
          smpte170m: 3
        } [ee.info.decoderConfig.colorSpace.matrix];
        (0, Ue.wd)(ie.data, He.pos, He.pos + 3, Me)
      }
      createInternalChunk(ee, ie, He, ye) {
        return {
          data: ee,
          type: ye,
          timestamp: ie,
          duration: He,
          additions: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
        }
      }
      writeBlock(ee, ie) {
        this.segment || this.createSegment();
        const He = Math.round(1e3 * ie.timestamp),
          ye = this.trackDatas.every((He => {
            if (ee === He) return "key" === ie.type;
            const ye = He.chunkQueue[0];
            return ye ? "key" === ye.type : He.closed
          }));
        let be = !1;
        if (this.currentCluster) {
          (0, Ue.I)(null !== this.currentClusterStartMsTimestamp), (0, Ue.I)(null !== this.currentClusterMaxMsTimestamp);
          const ee = He - this.currentClusterStartMsTimestamp;
          be = ye && He > this.currentClusterMaxMsTimestamp && ee >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || ee > 32767
        } else be = !0;
        be && this.createNewCluster(He);
        const Me = He - this.currentClusterStartMsTimestamp;
        if (Me < -32768) {
          if (!this.warnedAboutTooNegativeTimestamp) {
            const ee = this.format instanceof mH ? "WebM" : "Matroska";
            Ke.b._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${ee}.`), this.warnedAboutTooNegativeTimestamp = !0
          }
          return
        }
        const Fe = new Uint8Array(4),
          Je = new DataView(Fe.buffer);
        Je.setUint8(0, 128 | ee.track.id), Je.setInt16(1, Me, !1);
        const oe = Math.round(1e3 * ie.duration);
        if (!!ie.additions || "subtitle" === ee.type) {
          const ye = {
            id: gH.BlockGroup,
            data: [{
              id: gH.Block,
              data: [Fe, ie.data]
            }, "delta" === ie.type ? {
              id: gH.ReferenceBlock,
              data: new BH(ee.lastWrittenMsTimestamp - He)
            } : null, ie.additions ? {
              id: gH.BlockAdditions,
              data: [{
                id: gH.BlockMore,
                data: [{
                  id: gH.BlockAddID,
                  data: 1
                }, {
                  id: gH.BlockAdditional,
                  data: ie.additions
                }]
              }]
            } : null, oe > 0 ? {
              id: gH.BlockDuration,
              data: oe
            } : null]
          };
          this.ebmlWriter.writeEBML(ye)
        } else {
          Je.setUint8(3, Number("key" === ie.type) << 7);
          const ee = {
            id: gH.SimpleBlock,
            data: [Fe, ie.data]
          };
          this.ebmlWriter.writeEBML(ee)
        }
        this.startTimestamp = Math.min(this.startTimestamp, He), this.endTimestamp = Math.max(this.endTimestamp, He + oe), ee.lastWrittenMsTimestamp = He, this.trackDatasInCurrentCluster.has(ee) || this.trackDatasInCurrentCluster.set(ee, {
          firstMsTimestamp: He
        }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, He)
      }
      createNewCluster(ee) {
        ee = Math.max(0, ee), this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
          id: gH.Cluster,
          size: this.format._options.appendOnly ? -1 : 5,
          data: [{
            id: gH.Timestamp,
            data: ee
          }]
        }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = ee, this.currentClusterMaxMsTimestamp = ee, this.trackDatasInCurrentCluster.clear()
      }
      finalizeCurrentCluster() {
        if ((0, Ue.I)(this.currentCluster), !this.format._options.appendOnly) {
          const ee = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster),
            ie = this.writer.getPos();
          this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(ee, 5), this.writer.seek(ie)
        }
        if (this.format._options.onCluster) {
          (0, Ue.I)(null !== this.currentClusterStartMsTimestamp);
          const {
            data: ee,
            start: ie
          } = this.writer.stopTrackingWrites();
          this.format._options.onCluster(ee, ie, this.currentClusterStartMsTimestamp / 1e3)
        }
        const ee = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset,
          ie = new Map;
        for (const [ye, {
            firstMsTimestamp: be
          }] of this.trackDatasInCurrentCluster) ie.has(be) || ie.set(be, []), ie.get(be).push(ye);
        const He = [...ie.entries()].sort(((ee, ie) => ee[0] - ie[0]));
        for (const [ye, be] of He)(0, Ue.I)(this.cues), this.cues.data.push({
          id: gH.CuePoint,
          data: [{
            id: gH.CueTime,
            data: Math.max(0, ye)
          }, ...be.map((ie => ({
            id: gH.CueTrackPositions,
            data: [{
              id: gH.CueTrack,
              data: ie.track.id
            }, {
              id: gH.CueClusterPosition,
              data: ee
            }]
          })))]
        })
      }
      async onTrackClose(ee) {
        const ie = await this.mutex.acquire(),
          He = this.trackDatas.find((ie => ie.track === ee));
        He && (He.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), ie()
      }
      async finalize() {
        const ee = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        for (const ie of this.trackDatas) ie.closed = !0;
        if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, Ue.I)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
          const ee = this.writer.getPos() - this.segmentDataOffset;
          this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(ee, 6);
          const ie = this.startTimestamp === 1 / 0 ? 0 : this.endTimestamp;
          this.segmentDuration.data = new zH(ie), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, Ue.I)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead)
        }
        ee()
      }
    }
    const PH = new Uint32Array(256);
    for (let lH = 0; lH < 256; lH++) {
      let ee = lH << 24;
      for (let ie = 0; ie < 8; ie++) ee = 2147483648 & ee ? ee << 1 ^ 79764919 : ee << 1;
      PH[lH] = ee >>> 0 & 4294967295
    }
    new Uint8Array([9, 240]), new Uint8Array([70, 1]);
    const AH = new Uint32Array(256);
    for (let lH = 0; lH < 256; lH++) {
      let ee = lH << 24;
      for (let ie = 0; ie < 8; ie++) ee = 2147483648 & ee ? ee << 1 ^ 79764919 : ee << 1;
      AH[lH] = ee >>> 0 & 4294967295
    }
    const YH = ee => {
        let ie = 4294967295;
        for (let He = 0; He < ee.length; He++) {
          const ye = ee[He];
          ie = (ie << 8 ^ AH[ie >>> 24 ^ ye]) >>> 0
        }
        return ie
      },
      VH = new Uint8Array(16);
    {
      const ee = (0, Ue.nd)(VH);
      VH[0] = 0, ee.setUint16(1, 45069, !1), ee.setUint16(3, 1, !1), VH[5] = 193, VH[6] = 0, VH[7] = 0, ee.setUint16(8, 1, !1), ee.setUint16(10, 61440, !1), ee.setUint32(12, YH(VH.subarray(0, 12)), !1)
    }
    var aH;
    He(40738);
    ! function(ee) {
      ee[ee.PCM = 1] = "PCM", ee[ee.IEEE_FLOAT = 3] = "IEEE_FLOAT", ee[ee.ALAW = 6] = "ALAW", ee[ee.MULAW = 7] = "MULAW", ee[ee.EXTENSIBLE = 65534] = "EXTENSIBLE"
    }(aH || (aH = {}));
    He(40742), He(40750), He(40665);
    class cH {
      get supportsVideoRotationMetadata() {
        return this.supportsVideoTransformationMetadata
      }
      getSupportedVideoCodecs() {
        return this.getSupportedCodecs().filter((ee => be.s.includes(ee)))
      }
      getSupportedAudioCodecs() {
        return this.getSupportedCodecs().filter((ee => be.c.includes(ee)))
      }
      getSupportedSubtitleCodecs() {
        return this.getSupportedCodecs().filter((ee => be.o.includes(ee)))
      }
      _codecUnsupportedHint(ee) {
        return ""
      }
      _isFragmentedIsobmff() {
        return !1
      }
    }
    class xH extends cH {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!ee || "object" !== typeof ee) throw new TypeError("options must be an object.");
        if (void 0 !== ee.fastStart && ![!1, "in-memory", "reserve", "fragmented"].includes(ee.fastStart)) throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
        if (void 0 !== ee.minimumFragmentDuration && (!(0, Ue.Kb)(ee.minimumFragmentDuration) || ee.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
        if (void 0 !== ee.onFtyp && "function" !== typeof ee.onFtyp) throw new TypeError("options.onFtyp, when provided, must be a function.");
        if (void 0 !== ee.onMoov && "function" !== typeof ee.onMoov) throw new TypeError("options.onMoov, when provided, must be a function.");
        if (void 0 !== ee.onMdat && "function" !== typeof ee.onMdat) throw new TypeError("options.onMdat, when provided, must be a function.");
        if (void 0 !== ee.onMoof && "function" !== typeof ee.onMoof) throw new TypeError("options.onMoof, when provided, must be a function.");
        if (void 0 !== ee.metadataFormat && !["mdir", "mdta", "udta", "auto"].includes(ee.metadataFormat)) throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
        super(), this._options = ee
      }
      getSupportedTrackCounts() {
        const ee = 2 ** 32 - 1;
        return {
          video: {
            min: 0,
            max: ee
          },
          audio: {
            min: 0,
            max: ee
          },
          subtitle: {
            min: 0,
            max: ee
          },
          total: {
            min: 0,
            max: ee
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
      _createMuxer(ee) {
        return new pH(ee, this)
      }
      _isFragmentedIsobmff() {
        return "fragmented" === this._options.fastStart
      }
    }
    class LH extends xH {
      constructor(ee) {
        super(ee)
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
        return [...be.s, ...be.k, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...be.o]
      }
      _codecUnsupportedHint(ee) {
        return (new vH).getSupportedCodecs().includes(ee) ? " Switching to MOV will grant support for this codec." : ""
      }
    }
    class CH extends xH {
      constructor(ee) {
        super(ee)
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
        return [...be.s, ...be.k, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...be.o]
      }
    }
    class vH extends xH {
      constructor(ee) {
        super(ee)
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
        return [...be.s, ...be.c]
      }
      _codecUnsupportedHint(ee) {
        return (new LH).getSupportedCodecs().includes(ee) ? " Switching to MP4 will grant support for this codec." : ""
      }
    }
    class uH extends cH {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!ee || "object" !== typeof ee) throw new TypeError("options must be an object.");
        if (void 0 !== ee.appendOnly && "boolean" !== typeof ee.appendOnly) throw new TypeError("options.appendOnly, when provided, must be a boolean.");
        if (void 0 !== ee.minimumClusterDuration && (!(0, Ue.Kb)(ee.minimumClusterDuration) || ee.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
        if (void 0 !== ee.onEbmlHeader && "function" !== typeof ee.onEbmlHeader) throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
        if (void 0 !== ee.onSegmentHeader && "function" !== typeof ee.onSegmentHeader) throw new TypeError("options.onHeader, when provided, must be a function.");
        if (void 0 !== ee.onCluster && "function" !== typeof ee.onCluster) throw new TypeError("options.onCluster, when provided, must be a function.");
        super(), this._options = ee
      }
      _createMuxer(ee) {
        return new DH(ee, this)
      }
      get _name() {
        return "Matroska"
      }
      getSupportedTrackCounts() {
        const ee = 127;
        return {
          video: {
            min: 0,
            max: ee
          },
          audio: {
            min: 0,
            max: ee
          },
          subtitle: {
            min: 0,
            max: ee
          },
          total: {
            min: 0,
            max: ee
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
        return [...be.s, ...be.k, ...be.n.filter((ee => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(ee))), ...be.o]
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
    class mH extends uH {
      constructor(ee) {
        super(ee)
      }
      getSupportedCodecs() {
        return [...be.s.filter((ee => ["vp8", "vp9", "av1"].includes(ee))), ...be.c.filter((ee => ["opus", "vorbis"].includes(ee))), ...be.o]
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
      _codecUnsupportedHint(ee) {
        return (new uH).getSupportedCodecs().includes(ee) ? " Switching to MKV will grant support for this codec." : ""
      }
    }
  },
  40665: (ee, ie, He) => {
    He.d(ie, {
      c: () => Be
    });
    var ye = He(40671),
      be = He(40676),
      Me = He(40679),
      Ke = He(40750),
      Ue = He(40726),
      Fe = He(40717),
      Je = He(40703),
      oe = He(40738),
      Re = He(40692);
    const ke = ["video", "audio", "subtitle"];
    class qe {
      constructor(ee, ie, He, ye, be) {
        this.id = ee, this.output = ie, this.type = He, this.source = ye, this.metadata = be
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
      canBePairedWith(ee) {
        if (!(ee instanceof qe)) throw new TypeError("other must be an OutputTrack.");
        if (this === ee) return !1;
        const ie = (0, ye.ld)(this.metadata.group),
          He = (0, ye.ld)(ee.metadata.group);
        for (const ye of ie) {
          if (this.type !== ee.type && He.some((ee => ye === ee))) return !0;
          if (He.some((ee => ye._pairedGroups.has(ee)))) return !0
        }
        return !1
      }
    }
    class fe extends qe {
      constructor(ee, ie, He, ye) {
        super(ee, ie, "video", He, ye)
      }
    }
    class Te extends qe {
      constructor(ee, ie, He, ye) {
        super(ee, ie, "audio", He, ye)
      }
    }
    class pe extends qe {
      constructor(ee, ie, He, ye) {
        super(ee, ie, "subtitle", He, ye)
      }
    }
    class Xe {
      constructor() {
        this._pairedGroups = new Set
      }
      pairWith(ee) {
        if (!(ee instanceof Xe)) throw new TypeError("other must be an OutputTrackGroup.");
        if (this === ee) throw new TypeError("Cannot pair a group with itself.");
        this._pairedGroups.add(ee), ee._pairedGroups.add(this)
      }
    }
    const ze = ee => {
      if (!ee || "object" !== typeof ee) throw new TypeError("metadata must be an object.");
      if (void 0 !== ee.languageCode && !(0, ye.Eb)(ee.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
      if (void 0 !== ee.name && "string" !== typeof ee.name) throw new TypeError("metadata.name, when provided, must be a string.");
      if (void 0 !== ee.disposition && (0, be.n)(ee.disposition), void 0 !== ee.maximumPacketCount && (!Number.isInteger(ee.maximumPacketCount) || ee.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
      if (void 0 !== ee.bitrate && (!Number.isFinite(ee.bitrate) || ee.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
      if (void 0 !== ee.averageBitrate && (!Number.isFinite(ee.averageBitrate) || ee.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
      if (void 0 !== ee.group && !(ee.group instanceof Xe) && (!Array.isArray(ee.group) || ee.group.some((ee => !(ee instanceof Xe))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
    };
    class Be extends ye.j {
      get target() {
        const ee = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
        if (this._rootTargetPromise) throw new TypeError(ee);
        const ie = this._getRootTarget();
        if ((0, ye.Qb)(ie)) throw new TypeError(ee);
        return ie
      }
      constructor(ee) {
        if (super(), this.state = "pending", this.defaultTrackGroup = new Xe, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new ye.b, this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !ee || "object" !== typeof ee) throw new TypeError("options must be an object.");
        if (!(ee.format instanceof Me.l)) throw new TypeError("options.format must be an OutputFormat.");
        if (!(ee.target instanceof Ue.j || ee.target instanceof Ue.f)) throw new TypeError("options.target must be a Target or a PathedTarget.");
        if (ee.target instanceof Ue.j && this._rememberTarget(ee.target), void 0 !== ee.initTarget && !(ee.initTarget instanceof Ue.j) && "function" !== typeof ee.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
        if (void 0 !== ee.onFinalize && "function" !== typeof ee.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        this.format = ee.format, this.VR = ee.target, this._onFinalize = ee.onFinalize ?? null, this._initTarget = ee.initTarget ?? null, this._initTarget instanceof Ue.j && this._rememberTarget(this._initTarget), this._muxer = ee.format._createMuxer(this)
      }
      _getTargetValidated(ee) {
        (0, ye.I)(this.VR instanceof Ue.f);
        const ie = this.VR.getTarget(ee),
          He = ee => {
            if (!(ee instanceof Ue.j)) throw new TypeError("getTarget must return a Target.");
            return ee
          };
        return (0, ye.Qb)(ie) ? ie.then(He) : He(ie)
      }
      async _getTarget(ee) {
        (0, ye.I)(this.VR instanceof Ue.f);
        const ie = await this._getTargetValidated(ee);
        return this._emit("target", {
          target: ie,
          request: ee,
          isRoot: ee.isRoot
        }), "canceled" === this.state ? await ie._close() : this._rememberTarget(ie), ie
      }
      _rememberTarget(ee) {
        this._unfinalizedTargets.add(ee), ee.on("finalized", (() => this._unfinalizedTargets.delete(ee)), {
          once: !0
        })
      }
      async _getInitTarget() {
        if ((0, ye.I)(null !== this._initTarget), this._initTarget instanceof Ue.j) return this._initTarget;
        const ee = await this._initTarget();
        return "canceled" === this.state ? await ee._close() : this._rememberTarget(ee), ee
      }
      _hasInitTarget() {
        return null !== this._initTarget
      }
      _getRootTarget() {
        if (this._rootTarget) return this._rootTarget;
        if (this._rootTargetPromise) return this._rootTargetPromise;
        if (this.VR instanceof Ue.j) return this._emit("target", {
          target: this.VR,
          request: null,
          isRoot: !0
        }), this._rootTarget = this.VR, this.VR;
        const ee = {
            path: this.VR.rootPath,
            isRoot: !0,
            mimeType: this.format.mimeType
          },
          ie = this._getTargetValidated(ee),
          He = ie => ("canceled" === this.state ? ie._close() : this._rememberTarget(ie), this._emit("target", {
            target: ie,
            request: ee,
            isRoot: !0
          }), this._rootTarget = ie, ie);
        return (0, ye.Qb)(ie) ? this._rootTargetPromise = ie.then(He) : He(ie)
      }
      _getRootWriter(ee) {
        return this._rootWriterPromise ??= (async () => {
          const ie = await this._getRootTarget(),
            He = new Fe.c(ie, "boolean" === typeof ee ? ee : ee(ie));
          return He.start(), He
        })()
      }
      addVideoTrack(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(ee instanceof Ke.j)) throw new TypeError("source must be a VideoSource.");
        if (ze(ie), void 0 !== ie.rotation && ![0, 90, 180, 270].includes(ie.rotation)) throw new TypeError(`Invalid video rotation: ${ie.rotation}. Has to be 0, 90, 180 or 270.`);
        if (void 0 !== ie.flip && "boolean" !== typeof ie.flip) throw new TypeError("metadata.flip, when provided, must be a boolean.");
        if (void 0 !== ie.transformationMatrix && (!Array.isArray(ie.transformationMatrix) || 9 !== ie.transformationMatrix.length || !ie.transformationMatrix.every((ee => Number.isFinite(ee))))) throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");
        if (void 0 !== ie.frameRate && (!Number.isFinite(ie.frameRate) || ie.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${ie.frameRate}. Must be a positive number.`);
        if (void 0 !== ie.hasOnlyKeyPackets && "boolean" !== typeof ie.hasOnlyKeyPackets) throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");
        if (void 0 !== ie.canBeTransparent && "boolean" !== typeof ie.canBeTransparent) throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");
        if (void 0 !== ie.decoderConfig && (0, Re.Z)({
            decoderConfig: ie.decoderConfig
          }, ee._codec), void 0 !== ie.primingPacket) {
          if (!(ie.primingPacket instanceof oe.c)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === ie.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const He = {
          ...ie
        };
        return He.group ??= this.defaultTrackGroup, this._addTrack(new fe(this.tracks.length + 1, this, ee, He))
      }
      addAudioTrack(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(ee instanceof Ke.c)) throw new TypeError("source must be an AudioSource.");
        if (ze(ie), void 0 !== ie.decoderConfig && (0, Re.U)({
            decoderConfig: ie.decoderConfig
          }, ee._codec), void 0 !== ie.primingPacket) {
          if (!(ie.primingPacket instanceof oe.c)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === ie.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const He = {
          ...ie
        };
        return He.group ??= this.defaultTrackGroup, this._addTrack(new Te(this.tracks.length + 1, this, ee, He))
      }
      addSubtitleTrack(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(ee instanceof Ke.i)) throw new TypeError("source must be a SubtitleSource.");
        ze(ie);
        const He = {
          ...ie
        };
        return He.group ??= this.defaultTrackGroup, this._addTrack(new pe(this.tracks.length + 1, this, ee, He))
      }
      setMetadataTags(ee) {
        if ((0, be.k)(ee), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
        this._metadataTags = ee
      }
      _addTrack(ee) {
        if ("pending" !== this.state) throw new Error("Cannot add track after output has been started or canceled.");
        if (ee.source._connectedTrack) throw new Error("Source is already used for a track.");
        const ie = this.format.getSupportedTrackCounts(),
          He = this.tracks.reduce(((ie, He) => ie + (He.type === ee.type ? 1 : 0)), 0),
          ye = ie[ee.type].max;
        if (He === ye) throw new Error(0 === ye ? `${this.format._name} does not support ${ee.type} tracks.` : `${this.format._name} does not support more than ${ye} ${ee.type} track` + (1 === ye ? "" : "s") + ".");
        const be = ie.total.max;
        if (this.tracks.length === be) throw new Error(`${this.format._name} does not support more than ${be} tracks` + (1 === be ? "" : "s") + " in total.");
        if (ee.isVideoTrack()) {
          const ie = this.format.getSupportedVideoCodecs();
          if (0 === ie.length) throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(ee.source._codec));
          if (!ie.includes(ee.source._codec)) throw new Error(`Codec '${ee.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${ie.map((ee=>`'${ee}'`)).join(", ")}.` + this.format._codecUnsupportedHint(ee.source._codec))
        } else if (ee.isAudioTrack()) {
          const ie = this.format.getSupportedAudioCodecs();
          if (0 === ie.length) throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(ee.source._codec));
          if (!ie.includes(ee.source._codec)) throw new Error(`Codec '${ee.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${ie.map((ee=>`'${ee}'`)).join(", ")}.` + this.format._codecUnsupportedHint(ee.source._codec))
        } else if (ee.isSubtitleTrack()) {
          const ie = this.format.getSupportedSubtitleCodecs();
          if (0 === ie.length) throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(ee.source._codec));
          if (!ie.includes(ee.source._codec)) throw new Error(`Codec '${ee.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${ie.map((ee=>`'${ee}'`)).join(", ")}.` + this.format._codecUnsupportedHint(ee.source._codec))
        }
        return this.tracks.push(ee), ee.source._connectedTrack = ee, ee
      }
      hasEnoughTracks() {
        const ee = this.format.getSupportedTrackCounts();
        for (const He of ke) {
          if (this.tracks.reduce(((ee, ie) => ee + (ie.type === He ? 1 : 0)), 0) < ee[He].min) return !1
        }
        const ie = ee.total.min;
        return !(this.tracks.length < ie)
      }
      async start() {
        const ee = this.format.getSupportedTrackCounts();
        for (const He of ke) {
          const ie = this.tracks.reduce(((ee, ie) => ee + (ie.type === He ? 1 : 0)), 0),
            ye = ee[He].min;
          if (ie < ye) throw new Error(ye === ee[He].max ? `${this.format._name} requires exactly ${ye} ${He} track${1===ye?"":"s"}.` : `${this.format._name} requires at least ${ye} ${He} track${1===ye?"":"s"}.`)
        }
        const ie = ee.total.min;
        if (this.tracks.length < ie) throw new Error(ie === ee.total.max ? `${this.format._name} requires exactly ${ie} track` + (1 === ie ? "" : "s") + "." : `${this.format._name} requires at least ${ie} track` + (1 === ie ? "" : "s") + ".");
        if ("canceled" === this.state) throw new Error("Output has been canceled.");
        return this._startPromise ? (Je.b._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
          this.state = "started";
          const ee = this._mutex.acquire();
          try {
            await this._muxer.start();
            const ee = this.tracks.map((ee => ee.source._start()));
            await Promise.all(ee)
          } finally {
            (await ee)()
          }
        })()
      }
      getMimeType() {
        return this._muxer.getMimeType()
      }
      async cancel() {
        return "canceled" === this.state ? this._cancelPromise ?? void 0 : "finalizing" !== this.state && "finalized" !== this.state ? this._cancelPromise = (async () => {
          this.state = "canceled";
          const ee = await this._mutex.acquire();
          try {
            const ee = this.tracks.map((ee => ee.source._flushOrWaitForOngoingClose(!0)));
            await Promise.all(ee), await Promise.all([...this._unfinalizedTargets].map((ee => ee._close()))), this._unfinalizedTargets.clear()
          } finally {
            ee()
          }
        })() : void("finalized" === this.state && Je.b._warn("Output has already been finalized."))
      }
      async finalize() {
        if ("pending" === this.state) throw new Error("Cannot finalize before starting.");
        if ("canceled" === this.state) throw new Error("Cannot finalize after canceling.");
        return this._finalizePromise ? (Je.b._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
          this.state = "finalizing";
          const ee = await this._mutex.acquire();
          try {
            const ee = this.tracks.map((ee => ee.source._flushOrWaitForOngoingClose(!1)));
            if (await Promise.all(ee), await this._muxer.finalize(), this._rootWriterPromise) {
              const ee = await this._rootWriterPromise;
              ee.finalized || (await ee.flush(), await ee.finalize())
            }
            this._onFinalize && await this._onFinalize(), this.state = "finalized"
          } catch (ie) {
            throw this.state = "canceled", ie
          } finally {
            await Promise.all([...this._unfinalizedTargets].map((ee => ee._close().catch((() => {}))))), this._unfinalizedTargets.clear(), ee()
          }
        })()
      }
    }
  },
  40738: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      e: () => be
    });
    var ye = He(40671);
    const be = new Uint8Array(0);
    class Me {
      constructor(ee, ie, He, ye) {
        let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Ke = arguments.length > 5 ? arguments[5] : void 0,
          Ue = arguments.length > 6 ? arguments[6] : void 0;
        if (this.data = ee, this.type = ie, this.timestamp = He, this.duration = ye, this.sequenceNumber = Me, ee === be && void 0 === Ke) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
        if (void 0 === Ke && (Ke = ee.byteLength), !(ee instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("key" !== ie && "delta" !== ie) throw new TypeError('type must be either "key" or "delta".');
        if (!Number.isFinite(He)) throw new TypeError("timestamp must be a number.");
        if (!Number.isFinite(ye) || ye < 0) throw new TypeError("duration must be a non-negative number.");
        if (!Number.isFinite(Me)) throw new TypeError("sequenceNumber must be a number.");
        if (!Number.isInteger(Ke) || Ke < 0) throw new TypeError("byteLength must be a non-negative integer.");
        if (void 0 !== Ue && ("object" !== typeof Ue || !Ue)) throw new TypeError("sideData, when provided, must be an object.");
        if (void 0 !== Ue?.alpha && !(Ue.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
        if (void 0 !== Ue?.alphaByteLength && (!Number.isInteger(Ue.alphaByteLength) || Ue.alphaByteLength < 0)) throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
        this.byteLength = Ke, this.sideData = Ue ?? {}, this.sideData.alpha && void 0 === this.sideData.alphaByteLength && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength)
      }
      get isMetadataOnly() {
        return this.data === be
      }
      get microsecondTimestamp() {
        return Math.trunc(ye.s * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(ye.s * this.duration)
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
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type;
        if (!this.sideData.alpha) throw new TypeError("This packet does not contain alpha side data.");
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.sideData.alpha,
          type: ee,
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
      static fromEncodedChunk(ee, ie) {
        if (!(ee instanceof EncodedVideoChunk || ee instanceof EncodedAudioChunk)) throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
        const He = new Uint8Array(ee.byteLength);
        return ee.copyTo(He), new Me(He, ee.type, ee.timestamp / 1e6, (ee.duration ?? 0) / 1e6, void 0, void 0, ie)
      }
      clone(ee) {
        if (void 0 !== ee && ("object" !== typeof ee || null === ee)) throw new TypeError("options, when provided, must be an object.");
        if (void 0 !== ee?.data && !(ee.data instanceof Uint8Array)) throw new TypeError("options.data, when provided, must be a Uint8Array.");
        if (void 0 !== ee?.type && "key" !== ee.type && "delta" !== ee.type) throw new TypeError('options.type, when provided, must be either "key" or "delta".');
        if (void 0 !== ee?.timestamp && !Number.isFinite(ee.timestamp)) throw new TypeError("options.timestamp, when provided, must be a number.");
        if (void 0 !== ee?.duration && !Number.isFinite(ee.duration)) throw new TypeError("options.duration, when provided, must be a number.");
        if (void 0 !== ee?.sequenceNumber && !Number.isFinite(ee.sequenceNumber)) throw new TypeError("options.sequenceNumber, when provided, must be a number.");
        if (void 0 !== ee?.sideData && ("object" !== typeof ee.sideData || null === ee.sideData)) throw new TypeError("options.sideData, when provided, must be an object.");
        return new Me(ee?.data ?? this.data, ee?.type ?? this.type, ee?.timestamp ?? this.timestamp, ee?.duration ?? this.duration, ee?.sequenceNumber ?? this.sequenceNumber, this.byteLength, ee?.sideData ?? this.sideData)
      }
    }
  },
  40746: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ye,
      c: () => qe,
      d: () => ue,
      e: () => Ce,
      f: () => ge
    });
    var ye = He(40671),
      be = He(40703),
      Me = function(ee, ie, He) {
        if (null !== ie && void 0 !== ie) {
          if ("object" !== typeof ie && "function" !== typeof ie) throw new TypeError("Object expected.");
          var ye, be;
          if (He) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            ye = ie[Symbol.asyncDispose]
          }
          if (void 0 === ye) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            ye = ie[Symbol.dispose], He && (be = ye)
          }
          if ("function" !== typeof ye) throw new TypeError("Object not disposable.");
          be && (ye = function() {
            try {
              be.call(this)
            } catch (ee) {
              return Promise.reject(ee)
            }
          }), ee.stack.push({
            value: ie,
            dispose: ye,
            async: He
          })
        } else He && ee.stack.push({
          async: !0
        });
        return ie
      },
      Ke = function(ee) {
        return function(ie) {
          function He(He) {
            ie.error = ie.hasError ? new ee(He, ie.error, "An error was suppressed during disposal.") : He, ie.hasError = !0
          }
          var ye, be = 0;
          return function ee() {
            for (; ye = ie.stack.pop();) try {
              if (!ye.async && 1 === be) return be = 0, ie.stack.push(ye), Promise.resolve().then(ee);
              if (ye.dispose) {
                var Me = ye.dispose.call(ye.value);
                if (ye.async) return be |= 2, Promise.resolve(Me).then(ee, (function(ie) {
                  return He(ie), ee()
                }))
              } else be |= 1
            } catch (Ke) {
              He(Ke)
            }
            if (1 === be) return ie.hasError ? Promise.reject(ie.error) : Promise.resolve();
            if (ie.hasError) throw ie.error
          }()
        }
      }("function" === typeof SuppressedError ? SuppressedError : function(ee, ie, He) {
        var ye = new Error(He);
        return ye.name = "SuppressedError", ye.error = ee, ye.suppressed = ie, ye
      });
    (0, ye.rc)();
    let Ue = -1 / 0,
      Fe = -1 / 0,
      Je = null;
    "undefined" !== typeof FinalizationRegistry && (Je = new FinalizationRegistry((ee => {
      const ie = performance.now();
      "video" === ee.type ? (ie - Ue >= 1e3 && (be.b._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), Ue = ie), "undefined" !== typeof VideoFrame && ee.data instanceof VideoFrame && ee.data.close()) : (ie - Fe >= 1e3 && (be.b._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), Fe = ie), "undefined" !== typeof AudioData && ee.data instanceof AudioData && ee.data.close())
    })));
    class oe {
      constructor() {
        this._referenceCount = 0, this._lastAllocationBuffer = null
      }
    }
    const Re = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
      ke = new Set(Re);
    class qe {
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
        return Math.trunc(ye.s * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(ye.s * this.duration)
      }
      get hasAlpha() {
        return this.format && this.format.includes("A")
      }
      constructor(ee, ie) {
        if (this._closed = !1, ee instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && ee instanceof SharedArrayBuffer || ArrayBuffer.isView(ee)) {
          if (!ie || "object" !== typeof ie) throw new TypeError("init must be an object.");
          if (void 0 === ie.format || !ke.has(ie.format)) throw new TypeError("init.format must be one of: " + Re.join(", "));
          if (!Number.isInteger(ie.codedWidth) || ie.codedWidth <= 0) throw new TypeError("init.codedWidth must be a positive integer.");
          if (!Number.isInteger(ie.codedHeight) || ie.codedHeight <= 0) throw new TypeError("init.codedHeight must be a positive integer.");
          if (void 0 !== ie.rotation && ![0, 90, 180, 270].includes(ie.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== ie.flip && "boolean" !== typeof ie.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(ie.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== ie.duration && (!Number.isFinite(ie.duration) || ie.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== ie.layout) {
            if (!Array.isArray(ie.layout)) throw new TypeError("init.layout, when provided, must be an array.");
            for (const ee of ie.layout) {
              if (!ee || "object" !== typeof ee || Array.isArray(ee)) throw new TypeError("Each entry in init.layout must be an object.");
              if (!Number.isInteger(ee.offset) || ee.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
              if (!Number.isInteger(ee.stride) || ee.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
            }
          }
          if (void 0 !== ie.visibleRect && (0, ye.sd)(ie.visibleRect, "init.visibleRect"), void 0 !== ie.displayWidth && (!Number.isInteger(ie.displayWidth) || ie.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
          if (void 0 !== ie.displayHeight && (!Number.isInteger(ie.displayHeight) || ie.displayHeight <= 0)) throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
          if (void 0 !== ie.displayWidth !== (void 0 !== ie.displayHeight)) throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
          this.format = ie.format, this.rotation = ie.rotation ?? 0, this.flip = ie.flip ?? !1, this.timestamp = ie.timestamp, this.duration = ie.duration ?? 0;
          const He = ie.layout ?? de(ie.format, ie.codedWidth, ie.codedHeight);
          let be = ie.colorSpace ?? null;
          null === be && (be = "RGBA" === this.format || "RGBX" === this.format || "BGRA" === this.format || "BGRX" === this.format ? {
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
            left: ie.visibleRect?.left ?? 0,
            top: ie.visibleRect?.top ?? 0,
            width: ie.visibleRect?.width ?? ie.codedWidth,
            height: ie.visibleRect?.height ?? ie.codedHeight
          }, void 0 !== ie.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? ie.displayWidth : ie.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? ie.displayHeight : ie.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height), this._data = ie._doNotCopy ? (0, ye.od)(ee) : (0, ye.od)(ee).slice(), this._layout = He, this.colorSpace = new ze(be)
        } else if ("undefined" !== typeof VideoFrame && ee instanceof VideoFrame) {
          if (void 0 !== ie?.rotation && ![0, 90, 180, 270].includes(ie.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== ie?.flip && "boolean" !== typeof ie.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (void 0 !== ie?.timestamp && !Number.isFinite(ie?.timestamp)) throw new TypeError("init.timestamp, when provided, must be a number.");
          if (void 0 !== ie?.duration && (!Number.isFinite(ie.duration) || ie.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          void 0 !== ie?.visibleRect && (0, ye.sd)(ie.visibleRect, "init.visibleRect"), this._data = ee, this._layout = null, this.format = ee.format, this.visibleRect = {
            left: ee.visibleRect?.x ?? 0,
            top: ee.visibleRect?.y ?? 0,
            width: ee.visibleRect?.width ?? ee.codedWidth,
            height: ee.visibleRect?.height ?? ee.codedHeight
          }, this.rotation = ie?.rotation ?? 0, this.flip = ie?.flip ?? !1, this.squarePixelWidth = ee.displayWidth, this.squarePixelHeight = ee.displayHeight, this.timestamp = ie?.timestamp ?? ee.timestamp / 1e6, this.duration = ie?.duration ?? (ee.duration ?? 0) / 1e6, this.colorSpace = new ze(ee.colorSpace)
        } else if ("undefined" !== typeof HTMLImageElement && ee instanceof HTMLImageElement || "undefined" !== typeof SVGImageElement && ee instanceof SVGImageElement || "undefined" !== typeof ImageBitmap && ee instanceof ImageBitmap || "undefined" !== typeof HTMLVideoElement && ee instanceof HTMLVideoElement || "undefined" !== typeof HTMLCanvasElement && ee instanceof HTMLCanvasElement || "undefined" !== typeof OffscreenCanvas && ee instanceof OffscreenCanvas) {
          if (!ie || "object" !== typeof ie) throw new TypeError("init must be an object.");
          if (void 0 !== ie.rotation && ![0, 90, 180, 270].includes(ie.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== ie.flip && "boolean" !== typeof ie.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(ie.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== ie.duration && (!Number.isFinite(ie.duration) || ie.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== ie.visibleRect && (0, ye.sd)(ie.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new qe(new VideoFrame(ee, {
            timestamp: Math.trunc(ie.timestamp * ye.s),
            duration: Math.trunc((ie.duration ?? 0) * ye.s) || void 0,
            visibleRect: ie.visibleRect && {
              x: ie.visibleRect.left,
              y: ie.visibleRect.top,
              width: ie.visibleRect.width,
              height: ie.visibleRect.height
            }
          }), ie);
          let He = 0,
            be = 0;
          if ("naturalWidth" in ee ? (He = ee.naturalWidth, be = ee.naturalHeight) : "videoWidth" in ee ? (He = ee.videoWidth, be = ee.videoHeight) : "width" in ee && (He = Number(ee.width), be = Number(ee.height)), !He || !be) throw new TypeError("Could not determine dimensions.");
          const Me = ie.visibleRect ?? {
              left: 0,
              top: 0,
              width: He,
              height: be
            },
            Ke = new OffscreenCanvas(Me.width, Me.height),
            Ue = Ke.getContext("2d", {
              alpha: (0, ye.Cb)(),
              willReadFrequently: !0
            });
          if (!Ue) throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
          Ue.drawImage(ee, -Me.left, -Me.top), this._data = Ke, this._layout = null, this.format = "RGBX", this.visibleRect = {
            left: 0,
            top: 0,
            width: Me.width,
            height: Me.height
          }, this.squarePixelWidth = Me.width, this.squarePixelHeight = Me.height, this.rotation = ie.rotation ?? 0, this.flip = ie.flip ?? !1, this.timestamp = ie.timestamp, this.duration = ie.duration ?? 0, this.colorSpace = new ze({
            matrix: "rgb",
            primaries: "bt709",
            transfer: "iec61966-2-1",
            fullRange: !0
          })
        } else {
          if (!(ee instanceof oe)) throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
          if (!ie || "object" !== typeof ie) throw new TypeError("init must be an object.");
          if (void 0 !== ie.rotation && ![0, 90, 180, 270].includes(ie.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== ie.flip && "boolean" !== typeof ie.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(ie.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== ie.duration && (!Number.isFinite(ie.duration) || ie.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (this._data = ee, ee._referenceCount++, this.format = ee.getFormat(), null !== this.format && !Re.includes(this.format)) throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
          if (this.visibleRect = {
              left: 0,
              top: 0,
              width: ee.getCodedWidth(),
              height: ee.getCodedHeight()
            }, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw new TypeError("getCodedWidth() must return a positive integer.");
          if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw new TypeError("getCodedHeight() must return a positive integer.");
          if (this.squarePixelWidth = ee.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw new TypeError("getSquarePixelWidth() must return a positive integer.");
          if (this.squarePixelHeight = ee.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw new TypeError("getSquarePixelHeight() must return a positive integer.");
          this.rotation = ie.rotation ?? 0, this.flip = ie.flip ?? !1, this.timestamp = ie.timestamp, this.duration = ie.duration ?? 0, this.colorSpace = ee.getColorSpace()
        }
        this.encodeOptions = ie?.encodeOptions ?? {}, this.pixelAspectRatio = (0, ye.bd)({
          num: this.squarePixelWidth * this.codedHeight,
          den: this.squarePixelHeight * this.codedWidth
        }), Je?.register(this, {
          type: "video",
          data: this._data
        }, this)
      }
      clone() {
        if (this._closed) throw new Error("VideoSample is closed.");
        return (0, ye.I)(null !== this._data), this._data instanceof oe ? new qe(this._data, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : Be(this._data) ? new qe(this._data.clone(), {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : this._data instanceof Uint8Array ? ((0, ye.I)(this._layout), new qe(this._data, {
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
        })) : new qe(this._data, {
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
        this._closed || (Je?.unregister(this), this._data instanceof oe ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : Be(this._data) ? this._data.close() : this._data = null, this._closed = !0)
      }
      allocationSize() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (Oe(ee), this._closed) throw new Error("VideoSample is closed.");
        if (null == (ee.format ?? this.format)) throw new Error("Cannot get allocation size when format is null.");
        if (Be(this._data)) return this._data.allocationSize(ee);
        return te(this, ee).allocationSize
      }
      async copyTo(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, ye.sb)(ee)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (Oe(ie), this._closed) throw new Error("VideoSample is closed.");
        if (null == (ie.format ?? this.format)) throw new Error("Cannot copy video sample data when format is null.");
        if ((0, ye.I)(null !== this._data), Be(this._data)) return this._data.copyTo(ee, ie);
        if (ie.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(ie.format)) {
          if (!(this._data instanceof oe)) {
            if ("undefined" === typeof VideoFrame) throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
            const He = this.toVideoFrame(),
              ye = await He.copyTo(ee, ie);
            return He.close(), ye
          } {
            const He = {
              stack: [],
              error: void 0,
              hasError: !1
            };
            try {
              const ye = Me(He, await this._data.toRgbSample({
                timestamp: this.timestamp,
                duration: this.duration,
                rotation: this.rotation,
                flip: this.flip
              }, ie.colorSpace ?? "srgb"), !1);
              if (!(ye instanceof qe)) throw new TypeError("toRgbSample() must return a VideoSample.");
              if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(ye.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${ye.format}' instead.`);
              return await ye.copyTo(ee, ie)
            } catch (ke) {
              He.error = ke, He.hasError = !0
            } finally {
              Ke(He)
            }
          }
        }
        const He = te(this, ie);
        (0, ye.I)(this.format);
        const be = (0, ye.od)(ee);
        if (be.byteLength < He.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${He.allocationSize}, Available: ${be.byteLength}`);
        const Ue = We(this.format);
        let Fe;
        if (this._data instanceof oe) {
          let ee = this._data.getDataPlanes();
          if ((0, ye.Qb)(ee) && (ee = await ee), !Array.isArray(ee) || ee.some((ee => !(ee.data instanceof Uint8Array) || !Number.isInteger(ee.stride) || ee.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');
          Fe = ee
        } else if (this._data instanceof Uint8Array)(0, ye.I)(this._layout), (0, ye.I)(this._layout.length === Ue.length), Fe = this._layout.map(((ee, ie) => {
          const He = Math.ceil(this.codedHeight / Ue[ie].heightDivisor);
          return {
            data: this._data.subarray(ee.offset, ee.offset + ee.stride * He),
            stride: ee.stride
          }
        }));
        else {
          const ee = this._data.getContext("2d");
          (0, ye.I)(ee);
          const ie = ee.getImageData(0, 0, this.codedWidth, this.codedHeight);
          Fe = [{
            data: (0, ye.od)(ie.data),
            stride: 4 * this.codedWidth
          }]
        }
        const Je = [],
          Re = Ue.length;
        for (let ye = 0; ye < Re; ye++) {
          const ee = He.computedLayouts[ye],
            ie = Fe[ye].stride,
            Me = Fe[ye].data;
          let Ke = ee.sourceTop * ie;
          Ke += ee.sourceLeftBytes;
          let Ue = ee.destinationOffset;
          const oe = ee.sourceWidthBytes,
            Re = {
              offset: Ue,
              stride: ee.destinationStride
            };
          for (let He = 0; He < ee.sourceHeight; He++) {
            if (Ke + oe > Me.byteLength) throw new Error("Source buffer OOB read.");
            if (Ue + oe > be.byteLength) throw new Error("Destination buffer OOB write.");
            const He = Me.subarray(Ke, Ke + oe);
            be.set(He, Ue), Ke += ie, Ue += ee.destinationStride
          }
          Je.push(Re)
        }
        if (void 0 !== ie.format) {
          const ee = this.format.startsWith("RGB") !== ie.format.startsWith("RGB"),
            ye = this.format.includes("X") && ie.format.includes("A");
          if (ee || ye)
            for (let ie = 0; ie < He.allocationSize; ie += 4) {
              if (ee) {
                const ee = be[ie],
                  He = be[ie + 2];
                be[ie] = He, be[ie + 2] = ee
              }
              ye && (be[ie + 3] = 255)
            }
        }
        return Je
      }
      toVideoFrame() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, ye.I)(null !== this._data), this._data instanceof oe) {
          if (null === this.format) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
          const ee = this._data.getDataPlanes();
          if ((0, ye.Qb)(ee)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
          const ie = ee.reduce(((ee, ie) => ee + ie.data.byteLength), 0),
            He = new Uint8Array(ie);
          let be = 0;
          const Me = [];
          for (const ye of ee) He.set(ye.data, be), Me.push(be), be += ye.data.byteLength;
          return new VideoFrame(He, {
            format: this.format,
            layout: ee.map(((ee, ie) => ({
              offset: Me[ie],
              stride: ee.stride
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
        return Be(this._data) ? new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        }) : this._data instanceof Uint8Array ? ((0, ye.I)(this._layout), new VideoFrame(this._data, {
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
      draw(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        let Je = 0,
          oe = 0,
          Re = this.displayWidth,
          ke = this.displayHeight,
          qe = 0,
          fe = 0,
          Te = this.displayWidth,
          pe = this.displayHeight;
        if (void 0 !== Me ? (Je = ie, oe = He, Re = ye, ke = be, qe = Me, fe = Ke, void 0 !== Ue ? (Te = Ue, pe = Fe) : (Te = Re, pe = ke)) : (qe = ie, fe = He, void 0 !== ye && (Te = ye, pe = be)), !("undefined" !== typeof CanvasRenderingContext2D && ee instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && ee instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Number.isFinite(Je)) throw new TypeError("sx must be a number.");
        if (!Number.isFinite(oe)) throw new TypeError("sy must be a number.");
        if (!Number.isFinite(Re) || Re < 0) throw new TypeError("sWidth must be a non-negative number.");
        if (!Number.isFinite(ke) || ke < 0) throw new TypeError("sHeight must be a non-negative number.");
        if (!Number.isFinite(qe)) throw new TypeError("dx must be a number.");
        if (!Number.isFinite(fe)) throw new TypeError("dy must be a number.");
        if (!Number.isFinite(Te) || Te < 0) throw new TypeError("dWidth must be a non-negative number.");
        if (!Number.isFinite(pe) || pe < 0) throw new TypeError("dHeight must be a non-negative number.");
        if (this._closed) throw new Error("VideoSample is closed.");
        ({
          sx: Je,
          sy: oe,
          sWidth: Re,
          sHeight: ke
        } = this._unmapSourceRegion(Je, oe, Re, ke, this.rotation, this.flip));
        const Xe = this.toCanvasImageSource();
        ee.save();
        const ze = qe + Te / 2,
          Be = fe + pe / 2;
        ee.translate(ze, Be), this.flip && ee.scale(-1, 1), ee.rotate(this.rotation * Math.PI / 180);
        const Ee = this.rotation % 180 === 0 ? 1 : Te / pe;
        ee.scale(1 / Ee, Ee), ee.drawImage(Xe, Je, oe, Re, ke, -Te / 2, -pe / 2, Te, pe), ee.restore()
      }
      drawWithFit(ee, ie) {
        if (!("undefined" !== typeof CanvasRenderingContext2D && ee instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && ee instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!ie || "object" !== typeof ie) throw new TypeError("options must be an object.");
        if (!["fill", "contain", "cover"].includes(ie.fit)) throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
        if (void 0 !== ie.rotation && ![0, 90, 180, 270].includes(ie.rotation)) throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
        if (void 0 !== ie.flip && "boolean" !== typeof ie.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        void 0 !== ie.crop && ge(ie.crop, "options.");
        const He = ee.canvas.width,
          ye = ee.canvas.height,
          be = ie.rotation ?? this.rotation,
          Me = ie.flip ?? this.flip,
          [Ke, Ue] = be % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let Fe, Je, oe, Re, ke = ie.crop;
        ke && (ke = Ee(ke, Ke, Ue));
        const {
          sx: qe,
          sy: fe,
          sWidth: Te,
          sHeight: pe
        } = this._unmapSourceRegion(ie.crop?.left ?? 0, ie.crop?.top ?? 0, ie.crop?.width ?? Ke, ie.crop?.height ?? Ue, be, Me);
        if ("fill" === ie.fit) Fe = 0, Je = 0, oe = He, Re = ye;
        else {
          const [ee, be] = ie.crop ? [ie.crop.width, ie.crop.height] : [Ke, Ue], Me = "contain" === ie.fit ? Math.min(He / ee, ye / be) : Math.max(He / ee, ye / be);
          oe = ee * Me, Re = be * Me, Fe = (He - oe) / 2, Je = (ye - Re) / 2
        }
        ee.save();
        const Xe = be % 180 === 0 ? 1 : oe / Re;
        ee.translate(He / 2, ye / 2), Me && ee.scale(-1, 1), ee.rotate(be * Math.PI / 180), ee.scale(1 / Xe, Xe), ee.translate(-He / 2, -ye / 2), ee.drawImage(this.toCanvasImageSource(), qe, fe, Te, pe, Fe, Je, oe, Re), ee.restore()
      }
      _unmapSourceRegion(ee, ie, He, ye, be, Me) {
        if (Me) {
          ee = (be % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight) - ee - He
        }
        return 90 === be ? [ee, ie, He, ye] = [ie, this.squarePixelHeight - ee - He, ye, He] : 180 === be ? [ee, ie] = [this.squarePixelWidth - ee - He, this.squarePixelHeight - ie - ye] : 270 === be && ([ee, ie, He, ye] = [this.squarePixelWidth - ie - ye, ee, ye, He]), {
          sx: ee,
          sy: ie,
          sWidth: He,
          sHeight: ye
        }
      }
      _drawWithFitAndMipmapping(ee, ie, He) {
        const ye = ee.width,
          be = ee.height,
          [Me, Ke] = He.rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth],
          Ue = He.crop ? He.crop.width : Me,
          Fe = He.crop ? He.crop.height : Ke;
        let Je = 0;
        2 * ye < Ue && 2 * be < Fe && (Je = Math.floor(Math.log2(Math.min(Ue / ye, Fe / be))));
        const oe = ye * 2 ** Je,
          Re = be * 2 ** Je,
          {
            canvas: ke,
            context: qe,
            isNew: fe
          } = Je > 0 ? Xe(oe, Re) : {
            canvas: ee,
            context: ie,
            isNew: He.targetIsFresh
          };
        qe.imageSmoothingQuality = "high", He.fillBlack ? (qe.fillStyle = "black", qe.fillRect(0, 0, oe, Re)) : fe || qe.clearRect(0, 0, oe, Re), this.drawWithFit(qe, {
          fit: He.fit,
          rotation: He.rotation,
          flip: He.flip,
          crop: He.crop
        }), qe.globalCompositeOperation = "copy";
        for (let Te = Je; Te > 1; Te--) {
          const ee = ye * 2 ** Te,
            ie = be * 2 ** Te;
          qe.drawImage(ke, 0, 0, ee, ie, 0, 0, ee / 2, ie / 2)
        }
        qe.globalCompositeOperation = "source-over", Je > 0 && (ie.imageSmoothingQuality = "high", ie.globalCompositeOperation = "copy", ie.drawImage(ke, 0, 0, 2 * ye, 2 * be, 0, 0, ye, be), ie.globalCompositeOperation = "source-over")
      }
      toCanvasImageSource() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, ye.I)(null !== this._data), this._data instanceof oe || this._data instanceof Uint8Array) {
          const ee = this.toVideoFrame();
          return queueMicrotask((() => ee.close())), ee
        }
        return this._data
      }
      async transform(ee) {
        if (!ee || "object" !== typeof ee) throw new TypeError("options must be an object.");
        if (void 0 !== ee.width && (!Number.isInteger(ee.width) || ee.width <= 0)) throw new TypeError("options.width, when provided, must be a positive integer.");
        if (void 0 !== ee.height && (!Number.isInteger(ee.height) || ee.height <= 0)) throw new TypeError("options.height, when provided, must be a positive integer.");
        if (void 0 !== ee.roundDimensionsTo && (!Number.isInteger(ee.roundDimensionsTo) || ee.roundDimensionsTo <= 0)) throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
        if (void 0 !== ee.fit && !["fill", "contain", "cover"].includes(ee.fit)) throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
        if (void 0 !== ee.width && void 0 !== ee.height && void 0 === ee.fit) throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
        if (void 0 !== ee.rotate && ![0, 90, 180, 270].includes(ee.rotate)) throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
        if (void 0 !== ee.flip && "boolean" !== typeof ee.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        if (void 0 !== ee.crop && ge(ee.crop, "options."), void 0 !== ee.alpha && !["keep", "discard"].includes(ee.alpha)) throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
        const {
          rotation: ie,
          flip: He
        } = (0, ye.bb)(this.rotation, this.flip, ee.rotate ?? 0, ee.flip ?? !1), [be, Me] = ie % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let Ke = ee.crop;
        Ke && (Ke = Ee(Ke, be, Me));
        const Ue = Ke ? Ke.width : be,
          Fe = Ke ? Ke.height : Me,
          Je = Ue / Fe;
        let oe, Re;
        void 0 !== ee.width && void 0 === ee.height ? (oe = ee.width, Re = oe / Je) : void 0 === ee.width && void 0 !== ee.height ? (Re = ee.height, oe = Re * Je) : void 0 !== ee.width && void 0 !== ee.height ? (oe = ee.width, Re = ee.height) : (oe = Ue, Re = Fe), oe = (0, ye.Oc)(oe, ee.roundDimensionsTo ?? 1), Re = (0, ye.Oc)(Re, ee.roundDimensionsTo ?? 1);
        const ke = {
          width: oe,
          height: Re,
          fit: ee.fit ?? "fill",
          rotation: ie,
          flip: He,
          crop: Ke ?? {
            left: 0,
            top: 0,
            width: be,
            height: Me
          },
          alpha: ee.alpha ?? "keep"
        };
        for (const qe of fe) {
          let ee = qe(this, ke);
          if ((0, ye.Qb)(ee) && (ee = await ee), null !== ee) return ee
        }
        const {
          canvas: Te,
          context: pe,
          isNew: ze
        } = Xe(ke.width, ke.height);
        return this._drawWithFitAndMipmapping(Te, pe, {
          fit: ke.fit,
          rotation: ke.rotation,
          flip: ke.flip,
          crop: ke.crop,
          targetIsFresh: ze,
          fillBlack: "discard" === ke.alpha
        }), new qe(Te, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: 0,
          flip: !1
        })
      }
      setRotation(ee) {
        if (![0, 90, 180, 270].includes(ee)) throw new TypeError("newRotation must be 0, 90, 180, or 270.");
        this.rotation = ee
      }
      setFlip(ee) {
        if ("boolean" !== typeof ee) throw new TypeError("newFlip must be a boolean.");
        this.flip = ee
      }
      setTimestamp(ee) {
        if (!Number.isFinite(ee)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = ee
      }
      setDuration(ee) {
        if (!Number.isFinite(ee) || ee < 0) throw new TypeError("newDuration must be a non-negative number.");
        this.duration = ee
      }
      setEncodeOptions(ee) {
        if (!ee || "object" !== typeof ee) throw new TypeError("newEncodeOptions must be an object.");
        this.encodeOptions = ee
      } [Symbol.dispose]() {
        this.close()
      }
    }
    const fe = [],
      Te = [];
    let pe = 0;
    const Xe = (ee, ie) => {
      for (const ye of Te)
        if (ye.canvas.width === ee && ye.canvas.height === ie) return ye.age = pe++, {
          canvas: ye.canvas,
          context: ye.context,
          isNew: !1
        };
      let He;
      if ("undefined" !== typeof OffscreenCanvas) He = new OffscreenCanvas(ee, ie);
      else {
        if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
        He = document.createElement("canvas"), He.width = ee, He.height = ie
      }
      const be = He.getContext("2d", {
        alpha: !0,
        willReadFrequently: !1
      });
      if (!be) throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
      return Te.length >= 3 && Te.splice((0, ye.E)(Te, (ee => ee.age)), 1), Te.push({
        canvas: He,
        context: be,
        age: pe++
      }), {
        canvas: He,
        context: be,
        isNew: !0
      }
    };
    class ze {
      constructor(ee) {
        if (void 0 !== ee) {
          if (!ee || "object" !== typeof ee) throw new TypeError("init.colorSpace, when provided, must be an object.");
          const ie = Object.keys(ye.f);
          if (null != ee.primaries && !ie.includes(ee.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${ie.join(", ")}.`);
          const He = Object.keys(ye.t);
          if (null != ee.transfer && !He.includes(ee.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${He.join(", ")}.`);
          const be = Object.keys(ye.o);
          if (null != ee.matrix && !be.includes(ee.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${be.join(", ")}.`);
          if (null != ee.fullRange && "boolean" !== typeof ee.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
        }
        this.primaries = ee?.primaries ?? null, this.transfer = ee?.transfer ?? null, this.matrix = ee?.matrix ?? null, this.fullRange = ee?.fullRange ?? null
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
    const Be = ee => "undefined" !== typeof VideoFrame && ee instanceof VideoFrame,
      Ee = (ee, ie, He) => {
        const be = Math.min(ee.left, ie),
          Me = Math.min(ee.top, He),
          Ke = Math.min(ee.width, ie - be),
          Ue = Math.min(ee.height, He - Me);
        return (0, ye.I)(Ke >= 0), (0, ye.I)(Ue >= 0), {
          left: be,
          top: Me,
          width: Ke,
          height: Ue
        }
      },
      ge = (ee, ie) => {
        if (!ee || "object" !== typeof ee) throw new TypeError(ie + "crop, when provided, must be an object.");
        if (!Number.isInteger(ee.left) || ee.left < 0) throw new TypeError(ie + "crop.left must be a non-negative integer.");
        if (!Number.isInteger(ee.top) || ee.top < 0) throw new TypeError(ie + "crop.top must be a non-negative integer.");
        if (!Number.isInteger(ee.width) || ee.width < 0) throw new TypeError(ie + "crop.width must be a non-negative integer.");
        if (!Number.isInteger(ee.height) || ee.height < 0) throw new TypeError(ie + "crop.height must be a non-negative integer.")
      },
      Oe = ee => {
        if (!ee || "object" !== typeof ee) throw new TypeError("options must be an object.");
        if (void 0 !== ee.colorSpace && !["display-p3", "srgb"].includes(ee.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
        if (void 0 !== ee.format && "string" !== typeof ee.format) throw new TypeError("options.format, when provided, must be a string.");
        if (void 0 !== ee.layout) {
          if (!Array.isArray(ee.layout)) throw new TypeError("options.layout, when provided, must be an array.");
          for (const ie of ee.layout) {
            if (!ie || "object" !== typeof ie) throw new TypeError("Each entry in options.layout must be an object.");
            if (!Number.isInteger(ie.offset) || ie.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
            if (!Number.isInteger(ie.stride) || ie.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
          }
        }
        if (void 0 !== ee.rect) {
          if (!ee.rect || "object" !== typeof ee.rect) throw new TypeError("options.rect, when provided, must be an object.");
          if (void 0 !== ee.rect.x && (!Number.isInteger(ee.rect.x) || ee.rect.x < 0)) throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
          if (void 0 !== ee.rect.y && (!Number.isInteger(ee.rect.y) || ee.rect.y < 0)) throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
          if (void 0 !== ee.rect.width && (!Number.isInteger(ee.rect.width) || ee.rect.width < 0)) throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
          if (void 0 !== ee.rect.height && (!Number.isInteger(ee.rect.height) || ee.rect.height < 0)) throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")
        }
      },
      de = (ee, ie, He) => {
        const ye = We(ee),
          be = [];
        let Me = 0;
        for (const Ke of ye) {
          const ee = Math.ceil(ie / Ke.widthDivisor),
            ye = Math.ceil(He / Ke.heightDivisor),
            Ue = ee * Ke.sampleBytes,
            Fe = Ue * ye;
          be.push({
            offset: Me,
            stride: Ue
          }), Me += Fe
        }
        return be
      },
      We = ee => {
        const ie = (ee, ie, He, ye, be) => {
          const Me = [{
            sampleBytes: ee,
            widthDivisor: 1,
            heightDivisor: 1
          }, {
            sampleBytes: ie,
            widthDivisor: He,
            heightDivisor: ye
          }, {
            sampleBytes: ie,
            widthDivisor: He,
            heightDivisor: ye
          }];
          return be && Me.push({
            sampleBytes: ee,
            widthDivisor: 1,
            heightDivisor: 1
          }), Me
        };
        switch (ee) {
          case "I420":
            return ie(1, 1, 2, 2, !1);
          case "I420P10":
          case "I420P12":
            return ie(2, 2, 2, 2, !1);
          case "I420A":
            return ie(1, 1, 2, 2, !0);
          case "I420AP10":
          case "I420AP12":
            return ie(2, 2, 2, 2, !0);
          case "I422":
            return ie(1, 1, 2, 1, !1);
          case "I422P10":
          case "I422P12":
            return ie(2, 2, 2, 1, !1);
          case "I422A":
            return ie(1, 1, 2, 1, !0);
          case "I422AP10":
          case "I422AP12":
            return ie(2, 2, 2, 1, !0);
          case "I444":
            return ie(1, 1, 1, 1, !1);
          case "I444P10":
          case "I444P12":
            return ie(2, 2, 1, 1, !1);
          case "I444A":
            return ie(1, 1, 1, 1, !0);
          case "I444AP10":
          case "I444AP12":
            return ie(2, 2, 1, 1, !0);
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
            (0, ye.G)(ee), (0, ye.I)(!1)
        }
      },
      te = (ee, ie) => {
        const He = {
            left: 0,
            top: 0,
            width: ee.codedWidth,
            height: ee.codedHeight
          },
          ye = ie.rect,
          be = Ze(He, ye, ee.codedWidth, ee.codedHeight, ee.format),
          Me = ie.layout;
        let Ke;
        if (ie.format && ie.format !== ee.format) {
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(ie.format)) throw new Error("NotSupportedError: Invalid destination format.");
          Ke = ie.format
        } else Ke = ee.format;
        return De(be, Ke, Me)
      },
      Ze = (ee, ie, He, ye, be) => {
        const Me = {
          ...ee
        };
        if (void 0 !== ie) {
          if (0 === ie.width || 0 === ie.height) throw new TypeError("visibleRect dimensions cannot be zero.");
          if ((ie.x || 0) + (ie.width || 0) > He) throw new TypeError("visibleRect exceeds codedWidth.");
          if ((ie.y || 0) + (ie.height || 0) > ye) throw new TypeError("visibleRect exceeds codedHeight.");
          Me.x = ie.x || 0, Me.y = ie.y || 0, Me.width = ie.width || 0, Me.height = ie.height || 0
        }
        if (!we(be, Me)) throw new TypeError("visibleRect alignment is invalid for the format.");
        return Me
      },
      we = (ee, ie) => {
        if (null === ee) return !0;
        const He = We(ee);
        for (let ye = 0; ye < He.length; ye++) {
          const ee = He[ye],
            be = ee.widthDivisor,
            Me = ee.heightDivisor;
          if ((ie.x || 0) % be !== 0) return !1;
          if ((ie.y || 0) % Me !== 0) return !1
        }
        return !0
      },
      De = (ee, ie, He) => {
        const ye = We(ie),
          be = ye.length;
        if (void 0 !== He && He.length !== be) throw new TypeError(`Layout must have ${be} planes.`);
        let Me = 0;
        const Ke = [],
          Ue = [];
        for (let Fe = 0; Fe < be; Fe++) {
          const ie = ye[Fe],
            be = ie.sampleBytes,
            Je = ie.widthDivisor,
            oe = ie.heightDivisor,
            Re = {
              destinationOffset: 0,
              destinationStride: 0,
              sourceTop: 0,
              sourceHeight: 0,
              sourceLeftBytes: 0,
              sourceWidthBytes: 0
            };
          if (Re.sourceTop = Math.ceil(Math.trunc(ee.y || 0) / oe), Re.sourceHeight = Math.ceil(Math.trunc(ee.height || 0) / oe), Re.sourceLeftBytes = Math.floor(Math.trunc(ee.x || 0) / Je) * be, Re.sourceWidthBytes = Math.floor(Math.trunc(ee.width || 0) / Je) * be, void 0 !== He) {
            const ee = He[Fe];
            if (ee.stride < Re.sourceWidthBytes) throw new TypeError(`Stride for plane ${Fe} is too small.`);
            Re.destinationOffset = ee.offset, Re.destinationStride = ee.stride
          } else Re.destinationOffset = Me, Re.destinationStride = Re.sourceWidthBytes;
          const ke = Re.destinationStride * Re.sourceHeight + Re.destinationOffset;
          if (ke > 4294967295) throw new TypeError("Allocation size exceeds limit.");
          Ue.push(ke), Me = Math.max(Me, ke);
          for (let ee = 0; ee < Fe; ee++) {
            const ie = Ke[ee];
            if (!(Ue[Fe] <= ie.destinationOffset || Ue[ee] <= Re.destinationOffset)) throw new TypeError("Planes overlap.")
          }
          Ke.push(Re)
        }
        return {
          allocationSize: Me,
          computedLayouts: Ke
        }
      },
      Pe = new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
    class Ae {
      constructor() {
        this._referenceCount = 0
      }
    }
    class Ye {
      get microsecondTimestamp() {
        return Math.trunc(ye.s * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(ye.s * this.duration)
      }
      constructor(ee) {
        if (this._closed = !1, Le(ee)) {
          if (null === ee.format) throw new TypeError("AudioData with null format is not supported.");
          this._data = ee, this.format = ee.format, this.sampleRate = ee.sampleRate, this.numberOfFrames = ee.numberOfFrames, this.numberOfChannels = ee.numberOfChannels, this.timestamp = ee.timestamp / 1e6, this.duration = ee.numberOfFrames / ee.sampleRate
        } else if (ee instanceof Ae) {
          if (this._data = ee, ee._referenceCount++, this.format = ee.getFormat(), !Pe.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
          if (this.sampleRate = ee.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
          if (this.numberOfFrames = ee.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
          if (this.numberOfChannels = ee.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
          if (this.timestamp = ee.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
          this.duration = this.numberOfFrames / this.sampleRate
        } else {
          if (!ee || "object" !== typeof ee) throw new TypeError("Invalid AudioDataInit: must be an object.");
          if (!Pe.has(ee.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
          if (!Number.isFinite(ee.sampleRate) || ee.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
          if (!Number.isInteger(ee.numberOfChannels) || 0 === ee.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
          if (!Number.isFinite(ee?.timestamp)) throw new TypeError("init.timestamp must be a number.");
          const ie = ee.data.byteLength / (Ve(ee.format) * ee.numberOfChannels);
          if (!Number.isInteger(ie)) throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
          let He;
          if (this.format = ee.format, this.sampleRate = ee.sampleRate, this.numberOfFrames = ie, this.numberOfChannels = ee.numberOfChannels, this.timestamp = ee.timestamp, this.duration = ie / ee.sampleRate, ee.data instanceof ArrayBuffer) He = new Uint8Array(ee.data);
          else {
            if (!ArrayBuffer.isView(ee.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
            He = new Uint8Array(ee.data.buffer, ee.data.byteOffset, ee.data.byteLength)
          }
          const ye = this.numberOfFrames * this.numberOfChannels * Ve(this.format);
          if (He.byteLength < ye) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
          this._data = He
        }
        Je?.register(this, {
          type: "audio",
          data: this._data
        }, this)
      }
      allocationSize(ee) {
        if (!ee || "object" !== typeof ee) throw new TypeError("options must be an object.");
        if (!Number.isInteger(ee.planeIndex) || ee.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== ee.format && !Pe.has(ee.format)) throw new TypeError("Invalid format.");
        if (void 0 !== ee.frameOffset && (!Number.isInteger(ee.frameOffset) || ee.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== ee.frameCount && (!Number.isInteger(ee.frameCount) || ee.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const ie = ee.format ?? this.format,
          He = ee.frameOffset ?? 0;
        if (He >= this.numberOfFrames) throw new RangeError("frameOffset out of range");
        const ye = void 0 !== ee.frameCount ? ee.frameCount : this.numberOfFrames - He;
        if (ye > this.numberOfFrames - He) throw new RangeError("frameCount out of range");
        const be = Ve(ie),
          Me = ae(ie);
        if (Me && ee.planeIndex >= this.numberOfChannels) throw new RangeError("planeIndex out of range");
        if (!Me && 0 !== ee.planeIndex) throw new RangeError("planeIndex out of range");
        return (Me ? ye : ye * this.numberOfChannels) * be
      }
      copyTo(ee, ie) {
        if (!(0, ye.sb)(ee)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (!ie || "object" !== typeof ie) throw new TypeError("options must be an object.");
        if (!Number.isInteger(ie.planeIndex) || ie.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== ie.format && !Pe.has(ie.format)) throw new TypeError("Invalid format.");
        if (void 0 !== ie.frameOffset && (!Number.isInteger(ie.frameOffset) || ie.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== ie.frameCount && (!Number.isInteger(ie.frameCount) || ie.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const {
          format: He,
          frameCount: be,
          frameOffset: Me
        } = ie;
        let {
          planeIndex: Ke
        } = ie, Ue = this.format;
        const Fe = He ?? this.format;
        if (!Fe) throw new Error("Destination format not determined");
        const Je = this.numberOfFrames,
          oe = this.numberOfChannels,
          Re = Me ?? 0;
        if (Re >= Je) throw new RangeError("frameOffset out of range");
        const ke = void 0 !== be ? be : Je - Re;
        if (ke > Je - Re) throw new RangeError("frameCount out of range");
        const qe = Ve(Fe),
          fe = ae(Fe);
        if (fe && Ke >= oe) throw new RangeError("planeIndex out of range");
        if (!fe && 0 !== Ke) throw new RangeError("planeIndex out of range");
        const Te = (fe ? ke : ke * oe) * qe;
        if (ee.byteLength < Te) throw new RangeError("Destination buffer is too small");
        const pe = (0, ye.nd)(ee),
          Xe = xe(Fe);
        if (Le(this._data)) {
          if ((0, ye.Wb)() && oe > 2 && Fe !== Ue) return void ve(this._data, pe, Ue, Fe, oe, Ke, Re, ke);
          try {
            return void this._data.copyTo(ee, {
              planeIndex: Ke,
              frameOffset: Re,
              frameCount: ke,
              format: Fe
            })
          } catch (de) {
            if ("f32-planar" === Fe) throw de;
            Ue = "f32-planar"
          }
        }
        const ze = ce(Ue),
          Be = Ve(Ue),
          Ee = ae(Ue);
        let ge;
        if (this._data instanceof Ae) {
          const ee = ee => {
            const ie = this._data.getDataPlane(ee);
            if (!(ie instanceof Uint8Array)) throw new TypeError("getDataPlane() must return a Uint8Array.");
            const He = Je * Be * (Ee ? 1 : oe);
            if (ie.byteLength !== He) throw new TypeError(`Data plane ${ee} has invalid size. Expected exactly ${He} bytes, got ${ie.byteLength} bytes.`);
            return ie
          };
          if (Ee)
            if (fe) ge = ee(Ke), Ke = 0;
            else {
              ge = new Uint8Array(Je * Be * oe);
              for (let ie = 0; ie < oe; ie++) {
                const He = ee(ie);
                ge.set(He, ie * Je * Be)
              }
            }
          else ge = ee(0)
        } else if (this._data instanceof Uint8Array) ge = this._data;
        else if ((0, ye.I)("f32-planar" === Ue), fe) ge = new Uint8Array(this._data.allocationSize({
          format: "f32-planar",
          planeIndex: Ke
        })), this._data.copyTo(ge, {
          format: "f32-planar",
          planeIndex: Ke
        }), Ke = 0;
        else {
          ge = new Uint8Array(this._data.allocationSize({
            format: "f32-planar",
            planeIndex: 0
          }) * oe);
          for (let ee = 0; ee < oe; ee++) this._data.copyTo(ge.subarray(ee * Je * Be, (ee + 1) * Je * Be), {
            format: "f32-planar",
            planeIndex: ee
          })
        }
        const Oe = (0, ye.nd)(ge);
        for (let ye = 0; ye < ke; ye++)
          if (fe) {
            let ee;
            ee = Ee ? (Ke * Je + (ye + Re)) * Be : ((ye + Re) * oe + Ke) * Be;
            Xe(pe, ye * qe, ze(Oe, ee))
          } else
            for (let ee = 0; ee < oe; ee++) {
              let ie;
              ie = Ee ? (ee * Je + (ye + Re)) * Be : ((ye + Re) * oe + ee) * Be;
              Xe(pe, (ye * oe + ee) * qe, ze(Oe, ie))
            }
      }
      clone() {
        if (this._closed) throw new Error("AudioSample is closed.");
        if (this._data instanceof Ae) {
          const ee = new Ye(this._data);
          return ee.setTimestamp(this.timestamp), ee
        }
        if (Le(this._data)) {
          const ee = new Ye(this._data.clone());
          return ee.setTimestamp(this.timestamp), ee
        }
        return new Ye({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp,
          data: this._data
        })
      }
      trim(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.numberOfFrames;
        if (!Number.isInteger(ee) || ee < 0) throw new TypeError("startFrame must be a non-negative integer.");
        if (!Number.isInteger(ie) || ie < 0) throw new TypeError("endFrame must be a non-negative integer.");
        if (ee > this.numberOfFrames) throw new RangeError("startFrame out of range.");
        if (ie > this.numberOfFrames) throw new RangeError("endFrame out of range.");
        if (ie < ee) throw new RangeError("endFrame must not be less than startFrame.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const He = ie - ee,
          ye = Ve(this.format);
        let be;
        if (ae(this.format)) {
          const ie = He * ye;
          if (be = new Uint8Array(ie * this.numberOfChannels), He > 0)
            for (let ye = 0; ye < this.numberOfChannels; ye++) this.copyTo(be.subarray(ye * ie, (ye + 1) * ie), {
              planeIndex: ye,
              format: this.format,
              frameOffset: ee,
              frameCount: He
            })
        } else be = new Uint8Array(He * this.numberOfChannels * ye), He > 0 && this.copyTo(be, {
          planeIndex: 0,
          format: this.format,
          frameOffset: ee,
          frameCount: He
        });
        return new Ye({
          data: be,
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp + ee / this.sampleRate
        })
      }
      close() {
        this._closed || (Je?.unregister(this), this._data instanceof Ae ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : Le(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
      }
      toAudioData() {
        if (this._closed) throw new Error("AudioSample is closed.");
        return this._data instanceof Ae ? this._createAudioDataFromData() : Le(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
        })
      }
      _createAudioDataFromData() {
        if (ae(this.format)) {
          const ee = this.allocationSize({
              planeIndex: 0,
              format: this.format
            }),
            ie = new ArrayBuffer(ee * this.numberOfChannels);
          for (let He = 0; He < this.numberOfChannels; He++) this.copyTo(new Uint8Array(ie, He * ee, ee), {
            planeIndex: He,
            format: this.format
          });
          return new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: ie
          })
        } {
          const ee = new ArrayBuffer(this.allocationSize({
            planeIndex: 0,
            format: this.format
          }));
          return this.copyTo(ee, {
            planeIndex: 0,
            format: this.format
          }), new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: ee
          })
        }
      }
      toAudioBuffer() {
        if (this._closed) throw new Error("AudioSample is closed.");
        const ee = new AudioBuffer({
            numberOfChannels: this.numberOfChannels,
            length: this.numberOfFrames,
            sampleRate: this.sampleRate
          }),
          ie = new Float32Array(this.allocationSize({
            planeIndex: 0,
            format: "f32-planar"
          }) / 4);
        for (let He = 0; He < this.numberOfChannels; He++) this.copyTo(ie, {
          planeIndex: He,
          format: "f32-planar"
        }), ee.copyToChannel(ie, He);
        return ee
      }
      setTimestamp(ee) {
        if (!Number.isFinite(ee)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = ee
      } [Symbol.dispose]() {
        this.close()
      }
      static * _fromAudioBuffer(ee, ie) {
        if (!(ee instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const He = ee.numberOfChannels,
          ye = ee.sampleRate,
          be = ee.length,
          Me = Math.floor(24e4 / He);
        let Ke = 0,
          Ue = be;
        for (; Ue > 0;) {
          const be = Math.min(Me, Ue),
            Fe = new Float32Array(He * be);
          for (let ie = 0; ie < He; ie++) ee.copyFromChannel(Fe.subarray(ie * be, (ie + 1) * be), ie, Ke);
          yield new Ye({
            format: "f32-planar",
            sampleRate: ye,
            numberOfFrames: be,
            numberOfChannels: He,
            timestamp: ie + Ke / ye,
            data: Fe
          }), Ke += be, Ue -= be
        }
      }
      static fromAudioBuffer(ee, ie) {
        if (!(ee instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const He = ee.numberOfChannels,
          ye = ee.sampleRate,
          be = ee.length,
          Me = Math.floor(24e4 / He);
        let Ke = 0,
          Ue = be;
        const Fe = [];
        for (; Ue > 0;) {
          const be = Math.min(Me, Ue),
            Je = new Float32Array(He * be);
          for (let ie = 0; ie < He; ie++) ee.copyFromChannel(Je.subarray(ie * be, (ie + 1) * be), ie, Ke);
          const oe = new Ye({
            format: "f32-planar",
            sampleRate: ye,
            numberOfFrames: be,
            numberOfChannels: He,
            timestamp: ie + Ke / ye,
            data: Je
          });
          Fe.push(oe), Ke += be, Ue -= be
        }
        return Fe
      }
    }
    const Ve = ee => {
        switch (ee) {
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
      ae = ee => {
        switch (ee) {
          case "u8-planar":
          case "s16-planar":
          case "s32-planar":
          case "f32-planar":
            return !0;
          default:
            return !1
        }
      },
      ce = ee => {
        switch (ee) {
          case "u8":
          case "u8-planar":
            return (ee, ie) => (ee.getUint8(ie) - 128) / 128;
          case "s16":
          case "s16-planar":
            return (ee, ie) => ee.getInt16(ie, !0) / 32768;
          case "s32":
          case "s32-planar":
            return (ee, ie) => ee.getInt32(ie, !0) / 2147483648;
          case "f32":
          case "f32-planar":
            return (ee, ie) => ee.getFloat32(ie, !0)
        }
      },
      xe = ee => {
        switch (ee) {
          case "u8":
          case "u8-planar":
            return (ee, ie, He) => ee.setUint8(ie, (0, ye.T)(Math.round(128 * He) + 128, 0, 255));
          case "s16":
          case "s16-planar":
            return (ee, ie, He) => ee.setInt16(ie, (0, ye.T)(Math.round(32768 * He), -32768, 32767), !0);
          case "s32":
          case "s32-planar":
            return (ee, ie, He) => ee.setInt32(ie, (0, ye.T)(Math.round(2147483648 * He), -2147483648, 2147483647), !0);
          case "f32":
          case "f32-planar":
            return (ee, ie, He) => ee.setFloat32(ie, He, !0)
        }
      },
      Le = ee => "undefined" !== typeof AudioData && ee instanceof AudioData,
      Ce = ee => {
        switch (ee) {
          case "u8-planar":
            return "u8";
          case "s16-planar":
            return "s16";
          case "s32-planar":
            return "s32";
          case "f32-planar":
            return "f32";
          default:
            return ee
        }
      },
      ve = (ee, ie, He, be, Me, Ke, Ue, Fe) => {
        const Je = ce(He),
          oe = xe(be),
          Re = Ve(He),
          ke = Ve(be),
          qe = ae(He);
        if (ae(be))
          if (qe) {
            const be = new ArrayBuffer(Fe * Re),
              Me = (0, ye.nd)(be);
            ee.copyTo(be, {
              planeIndex: Ke,
              frameOffset: Ue,
              frameCount: Fe,
              format: He
            });
            for (let ee = 0; ee < Fe; ee++) {
              oe(ie, ee * ke, Je(Me, ee * Re))
            }
          } else {
            const be = new ArrayBuffer(Fe * Me * Re),
              qe = (0, ye.nd)(be);
            ee.copyTo(be, {
              planeIndex: 0,
              frameOffset: Ue,
              frameCount: Fe,
              format: He
            });
            for (let ee = 0; ee < Fe; ee++) {
              oe(ie, ee * ke, Je(qe, (ee * Me + Ke) * Re))
            }
          }
        else if (qe) {
          const be = new ArrayBuffer(Fe * Re),
            Ke = (0, ye.nd)(be);
          for (let ye = 0; ye < Me; ye++) {
            ee.copyTo(be, {
              planeIndex: ye,
              frameOffset: Ue,
              frameCount: Fe,
              format: He
            });
            for (let ee = 0; ee < Fe; ee++) {
              oe(ie, (ee * Me + ye) * ke, Je(Ke, ee * Re))
            }
          }
        } else {
          const be = new ArrayBuffer(Fe * Me * Re),
            Ke = (0, ye.nd)(be);
          ee.copyTo(be, {
            planeIndex: 0,
            frameOffset: Ue,
            frameCount: Fe,
            format: He
          });
          for (let ee = 0; ee < Fe; ee++)
            for (let He = 0; He < Me; He++) {
              const ye = ee * Me + He;
              oe(ie, ye * ke, Je(Ke, ye * Re))
            }
        }
      },
      ue = (ee, ie) => {
        const He = ee.allocationSize({
            format: ie,
            planeIndex: 0
          }),
          ye = new ArrayBuffer(He);
        return ee.copyTo(ye, {
          format: ie,
          planeIndex: 0
        }), new Ye({
          data: ye,
          format: ie,
          numberOfChannels: ee.numberOfChannels,
          sampleRate: ee.sampleRate,
          timestamp: ee.timestamp,
          duration: ee.duration
        })
      }
  },
  40712: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      e: () => Je,
      g: () => Me,
      j: () => Fe
    });
    const ye = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
      be = /^WEBVTT(.|\n)*?\n{2}/,
      Me = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
    class Ke {
      constructor(ee) {
        this.preambleText = null, this.preambleEmitted = !1, this.options = ee
      }
      parse(ee) {
        let ie;
        if (ee = ee.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), ye.lastIndex = 0, !this.preambleText) {
          if (!be.test(ee)) throw new Error("WebVTT preamble incorrect.");
          ie = ye.exec(ee);
          const He = ee.slice(0, ie?.index ?? ee.length).trimEnd();
          if (!He) throw new Error("No WebVTT preamble provided.");
          this.preambleText = He, ie && (ee = ee.slice(ie.index), ye.lastIndex = 0)
        }
        for (; ie = ye.exec(ee);) {
          const He = ee.slice(0, ie.index),
            be = ie[1],
            Me = ie.index + ie[0].length,
            Ke = ee.indexOf("\n", Me) + 1,
            Ue = ee.slice(Me, Ke).trim();
          let Je = ee.indexOf("\n\n", Me); - 1 === Je && (Je = ee.length);
          const oe = Fe(ie[2]),
            Re = Fe(ie[3]) - oe,
            ke = ee.slice(Ke, Je).trim();
          ee = ee.slice(Je).trimStart(), ye.lastIndex = 0;
          const qe = {
              timestamp: oe / 1e3,
              duration: Re / 1e3,
              text: ke,
              identifier: be,
              settings: Ue,
              notes: He
            },
            fe = {};
          this.preambleEmitted || (fe.config = {
            description: this.preambleText
          }, this.preambleEmitted = !0), this.options.output(qe, fe)
        }
      }
    }
    const Ue = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
      Fe = ee => {
        const ie = Ue.exec(ee);
        if (!ie) throw new Error("Expected match.");
        return 36e5 * Number(ie[1] || "0") + 6e4 * Number(ie[2]) + 1e3 * Number(ie[3]) + Number(ie[4])
      },
      Je = ee => {
        const ie = Math.floor(ee / 36e5),
          He = Math.floor(ee % 36e5 / 6e4),
          ye = Math.floor(ee % 6e4 / 1e3),
          be = ee % 1e3;
        return ie.toString().padStart(2, "0") + ":" + He.toString().padStart(2, "0") + ":" + ye.toString().padStart(2, "0") + "." + be.toString().padStart(3, "0")
      }
  },
  40726: (ee, ie, He) => {
    var ye;
    He.d(ie, {
      d: () => Je,
      e: () => oe,
      f: () => ke,
      j: () => Ke
    });
    var be = He(40729),
      Me = He(40671);
    "undefined" !== typeof(ye || (ye = He.t(be, 2))) && (ye || (ye = He.t(be, 2)));
    class Ke extends Me.j {
      constructor() {
        super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
      }
      _setMonotonicity(ee) {
        !1 !== this._monotonicity && (this._monotonicity = ee)
      }
      _dispatchWrite(ee, ie) {
        this.onwrite?.(ee, ie), this._emit("write", {
          start: ee,
          end: ie
        })
      }
      slice(ee) {
        if (!Number.isInteger(ee) || ee < 0) throw new TypeError("offset must be a non-negative integer.");
        return new Re(this, ee)
      }
    }
    const Ue = 65536,
      Fe = 2 ** 32;
    class Je extends Ke {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (super(), this.buffer = null, this._maxPos = 0, !ee || "object" !== typeof ee) throw new TypeError("BufferTarget options, when provided, must be an object.");
        if (void 0 !== ee.onFinalize && "function" !== typeof ee.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        if (this._options = ee, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
          this._buffer = new ArrayBuffer(Ue, {
            maxByteLength: Fe
          })
        } catch {
          this._buffer = new ArrayBuffer(Ue), this._supportsResize = !1
        } else this._buffer = new ArrayBuffer(Ue);
        this._bytes = new Uint8Array(this._buffer)
      }
      _ensureSize(ee) {
        let ie = this._buffer.byteLength;
        for (; ie < ee;) ie *= 2;
        if (ie !== this._buffer.byteLength) {
          if (ie > Fe) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
          if (this._supportsResize) this._buffer.resize(ie);
          else {
            const ee = new ArrayBuffer(ie),
              He = new Uint8Array(ee);
            He.set(this._bytes, 0), this._buffer = ee, this._bytes = He
          }
        }
      }
      _start() {}
      _write(ee, ie) {
        this._ensureSize(ie + ee.byteLength), this._bytes.set(ee, ie), this._maxPos = Math.max(this._maxPos, ie + ee.byteLength), this._dispatchWrite(ie, ie + ee.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
      }
      async _close() {}
      _getSlice(ee, ie) {
        return this._bytes.slice(ee, ie)
      }
    }
    class oe extends Ke {
      _start() {}
      _write(ee, ie) {
        this._dispatchWrite(ie, ie + ee.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
    }
    class Re extends Ke {
      constructor(ee, ie) {
        super(), this._baseTarget = ee, this._offset = ie
      }
      _start() {}
      _write(ee, ie) {
        this._baseTarget._write(ee, this._offset + ie), this._dispatchWrite(ie, ie + ee.byteLength)
      }
      _flush() {
        return this._baseTarget._flush()
      }
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
      _setMonotonicity(ee) {
        super._setMonotonicity(ee), this._baseTarget._setMonotonicity(ee)
      }
    }
    class ke {
      constructor(ee, ie) {
        if (this.rootPath = ee, this.getTarget = ie, "string" !== typeof ee) throw new TypeError("rootPath must be a string.");
        if ("function" !== typeof ie) throw new TypeError("getTarget must be a function.")
      }
    }
  },
  40708: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    const ye = "Mediabunny v1.61.3"
  },
  40717: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(40671);
    class be {
      constructor(ee, ie) {
        if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, ee._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
        this.target = ee, ee._setMonotonicity(ie), ee._writerAcquired = !0
      }
      start() {
        (0, ye.I)(!this.started), this.target._start(), this.started = !0
      }
      write(ee) {
        (0, ye.I)(this.started && !this.finalized), this.maybeTrackWrites(ee), this.target._write(ee, this.pos), this.pos += ee.byteLength
      }
      seek(ee) {
        this.pos = ee
      }
      getPos() {
        return this.pos
      }
      async flush() {
        return (0, ye.I)(this.started && !this.finalized), this.target._flush()
      }
      async finalize() {
        (0, ye.I)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
      }
      maybeTrackWrites(ee) {
        if (!this.trackedWrites) return;
        let ie = this.getPos();
        if (ie < this.trackedStart) {
          if (ie + ee.byteLength <= this.trackedStart) return;
          ee = ee.subarray(this.trackedStart - ie), ie = 0
        }
        const He = ie + ee.byteLength - this.trackedStart;
        let ye = this.trackedWrites.byteLength;
        for (; ye < He;) ye *= 2;
        if (ye !== this.trackedWrites.byteLength) {
          const ee = new Uint8Array(ye);
          ee.set(this.trackedWrites, 0), this.trackedWrites = ee
        }
        this.trackedWrites.set(ee, ie - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, ie + ee.byteLength)
      }
      startTrackingWrites() {
        this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
      }
      stopTrackingWrites() {
        if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
        const ee = {
          data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
          start: this.trackedStart,
          end: this.trackedEnd
        };
        return this.trackedWrites = null, ee
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);