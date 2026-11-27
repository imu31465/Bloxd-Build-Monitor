export const id = 127;
export const ids = [127];
export const modules = {
  42145: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR,
      i: () => qR,
      k: () => ZR
    });
    var yR = GR(42154),
      tR = GR(5676),
      uR = GR(42157);

    function ZR(RR) {
      return RR.payloadKind === tR.gc.Msgpack ? (0, yR.e)(RR.payload) : void 0
    }

    function qR(RR, JR) {
      if (JR.payloadKind === tR.gc.Bytes || JR.payloadKind === tR.gc.MsgpackBin) return (0, uR.e)(RR, JR.payload)
    }

    function iR(RR) {
      return null !== RR && "object" === typeof RR
    }
  },
  42164: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => KR,
      f: () => wR,
      i: () => rR,
      l: () => VR,
      o: () => LR
    });
    var yR = GR(5676),
      tR = GR(42170);
    const uR = new Map,
      ZR = new Set,
      qR = new Set;
    let iR = 0,
      fR = 0;

    function VR(RR, JR) {
      let GR = uR.get(RR);
      return GR || (GR = new Set, uR.set(RR, GR)), GR.add(JR), () => {
        GR.delete(JR)
      }
    }

    function KR() {
      return 0 !== iR
    }

    function wR(RR) {
      return ZR.add(RR), () => {
        ZR.delete(RR)
      }
    }

    function rR(RR) {
      return qR.add(RR), () => {
        qR.delete(RR)
      }
    }
    const eR = "A raw message listener threw";

    function aR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZR;
      for (const yR of JR) try {
        yR()
      } catch (GR) {
        RR ? (0, tR.j)(GR, eR) : console.error(eR, GR)
      }
    }
    const LR = {
      fire: function(RR) {
        if ("connection" === RR.type) {
          const JR = RR.phase === yR.H.Activated && RR.conn !== iR && RR.conn > fR,
            GR = (RR.phase === yR.H.Left || RR.phase === yR.H.Closed) && RR.conn === iR;
          return void(JR || GR ? (iR = JR ? RR.conn : 0, aR(!0)) : RR.phase === yR.H.Resumed && 0 !== iR && RR.conn > fR && (iR = RR.conn, aR(!0, qR)))
        }
        const JR = uR.get(RR.LZ);
        if (JR && RR.conn === iR && 0 !== iR)
          for (const yR of JR) try {
            yR(RR)
          } catch (GR) {
            (0, tR.j)(GR, eR)
          }
      },
      close: function(RR) {
        fR = Math.max(fR, RR, iR), 0 !== iR && (iR = 0, aR(!1))
      }
    }
  },
  42132: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR,
      h: () => iR,
      l: () => qR
    });
    var yR = GR(1359),
      tR = GR(42106);
    const uR = new TextDecoder,
      ZR = new TextEncoder;

    function qR(RR, JR) {
      const GR = RR.queries.entityName(JR);
      if (GR === tR.xc) return;
      const ZR = RR.memoryData(RR.scratch(), 4 + GR, 4, "entity_name's answer");
      if (!ZR) return;
      const qR = ZR.getUint32(0, !0),
        iR = uR.decode(new Uint8Array(ZR.buffer, ZR.byteOffset + 4, GR));
      return (0, yR.e)(iR, !1, qR === tR.Jd ? null : qR)
    }

    function iR(RR, JR, GR) {
      const yR = ZR.encode(GR);
      if (yR.length > tR.Ab) return !1;
      const uR = RR.memoryView(Uint8Array, RR.scratch(), yR.length, "has_effect's name");
      return !!uR && (uR.set(yR), 1 === RR.queries.hasEffect(JR, yR.length))
    }

    function fR(RR, JR, GR, yR) {
      const ZR = RR.queries.blockData(JR, GR, yR);
      if (ZR === tR.xc) return;
      const qR = RR.memoryView(Uint8Array, RR.scratch(), ZR, "block_data's answer");
      return qR ? JSON.parse(uR.decode(qR)) : void 0
    }
  },
  42154: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      i: () => VR
    });
    const yR = new TextDecoder;

    function tR(RR) {
      const JR = new uR(RR),
        GR = JR.value();
      if (JR.at !== RR.length) throw new Error(`msgpack: ${RR.length-JR.at} bytes after the value`);
      return GR
    }
    class uR {
      constructor(RR) {
        this.bytes = RR, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(RR.buffer, RR.byteOffset, RR.byteLength)
      }
      value() {
        const RR = this.u8();
        if (RR <= 127) return RR;
        if (RR >= 224) return RR - 256;
        if (RR >= 128 && RR <= 143) return this.map(15 & RR);
        if (RR >= 144 && RR <= 159) return this.array(15 & RR);
        if (RR >= 160 && RR <= 191) return this.str(31 & RR);
        switch (RR) {
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
            throw new Error(`msgpack: unknown byte 0x${RR.toString(16)} at ${this.at-1}`)
        }
      }
      take(RR) {
        const JR = this.at;
        if (JR + RR > this.bytes.length) throw new Error(`msgpack: ${RR} bytes past the end at ${JR}`);
        return this.at = JR + RR, JR
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
      int64(RR) {
        const JR = this.take(8);
        return RR ? this.view.getBigInt64(JR, !1) : this.view.getBigUint64(JR, !1)
      }
      str(RR) {
        const JR = this.take(RR),
          GR = this.bytes;
        if (RR < 16) {
          let tR = "";
          for (let uR = JR; uR < JR + RR; uR++) {
            const ZR = GR[uR];
            if (ZR >= 128) return yR.decode(GR.subarray(JR, JR + RR));
            tR += String.fromCharCode(ZR)
          }
          return tR
        }
        return yR.decode(GR.subarray(JR, JR + RR))
      }
      bin(RR) {
        const JR = this.take(RR);
        return this.bytes.subarray(JR, JR + RR)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(RR) {
        this.enter();
        const JR = [];
        for (let GR = 0; GR < RR; GR++) JR.push(this.value());
        return this.depth--, JR
      }
      map(RR) {
        this.enter();
        const JR = {};
        for (let GR = 0; GR < RR; GR++) {
          const RR = this.value(),
            GR = this.value();
          JR["__proto__" === RR ? "__proto_" : String(RR)] = GR
        }
        return this.depth--, JR
      }
      ext(RR) {
        const JR = this.view.getInt8(this.take(1)),
          GR = this.take(RR);
        if (0 !== JR) {
          if (-1 === JR) {
            if (1 === RR) return new Date(NaN);
            if (4 === RR) return new Date(1e3 * this.view.getUint32(GR, !1));
            if (8 === RR) {
              const RR = this.view.getUint32(GR, !1),
                JR = RR >>> 2,
                yR = 4294967296 * (3 & RR) + this.view.getUint32(GR + 4, !1);
              return new Date(1e3 * yR + JR / 1e6)
            }
            if (12 === RR) {
              const RR = this.view.getUint32(GR, !1),
                JR = 4294967296 * this.view.getInt32(GR + 4, !1) + this.view.getUint32(GR + 8, !1);
              return new Date(1e3 * JR + RR / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${JR} of ${RR} bytes`)
        }
      }
    }
    const ZR = new TextEncoder,
      qR = -(2n ** 63n),
      iR = 2n ** 63n - 1n,
      fR = 2n ** 64n - 1n;

    function VR(RR) {
      const JR = new KR;
      return JR.value(RR, 0), JR.bytes()
    }
    class KR {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(RR, JR) {
        if (JR > 512) throw new Error("msgpack: nested too deep");
        switch (typeof RR) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(RR ? 195 : 194);
          case "number":
            return void this.number(RR);
          case "bigint":
            return void this.bigint(RR);
          case "string":
            return void this.string(RR);
          case "object":
            if (null === RR) this.u8(192);
            else if (RR instanceof Uint8Array) this.head(RR.length, 196, -1, 197, 198), this.room(RR.length), this.buf.set(RR, this.at), this.at += RR.length;
            else if (Array.isArray(RR)) {
              this.head(RR.length, 220, 144, 220, 221);
              for (const GR of RR) this.value(GR, JR + 1)
            } else {
              var GR, yR;
              if (Object.getPrototypeOf(RR) !== Object.prototype && null !== Object.getPrototypeOf(RR)) throw new Error(`msgpack: can't encode a ${null!==(GR=null===(yR=RR.constructor)||void 0===yR?void 0:yR.name)&&void 0!==GR?GR:"object"}`);
              {
                const GR = Object.keys(RR);
                this.head(GR.length, 222, 128, 222, 223);
                for (const yR of GR) this.string(yR), this.value(RR[yR], JR + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof RR)
        }
      }
      number(RR) {
        Number.isInteger(RR) && RR >= -2147483648 && RR <= 4294967295 ? RR >= 0 ? RR < 128 ? this.u8(RR) : RR < 256 ? (this.u8(204), this.u8(RR)) : RR < 65536 ? (this.u8(205), this.u16(RR)) : (this.u8(206), this.u32(RR)) : RR >= -32 ? this.u8(RR + 256) : RR >= -128 ? (this.u8(208), this.u8(RR + 256)) : RR >= -32768 ? (this.u8(209), this.u16(RR + 65536)) : (this.u8(210), this.u32(RR >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, RR, !1), this.at += 8)
      }
      bigint(RR) {
        const JR = RR >= qR && RR <= iR;
        if (!JR && (RR < 0n || RR > fR)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(JR ? 211 : 207), this.room(8), JR ? this.view.setBigInt64(this.at, RR, !1) : this.view.setBigUint64(this.at, RR, !1), this.at += 8
      }
      string(RR) {
        const JR = ZR.encode(RR);
        this.head(JR.length, 217, 160, 218, 219), this.room(JR.length), this.buf.set(JR, this.at), this.at += JR.length
      }
      head(RR, JR, GR, yR, tR) {
        GR >= 0 && RR < (160 === GR ? 32 : 16) ? this.u8(GR | RR) : JR !== yR && RR < 256 ? (this.u8(JR), this.u8(RR)) : RR < 65536 ? (this.u8(yR), this.u16(RR)) : (this.u8(tR), this.u32(RR))
      }
      room(RR) {
        if (this.at + RR <= this.buf.length) return;
        let JR = 2 * this.buf.length;
        for (; JR < this.at + RR;) JR *= 2;
        const GR = new Uint8Array(JR);
        GR.set(this.buf.subarray(0, this.at)), this.buf = GR, this.view = new DataView(GR.buffer)
      }
      u8(RR) {
        this.room(1), this.buf[this.at++] = RR
      }
      u16(RR) {
        this.room(2), this.view.setUint16(this.at, RR, !1), this.at += 2
      }
      u32(RR) {
        this.room(4), this.view.setUint32(this.at, RR, !1), this.at += 4
      }
    }
  },
  42157: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR
    });
    var yR = GR(42137);
    const tR = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class uR {
      constructor(RR) {
        this.buf = RR, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let RR = this.u8(),
          JR = 127 & RR,
          GR = 128;
        for (; 128 & RR;) {
          if (GR > 2 ** 63) throw new RangeError("avro: varint too long");
          RR = this.u8(), JR += (127 & RR) * GR, GR *= 128
        }
        return JR % 2 === 1 ? -(JR + 1) / 2 : JR / 2
      }
      float() {
        const RR = this.take(4);
        return this.floats().getFloat32(RR, !0)
      }
      double() {
        const RR = this.take(8);
        return this.floats().getFloat64(RR, !0)
      }
      str() {
        const RR = this.size(),
          JR = this.take(RR),
          GR = JR + RR;
        if (RR <= 32) {
          let RR = "";
          for (let yR = JR; yR < GR; yR++) {
            const uR = this.buf[yR];
            if (uR >= 128) return tR.decode(this.buf.subarray(JR, GR));
            RR += String.fromCharCode(uR)
          }
          return RR
        }
        return tR.decode(this.buf.subarray(JR, GR))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(RR) {
        const JR = this.take(RR);
        return this.buf.slice(JR, JR + RR)
      }
      index(RR) {
        const JR = this.long();
        if (!(JR >= 0 && JR < RR)) throw new RangeError(`avro: index ${JR} of ${RR}`);
        return JR
      }
      qK(RR) {
        const JR = [];
        for (let GR = this.long(); 0 !== GR; GR = this.long()) {
          GR = this.block(GR);
          for (let yR = 0; yR < GR; yR++) JR.push(RR(this))
        }
        return JR
      }
      map(RR) {
        const JR = {};
        for (let GR = this.long(); 0 !== GR; GR = this.long()) {
          GR = this.block(GR);
          for (let yR = 0; yR < GR; yR++) {
            JR[this.str()] = RR(this)
          }
        }
        return JR
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(RR) {
        let JR = RR;
        if (JR < 0 && (JR = -JR, this.long()), JR > this.buf.length - this.at) throw new RangeError(`avro: block of ${JR} items in ${this.buf.length-this.at} bytes`);
        return JR
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const RR = this.long();
        if (RR < 0) throw new RangeError(`avro: length ${RR}`);
        return RR
      }
      u8() {
        const RR = this.buf[this.at];
        if (void 0 === RR) throw new RangeError("avro: truncated");
        return this.at++, RR
      }
      take(RR) {
        const JR = this.at;
        if (RR > this.buf.length - JR) throw new RangeError("avro: truncated");
        return this.at = JR + RR, JR
      }
    }

    function ZR(RR, JR) {
      const GR = new uR(JR),
        tR = (0, yR.sb)(RR, GR);
      return GR.end(), tR
    }
  },
  42137: (RR, JR, GR) => {
    GR.d(JR, {
      D: () => gR,
      F: () => tR,
      I: () => qR,
      M: () => rR,
      Q: () => lR,
      R: () => BR,
      V: () => XR,
      Y: () => VR,
      _: () => KR,
      b: () => CR,
      bb: () => pR,
      d: () => LR,
      fb: () => eR,
      g: () => nR,
      h: () => UR,
      jb: () => WR,
      k: () => MR,
      kb: () => aR,
      l: () => yR,
      n: () => uR,
      ob: () => iR,
      r: () => AR,
      s: () => wR,
      sb: () => bR,
      w: () => fR,
      z: () => ZR
    });
    const yR = 2,
      tR = 12,
      uR = 27,
      ZR = 40,
      qR = 52,
      iR = 59,
      fR = 63,
      VR = 83,
      KR = 84,
      wR = 89,
      rR = 91,
      eR = 93,
      aR = 94,
      LR = 95,
      nR = 97,
      UR = 101,
      WR = 102,
      AR = 73,
      CR = 16,
      XR = 86,
      MR = 60,
      BR = 17,
      lR = 56,
      pR = 100,
      gR = 81;

    function bR(RR, JR) {
      switch (RR) {
        case yR:
          return function(RR) {
            return {
              su: QR(RR),
              hu: RR.float(),
              RZ: RR.long()
            }
          }(JR);
        case tR:
          return function(RR) {
            return {
              au: DR(RR),
              Lu: DR(RR)
            }
          }(JR);
        case uR:
          return function(RR) {
            return {
              vJ: RR.bool(),
              OJ: DR(RR)
            }
          }(JR);
        case ZR:
          return JR.str();
        case qR:
          return function(RR) {
            return {
              id: RR.long(),
              Xu: ZJ(RR)
            }
          }(JR);
        case iR:
          return function(RR) {
            return {
              pJ: DR(RR),
              gJ: iJ(RR)
            }
          }(JR);
        case fR:
          return JR.str();
        case VR:
        case KR:
          return JR.long();
        case wR:
          return function(RR) {
            return {
              Wu: RR.long(),
              Au: RR.bool(),
              Cu: RR.float()
            }
          }(JR);
        case rR:
          return JR.long();
        case eR:
          return function(RR) {
            return {
              xJ: RR.bool(),
              NJ: KJ(RR)
            }
          }(JR);
        case aR:
          return function(RR) {
            return {
              id: RR.str(),
              position: VJ(RR),
              dJ: wJ(RR),
              style: mR(RR),
              QJ: RR.bool()
            }
          }(JR);
        case LR:
          return function(RR) {
            return {
              id: DR(RR)
            }
          }(JR);
        case nR:
          return function(RR) {
            return {
              bG: RR.long(),
              vG: RR.str(),
              OG: tJ(RR),
              xG: tJ(RR),
              NG: DR(RR),
              DG: DR(RR),
              HG: DR(RR),
              oG: DR(RR),
              cG: DR(RR),
              PG: tJ(RR),
              IG: tJ(RR),
              mG: DR(RR),
              zG: DR(RR),
              SG: DR(RR)
            }
          }(JR);
        case UR:
          return JR.str();
        case WR:
          return JR.long();
        case AR:
          return function(RR) {
            return {
              lt: RR.long(),
              gt: RR.str(),
              bt: RR.float()
            }
          }(JR);
        case CR:
          return function(RR) {
            return {
              Yt: RR.bool(),
              kt: DR(RR),
              Qt: RR.str(),
              Ft: eJ(RR),
              Tt: eJ(RR),
              st: RR.bool(),
              ht: RR.long(),
              Ru: aJ(RR)
            }
          }(JR);
        case XR:
          return function(RR) {
            return {
              tJ: DR(RR)
            }
          }(JR);
        case MR:
          return function(RR) {
            return {
              tZ: RR.str(),
              uZ: RR.str(),
              ZZ: LJ(RR),
              qZ: RR.str(),
              iZ: sR(RR),
              fZ: RR.float()
            }
          }(JR);
        case BR:
          return function(RR) {
            return {
              tZ: RR.str(),
              uZ: RR.str(),
              ZZ: LJ(RR)
            }
          }(JR);
        case lR:
          return function(RR) {
            return RR.qK(nJ)
          }(JR);
        case pR:
          return function(RR) {
            return {
              vt: WJ(RR),
              Ht: jR(RR)
            }
          }(JR);
        case gR:
          return function(RR) {
            return {
              ty: RR.bool(),
              uy: DR(RR),
              Zy: CJ(RR),
              iy: cJ(RR)
            }
          }(JR);
        default:
          throw new Error(`no reader for to-client message ${RR}`)
      }
    }

    function vR(RR) {
      return {
        entityName: RR.str()
      }
    }

    function OR(RR) {
      const JR = RR.index(4);
      return 0 === JR ? RR.str() : 1 === JR ? RR.long() : 2 === JR ? RR.bool() : vR(RR)
    }

    function xR(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return RR.map(OR)
      }(RR)
    }

    function NR(RR) {
      return {
        translationKey: RR.str(),
        params: xR(RR)
      }
    }

    function DR(RR) {
      return 0 === RR.index(2) ? null : RR.str()
    }

    function HR(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return {
          color: DR(RR),
          colour: DR(RR),
          fontSize: DR(RR)
        }
      }(RR)
    }

    function oR(RR) {
      return {
        icon: RR.str(),
        style: HR(RR)
      }
    }

    function cR(RR) {
      const JR = RR.index(3);
      return 0 === JR ? {
        string: RR.str()
      } : 1 === JR ? {
        styledEntityName: vR(RR)
      } : {
        styledTranslatedText: NR(RR)
      }
    }

    function PR(RR) {
      const JR = RR.index(3);
      return 0 === JR ? null : 1 === JR ? RR.str() : RR.long()
    }

    function IR(RR) {
      return 0 === RR.index(2) ? null : RR.float()
    }

    function mR(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return {
          color: DR(RR),
          colour: DR(RR),
          fontWeight: PR(RR),
          fontStyle: DR(RR),
          fontSize: DR(RR),
          opacity: IR(RR)
        }
      }(RR)
    }

    function zR(RR) {
      return {
        str: cR(RR),
        style: mR(RR),
        clickableUrl: DR(RR)
      }
    }

    function SR(RR) {
      return RR.str()
    }

    function jR(RR) {
      return RR.qK(SR)
    }

    function dR(RR) {
      return 0 === RR.index(2) ? null : jR(RR)
    }

    function ER(RR) {
      return {
        type: RR.str(),
        progress: RR.float(),
        width: DR(RR),
        height: DR(RR),
        colours: dR(RR),
        backgroundColour: DR(RR)
      }
    }

    function YR(RR) {
      return {
        type: RR.str(),
        action: RR.str(),
        style: mR(RR)
      }
    }

    function kR(RR) {
      const JR = RR.index(7);
      return 0 === JR ? {
        string: RR.str()
      } : 1 === JR ? {
        entityName: vR(RR)
      } : 2 === JR ? {
        translatedText: NR(RR)
      } : 3 === JR ? {
        styledIcon: oR(RR)
      } : 4 === JR ? {
        EJ: zR(RR)
      } : 5 === JR ? {
        styledProgressBar: ER(RR)
      } : {
        styledKeyBinding: YR(RR)
      }
    }

    function QR(RR) {
      return RR.qK(kR)
    }
    const FR = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function TR(RR) {
      return FR[RR.index(5)]
    }

    function sR(RR) {
      return 0 === RR.index(2) ? null : RR.double()
    }

    function hR(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return {
          pu: sR(RR),
          gu: RR.double(),
          bu: RR.double(),
          vu: RR.bool(),
          description: QR(RR),
          Ou: RR.str(),
          scale: sR(RR),
          rotation: sR(RR)
        }
      }(RR)
    }

    function RJ(RR) {
      return 0 === RR.index(2) ? null : RR.bool()
    }

    function JJ(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return {
          Du: RR.double(),
          icon: RR.str(),
          label: QR(RR),
          Hu: RR.bool(),
          scale: sR(RR),
          rotation: sR(RR),
          ou: RJ(RR)
        }
      }(RR)
    }

    function GJ(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return {
          pu: sR(RR),
          Pu: RR.double(),
          Iu: RR.double(),
          mu: RR.double(),
          gravity: RR.double(),
          zu: RR.double(),
          Su: RR.double(),
          ju: RR.double(),
          vu: RR.bool(),
          description: QR(RR),
          icon: DR(RR)
        }
      }(RR)
    }

    function yJ(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return {
          speed: RR.double(),
          Eu: RR.double(),
          label: QR(RR),
          icon: DR(RR),
          scale: sR(RR),
          rotation: sR(RR)
        }
      }(RR)
    }

    function tJ(RR) {
      return 0 === RR.index(2) ? null : RR.long()
    }

    function uJ(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return {
          ku: RR.long(),
          Qu: RR.double(),
          Fu: RR.double(),
          Tu: tJ(RR),
          label: QR(RR),
          icon: DR(RR)
        }
      }(RR)
    }

    function ZJ(RR) {
      return {
        type: TR(RR),
        progressBar: hR(RR),
        timedClick: JJ(RR),
        gravityBar: GJ(RR),
        precisionBar: yJ(RR),
        rhythmClick: uJ(RR)
      }
    }
    const qJ = ["playerGone", "rateLimited"];

    function iJ(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return qJ[RR.index(2)]
      }(RR)
    }

    function fJ(RR) {
      return RR.float()
    }

    function VJ(RR) {
      return RR.qK(fJ)
    }

    function KJ(RR) {
      return 0 === RR.index(2) ? null : VJ(RR)
    }

    function wJ(RR) {
      return 0 === RR.index(2) ? null : QR(RR)
    }

    function rJ(RR) {
      return RR.long()
    }

    function eJ(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return RR.qK(rJ)
      }(RR)
    }

    function aJ(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return {
          GG: RR.str(),
          iG: RR.long()
        }
      }(RR)
    }

    function LJ(RR) {
      const JR = RR.index(3);
      return 0 === JR ? null : 1 === JR ? RR.str() : NR(RR)
    }

    function nJ(RR) {
      return {
        Zt: RR.str(),
        ft: RR.str(),
        Vt: RR.str()
      }
    }

    function UJ(RR) {
      return {
        Ot: RR.str(),
        xt: DR(RR),
        Nt: DR(RR),
        Dt: jR(RR)
      }
    }

    function WJ(RR) {
      return RR.qK(UJ)
    }

    function AJ(RR) {
      return {
        qy: RR.str(),
        x: RR.long(),
        y: RR.long(),
        z: RR.long()
      }
    }

    function CJ(RR) {
      return RR.qK(AJ)
    }

    function XJ(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return {
          Ny: RR.float(),
          Dy: RR.long(),
          Hy: RR.long()
        }
      }(RR)
    }

    function MJ(RR) {
      return {
        blockName: RR.str(),
        My: RR.bool(),
        By: RR.bool(),
        ly: RR.bool(),
        py: RR.float(),
        gy: RR.float(),
        vy: RR.long(),
        Oy: XJ(RR)
      }
    }

    function BJ(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return RR.qK(MJ)
      }(RR)
    }

    function lJ(RR) {
      return {
        Ay: RR.str(),
        Cy: BJ(RR)
      }
    }

    function pJ(RR) {
      return {
        blockName: RR.str(),
        frequency: RR.float()
      }
    }

    function gJ(RR) {
      return RR.qK(pJ)
    }

    function bJ(RR) {
      return {
        Iy: RR.str(),
        my: RR.str(),
        frequency: RR.float(),
        zy: gJ(RR)
      }
    }

    function vJ(RR) {
      return RR.qK(bJ)
    }

    function OJ(RR) {
      return {
        blockName: RR.str(),
        radius: RR.long(),
        Yy: RR.long(),
        wy: RR.long(),
        ey: RR.long(),
        ky: RR.float()
      }
    }

    function xJ(RR) {
      return RR.qK(OJ)
    }

    function NJ(RR) {
      return {
        wy: RR.long(),
        ey: RR.long(),
        Ly: RR.long(),
        ny: RR.bool(),
        Uy: lJ(RR),
        oy: vJ(RR),
        jy: xJ(RR)
      }
    }

    function DJ(RR) {
      return RR.qK(NJ)
    }

    function HJ(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return {
          name: RR.str(),
          hy: DR(RR)
        }
      }(RR)
    }

    function oJ(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return {
          terrain: HJ(RR),
          Rt: xJ(RR)
        }
      }(RR)
    }

    function cJ(RR) {
      return 0 === RR.index(2) ? null : function(RR) {
        return {
          layers: DJ(RR),
          Qy: oJ(RR)
        }
      }(RR)
    }
  },
  42126: (RR, JR, GR) => {
    GR.d(JR, {
      D: () => MR,
      F: () => vR,
      I: () => AR,
      M: () => CR,
      N: () => LR,
      O: () => pR,
      Q: () => xR,
      T: () => eR,
      U: () => DR,
      Y: () => UR,
      Z: () => nR,
      bb: () => WR,
      cb: () => XR,
      d: () => tR,
      g: () => NR,
      k: () => OR,
      m: () => rR,
      q: () => aR,
      s: () => bR,
      w: () => BR,
      y: () => gR,
      z: () => lR
    });
    var yR = GR(2989);
    const tR = {
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

    function uR(RR, JR) {
      return !ArrayBuffer.isView(RR) || RR instanceof DataView ? Array.isArray(RR) ? RR.map((RR => JR(RR))) : RR : Array.from(RR, (RR => JR(RR)))
    }

    function ZR(RR) {
      if ("string" !== typeof RR) return RR;
      for (let JR = 0; JR < RR.length; JR++) {
        const GR = RR.charCodeAt(JR);
        if (GR >= 55296 && GR <= 57343) return iR.decode(qR.encode(RR))
      }
      return RR
    }
    const qR = new TextEncoder,
      iR = new TextDecoder;

    function fR(RR) {
      return RR
    }
    let VR;

    function KR(RR) {
      return null === RR || "object" !== typeof RR ? RR : [ZR(RR.policy), ZR(RR.Kq)]
    }

    function wR(RR) {
      return null === RR || "object" !== typeof RR ? RR : [uR(RR.Ft, fR), uR(RR.Ji, fR)]
    }

    function rR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.LZ), ZR(JR.nZ)];
      var JR
    }

    function eR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [JR.id, JR.wV];
      var JR
    }

    function aR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [JR.bG, ZR(JR.vG), JR.OG, ZR(JR.DG), JR.PG, JR.IG, JR.rZ, ZR(JR.eZ), ZR(JR.aZ)];
      var JR
    }

    function LR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [uR(JR.fq, fR), JR.Vq];
      var JR
    }

    function nR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [uR(JR.CV, (RR => ZR(RR))), ZR(JR.XV), JR.MV];
      var JR
    }

    function UR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [uR(JR.ti, fR), ZR(JR.ui), ZR(JR.Zi), JR.qi];
      var JR
    }

    function WR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.ft), ZR(JR.Vt)];
      var JR
    }

    function AR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.wq)];
      var JR
    }

    function CR(RR) {
      return ZR(RR)
    }

    function XR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.PV), ZR(JR.IV), ZR(JR.policy), ZR(JR.Kq), uR(JR.mV, (RR => ZR(RR)))];
      var JR
    }

    function MR(RR) {
      return KR(RR)
    }

    function BR(RR) {
      return KR(RR)
    }

    function lR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.fV)];
      var JR
    }

    function pR(RR) {
      return RR
    }

    function gR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.WV), ZR(JR.AV)];
      var JR
    }

    function bR(RR) {
      return ZR(RR)
    }

    function vR(RR) {
      return wR(RR)
    }

    function OR(RR) {
      return wR(RR)
    }

    function xR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [ZR(JR.GV)];
      var JR
    }

    function NR(RR) {
      return (VR ??= (0, yR.e)().map((RR => RR.name)), VR).map((JR => {
        return "string" === typeof(GR = RR[JR]) ? ZR(GR) : uR(GR, fR);
        var GR
      }))
    }

    function DR(RR) {
      return null === (JR = RR) || "object" !== typeof JR ? JR : [JR.XZ, JR.MZ, JR.BZ];
      var JR
    }
  },
  5953: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR,
      d: () => uR
    });
    var yR = GR(5898);
    const tR = "Air",
      uR = Object.freeze(new yR.h(tR, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40522: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR,
      d: () => qR
    });
    var yR = GR(377),
      tR = GR(5268);
    const uR = new Set(tR.n),
      ZR = new Map;

    function qR(RR, JR) {
      let GR = ZR.get(JR);
      void 0 === GR && (GR = new Map, ZR.set(JR, GR));
      let tR = GR.get(RR);
      return void 0 === tR && (tR = `${RR}${(0,yR.u)(JR)}`, GR.set(RR, tR)), tR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);