export const id = 207;
export const ids = [207];
export const modules = {
  41624: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB,
      h: () => jB,
      l: () => oB
    });
    var YB = GB(41630),
      DB = GB(5281),
      QB = GB(41635);

    function oB(BB) {
      return BB.payloadKind === DB.sc.Msgpack ? (0, YB.b)(BB.payload) : void 0
    }

    function jB(BB, OB) {
      if (OB.payloadKind === DB.sc.Bytes || OB.payloadKind === DB.sc.MsgpackBin) return (0, QB.e)(BB, OB.payload)
    }

    function yB(BB) {
      return null !== BB && "object" === typeof BB
    }
  },
  41637: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      d: () => zB,
      e: () => lB,
      g: () => MB,
      i: () => ZB
    });
    var YB = GB(5281),
      DB = GB(41646);
    const QB = new Map,
      oB = new Set,
      jB = new Set;
    let yB = 0,
      JB = 0;

    function MB(BB, OB) {
      let GB = QB.get(BB);
      return GB || (GB = new Set, QB.set(BB, GB)), GB.add(OB), () => {
        GB.delete(OB)
      }
    }

    function PB() {
      return 0 !== yB
    }

    function zB(BB) {
      return oB.add(BB), () => {
        oB.delete(BB)
      }
    }

    function lB(BB) {
      return jB.add(BB), () => {
        jB.delete(BB)
      }
    }
    const pB = "A raw message listener threw";

    function qB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB;
      for (const YB of OB) try {
        YB()
      } catch (GB) {
        BB ? (0, DB.j)(GB, pB) : console.error(pB, GB)
      }
    }
    const ZB = {
      fire: function(BB) {
        if ("connection" === BB.type) {
          const OB = BB.phase === YB.E.Activated && BB.conn !== yB && BB.conn > JB,
            GB = (BB.phase === YB.E.Left || BB.phase === YB.E.Closed) && BB.conn === yB;
          return void(OB || GB ? (yB = OB ? BB.conn : 0, qB(!0)) : BB.phase === YB.E.Resumed && 0 !== yB && BB.conn > JB && (yB = BB.conn, qB(!0, jB)))
        }
        const OB = QB.get(BB.ty);
        if (OB && BB.conn === yB && 0 !== yB)
          for (const YB of OB) try {
            YB(BB)
          } catch (GB) {
            (0, DB.j)(GB, pB)
          }
      },
      close: function(BB) {
        JB = Math.max(JB, BB, yB), 0 !== yB && (yB = 0, qB(!1))
      }
    }
  },
  41611: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB,
      f: () => yB,
      j: () => jB
    });
    var YB = GB(1262),
      DB = GB(41579);
    const QB = new TextDecoder,
      oB = new TextEncoder;

    function jB(BB, OB) {
      const GB = BB.queries.entityName(OB);
      if (GB === DB.Mc) return;
      const oB = BB.memoryData(BB.scratch(), 4 + GB, 4, "entity_name's answer");
      if (!oB) return;
      const jB = oB.getUint32(0, !0),
        yB = QB.decode(new Uint8Array(oB.buffer, oB.byteOffset + 4, GB));
      return (0, YB.e)(yB, !1, jB === DB.Td ? null : jB)
    }

    function yB(BB, OB, GB) {
      const YB = oB.encode(GB);
      if (YB.length > DB.Gb) return !1;
      const QB = BB.memoryView(Uint8Array, BB.scratch(), YB.length, "has_effect's name");
      return !!QB && (QB.set(YB), 1 === BB.queries.hasEffect(OB, YB.length))
    }

    function JB(BB, OB, GB, YB) {
      const oB = BB.queries.blockData(OB, GB, YB);
      if (oB === DB.Mc) return;
      const jB = BB.memoryView(Uint8Array, BB.scratch(), oB, "block_data's answer");
      return jB ? JSON.parse(QB.decode(jB)) : void 0
    }
  },
  41630: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      e: () => MB
    });
    const YB = new TextDecoder;

    function DB(BB) {
      const OB = new QB(BB),
        GB = OB.value();
      if (OB.at !== BB.length) throw new Error(`msgpack: ${BB.length-OB.at} bytes after the value`);
      return GB
    }
    class QB {
      constructor(BB) {
        this.bytes = BB, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(BB.buffer, BB.byteOffset, BB.byteLength)
      }
      value() {
        const BB = this.u8();
        if (BB <= 127) return BB;
        if (BB >= 224) return BB - 256;
        if (BB >= 128 && BB <= 143) return this.map(15 & BB);
        if (BB >= 144 && BB <= 159) return this.array(15 & BB);
        if (BB >= 160 && BB <= 191) return this.str(31 & BB);
        switch (BB) {
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
            throw new Error(`msgpack: unknown byte 0x${BB.toString(16)} at ${this.at-1}`)
        }
      }
      take(BB) {
        const OB = this.at;
        if (OB + BB > this.bytes.length) throw new Error(`msgpack: ${BB} bytes past the end at ${OB}`);
        return this.at = OB + BB, OB
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
      int64(BB) {
        const OB = this.take(8);
        return BB ? this.view.getBigInt64(OB, !1) : this.view.getBigUint64(OB, !1)
      }
      str(BB) {
        const OB = this.take(BB),
          GB = this.bytes;
        if (BB < 16) {
          let DB = "";
          for (let QB = OB; QB < OB + BB; QB++) {
            const oB = GB[QB];
            if (oB >= 128) return YB.decode(GB.subarray(OB, OB + BB));
            DB += String.fromCharCode(oB)
          }
          return DB
        }
        return YB.decode(GB.subarray(OB, OB + BB))
      }
      bin(BB) {
        const OB = this.take(BB);
        return this.bytes.subarray(OB, OB + BB)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(BB) {
        this.enter();
        const OB = [];
        for (let GB = 0; GB < BB; GB++) OB.push(this.value());
        return this.depth--, OB
      }
      map(BB) {
        this.enter();
        const OB = {};
        for (let GB = 0; GB < BB; GB++) {
          const BB = this.value(),
            GB = this.value();
          OB["__proto__" === BB ? "__proto_" : String(BB)] = GB
        }
        return this.depth--, OB
      }
      ext(BB) {
        const OB = this.view.getInt8(this.take(1)),
          GB = this.take(BB);
        if (0 !== OB) {
          if (-1 === OB) {
            if (1 === BB) return new Date(NaN);
            if (4 === BB) return new Date(1e3 * this.view.getUint32(GB, !1));
            if (8 === BB) {
              const BB = this.view.getUint32(GB, !1),
                OB = BB >>> 2,
                YB = 4294967296 * (3 & BB) + this.view.getUint32(GB + 4, !1);
              return new Date(1e3 * YB + OB / 1e6)
            }
            if (12 === BB) {
              const BB = this.view.getUint32(GB, !1),
                OB = 4294967296 * this.view.getInt32(GB + 4, !1) + this.view.getUint32(GB + 8, !1);
              return new Date(1e3 * OB + BB / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${OB} of ${BB} bytes`)
        }
      }
    }
    const oB = new TextEncoder,
      jB = -(2n ** 63n),
      yB = 2n ** 63n - 1n,
      JB = 2n ** 64n - 1n;

    function MB(BB) {
      const OB = new PB;
      return OB.value(BB, 0), OB.bytes()
    }
    class PB {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(BB, OB) {
        if (OB > 512) throw new Error("msgpack: nested too deep");
        switch (typeof BB) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(BB ? 195 : 194);
          case "number":
            return void this.number(BB);
          case "bigint":
            return void this.bigint(BB);
          case "string":
            return void this.string(BB);
          case "object":
            if (null === BB) this.u8(192);
            else if (BB instanceof Uint8Array) this.head(BB.length, 196, -1, 197, 198), this.room(BB.length), this.buf.set(BB, this.at), this.at += BB.length;
            else if (Array.isArray(BB)) {
              this.head(BB.length, 220, 144, 220, 221);
              for (const GB of BB) this.value(GB, OB + 1)
            } else {
              var GB, YB;
              if (Object.getPrototypeOf(BB) !== Object.prototype && null !== Object.getPrototypeOf(BB)) throw new Error(`msgpack: can't encode a ${null!==(GB=null===(YB=BB.constructor)||void 0===YB?void 0:YB.name)&&void 0!==GB?GB:"object"}`);
              {
                const GB = Object.keys(BB);
                this.head(GB.length, 222, 128, 222, 223);
                for (const YB of GB) this.string(YB), this.value(BB[YB], OB + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof BB)
        }
      }
      number(BB) {
        Number.isInteger(BB) && BB >= -2147483648 && BB <= 4294967295 ? BB >= 0 ? BB < 128 ? this.u8(BB) : BB < 256 ? (this.u8(204), this.u8(BB)) : BB < 65536 ? (this.u8(205), this.u16(BB)) : (this.u8(206), this.u32(BB)) : BB >= -32 ? this.u8(BB + 256) : BB >= -128 ? (this.u8(208), this.u8(BB + 256)) : BB >= -32768 ? (this.u8(209), this.u16(BB + 65536)) : (this.u8(210), this.u32(BB >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, BB, !1), this.at += 8)
      }
      bigint(BB) {
        const OB = BB >= jB && BB <= yB;
        if (!OB && (BB < 0n || BB > JB)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(OB ? 211 : 207), this.room(8), OB ? this.view.setBigInt64(this.at, BB, !1) : this.view.setBigUint64(this.at, BB, !1), this.at += 8
      }
      string(BB) {
        const OB = oB.encode(BB);
        this.head(OB.length, 217, 160, 218, 219), this.room(OB.length), this.buf.set(OB, this.at), this.at += OB.length
      }
      head(BB, OB, GB, YB, DB) {
        GB >= 0 && BB < (160 === GB ? 32 : 16) ? this.u8(GB | BB) : OB !== YB && BB < 256 ? (this.u8(OB), this.u8(BB)) : BB < 65536 ? (this.u8(YB), this.u16(BB)) : (this.u8(DB), this.u32(BB))
      }
      room(BB) {
        if (this.at + BB <= this.buf.length) return;
        let OB = 2 * this.buf.length;
        for (; OB < this.at + BB;) OB *= 2;
        const GB = new Uint8Array(OB);
        GB.set(this.buf.subarray(0, this.at)), this.buf = GB, this.view = new DataView(GB.buffer)
      }
      u8(BB) {
        this.room(1), this.buf[this.at++] = BB
      }
      u16(BB) {
        this.room(2), this.view.setUint16(this.at, BB, !1), this.at += 2
      }
      u32(BB) {
        this.room(4), this.view.setUint32(this.at, BB, !1), this.at += 4
      }
    }
  },
  41635: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(41616);
    const DB = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class QB {
      constructor(BB) {
        this.buf = BB, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let BB = this.u8(),
          OB = 127 & BB,
          GB = 128;
        for (; 128 & BB;) {
          if (GB > 2 ** 63) throw new RangeError("avro: varint too long");
          BB = this.u8(), OB += (127 & BB) * GB, GB *= 128
        }
        return OB % 2 === 1 ? -(OB + 1) / 2 : OB / 2
      }
      float() {
        const BB = this.take(4);
        return this.floats().getFloat32(BB, !0)
      }
      double() {
        const BB = this.take(8);
        return this.floats().getFloat64(BB, !0)
      }
      str() {
        const BB = this.size(),
          OB = this.take(BB),
          GB = OB + BB;
        if (BB <= 32) {
          let BB = "";
          for (let YB = OB; YB < GB; YB++) {
            const QB = this.buf[YB];
            if (QB >= 128) return DB.decode(this.buf.subarray(OB, GB));
            BB += String.fromCharCode(QB)
          }
          return BB
        }
        return DB.decode(this.buf.subarray(OB, GB))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(BB) {
        const OB = this.take(BB);
        return this.buf.slice(OB, OB + BB)
      }
      index(BB) {
        const OB = this.long();
        if (!(OB >= 0 && OB < BB)) throw new RangeError(`avro: index ${OB} of ${BB}`);
        return OB
      }
      QP(BB) {
        const OB = [];
        for (let GB = this.long(); 0 !== GB; GB = this.long()) {
          GB = this.block(GB);
          for (let YB = 0; YB < GB; YB++) OB.push(BB(this))
        }
        return OB
      }
      map(BB) {
        const OB = {};
        for (let GB = this.long(); 0 !== GB; GB = this.long()) {
          GB = this.block(GB);
          for (let YB = 0; YB < GB; YB++) {
            OB[this.str()] = BB(this)
          }
        }
        return OB
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(BB) {
        let OB = BB;
        if (OB < 0 && (OB = -OB, this.long()), OB > this.buf.length - this.at) throw new RangeError(`avro: block of ${OB} items in ${this.buf.length-this.at} bytes`);
        return OB
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const BB = this.long();
        if (BB < 0) throw new RangeError(`avro: length ${BB}`);
        return BB
      }
      u8() {
        const BB = this.buf[this.at];
        if (void 0 === BB) throw new RangeError("avro: truncated");
        return this.at++, BB
      }
      take(BB) {
        const OB = this.at;
        if (BB > this.buf.length - OB) throw new RangeError("avro: truncated");
        return this.at = OB + BB, OB
      }
    }

    function oB(BB, OB) {
      const GB = new QB(OB),
        DB = (0, YB.ib)(BB, GB);
      return GB.end(), DB
    }
  },
  41616: (BB, OB, GB) => {
    GB.d(OB, {
      $: () => pB,
      B: () => oB,
      C: () => dB,
      D: () => DB,
      F: () => jB,
      I: () => lB,
      M: () => fB,
      P: () => UB,
      Q: () => SB,
      T: () => MB,
      V: () => PB,
      X: () => kB,
      bb: () => WB,
      d: () => VB,
      fb: () => qB,
      g: () => ZB,
      hb: () => yB,
      ib: () => KB,
      j: () => NB,
      k: () => RB,
      n: () => nB,
      r: () => YB,
      t: () => QB,
      w: () => AB,
      x: () => zB,
      z: () => JB
    });
    const YB = 2,
      DB = 12,
      QB = 27,
      oB = 40,
      jB = 52,
      yB = 59,
      JB = 63,
      MB = 83,
      PB = 84,
      zB = 89,
      lB = 91,
      pB = 93,
      qB = 94,
      ZB = 95,
      NB = 97,
      RB = 101,
      WB = 102,
      AB = 73,
      VB = 16,
      SB = 86,
      nB = 60,
      UB = 17,
      fB = 56,
      kB = 100,
      dB = 81;

    function KB(BB, OB) {
      switch (BB) {
        case YB:
          return function(BB) {
            return {
              RB: HB(BB),
              VB: BB.float(),
              SB: BB.long()
            }
          }(OB);
        case DB:
          return function(BB) {
            return {
              BB: iB(BB),
              OB: iB(BB)
            }
          }(OB);
        case QB:
          return function(BB) {
            return {
              fO: BB.bool(),
              kO: iB(BB)
            }
          }(OB);
        case oB:
          return OB.str();
        case jB:
          return function(BB) {
            return {
              id: BB.long(),
              IO: oO(BB)
            }
          }(OB);
        case yB:
          return function(BB) {
            return {
              SY: iB(BB),
              nY: yO(BB)
            }
          }(OB);
        case JB:
          return OB.str();
        case MB:
        case PB:
          return OB.long();
        case zB:
          return function(BB) {
            return {
              tG: BB.long(),
              BY: BB.bool(),
              OY: BB.float()
            }
          }(OB);
        case lB:
          return OB.long();
        case pB:
          return function(BB) {
            return {
              GD: BB.bool(),
              bG: PO(BB)
            }
          }(OB);
        case qB:
          return function(BB) {
            return {
              id: BB.str(),
              position: MO(BB),
              DO: zO(BB),
              style: EB(BB),
              oO: BB.bool()
            }
          }(OB);
        case ZB:
          return function(BB) {
            return {
              id: iB(BB)
            }
          }(OB);
        case NB:
          return function(BB) {
            return {
              XB: BB.long(),
              wB: BB.str(),
              EB: DO(BB),
              cB: DO(BB),
              hB: iB(BB),
              aB: iB(BB),
              eB: iB(BB),
              TB: iB(BB),
              bB: iB(BB),
              CB: DO(BB),
              HB: DO(BB),
              vB: iB(BB),
              sB: iB(BB),
              xB: iB(BB)
            }
          }(OB);
        case RB:
          return OB.str();
        case WB:
          return OB.long();
        case AB:
          return function(BB) {
            return {
              fY: BB.long(),
              kY: BB.str(),
              dY: BB.float()
            }
          }(OB);
        case VB:
          return function(BB) {
            return {
              lO: BB.bool(),
              pO: iB(BB),
              qO: BB.str(),
              ZO: pO(BB),
              RO: pO(BB),
              WO: BB.bool(),
              AO: BB.long(),
              VO: qO(BB)
            }
          }(OB);
        case SB:
          return function(BB) {
            return {
              IQ: iB(BB)
            }
          }(OB);
        case nB:
          return function(BB) {
            return {
              pY: BB.str(),
              qY: BB.str(),
              ZY: ZO(BB),
              NY: BB.str(),
              RY: xB(BB),
              WY: BB.float()
            }
          }(OB);
        case UB:
          return function(BB) {
            return {
              pY: BB.str(),
              qY: BB.str(),
              ZY: ZO(BB)
            }
          }(OB);
        case fB:
          return function(BB) {
            return BB.QP(NO)
          }(OB);
        case kB:
          return function(BB) {
            return {
              YY: WO(BB),
              yY: aB(BB)
            }
          }(OB);
        case dB:
          return function(BB) {
            return {
              KD: BB.bool(),
              uD: iB(BB),
              mD: VO(BB),
              LD: rO(BB)
            }
          }(OB);
        default:
          throw new Error(`no reader for to-client message ${BB}`)
      }
    }

    function uB(BB) {
      return {
        entityName: BB.str()
      }
    }

    function mB(BB) {
      const OB = BB.index(4);
      return 0 === OB ? BB.str() : 1 === OB ? BB.long() : 2 === OB ? BB.bool() : uB(BB)
    }

    function IB(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return BB.map(mB)
      }(BB)
    }

    function FB(BB) {
      return {
        translationKey: BB.str(),
        params: IB(BB)
      }
    }

    function iB(BB) {
      return 0 === BB.index(2) ? null : BB.str()
    }

    function LB(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          color: iB(BB),
          colour: iB(BB),
          fontSize: iB(BB)
        }
      }(BB)
    }

    function gB(BB) {
      return {
        icon: BB.str(),
        style: LB(BB)
      }
    }

    function rB(BB) {
      const OB = BB.index(3);
      return 0 === OB ? {
        string: BB.str()
      } : 1 === OB ? {
        styledEntityName: uB(BB)
      } : {
        styledTranslatedText: FB(BB)
      }
    }

    function XB(BB) {
      const OB = BB.index(3);
      return 0 === OB ? null : 1 === OB ? BB.str() : BB.long()
    }

    function wB(BB) {
      return 0 === BB.index(2) ? null : BB.float()
    }

    function EB(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          color: iB(BB),
          colour: iB(BB),
          fontWeight: XB(BB),
          fontStyle: iB(BB),
          fontSize: iB(BB),
          opacity: wB(BB)
        }
      }(BB)
    }

    function cB(BB) {
      return {
        str: rB(BB),
        style: EB(BB),
        clickableUrl: iB(BB)
      }
    }

    function hB(BB) {
      return BB.str()
    }

    function aB(BB) {
      return BB.QP(hB)
    }

    function eB(BB) {
      return 0 === BB.index(2) ? null : aB(BB)
    }

    function TB(BB) {
      return {
        type: BB.str(),
        progress: BB.float(),
        width: iB(BB),
        height: iB(BB),
        colours: eB(BB),
        backgroundColour: iB(BB)
      }
    }

    function bB(BB) {
      return {
        type: BB.str(),
        action: BB.str(),
        style: EB(BB)
      }
    }

    function CB(BB) {
      const OB = BB.index(7);
      return 0 === OB ? {
        string: BB.str()
      } : 1 === OB ? {
        entityName: uB(BB)
      } : 2 === OB ? {
        translatedText: FB(BB)
      } : 3 === OB ? {
        styledIcon: gB(BB)
      } : 4 === OB ? {
        WB: cB(BB)
      } : 5 === OB ? {
        styledProgressBar: TB(BB)
      } : {
        styledKeyBinding: bB(BB)
      }
    }

    function HB(BB) {
      return BB.QP(CB)
    }
    const vB = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function sB(BB) {
      return vB[BB.index(5)]
    }

    function xB(BB) {
      return 0 === BB.index(2) ? null : BB.double()
    }

    function tB(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          gO: xB(BB),
          rO: BB.double(),
          XO: BB.double(),
          wO: BB.bool(),
          description: HB(BB),
          EO: BB.str(),
          scale: xB(BB),
          rotation: xB(BB)
        }
      }(BB)
    }

    function BO(BB) {
      return 0 === BB.index(2) ? null : BB.bool()
    }

    function OO(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          hO: BB.double(),
          icon: BB.str(),
          label: HB(BB),
          aO: BB.bool(),
          scale: xB(BB),
          rotation: xB(BB),
          eO: BO(BB)
        }
      }(BB)
    }

    function GO(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          gO: xB(BB),
          CO: BB.double(),
          HO: BB.double(),
          vO: BB.double(),
          gravity: BB.double(),
          sO: BB.double(),
          xO: BB.double(),
          tO: BB.double(),
          wO: BB.bool(),
          description: HB(BB),
          icon: iB(BB)
        }
      }(BB)
    }

    function YO(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          speed: BB.double(),
          GG: BB.double(),
          label: HB(BB),
          icon: iB(BB),
          scale: xB(BB),
          rotation: xB(BB)
        }
      }(BB)
    }

    function DO(BB) {
      return 0 === BB.index(2) ? null : BB.long()
    }

    function QO(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          DG: BB.long(),
          QG: BB.double(),
          oG: BB.double(),
          jG: DO(BB),
          label: HB(BB),
          icon: iB(BB)
        }
      }(BB)
    }

    function oO(BB) {
      return {
        type: sB(BB),
        progressBar: tB(BB),
        timedClick: OO(BB),
        gravityBar: GO(BB),
        precisionBar: YO(BB),
        rhythmClick: QO(BB)
      }
    }
    const jO = ["playerGone", "rateLimited"];

    function yO(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return jO[BB.index(2)]
      }(BB)
    }

    function JO(BB) {
      return BB.float()
    }

    function MO(BB) {
      return BB.QP(JO)
    }

    function PO(BB) {
      return 0 === BB.index(2) ? null : MO(BB)
    }

    function zO(BB) {
      return 0 === BB.index(2) ? null : HB(BB)
    }

    function lO(BB) {
      return BB.long()
    }

    function pO(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return BB.QP(lO)
      }(BB)
    }

    function qO(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          nO: BB.str(),
          UO: BB.long()
        }
      }(BB)
    }

    function ZO(BB) {
      const OB = BB.index(3);
      return 0 === OB ? null : 1 === OB ? BB.str() : FB(BB)
    }

    function NO(BB) {
      return {
        nB: BB.str(),
        UB: BB.str(),
        fB: BB.str()
      }
    }

    function RO(BB) {
      return {
        DY: BB.str(),
        QY: iB(BB),
        oY: iB(BB),
        jY: aB(BB)
      }
    }

    function WO(BB) {
      return BB.QP(RO)
    }

    function AO(BB) {
      return {
        iD: BB.str(),
        x: BB.long(),
        y: BB.long(),
        z: BB.long()
      }
    }

    function VO(BB) {
      return BB.QP(AO)
    }

    function SO(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          YQ: BB.float(),
          DQ: BB.long(),
          QQ: BB.long()
        }
      }(BB)
    }

    function nO(BB) {
      return {
        blockName: BB.str(),
        CD: BB.bool(),
        vD: BB.bool(),
        sD: BB.bool(),
        xD: BB.float(),
        tD: BB.float(),
        BQ: BB.long(),
        OQ: SO(BB)
      }
    }

    function UO(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return BB.QP(nO)
      }(BB)
    }

    function fO(BB) {
      return {
        eD: BB.str(),
        TD: UO(BB)
      }
    }

    function kO(BB) {
      return {
        blockName: BB.str(),
        frequency: BB.float()
      }
    }

    function dO(BB) {
      return BB.QP(kO)
    }

    function KO(BB) {
      return {
        yQ: BB.str(),
        JQ: BB.str(),
        frequency: BB.float(),
        MQ: dO(BB)
      }
    }

    function uO(BB) {
      return BB.QP(KO)
    }

    function mO(BB) {
      return {
        blockName: BB.str(),
        radius: BB.long(),
        qQ: BB.long(),
        XD: BB.long(),
        wD: BB.long(),
        ZQ: BB.float()
      }
    }

    function IO(BB) {
      return BB.QP(mO)
    }

    function FO(BB) {
      return {
        XD: BB.long(),
        wD: BB.long(),
        ED: BB.long(),
        cD: BB.bool(),
        hD: fO(BB),
        oQ: uO(BB),
        lQ: IO(BB)
      }
    }

    function iO(BB) {
      return BB.QP(FO)
    }

    function LO(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          name: BB.str(),
          AQ: iB(BB)
        }
      }(BB)
    }

    function gO(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          terrain: LO(BB),
          VQ: IO(BB)
        }
      }(BB)
    }

    function rO(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          layers: iO(BB),
          NQ: gO(BB)
        }
      }(BB)
    }
  },
  41600: (BB, OB, GB) => {
    GB.d(OB, {
      $: () => SB,
      B: () => VB,
      E: () => ZB,
      I: () => kB,
      K: () => IB,
      M: () => pB,
      O: () => iB,
      S: () => RB,
      V: () => NB,
      Z: () => WB,
      c: () => DB,
      g: () => FB,
      h: () => mB,
      i: () => lB,
      j: () => qB,
      m: () => KB,
      o: () => UB,
      p: () => dB,
      s: () => fB,
      u: () => nB,
      x: () => uB,
      y: () => AB
    });
    var YB = GB(3362);
    const DB = {
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

    function QB(BB, OB) {
      return !ArrayBuffer.isView(BB) || BB instanceof DataView ? Array.isArray(BB) ? BB.map((BB => OB(BB))) : BB : Array.from(BB, (BB => OB(BB)))
    }

    function oB(BB) {
      if ("string" !== typeof BB) return BB;
      for (let OB = 0; OB < BB.length; OB++) {
        const GB = BB.charCodeAt(OB);
        if (GB >= 55296 && GB <= 57343) return yB.decode(jB.encode(BB))
      }
      return BB
    }
    const jB = new TextEncoder,
      yB = new TextDecoder;

    function JB(BB) {
      return BB
    }
    let MB;

    function PB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [oB(BB.policy), oB(BB.Jy)]
    }

    function zB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [QB(BB.ZO, JB), QB(BB.xy, JB)]
    }

    function lB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.ty), oB(OB.BJ)];
      var OB
    }

    function pB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [OB.id, OB.UJ];
      var OB
    }

    function qB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [OB.XB, oB(OB.wB), OB.EB, oB(OB.aB), OB.CB, OB.HB, OB.Ay, oB(OB.Vy), oB(OB.Sy)];
      var OB
    }

    function ZB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [QB(OB.VM, JB), OB.SM];
      var OB
    }

    function NB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [QB(OB.dJ, (BB => oB(BB))), oB(OB.KJ), OB.uJ];
      var OB
    }

    function RB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [QB(OB.JJ, JB), oB(OB.MJ), OB.PJ];
      var OB
    }

    function WB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.UB), oB(OB.fB)];
      var OB
    }

    function AB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.NM)];
      var OB
    }

    function VB(BB) {
      return oB(BB)
    }

    function SB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.Hy), oB(OB.vy), oB(OB.policy), oB(OB.Jy)];
      var OB
    }

    function nB(BB) {
      return PB(BB)
    }

    function UB(BB) {
      return PB(BB)
    }

    function fB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.nM)];
      var OB
    }

    function kB(BB) {
      return BB
    }

    function dB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.zJ), oB(OB.lJ)];
      var OB
    }

    function KB(BB) {
      return oB(BB)
    }

    function uB(BB) {
      return zB(BB)
    }

    function mB(BB) {
      return zB(BB)
    }

    function IB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [oB(OB.fJ)];
      var OB
    }

    function FB(BB) {
      return (MB ??= (0, YB.h)().map((BB => BB.name)), MB).map((OB => {
        return "string" === typeof(GB = BB[OB]) ? oB(GB) : QB(GB, JB);
        var GB
      }))
    }

    function iB(BB) {
      return null === (OB = BB) || "object" !== typeof OB ? OB : [OB.RM, OB.WM, OB.AM];
      var OB
    }
  },
  10027: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      g: () => QB
    });
    var YB = GB(9974);
    const DB = "Air",
      QB = Object.freeze(new YB.g(DB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39954: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB,
      f: () => jB
    });
    var YB = GB(353),
      DB = GB(4886);
    const QB = new Set(DB.o),
      oB = new Map;

    function jB(BB, OB) {
      let GB = oB.get(OB);
      void 0 === GB && (GB = new Map, oB.set(OB, GB));
      let DB = GB.get(BB);
      return void 0 === DB && (DB = `${BB}${(0,YB.A)(OB)}`, GB.set(BB, DB)), DB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);