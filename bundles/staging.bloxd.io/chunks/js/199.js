export const id = 199;
export const ids = [199];
export const modules = {
  39715: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => QD,
      g: () => bD,
      k: () => fD
    });
    var ID = cD(39718),
      pD = cD(4581),
      iD = cD(39725);

    function fD(DD) {
      return DD.payloadKind === pD.ic.Msgpack ? (0, ID.c)(DD.payload) : void 0
    }

    function bD(DD, CD) {
      if (CD.payloadKind === pD.ic.Bytes || CD.payloadKind === pD.ic.MsgpackBin) return (0, iD.e)(DD, CD.payload)
    }

    function QD(DD) {
      return null !== DD && "object" === typeof DD
    }
  },
  39727: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => BD,
      i: () => yD,
      j: () => MD,
      l: () => SD,
      o: () => oD
    });
    var ID = cD(4581),
      pD = cD(39730);
    const iD = new Map,
      fD = new Set,
      bD = new Set;
    let QD = 0,
      wD = 0;

    function SD(DD, CD) {
      let cD = iD.get(DD);
      return cD || (cD = new Set, iD.set(DD, cD)), cD.add(CD), () => {
        cD.delete(CD)
      }
    }

    function BD() {
      return 0 !== QD
    }

    function yD(DD) {
      return fD.add(DD), () => {
        fD.delete(DD)
      }
    }

    function MD(DD) {
      return bD.add(DD), () => {
        bD.delete(DD)
      }
    }
    const tD = "A raw message listener threw";

    function ZD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fD;
      for (const ID of CD) try {
        ID()
      } catch (cD) {
        DD ? (0, pD.o)(cD, tD) : console.error(tD, cD)
      }
    }
    const oD = {
      fire: function(DD) {
        if ("connection" === DD.type) {
          const CD = DD.phase === ID.E.Activated && DD.conn !== QD && DD.conn > wD,
            cD = (DD.phase === ID.E.Left || DD.phase === ID.E.Closed) && DD.conn === QD;
          return void(CD || cD ? (QD = CD ? DD.conn : 0, ZD(!0)) : DD.phase === ID.E.Resumed && 0 !== QD && DD.conn > wD && (QD = DD.conn, ZD(!0, bD)))
        }
        const CD = iD.get(DD.Rf);
        if (CD && DD.conn === QD && 0 !== QD)
          for (const ID of CD) try {
            ID(DD)
          } catch (cD) {
            (0, pD.o)(cD, tD)
          }
      },
      close: function(DD) {
        wD = Math.max(wD, DD, QD), 0 !== QD && (QD = 0, ZD(!1))
      }
    }
  },
  39709: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD,
      e: () => QD,
      f: () => bD
    });
    var ID = cD(1266),
      pD = cD(39680);
    const iD = new TextDecoder,
      fD = new TextEncoder;

    function bD(DD, CD) {
      const cD = DD.queries.entityName(CD);
      if (cD === pD.ad) return;
      const fD = DD.memoryData(DD.scratch(), 4 + cD, 4, "entity_name's answer");
      if (!fD) return;
      const bD = fD.getUint32(0, !0),
        QD = iD.decode(new Uint8Array(fD.buffer, fD.byteOffset + 4, cD));
      return (0, ID.d)(QD, !1, bD === pD.he ? null : bD)
    }

    function QD(DD, CD, cD) {
      const ID = fD.encode(cD);
      if (ID.length > pD.Lb) return !1;
      const iD = DD.memoryView(Uint8Array, DD.scratch(), ID.length, "has_effect's name");
      return !!iD && (iD.set(ID), 1 === DD.queries.hasEffect(CD, ID.length))
    }

    function wD(DD, CD, cD, ID) {
      const fD = DD.queries.blockData(CD, cD, ID);
      if (fD === pD.ad) return;
      const bD = DD.memoryView(Uint8Array, DD.scratch(), fD, "block_data's answer");
      return bD ? JSON.parse(iD.decode(bD)) : void 0
    }
  },
  39718: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      g: () => SD
    });
    const ID = new TextDecoder;

    function pD(DD) {
      const CD = new iD(DD),
        cD = CD.value();
      if (CD.at !== DD.length) throw new Error(`msgpack: ${DD.length-CD.at} bytes after the value`);
      return cD
    }
    class iD {
      constructor(DD) {
        this.bytes = DD, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(DD.buffer, DD.byteOffset, DD.byteLength)
      }
      value() {
        const DD = this.u8();
        if (DD <= 127) return DD;
        if (DD >= 224) return DD - 256;
        if (DD >= 128 && DD <= 143) return this.map(15 & DD);
        if (DD >= 144 && DD <= 159) return this.array(15 & DD);
        if (DD >= 160 && DD <= 191) return this.str(31 & DD);
        switch (DD) {
          case 192:
            return null;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            return this.bin(this.u8());
          case 197:
            return this.bin(this.u16());
          case 198:
            return this.bin(this.u32());
          case 199:
            return this.ext(this.u8());
          case 200:
            return this.ext(this.u16());
          case 201:
            return this.ext(this.u32());
          case 202:
            return this.view.getFloat32(this.take(4), !1);
          case 203:
            return this.view.getFloat64(this.take(8), !1);
          case 204:
            return this.u8();
          case 205:
            return this.u16();
          case 206:
            return this.u32();
          case 207:
            return this.int64(!1);
          case 208:
            return this.view.getInt8(this.take(1));
          case 209:
            return this.view.getInt16(this.take(2), !1);
          case 210:
            return this.view.getInt32(this.take(4), !1);
          case 211:
            return this.int64(!0);
          case 212:
            return this.ext(1);
          case 213:
            return this.ext(2);
          case 214:
            return this.ext(4);
          case 215:
            return this.ext(8);
          case 216:
            return this.ext(16);
          case 217:
            return this.str(this.u8());
          case 218:
            return this.str(this.u16());
          case 219:
            return this.str(this.u32());
          case 220:
            return this.array(this.u16());
          case 221:
            return this.array(this.u32());
          case 222:
            return this.map(this.u16());
          case 223:
            return this.map(this.u32());
          default:
            throw new Error(`msgpack: unknown byte 0x${DD.toString(16)} at ${this.at-1}`)
        }
      }
      take(DD) {
        const CD = this.at;
        if (CD + DD > this.bytes.length) throw new Error(`msgpack: ${DD} bytes past the end at ${CD}`);
        return this.at = CD + DD, CD
      }
      u8() {
        return this.view.getUint8(this.take(1))
      }
      u16() {
        return this.view.getUint16(this.take(2), !1)
      }
      u32() {
        return this.view.getUint32(this.take(4), !1)
      }
      int64(DD) {
        const CD = this.take(8);
        return DD ? this.view.getBigInt64(CD, !1) : this.view.getBigUint64(CD, !1)
      }
      str(DD) {
        const CD = this.take(DD),
          cD = this.bytes;
        if (DD < 16) {
          let pD = "";
          for (let iD = CD; iD < CD + DD; iD++) {
            const fD = cD[iD];
            if (fD >= 128) return ID.decode(cD.subarray(CD, CD + DD));
            pD += String.fromCharCode(fD)
          }
          return pD
        }
        return ID.decode(cD.subarray(CD, CD + DD))
      }
      bin(DD) {
        const CD = this.take(DD);
        return this.bytes.subarray(CD, CD + DD)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(DD) {
        this.enter();
        const CD = [];
        for (let cD = 0; cD < DD; cD++) CD.push(this.value());
        return this.depth--, CD
      }
      map(DD) {
        this.enter();
        const CD = {};
        for (let cD = 0; cD < DD; cD++) {
          const DD = this.value(),
            cD = this.value();
          CD["__proto__" === DD ? "__proto_" : String(DD)] = cD
        }
        return this.depth--, CD
      }
      ext(DD) {
        const CD = this.view.getInt8(this.take(1)),
          cD = this.take(DD);
        if (0 !== CD) {
          if (-1 === CD) {
            if (1 === DD) return new Date(NaN);
            if (4 === DD) return new Date(1e3 * this.view.getUint32(cD, !1));
            if (8 === DD) {
              const DD = this.view.getUint32(cD, !1),
                CD = DD >>> 2,
                ID = 4294967296 * (3 & DD) + this.view.getUint32(cD + 4, !1);
              return new Date(1e3 * ID + CD / 1e6)
            }
            if (12 === DD) {
              const DD = this.view.getUint32(cD, !1),
                CD = 4294967296 * this.view.getInt32(cD + 4, !1) + this.view.getUint32(cD + 8, !1);
              return new Date(1e3 * CD + DD / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${CD} of ${DD} bytes`)
        }
      }
    }
    const fD = new TextEncoder,
      bD = -(2n ** 63n),
      QD = 2n ** 63n - 1n,
      wD = 2n ** 64n - 1n;

    function SD(DD) {
      const CD = new BD;
      return CD.value(DD, 0), CD.bytes()
    }
    class BD {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(DD, CD) {
        if (CD > 512) throw new Error("msgpack: nested too deep");
        switch (typeof DD) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(DD ? 195 : 194);
          case "number":
            return void this.number(DD);
          case "bigint":
            return void this.bigint(DD);
          case "string":
            return void this.string(DD);
          case "object":
            if (null === DD) this.u8(192);
            else if (DD instanceof Uint8Array) this.head(DD.length, 196, -1, 197, 198), this.room(DD.length), this.buf.set(DD, this.at), this.at += DD.length;
            else if (Array.isArray(DD)) {
              this.head(DD.length, 220, 144, 220, 221);
              for (const cD of DD) this.value(cD, CD + 1)
            } else {
              var cD, ID;
              if (Object.getPrototypeOf(DD) !== Object.prototype && null !== Object.getPrototypeOf(DD)) throw new Error(`msgpack: can't encode a ${null!==(cD=null===(ID=DD.constructor)||void 0===ID?void 0:ID.name)&&void 0!==cD?cD:"object"}`);
              {
                const cD = Object.keys(DD);
                this.head(cD.length, 222, 128, 222, 223);
                for (const ID of cD) this.string(ID), this.value(DD[ID], CD + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof DD)
        }
      }
      number(DD) {
        Number.isInteger(DD) && DD >= -2147483648 && DD <= 4294967295 ? DD >= 0 ? DD < 128 ? this.u8(DD) : DD < 256 ? (this.u8(204), this.u8(DD)) : DD < 65536 ? (this.u8(205), this.u16(DD)) : (this.u8(206), this.u32(DD)) : DD >= -32 ? this.u8(DD + 256) : DD >= -128 ? (this.u8(208), this.u8(DD + 256)) : DD >= -32768 ? (this.u8(209), this.u16(DD + 65536)) : (this.u8(210), this.u32(DD >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, DD, !1), this.at += 8)
      }
      bigint(DD) {
        const CD = DD >= bD && DD <= QD;
        if (!CD && (DD < 0n || DD > wD)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(CD ? 211 : 207), this.room(8), CD ? this.view.setBigInt64(this.at, DD, !1) : this.view.setBigUint64(this.at, DD, !1), this.at += 8
      }
      string(DD) {
        const CD = fD.encode(DD);
        this.head(CD.length, 217, 160, 218, 219), this.room(CD.length), this.buf.set(CD, this.at), this.at += CD.length
      }
      head(DD, CD, cD, ID, pD) {
        cD >= 0 && DD < (160 === cD ? 32 : 16) ? this.u8(cD | DD) : CD !== ID && DD < 256 ? (this.u8(CD), this.u8(DD)) : DD < 65536 ? (this.u8(ID), this.u16(DD)) : (this.u8(pD), this.u32(DD))
      }
      room(DD) {
        if (this.at + DD <= this.buf.length) return;
        let CD = 2 * this.buf.length;
        for (; CD < this.at + DD;) CD *= 2;
        const cD = new Uint8Array(CD);
        cD.set(this.buf.subarray(0, this.at)), this.buf = cD, this.view = new DataView(cD.buffer)
      }
      u8(DD) {
        this.room(1), this.buf[this.at++] = DD
      }
      u16(DD) {
        this.room(2), this.view.setUint16(this.at, DD, !1), this.at += 2
      }
      u32(DD) {
        this.room(4), this.view.setUint32(this.at, DD, !1), this.at += 4
      }
    }
  },
  39725: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(39711);
    const pD = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class iD {
      constructor(DD) {
        this.buf = DD, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let DD = this.u8(),
          CD = 127 & DD,
          cD = 128;
        for (; 128 & DD;) {
          if (cD > 2 ** 63) throw new RangeError("avro: varint too long");
          DD = this.u8(), CD += (127 & DD) * cD, cD *= 128
        }
        return CD % 2 === 1 ? -(CD + 1) / 2 : CD / 2
      }
      float() {
        const DD = this.take(4);
        return this.floats().getFloat32(DD, !0)
      }
      double() {
        const DD = this.take(8);
        return this.floats().getFloat64(DD, !0)
      }
      str() {
        const DD = this.size(),
          CD = this.take(DD),
          cD = CD + DD;
        if (DD <= 32) {
          let DD = "";
          for (let ID = CD; ID < cD; ID++) {
            const iD = this.buf[ID];
            if (iD >= 128) return pD.decode(this.buf.subarray(CD, cD));
            DD += String.fromCharCode(iD)
          }
          return DD
        }
        return pD.decode(this.buf.subarray(CD, cD))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(DD) {
        const CD = this.take(DD);
        return this.buf.slice(CD, CD + DD)
      }
      index(DD) {
        const CD = this.long();
        if (!(CD >= 0 && CD < DD)) throw new RangeError(`avro: index ${CD} of ${DD}`);
        return CD
      }
      Tt(DD) {
        const CD = [];
        for (let cD = this.long(); 0 !== cD; cD = this.long()) {
          cD = this.block(cD);
          for (let ID = 0; ID < cD; ID++) CD.push(DD(this))
        }
        return CD
      }
      map(DD) {
        const CD = {};
        for (let cD = this.long(); 0 !== cD; cD = this.long()) {
          cD = this.block(cD);
          for (let ID = 0; ID < cD; ID++) {
            CD[this.str()] = DD(this)
          }
        }
        return CD
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(DD) {
        let CD = DD;
        if (CD < 0 && (CD = -CD, this.long()), CD > this.buf.length - this.at) throw new RangeError(`avro: block of ${CD} items in ${this.buf.length-this.at} bytes`);
        return CD
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const DD = this.long();
        if (DD < 0) throw new RangeError(`avro: length ${DD}`);
        return DD
      }
      u8() {
        const DD = this.buf[this.at];
        if (void 0 === DD) throw new RangeError("avro: truncated");
        return this.at++, DD
      }
      take(DD) {
        const CD = this.at;
        if (DD > this.buf.length - CD) throw new RangeError("avro: truncated");
        return this.at = CD + DD, CD
      }
    }

    function fD(DD, CD) {
      const cD = new iD(CD),
        pD = (0, ID.qb)(DD, cD);
      return cD.end(), pD
    }
  },
  39711: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => XD,
      F: () => yD,
      J: () => wD,
      K: () => fD,
      L: () => xD,
      M: () => pD,
      P: () => bD,
      Q: () => MD,
      U: () => HD,
      X: () => PD,
      _: () => nD,
      bb: () => SD,
      cb: () => BD,
      d: () => mD,
      fb: () => UD,
      h: () => oD,
      hb: () => tD,
      l: () => vD,
      lb: () => gD,
      nb: () => ZD,
      ob: () => QD,
      p: () => ND,
      qb: () => qD,
      t: () => OD,
      x: () => ID,
      y: () => iD
    });
    const ID = 2,
      pD = 12,
      iD = 27,
      fD = 40,
      bD = 52,
      QD = 59,
      wD = 63,
      SD = 83,
      BD = 84,
      yD = 89,
      MD = 91,
      tD = 93,
      ZD = 94,
      oD = 95,
      vD = 97,
      ND = 101,
      gD = 102,
      XD = 73,
      mD = 16,
      nD = 86,
      OD = 60,
      PD = 17,
      HD = 56,
      UD = 100,
      xD = 81;

    function qD(DD, CD) {
      switch (DD) {
        case ID:
          return function(DD) {
            return {
              Vi: uD(DD),
              zi: DD.float(),
              ji: DD.long()
            }
          }(CD);
        case pD:
          return function(DD) {
            return {
              DD: zD(DD),
              CD: zD(DD)
            }
          }(CD);
        case iD:
          return function(DD) {
            return {
              wC: DD.bool(),
              SC: zD(DD)
            }
          }(CD);
        case fD:
          return CD.str();
        case bD:
          return function(DD) {
            return {
              id: DD.long(),
              UD: fC(DD)
            }
          }(CD);
        case QD:
        case wD:
          return CD.str();
        case SD:
        case BD:
          return CD.long();
        case yD:
          return function(DD) {
            return {
              pI: DD.long(),
              iI: DD.bool(),
              fI: DD.float()
            }
          }(CD);
        case MD:
          return CD.long();
        case tD:
          return function(DD) {
            return {
              rC: DD.bool(),
              AC: wC(DD)
            }
          }(CD);
        case ZD:
          return function(DD) {
            return {
              id: DD.str(),
              position: QC(DD),
              rp: SC(DD),
              style: RD(DD),
              Fp: DD.bool()
            }
          }(CD);
        case oD:
          return function(DD) {
            return {
              id: zD(DD)
            }
          }(CD);
        case vD:
          return function(DD) {
            return {
              tC: DD.long(),
              ZC: DD.str(),
              oC: pC(DD),
              vC: pC(DD),
              NC: zD(DD),
              gC: zD(DD),
              XC: zD(DD),
              mC: zD(DD),
              nC: zD(DD),
              OC: pC(DD),
              PC: pC(DD),
              HC: zD(DD),
              UC: zD(DD),
              xC: zD(DD)
            }
          }(CD);
        case ND:
          return CD.str();
        case gD:
          return CD.long();
        case XD:
          return function(DD) {
            return {
              Yc: DD.long(),
              Wc: DD.str(),
              sc: DD.float()
            }
          }(CD);
        case mD:
          return function(DD) {
            return {
              ki: DD.bool(),
              Yi: zD(DD),
              Wi: DD.str(),
              si: yC(DD),
              Ei: yC(DD),
              ui: DD.bool(),
              Ai: DD.long(),
              Fi: MC(DD)
            }
          }(CD);
        case nD:
          return function(DD) {
            return {
              np: zD(DD)
            }
          }(CD);
        case OD:
          return function(DD) {
            return {
              IC: DD.str(),
              pC: DD.str(),
              iC: tC(DD),
              fC: DD.str(),
              bC: AD(DD),
              QC: DD.float()
            }
          }(CD);
        case PD:
          return function(DD) {
            return {
              IC: DD.str(),
              pC: DD.str(),
              iC: tC(DD)
            }
          }(CD);
        case HD:
          return function(DD) {
            return DD.Tt(ZC)
          }(CD);
        case UD:
          return function(DD) {
            return {
              bI: vC(DD),
              yI: YD(DD)
            }
          }(CD);
        case xD:
          return function(DD) {
            return {
              MI: DD.bool(),
              tI: zD(DD),
              ZI: gC(DD),
              vI: jC(DD)
            }
          }(CD);
        default:
          throw new Error(`no reader for to-client message ${DD}`)
      }
    }

    function JD(DD) {
      return {
        entityName: DD.str()
      }
    }

    function KD(DD) {
      const CD = DD.index(4);
      return 0 === CD ? DD.str() : 1 === CD ? DD.long() : 2 === CD ? DD.bool() : JD(DD)
    }

    function aD(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return DD.map(KD)
      }(DD)
    }

    function VD(DD) {
      return {
        translationKey: DD.str(),
        params: aD(DD)
      }
    }

    function zD(DD) {
      return 0 === DD.index(2) ? null : DD.str()
    }

    function jD(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          color: zD(DD),
          colour: zD(DD),
          fontSize: zD(DD)
        }
      }(DD)
    }

    function lD(DD) {
      return {
        icon: DD.str(),
        style: jD(DD)
      }
    }

    function LD(DD) {
      const CD = DD.index(3);
      return 0 === CD ? {
        string: DD.str()
      } : 1 === CD ? {
        styledEntityName: JD(DD)
      } : {
        styledTranslatedText: VD(DD)
      }
    }

    function TD(DD) {
      const CD = DD.index(3);
      return 0 === CD ? null : 1 === CD ? DD.str() : DD.long()
    }

    function GD(DD) {
      return 0 === DD.index(2) ? null : DD.float()
    }

    function RD(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          color: zD(DD),
          colour: zD(DD),
          fontWeight: TD(DD),
          fontStyle: zD(DD),
          fontSize: zD(DD),
          opacity: GD(DD)
        }
      }(DD)
    }

    function kD(DD) {
      return {
        str: LD(DD),
        style: RD(DD),
        clickableUrl: zD(DD)
      }
    }

    function dD(DD) {
      return DD.str()
    }

    function YD(DD) {
      return DD.Tt(dD)
    }

    function WD(DD) {
      return 0 === DD.index(2) ? null : YD(DD)
    }

    function sD(DD) {
      return {
        type: DD.str(),
        progress: DD.float(),
        width: zD(DD),
        height: zD(DD),
        colours: WD(DD),
        backgroundColour: zD(DD)
      }
    }

    function ED(DD) {
      return {
        type: DD.str(),
        action: DD.str(),
        style: RD(DD)
      }
    }

    function eD(DD) {
      const CD = DD.index(7);
      return 0 === CD ? {
        string: DD.str()
      } : 1 === CD ? {
        entityName: JD(DD)
      } : 2 === CD ? {
        translatedText: VD(DD)
      } : 3 === CD ? {
        styledIcon: lD(DD)
      } : 4 === CD ? {
        jD: kD(DD)
      } : 5 === CD ? {
        styledProgressBar: sD(DD)
      } : {
        styledKeyBinding: ED(DD)
      }
    }

    function uD(DD) {
      return DD.Tt(eD)
    }
    const hD = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function rD(DD) {
      return hD[DD.index(5)]
    }

    function AD(DD) {
      return 0 === DD.index(2) ? null : DD.double()
    }

    function FD(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          KD: AD(DD),
          aD: DD.double(),
          VD: DD.double(),
          zD: DD.bool(),
          description: uD(DD),
          LD: DD.str(),
          scale: AD(DD),
          rotation: AD(DD)
        }
      }(DD)
    }

    function DC(DD) {
      return 0 === DD.index(2) ? null : DD.bool()
    }

    function CC(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          GD: DD.double(),
          icon: DD.str(),
          label: uD(DD),
          RD: DD.bool(),
          scale: AD(DD),
          rotation: AD(DD),
          kD: DC(DD)
        }
      }(DD)
    }

    function cC(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          KD: AD(DD),
          YD: DD.double(),
          WD: DD.double(),
          sD: DD.double(),
          gravity: DD.double(),
          ED: DD.double(),
          eD: DD.double(),
          uD: DD.double(),
          zD: DD.bool(),
          description: uD(DD),
          icon: zD(DD)
        }
      }(DD)
    }

    function IC(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          speed: DD.double(),
          rD: DD.double(),
          label: uD(DD),
          icon: zD(DD),
          scale: AD(DD),
          rotation: AD(DD)
        }
      }(DD)
    }

    function pC(DD) {
      return 0 === DD.index(2) ? null : DD.long()
    }

    function iC(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          FD: DD.long(),
          DC: DD.double(),
          CC: DD.double(),
          cC: pC(DD),
          label: uD(DD),
          icon: zD(DD)
        }
      }(DD)
    }

    function fC(DD) {
      return {
        type: rD(DD),
        progressBar: FD(DD),
        timedClick: CC(DD),
        gravityBar: cC(DD),
        precisionBar: IC(DD),
        rhythmClick: iC(DD)
      }
    }

    function bC(DD) {
      return DD.float()
    }

    function QC(DD) {
      return DD.Tt(bC)
    }

    function wC(DD) {
      return 0 === DD.index(2) ? null : QC(DD)
    }

    function SC(DD) {
      return 0 === DD.index(2) ? null : uD(DD)
    }

    function BC(DD) {
      return DD.long()
    }

    function yC(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return DD.Tt(BC)
      }(DD)
    }

    function MC(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          Pc: DD.str(),
          Kc: DD.long()
        }
      }(DD)
    }

    function tC(DD) {
      const CD = DD.index(3);
      return 0 === CD ? null : 1 === CD ? DD.str() : VD(DD)
    }

    function ZC(DD) {
      return {
        Tc: DD.str(),
        Gc: DD.str(),
        Rc: DD.str()
      }
    }

    function oC(DD) {
      return {
        QI: DD.str(),
        wI: zD(DD),
        SI: zD(DD),
        BI: YD(DD)
      }
    }

    function vC(DD) {
      return DD.Tt(oC)
    }

    function NC(DD) {
      return {
        oI: DD.str(),
        x: DD.long(),
        y: DD.long(),
        z: DD.long()
      }
    }

    function gC(DD) {
      return DD.Tt(NC)
    }

    function XC(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          GI: DD.float(),
          RI: DD.long(),
          kI: DD.long()
        }
      }(DD)
    }

    function mC(DD) {
      return {
        blockName: DD.str(),
        KI: DD.bool(),
        aI: DD.bool(),
        VI: DD.bool(),
        zI: DD.float(),
        jI: DD.float(),
        lI: DD.long(),
        LI: XC(DD)
      }
    }

    function nC(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return DD.Tt(mC)
      }(DD)
    }

    function OC(DD) {
      return {
        xI: DD.str(),
        qI: nC(DD)
      }
    }

    function PC(DD) {
      return {
        blockName: DD.str(),
        frequency: DD.float()
      }
    }

    function HC(DD) {
      return DD.Tt(PC)
    }

    function UC(DD) {
      return {
        WI: DD.str(),
        sI: DD.str(),
        frequency: DD.float(),
        EI: HC(DD)
      }
    }

    function xC(DD) {
      return DD.Tt(UC)
    }

    function qC(DD) {
      return {
        blockName: DD.str(),
        radius: DD.long(),
        rI: DD.long(),
        XI: DD.long(),
        mI: DD.long(),
        AI: DD.float()
      }
    }

    function JC(DD) {
      return DD.Tt(qC)
    }

    function KC(DD) {
      return {
        XI: DD.long(),
        mI: DD.long(),
        nI: DD.long(),
        OI: DD.bool(),
        HI: OC(DD),
        dI: xC(DD),
        uI: JC(DD)
      }
    }

    function aC(DD) {
      return DD.Tt(KC)
    }

    function VC(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          name: DD.str(),
          cp: zD(DD)
        }
      }(DD)
    }

    function zC(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          terrain: VC(DD),
          Ip: JC(DD)
        }
      }(DD)
    }

    function jC(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          layers: aC(DD),
          FI: zC(DD)
        }
      }(DD)
    }
  },
  39701: (DD, CD, cD) => {
    cD.d(CD, {
      D: () => HD,
      G: () => OD,
      I: () => JD,
      M: () => XD,
      P: () => mD,
      Q: () => oD,
      U: () => UD,
      Y: () => aD,
      ab: () => tD,
      e: () => pD,
      eb: () => zD,
      i: () => VD,
      ib: () => ND,
      kb: () => vD,
      m: () => KD,
      ob: () => gD,
      p: () => MD,
      q: () => ZD,
      rb: () => nD,
      u: () => qD,
      y: () => PD,
      z: () => xD
    });
    var ID = cD(2782);
    const pD = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53
    };

    function iD(DD, CD) {
      return !ArrayBuffer.isView(DD) || DD instanceof DataView ? Array.isArray(DD) ? DD.map((DD => CD(DD))) : DD : Array.from(DD, (DD => CD(DD)))
    }

    function fD(DD) {
      if ("string" !== typeof DD) return DD;
      for (let CD = 0; CD < DD.length; CD++) {
        const cD = DD.charCodeAt(CD);
        if (cD >= 55296 && cD <= 57343) return QD.decode(bD.encode(DD))
      }
      return DD
    }
    const bD = new TextEncoder,
      QD = new TextDecoder;

    function wD(DD) {
      return DD
    }
    let SD;

    function BD(DD) {
      return null === DD || "object" !== typeof DD ? DD : [fD(DD.wf), fD(DD.Sf)]
    }

    function yD(DD) {
      return null === DD || "object" !== typeof DD ? DD : [iD(DD.si, wD), iD(DD.Lw, wD)]
    }

    function MD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.Rf), fD(CD.kf)];
      var CD
    }

    function tD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [CD.id, CD.gf];
      var CD
    }

    function ZD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [CD.tC, fD(CD.ZC), CD.oC, fD(CD.gC), CD.OC, CD.PC, CD.Lf, fD(CD.Tf), fD(CD.Gf)];
      var CD
    }

    function oD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [iD(CD.PS, wD), CD.HS];
      var CD
    }

    function vD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [iD(CD.Kb, (DD => fD(DD))), fD(CD.Vb), CD.zb];
      var CD
    }

    function ND(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [iD(CD.Xf, wD), fD(CD.mf), CD.Pf];
      var CD
    }

    function gD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.Gc), fD(CD.Rc)];
      var CD
    }

    function XD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.Pb)];
      var CD
    }

    function mD(DD) {
      return fD(DD)
    }

    function nD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.cB), fD(CD.IB), fD(CD.wf), fD(CD.Sf)];
      var CD
    }

    function OD(DD) {
      return BD(DD)
    }

    function PD(DD) {
      return BD(DD)
    }

    function HD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.Yf)];
      var CD
    }

    function UD(DD) {
      return DD
    }

    function xD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.Mf), fD(CD.tf)];
      var CD
    }

    function qD(DD) {
      return fD(DD)
    }

    function JD(DD) {
      return yD(DD)
    }

    function KD(DD) {
      return yD(DD)
    }

    function aD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.qb)];
      var CD
    }

    function VD(DD) {
      return (SD ??= (0, ID.i)().map((DD => DD.name)), SD).map((CD => {
        return "string" === typeof(cD = DD[CD]) ? fD(cD) : iD(cD, wD);
        var cD
      }))
    }

    function zD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [CD.Gb, CD.Rb, CD.kb];
      var CD
    }
  },
  9237: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      g: () => iD
    });
    var ID = cD(9189);
    const pD = "Air",
      iD = Object.freeze(new ID.d(pD, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38540: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      d: () => bD
    });
    var ID = cD(326),
      pD = cD(4264);
    const iD = new Set(pD.k),
      fD = new Map;

    function bD(DD, CD) {
      let cD = fD.get(CD);
      void 0 === cD && (cD = new Map, fD.set(CD, cD));
      let pD = cD.get(DD);
      return void 0 === pD && (pD = `${DD}${(0,ID.z)(CD)}`, cD.set(DD, pD)), pD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);