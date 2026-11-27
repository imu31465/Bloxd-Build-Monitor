export const id = 127;
export const ids = [127];
export const modules = {
  42479: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr,
      d: () => Ir,
      f: () => jr
    });
    var Zr = Qr(42485),
      Wr = Qr(5610),
      ar = Qr(42491);

    function jr(rr) {
      return rr.payloadKind === Wr.nc.Msgpack ? (0, Zr.d)(rr.payload) : void 0
    }

    function Ir(rr, Sr) {
      if (Sr.payloadKind === Wr.nc.Bytes || Sr.payloadKind === Wr.nc.MsgpackBin) return (0, ar.b)(rr, Sr.payload)
    }

    function fr(rr) {
      return null !== rr && "object" === typeof rr
    }
  },
  42495: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => xr,
      d: () => mr,
      f: () => Nr,
      j: () => pr,
      l: () => hr
    });
    var Zr = Qr(5610),
      Wr = Qr(42500);
    const ar = new Map,
      jr = new Set,
      Ir = new Set;
    let fr = 0,
      Er = 0;

    function pr(rr, Sr) {
      let Qr = ar.get(rr);
      return Qr || (Qr = new Set, ar.set(rr, Qr)), Qr.add(Sr), () => {
        Qr.delete(Sr)
      }
    }

    function xr() {
      return 0 !== fr
    }

    function mr(rr) {
      return jr.add(rr), () => {
        jr.delete(rr)
      }
    }

    function Nr(rr) {
      return Ir.add(rr), () => {
        Ir.delete(rr)
      }
    }
    const Ur = "A raw message listener threw";

    function tr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jr;
      for (const Zr of Sr) try {
        Zr()
      } catch (Qr) {
        rr ? (0, Wr.k)(Qr, Ur) : console.error(Ur, Qr)
      }
    }
    const hr = {
      fire: function(rr) {
        if ("connection" === rr.type) {
          const Sr = rr.phase === Zr.G.Activated && rr.conn !== fr && rr.conn > Er,
            Qr = (rr.phase === Zr.G.Left || rr.phase === Zr.G.Closed) && rr.conn === fr;
          return void(Sr || Qr ? (fr = Sr ? rr.conn : 0, tr(!0)) : rr.phase === Zr.G.Resumed && 0 !== fr && rr.conn > Er && (fr = rr.conn, tr(!0, Ir)))
        }
        const Sr = ar.get(rr.xj);
        if (Sr && rr.conn === fr && 0 !== fr)
          for (const Zr of Sr) try {
            Zr(rr)
          } catch (Qr) {
            (0, Wr.k)(Qr, Ur)
          }
      },
      close: function(rr) {
        Er = Math.max(Er, rr, fr), 0 !== fr && (fr = 0, tr(!1))
      }
    }
  },
  42472: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er,
      g: () => fr,
      j: () => Ir
    });
    var Zr = Qr(1321),
      Wr = Qr(42438);
    const ar = new TextDecoder,
      jr = new TextEncoder;

    function Ir(rr, Sr) {
      const Qr = rr.queries.entityName(Sr);
      if (Qr === Wr.uc) return;
      const jr = rr.memoryData(rr.scratch(), 4 + Qr, 4, "entity_name's answer");
      if (!jr) return;
      const Ir = jr.getUint32(0, !0),
        fr = ar.decode(new Uint8Array(jr.buffer, jr.byteOffset + 4, Qr));
      return (0, Zr.e)(fr, !1, Ir === Wr.Gd ? null : Ir)
    }

    function fr(rr, Sr, Qr) {
      const Zr = jr.encode(Qr);
      if (Zr.length > Wr.ob) return !1;
      const ar = rr.memoryView(Uint8Array, rr.scratch(), Zr.length, "has_effect's name");
      return !!ar && (ar.set(Zr), 1 === rr.queries.hasEffect(Sr, Zr.length))
    }

    function Er(rr, Sr, Qr, Zr) {
      const jr = rr.queries.blockData(Sr, Qr, Zr);
      if (jr === Wr.uc) return;
      const Ir = rr.memoryView(Uint8Array, rr.scratch(), jr, "block_data's answer");
      return Ir ? JSON.parse(ar.decode(Ir)) : void 0
    }
  },
  42485: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr,
      e: () => pr
    });
    const Zr = new TextDecoder;

    function Wr(rr) {
      const Sr = new ar(rr),
        Qr = Sr.value();
      if (Sr.at !== rr.length) throw new Error(`msgpack: ${rr.length-Sr.at} bytes after the value`);
      return Qr
    }
    class ar {
      constructor(rr) {
        this.bytes = rr, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(rr.buffer, rr.byteOffset, rr.byteLength)
      }
      value() {
        const rr = this.u8();
        if (rr <= 127) return rr;
        if (rr >= 224) return rr - 256;
        if (rr >= 128 && rr <= 143) return this.map(15 & rr);
        if (rr >= 144 && rr <= 159) return this.array(15 & rr);
        if (rr >= 160 && rr <= 191) return this.str(31 & rr);
        switch (rr) {
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
            throw new Error(`msgpack: unknown byte 0x${rr.toString(16)} at ${this.at-1}`)
        }
      }
      take(rr) {
        const Sr = this.at;
        if (Sr + rr > this.bytes.length) throw new Error(`msgpack: ${rr} bytes past the end at ${Sr}`);
        return this.at = Sr + rr, Sr
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
      int64(rr) {
        const Sr = this.take(8);
        return rr ? this.view.getBigInt64(Sr, !1) : this.view.getBigUint64(Sr, !1)
      }
      str(rr) {
        const Sr = this.take(rr),
          Qr = this.bytes;
        if (rr < 16) {
          let Wr = "";
          for (let ar = Sr; ar < Sr + rr; ar++) {
            const jr = Qr[ar];
            if (jr >= 128) return Zr.decode(Qr.subarray(Sr, Sr + rr));
            Wr += String.fromCharCode(jr)
          }
          return Wr
        }
        return Zr.decode(Qr.subarray(Sr, Sr + rr))
      }
      bin(rr) {
        const Sr = this.take(rr);
        return this.bytes.subarray(Sr, Sr + rr)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(rr) {
        this.enter();
        const Sr = [];
        for (let Qr = 0; Qr < rr; Qr++) Sr.push(this.value());
        return this.depth--, Sr
      }
      map(rr) {
        this.enter();
        const Sr = {};
        for (let Qr = 0; Qr < rr; Qr++) {
          const rr = this.value(),
            Qr = this.value();
          Sr["__proto__" === rr ? "__proto_" : String(rr)] = Qr
        }
        return this.depth--, Sr
      }
      ext(rr) {
        const Sr = this.view.getInt8(this.take(1)),
          Qr = this.take(rr);
        if (0 !== Sr) {
          if (-1 === Sr) {
            if (1 === rr) return new Date(NaN);
            if (4 === rr) return new Date(1e3 * this.view.getUint32(Qr, !1));
            if (8 === rr) {
              const rr = this.view.getUint32(Qr, !1),
                Sr = rr >>> 2,
                Zr = 4294967296 * (3 & rr) + this.view.getUint32(Qr + 4, !1);
              return new Date(1e3 * Zr + Sr / 1e6)
            }
            if (12 === rr) {
              const rr = this.view.getUint32(Qr, !1),
                Sr = 4294967296 * this.view.getInt32(Qr + 4, !1) + this.view.getUint32(Qr + 8, !1);
              return new Date(1e3 * Sr + rr / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Sr} of ${rr} bytes`)
        }
      }
    }
    const jr = new TextEncoder,
      Ir = -(2n ** 63n),
      fr = 2n ** 63n - 1n,
      Er = 2n ** 64n - 1n;

    function pr(rr) {
      const Sr = new xr;
      return Sr.value(rr, 0), Sr.bytes()
    }
    class xr {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(rr, Sr) {
        if (Sr > 512) throw new Error("msgpack: nested too deep");
        switch (typeof rr) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(rr ? 195 : 194);
          case "number":
            return void this.number(rr);
          case "bigint":
            return void this.bigint(rr);
          case "string":
            return void this.string(rr);
          case "object":
            if (null === rr) this.u8(192);
            else if (rr instanceof Uint8Array) this.head(rr.length, 196, -1, 197, 198), this.room(rr.length), this.buf.set(rr, this.at), this.at += rr.length;
            else if (Array.isArray(rr)) {
              this.head(rr.length, 220, 144, 220, 221);
              for (const Qr of rr) this.value(Qr, Sr + 1)
            } else {
              var Qr, Zr;
              if (Object.getPrototypeOf(rr) !== Object.prototype && null !== Object.getPrototypeOf(rr)) throw new Error(`msgpack: can't encode a ${null!==(Qr=null===(Zr=rr.constructor)||void 0===Zr?void 0:Zr.name)&&void 0!==Qr?Qr:"object"}`);
              {
                const Qr = Object.keys(rr);
                this.head(Qr.length, 222, 128, 222, 223);
                for (const Zr of Qr) this.string(Zr), this.value(rr[Zr], Sr + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof rr)
        }
      }
      number(rr) {
        Number.isInteger(rr) && rr >= -2147483648 && rr <= 4294967295 ? rr >= 0 ? rr < 128 ? this.u8(rr) : rr < 256 ? (this.u8(204), this.u8(rr)) : rr < 65536 ? (this.u8(205), this.u16(rr)) : (this.u8(206), this.u32(rr)) : rr >= -32 ? this.u8(rr + 256) : rr >= -128 ? (this.u8(208), this.u8(rr + 256)) : rr >= -32768 ? (this.u8(209), this.u16(rr + 65536)) : (this.u8(210), this.u32(rr >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, rr, !1), this.at += 8)
      }
      bigint(rr) {
        const Sr = rr >= Ir && rr <= fr;
        if (!Sr && (rr < 0n || rr > Er)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Sr ? 211 : 207), this.room(8), Sr ? this.view.setBigInt64(this.at, rr, !1) : this.view.setBigUint64(this.at, rr, !1), this.at += 8
      }
      string(rr) {
        const Sr = jr.encode(rr);
        this.head(Sr.length, 217, 160, 218, 219), this.room(Sr.length), this.buf.set(Sr, this.at), this.at += Sr.length
      }
      head(rr, Sr, Qr, Zr, Wr) {
        Qr >= 0 && rr < (160 === Qr ? 32 : 16) ? this.u8(Qr | rr) : Sr !== Zr && rr < 256 ? (this.u8(Sr), this.u8(rr)) : rr < 65536 ? (this.u8(Zr), this.u16(rr)) : (this.u8(Wr), this.u32(rr))
      }
      room(rr) {
        if (this.at + rr <= this.buf.length) return;
        let Sr = 2 * this.buf.length;
        for (; Sr < this.at + rr;) Sr *= 2;
        const Qr = new Uint8Array(Sr);
        Qr.set(this.buf.subarray(0, this.at)), this.buf = Qr, this.view = new DataView(Qr.buffer)
      }
      u8(rr) {
        this.room(1), this.buf[this.at++] = rr
      }
      u16(rr) {
        this.room(2), this.view.setUint16(this.at, rr, !1), this.at += 2
      }
      u32(rr) {
        this.room(4), this.view.setUint32(this.at, rr, !1), this.at += 4
      }
    }
  },
  42491: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(42477);
    const Wr = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class ar {
      constructor(rr) {
        this.buf = rr, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let rr = this.u8(),
          Sr = 127 & rr,
          Qr = 128;
        for (; 128 & rr;) {
          if (Qr > 2 ** 63) throw new RangeError("avro: varint too long");
          rr = this.u8(), Sr += (127 & rr) * Qr, Qr *= 128
        }
        return Sr % 2 === 1 ? -(Sr + 1) / 2 : Sr / 2
      }
      float() {
        const rr = this.take(4);
        return this.floats().getFloat32(rr, !0)
      }
      double() {
        const rr = this.take(8);
        return this.floats().getFloat64(rr, !0)
      }
      str() {
        const rr = this.size(),
          Sr = this.take(rr),
          Qr = Sr + rr;
        if (rr <= 32) {
          let rr = "";
          for (let Zr = Sr; Zr < Qr; Zr++) {
            const ar = this.buf[Zr];
            if (ar >= 128) return Wr.decode(this.buf.subarray(Sr, Qr));
            rr += String.fromCharCode(ar)
          }
          return rr
        }
        return Wr.decode(this.buf.subarray(Sr, Qr))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(rr) {
        const Sr = this.take(rr);
        return this.buf.slice(Sr, Sr + rr)
      }
      index(rr) {
        const Sr = this.long();
        if (!(Sr >= 0 && Sr < rr)) throw new RangeError(`avro: index ${Sr} of ${rr}`);
        return Sr
      }
      Zx(rr) {
        const Sr = [];
        for (let Qr = this.long(); 0 !== Qr; Qr = this.long()) {
          Qr = this.block(Qr);
          for (let Zr = 0; Zr < Qr; Zr++) Sr.push(rr(this))
        }
        return Sr
      }
      map(rr) {
        const Sr = {};
        for (let Qr = this.long(); 0 !== Qr; Qr = this.long()) {
          Qr = this.block(Qr);
          for (let Zr = 0; Zr < Qr; Zr++) {
            Sr[this.str()] = rr(this)
          }
        }
        return Sr
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(rr) {
        let Sr = rr;
        if (Sr < 0 && (Sr = -Sr, this.long()), Sr > this.buf.length - this.at) throw new RangeError(`avro: block of ${Sr} items in ${this.buf.length-this.at} bytes`);
        return Sr
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const rr = this.long();
        if (rr < 0) throw new RangeError(`avro: length ${rr}`);
        return rr
      }
      u8() {
        const rr = this.buf[this.at];
        if (void 0 === rr) throw new RangeError("avro: truncated");
        return this.at++, rr
      }
      take(rr) {
        const Sr = this.at;
        if (rr > this.buf.length - Sr) throw new RangeError("avro: truncated");
        return this.at = Sr + rr, Sr
      }
    }

    function jr(rr, Sr) {
      const Qr = new ar(Sr),
        Wr = (0, Zr.mb)(rr, Qr);
      return Qr.end(), Wr
    }
  },
  42477: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => jr,
      D: () => Lr,
      E: () => Wr,
      F: () => Ir,
      I: () => Nr,
      M: () => vr,
      O: () => Tr,
      R: () => yr,
      V: () => pr,
      Z: () => xr,
      _: () => Or,
      cb: () => Ur,
      db: () => nr,
      e: () => Kr,
      f: () => hr,
      gb: () => tr,
      i: () => zr,
      ib: () => fr,
      l: () => Yr,
      m: () => Br,
      mb: () => lr,
      p: () => Zr,
      r: () => ar,
      s: () => er,
      w: () => mr,
      x: () => Er
    });
    const Zr = 2,
      Wr = 12,
      ar = 27,
      jr = 40,
      Ir = 52,
      fr = 59,
      Er = 63,
      pr = 83,
      xr = 84,
      mr = 89,
      Nr = 91,
      Ur = 93,
      tr = 94,
      hr = 95,
      zr = 97,
      Yr = 101,
      nr = 102,
      er = 73,
      Kr = 16,
      yr = 86,
      Br = 60,
      Tr = 17,
      vr = 56,
      Or = 100,
      Lr = 81;

    function lr(rr, Sr) {
      switch (rr) {
        case Zr:
          return function(rr) {
            return {
              oa: Jr(rr),
              ba: rr.float(),
              Ja: rr.long()
            }
          }(Sr);
        case Wr:
          return function(rr) {
            return {
              xa: Rr(rr),
              ma: Rr(rr)
            }
          }(Sr);
        case ar:
          return function(rr) {
            return {
              CS: rr.bool(),
              MS: Rr(rr)
            }
          }(Sr);
        case jr:
          return Sr.str();
        case Ir:
          return function(rr) {
            return {
              id: rr.long(),
              Ya: jS(rr)
            }
          }(Sr);
        case fr:
          return function(rr) {
            return {
              qS: Rr(rr),
              RS: fS(rr)
            }
          }(Sr);
        case Er:
          return Sr.str();
        case pr:
        case xr:
          return Sr.long();
        case mr:
          return function(rr) {
            return {
              ta: rr.long(),
              ha: rr.bool(),
              za: rr.float()
            }
          }(Sr);
        case Nr:
          return Sr.long();
        case Ur:
          return function(rr) {
            return {
              GS: rr.bool(),
              kS: xS(rr)
            }
          }(Sr);
        case tr:
          return function(rr) {
            return {
              id: rr.str(),
              position: pS(rr),
              uS: mS(rr),
              style: Ar(rr),
              ZQ: rr.bool()
            }
          }(Sr);
        case hr:
          return function(rr) {
            return {
              id: Rr(rr)
            }
          }(Sr);
        case zr:
          return function(rr) {
            return {
              GQ: rr.long(),
              kQ: rr.str(),
              AQ: WS(rr),
              VQ: WS(rr),
              iQ: Rr(rr),
              wQ: Rr(rr),
              cQ: Rr(rr),
              FQ: Rr(rr),
              oQ: Rr(rr),
              bQ: WS(rr),
              JQ: WS(rr),
              DQ: Rr(rr),
              dQ: Rr(rr),
              sQ: Rr(rr)
            }
          }(Sr);
        case Yr:
          return Sr.str();
        case nr:
          return Sr.long();
        case er:
          return function(rr) {
            return {
              yW: rr.long(),
              BW: rr.str(),
              TW: rr.float()
            }
          }(Sr);
        case Kr:
          return function(rr) {
            return {
              VW: rr.bool(),
              iW: Rr(rr),
              wW: rr.str(),
              cW: US(rr),
              FW: US(rr),
              oW: rr.bool(),
              bW: rr.long(),
              JW: tS(rr)
            }
          }(Sr);
        case yr:
          return function(rr) {
            return {
              aS: Rr(rr)
            }
          }(Sr);
        case Br:
          return function(rr) {
            return {
              ua: rr.str(),
              rj: rr.str(),
              Sj: hS(rr),
              Qj: rr.str(),
              Zj: sr(rr),
              Wj: rr.float()
            }
          }(Sr);
        case Tr:
          return function(rr) {
            return {
              ua: rr.str(),
              rj: rr.str(),
              Sj: hS(rr)
            }
          }(Sr);
        case vr:
          return function(rr) {
            return rr.Zx(zS)
          }(Sr);
        case Or:
          return function(rr) {
            return {
              vW: nS(rr),
              PW: wr(rr)
            }
          }(Sr);
        case Lr:
          return function(rr) {
            return {
              mZ: rr.bool(),
              NZ: Rr(rr),
              UZ: KS(rr),
              hZ: MS(rr)
            }
          }(Sr);
        default:
          throw new Error(`no reader for to-client message ${rr}`)
      }
    }

    function Xr(rr) {
      return {
        entityName: rr.str()
      }
    }

    function Pr(rr) {
      const Sr = rr.index(4);
      return 0 === Sr ? rr.str() : 1 === Sr ? rr.long() : 2 === Sr ? rr.bool() : Xr(rr)
    }

    function Hr(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return rr.map(Pr)
      }(rr)
    }

    function qr(rr) {
      return {
        translationKey: rr.str(),
        params: Hr(rr)
      }
    }

    function Rr(rr) {
      return 0 === rr.index(2) ? null : rr.str()
    }

    function gr(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return {
          color: Rr(rr),
          colour: Rr(rr),
          fontSize: Rr(rr)
        }
      }(rr)
    }

    function Cr(rr) {
      return {
        icon: rr.str(),
        style: gr(rr)
      }
    }

    function Mr(rr) {
      const Sr = rr.index(3);
      return 0 === Sr ? {
        string: rr.str()
      } : 1 === Sr ? {
        styledEntityName: Xr(rr)
      } : {
        styledTranslatedText: qr(rr)
      }
    }

    function Gr(rr) {
      const Sr = rr.index(3);
      return 0 === Sr ? null : 1 === Sr ? rr.str() : rr.long()
    }

    function kr(rr) {
      return 0 === rr.index(2) ? null : rr.float()
    }

    function Ar(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return {
          color: Rr(rr),
          colour: Rr(rr),
          fontWeight: Gr(rr),
          fontStyle: Rr(rr),
          fontSize: Rr(rr),
          opacity: kr(rr)
        }
      }(rr)
    }

    function Vr(rr) {
      return {
        str: Mr(rr),
        style: Ar(rr),
        clickableUrl: Rr(rr)
      }
    }

    function ir(rr) {
      return rr.str()
    }

    function wr(rr) {
      return rr.Zx(ir)
    }

    function cr(rr) {
      return 0 === rr.index(2) ? null : wr(rr)
    }

    function Fr(rr) {
      return {
        type: rr.str(),
        progress: rr.float(),
        width: Rr(rr),
        height: Rr(rr),
        colours: cr(rr),
        backgroundColour: Rr(rr)
      }
    }

    function or(rr) {
      return {
        type: rr.str(),
        action: rr.str(),
        style: Ar(rr)
      }
    }

    function br(rr) {
      const Sr = rr.index(7);
      return 0 === Sr ? {
        string: rr.str()
      } : 1 === Sr ? {
        entityName: Xr(rr)
      } : 2 === Sr ? {
        translatedText: qr(rr)
      } : 3 === Sr ? {
        styledIcon: Cr(rr)
      } : 4 === Sr ? {
        rQ: Vr(rr)
      } : 5 === Sr ? {
        styledProgressBar: Fr(rr)
      } : {
        styledKeyBinding: or(rr)
      }
    }

    function Jr(rr) {
      return rr.Zx(br)
    }
    const Dr = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function dr(rr) {
      return Dr[rr.index(5)]
    }

    function sr(rr) {
      return 0 === rr.index(2) ? null : rr.double()
    }

    function ur(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return {
          ya: sr(rr),
          Ba: rr.double(),
          Ta: rr.double(),
          va: rr.bool(),
          description: Jr(rr),
          Oa: rr.str(),
          scale: sr(rr),
          rotation: sr(rr)
        }
      }(rr)
    }

    function rS(rr) {
      return 0 === rr.index(2) ? null : rr.bool()
    }

    function SS(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return {
          la: rr.double(),
          icon: rr.str(),
          label: Jr(rr),
          Xa: rr.bool(),
          scale: sr(rr),
          rotation: sr(rr),
          Pa: rS(rr)
        }
      }(rr)
    }

    function QS(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return {
          ya: sr(rr),
          qa: rr.double(),
          Ra: rr.double(),
          ga: rr.double(),
          gravity: rr.double(),
          Ca: rr.double(),
          Ma: rr.double(),
          Ga: rr.double(),
          va: rr.bool(),
          description: Jr(rr),
          icon: Rr(rr)
        }
      }(rr)
    }

    function ZS(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return {
          speed: rr.double(),
          Aa: rr.double(),
          label: Jr(rr),
          icon: Rr(rr),
          scale: sr(rr),
          rotation: sr(rr)
        }
      }(rr)
    }

    function WS(rr) {
      return 0 === rr.index(2) ? null : rr.long()
    }

    function aS(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return {
          ia: rr.long(),
          wa: rr.double(),
          ca: rr.double(),
          Fa: WS(rr),
          label: Jr(rr),
          icon: Rr(rr)
        }
      }(rr)
    }

    function jS(rr) {
      return {
        type: dr(rr),
        progressBar: ur(rr),
        timedClick: SS(rr),
        gravityBar: QS(rr),
        precisionBar: ZS(rr),
        rhythmClick: aS(rr)
      }
    }
    const IS = ["playerGone", "rateLimited"];

    function fS(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return IS[rr.index(2)]
      }(rr)
    }

    function ES(rr) {
      return rr.float()
    }

    function pS(rr) {
      return rr.Zx(ES)
    }

    function xS(rr) {
      return 0 === rr.index(2) ? null : pS(rr)
    }

    function mS(rr) {
      return 0 === rr.index(2) ? null : Jr(rr)
    }

    function NS(rr) {
      return rr.long()
    }

    function US(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return rr.Zx(NS)
      }(rr)
    }

    function tS(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return {
          EQ: rr.str(),
          tQ: rr.long()
        }
      }(rr)
    }

    function hS(rr) {
      const Sr = rr.index(3);
      return 0 === Sr ? null : 1 === Sr ? rr.str() : qr(rr)
    }

    function zS(rr) {
      return {
        IW: rr.str(),
        fW: rr.str(),
        EW: rr.str()
      }
    }

    function YS(rr) {
      return {
        OW: rr.str(),
        LW: Rr(rr),
        lW: Rr(rr),
        XW: wr(rr)
      }
    }

    function nS(rr) {
      return rr.Zx(YS)
    }

    function eS(rr) {
      return {
        tZ: rr.str(),
        x: rr.long(),
        y: rr.long(),
        z: rr.long()
      }
    }

    function KS(rr) {
      return rr.Zx(eS)
    }

    function yS(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return {
          MZ: rr.float(),
          GZ: rr.long(),
          kZ: rr.long()
        }
      }(rr)
    }

    function BS(rr) {
      return {
        blockName: rr.str(),
        lZ: rr.bool(),
        XZ: rr.bool(),
        PZ: rr.bool(),
        HZ: rr.float(),
        qZ: rr.float(),
        RZ: rr.long(),
        gZ: yS(rr)
      }
    }

    function TS(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return rr.Zx(BS)
      }(rr)
    }

    function vS(rr) {
      return {
        vZ: rr.str(),
        OZ: TS(rr)
      }
    }

    function OS(rr) {
      return {
        blockName: rr.str(),
        frequency: rr.float()
      }
    }

    function LS(rr) {
      return rr.Zx(OS)
    }

    function lS(rr) {
      return {
        iZ: rr.str(),
        wZ: rr.str(),
        frequency: rr.float(),
        cZ: LS(rr)
      }
    }

    function XS(rr) {
      return rr.Zx(lS)
    }

    function PS(rr) {
      return {
        blockName: rr.str(),
        radius: rr.long(),
        JZ: rr.long(),
        nZ: rr.long(),
        eZ: rr.long(),
        DZ: rr.float()
      }
    }

    function HS(rr) {
      return rr.Zx(PS)
    }

    function qS(rr) {
      return {
        nZ: rr.long(),
        eZ: rr.long(),
        KZ: rr.long(),
        yZ: rr.bool(),
        BZ: vS(rr),
        AZ: XS(rr),
        oZ: HS(rr)
      }
    }

    function RS(rr) {
      return rr.Zx(qS)
    }

    function gS(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return {
          name: rr.str(),
          rW: Rr(rr)
        }
      }(rr)
    }

    function CS(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return {
          terrain: gS(rr),
          SW: HS(rr)
        }
      }(rr)
    }

    function MS(rr) {
      return 0 === rr.index(2) ? null : function(rr) {
        return {
          layers: RS(rr),
          dZ: CS(rr)
        }
      }(rr)
    }
  },
  42456: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      C: () => Br,
      E: () => Xr,
      F: () => er,
      I: () => Kr,
      K: () => hr,
      M: () => Or,
      N: () => Hr,
      P: () => Ur,
      R: () => Rr,
      T: () => Yr,
      W: () => zr,
      X: () => nr,
      _: () => yr,
      b: () => Wr,
      e: () => qr,
      g: () => Pr,
      h: () => Nr,
      l: () => tr,
      p: () => lr,
      t: () => Tr,
      w: () => Lr,
      y: () => vr
    });
    var Zr = Qr(2961);
    const Wr = {
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

    function ar(rr, Sr) {
      return !ArrayBuffer.isView(rr) || rr instanceof DataView ? Array.isArray(rr) ? rr.map((rr => Sr(rr))) : rr : Array.from(rr, (rr => Sr(rr)))
    }

    function jr(rr) {
      if ("string" !== typeof rr) return rr;
      for (let Sr = 0; Sr < rr.length; Sr++) {
        const Qr = rr.charCodeAt(Sr);
        if (Qr >= 55296 && Qr <= 57343) return fr.decode(Ir.encode(rr))
      }
      return rr
    }
    const Ir = new TextEncoder,
      fr = new TextDecoder;

    function Er(rr) {
      return rr
    }
    let pr;

    function xr(rr) {
      return null === rr || "object" !== typeof rr ? rr : [jr(rr.policy), jr(rr.jI)]
    }

    function mr(rr) {
      return null === rr || "object" !== typeof rr ? rr : [ar(rr.cW, Er), ar(rr.DI, Er)]
    }

    function Nr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.xj), jr(Sr.mj)];
      var Sr
    }

    function Ur(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [Sr.id, Sr.ap];
      var Sr
    }

    function tr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [Sr.GQ, jr(Sr.kQ), Sr.AQ, jr(Sr.wQ), Sr.bQ, Sr.JQ, Sr.fj, jr(Sr.Ej), jr(Sr.pj)];
      var Sr
    }

    function hr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [ar(Sr.WI, Er), Sr.aI];
      var Sr
    }

    function zr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [ar(Sr.Np, (rr => jr(rr))), jr(Sr.Up), Sr.tp];
      var Sr
    }

    function Yr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [ar(Sr.uI, Er), jr(Sr.rf), jr(Sr.Sf), Sr.Qf];
      var Sr
    }

    function nr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.fW), jr(Sr.EW)];
      var Sr
    }

    function er(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.II)];
      var Sr
    }

    function Kr(rr) {
      return jr(rr)
    }

    function yr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.Xp), jr(Sr.Pp), jr(Sr.policy), jr(Sr.jI), ar(Sr.Hp, (rr => jr(rr)))];
      var Sr
    }

    function Br(rr) {
      return xr(rr)
    }

    function Tr(rr) {
      return xr(rr)
    }

    function vr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.Qp)];
      var Sr
    }

    function Or(rr) {
      return rr
    }

    function Lr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.xp), jr(Sr.mp)];
      var Sr
    }

    function lr(rr) {
      return jr(rr)
    }

    function Xr(rr) {
      return mr(rr)
    }

    function Pr(rr) {
      return mr(rr)
    }

    function Hr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [jr(Sr.JE)];
      var Sr
    }

    function qr(rr) {
      return (pr ??= (0, Zr.f)().map((rr => rr.name)), pr).map((Sr => {
        return "string" === typeof(Qr = rr[Sr]) ? jr(Qr) : ar(Qr, Er);
        var Qr
      }))
    }

    function Rr(rr) {
      return null === (Sr = rr) || "object" !== typeof Sr ? Sr : [Sr.zj, Sr.Yj, Sr.nj];
      var Sr
    }
  },
  5878: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      h: () => ar
    });
    var Zr = Qr(5830);
    const Wr = "Air",
      ar = Object.freeze(new Zr.e(Wr, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40818: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      f: () => Ir
    });
    var Zr = Qr(379),
      Wr = Qr(5210);
    const ar = new Set(Wr.l),
      jr = new Map;

    function Ir(rr, Sr) {
      let Qr = jr.get(Sr);
      void 0 === Qr && (Qr = new Map, jr.set(Sr, Qr));
      let Wr = Qr.get(rr);
      return void 0 === Wr && (Wr = `${rr}${(0,Zr.z)(Sr)}`, Qr.set(rr, Wr)), Wr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);