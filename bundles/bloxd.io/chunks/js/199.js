export const id = 199;
export const ids = [199];
export const modules = {
  39994: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => qU,
      e: () => TU,
      f: () => PU
    });
    var tU = gU(40003),
      pU = gU(4449),
      EU = gU(40007);

    function PU(UU) {
      return UU.payloadKind === pU.kc.Msgpack ? (0, tU.b)(UU.payload) : void 0
    }

    function TU(UU, RU) {
      if (RU.payloadKind === pU.kc.Bytes || RU.payloadKind === pU.kc.MsgpackBin) return (0, EU.c)(UU, RU.payload)
    }

    function qU(UU) {
      return null !== UU && "object" === typeof UU
    }
  },
  40016: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => GU,
      f: () => jU,
      g: () => uU,
      h: () => cU,
      k: () => QU
    });
    var tU = gU(4449),
      pU = gU(40022);
    const EU = new Map,
      PU = new Set,
      TU = new Set;
    let qU = 0,
      KU = 0;

    function cU(UU, RU) {
      let gU = EU.get(UU);
      return gU || (gU = new Set, EU.set(UU, gU)), gU.add(RU), () => {
        gU.delete(RU)
      }
    }

    function GU() {
      return 0 !== qU
    }

    function jU(UU) {
      return PU.add(UU), () => {
        PU.delete(UU)
      }
    }

    function uU(UU) {
      return TU.add(UU), () => {
        TU.delete(UU)
      }
    }
    const CU = "A raw message listener threw";

    function hU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PU;
      for (const tU of RU) try {
        tU()
      } catch (gU) {
        UU ? (0, pU.o)(gU, CU) : console.error(CU, gU)
      }
    }
    const QU = {
      fire: function(UU) {
        if ("connection" === UU.type) {
          const RU = UU.phase === tU.F.Activated && UU.conn !== qU && UU.conn > KU,
            gU = (UU.phase === tU.F.Left || UU.phase === tU.F.Closed) && UU.conn === qU;
          return void(RU || gU ? (qU = RU ? UU.conn : 0, hU(!0)) : UU.phase === tU.F.Resumed && 0 !== qU && UU.conn > KU && (qU = UU.conn, hU(!0, TU)))
        }
        const RU = EU.get(UU.aP);
        if (RU && UU.conn === qU && 0 !== qU)
          for (const tU of RU) try {
            tU(UU)
          } catch (gU) {
            (0, pU.o)(gU, CU)
          }
      },
      close: function(UU) {
        KU = Math.max(KU, UU, qU), 0 !== qU && (qU = 0, hU(!1))
      }
    }
  },
  39984: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => KU,
      d: () => qU,
      e: () => TU
    });
    var tU = gU(1271),
      pU = gU(39955);
    const EU = new TextDecoder,
      PU = new TextEncoder;

    function TU(UU, RU) {
      const gU = UU.queries.entityName(RU);
      if (gU === pU.Mc) return;
      const PU = UU.memoryData(UU.scratch(), 4 + gU, 4, "entity_name's answer");
      if (!PU) return;
      const TU = PU.getUint32(0, !0),
        qU = EU.decode(new Uint8Array(PU.buffer, PU.byteOffset + 4, gU));
      return (0, tU.c)(qU, !1, TU === pU.ae ? null : TU)
    }

    function qU(UU, RU, gU) {
      const tU = PU.encode(gU);
      if (tU.length > pU.Bb) return !1;
      const EU = UU.memoryView(Uint8Array, UU.scratch(), tU.length, "has_effect's name");
      return !!EU && (EU.set(tU), 1 === UU.queries.hasEffect(RU, tU.length))
    }

    function KU(UU, RU, gU, tU) {
      const PU = UU.queries.blockData(RU, gU, tU);
      if (PU === pU.Mc) return;
      const TU = UU.memoryView(Uint8Array, UU.scratch(), PU, "block_data's answer");
      return TU ? JSON.parse(EU.decode(TU)) : void 0
    }
  },
  40003: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      d: () => cU
    });
    const tU = new TextDecoder;

    function pU(UU) {
      const RU = new EU(UU),
        gU = RU.value();
      if (RU.at !== UU.length) throw new Error(`msgpack: ${UU.length-RU.at} bytes after the value`);
      return gU
    }
    class EU {
      constructor(UU) {
        this.bytes = UU, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(UU.buffer, UU.byteOffset, UU.byteLength)
      }
      value() {
        const UU = this.u8();
        if (UU <= 127) return UU;
        if (UU >= 224) return UU - 256;
        if (UU >= 128 && UU <= 143) return this.map(15 & UU);
        if (UU >= 144 && UU <= 159) return this.array(15 & UU);
        if (UU >= 160 && UU <= 191) return this.str(31 & UU);
        switch (UU) {
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
            throw new Error(`msgpack: unknown byte 0x${UU.toString(16)} at ${this.at-1}`)
        }
      }
      take(UU) {
        const RU = this.at;
        if (RU + UU > this.bytes.length) throw new Error(`msgpack: ${UU} bytes past the end at ${RU}`);
        return this.at = RU + UU, RU
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
      int64(UU) {
        const RU = this.take(8);
        return UU ? this.view.getBigInt64(RU, !1) : this.view.getBigUint64(RU, !1)
      }
      str(UU) {
        const RU = this.take(UU),
          gU = this.bytes;
        if (UU < 16) {
          let pU = "";
          for (let EU = RU; EU < RU + UU; EU++) {
            const PU = gU[EU];
            if (PU >= 128) return tU.decode(gU.subarray(RU, RU + UU));
            pU += String.fromCharCode(PU)
          }
          return pU
        }
        return tU.decode(gU.subarray(RU, RU + UU))
      }
      bin(UU) {
        const RU = this.take(UU);
        return this.bytes.subarray(RU, RU + UU)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(UU) {
        this.enter();
        const RU = [];
        for (let gU = 0; gU < UU; gU++) RU.push(this.value());
        return this.depth--, RU
      }
      map(UU) {
        this.enter();
        const RU = {};
        for (let gU = 0; gU < UU; gU++) {
          const UU = this.value(),
            gU = this.value();
          RU["__proto__" === UU ? "__proto_" : String(UU)] = gU
        }
        return this.depth--, RU
      }
      ext(UU) {
        const RU = this.view.getInt8(this.take(1)),
          gU = this.take(UU);
        if (0 !== RU) {
          if (-1 === RU) {
            if (1 === UU) return new Date(NaN);
            if (4 === UU) return new Date(1e3 * this.view.getUint32(gU, !1));
            if (8 === UU) {
              const UU = this.view.getUint32(gU, !1),
                RU = UU >>> 2,
                tU = 4294967296 * (3 & UU) + this.view.getUint32(gU + 4, !1);
              return new Date(1e3 * tU + RU / 1e6)
            }
            if (12 === UU) {
              const UU = this.view.getUint32(gU, !1),
                RU = 4294967296 * this.view.getInt32(gU + 4, !1) + this.view.getUint32(gU + 8, !1);
              return new Date(1e3 * RU + UU / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${RU} of ${UU} bytes`)
        }
      }
    }
    const PU = new TextEncoder,
      TU = -(2n ** 63n),
      qU = 2n ** 63n - 1n,
      KU = 2n ** 64n - 1n;

    function cU(UU) {
      const RU = new GU;
      return RU.value(UU, 0), RU.bytes()
    }
    class GU {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(UU, RU) {
        if (RU > 512) throw new Error("msgpack: nested too deep");
        switch (typeof UU) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(UU ? 195 : 194);
          case "number":
            return void this.number(UU);
          case "bigint":
            return void this.bigint(UU);
          case "string":
            return void this.string(UU);
          case "object":
            if (null === UU) this.u8(192);
            else if (UU instanceof Uint8Array) this.head(UU.length, 196, -1, 197, 198), this.room(UU.length), this.buf.set(UU, this.at), this.at += UU.length;
            else if (Array.isArray(UU)) {
              this.head(UU.length, 220, 144, 220, 221);
              for (const gU of UU) this.value(gU, RU + 1)
            } else {
              var gU, tU;
              if (Object.getPrototypeOf(UU) !== Object.prototype && null !== Object.getPrototypeOf(UU)) throw new Error(`msgpack: can't encode a ${null!==(gU=null===(tU=UU.constructor)||void 0===tU?void 0:tU.name)&&void 0!==gU?gU:"object"}`);
              {
                const gU = Object.keys(UU);
                this.head(gU.length, 222, 128, 222, 223);
                for (const tU of gU) this.string(tU), this.value(UU[tU], RU + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof UU)
        }
      }
      number(UU) {
        Number.isInteger(UU) && UU >= -2147483648 && UU <= 4294967295 ? UU >= 0 ? UU < 128 ? this.u8(UU) : UU < 256 ? (this.u8(204), this.u8(UU)) : UU < 65536 ? (this.u8(205), this.u16(UU)) : (this.u8(206), this.u32(UU)) : UU >= -32 ? this.u8(UU + 256) : UU >= -128 ? (this.u8(208), this.u8(UU + 256)) : UU >= -32768 ? (this.u8(209), this.u16(UU + 65536)) : (this.u8(210), this.u32(UU >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, UU, !1), this.at += 8)
      }
      bigint(UU) {
        const RU = UU >= TU && UU <= qU;
        if (!RU && (UU < 0n || UU > KU)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(RU ? 211 : 207), this.room(8), RU ? this.view.setBigInt64(this.at, UU, !1) : this.view.setBigUint64(this.at, UU, !1), this.at += 8
      }
      string(UU) {
        const RU = PU.encode(UU);
        this.head(RU.length, 217, 160, 218, 219), this.room(RU.length), this.buf.set(RU, this.at), this.at += RU.length
      }
      head(UU, RU, gU, tU, pU) {
        gU >= 0 && UU < (160 === gU ? 32 : 16) ? this.u8(gU | UU) : RU !== tU && UU < 256 ? (this.u8(RU), this.u8(UU)) : UU < 65536 ? (this.u8(tU), this.u16(UU)) : (this.u8(pU), this.u32(UU))
      }
      room(UU) {
        if (this.at + UU <= this.buf.length) return;
        let RU = 2 * this.buf.length;
        for (; RU < this.at + UU;) RU *= 2;
        const gU = new Uint8Array(RU);
        gU.set(this.buf.subarray(0, this.at)), this.buf = gU, this.view = new DataView(gU.buffer)
      }
      u8(UU) {
        this.room(1), this.buf[this.at++] = UU
      }
      u16(UU) {
        this.room(2), this.view.setUint16(this.at, UU, !1), this.at += 2
      }
      u32(UU) {
        this.room(4), this.view.setUint32(this.at, UU, !1), this.at += 4
      }
    }
  },
  40007: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU
    });
    var tU = gU(39991);
    const pU = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class EU {
      constructor(UU) {
        this.buf = UU, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let UU = this.u8(),
          RU = 127 & UU,
          gU = 128;
        for (; 128 & UU;) {
          if (gU > 2 ** 63) throw new RangeError("avro: varint too long");
          UU = this.u8(), RU += (127 & UU) * gU, gU *= 128
        }
        return RU % 2 === 1 ? -(RU + 1) / 2 : RU / 2
      }
      float() {
        const UU = this.take(4);
        return this.floats().getFloat32(UU, !0)
      }
      double() {
        const UU = this.take(8);
        return this.floats().getFloat64(UU, !0)
      }
      str() {
        const UU = this.size(),
          RU = this.take(UU),
          gU = RU + UU;
        if (UU <= 32) {
          let UU = "";
          for (let tU = RU; tU < gU; tU++) {
            const EU = this.buf[tU];
            if (EU >= 128) return pU.decode(this.buf.subarray(RU, gU));
            UU += String.fromCharCode(EU)
          }
          return UU
        }
        return pU.decode(this.buf.subarray(RU, gU))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(UU) {
        const RU = this.take(UU);
        return this.buf.slice(RU, RU + UU)
      }
      index(UU) {
        const RU = this.long();
        if (!(RU >= 0 && RU < UU)) throw new RangeError(`avro: index ${RU} of ${UU}`);
        return RU
      }
      EC(UU) {
        const RU = [];
        for (let gU = this.long(); 0 !== gU; gU = this.long()) {
          gU = this.block(gU);
          for (let tU = 0; tU < gU; tU++) RU.push(UU(this))
        }
        return RU
      }
      map(UU) {
        const RU = {};
        for (let gU = this.long(); 0 !== gU; gU = this.long()) {
          gU = this.block(gU);
          for (let tU = 0; tU < gU; tU++) {
            RU[this.str()] = UU(this)
          }
        }
        return RU
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(UU) {
        let RU = UU;
        if (RU < 0 && (RU = -RU, this.long()), RU > this.buf.length - this.at) throw new RangeError(`avro: block of ${RU} items in ${this.buf.length-this.at} bytes`);
        return RU
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const UU = this.long();
        if (UU < 0) throw new RangeError(`avro: length ${UU}`);
        return UU
      }
      u8() {
        const UU = this.buf[this.at];
        if (void 0 === UU) throw new RangeError("avro: truncated");
        return this.at++, UU
      }
      take(UU) {
        const RU = this.at;
        if (UU > this.buf.length - RU) throw new RangeError("avro: truncated");
        return this.at = RU + UU, RU
      }
    }

    function PU(UU, RU) {
      const gU = new EU(RU),
        pU = (0, tU.ob)(UU, gU);
      return gU.end(), pU
    }
  },
  39991: (UU, RU, gU) => {
    gU.d(RU, {
      $: () => cU,
      B: () => jU,
      C: () => KU,
      D: () => PU,
      H: () => oU,
      K: () => pU,
      N: () => TU,
      Q: () => uU,
      S: () => nU,
      W: () => wU,
      X: () => IU,
      ab: () => GU,
      b: () => mU,
      db: () => bU,
      f: () => QU,
      fb: () => CU,
      i: () => eU,
      ib: () => fU,
      l: () => WU,
      lb: () => hU,
      nb: () => qU,
      ob: () => ZU,
      p: () => JU,
      t: () => tU,
      v: () => EU,
      y: () => xU
    });
    const tU = 2,
      pU = 12,
      EU = 27,
      PU = 40,
      TU = 52,
      qU = 59,
      KU = 63,
      cU = 83,
      GU = 84,
      jU = 89,
      uU = 91,
      CU = 93,
      hU = 94,
      QU = 95,
      eU = 97,
      WU = 101,
      fU = 102,
      xU = 73,
      mU = 16,
      IU = 86,
      JU = 60,
      wU = 17,
      nU = 56,
      bU = 100,
      oU = 81;

    function ZU(UU, RU) {
      switch (UU) {
        case tU:
          return function(UU) {
            return {
              VE: DU(UU),
              rE: UU.float(),
              XE: UU.long()
            }
          }(RU);
        case pU:
          return function(UU) {
            return {
              UU: rU(UU),
              RU: rU(UU)
            }
          }(RU);
        case EU:
          return function(UU) {
            return {
              qR: UU.bool(),
              KR: rU(UU)
            }
          }(RU);
        case PU:
          return RU.str();
        case TU:
          return function(UU) {
            return {
              id: UU.long(),
              nU: PR(UU)
            }
          }(RU);
        case qU:
        case KU:
          return RU.str();
        case cU:
        case GU:
          return RU.long();
        case jU:
          return function(UU) {
            return {
              Og: UU.long(),
              Ut: UU.bool(),
              Rt: UU.float()
            }
          }(RU);
        case uU:
          return RU.long();
        case CU:
          return function(UU) {
            return {
              DR: UU.bool(),
              LR: KR(UU)
            }
          }(RU);
        case hU:
          return function(UU) {
            return {
              id: UU.str(),
              position: qR(UU),
              gE: cR(UU),
              style: sU(UU),
              pE: UU.bool()
            }
          }(RU);
        case QU:
          return function(UU) {
            return {
              id: rU(UU)
            }
          }(RU);
        case eU:
          return function(UU) {
            return {
              uR: UU.long(),
              CR: UU.str(),
              hR: pR(UU),
              QR: pR(UU),
              eR: rU(UU),
              WR: rU(UU),
              fR: rU(UU),
              xR: rU(UU),
              mR: rU(UU),
              IR: pR(UU),
              JR: pR(UU),
              wR: rU(UU),
              nR: rU(UU),
              bR: rU(UU)
            }
          }(RU);
        case WU:
          return RU.str();
        case fU:
          return RU.long();
        case xU:
          return function(UU) {
            return {
              sg: UU.long(),
              yg: UU.str(),
              kg: UU.float()
            }
          }(RU);
        case mU:
          return function(UU) {
            return {
              yE: UU.bool(),
              kE: rU(UU),
              FE: UU.str(),
              iE: jR(UU),
              AE: jR(UU),
              zE: UU.bool(),
              ME: UU.long(),
              DE: uR(UU)
            }
          }(RU);
        case IU:
          return function(UU) {
            return {
              ap: rU(UU)
            }
          }(RU);
        case JU:
          return function(UU) {
            return {
              gR: UU.str(),
              tR: UU.str(),
              pR: CR(UU),
              ER: UU.str(),
              PR: lU(UU),
              TR: UU.float()
            }
          }(RU);
        case wU:
          return function(UU) {
            return {
              gR: UU.str(),
              tR: UU.str(),
              pR: CR(UU)
            }
          }(RU);
        case nU:
          return function(UU) {
            return UU.EC(hR)
          }(RU);
        case bU:
          return function(UU) {
            return {
              gt: eR(UU),
              qt: FU(UU)
            }
          }(RU);
        case oU:
          return function(UU) {
            return {
              Kt: UU.bool(),
              ct: rU(UU),
              Gt: fR(UU),
              ut: XR(UU)
            }
          }(RU);
        default:
          throw new Error(`no reader for to-client message ${UU}`)
      }
    }

    function aU(UU) {
      return {
        entityName: UU.str()
      }
    }

    function YU(UU) {
      const RU = UU.index(4);
      return 0 === RU ? UU.str() : 1 === RU ? UU.long() : 2 === RU ? UU.bool() : aU(UU)
    }

    function BU(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return UU.map(YU)
      }(UU)
    }

    function VU(UU) {
      return {
        translationKey: UU.str(),
        params: BU(UU)
      }
    }

    function rU(UU) {
      return 0 === UU.index(2) ? null : UU.str()
    }

    function XU(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          color: rU(UU),
          colour: rU(UU),
          fontSize: rU(UU)
        }
      }(UU)
    }

    function vU(UU) {
      return {
        icon: UU.str(),
        style: XU(UU)
      }
    }

    function dU(UU) {
      const RU = UU.index(3);
      return 0 === RU ? {
        string: UU.str()
      } : 1 === RU ? {
        styledEntityName: aU(UU)
      } : {
        styledTranslatedText: VU(UU)
      }
    }

    function HU(UU) {
      const RU = UU.index(3);
      return 0 === RU ? null : 1 === RU ? UU.str() : UU.long()
    }

    function SU(UU) {
      return 0 === UU.index(2) ? null : UU.float()
    }

    function sU(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          color: rU(UU),
          colour: rU(UU),
          fontWeight: HU(UU),
          fontStyle: rU(UU),
          fontSize: rU(UU),
          opacity: SU(UU)
        }
      }(UU)
    }

    function yU(UU) {
      return {
        str: dU(UU),
        style: sU(UU),
        clickableUrl: rU(UU)
      }
    }

    function kU(UU) {
      return UU.str()
    }

    function FU(UU) {
      return UU.EC(kU)
    }

    function iU(UU) {
      return 0 === UU.index(2) ? null : FU(UU)
    }

    function AU(UU) {
      return {
        type: UU.str(),
        progress: UU.float(),
        width: rU(UU),
        height: rU(UU),
        colours: iU(UU),
        backgroundColour: rU(UU)
      }
    }

    function zU(UU) {
      return {
        type: UU.str(),
        action: UU.str(),
        style: sU(UU)
      }
    }

    function MU(UU) {
      const RU = UU.index(7);
      return 0 === RU ? {
        string: UU.str()
      } : 1 === RU ? {
        entityName: aU(UU)
      } : 2 === RU ? {
        translatedText: VU(UU)
      } : 3 === RU ? {
        styledIcon: vU(UU)
      } : 4 === RU ? {
        rU: yU(UU)
      } : 5 === RU ? {
        styledProgressBar: AU(UU)
      } : {
        styledKeyBinding: zU(UU)
      }
    }

    function DU(UU) {
      return UU.EC(MU)
    }
    const LU = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function NU(UU) {
      return LU[UU.index(5)]
    }

    function lU(UU) {
      return 0 === UU.index(2) ? null : UU.double()
    }

    function OU(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          aU: lU(UU),
          YU: UU.double(),
          BU: UU.double(),
          VU: UU.bool(),
          description: DU(UU),
          vU: UU.str(),
          scale: lU(UU),
          rotation: lU(UU)
        }
      }(UU)
    }

    function UR(UU) {
      return 0 === UU.index(2) ? null : UU.bool()
    }

    function RR(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          HU: UU.double(),
          icon: UU.str(),
          label: DU(UU),
          SU: UU.bool(),
          scale: lU(UU),
          rotation: lU(UU),
          sU: UR(UU)
        }
      }(UU)
    }

    function gR(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          aU: lU(UU),
          kU: UU.double(),
          FU: UU.double(),
          iU: UU.double(),
          gravity: UU.double(),
          AU: UU.double(),
          zU: UU.double(),
          MU: UU.double(),
          VU: UU.bool(),
          description: DU(UU),
          icon: rU(UU)
        }
      }(UU)
    }

    function tR(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          speed: UU.double(),
          LU: UU.double(),
          label: DU(UU),
          icon: rU(UU),
          scale: lU(UU),
          rotation: lU(UU)
        }
      }(UU)
    }

    function pR(UU) {
      return 0 === UU.index(2) ? null : UU.long()
    }

    function ER(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          lU: UU.long(),
          OU: UU.double(),
          UR: UU.double(),
          RR: pR(UU),
          label: DU(UU),
          icon: rU(UU)
        }
      }(UU)
    }

    function PR(UU) {
      return {
        type: NU(UU),
        progressBar: OU(UU),
        timedClick: RR(UU),
        gravityBar: gR(UU),
        precisionBar: tR(UU),
        rhythmClick: ER(UU)
      }
    }

    function TR(UU) {
      return UU.float()
    }

    function qR(UU) {
      return UU.EC(TR)
    }

    function KR(UU) {
      return 0 === UU.index(2) ? null : qR(UU)
    }

    function cR(UU) {
      return 0 === UU.index(2) ? null : DU(UU)
    }

    function GR(UU) {
      return UU.long()
    }

    function jR(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return UU.EC(GR)
      }(UU)
    }

    function uR(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          xg: UU.str(),
          bg: UU.long()
        }
      }(UU)
    }

    function CR(UU) {
      const RU = UU.index(3);
      return 0 === RU ? null : 1 === RU ? UU.str() : VU(UU)
    }

    function hR(UU) {
      return {
        rg: UU.str(),
        Xg: UU.str(),
        vg: UU.str()
      }
    }

    function QR(UU) {
      return {
        tt: UU.str(),
        Et: rU(UU),
        Pt: rU(UU),
        Tt: FU(UU)
      }
    }

    function eR(UU) {
      return UU.EC(QR)
    }

    function WR(UU) {
      return {
        jt: UU.str(),
        x: UU.long(),
        y: UU.long(),
        z: UU.long()
      }
    }

    function fR(UU) {
      return UU.EC(WR)
    }

    function xR(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          kt: UU.float(),
          Ft: UU.long(),
          zt: UU.long()
        }
      }(UU)
    }

    function mR(UU) {
      return {
        blockName: UU.str(),
        Vt: UU.bool(),
        rt: UU.bool(),
        Xt: UU.bool(),
        vt: UU.float(),
        dt: UU.float(),
        Ht: UU.long(),
        St: xR(UU)
      }
    }

    function IR(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return UU.EC(mR)
      }(UU)
    }

    function JR(UU) {
      return {
        Zt: UU.str(),
        Yt: IR(UU)
      }
    }

    function wR(UU) {
      return {
        blockName: UU.str(),
        frequency: UU.float()
      }
    }

    function nR(UU) {
      return UU.EC(wR)
    }

    function bR(UU) {
      return {
        Lt: UU.str(),
        Nt: UU.str(),
        frequency: UU.float(),
        lt: nR(UU)
      }
    }

    function oR(UU) {
      return UU.EC(bR)
    }

    function ZR(UU) {
      return {
        blockName: UU.str(),
        radius: UU.long(),
        tp: UU.long(),
        et: UU.long(),
        Wt: UU.long(),
        Ep: UU.float()
      }
    }

    function aR(UU) {
      return UU.EC(ZR)
    }

    function YR(UU) {
      return {
        et: UU.long(),
        Wt: UU.long(),
        ft: UU.long(),
        xt: UU.bool(),
        Jt: JR(UU),
        Mt: oR(UU),
        Up: aR(UU)
      }
    }

    function BR(UU) {
      return UU.EC(YR)
    }

    function VR(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          name: UU.str(),
          Kp: rU(UU)
        }
      }(UU)
    }

    function rR(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          terrain: VR(UU),
          cp: aR(UU)
        }
      }(UU)
    }

    function XR(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          layers: BR(UU),
          Pp: rR(UU)
        }
      }(UU)
    }
  },
  39974: (UU, RU, gU) => {
    gU.d(RU, {
      $: () => WU,
      A: () => nU,
      D: () => JU,
      H: () => aU,
      K: () => xU,
      O: () => mU,
      Q: () => QU,
      T: () => bU,
      W: () => BU,
      Z: () => CU,
      _: () => rU,
      db: () => eU,
      e: () => pU,
      fb: () => fU,
      g: () => VU,
      gb: () => IU,
      h: () => YU,
      k: () => uU,
      o: () => hU,
      r: () => ZU,
      t: () => wU,
      x: () => oU
    });
    var tU = gU(2683);
    const pU = {
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

    function EU(UU, RU) {
      return !ArrayBuffer.isView(UU) || UU instanceof DataView ? Array.isArray(UU) ? UU.map((UU => RU(UU))) : UU : Array.from(UU, (UU => RU(UU)))
    }

    function PU(UU) {
      if ("string" !== typeof UU) return UU;
      for (let RU = 0; RU < UU.length; RU++) {
        const gU = UU.charCodeAt(RU);
        if (gU >= 55296 && gU <= 57343) return qU.decode(TU.encode(UU))
      }
      return UU
    }
    const TU = new TextEncoder,
      qU = new TextDecoder;

    function KU(UU) {
      return UU
    }
    let cU;

    function GU(UU) {
      return null === UU || "object" !== typeof UU ? UU : [PU(UU.gP), PU(UU.tP)]
    }

    function jU(UU) {
      return null === UU || "object" !== typeof UU ? UU : [EU(UU.iE, KU), EU(UU.CK, KU)]
    }

    function uU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.aP), PU(RU.YP)];
      var RU
    }

    function CU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [RU.id, RU.GP];
      var RU
    }

    function hU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [RU.uR, PU(RU.CR), RU.hR, PU(RU.WR), RU.IR, RU.JR, RU.bP, PU(RU.oP), PU(RU.ZP)];
      var RU
    }

    function QU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [EU(RU.Rc, KU), RU.gc];
      var RU
    }

    function eU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [EU(RU.CT, (UU => PU(UU))), PU(RU.hT), RU.QT];
      var RU
    }

    function WU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [EU(RU.jP, KU), PU(RU.uP), RU.CP];
      var RU
    }

    function fU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.Xg), PU(RU.vg)];
      var RU
    }

    function xU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.qT)];
      var RU
    }

    function mU(UU) {
      return PU(UU)
    }

    function IU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.Vc), PU(RU.Xc), PU(RU.gP), PU(RU.tP)];
      var RU
    }

    function JU(UU) {
      return GU(UU)
    }

    function wU(UU) {
      return GU(UU)
    }

    function nU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.BP)];
      var RU
    }

    function bU(UU) {
      return UU
    }

    function oU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.PP), PU(RU.TP)];
      var RU
    }

    function ZU(UU) {
      return PU(UU)
    }

    function aU(UU) {
      return jU(UU)
    }

    function YU(UU) {
      return jU(UU)
    }

    function BU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [PU(RU.jT)];
      var RU
    }

    function VU(UU) {
      return (cU ??= (0, tU.e)().map((UU => UU.name)), cU).map((RU => {
        return "string" === typeof(gU = UU[RU]) ? PU(gU) : EU(gU, KU);
        var gU
      }))
    }

    function rU(UU) {
      return null === (RU = UU) || "object" !== typeof RU ? RU : [RU.xT, RU.mT, RU.IT];
      var RU
    }
  },
  9155: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      f: () => EU
    });
    var tU = gU(9121);
    const pU = "Air",
      EU = Object.freeze(new tU.h(pU, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38766: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      f: () => TU
    });
    var tU = gU(311),
      pU = gU(4122);
    const EU = new Set(pU.i),
      PU = new Map;

    function TU(UU, RU) {
      let gU = PU.get(RU);
      void 0 === gU && (gU = new Map, PU.set(RU, gU));
      let pU = gU.get(UU);
      return void 0 === pU && (pU = `${UU}${(0,tU.A)(RU)}`, gU.set(UU, pU)), pU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);