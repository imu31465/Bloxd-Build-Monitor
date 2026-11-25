export const id = 191;
export const ids = [191];
export const modules = {
  40993: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG,
      f: () => kG,
      j: () => yG
    });
    var wG = ZG(40999),
      SG = ZG(4810),
      LG = ZG(41007);

    function yG(GG) {
      return GG.payloadKind === SG.jc.Msgpack ? (0, wG.e)(GG.payload) : void 0
    }

    function kG(GG, bG) {
      if (bG.payloadKind === SG.jc.Bytes || bG.payloadKind === SG.jc.MsgpackBin) return (0, LG.e)(GG, bG.payload)
    }

    function UG(GG) {
      return null !== GG && "object" === typeof GG
    }
  },
  41012: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => pG,
      f: () => fG,
      j: () => QG,
      l: () => VG,
      n: () => dG
    });
    var wG = ZG(4810),
      SG = ZG(41018);
    const LG = new Map,
      yG = new Set,
      kG = new Set;
    let UG = 0,
      YG = 0;

    function VG(GG, bG) {
      let ZG = LG.get(GG);
      return ZG || (ZG = new Set, LG.set(GG, ZG)), ZG.add(bG), () => {
        ZG.delete(bG)
      }
    }

    function pG() {
      return 0 !== UG
    }

    function fG(GG) {
      return yG.add(GG), () => {
        yG.delete(GG)
      }
    }

    function QG(GG) {
      return kG.add(GG), () => {
        kG.delete(GG)
      }
    }
    const KG = "A raw message listener threw";

    function hG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yG;
      for (const wG of bG) try {
        wG()
      } catch (ZG) {
        GG ? (0, SG.n)(ZG, KG) : console.error(KG, ZG)
      }
    }
    const dG = {
      fire: function(GG) {
        if ("connection" === GG.type) {
          const bG = GG.phase === wG.M.Activated && GG.conn !== UG && GG.conn > YG,
            ZG = (GG.phase === wG.M.Left || GG.phase === wG.M.Closed) && GG.conn === UG;
          return void(bG || ZG ? (UG = bG ? GG.conn : 0, hG(!0)) : GG.phase === wG.M.Resumed && 0 !== UG && GG.conn > YG && (UG = GG.conn, hG(!0, kG)))
        }
        const bG = LG.get(GG.vV);
        if (bG && GG.conn === UG && 0 !== UG)
          for (const wG of bG) try {
            wG(GG)
          } catch (ZG) {
            (0, SG.n)(ZG, KG)
          }
      },
      close: function(GG) {
        YG = Math.max(YG, GG, UG), 0 !== UG && (UG = 0, hG(!1))
      }
    }
  },
  40986: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => YG,
      f: () => UG,
      i: () => kG
    });
    var wG = ZG(1230),
      SG = ZG(40954);
    const LG = new TextDecoder,
      yG = new TextEncoder;

    function kG(GG, bG) {
      const ZG = GG.queries.entityName(bG);
      if (ZG === SG.Fc) return;
      const yG = GG.memoryData(GG.scratch(), 4 + ZG, 4, "entity_name's answer");
      if (!yG) return;
      const kG = yG.getUint32(0, !0),
        UG = LG.decode(new Uint8Array(yG.buffer, yG.byteOffset + 4, ZG));
      return (0, wG.b)(UG, !1, kG === SG.Td ? null : kG)
    }

    function UG(GG, bG, ZG) {
      const wG = yG.encode(ZG);
      if (wG.length > SG.Fb) return !1;
      const LG = GG.memoryView(Uint8Array, GG.scratch(), wG.length, "has_effect's name");
      return !!LG && (LG.set(wG), 1 === GG.queries.hasEffect(bG, wG.length))
    }

    function YG(GG, bG, ZG, wG) {
      const yG = GG.queries.blockData(bG, ZG, wG);
      if (yG === SG.Fc) return;
      const kG = GG.memoryView(Uint8Array, GG.scratch(), yG, "block_data's answer");
      return kG ? JSON.parse(LG.decode(kG)) : void 0
    }
  },
  40999: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG,
      g: () => VG
    });
    const wG = new TextDecoder;

    function SG(GG) {
      const bG = new LG(GG),
        ZG = bG.value();
      if (bG.at !== GG.length) throw new Error(`msgpack: ${GG.length-bG.at} bytes after the value`);
      return ZG
    }
    class LG {
      constructor(GG) {
        this.bytes = GG, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(GG.buffer, GG.byteOffset, GG.byteLength)
      }
      value() {
        const GG = this.u8();
        if (GG <= 127) return GG;
        if (GG >= 224) return GG - 256;
        if (GG >= 128 && GG <= 143) return this.map(15 & GG);
        if (GG >= 144 && GG <= 159) return this.array(15 & GG);
        if (GG >= 160 && GG <= 191) return this.str(31 & GG);
        switch (GG) {
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
            throw new Error(`msgpack: unknown byte 0x${GG.toString(16)} at ${this.at-1}`)
        }
      }
      take(GG) {
        const bG = this.at;
        if (bG + GG > this.bytes.length) throw new Error(`msgpack: ${GG} bytes past the end at ${bG}`);
        return this.at = bG + GG, bG
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
      int64(GG) {
        const bG = this.take(8);
        return GG ? this.view.getBigInt64(bG, !1) : this.view.getBigUint64(bG, !1)
      }
      str(GG) {
        const bG = this.take(GG),
          ZG = this.bytes;
        if (GG < 16) {
          let SG = "";
          for (let LG = bG; LG < bG + GG; LG++) {
            const yG = ZG[LG];
            if (yG >= 128) return wG.decode(ZG.subarray(bG, bG + GG));
            SG += String.fromCharCode(yG)
          }
          return SG
        }
        return wG.decode(ZG.subarray(bG, bG + GG))
      }
      bin(GG) {
        const bG = this.take(GG);
        return this.bytes.subarray(bG, bG + GG)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(GG) {
        this.enter();
        const bG = [];
        for (let ZG = 0; ZG < GG; ZG++) bG.push(this.value());
        return this.depth--, bG
      }
      map(GG) {
        this.enter();
        const bG = {};
        for (let ZG = 0; ZG < GG; ZG++) {
          const GG = this.value(),
            ZG = this.value();
          bG["__proto__" === GG ? "__proto_" : String(GG)] = ZG
        }
        return this.depth--, bG
      }
      ext(GG) {
        const bG = this.view.getInt8(this.take(1)),
          ZG = this.take(GG);
        if (0 !== bG) {
          if (-1 === bG) {
            if (1 === GG) return new Date(NaN);
            if (4 === GG) return new Date(1e3 * this.view.getUint32(ZG, !1));
            if (8 === GG) {
              const GG = this.view.getUint32(ZG, !1),
                bG = GG >>> 2,
                wG = 4294967296 * (3 & GG) + this.view.getUint32(ZG + 4, !1);
              return new Date(1e3 * wG + bG / 1e6)
            }
            if (12 === GG) {
              const GG = this.view.getUint32(ZG, !1),
                bG = 4294967296 * this.view.getInt32(ZG + 4, !1) + this.view.getUint32(ZG + 8, !1);
              return new Date(1e3 * bG + GG / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${bG} of ${GG} bytes`)
        }
      }
    }
    const yG = new TextEncoder,
      kG = -(2n ** 63n),
      UG = 2n ** 63n - 1n,
      YG = 2n ** 64n - 1n;

    function VG(GG) {
      const bG = new pG;
      return bG.value(GG, 0), bG.bytes()
    }
    class pG {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(GG, bG) {
        if (bG > 512) throw new Error("msgpack: nested too deep");
        switch (typeof GG) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(GG ? 195 : 194);
          case "number":
            return void this.number(GG);
          case "bigint":
            return void this.bigint(GG);
          case "string":
            return void this.string(GG);
          case "object":
            if (null === GG) this.u8(192);
            else if (GG instanceof Uint8Array) this.head(GG.length, 196, -1, 197, 198), this.room(GG.length), this.buf.set(GG, this.at), this.at += GG.length;
            else if (Array.isArray(GG)) {
              this.head(GG.length, 220, 144, 220, 221);
              for (const ZG of GG) this.value(ZG, bG + 1)
            } else {
              var ZG, wG;
              if (Object.getPrototypeOf(GG) !== Object.prototype && null !== Object.getPrototypeOf(GG)) throw new Error(`msgpack: can't encode a ${null!==(ZG=null===(wG=GG.constructor)||void 0===wG?void 0:wG.name)&&void 0!==ZG?ZG:"object"}`);
              {
                const ZG = Object.keys(GG);
                this.head(ZG.length, 222, 128, 222, 223);
                for (const wG of ZG) this.string(wG), this.value(GG[wG], bG + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof GG)
        }
      }
      number(GG) {
        Number.isInteger(GG) && GG >= -2147483648 && GG <= 4294967295 ? GG >= 0 ? GG < 128 ? this.u8(GG) : GG < 256 ? (this.u8(204), this.u8(GG)) : GG < 65536 ? (this.u8(205), this.u16(GG)) : (this.u8(206), this.u32(GG)) : GG >= -32 ? this.u8(GG + 256) : GG >= -128 ? (this.u8(208), this.u8(GG + 256)) : GG >= -32768 ? (this.u8(209), this.u16(GG + 65536)) : (this.u8(210), this.u32(GG >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, GG, !1), this.at += 8)
      }
      bigint(GG) {
        const bG = GG >= kG && GG <= UG;
        if (!bG && (GG < 0n || GG > YG)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(bG ? 211 : 207), this.room(8), bG ? this.view.setBigInt64(this.at, GG, !1) : this.view.setBigUint64(this.at, GG, !1), this.at += 8
      }
      string(GG) {
        const bG = yG.encode(GG);
        this.head(bG.length, 217, 160, 218, 219), this.room(bG.length), this.buf.set(bG, this.at), this.at += bG.length
      }
      head(GG, bG, ZG, wG, SG) {
        ZG >= 0 && GG < (160 === ZG ? 32 : 16) ? this.u8(ZG | GG) : bG !== wG && GG < 256 ? (this.u8(bG), this.u8(GG)) : GG < 65536 ? (this.u8(wG), this.u16(GG)) : (this.u8(SG), this.u32(GG))
      }
      room(GG) {
        if (this.at + GG <= this.buf.length) return;
        let bG = 2 * this.buf.length;
        for (; bG < this.at + GG;) bG *= 2;
        const ZG = new Uint8Array(bG);
        ZG.set(this.buf.subarray(0, this.at)), this.buf = ZG, this.view = new DataView(ZG.buffer)
      }
      u8(GG) {
        this.room(1), this.buf[this.at++] = GG
      }
      u16(GG) {
        this.room(2), this.view.setUint16(this.at, GG, !1), this.at += 2
      }
      u32(GG) {
        this.room(4), this.view.setUint32(this.at, GG, !1), this.at += 4
      }
    }
  },
  41007: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(40989);
    const SG = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class LG {
      constructor(GG) {
        this.buf = GG, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let GG = this.u8(),
          bG = 127 & GG,
          ZG = 128;
        for (; 128 & GG;) {
          if (ZG > 2 ** 63) throw new RangeError("avro: varint too long");
          GG = this.u8(), bG += (127 & GG) * ZG, ZG *= 128
        }
        return bG % 2 === 1 ? -(bG + 1) / 2 : bG / 2
      }
      float() {
        const GG = this.take(4);
        return this.floats().getFloat32(GG, !0)
      }
      double() {
        const GG = this.take(8);
        return this.floats().getFloat64(GG, !0)
      }
      str() {
        const GG = this.size(),
          bG = this.take(GG),
          ZG = bG + GG;
        if (GG <= 32) {
          let GG = "";
          for (let wG = bG; wG < ZG; wG++) {
            const LG = this.buf[wG];
            if (LG >= 128) return SG.decode(this.buf.subarray(bG, ZG));
            GG += String.fromCharCode(LG)
          }
          return GG
        }
        return SG.decode(this.buf.subarray(bG, ZG))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(GG) {
        const bG = this.take(GG);
        return this.buf.slice(bG, bG + GG)
      }
      index(GG) {
        const bG = this.long();
        if (!(bG >= 0 && bG < GG)) throw new RangeError(`avro: index ${bG} of ${GG}`);
        return bG
      }
      fK(GG) {
        const bG = [];
        for (let ZG = this.long(); 0 !== ZG; ZG = this.long()) {
          ZG = this.block(ZG);
          for (let wG = 0; wG < ZG; wG++) bG.push(GG(this))
        }
        return bG
      }
      map(GG) {
        const bG = {};
        for (let ZG = this.long(); 0 !== ZG; ZG = this.long()) {
          ZG = this.block(ZG);
          for (let wG = 0; wG < ZG; wG++) {
            bG[this.str()] = GG(this)
          }
        }
        return bG
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(GG) {
        let bG = GG;
        if (bG < 0 && (bG = -bG, this.long()), bG > this.buf.length - this.at) throw new RangeError(`avro: block of ${bG} items in ${this.buf.length-this.at} bytes`);
        return bG
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const GG = this.long();
        if (GG < 0) throw new RangeError(`avro: length ${GG}`);
        return GG
      }
      u8() {
        const GG = this.buf[this.at];
        if (void 0 === GG) throw new RangeError("avro: truncated");
        return this.at++, GG
      }
      take(GG) {
        const bG = this.at;
        if (GG > this.buf.length - bG) throw new RangeError("avro: truncated");
        return this.at = bG + GG, bG
      }
    }

    function yG(GG, bG) {
      const ZG = new LG(bG),
        SG = (0, wG.nb)(GG, ZG);
      return ZG.end(), SG
    }
  },
  40989: (GG, bG, ZG) => {
    ZG.d(bG, {
      $: () => WG,
      A: () => yG,
      E: () => mG,
      I: () => SG,
      L: () => kG,
      P: () => QG,
      T: () => CG,
      U: () => iG,
      V: () => XG,
      Y: () => VG,
      Z: () => pG,
      c: () => oG,
      d: () => dG,
      db: () => KG,
      f: () => JG,
      hb: () => zG,
      i: () => rG,
      ib: () => hG,
      j: () => uG,
      m: () => wG,
      mb: () => UG,
      nb: () => IG,
      q: () => LG,
      r: () => EG,
      v: () => fG,
      z: () => YG
    });
    const wG = 2,
      SG = 12,
      LG = 27,
      yG = 40,
      kG = 52,
      UG = 59,
      YG = 63,
      VG = 83,
      pG = 84,
      fG = 89,
      QG = 91,
      KG = 93,
      hG = 94,
      dG = 95,
      JG = 97,
      rG = 101,
      zG = 102,
      EG = 73,
      oG = 16,
      XG = 86,
      uG = 60,
      iG = 17,
      CG = 56,
      WG = 100,
      mG = 81;

    function IG(GG, bG) {
      switch (GG) {
        case wG:
          return function(GG) {
            return {
              aL: DG(GG),
              cL: GG.float(),
              lL: GG.long()
            }
          }(bG);
        case SG:
          return function(GG) {
            return {
              AS: lG(GG),
              sS: lG(GG)
            }
          }(bG);
        case LG:
          return function(GG) {
            return {
              kG: GG.bool(),
              UG: lG(GG)
            }
          }(bG);
        case yG:
          return bG.str();
        case kG:
          return function(GG) {
            return {
              id: GG.long(),
              TG: yb(GG)
            }
          }(bG);
        case UG:
          return function(GG) {
            return {
              NL: lG(GG),
              OL: Ub(GG)
            }
          }(bG);
        case YG:
          return bG.str();
        case VG:
        case pG:
          return bG.long();
        case fG:
          return function(GG) {
            return {
              cS: GG.long(),
              lS: GG.bool(),
              jS: GG.float()
            }
          }(bG);
        case QG:
          return bG.long();
        case KG:
          return function(GG) {
            return {
              eb: GG.bool(),
              WG: pb(GG)
            }
          }(bG);
        case hG:
          return function(GG) {
            return {
              id: GG.str(),
              position: Vb(GG),
              jb: fb(GG),
              style: qG(GG),
              Mb: GG.bool()
            }
          }(bG);
        case dG:
          return function(GG) {
            return {
              id: lG(GG)
            }
          }(bG);
        case JG:
          return function(GG) {
            return {
              BS: GG.long(),
              bL: GG.str(),
              ZL: Sb(GG),
              wL: Sb(GG),
              SL: lG(GG),
              LL: lG(GG),
              yL: lG(GG),
              kL: lG(GG),
              UL: lG(GG),
              YL: Sb(GG),
              VL: Sb(GG),
              pL: lG(GG),
              fL: lG(GG),
              QL: lG(GG)
            }
          }(bG);
        case rG:
          return bG.str();
        case zG:
          return bG.long();
        case EG:
          return function(GG) {
            return {
              JZ: GG.long(),
              rZ: GG.str(),
              zZ: GG.float()
            }
          }(bG);
        case oG:
          return function(GG) {
            return {
              qS: GG.bool(),
              nS: lG(GG),
              gS: GG.str(),
              eS: Kb(GG),
              RS: Kb(GG),
              HS: GG.bool(),
              tS: GG.long(),
              DS: hb(GG)
            }
          }(bG);
        case XG:
          return function(GG) {
            return {
              aS: lG(GG)
            }
          }(bG);
        case uG:
          return function(GG) {
            return {
              cG: GG.str(),
              lG: GG.str(),
              jG: db(GG),
              Rb: GG.str(),
              Tb: xG(GG),
              Hb: GG.float()
            }
          }(bG);
        case iG:
          return function(GG) {
            return {
              cG: GG.str(),
              lG: GG.str(),
              jG: db(GG)
            }
          }(bG);
        case CG:
          return function(GG) {
            return GG.fK(Jb)
          }(bG);
        case WG:
          return function(GG) {
            return {
              PG: zb(GG),
              nG: eG(GG)
            }
          }(bG);
        case mG:
          return function(GG) {
            return {
              DZ: GG.bool(),
              NZ: lG(GG),
              OZ: ob(GG),
              BZ: Mb(GG)
            }
          }(bG);
        default:
          throw new Error(`no reader for to-client message ${GG}`)
      }
    }

    function FG(GG) {
      return {
        entityName: GG.str()
      }
    }

    function vG(GG) {
      const bG = GG.index(4);
      return 0 === bG ? GG.str() : 1 === bG ? GG.long() : 2 === bG ? GG.bool() : FG(GG)
    }

    function aG(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return GG.map(vG)
      }(GG)
    }

    function cG(GG) {
      return {
        translationKey: GG.str(),
        params: aG(GG)
      }
    }

    function lG(GG) {
      return 0 === GG.index(2) ? null : GG.str()
    }

    function jG(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return {
          color: lG(GG),
          colour: lG(GG),
          fontSize: lG(GG)
        }
      }(GG)
    }

    function PG(GG) {
      return {
        icon: GG.str(),
        style: jG(GG)
      }
    }

    function MG(GG) {
      const bG = GG.index(3);
      return 0 === bG ? {
        string: GG.str()
      } : 1 === bG ? {
        styledEntityName: FG(GG)
      } : {
        styledTranslatedText: cG(GG)
      }
    }

    function AG(GG) {
      const bG = GG.index(3);
      return 0 === bG ? null : 1 === bG ? GG.str() : GG.long()
    }

    function sG(GG) {
      return 0 === GG.index(2) ? null : GG.float()
    }

    function qG(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return {
          color: lG(GG),
          colour: lG(GG),
          fontWeight: AG(GG),
          fontStyle: lG(GG),
          fontSize: lG(GG),
          opacity: sG(GG)
        }
      }(GG)
    }

    function nG(GG) {
      return {
        str: MG(GG),
        style: qG(GG),
        clickableUrl: lG(GG)
      }
    }

    function gG(GG) {
      return GG.str()
    }

    function eG(GG) {
      return GG.fK(gG)
    }

    function RG(GG) {
      return 0 === GG.index(2) ? null : eG(GG)
    }

    function TG(GG) {
      return {
        type: GG.str(),
        progress: GG.float(),
        width: lG(GG),
        height: lG(GG),
        colours: RG(GG),
        backgroundColour: lG(GG)
      }
    }

    function HG(GG) {
      return {
        type: GG.str(),
        action: GG.str(),
        style: qG(GG)
      }
    }

    function tG(GG) {
      const bG = GG.index(7);
      return 0 === bG ? {
        string: GG.str()
      } : 1 === bG ? {
        entityName: FG(GG)
      } : 2 === bG ? {
        translatedText: cG(GG)
      } : 3 === bG ? {
        styledIcon: PG(GG)
      } : 4 === bG ? {
        Gb: nG(GG)
      } : 5 === bG ? {
        styledProgressBar: TG(GG)
      } : {
        styledKeyBinding: HG(GG)
      }
    }

    function DG(GG) {
      return GG.fK(tG)
    }
    const NG = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function OG(GG) {
      return NG[GG.index(5)]
    }

    function xG(GG) {
      return 0 === GG.index(2) ? null : GG.double()
    }

    function BG(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return {
          NG: xG(GG),
          OG: GG.double(),
          xG: GG.double(),
          BG: GG.bool(),
          description: DG(GG),
          Zb: GG.str(),
          scale: xG(GG),
          rotation: xG(GG)
        }
      }(GG)
    }

    function Gb(GG) {
      return 0 === GG.index(2) ? null : GG.bool()
    }

    function bb(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return {
          Lb: GG.double(),
          icon: GG.str(),
          label: DG(GG),
          yb: GG.bool(),
          scale: xG(GG),
          rotation: xG(GG),
          kb: Gb(GG)
        }
      }(GG)
    }

    function Zb(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return {
          NG: xG(GG),
          Yb: GG.double(),
          Vb: GG.double(),
          pb: GG.double(),
          gravity: GG.double(),
          fb: GG.double(),
          Qb: GG.double(),
          Kb: GG.double(),
          BG: GG.bool(),
          description: DG(GG),
          icon: lG(GG)
        }
      }(GG)
    }

    function wb(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return {
          speed: GG.double(),
          Jb: GG.double(),
          label: DG(GG),
          icon: lG(GG),
          scale: xG(GG),
          rotation: xG(GG)
        }
      }(GG)
    }

    function Sb(GG) {
      return 0 === GG.index(2) ? null : GG.long()
    }

    function Lb(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return {
          zb: GG.long(),
          Eb: GG.double(),
          ob: GG.double(),
          Xb: Sb(GG),
          label: DG(GG),
          icon: lG(GG)
        }
      }(GG)
    }

    function yb(GG) {
      return {
        type: OG(GG),
        progressBar: BG(GG),
        timedClick: bb(GG),
        gravityBar: Zb(GG),
        precisionBar: wb(GG),
        rhythmClick: Lb(GG)
      }
    }
    const kb = ["playerGone", "rateLimited"];

    function Ub(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return kb[GG.index(2)]
      }(GG)
    }

    function Yb(GG) {
      return GG.float()
    }

    function Vb(GG) {
      return GG.fK(Yb)
    }

    function pb(GG) {
      return 0 === GG.index(2) ? null : Vb(GG)
    }

    function fb(GG) {
      return 0 === GG.index(2) ? null : DG(GG)
    }

    function Qb(GG) {
      return GG.long()
    }

    function Kb(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return GG.fK(Qb)
      }(GG)
    }

    function hb(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return {
          OS: GG.str(),
          xS: GG.long()
        }
      }(GG)
    }

    function db(GG) {
      const bG = GG.index(3);
      return 0 === bG ? null : 1 === bG ? GG.str() : cG(GG)
    }

    function Jb(GG) {
      return {
        IL: GG.str(),
        FL: GG.str(),
        vL: GG.str()
      }
    }

    function rb(GG) {
      return {
        MG: GG.str(),
        AG: lG(GG),
        sG: lG(GG),
        qG: eG(GG)
      }
    }

    function zb(GG) {
      return GG.fK(rb)
    }

    function Eb(GG) {
      return {
        xZ: GG.str(),
        x: GG.long(),
        y: GG.long(),
        z: GG.long()
      }
    }

    function ob(GG) {
      return GG.fK(Eb)
    }

    function Xb(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return {
          zw: GG.float(),
          Ew: GG.long(),
          ow: GG.long()
        }
      }(GG)
    }

    function ub(GG) {
      return {
        blockName: GG.str(),
        pw: GG.bool(),
        fw: GG.bool(),
        Qw: GG.bool(),
        Kw: GG.float(),
        hw: GG.float(),
        dw: GG.long(),
        Jw: Xb(GG)
      }
    }

    function ib(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return GG.fK(ub)
      }(GG)
    }

    function Cb(GG) {
      return {
        Uw: GG.str(),
        Yw: ib(GG)
      }
    }

    function Wb(GG) {
      return {
        blockName: GG.str(),
        frequency: GG.float()
      }
    }

    function mb(GG) {
      return GG.fK(Wb)
    }

    function Ib(GG) {
      return {
        iw: GG.str(),
        Cw: GG.str(),
        frequency: GG.float(),
        Ww: mb(GG)
      }
    }

    function Fb(GG) {
      return GG.fK(Ib)
    }

    function vb(GG) {
      return {
        blockName: GG.str(),
        radius: GG.long(),
        aw: GG.long(),
        Zw: GG.long(),
        ww: GG.long(),
        lw: GG.float()
      }
    }

    function ab(GG) {
      return GG.fK(vb)
    }

    function cb(GG) {
      return {
        Zw: GG.long(),
        ww: GG.long(),
        Sw: GG.long(),
        Lw: GG.bool(),
        yw: Cb(GG),
        Xw: Fb(GG),
        Iw: ab(GG)
      }
    }

    function lb(GG) {
      return GG.fK(cb)
    }

    function jb(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return {
          name: GG.str(),
          Aw: lG(GG)
        }
      }(GG)
    }

    function Pb(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return {
          terrain: jb(GG),
          sw: ab(GG)
        }
      }(GG)
    }

    function Mb(GG) {
      return 0 === GG.index(2) ? null : function(GG) {
        return {
          layers: lb(GG),
          jw: Pb(GG)
        }
      }(GG)
    }
  },
  40976: (GG, bG, ZG) => {
    ZG.d(bG, {
      $: () => lG,
      A: () => uG,
      E: () => FG,
      I: () => EG,
      L: () => oG,
      P: () => dG,
      T: () => WG,
      W: () => aG,
      Z: () => KG,
      b: () => SG,
      cb: () => rG,
      db: () => JG,
      e: () => cG,
      gb: () => zG,
      i: () => vG,
      jb: () => XG,
      m: () => QG,
      p: () => hG,
      t: () => IG,
      v: () => iG,
      x: () => mG,
      y: () => CG
    });
    var wG = ZG(2984);
    const SG = {
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

    function LG(GG, bG) {
      return !ArrayBuffer.isView(GG) || GG instanceof DataView ? Array.isArray(GG) ? GG.map((GG => bG(GG))) : GG : Array.from(GG, (GG => bG(GG)))
    }

    function yG(GG) {
      if ("string" !== typeof GG) return GG;
      for (let bG = 0; bG < GG.length; bG++) {
        const ZG = GG.charCodeAt(bG);
        if (ZG >= 55296 && ZG <= 57343) return UG.decode(kG.encode(GG))
      }
      return GG
    }
    const kG = new TextEncoder,
      UG = new TextDecoder;

    function YG(GG) {
      return GG
    }
    let VG;

    function pG(GG) {
      return null === GG || "object" !== typeof GG ? GG : [yG(GG.Uk), yG(GG.Yk)]
    }

    function fG(GG) {
      return null === GG || "object" !== typeof GG ? GG : [LG(GG.eS, YG), LG(GG.Wk, YG)]
    }

    function QG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.vV), yG(bG.aV)];
      var bG
    }

    function KG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [bG.id, bG.rV];
      var bG
    }

    function hG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [bG.BS, yG(bG.bL), bG.ZL, yG(bG.LL), bG.YL, bG.VL, bG.mV, yG(bG.IV), yG(bG.FV)];
      var bG
    }

    function dG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [LG(bG.xy, YG), bG.Gk];
      var bG
    }

    function JG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [LG(bG.Dy, (GG => yG(GG))), yG(bG.Ny), bG.Oy];
      var bG
    }

    function rG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [LG(bG.uU, YG), yG(bG.iU), bG.CU];
      var bG
    }

    function zG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.FL), yG(bG.vL)];
      var bG
    }

    function EG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.Ak)];
      var bG
    }

    function oG(GG) {
      return yG(GG)
    }

    function XG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.hV), yG(bG.dV), yG(bG.Uk), yG(bG.Yk)];
      var bG
    }

    function uG(GG) {
      return pG(GG)
    }

    function iG(GG) {
      return pG(GG)
    }

    function CG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.hU)];
      var bG
    }

    function WG(GG) {
      return GG
    }

    function mG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.yk), yG(bG.kk)];
      var bG
    }

    function IG(GG) {
      return yG(GG)
    }

    function FG(GG) {
      return fG(GG)
    }

    function vG(GG) {
      return fG(GG)
    }

    function aG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [yG(bG.WU)];
      var bG
    }

    function cG(GG) {
      return (VG ??= (0, wG.c)().map((GG => GG.name)), VG).map((bG => {
        return "string" === typeof(ZG = GG[bG]) ? yG(ZG) : LG(ZG, YG);
        var ZG
      }))
    }

    function lG(GG) {
      return null === (bG = GG) || "object" !== typeof bG ? bG : [bG.fU, bG.QU, bG.KU];
      var bG
    }
  },
  9356: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      f: () => LG
    });
    var wG = ZG(9303);
    const SG = "Air",
      LG = Object.freeze(new wG.h(SG, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39657: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      i: () => kG
    });
    var wG = ZG(352),
      SG = ZG(4479);
    const LG = new Set(SG.o),
      yG = new Map;

    function kG(GG, bG) {
      let ZG = yG.get(bG);
      void 0 === ZG && (ZG = new Map, yG.set(bG, ZG));
      let SG = ZG.get(GG);
      return void 0 === SG && (SG = `${GG}${(0,wG.B)(bG)}`, ZG.set(GG, SG)), SG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);