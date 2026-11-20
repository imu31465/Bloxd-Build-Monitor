export const id = 199;
export const ids = [199];
export const modules = {
  40246: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => fT,
      e: () => yT,
      g: () => OT
    });
    var lT = cT(40254),
      MT = cT(4761),
      KT = cT(40261);

    function OT(TT) {
      return TT.payloadKind === MT.ac.Msgpack ? (0, lT.c)(TT.payload) : void 0
    }

    function yT(TT, kT) {
      if (kT.payloadKind === MT.ac.Bytes || kT.payloadKind === MT.ac.MsgpackBin) return (0, KT.d)(TT, kT.payload)
    }

    function fT(TT) {
      return null !== TT && "object" === typeof TT
    }
  },
  40264: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => AT,
      h: () => CT,
      l: () => jT,
      m: () => IT,
      n: () => hT
    });
    var lT = cT(4761),
      MT = cT(40273);
    const KT = new Map,
      OT = new Set,
      yT = new Set;
    let fT = 0,
      xT = 0;

    function IT(TT, kT) {
      let cT = KT.get(TT);
      return cT || (cT = new Set, KT.set(TT, cT)), cT.add(kT), () => {
        cT.delete(kT)
      }
    }

    function AT() {
      return 0 !== fT
    }

    function CT(TT) {
      return OT.add(TT), () => {
        OT.delete(TT)
      }
    }

    function jT(TT) {
      return yT.add(TT), () => {
        yT.delete(TT)
      }
    }
    const vT = "A raw message listener threw";

    function tT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OT;
      for (const lT of kT) try {
        lT()
      } catch (cT) {
        TT ? (0, MT.p)(cT, vT) : console.error(vT, cT)
      }
    }
    const hT = {
      fire: function(TT) {
        if ("connection" === TT.type) {
          const kT = TT.phase === lT.x.Activated && TT.conn !== fT && TT.conn > xT,
            cT = (TT.phase === lT.x.Left || TT.phase === lT.x.Closed) && TT.conn === fT;
          return void(kT || cT ? (fT = kT ? TT.conn : 0, tT(!0)) : TT.phase === lT.x.Resumed && 0 !== fT && TT.conn > xT && (fT = TT.conn, tT(!0, yT)))
        }
        const kT = KT.get(TT.vI);
        if (kT && TT.conn === fT && 0 !== fT)
          for (const lT of kT) try {
            lT(TT)
          } catch (cT) {
            (0, MT.p)(cT, vT)
          }
      },
      close: function(TT) {
        xT = Math.max(xT, TT, fT), 0 !== fT && (fT = 0, tT(!1))
      }
    }
  },
  40230: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => xT,
      g: () => fT,
      j: () => yT
    });
    var lT = cT(1279),
      MT = cT(40204);
    const KT = new TextDecoder,
      OT = new TextEncoder;

    function yT(TT, kT) {
      const cT = TT.queries.entityName(kT);
      if (cT === MT.Rc) return;
      const OT = TT.memoryData(TT.scratch(), 4 + cT, 4, "entity_name's answer");
      if (!OT) return;
      const yT = OT.getUint32(0, !0),
        fT = KT.decode(new Uint8Array(OT.buffer, OT.byteOffset + 4, cT));
      return (0, lT.c)(fT, !1, yT === MT.$d ? null : yT)
    }

    function fT(TT, kT, cT) {
      const lT = OT.encode(cT);
      if (lT.length > MT.Lb) return !1;
      const KT = TT.memoryView(Uint8Array, TT.scratch(), lT.length, "has_effect's name");
      return !!KT && (KT.set(lT), 1 === TT.queries.hasEffect(kT, lT.length))
    }

    function xT(TT, kT, cT, lT) {
      const OT = TT.queries.blockData(kT, cT, lT);
      if (OT === MT.Rc) return;
      const yT = TT.memoryView(Uint8Array, TT.scratch(), OT, "block_data's answer");
      return yT ? JSON.parse(KT.decode(yT)) : void 0
    }
  },
  40254: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      g: () => IT
    });
    const lT = new TextDecoder;

    function MT(TT) {
      const kT = new KT(TT),
        cT = kT.value();
      if (kT.at !== TT.length) throw new Error(`msgpack: ${TT.length-kT.at} bytes after the value`);
      return cT
    }
    class KT {
      constructor(TT) {
        this.bytes = TT, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(TT.buffer, TT.byteOffset, TT.byteLength)
      }
      value() {
        const TT = this.u8();
        if (TT <= 127) return TT;
        if (TT >= 224) return TT - 256;
        if (TT >= 128 && TT <= 143) return this.map(15 & TT);
        if (TT >= 144 && TT <= 159) return this.array(15 & TT);
        if (TT >= 160 && TT <= 191) return this.str(31 & TT);
        switch (TT) {
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
            throw new Error(`msgpack: unknown byte 0x${TT.toString(16)} at ${this.at-1}`)
        }
      }
      take(TT) {
        const kT = this.at;
        if (kT + TT > this.bytes.length) throw new Error(`msgpack: ${TT} bytes past the end at ${kT}`);
        return this.at = kT + TT, kT
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
      int64(TT) {
        const kT = this.take(8);
        return TT ? this.view.getBigInt64(kT, !1) : this.view.getBigUint64(kT, !1)
      }
      str(TT) {
        const kT = this.take(TT),
          cT = this.bytes;
        if (TT < 16) {
          let MT = "";
          for (let KT = kT; KT < kT + TT; KT++) {
            const OT = cT[KT];
            if (OT >= 128) return lT.decode(cT.subarray(kT, kT + TT));
            MT += String.fromCharCode(OT)
          }
          return MT
        }
        return lT.decode(cT.subarray(kT, kT + TT))
      }
      bin(TT) {
        const kT = this.take(TT);
        return this.bytes.subarray(kT, kT + TT)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(TT) {
        this.enter();
        const kT = [];
        for (let cT = 0; cT < TT; cT++) kT.push(this.value());
        return this.depth--, kT
      }
      map(TT) {
        this.enter();
        const kT = {};
        for (let cT = 0; cT < TT; cT++) {
          const TT = this.value(),
            cT = this.value();
          kT["__proto__" === TT ? "__proto_" : String(TT)] = cT
        }
        return this.depth--, kT
      }
      ext(TT) {
        const kT = this.view.getInt8(this.take(1)),
          cT = this.take(TT);
        if (0 !== kT) {
          if (-1 === kT) {
            if (1 === TT) return new Date(NaN);
            if (4 === TT) return new Date(1e3 * this.view.getUint32(cT, !1));
            if (8 === TT) {
              const TT = this.view.getUint32(cT, !1),
                kT = TT >>> 2,
                lT = 4294967296 * (3 & TT) + this.view.getUint32(cT + 4, !1);
              return new Date(1e3 * lT + kT / 1e6)
            }
            if (12 === TT) {
              const TT = this.view.getUint32(cT, !1),
                kT = 4294967296 * this.view.getInt32(cT + 4, !1) + this.view.getUint32(cT + 8, !1);
              return new Date(1e3 * kT + TT / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${kT} of ${TT} bytes`)
        }
      }
    }
    const OT = new TextEncoder,
      yT = -(2n ** 63n),
      fT = 2n ** 63n - 1n,
      xT = 2n ** 64n - 1n;

    function IT(TT) {
      const kT = new AT;
      return kT.value(TT, 0), kT.bytes()
    }
    class AT {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(TT, kT) {
        if (kT > 512) throw new Error("msgpack: nested too deep");
        switch (typeof TT) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(TT ? 195 : 194);
          case "number":
            return void this.number(TT);
          case "bigint":
            return void this.bigint(TT);
          case "string":
            return void this.string(TT);
          case "object":
            if (null === TT) this.u8(192);
            else if (TT instanceof Uint8Array) this.head(TT.length, 196, -1, 197, 198), this.room(TT.length), this.buf.set(TT, this.at), this.at += TT.length;
            else if (Array.isArray(TT)) {
              this.head(TT.length, 220, 144, 220, 221);
              for (const cT of TT) this.value(cT, kT + 1)
            } else {
              var cT, lT;
              if (Object.getPrototypeOf(TT) !== Object.prototype && null !== Object.getPrototypeOf(TT)) throw new Error(`msgpack: can't encode a ${null!==(cT=null===(lT=TT.constructor)||void 0===lT?void 0:lT.name)&&void 0!==cT?cT:"object"}`);
              {
                const cT = Object.keys(TT);
                this.head(cT.length, 222, 128, 222, 223);
                for (const lT of cT) this.string(lT), this.value(TT[lT], kT + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof TT)
        }
      }
      number(TT) {
        Number.isInteger(TT) && TT >= -2147483648 && TT <= 4294967295 ? TT >= 0 ? TT < 128 ? this.u8(TT) : TT < 256 ? (this.u8(204), this.u8(TT)) : TT < 65536 ? (this.u8(205), this.u16(TT)) : (this.u8(206), this.u32(TT)) : TT >= -32 ? this.u8(TT + 256) : TT >= -128 ? (this.u8(208), this.u8(TT + 256)) : TT >= -32768 ? (this.u8(209), this.u16(TT + 65536)) : (this.u8(210), this.u32(TT >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, TT, !1), this.at += 8)
      }
      bigint(TT) {
        const kT = TT >= yT && TT <= fT;
        if (!kT && (TT < 0n || TT > xT)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(kT ? 211 : 207), this.room(8), kT ? this.view.setBigInt64(this.at, TT, !1) : this.view.setBigUint64(this.at, TT, !1), this.at += 8
      }
      string(TT) {
        const kT = OT.encode(TT);
        this.head(kT.length, 217, 160, 218, 219), this.room(kT.length), this.buf.set(kT, this.at), this.at += kT.length
      }
      head(TT, kT, cT, lT, MT) {
        cT >= 0 && TT < (160 === cT ? 32 : 16) ? this.u8(cT | TT) : kT !== lT && TT < 256 ? (this.u8(kT), this.u8(TT)) : TT < 65536 ? (this.u8(lT), this.u16(TT)) : (this.u8(MT), this.u32(TT))
      }
      room(TT) {
        if (this.at + TT <= this.buf.length) return;
        let kT = 2 * this.buf.length;
        for (; kT < this.at + TT;) kT *= 2;
        const cT = new Uint8Array(kT);
        cT.set(this.buf.subarray(0, this.at)), this.buf = cT, this.view = new DataView(cT.buffer)
      }
      u8(TT) {
        this.room(1), this.buf[this.at++] = TT
      }
      u16(TT) {
        this.room(2), this.view.setUint16(this.at, TT, !1), this.at += 2
      }
      u32(TT) {
        this.room(4), this.view.setUint32(this.at, TT, !1), this.at += 4
      }
    }
  },
  40261: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(40239);
    const MT = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class KT {
      constructor(TT) {
        this.buf = TT, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let TT = this.u8(),
          kT = 127 & TT,
          cT = 128;
        for (; 128 & TT;) {
          if (cT > 2 ** 63) throw new RangeError("avro: varint too long");
          TT = this.u8(), kT += (127 & TT) * cT, cT *= 128
        }
        return kT % 2 === 1 ? -(kT + 1) / 2 : kT / 2
      }
      float() {
        const TT = this.take(4);
        return this.floats().getFloat32(TT, !0)
      }
      double() {
        const TT = this.take(8);
        return this.floats().getFloat64(TT, !0)
      }
      str() {
        const TT = this.size(),
          kT = this.take(TT),
          cT = kT + TT;
        if (TT <= 32) {
          let TT = "";
          for (let lT = kT; lT < cT; lT++) {
            const KT = this.buf[lT];
            if (KT >= 128) return MT.decode(this.buf.subarray(kT, cT));
            TT += String.fromCharCode(KT)
          }
          return TT
        }
        return MT.decode(this.buf.subarray(kT, cT))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(TT) {
        const kT = this.take(TT);
        return this.buf.slice(kT, kT + TT)
      }
      index(TT) {
        const kT = this.long();
        if (!(kT >= 0 && kT < TT)) throw new RangeError(`avro: index ${kT} of ${TT}`);
        return kT
      }
      fv(TT) {
        const kT = [];
        for (let cT = this.long(); 0 !== cT; cT = this.long()) {
          cT = this.block(cT);
          for (let lT = 0; lT < cT; lT++) kT.push(TT(this))
        }
        return kT
      }
      map(TT) {
        const kT = {};
        for (let cT = this.long(); 0 !== cT; cT = this.long()) {
          cT = this.block(cT);
          for (let lT = 0; lT < cT; lT++) {
            kT[this.str()] = TT(this)
          }
        }
        return kT
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(TT) {
        let kT = TT;
        if (kT < 0 && (kT = -kT, this.long()), kT > this.buf.length - this.at) throw new RangeError(`avro: block of ${kT} items in ${this.buf.length-this.at} bytes`);
        return kT
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const TT = this.long();
        if (TT < 0) throw new RangeError(`avro: length ${TT}`);
        return TT
      }
      u8() {
        const TT = this.buf[this.at];
        if (void 0 === TT) throw new RangeError("avro: truncated");
        return this.at++, TT
      }
      take(TT) {
        const kT = this.at;
        if (TT > this.buf.length - kT) throw new RangeError("avro: truncated");
        return this.at = kT + TT, kT
      }
    }

    function OT(TT, kT) {
      const cT = new KT(kT),
        MT = (0, lT.xb)(TT, cT);
      return cT.end(), MT
    }
  },
  40239: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => xT,
      D: () => OT,
      E: () => bT,
      H: () => MT,
      L: () => yT,
      N: () => jT,
      Q: () => wT,
      U: () => PT,
      Y: () => FT,
      ab: () => IT,
      c: () => aT,
      eb: () => AT,
      g: () => hT,
      h: () => NT,
      ib: () => mT,
      j: () => QT,
      lb: () => vT,
      mb: () => ST,
      n: () => rT,
      o: () => lT,
      q: () => KT,
      qb: () => tT,
      s: () => DT,
      tb: () => fT,
      w: () => CT,
      xb: () => zT
    });
    const lT = 2,
      MT = 12,
      KT = 27,
      OT = 40,
      yT = 52,
      fT = 59,
      xT = 63,
      IT = 83,
      AT = 84,
      CT = 89,
      jT = 91,
      vT = 93,
      tT = 94,
      hT = 95,
      NT = 97,
      QT = 101,
      ST = 102,
      DT = 73,
      aT = 16,
      FT = 86,
      rT = 60,
      PT = 17,
      wT = 56,
      mT = 100,
      bT = 81;

    function zT(TT, kT) {
      switch (TT) {
        case lT:
          return function(TT) {
            return {
              Cc: nT(TT),
              jc: TT.float(),
              vc: TT.long()
            }
          }(kT);
        case MT:
          return function(TT) {
            return {
              tc: GT(TT),
              hc: GT(TT)
            }
          }(kT);
        case KT:
          return function(TT) {
            return {
              Kk: TT.bool(),
              Ok: GT(TT)
            }
          }(kT);
        case OT:
          return kT.str();
        case yT:
          return function(TT) {
            return {
              id: TT.long(),
              Vk: Ok(TT)
            }
          }(kT);
        case fT:
        case xT:
          return kT.str();
        case IT:
        case AT:
          return kT.long();
        case CT:
          return function(TT) {
            return {
              oT: TT.long(),
              HT: TT.bool(),
              eT: TT.float()
            }
          }(kT);
        case jT:
          return kT.long();
        case vT:
          return function(TT) {
            return {
              Ac: TT.bool(),
              PT: xk(TT)
            }
          }(kT);
        case tT:
          return function(TT) {
            return {
              id: TT.str(),
              position: fk(TT),
              IT: Ik(TT),
              style: dT(TT),
              vT: TT.bool()
            }
          }(kT);
        case hT:
          return function(TT) {
            return {
              id: GT(TT)
            }
          }(kT);
        case NT:
          return function(TT) {
            return {
              jl: TT.long(),
              vl: TT.str(),
              tl: Mk(TT),
              hl: Mk(TT),
              Nl: GT(TT),
              Ql: GT(TT),
              Sl: GT(TT),
              Dl: GT(TT),
              al: GT(TT),
              Fl: Mk(TT),
              rl: Mk(TT),
              Pl: GT(TT),
              wl: GT(TT),
              ml: GT(TT)
            }
          }(kT);
        case QT:
          return kT.str();
        case ST:
          return kT.long();
        case DT:
          return function(TT) {
            return {
              VK: TT.long(),
              EK: TT.str(),
              ZK: TT.float()
            }
          }(kT);
        case aT:
          return function(TT) {
            return {
              pl: TT.bool(),
              il: GT(TT),
              ql: TT.str(),
              sl: Ck(TT),
              TM: Ck(TT),
              kM: TT.bool(),
              cM: TT.long(),
              lM: jk(TT)
            }
          }(kT);
        case FT:
          return function(TT) {
            return {
              bc: GT(TT)
            }
          }(kT);
        case rT:
          return function(TT) {
            return {
              tT: TT.str(),
              hT: TT.str(),
              NT: vk(TT),
              QT: TT.str(),
              ST: qT(TT),
              DT: TT.float()
            }
          }(kT);
        case PT:
          return function(TT) {
            return {
              tT: TT.str(),
              hT: TT.str(),
              NT: vk(TT)
            }
          }(kT);
        case wT:
          return function(TT) {
            return TT.fv(tk)
          }(kT);
        case mT:
          return function(TT) {
            return {
              yk: Nk(TT),
              Ck: gT(TT)
            }
          }(kT);
        case bT:
          return function(TT) {
            return {
              LM: TT.bool(),
              RM: GT(TT),
              gM: Sk(TT),
              YM: Ek(TT)
            }
          }(kT);
        default:
          throw new Error(`no reader for to-client message ${TT}`)
      }
    }

    function JT(TT) {
      return {
        entityName: TT.str()
      }
    }

    function oT(TT) {
      const kT = TT.index(4);
      return 0 === kT ? TT.str() : 1 === kT ? TT.long() : 2 === kT ? TT.bool() : JT(TT)
    }

    function HT(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return TT.map(oT)
      }(TT)
    }

    function eT(TT) {
      return {
        translationKey: TT.str(),
        params: HT(TT)
      }
    }

    function GT(TT) {
      return 0 === TT.index(2) ? null : TT.str()
    }

    function VT(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          color: GT(TT),
          colour: GT(TT),
          fontSize: GT(TT)
        }
      }(TT)
    }

    function ET(TT) {
      return {
        icon: TT.str(),
        style: VT(TT)
      }
    }

    function ZT(TT) {
      const kT = TT.index(3);
      return 0 === kT ? {
        string: TT.str()
      } : 1 === kT ? {
        styledEntityName: JT(TT)
      } : {
        styledTranslatedText: eT(TT)
      }
    }

    function uT(TT) {
      const kT = TT.index(3);
      return 0 === kT ? null : 1 === kT ? TT.str() : TT.long()
    }

    function XT(TT) {
      return 0 === TT.index(2) ? null : TT.float()
    }

    function dT(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          color: GT(TT),
          colour: GT(TT),
          fontWeight: uT(TT),
          fontStyle: GT(TT),
          fontSize: GT(TT),
          opacity: XT(TT)
        }
      }(TT)
    }

    function LT(TT) {
      return {
        str: ZT(TT),
        style: dT(TT),
        clickableUrl: GT(TT)
      }
    }

    function RT(TT) {
      return TT.str()
    }

    function gT(TT) {
      return TT.fv(RT)
    }

    function UT(TT) {
      return 0 === TT.index(2) ? null : gT(TT)
    }

    function YT(TT) {
      return {
        type: TT.str(),
        progress: TT.float(),
        width: GT(TT),
        height: GT(TT),
        colours: UT(TT),
        backgroundColour: GT(TT)
      }
    }

    function BT(TT) {
      return {
        type: TT.str(),
        action: TT.str(),
        style: dT(TT)
      }
    }

    function WT(TT) {
      const kT = TT.index(7);
      return 0 === kT ? {
        string: TT.str()
      } : 1 === kT ? {
        entityName: JT(TT)
      } : 2 === kT ? {
        translatedText: eT(TT)
      } : 3 === kT ? {
        styledIcon: ET(TT)
      } : 4 === kT ? {
        AT: LT(TT)
      } : 5 === kT ? {
        styledProgressBar: YT(TT)
      } : {
        styledKeyBinding: BT(TT)
      }
    }

    function nT(TT) {
      return TT.fv(WT)
    }
    const pT = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function iT(TT) {
      return pT[TT.index(5)]
    }

    function qT(TT) {
      return 0 === TT.index(2) ? null : TT.double()
    }

    function sT(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          Xk: qT(TT),
          Lk: TT.double(),
          Rk: TT.double(),
          gk: TT.bool(),
          description: nT(TT),
          Uk: TT.str(),
          scale: qT(TT),
          rotation: qT(TT)
        }
      }(TT)
    }

    function Tk(TT) {
      return 0 === TT.index(2) ? null : TT.bool()
    }

    function kk(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          Bk: TT.double(),
          icon: TT.str(),
          label: nT(TT),
          Wk: TT.bool(),
          scale: qT(TT),
          rotation: qT(TT),
          nk: Tk(TT)
        }
      }(TT)
    }

    function ck(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          Xk: qT(TT),
          qk: TT.double(),
          sk: TT.double(),
          Tc: TT.double(),
          gravity: TT.double(),
          kc: TT.double(),
          cc: TT.double(),
          lc: TT.double(),
          gk: TT.bool(),
          description: nT(TT),
          icon: GT(TT)
        }
      }(TT)
    }

    function lk(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          speed: TT.double(),
          Kc: TT.double(),
          label: nT(TT),
          icon: GT(TT),
          scale: qT(TT),
          rotation: qT(TT)
        }
      }(TT)
    }

    function Mk(TT) {
      return 0 === TT.index(2) ? null : TT.long()
    }

    function Kk(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          yc: TT.long(),
          fc: TT.double(),
          xc: TT.double(),
          Ic: Mk(TT),
          label: nT(TT),
          icon: GT(TT)
        }
      }(TT)
    }

    function Ok(TT) {
      return {
        type: iT(TT),
        progressBar: sT(TT),
        timedClick: kk(TT),
        gravityBar: ck(TT),
        precisionBar: lk(TT),
        rhythmClick: Kk(TT)
      }
    }

    function yk(TT) {
      return TT.float()
    }

    function fk(TT) {
      return TT.fv(yk)
    }

    function xk(TT) {
      return 0 === TT.index(2) ? null : fk(TT)
    }

    function Ik(TT) {
      return 0 === TT.index(2) ? null : nT(TT)
    }

    function Ak(TT) {
      return TT.long()
    }

    function Ck(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return TT.fv(Ak)
      }(TT)
    }

    function jk(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          ol: TT.str(),
          Zl: TT.long()
        }
      }(TT)
    }

    function vk(TT) {
      const kT = TT.index(3);
      return 0 === kT ? null : 1 === kT ? TT.str() : eT(TT)
    }

    function tk(TT) {
      return {
        Nc: TT.str(),
        Qc: TT.str(),
        Sc: TT.str()
      }
    }

    function hk(TT) {
      return {
        fk: TT.str(),
        xk: GT(TT),
        Ik: GT(TT),
        Ak: gT(TT)
      }
    }

    function Nk(TT) {
      return TT.fv(hk)
    }

    function Qk(TT) {
      return {
        UM: TT.str(),
        x: TT.long(),
        y: TT.long(),
        z: TT.long()
      }
    }

    function Sk(TT) {
      return TT.fv(Qk)
    }

    function Dk(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          jK: TT.float(),
          vK: TT.long(),
          tK: TT.long()
        }
      }(TT)
    }

    function ak(TT) {
      return {
        blockName: TT.str(),
        MK: TT.bool(),
        KK: TT.bool(),
        yK: TT.bool(),
        fK: TT.float(),
        xK: TT.float(),
        IK: TT.long(),
        AK: Dk(TT)
      }
    }

    function Fk(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return TT.fv(ak)
      }(TT)
    }

    function rk(TT) {
      return {
        kK: TT.str(),
        cK: Fk(TT)
      }
    }

    function Pk(TT) {
      return {
        blockName: TT.str(),
        frequency: TT.float()
      }
    }

    function wk(TT) {
      return TT.fv(Pk)
    }

    function mk(TT) {
      return {
        QK: TT.str(),
        SK: TT.str(),
        frequency: TT.float(),
        DK: wk(TT)
      }
    }

    function bk(TT) {
      return TT.fv(mk)
    }

    function zk(TT) {
      return {
        blockName: TT.str(),
        radius: TT.long(),
        PK: TT.long(),
        nM: TT.long(),
        pM: TT.long(),
        wK: TT.float()
      }
    }

    function Jk(TT) {
      return TT.fv(zk)
    }

    function Hk(TT) {
      return {
        nM: TT.long(),
        pM: TT.long(),
        iM: TT.long(),
        qM: TT.bool(),
        sM: rk(TT),
        hK: bk(TT),
        FK: Jk(TT)
      }
    }

    function ek(TT) {
      return TT.fv(Hk)
    }

    function Gk(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          name: TT.str(),
          JK: GT(TT)
        }
      }(TT)
    }

    function Vk(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          terrain: Gk(TT),
          oK: Jk(TT)
        }
      }(TT)
    }

    function Ek(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          layers: ek(TT),
          mK: Vk(TT)
        }
      }(TT)
    }
  },
  40219: (TT, kT, cT) => {
    cT.d(kT, {
      $: () => FT,
      B: () => DT,
      F: () => aT,
      I: () => hT,
      K: () => mT,
      M: () => HT,
      Q: () => vT,
      S: () => GT,
      W: () => QT,
      X: () => NT,
      Y: () => ST,
      b: () => MT,
      e: () => eT,
      g: () => oT,
      h: () => jT,
      i: () => tT,
      k: () => zT,
      n: () => PT,
      p: () => bT,
      q: () => wT,
      t: () => rT,
      x: () => JT
    });
    var lT = cT(2927);
    const MT = {
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

    function KT(TT, kT) {
      return !ArrayBuffer.isView(TT) || TT instanceof DataView ? Array.isArray(TT) ? TT.map((TT => kT(TT))) : TT : Array.from(TT, (TT => kT(TT)))
    }

    function OT(TT) {
      if ("string" !== typeof TT) return TT;
      for (let kT = 0; kT < TT.length; kT++) {
        const cT = TT.charCodeAt(kT);
        if (cT >= 55296 && cT <= 57343) return fT.decode(yT.encode(TT))
      }
      return TT
    }
    const yT = new TextEncoder,
      fT = new TextDecoder;

    function xT(TT) {
      return TT
    }
    let IT;

    function AT(TT) {
      return null === TT || "object" !== typeof TT ? TT : [OT(TT.dO), OT(TT.LO)]
    }

    function CT(TT) {
      return null === TT || "object" !== typeof TT ? TT : [KT(TT.sl, xT), KT(TT.CO, xT)]
    }

    function jT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.vI), OT(kT.tI)];
      var kT
    }

    function vT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [kT.id, kT.xI];
      var kT
    }

    function tT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [kT.jl, OT(kT.vl), kT.tl, OT(kT.Ql), kT.Fl, kT.rl, kT.HO, OT(kT.eO), OT(kT.GO)];
      var kT
    }

    function hT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [KT(kT.Lx, xT), kT.Rx];
      var kT
    }

    function NT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [KT(kT.MI, (TT => OT(TT))), OT(kT.KI), kT.OI];
      var kT
    }

    function QT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [KT(kT.gx, xT), OT(kT.Ux), kT.Yx];
      var kT
    }

    function ST(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.Qc), OT(kT.Sc)];
      var kT
    }

    function DT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.xy)];
      var kT
    }

    function aT(TT) {
      return OT(TT)
    }

    function FT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.uO), OT(kT.XO), OT(kT.dO), OT(kT.LO)];
      var kT
    }

    function rT(TT) {
      return AT(TT)
    }

    function PT(TT) {
      return AT(TT)
    }

    function wT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.XI)];
      var kT
    }

    function mT(TT) {
      return TT
    }

    function bT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.cI), OT(kT.lI)];
      var kT
    }

    function zT(TT) {
      return OT(TT)
    }

    function JT(TT) {
      return CT(TT)
    }

    function oT(TT) {
      return CT(TT)
    }

    function HT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [OT(kT.yI)];
      var kT
    }

    function eT(TT) {
      return (IT ??= (0, lT.e)().map((TT => TT.name)), IT).map((kT => {
        return "string" === typeof(cT = TT[kT]) ? OT(cT) : KT(cT, xT);
        var cT
      }))
    }

    function GT(TT) {
      return null === (kT = TT) || "object" !== typeof kT ? kT : [kT.dI, kT.LI, kT.RI];
      var kT
    }
  },
  9542: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      e: () => KT
    });
    var lT = cT(9495);
    const MT = "Air",
      KT = Object.freeze(new lT.d(MT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39026: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      e: () => yT
    });
    var lT = cT(339),
      MT = cT(4445);
    const KT = new Set(MT.m),
      OT = new Map;

    function yT(TT, kT) {
      let cT = OT.get(kT);
      void 0 === cT && (cT = new Map, OT.set(kT, cT));
      let MT = cT.get(TT);
      return void 0 === MT && (MT = `${TT}${(0,lT.w)(kT)}`, cT.set(TT, MT)), MT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);