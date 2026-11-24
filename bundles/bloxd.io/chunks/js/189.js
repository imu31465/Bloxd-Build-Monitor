export const id = 189;
export const ids = [189];
export const modules = {
  40540: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => cD,
      e: () => LD,
      i: () => rD
    });
    var pD = wD(40544),
      sD = wD(4817),
      KD = wD(40550);

    function rD(DD) {
      return DD.payloadKind === sD.pc.Msgpack ? (0, pD.b)(DD.payload) : void 0
    }

    function LD(DD, zD) {
      if (zD.payloadKind === sD.pc.Bytes || zD.payloadKind === sD.pc.MsgpackBin) return (0, KD.d)(DD, zD.payload)
    }

    function cD(DD) {
      return null !== DD && "object" === typeof DD
    }
  },
  40558: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => AD,
      f: () => UD,
      h: () => fD,
      l: () => RD,
      n: () => GD
    });
    var pD = wD(4817),
      sD = wD(40562);
    const KD = new Map,
      rD = new Set,
      LD = new Set;
    let cD = 0,
      gD = 0;

    function RD(DD, zD) {
      let wD = KD.get(DD);
      return wD || (wD = new Set, KD.set(DD, wD)), wD.add(zD), () => {
        wD.delete(zD)
      }
    }

    function AD() {
      return 0 !== cD
    }

    function UD(DD) {
      return rD.add(DD), () => {
        rD.delete(DD)
      }
    }

    function fD(DD) {
      return LD.add(DD), () => {
        LD.delete(DD)
      }
    }
    const ID = "A raw message listener threw";

    function BD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rD;
      for (const pD of zD) try {
        pD()
      } catch (wD) {
        DD ? (0, sD.k)(wD, ID) : console.error(ID, wD)
      }
    }
    const GD = {
      fire: function(DD) {
        if ("connection" === DD.type) {
          const zD = DD.phase === pD.D.Activated && DD.conn !== cD && DD.conn > gD,
            wD = (DD.phase === pD.D.Left || DD.phase === pD.D.Closed) && DD.conn === cD;
          return void(zD || wD ? (cD = zD ? DD.conn : 0, BD(!0)) : DD.phase === pD.D.Resumed && 0 !== cD && DD.conn > gD && (cD = DD.conn, BD(!0, LD)))
        }
        const zD = KD.get(DD.lg);
        if (zD && DD.conn === cD && 0 !== cD)
          for (const pD of zD) try {
            pD(DD)
          } catch (wD) {
            (0, sD.k)(wD, ID)
          }
      },
      close: function(DD) {
        gD = Math.max(gD, DD, cD), 0 !== cD && (cD = 0, BD(!1))
      }
    }
  },
  40529: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => gD,
      d: () => cD,
      h: () => LD
    });
    var pD = wD(1270),
      sD = wD(40506);
    const KD = new TextDecoder,
      rD = new TextEncoder;

    function LD(DD, zD) {
      const wD = DD.queries.entityName(zD);
      if (wD === sD.Ec) return;
      const rD = DD.memoryData(DD.scratch(), 4 + wD, 4, "entity_name's answer");
      if (!rD) return;
      const LD = rD.getUint32(0, !0),
        cD = KD.decode(new Uint8Array(rD.buffer, rD.byteOffset + 4, wD));
      return (0, pD.e)(cD, !1, LD === sD.Nd ? null : LD)
    }

    function cD(DD, zD, wD) {
      const pD = rD.encode(wD);
      if (pD.length > sD.Ab) return !1;
      const KD = DD.memoryView(Uint8Array, DD.scratch(), pD.length, "has_effect's name");
      return !!KD && (KD.set(pD), 1 === DD.queries.hasEffect(zD, pD.length))
    }

    function gD(DD, zD, wD, pD) {
      const rD = DD.queries.blockData(zD, wD, pD);
      if (rD === sD.Ec) return;
      const LD = DD.memoryView(Uint8Array, DD.scratch(), rD, "block_data's answer");
      return LD ? JSON.parse(KD.decode(LD)) : void 0
    }
  },
  40544: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      d: () => RD
    });
    const pD = new TextDecoder;

    function sD(DD) {
      const zD = new KD(DD),
        wD = zD.value();
      if (zD.at !== DD.length) throw new Error(`msgpack: ${DD.length-zD.at} bytes after the value`);
      return wD
    }
    class KD {
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
        const zD = this.at;
        if (zD + DD > this.bytes.length) throw new Error(`msgpack: ${DD} bytes past the end at ${zD}`);
        return this.at = zD + DD, zD
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
        const zD = this.take(8);
        return DD ? this.view.getBigInt64(zD, !1) : this.view.getBigUint64(zD, !1)
      }
      str(DD) {
        const zD = this.take(DD),
          wD = this.bytes;
        if (DD < 16) {
          let sD = "";
          for (let KD = zD; KD < zD + DD; KD++) {
            const rD = wD[KD];
            if (rD >= 128) return pD.decode(wD.subarray(zD, zD + DD));
            sD += String.fromCharCode(rD)
          }
          return sD
        }
        return pD.decode(wD.subarray(zD, zD + DD))
      }
      bin(DD) {
        const zD = this.take(DD);
        return this.bytes.subarray(zD, zD + DD)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(DD) {
        this.enter();
        const zD = [];
        for (let wD = 0; wD < DD; wD++) zD.push(this.value());
        return this.depth--, zD
      }
      map(DD) {
        this.enter();
        const zD = {};
        for (let wD = 0; wD < DD; wD++) {
          const DD = this.value(),
            wD = this.value();
          zD["__proto__" === DD ? "__proto_" : String(DD)] = wD
        }
        return this.depth--, zD
      }
      ext(DD) {
        const zD = this.view.getInt8(this.take(1)),
          wD = this.take(DD);
        if (0 !== zD) {
          if (-1 === zD) {
            if (1 === DD) return new Date(NaN);
            if (4 === DD) return new Date(1e3 * this.view.getUint32(wD, !1));
            if (8 === DD) {
              const DD = this.view.getUint32(wD, !1),
                zD = DD >>> 2,
                pD = 4294967296 * (3 & DD) + this.view.getUint32(wD + 4, !1);
              return new Date(1e3 * pD + zD / 1e6)
            }
            if (12 === DD) {
              const DD = this.view.getUint32(wD, !1),
                zD = 4294967296 * this.view.getInt32(wD + 4, !1) + this.view.getUint32(wD + 8, !1);
              return new Date(1e3 * zD + DD / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${zD} of ${DD} bytes`)
        }
      }
    }
    const rD = new TextEncoder,
      LD = -(2n ** 63n),
      cD = 2n ** 63n - 1n,
      gD = 2n ** 64n - 1n;

    function RD(DD) {
      const zD = new AD;
      return zD.value(DD, 0), zD.bytes()
    }
    class AD {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(DD, zD) {
        if (zD > 512) throw new Error("msgpack: nested too deep");
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
              for (const wD of DD) this.value(wD, zD + 1)
            } else {
              var wD, pD;
              if (Object.getPrototypeOf(DD) !== Object.prototype && null !== Object.getPrototypeOf(DD)) throw new Error(`msgpack: can't encode a ${null!==(wD=null===(pD=DD.constructor)||void 0===pD?void 0:pD.name)&&void 0!==wD?wD:"object"}`);
              {
                const wD = Object.keys(DD);
                this.head(wD.length, 222, 128, 222, 223);
                for (const pD of wD) this.string(pD), this.value(DD[pD], zD + 1)
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
        const zD = DD >= LD && DD <= cD;
        if (!zD && (DD < 0n || DD > gD)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(zD ? 211 : 207), this.room(8), zD ? this.view.setBigInt64(this.at, DD, !1) : this.view.setBigUint64(this.at, DD, !1), this.at += 8
      }
      string(DD) {
        const zD = rD.encode(DD);
        this.head(zD.length, 217, 160, 218, 219), this.room(zD.length), this.buf.set(zD, this.at), this.at += zD.length
      }
      head(DD, zD, wD, pD, sD) {
        wD >= 0 && DD < (160 === wD ? 32 : 16) ? this.u8(wD | DD) : zD !== pD && DD < 256 ? (this.u8(zD), this.u8(DD)) : DD < 65536 ? (this.u8(pD), this.u16(DD)) : (this.u8(sD), this.u32(DD))
      }
      room(DD) {
        if (this.at + DD <= this.buf.length) return;
        let zD = 2 * this.buf.length;
        for (; zD < this.at + DD;) zD *= 2;
        const wD = new Uint8Array(zD);
        wD.set(this.buf.subarray(0, this.at)), this.buf = wD, this.view = new DataView(wD.buffer)
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
  40550: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD
    });
    var pD = wD(40535);
    const sD = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class KD {
      constructor(DD) {
        this.buf = DD, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let DD = this.u8(),
          zD = 127 & DD,
          wD = 128;
        for (; 128 & DD;) {
          if (wD > 2 ** 63) throw new RangeError("avro: varint too long");
          DD = this.u8(), zD += (127 & DD) * wD, wD *= 128
        }
        return zD % 2 === 1 ? -(zD + 1) / 2 : zD / 2
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
          zD = this.take(DD),
          wD = zD + DD;
        if (DD <= 32) {
          let DD = "";
          for (let pD = zD; pD < wD; pD++) {
            const KD = this.buf[pD];
            if (KD >= 128) return sD.decode(this.buf.subarray(zD, wD));
            DD += String.fromCharCode(KD)
          }
          return DD
        }
        return sD.decode(this.buf.subarray(zD, wD))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(DD) {
        const zD = this.take(DD);
        return this.buf.slice(zD, zD + DD)
      }
      index(DD) {
        const zD = this.long();
        if (!(zD >= 0 && zD < DD)) throw new RangeError(`avro: index ${zD} of ${DD}`);
        return zD
      }
      OI(DD) {
        const zD = [];
        for (let wD = this.long(); 0 !== wD; wD = this.long()) {
          wD = this.block(wD);
          for (let pD = 0; pD < wD; pD++) zD.push(DD(this))
        }
        return zD
      }
      map(DD) {
        const zD = {};
        for (let wD = this.long(); 0 !== wD; wD = this.long()) {
          wD = this.block(wD);
          for (let pD = 0; pD < wD; pD++) {
            zD[this.str()] = DD(this)
          }
        }
        return zD
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(DD) {
        let zD = DD;
        if (zD < 0 && (zD = -zD, this.long()), zD > this.buf.length - this.at) throw new RangeError(`avro: block of ${zD} items in ${this.buf.length-this.at} bytes`);
        return zD
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
        const zD = this.at;
        if (DD > this.buf.length - zD) throw new RangeError("avro: truncated");
        return this.at = zD + DD, zD
      }
    }

    function rD(DD, zD) {
      const wD = new KD(zD),
        sD = (0, pD.nb)(DD, wD);
      return wD.end(), sD
    }
  },
  40535: (DD, zD, wD) => {
    wD.d(zD, {
      C: () => CD,
      F: () => sD,
      J: () => LD,
      L: () => fD,
      O: () => VD,
      S: () => XD,
      V: () => ED,
      Z: () => RD,
      ab: () => AD,
      cb: () => PD,
      d: () => JD,
      db: () => ID,
      e: () => GD,
      g: () => hD,
      hb: () => MD,
      i: () => nD,
      ib: () => BD,
      j: () => QD,
      mb: () => cD,
      n: () => pD,
      nb: () => xD,
      o: () => KD,
      r: () => OD,
      u: () => UD,
      x: () => gD,
      y: () => rD
    });
    const pD = 2,
      sD = 12,
      KD = 27,
      rD = 40,
      LD = 52,
      cD = 59,
      gD = 63,
      RD = 83,
      AD = 84,
      UD = 89,
      fD = 91,
      ID = 93,
      BD = 94,
      GD = 95,
      hD = 97,
      nD = 101,
      MD = 102,
      OD = 73,
      JD = 16,
      ED = 86,
      QD = 60,
      XD = 17,
      VD = 56,
      PD = 100,
      CD = 81;

    function xD(DD, zD) {
      switch (DD) {
        case pD:
          return function(DD) {
            return {
              yK: tD(DD),
              kK: DD.float(),
              mK: DD.long()
            }
          }(zD);
        case sD:
          return function(DD) {
            return {
              os: SD(DD),
              Fs: SD(DD)
            }
          }(zD);
        case KD:
          return function(DD) {
            return {
              ys: DD.bool(),
              es: SD(DD)
            }
          }(zD);
        case rD:
          return zD.str();
        case LD:
          return function(DD) {
            return {
              id: DD.long(),
              Ow: rz(DD)
            }
          }(zD);
        case cD:
          return function(DD) {
            return {
              Ls: SD(DD),
              gs: cz(DD)
            }
          }(zD);
        case gD:
          return zD.str();
        case RD:
        case AD:
          return zD.long();
        case UD:
          return function(DD) {
            return {
              ap: DD.long(),
              vp: DD.bool(),
              tp: DD.float()
            }
          }(zD);
        case fD:
          return zD.long();
        case ID:
          return function(DD) {
            return {
              Qp: DD.bool(),
              Xp: Az(DD)
            }
          }(zD);
        case BD:
          return function(DD) {
            return {
              id: DD.str(),
              position: Rz(DD),
              Bp: Uz(DD),
              style: yD(DD),
              hp: DD.bool()
            }
          }(zD);
        case GD:
          return function(DD) {
            return {
              id: SD(DD)
            }
          }(zD);
        case hD:
          return function(DD) {
            return {
              zr: DD.long(),
              wr: DD.str(),
              sr: sz(DD),
              Kr: sz(DD),
              rr: SD(DD),
              Lr: SD(DD),
              Rr: SD(DD),
              Ar: SD(DD),
              Ur: SD(DD),
              Ir: sz(DD),
              Br: sz(DD),
              Gr: SD(DD),
              hr: SD(DD),
              nr: SD(DD)
            }
          }(zD);
        case nD:
          return zD.str();
        case MD:
          return zD.long();
        case OD:
          return function(DD) {
            return {
              vD: DD.long(),
              tD: DD.str(),
              FD: DD.float()
            }
          }(zD);
        case JD:
          return function(DD) {
            return {
              xp: DD.bool(),
              Tp: SD(DD),
              bp: DD.str(),
              jp: Iz(DD),
              dp: Iz(DD),
              Sp: DD.bool(),
              ip: DD.long(),
              lp: Bz(DD)
            }
          }(zD);
        case ED:
          return function(DD) {
            return {
              WK: SD(DD)
            }
          }(zD);
        case QD:
          return function(DD) {
            return {
              np: DD.str(),
              Mp: DD.str(),
              Op: Gz(DD),
              Ss: DD.str(),
              ls: HD(DD),
              Ws: DD.float()
            }
          }(zD);
        case XD:
          return function(DD) {
            return {
              np: DD.str(),
              Mp: DD.str(),
              Op: Gz(DD)
            }
          }(zD);
        case VD:
          return function(DD) {
            return DD.OI(hz)
          }(zD);
        case PD:
          return function(DD) {
            return {
              Hw: Mz(DD),
              sp: eD(DD)
            }
          }(zD);
        case CD:
          return function(DD) {
            return {
              DD: DD.bool(),
              zD: SD(DD),
              wD: Jz(DD),
              sD: Wz(DD)
            }
          }(zD);
        default:
          throw new Error(`no reader for to-client message ${DD}`)
      }
    }

    function TD(DD) {
      return {
        entityName: DD.str()
      }
    }

    function bD(DD) {
      const zD = DD.index(4);
      return 0 === zD ? DD.str() : 1 === zD ? DD.long() : 2 === zD ? DD.bool() : TD(DD)
    }

    function jD(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return DD.map(bD)
      }(DD)
    }

    function dD(DD) {
      return {
        translationKey: DD.str(),
        params: jD(DD)
      }
    }

    function SD(DD) {
      return 0 === DD.index(2) ? null : DD.str()
    }

    function iD(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          color: SD(DD),
          colour: SD(DD),
          fontSize: SD(DD)
        }
      }(DD)
    }

    function lD(DD) {
      return {
        icon: DD.str(),
        style: iD(DD)
      }
    }

    function WD(DD) {
      const zD = DD.index(3);
      return 0 === zD ? {
        string: DD.str()
      } : 1 === zD ? {
        styledEntityName: TD(DD)
      } : {
        styledTranslatedText: dD(DD)
      }
    }

    function ND(DD) {
      const zD = DD.index(3);
      return 0 === zD ? null : 1 === zD ? DD.str() : DD.long()
    }

    function ZD(DD) {
      return 0 === DD.index(2) ? null : DD.float()
    }

    function yD(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          color: SD(DD),
          colour: SD(DD),
          fontWeight: ND(DD),
          fontStyle: SD(DD),
          fontSize: SD(DD),
          opacity: ZD(DD)
        }
      }(DD)
    }

    function kD(DD) {
      return {
        str: WD(DD),
        style: yD(DD),
        clickableUrl: SD(DD)
      }
    }

    function mD(DD) {
      return DD.str()
    }

    function eD(DD) {
      return DD.OI(mD)
    }

    function oD(DD) {
      return 0 === DD.index(2) ? null : eD(DD)
    }

    function aD(DD) {
      return {
        type: DD.str(),
        progress: DD.float(),
        width: SD(DD),
        height: SD(DD),
        colours: oD(DD),
        backgroundColour: SD(DD)
      }
    }

    function uD(DD) {
      return {
        type: DD.str(),
        action: DD.str(),
        style: yD(DD)
      }
    }

    function vD(DD) {
      const zD = DD.index(7);
      return 0 === zD ? {
        string: DD.str()
      } : 1 === zD ? {
        entityName: TD(DD)
      } : 2 === zD ? {
        translatedText: dD(DD)
      } : 3 === zD ? {
        styledIcon: lD(DD)
      } : 4 === zD ? {
        xw: kD(DD)
      } : 5 === zD ? {
        styledProgressBar: aD(DD)
      } : {
        styledKeyBinding: uD(DD)
      }
    }

    function tD(DD) {
      return DD.OI(vD)
    }
    const FD = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function YD(DD) {
      return FD[DD.index(5)]
    }

    function HD(DD) {
      return 0 === DD.index(2) ? null : DD.double()
    }

    function qD(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          Xw: HD(DD),
          Vw: DD.double(),
          Pw: DD.double(),
          Cw: DD.bool(),
          description: tD(DD),
          bw: DD.str(),
          scale: HD(DD),
          rotation: HD(DD)
        }
      }(DD)
    }

    function Dz(DD) {
      return 0 === DD.index(2) ? null : DD.bool()
    }

    function zz(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          dw: DD.double(),
          icon: DD.str(),
          label: tD(DD),
          Sw: DD.bool(),
          scale: HD(DD),
          rotation: HD(DD),
          iw: Dz(DD)
        }
      }(DD)
    }

    function wz(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          Xw: HD(DD),
          Ww: DD.double(),
          Nw: DD.double(),
          Zw: DD.double(),
          gravity: DD.double(),
          yw: DD.double(),
          kw: DD.double(),
          mw: DD.double(),
          Cw: DD.bool(),
          description: tD(DD),
          icon: SD(DD)
        }
      }(DD)
    }

    function pz(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          speed: DD.double(),
          ow: DD.double(),
          label: tD(DD),
          icon: SD(DD),
          scale: HD(DD),
          rotation: HD(DD)
        }
      }(DD)
    }

    function sz(DD) {
      return 0 === DD.index(2) ? null : DD.long()
    }

    function Kz(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          uw: DD.long(),
          tw: DD.double(),
          Fw: DD.double(),
          Yw: sz(DD),
          label: tD(DD),
          icon: SD(DD)
        }
      }(DD)
    }

    function rz(DD) {
      return {
        type: YD(DD),
        progressBar: qD(DD),
        timedClick: zz(DD),
        gravityBar: wz(DD),
        precisionBar: pz(DD),
        rhythmClick: Kz(DD)
      }
    }
    const Lz = ["playerGone", "rateLimited"];

    function cz(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return Lz[DD.index(2)]
      }(DD)
    }

    function gz(DD) {
      return DD.float()
    }

    function Rz(DD) {
      return DD.OI(gz)
    }

    function Az(DD) {
      return 0 === DD.index(2) ? null : Rz(DD)
    }

    function Uz(DD) {
      return 0 === DD.index(2) ? null : tD(DD)
    }

    function fz(DD) {
      return DD.long()
    }

    function Iz(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return DD.OI(fz)
      }(DD)
    }

    function Bz(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          rp: DD.str(),
          Ip: DD.long()
        }
      }(DD)
    }

    function Gz(DD) {
      const zD = DD.index(3);
      return 0 === zD ? null : 1 === zD ? DD.str() : dD(DD)
    }

    function hz(DD) {
      return {
        Vp: DD.str(),
        Pp: DD.str(),
        Cp: DD.str()
      }
    }

    function nz(DD) {
      return {
        qw: DD.str(),
        Dp: SD(DD),
        zp: SD(DD),
        wp: eD(DD)
      }
    }

    function Mz(DD) {
      return DD.OI(nz)
    }

    function Oz(DD) {
      return {
        pD: DD.str(),
        x: DD.long(),
        y: DD.long(),
        z: DD.long()
      }
    }

    function Jz(DD) {
      return DD.OI(Oz)
    }

    function Ez(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          VD: DD.float(),
          PD: DD.long(),
          CD: DD.long()
        }
      }(DD)
    }

    function Qz(DD) {
      return {
        blockName: DD.str(),
        hD: DD.bool(),
        nD: DD.bool(),
        MD: DD.bool(),
        OD: DD.float(),
        JD: DD.float(),
        ED: DD.long(),
        QD: Ez(DD)
      }
    }

    function Xz(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return DD.OI(Qz)
      }(DD)
    }

    function Vz(DD) {
      return {
        fD: DD.str(),
        BD: Xz(DD)
      }
    }

    function Pz(DD) {
      return {
        blockName: DD.str(),
        frequency: DD.float()
      }
    }

    function Cz(DD) {
      return DD.OI(Pz)
    }

    function xz(DD) {
      return {
        bD: DD.str(),
        jD: DD.str(),
        frequency: DD.float(),
        dD: Cz(DD)
      }
    }

    function Tz(DD) {
      return DD.OI(xz)
    }

    function bz(DD) {
      return {
        blockName: DD.str(),
        radius: DD.long(),
        WD: DD.long(),
        LD: DD.long(),
        cD: DD.long(),
        ND: DD.float()
      }
    }

    function jz(DD) {
      return DD.OI(bz)
    }

    function dz(DD) {
      return {
        LD: DD.long(),
        cD: DD.long(),
        gD: DD.long(),
        RD: DD.bool(),
        AD: Vz(DD),
        xD: Tz(DD),
        iD: jz(DD)
      }
    }

    function Sz(DD) {
      return DD.OI(dz)
    }

    function iz(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          name: DD.str(),
          mD: SD(DD)
        }
      }(DD)
    }

    function lz(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          terrain: iz(DD),
          eD: jz(DD)
        }
      }(DD)
    }

    function Wz(DD) {
      return 0 === DD.index(2) ? null : function(DD) {
        return {
          layers: Sz(DD),
          ZD: lz(DD)
        }
      }(DD)
    }
  },
  40522: (DD, zD, wD) => {
    wD.d(zD, {
      $: () => nD,
      A: () => VD,
      B: () => QD,
      E: () => TD,
      F: () => OD,
      J: () => JD,
      N: () => GD,
      Q: () => PD,
      U: () => jD,
      Y: () => ID,
      _: () => SD,
      ab: () => hD,
      d: () => sD,
      e: () => dD,
      eb: () => MD,
      fb: () => ED,
      i: () => bD,
      l: () => fD,
      m: () => BD,
      p: () => xD,
      s: () => XD,
      w: () => CD
    });
    var pD = wD(2980);
    const sD = {
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
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function KD(DD, zD) {
      return !ArrayBuffer.isView(DD) || DD instanceof DataView ? Array.isArray(DD) ? DD.map((DD => zD(DD))) : DD : Array.from(DD, (DD => zD(DD)))
    }

    function rD(DD) {
      if ("string" !== typeof DD) return DD;
      for (let zD = 0; zD < DD.length; zD++) {
        const wD = DD.charCodeAt(zD);
        if (wD >= 55296 && wD <= 57343) return cD.decode(LD.encode(DD))
      }
      return DD
    }
    const LD = new TextEncoder,
      cD = new TextDecoder;

    function gD(DD) {
      return DD
    }
    let RD;

    function AD(DD) {
      return null === DD || "object" !== typeof DD ? DD : [rD(DD.Dg), rD(DD.zg)]
    }

    function UD(DD) {
      return null === DD || "object" !== typeof DD ? DD : [KD(DD.jp, gD), KD(DD.Or, gD)]
    }

    function fD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.lg), rD(zD.Wg)];
      var zD
    }

    function ID(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [zD.id, zD.VR];
      var zD
    }

    function BD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [zD.zr, rD(zD.wr), zD.sr, rD(zD.Lr), zD.Ir, zD.Br, zD.wL, rD(zD.pL), rD(zD.sL)];
      var zD
    }

    function GD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [KD(zD.UR, gD), zD.fR];
      var zD
    }

    function hD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [KD(zD.Xg, (DD => rD(DD))), rD(zD.Vg), zD.Pg];
      var zD
    }

    function nD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [KD(zD.qr, gD), rD(zD.DL), zD.zL];
      var zD
    }

    function MD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.Pp), rD(zD.Cp)];
      var zD
    }

    function OD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.gL)];
      var zD
    }

    function JD(DD) {
      return rD(DD)
    }

    function ED(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.DR), rD(zD.zR), rD(zD.Dg), rD(zD.zg)];
      var zD
    }

    function QD(DD) {
      return AD(DD)
    }

    function XD(DD) {
      return AD(DD)
    }

    function VD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.Mr)];
      var zD
    }

    function PD(DD) {
      return DD
    }

    function CD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.kr), rD(zD.mr)];
      var zD
    }

    function xD(DD) {
      return rD(DD)
    }

    function TD(DD) {
      return UD(DD)
    }

    function bD(DD) {
      return UD(DD)
    }

    function jD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.wR)];
      var zD
    }

    function dD(DD) {
      return (RD ??= (0, pD.f)().map((DD => DD.name)), RD).map((zD => {
        return "string" === typeof(wD = DD[zD]) ? rD(wD) : KD(wD, gD);
        var wD
      }))
    }

    function SD(DD) {
      return null === (zD = DD) || "object" !== typeof zD ? zD : [zD.ag, zD.ug, zD.vg];
      var zD
    }
  },
  9286: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      e: () => KD
    });
    var pD = wD(9236);
    const sD = "Air",
      KD = Object.freeze(new pD.h(sD, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39209: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      i: () => LD
    });
    var pD = wD(351),
      sD = wD(4486);
    const KD = new Set(sD.r),
      rD = new Map;

    function LD(DD, zD) {
      let wD = rD.get(zD);
      void 0 === wD && (wD = new Map, rD.set(zD, wD));
      let sD = wD.get(DD);
      return void 0 === sD && (sD = `${DD}${(0,pD.y)(zD)}`, wD.set(DD, sD)), sD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);